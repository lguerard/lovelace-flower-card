import { css } from "lit";

export const style = css`
  .card-margin-top {
    margin-top: 32px;
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
    margin-right: 10px;
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
  }
  .header-compact {
    padding-top: 4px;
    min-height: 55px;
  }
  .header > img {
    border-radius: 50%;
    width: 88px;
    height: 88px;
    object-fit: cover;
    margin-left: 16px;
    margin-right: 16px;
    margin-top: -32px;
    float: left;
    box-shadow: var(
      --ha-card-box-shadow,
      0 2px 2px 0 rgba(0, 0, 0, 0.14),
      0 1px 5px 0 rgba(0, 0, 0, 0.12),
      0 3px 1px -2px rgba(0, 0, 0, 0.2)
    );
  }
  .header-compact > img {
    border-radius: 50%;
    width: 50px;
    height: 50px;
    object-fit: cover;
    margin-left: 8px;
    margin-right: 8px;
    margin-top: 0px;
    float: left;
    box-shadow: var(
      --ha-card-box-shadow,
      0 2px 2px 0 rgba(0, 0, 0, 0.14),
      0 1px 5px 0 rgba(0, 0, 0, 0.12),
      0 3px 1px -2px rgba(0, 0, 0, 0.2)
    );
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
  .header.no-image > #name,
  .header-compact.no-image > #name {
    margin-top: 0;
    margin-left: 0;
  }
  .header > #name {
    font-weight: bold;
    width: 100%;
    margin-top: 16px;
    text-transform: capitalize;
    display: block;
  }
  .header-compact > #name {
    font-weight: bold;
    width: 100%;
    margin-top: 8px;
    text-transform: capitalize;
    display: block;
    white-space: nowrap;
  }
  #name ha-icon {
    color: rgb(240, 163, 163);
  }
  .header > #species {
    color: #8c96a5;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  #area {
    color: var(--secondary-text-color);
    font-size: 0.9em;
    font-weight: 500;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    opacity: 0.9;
    margin-top: 2px;
  }
  .header-compact > #species {
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
  .water-button {
    cursor: pointer;
    --mdc-icon-size: 18px;
    vertical-align: middle;
    transition: transform 0.2s;
  }
  .water-button:hover {
    transform: scale(1.2);
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
    white-space: nowrap;
    z-index: 2;
    border-radius: 2px;
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
  .plant-info-overlay {
    opacity: 0;
    visibility: hidden;
    position: absolute;
    padding: 12px;
    background: var(--ha-card-background, var(--card-background-color, white));
    color: var(--primary-text-color);
    box-shadow: 0 8px 16px rgba(0,0,0,0.4);
    z-index: 100;
    border-radius: 8px;
    width: 250px;
    left: 100px;
    top: 10px;
    transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
    pointer-events: none;
    font-size: 0.9em;
    line-height: 1.4;
    transform: translateY(10px);
    border: 1px solid var(--divider-color);
  }
  .header:hover .plant-info-overlay,
  .header-compact:hover .plant-info-overlay {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
  .plant-info-overlay .info-item {
    margin-bottom: 8px;
  }
  .plant-info-overlay .info-item:last-child {
    margin-bottom: 0;
  }
  .plant-info-overlay .info-label {
    font-weight: bold;
    color: var(--accent-color);
    display: block;
    font-size: 0.8em;
    text-transform: uppercase;
  }
  .plant-info-overlay .info-value {
    display: block;
  }
`;
