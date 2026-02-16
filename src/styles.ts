import { css } from "lit";

export const style = css`
  @import url("https://fonts.googleapis.com/css2?family=Indie+Flower&family=Patrick+Hand&display=swap");

  ha-card {
    overflow: visible !important;
    isolation: isolate;
    border-radius: 2px 4px 2px 4px / 4px 2px 4px 2px;
    background: #fdfaf3; /* Journal Parchment */
    box-shadow:
      2px 3px 20px rgba(0, 0, 0, 0.1),
      inset 0 0 50px rgba(0, 0, 0, 0.02);
    border: 1px solid #e0d0b0;
    color: #4b3d2d;
    position: relative;
    font-family:
      "Patrick Hand", "Bradley Hand", "Chilanka", "TSCu_Comic", "casual",
      "cursive";
  }
  ha-card::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: url("https://www.transparenttextures.com/patterns/p6.png");
    opacity: 0.2;
    pointer-events: none;
    border-radius: inherit;
    z-index: 0;
  }
  .card-margin-top {
    margin-top: 24px;
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
  #battery {
    float: right;
    display: flex;
    align-items: center;
    gap: 4px;
    margin-right: 16px;
    margin-top: -15px;
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
    z-index: 2;
    padding: 6px;
    background: white;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
    border-bottom: 15px solid white; /* Polaroid bottom */
    transform: rotate(2deg); /* Organic placement tilt */
  }
  .plant-image-container::before {
    content: "";
    position: absolute;
    top: -10px;
    left: 20%;
    width: 60%;
    height: 20px;
    background: rgba(220, 220, 180, 0.5); /* Washi Tape */
    backdrop-filter: blur(1px);
    z-index: 3;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
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
    border-radius: 2px;
    object-fit: cover;
    background-color: var(--secondary-background-color);
    /* Attempt to simulate a "sketch" or "engraving" look */
    /* filter: grayscale(100%) contrast(150%) brightness(110%);
    mix-blend-mode: multiply; */
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
    font-family: "Indie Flower", "cursive", serif;
    font-size: 1.8em;
    color: #34495e;
    letter-spacing: 1px;
    transform: rotate(-1.5deg); /* Slight handwritten tilt */
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
    color: #7f8c8d;
    font-style: italic;
    font-family: serif;
    opacity: 0.8;
  }
  #area {
    color: #95a5a6;
    font-size: 0.9em;
    font-weight: 500;
    opacity: 0.9;
    margin-top: 2px;
    font-family: "Indie Flower", cursive;
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
  .sort-button,
  .info-button,
  .delete-button-main {
    cursor: pointer;
    --mdc-icon-size: 18px;
    vertical-align: middle;
    padding: 6px;
    opacity: 0.7;
    transition: opacity 0.2s;
  }
  .info-button:hover,
  .delete-button-main:hover,
  .water-button:hover,
  .sort-button:hover {
    opacity: 1;
  }
  .delete-button-main {
    color: var(--error-color, #db4437);
  }

  /* Watering Status (Rich View) */
  .watering-status {
    display: flex;
    flex-direction: column;
    padding: 12px 16px;
    background-color: var(--secondary-background-color);
    border-bottom: 1px solid var(--divider-color);
    cursor: pointer;
  }
  .watering-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .care-badges {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .care-badge {
    font-size: 0.75em;
    font-weight: bold;
    padding: 3px 8px;
    border-radius: 2px;
    display: flex;
    align-items: center;
    gap: 4px;
    box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.1);
    position: relative;
    border: 1px dashed rgba(255, 255, 255, 0.4);
  }
  .care-badge::after {
    content: "";
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    pointer-events: none;
  }
  .care-badge.misting {
    background-color: #03a9f4;
    color: white;
  }
  .care-badge ha-icon {
    --mdc-icon-size: 14px;
  }
  .health-row {
    margin-top: 8px;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  .health-score-container {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .health-label {
    font-size: 0.8em;
    color: var(--secondary-text-color);
    width: 90px;
  }
  .health-bar-bg {
    flex: 1;
    height: 8px;
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 10px 5px 12px 3px / 3px 12px 5px 10px; /* Rough edges */
    overflow: hidden;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
  .health-bar-fill {
    height: 100%;
    transition: width 0.5s ease-out;
    background-image: linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.15) 25%,
      transparent 25%,
      transparent 50%,
      rgba(255, 255, 255, 0.15) 50%,
      rgba(255, 255, 255, 0.15) 75%,
      transparent 75%,
      transparent
    );
    background-size: 10px 10px; /* Hatching pattern */
  }
  .health-value {
    font-size: 0.8em;
    font-weight: bold;
    width: 35px;
    text-align: right;
  }
  .watering-next {
    font-weight: bold;
    color: var(--primary-text-color);
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .watering-explanation {
    font-size: 0.85em;
    color: var(--secondary-text-color);
    margin-top: 4px;
  }
  .watering-factor {
    font-size: 0.8em;
    padding: 2px 8px;
    border-radius: 12px;
    background-color: var(--disabled-text-color, #ccc);
    color: white;
  }
  .watering-factor.active {
    background-color: var(--primary-color);
  }
  .forecast-hint {
    font-size: 0.8em;
    font-weight: normal;
    color: var(--secondary-text-color);
  }
  .care-badges {
    display: flex;
    gap: 4px;
    align-items: center;
  }
  .care-badge {
    font-size: 0.75em;
    padding: 2px 6px;
    border-radius: 4px;
    font-weight: bold;
    display: flex;
    align-items: center;
    gap: 2px;
  }
  .care-badge.misting {
    background-color: #3498db;
    color: white;
  }
  .care-badge.smart {
    background-color: #27ae60;
    color: white;
  }
  .care-badge.inactive {
    background-color: rgba(0, 0, 0, 0.4);
    opacity: 0.5;
  }
  .care-badge.tendency {
    background-color: var(--secondary-background-color);
    border: 1px solid currentColor;
  }

  /* Meter / Attributes */
  .meter-container {
    height: 10px;
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 8px 4px 10px 2px / 2px 10px 4px 8px;
    flex-grow: 1;
    margin-right: 10px;
    overflow: hidden;
    position: relative;
    border: 1px solid rgba(0, 0, 0, 0.05);
  }
  .meter-bar {
    height: 100%;
    border-radius: inherit;
    transition: width 0.5s ease-in-out;
    background-image: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.1) 25%,
      transparent 25%,
      transparent 50%,
      rgba(255, 255, 255, 0.1) 50%,
      rgba(255, 255, 255, 0.1) 75%,
      transparent 75%,
      transparent
    );
    background-size: 10px 10px;
  }
  .attribute.tooltip.width-100 .meter-container {
    margin-right: 15px;
  }
  .divider {
    height: 2px;
    background-color: #d0c0a0;
    opacity: 0.6;
    margin: 8px 16px;
    border-radius: 50% 2px 50% 1px;
    transform: rotate(0.1deg);
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

  /* Info Panel Styles */
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

  @media (max-width: 600px) {
    .header > .unit {
      display: none;
    }
  }
`;
