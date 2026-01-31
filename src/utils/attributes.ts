import {
  DisplayType,
  DisplayedAttribute,
  DisplayedAttributes,
  ExtraBadge,
  Limits,
} from "../types/flower-card-types";
import { TemplateResult, html } from "lit";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { default_show_bars } from "./constants";
import { moreInfo } from "./utils";
import FlowerCard from "../flower-card";

/**
 * Check if a unit indicates PPFD (not lux).
 * Covers: µmol/s⋅m², μmol/s⋅m², mol/s⋅m², etc.
 */
export const isPpfdUnit = (unit: string | undefined | null): boolean => {
  if (!unit) return false;
  const lowerUnit = unit.toLowerCase();
  return lowerUnit.includes("mol");
};

export const renderBattery = (card: FlowerCard) => {
  if (!card.config.battery_sensor) return html``;

  const battery_sensor = card._hass.states[card.config.battery_sensor];
  if (!battery_sensor) return html``;

  const state = parseInt(battery_sensor.state);

  const levels = [
    { threshold: 90, icon: "mdi:battery", color: "green" },
    { threshold: 80, icon: "mdi:battery-90", color: "green" },
    { threshold: 70, icon: "mdi:battery-80", color: "green" },
    { threshold: 60, icon: "mdi:battery-70", color: "green" },
    { threshold: 50, icon: "mdi:battery-60", color: "green" },
    { threshold: 40, icon: "mdi:battery-50", color: "green" },
    { threshold: 30, icon: "mdi:battery-40", color: "orange" },
    { threshold: 20, icon: "mdi:battery-30", color: "orange" },
    { threshold: 10, icon: "mdi:battery-20", color: "red" },
    { threshold: 0, icon: "mdi:battery-10", color: "red" },
    {
      threshold: -Infinity,
      icon: "mdi:battery-alert-variant-outline",
      color: "red",
    },
  ];

  const { icon, color } = levels.find(({ threshold }) => state > threshold) || {
    icon: "mdi:battery-alert-variant-outline",
    color: "red",
  };

  return html`
    <div
      class="battery tooltip"
      @click="${(e: Event) => {
        e.stopPropagation();
        moreInfo(card, card.config.battery_sensor);
      }}"
    >
      <div class="tip" style="text-align:center;">${state}%</div>
      <ha-icon .icon="${icon}" style="color: ${color}"></ha-icon>
    </div>
  `;
};

export const renderExtraBadge = (card: FlowerCard, badge: ExtraBadge) => {
  // Handle static text badge
  if (badge.text) {
    const hideIcon = badge.icon?.toLowerCase() === "none";
    const color = badge.color || "var(--secondary-text-color)";

    // If icon is "none" and show_state is true, show text only (no icon space)
    if (hideIcon && badge.show_state) {
      return html`
        <div class="extra-badge tooltip">
          <div class="tip" style="text-align:center;">${badge.text}</div>
          <span class="badge-text" style="color: ${color}">${badge.text}</span>
        </div>
      `;
    }

    const icon = hideIcon ? "" : badge.icon || "mdi:information";
    return html`
      <div class="extra-badge tooltip">
        <div class="tip" style="text-align:center;">${badge.text}</div>
        ${!hideIcon
          ? html`<ha-icon .icon="${icon}" style="color: ${color}"></ha-icon>`
          : ""}
        ${badge.show_state
          ? html`<span class="badge-text">${badge.text}</span>`
          : ""}
      </div>
    `;
  }

  // Handle icon-only badge (no entity, no text)
  if (!badge.entity && badge.icon) {
    const color = badge.color || "var(--secondary-text-color)";
    return html`
      <div class="extra-badge">
        <ha-icon .icon="${badge.icon}" style="color: ${color}"></ha-icon>
      </div>
    `;
  }

  // Handle entity-based badge
  if (!badge.entity) return html``;

  const entity = card._hass.states[badge.entity];
  if (!entity) return html``;

  const isBinarySensor = badge.entity.startsWith("binary_sensor.");
  const state = entity.state;
  const friendlyName = entity.attributes.friendly_name || badge.entity;

  // Determine icon - use provided icon, entity's custom icon, or derive from device_class
  let icon = badge.icon || entity.attributes.icon;
  if (!icon) {
    if (isBinarySensor) {
      // Default icons based on device_class for binary sensors
      const deviceClass = entity.attributes.device_class;
      const isOn = state === "on";
      const binaryIcons: Record<string, [string, string]> = {
        battery: ["mdi:battery", "mdi:battery-outline"],
        battery_charging: ["mdi:battery-charging", "mdi:battery"],
        cold: ["mdi:snowflake", "mdi:snowflake-off"],
        connectivity: [
          "mdi:check-network-outline",
          "mdi:close-network-outline",
        ],
        door: ["mdi:door-open", "mdi:door-closed"],
        garage_door: ["mdi:garage-open", "mdi:garage"],
        gas: ["mdi:alert-circle", "mdi:check-circle"],
        heat: ["mdi:fire", "mdi:fire-off"],
        light: ["mdi:brightness-7", "mdi:brightness-5"],
        lock: ["mdi:lock-open", "mdi:lock"],
        moisture: ["mdi:water", "mdi:water-off"],
        motion: ["mdi:motion-sensor", "mdi:motion-sensor-off"],
        moving: ["mdi:motion", "mdi:motion-off"],
        occupancy: ["mdi:home", "mdi:home-outline"],
        opening: ["mdi:square-outline", "mdi:square"],
        plug: ["mdi:power-plug", "mdi:power-plug-off"],
        power: ["mdi:power", "mdi:power-off"],
        presence: ["mdi:home", "mdi:home-outline"],
        problem: ["mdi:alert-circle", "mdi:check-circle"],
        running: ["mdi:play", "mdi:stop"],
        safety: ["mdi:alert-circle", "mdi:check-circle"],
        smoke: ["mdi:smoke-detector-alert", "mdi:smoke-detector"],
        sound: ["mdi:music-note", "mdi:music-note-off"],
        tamper: ["mdi:alert-circle", "mdi:check-circle"],
        update: ["mdi:package-up", "mdi:package"],
        vibration: ["mdi:vibrate", "mdi:vibrate-off"],
        window: ["mdi:window-open", "mdi:window-closed"],
      };
      if (deviceClass && binaryIcons[deviceClass]) {
        icon = isOn ? binaryIcons[deviceClass][0] : binaryIcons[deviceClass][1];
      } else {
        icon = isOn
          ? "mdi:checkbox-marked-circle"
          : "mdi:checkbox-blank-circle-outline";
      }
    } else {
      icon = "mdi:information";
    }
  }

  // Determine color based on entity type
  let color: string;
  if (isBinarySensor && !badge.attribute) {
    const isOn = state === "on";
    color = isOn
      ? badge.color_on || "var(--primary-color)"
      : badge.color_off || "var(--disabled-text-color)";
  } else {
    color = badge.color || "var(--secondary-text-color)";
  }

  // Get display value - either attribute or state
  let displayValue: string;
  let tooltipLabel: string;

  if (badge.attribute) {
    // Handle attribute display
    const attrValue = entity.attributes[badge.attribute];
    tooltipLabel = badge.attribute;

    if (attrValue === undefined || attrValue === null) {
      displayValue = "N/A";
    } else if (
      badge.attribute === "last_changed" ||
      badge.attribute === "last_updated"
    ) {
      // Format date/time attributes from entity root (not attributes object)
      const dateValue =
        badge.attribute === "last_changed"
          ? entity.last_changed
          : entity.last_updated;
      if (dateValue) {
        const date = new Date(dateValue);
        displayValue = date.toLocaleString();
      } else {
        displayValue = String(attrValue);
      }
    } else {
      // Use formatEntityAttributeValue if available, otherwise stringify
      if (card._hass.formatEntityAttributeValue) {
        displayValue = card._hass.formatEntityAttributeValue(
          entity,
          badge.attribute,
        );
      } else {
        displayValue = String(attrValue);
      }
    }
  } else {
    // Handle state display
    tooltipLabel = friendlyName;
    displayValue = isBinarySensor
      ? state
      : card._hass.formatEntityState(entity);
  }

  // Build tooltip text
  const tooltipText = `${tooltipLabel}: ${displayValue}`;

  return html`
    <div
      class="extra-badge tooltip"
      @click="${(e: Event) => {
        e.stopPropagation();
        moreInfo(card, badge.entity);
      }}"
    >
      <div class="tip" style="text-align:center;">${tooltipText}</div>
      <ha-icon .icon="${icon}" style="color: ${color}"></ha-icon>
      ${badge.show_state
        ? html`<span class="badge-text">${displayValue}</span>`
        : ""}
    </div>
  `;
};

export const renderExtraBadges = (card: FlowerCard) => {
  if (!card.config.extra_badges || card.config.extra_badges.length === 0) {
    return html``;
  }

  return card.config.extra_badges.map((badge) => renderExtraBadge(card, badge));
};

/** Render the plant attributes as a list of bars or values.
 *
 * Parameters:
 * card (FlowerCard):
 *     The flower card instance containing configuration and state.
 * available_attributes (string[]):
 *     List of attributes provided by the plant entity.
 *
 * Returns:
 * TemplateResult[]:
 *     An array of Lit templates for the monitored attributes.
 */
export const renderAttributes = (card: FlowerCard): TemplateResult[] => {
  const displayed: DisplayedAttributes = {};
  const monitored = card.config.show_bars || default_show_bars;

  if (card.plantinfo && card.plantinfo.result) {
    const result = card.plantinfo.result;
    for (const elem of monitored) {
      const attr = result[elem];
      let sensorId = attr?.sensor;

      // Fallback for temperature and humidity if plant entity doesn't have it
      if (
        (!sensorId || card._hass.states[sensorId]?.state === "unknown") &&
        elem === "temperature"
      ) {
        sensorId = card.config.temperature_sensor || result.room_temperature;
      }
      if (
        (!sensorId || card._hass.states[sensorId]?.state === "unknown") &&
        elem === "humidity"
      ) {
        sensorId = card.config.humidity_sensor || result.room_humidity;
      }

      const entityState = sensorId ? card._hass.states[sensorId] : undefined;

      // Decide if we should show this attribute
      const hasValidSensor =
        entityState &&
        entityState.state !== "unknown" &&
        entityState.state !== "unavailable" &&
        entityState.state !== "none";

      const isExplicit =
        card.config.show_bars && card.config.show_bars.includes(elem);

      // If no sensor and not explicitly requested, skip it
      if (!hasValidSensor && !isExplicit) {
        continue;
      }

      // Hide DLI if there's no light sensor (unless explicitly requested)
      if (elem === "dli" && !isExplicit) {
        const illuSensor =
          result["illuminance"]?.sensor || result["brightness"]?.sensor;
        if (
          !illuSensor ||
          card._hass.states[illuSensor]?.state === "unknown" ||
          card._hass.states[illuSensor]?.state === "unavailable"
        ) {
          continue;
        }
      }

      if (attr || sensorId) {
        const current = hasValidSensor
          ? Number(entityState.state)
          : attr?.current || 0;
        const display_state = hasValidSensor
          ? card._hass.formatEntityState(entityState).replace(/[^\d,.+-]/g, "")
          : String(current);
        const unit_of_measurement =
          entityState?.attributes?.unit_of_measurement ||
          attr?.unit_of_measurement ||
          "";

        const min = attr?.min !== undefined ? attr.min : null;
        const max = attr?.max !== undefined ? attr.max : null;
        const limits: Limits = {
          max: max !== null ? Number(max) : null,
          min: min !== null ? Number(min) : null,
        };

        displayed[elem] = {
          name: elem,
          current: Number(current),
          limits,
          icon: String(
            attr?.icon ||
              (elem === "temperature"
                ? "mdi:thermometer"
                : "mdi:water-percent"),
          ),
          sensor: String(sensorId || ""),
          unit_of_measurement: String(unit_of_measurement),
          display_state,
        };
      }
    }
  }

  return renderAttributeChunks(card, displayed);
};

/** Render a single plant attribute, optionally as a bar or just a value.
 *
 * Parameters:
 * card (FlowerCard):
 *     The flower card instance.
 * attr (DisplayedAttribute):
 *     The attribute data to render.
 *
 * Returns:
 * TemplateResult:
 *     A Lit template for the attribute, with bars for moisture/light and values for temp/humidity.
 */
export const renderAttribute = (card: FlowerCard, attr: DisplayedAttribute) => {
  const { max, min } = attr.limits;
  const unitTooltip = attr.unit_of_measurement;
  const logScale = attr.unit_of_measurement === "lx";
  const icon = attr.icon || "mdi:help-circle-outline";
  const val = attr.current ?? 0;
  const aval = !isNaN(val) && val !== null && val !== undefined;
  const hasLimits =
    max !== null &&
    min !== null &&
    !isNaN(max) &&
    !isNaN(min) &&
    max !== undefined &&
    min !== undefined;
  const display_val = attr.display_state;

  const isProblem = aval && hasLimits && (val < min || val > max);
  const color = isProblem
    ? "var(--label-badge-red)"
    : "var(--label-badge-green)";

  // For log scale, use linear if value or min is 0 (log(0) is undefined)
  const useLinear = !logScale || val <= 0 || min <= 0 || !hasLimits;
  const pct = useLinear
    ? hasLimits
      ? 100 * Math.max(0, Math.min(1, (val - min) / (max - min)))
      : 0
    : 100 *
      Math.max(
        0,
        Math.min(
          1,
          (Math.log(val) - Math.log(min)) / (Math.log(max) - Math.log(min)),
        ),
      );

  // Simple label/tooltip info
  const label =
    attr.name === "dli" || attr.name === "dli_24h"
      ? '<math style="display: inline-grid;" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mfrac><mrow><mn>mol</mn></mrow><mrow><mn>d</mn><mn>⋅</mn><msup><mn>m</mn><mn>2</mn></msup></mrow></mfrac></mrow></math>'
      : unitTooltip;

  const isCompact = card.config.display_type === DisplayType.Compact;
  const barsPerRow = card.config.bars_per_row ?? (isCompact ? 1 : 2);
  const showUnits = !(card.config.hide_units ?? isCompact);
  const useFullWidth = barsPerRow === 1;

  const attributeCssClass = `attribute tooltip ${useFullWidth ? "width-100" : ""}`;

  const isTempOrHum = attr.name === "temperature" || attr.name === "humidity";

  return html`
    <div
      class="${attributeCssClass}"
      @click="${() => moreInfo(card, attr.sensor)}"
    >
      <div class="tip" style="text-align:center;">
        ${attr.name}: ${display_val} ${unitTooltip}
        ${hasLimits ? html`<br />(${min} - ${max})` : ""}
      </div>
      <ha-icon
        .icon="${icon}"
        style="color: ${isTempOrHum && hasLimits ? color : "inherit"}"
      ></ha-icon>
      ${!isTempOrHum && hasLimits
        ? html`
            <div class="meter-container">
              <div
                class="meter-bar"
                style="width: ${aval
                  ? pct
                  : 0}%; background-color: var(--label-badge-green);"
              ></div>
            </div>
          `
        : ""}
      ${showUnits || isTempOrHum
        ? html`<div
            class="header"
            style="${isTempOrHum ? "flex-grow: 1;" : ""}"
          >
            <span
              class="value"
              style="${isTempOrHum && hasLimits ? `color: ${color}` : ""}"
              >${display_val}</span
            >${showUnits
              ? html` <span class="unit">${unsafeHTML(label)}</span>`
              : ""}
          </div>`
        : ""}
    </div>
  `;
};

export const getChunkedDisplayed = (
  displayed: DisplayedAttributes,
  attributesPerRow: number,
) => {
  return Object.values(displayed).reduce((acc, curr, i) => {
    const index = Math.floor(i / attributesPerRow);
    if (!acc[index]) {
      acc[index] = [];
    }
    acc[index].push(curr);
    return acc;
  }, []);
};

export const renderAttributeChunks = (
  card: FlowerCard,
  displayed: DisplayedAttributes,
): TemplateResult[] => {
  const isCompact = card.config.display_type === DisplayType.Compact;
  const barsPerRow = card.config.bars_per_row ?? (isCompact ? 1 : 2);
  const useFullWidth = barsPerRow === 1;

  const chunkedDisplayed = getChunkedDisplayed(displayed, barsPerRow);
  const attributeCssClass = `attributes ${useFullWidth ? "width-100" : ""}`;

  return chunkedDisplayed
    .map((chunk) => {
      return html`<div class="${attributeCssClass}">
        ${chunk.map((item: DisplayedAttribute) => {
          return item ? html`${renderAttribute(card, item)}` : "";
        })}
      </div>`;
    })
    .flat();
};
