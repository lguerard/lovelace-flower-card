import { HomeAssistant } from "custom-card-helpers";
import { FlowerCardConfig, PlantInfo } from "../types/flower-card-types";

/** Estimate the next watering time based on current moisture and environmental factors.
 *
 * Parameters:
 * hass (HomeAssistant):
 *     The Home Assistant instance for state access.
 * config (FlowerCardConfig):
 *     The card configuration containing sensor mappings.
 * plantInfo (PlantInfo):
 *     The plant data from the WebSocket API.
 *
 * Returns:
 * string:
 *     A localized string representing the estimated watering date (e.g., "Water today", "Tomorrow", "Wed").
 */
export function calculate_next_watering(
  hass: HomeAssistant,
  config: FlowerCardConfig,
  plantInfo: PlantInfo,
): string {
  const moistureAttribute = plantInfo.result["moisture"];
  if (!moistureAttribute) {
    return "Unknown";
  }

  const currentMoisture = parseFloat(moistureAttribute.current);
  const minMoisture =
    moistureAttribute.min !== null ? parseFloat(moistureAttribute.min) : 20;
  const maxMoisture =
    moistureAttribute.max !== null ? parseFloat(moistureAttribute.max) : 60;

  // Default daily water drop (in moisture units)
  // Use baseline watering frequency if available, otherwise assume 7 days
  const baselineDays = plantInfo.result.watering || 7;

  if (isNaN(currentMoisture)) {
    // If we can't get current moisture, we might want to check last_watered
    const lastWatered = plantInfo.result.last_watered;
    if (lastWatered) {
      const lastWateredDate = new Date(lastWatered);
      const nextWateringDate = new Date(
        lastWateredDate.getTime() + baselineDays * 24 * 60 * 60 * 1000,
      );
      const today = new Date();
      const diffTime = nextWateringDate.getTime() - today.getTime();
      const daysToWater = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      return formatDays(daysToWater);
    }
    return "Unknown";
  }

  let dailymoistureLoss = (maxMoisture - minMoisture) / baselineDays;
  if (dailymoistureLoss <= 0) dailymoistureLoss = 5;

  const isOutside =
    config.is_outside !== undefined
      ? config.is_outside
      : plantInfo.result.outside || false;

  const tempSensorId =
    config.temperature_sensor || plantInfo.result.room_temperature;
  const humiditySensorId =
    config.humidity_sensor || plantInfo.result.room_humidity;

  // Adjustment factor based on environment
  let adjustmentFactor = 1.0;

  if (tempSensorId && hass.states[tempSensorId]) {
    const temperature = parseFloat(hass.states[tempSensorId].state);
    if (!isNaN(temperature)) {
      // Increase water consumption by 5% for every degree above 22°C
      // Decrease by 5% for every degree below 22°C
      adjustmentFactor *= 1 + (temperature - 22) * 0.05;
    }
  }

  if (humiditySensorId && hass.states[humiditySensorId]) {
    const humidity = parseFloat(hass.states[humiditySensorId].state);
    if (!isNaN(humidity)) {
      // Decrease water consumption by 2% for every 5% of humidity above 50%
      adjustmentFactor *= 1 - (humidity - 50) * 0.004;
    }
  }

  const weatherEntityId =
    config.weather_entity || plantInfo.result.weather_entity;
  if (isOutside && weatherEntityId && hass.states[weatherEntityId]) {
    const weather = hass.states[weatherEntityId];
    // If it's outdoor, weather has more impact
    // check if raining in forecast
    const forecast = weather.attributes.forecast || [];
    const isRainingSoon = forecast
      .slice(0, 2)
      .some(
        (day: { condition: string; precipitation?: number }) =>
          ["rainy", "pouring", "hail", "snowy", "snowy-rainy"].includes(
            day.condition,
          ) ||
          (day.precipitation !== undefined && day.precipitation > 2),
      );

    if (isRainingSoon) {
      adjustmentFactor *= 0.5; // Rain helps moisture stay longer
    }
  }

  // Safety check for adjustment factor
  adjustmentFactor = Math.max(0.1, adjustmentFactor);

  const actualDailyLoss = dailymoistureLoss * adjustmentFactor;
  const moistureAboveMin = currentMoisture - minMoisture;
  const daysToWater = Math.floor(moistureAboveMin / actualDailyLoss);

  return formatDays(daysToWater);
}

function formatDays(daysToWater: number): string {
  if (daysToWater <= 0) {
    return "Water today";
  } else if (daysToWater === 1) {
    return "Tomorrow";
  } else if (daysToWater < 7) {
    const today = new Date();
    const wateringDate = new Date(
      today.getTime() + daysToWater * 24 * 60 * 60 * 1000,
    );
    return wateringDate.toLocaleDateString(undefined, { weekday: "short" });
  } else {
    return `In ${daysToWater} days`;
  }
}
