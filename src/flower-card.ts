import { CSSResult, HTMLTemplateResult, LitElement, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { HomeAssistant } from "custom-card-helpers";
import { style } from "./styles";
import {
  DisplayType,
  FlowerCardConfig,
  HomeAssistantEntity,
  PlantInfo,
} from "./types/flower-card-types";
import * as packageJson from "../package.json";
import {
  renderAttributes,
  renderBattery,
  renderExtraBadges,
  renderWateringStatus,
  renderCareIcons,
} from "./utils/attributes";
import {
  CARD_NAME,
  default_show_bars,
  missingImage,
  plantAttributes,
} from "./utils/constants";
import { calculate_next_watering } from "./utils/watering";
import { isMediaSourceUrl, moreInfo, resolveMediaSource } from "./utils/utils";

console.info(
  `%c FLOWER-CARD %c ${packageJson.version}`,
  "color: cyan; background: black; font-weight: bold;",
  "color: darkblue; background: white; font-weight: bold;",
);

/* eslint-disable @typescript-eslint/no-explicit-any */
(window as any).customCards = (window as any).customCards || [];
(window as any).customCards.push({
  type: CARD_NAME,
  name: "Flower card",
  preview: true,
  description:
    "Custom flower card for https://github.com/Olen/homeassistant-plant",
});
/* eslint-disable @typescript-eslint/no-explicit-any */

@customElement(CARD_NAME)
export default class FlowerCard extends LitElement {
  @property() _hass?: any;
  @property() config?: FlowerCardConfig;

  @state() private _showInfo = false;

  public stateObj: HomeAssistantEntity | undefined;
  private previousFetchDate: number;
  private _lastEntityPicture: string | undefined;
  private _resolvedImageUrl: string | undefined;

  plantinfo: PlantInfo;

  connectedCallback() {
    super.connectedCallback();
    // Inject fonts into document head for reliable loading
    if (!document.getElementById("flower-card-fonts")) {
      const link = document.createElement("link");
      link.id = "flower-card-fonts";
      link.rel = "stylesheet";
      link.href =
        "https://fonts.googleapis.com/css2?family=Indie+Flower&family=Patrick+Hand&display=swap";
      document.head.appendChild(link);
    }
  }

  set hass(hass: HomeAssistant) {
    this._hass = hass;
    this.stateObj = this.config?.entity
      ? hass.states[this.config.entity]
      : undefined;

    // Check if entity_picture changed and needs resolution
    const entityPicture = this.stateObj?.attributes.entity_picture;
    if (entityPicture !== this._lastEntityPicture) {
      this._lastEntityPicture = entityPicture;
      this._resolveEntityPicture(hass, entityPicture);
    }

    if (!this.previousFetchDate) {
      this.previousFetchDate = 0;
    }
    // Only fetch once every second at max. HA is flooded with websocket requests
    if (Date.now() > this.previousFetchDate + 1000) {
      this.previousFetchDate = Date.now();
      this.get_data(hass)
        .then(() => {
          this.requestUpdate();
        })
        .catch(() => {
          /* Fallback handled in get_data */
        });
    }
  }

  private async _resolveEntityPicture(
    hass: HomeAssistant,
    entityPicture: string | undefined,
  ): Promise<void> {
    if (!entityPicture) {
      this._resolvedImageUrl = undefined;
      return;
    }

    if (isMediaSourceUrl(entityPicture)) {
      this._resolvedImageUrl = await resolveMediaSource(hass, entityPicture);
      this.requestUpdate();
    } else {
      this._resolvedImageUrl = entityPicture;
    }
  }

  static getConfigForm() {
    return {
      schema: [
        {
          name: "entity",
          required: true,
          selector: { entity: { domain: "plant" } },
        },
        {
          name: "name",
          selector: { text: {} },
        },
        {
          name: "battery_sensor",
          selector: { entity: { domain: "sensor", device_class: "battery" } },
        },
        {
          name: "temperature_sensor",
          selector: {
            entity: { domain: "sensor", device_class: "temperature" },
          },
        },
        {
          name: "humidity_sensor",
          selector: { entity: { domain: "sensor", device_class: "humidity" } },
        },
        {
          name: "weather_entity",
          selector: { entity: { domain: "weather" } },
        },
        {
          type: "expandable",
          name: "",
          title: "Bars",
          schema: [
            {
              name: "show_bars",
              selector: {
                select: {
                  multiple: true,
                  options: plantAttributes,
                },
              },
            },
          ],
        },
        {
          type: "expandable",
          name: "",
          title: "Appearance",
          schema: [
            {
              name: "display_type",
              selector: {
                select: {
                  options: [
                    { value: "full", label: "Full" },
                    { value: "compact", label: "Compact" },
                  ],
                },
              },
            },
            {
              name: "hide_species",
              selector: { boolean: {} },
            },
            {
              name: "hide_image",
              selector: { boolean: {} },
            },
            {
              name: "hide_units",
              selector: { boolean: {} },
            },
            {
              name: "is_outside",
              selector: { boolean: {} },
            },
          ],
        },
      ],
      computeLabel: (schema: { name: string }) => {
        const labels: Record<string, string> = {
          entity: "Entity",
          name: "Display Name",
          display_type: "Display Type",
          battery_sensor: "Battery Sensor",
          temperature_sensor: "Room Temperature (Override)",
          humidity_sensor: "Room Humidity (Override)",
          weather_entity: "Weather Entity (Override)",
          show_bars: "Show Bars",
          hide_species: "Hide Species",
          hide_image: "Hide Image",
          hide_units: "Hide Units",
          is_outside: "Is Outside?",
        };
        return labels[schema.name] || schema.name;
      },
    };
  }

  static getStubConfig(ha: HomeAssistant) {
    const isPlant = (entity: unknown): entity is HomeAssistantEntity => {
      return (
        typeof entity === "object" &&
        entity !== null &&
        "entity_id" in entity &&
        typeof (entity as HomeAssistantEntity).entity_id === "string" &&
        (entity as HomeAssistantEntity).entity_id.startsWith("plant.")
      );
    };
    let supportedEntities: HomeAssistantEntity[] = [];
    try {
      supportedEntities = Object.values(ha.states).filter(isPlant);
    } catch (e) {
      console.info(`Unable to get ha-data: ${e}`);
    }
    const entity =
      supportedEntities.length > 0
        ? supportedEntities[0].entity_id
        : "plant.my_plant";

    return {
      entity: entity,
      battery_sensor: "sensor.myflower_battery",
      show_bars: default_show_bars,
    };
  }

  setConfig(config: FlowerCardConfig): void {
    if (!config.entity) {
      throw new Error("You need to define an entity");
    }

    this.config = config;
  }

  private _markWatered(ev: Event): void {
    ev.stopPropagation();
    this._hass.callService("plant", "watered", {
      entity_id: this.config?.entity,
    });
  }

  private _markSkipped(ev: Event): void {
    ev.stopPropagation();
    this._hass.callService("plant", "skip_watering", {
      entity_id: this.config?.entity,
    });
  }

  private _toggleSort(ev: Event): void {
    ev.stopPropagation();
    if (this.config?.sort_entity) {
      this._hass.callService("input_select", "select_next", {
        entity_id: this.config.sort_entity,
      });
    }
  }

  private _toggleInfo(ev: Event): void {
    ev.stopPropagation();
    this._showInfo = !this._showInfo;
  }

  private async _removePlant(ev: Event): Promise<void> {
    ev.stopPropagation();
    const displayName =
      this.config?.name || this.stateObj?.attributes?.friendly_name;

    const confirmed = window.confirm(
      `Êtes-vous sûr de vouloir supprimer définitivement la plante "${displayName}" ?\n\nCette action supprimera l'intégration et toutes les données associées.`,
    );

    if (confirmed) {
      await this._hass.callService("plant", "remove_plant", {
        entity_id: this.config?.entity,
      });
    }
  }

  private _renderPlantInfoPanel(): HTMLTemplateResult {
    if (!this._showInfo) return html``;

    const result = this.plantinfo?.result || {};
    const attr = this.stateObj.attributes;
    const items = [
      {
        label: "Plant-ID (PID)",
        value: result.pid || result.display_pid || attr.pid || attr.plant_id,
      },
      {
        label: "Scientific name",
        value:
          result.scientific_name ||
          result.species ||
          attr.species ||
          attr.scientific_name,
      },
      {
        label: "Category",
        value:
          result.category ||
          attr.category ||
          attr.plant_category ||
          result.plant_type ||
          attr.plant_type ||
          result.type ||
          attr.type,
      },
      {
        label: "Origin",
        value: (() => {
          const originVal =
            result.origin ||
            result.origins ||
            attr.origin ||
            attr.origins ||
            attr.plant_origin ||
            result.native_location ||
            attr.native_location ||
            result.native_distribution ||
            attr.native_distribution ||
            result.native_range ||
            attr.native_range ||
            result.distribution ||
            attr.distribution ||
            result.native_region ||
            attr.native_region;
          return Array.isArray(originVal) ? originVal.join(", ") : originVal;
        })(),
      },
      {
        label: "Common names",
        value: (() => {
          const names = result.common_names || attr.common_name;
          if (Array.isArray(names)) {
            return names
              .map((n) => (typeof n === "object" ? n.name : n))
              .join(", ");
          }
          return (
            names || result.alias || result.friendly_name || attr.friendly_name
          );
        })(),
      },
    ].filter(
      (item) =>
        item.value !== undefined && item.value !== null && item.value !== "",
    );

    return html`
      <div class="plant-info-panel">
        <div class="panel-header">
          <span>Plant Details</span>
          <div class="panel-actions">
            <ha-icon
              class="delete-button"
              icon="mdi:delete-outline"
              @click="${this._removePlant}"
              title="Supprimer la plante"
            ></ha-icon>
            <ha-icon icon="mdi:close" @click="${this._toggleInfo}"></ha-icon>
          </div>
        </div>
        ${items.length > 0
          ? html`
              <div class="panel-content">
                ${items.map(
                  (item) => html`
                    <div class="info-item">
                      <span class="info-label">${item.label}</span>
                      <span class="info-value">${item.value}</span>
                    </div>
                  `,
                )}
              </div>
            `
          : ""}
      </div>
    `;
  }

  render(): HTMLTemplateResult {
    if (!this.config || !this._hass) return html``;

    if (!this.stateObj) {
      return html`
        <hui-warning> Entity not available: ${this.config.entity} </hui-warning>
      `;
    }

    const species = this.stateObj.attributes.species;
    const entityId = this.config.entity!;

    // Robust area lookup
    let areaName: string | null = null;
    if (this._hass) {
      const entityRegistry = this._hass.entities
        ? this._hass.entities[entityId]
        : null;
      if (entityRegistry) {
        let areaId = entityRegistry.area_id;
        if (!areaId && entityRegistry.device_id && this._hass.devices) {
          areaId = this._hass.devices[entityRegistry.device_id]?.area_id;
        }
        if (areaId && this._hass.areas) {
          areaName = this._hass.areas[areaId]?.name || null;
        }
      }
    }
    const area = areaName || this.stateObj.attributes.area || null;

    const displayName =
      this.config.name || this.stateObj.attributes.friendly_name;
    const hideSpecies = this.config.hide_species ?? false;
    const hideImage = this.config.hide_image ?? false;
    const headerCssClass =
      this.config.display_type === DisplayType.Compact
        ? "header-compact"
        : "header";
    const haCardCssClass =
      this.config.display_type === DisplayType.Compact || hideImage
        ? ""
        : "card-margin-top";
    const noImageClass = hideImage ? " no-image" : "";

    // Dynamic Shadow Logic (3D Shadow based on time of day)
    const now = new Date();
    const hour = now.getHours() + now.getMinutes() / 60;
    // Map hour (0-24) to shadow angle (-60 to 60 degrees)
    // 12:00 = 0deg (straight down), 6:00 = -60deg, 18:00 = 60deg
    const angleAdjustment = (hour - 12) * 10;
    const isNight = hour < 6 || hour > 20;

    // Get current light level for shadow opacity
    const illuminance =
      (this.plantinfo?.result as any)?.illuminance?.current ||
      (this.plantinfo?.result as any)?.brightness?.current ||
      500; // Default to medium light
    const opacity = isNight ? 0.05 : Math.min(0.4, illuminance / 2000 + 0.1);

    const shadowStyle = `
      filter: drop-shadow(${angleAdjustment}px 10px 8px rgba(0,0,0,${opacity}));
      transform: perspective(1000px) rotateX(5deg) rotateY(${angleAdjustment / 5}deg);
    `;

    const nextWateringValue =
      this.stateObj.attributes.next_watering ||
      this.plantinfo?.result?.next_watering ||
      (this.plantinfo
        ? calculate_next_watering(this._hass, this.config, this.plantinfo)
        : "Calculating...");

    const days = parseInt(String(nextWateringValue));
    let wateringClass = "watering-safe";
    if (isNaN(days) || days <= 0) {
      wateringClass = "watering-urgent";
    } else if (days === 1) {
      wateringClass = "watering-warning";
    }

    const wateringExplanation = this.stateObj.attributes.watering_explanation;

    return html`
      <ha-card class="${haCardCssClass}">
        <div
          class="${headerCssClass}${noImageClass}"
          @click="${() => moreInfo(this, this.stateObj.entity_id)}"
        >
          ${!hideImage
            ? html`
                <div class="plant-image-container" style="${shadowStyle}">
                  <img src="${this._resolvedImageUrl || missingImage}" />
                </div>
              `
            : ""}
          <div class="header-text">
            <div class="header-header">
              <div class="name-area-container">
                <span id="name">
                  <span class="name-text">${displayName}</span>
                  <ha-icon
                    class="info-button"
                    icon="mdi:information-outline"
                    @click="${this._toggleInfo}"
                    title="Plant Information"
                  ></ha-icon>
                  <ha-icon
                    .icon="mdi:${this.stateObj.state.toLowerCase() == "problem"
                      ? "alert-circle-outline"
                      : ""}"
                  ></ha-icon>
                </span>
                <span id="area">${area || html`&nbsp;`}</span>
                ${!hideSpecies
                  ? html`<span id="species">${species || html`&nbsp;`}</span>`
                  : ""}
              </div>
              <span id="battery"
                >${renderExtraBadges(this)}${renderBattery(
                  this,
                )}${renderCareIcons(this)}</span
              >
            </div>
            <div id="next-watering" class="${wateringClass} tooltip">
              <span>${nextWateringValue}</span>
              ${(() => {
                const factor =
                  this.stateObj.attributes.water_factor ||
                  this.stateObj.attributes.watering?.water_factor ||
                  this.plantinfo?.result?.watering?.water_factor;
                if (factor && factor !== 1.0) {
                  return html`<span class="multiplier"
                    >${factor.toFixed(2)}x</span
                  >`;
                }
                return html``;
              })()}
              ${wateringExplanation
                ? html`<span class="tip">${wateringExplanation}</span>`
                : ""}
              <ha-icon
                class="water-button"
                icon="mdi:water-pump"
                @click="${(e: Event) => this._markWatered(e)}"
                title="Mark as watered"
              ></ha-icon>
              <ha-icon
                class="skip-button"
                icon="mdi:water-off"
                @click="${(e: Event) => this._markSkipped(e)}"
                title="Skip this watering"
              ></ha-icon>
              ${this.config?.sort_entity
                ? html`
                    <ha-icon
                      class="sort-button"
                      icon="mdi:sort"
                      @click="${(e: Event) => this._toggleSort(e)}"
                      title="Changer l'ordre de tri"
                    ></ha-icon>
                  `
                : ""}
            </div>
          </div>
        </div>
        ${renderWateringStatus(this)}
        <div class="divider"></div>
        ${renderAttributes(this)} ${this._renderPlantInfoPanel()}
      </ha-card>
    `;
  }

  async get_data(hass: HomeAssistant): Promise<void> {
    if (!hass || !hass.connected) return;
    try {
      this.plantinfo = await hass.callWS({
        type: "plant/get_info",
        entity_id: this.config?.entity,
      });
      // If thresholds are missing but species is known, try fetching OpenPlantbook
      // to provide species preference fallbacks for the care icons.
      const result = (this.plantinfo?.result as any) || {};
      const hasLightLimits = !!(
        result.illuminance?.min !== undefined || result.dli?.min !== undefined
      );
      const hasMoistureLimits = !!(result.moisture?.min !== undefined);
      const species = this.stateObj?.attributes?.species;
      if (
        species &&
        (!hasLightLimits || !hasMoistureLimits) &&
        hass.callService
      ) {
        try {
          // Call the OpenPlantbook service (if available) to get species prefs
          // Note: service may not exist in all setups — it's safe to catch.
          // Service name and payload follow the plant helper conventions.
          // Using non-blocking call but await result if possible via callService return.
          // Some HA frontends don't return a promise with response; wrap in try/catch.
          // Use a short timeout by not awaiting long-running operations.
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          const opb = await hass.callService(
            "openplantbook",
            "get",
            {
              species: species,
            },
            {
              return_response: true,
            },
          );
          if (opb) {
            // Map common OPB keys to simple min/max entries so renderCareIcons can use them
            const opbPlant: any = opb;
            // Illuminance mapping keys used by the component
            const min_lx =
              opbPlant.min_light_lux ?? opbPlant.min_illuminance ?? null;
            const max_lx =
              opbPlant.max_light_lux ?? opbPlant.max_illuminance ?? null;
            if (!result.illuminance && (min_lx !== null || max_lx !== null)) {
              result.illuminance = {
                min: min_lx,
                max: max_lx,
                unit_of_measurement: "lx",
              };
            }
            // Moisture mapping
            const min_m =
              opbPlant.min_soil_moist ?? opbPlant.min_soil_moisture ?? null;
            const max_m =
              opbPlant.max_soil_moist ?? opbPlant.max_soil_moisture ?? null;
            if (!result.moisture && (min_m !== null || max_m !== null)) {
              result.moisture = {
                min: min_m,
                max: max_m,
                unit_of_measurement: "%",
              };
            }
            this.plantinfo.result = result;
          } else {
            // If opb is null, it means the service call returned nothing
            // We can check if response_data is nested (depends on HA version)
            // but usually return_response: true handles it.
          }
        } catch (e) {
          // If we are here, likely the service call failed or service doesn't exist
          // Check if we can get it from attributes if the HA integration already fetched it
          const attr = this.stateObj?.attributes;
          if (attr) {
            if (
              !result.moisture &&
              (attr.min_moisture !== undefined ||
                attr.min_soil_moisture !== undefined)
            ) {
              result.moisture = {
                min: attr.min_moisture ?? attr.min_soil_moisture,
                max: attr.max_moisture ?? attr.max_soil_moisture,
                unit_of_measurement: "%",
              };
            }
            if (
              !result.illuminance &&
              (attr.min_illuminance !== undefined ||
                attr.min_light_lux !== undefined)
            ) {
              result.illuminance = {
                min: attr.min_illuminance ?? attr.min_light_lux,
                max: attr.max_illuminance ?? attr.max_light_lux,
                unit_of_measurement: "lx",
              };
            }
            this.plantinfo.result = result;
          }
        }
      } else if (this.stateObj?.attributes) {
        // Fallback for when species is known but callService is not available/used
        const attr = this.stateObj.attributes;
        if (
          !result.moisture &&
          (attr.min_moisture !== undefined ||
            attr.min_soil_moisture !== undefined)
        ) {
          result.moisture = {
            min: attr.min_moisture ?? attr.min_soil_moisture,
            max: attr.max_moisture ?? attr.max_soil_moisture,
            unit_of_measurement: "%",
          };
        }
        if (
          !result.illuminance &&
          (attr.min_illuminance !== undefined ||
            attr.min_light_lux !== undefined)
        ) {
          result.illuminance = {
            min: attr.min_illuminance ?? attr.min_light_lux,
            max: attr.max_illuminance ?? attr.max_light_lux,
            unit_of_measurement: "lx",
          };
        }
        this.plantinfo.result = result;
      }
    } catch {
      this.plantinfo = { result: {} };
    }
  }

  getCardSize(): number {
    return 5;
  }

  static get styles(): CSSResult {
    return style;
  }
}
