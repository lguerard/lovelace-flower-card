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

  const currentMoisture = moistureAttribute.current;
  const minMoisture = moistureAttribute.min;
  const maxMoisture = moistureAttribute.max;

  // Default daily water drop (in moisture units)
  // Assuming a plant drops from max to min in about 7 days on average
  let dailymoistureLoss = (maxMoisture - minMoisture) / 7;
  if (dailymoistureLoss <= 0) dailymoistureLoss = 5;

  const tempSensorId = config.temperature_sensor;
  const humiditySensorId = config.humidity_sensor;

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

  const weatherEntityId = config.weather_entity;
  if (weatherEntityId && hass.states[weatherEntityId]) {
    const weather = hass.states[weatherEntityId];
    // If it's outdoor, weather has more impact
    // check if raining in forecast
    const forecast = weather.attributes.forecast || [];
    const isRainingSoon = forecast
      .slice(0, 2)
      .some(
        (day: any) =>
          ["rainy", "pouring", "hail", "snowy", "snowy-rainy"].includes(
            day.condition,
          ) || day.precipitation > 2,
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
