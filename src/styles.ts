import { css } from "lit";

export const style = css`
  ha-card {
    overflow: visible !important;
    isolation: isolate;
  }
  .card-margin-top {
    margin-top: 16px;
  }
  .attributes {
    display: flex;
    white-space: nowrap;
    padding: 8px;
  }
  .attributes.width-100 {
    padding: 2px;
  }
  .attribute ha-icon {
    margin-right: 5px;
    margin-left: 5px;
  }
  .attribute {
    white-space: nowrap;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
  }
  .attribute-header {
    height: auto;
    padding-top: 0px;
    display: flex;
    align-items: center;
  }
  .header {
    padding-top: 8px;
    min-height: 72px;
    overflow: visible !important;
  }
  .header-compact {
    padding-top: 4px;
    min-height: 55px;
    overflow: visible !important;
  }
  .header.no-image {
    height: auto;
    padding: 16px;
  }
  .header.no-image + .divider {
    margin-top: 0;
  }
  .header-compact.no-image {
    height: auto;
    padding: 8px 16px;
  }
  .header.no-image #name,
  .header-compact.no-image #name {
    margin-top: 0;
    margin-left: 0;
  }
  .plant-image-container {
    position: relative;
    float: left;
    z-index: 1;
  }
  .header .plant-image-container {
    margin-left: 16px;
    margin-right: 16px;
    margin-top: -16px;
  }
  .header-compact .plant-image-container {
    margin-left: 8px;
    margin-right: 8px;
    margin-top: 0px;
  }
  .plant-image-container > img {
    border-radius: 50%;
    object-fit: cover;
    background-color: var(--secondary-background-color);
    box-shadow: var(
      --ha-card-box-shadow,
      0 2px 2px 0 rgba(0, 0, 0, 0.14),
      0 1px 5px 0 rgba(0, 0, 0, 0.12),
      0 3px 1px -2px rgba(0, 0, 0, 0.2)
    );
  }
  .header .plant-image-container > img {
    width: 88px;
    height: 88px;
  }
  .header-compact .plant-image-container > img {
    width: 50px;
    height: 50px;
  }
  .name-area-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
    min-width: 0;
  }
  #name {
    font-weight: bold;
    text-transform: capitalize;
    display: flex;
    align-items: center;
    width: 100%;
  }
  #name .name-text {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .header .name-area-container {
    margin-top: 16px;
  }
  .header-compact .name-area-container {
    margin-top: 8px;
  }
  #name ha-icon {
    color: rgb(240, 163, 163);
    margin-left: 4px;
    flex-shrink: 0;
  }
  .header #species,
  .header #area {
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .header #species {
    color: #8c96a5;
  }
  #area {
    color: var(--secondary-text-color);
    font-size: 0.9em;
    font-weight: 500;
    opacity: 0.9;
    margin-top: 2px;
  }
  .header-compact #species {
    line-height: 85%;
    color: #8c96a5;
    font-size: 0.8em;
    margin-top: 0px;
    margin-right: 4px;
    opacity: 0.4;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .header-text {
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: visible;
  }
  #next-watering {
    display: flex;
    align-items: center;
    font-size: 0.8em;
    margin-right: 16px;
    padding: 2px 8px;
    border-radius: 12px;
    background: var(--secondary-background-color);
    color: var(--primary-text-color);
    white-space: nowrap;
    flex-shrink: 0;
  }
  #next-watering.watering-urgent {
    background-color: var(--label-badge-red);
    color: white;
  }
  #next-watering.watering-warning {
    background-color: var(--label-badge-yellow, orange);
    color: white;
  }
  #next-watering.watering-safe {
    background-color: var(--label-badge-green);
    color: white;
  }
  #next-watering span {
    font-weight: bold;
  }
  #next-watering .water-button {
    color: white;
    margin-left: 8px;
  }
  #next-watering .sort-button {
    color: white;
    margin-left: 8px;
    opacity: 0.7;
  }
  .water-button,
  .sort-button {
    cursor: pointer;
    --mdc-icon-size: 18px;
    vertical-align: middle;
    padding: 6px;
    margin: -6px;
    border-radius: 50%;
    transition:
      transform 0.2s,
      opacity 0.2s,
      background-color 0.2s;
  }
  .water-button:hover,
  .sort-button:hover {
    transform: scale(1.2);
    opacity: 1;
    background-color: rgba(255, 255, 255, 0.2);
  }
  .water-button:active,
  .sort-button:active {
    transform: scale(0.9);
    background-color: rgba(255, 255, 255, 0.4);
  }
  .meter-container {
    height: 8px;
    background-color: var(--secondary-background-color);
    border-radius: 4px;
    flex-grow: 1;
    margin-right: 10px;
    overflow: hidden;
    position: relative;
  }
  .meter-bar {
    height: 100%;
    border-radius: 4px;
    transition: width 0.5s ease-in-out;
  }
  .attribute.tooltip.width-100 .meter-container {
    margin-right: 15px;
  }
  .divider {
    height: 1px;
    background-color: #727272;
    opacity: 0.25;
    margin-left: 8px;
    margin-right: 8px;
  }
  .tooltip {
    position: relative;
  }
  .tooltip .tip {
    opacity: 0;
    visibility: hidden;
    position: absolute;
    padding: 6px 10px;
    top: 3.3em;
    left: 50%;
    -webkit-transform: translateX(-50%) translateY(-180%);
    transform: translateX(-50%) translateY(-180%);
    background: grey;
    color: white;
    white-space: pre-line;
    z-index: 2;
    border-radius: 2px;
    min-width: 150px;
    text-align: left;
    font-size: 0.9em;
    line-height: 1.2;
    transition:
      opacity 0.2s cubic-bezier(0.64, 0.09, 0.08, 1),
      -webkit-transform 0.2s cubic-bezier(0.64, 0.09, 0.08, 1);
    transition:
      opacity 0.2s cubic-bezier(0.64, 0.09, 0.08, 1),
      transform 0.2s cubic-bezier(0.64, 0.09, 0.08, 1);
    transition:
      opacity 0.2s cubic-bezier(0.64, 0.09, 0.08, 1),
      transform 0.2s cubic-bezier(0.64, 0.09, 0.08, 1),
      -webkit-transform 0.2s cubic-bezier(0.64, 0.09, 0.08, 1);
  }
  #next-watering.tooltip .tip {
    top: -5px;
    left: auto;
    right: 0;
    transform: translateY(-100%);
    -webkit-transform: translateY(-100%);
  }
  #next-watering.tooltip:hover .tip {
    display: block;
    opacity: 1;
    visibility: visible;
  }
  .battery.tooltip .tip {
    top: 2em;
  }
  .extra-badge {
    display: inline-block;
    margin-right: 8px;
    cursor: pointer;
  }
  .extra-badge .badge-text {
    font-size: 0.9em;
    margin-left: 2px;
    vertical-align: middle;
  }
  .extra-badge.tooltip .tip {
    top: 2em;
  }
  .tooltip:hover .tip,
  .tooltip:active .tip {
    display: block;
    opacity: 1;
    visibility: visible;
    -webkit-transform: translateX(-50%) translateY(-200%);
    transform: translateX(-50%) translateY(-200%);
  }
  .width-100 {
    width: 100%;
    margin-bottom: 3px;
    margin-right: 5px;
  }
  .width-100 .attribute-header {
    display: flex;
  }
  @media (max-width: 600px) {
    .header > .unit {
      display: none;
    }
  }
  .info-button {
    cursor: pointer;
    color: var(--secondary-text-color);
    margin-left: 8px;
    --mdc-icon-size: 18px;
    opacity: 0.6;
    transition: opacity 0.2s;
  }
  .info-button:hover {
    opacity: 1;
    color: var(--primary-color);
  }
  .plant-info-panel {
    padding: 16px;
    background: var(--secondary-background-color);
    border-top: 1px solid var(--divider-color);
    font-size: 0.9em;
    position: relative;
    border-radius: 0 0 var(--ha-card-border-radius, 12px)
      var(--ha-card-border-radius, 12px);
  }
  .panel-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
    font-weight: bold;
    color: var(--primary-color);
    text-transform: uppercase;
    font-size: 0.85em;
    letter-spacing: 0.5px;
  }
  .panel-header ha-icon {
    cursor: pointer;
    --mdc-icon-size: 20px;
    color: var(--secondary-text-color);
  }
  .panel-header .delete-button {
    color: var(--error-color, #db4437);
    margin-right: 8px;
  }
  .panel-header .delete-button:hover {
    color: var(--error-color, #b00020);
  }
  .panel-actions {
    display: flex;
    align-items: center;
  }
  .panel-content {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 12px;
  }
  .plant-info-panel .info-item {
    display: flex;
    flex-direction: column;
  }
  .plant-info-panel .info-label {
    font-weight: bold;
    color: var(--secondary-text-color);
    font-size: 0.8em;
    text-transform: uppercase;
    margin-bottom: 2px;
  }
  .plant-info-panel .info-value {
    color: var(--primary-text-color);
    word-break: break-word;
  }
`;
