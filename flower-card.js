/*! For license information please see flower-card.js.LICENSE.txt */
(()=>{"use strict";var t={356:(t,e,i)=>{i.r(e),i.d(e,{DEFAULT_DOMAIN_ICON:()=>J,DEFAULT_PANEL:()=>G,DEFAULT_VIEW_ENTITY_ID:()=>st,DOMAINS_HIDE_MORE_INFO:()=>et,DOMAINS_MORE_INFO_NO_HISTORY:()=>it,DOMAINS_TOGGLE:()=>nt,DOMAINS_WITH_CARD:()=>K,DOMAINS_WITH_MORE_INFO:()=>tt,NumberFormat:()=>r,STATES_OFF:()=>rt,TimeFormat:()=>n,UNIT_C:()=>at,UNIT_F:()=>ot,applyThemesOnElement:()=>U,computeCardSize:()=>z,computeDomain:()=>R,computeEntity:()=>F,computeRTL:()=>H,computeRTLDirection:()=>W,computeStateDisplay:()=>Z,computeStateDomain:()=>q,createThing:()=>ut,debounce:()=>mt,domainIcon:()=>pt,evaluateFilter:()=>gt,fireEvent:()=>ct,fixedIcons:()=>ht,formatDate:()=>d,formatDateMonth:()=>y,formatDateMonthYear:()=>f,formatDateNumeric:()=>m,formatDateShort:()=>p,formatDateTime:()=>$,formatDateTimeNumeric:()=>k,formatDateTimeWithSeconds:()=>M,formatDateWeekday:()=>c,formatDateYear:()=>_,formatNumber:()=>V,formatTime:()=>D,formatTimeWeekday:()=>T,formatTimeWithSeconds:()=>I,forwardHaptic:()=>ft,getLovelace:()=>kt,handleAction:()=>wt,handleActionConfig:()=>_t,handleClick:()=>xt,hasAction:()=>$t,hasConfigOrEntityChanged:()=>At,hasDoubleClick:()=>Mt,isNumericState:()=>B,navigate:()=>bt,numberFormatToLocale:()=>Y,relativeTime:()=>j,round:()=>Q,stateIcon:()=>Nt,timerTimeRemaining:()=>L,toggleEntity:()=>vt,turnOnOffEntities:()=>St,turnOnOffEntity:()=>yt});var r,n,a,o=function(){return o=Object.assign||function(t){for(var e,i=1,r=arguments.length;i<r;i++)for(var n in e=arguments[i])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t},o.apply(this,arguments)},s={second:45,minute:45,hour:22,day:5},c=function(t,e){return l(e).format(t)},l=function(t){return new Intl.DateTimeFormat(t.language,{weekday:"long",month:"long",day:"numeric"})},d=function(t,e){return u(e).format(t)},u=function(t){return new Intl.DateTimeFormat(t.language,{year:"numeric",month:"long",day:"numeric"})},m=function(t,e){return h(e).format(t)},h=function(t){return new Intl.DateTimeFormat(t.language,{year:"numeric",month:"numeric",day:"numeric"})},p=function(t,e){return g(e).format(t)},g=function(t){return new Intl.DateTimeFormat(t.language,{day:"numeric",month:"short"})},f=function(t,e){return b(e).format(t)},b=function(t){return new Intl.DateTimeFormat(t.language,{month:"long",year:"numeric"})},y=function(t,e){return v(e).format(t)},v=function(t){return new Intl.DateTimeFormat(t.language,{month:"long"})},_=function(t,e){return w(e).format(t)},w=function(t){return new Intl.DateTimeFormat(t.language,{year:"numeric"})};(a=r||(r={})).language="language",a.system="system",a.comma_decimal="comma_decimal",a.decimal_comma="decimal_comma",a.space_comma="space_comma",a.none="none",function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(n||(n={}));var x=function(t){if(t.time_format===n.language||t.time_format===n.system){var e=t.time_format===n.language?t.language:void 0,i=(new Date).toLocaleString(e);return i.includes("AM")||i.includes("PM")}return t.time_format===n.am_pm},$=function(t,e){return A(e).format(t)},A=function(t){return new Intl.DateTimeFormat(t.language,{year:"numeric",month:"long",day:"numeric",hour:x(t)?"numeric":"2-digit",minute:"2-digit",hour12:x(t)})},M=function(t,e){return S(e).format(t)},S=function(t){return new Intl.DateTimeFormat(t.language,{year:"numeric",month:"long",day:"numeric",hour:x(t)?"numeric":"2-digit",minute:"2-digit",second:"2-digit",hour12:x(t)})},k=function(t,e){return E(e).format(t)},E=function(t){return new Intl.DateTimeFormat(t.language,{year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"2-digit",hour12:x(t)})},D=function(t,e){return N(e).format(t)},N=function(t){return new Intl.DateTimeFormat(t.language,{hour:"numeric",minute:"2-digit",hour12:x(t)})},I=function(t,e){return C(e).format(t)},C=function(t){return new Intl.DateTimeFormat(t.language,{hour:x(t)?"numeric":"2-digit",minute:"2-digit",second:"2-digit",hour12:x(t)})},T=function(t,e){return O(e).format(t)},O=function(t){return new Intl.DateTimeFormat(t.language,{hour:x(t)?"numeric":"2-digit",minute:"2-digit",second:"2-digit",hour12:x(t)})},j=function(t,e,i,r){void 0===r&&(r=!0);var n=function(t,e,i){void 0===e&&(e=Date.now()),void 0===i&&(i={});var r=o(o({},s),i||{}),n=(+t-+e)/1e3;if(Math.abs(n)<r.second)return{value:Math.round(n),unit:"second"};var a=n/60;if(Math.abs(a)<r.minute)return{value:Math.round(a),unit:"minute"};var c=n/3600;if(Math.abs(c)<r.hour)return{value:Math.round(c),unit:"hour"};var l=n/86400;if(Math.abs(l)<r.day)return{value:Math.round(l),unit:"day"};var d=new Date(t),u=new Date(e),m=d.getFullYear()-u.getFullYear();if(Math.round(Math.abs(m))>0)return{value:Math.round(m),unit:"year"};var h=12*m+d.getMonth()-u.getMonth();if(Math.round(Math.abs(h))>0)return{value:Math.round(h),unit:"month"};var p=n/604800;return{value:Math.round(p),unit:"week"}}(t,i);return r?function(t){return new Intl.RelativeTimeFormat(t.language,{numeric:"auto"})}(e).format(n.value,n.unit):Intl.NumberFormat(e.language,{style:"unit",unit:n.unit,unitDisplay:"long"}).format(Math.abs(n.value))};function L(t){var e,i=3600*(e=t.attributes.remaining.split(":").map(Number))[0]+60*e[1]+e[2];if("active"===t.state){var r=(new Date).getTime(),n=new Date(t.last_changed).getTime();i=Math.max(i-(r-n)/1e3,0)}return i}function P(){return(P=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r])}return t}).apply(this,arguments)}var U=function(t,e,i,r){void 0===r&&(r=!1),t._themes||(t._themes={});var n=e.default_theme;("default"===i||i&&e.themes[i])&&(n=i);var a=P({},t._themes);if("default"!==n){var o=e.themes[n];Object.keys(o).forEach((function(e){var i="--"+e;t._themes[i]="",a[i]=o[e]}))}if(t.updateStyles?t.updateStyles(a):window.ShadyCSS&&window.ShadyCSS.styleSubtree(t,a),r){var s=document.querySelector("meta[name=theme-color]");if(s){s.hasAttribute("default-content")||s.setAttribute("default-content",s.getAttribute("content"));var c=a["--primary-color"]||s.getAttribute("default-content");s.setAttribute("content",c)}}},z=function(t){return"function"==typeof t.getCardSize?t.getCardSize():4};function R(t){return t.substr(0,t.indexOf("."))}function F(t){return t.substr(t.indexOf(".")+1)}function H(t){var e,i=(null==t||null==(e=t.locale)?void 0:e.language)||"en";return t.translationMetadata.translations[i]&&t.translationMetadata.translations[i].isRTL||!1}function W(t){return H(t)?"rtl":"ltr"}function q(t){return R(t.entity_id)}var B=function(t){return!!t.attributes.unit_of_measurement||!!t.attributes.state_class},Y=function(t){switch(t.number_format){case r.comma_decimal:return["en-US","en"];case r.decimal_comma:return["de","es","it"];case r.space_comma:return["fr","sv","cs"];case r.system:return;default:return t.language}},Q=function(t,e){return void 0===e&&(e=2),Math.round(t*Math.pow(10,e))/Math.pow(10,e)},V=function(t,e,i){var n=e?Y(e):void 0;if(Number.isNaN=Number.isNaN||function t(e){return"number"==typeof e&&t(e)},(null==e?void 0:e.number_format)!==r.none&&!Number.isNaN(Number(t))&&Intl)try{return new Intl.NumberFormat(n,X(t,i)).format(Number(t))}catch(e){return console.error(e),new Intl.NumberFormat(void 0,X(t,i)).format(Number(t))}return"string"==typeof t?t:Q(t,null==i?void 0:i.maximumFractionDigits).toString()+("currency"===(null==i?void 0:i.style)?" "+i.currency:"")},X=function(t,e){var i=P({maximumFractionDigits:2},e);if("string"!=typeof t)return i;if(!e||!e.minimumFractionDigits&&!e.maximumFractionDigits){var r=t.indexOf(".")>-1?t.split(".")[1].length:0;i.minimumFractionDigits=r,i.maximumFractionDigits=r}return i},Z=function(t,e,i,r){var n=void 0!==r?r:e.state;if("unknown"===n||"unavailable"===n)return t("state.default."+n);if(B(e)){if("monetary"===e.attributes.device_class)try{return V(n,i,{style:"currency",currency:e.attributes.unit_of_measurement})}catch(t){}return V(n,i)+(e.attributes.unit_of_measurement?" "+e.attributes.unit_of_measurement:"")}var a=q(e);if("input_datetime"===a){var o;if(void 0===r)return e.attributes.has_date&&e.attributes.has_time?(o=new Date(e.attributes.year,e.attributes.month-1,e.attributes.day,e.attributes.hour,e.attributes.minute),$(o,i)):e.attributes.has_date?(o=new Date(e.attributes.year,e.attributes.month-1,e.attributes.day),d(o,i)):e.attributes.has_time?((o=new Date).setHours(e.attributes.hour,e.attributes.minute),D(o,i)):e.state;try{var s=r.split(" ");if(2===s.length)return $(new Date(s.join("T")),i);if(1===s.length){if(r.includes("-"))return d(new Date(r+"T00:00"),i);if(r.includes(":")){var c=new Date;return D(new Date(c.toISOString().split("T")[0]+"T"+r),i)}}return r}catch(t){return r}}return"humidifier"===a&&"on"===n&&e.attributes.humidity?e.attributes.humidity+" %":"counter"===a||"number"===a||"input_number"===a?V(n,i):e.attributes.device_class&&t("component."+a+".state."+e.attributes.device_class+"."+n)||t("component."+a+".state._."+n)||n},J="mdi:bookmark",G="lovelace",K=["climate","cover","configurator","input_select","input_number","input_text","lock","media_player","scene","script","timer","vacuum","water_heater","weblink"],tt=["alarm_control_panel","automation","camera","climate","configurator","cover","fan","group","history_graph","input_datetime","light","lock","media_player","script","sun","updater","vacuum","water_heater","weather"],et=["input_number","input_select","input_text","scene","weblink"],it=["camera","configurator","history_graph","scene"],rt=["closed","locked","off"],nt=new Set(["fan","input_boolean","light","switch","group","automation"]),at="°C",ot="°F",st="group.default_view",ct=function(t,e,i,r){r=r||{},i=null==i?{}:i;var n=new Event(e,{bubbles:void 0===r.bubbles||r.bubbles,cancelable:Boolean(r.cancelable),composed:void 0===r.composed||r.composed});return n.detail=i,t.dispatchEvent(n),n},lt=new Set(["call-service","divider","section","weblink","cast","select"]),dt={alert:"toggle",automation:"toggle",climate:"climate",cover:"cover",fan:"toggle",group:"group",input_boolean:"toggle",input_number:"input-number",input_select:"input-select",input_text:"input-text",light:"toggle",lock:"lock",media_player:"media-player",remote:"toggle",scene:"scene",script:"script",sensor:"sensor",timer:"timer",switch:"toggle",vacuum:"toggle",water_heater:"climate",input_datetime:"input-datetime"},ut=function(t,e){void 0===e&&(e=!1);var i=function(t,e){return r("hui-error-card",{type:"error",error:t,config:e})},r=function(t,e){var r=window.document.createElement(t);try{if(!r.setConfig)return;r.setConfig(e)}catch(r){return console.error(t,r),i(r.message,e)}return r};if(!t||"object"!=typeof t||!e&&!t.type)return i("No type defined",t);var n=t.type;if(n&&n.startsWith("custom:"))n=n.substr(7);else if(e)if(lt.has(n))n="hui-"+n+"-row";else{if(!t.entity)return i("Invalid config given.",t);var a=t.entity.split(".",1)[0];n="hui-"+(dt[a]||"text")+"-entity-row"}else n="hui-"+n+"-card";if(customElements.get(n))return r(n,t);var o=i("Custom element doesn't exist: "+t.type+".",t);o.style.display="None";var s=setTimeout((function(){o.style.display=""}),2e3);return customElements.whenDefined(t.type).then((function(){clearTimeout(s),ct(o,"ll-rebuild",{},o)})),o},mt=function(t,e,i){var r;return void 0===i&&(i=!1),function(){var n=[].slice.call(arguments),a=this,o=i&&!r;clearTimeout(r),r=setTimeout((function(){r=null,i||t.apply(a,n)}),e),o&&t.apply(a,n)}},ht={alert:"mdi:alert",automation:"mdi:playlist-play",calendar:"mdi:calendar",camera:"mdi:video",climate:"mdi:thermostat",configurator:"mdi:settings",conversation:"mdi:text-to-speech",device_tracker:"mdi:account",fan:"mdi:fan",group:"mdi:google-circles-communities",history_graph:"mdi:chart-line",homeassistant:"mdi:home-assistant",homekit:"mdi:home-automation",image_processing:"mdi:image-filter-frames",input_boolean:"mdi:drawing",input_datetime:"mdi:calendar-clock",input_number:"mdi:ray-vertex",input_select:"mdi:format-list-bulleted",input_text:"mdi:textbox",light:"mdi:lightbulb",mailbox:"mdi:mailbox",notify:"mdi:comment-alert",person:"mdi:account",plant:"mdi:flower",proximity:"mdi:apple-safari",remote:"mdi:remote",scene:"mdi:google-pages",script:"mdi:file-document",sensor:"mdi:eye",simple_alarm:"mdi:bell",sun:"mdi:white-balance-sunny",switch:"mdi:flash",timer:"mdi:timer",updater:"mdi:cloud-upload",vacuum:"mdi:robot-vacuum",water_heater:"mdi:thermometer",weblink:"mdi:open-in-new"};function pt(t,e){if(t in ht)return ht[t];switch(t){case"alarm_control_panel":switch(e){case"armed_home":return"mdi:bell-plus";case"armed_night":return"mdi:bell-sleep";case"disarmed":return"mdi:bell-outline";case"triggered":return"mdi:bell-ring";default:return"mdi:bell"}case"binary_sensor":return e&&"off"===e?"mdi:radiobox-blank":"mdi:checkbox-marked-circle";case"cover":return"closed"===e?"mdi:window-closed":"mdi:window-open";case"lock":return e&&"unlocked"===e?"mdi:lock-open":"mdi:lock";case"media_player":return e&&"off"!==e&&"idle"!==e?"mdi:cast-connected":"mdi:cast";case"zwave":switch(e){case"dead":return"mdi:emoticon-dead";case"sleeping":return"mdi:sleep";case"initializing":return"mdi:timer-sand";default:return"mdi:z-wave"}default:return console.warn("Unable to find icon for domain "+t+" ("+e+")"),"mdi:bookmark"}}var gt=function(t,e){var i=e.value||e,r=e.attribute?t.attributes[e.attribute]:t.state;switch(e.operator||"=="){case"==":return r===i;case"<=":return r<=i;case"<":return r<i;case">=":return r>=i;case">":return r>i;case"!=":return r!==i;case"regex":return r.match(i);default:return!1}},ft=function(t){ct(window,"haptic",t)},bt=function(t,e,i){void 0===i&&(i=!1),i?history.replaceState(null,"",e):history.pushState(null,"",e),ct(window,"location-changed",{replace:i})},yt=function(t,e,i){void 0===i&&(i=!0);var r,n=R(e),a="group"===n?"homeassistant":n;switch(n){case"lock":r=i?"unlock":"lock";break;case"cover":r=i?"open_cover":"close_cover";break;default:r=i?"turn_on":"turn_off"}return t.callService(a,r,{entity_id:e})},vt=function(t,e){var i=rt.includes(t.states[e].state);return yt(t,e,i)},_t=function(t,e,i,r){if(r||(r={action:"more-info"}),!r.confirmation||r.confirmation.exemptions&&r.confirmation.exemptions.some((function(t){return t.user===e.user.id}))||(ft("warning"),confirm(r.confirmation.text||"Are you sure you want to "+r.action+"?")))switch(r.action){case"more-info":(i.entity||i.camera_image)&&ct(t,"hass-more-info",{entityId:i.entity?i.entity:i.camera_image});break;case"navigate":r.navigation_path&&bt(0,r.navigation_path);break;case"url":r.url_path&&window.open(r.url_path);break;case"toggle":i.entity&&(vt(e,i.entity),ft("success"));break;case"call-service":if(!r.service)return void ft("failure");var n=r.service.split(".",2);e.callService(n[0],n[1],r.service_data,r.target),ft("success");break;case"fire-dom-event":ct(t,"ll-custom",r)}},wt=function(t,e,i,r){var n;"double_tap"===r&&i.double_tap_action?n=i.double_tap_action:"hold"===r&&i.hold_action?n=i.hold_action:"tap"===r&&i.tap_action&&(n=i.tap_action),_t(t,e,i,n)},xt=function(t,e,i,r,n){var a;if(n&&i.double_tap_action?a=i.double_tap_action:r&&i.hold_action?a=i.hold_action:!r&&i.tap_action&&(a=i.tap_action),a||(a={action:"more-info"}),!a.confirmation||a.confirmation.exemptions&&a.confirmation.exemptions.some((function(t){return t.user===e.user.id}))||confirm(a.confirmation.text||"Are you sure you want to "+a.action+"?"))switch(a.action){case"more-info":(a.entity||i.entity||i.camera_image)&&(ct(t,"hass-more-info",{entityId:a.entity?a.entity:i.entity?i.entity:i.camera_image}),a.haptic&&ft(a.haptic));break;case"navigate":a.navigation_path&&(bt(0,a.navigation_path),a.haptic&&ft(a.haptic));break;case"url":a.url_path&&window.open(a.url_path),a.haptic&&ft(a.haptic);break;case"toggle":i.entity&&(vt(e,i.entity),a.haptic&&ft(a.haptic));break;case"call-service":if(!a.service)return;var o=a.service.split(".",2),s=o[0],c=o[1],l=P({},a.service_data);"entity"===l.entity_id&&(l.entity_id=i.entity),e.callService(s,c,l,a.target),a.haptic&&ft(a.haptic);break;case"fire-dom-event":ct(t,"ll-custom",a),a.haptic&&ft(a.haptic)}};function $t(t){return void 0!==t&&"none"!==t.action}function At(t,e,i){if(e.has("config")||i)return!0;if(t.config.entity){var r=e.get("hass");return!r||r.states[t.config.entity]!==t.hass.states[t.config.entity]}return!1}function Mt(t){return void 0!==t&&"none"!==t.action}var St=function(t,e,i){void 0===i&&(i=!0);var r={};e.forEach((function(e){if(rt.includes(t.states[e].state)===i){var n=R(e),a=["cover","lock"].includes(n)?n:"homeassistant";a in r||(r[a]=[]),r[a].push(e)}})),Object.keys(r).forEach((function(e){var n;switch(e){case"lock":n=i?"unlock":"lock";break;case"cover":n=i?"open_cover":"close_cover";break;default:n=i?"turn_on":"turn_off"}t.callService(e,n,{entity_id:r[e]})}))},kt=function(){var t=document.querySelector("home-assistant");if(t=(t=(t=(t=(t=(t=(t=(t=t&&t.shadowRoot)&&t.querySelector("home-assistant-main"))&&t.shadowRoot)&&t.querySelector("app-drawer-layout partial-panel-resolver"))&&t.shadowRoot||t)&&t.querySelector("ha-panel-lovelace"))&&t.shadowRoot)&&t.querySelector("hui-root")){var e=t.lovelace;return e.current_view=t.___curView,e}return null},Et={humidity:"mdi:water-percent",illuminance:"mdi:brightness-5",temperature:"mdi:thermometer",pressure:"mdi:gauge",power:"mdi:flash",signal_strength:"mdi:wifi"},Dt={binary_sensor:function(t,e){var i="off"===t;switch(null==e?void 0:e.attributes.device_class){case"battery":return i?"mdi:battery":"mdi:battery-outline";case"battery_charging":return i?"mdi:battery":"mdi:battery-charging";case"cold":return i?"mdi:thermometer":"mdi:snowflake";case"connectivity":return i?"mdi:server-network-off":"mdi:server-network";case"door":return i?"mdi:door-closed":"mdi:door-open";case"garage_door":return i?"mdi:garage":"mdi:garage-open";case"power":case"plug":return i?"mdi:power-plug-off":"mdi:power-plug";case"gas":case"problem":case"safety":case"tamper":return i?"mdi:check-circle":"mdi:alert-circle";case"smoke":return i?"mdi:check-circle":"mdi:smoke";case"heat":return i?"mdi:thermometer":"mdi:fire";case"light":return i?"mdi:brightness-5":"mdi:brightness-7";case"lock":return i?"mdi:lock":"mdi:lock-open";case"moisture":return i?"mdi:water-off":"mdi:water";case"motion":return i?"mdi:walk":"mdi:run";case"occupancy":case"presence":return i?"mdi:home-outline":"mdi:home";case"opening":return i?"mdi:square":"mdi:square-outline";case"running":return i?"mdi:stop":"mdi:play";case"sound":return i?"mdi:music-note-off":"mdi:music-note";case"update":return i?"mdi:package":"mdi:package-up";case"vibration":return i?"mdi:crop-portrait":"mdi:vibrate";case"window":return i?"mdi:window-closed":"mdi:window-open";default:return i?"mdi:radiobox-blank":"mdi:checkbox-marked-circle"}},cover:function(t){var e="closed"!==t.state;switch(t.attributes.device_class){case"garage":return e?"mdi:garage-open":"mdi:garage";case"door":return e?"mdi:door-open":"mdi:door-closed";case"shutter":return e?"mdi:window-shutter-open":"mdi:window-shutter";case"blind":return e?"mdi:blinds-open":"mdi:blinds";case"window":return e?"mdi:window-open":"mdi:window-closed";default:return pt("cover",t.state)}},sensor:function(t){var e=t.attributes.device_class;if(e&&e in Et)return Et[e];if("battery"===e){var i=Number(t.state);if(isNaN(i))return"mdi:battery-unknown";var r=10*Math.round(i/10);return r>=100?"mdi:battery":r<=0?"mdi:battery-alert":"hass:battery-"+r}var n=t.attributes.unit_of_measurement;return"°C"===n||"°F"===n?"mdi:thermometer":pt("sensor")},input_datetime:function(t){return t.attributes.has_date?t.attributes.has_time?pt("input_datetime"):"mdi:calendar":"mdi:clock"}},Nt=function(t){if(!t)return"mdi:bookmark";if(t.attributes.icon)return t.attributes.icon;var e=R(t.entity_id);return e in Dt?Dt[e](t):pt(e,t.state)}},248:function(t,e,i){var r=this&&this.__decorate||function(t,e,i,r){var n,a=arguments.length,o=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(o=(a<3?n(o):a>3?n(e,i,o):n(e,i))||o);return a>3&&o&&Object.defineProperty(e,i,o),o};Object.defineProperty(e,"__esModule",{value:!0});const n=i(337),a=i(924),o=i(800),s=i(854),c=i(330),l=i(429),d=i(139),u=i(129),m=i(135);console.info(`%c FLOWER-CARD %c ${c.version}`,"color: cyan; background: black; font-weight: bold;","color: darkblue; background: white; font-weight: bold;"),window.customCards=window.customCards||[],window.customCards.push({type:d.CARD_NAME,name:"Flower card",preview:!0,description:"Custom flower card for https://github.com/Olen/homeassistant-plant"});let h=class extends n.LitElement{constructor(){super(...arguments),this._showInfo=!1}connectedCallback(){if(super.connectedCallback(),!document.getElementById("flower-card-fonts")){const t=document.createElement("link");t.id="flower-card-fonts",t.rel="stylesheet",t.href="https://fonts.googleapis.com/css2?family=Indie+Flower&family=Patrick+Hand&display=swap",document.head.appendChild(t)}}set hass(t){this._hass=t,this.stateObj=this.config?.entity?t.states[this.config.entity]:void 0;const e=this.stateObj?.attributes.entity_picture;e!==this._lastEntityPicture&&(this._lastEntityPicture=e,this._resolveEntityPicture(t,e)),this.previousFetchDate||(this.previousFetchDate=0),Date.now()>this.previousFetchDate+1e3&&(this.previousFetchDate=Date.now(),this.get_data(t).then((()=>{this.requestUpdate()})).catch((()=>{})))}async _resolveEntityPicture(t,e){e?(0,m.isMediaSourceUrl)(e)?(this._resolvedImageUrl=await(0,m.resolveMediaSource)(t,e),this.requestUpdate()):this._resolvedImageUrl=e:this._resolvedImageUrl=void 0}static getConfigForm(){return{schema:[{name:"entity",required:!0,selector:{entity:{domain:"plant"}}},{name:"name",selector:{text:{}}},{name:"battery_sensor",selector:{entity:{domain:"sensor",device_class:"battery"}}},{name:"temperature_sensor",selector:{entity:{domain:"sensor",device_class:"temperature"}}},{name:"humidity_sensor",selector:{entity:{domain:"sensor",device_class:"humidity"}}},{name:"weather_entity",selector:{entity:{domain:"weather"}}},{type:"expandable",name:"",title:"Bars",schema:[{name:"show_bars",selector:{select:{multiple:!0,options:d.plantAttributes}}}]},{type:"expandable",name:"",title:"Appearance",schema:[{name:"display_type",selector:{select:{options:[{value:"full",label:"Full"},{value:"compact",label:"Compact"}]}}},{name:"hide_species",selector:{boolean:{}}},{name:"hide_image",selector:{boolean:{}}},{name:"hide_units",selector:{boolean:{}}},{name:"is_outside",selector:{boolean:{}}}]}],computeLabel:t=>({entity:"Entity",name:"Display Name",display_type:"Display Type",battery_sensor:"Battery Sensor",temperature_sensor:"Room Temperature (Override)",humidity_sensor:"Room Humidity (Override)",weather_entity:"Weather Entity (Override)",show_bars:"Show Bars",hide_species:"Hide Species",hide_image:"Hide Image",hide_units:"Hide Units",is_outside:"Is Outside?"}[t.name]||t.name)}}static getStubConfig(t){const e=t=>"object"==typeof t&&null!==t&&"entity_id"in t&&"string"==typeof t.entity_id&&t.entity_id.startsWith("plant.");let i=[];try{i=Object.values(t.states).filter(e)}catch(t){console.info(`Unable to get ha-data: ${t}`)}return{entity:i.length>0?i[0].entity_id:"plant.my_plant",battery_sensor:"sensor.myflower_battery",show_bars:d.default_show_bars}}setConfig(t){if(!t.entity)throw new Error("You need to define an entity");this.config=t}_markWatered(t){t.stopPropagation(),this._hass.callService("plant","watered",{entity_id:this.config?.entity})}_toggleSort(t){t.stopPropagation(),this.config?.sort_entity&&this._hass.callService("input_select","select_next",{entity_id:this.config.sort_entity})}_toggleInfo(t){t.stopPropagation(),this._showInfo=!this._showInfo}async _removePlant(t){t.stopPropagation();const e=this.config?.name||this.stateObj?.attributes?.friendly_name;window.confirm(`Êtes-vous sûr de vouloir supprimer définitivement la plante "${e}" ?\n\nCette action supprimera l'intégration et toutes les données associées.`)&&await this._hass.callService("plant","remove_plant",{entity_id:this.config?.entity})}_renderPlantInfoPanel(){if(!this._showInfo)return n.html``;const t=this.plantinfo?.result||{},e=this.stateObj.attributes,i=[{label:"Plant-ID (PID)",value:t.pid||t.display_pid||e.pid||e.plant_id},{label:"Scientific name",value:t.scientific_name||t.species||e.species||e.scientific_name},{label:"Category",value:t.category||e.category||e.plant_category||t.plant_type||e.plant_type||t.type||e.type},{label:"Origin",value:(()=>{const i=t.origin||t.origins||e.origin||e.origins||e.plant_origin||t.native_location||e.native_location||t.native_distribution||e.native_distribution||t.native_range||e.native_range||t.distribution||e.distribution||t.native_region||e.native_region;return Array.isArray(i)?i.join(", "):i})()},{label:"Common names",value:(()=>{const i=t.common_names||e.common_name;return Array.isArray(i)?i.map((t=>"object"==typeof t?t.name:t)).join(", "):i||t.alias||t.friendly_name||e.friendly_name})()}].filter((t=>void 0!==t.value&&null!==t.value&&""!==t.value));return n.html`
      <div class="plant-info-panel">
        <div class="panel-header">
          <span>Plant Details</span>
          <div class="panel-actions">
            <ha-icon
              class="delete-button"
              icon="mdi:delete-outline"
              @click="${this._removePlant}"
              title="Supprimer la plante"
            ></ha-icon>
            <ha-icon icon="mdi:close" @click="${this._toggleInfo}"></ha-icon>
          </div>
        </div>
        ${i.length>0?n.html`
              <div class="panel-content">
                ${i.map((t=>n.html`
                    <div class="info-item">
                      <span class="info-label">${t.label}</span>
                      <span class="info-value">${t.value}</span>
                    </div>
                  `))}
              </div>
            `:""}
      </div>
    `}render(){if(!this.config||!this._hass)return n.html``;if(!this.stateObj)return n.html`
        <hui-warning> Entity not available: ${this.config.entity} </hui-warning>
      `;const t=this.stateObj.attributes.species,e=this.config.entity;let i=null;if(this._hass){const t=this._hass.entities?this._hass.entities[e]:null;if(t){let e=t.area_id;!e&&t.device_id&&this._hass.devices&&(e=this._hass.devices[t.device_id]?.area_id),e&&this._hass.areas&&(i=this._hass.areas[e]?.name||null)}}const r=i||this.stateObj.attributes.area||null,a=this.config.name||this.stateObj.attributes.friendly_name,o=this.config.hide_species??!1,c=this.config.hide_image??!1,h=this.config.display_type===s.DisplayType.Compact?"header-compact":"header",p=this.config.display_type===s.DisplayType.Compact||c?"":"card-margin-top",g=c?" no-image":"",f=new Date,b=f.getHours()+f.getMinutes()/60,y=10*(b-12),v=b<6||b>20,_=this.plantinfo?.result?.illuminance?.current||this.plantinfo?.result?.brightness?.current||500,w=`\n      filter: drop-shadow(${y}px 10px 8px rgba(0,0,0,${v?.05:Math.min(.4,_/2e3+.1)}));\n      transform: perspective(1000px) rotateX(5deg) rotateY(${y/5}deg);\n    `,x=this.stateObj.attributes.next_watering||this.plantinfo?.result?.next_watering||(this.plantinfo?(0,u.calculate_next_watering)(this._hass,this.config,this.plantinfo):"Calculating..."),$=parseInt(String(x));let A="watering-safe";isNaN($)||$<=0?A="watering-urgent":1===$&&(A="watering-warning");const M=this.stateObj.attributes.watering_explanation;return n.html`
      <ha-card class="${p}">
        <div
          class="${h}${g}"
          @click="${()=>(0,m.moreInfo)(this,this.stateObj.entity_id)}"
        >
          ${c?"":n.html`
                <div class="plant-image-container" style="${w}">
                  <img src="${this._resolvedImageUrl||d.missingImage}" />
                </div>
              `}
          <div class="header-text">
            <div class="name-area-container">
              <span id="name">
                <span class="name-text">${a}</span>
                <ha-icon
                  class="info-button"
                  icon="mdi:information-outline"
                  @click="${this._toggleInfo}"
                  title="Plant Information"
                ></ha-icon>
                <ha-icon
                  class="delete-button-main"
                  icon="mdi:delete-outline"
                  @click="${this._removePlant}"
                  title="Supprimer la plante"
                ></ha-icon>
                <ha-icon
                  .icon="mdi:${"problem"==this.stateObj.state.toLowerCase()?"alert-circle-outline":""}"
                ></ha-icon>
              </span>
              <span id="area">${r||n.html`&nbsp;`}</span>
              ${o?"":n.html`<span id="species">${t||n.html`&nbsp;`}</span>`}
            </div>
            <div id="next-watering" class="${A} tooltip">
              <span>${x}</span>
              ${M?n.html`<span class="tip">${M}</span>`:""}
              <ha-icon
                class="water-button"
                icon="mdi:water-pump"
                @click="${t=>this._markWatered(t)}"
                title="Mark as watered"
              ></ha-icon>
              ${this.config?.sort_entity?n.html`
                    <ha-icon
                      class="sort-button"
                      icon="mdi:sort"
                      @click="${t=>this._toggleSort(t)}"
                      title="Changer l'ordre de tri"
                    ></ha-icon>
                  `:""}
            </div>
          </div>
          <span id="battery"
            >${(0,l.renderExtraBadges)(this)}${(0,l.renderBattery)(this)}</span
          >
        </div>
        ${(0,l.renderWateringStatus)(this)}
        <div class="divider"></div>
        ${(0,l.renderAttributes)(this)} ${this._renderPlantInfoPanel()}
      </ha-card>
    `}async get_data(t){if(t&&t.connected)try{this.plantinfo=await t.callWS({type:"plant/get_info",entity_id:this.config?.entity})}catch{this.plantinfo={result:{}}}}getCardSize(){return 5}static get styles(){return o.style}};r([(0,a.property)()],h.prototype,"_hass",void 0),r([(0,a.property)()],h.prototype,"config",void 0),r([(0,a.state)()],h.prototype,"_showInfo",void 0),h=r([(0,a.customElement)(d.CARD_NAME)],h),e.default=h},800:(t,e,i)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.style=void 0;const r=i(337);e.style=r.css`
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
`},854:(t,e)=>{var i;Object.defineProperty(e,"__esModule",{value:!0}),e.DisplayType=void 0,function(t){t.Full="full",t.Compact="compact"}(i||(e.DisplayType=i={}))},429:(t,e,i)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.renderAttributeChunks=e.getChunkedDisplayed=e.renderAttribute=e.renderAttributes=e.renderExtraBadges=e.renderExtraBadge=e.renderBattery=e.isPpfdUnit=e.renderWateringStatus=void 0;const r=i(854),n=i(337),a=i(534),o=i(139),s=i(135);e.renderWateringStatus=t=>{const e=t.plantinfo?.result?.watering,i=t.plantinfo?.result?.health;if(!e)return n.html``;let r;if(void 0!==e.days_until&&null!==e.days_until)r=Math.round(e.days_until);else{const t=new Date(e.next_watering);r=Math.round((t.getTime()-Date.now())/864e5)}const a=e.water_factor||1;let o="",c="Next watering:";return isNaN(r)?o=e.next_watering||"Unknown":0===r?o="Today":1===r?o="Tomorrow":-1===r?(o="Yesterday",c="Watering overdue:"):r>0?o=`In ${r} days`:(o=`${Math.abs(r)} days ago`,c="Watering overdue:"),n.html`
    <div
      class="watering-status"
      @click="${()=>(0,s.moreInfo)(t,t.stateObj.entity_id)}"
    >
      <div class="watering-row">
        <span class="watering-next">
          <ha-icon .icon="mdi:watering-can"></ha-icon>
          ${c} ${o}
          ${e.forecast_impact?n.html`<span class="forecast-hint" title="Forecasted weather impact"
                >(${e.forecast_impact})</span
              >`:""}
        </span>
        <div class="care-badges">
          ${e.tendency?n.html`
                <span
                  class="care-badge tendency"
                  style="color: ${e.tendency.color}"
                  title="Water demand tendency: ${e.tendency.label}"
                >
                  <ha-icon .icon="${e.tendency.icon}"></ha-icon>
                  ${e.tendency.label}
                </span>
              `:""}
          ${i?.misting_required?n.html`
                <span
                  class="care-badge misting"
                  title="Low humidity - misting recommended"
                >
                  <ha-icon icon="mdi:sprinkler-variant"></ha-icon> MIST
                </span>
              `:""}
          ${e.smart_watering?n.html`
                <span
                  class="care-badge smart"
                  title="Intelligent Assistant: Automated watering frequency"
                >
                  <ha-icon icon="mdi:auto-fix"></ha-icon> AUTO
                </span>
              `:""}
          <span
            class="watering-factor ${1!==a?"active":""}"
            title="Adaptive learning factor: Corrects base frequency based on your habits"
          >
            ${a.toFixed(2)}x
          </span>
        </div>
      </div>
      <div class="health-row">
        ${i?n.html`
              <div
                class="health-score-container tooltip"
                title="${i.reasons?.join("\n")||""}"
              >
                <div class="health-label">Comfort Score</div>
                <div class="health-bar-bg">
                  <div
                    class="health-bar-fill"
                    style="width: ${i.comfort_score}%; background-color: ${i.comfort_score>80?"var(--success-color, #43a047)":i.comfort_score>50?"var(--warning-color, #ffa600)":"var(--error-color, #db4437)"}"
                  ></div>
                </div>
                <div class="health-value">${i.comfort_score}%</div>
                ${i.reasons?n.html`<div class="tip">${i.reasons.join("<br>")}</div>`:""}
              </div>
            `:""}
        ${e.explanation?n.html`
              <div class="watering-explanation">${e.explanation}</div>
            `:""}
      </div>
    </div>
  `},e.isPpfdUnit=t=>!!t&&t.toLowerCase().includes("mol"),e.renderBattery=t=>{if(!t.config.battery_sensor)return n.html``;const e=t._hass.states[t.config.battery_sensor];if(!e)return n.html``;const i=parseInt(e.state),{icon:r,color:a}=[{threshold:90,icon:"mdi:battery",color:"green"},{threshold:80,icon:"mdi:battery-90",color:"green"},{threshold:70,icon:"mdi:battery-80",color:"green"},{threshold:60,icon:"mdi:battery-70",color:"green"},{threshold:50,icon:"mdi:battery-60",color:"green"},{threshold:40,icon:"mdi:battery-50",color:"green"},{threshold:30,icon:"mdi:battery-40",color:"orange"},{threshold:20,icon:"mdi:battery-30",color:"orange"},{threshold:10,icon:"mdi:battery-20",color:"red"},{threshold:0,icon:"mdi:battery-10",color:"red"},{threshold:-1/0,icon:"mdi:battery-alert-variant-outline",color:"red"}].find((({threshold:t})=>i>t))||{icon:"mdi:battery-alert-variant-outline",color:"red"};return n.html`
    <div
      class="battery tooltip"
      @click="${e=>{e.stopPropagation(),(0,s.moreInfo)(t,t.config.battery_sensor)}}"
    >
      <div class="tip" style="text-align:center;">${i}%</div>
      <ha-icon .icon="${r}" style="color: ${a}"></ha-icon>
    </div>
  `},e.renderExtraBadge=(t,e)=>{if(e.text){const t="none"===e.icon?.toLowerCase(),i=e.color||"var(--secondary-text-color)";if(t&&e.show_state)return n.html`
        <div class="extra-badge tooltip">
          <div class="tip" style="text-align:center;">${e.text}</div>
          <span class="badge-text" style="color: ${i}">${e.text}</span>
        </div>
      `;const r=t?"":e.icon||"mdi:information";return n.html`
      <div class="extra-badge tooltip">
        <div class="tip" style="text-align:center;">${e.text}</div>
        ${t?"":n.html`<ha-icon .icon="${r}" style="color: ${i}"></ha-icon>`}
        ${e.show_state?n.html`<span class="badge-text">${e.text}</span>`:""}
      </div>
    `}if(!e.entity&&e.icon){const t=e.color||"var(--secondary-text-color)";return n.html`
      <div class="extra-badge">
        <ha-icon .icon="${e.icon}" style="color: ${t}"></ha-icon>
      </div>
    `}if(!e.entity)return n.html``;const i=t._hass.states[e.entity];if(!i)return n.html``;const r=e.entity.startsWith("binary_sensor."),a=i.state,o=i.attributes.friendly_name||e.entity;let c,l,d,u=e.icon||i.attributes.icon;if(!u)if(r){const t=i.attributes.device_class,e="on"===a,r={battery:["mdi:battery","mdi:battery-outline"],battery_charging:["mdi:battery-charging","mdi:battery"],cold:["mdi:snowflake","mdi:snowflake-off"],connectivity:["mdi:check-network-outline","mdi:close-network-outline"],door:["mdi:door-open","mdi:door-closed"],garage_door:["mdi:garage-open","mdi:garage"],gas:["mdi:alert-circle","mdi:check-circle"],heat:["mdi:fire","mdi:fire-off"],light:["mdi:brightness-7","mdi:brightness-5"],lock:["mdi:lock-open","mdi:lock"],moisture:["mdi:water","mdi:water-off"],motion:["mdi:motion-sensor","mdi:motion-sensor-off"],moving:["mdi:motion","mdi:motion-off"],occupancy:["mdi:home","mdi:home-outline"],opening:["mdi:square-outline","mdi:square"],plug:["mdi:power-plug","mdi:power-plug-off"],power:["mdi:power","mdi:power-off"],presence:["mdi:home","mdi:home-outline"],problem:["mdi:alert-circle","mdi:check-circle"],running:["mdi:play","mdi:stop"],safety:["mdi:alert-circle","mdi:check-circle"],smoke:["mdi:smoke-detector-alert","mdi:smoke-detector"],sound:["mdi:music-note","mdi:music-note-off"],tamper:["mdi:alert-circle","mdi:check-circle"],update:["mdi:package-up","mdi:package"],vibration:["mdi:vibrate","mdi:vibrate-off"],window:["mdi:window-open","mdi:window-closed"]};u=t&&r[t]?e?r[t][0]:r[t][1]:e?"mdi:checkbox-marked-circle":"mdi:checkbox-blank-circle-outline"}else u="mdi:information";if(c=r&&!e.attribute?"on"===a?e.color_on||"var(--primary-color)":e.color_off||"var(--disabled-text-color)":e.color||"var(--secondary-text-color)",e.attribute){const r=i.attributes[e.attribute];if(d=e.attribute,null==r)l="N/A";else if("last_changed"===e.attribute||"last_updated"===e.attribute){const t="last_changed"===e.attribute?i.last_changed:i.last_updated;l=t?new Date(t).toLocaleString():String(r)}else l=t._hass.formatEntityAttributeValue?t._hass.formatEntityAttributeValue(i,e.attribute):String(r)}else d=o,l=r?a:t._hass.formatEntityState(i);const m=`${d}: ${l}`;return n.html`
    <div
      class="extra-badge tooltip"
      @click="${i=>{i.stopPropagation(),(0,s.moreInfo)(t,e.entity)}}"
    >
      <div class="tip" style="text-align:center;">${m}</div>
      <ha-icon .icon="${u}" style="color: ${c}"></ha-icon>
      ${e.show_state?n.html`<span class="badge-text">${l}</span>`:""}
    </div>
  `},e.renderExtraBadges=t=>t.config.extra_badges&&0!==t.config.extra_badges.length?t.config.extra_badges.map((i=>(0,e.renderExtraBadge)(t,i))):n.html``,e.renderAttributes=t=>{const i={},r=t.config.show_bars||o.default_show_bars;if(t.plantinfo&&t.plantinfo.result){const e=t.plantinfo.result;for(const n of r){const r=e[n];let a=r?.sensor;a&&"unknown"!==t._hass.states[a]?.state||"temperature"!==n||(a=t.config.temperature_sensor||e.room_temperature),a&&"unknown"!==t._hass.states[a]?.state||"humidity"!==n||(a=t.config.humidity_sensor||e.room_humidity);const o=a?t._hass.states[a]:void 0,s=o&&"unknown"!==o.state&&"unavailable"!==o.state&&"none"!==o.state,c=r&&void 0!==r.current&&null!==r.current&&"unavailable"!==r.current&&"unknown"!==r.current,l=t.config.show_bars&&t.config.show_bars.includes(n);if(s||c||l){if("dli"===n&&!l){const i=e.illuminance?.sensor||e.brightness?.sensor;if(!i||"unknown"===t._hass.states[i]?.state||"unavailable"===t._hass.states[i]?.state)continue}if(r||a){const e=s?Number(o.state):r?.current||0,c=s?t._hass.formatEntityState(o).replace(/[^\d,.+-]/g,""):String(e),l=o?.attributes?.unit_of_measurement||r?.unit_of_measurement||"",d=void 0!==r?.min?r.min:null,u=void 0!==r?.max?r.max:null,m={max:null!==u?Number(u):null,min:null!==d?Number(d):null};i[n]={name:n,current:Number(e),limits:m,icon:String(r?.icon||("temperature"===n?"mdi:thermometer":"mdi:water-percent")),sensor:String(a||""),unit_of_measurement:String(l),display_state:c}}}}}return(0,e.renderAttributeChunks)(t,i)},e.renderAttribute=(t,e)=>{const{max:i,min:o}=e.limits,c=e.unit_of_measurement,l="lx"===e.unit_of_measurement,d=e.icon||"mdi:help-circle-outline",u=e.current??0,m=!isNaN(u)&&null!=u,h=null!==i&&null!==o&&!isNaN(i)&&!isNaN(o)&&void 0!==i&&void 0!==o,p=e.display_state,g=m&&h&&(u<o||u>i)?"var(--label-badge-red)":"var(--label-badge-green)",f=!l||u<=0||o<=0||!h?h?100*Math.max(0,Math.min(1,(u-o)/(i-o))):0:100*Math.max(0,Math.min(1,(Math.log(u)-Math.log(o))/(Math.log(i)-Math.log(o)))),b="dli"===e.name||"dli_24h"===e.name?'<math style="display: inline-grid;" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mfrac><mrow><mn>mol</mn></mrow><mrow><mn>d</mn><mn>⋅</mn><msup><mn>m</mn><mn>2</mn></msup></mrow></mfrac></mrow></math>':c,y=t.config.display_type===r.DisplayType.Compact,v=t.config.bars_per_row??(y?1:2),_=!(t.config.hide_units??y),w="attribute tooltip "+(1===v?"width-100":""),x="temperature"===e.name||"humidity"===e.name;return n.html`
    <div
      class="${w}"
      @click="${()=>(0,s.moreInfo)(t,e.sensor)}"
    >
      <div class="tip" style="text-align:center;">
        ${e.name}: ${p} ${c}
        ${h?n.html`<br />(${o} - ${i})`:""}
      </div>
      <ha-icon
        .icon="${d}"
        style="color: ${x&&h?g:"inherit"}"
      ></ha-icon>
      ${!x&&h?n.html`
            <div class="meter-container">
              <div
                class="meter-bar"
                style="width: ${m?f:0}%; background-color: var(--label-badge-green);"
              ></div>
            </div>
          `:""}
      <div
        class="attribute-header"
        style="${x&&h?`color: ${g}`:""}"
      >
        <span class="value">${p}</span>${_?n.html` <span class="unit">${(0,a.unsafeHTML)(b)}</span>`:""}
      </div>
    </div>
  `},e.getChunkedDisplayed=(t,e)=>Object.values(t).reduce(((t,i,r)=>{const n=Math.floor(r/e);return t[n]||(t[n]=[]),t[n].push(i),t}),[]),e.renderAttributeChunks=(t,i)=>{const a=t.config.display_type===r.DisplayType.Compact,o=t.config.bars_per_row??(a?1:2),s=1===o,c=(0,e.getChunkedDisplayed)(i,o),l="attributes "+(s?"width-100":"");return c.map((i=>n.html`<div class="${l}">
        ${i.map((i=>i?n.html`${(0,e.renderAttribute)(t,i)}`:""))}
      </div>`)).flat()}},139:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.plantAttributes=e.missingImage=e.default_show_bars=e.CARD_EDITOR_NAME=e.CARD_NAME=void 0,e.CARD_NAME="flower-card",e.CARD_EDITOR_NAME=`${e.CARD_NAME}-editor`,e.default_show_bars=["moisture","conductivity","temperature","illuminance","humidity","dli"],e.missingImage="data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIG1lZXQiIGZvY3VzYWJsZT0iZmFsc2UiIHJvbGU9ImltZyIgYXJpYS1oaWRkZW49InRydWUiIHZpZXdCb3g9IjAgMCAyNCAyNCI+CiAgICAgIDxnPgogICAgICA8IS0tP2xpdCQ0MTM0MjMxNjkkLS0+PHBhdGggZD0iTTMsMTNBOSw5IDAgMCwwIDEyLDIyQzEyLDE3IDcuOTcsMTMgMywxM00xMiw1LjVBMi41LDIuNSAwIDAsMSAxNC41LDhBMi41LDIuNSAwIDAsMSAxMiwxMC41QTIuNSwyLjUgMCAwLDEgOS41LDhBMi41LDIuNSAwIDAsMSAxMiw1LjVNNS42LDEwLjI1QTIuNSwyLjUgMCAwLDAgOC4xLDEyLjc1QzguNjMsMTIuNzUgOS4xMiwxMi41OCA5LjUsMTIuMzFDOS41LDEyLjM3IDkuNSwxMi40MyA5LjUsMTIuNUEyLjUsMi41IDAgMCwwIDEyLDE1QTIuNSwyLjUgMCAwLDAgMTQuNSwxMi41QzE0LjUsMTIuNDMgMTQuNSwxMi4zNyAxNC41LDEyLjMxQzE0Ljg4LDEyLjU4IDE1LjM3LDEyLjc1IDE1LjksMTIuNzVDMTcuMjgsMTIuNzUgMTguNCwxMS42MyAxOC40LDEwLjI1QzE4LjQsOS4yNSAxNy44MSw4LjQgMTYuOTcsOEMxNy44MSw3LjYgMTguNCw2Ljc0IDE4LjQsNS43NUMxOC40LDQuMzcgMTcuMjgsMy4yNSAxNS45LDMuMjVDMTUuMzcsMy4yNSAxNC44OCwzLjQxIDE0LjUsMy42OUMxNC41LDMuNjMgMTQuNSwzLjU2IDE0LjUsMy41QTIuNSwyLjUgMCAwLDAgMTIsMUEyLjUsMi41IDAgMCwwIDkuNSwzLjVDOS41LDMuNTYgOS41LDMuNjMgOS41LDMuNjlDOS4xMiwzLjQxIDguNjMsMy4yNSA4LjEsMy4yNUEyLjUsMi41IDAgMCwwIDUuNiw1Ljc1QzUuNiw2Ljc0IDYuMTksNy42IDcuMDMsOEM2LjE5LDguNCA1LjYsOS4yNSA1LjYsMTAuMjVNMTIsMjJBOSw5IDAgMCwwIDIxLDEzQzE2LDEzIDEyLDE3IDEyLDIyWiI+PC9wYXRoPgogICAgICA8L2c+Cjwvc3ZnPgo=",e.plantAttributes=[{label:"Moisture",value:"moisture"},{label:"Conductivity",value:"conductivity"},{label:"Temperature",value:"temperature"},{label:"Illuminance",value:"illuminance"},{label:"Humidity",value:"humidity"},{label:"Daily Light Integral",value:"dli"},{label:"DLI (24h rolling)",value:"dli_24h"},{label:"CO2",value:"co2"},{label:"Soil Temperature",value:"soil_temperature"},{label:"Room Temperature",value:"room_temperature"},{label:"Room Humidity",value:"room_humidity"}]},135:(t,e,i)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.resolveMediaSource=e.isMediaSourceUrl=e.moreInfo=void 0;const r=i(356);e.moreInfo=(t,e)=>{(0,r.fireEvent)(t,"hass-more-info",{entityId:e},{bubbles:!1,composed:!0})},e.isMediaSourceUrl=t=>t?.startsWith("media-source://")??!1,e.resolveMediaSource=async(t,i)=>{if(!(0,e.isMediaSourceUrl)(i))return i;try{return(await t.callWS({type:"media_source/resolve_media",media_content_id:i})).url}catch(t){return console.error("Failed to resolve media source:",t),""}}},129:(t,e)=>{function i(t){return`${Math.max(0,t)} j`}Object.defineProperty(e,"__esModule",{value:!0}),e.calculate_next_watering=function(t,e,r){const n=r.result,a=n.moisture;if(!a)return"Unknown";const o=parseFloat(a.current),s=null!==a.min?parseFloat(a.min):20,c=null!==a.max?parseFloat(a.max):60,l=n.watering||7;if(isNaN(o)){const t=n.last_watered;if(t){const e=new Date(t),r=new Date(e.getTime()+24*l*60*60*1e3),n=new Date,a=r.getTime()-n.getTime();return i(Math.ceil(a/864e5))}return i(0)}let d=(c-s)/l;d<=0&&(d=5);const u=void 0!==e.is_outside?e.is_outside:n.outside||!1,m=e.temperature_sensor||n.room_temperature,h=e.humidity_sensor||n.room_humidity;let p=1;if(m&&t.states[m]){const e=parseFloat(t.states[m].state);isNaN(e)||(p*=1+.05*(e-22))}if(h&&t.states[h]){const e=parseFloat(t.states[h].state);isNaN(e)||(p*=1-.004*(e-50))}const g=e.weather_entity||n.weather_entity;u&&g&&t.states[g]&&(t.states[g].attributes.forecast||[]).slice(0,2).some((t=>["rainy","pouring","hail","snowy","snowy-rainy"].includes(t.condition)||void 0!==t.precipitation&&t.precipitation>2))&&(p*=.5),p=Math.max(.1,p);const f=d*p,b=o-s;return i(Math.floor(b/f))}},842:(t,e,i)=>{i.d(e,{BO:()=>s,mN:()=>S,Rf:()=>d,AH:()=>l,W3:()=>$,sk:()=>u,Ec:()=>A,qM:()=>n,iz:()=>c});const r=globalThis,n=r.ShadowRoot&&(void 0===r.ShadyCSS||r.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,a=Symbol(),o=new WeakMap;class s{constructor(t,e,i){if(this._$cssResult$=!0,i!==a)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(n&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=o.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&o.set(e,t))}return t}toString(){return this.cssText}}const c=t=>new s("string"==typeof t?t:t+"",void 0,a),l=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,r)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[r+1]),t[0]);return new s(i,t,a)},d=(t,e)=>{if(n)t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const i of e){const e=document.createElement("style"),n=r.litNonce;void 0!==n&&e.setAttribute("nonce",n),e.textContent=i.cssText,t.appendChild(e)}},u=n?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return c(e)})(t):t,{is:m,defineProperty:h,getOwnPropertyDescriptor:p,getOwnPropertyNames:g,getOwnPropertySymbols:f,getPrototypeOf:b}=Object,y=globalThis,v=y.trustedTypes,_=v?v.emptyScript:"",w=y.reactiveElementPolyfillSupport,x=(t,e)=>t,$={toAttribute(t,e){switch(e){case Boolean:t=t?_:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},A=(t,e)=>!m(t,e),M={attribute:!0,type:String,converter:$,reflect:!1,useDefault:!1,hasChanged:A};Symbol.metadata??=Symbol("metadata"),y.litPropertyMetadata??=new WeakMap;class S extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=M){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(t,i,e);void 0!==r&&h(this.prototype,t,r)}}static getPropertyDescriptor(t,e,i){const{get:r,set:n}=p(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:r,set(e){const a=r?.call(this);n?.call(this,e),this.requestUpdate(t,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??M}static _$Ei(){if(this.hasOwnProperty(x("elementProperties")))return;const t=b(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(x("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(x("properties"))){const t=this.properties,e=[...g(t),...f(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(u(t))}else void 0!==t&&e.push(u(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return d(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,i);if(void 0!==r&&!0===i.reflect){const n=(void 0!==i.converter?.toAttribute?i.converter:$).toAttribute(e,i.type);this._$Em=t,null==n?this.removeAttribute(r):this.setAttribute(r,n),this._$Em=null}}_$AK(t,e){const i=this.constructor,r=i._$Eh.get(t);if(void 0!==r&&this._$Em!==r){const t=i.getPropertyOptions(r),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:$;this._$Em=r;const a=n.fromAttribute(e,t.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(t,e,i,r=!1,n){if(void 0!==t){const a=this.constructor;if(!1===r&&(n=this[t]),i??=a.getPropertyOptions(t),!((i.hasChanged??A)(n,e)||i.useDefault&&i.reflect&&n===this._$Ej?.get(t)&&!this.hasAttribute(a._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:r,wrapped:n},a){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,a??e??this[t]),!0!==n||void 0!==a)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===r&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,r=this[e];!0!==t||this._$AL.has(e)||void 0===r||this.C(e,void 0,i,r)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach((t=>this._$ET(t,this[t]))),this._$EM()}updated(t){}firstUpdated(t){}}S.elementStyles=[],S.shadowRootOptions={mode:"open"},S[x("elementProperties")]=new Map,S[x("finalized")]=new Map,w?.({ReactiveElement:S}),(y.reactiveElementVersions??=[]).push("2.1.2")},752:(t,e,i)=>{i.d(e,{JW:()=>M,XX:()=>q,c0:()=>k,ej:()=>S,ge:()=>H,qy:()=>A,s6:()=>E});const r=globalThis,n=r.trustedTypes,a=n?n.createPolicy("lit-html",{createHTML:t=>t}):void 0,o="$lit$",s=`lit$${Math.random().toFixed(9).slice(2)}$`,c="?"+s,l=`<${c}>`,d=document,u=()=>d.createComment(""),m=t=>null===t||"object"!=typeof t&&"function"!=typeof t,h=Array.isArray,p=t=>h(t)||"function"==typeof t?.[Symbol.iterator],g="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,b=/-->/g,y=/>/g,v=RegExp(`>|${g}(?:([^\\s"'>=/]+)(${g}*=${g}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),_=/'/g,w=/"/g,x=/^(?:script|style|textarea|title)$/i,$=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),A=$(1),M=$(2),S=$(3),k=Symbol.for("lit-noChange"),E=Symbol.for("lit-nothing"),D=new WeakMap,N=d.createTreeWalker(d,129);function I(t,e){if(!h(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==a?a.createHTML(e):e}const C=(t,e)=>{const i=t.length-1,r=[];let n,a=2===e?"<svg>":3===e?"<math>":"",c=f;for(let e=0;e<i;e++){const i=t[e];let d,u,m=-1,h=0;for(;h<i.length&&(c.lastIndex=h,u=c.exec(i),null!==u);)h=c.lastIndex,c===f?"!--"===u[1]?c=b:void 0!==u[1]?c=y:void 0!==u[2]?(x.test(u[2])&&(n=RegExp("</"+u[2],"g")),c=v):void 0!==u[3]&&(c=v):c===v?">"===u[0]?(c=n??f,m=-1):void 0===u[1]?m=-2:(m=c.lastIndex-u[2].length,d=u[1],c=void 0===u[3]?v:'"'===u[3]?w:_):c===w||c===_?c=v:c===b||c===y?c=f:(c=v,n=void 0);const p=c===v&&t[e+1].startsWith("/>")?" ":"";a+=c===f?i+l:m>=0?(r.push(d),i.slice(0,m)+o+i.slice(m)+s+p):i+s+(-2===m?e:p)}return[I(t,a+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),r]};class T{constructor({strings:t,_$litType$:e},i){let r;this.parts=[];let a=0,l=0;const d=t.length-1,m=this.parts,[h,p]=C(t,e);if(this.el=T.createElement(h,i),N.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(r=N.nextNode())&&m.length<d;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(o)){const e=p[l++],i=r.getAttribute(t).split(s),n=/([.?@])?(.*)/.exec(e);m.push({type:1,index:a,name:n[2],strings:i,ctor:"."===n[1]?U:"?"===n[1]?z:"@"===n[1]?R:P}),r.removeAttribute(t)}else t.startsWith(s)&&(m.push({type:6,index:a}),r.removeAttribute(t));if(x.test(r.tagName)){const t=r.textContent.split(s),e=t.length-1;if(e>0){r.textContent=n?n.emptyScript:"";for(let i=0;i<e;i++)r.append(t[i],u()),N.nextNode(),m.push({type:2,index:++a});r.append(t[e],u())}}}else if(8===r.nodeType)if(r.data===c)m.push({type:2,index:a});else{let t=-1;for(;-1!==(t=r.data.indexOf(s,t+1));)m.push({type:7,index:a}),t+=s.length-1}a++}}static createElement(t,e){const i=d.createElement("template");return i.innerHTML=t,i}}function O(t,e,i=t,r){if(e===k)return e;let n=void 0!==r?i._$Co?.[r]:i._$Cl;const a=m(e)?void 0:e._$litDirective$;return n?.constructor!==a&&(n?._$AO?.(!1),void 0===a?n=void 0:(n=new a(t),n._$AT(t,i,r)),void 0!==r?(i._$Co??=[])[r]=n:i._$Cl=n),void 0!==n&&(e=O(t,n._$AS(t,e.values),n,r)),e}class j{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,r=(t?.creationScope??d).importNode(e,!0);N.currentNode=r;let n=N.nextNode(),a=0,o=0,s=i[0];for(;void 0!==s;){if(a===s.index){let e;2===s.type?e=new L(n,n.nextSibling,this,t):1===s.type?e=new s.ctor(n,s.name,s.strings,this,t):6===s.type&&(e=new F(n,this,t)),this._$AV.push(e),s=i[++o]}a!==s?.index&&(n=N.nextNode(),a++)}return N.currentNode=d,r}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class L{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,r){this.type=2,this._$AH=E,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=O(this,t,e),m(t)?t===E||null==t||""===t?(this._$AH!==E&&this._$AR(),this._$AH=E):t!==this._$AH&&t!==k&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):p(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==E&&m(this._$AH)?this._$AA.nextSibling.data=t:this.T(d.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,r="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=T.createElement(I(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===r)this._$AH.p(e);else{const t=new j(r,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=D.get(t.strings);return void 0===e&&D.set(t.strings,e=new T(t)),e}k(t){h(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,r=0;for(const n of t)r===e.length?e.push(i=new L(this.O(u()),this.O(u()),this,this.options)):i=e[r],i._$AI(n),r++;r<e.length&&(this._$AR(i&&i._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class P{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,r,n){this.type=1,this._$AH=E,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=E}_$AI(t,e=this,i,r){const n=this.strings;let a=!1;if(void 0===n)t=O(this,t,e,0),a=!m(t)||t!==this._$AH&&t!==k,a&&(this._$AH=t);else{const r=t;let o,s;for(t=n[0],o=0;o<n.length-1;o++)s=O(this,r[i+o],e,o),s===k&&(s=this._$AH[o]),a||=!m(s)||s!==this._$AH[o],s===E?t=E:t!==E&&(t+=(s??"")+n[o+1]),this._$AH[o]=s}a&&!r&&this.j(t)}j(t){t===E?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class U extends P{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===E?void 0:t}}class z extends P{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==E)}}class R extends P{constructor(t,e,i,r,n){super(t,e,i,r,n),this.type=5}_$AI(t,e=this){if((t=O(this,t,e,0)??E)===k)return;const i=this._$AH,r=t===E&&i!==E||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==E&&(i===E||r);r&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class F{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){O(this,t)}}const H={M:o,P:s,A:c,C:1,L:C,R:j,D:p,V:O,I:L,H:P,N:z,U:R,B:U,F},W=r.litHtmlPolyfillSupport;W?.(T,L),(r.litHtmlVersions??=[]).push("3.3.2");const q=(t,e,i)=>{const r=i?.renderBefore??e;let n=r._$litPart$;if(void 0===n){const t=i?.renderBefore??null;r._$litPart$=n=new L(e.insertBefore(u(),t),t,void 0,i??{})}return n._$AI(t),n}},924:(t,e,i)=>{i.r(e),i.d(e,{customElement:()=>r,eventOptions:()=>l,property:()=>s,query:()=>u,queryAll:()=>h,queryAssignedElements:()=>g,queryAssignedNodes:()=>f,queryAsync:()=>p,standardProperty:()=>o,state:()=>c});const r=t=>(e,i)=>{void 0!==i?i.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)};var n=i(842);const a={attribute:!0,type:String,converter:n.W3,reflect:!1,hasChanged:n.Ec},o=(t=a,e,i)=>{const{kind:r,metadata:n}=i;let o=globalThis.litPropertyMetadata.get(n);if(void 0===o&&globalThis.litPropertyMetadata.set(n,o=new Map),"setter"===r&&((t=Object.create(t)).wrapped=!0),o.set(i.name,t),"accessor"===r){const{name:r}=i;return{set(i){const n=e.get.call(this);e.set.call(this,i),this.requestUpdate(r,n,t,!0,i)},init(e){return void 0!==e&&this.C(r,void 0,t,e),e}}}if("setter"===r){const{name:r}=i;return function(i){const n=this[r];e.call(this,i),this.requestUpdate(r,n,t,!0,i)}}throw Error("Unsupported decorator location: "+r)};function s(t){return(e,i)=>"object"==typeof i?o(t,e,i):((t,e,i)=>{const r=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),r?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}function c(t){return s({...t,state:!0,attribute:!1})}function l(t){return(e,i)=>{const r="function"==typeof e?e:e[i];Object.assign(r,t)}}const d=(t,e,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&"object"!=typeof e&&Object.defineProperty(t,e,i),i);function u(t,e){return(i,r,n)=>{const a=e=>e.renderRoot?.querySelector(t)??null;if(e){const{get:t,set:e}="object"==typeof r?i:n??(()=>{const t=Symbol();return{get(){return this[t]},set(e){this[t]=e}}})();return d(i,r,{get(){let i=t.call(this);return void 0===i&&(i=a(this),(null!==i||this.hasUpdated)&&e.call(this,i)),i}})}return d(i,r,{get(){return a(this)}})}}let m;function h(t){return(e,i)=>d(e,i,{get(){return(this.renderRoot??(m??=document.createDocumentFragment())).querySelectorAll(t)}})}function p(t){return(e,i)=>d(e,i,{async get(){return await this.updateComplete,this.renderRoot?.querySelector(t)??null}})}function g(t){return(e,i)=>{const{slot:r,selector:n}=t??{},a="slot"+(r?`[name=${r}]`:":not([name])");return d(e,i,{get(){const e=this.renderRoot?.querySelector(a),i=e?.assignedElements(t)??[];return void 0===n?i:i.filter((t=>t.matches(n)))}})}}function f(t){return(e,i)=>{const{slot:r}=t??{},n="slot"+(r?`[name=${r}]`:":not([name])");return d(e,i,{get(){const e=this.renderRoot?.querySelector(n);return e?.assignedNodes(t)??[]}})}}},534:(t,e,i)=>{i.r(e),i.d(e,{UnsafeHTMLDirective:()=>a,unsafeHTML:()=>o});var r=i(752);class n{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}class a extends n{constructor(t){if(super(t),this.it=r.s6,2!==t.type)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===r.s6||null==t)return this._t=void 0,this.it=t;if(t===r.c0)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}a.directiveName="unsafeHTML",a.resultType=1;const o=(s=a,(...t)=>({_$litDirective$:s,values:t}));var s},337:(t,e,i)=>{i.r(e),i.d(e,{CSSResult:()=>r.BO,LitElement:()=>o,ReactiveElement:()=>r.mN,_$LE:()=>c,_$LH:()=>n.ge,adoptStyles:()=>r.Rf,css:()=>r.AH,defaultConverter:()=>r.W3,getCompatibleStyle:()=>r.sk,html:()=>n.qy,isServer:()=>l,mathml:()=>n.ej,noChange:()=>n.c0,notEqual:()=>r.Ec,nothing:()=>n.s6,render:()=>n.XX,supportsAdoptingStyleSheets:()=>r.qM,svg:()=>n.JW,unsafeCSS:()=>r.iz});var r=i(842),n=i(752);const a=globalThis;class o extends r.mN{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=(0,n.XX)(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return n.c0}}o._$litElement$=!0,o.finalized=!0,a.litElementHydrateSupport?.({LitElement:o});const s=a.litElementPolyfillSupport;s?.({LitElement:o});const c={_$AK:(t,e,i)=>{t._$AK(e,i)},_$AL:t=>t._$AL};(a.litElementVersions??=[]).push("4.2.2");const l=!1},330:t=>{t.exports=JSON.parse('{"name":"flower-card","version":"2026.1.1-beta4","description":"Custom flower card for https://github.com/Olen/homeassistant-plant","keywords":["home-assistant","homeassistant","lovelace","custom-cards"],"module":"flower-card.js","license":"MIT","dependencies":{"@marcokreeft/ha-editor-formbuilder":"^2024.9.1","babel-loader":"^9.2.1","compression-webpack-plugin":"^11.1.0","custom-card-helpers":"^1.9.0","home-assistant-js-websocket":"^9.4.0","lit":"^3.3.0","webpack":"^5.95.0","yarn":"^1.22.22"},"scripts":{"lint":"eslint src/**/*.ts tests/**/*.ts","test":"vitest run","test:watch":"vitest","test:coverage":"vitest run --coverage","dev":"webpack -c webpack.config.js","build":"yarn lint && webpack -c webpack.config.js"},"devDependencies":{"@typescript-eslint/eslint-plugin":"^8.8.0","@vitest/coverage-v8":"^2.1.0","eslint":"^8.57.1","eslint-config-love":"^83.0.0","eslint-plugin-import":"^2.31.0","eslint-plugin-n":"^17.10.3","eslint-plugin-promise":"^7.1.0","eslint-plugin-react":"^7.37.1","jsdom":"^25.0.0","ts-loader":"^9.5.1","typescript":"<5.6.0","vitest":"^2.1.0","webpack-cli":"^5.1.4"}}')}},e={};function i(r){var n=e[r];if(void 0!==n)return n.exports;var a=e[r]={exports:{}};return t[r].call(a.exports,a,a.exports,i),a.exports}i.d=(t,e)=>{for(var r in e)i.o(e,r)&&!i.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),i.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i(248)})();