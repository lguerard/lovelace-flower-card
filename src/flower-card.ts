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

    if (!this.stateObj) {
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

    const nextWaterDisplay = nextWaterRaw
      ? this.formatNextWatering(nextWaterRaw)
      : null;

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
          @click="${() => moreInfo(this, this.stateObj.entity_id)}"
        >
          <img
            src="${this.stateObj.attributes.entity_picture
              ? this.stateObj.attributes.entity_picture
              : missingImage}"
          />
          <span id="name">
            ${this.stateObj.attributes.friendly_name}
            <ha-icon
              .icon="mdi:${this.stateObj.state.toLowerCase() == "problem"
                ? "alert-circle-outline"
                : ""}"
            ></ha-icon>
          </span>
          <span id="battery">${renderBattery(this)}</span>
          <span id="species">${species} </span>
          ${nextWaterDisplay
            ? html`<span id="next-watering"
                >Prochain arrosage: ${nextWaterDisplay}</span
              >`
            : ""}
          ${wateringBadge
            ? html`<span class="watering-badge ${wateringBadgeClass}"
                >${wateringBadge}</span
              >`
            : ""}
        </div>
        <div class="divider"></div>
        ${renderAttributes(this)}
      </ha-card>
    `;
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
