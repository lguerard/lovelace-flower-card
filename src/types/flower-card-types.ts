import { LovelaceCardConfig } from "custom-card-helpers";
import { HassEntity } from "home-assistant-js-websocket";

export interface ExtraBadge {
  entity?: string; // Entity ID for sensor/binary_sensor
  attribute?: string; // Entity attribute to display instead of state (e.g., "last_changed")
  icon?: string; // Icon to display (default: entity's icon or mdi:information)
  color?: string; // Color for regular sensors/text
  color_on?: string; // Color when binary_sensor is "on" (default: green)
  color_off?: string; // Color when binary_sensor is "off" (default: grey)
  text?: string; // Static text to display (alternative to entity)
  show_state?: boolean; // Show state value next to icon (default: false)
}

export interface FlowerCardConfig extends LovelaceCardConfig {
  entity?: string;
  battery_sensor?: string;
  temperature_sensor?: string; // External room temperature sensor for fallback and watering prediction
  humidity_sensor?: string; // External room humidity sensor for fallback and watering prediction
  weather_entity?: string; // Weather provider entity for forecasting outdoor watering needs
  display_type?: DisplayType;
  hide_units?: boolean; // Hide value/unit next to bars (default: false for full, true for compact)
  bars_per_row?: number; // Number of bars per row: 1 or 2 (default: 2 for full, 1 for compact)
  name?: string;
  hide_species?: boolean;
  hide_image?: boolean;
  is_outside?: boolean; // Manual override for outside/indoor
  extra_badges?: ExtraBadge[];
  sort_entity?: string; // Optional input_select entity to control sorting
  notification_service?: string; // Service to use for notifications (e.g., notify.mobile_app_iphone)
}

export enum DisplayType {
  Full = "full",
  Compact = "compact",
}

export interface HomeAssistantEntity extends HassEntity {
  entity_id: string;
  state: string;
}

export interface PlantInfo {
  result: {
    watering?: WateringInfo;
    health?: HealthInfo;
    sensors?: Record<string, any>;
    [key: string]: any;
  };
}

export interface WateringInfo {
  last_watered: string;
  next_watering: string;
  days_until: number;
  needs_watering: boolean;
  explanation?: string;
  water_factor?: number;
}

export interface HealthInfo {
  comfort_score: number;
  misting_required: boolean;
}

export interface PlantAttribute {
  max: number;
  min: number;
  current: number;
  icon: string;
  sensor: string;
  unit_of_measurement: string;
}

export interface Limits {
  max: number | null;
  min: number | null;
}

export interface Attribute {
  icon: string;
  sensor: string;
  unit_of_measurement: string;
  display_state: string;
}

export interface DisplayedAttribute extends Attribute {
  current: number;
  limits: Limits;
  name: string;
}

export interface DisplayedAttributes {
  [key: string]: DisplayedAttribute;
}

export interface Icons {
  [key: string]: string;
}

export interface UOM {
  [key: string]: string;
}

export interface UOMT {
  [key: string]: string;
}
