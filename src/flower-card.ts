import { CSSResult, HTMLTemplateResult, LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { HomeAssistant, LovelaceCardEditor } from "custom-card-helpers";
import { style } from "./styles";
import {
  DisplayType,
  FlowerCardConfig,
  HomeAssistantEntity,
  PlantInfo,
} from "./types/flower-card-types";
import * as packageJson from "../package.json";
import { renderAttributes, renderBattery } from "./utils/attributes";
import {
  CARD_EDITOR_NAME,
  CARD_NAME,
  default_show_bars,
  missingImage,
} from "./utils/constants";
import { moreInfo } from "./utils/utils";

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

  private stateObj: HomeAssistantEntity | undefined;
  private previousFetchDate: number;
  // When cards like `auto-entities` inject a templated entity string
  // (eg. "{{entity}}") the card may be instantiated before interpolation.
  // Track that we've seen a templated entity so we avoid spamming debug logs.
  private templateEntityDetected = false;

  plantinfo: PlantInfo;
  set hass(hass: HomeAssistant) {
    this._hass = hass;
    this.stateObj = this.config?.entity
      ? hass.states[this.config.entity]
      : undefined;

    if (!this.previousFetchDate) {
      this.previousFetchDate = 0;
    }
    // Only fetch once every second at max.  HA is flooeded with websocket requests
    if (Date.now() > this.previousFetchDate + 1000) {
      this.previousFetchDate = Date.now();
      this.get_data(hass).then(() => {
        this.requestUpdate();
      });
    }
  }

  public static async getConfigElement(): Promise<LovelaceCardEditor> {
    await import("./editor");
    return document.createElement(CARD_EDITOR_NAME) as LovelaceCardEditor;
  }

  static getStubConfig(ha: HomeAssistant) {
    // There must be an easier way to do this
    const isPlant = (
      entity: HomeAssistantEntity | unknown,
    ): entity is HomeAssistantEntity => {
      if (
        typeof entity == "object" &&
        "entity_id" in entity &&
        typeof entity.entity_id == "string" &&
        entity.entity_id.indexOf("plant.") === 0
      ) {
        return !!entity;
      }
    };
    let supportedEntities: Array<any> = [];
    try {
      supportedEntities = Object.values(ha.states).filter(isPlant);
      // (entity) => entity.entity_id.indexOf('plant.') === 0
      // );
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

  render(): HTMLTemplateResult {
    if (!this.config || !this._hass) return html``;

    // If the configured entity contains a template marker (eg. "{{entity}}")
    // it means another component (like `auto-entities`) should interpolate
    // it. In that unresolved state we must not spam the console with repeated
    // missing-entity debug lines — show a friendly waiting message instead.
    if (this.config?.entity && this.config.entity.includes("{{")) {
      if (!this.templateEntityDetected) {
        this.templateEntityDetected = true;
        console.debug(
          "FlowerCard: entity template detected (awaiting interpolation)",
          {
            configEntity: this.config.entity,
          },
        );
      }

      return html`<hui-warning
        >Waiting for interpolated entity: ${this.config.entity}</hui-warning
      >`;
    }

    if (!this.stateObj) {
      // Debug logging to help diagnose auto-entities / grid issues where
      // the interpolated entity may not be set or not available yet.
      try {
        console.debug("FlowerCard: entity missing", {
          configEntity: this.config?.entity,
          hassHasEntity: !!(
            this._hass &&
            this.config?.entity &&
            this._hass.states[this.config.entity]
          ),
          availableState:
            this._hass && this.config?.entity
              ? this._hass.states[this.config.entity]
              : null,
        });
      } catch (e) {
        console.debug("FlowerCard: error logging entity debug", e);
      }

      return html`
        <hui-warning> Entity not available: ${this.config.entity} </hui-warning>
      `;
    }

    const species = this.stateObj.attributes.species;
    // next watering can be provided either as an attribute on the entity
    // or inside the plantinfo result (integration may provide it)
    const nextWaterAttr =
      this.stateObj.attributes.next_watering ||
      this.stateObj.attributes.next_watering_time ||
      null;
    let nextWaterFromInfo: string | null = null;
    try {
      if (
        this.plantinfo &&
        this.plantinfo.result &&
        this.plantinfo.result.next_watering
      ) {
        nextWaterFromInfo = String(this.plantinfo.result.next_watering);
      }
    } catch (e) {
      nextWaterFromInfo = null;
    }

    // Prefer dedicated watering sensor if present (sensor.<base>_watering)
    const nextWaterRawInitial = nextWaterAttr || nextWaterFromInfo;
    let nextWaterRaw = nextWaterRawInitial;
    try {
      const wateringSensor = this.findWateringSensor();
      if (
        wateringSensor &&
        wateringSensor.attributes &&
        wateringSensor.attributes.next_watering
      ) {
        nextWaterRaw = String(wateringSensor.attributes.next_watering);
      }
    } catch (e) {
      /* ignore */
    }

    const hasNextWater = !!nextWaterRaw;
    const nextWaterDisplay = hasNextWater
      ? this.formatNextWatering(nextWaterRaw)
      : "Non défini";

    // Determine watering badge state
    let wateringBadge: string | null = null;
    let wateringBadgeClass = "";
    if (nextWaterRaw) {
      const d = new Date(nextWaterRaw);
      if (!isNaN(d.getTime())) {
        const diffMs = d.getTime() - Date.now();
        const diffHours = diffMs / (1000 * 60 * 60);
        if (diffMs <= 0) {
          wateringBadge = "À arroser maintenant";
          wateringBadgeClass = "overdue";
        } else if (diffHours <= 24) {
          wateringBadge = "À arroser bientôt";
          wateringBadgeClass = "soon";
        }
      }
    }

    // presence checks to avoid rendering empty/None fields
    const hasBattery =
      !!this.config?.battery_sensor &&
      !!(
        this._hass &&
        this.config.battery_sensor &&
        this._hass.states[this.config.battery_sensor]
      );

    const hasSpecies = !!species;

    const hasImage = !!this.stateObj.attributes.entity_picture;

    const attributesPresent = (() => {
      try {
        return (
          !!this.plantinfo &&
          !!this.plantinfo.result &&
          Object.keys(this.plantinfo.result).length > 0
        );
      } catch (e) {
        return false;
      }
    })();

    const headerCssClass =
      this.config.display_type === DisplayType.Compact
        ? "header-compact"
        : "header";
    const haCardCssClass =
      this.config.display_type === DisplayType.Compact ? "" : "card-margin-top";

    return html`
      <ha-card class="${haCardCssClass}">
        <div
          class="${headerCssClass}"
          @click="${() => this._openMoreInfo(this.stateObj.entity_id)}"
        >
          ${hasImage
            ? html`<img src="${this.stateObj.attributes.entity_picture}" />`
            : ""}

          <span id="name">
            ${this.stateObj.attributes.friendly_name}
            <ha-icon
              .icon="mdi:${this.stateObj.state.toLowerCase() == "problem"
                ? "alert-circle-outline"
                : ""}"
            ></ha-icon>
          </span>

          ${hasBattery
            ? html`<span id="battery">${renderBattery(this)}</span>`
            : ""}
          ${hasSpecies ? html`<span id="species">${species}</span>` : ""}
          <span id="next-watering" class="${hasNextWater ? "" : "missing"}">
            Prochain arrosage: ${nextWaterDisplay}
          </span>
          ${wateringBadge
            ? html`<span class="watering-badge ${wateringBadgeClass}"
                >${wateringBadge}</span
              >`
            : ""}
          <button
            class="water-button"
            @click="${(e: Event) => this._handleWaterClick(e)}"
            title="Marquer comme arrosé"
          >
            <ha-icon icon="mdi:watering-can"></ha-icon>
            Arrosé
          </button>
        </div>
        ${attributesPresent
          ? html`<div class="divider"></div>
              ${renderAttributes(this)}`
          : ""}
      </ha-card>
    `;
  }

  private _openMoreInfo(entityId: string): void {
    try {
      moreInfo(this, entityId);
    } catch (e) {
      // Fail gracefully if the more-info popup can't be opened
      // This avoids uncaught exceptions originating from external components
      console.error("FlowerCard: failed to open more info", e);
    }
  }

  private async _handleWaterClick(e: Event): Promise<void> {
    e.stopPropagation();
    if (!this._hass || !this.config?.entity) return;

    try {
      // Call the plant integration's mark_watered service
      // This updates the watering sensor and resets the schedule
      await this._hass.callService("plant", "mark_watered", {
        entity_id: this.config.entity,
      });

      // Show a toast notification
      const event = new CustomEvent("hass-notification", {
        detail: {
          message: `${this.stateObj?.attributes.friendly_name || "Plante"} marquée comme arrosée`,
        },
        bubbles: true,
        composed: true,
      });
      this.dispatchEvent(event);

      // Force refresh after a short delay
      setTimeout(() => {
        this.get_data(this._hass).then(() => {
          this.requestUpdate();
        });
      }, 500);
    } catch (err) {
      console.error(
        "FlowerCard: failed to call plant.mark_watered service",
        err,
      );
      // Show error notification
      const event = new CustomEvent("hass-notification", {
        detail: {
          message: `Erreur lors de l'arrosage: ${err}`,
        },
        bubbles: true,
        composed: true,
      });
      this.dispatchEvent(event);
    }
  }

  async get_data(hass: HomeAssistant): Promise<void> {
    try {
      this.plantinfo = await hass.callWS({
        type: "plant/get_info",
        entity_id: this.config?.entity,
      });
    } catch (err) {
      this.plantinfo = { result: {} };
    }
  }

  // Format a next-watering timestamp (ISO or similar) into a human friendly
  // relative or absolute string depending on distance.
  private formatNextWatering(raw: string): string {
    try {
      const date = new Date(raw);
      if (isNaN(date.getTime())) return raw;
      const now = new Date();
      const diffMs = date.getTime() - now.getTime();
      const diffSec = Math.round(diffMs / 1000);
      const diffMin = Math.round(diffSec / 60);
      const diffHour = Math.round(diffMin / 60);
      const diffDay = Math.round(diffHour / 24);

      // use relative format for near dates
      if (
        Math.abs(diffDay) < 7 &&
        typeof Intl !== "undefined" &&
        (Intl as any).RelativeTimeFormat
      ) {
        const rtf = new (Intl as any).RelativeTimeFormat(
          this._hass?.language || navigator.language,
          { numeric: "auto" },
        );
        if (Math.abs(diffDay) >= 1) return rtf.format(diffDay, "day");
        if (Math.abs(diffHour) >= 1) return rtf.format(diffHour, "hour");
        if (Math.abs(diffMin) >= 1) return rtf.format(diffMin, "minute");
        return rtf.format(diffSec, "second");
      }

      // fallback to locale string
      return date.toLocaleString(this._hass?.language || undefined);
    } catch (e) {
      return raw;
    }
  }

  private findWateringSensor(): any {
    if (!this._hass || !this.config?.entity) return null;
    const base = this.config.entity.split(".")[1];
    if (!base) return null;
    const candidates = [
      `sensor.${base}_watering`,
      `sensor.${base}watering`,
      `sensor.${base}_water`,
      `sensor.${base}_watering_sensor`,
    ];
    for (const id of candidates) {
      const s = this._hass.states[id] as any;
      if (s && s.attributes && s.attributes.next_watering) return s;
    }
    // fallback: find any sensor with next_watering and matching friendly name or id
    const baseNorm = base.replace(/[_-]/g, " ").toLowerCase();
    for (const [id, st] of Object.entries(this._hass.states)) {
      if (!id.startsWith("sensor.")) continue;
      const s: any = st;
      if (s && s.attributes && s.attributes.next_watering) {
        const fname = (s.attributes.friendly_name || "").toLowerCase();
        if (fname.includes(baseNorm) || id.includes(base)) return s;
      }
    }
    return null;
  }

  getCardSize(): number {
    return 5;
  }

  static get styles(): CSSResult {
    return style;
  }
}
