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
    width: 50%;
  }
  #battery {
    float: right;
    margin-right: 16px;
    margin-top: -15px;
  }
  .header {
    padding-top: 8px;
    height: 72px;
  }
  .header-compact {
    padding-top: 4px;
    height: 55px;
  }
  .attribute .header,
  .attribute .header-compact {
    height: auto;
    padding-top: 0px;
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
    margin-top: 4px;
    margin-top: 0px;
    float: left;
    box-shadow: var(
      --ha-card-box-shadow,
      0 2px 2px 0 rgba(0, 0, 0, 0.14),
      0 1px 5px 0 rgba(0, 0, 0, 0.12),
      0 3px 1px -2px rgba(0, 0, 0, 0.2)
    );
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
    text-transform: capitalize;
    color: #8c96a5;
    display: block;
  }
  .header-compact > #species {
    text-transform: capitalize;
    line-height: 85%;
    color: #8c96a5;
    font-size: 0.8em;
    margin-top: 0px;
    margin-right: 4px;
    opacity: 0.4;
    display: block;
  }
  .meter {
    height: 8px;
    background-color: var(--primary-background-color);
    border-radius: 2px;
    display: inline-grid;
    overflow: hidden;
  }
  .meter.red {
    flex-grow: 1;
    margin-right: 5px;
    max-width: 5%;
  }
  .meter.green {
    flex-grow: 10;
    margin-right: 5px;
    max-width: 40%;
  }
  .attribute.tooltip.width-100 .meter.green {
    max-width: 90%;
  }
  .attribute.tooltip.width-100 .header {
    display: none;
  }
  .meter > span {
    grid-row: 1;
    grid-column: 1;
    height: 100%;
  }
  .meter > .good {
    background-color: rgba(43, 194, 83, 1);
  }
  .meter > .bad {
    background-color: rgba(240, 163, 163);
  }
  .meter > .unavailable {
    background-color: rgba(158, 158, 158, 1);
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
  .width-100 .header {
    display: none;
  }
  @media (max-width: 600px) {
    .header > .unit {
      display: none;
    }
  }

  /* Next watering display and badge */
  #next-watering {
    display: block;
    color: var(--secondary-text-color, #8c96a5);
    margin-top: 6px;
    margin-bottom: 4px;
    font-size: 0.9em;
    clear: both;
  }
  #next-watering.missing {
    opacity: 0.6;
    font-style: italic;
    color: var(--secondary-text-color, #8c96a5);
  }
  .watering-badge {
    display: inline-block;
    margin-left: 10px;
    padding: 4px 10px;
    border-radius: 12px;
    font-size: 0.75em;
    font-weight: 500;
    color: #fff;
    background: #f39c12;
    vertical-align: middle;
    cursor: help;
    transition: transform 0.2s ease;
  }
  .watering-badge:hover {
    transform: scale(1.05);
  }
  .watering-badge.overdue {
    background: #e74c3c;
  }
  .watering-badge.soon {
    background: #f39c12;
  }

  /* Water button styling */
  .water-button-container {
    padding: 12px 16px;
    display: flex;
    justify-content: center;
    border-top: 1px solid rgba(114, 114, 114, 0.25);
  }
  .water-button {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 8px 16px;
    border: none;
    border-radius: 16px;
    background: var(--primary-color, #03a9f4);
    color: #fff;
    font-size: 0.9em;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  .water-button:hover {
    background: var(--primary-color-dark, #0288d1);
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15);
    transform: translateY(-1px);
  }
  .water-button:active {
    transform: translateY(0);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }
  .water-button ha-icon {
    --mdc-icon-size: 18px;
  }
`;
