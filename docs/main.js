/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/leaflet/dist/leaflet.css":
/*!***********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/leaflet/dist/leaflet.css ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/* required styles */\r\n\r\n.leaflet-pane,\r\n.leaflet-tile,\r\n.leaflet-marker-icon,\r\n.leaflet-marker-shadow,\r\n.leaflet-tile-container,\r\n.leaflet-pane > svg,\r\n.leaflet-pane > canvas,\r\n.leaflet-zoom-box,\r\n.leaflet-image-layer,\r\n.leaflet-layer {\r\n\tposition: absolute;\r\n\tleft: 0;\r\n\ttop: 0;\r\n\t}\r\n.leaflet-container {\r\n\toverflow: hidden;\r\n\t}\r\n.leaflet-tile,\r\n.leaflet-marker-icon,\r\n.leaflet-marker-shadow {\r\n\t-webkit-user-select: none;\r\n\t   -moz-user-select: none;\r\n\t        user-select: none;\r\n\t  -webkit-user-drag: none;\r\n\t}\r\n/* Safari renders non-retina tile on retina better with this, but Chrome is worse */\r\n.leaflet-safari .leaflet-tile {\r\n\timage-rendering: -webkit-optimize-contrast;\r\n\t}\r\n/* hack that prevents hw layers \"stretching\" when loading new tiles */\r\n.leaflet-safari .leaflet-tile-container {\r\n\twidth: 1600px;\r\n\theight: 1600px;\r\n\t-webkit-transform-origin: 0 0;\r\n\t}\r\n.leaflet-marker-icon,\r\n.leaflet-marker-shadow {\r\n\tdisplay: block;\r\n\t}\r\n/* .leaflet-container svg: reset svg max-width decleration shipped in Joomla! (joomla.org) 3.x */\r\n/* .leaflet-container img: map is broken in FF if you have max-width: 100% on tiles */\r\n.leaflet-container .leaflet-overlay-pane svg,\r\n.leaflet-container .leaflet-marker-pane img,\r\n.leaflet-container .leaflet-shadow-pane img,\r\n.leaflet-container .leaflet-tile-pane img,\r\n.leaflet-container img.leaflet-image-layer,\r\n.leaflet-container .leaflet-tile {\r\n\tmax-width: none !important;\r\n\tmax-height: none !important;\r\n\t}\r\n\r\n.leaflet-container.leaflet-touch-zoom {\r\n\t-ms-touch-action: pan-x pan-y;\r\n\ttouch-action: pan-x pan-y;\r\n\t}\r\n.leaflet-container.leaflet-touch-drag {\r\n\t-ms-touch-action: pinch-zoom;\r\n\t/* Fallback for FF which doesn't support pinch-zoom */\r\n\ttouch-action: none;\r\n\ttouch-action: pinch-zoom;\r\n}\r\n.leaflet-container.leaflet-touch-drag.leaflet-touch-zoom {\r\n\t-ms-touch-action: none;\r\n\ttouch-action: none;\r\n}\r\n.leaflet-container {\r\n\t-webkit-tap-highlight-color: transparent;\r\n}\r\n.leaflet-container a {\r\n\t-webkit-tap-highlight-color: rgba(51, 181, 229, 0.4);\r\n}\r\n.leaflet-tile {\r\n\tfilter: inherit;\r\n\tvisibility: hidden;\r\n\t}\r\n.leaflet-tile-loaded {\r\n\tvisibility: inherit;\r\n\t}\r\n.leaflet-zoom-box {\r\n\twidth: 0;\r\n\theight: 0;\r\n\t-moz-box-sizing: border-box;\r\n\t     box-sizing: border-box;\r\n\tz-index: 800;\r\n\t}\r\n/* workaround for https://bugzilla.mozilla.org/show_bug.cgi?id=888319 */\r\n.leaflet-overlay-pane svg {\r\n\t-moz-user-select: none;\r\n\t}\r\n\r\n.leaflet-pane         { z-index: 400; }\r\n\r\n.leaflet-tile-pane    { z-index: 200; }\r\n.leaflet-overlay-pane { z-index: 400; }\r\n.leaflet-shadow-pane  { z-index: 500; }\r\n.leaflet-marker-pane  { z-index: 600; }\r\n.leaflet-tooltip-pane   { z-index: 650; }\r\n.leaflet-popup-pane   { z-index: 700; }\r\n\r\n.leaflet-map-pane canvas { z-index: 100; }\r\n.leaflet-map-pane svg    { z-index: 200; }\r\n\r\n.leaflet-vml-shape {\r\n\twidth: 1px;\r\n\theight: 1px;\r\n\t}\r\n.lvml {\r\n\tbehavior: url(#default#VML);\r\n\tdisplay: inline-block;\r\n\tposition: absolute;\r\n\t}\r\n\r\n\r\n/* control positioning */\r\n\r\n.leaflet-control {\r\n\tposition: relative;\r\n\tz-index: 800;\r\n\tpointer-events: visiblePainted; /* IE 9-10 doesn't have auto */\r\n\tpointer-events: auto;\r\n\t}\r\n.leaflet-top,\r\n.leaflet-bottom {\r\n\tposition: absolute;\r\n\tz-index: 1000;\r\n\tpointer-events: none;\r\n\t}\r\n.leaflet-top {\r\n\ttop: 0;\r\n\t}\r\n.leaflet-right {\r\n\tright: 0;\r\n\t}\r\n.leaflet-bottom {\r\n\tbottom: 0;\r\n\t}\r\n.leaflet-left {\r\n\tleft: 0;\r\n\t}\r\n.leaflet-control {\r\n\tfloat: left;\r\n\tclear: both;\r\n\t}\r\n.leaflet-right .leaflet-control {\r\n\tfloat: right;\r\n\t}\r\n.leaflet-top .leaflet-control {\r\n\tmargin-top: 10px;\r\n\t}\r\n.leaflet-bottom .leaflet-control {\r\n\tmargin-bottom: 10px;\r\n\t}\r\n.leaflet-left .leaflet-control {\r\n\tmargin-left: 10px;\r\n\t}\r\n.leaflet-right .leaflet-control {\r\n\tmargin-right: 10px;\r\n\t}\r\n\r\n\r\n/* zoom and fade animations */\r\n\r\n.leaflet-fade-anim .leaflet-tile {\r\n\twill-change: opacity;\r\n\t}\r\n.leaflet-fade-anim .leaflet-popup {\r\n\topacity: 0;\r\n\t-webkit-transition: opacity 0.2s linear;\r\n\t   -moz-transition: opacity 0.2s linear;\r\n\t        transition: opacity 0.2s linear;\r\n\t}\r\n.leaflet-fade-anim .leaflet-map-pane .leaflet-popup {\r\n\topacity: 1;\r\n\t}\r\n.leaflet-zoom-animated {\r\n\t-webkit-transform-origin: 0 0;\r\n\t    -ms-transform-origin: 0 0;\r\n\t        transform-origin: 0 0;\r\n\t}\r\n.leaflet-zoom-anim .leaflet-zoom-animated {\r\n\twill-change: transform;\r\n\t}\r\n.leaflet-zoom-anim .leaflet-zoom-animated {\r\n\t-webkit-transition: -webkit-transform 0.25s cubic-bezier(0,0,0.25,1);\r\n\t   -moz-transition:    -moz-transform 0.25s cubic-bezier(0,0,0.25,1);\r\n\t        transition:         transform 0.25s cubic-bezier(0,0,0.25,1);\r\n\t}\r\n.leaflet-zoom-anim .leaflet-tile,\r\n.leaflet-pan-anim .leaflet-tile {\r\n\t-webkit-transition: none;\r\n\t   -moz-transition: none;\r\n\t        transition: none;\r\n\t}\r\n\r\n.leaflet-zoom-anim .leaflet-zoom-hide {\r\n\tvisibility: hidden;\r\n\t}\r\n\r\n\r\n/* cursors */\r\n\r\n.leaflet-interactive {\r\n\tcursor: pointer;\r\n\t}\r\n.leaflet-grab {\r\n\tcursor: -webkit-grab;\r\n\tcursor:    -moz-grab;\r\n\tcursor:         grab;\r\n\t}\r\n.leaflet-crosshair,\r\n.leaflet-crosshair .leaflet-interactive {\r\n\tcursor: crosshair;\r\n\t}\r\n.leaflet-popup-pane,\r\n.leaflet-control {\r\n\tcursor: auto;\r\n\t}\r\n.leaflet-dragging .leaflet-grab,\r\n.leaflet-dragging .leaflet-grab .leaflet-interactive,\r\n.leaflet-dragging .leaflet-marker-draggable {\r\n\tcursor: move;\r\n\tcursor: -webkit-grabbing;\r\n\tcursor:    -moz-grabbing;\r\n\tcursor:         grabbing;\r\n\t}\r\n\r\n/* marker & overlays interactivity */\r\n.leaflet-marker-icon,\r\n.leaflet-marker-shadow,\r\n.leaflet-image-layer,\r\n.leaflet-pane > svg path,\r\n.leaflet-tile-container {\r\n\tpointer-events: none;\r\n\t}\r\n\r\n.leaflet-marker-icon.leaflet-interactive,\r\n.leaflet-image-layer.leaflet-interactive,\r\n.leaflet-pane > svg path.leaflet-interactive {\r\n\tpointer-events: visiblePainted; /* IE 9-10 doesn't have auto */\r\n\tpointer-events: auto;\r\n\t}\r\n\r\n/* visual tweaks */\r\n\r\n.leaflet-container {\r\n\tbackground: #ddd;\r\n\toutline: 0;\r\n\t}\r\n.leaflet-container a {\r\n\tcolor: #0078A8;\r\n\t}\r\n.leaflet-container a.leaflet-active {\r\n\toutline: 2px solid orange;\r\n\t}\r\n.leaflet-zoom-box {\r\n\tborder: 2px dotted #38f;\r\n\tbackground: rgba(255,255,255,0.5);\r\n\t}\r\n\r\n\r\n/* general typography */\r\n.leaflet-container {\r\n\tfont: 12px/1.5 \"Helvetica Neue\", Arial, Helvetica, sans-serif;\r\n\t}\r\n\r\n\r\n/* general toolbar styles */\r\n\r\n.leaflet-bar {\r\n\tbox-shadow: 0 1px 5px rgba(0,0,0,0.65);\r\n\tborder-radius: 4px;\r\n\t}\r\n.leaflet-bar a,\r\n.leaflet-bar a:hover {\r\n\tbackground-color: #fff;\r\n\tborder-bottom: 1px solid #ccc;\r\n\twidth: 26px;\r\n\theight: 26px;\r\n\tline-height: 26px;\r\n\tdisplay: block;\r\n\ttext-align: center;\r\n\ttext-decoration: none;\r\n\tcolor: black;\r\n\t}\r\n.leaflet-bar a,\r\n.leaflet-control-layers-toggle {\r\n\tbackground-position: 50% 50%;\r\n\tbackground-repeat: no-repeat;\r\n\tdisplay: block;\r\n\t}\r\n.leaflet-bar a:hover {\r\n\tbackground-color: #f4f4f4;\r\n\t}\r\n.leaflet-bar a:first-child {\r\n\tborder-top-left-radius: 4px;\r\n\tborder-top-right-radius: 4px;\r\n\t}\r\n.leaflet-bar a:last-child {\r\n\tborder-bottom-left-radius: 4px;\r\n\tborder-bottom-right-radius: 4px;\r\n\tborder-bottom: none;\r\n\t}\r\n.leaflet-bar a.leaflet-disabled {\r\n\tcursor: default;\r\n\tbackground-color: #f4f4f4;\r\n\tcolor: #bbb;\r\n\t}\r\n\r\n.leaflet-touch .leaflet-bar a {\r\n\twidth: 30px;\r\n\theight: 30px;\r\n\tline-height: 30px;\r\n\t}\r\n.leaflet-touch .leaflet-bar a:first-child {\r\n\tborder-top-left-radius: 2px;\r\n\tborder-top-right-radius: 2px;\r\n\t}\r\n.leaflet-touch .leaflet-bar a:last-child {\r\n\tborder-bottom-left-radius: 2px;\r\n\tborder-bottom-right-radius: 2px;\r\n\t}\r\n\r\n/* zoom control */\r\n\r\n.leaflet-control-zoom-in,\r\n.leaflet-control-zoom-out {\r\n\tfont: bold 18px 'Lucida Console', Monaco, monospace;\r\n\ttext-indent: 1px;\r\n\t}\r\n\r\n.leaflet-touch .leaflet-control-zoom-in, .leaflet-touch .leaflet-control-zoom-out  {\r\n\tfont-size: 22px;\r\n\t}\r\n\r\n\r\n/* layers control */\r\n\r\n.leaflet-control-layers {\r\n\tbox-shadow: 0 1px 5px rgba(0,0,0,0.4);\r\n\tbackground: #fff;\r\n\tborder-radius: 5px;\r\n\t}\r\n.leaflet-control-layers-toggle {\r\n\tbackground-image: url(images/layers.png);\r\n\twidth: 36px;\r\n\theight: 36px;\r\n\t}\r\n.leaflet-retina .leaflet-control-layers-toggle {\r\n\tbackground-image: url(images/layers-2x.png);\r\n\tbackground-size: 26px 26px;\r\n\t}\r\n.leaflet-touch .leaflet-control-layers-toggle {\r\n\twidth: 44px;\r\n\theight: 44px;\r\n\t}\r\n.leaflet-control-layers .leaflet-control-layers-list,\r\n.leaflet-control-layers-expanded .leaflet-control-layers-toggle {\r\n\tdisplay: none;\r\n\t}\r\n.leaflet-control-layers-expanded .leaflet-control-layers-list {\r\n\tdisplay: block;\r\n\tposition: relative;\r\n\t}\r\n.leaflet-control-layers-expanded {\r\n\tpadding: 6px 10px 6px 6px;\r\n\tcolor: #333;\r\n\tbackground: #fff;\r\n\t}\r\n.leaflet-control-layers-scrollbar {\r\n\toverflow-y: scroll;\r\n\toverflow-x: hidden;\r\n\tpadding-right: 5px;\r\n\t}\r\n.leaflet-control-layers-selector {\r\n\tmargin-top: 2px;\r\n\tposition: relative;\r\n\ttop: 1px;\r\n\t}\r\n.leaflet-control-layers label {\r\n\tdisplay: block;\r\n\t}\r\n.leaflet-control-layers-separator {\r\n\theight: 0;\r\n\tborder-top: 1px solid #ddd;\r\n\tmargin: 5px -10px 5px -6px;\r\n\t}\r\n\r\n/* Default icon URLs */\r\n.leaflet-default-icon-path {\r\n\tbackground-image: url(images/marker-icon.png);\r\n\t}\r\n\r\n\r\n/* attribution and scale controls */\r\n\r\n.leaflet-container .leaflet-control-attribution {\r\n\tbackground: #fff;\r\n\tbackground: rgba(255, 255, 255, 0.7);\r\n\tmargin: 0;\r\n\t}\r\n.leaflet-control-attribution,\r\n.leaflet-control-scale-line {\r\n\tpadding: 0 5px;\r\n\tcolor: #333;\r\n\t}\r\n.leaflet-control-attribution a {\r\n\ttext-decoration: none;\r\n\t}\r\n.leaflet-control-attribution a:hover {\r\n\ttext-decoration: underline;\r\n\t}\r\n.leaflet-container .leaflet-control-attribution,\r\n.leaflet-container .leaflet-control-scale {\r\n\tfont-size: 11px;\r\n\t}\r\n.leaflet-left .leaflet-control-scale {\r\n\tmargin-left: 5px;\r\n\t}\r\n.leaflet-bottom .leaflet-control-scale {\r\n\tmargin-bottom: 5px;\r\n\t}\r\n.leaflet-control-scale-line {\r\n\tborder: 2px solid #777;\r\n\tborder-top: none;\r\n\tline-height: 1.1;\r\n\tpadding: 2px 5px 1px;\r\n\tfont-size: 11px;\r\n\twhite-space: nowrap;\r\n\toverflow: hidden;\r\n\t-moz-box-sizing: border-box;\r\n\t     box-sizing: border-box;\r\n\r\n\tbackground: #fff;\r\n\tbackground: rgba(255, 255, 255, 0.5);\r\n\t}\r\n.leaflet-control-scale-line:not(:first-child) {\r\n\tborder-top: 2px solid #777;\r\n\tborder-bottom: none;\r\n\tmargin-top: -2px;\r\n\t}\r\n.leaflet-control-scale-line:not(:first-child):not(:last-child) {\r\n\tborder-bottom: 2px solid #777;\r\n\t}\r\n\r\n.leaflet-touch .leaflet-control-attribution,\r\n.leaflet-touch .leaflet-control-layers,\r\n.leaflet-touch .leaflet-bar {\r\n\tbox-shadow: none;\r\n\t}\r\n.leaflet-touch .leaflet-control-layers,\r\n.leaflet-touch .leaflet-bar {\r\n\tborder: 2px solid rgba(0,0,0,0.2);\r\n\tbackground-clip: padding-box;\r\n\t}\r\n\r\n\r\n/* popup */\r\n\r\n.leaflet-popup {\r\n\tposition: absolute;\r\n\ttext-align: center;\r\n\tmargin-bottom: 20px;\r\n\t}\r\n.leaflet-popup-content-wrapper {\r\n\tpadding: 1px;\r\n\ttext-align: left;\r\n\tborder-radius: 12px;\r\n\t}\r\n.leaflet-popup-content {\r\n\tmargin: 13px 19px;\r\n\tline-height: 1.4;\r\n\t}\r\n.leaflet-popup-content p {\r\n\tmargin: 18px 0;\r\n\t}\r\n.leaflet-popup-tip-container {\r\n\twidth: 40px;\r\n\theight: 20px;\r\n\tposition: absolute;\r\n\tleft: 50%;\r\n\tmargin-left: -20px;\r\n\toverflow: hidden;\r\n\tpointer-events: none;\r\n\t}\r\n.leaflet-popup-tip {\r\n\twidth: 17px;\r\n\theight: 17px;\r\n\tpadding: 1px;\r\n\r\n\tmargin: -10px auto 0;\r\n\r\n\t-webkit-transform: rotate(45deg);\r\n\t   -moz-transform: rotate(45deg);\r\n\t    -ms-transform: rotate(45deg);\r\n\t        transform: rotate(45deg);\r\n\t}\r\n.leaflet-popup-content-wrapper,\r\n.leaflet-popup-tip {\r\n\tbackground: white;\r\n\tcolor: #333;\r\n\tbox-shadow: 0 3px 14px rgba(0,0,0,0.4);\r\n\t}\r\n.leaflet-container a.leaflet-popup-close-button {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tright: 0;\r\n\tpadding: 4px 4px 0 0;\r\n\tborder: none;\r\n\ttext-align: center;\r\n\twidth: 18px;\r\n\theight: 14px;\r\n\tfont: 16px/14px Tahoma, Verdana, sans-serif;\r\n\tcolor: #c3c3c3;\r\n\ttext-decoration: none;\r\n\tfont-weight: bold;\r\n\tbackground: transparent;\r\n\t}\r\n.leaflet-container a.leaflet-popup-close-button:hover {\r\n\tcolor: #999;\r\n\t}\r\n.leaflet-popup-scrolled {\r\n\toverflow: auto;\r\n\tborder-bottom: 1px solid #ddd;\r\n\tborder-top: 1px solid #ddd;\r\n\t}\r\n\r\n.leaflet-oldie .leaflet-popup-content-wrapper {\r\n\tzoom: 1;\r\n\t}\r\n.leaflet-oldie .leaflet-popup-tip {\r\n\twidth: 24px;\r\n\tmargin: 0 auto;\r\n\r\n\t-ms-filter: \"progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678)\";\r\n\tfilter: progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678);\r\n\t}\r\n.leaflet-oldie .leaflet-popup-tip-container {\r\n\tmargin-top: -1px;\r\n\t}\r\n\r\n.leaflet-oldie .leaflet-control-zoom,\r\n.leaflet-oldie .leaflet-control-layers,\r\n.leaflet-oldie .leaflet-popup-content-wrapper,\r\n.leaflet-oldie .leaflet-popup-tip {\r\n\tborder: 1px solid #999;\r\n\t}\r\n\r\n\r\n/* div icon */\r\n\r\n.leaflet-div-icon {\r\n\tbackground: #fff;\r\n\tborder: 1px solid #666;\r\n\t}\r\n\r\n\r\n/* Tooltip */\r\n/* Base styles for the element that has a tooltip */\r\n.leaflet-tooltip {\r\n\tposition: absolute;\r\n\tpadding: 6px;\r\n\tbackground-color: #fff;\r\n\tborder: 1px solid #fff;\r\n\tborder-radius: 3px;\r\n\tcolor: #222;\r\n\twhite-space: nowrap;\r\n\t-webkit-user-select: none;\r\n\t-moz-user-select: none;\r\n\t-ms-user-select: none;\r\n\tuser-select: none;\r\n\tpointer-events: none;\r\n\tbox-shadow: 0 1px 3px rgba(0,0,0,0.4);\r\n\t}\r\n.leaflet-tooltip.leaflet-clickable {\r\n\tcursor: pointer;\r\n\tpointer-events: auto;\r\n\t}\r\n.leaflet-tooltip-top:before,\r\n.leaflet-tooltip-bottom:before,\r\n.leaflet-tooltip-left:before,\r\n.leaflet-tooltip-right:before {\r\n\tposition: absolute;\r\n\tpointer-events: none;\r\n\tborder: 6px solid transparent;\r\n\tbackground: transparent;\r\n\tcontent: \"\";\r\n\t}\r\n\r\n/* Directions */\r\n\r\n.leaflet-tooltip-bottom {\r\n\tmargin-top: 6px;\r\n}\r\n.leaflet-tooltip-top {\r\n\tmargin-top: -6px;\r\n}\r\n.leaflet-tooltip-bottom:before,\r\n.leaflet-tooltip-top:before {\r\n\tleft: 50%;\r\n\tmargin-left: -6px;\r\n\t}\r\n.leaflet-tooltip-top:before {\r\n\tbottom: 0;\r\n\tmargin-bottom: -12px;\r\n\tborder-top-color: #fff;\r\n\t}\r\n.leaflet-tooltip-bottom:before {\r\n\ttop: 0;\r\n\tmargin-top: -12px;\r\n\tmargin-left: -6px;\r\n\tborder-bottom-color: #fff;\r\n\t}\r\n.leaflet-tooltip-left {\r\n\tmargin-left: -6px;\r\n}\r\n.leaflet-tooltip-right {\r\n\tmargin-left: 6px;\r\n}\r\n.leaflet-tooltip-left:before,\r\n.leaflet-tooltip-right:before {\r\n\ttop: 50%;\r\n\tmargin-top: -6px;\r\n\t}\r\n.leaflet-tooltip-left:before {\r\n\tright: 0;\r\n\tmargin-right: -12px;\r\n\tborder-left-color: #fff;\r\n\t}\r\n.leaflet-tooltip-right:before {\r\n\tleft: 0;\r\n\tmargin-left: -12px;\r\n\tborder-right-color: #fff;\r\n\t}\r\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/css/map.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./src/css/map.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "body {\n  margin: 0;\n}\n\n#map {\n  width: 100vw;\n  height: 100vh;\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/leaflet.heat/dist/leaflet-heat.js":
/*!********************************************************!*\
  !*** ./node_modules/leaflet.heat/dist/leaflet-heat.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
 (c) 2014, Vladimir Agafonkin
 simpleheat, a tiny JavaScript library for drawing heatmaps with Canvas
 https://github.com/mourner/simpleheat
*/
!function(){"use strict";function t(i){return this instanceof t?(this._canvas=i="string"==typeof i?document.getElementById(i):i,this._ctx=i.getContext("2d"),this._width=i.width,this._height=i.height,this._max=1,void this.clear()):new t(i)}t.prototype={defaultRadius:25,defaultGradient:{.4:"blue",.6:"cyan",.7:"lime",.8:"yellow",1:"red"},data:function(t,i){return this._data=t,this},max:function(t){return this._max=t,this},add:function(t){return this._data.push(t),this},clear:function(){return this._data=[],this},radius:function(t,i){i=i||15;var a=this._circle=document.createElement("canvas"),s=a.getContext("2d"),e=this._r=t+i;return a.width=a.height=2*e,s.shadowOffsetX=s.shadowOffsetY=200,s.shadowBlur=i,s.shadowColor="black",s.beginPath(),s.arc(e-200,e-200,t,0,2*Math.PI,!0),s.closePath(),s.fill(),this},gradient:function(t){var i=document.createElement("canvas"),a=i.getContext("2d"),s=a.createLinearGradient(0,0,0,256);i.width=1,i.height=256;for(var e in t)s.addColorStop(e,t[e]);return a.fillStyle=s,a.fillRect(0,0,1,256),this._grad=a.getImageData(0,0,1,256).data,this},draw:function(t){this._circle||this.radius(this.defaultRadius),this._grad||this.gradient(this.defaultGradient);var i=this._ctx;i.clearRect(0,0,this._width,this._height);for(var a,s=0,e=this._data.length;e>s;s++)a=this._data[s],i.globalAlpha=Math.max(a[2]/this._max,t||.05),i.drawImage(this._circle,a[0]-this._r,a[1]-this._r);var n=i.getImageData(0,0,this._width,this._height);return this._colorize(n.data,this._grad),i.putImageData(n,0,0),this},_colorize:function(t,i){for(var a,s=3,e=t.length;e>s;s+=4)a=4*t[s],a&&(t[s-3]=i[a],t[s-2]=i[a+1],t[s-1]=i[a+2])}},window.simpleheat=t}(),/*
 (c) 2014, Vladimir Agafonkin
 Leaflet.heat, a tiny and fast heatmap plugin for Leaflet.
 https://github.com/Leaflet/Leaflet.heat
*/
L.HeatLayer=(L.Layer?L.Layer:L.Class).extend({initialize:function(t,i){this._latlngs=t,L.setOptions(this,i)},setLatLngs:function(t){return this._latlngs=t,this.redraw()},addLatLng:function(t){return this._latlngs.push(t),this.redraw()},setOptions:function(t){return L.setOptions(this,t),this._heat&&this._updateOptions(),this.redraw()},redraw:function(){return!this._heat||this._frame||this._map._animating||(this._frame=L.Util.requestAnimFrame(this._redraw,this)),this},onAdd:function(t){this._map=t,this._canvas||this._initCanvas(),t._panes.overlayPane.appendChild(this._canvas),t.on("moveend",this._reset,this),t.options.zoomAnimation&&L.Browser.any3d&&t.on("zoomanim",this._animateZoom,this),this._reset()},onRemove:function(t){t.getPanes().overlayPane.removeChild(this._canvas),t.off("moveend",this._reset,this),t.options.zoomAnimation&&t.off("zoomanim",this._animateZoom,this)},addTo:function(t){return t.addLayer(this),this},_initCanvas:function(){var t=this._canvas=L.DomUtil.create("canvas","leaflet-heatmap-layer leaflet-layer"),i=L.DomUtil.testProp(["transformOrigin","WebkitTransformOrigin","msTransformOrigin"]);t.style[i]="50% 50%";var a=this._map.getSize();t.width=a.x,t.height=a.y;var s=this._map.options.zoomAnimation&&L.Browser.any3d;L.DomUtil.addClass(t,"leaflet-zoom-"+(s?"animated":"hide")),this._heat=simpleheat(t),this._updateOptions()},_updateOptions:function(){this._heat.radius(this.options.radius||this._heat.defaultRadius,this.options.blur),this.options.gradient&&this._heat.gradient(this.options.gradient),this.options.max&&this._heat.max(this.options.max)},_reset:function(){var t=this._map.containerPointToLayerPoint([0,0]);L.DomUtil.setPosition(this._canvas,t);var i=this._map.getSize();this._heat._width!==i.x&&(this._canvas.width=this._heat._width=i.x),this._heat._height!==i.y&&(this._canvas.height=this._heat._height=i.y),this._redraw()},_redraw:function(){var t,i,a,s,e,n,h,o,r,d=[],_=this._heat._r,l=this._map.getSize(),m=new L.Bounds(L.point([-_,-_]),l.add([_,_])),c=void 0===this.options.max?1:this.options.max,u=void 0===this.options.maxZoom?this._map.getMaxZoom():this.options.maxZoom,f=1/Math.pow(2,Math.max(0,Math.min(u-this._map.getZoom(),12))),g=_/2,p=[],v=this._map._getMapPanePos(),w=v.x%g,y=v.y%g;for(t=0,i=this._latlngs.length;i>t;t++)if(a=this._map.latLngToContainerPoint(this._latlngs[t]),m.contains(a)){e=Math.floor((a.x-w)/g)+2,n=Math.floor((a.y-y)/g)+2;var x=void 0!==this._latlngs[t].alt?this._latlngs[t].alt:void 0!==this._latlngs[t][2]?+this._latlngs[t][2]:1;r=x*f,p[n]=p[n]||[],s=p[n][e],s?(s[0]=(s[0]*s[2]+a.x*r)/(s[2]+r),s[1]=(s[1]*s[2]+a.y*r)/(s[2]+r),s[2]+=r):p[n][e]=[a.x,a.y,r]}for(t=0,i=p.length;i>t;t++)if(p[t])for(h=0,o=p[t].length;o>h;h++)s=p[t][h],s&&d.push([Math.round(s[0]),Math.round(s[1]),Math.min(s[2],c)]);this._heat.data(d).draw(this.options.minOpacity),this._frame=null},_animateZoom:function(t){var i=this._map.getZoomScale(t.zoom),a=this._map._getCenterOffset(t.center)._multiplyBy(-i).subtract(this._map._getMapPanePos());L.DomUtil.setTransform?L.DomUtil.setTransform(this._canvas,a,i):this._canvas.style[L.DomUtil.TRANSFORM]=L.DomUtil.getTranslateString(a)+" scale("+i+")"}}),L.heatLayer=function(t,i){return new L.HeatLayer(t,i)};

/***/ }),

/***/ "./node_modules/leaflet/dist/leaflet-src.js":
/*!**************************************************!*\
  !*** ./node_modules/leaflet/dist/leaflet-src.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* @preserve
 * Leaflet 1.4.0, a JS library for interactive maps. http://leafletjs.com
 * (c) 2010-2018 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */

(function (global, factory) {
	 true ? factory(exports) :
	undefined;
}(this, (function (exports) { 'use strict';

var version = "1.4.0";

/*
 * @namespace Util
 *
 * Various utility functions, used by Leaflet internally.
 */

var freeze = Object.freeze;
Object.freeze = function (obj) { return obj; };

// @function extend(dest: Object, src?: Object): Object
// Merges the properties of the `src` object (or multiple objects) into `dest` object and returns the latter. Has an `L.extend` shortcut.
function extend(dest) {
	var i, j, len, src;

	for (j = 1, len = arguments.length; j < len; j++) {
		src = arguments[j];
		for (i in src) {
			dest[i] = src[i];
		}
	}
	return dest;
}

// @function create(proto: Object, properties?: Object): Object
// Compatibility polyfill for [Object.create](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/create)
var create = Object.create || (function () {
	function F() {}
	return function (proto) {
		F.prototype = proto;
		return new F();
	};
})();

// @function bind(fn: Function, …): Function
// Returns a new function bound to the arguments passed, like [Function.prototype.bind](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Function/bind).
// Has a `L.bind()` shortcut.
function bind(fn, obj) {
	var slice = Array.prototype.slice;

	if (fn.bind) {
		return fn.bind.apply(fn, slice.call(arguments, 1));
	}

	var args = slice.call(arguments, 2);

	return function () {
		return fn.apply(obj, args.length ? args.concat(slice.call(arguments)) : arguments);
	};
}

// @property lastId: Number
// Last unique ID used by [`stamp()`](#util-stamp)
var lastId = 0;

// @function stamp(obj: Object): Number
// Returns the unique ID of an object, assigning it one if it doesn't have it.
function stamp(obj) {
	/*eslint-disable */
	obj._leaflet_id = obj._leaflet_id || ++lastId;
	return obj._leaflet_id;
	/* eslint-enable */
}

// @function throttle(fn: Function, time: Number, context: Object): Function
// Returns a function which executes function `fn` with the given scope `context`
// (so that the `this` keyword refers to `context` inside `fn`'s code). The function
// `fn` will be called no more than one time per given amount of `time`. The arguments
// received by the bound function will be any arguments passed when binding the
// function, followed by any arguments passed when invoking the bound function.
// Has an `L.throttle` shortcut.
function throttle(fn, time, context) {
	var lock, args, wrapperFn, later;

	later = function () {
		// reset lock and call if queued
		lock = false;
		if (args) {
			wrapperFn.apply(context, args);
			args = false;
		}
	};

	wrapperFn = function () {
		if (lock) {
			// called too soon, queue to call later
			args = arguments;

		} else {
			// call and lock until later
			fn.apply(context, arguments);
			setTimeout(later, time);
			lock = true;
		}
	};

	return wrapperFn;
}

// @function wrapNum(num: Number, range: Number[], includeMax?: Boolean): Number
// Returns the number `num` modulo `range` in such a way so it lies within
// `range[0]` and `range[1]`. The returned value will be always smaller than
// `range[1]` unless `includeMax` is set to `true`.
function wrapNum(x, range, includeMax) {
	var max = range[1],
	    min = range[0],
	    d = max - min;
	return x === max && includeMax ? x : ((x - min) % d + d) % d + min;
}

// @function falseFn(): Function
// Returns a function which always returns `false`.
function falseFn() { return false; }

// @function formatNum(num: Number, digits?: Number): Number
// Returns the number `num` rounded to `digits` decimals, or to 6 decimals by default.
function formatNum(num, digits) {
	var pow = Math.pow(10, (digits === undefined ? 6 : digits));
	return Math.round(num * pow) / pow;
}

// @function trim(str: String): String
// Compatibility polyfill for [String.prototype.trim](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/Trim)
function trim(str) {
	return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '');
}

// @function splitWords(str: String): String[]
// Trims and splits the string on whitespace and returns the array of parts.
function splitWords(str) {
	return trim(str).split(/\s+/);
}

// @function setOptions(obj: Object, options: Object): Object
// Merges the given properties to the `options` of the `obj` object, returning the resulting options. See `Class options`. Has an `L.setOptions` shortcut.
function setOptions(obj, options) {
	if (!obj.hasOwnProperty('options')) {
		obj.options = obj.options ? create(obj.options) : {};
	}
	for (var i in options) {
		obj.options[i] = options[i];
	}
	return obj.options;
}

// @function getParamString(obj: Object, existingUrl?: String, uppercase?: Boolean): String
// Converts an object into a parameter URL string, e.g. `{a: "foo", b: "bar"}`
// translates to `'?a=foo&b=bar'`. If `existingUrl` is set, the parameters will
// be appended at the end. If `uppercase` is `true`, the parameter names will
// be uppercased (e.g. `'?A=foo&B=bar'`)
function getParamString(obj, existingUrl, uppercase) {
	var params = [];
	for (var i in obj) {
		params.push(encodeURIComponent(uppercase ? i.toUpperCase() : i) + '=' + encodeURIComponent(obj[i]));
	}
	return ((!existingUrl || existingUrl.indexOf('?') === -1) ? '?' : '&') + params.join('&');
}

var templateRe = /\{ *([\w_-]+) *\}/g;

// @function template(str: String, data: Object): String
// Simple templating facility, accepts a template string of the form `'Hello {a}, {b}'`
// and a data object like `{a: 'foo', b: 'bar'}`, returns evaluated string
// `('Hello foo, bar')`. You can also specify functions instead of strings for
// data values — they will be evaluated passing `data` as an argument.
function template(str, data) {
	return str.replace(templateRe, function (str, key) {
		var value = data[key];

		if (value === undefined) {
			throw new Error('No value provided for variable ' + str);

		} else if (typeof value === 'function') {
			value = value(data);
		}
		return value;
	});
}

// @function isArray(obj): Boolean
// Compatibility polyfill for [Array.isArray](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)
var isArray = Array.isArray || function (obj) {
	return (Object.prototype.toString.call(obj) === '[object Array]');
};

// @function indexOf(array: Array, el: Object): Number
// Compatibility polyfill for [Array.prototype.indexOf](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)
function indexOf(array, el) {
	for (var i = 0; i < array.length; i++) {
		if (array[i] === el) { return i; }
	}
	return -1;
}

// @property emptyImageUrl: String
// Data URI string containing a base64-encoded empty GIF image.
// Used as a hack to free memory from unused images on WebKit-powered
// mobile devices (by setting image `src` to this string).
var emptyImageUrl = 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=';

// inspired by http://paulirish.com/2011/requestanimationframe-for-smart-animating/

function getPrefixed(name) {
	return window['webkit' + name] || window['moz' + name] || window['ms' + name];
}

var lastTime = 0;

// fallback for IE 7-8
function timeoutDefer(fn) {
	var time = +new Date(),
	    timeToCall = Math.max(0, 16 - (time - lastTime));

	lastTime = time + timeToCall;
	return window.setTimeout(fn, timeToCall);
}

var requestFn = window.requestAnimationFrame || getPrefixed('RequestAnimationFrame') || timeoutDefer;
var cancelFn = window.cancelAnimationFrame || getPrefixed('CancelAnimationFrame') ||
		getPrefixed('CancelRequestAnimationFrame') || function (id) { window.clearTimeout(id); };

// @function requestAnimFrame(fn: Function, context?: Object, immediate?: Boolean): Number
// Schedules `fn` to be executed when the browser repaints. `fn` is bound to
// `context` if given. When `immediate` is set, `fn` is called immediately if
// the browser doesn't have native support for
// [`window.requestAnimationFrame`](https://developer.mozilla.org/docs/Web/API/window/requestAnimationFrame),
// otherwise it's delayed. Returns a request ID that can be used to cancel the request.
function requestAnimFrame(fn, context, immediate) {
	if (immediate && requestFn === timeoutDefer) {
		fn.call(context);
	} else {
		return requestFn.call(window, bind(fn, context));
	}
}

// @function cancelAnimFrame(id: Number): undefined
// Cancels a previous `requestAnimFrame`. See also [window.cancelAnimationFrame](https://developer.mozilla.org/docs/Web/API/window/cancelAnimationFrame).
function cancelAnimFrame(id) {
	if (id) {
		cancelFn.call(window, id);
	}
}


var Util = (Object.freeze || Object)({
	freeze: freeze,
	extend: extend,
	create: create,
	bind: bind,
	lastId: lastId,
	stamp: stamp,
	throttle: throttle,
	wrapNum: wrapNum,
	falseFn: falseFn,
	formatNum: formatNum,
	trim: trim,
	splitWords: splitWords,
	setOptions: setOptions,
	getParamString: getParamString,
	template: template,
	isArray: isArray,
	indexOf: indexOf,
	emptyImageUrl: emptyImageUrl,
	requestFn: requestFn,
	cancelFn: cancelFn,
	requestAnimFrame: requestAnimFrame,
	cancelAnimFrame: cancelAnimFrame
});

// @class Class
// @aka L.Class

// @section
// @uninheritable

// Thanks to John Resig and Dean Edwards for inspiration!

function Class() {}

Class.extend = function (props) {

	// @function extend(props: Object): Function
	// [Extends the current class](#class-inheritance) given the properties to be included.
	// Returns a Javascript function that is a class constructor (to be called with `new`).
	var NewClass = function () {

		// call the constructor
		if (this.initialize) {
			this.initialize.apply(this, arguments);
		}

		// call all constructor hooks
		this.callInitHooks();
	};

	var parentProto = NewClass.__super__ = this.prototype;

	var proto = create(parentProto);
	proto.constructor = NewClass;

	NewClass.prototype = proto;

	// inherit parent's statics
	for (var i in this) {
		if (this.hasOwnProperty(i) && i !== 'prototype' && i !== '__super__') {
			NewClass[i] = this[i];
		}
	}

	// mix static properties into the class
	if (props.statics) {
		extend(NewClass, props.statics);
		delete props.statics;
	}

	// mix includes into the prototype
	if (props.includes) {
		checkDeprecatedMixinEvents(props.includes);
		extend.apply(null, [proto].concat(props.includes));
		delete props.includes;
	}

	// merge options
	if (proto.options) {
		props.options = extend(create(proto.options), props.options);
	}

	// mix given properties into the prototype
	extend(proto, props);

	proto._initHooks = [];

	// add method for calling all hooks
	proto.callInitHooks = function () {

		if (this._initHooksCalled) { return; }

		if (parentProto.callInitHooks) {
			parentProto.callInitHooks.call(this);
		}

		this._initHooksCalled = true;

		for (var i = 0, len = proto._initHooks.length; i < len; i++) {
			proto._initHooks[i].call(this);
		}
	};

	return NewClass;
};


// @function include(properties: Object): this
// [Includes a mixin](#class-includes) into the current class.
Class.include = function (props) {
	extend(this.prototype, props);
	return this;
};

// @function mergeOptions(options: Object): this
// [Merges `options`](#class-options) into the defaults of the class.
Class.mergeOptions = function (options) {
	extend(this.prototype.options, options);
	return this;
};

// @function addInitHook(fn: Function): this
// Adds a [constructor hook](#class-constructor-hooks) to the class.
Class.addInitHook = function (fn) { // (Function) || (String, args...)
	var args = Array.prototype.slice.call(arguments, 1);

	var init = typeof fn === 'function' ? fn : function () {
		this[fn].apply(this, args);
	};

	this.prototype._initHooks = this.prototype._initHooks || [];
	this.prototype._initHooks.push(init);
	return this;
};

function checkDeprecatedMixinEvents(includes) {
	if (typeof L === 'undefined' || !L || !L.Mixin) { return; }

	includes = isArray(includes) ? includes : [includes];

	for (var i = 0; i < includes.length; i++) {
		if (includes[i] === L.Mixin.Events) {
			console.warn('Deprecated include of L.Mixin.Events: ' +
				'this property will be removed in future releases, ' +
				'please inherit from L.Evented instead.', new Error().stack);
		}
	}
}

/*
 * @class Evented
 * @aka L.Evented
 * @inherits Class
 *
 * A set of methods shared between event-powered classes (like `Map` and `Marker`). Generally, events allow you to execute some function when something happens with an object (e.g. the user clicks on the map, causing the map to fire `'click'` event).
 *
 * @example
 *
 * ```js
 * map.on('click', function(e) {
 * 	alert(e.latlng);
 * } );
 * ```
 *
 * Leaflet deals with event listeners by reference, so if you want to add a listener and then remove it, define it as a function:
 *
 * ```js
 * function onClick(e) { ... }
 *
 * map.on('click', onClick);
 * map.off('click', onClick);
 * ```
 */

var Events = {
	/* @method on(type: String, fn: Function, context?: Object): this
	 * Adds a listener function (`fn`) to a particular event type of the object. You can optionally specify the context of the listener (object the this keyword will point to). You can also pass several space-separated types (e.g. `'click dblclick'`).
	 *
	 * @alternative
	 * @method on(eventMap: Object): this
	 * Adds a set of type/listener pairs, e.g. `{click: onClick, mousemove: onMouseMove}`
	 */
	on: function (types, fn, context) {

		// types can be a map of types/handlers
		if (typeof types === 'object') {
			for (var type in types) {
				// we don't process space-separated events here for performance;
				// it's a hot path since Layer uses the on(obj) syntax
				this._on(type, types[type], fn);
			}

		} else {
			// types can be a string of space-separated words
			types = splitWords(types);

			for (var i = 0, len = types.length; i < len; i++) {
				this._on(types[i], fn, context);
			}
		}

		return this;
	},

	/* @method off(type: String, fn?: Function, context?: Object): this
	 * Removes a previously added listener function. If no function is specified, it will remove all the listeners of that particular event from the object. Note that if you passed a custom context to `on`, you must pass the same context to `off` in order to remove the listener.
	 *
	 * @alternative
	 * @method off(eventMap: Object): this
	 * Removes a set of type/listener pairs.
	 *
	 * @alternative
	 * @method off: this
	 * Removes all listeners to all events on the object.
	 */
	off: function (types, fn, context) {

		if (!types) {
			// clear all listeners if called without arguments
			delete this._events;

		} else if (typeof types === 'object') {
			for (var type in types) {
				this._off(type, types[type], fn);
			}

		} else {
			types = splitWords(types);

			for (var i = 0, len = types.length; i < len; i++) {
				this._off(types[i], fn, context);
			}
		}

		return this;
	},

	// attach listener (without syntactic sugar now)
	_on: function (type, fn, context) {
		this._events = this._events || {};

		/* get/init listeners for type */
		var typeListeners = this._events[type];
		if (!typeListeners) {
			typeListeners = [];
			this._events[type] = typeListeners;
		}

		if (context === this) {
			// Less memory footprint.
			context = undefined;
		}
		var newListener = {fn: fn, ctx: context},
		    listeners = typeListeners;

		// check if fn already there
		for (var i = 0, len = listeners.length; i < len; i++) {
			if (listeners[i].fn === fn && listeners[i].ctx === context) {
				return;
			}
		}

		listeners.push(newListener);
	},

	_off: function (type, fn, context) {
		var listeners,
		    i,
		    len;

		if (!this._events) { return; }

		listeners = this._events[type];

		if (!listeners) {
			return;
		}

		if (!fn) {
			// Set all removed listeners to noop so they are not called if remove happens in fire
			for (i = 0, len = listeners.length; i < len; i++) {
				listeners[i].fn = falseFn;
			}
			// clear all listeners for a type if function isn't specified
			delete this._events[type];
			return;
		}

		if (context === this) {
			context = undefined;
		}

		if (listeners) {

			// find fn and remove it
			for (i = 0, len = listeners.length; i < len; i++) {
				var l = listeners[i];
				if (l.ctx !== context) { continue; }
				if (l.fn === fn) {

					// set the removed listener to noop so that's not called if remove happens in fire
					l.fn = falseFn;

					if (this._firingCount) {
						/* copy array in case events are being fired */
						this._events[type] = listeners = listeners.slice();
					}
					listeners.splice(i, 1);

					return;
				}
			}
		}
	},

	// @method fire(type: String, data?: Object, propagate?: Boolean): this
	// Fires an event of the specified type. You can optionally provide an data
	// object — the first argument of the listener function will contain its
	// properties. The event can optionally be propagated to event parents.
	fire: function (type, data, propagate) {
		if (!this.listens(type, propagate)) { return this; }

		var event = extend({}, data, {
			type: type,
			target: this,
			sourceTarget: data && data.sourceTarget || this
		});

		if (this._events) {
			var listeners = this._events[type];

			if (listeners) {
				this._firingCount = (this._firingCount + 1) || 1;
				for (var i = 0, len = listeners.length; i < len; i++) {
					var l = listeners[i];
					l.fn.call(l.ctx || this, event);
				}

				this._firingCount--;
			}
		}

		if (propagate) {
			// propagate the event to parents (set with addEventParent)
			this._propagateEvent(event);
		}

		return this;
	},

	// @method listens(type: String): Boolean
	// Returns `true` if a particular event type has any listeners attached to it.
	listens: function (type, propagate) {
		var listeners = this._events && this._events[type];
		if (listeners && listeners.length) { return true; }

		if (propagate) {
			// also check parents for listeners if event propagates
			for (var id in this._eventParents) {
				if (this._eventParents[id].listens(type, propagate)) { return true; }
			}
		}
		return false;
	},

	// @method once(…): this
	// Behaves as [`on(…)`](#evented-on), except the listener will only get fired once and then removed.
	once: function (types, fn, context) {

		if (typeof types === 'object') {
			for (var type in types) {
				this.once(type, types[type], fn);
			}
			return this;
		}

		var handler = bind(function () {
			this
			    .off(types, fn, context)
			    .off(types, handler, context);
		}, this);

		// add a listener that's executed once and removed after that
		return this
		    .on(types, fn, context)
		    .on(types, handler, context);
	},

	// @method addEventParent(obj: Evented): this
	// Adds an event parent - an `Evented` that will receive propagated events
	addEventParent: function (obj) {
		this._eventParents = this._eventParents || {};
		this._eventParents[stamp(obj)] = obj;
		return this;
	},

	// @method removeEventParent(obj: Evented): this
	// Removes an event parent, so it will stop receiving propagated events
	removeEventParent: function (obj) {
		if (this._eventParents) {
			delete this._eventParents[stamp(obj)];
		}
		return this;
	},

	_propagateEvent: function (e) {
		for (var id in this._eventParents) {
			this._eventParents[id].fire(e.type, extend({
				layer: e.target,
				propagatedFrom: e.target
			}, e), true);
		}
	}
};

// aliases; we should ditch those eventually

// @method addEventListener(…): this
// Alias to [`on(…)`](#evented-on)
Events.addEventListener = Events.on;

// @method removeEventListener(…): this
// Alias to [`off(…)`](#evented-off)

// @method clearAllEventListeners(…): this
// Alias to [`off()`](#evented-off)
Events.removeEventListener = Events.clearAllEventListeners = Events.off;

// @method addOneTimeEventListener(…): this
// Alias to [`once(…)`](#evented-once)
Events.addOneTimeEventListener = Events.once;

// @method fireEvent(…): this
// Alias to [`fire(…)`](#evented-fire)
Events.fireEvent = Events.fire;

// @method hasEventListeners(…): Boolean
// Alias to [`listens(…)`](#evented-listens)
Events.hasEventListeners = Events.listens;

var Evented = Class.extend(Events);

/*
 * @class Point
 * @aka L.Point
 *
 * Represents a point with `x` and `y` coordinates in pixels.
 *
 * @example
 *
 * ```js
 * var point = L.point(200, 300);
 * ```
 *
 * All Leaflet methods and options that accept `Point` objects also accept them in a simple Array form (unless noted otherwise), so these lines are equivalent:
 *
 * ```js
 * map.panBy([200, 300]);
 * map.panBy(L.point(200, 300));
 * ```
 *
 * Note that `Point` does not inherit from Leafet's `Class` object,
 * which means new classes can't inherit from it, and new methods
 * can't be added to it with the `include` function.
 */

function Point(x, y, round) {
	// @property x: Number; The `x` coordinate of the point
	this.x = (round ? Math.round(x) : x);
	// @property y: Number; The `y` coordinate of the point
	this.y = (round ? Math.round(y) : y);
}

var trunc = Math.trunc || function (v) {
	return v > 0 ? Math.floor(v) : Math.ceil(v);
};

Point.prototype = {

	// @method clone(): Point
	// Returns a copy of the current point.
	clone: function () {
		return new Point(this.x, this.y);
	},

	// @method add(otherPoint: Point): Point
	// Returns the result of addition of the current and the given points.
	add: function (point) {
		// non-destructive, returns a new point
		return this.clone()._add(toPoint(point));
	},

	_add: function (point) {
		// destructive, used directly for performance in situations where it's safe to modify existing point
		this.x += point.x;
		this.y += point.y;
		return this;
	},

	// @method subtract(otherPoint: Point): Point
	// Returns the result of subtraction of the given point from the current.
	subtract: function (point) {
		return this.clone()._subtract(toPoint(point));
	},

	_subtract: function (point) {
		this.x -= point.x;
		this.y -= point.y;
		return this;
	},

	// @method divideBy(num: Number): Point
	// Returns the result of division of the current point by the given number.
	divideBy: function (num) {
		return this.clone()._divideBy(num);
	},

	_divideBy: function (num) {
		this.x /= num;
		this.y /= num;
		return this;
	},

	// @method multiplyBy(num: Number): Point
	// Returns the result of multiplication of the current point by the given number.
	multiplyBy: function (num) {
		return this.clone()._multiplyBy(num);
	},

	_multiplyBy: function (num) {
		this.x *= num;
		this.y *= num;
		return this;
	},

	// @method scaleBy(scale: Point): Point
	// Multiply each coordinate of the current point by each coordinate of
	// `scale`. In linear algebra terms, multiply the point by the
	// [scaling matrix](https://en.wikipedia.org/wiki/Scaling_%28geometry%29#Matrix_representation)
	// defined by `scale`.
	scaleBy: function (point) {
		return new Point(this.x * point.x, this.y * point.y);
	},

	// @method unscaleBy(scale: Point): Point
	// Inverse of `scaleBy`. Divide each coordinate of the current point by
	// each coordinate of `scale`.
	unscaleBy: function (point) {
		return new Point(this.x / point.x, this.y / point.y);
	},

	// @method round(): Point
	// Returns a copy of the current point with rounded coordinates.
	round: function () {
		return this.clone()._round();
	},

	_round: function () {
		this.x = Math.round(this.x);
		this.y = Math.round(this.y);
		return this;
	},

	// @method floor(): Point
	// Returns a copy of the current point with floored coordinates (rounded down).
	floor: function () {
		return this.clone()._floor();
	},

	_floor: function () {
		this.x = Math.floor(this.x);
		this.y = Math.floor(this.y);
		return this;
	},

	// @method ceil(): Point
	// Returns a copy of the current point with ceiled coordinates (rounded up).
	ceil: function () {
		return this.clone()._ceil();
	},

	_ceil: function () {
		this.x = Math.ceil(this.x);
		this.y = Math.ceil(this.y);
		return this;
	},

	// @method trunc(): Point
	// Returns a copy of the current point with truncated coordinates (rounded towards zero).
	trunc: function () {
		return this.clone()._trunc();
	},

	_trunc: function () {
		this.x = trunc(this.x);
		this.y = trunc(this.y);
		return this;
	},

	// @method distanceTo(otherPoint: Point): Number
	// Returns the cartesian distance between the current and the given points.
	distanceTo: function (point) {
		point = toPoint(point);

		var x = point.x - this.x,
		    y = point.y - this.y;

		return Math.sqrt(x * x + y * y);
	},

	// @method equals(otherPoint: Point): Boolean
	// Returns `true` if the given point has the same coordinates.
	equals: function (point) {
		point = toPoint(point);

		return point.x === this.x &&
		       point.y === this.y;
	},

	// @method contains(otherPoint: Point): Boolean
	// Returns `true` if both coordinates of the given point are less than the corresponding current point coordinates (in absolute values).
	contains: function (point) {
		point = toPoint(point);

		return Math.abs(point.x) <= Math.abs(this.x) &&
		       Math.abs(point.y) <= Math.abs(this.y);
	},

	// @method toString(): String
	// Returns a string representation of the point for debugging purposes.
	toString: function () {
		return 'Point(' +
		        formatNum(this.x) + ', ' +
		        formatNum(this.y) + ')';
	}
};

// @factory L.point(x: Number, y: Number, round?: Boolean)
// Creates a Point object with the given `x` and `y` coordinates. If optional `round` is set to true, rounds the `x` and `y` values.

// @alternative
// @factory L.point(coords: Number[])
// Expects an array of the form `[x, y]` instead.

// @alternative
// @factory L.point(coords: Object)
// Expects a plain object of the form `{x: Number, y: Number}` instead.
function toPoint(x, y, round) {
	if (x instanceof Point) {
		return x;
	}
	if (isArray(x)) {
		return new Point(x[0], x[1]);
	}
	if (x === undefined || x === null) {
		return x;
	}
	if (typeof x === 'object' && 'x' in x && 'y' in x) {
		return new Point(x.x, x.y);
	}
	return new Point(x, y, round);
}

/*
 * @class Bounds
 * @aka L.Bounds
 *
 * Represents a rectangular area in pixel coordinates.
 *
 * @example
 *
 * ```js
 * var p1 = L.point(10, 10),
 * p2 = L.point(40, 60),
 * bounds = L.bounds(p1, p2);
 * ```
 *
 * All Leaflet methods that accept `Bounds` objects also accept them in a simple Array form (unless noted otherwise), so the bounds example above can be passed like this:
 *
 * ```js
 * otherBounds.intersects([[10, 10], [40, 60]]);
 * ```
 *
 * Note that `Bounds` does not inherit from Leafet's `Class` object,
 * which means new classes can't inherit from it, and new methods
 * can't be added to it with the `include` function.
 */

function Bounds(a, b) {
	if (!a) { return; }

	var points = b ? [a, b] : a;

	for (var i = 0, len = points.length; i < len; i++) {
		this.extend(points[i]);
	}
}

Bounds.prototype = {
	// @method extend(point: Point): this
	// Extends the bounds to contain the given point.
	extend: function (point) { // (Point)
		point = toPoint(point);

		// @property min: Point
		// The top left corner of the rectangle.
		// @property max: Point
		// The bottom right corner of the rectangle.
		if (!this.min && !this.max) {
			this.min = point.clone();
			this.max = point.clone();
		} else {
			this.min.x = Math.min(point.x, this.min.x);
			this.max.x = Math.max(point.x, this.max.x);
			this.min.y = Math.min(point.y, this.min.y);
			this.max.y = Math.max(point.y, this.max.y);
		}
		return this;
	},

	// @method getCenter(round?: Boolean): Point
	// Returns the center point of the bounds.
	getCenter: function (round) {
		return new Point(
		        (this.min.x + this.max.x) / 2,
		        (this.min.y + this.max.y) / 2, round);
	},

	// @method getBottomLeft(): Point
	// Returns the bottom-left point of the bounds.
	getBottomLeft: function () {
		return new Point(this.min.x, this.max.y);
	},

	// @method getTopRight(): Point
	// Returns the top-right point of the bounds.
	getTopRight: function () { // -> Point
		return new Point(this.max.x, this.min.y);
	},

	// @method getTopLeft(): Point
	// Returns the top-left point of the bounds (i.e. [`this.min`](#bounds-min)).
	getTopLeft: function () {
		return this.min; // left, top
	},

	// @method getBottomRight(): Point
	// Returns the bottom-right point of the bounds (i.e. [`this.max`](#bounds-max)).
	getBottomRight: function () {
		return this.max; // right, bottom
	},

	// @method getSize(): Point
	// Returns the size of the given bounds
	getSize: function () {
		return this.max.subtract(this.min);
	},

	// @method contains(otherBounds: Bounds): Boolean
	// Returns `true` if the rectangle contains the given one.
	// @alternative
	// @method contains(point: Point): Boolean
	// Returns `true` if the rectangle contains the given point.
	contains: function (obj) {
		var min, max;

		if (typeof obj[0] === 'number' || obj instanceof Point) {
			obj = toPoint(obj);
		} else {
			obj = toBounds(obj);
		}

		if (obj instanceof Bounds) {
			min = obj.min;
			max = obj.max;
		} else {
			min = max = obj;
		}

		return (min.x >= this.min.x) &&
		       (max.x <= this.max.x) &&
		       (min.y >= this.min.y) &&
		       (max.y <= this.max.y);
	},

	// @method intersects(otherBounds: Bounds): Boolean
	// Returns `true` if the rectangle intersects the given bounds. Two bounds
	// intersect if they have at least one point in common.
	intersects: function (bounds) { // (Bounds) -> Boolean
		bounds = toBounds(bounds);

		var min = this.min,
		    max = this.max,
		    min2 = bounds.min,
		    max2 = bounds.max,
		    xIntersects = (max2.x >= min.x) && (min2.x <= max.x),
		    yIntersects = (max2.y >= min.y) && (min2.y <= max.y);

		return xIntersects && yIntersects;
	},

	// @method overlaps(otherBounds: Bounds): Boolean
	// Returns `true` if the rectangle overlaps the given bounds. Two bounds
	// overlap if their intersection is an area.
	overlaps: function (bounds) { // (Bounds) -> Boolean
		bounds = toBounds(bounds);

		var min = this.min,
		    max = this.max,
		    min2 = bounds.min,
		    max2 = bounds.max,
		    xOverlaps = (max2.x > min.x) && (min2.x < max.x),
		    yOverlaps = (max2.y > min.y) && (min2.y < max.y);

		return xOverlaps && yOverlaps;
	},

	isValid: function () {
		return !!(this.min && this.max);
	}
};


// @factory L.bounds(corner1: Point, corner2: Point)
// Creates a Bounds object from two corners coordinate pairs.
// @alternative
// @factory L.bounds(points: Point[])
// Creates a Bounds object from the given array of points.
function toBounds(a, b) {
	if (!a || a instanceof Bounds) {
		return a;
	}
	return new Bounds(a, b);
}

/*
 * @class LatLngBounds
 * @aka L.LatLngBounds
 *
 * Represents a rectangular geographical area on a map.
 *
 * @example
 *
 * ```js
 * var corner1 = L.latLng(40.712, -74.227),
 * corner2 = L.latLng(40.774, -74.125),
 * bounds = L.latLngBounds(corner1, corner2);
 * ```
 *
 * All Leaflet methods that accept LatLngBounds objects also accept them in a simple Array form (unless noted otherwise), so the bounds example above can be passed like this:
 *
 * ```js
 * map.fitBounds([
 * 	[40.712, -74.227],
 * 	[40.774, -74.125]
 * ]);
 * ```
 *
 * Caution: if the area crosses the antimeridian (often confused with the International Date Line), you must specify corners _outside_ the [-180, 180] degrees longitude range.
 *
 * Note that `LatLngBounds` does not inherit from Leafet's `Class` object,
 * which means new classes can't inherit from it, and new methods
 * can't be added to it with the `include` function.
 */

function LatLngBounds(corner1, corner2) { // (LatLng, LatLng) or (LatLng[])
	if (!corner1) { return; }

	var latlngs = corner2 ? [corner1, corner2] : corner1;

	for (var i = 0, len = latlngs.length; i < len; i++) {
		this.extend(latlngs[i]);
	}
}

LatLngBounds.prototype = {

	// @method extend(latlng: LatLng): this
	// Extend the bounds to contain the given point

	// @alternative
	// @method extend(otherBounds: LatLngBounds): this
	// Extend the bounds to contain the given bounds
	extend: function (obj) {
		var sw = this._southWest,
		    ne = this._northEast,
		    sw2, ne2;

		if (obj instanceof LatLng) {
			sw2 = obj;
			ne2 = obj;

		} else if (obj instanceof LatLngBounds) {
			sw2 = obj._southWest;
			ne2 = obj._northEast;

			if (!sw2 || !ne2) { return this; }

		} else {
			return obj ? this.extend(toLatLng(obj) || toLatLngBounds(obj)) : this;
		}

		if (!sw && !ne) {
			this._southWest = new LatLng(sw2.lat, sw2.lng);
			this._northEast = new LatLng(ne2.lat, ne2.lng);
		} else {
			sw.lat = Math.min(sw2.lat, sw.lat);
			sw.lng = Math.min(sw2.lng, sw.lng);
			ne.lat = Math.max(ne2.lat, ne.lat);
			ne.lng = Math.max(ne2.lng, ne.lng);
		}

		return this;
	},

	// @method pad(bufferRatio: Number): LatLngBounds
	// Returns bounds created by extending or retracting the current bounds by a given ratio in each direction.
	// For example, a ratio of 0.5 extends the bounds by 50% in each direction.
	// Negative values will retract the bounds.
	pad: function (bufferRatio) {
		var sw = this._southWest,
		    ne = this._northEast,
		    heightBuffer = Math.abs(sw.lat - ne.lat) * bufferRatio,
		    widthBuffer = Math.abs(sw.lng - ne.lng) * bufferRatio;

		return new LatLngBounds(
		        new LatLng(sw.lat - heightBuffer, sw.lng - widthBuffer),
		        new LatLng(ne.lat + heightBuffer, ne.lng + widthBuffer));
	},

	// @method getCenter(): LatLng
	// Returns the center point of the bounds.
	getCenter: function () {
		return new LatLng(
		        (this._southWest.lat + this._northEast.lat) / 2,
		        (this._southWest.lng + this._northEast.lng) / 2);
	},

	// @method getSouthWest(): LatLng
	// Returns the south-west point of the bounds.
	getSouthWest: function () {
		return this._southWest;
	},

	// @method getNorthEast(): LatLng
	// Returns the north-east point of the bounds.
	getNorthEast: function () {
		return this._northEast;
	},

	// @method getNorthWest(): LatLng
	// Returns the north-west point of the bounds.
	getNorthWest: function () {
		return new LatLng(this.getNorth(), this.getWest());
	},

	// @method getSouthEast(): LatLng
	// Returns the south-east point of the bounds.
	getSouthEast: function () {
		return new LatLng(this.getSouth(), this.getEast());
	},

	// @method getWest(): Number
	// Returns the west longitude of the bounds
	getWest: function () {
		return this._southWest.lng;
	},

	// @method getSouth(): Number
	// Returns the south latitude of the bounds
	getSouth: function () {
		return this._southWest.lat;
	},

	// @method getEast(): Number
	// Returns the east longitude of the bounds
	getEast: function () {
		return this._northEast.lng;
	},

	// @method getNorth(): Number
	// Returns the north latitude of the bounds
	getNorth: function () {
		return this._northEast.lat;
	},

	// @method contains(otherBounds: LatLngBounds): Boolean
	// Returns `true` if the rectangle contains the given one.

	// @alternative
	// @method contains (latlng: LatLng): Boolean
	// Returns `true` if the rectangle contains the given point.
	contains: function (obj) { // (LatLngBounds) or (LatLng) -> Boolean
		if (typeof obj[0] === 'number' || obj instanceof LatLng || 'lat' in obj) {
			obj = toLatLng(obj);
		} else {
			obj = toLatLngBounds(obj);
		}

		var sw = this._southWest,
		    ne = this._northEast,
		    sw2, ne2;

		if (obj instanceof LatLngBounds) {
			sw2 = obj.getSouthWest();
			ne2 = obj.getNorthEast();
		} else {
			sw2 = ne2 = obj;
		}

		return (sw2.lat >= sw.lat) && (ne2.lat <= ne.lat) &&
		       (sw2.lng >= sw.lng) && (ne2.lng <= ne.lng);
	},

	// @method intersects(otherBounds: LatLngBounds): Boolean
	// Returns `true` if the rectangle intersects the given bounds. Two bounds intersect if they have at least one point in common.
	intersects: function (bounds) {
		bounds = toLatLngBounds(bounds);

		var sw = this._southWest,
		    ne = this._northEast,
		    sw2 = bounds.getSouthWest(),
		    ne2 = bounds.getNorthEast(),

		    latIntersects = (ne2.lat >= sw.lat) && (sw2.lat <= ne.lat),
		    lngIntersects = (ne2.lng >= sw.lng) && (sw2.lng <= ne.lng);

		return latIntersects && lngIntersects;
	},

	// @method overlaps(otherBounds: Bounds): Boolean
	// Returns `true` if the rectangle overlaps the given bounds. Two bounds overlap if their intersection is an area.
	overlaps: function (bounds) {
		bounds = toLatLngBounds(bounds);

		var sw = this._southWest,
		    ne = this._northEast,
		    sw2 = bounds.getSouthWest(),
		    ne2 = bounds.getNorthEast(),

		    latOverlaps = (ne2.lat > sw.lat) && (sw2.lat < ne.lat),
		    lngOverlaps = (ne2.lng > sw.lng) && (sw2.lng < ne.lng);

		return latOverlaps && lngOverlaps;
	},

	// @method toBBoxString(): String
	// Returns a string with bounding box coordinates in a 'southwest_lng,southwest_lat,northeast_lng,northeast_lat' format. Useful for sending requests to web services that return geo data.
	toBBoxString: function () {
		return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(',');
	},

	// @method equals(otherBounds: LatLngBounds, maxMargin?: Number): Boolean
	// Returns `true` if the rectangle is equivalent (within a small margin of error) to the given bounds. The margin of error can be overridden by setting `maxMargin` to a small number.
	equals: function (bounds, maxMargin) {
		if (!bounds) { return false; }

		bounds = toLatLngBounds(bounds);

		return this._southWest.equals(bounds.getSouthWest(), maxMargin) &&
		       this._northEast.equals(bounds.getNorthEast(), maxMargin);
	},

	// @method isValid(): Boolean
	// Returns `true` if the bounds are properly initialized.
	isValid: function () {
		return !!(this._southWest && this._northEast);
	}
};

// TODO International date line?

// @factory L.latLngBounds(corner1: LatLng, corner2: LatLng)
// Creates a `LatLngBounds` object by defining two diagonally opposite corners of the rectangle.

// @alternative
// @factory L.latLngBounds(latlngs: LatLng[])
// Creates a `LatLngBounds` object defined by the geographical points it contains. Very useful for zooming the map to fit a particular set of locations with [`fitBounds`](#map-fitbounds).
function toLatLngBounds(a, b) {
	if (a instanceof LatLngBounds) {
		return a;
	}
	return new LatLngBounds(a, b);
}

/* @class LatLng
 * @aka L.LatLng
 *
 * Represents a geographical point with a certain latitude and longitude.
 *
 * @example
 *
 * ```
 * var latlng = L.latLng(50.5, 30.5);
 * ```
 *
 * All Leaflet methods that accept LatLng objects also accept them in a simple Array form and simple object form (unless noted otherwise), so these lines are equivalent:
 *
 * ```
 * map.panTo([50, 30]);
 * map.panTo({lon: 30, lat: 50});
 * map.panTo({lat: 50, lng: 30});
 * map.panTo(L.latLng(50, 30));
 * ```
 *
 * Note that `LatLng` does not inherit from Leaflet's `Class` object,
 * which means new classes can't inherit from it, and new methods
 * can't be added to it with the `include` function.
 */

function LatLng(lat, lng, alt) {
	if (isNaN(lat) || isNaN(lng)) {
		throw new Error('Invalid LatLng object: (' + lat + ', ' + lng + ')');
	}

	// @property lat: Number
	// Latitude in degrees
	this.lat = +lat;

	// @property lng: Number
	// Longitude in degrees
	this.lng = +lng;

	// @property alt: Number
	// Altitude in meters (optional)
	if (alt !== undefined) {
		this.alt = +alt;
	}
}

LatLng.prototype = {
	// @method equals(otherLatLng: LatLng, maxMargin?: Number): Boolean
	// Returns `true` if the given `LatLng` point is at the same position (within a small margin of error). The margin of error can be overridden by setting `maxMargin` to a small number.
	equals: function (obj, maxMargin) {
		if (!obj) { return false; }

		obj = toLatLng(obj);

		var margin = Math.max(
		        Math.abs(this.lat - obj.lat),
		        Math.abs(this.lng - obj.lng));

		return margin <= (maxMargin === undefined ? 1.0E-9 : maxMargin);
	},

	// @method toString(): String
	// Returns a string representation of the point (for debugging purposes).
	toString: function (precision) {
		return 'LatLng(' +
		        formatNum(this.lat, precision) + ', ' +
		        formatNum(this.lng, precision) + ')';
	},

	// @method distanceTo(otherLatLng: LatLng): Number
	// Returns the distance (in meters) to the given `LatLng` calculated using the [Spherical Law of Cosines](https://en.wikipedia.org/wiki/Spherical_law_of_cosines).
	distanceTo: function (other) {
		return Earth.distance(this, toLatLng(other));
	},

	// @method wrap(): LatLng
	// Returns a new `LatLng` object with the longitude wrapped so it's always between -180 and +180 degrees.
	wrap: function () {
		return Earth.wrapLatLng(this);
	},

	// @method toBounds(sizeInMeters: Number): LatLngBounds
	// Returns a new `LatLngBounds` object in which each boundary is `sizeInMeters/2` meters apart from the `LatLng`.
	toBounds: function (sizeInMeters) {
		var latAccuracy = 180 * sizeInMeters / 40075017,
		    lngAccuracy = latAccuracy / Math.cos((Math.PI / 180) * this.lat);

		return toLatLngBounds(
		        [this.lat - latAccuracy, this.lng - lngAccuracy],
		        [this.lat + latAccuracy, this.lng + lngAccuracy]);
	},

	clone: function () {
		return new LatLng(this.lat, this.lng, this.alt);
	}
};



// @factory L.latLng(latitude: Number, longitude: Number, altitude?: Number): LatLng
// Creates an object representing a geographical point with the given latitude and longitude (and optionally altitude).

// @alternative
// @factory L.latLng(coords: Array): LatLng
// Expects an array of the form `[Number, Number]` or `[Number, Number, Number]` instead.

// @alternative
// @factory L.latLng(coords: Object): LatLng
// Expects an plain object of the form `{lat: Number, lng: Number}` or `{lat: Number, lng: Number, alt: Number}` instead.

function toLatLng(a, b, c) {
	if (a instanceof LatLng) {
		return a;
	}
	if (isArray(a) && typeof a[0] !== 'object') {
		if (a.length === 3) {
			return new LatLng(a[0], a[1], a[2]);
		}
		if (a.length === 2) {
			return new LatLng(a[0], a[1]);
		}
		return null;
	}
	if (a === undefined || a === null) {
		return a;
	}
	if (typeof a === 'object' && 'lat' in a) {
		return new LatLng(a.lat, 'lng' in a ? a.lng : a.lon, a.alt);
	}
	if (b === undefined) {
		return null;
	}
	return new LatLng(a, b, c);
}

/*
 * @namespace CRS
 * @crs L.CRS.Base
 * Object that defines coordinate reference systems for projecting
 * geographical points into pixel (screen) coordinates and back (and to
 * coordinates in other units for [WMS](https://en.wikipedia.org/wiki/Web_Map_Service) services). See
 * [spatial reference system](http://en.wikipedia.org/wiki/Coordinate_reference_system).
 *
 * Leaflet defines the most usual CRSs by default. If you want to use a
 * CRS not defined by default, take a look at the
 * [Proj4Leaflet](https://github.com/kartena/Proj4Leaflet) plugin.
 *
 * Note that the CRS instances do not inherit from Leafet's `Class` object,
 * and can't be instantiated. Also, new classes can't inherit from them,
 * and methods can't be added to them with the `include` function.
 */

var CRS = {
	// @method latLngToPoint(latlng: LatLng, zoom: Number): Point
	// Projects geographical coordinates into pixel coordinates for a given zoom.
	latLngToPoint: function (latlng, zoom) {
		var projectedPoint = this.projection.project(latlng),
		    scale = this.scale(zoom);

		return this.transformation._transform(projectedPoint, scale);
	},

	// @method pointToLatLng(point: Point, zoom: Number): LatLng
	// The inverse of `latLngToPoint`. Projects pixel coordinates on a given
	// zoom into geographical coordinates.
	pointToLatLng: function (point, zoom) {
		var scale = this.scale(zoom),
		    untransformedPoint = this.transformation.untransform(point, scale);

		return this.projection.unproject(untransformedPoint);
	},

	// @method project(latlng: LatLng): Point
	// Projects geographical coordinates into coordinates in units accepted for
	// this CRS (e.g. meters for EPSG:3857, for passing it to WMS services).
	project: function (latlng) {
		return this.projection.project(latlng);
	},

	// @method unproject(point: Point): LatLng
	// Given a projected coordinate returns the corresponding LatLng.
	// The inverse of `project`.
	unproject: function (point) {
		return this.projection.unproject(point);
	},

	// @method scale(zoom: Number): Number
	// Returns the scale used when transforming projected coordinates into
	// pixel coordinates for a particular zoom. For example, it returns
	// `256 * 2^zoom` for Mercator-based CRS.
	scale: function (zoom) {
		return 256 * Math.pow(2, zoom);
	},

	// @method zoom(scale: Number): Number
	// Inverse of `scale()`, returns the zoom level corresponding to a scale
	// factor of `scale`.
	zoom: function (scale) {
		return Math.log(scale / 256) / Math.LN2;
	},

	// @method getProjectedBounds(zoom: Number): Bounds
	// Returns the projection's bounds scaled and transformed for the provided `zoom`.
	getProjectedBounds: function (zoom) {
		if (this.infinite) { return null; }

		var b = this.projection.bounds,
		    s = this.scale(zoom),
		    min = this.transformation.transform(b.min, s),
		    max = this.transformation.transform(b.max, s);

		return new Bounds(min, max);
	},

	// @method distance(latlng1: LatLng, latlng2: LatLng): Number
	// Returns the distance between two geographical coordinates.

	// @property code: String
	// Standard code name of the CRS passed into WMS services (e.g. `'EPSG:3857'`)
	//
	// @property wrapLng: Number[]
	// An array of two numbers defining whether the longitude (horizontal) coordinate
	// axis wraps around a given range and how. Defaults to `[-180, 180]` in most
	// geographical CRSs. If `undefined`, the longitude axis does not wrap around.
	//
	// @property wrapLat: Number[]
	// Like `wrapLng`, but for the latitude (vertical) axis.

	// wrapLng: [min, max],
	// wrapLat: [min, max],

	// @property infinite: Boolean
	// If true, the coordinate space will be unbounded (infinite in both axes)
	infinite: false,

	// @method wrapLatLng(latlng: LatLng): LatLng
	// Returns a `LatLng` where lat and lng has been wrapped according to the
	// CRS's `wrapLat` and `wrapLng` properties, if they are outside the CRS's bounds.
	wrapLatLng: function (latlng) {
		var lng = this.wrapLng ? wrapNum(latlng.lng, this.wrapLng, true) : latlng.lng,
		    lat = this.wrapLat ? wrapNum(latlng.lat, this.wrapLat, true) : latlng.lat,
		    alt = latlng.alt;

		return new LatLng(lat, lng, alt);
	},

	// @method wrapLatLngBounds(bounds: LatLngBounds): LatLngBounds
	// Returns a `LatLngBounds` with the same size as the given one, ensuring
	// that its center is within the CRS's bounds.
	// Only accepts actual `L.LatLngBounds` instances, not arrays.
	wrapLatLngBounds: function (bounds) {
		var center = bounds.getCenter(),
		    newCenter = this.wrapLatLng(center),
		    latShift = center.lat - newCenter.lat,
		    lngShift = center.lng - newCenter.lng;

		if (latShift === 0 && lngShift === 0) {
			return bounds;
		}

		var sw = bounds.getSouthWest(),
		    ne = bounds.getNorthEast(),
		    newSw = new LatLng(sw.lat - latShift, sw.lng - lngShift),
		    newNe = new LatLng(ne.lat - latShift, ne.lng - lngShift);

		return new LatLngBounds(newSw, newNe);
	}
};

/*
 * @namespace CRS
 * @crs L.CRS.Earth
 *
 * Serves as the base for CRS that are global such that they cover the earth.
 * Can only be used as the base for other CRS and cannot be used directly,
 * since it does not have a `code`, `projection` or `transformation`. `distance()` returns
 * meters.
 */

var Earth = extend({}, CRS, {
	wrapLng: [-180, 180],

	// Mean Earth Radius, as recommended for use by
	// the International Union of Geodesy and Geophysics,
	// see http://rosettacode.org/wiki/Haversine_formula
	R: 6371000,

	// distance between two geographical points using spherical law of cosines approximation
	distance: function (latlng1, latlng2) {
		var rad = Math.PI / 180,
		    lat1 = latlng1.lat * rad,
		    lat2 = latlng2.lat * rad,
		    sinDLat = Math.sin((latlng2.lat - latlng1.lat) * rad / 2),
		    sinDLon = Math.sin((latlng2.lng - latlng1.lng) * rad / 2),
		    a = sinDLat * sinDLat + Math.cos(lat1) * Math.cos(lat2) * sinDLon * sinDLon,
		    c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
		return this.R * c;
	}
});

/*
 * @namespace Projection
 * @projection L.Projection.SphericalMercator
 *
 * Spherical Mercator projection — the most common projection for online maps,
 * used by almost all free and commercial tile providers. Assumes that Earth is
 * a sphere. Used by the `EPSG:3857` CRS.
 */

var SphericalMercator = {

	R: 6378137,
	MAX_LATITUDE: 85.0511287798,

	project: function (latlng) {
		var d = Math.PI / 180,
		    max = this.MAX_LATITUDE,
		    lat = Math.max(Math.min(max, latlng.lat), -max),
		    sin = Math.sin(lat * d);

		return new Point(
			this.R * latlng.lng * d,
			this.R * Math.log((1 + sin) / (1 - sin)) / 2);
	},

	unproject: function (point) {
		var d = 180 / Math.PI;

		return new LatLng(
			(2 * Math.atan(Math.exp(point.y / this.R)) - (Math.PI / 2)) * d,
			point.x * d / this.R);
	},

	bounds: (function () {
		var d = 6378137 * Math.PI;
		return new Bounds([-d, -d], [d, d]);
	})()
};

/*
 * @class Transformation
 * @aka L.Transformation
 *
 * Represents an affine transformation: a set of coefficients `a`, `b`, `c`, `d`
 * for transforming a point of a form `(x, y)` into `(a*x + b, c*y + d)` and doing
 * the reverse. Used by Leaflet in its projections code.
 *
 * @example
 *
 * ```js
 * var transformation = L.transformation(2, 5, -1, 10),
 * 	p = L.point(1, 2),
 * 	p2 = transformation.transform(p), //  L.point(7, 8)
 * 	p3 = transformation.untransform(p2); //  L.point(1, 2)
 * ```
 */


// factory new L.Transformation(a: Number, b: Number, c: Number, d: Number)
// Creates a `Transformation` object with the given coefficients.
function Transformation(a, b, c, d) {
	if (isArray(a)) {
		// use array properties
		this._a = a[0];
		this._b = a[1];
		this._c = a[2];
		this._d = a[3];
		return;
	}
	this._a = a;
	this._b = b;
	this._c = c;
	this._d = d;
}

Transformation.prototype = {
	// @method transform(point: Point, scale?: Number): Point
	// Returns a transformed point, optionally multiplied by the given scale.
	// Only accepts actual `L.Point` instances, not arrays.
	transform: function (point, scale) { // (Point, Number) -> Point
		return this._transform(point.clone(), scale);
	},

	// destructive transform (faster)
	_transform: function (point, scale) {
		scale = scale || 1;
		point.x = scale * (this._a * point.x + this._b);
		point.y = scale * (this._c * point.y + this._d);
		return point;
	},

	// @method untransform(point: Point, scale?: Number): Point
	// Returns the reverse transformation of the given point, optionally divided
	// by the given scale. Only accepts actual `L.Point` instances, not arrays.
	untransform: function (point, scale) {
		scale = scale || 1;
		return new Point(
		        (point.x / scale - this._b) / this._a,
		        (point.y / scale - this._d) / this._c);
	}
};

// factory L.transformation(a: Number, b: Number, c: Number, d: Number)

// @factory L.transformation(a: Number, b: Number, c: Number, d: Number)
// Instantiates a Transformation object with the given coefficients.

// @alternative
// @factory L.transformation(coefficients: Array): Transformation
// Expects an coefficients array of the form
// `[a: Number, b: Number, c: Number, d: Number]`.

function toTransformation(a, b, c, d) {
	return new Transformation(a, b, c, d);
}

/*
 * @namespace CRS
 * @crs L.CRS.EPSG3857
 *
 * The most common CRS for online maps, used by almost all free and commercial
 * tile providers. Uses Spherical Mercator projection. Set in by default in
 * Map's `crs` option.
 */

var EPSG3857 = extend({}, Earth, {
	code: 'EPSG:3857',
	projection: SphericalMercator,

	transformation: (function () {
		var scale = 0.5 / (Math.PI * SphericalMercator.R);
		return toTransformation(scale, 0.5, -scale, 0.5);
	}())
});

var EPSG900913 = extend({}, EPSG3857, {
	code: 'EPSG:900913'
});

// @namespace SVG; @section
// There are several static functions which can be called without instantiating L.SVG:

// @function create(name: String): SVGElement
// Returns a instance of [SVGElement](https://developer.mozilla.org/docs/Web/API/SVGElement),
// corresponding to the class name passed. For example, using 'line' will return
// an instance of [SVGLineElement](https://developer.mozilla.org/docs/Web/API/SVGLineElement).
function svgCreate(name) {
	return document.createElementNS('http://www.w3.org/2000/svg', name);
}

// @function pointsToPath(rings: Point[], closed: Boolean): String
// Generates a SVG path string for multiple rings, with each ring turning
// into "M..L..L.." instructions
function pointsToPath(rings, closed) {
	var str = '',
	i, j, len, len2, points, p;

	for (i = 0, len = rings.length; i < len; i++) {
		points = rings[i];

		for (j = 0, len2 = points.length; j < len2; j++) {
			p = points[j];
			str += (j ? 'L' : 'M') + p.x + ' ' + p.y;
		}

		// closes the ring for polygons; "x" is VML syntax
		str += closed ? (svg ? 'z' : 'x') : '';
	}

	// SVG complains about empty path strings
	return str || 'M0 0';
}

/*
 * @namespace Browser
 * @aka L.Browser
 *
 * A namespace with static properties for browser/feature detection used by Leaflet internally.
 *
 * @example
 *
 * ```js
 * if (L.Browser.ielt9) {
 *   alert('Upgrade your browser, dude!');
 * }
 * ```
 */

var style$1 = document.documentElement.style;

// @property ie: Boolean; `true` for all Internet Explorer versions (not Edge).
var ie = 'ActiveXObject' in window;

// @property ielt9: Boolean; `true` for Internet Explorer versions less than 9.
var ielt9 = ie && !document.addEventListener;

// @property edge: Boolean; `true` for the Edge web browser.
var edge = 'msLaunchUri' in navigator && !('documentMode' in document);

// @property webkit: Boolean;
// `true` for webkit-based browsers like Chrome and Safari (including mobile versions).
var webkit = userAgentContains('webkit');

// @property android: Boolean
// `true` for any browser running on an Android platform.
var android = userAgentContains('android');

// @property android23: Boolean; `true` for browsers running on Android 2 or Android 3.
var android23 = userAgentContains('android 2') || userAgentContains('android 3');

/* See https://stackoverflow.com/a/17961266 for details on detecting stock Android */
var webkitVer = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10); // also matches AppleWebKit
// @property androidStock: Boolean; `true` for the Android stock browser (i.e. not Chrome)
var androidStock = android && userAgentContains('Google') && webkitVer < 537 && !('AudioNode' in window);

// @property opera: Boolean; `true` for the Opera browser
var opera = !!window.opera;

// @property chrome: Boolean; `true` for the Chrome browser.
var chrome = userAgentContains('chrome');

// @property gecko: Boolean; `true` for gecko-based browsers like Firefox.
var gecko = userAgentContains('gecko') && !webkit && !opera && !ie;

// @property safari: Boolean; `true` for the Safari browser.
var safari = !chrome && userAgentContains('safari');

var phantom = userAgentContains('phantom');

// @property opera12: Boolean
// `true` for the Opera browser supporting CSS transforms (version 12 or later).
var opera12 = 'OTransition' in style$1;

// @property win: Boolean; `true` when the browser is running in a Windows platform
var win = navigator.platform.indexOf('Win') === 0;

// @property ie3d: Boolean; `true` for all Internet Explorer versions supporting CSS transforms.
var ie3d = ie && ('transition' in style$1);

// @property webkit3d: Boolean; `true` for webkit-based browsers supporting CSS transforms.
var webkit3d = ('WebKitCSSMatrix' in window) && ('m11' in new window.WebKitCSSMatrix()) && !android23;

// @property gecko3d: Boolean; `true` for gecko-based browsers supporting CSS transforms.
var gecko3d = 'MozPerspective' in style$1;

// @property any3d: Boolean
// `true` for all browsers supporting CSS transforms.
var any3d = !window.L_DISABLE_3D && (ie3d || webkit3d || gecko3d) && !opera12 && !phantom;

// @property mobile: Boolean; `true` for all browsers running in a mobile device.
var mobile = typeof orientation !== 'undefined' || userAgentContains('mobile');

// @property mobileWebkit: Boolean; `true` for all webkit-based browsers in a mobile device.
var mobileWebkit = mobile && webkit;

// @property mobileWebkit3d: Boolean
// `true` for all webkit-based browsers in a mobile device supporting CSS transforms.
var mobileWebkit3d = mobile && webkit3d;

// @property msPointer: Boolean
// `true` for browsers implementing the Microsoft touch events model (notably IE10).
var msPointer = !window.PointerEvent && window.MSPointerEvent;

// @property pointer: Boolean
// `true` for all browsers supporting [pointer events](https://msdn.microsoft.com/en-us/library/dn433244%28v=vs.85%29.aspx).
var pointer = !!(window.PointerEvent || msPointer);

// @property touch: Boolean
// `true` for all browsers supporting [touch events](https://developer.mozilla.org/docs/Web/API/Touch_events).
// This does not necessarily mean that the browser is running in a computer with
// a touchscreen, it only means that the browser is capable of understanding
// touch events.
var touch = !window.L_NO_TOUCH && (pointer || 'ontouchstart' in window ||
		(window.DocumentTouch && document instanceof window.DocumentTouch));

// @property mobileOpera: Boolean; `true` for the Opera browser in a mobile device.
var mobileOpera = mobile && opera;

// @property mobileGecko: Boolean
// `true` for gecko-based browsers running in a mobile device.
var mobileGecko = mobile && gecko;

// @property retina: Boolean
// `true` for browsers on a high-resolution "retina" screen or on any screen when browser's display zoom is more than 100%.
var retina = (window.devicePixelRatio || (window.screen.deviceXDPI / window.screen.logicalXDPI)) > 1;


// @property canvas: Boolean
// `true` when the browser supports [`<canvas>`](https://developer.mozilla.org/docs/Web/API/Canvas_API).
var canvas = (function () {
	return !!document.createElement('canvas').getContext;
}());

// @property svg: Boolean
// `true` when the browser supports [SVG](https://developer.mozilla.org/docs/Web/SVG).
var svg = !!(document.createElementNS && svgCreate('svg').createSVGRect);

// @property vml: Boolean
// `true` if the browser supports [VML](https://en.wikipedia.org/wiki/Vector_Markup_Language).
var vml = !svg && (function () {
	try {
		var div = document.createElement('div');
		div.innerHTML = '<v:shape adj="1"/>';

		var shape = div.firstChild;
		shape.style.behavior = 'url(#default#VML)';

		return shape && (typeof shape.adj === 'object');

	} catch (e) {
		return false;
	}
}());


function userAgentContains(str) {
	return navigator.userAgent.toLowerCase().indexOf(str) >= 0;
}


var Browser = (Object.freeze || Object)({
	ie: ie,
	ielt9: ielt9,
	edge: edge,
	webkit: webkit,
	android: android,
	android23: android23,
	androidStock: androidStock,
	opera: opera,
	chrome: chrome,
	gecko: gecko,
	safari: safari,
	phantom: phantom,
	opera12: opera12,
	win: win,
	ie3d: ie3d,
	webkit3d: webkit3d,
	gecko3d: gecko3d,
	any3d: any3d,
	mobile: mobile,
	mobileWebkit: mobileWebkit,
	mobileWebkit3d: mobileWebkit3d,
	msPointer: msPointer,
	pointer: pointer,
	touch: touch,
	mobileOpera: mobileOpera,
	mobileGecko: mobileGecko,
	retina: retina,
	canvas: canvas,
	svg: svg,
	vml: vml
});

/*
 * Extends L.DomEvent to provide touch support for Internet Explorer and Windows-based devices.
 */


var POINTER_DOWN =   msPointer ? 'MSPointerDown'   : 'pointerdown';
var POINTER_MOVE =   msPointer ? 'MSPointerMove'   : 'pointermove';
var POINTER_UP =     msPointer ? 'MSPointerUp'     : 'pointerup';
var POINTER_CANCEL = msPointer ? 'MSPointerCancel' : 'pointercancel';
var TAG_WHITE_LIST = ['INPUT', 'SELECT', 'OPTION'];

var _pointers = {};
var _pointerDocListener = false;

// DomEvent.DoubleTap needs to know about this
var _pointersCount = 0;

// Provides a touch events wrapper for (ms)pointer events.
// ref http://www.w3.org/TR/pointerevents/ https://www.w3.org/Bugs/Public/show_bug.cgi?id=22890

function addPointerListener(obj, type, handler, id) {
	if (type === 'touchstart') {
		_addPointerStart(obj, handler, id);

	} else if (type === 'touchmove') {
		_addPointerMove(obj, handler, id);

	} else if (type === 'touchend') {
		_addPointerEnd(obj, handler, id);
	}

	return this;
}

function removePointerListener(obj, type, id) {
	var handler = obj['_leaflet_' + type + id];

	if (type === 'touchstart') {
		obj.removeEventListener(POINTER_DOWN, handler, false);

	} else if (type === 'touchmove') {
		obj.removeEventListener(POINTER_MOVE, handler, false);

	} else if (type === 'touchend') {
		obj.removeEventListener(POINTER_UP, handler, false);
		obj.removeEventListener(POINTER_CANCEL, handler, false);
	}

	return this;
}

function _addPointerStart(obj, handler, id) {
	var onDown = bind(function (e) {
		if (e.pointerType !== 'mouse' && e.MSPOINTER_TYPE_MOUSE && e.pointerType !== e.MSPOINTER_TYPE_MOUSE) {
			// In IE11, some touch events needs to fire for form controls, or
			// the controls will stop working. We keep a whitelist of tag names that
			// need these events. For other target tags, we prevent default on the event.
			if (TAG_WHITE_LIST.indexOf(e.target.tagName) < 0) {
				preventDefault(e);
			} else {
				return;
			}
		}

		_handlePointer(e, handler);
	});

	obj['_leaflet_touchstart' + id] = onDown;
	obj.addEventListener(POINTER_DOWN, onDown, false);

	// need to keep track of what pointers and how many are active to provide e.touches emulation
	if (!_pointerDocListener) {
		// we listen documentElement as any drags that end by moving the touch off the screen get fired there
		document.documentElement.addEventListener(POINTER_DOWN, _globalPointerDown, true);
		document.documentElement.addEventListener(POINTER_MOVE, _globalPointerMove, true);
		document.documentElement.addEventListener(POINTER_UP, _globalPointerUp, true);
		document.documentElement.addEventListener(POINTER_CANCEL, _globalPointerUp, true);

		_pointerDocListener = true;
	}
}

function _globalPointerDown(e) {
	_pointers[e.pointerId] = e;
	_pointersCount++;
}

function _globalPointerMove(e) {
	if (_pointers[e.pointerId]) {
		_pointers[e.pointerId] = e;
	}
}

function _globalPointerUp(e) {
	delete _pointers[e.pointerId];
	_pointersCount--;
}

function _handlePointer(e, handler) {
	e.touches = [];
	for (var i in _pointers) {
		e.touches.push(_pointers[i]);
	}
	e.changedTouches = [e];

	handler(e);
}

function _addPointerMove(obj, handler, id) {
	var onMove = function (e) {
		// don't fire touch moves when mouse isn't down
		if ((e.pointerType === e.MSPOINTER_TYPE_MOUSE || e.pointerType === 'mouse') && e.buttons === 0) { return; }

		_handlePointer(e, handler);
	};

	obj['_leaflet_touchmove' + id] = onMove;
	obj.addEventListener(POINTER_MOVE, onMove, false);
}

function _addPointerEnd(obj, handler, id) {
	var onUp = function (e) {
		_handlePointer(e, handler);
	};

	obj['_leaflet_touchend' + id] = onUp;
	obj.addEventListener(POINTER_UP, onUp, false);
	obj.addEventListener(POINTER_CANCEL, onUp, false);
}

/*
 * Extends the event handling code with double tap support for mobile browsers.
 */

var _touchstart = msPointer ? 'MSPointerDown' : pointer ? 'pointerdown' : 'touchstart';
var _touchend = msPointer ? 'MSPointerUp' : pointer ? 'pointerup' : 'touchend';
var _pre = '_leaflet_';

// inspired by Zepto touch code by Thomas Fuchs
function addDoubleTapListener(obj, handler, id) {
	var last, touch$$1,
	    doubleTap = false,
	    delay = 250;

	function onTouchStart(e) {
		var count;

		if (pointer) {
			if ((!edge) || e.pointerType === 'mouse') { return; }
			count = _pointersCount;
		} else {
			count = e.touches.length;
		}

		if (count > 1) { return; }

		var now = Date.now(),
		    delta = now - (last || now);

		touch$$1 = e.touches ? e.touches[0] : e;
		doubleTap = (delta > 0 && delta <= delay);
		last = now;
	}

	function onTouchEnd(e) {
		if (doubleTap && !touch$$1.cancelBubble) {
			if (pointer) {
				if ((!edge) || e.pointerType === 'mouse') { return; }
				// work around .type being readonly with MSPointer* events
				var newTouch = {},
				    prop, i;

				for (i in touch$$1) {
					prop = touch$$1[i];
					newTouch[i] = prop && prop.bind ? prop.bind(touch$$1) : prop;
				}
				touch$$1 = newTouch;
			}
			touch$$1.type = 'dblclick';
			handler(touch$$1);
			last = null;
		}
	}

	obj[_pre + _touchstart + id] = onTouchStart;
	obj[_pre + _touchend + id] = onTouchEnd;
	obj[_pre + 'dblclick' + id] = handler;

	obj.addEventListener(_touchstart, onTouchStart, false);
	obj.addEventListener(_touchend, onTouchEnd, false);

	// On some platforms (notably, chrome<55 on win10 + touchscreen + mouse),
	// the browser doesn't fire touchend/pointerup events but does fire
	// native dblclicks. See #4127.
	// Edge 14 also fires native dblclicks, but only for pointerType mouse, see #5180.
	obj.addEventListener('dblclick', handler, false);

	return this;
}

function removeDoubleTapListener(obj, id) {
	var touchstart = obj[_pre + _touchstart + id],
	    touchend = obj[_pre + _touchend + id],
	    dblclick = obj[_pre + 'dblclick' + id];

	obj.removeEventListener(_touchstart, touchstart, false);
	obj.removeEventListener(_touchend, touchend, false);
	if (!edge) {
		obj.removeEventListener('dblclick', dblclick, false);
	}

	return this;
}

/*
 * @namespace DomUtil
 *
 * Utility functions to work with the [DOM](https://developer.mozilla.org/docs/Web/API/Document_Object_Model)
 * tree, used by Leaflet internally.
 *
 * Most functions expecting or returning a `HTMLElement` also work for
 * SVG elements. The only difference is that classes refer to CSS classes
 * in HTML and SVG classes in SVG.
 */


// @property TRANSFORM: String
// Vendor-prefixed transform style name (e.g. `'webkitTransform'` for WebKit).
var TRANSFORM = testProp(
	['transform', 'webkitTransform', 'OTransform', 'MozTransform', 'msTransform']);

// webkitTransition comes first because some browser versions that drop vendor prefix don't do
// the same for the transitionend event, in particular the Android 4.1 stock browser

// @property TRANSITION: String
// Vendor-prefixed transition style name.
var TRANSITION = testProp(
	['webkitTransition', 'transition', 'OTransition', 'MozTransition', 'msTransition']);

// @property TRANSITION_END: String
// Vendor-prefixed transitionend event name.
var TRANSITION_END =
	TRANSITION === 'webkitTransition' || TRANSITION === 'OTransition' ? TRANSITION + 'End' : 'transitionend';


// @function get(id: String|HTMLElement): HTMLElement
// Returns an element given its DOM id, or returns the element itself
// if it was passed directly.
function get(id) {
	return typeof id === 'string' ? document.getElementById(id) : id;
}

// @function getStyle(el: HTMLElement, styleAttrib: String): String
// Returns the value for a certain style attribute on an element,
// including computed values or values set through CSS.
function getStyle(el, style) {
	var value = el.style[style] || (el.currentStyle && el.currentStyle[style]);

	if ((!value || value === 'auto') && document.defaultView) {
		var css = document.defaultView.getComputedStyle(el, null);
		value = css ? css[style] : null;
	}
	return value === 'auto' ? null : value;
}

// @function create(tagName: String, className?: String, container?: HTMLElement): HTMLElement
// Creates an HTML element with `tagName`, sets its class to `className`, and optionally appends it to `container` element.
function create$1(tagName, className, container) {
	var el = document.createElement(tagName);
	el.className = className || '';

	if (container) {
		container.appendChild(el);
	}
	return el;
}

// @function remove(el: HTMLElement)
// Removes `el` from its parent element
function remove(el) {
	var parent = el.parentNode;
	if (parent) {
		parent.removeChild(el);
	}
}

// @function empty(el: HTMLElement)
// Removes all of `el`'s children elements from `el`
function empty(el) {
	while (el.firstChild) {
		el.removeChild(el.firstChild);
	}
}

// @function toFront(el: HTMLElement)
// Makes `el` the last child of its parent, so it renders in front of the other children.
function toFront(el) {
	var parent = el.parentNode;
	if (parent && parent.lastChild !== el) {
		parent.appendChild(el);
	}
}

// @function toBack(el: HTMLElement)
// Makes `el` the first child of its parent, so it renders behind the other children.
function toBack(el) {
	var parent = el.parentNode;
	if (parent && parent.firstChild !== el) {
		parent.insertBefore(el, parent.firstChild);
	}
}

// @function hasClass(el: HTMLElement, name: String): Boolean
// Returns `true` if the element's class attribute contains `name`.
function hasClass(el, name) {
	if (el.classList !== undefined) {
		return el.classList.contains(name);
	}
	var className = getClass(el);
	return className.length > 0 && new RegExp('(^|\\s)' + name + '(\\s|$)').test(className);
}

// @function addClass(el: HTMLElement, name: String)
// Adds `name` to the element's class attribute.
function addClass(el, name) {
	if (el.classList !== undefined) {
		var classes = splitWords(name);
		for (var i = 0, len = classes.length; i < len; i++) {
			el.classList.add(classes[i]);
		}
	} else if (!hasClass(el, name)) {
		var className = getClass(el);
		setClass(el, (className ? className + ' ' : '') + name);
	}
}

// @function removeClass(el: HTMLElement, name: String)
// Removes `name` from the element's class attribute.
function removeClass(el, name) {
	if (el.classList !== undefined) {
		el.classList.remove(name);
	} else {
		setClass(el, trim((' ' + getClass(el) + ' ').replace(' ' + name + ' ', ' ')));
	}
}

// @function setClass(el: HTMLElement, name: String)
// Sets the element's class.
function setClass(el, name) {
	if (el.className.baseVal === undefined) {
		el.className = name;
	} else {
		// in case of SVG element
		el.className.baseVal = name;
	}
}

// @function getClass(el: HTMLElement): String
// Returns the element's class.
function getClass(el) {
	// Check if the element is an SVGElementInstance and use the correspondingElement instead
	// (Required for linked SVG elements in IE11.)
	if (el.correspondingElement) {
		el = el.correspondingElement;
	}
	return el.className.baseVal === undefined ? el.className : el.className.baseVal;
}

// @function setOpacity(el: HTMLElement, opacity: Number)
// Set the opacity of an element (including old IE support).
// `opacity` must be a number from `0` to `1`.
function setOpacity(el, value) {
	if ('opacity' in el.style) {
		el.style.opacity = value;
	} else if ('filter' in el.style) {
		_setOpacityIE(el, value);
	}
}

function _setOpacityIE(el, value) {
	var filter = false,
	    filterName = 'DXImageTransform.Microsoft.Alpha';

	// filters collection throws an error if we try to retrieve a filter that doesn't exist
	try {
		filter = el.filters.item(filterName);
	} catch (e) {
		// don't set opacity to 1 if we haven't already set an opacity,
		// it isn't needed and breaks transparent pngs.
		if (value === 1) { return; }
	}

	value = Math.round(value * 100);

	if (filter) {
		filter.Enabled = (value !== 100);
		filter.Opacity = value;
	} else {
		el.style.filter += ' progid:' + filterName + '(opacity=' + value + ')';
	}
}

// @function testProp(props: String[]): String|false
// Goes through the array of style names and returns the first name
// that is a valid style name for an element. If no such name is found,
// it returns false. Useful for vendor-prefixed styles like `transform`.
function testProp(props) {
	var style = document.documentElement.style;

	for (var i = 0; i < props.length; i++) {
		if (props[i] in style) {
			return props[i];
		}
	}
	return false;
}

// @function setTransform(el: HTMLElement, offset: Point, scale?: Number)
// Resets the 3D CSS transform of `el` so it is translated by `offset` pixels
// and optionally scaled by `scale`. Does not have an effect if the
// browser doesn't support 3D CSS transforms.
function setTransform(el, offset, scale) {
	var pos = offset || new Point(0, 0);

	el.style[TRANSFORM] =
		(ie3d ?
			'translate(' + pos.x + 'px,' + pos.y + 'px)' :
			'translate3d(' + pos.x + 'px,' + pos.y + 'px,0)') +
		(scale ? ' scale(' + scale + ')' : '');
}

// @function setPosition(el: HTMLElement, position: Point)
// Sets the position of `el` to coordinates specified by `position`,
// using CSS translate or top/left positioning depending on the browser
// (used by Leaflet internally to position its layers).
function setPosition(el, point) {

	/*eslint-disable */
	el._leaflet_pos = point;
	/* eslint-enable */

	if (any3d) {
		setTransform(el, point);
	} else {
		el.style.left = point.x + 'px';
		el.style.top = point.y + 'px';
	}
}

// @function getPosition(el: HTMLElement): Point
// Returns the coordinates of an element previously positioned with setPosition.
function getPosition(el) {
	// this method is only used for elements previously positioned using setPosition,
	// so it's safe to cache the position for performance

	return el._leaflet_pos || new Point(0, 0);
}

// @function disableTextSelection()
// Prevents the user from generating `selectstart` DOM events, usually generated
// when the user drags the mouse through a page with text. Used internally
// by Leaflet to override the behaviour of any click-and-drag interaction on
// the map. Affects drag interactions on the whole document.

// @function enableTextSelection()
// Cancels the effects of a previous [`L.DomUtil.disableTextSelection`](#domutil-disabletextselection).
var disableTextSelection;
var enableTextSelection;
var _userSelect;
if ('onselectstart' in document) {
	disableTextSelection = function () {
		on(window, 'selectstart', preventDefault);
	};
	enableTextSelection = function () {
		off(window, 'selectstart', preventDefault);
	};
} else {
	var userSelectProperty = testProp(
		['userSelect', 'WebkitUserSelect', 'OUserSelect', 'MozUserSelect', 'msUserSelect']);

	disableTextSelection = function () {
		if (userSelectProperty) {
			var style = document.documentElement.style;
			_userSelect = style[userSelectProperty];
			style[userSelectProperty] = 'none';
		}
	};
	enableTextSelection = function () {
		if (userSelectProperty) {
			document.documentElement.style[userSelectProperty] = _userSelect;
			_userSelect = undefined;
		}
	};
}

// @function disableImageDrag()
// As [`L.DomUtil.disableTextSelection`](#domutil-disabletextselection), but
// for `dragstart` DOM events, usually generated when the user drags an image.
function disableImageDrag() {
	on(window, 'dragstart', preventDefault);
}

// @function enableImageDrag()
// Cancels the effects of a previous [`L.DomUtil.disableImageDrag`](#domutil-disabletextselection).
function enableImageDrag() {
	off(window, 'dragstart', preventDefault);
}

var _outlineElement;
var _outlineStyle;
// @function preventOutline(el: HTMLElement)
// Makes the [outline](https://developer.mozilla.org/docs/Web/CSS/outline)
// of the element `el` invisible. Used internally by Leaflet to prevent
// focusable elements from displaying an outline when the user performs a
// drag interaction on them.
function preventOutline(element) {
	while (element.tabIndex === -1) {
		element = element.parentNode;
	}
	if (!element.style) { return; }
	restoreOutline();
	_outlineElement = element;
	_outlineStyle = element.style.outline;
	element.style.outline = 'none';
	on(window, 'keydown', restoreOutline);
}

// @function restoreOutline()
// Cancels the effects of a previous [`L.DomUtil.preventOutline`]().
function restoreOutline() {
	if (!_outlineElement) { return; }
	_outlineElement.style.outline = _outlineStyle;
	_outlineElement = undefined;
	_outlineStyle = undefined;
	off(window, 'keydown', restoreOutline);
}

// @function getSizedParentNode(el: HTMLElement): HTMLElement
// Finds the closest parent node which size (width and height) is not null.
function getSizedParentNode(element) {
	do {
		element = element.parentNode;
	} while ((!element.offsetWidth || !element.offsetHeight) && element !== document.body);
	return element;
}

// @function getScale(el: HTMLElement): Object
// Computes the CSS scale currently applied on the element.
// Returns an object with `x` and `y` members as horizontal and vertical scales respectively,
// and `boundingClientRect` as the result of [`getBoundingClientRect()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect).
function getScale(element) {
	var rect = element.getBoundingClientRect(); // Read-only in old browsers.

	return {
		x: rect.width / element.offsetWidth || 1,
		y: rect.height / element.offsetHeight || 1,
		boundingClientRect: rect
	};
}


var DomUtil = (Object.freeze || Object)({
	TRANSFORM: TRANSFORM,
	TRANSITION: TRANSITION,
	TRANSITION_END: TRANSITION_END,
	get: get,
	getStyle: getStyle,
	create: create$1,
	remove: remove,
	empty: empty,
	toFront: toFront,
	toBack: toBack,
	hasClass: hasClass,
	addClass: addClass,
	removeClass: removeClass,
	setClass: setClass,
	getClass: getClass,
	setOpacity: setOpacity,
	testProp: testProp,
	setTransform: setTransform,
	setPosition: setPosition,
	getPosition: getPosition,
	disableTextSelection: disableTextSelection,
	enableTextSelection: enableTextSelection,
	disableImageDrag: disableImageDrag,
	enableImageDrag: enableImageDrag,
	preventOutline: preventOutline,
	restoreOutline: restoreOutline,
	getSizedParentNode: getSizedParentNode,
	getScale: getScale
});

/*
 * @namespace DomEvent
 * Utility functions to work with the [DOM events](https://developer.mozilla.org/docs/Web/API/Event), used by Leaflet internally.
 */

// Inspired by John Resig, Dean Edwards and YUI addEvent implementations.

// @function on(el: HTMLElement, types: String, fn: Function, context?: Object): this
// Adds a listener function (`fn`) to a particular DOM event type of the
// element `el`. You can optionally specify the context of the listener
// (object the `this` keyword will point to). You can also pass several
// space-separated types (e.g. `'click dblclick'`).

// @alternative
// @function on(el: HTMLElement, eventMap: Object, context?: Object): this
// Adds a set of type/listener pairs, e.g. `{click: onClick, mousemove: onMouseMove}`
function on(obj, types, fn, context) {

	if (typeof types === 'object') {
		for (var type in types) {
			addOne(obj, type, types[type], fn);
		}
	} else {
		types = splitWords(types);

		for (var i = 0, len = types.length; i < len; i++) {
			addOne(obj, types[i], fn, context);
		}
	}

	return this;
}

var eventsKey = '_leaflet_events';

// @function off(el: HTMLElement, types: String, fn: Function, context?: Object): this
// Removes a previously added listener function.
// Note that if you passed a custom context to on, you must pass the same
// context to `off` in order to remove the listener.

// @alternative
// @function off(el: HTMLElement, eventMap: Object, context?: Object): this
// Removes a set of type/listener pairs, e.g. `{click: onClick, mousemove: onMouseMove}`
function off(obj, types, fn, context) {

	if (typeof types === 'object') {
		for (var type in types) {
			removeOne(obj, type, types[type], fn);
		}
	} else if (types) {
		types = splitWords(types);

		for (var i = 0, len = types.length; i < len; i++) {
			removeOne(obj, types[i], fn, context);
		}
	} else {
		for (var j in obj[eventsKey]) {
			removeOne(obj, j, obj[eventsKey][j]);
		}
		delete obj[eventsKey];
	}

	return this;
}

function addOne(obj, type, fn, context) {
	var id = type + stamp(fn) + (context ? '_' + stamp(context) : '');

	if (obj[eventsKey] && obj[eventsKey][id]) { return this; }

	var handler = function (e) {
		return fn.call(context || obj, e || window.event);
	};

	var originalHandler = handler;

	if (pointer && type.indexOf('touch') === 0) {
		// Needs DomEvent.Pointer.js
		addPointerListener(obj, type, handler, id);

	} else if (touch && (type === 'dblclick') && addDoubleTapListener &&
	           !(pointer && chrome)) {
		// Chrome >55 does not need the synthetic dblclicks from addDoubleTapListener
		// See #5180
		addDoubleTapListener(obj, handler, id);

	} else if ('addEventListener' in obj) {

		if (type === 'mousewheel') {
			obj.addEventListener('onwheel' in obj ? 'wheel' : 'mousewheel', handler, false);

		} else if ((type === 'mouseenter') || (type === 'mouseleave')) {
			handler = function (e) {
				e = e || window.event;
				if (isExternalTarget(obj, e)) {
					originalHandler(e);
				}
			};
			obj.addEventListener(type === 'mouseenter' ? 'mouseover' : 'mouseout', handler, false);

		} else {
			if (type === 'click' && android) {
				handler = function (e) {
					filterClick(e, originalHandler);
				};
			}
			obj.addEventListener(type, handler, false);
		}

	} else if ('attachEvent' in obj) {
		obj.attachEvent('on' + type, handler);
	}

	obj[eventsKey] = obj[eventsKey] || {};
	obj[eventsKey][id] = handler;
}

function removeOne(obj, type, fn, context) {

	var id = type + stamp(fn) + (context ? '_' + stamp(context) : ''),
	    handler = obj[eventsKey] && obj[eventsKey][id];

	if (!handler) { return this; }

	if (pointer && type.indexOf('touch') === 0) {
		removePointerListener(obj, type, id);

	} else if (touch && (type === 'dblclick') && removeDoubleTapListener &&
	           !(pointer && chrome)) {
		removeDoubleTapListener(obj, id);

	} else if ('removeEventListener' in obj) {

		if (type === 'mousewheel') {
			obj.removeEventListener('onwheel' in obj ? 'wheel' : 'mousewheel', handler, false);

		} else {
			obj.removeEventListener(
				type === 'mouseenter' ? 'mouseover' :
				type === 'mouseleave' ? 'mouseout' : type, handler, false);
		}

	} else if ('detachEvent' in obj) {
		obj.detachEvent('on' + type, handler);
	}

	obj[eventsKey][id] = null;
}

// @function stopPropagation(ev: DOMEvent): this
// Stop the given event from propagation to parent elements. Used inside the listener functions:
// ```js
// L.DomEvent.on(div, 'click', function (ev) {
// 	L.DomEvent.stopPropagation(ev);
// });
// ```
function stopPropagation(e) {

	if (e.stopPropagation) {
		e.stopPropagation();
	} else if (e.originalEvent) {  // In case of Leaflet event.
		e.originalEvent._stopped = true;
	} else {
		e.cancelBubble = true;
	}
	skipped(e);

	return this;
}

// @function disableScrollPropagation(el: HTMLElement): this
// Adds `stopPropagation` to the element's `'mousewheel'` events (plus browser variants).
function disableScrollPropagation(el) {
	addOne(el, 'mousewheel', stopPropagation);
	return this;
}

// @function disableClickPropagation(el: HTMLElement): this
// Adds `stopPropagation` to the element's `'click'`, `'doubleclick'`,
// `'mousedown'` and `'touchstart'` events (plus browser variants).
function disableClickPropagation(el) {
	on(el, 'mousedown touchstart dblclick', stopPropagation);
	addOne(el, 'click', fakeStop);
	return this;
}

// @function preventDefault(ev: DOMEvent): this
// Prevents the default action of the DOM Event `ev` from happening (such as
// following a link in the href of the a element, or doing a POST request
// with page reload when a `<form>` is submitted).
// Use it inside listener functions.
function preventDefault(e) {
	if (e.preventDefault) {
		e.preventDefault();
	} else {
		e.returnValue = false;
	}
	return this;
}

// @function stop(ev: DOMEvent): this
// Does `stopPropagation` and `preventDefault` at the same time.
function stop(e) {
	preventDefault(e);
	stopPropagation(e);
	return this;
}

// @function getMousePosition(ev: DOMEvent, container?: HTMLElement): Point
// Gets normalized mouse position from a DOM event relative to the
// `container` (border excluded) or to the whole page if not specified.
function getMousePosition(e, container) {
	if (!container) {
		return new Point(e.clientX, e.clientY);
	}

	var scale = getScale(container),
	    offset = scale.boundingClientRect; // left and top  values are in page scale (like the event clientX/Y)

	return new Point(
		// offset.left/top values are in page scale (like clientX/Y),
		// whereas clientLeft/Top (border width) values are the original values (before CSS scale applies).
		(e.clientX - offset.left) / scale.x - container.clientLeft,
		(e.clientY - offset.top) / scale.y - container.clientTop
	);
}

// Chrome on Win scrolls double the pixels as in other platforms (see #4538),
// and Firefox scrolls device pixels, not CSS pixels
var wheelPxFactor =
	(win && chrome) ? 2 * window.devicePixelRatio :
	gecko ? window.devicePixelRatio : 1;

// @function getWheelDelta(ev: DOMEvent): Number
// Gets normalized wheel delta from a mousewheel DOM event, in vertical
// pixels scrolled (negative if scrolling down).
// Events from pointing devices without precise scrolling are mapped to
// a best guess of 60 pixels.
function getWheelDelta(e) {
	return (edge) ? e.wheelDeltaY / 2 : // Don't trust window-geometry-based delta
	       (e.deltaY && e.deltaMode === 0) ? -e.deltaY / wheelPxFactor : // Pixels
	       (e.deltaY && e.deltaMode === 1) ? -e.deltaY * 20 : // Lines
	       (e.deltaY && e.deltaMode === 2) ? -e.deltaY * 60 : // Pages
	       (e.deltaX || e.deltaZ) ? 0 :	// Skip horizontal/depth wheel events
	       e.wheelDelta ? (e.wheelDeltaY || e.wheelDelta) / 2 : // Legacy IE pixels
	       (e.detail && Math.abs(e.detail) < 32765) ? -e.detail * 20 : // Legacy Moz lines
	       e.detail ? e.detail / -32765 * 60 : // Legacy Moz pages
	       0;
}

var skipEvents = {};

function fakeStop(e) {
	// fakes stopPropagation by setting a special event flag, checked/reset with skipped(e)
	skipEvents[e.type] = true;
}

function skipped(e) {
	var events = skipEvents[e.type];
	// reset when checking, as it's only used in map container and propagates outside of the map
	skipEvents[e.type] = false;
	return events;
}

// check if element really left/entered the event target (for mouseenter/mouseleave)
function isExternalTarget(el, e) {

	var related = e.relatedTarget;

	if (!related) { return true; }

	try {
		while (related && (related !== el)) {
			related = related.parentNode;
		}
	} catch (err) {
		return false;
	}
	return (related !== el);
}

var lastClick;

// this is a horrible workaround for a bug in Android where a single touch triggers two click events
function filterClick(e, handler) {
	var timeStamp = (e.timeStamp || (e.originalEvent && e.originalEvent.timeStamp)),
	    elapsed = lastClick && (timeStamp - lastClick);

	// are they closer together than 500ms yet more than 100ms?
	// Android typically triggers them ~300ms apart while multiple listeners
	// on the same event should be triggered far faster;
	// or check if click is simulated on the element, and if it is, reject any non-simulated events

	if ((elapsed && elapsed > 100 && elapsed < 500) || (e.target._simulatedClick && !e._simulated)) {
		stop(e);
		return;
	}
	lastClick = timeStamp;

	handler(e);
}




var DomEvent = (Object.freeze || Object)({
	on: on,
	off: off,
	stopPropagation: stopPropagation,
	disableScrollPropagation: disableScrollPropagation,
	disableClickPropagation: disableClickPropagation,
	preventDefault: preventDefault,
	stop: stop,
	getMousePosition: getMousePosition,
	getWheelDelta: getWheelDelta,
	fakeStop: fakeStop,
	skipped: skipped,
	isExternalTarget: isExternalTarget,
	addListener: on,
	removeListener: off
});

/*
 * @class PosAnimation
 * @aka L.PosAnimation
 * @inherits Evented
 * Used internally for panning animations, utilizing CSS3 Transitions for modern browsers and a timer fallback for IE6-9.
 *
 * @example
 * ```js
 * var fx = new L.PosAnimation();
 * fx.run(el, [300, 500], 0.5);
 * ```
 *
 * @constructor L.PosAnimation()
 * Creates a `PosAnimation` object.
 *
 */

var PosAnimation = Evented.extend({

	// @method run(el: HTMLElement, newPos: Point, duration?: Number, easeLinearity?: Number)
	// Run an animation of a given element to a new position, optionally setting
	// duration in seconds (`0.25` by default) and easing linearity factor (3rd
	// argument of the [cubic bezier curve](http://cubic-bezier.com/#0,0,.5,1),
	// `0.5` by default).
	run: function (el, newPos, duration, easeLinearity) {
		this.stop();

		this._el = el;
		this._inProgress = true;
		this._duration = duration || 0.25;
		this._easeOutPower = 1 / Math.max(easeLinearity || 0.5, 0.2);

		this._startPos = getPosition(el);
		this._offset = newPos.subtract(this._startPos);
		this._startTime = +new Date();

		// @event start: Event
		// Fired when the animation starts
		this.fire('start');

		this._animate();
	},

	// @method stop()
	// Stops the animation (if currently running).
	stop: function () {
		if (!this._inProgress) { return; }

		this._step(true);
		this._complete();
	},

	_animate: function () {
		// animation loop
		this._animId = requestAnimFrame(this._animate, this);
		this._step();
	},

	_step: function (round) {
		var elapsed = (+new Date()) - this._startTime,
		    duration = this._duration * 1000;

		if (elapsed < duration) {
			this._runFrame(this._easeOut(elapsed / duration), round);
		} else {
			this._runFrame(1);
			this._complete();
		}
	},

	_runFrame: function (progress, round) {
		var pos = this._startPos.add(this._offset.multiplyBy(progress));
		if (round) {
			pos._round();
		}
		setPosition(this._el, pos);

		// @event step: Event
		// Fired continuously during the animation.
		this.fire('step');
	},

	_complete: function () {
		cancelAnimFrame(this._animId);

		this._inProgress = false;
		// @event end: Event
		// Fired when the animation ends.
		this.fire('end');
	},

	_easeOut: function (t) {
		return 1 - Math.pow(1 - t, this._easeOutPower);
	}
});

/*
 * @class Map
 * @aka L.Map
 * @inherits Evented
 *
 * The central class of the API — it is used to create a map on a page and manipulate it.
 *
 * @example
 *
 * ```js
 * // initialize the map on the "map" div with a given center and zoom
 * var map = L.map('map', {
 * 	center: [51.505, -0.09],
 * 	zoom: 13
 * });
 * ```
 *
 */

var Map = Evented.extend({

	options: {
		// @section Map State Options
		// @option crs: CRS = L.CRS.EPSG3857
		// The [Coordinate Reference System](#crs) to use. Don't change this if you're not
		// sure what it means.
		crs: EPSG3857,

		// @option center: LatLng = undefined
		// Initial geographic center of the map
		center: undefined,

		// @option zoom: Number = undefined
		// Initial map zoom level
		zoom: undefined,

		// @option minZoom: Number = *
		// Minimum zoom level of the map.
		// If not specified and at least one `GridLayer` or `TileLayer` is in the map,
		// the lowest of their `minZoom` options will be used instead.
		minZoom: undefined,

		// @option maxZoom: Number = *
		// Maximum zoom level of the map.
		// If not specified and at least one `GridLayer` or `TileLayer` is in the map,
		// the highest of their `maxZoom` options will be used instead.
		maxZoom: undefined,

		// @option layers: Layer[] = []
		// Array of layers that will be added to the map initially
		layers: [],

		// @option maxBounds: LatLngBounds = null
		// When this option is set, the map restricts the view to the given
		// geographical bounds, bouncing the user back if the user tries to pan
		// outside the view. To set the restriction dynamically, use
		// [`setMaxBounds`](#map-setmaxbounds) method.
		maxBounds: undefined,

		// @option renderer: Renderer = *
		// The default method for drawing vector layers on the map. `L.SVG`
		// or `L.Canvas` by default depending on browser support.
		renderer: undefined,


		// @section Animation Options
		// @option zoomAnimation: Boolean = true
		// Whether the map zoom animation is enabled. By default it's enabled
		// in all browsers that support CSS3 Transitions except Android.
		zoomAnimation: true,

		// @option zoomAnimationThreshold: Number = 4
		// Won't animate zoom if the zoom difference exceeds this value.
		zoomAnimationThreshold: 4,

		// @option fadeAnimation: Boolean = true
		// Whether the tile fade animation is enabled. By default it's enabled
		// in all browsers that support CSS3 Transitions except Android.
		fadeAnimation: true,

		// @option markerZoomAnimation: Boolean = true
		// Whether markers animate their zoom with the zoom animation, if disabled
		// they will disappear for the length of the animation. By default it's
		// enabled in all browsers that support CSS3 Transitions except Android.
		markerZoomAnimation: true,

		// @option transform3DLimit: Number = 2^23
		// Defines the maximum size of a CSS translation transform. The default
		// value should not be changed unless a web browser positions layers in
		// the wrong place after doing a large `panBy`.
		transform3DLimit: 8388608, // Precision limit of a 32-bit float

		// @section Interaction Options
		// @option zoomSnap: Number = 1
		// Forces the map's zoom level to always be a multiple of this, particularly
		// right after a [`fitBounds()`](#map-fitbounds) or a pinch-zoom.
		// By default, the zoom level snaps to the nearest integer; lower values
		// (e.g. `0.5` or `0.1`) allow for greater granularity. A value of `0`
		// means the zoom level will not be snapped after `fitBounds` or a pinch-zoom.
		zoomSnap: 1,

		// @option zoomDelta: Number = 1
		// Controls how much the map's zoom level will change after a
		// [`zoomIn()`](#map-zoomin), [`zoomOut()`](#map-zoomout), pressing `+`
		// or `-` on the keyboard, or using the [zoom controls](#control-zoom).
		// Values smaller than `1` (e.g. `0.5`) allow for greater granularity.
		zoomDelta: 1,

		// @option trackResize: Boolean = true
		// Whether the map automatically handles browser window resize to update itself.
		trackResize: true
	},

	initialize: function (id, options) { // (HTMLElement or String, Object)
		options = setOptions(this, options);

		// Make sure to assign internal flags at the beginning,
		// to avoid inconsistent state in some edge cases.
		this._handlers = [];
		this._layers = {};
		this._zoomBoundLayers = {};
		this._sizeChanged = true;

		this._initContainer(id);
		this._initLayout();

		// hack for https://github.com/Leaflet/Leaflet/issues/1980
		this._onResize = bind(this._onResize, this);

		this._initEvents();

		if (options.maxBounds) {
			this.setMaxBounds(options.maxBounds);
		}

		if (options.zoom !== undefined) {
			this._zoom = this._limitZoom(options.zoom);
		}

		if (options.center && options.zoom !== undefined) {
			this.setView(toLatLng(options.center), options.zoom, {reset: true});
		}

		this.callInitHooks();

		// don't animate on browsers without hardware-accelerated transitions or old Android/Opera
		this._zoomAnimated = TRANSITION && any3d && !mobileOpera &&
				this.options.zoomAnimation;

		// zoom transitions run with the same duration for all layers, so if one of transitionend events
		// happens after starting zoom animation (propagating to the map pane), we know that it ended globally
		if (this._zoomAnimated) {
			this._createAnimProxy();
			on(this._proxy, TRANSITION_END, this._catchTransitionEnd, this);
		}

		this._addLayers(this.options.layers);
	},


	// @section Methods for modifying map state

	// @method setView(center: LatLng, zoom: Number, options?: Zoom/pan options): this
	// Sets the view of the map (geographical center and zoom) with the given
	// animation options.
	setView: function (center, zoom, options) {

		zoom = zoom === undefined ? this._zoom : this._limitZoom(zoom);
		center = this._limitCenter(toLatLng(center), zoom, this.options.maxBounds);
		options = options || {};

		this._stop();

		if (this._loaded && !options.reset && options !== true) {

			if (options.animate !== undefined) {
				options.zoom = extend({animate: options.animate}, options.zoom);
				options.pan = extend({animate: options.animate, duration: options.duration}, options.pan);
			}

			// try animating pan or zoom
			var moved = (this._zoom !== zoom) ?
				this._tryAnimatedZoom && this._tryAnimatedZoom(center, zoom, options.zoom) :
				this._tryAnimatedPan(center, options.pan);

			if (moved) {
				// prevent resize handler call, the view will refresh after animation anyway
				clearTimeout(this._sizeTimer);
				return this;
			}
		}

		// animation didn't start, just reset the map view
		this._resetView(center, zoom);

		return this;
	},

	// @method setZoom(zoom: Number, options?: Zoom/pan options): this
	// Sets the zoom of the map.
	setZoom: function (zoom, options) {
		if (!this._loaded) {
			this._zoom = zoom;
			return this;
		}
		return this.setView(this.getCenter(), zoom, {zoom: options});
	},

	// @method zoomIn(delta?: Number, options?: Zoom options): this
	// Increases the zoom of the map by `delta` ([`zoomDelta`](#map-zoomdelta) by default).
	zoomIn: function (delta, options) {
		delta = delta || (any3d ? this.options.zoomDelta : 1);
		return this.setZoom(this._zoom + delta, options);
	},

	// @method zoomOut(delta?: Number, options?: Zoom options): this
	// Decreases the zoom of the map by `delta` ([`zoomDelta`](#map-zoomdelta) by default).
	zoomOut: function (delta, options) {
		delta = delta || (any3d ? this.options.zoomDelta : 1);
		return this.setZoom(this._zoom - delta, options);
	},

	// @method setZoomAround(latlng: LatLng, zoom: Number, options: Zoom options): this
	// Zooms the map while keeping a specified geographical point on the map
	// stationary (e.g. used internally for scroll zoom and double-click zoom).
	// @alternative
	// @method setZoomAround(offset: Point, zoom: Number, options: Zoom options): this
	// Zooms the map while keeping a specified pixel on the map (relative to the top-left corner) stationary.
	setZoomAround: function (latlng, zoom, options) {
		var scale = this.getZoomScale(zoom),
		    viewHalf = this.getSize().divideBy(2),
		    containerPoint = latlng instanceof Point ? latlng : this.latLngToContainerPoint(latlng),

		    centerOffset = containerPoint.subtract(viewHalf).multiplyBy(1 - 1 / scale),
		    newCenter = this.containerPointToLatLng(viewHalf.add(centerOffset));

		return this.setView(newCenter, zoom, {zoom: options});
	},

	_getBoundsCenterZoom: function (bounds, options) {

		options = options || {};
		bounds = bounds.getBounds ? bounds.getBounds() : toLatLngBounds(bounds);

		var paddingTL = toPoint(options.paddingTopLeft || options.padding || [0, 0]),
		    paddingBR = toPoint(options.paddingBottomRight || options.padding || [0, 0]),

		    zoom = this.getBoundsZoom(bounds, false, paddingTL.add(paddingBR));

		zoom = (typeof options.maxZoom === 'number') ? Math.min(options.maxZoom, zoom) : zoom;

		if (zoom === Infinity) {
			return {
				center: bounds.getCenter(),
				zoom: zoom
			};
		}

		var paddingOffset = paddingBR.subtract(paddingTL).divideBy(2),

		    swPoint = this.project(bounds.getSouthWest(), zoom),
		    nePoint = this.project(bounds.getNorthEast(), zoom),
		    center = this.unproject(swPoint.add(nePoint).divideBy(2).add(paddingOffset), zoom);

		return {
			center: center,
			zoom: zoom
		};
	},

	// @method fitBounds(bounds: LatLngBounds, options?: fitBounds options): this
	// Sets a map view that contains the given geographical bounds with the
	// maximum zoom level possible.
	fitBounds: function (bounds, options) {

		bounds = toLatLngBounds(bounds);

		if (!bounds.isValid()) {
			throw new Error('Bounds are not valid.');
		}

		var target = this._getBoundsCenterZoom(bounds, options);
		return this.setView(target.center, target.zoom, options);
	},

	// @method fitWorld(options?: fitBounds options): this
	// Sets a map view that mostly contains the whole world with the maximum
	// zoom level possible.
	fitWorld: function (options) {
		return this.fitBounds([[-90, -180], [90, 180]], options);
	},

	// @method panTo(latlng: LatLng, options?: Pan options): this
	// Pans the map to a given center.
	panTo: function (center, options) { // (LatLng)
		return this.setView(center, this._zoom, {pan: options});
	},

	// @method panBy(offset: Point, options?: Pan options): this
	// Pans the map by a given number of pixels (animated).
	panBy: function (offset, options) {
		offset = toPoint(offset).round();
		options = options || {};

		if (!offset.x && !offset.y) {
			return this.fire('moveend');
		}
		// If we pan too far, Chrome gets issues with tiles
		// and makes them disappear or appear in the wrong place (slightly offset) #2602
		if (options.animate !== true && !this.getSize().contains(offset)) {
			this._resetView(this.unproject(this.project(this.getCenter()).add(offset)), this.getZoom());
			return this;
		}

		if (!this._panAnim) {
			this._panAnim = new PosAnimation();

			this._panAnim.on({
				'step': this._onPanTransitionStep,
				'end': this._onPanTransitionEnd
			}, this);
		}

		// don't fire movestart if animating inertia
		if (!options.noMoveStart) {
			this.fire('movestart');
		}

		// animate pan unless animate: false specified
		if (options.animate !== false) {
			addClass(this._mapPane, 'leaflet-pan-anim');

			var newPos = this._getMapPanePos().subtract(offset).round();
			this._panAnim.run(this._mapPane, newPos, options.duration || 0.25, options.easeLinearity);
		} else {
			this._rawPanBy(offset);
			this.fire('move').fire('moveend');
		}

		return this;
	},

	// @method flyTo(latlng: LatLng, zoom?: Number, options?: Zoom/pan options): this
	// Sets the view of the map (geographical center and zoom) performing a smooth
	// pan-zoom animation.
	flyTo: function (targetCenter, targetZoom, options) {

		options = options || {};
		if (options.animate === false || !any3d) {
			return this.setView(targetCenter, targetZoom, options);
		}

		this._stop();

		var from = this.project(this.getCenter()),
		    to = this.project(targetCenter),
		    size = this.getSize(),
		    startZoom = this._zoom;

		targetCenter = toLatLng(targetCenter);
		targetZoom = targetZoom === undefined ? startZoom : targetZoom;

		var w0 = Math.max(size.x, size.y),
		    w1 = w0 * this.getZoomScale(startZoom, targetZoom),
		    u1 = (to.distanceTo(from)) || 1,
		    rho = 1.42,
		    rho2 = rho * rho;

		function r(i) {
			var s1 = i ? -1 : 1,
			    s2 = i ? w1 : w0,
			    t1 = w1 * w1 - w0 * w0 + s1 * rho2 * rho2 * u1 * u1,
			    b1 = 2 * s2 * rho2 * u1,
			    b = t1 / b1,
			    sq = Math.sqrt(b * b + 1) - b;

			    // workaround for floating point precision bug when sq = 0, log = -Infinite,
			    // thus triggering an infinite loop in flyTo
			    var log = sq < 0.000000001 ? -18 : Math.log(sq);

			return log;
		}

		function sinh(n) { return (Math.exp(n) - Math.exp(-n)) / 2; }
		function cosh(n) { return (Math.exp(n) + Math.exp(-n)) / 2; }
		function tanh(n) { return sinh(n) / cosh(n); }

		var r0 = r(0);

		function w(s) { return w0 * (cosh(r0) / cosh(r0 + rho * s)); }
		function u(s) { return w0 * (cosh(r0) * tanh(r0 + rho * s) - sinh(r0)) / rho2; }

		function easeOut(t) { return 1 - Math.pow(1 - t, 1.5); }

		var start = Date.now(),
		    S = (r(1) - r0) / rho,
		    duration = options.duration ? 1000 * options.duration : 1000 * S * 0.8;

		function frame() {
			var t = (Date.now() - start) / duration,
			    s = easeOut(t) * S;

			if (t <= 1) {
				this._flyToFrame = requestAnimFrame(frame, this);

				this._move(
					this.unproject(from.add(to.subtract(from).multiplyBy(u(s) / u1)), startZoom),
					this.getScaleZoom(w0 / w(s), startZoom),
					{flyTo: true});

			} else {
				this
					._move(targetCenter, targetZoom)
					._moveEnd(true);
			}
		}

		this._moveStart(true, options.noMoveStart);

		frame.call(this);
		return this;
	},

	// @method flyToBounds(bounds: LatLngBounds, options?: fitBounds options): this
	// Sets the view of the map with a smooth animation like [`flyTo`](#map-flyto),
	// but takes a bounds parameter like [`fitBounds`](#map-fitbounds).
	flyToBounds: function (bounds, options) {
		var target = this._getBoundsCenterZoom(bounds, options);
		return this.flyTo(target.center, target.zoom, options);
	},

	// @method setMaxBounds(bounds: Bounds): this
	// Restricts the map view to the given bounds (see the [maxBounds](#map-maxbounds) option).
	setMaxBounds: function (bounds) {
		bounds = toLatLngBounds(bounds);

		if (!bounds.isValid()) {
			this.options.maxBounds = null;
			return this.off('moveend', this._panInsideMaxBounds);
		} else if (this.options.maxBounds) {
			this.off('moveend', this._panInsideMaxBounds);
		}

		this.options.maxBounds = bounds;

		if (this._loaded) {
			this._panInsideMaxBounds();
		}

		return this.on('moveend', this._panInsideMaxBounds);
	},

	// @method setMinZoom(zoom: Number): this
	// Sets the lower limit for the available zoom levels (see the [minZoom](#map-minzoom) option).
	setMinZoom: function (zoom) {
		var oldZoom = this.options.minZoom;
		this.options.minZoom = zoom;

		if (this._loaded && oldZoom !== zoom) {
			this.fire('zoomlevelschange');

			if (this.getZoom() < this.options.minZoom) {
				return this.setZoom(zoom);
			}
		}

		return this;
	},

	// @method setMaxZoom(zoom: Number): this
	// Sets the upper limit for the available zoom levels (see the [maxZoom](#map-maxzoom) option).
	setMaxZoom: function (zoom) {
		var oldZoom = this.options.maxZoom;
		this.options.maxZoom = zoom;

		if (this._loaded && oldZoom !== zoom) {
			this.fire('zoomlevelschange');

			if (this.getZoom() > this.options.maxZoom) {
				return this.setZoom(zoom);
			}
		}

		return this;
	},

	// @method panInsideBounds(bounds: LatLngBounds, options?: Pan options): this
	// Pans the map to the closest view that would lie inside the given bounds (if it's not already), controlling the animation using the options specific, if any.
	panInsideBounds: function (bounds, options) {
		this._enforcingBounds = true;
		var center = this.getCenter(),
		    newCenter = this._limitCenter(center, this._zoom, toLatLngBounds(bounds));

		if (!center.equals(newCenter)) {
			this.panTo(newCenter, options);
		}

		this._enforcingBounds = false;
		return this;
	},

	// @method panInside(latlng: LatLng, options?: options): this
	// Pans the map the minimum amount to make the `latlng` visible. Use
	// `padding`, `paddingTopLeft` and `paddingTopRight` options to fit
	// the display to more restricted bounds, like [`fitBounds`](#map-fitbounds).
	// If `latlng` is already within the (optionally padded) display bounds,
	// the map will not be panned.
	panInside: function (latlng, options) {
		options = options || {};

		var paddingTL = toPoint(options.paddingTopLeft || options.padding || [0, 0]),
		    paddingBR = toPoint(options.paddingBottomRight || options.padding || [0, 0]),
		    center = this.getCenter(),
		    pixelCenter = this.project(center),
		    pixelPoint = this.project(latlng),
		    pixelBounds = this.getPixelBounds(),
		    halfPixelBounds = pixelBounds.getSize().divideBy(2),
		    paddedBounds = toBounds([pixelBounds.min.add(paddingTL), pixelBounds.max.subtract(paddingBR)]);

		if (!paddedBounds.contains(pixelPoint)) {
			this._enforcingBounds = true;
			var diff = pixelCenter.subtract(pixelPoint),
			    newCenter = toPoint(pixelPoint.x + diff.x, pixelPoint.y + diff.y);

			if (pixelPoint.x < paddedBounds.min.x || pixelPoint.x > paddedBounds.max.x) {
				newCenter.x = pixelCenter.x - diff.x;
				if (diff.x > 0) {
					newCenter.x += halfPixelBounds.x - paddingTL.x;
				} else {
					newCenter.x -= halfPixelBounds.x - paddingBR.x;
				}
			}
			if (pixelPoint.y < paddedBounds.min.y || pixelPoint.y > paddedBounds.max.y) {
				newCenter.y = pixelCenter.y - diff.y;
				if (diff.y > 0) {
					newCenter.y += halfPixelBounds.y - paddingTL.y;
				} else {
					newCenter.y -= halfPixelBounds.y - paddingBR.y;
				}
			}
			this.panTo(this.unproject(newCenter), options);
			this._enforcingBounds = false;
		}
		return this;
	},

	// @method invalidateSize(options: Zoom/pan options): this
	// Checks if the map container size changed and updates the map if so —
	// call it after you've changed the map size dynamically, also animating
	// pan by default. If `options.pan` is `false`, panning will not occur.
	// If `options.debounceMoveend` is `true`, it will delay `moveend` event so
	// that it doesn't happen often even if the method is called many
	// times in a row.

	// @alternative
	// @method invalidateSize(animate: Boolean): this
	// Checks if the map container size changed and updates the map if so —
	// call it after you've changed the map size dynamically, also animating
	// pan by default.
	invalidateSize: function (options) {
		if (!this._loaded) { return this; }

		options = extend({
			animate: false,
			pan: true
		}, options === true ? {animate: true} : options);

		var oldSize = this.getSize();
		this._sizeChanged = true;
		this._lastCenter = null;

		var newSize = this.getSize(),
		    oldCenter = oldSize.divideBy(2).round(),
		    newCenter = newSize.divideBy(2).round(),
		    offset = oldCenter.subtract(newCenter);

		if (!offset.x && !offset.y) { return this; }

		if (options.animate && options.pan) {
			this.panBy(offset);

		} else {
			if (options.pan) {
				this._rawPanBy(offset);
			}

			this.fire('move');

			if (options.debounceMoveend) {
				clearTimeout(this._sizeTimer);
				this._sizeTimer = setTimeout(bind(this.fire, this, 'moveend'), 200);
			} else {
				this.fire('moveend');
			}
		}

		// @section Map state change events
		// @event resize: ResizeEvent
		// Fired when the map is resized.
		return this.fire('resize', {
			oldSize: oldSize,
			newSize: newSize
		});
	},

	// @section Methods for modifying map state
	// @method stop(): this
	// Stops the currently running `panTo` or `flyTo` animation, if any.
	stop: function () {
		this.setZoom(this._limitZoom(this._zoom));
		if (!this.options.zoomSnap) {
			this.fire('viewreset');
		}
		return this._stop();
	},

	// @section Geolocation methods
	// @method locate(options?: Locate options): this
	// Tries to locate the user using the Geolocation API, firing a [`locationfound`](#map-locationfound)
	// event with location data on success or a [`locationerror`](#map-locationerror) event on failure,
	// and optionally sets the map view to the user's location with respect to
	// detection accuracy (or to the world view if geolocation failed).
	// Note that, if your page doesn't use HTTPS, this method will fail in
	// modern browsers ([Chrome 50 and newer](https://sites.google.com/a/chromium.org/dev/Home/chromium-security/deprecating-powerful-features-on-insecure-origins))
	// See `Locate options` for more details.
	locate: function (options) {

		options = this._locateOptions = extend({
			timeout: 10000,
			watch: false
			// setView: false
			// maxZoom: <Number>
			// maximumAge: 0
			// enableHighAccuracy: false
		}, options);

		if (!('geolocation' in navigator)) {
			this._handleGeolocationError({
				code: 0,
				message: 'Geolocation not supported.'
			});
			return this;
		}

		var onResponse = bind(this._handleGeolocationResponse, this),
		    onError = bind(this._handleGeolocationError, this);

		if (options.watch) {
			this._locationWatchId =
			        navigator.geolocation.watchPosition(onResponse, onError, options);
		} else {
			navigator.geolocation.getCurrentPosition(onResponse, onError, options);
		}
		return this;
	},

	// @method stopLocate(): this
	// Stops watching location previously initiated by `map.locate({watch: true})`
	// and aborts resetting the map view if map.locate was called with
	// `{setView: true}`.
	stopLocate: function () {
		if (navigator.geolocation && navigator.geolocation.clearWatch) {
			navigator.geolocation.clearWatch(this._locationWatchId);
		}
		if (this._locateOptions) {
			this._locateOptions.setView = false;
		}
		return this;
	},

	_handleGeolocationError: function (error) {
		var c = error.code,
		    message = error.message ||
		            (c === 1 ? 'permission denied' :
		            (c === 2 ? 'position unavailable' : 'timeout'));

		if (this._locateOptions.setView && !this._loaded) {
			this.fitWorld();
		}

		// @section Location events
		// @event locationerror: ErrorEvent
		// Fired when geolocation (using the [`locate`](#map-locate) method) failed.
		this.fire('locationerror', {
			code: c,
			message: 'Geolocation error: ' + message + '.'
		});
	},

	_handleGeolocationResponse: function (pos) {
		var lat = pos.coords.latitude,
		    lng = pos.coords.longitude,
		    latlng = new LatLng(lat, lng),
		    bounds = latlng.toBounds(pos.coords.accuracy * 2),
		    options = this._locateOptions;

		if (options.setView) {
			var zoom = this.getBoundsZoom(bounds);
			this.setView(latlng, options.maxZoom ? Math.min(zoom, options.maxZoom) : zoom);
		}

		var data = {
			latlng: latlng,
			bounds: bounds,
			timestamp: pos.timestamp
		};

		for (var i in pos.coords) {
			if (typeof pos.coords[i] === 'number') {
				data[i] = pos.coords[i];
			}
		}

		// @event locationfound: LocationEvent
		// Fired when geolocation (using the [`locate`](#map-locate) method)
		// went successfully.
		this.fire('locationfound', data);
	},

	// TODO Appropriate docs section?
	// @section Other Methods
	// @method addHandler(name: String, HandlerClass: Function): this
	// Adds a new `Handler` to the map, given its name and constructor function.
	addHandler: function (name, HandlerClass) {
		if (!HandlerClass) { return this; }

		var handler = this[name] = new HandlerClass(this);

		this._handlers.push(handler);

		if (this.options[name]) {
			handler.enable();
		}

		return this;
	},

	// @method remove(): this
	// Destroys the map and clears all related event listeners.
	remove: function () {

		this._initEvents(true);

		if (this._containerId !== this._container._leaflet_id) {
			throw new Error('Map container is being reused by another instance');
		}

		try {
			// throws error in IE6-8
			delete this._container._leaflet_id;
			delete this._containerId;
		} catch (e) {
			/*eslint-disable */
			this._container._leaflet_id = undefined;
			/* eslint-enable */
			this._containerId = undefined;
		}

		if (this._locationWatchId !== undefined) {
			this.stopLocate();
		}

		this._stop();

		remove(this._mapPane);

		if (this._clearControlPos) {
			this._clearControlPos();
		}
		if (this._resizeRequest) {
			cancelAnimFrame(this._resizeRequest);
			this._resizeRequest = null;
		}

		this._clearHandlers();

		if (this._loaded) {
			// @section Map state change events
			// @event unload: Event
			// Fired when the map is destroyed with [remove](#map-remove) method.
			this.fire('unload');
		}

		var i;
		for (i in this._layers) {
			this._layers[i].remove();
		}
		for (i in this._panes) {
			remove(this._panes[i]);
		}

		this._layers = [];
		this._panes = [];
		delete this._mapPane;
		delete this._renderer;

		return this;
	},

	// @section Other Methods
	// @method createPane(name: String, container?: HTMLElement): HTMLElement
	// Creates a new [map pane](#map-pane) with the given name if it doesn't exist already,
	// then returns it. The pane is created as a child of `container`, or
	// as a child of the main map pane if not set.
	createPane: function (name, container) {
		var className = 'leaflet-pane' + (name ? ' leaflet-' + name.replace('Pane', '') + '-pane' : ''),
		    pane = create$1('div', className, container || this._mapPane);

		if (name) {
			this._panes[name] = pane;
		}
		return pane;
	},

	// @section Methods for Getting Map State

	// @method getCenter(): LatLng
	// Returns the geographical center of the map view
	getCenter: function () {
		this._checkIfLoaded();

		if (this._lastCenter && !this._moved()) {
			return this._lastCenter;
		}
		return this.layerPointToLatLng(this._getCenterLayerPoint());
	},

	// @method getZoom(): Number
	// Returns the current zoom level of the map view
	getZoom: function () {
		return this._zoom;
	},

	// @method getBounds(): LatLngBounds
	// Returns the geographical bounds visible in the current map view
	getBounds: function () {
		var bounds = this.getPixelBounds(),
		    sw = this.unproject(bounds.getBottomLeft()),
		    ne = this.unproject(bounds.getTopRight());

		return new LatLngBounds(sw, ne);
	},

	// @method getMinZoom(): Number
	// Returns the minimum zoom level of the map (if set in the `minZoom` option of the map or of any layers), or `0` by default.
	getMinZoom: function () {
		return this.options.minZoom === undefined ? this._layersMinZoom || 0 : this.options.minZoom;
	},

	// @method getMaxZoom(): Number
	// Returns the maximum zoom level of the map (if set in the `maxZoom` option of the map or of any layers).
	getMaxZoom: function () {
		return this.options.maxZoom === undefined ?
			(this._layersMaxZoom === undefined ? Infinity : this._layersMaxZoom) :
			this.options.maxZoom;
	},

	// @method getBoundsZoom(bounds: LatLngBounds, inside?: Boolean, padding?: Point): Number
	// Returns the maximum zoom level on which the given bounds fit to the map
	// view in its entirety. If `inside` (optional) is set to `true`, the method
	// instead returns the minimum zoom level on which the map view fits into
	// the given bounds in its entirety.
	getBoundsZoom: function (bounds, inside, padding) { // (LatLngBounds[, Boolean, Point]) -> Number
		bounds = toLatLngBounds(bounds);
		padding = toPoint(padding || [0, 0]);

		var zoom = this.getZoom() || 0,
		    min = this.getMinZoom(),
		    max = this.getMaxZoom(),
		    nw = bounds.getNorthWest(),
		    se = bounds.getSouthEast(),
		    size = this.getSize().subtract(padding),
		    boundsSize = toBounds(this.project(se, zoom), this.project(nw, zoom)).getSize(),
		    snap = any3d ? this.options.zoomSnap : 1,
		    scalex = size.x / boundsSize.x,
		    scaley = size.y / boundsSize.y,
		    scale = inside ? Math.max(scalex, scaley) : Math.min(scalex, scaley);

		zoom = this.getScaleZoom(scale, zoom);

		if (snap) {
			zoom = Math.round(zoom / (snap / 100)) * (snap / 100); // don't jump if within 1% of a snap level
			zoom = inside ? Math.ceil(zoom / snap) * snap : Math.floor(zoom / snap) * snap;
		}

		return Math.max(min, Math.min(max, zoom));
	},

	// @method getSize(): Point
	// Returns the current size of the map container (in pixels).
	getSize: function () {
		if (!this._size || this._sizeChanged) {
			this._size = new Point(
				this._container.clientWidth || 0,
				this._container.clientHeight || 0);

			this._sizeChanged = false;
		}
		return this._size.clone();
	},

	// @method getPixelBounds(): Bounds
	// Returns the bounds of the current map view in projected pixel
	// coordinates (sometimes useful in layer and overlay implementations).
	getPixelBounds: function (center, zoom) {
		var topLeftPoint = this._getTopLeftPoint(center, zoom);
		return new Bounds(topLeftPoint, topLeftPoint.add(this.getSize()));
	},

	// TODO: Check semantics - isn't the pixel origin the 0,0 coord relative to
	// the map pane? "left point of the map layer" can be confusing, specially
	// since there can be negative offsets.
	// @method getPixelOrigin(): Point
	// Returns the projected pixel coordinates of the top left point of
	// the map layer (useful in custom layer and overlay implementations).
	getPixelOrigin: function () {
		this._checkIfLoaded();
		return this._pixelOrigin;
	},

	// @method getPixelWorldBounds(zoom?: Number): Bounds
	// Returns the world's bounds in pixel coordinates for zoom level `zoom`.
	// If `zoom` is omitted, the map's current zoom level is used.
	getPixelWorldBounds: function (zoom) {
		return this.options.crs.getProjectedBounds(zoom === undefined ? this.getZoom() : zoom);
	},

	// @section Other Methods

	// @method getPane(pane: String|HTMLElement): HTMLElement
	// Returns a [map pane](#map-pane), given its name or its HTML element (its identity).
	getPane: function (pane) {
		return typeof pane === 'string' ? this._panes[pane] : pane;
	},

	// @method getPanes(): Object
	// Returns a plain object containing the names of all [panes](#map-pane) as keys and
	// the panes as values.
	getPanes: function () {
		return this._panes;
	},

	// @method getContainer: HTMLElement
	// Returns the HTML element that contains the map.
	getContainer: function () {
		return this._container;
	},


	// @section Conversion Methods

	// @method getZoomScale(toZoom: Number, fromZoom: Number): Number
	// Returns the scale factor to be applied to a map transition from zoom level
	// `fromZoom` to `toZoom`. Used internally to help with zoom animations.
	getZoomScale: function (toZoom, fromZoom) {
		// TODO replace with universal implementation after refactoring projections
		var crs = this.options.crs;
		fromZoom = fromZoom === undefined ? this._zoom : fromZoom;
		return crs.scale(toZoom) / crs.scale(fromZoom);
	},

	// @method getScaleZoom(scale: Number, fromZoom: Number): Number
	// Returns the zoom level that the map would end up at, if it is at `fromZoom`
	// level and everything is scaled by a factor of `scale`. Inverse of
	// [`getZoomScale`](#map-getZoomScale).
	getScaleZoom: function (scale, fromZoom) {
		var crs = this.options.crs;
		fromZoom = fromZoom === undefined ? this._zoom : fromZoom;
		var zoom = crs.zoom(scale * crs.scale(fromZoom));
		return isNaN(zoom) ? Infinity : zoom;
	},

	// @method project(latlng: LatLng, zoom: Number): Point
	// Projects a geographical coordinate `LatLng` according to the projection
	// of the map's CRS, then scales it according to `zoom` and the CRS's
	// `Transformation`. The result is pixel coordinate relative to
	// the CRS origin.
	project: function (latlng, zoom) {
		zoom = zoom === undefined ? this._zoom : zoom;
		return this.options.crs.latLngToPoint(toLatLng(latlng), zoom);
	},

	// @method unproject(point: Point, zoom: Number): LatLng
	// Inverse of [`project`](#map-project).
	unproject: function (point, zoom) {
		zoom = zoom === undefined ? this._zoom : zoom;
		return this.options.crs.pointToLatLng(toPoint(point), zoom);
	},

	// @method layerPointToLatLng(point: Point): LatLng
	// Given a pixel coordinate relative to the [origin pixel](#map-getpixelorigin),
	// returns the corresponding geographical coordinate (for the current zoom level).
	layerPointToLatLng: function (point) {
		var projectedPoint = toPoint(point).add(this.getPixelOrigin());
		return this.unproject(projectedPoint);
	},

	// @method latLngToLayerPoint(latlng: LatLng): Point
	// Given a geographical coordinate, returns the corresponding pixel coordinate
	// relative to the [origin pixel](#map-getpixelorigin).
	latLngToLayerPoint: function (latlng) {
		var projectedPoint = this.project(toLatLng(latlng))._round();
		return projectedPoint._subtract(this.getPixelOrigin());
	},

	// @method wrapLatLng(latlng: LatLng): LatLng
	// Returns a `LatLng` where `lat` and `lng` has been wrapped according to the
	// map's CRS's `wrapLat` and `wrapLng` properties, if they are outside the
	// CRS's bounds.
	// By default this means longitude is wrapped around the dateline so its
	// value is between -180 and +180 degrees.
	wrapLatLng: function (latlng) {
		return this.options.crs.wrapLatLng(toLatLng(latlng));
	},

	// @method wrapLatLngBounds(bounds: LatLngBounds): LatLngBounds
	// Returns a `LatLngBounds` with the same size as the given one, ensuring that
	// its center is within the CRS's bounds.
	// By default this means the center longitude is wrapped around the dateline so its
	// value is between -180 and +180 degrees, and the majority of the bounds
	// overlaps the CRS's bounds.
	wrapLatLngBounds: function (latlng) {
		return this.options.crs.wrapLatLngBounds(toLatLngBounds(latlng));
	},

	// @method distance(latlng1: LatLng, latlng2: LatLng): Number
	// Returns the distance between two geographical coordinates according to
	// the map's CRS. By default this measures distance in meters.
	distance: function (latlng1, latlng2) {
		return this.options.crs.distance(toLatLng(latlng1), toLatLng(latlng2));
	},

	// @method containerPointToLayerPoint(point: Point): Point
	// Given a pixel coordinate relative to the map container, returns the corresponding
	// pixel coordinate relative to the [origin pixel](#map-getpixelorigin).
	containerPointToLayerPoint: function (point) { // (Point)
		return toPoint(point).subtract(this._getMapPanePos());
	},

	// @method layerPointToContainerPoint(point: Point): Point
	// Given a pixel coordinate relative to the [origin pixel](#map-getpixelorigin),
	// returns the corresponding pixel coordinate relative to the map container.
	layerPointToContainerPoint: function (point) { // (Point)
		return toPoint(point).add(this._getMapPanePos());
	},

	// @method containerPointToLatLng(point: Point): LatLng
	// Given a pixel coordinate relative to the map container, returns
	// the corresponding geographical coordinate (for the current zoom level).
	containerPointToLatLng: function (point) {
		var layerPoint = this.containerPointToLayerPoint(toPoint(point));
		return this.layerPointToLatLng(layerPoint);
	},

	// @method latLngToContainerPoint(latlng: LatLng): Point
	// Given a geographical coordinate, returns the corresponding pixel coordinate
	// relative to the map container.
	latLngToContainerPoint: function (latlng) {
		return this.layerPointToContainerPoint(this.latLngToLayerPoint(toLatLng(latlng)));
	},

	// @method mouseEventToContainerPoint(ev: MouseEvent): Point
	// Given a MouseEvent object, returns the pixel coordinate relative to the
	// map container where the event took place.
	mouseEventToContainerPoint: function (e) {
		return getMousePosition(e, this._container);
	},

	// @method mouseEventToLayerPoint(ev: MouseEvent): Point
	// Given a MouseEvent object, returns the pixel coordinate relative to
	// the [origin pixel](#map-getpixelorigin) where the event took place.
	mouseEventToLayerPoint: function (e) {
		return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(e));
	},

	// @method mouseEventToLatLng(ev: MouseEvent): LatLng
	// Given a MouseEvent object, returns geographical coordinate where the
	// event took place.
	mouseEventToLatLng: function (e) { // (MouseEvent)
		return this.layerPointToLatLng(this.mouseEventToLayerPoint(e));
	},


	// map initialization methods

	_initContainer: function (id) {
		var container = this._container = get(id);

		if (!container) {
			throw new Error('Map container not found.');
		} else if (container._leaflet_id) {
			throw new Error('Map container is already initialized.');
		}

		on(container, 'scroll', this._onScroll, this);
		this._containerId = stamp(container);
	},

	_initLayout: function () {
		var container = this._container;

		this._fadeAnimated = this.options.fadeAnimation && any3d;

		addClass(container, 'leaflet-container' +
			(touch ? ' leaflet-touch' : '') +
			(retina ? ' leaflet-retina' : '') +
			(ielt9 ? ' leaflet-oldie' : '') +
			(safari ? ' leaflet-safari' : '') +
			(this._fadeAnimated ? ' leaflet-fade-anim' : ''));

		var position = getStyle(container, 'position');

		if (position !== 'absolute' && position !== 'relative' && position !== 'fixed') {
			container.style.position = 'relative';
		}

		this._initPanes();

		if (this._initControlPos) {
			this._initControlPos();
		}
	},

	_initPanes: function () {
		var panes = this._panes = {};
		this._paneRenderers = {};

		// @section
		//
		// Panes are DOM elements used to control the ordering of layers on the map. You
		// can access panes with [`map.getPane`](#map-getpane) or
		// [`map.getPanes`](#map-getpanes) methods. New panes can be created with the
		// [`map.createPane`](#map-createpane) method.
		//
		// Every map has the following default panes that differ only in zIndex.
		//
		// @pane mapPane: HTMLElement = 'auto'
		// Pane that contains all other map panes

		this._mapPane = this.createPane('mapPane', this._container);
		setPosition(this._mapPane, new Point(0, 0));

		// @pane tilePane: HTMLElement = 200
		// Pane for `GridLayer`s and `TileLayer`s
		this.createPane('tilePane');
		// @pane overlayPane: HTMLElement = 400
		// Pane for vectors (`Path`s, like `Polyline`s and `Polygon`s), `ImageOverlay`s and `VideoOverlay`s
		this.createPane('shadowPane');
		// @pane shadowPane: HTMLElement = 500
		// Pane for overlay shadows (e.g. `Marker` shadows)
		this.createPane('overlayPane');
		// @pane markerPane: HTMLElement = 600
		// Pane for `Icon`s of `Marker`s
		this.createPane('markerPane');
		// @pane tooltipPane: HTMLElement = 650
		// Pane for `Tooltip`s.
		this.createPane('tooltipPane');
		// @pane popupPane: HTMLElement = 700
		// Pane for `Popup`s.
		this.createPane('popupPane');

		if (!this.options.markerZoomAnimation) {
			addClass(panes.markerPane, 'leaflet-zoom-hide');
			addClass(panes.shadowPane, 'leaflet-zoom-hide');
		}
	},


	// private methods that modify map state

	// @section Map state change events
	_resetView: function (center, zoom) {
		setPosition(this._mapPane, new Point(0, 0));

		var loading = !this._loaded;
		this._loaded = true;
		zoom = this._limitZoom(zoom);

		this.fire('viewprereset');

		var zoomChanged = this._zoom !== zoom;
		this
			._moveStart(zoomChanged, false)
			._move(center, zoom)
			._moveEnd(zoomChanged);

		// @event viewreset: Event
		// Fired when the map needs to redraw its content (this usually happens
		// on map zoom or load). Very useful for creating custom overlays.
		this.fire('viewreset');

		// @event load: Event
		// Fired when the map is initialized (when its center and zoom are set
		// for the first time).
		if (loading) {
			this.fire('load');
		}
	},

	_moveStart: function (zoomChanged, noMoveStart) {
		// @event zoomstart: Event
		// Fired when the map zoom is about to change (e.g. before zoom animation).
		// @event movestart: Event
		// Fired when the view of the map starts changing (e.g. user starts dragging the map).
		if (zoomChanged) {
			this.fire('zoomstart');
		}
		if (!noMoveStart) {
			this.fire('movestart');
		}
		return this;
	},

	_move: function (center, zoom, data) {
		if (zoom === undefined) {
			zoom = this._zoom;
		}
		var zoomChanged = this._zoom !== zoom;

		this._zoom = zoom;
		this._lastCenter = center;
		this._pixelOrigin = this._getNewPixelOrigin(center);

		// @event zoom: Event
		// Fired repeatedly during any change in zoom level, including zoom
		// and fly animations.
		if (zoomChanged || (data && data.pinch)) {	// Always fire 'zoom' if pinching because #3530
			this.fire('zoom', data);
		}

		// @event move: Event
		// Fired repeatedly during any movement of the map, including pan and
		// fly animations.
		return this.fire('move', data);
	},

	_moveEnd: function (zoomChanged) {
		// @event zoomend: Event
		// Fired when the map has changed, after any animations.
		if (zoomChanged) {
			this.fire('zoomend');
		}

		// @event moveend: Event
		// Fired when the center of the map stops changing (e.g. user stopped
		// dragging the map).
		return this.fire('moveend');
	},

	_stop: function () {
		cancelAnimFrame(this._flyToFrame);
		if (this._panAnim) {
			this._panAnim.stop();
		}
		return this;
	},

	_rawPanBy: function (offset) {
		setPosition(this._mapPane, this._getMapPanePos().subtract(offset));
	},

	_getZoomSpan: function () {
		return this.getMaxZoom() - this.getMinZoom();
	},

	_panInsideMaxBounds: function () {
		if (!this._enforcingBounds) {
			this.panInsideBounds(this.options.maxBounds);
		}
	},

	_checkIfLoaded: function () {
		if (!this._loaded) {
			throw new Error('Set map center and zoom first.');
		}
	},

	// DOM event handling

	// @section Interaction events
	_initEvents: function (remove$$1) {
		this._targets = {};
		this._targets[stamp(this._container)] = this;

		var onOff = remove$$1 ? off : on;

		// @event click: MouseEvent
		// Fired when the user clicks (or taps) the map.
		// @event dblclick: MouseEvent
		// Fired when the user double-clicks (or double-taps) the map.
		// @event mousedown: MouseEvent
		// Fired when the user pushes the mouse button on the map.
		// @event mouseup: MouseEvent
		// Fired when the user releases the mouse button on the map.
		// @event mouseover: MouseEvent
		// Fired when the mouse enters the map.
		// @event mouseout: MouseEvent
		// Fired when the mouse leaves the map.
		// @event mousemove: MouseEvent
		// Fired while the mouse moves over the map.
		// @event contextmenu: MouseEvent
		// Fired when the user pushes the right mouse button on the map, prevents
		// default browser context menu from showing if there are listeners on
		// this event. Also fired on mobile when the user holds a single touch
		// for a second (also called long press).
		// @event keypress: KeyboardEvent
		// Fired when the user presses a key from the keyboard while the map is focused.
		onOff(this._container, 'click dblclick mousedown mouseup ' +
			'mouseover mouseout mousemove contextmenu keypress', this._handleDOMEvent, this);

		if (this.options.trackResize) {
			onOff(window, 'resize', this._onResize, this);
		}

		if (any3d && this.options.transform3DLimit) {
			(remove$$1 ? this.off : this.on).call(this, 'moveend', this._onMoveEnd);
		}
	},

	_onResize: function () {
		cancelAnimFrame(this._resizeRequest);
		this._resizeRequest = requestAnimFrame(
		        function () { this.invalidateSize({debounceMoveend: true}); }, this);
	},

	_onScroll: function () {
		this._container.scrollTop  = 0;
		this._container.scrollLeft = 0;
	},

	_onMoveEnd: function () {
		var pos = this._getMapPanePos();
		if (Math.max(Math.abs(pos.x), Math.abs(pos.y)) >= this.options.transform3DLimit) {
			// https://bugzilla.mozilla.org/show_bug.cgi?id=1203873 but Webkit also have
			// a pixel offset on very high values, see: http://jsfiddle.net/dg6r5hhb/
			this._resetView(this.getCenter(), this.getZoom());
		}
	},

	_findEventTargets: function (e, type) {
		var targets = [],
		    target,
		    isHover = type === 'mouseout' || type === 'mouseover',
		    src = e.target || e.srcElement,
		    dragging = false;

		while (src) {
			target = this._targets[stamp(src)];
			if (target && (type === 'click' || type === 'preclick') && !e._simulated && this._draggableMoved(target)) {
				// Prevent firing click after you just dragged an object.
				dragging = true;
				break;
			}
			if (target && target.listens(type, true)) {
				if (isHover && !isExternalTarget(src, e)) { break; }
				targets.push(target);
				if (isHover) { break; }
			}
			if (src === this._container) { break; }
			src = src.parentNode;
		}
		if (!targets.length && !dragging && !isHover && isExternalTarget(src, e)) {
			targets = [this];
		}
		return targets;
	},

	_handleDOMEvent: function (e) {
		if (!this._loaded || skipped(e)) { return; }

		var type = e.type;

		if (type === 'mousedown' || type === 'keypress') {
			// prevents outline when clicking on keyboard-focusable element
			preventOutline(e.target || e.srcElement);
		}

		this._fireDOMEvent(e, type);
	},

	_mouseEvents: ['click', 'dblclick', 'mouseover', 'mouseout', 'contextmenu'],

	_fireDOMEvent: function (e, type, targets) {

		if (e.type === 'click') {
			// Fire a synthetic 'preclick' event which propagates up (mainly for closing popups).
			// @event preclick: MouseEvent
			// Fired before mouse click on the map (sometimes useful when you
			// want something to happen on click before any existing click
			// handlers start running).
			var synth = extend({}, e);
			synth.type = 'preclick';
			this._fireDOMEvent(synth, synth.type, targets);
		}

		if (e._stopped) { return; }

		// Find the layer the event is propagating from and its parents.
		targets = (targets || []).concat(this._findEventTargets(e, type));

		if (!targets.length) { return; }

		var target = targets[0];
		if (type === 'contextmenu' && target.listens(type, true)) {
			preventDefault(e);
		}

		var data = {
			originalEvent: e
		};

		if (e.type !== 'keypress') {
			var isMarker = target.getLatLng && (!target._radius || target._radius <= 10);
			data.containerPoint = isMarker ?
				this.latLngToContainerPoint(target.getLatLng()) : this.mouseEventToContainerPoint(e);
			data.layerPoint = this.containerPointToLayerPoint(data.containerPoint);
			data.latlng = isMarker ? target.getLatLng() : this.layerPointToLatLng(data.layerPoint);
		}

		for (var i = 0; i < targets.length; i++) {
			targets[i].fire(type, data, true);
			if (data.originalEvent._stopped ||
				(targets[i].options.bubblingMouseEvents === false && indexOf(this._mouseEvents, type) !== -1)) { return; }
		}
	},

	_draggableMoved: function (obj) {
		obj = obj.dragging && obj.dragging.enabled() ? obj : this;
		return (obj.dragging && obj.dragging.moved()) || (this.boxZoom && this.boxZoom.moved());
	},

	_clearHandlers: function () {
		for (var i = 0, len = this._handlers.length; i < len; i++) {
			this._handlers[i].disable();
		}
	},

	// @section Other Methods

	// @method whenReady(fn: Function, context?: Object): this
	// Runs the given function `fn` when the map gets initialized with
	// a view (center and zoom) and at least one layer, or immediately
	// if it's already initialized, optionally passing a function context.
	whenReady: function (callback, context) {
		if (this._loaded) {
			callback.call(context || this, {target: this});
		} else {
			this.on('load', callback, context);
		}
		return this;
	},


	// private methods for getting map state

	_getMapPanePos: function () {
		return getPosition(this._mapPane) || new Point(0, 0);
	},

	_moved: function () {
		var pos = this._getMapPanePos();
		return pos && !pos.equals([0, 0]);
	},

	_getTopLeftPoint: function (center, zoom) {
		var pixelOrigin = center && zoom !== undefined ?
			this._getNewPixelOrigin(center, zoom) :
			this.getPixelOrigin();
		return pixelOrigin.subtract(this._getMapPanePos());
	},

	_getNewPixelOrigin: function (center, zoom) {
		var viewHalf = this.getSize()._divideBy(2);
		return this.project(center, zoom)._subtract(viewHalf)._add(this._getMapPanePos())._round();
	},

	_latLngToNewLayerPoint: function (latlng, zoom, center) {
		var topLeft = this._getNewPixelOrigin(center, zoom);
		return this.project(latlng, zoom)._subtract(topLeft);
	},

	_latLngBoundsToNewLayerBounds: function (latLngBounds, zoom, center) {
		var topLeft = this._getNewPixelOrigin(center, zoom);
		return toBounds([
			this.project(latLngBounds.getSouthWest(), zoom)._subtract(topLeft),
			this.project(latLngBounds.getNorthWest(), zoom)._subtract(topLeft),
			this.project(latLngBounds.getSouthEast(), zoom)._subtract(topLeft),
			this.project(latLngBounds.getNorthEast(), zoom)._subtract(topLeft)
		]);
	},

	// layer point of the current center
	_getCenterLayerPoint: function () {
		return this.containerPointToLayerPoint(this.getSize()._divideBy(2));
	},

	// offset of the specified place to the current center in pixels
	_getCenterOffset: function (latlng) {
		return this.latLngToLayerPoint(latlng).subtract(this._getCenterLayerPoint());
	},

	// adjust center for view to get inside bounds
	_limitCenter: function (center, zoom, bounds) {

		if (!bounds) { return center; }

		var centerPoint = this.project(center, zoom),
		    viewHalf = this.getSize().divideBy(2),
		    viewBounds = new Bounds(centerPoint.subtract(viewHalf), centerPoint.add(viewHalf)),
		    offset = this._getBoundsOffset(viewBounds, bounds, zoom);

		// If offset is less than a pixel, ignore.
		// This prevents unstable projections from getting into
		// an infinite loop of tiny offsets.
		if (offset.round().equals([0, 0])) {
			return center;
		}

		return this.unproject(centerPoint.add(offset), zoom);
	},

	// adjust offset for view to get inside bounds
	_limitOffset: function (offset, bounds) {
		if (!bounds) { return offset; }

		var viewBounds = this.getPixelBounds(),
		    newBounds = new Bounds(viewBounds.min.add(offset), viewBounds.max.add(offset));

		return offset.add(this._getBoundsOffset(newBounds, bounds));
	},

	// returns offset needed for pxBounds to get inside maxBounds at a specified zoom
	_getBoundsOffset: function (pxBounds, maxBounds, zoom) {
		var projectedMaxBounds = toBounds(
		        this.project(maxBounds.getNorthEast(), zoom),
		        this.project(maxBounds.getSouthWest(), zoom)
		    ),
		    minOffset = projectedMaxBounds.min.subtract(pxBounds.min),
		    maxOffset = projectedMaxBounds.max.subtract(pxBounds.max),

		    dx = this._rebound(minOffset.x, -maxOffset.x),
		    dy = this._rebound(minOffset.y, -maxOffset.y);

		return new Point(dx, dy);
	},

	_rebound: function (left, right) {
		return left + right > 0 ?
			Math.round(left - right) / 2 :
			Math.max(0, Math.ceil(left)) - Math.max(0, Math.floor(right));
	},

	_limitZoom: function (zoom) {
		var min = this.getMinZoom(),
		    max = this.getMaxZoom(),
		    snap = any3d ? this.options.zoomSnap : 1;
		if (snap) {
			zoom = Math.round(zoom / snap) * snap;
		}
		return Math.max(min, Math.min(max, zoom));
	},

	_onPanTransitionStep: function () {
		this.fire('move');
	},

	_onPanTransitionEnd: function () {
		removeClass(this._mapPane, 'leaflet-pan-anim');
		this.fire('moveend');
	},

	_tryAnimatedPan: function (center, options) {
		// difference between the new and current centers in pixels
		var offset = this._getCenterOffset(center)._trunc();

		// don't animate too far unless animate: true specified in options
		if ((options && options.animate) !== true && !this.getSize().contains(offset)) { return false; }

		this.panBy(offset, options);

		return true;
	},

	_createAnimProxy: function () {

		var proxy = this._proxy = create$1('div', 'leaflet-proxy leaflet-zoom-animated');
		this._panes.mapPane.appendChild(proxy);

		this.on('zoomanim', function (e) {
			var prop = TRANSFORM,
			    transform = this._proxy.style[prop];

			setTransform(this._proxy, this.project(e.center, e.zoom), this.getZoomScale(e.zoom, 1));

			// workaround for case when transform is the same and so transitionend event is not fired
			if (transform === this._proxy.style[prop] && this._animatingZoom) {
				this._onZoomTransitionEnd();
			}
		}, this);

		this.on('load moveend', function () {
			var c = this.getCenter(),
			    z = this.getZoom();
			setTransform(this._proxy, this.project(c, z), this.getZoomScale(z, 1));
		}, this);

		this._on('unload', this._destroyAnimProxy, this);
	},

	_destroyAnimProxy: function () {
		remove(this._proxy);
		delete this._proxy;
	},

	_catchTransitionEnd: function (e) {
		if (this._animatingZoom && e.propertyName.indexOf('transform') >= 0) {
			this._onZoomTransitionEnd();
		}
	},

	_nothingToAnimate: function () {
		return !this._container.getElementsByClassName('leaflet-zoom-animated').length;
	},

	_tryAnimatedZoom: function (center, zoom, options) {

		if (this._animatingZoom) { return true; }

		options = options || {};

		// don't animate if disabled, not supported or zoom difference is too large
		if (!this._zoomAnimated || options.animate === false || this._nothingToAnimate() ||
		        Math.abs(zoom - this._zoom) > this.options.zoomAnimationThreshold) { return false; }

		// offset is the pixel coords of the zoom origin relative to the current center
		var scale = this.getZoomScale(zoom),
		    offset = this._getCenterOffset(center)._divideBy(1 - 1 / scale);

		// don't animate if the zoom origin isn't within one screen from the current center, unless forced
		if (options.animate !== true && !this.getSize().contains(offset)) { return false; }

		requestAnimFrame(function () {
			this
			    ._moveStart(true, false)
			    ._animateZoom(center, zoom, true);
		}, this);

		return true;
	},

	_animateZoom: function (center, zoom, startAnim, noUpdate) {
		if (!this._mapPane) { return; }

		if (startAnim) {
			this._animatingZoom = true;

			// remember what center/zoom to set after animation
			this._animateToCenter = center;
			this._animateToZoom = zoom;

			addClass(this._mapPane, 'leaflet-zoom-anim');
		}

		// @event zoomanim: ZoomAnimEvent
		// Fired at least once per zoom animation. For continous zoom, like pinch zooming, fired once per frame during zoom.
		this.fire('zoomanim', {
			center: center,
			zoom: zoom,
			noUpdate: noUpdate
		});

		// Work around webkit not firing 'transitionend', see https://github.com/Leaflet/Leaflet/issues/3689, 2693
		setTimeout(bind(this._onZoomTransitionEnd, this), 250);
	},

	_onZoomTransitionEnd: function () {
		if (!this._animatingZoom) { return; }

		if (this._mapPane) {
			removeClass(this._mapPane, 'leaflet-zoom-anim');
		}

		this._animatingZoom = false;

		this._move(this._animateToCenter, this._animateToZoom);

		// This anim frame should prevent an obscure iOS webkit tile loading race condition.
		requestAnimFrame(function () {
			this._moveEnd(true);
		}, this);
	}
});

// @section

// @factory L.map(id: String, options?: Map options)
// Instantiates a map object given the DOM ID of a `<div>` element
// and optionally an object literal with `Map options`.
//
// @alternative
// @factory L.map(el: HTMLElement, options?: Map options)
// Instantiates a map object given an instance of a `<div>` HTML element
// and optionally an object literal with `Map options`.
function createMap(id, options) {
	return new Map(id, options);
}

/*
 * @class Control
 * @aka L.Control
 * @inherits Class
 *
 * L.Control is a base class for implementing map controls. Handles positioning.
 * All other controls extend from this class.
 */

var Control = Class.extend({
	// @section
	// @aka Control options
	options: {
		// @option position: String = 'topright'
		// The position of the control (one of the map corners). Possible values are `'topleft'`,
		// `'topright'`, `'bottomleft'` or `'bottomright'`
		position: 'topright'
	},

	initialize: function (options) {
		setOptions(this, options);
	},

	/* @section
	 * Classes extending L.Control will inherit the following methods:
	 *
	 * @method getPosition: string
	 * Returns the position of the control.
	 */
	getPosition: function () {
		return this.options.position;
	},

	// @method setPosition(position: string): this
	// Sets the position of the control.
	setPosition: function (position) {
		var map = this._map;

		if (map) {
			map.removeControl(this);
		}

		this.options.position = position;

		if (map) {
			map.addControl(this);
		}

		return this;
	},

	// @method getContainer: HTMLElement
	// Returns the HTMLElement that contains the control.
	getContainer: function () {
		return this._container;
	},

	// @method addTo(map: Map): this
	// Adds the control to the given map.
	addTo: function (map) {
		this.remove();
		this._map = map;

		var container = this._container = this.onAdd(map),
		    pos = this.getPosition(),
		    corner = map._controlCorners[pos];

		addClass(container, 'leaflet-control');

		if (pos.indexOf('bottom') !== -1) {
			corner.insertBefore(container, corner.firstChild);
		} else {
			corner.appendChild(container);
		}

		return this;
	},

	// @method remove: this
	// Removes the control from the map it is currently active on.
	remove: function () {
		if (!this._map) {
			return this;
		}

		remove(this._container);

		if (this.onRemove) {
			this.onRemove(this._map);
		}

		this._map = null;

		return this;
	},

	_refocusOnMap: function (e) {
		// if map exists and event is not a keyboard event
		if (this._map && e && e.screenX > 0 && e.screenY > 0) {
			this._map.getContainer().focus();
		}
	}
});

var control = function (options) {
	return new Control(options);
};

/* @section Extension methods
 * @uninheritable
 *
 * Every control should extend from `L.Control` and (re-)implement the following methods.
 *
 * @method onAdd(map: Map): HTMLElement
 * Should return the container DOM element for the control and add listeners on relevant map events. Called on [`control.addTo(map)`](#control-addTo).
 *
 * @method onRemove(map: Map)
 * Optional method. Should contain all clean up code that removes the listeners previously added in [`onAdd`](#control-onadd). Called on [`control.remove()`](#control-remove).
 */

/* @namespace Map
 * @section Methods for Layers and Controls
 */
Map.include({
	// @method addControl(control: Control): this
	// Adds the given control to the map
	addControl: function (control) {
		control.addTo(this);
		return this;
	},

	// @method removeControl(control: Control): this
	// Removes the given control from the map
	removeControl: function (control) {
		control.remove();
		return this;
	},

	_initControlPos: function () {
		var corners = this._controlCorners = {},
		    l = 'leaflet-',
		    container = this._controlContainer =
		            create$1('div', l + 'control-container', this._container);

		function createCorner(vSide, hSide) {
			var className = l + vSide + ' ' + l + hSide;

			corners[vSide + hSide] = create$1('div', className, container);
		}

		createCorner('top', 'left');
		createCorner('top', 'right');
		createCorner('bottom', 'left');
		createCorner('bottom', 'right');
	},

	_clearControlPos: function () {
		for (var i in this._controlCorners) {
			remove(this._controlCorners[i]);
		}
		remove(this._controlContainer);
		delete this._controlCorners;
		delete this._controlContainer;
	}
});

/*
 * @class Control.Layers
 * @aka L.Control.Layers
 * @inherits Control
 *
 * The layers control gives users the ability to switch between different base layers and switch overlays on/off (check out the [detailed example](http://leafletjs.com/examples/layers-control/)). Extends `Control`.
 *
 * @example
 *
 * ```js
 * var baseLayers = {
 * 	"Mapbox": mapbox,
 * 	"OpenStreetMap": osm
 * };
 *
 * var overlays = {
 * 	"Marker": marker,
 * 	"Roads": roadsLayer
 * };
 *
 * L.control.layers(baseLayers, overlays).addTo(map);
 * ```
 *
 * The `baseLayers` and `overlays` parameters are object literals with layer names as keys and `Layer` objects as values:
 *
 * ```js
 * {
 *     "<someName1>": layer1,
 *     "<someName2>": layer2
 * }
 * ```
 *
 * The layer names can contain HTML, which allows you to add additional styling to the items:
 *
 * ```js
 * {"<img src='my-layer-icon' /> <span class='my-layer-item'>My Layer</span>": myLayer}
 * ```
 */

var Layers = Control.extend({
	// @section
	// @aka Control.Layers options
	options: {
		// @option collapsed: Boolean = true
		// If `true`, the control will be collapsed into an icon and expanded on mouse hover or touch.
		collapsed: true,
		position: 'topright',

		// @option autoZIndex: Boolean = true
		// If `true`, the control will assign zIndexes in increasing order to all of its layers so that the order is preserved when switching them on/off.
		autoZIndex: true,

		// @option hideSingleBase: Boolean = false
		// If `true`, the base layers in the control will be hidden when there is only one.
		hideSingleBase: false,

		// @option sortLayers: Boolean = false
		// Whether to sort the layers. When `false`, layers will keep the order
		// in which they were added to the control.
		sortLayers: false,

		// @option sortFunction: Function = *
		// A [compare function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
		// that will be used for sorting the layers, when `sortLayers` is `true`.
		// The function receives both the `L.Layer` instances and their names, as in
		// `sortFunction(layerA, layerB, nameA, nameB)`.
		// By default, it sorts layers alphabetically by their name.
		sortFunction: function (layerA, layerB, nameA, nameB) {
			return nameA < nameB ? -1 : (nameB < nameA ? 1 : 0);
		}
	},

	initialize: function (baseLayers, overlays, options) {
		setOptions(this, options);

		this._layerControlInputs = [];
		this._layers = [];
		this._lastZIndex = 0;
		this._handlingClick = false;

		for (var i in baseLayers) {
			this._addLayer(baseLayers[i], i);
		}

		for (i in overlays) {
			this._addLayer(overlays[i], i, true);
		}
	},

	onAdd: function (map) {
		this._initLayout();
		this._update();

		this._map = map;
		map.on('zoomend', this._checkDisabledLayers, this);

		for (var i = 0; i < this._layers.length; i++) {
			this._layers[i].layer.on('add remove', this._onLayerChange, this);
		}

		return this._container;
	},

	addTo: function (map) {
		Control.prototype.addTo.call(this, map);
		// Trigger expand after Layers Control has been inserted into DOM so that is now has an actual height.
		return this._expandIfNotCollapsed();
	},

	onRemove: function () {
		this._map.off('zoomend', this._checkDisabledLayers, this);

		for (var i = 0; i < this._layers.length; i++) {
			this._layers[i].layer.off('add remove', this._onLayerChange, this);
		}
	},

	// @method addBaseLayer(layer: Layer, name: String): this
	// Adds a base layer (radio button entry) with the given name to the control.
	addBaseLayer: function (layer, name) {
		this._addLayer(layer, name);
		return (this._map) ? this._update() : this;
	},

	// @method addOverlay(layer: Layer, name: String): this
	// Adds an overlay (checkbox entry) with the given name to the control.
	addOverlay: function (layer, name) {
		this._addLayer(layer, name, true);
		return (this._map) ? this._update() : this;
	},

	// @method removeLayer(layer: Layer): this
	// Remove the given layer from the control.
	removeLayer: function (layer) {
		layer.off('add remove', this._onLayerChange, this);

		var obj = this._getLayer(stamp(layer));
		if (obj) {
			this._layers.splice(this._layers.indexOf(obj), 1);
		}
		return (this._map) ? this._update() : this;
	},

	// @method expand(): this
	// Expand the control container if collapsed.
	expand: function () {
		addClass(this._container, 'leaflet-control-layers-expanded');
		this._section.style.height = null;
		var acceptableHeight = this._map.getSize().y - (this._container.offsetTop + 50);
		if (acceptableHeight < this._section.clientHeight) {
			addClass(this._section, 'leaflet-control-layers-scrollbar');
			this._section.style.height = acceptableHeight + 'px';
		} else {
			removeClass(this._section, 'leaflet-control-layers-scrollbar');
		}
		this._checkDisabledLayers();
		return this;
	},

	// @method collapse(): this
	// Collapse the control container if expanded.
	collapse: function () {
		removeClass(this._container, 'leaflet-control-layers-expanded');
		return this;
	},

	_initLayout: function () {
		var className = 'leaflet-control-layers',
		    container = this._container = create$1('div', className),
		    collapsed = this.options.collapsed;

		// makes this work on IE touch devices by stopping it from firing a mouseout event when the touch is released
		container.setAttribute('aria-haspopup', true);

		disableClickPropagation(container);
		disableScrollPropagation(container);

		var section = this._section = create$1('section', className + '-list');

		if (collapsed) {
			this._map.on('click', this.collapse, this);

			if (!android) {
				on(container, {
					mouseenter: this.expand,
					mouseleave: this.collapse
				}, this);
			}
		}

		var link = this._layersLink = create$1('a', className + '-toggle', container);
		link.href = '#';
		link.title = 'Layers';

		if (touch) {
			on(link, 'click', stop);
			on(link, 'click', this.expand, this);
		} else {
			on(link, 'focus', this.expand, this);
		}

		if (!collapsed) {
			this.expand();
		}

		this._baseLayersList = create$1('div', className + '-base', section);
		this._separator = create$1('div', className + '-separator', section);
		this._overlaysList = create$1('div', className + '-overlays', section);

		container.appendChild(section);
	},

	_getLayer: function (id) {
		for (var i = 0; i < this._layers.length; i++) {

			if (this._layers[i] && stamp(this._layers[i].layer) === id) {
				return this._layers[i];
			}
		}
	},

	_addLayer: function (layer, name, overlay) {
		if (this._map) {
			layer.on('add remove', this._onLayerChange, this);
		}

		this._layers.push({
			layer: layer,
			name: name,
			overlay: overlay
		});

		if (this.options.sortLayers) {
			this._layers.sort(bind(function (a, b) {
				return this.options.sortFunction(a.layer, b.layer, a.name, b.name);
			}, this));
		}

		if (this.options.autoZIndex && layer.setZIndex) {
			this._lastZIndex++;
			layer.setZIndex(this._lastZIndex);
		}

		this._expandIfNotCollapsed();
	},

	_update: function () {
		if (!this._container) { return this; }

		empty(this._baseLayersList);
		empty(this._overlaysList);

		this._layerControlInputs = [];
		var baseLayersPresent, overlaysPresent, i, obj, baseLayersCount = 0;

		for (i = 0; i < this._layers.length; i++) {
			obj = this._layers[i];
			this._addItem(obj);
			overlaysPresent = overlaysPresent || obj.overlay;
			baseLayersPresent = baseLayersPresent || !obj.overlay;
			baseLayersCount += !obj.overlay ? 1 : 0;
		}

		// Hide base layers section if there's only one layer.
		if (this.options.hideSingleBase) {
			baseLayersPresent = baseLayersPresent && baseLayersCount > 1;
			this._baseLayersList.style.display = baseLayersPresent ? '' : 'none';
		}

		this._separator.style.display = overlaysPresent && baseLayersPresent ? '' : 'none';

		return this;
	},

	_onLayerChange: function (e) {
		if (!this._handlingClick) {
			this._update();
		}

		var obj = this._getLayer(stamp(e.target));

		// @namespace Map
		// @section Layer events
		// @event baselayerchange: LayersControlEvent
		// Fired when the base layer is changed through the [layer control](#control-layers).
		// @event overlayadd: LayersControlEvent
		// Fired when an overlay is selected through the [layer control](#control-layers).
		// @event overlayremove: LayersControlEvent
		// Fired when an overlay is deselected through the [layer control](#control-layers).
		// @namespace Control.Layers
		var type = obj.overlay ?
			(e.type === 'add' ? 'overlayadd' : 'overlayremove') :
			(e.type === 'add' ? 'baselayerchange' : null);

		if (type) {
			this._map.fire(type, obj);
		}
	},

	// IE7 bugs out if you create a radio dynamically, so you have to do it this hacky way (see http://bit.ly/PqYLBe)
	_createRadioElement: function (name, checked) {

		var radioHtml = '<input type="radio" class="leaflet-control-layers-selector" name="' +
				name + '"' + (checked ? ' checked="checked"' : '') + '/>';

		var radioFragment = document.createElement('div');
		radioFragment.innerHTML = radioHtml;

		return radioFragment.firstChild;
	},

	_addItem: function (obj) {
		var label = document.createElement('label'),
		    checked = this._map.hasLayer(obj.layer),
		    input;

		if (obj.overlay) {
			input = document.createElement('input');
			input.type = 'checkbox';
			input.className = 'leaflet-control-layers-selector';
			input.defaultChecked = checked;
		} else {
			input = this._createRadioElement('leaflet-base-layers', checked);
		}

		this._layerControlInputs.push(input);
		input.layerId = stamp(obj.layer);

		on(input, 'click', this._onInputClick, this);

		var name = document.createElement('span');
		name.innerHTML = ' ' + obj.name;

		// Helps from preventing layer control flicker when checkboxes are disabled
		// https://github.com/Leaflet/Leaflet/issues/2771
		var holder = document.createElement('div');

		label.appendChild(holder);
		holder.appendChild(input);
		holder.appendChild(name);

		var container = obj.overlay ? this._overlaysList : this._baseLayersList;
		container.appendChild(label);

		this._checkDisabledLayers();
		return label;
	},

	_onInputClick: function () {
		var inputs = this._layerControlInputs,
		    input, layer;
		var addedLayers = [],
		    removedLayers = [];

		this._handlingClick = true;

		for (var i = inputs.length - 1; i >= 0; i--) {
			input = inputs[i];
			layer = this._getLayer(input.layerId).layer;

			if (input.checked) {
				addedLayers.push(layer);
			} else if (!input.checked) {
				removedLayers.push(layer);
			}
		}

		// Bugfix issue 2318: Should remove all old layers before readding new ones
		for (i = 0; i < removedLayers.length; i++) {
			if (this._map.hasLayer(removedLayers[i])) {
				this._map.removeLayer(removedLayers[i]);
			}
		}
		for (i = 0; i < addedLayers.length; i++) {
			if (!this._map.hasLayer(addedLayers[i])) {
				this._map.addLayer(addedLayers[i]);
			}
		}

		this._handlingClick = false;

		this._refocusOnMap();
	},

	_checkDisabledLayers: function () {
		var inputs = this._layerControlInputs,
		    input,
		    layer,
		    zoom = this._map.getZoom();

		for (var i = inputs.length - 1; i >= 0; i--) {
			input = inputs[i];
			layer = this._getLayer(input.layerId).layer;
			input.disabled = (layer.options.minZoom !== undefined && zoom < layer.options.minZoom) ||
			                 (layer.options.maxZoom !== undefined && zoom > layer.options.maxZoom);

		}
	},

	_expandIfNotCollapsed: function () {
		if (this._map && !this.options.collapsed) {
			this.expand();
		}
		return this;
	},

	_expand: function () {
		// Backward compatibility, remove me in 1.1.
		return this.expand();
	},

	_collapse: function () {
		// Backward compatibility, remove me in 1.1.
		return this.collapse();
	}

});


// @factory L.control.layers(baselayers?: Object, overlays?: Object, options?: Control.Layers options)
// Creates an attribution control with the given layers. Base layers will be switched with radio buttons, while overlays will be switched with checkboxes. Note that all base layers should be passed in the base layers object, but only one should be added to the map during map instantiation.
var layers = function (baseLayers, overlays, options) {
	return new Layers(baseLayers, overlays, options);
};

/*
 * @class Control.Zoom
 * @aka L.Control.Zoom
 * @inherits Control
 *
 * A basic zoom control with two buttons (zoom in and zoom out). It is put on the map by default unless you set its [`zoomControl` option](#map-zoomcontrol) to `false`. Extends `Control`.
 */

var Zoom = Control.extend({
	// @section
	// @aka Control.Zoom options
	options: {
		position: 'topleft',

		// @option zoomInText: String = '+'
		// The text set on the 'zoom in' button.
		zoomInText: '+',

		// @option zoomInTitle: String = 'Zoom in'
		// The title set on the 'zoom in' button.
		zoomInTitle: 'Zoom in',

		// @option zoomOutText: String = '&#x2212;'
		// The text set on the 'zoom out' button.
		zoomOutText: '&#x2212;',

		// @option zoomOutTitle: String = 'Zoom out'
		// The title set on the 'zoom out' button.
		zoomOutTitle: 'Zoom out'
	},

	onAdd: function (map) {
		var zoomName = 'leaflet-control-zoom',
		    container = create$1('div', zoomName + ' leaflet-bar'),
		    options = this.options;

		this._zoomInButton  = this._createButton(options.zoomInText, options.zoomInTitle,
		        zoomName + '-in',  container, this._zoomIn);
		this._zoomOutButton = this._createButton(options.zoomOutText, options.zoomOutTitle,
		        zoomName + '-out', container, this._zoomOut);

		this._updateDisabled();
		map.on('zoomend zoomlevelschange', this._updateDisabled, this);

		return container;
	},

	onRemove: function (map) {
		map.off('zoomend zoomlevelschange', this._updateDisabled, this);
	},

	disable: function () {
		this._disabled = true;
		this._updateDisabled();
		return this;
	},

	enable: function () {
		this._disabled = false;
		this._updateDisabled();
		return this;
	},

	_zoomIn: function (e) {
		if (!this._disabled && this._map._zoom < this._map.getMaxZoom()) {
			this._map.zoomIn(this._map.options.zoomDelta * (e.shiftKey ? 3 : 1));
		}
	},

	_zoomOut: function (e) {
		if (!this._disabled && this._map._zoom > this._map.getMinZoom()) {
			this._map.zoomOut(this._map.options.zoomDelta * (e.shiftKey ? 3 : 1));
		}
	},

	_createButton: function (html, title, className, container, fn) {
		var link = create$1('a', className, container);
		link.innerHTML = html;
		link.href = '#';
		link.title = title;

		/*
		 * Will force screen readers like VoiceOver to read this as "Zoom in - button"
		 */
		link.setAttribute('role', 'button');
		link.setAttribute('aria-label', title);

		disableClickPropagation(link);
		on(link, 'click', stop);
		on(link, 'click', fn, this);
		on(link, 'click', this._refocusOnMap, this);

		return link;
	},

	_updateDisabled: function () {
		var map = this._map,
		    className = 'leaflet-disabled';

		removeClass(this._zoomInButton, className);
		removeClass(this._zoomOutButton, className);

		if (this._disabled || map._zoom === map.getMinZoom()) {
			addClass(this._zoomOutButton, className);
		}
		if (this._disabled || map._zoom === map.getMaxZoom()) {
			addClass(this._zoomInButton, className);
		}
	}
});

// @namespace Map
// @section Control options
// @option zoomControl: Boolean = true
// Whether a [zoom control](#control-zoom) is added to the map by default.
Map.mergeOptions({
	zoomControl: true
});

Map.addInitHook(function () {
	if (this.options.zoomControl) {
		// @section Controls
		// @property zoomControl: Control.Zoom
		// The default zoom control (only available if the
		// [`zoomControl` option](#map-zoomcontrol) was `true` when creating the map).
		this.zoomControl = new Zoom();
		this.addControl(this.zoomControl);
	}
});

// @namespace Control.Zoom
// @factory L.control.zoom(options: Control.Zoom options)
// Creates a zoom control
var zoom = function (options) {
	return new Zoom(options);
};

/*
 * @class Control.Scale
 * @aka L.Control.Scale
 * @inherits Control
 *
 * A simple scale control that shows the scale of the current center of screen in metric (m/km) and imperial (mi/ft) systems. Extends `Control`.
 *
 * @example
 *
 * ```js
 * L.control.scale().addTo(map);
 * ```
 */

var Scale = Control.extend({
	// @section
	// @aka Control.Scale options
	options: {
		position: 'bottomleft',

		// @option maxWidth: Number = 100
		// Maximum width of the control in pixels. The width is set dynamically to show round values (e.g. 100, 200, 500).
		maxWidth: 100,

		// @option metric: Boolean = True
		// Whether to show the metric scale line (m/km).
		metric: true,

		// @option imperial: Boolean = True
		// Whether to show the imperial scale line (mi/ft).
		imperial: true

		// @option updateWhenIdle: Boolean = false
		// If `true`, the control is updated on [`moveend`](#map-moveend), otherwise it's always up-to-date (updated on [`move`](#map-move)).
	},

	onAdd: function (map) {
		var className = 'leaflet-control-scale',
		    container = create$1('div', className),
		    options = this.options;

		this._addScales(options, className + '-line', container);

		map.on(options.updateWhenIdle ? 'moveend' : 'move', this._update, this);
		map.whenReady(this._update, this);

		return container;
	},

	onRemove: function (map) {
		map.off(this.options.updateWhenIdle ? 'moveend' : 'move', this._update, this);
	},

	_addScales: function (options, className, container) {
		if (options.metric) {
			this._mScale = create$1('div', className, container);
		}
		if (options.imperial) {
			this._iScale = create$1('div', className, container);
		}
	},

	_update: function () {
		var map = this._map,
		    y = map.getSize().y / 2;

		var maxMeters = map.distance(
			map.containerPointToLatLng([0, y]),
			map.containerPointToLatLng([this.options.maxWidth, y]));

		this._updateScales(maxMeters);
	},

	_updateScales: function (maxMeters) {
		if (this.options.metric && maxMeters) {
			this._updateMetric(maxMeters);
		}
		if (this.options.imperial && maxMeters) {
			this._updateImperial(maxMeters);
		}
	},

	_updateMetric: function (maxMeters) {
		var meters = this._getRoundNum(maxMeters),
		    label = meters < 1000 ? meters + ' m' : (meters / 1000) + ' km';

		this._updateScale(this._mScale, label, meters / maxMeters);
	},

	_updateImperial: function (maxMeters) {
		var maxFeet = maxMeters * 3.2808399,
		    maxMiles, miles, feet;

		if (maxFeet > 5280) {
			maxMiles = maxFeet / 5280;
			miles = this._getRoundNum(maxMiles);
			this._updateScale(this._iScale, miles + ' mi', miles / maxMiles);

		} else {
			feet = this._getRoundNum(maxFeet);
			this._updateScale(this._iScale, feet + ' ft', feet / maxFeet);
		}
	},

	_updateScale: function (scale, text, ratio) {
		scale.style.width = Math.round(this.options.maxWidth * ratio) + 'px';
		scale.innerHTML = text;
	},

	_getRoundNum: function (num) {
		var pow10 = Math.pow(10, (Math.floor(num) + '').length - 1),
		    d = num / pow10;

		d = d >= 10 ? 10 :
		    d >= 5 ? 5 :
		    d >= 3 ? 3 :
		    d >= 2 ? 2 : 1;

		return pow10 * d;
	}
});


// @factory L.control.scale(options?: Control.Scale options)
// Creates an scale control with the given options.
var scale = function (options) {
	return new Scale(options);
};

/*
 * @class Control.Attribution
 * @aka L.Control.Attribution
 * @inherits Control
 *
 * The attribution control allows you to display attribution data in a small text box on a map. It is put on the map by default unless you set its [`attributionControl` option](#map-attributioncontrol) to `false`, and it fetches attribution texts from layers with the [`getAttribution` method](#layer-getattribution) automatically. Extends Control.
 */

var Attribution = Control.extend({
	// @section
	// @aka Control.Attribution options
	options: {
		position: 'bottomright',

		// @option prefix: String = 'Leaflet'
		// The HTML text shown before the attributions. Pass `false` to disable.
		prefix: '<a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>'
	},

	initialize: function (options) {
		setOptions(this, options);

		this._attributions = {};
	},

	onAdd: function (map) {
		map.attributionControl = this;
		this._container = create$1('div', 'leaflet-control-attribution');
		disableClickPropagation(this._container);

		// TODO ugly, refactor
		for (var i in map._layers) {
			if (map._layers[i].getAttribution) {
				this.addAttribution(map._layers[i].getAttribution());
			}
		}

		this._update();

		return this._container;
	},

	// @method setPrefix(prefix: String): this
	// Sets the text before the attributions.
	setPrefix: function (prefix) {
		this.options.prefix = prefix;
		this._update();
		return this;
	},

	// @method addAttribution(text: String): this
	// Adds an attribution text (e.g. `'Vector data &copy; Mapbox'`).
	addAttribution: function (text) {
		if (!text) { return this; }

		if (!this._attributions[text]) {
			this._attributions[text] = 0;
		}
		this._attributions[text]++;

		this._update();

		return this;
	},

	// @method removeAttribution(text: String): this
	// Removes an attribution text.
	removeAttribution: function (text) {
		if (!text) { return this; }

		if (this._attributions[text]) {
			this._attributions[text]--;
			this._update();
		}

		return this;
	},

	_update: function () {
		if (!this._map) { return; }

		var attribs = [];

		for (var i in this._attributions) {
			if (this._attributions[i]) {
				attribs.push(i);
			}
		}

		var prefixAndAttribs = [];

		if (this.options.prefix) {
			prefixAndAttribs.push(this.options.prefix);
		}
		if (attribs.length) {
			prefixAndAttribs.push(attribs.join(', '));
		}

		this._container.innerHTML = prefixAndAttribs.join(' | ');
	}
});

// @namespace Map
// @section Control options
// @option attributionControl: Boolean = true
// Whether a [attribution control](#control-attribution) is added to the map by default.
Map.mergeOptions({
	attributionControl: true
});

Map.addInitHook(function () {
	if (this.options.attributionControl) {
		new Attribution().addTo(this);
	}
});

// @namespace Control.Attribution
// @factory L.control.attribution(options: Control.Attribution options)
// Creates an attribution control.
var attribution = function (options) {
	return new Attribution(options);
};

Control.Layers = Layers;
Control.Zoom = Zoom;
Control.Scale = Scale;
Control.Attribution = Attribution;

control.layers = layers;
control.zoom = zoom;
control.scale = scale;
control.attribution = attribution;

/*
	L.Handler is a base class for handler classes that are used internally to inject
	interaction features like dragging to classes like Map and Marker.
*/

// @class Handler
// @aka L.Handler
// Abstract class for map interaction handlers

var Handler = Class.extend({
	initialize: function (map) {
		this._map = map;
	},

	// @method enable(): this
	// Enables the handler
	enable: function () {
		if (this._enabled) { return this; }

		this._enabled = true;
		this.addHooks();
		return this;
	},

	// @method disable(): this
	// Disables the handler
	disable: function () {
		if (!this._enabled) { return this; }

		this._enabled = false;
		this.removeHooks();
		return this;
	},

	// @method enabled(): Boolean
	// Returns `true` if the handler is enabled
	enabled: function () {
		return !!this._enabled;
	}

	// @section Extension methods
	// Classes inheriting from `Handler` must implement the two following methods:
	// @method addHooks()
	// Called when the handler is enabled, should add event hooks.
	// @method removeHooks()
	// Called when the handler is disabled, should remove the event hooks added previously.
});

// @section There is static function which can be called without instantiating L.Handler:
// @function addTo(map: Map, name: String): this
// Adds a new Handler to the given map with the given name.
Handler.addTo = function (map, name) {
	map.addHandler(name, this);
	return this;
};

var Mixin = {Events: Events};

/*
 * @class Draggable
 * @aka L.Draggable
 * @inherits Evented
 *
 * A class for making DOM elements draggable (including touch support).
 * Used internally for map and marker dragging. Only works for elements
 * that were positioned with [`L.DomUtil.setPosition`](#domutil-setposition).
 *
 * @example
 * ```js
 * var draggable = new L.Draggable(elementToDrag);
 * draggable.enable();
 * ```
 */

var START = touch ? 'touchstart mousedown' : 'mousedown';
var END = {
	mousedown: 'mouseup',
	touchstart: 'touchend',
	pointerdown: 'touchend',
	MSPointerDown: 'touchend'
};
var MOVE = {
	mousedown: 'mousemove',
	touchstart: 'touchmove',
	pointerdown: 'touchmove',
	MSPointerDown: 'touchmove'
};


var Draggable = Evented.extend({

	options: {
		// @section
		// @aka Draggable options
		// @option clickTolerance: Number = 3
		// The max number of pixels a user can shift the mouse pointer during a click
		// for it to be considered a valid click (as opposed to a mouse drag).
		clickTolerance: 3
	},

	// @constructor L.Draggable(el: HTMLElement, dragHandle?: HTMLElement, preventOutline?: Boolean, options?: Draggable options)
	// Creates a `Draggable` object for moving `el` when you start dragging the `dragHandle` element (equals `el` itself by default).
	initialize: function (element, dragStartTarget, preventOutline$$1, options) {
		setOptions(this, options);

		this._element = element;
		this._dragStartTarget = dragStartTarget || element;
		this._preventOutline = preventOutline$$1;
	},

	// @method enable()
	// Enables the dragging ability
	enable: function () {
		if (this._enabled) { return; }

		on(this._dragStartTarget, START, this._onDown, this);

		this._enabled = true;
	},

	// @method disable()
	// Disables the dragging ability
	disable: function () {
		if (!this._enabled) { return; }

		// If we're currently dragging this draggable,
		// disabling it counts as first ending the drag.
		if (Draggable._dragging === this) {
			this.finishDrag();
		}

		off(this._dragStartTarget, START, this._onDown, this);

		this._enabled = false;
		this._moved = false;
	},

	_onDown: function (e) {
		// Ignore simulated events, since we handle both touch and
		// mouse explicitly; otherwise we risk getting duplicates of
		// touch events, see #4315.
		// Also ignore the event if disabled; this happens in IE11
		// under some circumstances, see #3666.
		if (e._simulated || !this._enabled) { return; }

		this._moved = false;

		if (hasClass(this._element, 'leaflet-zoom-anim')) { return; }

		if (Draggable._dragging || e.shiftKey || ((e.which !== 1) && (e.button !== 1) && !e.touches)) { return; }
		Draggable._dragging = this;  // Prevent dragging multiple objects at once.

		if (this._preventOutline) {
			preventOutline(this._element);
		}

		disableImageDrag();
		disableTextSelection();

		if (this._moving) { return; }

		// @event down: Event
		// Fired when a drag is about to start.
		this.fire('down');

		var first = e.touches ? e.touches[0] : e,
		    sizedParent = getSizedParentNode(this._element);

		this._startPoint = new Point(first.clientX, first.clientY);

		// Cache the scale, so that we can continuously compensate for it during drag (_onMove).
		this._parentScale = getScale(sizedParent);

		on(document, MOVE[e.type], this._onMove, this);
		on(document, END[e.type], this._onUp, this);
	},

	_onMove: function (e) {
		// Ignore simulated events, since we handle both touch and
		// mouse explicitly; otherwise we risk getting duplicates of
		// touch events, see #4315.
		// Also ignore the event if disabled; this happens in IE11
		// under some circumstances, see #3666.
		if (e._simulated || !this._enabled) { return; }

		if (e.touches && e.touches.length > 1) {
			this._moved = true;
			return;
		}

		var first = (e.touches && e.touches.length === 1 ? e.touches[0] : e),
		    offset = new Point(first.clientX, first.clientY)._subtract(this._startPoint);

		if (!offset.x && !offset.y) { return; }
		if (Math.abs(offset.x) + Math.abs(offset.y) < this.options.clickTolerance) { return; }

		// We assume that the parent container's position, border and scale do not change for the duration of the drag.
		// Therefore there is no need to account for the position and border (they are eliminated by the subtraction)
		// and we can use the cached value for the scale.
		offset.x /= this._parentScale.x;
		offset.y /= this._parentScale.y;

		preventDefault(e);

		if (!this._moved) {
			// @event dragstart: Event
			// Fired when a drag starts
			this.fire('dragstart');

			this._moved = true;
			this._startPos = getPosition(this._element).subtract(offset);

			addClass(document.body, 'leaflet-dragging');

			this._lastTarget = e.target || e.srcElement;
			// IE and Edge do not give the <use> element, so fetch it
			// if necessary
			if ((window.SVGElementInstance) && (this._lastTarget instanceof SVGElementInstance)) {
				this._lastTarget = this._lastTarget.correspondingUseElement;
			}
			addClass(this._lastTarget, 'leaflet-drag-target');
		}

		this._newPos = this._startPos.add(offset);
		this._moving = true;

		cancelAnimFrame(this._animRequest);
		this._lastEvent = e;
		this._animRequest = requestAnimFrame(this._updatePosition, this, true);
	},

	_updatePosition: function () {
		var e = {originalEvent: this._lastEvent};

		// @event predrag: Event
		// Fired continuously during dragging *before* each corresponding
		// update of the element's position.
		this.fire('predrag', e);
		setPosition(this._element, this._newPos);

		// @event drag: Event
		// Fired continuously during dragging.
		this.fire('drag', e);
	},

	_onUp: function (e) {
		// Ignore simulated events, since we handle both touch and
		// mouse explicitly; otherwise we risk getting duplicates of
		// touch events, see #4315.
		// Also ignore the event if disabled; this happens in IE11
		// under some circumstances, see #3666.
		if (e._simulated || !this._enabled) { return; }
		this.finishDrag();
	},

	finishDrag: function () {
		removeClass(document.body, 'leaflet-dragging');

		if (this._lastTarget) {
			removeClass(this._lastTarget, 'leaflet-drag-target');
			this._lastTarget = null;
		}

		for (var i in MOVE) {
			off(document, MOVE[i], this._onMove, this);
			off(document, END[i], this._onUp, this);
		}

		enableImageDrag();
		enableTextSelection();

		if (this._moved && this._moving) {
			// ensure drag is not fired after dragend
			cancelAnimFrame(this._animRequest);

			// @event dragend: DragEndEvent
			// Fired when the drag ends.
			this.fire('dragend', {
				distance: this._newPos.distanceTo(this._startPos)
			});
		}

		this._moving = false;
		Draggable._dragging = false;
	}

});

/*
 * @namespace LineUtil
 *
 * Various utility functions for polyline points processing, used by Leaflet internally to make polylines lightning-fast.
 */

// Simplify polyline with vertex reduction and Douglas-Peucker simplification.
// Improves rendering performance dramatically by lessening the number of points to draw.

// @function simplify(points: Point[], tolerance: Number): Point[]
// Dramatically reduces the number of points in a polyline while retaining
// its shape and returns a new array of simplified points, using the
// [Douglas-Peucker algorithm](http://en.wikipedia.org/wiki/Douglas-Peucker_algorithm).
// Used for a huge performance boost when processing/displaying Leaflet polylines for
// each zoom level and also reducing visual noise. tolerance affects the amount of
// simplification (lesser value means higher quality but slower and with more points).
// Also released as a separated micro-library [Simplify.js](http://mourner.github.com/simplify-js/).
function simplify(points, tolerance) {
	if (!tolerance || !points.length) {
		return points.slice();
	}

	var sqTolerance = tolerance * tolerance;

	    // stage 1: vertex reduction
	    points = _reducePoints(points, sqTolerance);

	    // stage 2: Douglas-Peucker simplification
	    points = _simplifyDP(points, sqTolerance);

	return points;
}

// @function pointToSegmentDistance(p: Point, p1: Point, p2: Point): Number
// Returns the distance between point `p` and segment `p1` to `p2`.
function pointToSegmentDistance(p, p1, p2) {
	return Math.sqrt(_sqClosestPointOnSegment(p, p1, p2, true));
}

// @function closestPointOnSegment(p: Point, p1: Point, p2: Point): Number
// Returns the closest point from a point `p` on a segment `p1` to `p2`.
function closestPointOnSegment(p, p1, p2) {
	return _sqClosestPointOnSegment(p, p1, p2);
}

// Douglas-Peucker simplification, see http://en.wikipedia.org/wiki/Douglas-Peucker_algorithm
function _simplifyDP(points, sqTolerance) {

	var len = points.length,
	    ArrayConstructor = typeof Uint8Array !== undefined + '' ? Uint8Array : Array,
	    markers = new ArrayConstructor(len);

	    markers[0] = markers[len - 1] = 1;

	_simplifyDPStep(points, markers, sqTolerance, 0, len - 1);

	var i,
	    newPoints = [];

	for (i = 0; i < len; i++) {
		if (markers[i]) {
			newPoints.push(points[i]);
		}
	}

	return newPoints;
}

function _simplifyDPStep(points, markers, sqTolerance, first, last) {

	var maxSqDist = 0,
	index, i, sqDist;

	for (i = first + 1; i <= last - 1; i++) {
		sqDist = _sqClosestPointOnSegment(points[i], points[first], points[last], true);

		if (sqDist > maxSqDist) {
			index = i;
			maxSqDist = sqDist;
		}
	}

	if (maxSqDist > sqTolerance) {
		markers[index] = 1;

		_simplifyDPStep(points, markers, sqTolerance, first, index);
		_simplifyDPStep(points, markers, sqTolerance, index, last);
	}
}

// reduce points that are too close to each other to a single point
function _reducePoints(points, sqTolerance) {
	var reducedPoints = [points[0]];

	for (var i = 1, prev = 0, len = points.length; i < len; i++) {
		if (_sqDist(points[i], points[prev]) > sqTolerance) {
			reducedPoints.push(points[i]);
			prev = i;
		}
	}
	if (prev < len - 1) {
		reducedPoints.push(points[len - 1]);
	}
	return reducedPoints;
}

var _lastCode;

// @function clipSegment(a: Point, b: Point, bounds: Bounds, useLastCode?: Boolean, round?: Boolean): Point[]|Boolean
// Clips the segment a to b by rectangular bounds with the
// [Cohen-Sutherland algorithm](https://en.wikipedia.org/wiki/Cohen%E2%80%93Sutherland_algorithm)
// (modifying the segment points directly!). Used by Leaflet to only show polyline
// points that are on the screen or near, increasing performance.
function clipSegment(a, b, bounds, useLastCode, round) {
	var codeA = useLastCode ? _lastCode : _getBitCode(a, bounds),
	    codeB = _getBitCode(b, bounds),

	    codeOut, p, newCode;

	    // save 2nd code to avoid calculating it on the next segment
	    _lastCode = codeB;

	while (true) {
		// if a,b is inside the clip window (trivial accept)
		if (!(codeA | codeB)) {
			return [a, b];
		}

		// if a,b is outside the clip window (trivial reject)
		if (codeA & codeB) {
			return false;
		}

		// other cases
		codeOut = codeA || codeB;
		p = _getEdgeIntersection(a, b, codeOut, bounds, round);
		newCode = _getBitCode(p, bounds);

		if (codeOut === codeA) {
			a = p;
			codeA = newCode;
		} else {
			b = p;
			codeB = newCode;
		}
	}
}

function _getEdgeIntersection(a, b, code, bounds, round) {
	var dx = b.x - a.x,
	    dy = b.y - a.y,
	    min = bounds.min,
	    max = bounds.max,
	    x, y;

	if (code & 8) { // top
		x = a.x + dx * (max.y - a.y) / dy;
		y = max.y;

	} else if (code & 4) { // bottom
		x = a.x + dx * (min.y - a.y) / dy;
		y = min.y;

	} else if (code & 2) { // right
		x = max.x;
		y = a.y + dy * (max.x - a.x) / dx;

	} else if (code & 1) { // left
		x = min.x;
		y = a.y + dy * (min.x - a.x) / dx;
	}

	return new Point(x, y, round);
}

function _getBitCode(p, bounds) {
	var code = 0;

	if (p.x < bounds.min.x) { // left
		code |= 1;
	} else if (p.x > bounds.max.x) { // right
		code |= 2;
	}

	if (p.y < bounds.min.y) { // bottom
		code |= 4;
	} else if (p.y > bounds.max.y) { // top
		code |= 8;
	}

	return code;
}

// square distance (to avoid unnecessary Math.sqrt calls)
function _sqDist(p1, p2) {
	var dx = p2.x - p1.x,
	    dy = p2.y - p1.y;
	return dx * dx + dy * dy;
}

// return closest point on segment or distance to that point
function _sqClosestPointOnSegment(p, p1, p2, sqDist) {
	var x = p1.x,
	    y = p1.y,
	    dx = p2.x - x,
	    dy = p2.y - y,
	    dot = dx * dx + dy * dy,
	    t;

	if (dot > 0) {
		t = ((p.x - x) * dx + (p.y - y) * dy) / dot;

		if (t > 1) {
			x = p2.x;
			y = p2.y;
		} else if (t > 0) {
			x += dx * t;
			y += dy * t;
		}
	}

	dx = p.x - x;
	dy = p.y - y;

	return sqDist ? dx * dx + dy * dy : new Point(x, y);
}


// @function isFlat(latlngs: LatLng[]): Boolean
// Returns true if `latlngs` is a flat array, false is nested.
function isFlat(latlngs) {
	return !isArray(latlngs[0]) || (typeof latlngs[0][0] !== 'object' && typeof latlngs[0][0] !== 'undefined');
}

function _flat(latlngs) {
	console.warn('Deprecated use of _flat, please use L.LineUtil.isFlat instead.');
	return isFlat(latlngs);
}


var LineUtil = (Object.freeze || Object)({
	simplify: simplify,
	pointToSegmentDistance: pointToSegmentDistance,
	closestPointOnSegment: closestPointOnSegment,
	clipSegment: clipSegment,
	_getEdgeIntersection: _getEdgeIntersection,
	_getBitCode: _getBitCode,
	_sqClosestPointOnSegment: _sqClosestPointOnSegment,
	isFlat: isFlat,
	_flat: _flat
});

/*
 * @namespace PolyUtil
 * Various utility functions for polygon geometries.
 */

/* @function clipPolygon(points: Point[], bounds: Bounds, round?: Boolean): Point[]
 * Clips the polygon geometry defined by the given `points` by the given bounds (using the [Sutherland-Hodgman algorithm](https://en.wikipedia.org/wiki/Sutherland%E2%80%93Hodgman_algorithm)).
 * Used by Leaflet to only show polygon points that are on the screen or near, increasing
 * performance. Note that polygon points needs different algorithm for clipping
 * than polyline, so there's a separate method for it.
 */
function clipPolygon(points, bounds, round) {
	var clippedPoints,
	    edges = [1, 4, 2, 8],
	    i, j, k,
	    a, b,
	    len, edge, p;

	for (i = 0, len = points.length; i < len; i++) {
		points[i]._code = _getBitCode(points[i], bounds);
	}

	// for each edge (left, bottom, right, top)
	for (k = 0; k < 4; k++) {
		edge = edges[k];
		clippedPoints = [];

		for (i = 0, len = points.length, j = len - 1; i < len; j = i++) {
			a = points[i];
			b = points[j];

			// if a is inside the clip window
			if (!(a._code & edge)) {
				// if b is outside the clip window (a->b goes out of screen)
				if (b._code & edge) {
					p = _getEdgeIntersection(b, a, edge, bounds, round);
					p._code = _getBitCode(p, bounds);
					clippedPoints.push(p);
				}
				clippedPoints.push(a);

			// else if b is inside the clip window (a->b enters the screen)
			} else if (!(b._code & edge)) {
				p = _getEdgeIntersection(b, a, edge, bounds, round);
				p._code = _getBitCode(p, bounds);
				clippedPoints.push(p);
			}
		}
		points = clippedPoints;
	}

	return points;
}


var PolyUtil = (Object.freeze || Object)({
	clipPolygon: clipPolygon
});

/*
 * @namespace Projection
 * @section
 * Leaflet comes with a set of already defined Projections out of the box:
 *
 * @projection L.Projection.LonLat
 *
 * Equirectangular, or Plate Carree projection — the most simple projection,
 * mostly used by GIS enthusiasts. Directly maps `x` as longitude, and `y` as
 * latitude. Also suitable for flat worlds, e.g. game maps. Used by the
 * `EPSG:4326` and `Simple` CRS.
 */

var LonLat = {
	project: function (latlng) {
		return new Point(latlng.lng, latlng.lat);
	},

	unproject: function (point) {
		return new LatLng(point.y, point.x);
	},

	bounds: new Bounds([-180, -90], [180, 90])
};

/*
 * @namespace Projection
 * @projection L.Projection.Mercator
 *
 * Elliptical Mercator projection — more complex than Spherical Mercator. Takes into account that Earth is a geoid, not a perfect sphere. Used by the EPSG:3395 CRS.
 */

var Mercator = {
	R: 6378137,
	R_MINOR: 6356752.314245179,

	bounds: new Bounds([-20037508.34279, -15496570.73972], [20037508.34279, 18764656.23138]),

	project: function (latlng) {
		var d = Math.PI / 180,
		    r = this.R,
		    y = latlng.lat * d,
		    tmp = this.R_MINOR / r,
		    e = Math.sqrt(1 - tmp * tmp),
		    con = e * Math.sin(y);

		var ts = Math.tan(Math.PI / 4 - y / 2) / Math.pow((1 - con) / (1 + con), e / 2);
		y = -r * Math.log(Math.max(ts, 1E-10));

		return new Point(latlng.lng * d * r, y);
	},

	unproject: function (point) {
		var d = 180 / Math.PI,
		    r = this.R,
		    tmp = this.R_MINOR / r,
		    e = Math.sqrt(1 - tmp * tmp),
		    ts = Math.exp(-point.y / r),
		    phi = Math.PI / 2 - 2 * Math.atan(ts);

		for (var i = 0, dphi = 0.1, con; i < 15 && Math.abs(dphi) > 1e-7; i++) {
			con = e * Math.sin(phi);
			con = Math.pow((1 - con) / (1 + con), e / 2);
			dphi = Math.PI / 2 - 2 * Math.atan(ts * con) - phi;
			phi += dphi;
		}

		return new LatLng(phi * d, point.x * d / r);
	}
};

/*
 * @class Projection

 * An object with methods for projecting geographical coordinates of the world onto
 * a flat surface (and back). See [Map projection](http://en.wikipedia.org/wiki/Map_projection).

 * @property bounds: Bounds
 * The bounds (specified in CRS units) where the projection is valid

 * @method project(latlng: LatLng): Point
 * Projects geographical coordinates into a 2D point.
 * Only accepts actual `L.LatLng` instances, not arrays.

 * @method unproject(point: Point): LatLng
 * The inverse of `project`. Projects a 2D point into a geographical location.
 * Only accepts actual `L.Point` instances, not arrays.

 * Note that the projection instances do not inherit from Leafet's `Class` object,
 * and can't be instantiated. Also, new classes can't inherit from them,
 * and methods can't be added to them with the `include` function.

 */




var index = (Object.freeze || Object)({
	LonLat: LonLat,
	Mercator: Mercator,
	SphericalMercator: SphericalMercator
});

/*
 * @namespace CRS
 * @crs L.CRS.EPSG3395
 *
 * Rarely used by some commercial tile providers. Uses Elliptical Mercator projection.
 */
var EPSG3395 = extend({}, Earth, {
	code: 'EPSG:3395',
	projection: Mercator,

	transformation: (function () {
		var scale = 0.5 / (Math.PI * Mercator.R);
		return toTransformation(scale, 0.5, -scale, 0.5);
	}())
});

/*
 * @namespace CRS
 * @crs L.CRS.EPSG4326
 *
 * A common CRS among GIS enthusiasts. Uses simple Equirectangular projection.
 *
 * Leaflet 1.0.x complies with the [TMS coordinate scheme for EPSG:4326](https://wiki.osgeo.org/wiki/Tile_Map_Service_Specification#global-geodetic),
 * which is a breaking change from 0.7.x behaviour.  If you are using a `TileLayer`
 * with this CRS, ensure that there are two 256x256 pixel tiles covering the
 * whole earth at zoom level zero, and that the tile coordinate origin is (-180,+90),
 * or (-180,-90) for `TileLayer`s with [the `tms` option](#tilelayer-tms) set.
 */

var EPSG4326 = extend({}, Earth, {
	code: 'EPSG:4326',
	projection: LonLat,
	transformation: toTransformation(1 / 180, 1, -1 / 180, 0.5)
});

/*
 * @namespace CRS
 * @crs L.CRS.Simple
 *
 * A simple CRS that maps longitude and latitude into `x` and `y` directly.
 * May be used for maps of flat surfaces (e.g. game maps). Note that the `y`
 * axis should still be inverted (going from bottom to top). `distance()` returns
 * simple euclidean distance.
 */

var Simple = extend({}, CRS, {
	projection: LonLat,
	transformation: toTransformation(1, 0, -1, 0),

	scale: function (zoom) {
		return Math.pow(2, zoom);
	},

	zoom: function (scale) {
		return Math.log(scale) / Math.LN2;
	},

	distance: function (latlng1, latlng2) {
		var dx = latlng2.lng - latlng1.lng,
		    dy = latlng2.lat - latlng1.lat;

		return Math.sqrt(dx * dx + dy * dy);
	},

	infinite: true
});

CRS.Earth = Earth;
CRS.EPSG3395 = EPSG3395;
CRS.EPSG3857 = EPSG3857;
CRS.EPSG900913 = EPSG900913;
CRS.EPSG4326 = EPSG4326;
CRS.Simple = Simple;

/*
 * @class Layer
 * @inherits Evented
 * @aka L.Layer
 * @aka ILayer
 *
 * A set of methods from the Layer base class that all Leaflet layers use.
 * Inherits all methods, options and events from `L.Evented`.
 *
 * @example
 *
 * ```js
 * var layer = L.Marker(latlng).addTo(map);
 * layer.addTo(map);
 * layer.remove();
 * ```
 *
 * @event add: Event
 * Fired after the layer is added to a map
 *
 * @event remove: Event
 * Fired after the layer is removed from a map
 */


var Layer = Evented.extend({

	// Classes extending `L.Layer` will inherit the following options:
	options: {
		// @option pane: String = 'overlayPane'
		// By default the layer will be added to the map's [overlay pane](#map-overlaypane). Overriding this option will cause the layer to be placed on another pane by default.
		pane: 'overlayPane',

		// @option attribution: String = null
		// String to be shown in the attribution control, e.g. "© OpenStreetMap contributors". It describes the layer data and is often a legal obligation towards copyright holders and tile providers.
		attribution: null,

		bubblingMouseEvents: true
	},

	/* @section
	 * Classes extending `L.Layer` will inherit the following methods:
	 *
	 * @method addTo(map: Map|LayerGroup): this
	 * Adds the layer to the given map or layer group.
	 */
	addTo: function (map) {
		map.addLayer(this);
		return this;
	},

	// @method remove: this
	// Removes the layer from the map it is currently active on.
	remove: function () {
		return this.removeFrom(this._map || this._mapToAdd);
	},

	// @method removeFrom(map: Map): this
	// Removes the layer from the given map
	removeFrom: function (obj) {
		if (obj) {
			obj.removeLayer(this);
		}
		return this;
	},

	// @method getPane(name? : String): HTMLElement
	// Returns the `HTMLElement` representing the named pane on the map. If `name` is omitted, returns the pane for this layer.
	getPane: function (name) {
		return this._map.getPane(name ? (this.options[name] || name) : this.options.pane);
	},

	addInteractiveTarget: function (targetEl) {
		this._map._targets[stamp(targetEl)] = this;
		return this;
	},

	removeInteractiveTarget: function (targetEl) {
		delete this._map._targets[stamp(targetEl)];
		return this;
	},

	// @method getAttribution: String
	// Used by the `attribution control`, returns the [attribution option](#gridlayer-attribution).
	getAttribution: function () {
		return this.options.attribution;
	},

	_layerAdd: function (e) {
		var map = e.target;

		// check in case layer gets added and then removed before the map is ready
		if (!map.hasLayer(this)) { return; }

		this._map = map;
		this._zoomAnimated = map._zoomAnimated;

		if (this.getEvents) {
			var events = this.getEvents();
			map.on(events, this);
			this.once('remove', function () {
				map.off(events, this);
			}, this);
		}

		this.onAdd(map);

		if (this.getAttribution && map.attributionControl) {
			map.attributionControl.addAttribution(this.getAttribution());
		}

		this.fire('add');
		map.fire('layeradd', {layer: this});
	}
});

/* @section Extension methods
 * @uninheritable
 *
 * Every layer should extend from `L.Layer` and (re-)implement the following methods.
 *
 * @method onAdd(map: Map): this
 * Should contain code that creates DOM elements for the layer, adds them to `map panes` where they should belong and puts listeners on relevant map events. Called on [`map.addLayer(layer)`](#map-addlayer).
 *
 * @method onRemove(map: Map): this
 * Should contain all clean up code that removes the layer's elements from the DOM and removes listeners previously added in [`onAdd`](#layer-onadd). Called on [`map.removeLayer(layer)`](#map-removelayer).
 *
 * @method getEvents(): Object
 * This optional method should return an object like `{ viewreset: this._reset }` for [`addEventListener`](#evented-addeventlistener). The event handlers in this object will be automatically added and removed from the map with your layer.
 *
 * @method getAttribution(): String
 * This optional method should return a string containing HTML to be shown on the `Attribution control` whenever the layer is visible.
 *
 * @method beforeAdd(map: Map): this
 * Optional method. Called on [`map.addLayer(layer)`](#map-addlayer), before the layer is added to the map, before events are initialized, without waiting until the map is in a usable state. Use for early initialization only.
 */


/* @namespace Map
 * @section Layer events
 *
 * @event layeradd: LayerEvent
 * Fired when a new layer is added to the map.
 *
 * @event layerremove: LayerEvent
 * Fired when some layer is removed from the map
 *
 * @section Methods for Layers and Controls
 */
Map.include({
	// @method addLayer(layer: Layer): this
	// Adds the given layer to the map
	addLayer: function (layer) {
		if (!layer._layerAdd) {
			throw new Error('The provided object is not a Layer.');
		}

		var id = stamp(layer);
		if (this._layers[id]) { return this; }
		this._layers[id] = layer;

		layer._mapToAdd = this;

		if (layer.beforeAdd) {
			layer.beforeAdd(this);
		}

		this.whenReady(layer._layerAdd, layer);

		return this;
	},

	// @method removeLayer(layer: Layer): this
	// Removes the given layer from the map.
	removeLayer: function (layer) {
		var id = stamp(layer);

		if (!this._layers[id]) { return this; }

		if (this._loaded) {
			layer.onRemove(this);
		}

		if (layer.getAttribution && this.attributionControl) {
			this.attributionControl.removeAttribution(layer.getAttribution());
		}

		delete this._layers[id];

		if (this._loaded) {
			this.fire('layerremove', {layer: layer});
			layer.fire('remove');
		}

		layer._map = layer._mapToAdd = null;

		return this;
	},

	// @method hasLayer(layer: Layer): Boolean
	// Returns `true` if the given layer is currently added to the map
	hasLayer: function (layer) {
		return !!layer && (stamp(layer) in this._layers);
	},

	/* @method eachLayer(fn: Function, context?: Object): this
	 * Iterates over the layers of the map, optionally specifying context of the iterator function.
	 * ```
	 * map.eachLayer(function(layer){
	 *     layer.bindPopup('Hello');
	 * });
	 * ```
	 */
	eachLayer: function (method, context) {
		for (var i in this._layers) {
			method.call(context, this._layers[i]);
		}
		return this;
	},

	_addLayers: function (layers) {
		layers = layers ? (isArray(layers) ? layers : [layers]) : [];

		for (var i = 0, len = layers.length; i < len; i++) {
			this.addLayer(layers[i]);
		}
	},

	_addZoomLimit: function (layer) {
		if (isNaN(layer.options.maxZoom) || !isNaN(layer.options.minZoom)) {
			this._zoomBoundLayers[stamp(layer)] = layer;
			this._updateZoomLevels();
		}
	},

	_removeZoomLimit: function (layer) {
		var id = stamp(layer);

		if (this._zoomBoundLayers[id]) {
			delete this._zoomBoundLayers[id];
			this._updateZoomLevels();
		}
	},

	_updateZoomLevels: function () {
		var minZoom = Infinity,
		    maxZoom = -Infinity,
		    oldZoomSpan = this._getZoomSpan();

		for (var i in this._zoomBoundLayers) {
			var options = this._zoomBoundLayers[i].options;

			minZoom = options.minZoom === undefined ? minZoom : Math.min(minZoom, options.minZoom);
			maxZoom = options.maxZoom === undefined ? maxZoom : Math.max(maxZoom, options.maxZoom);
		}

		this._layersMaxZoom = maxZoom === -Infinity ? undefined : maxZoom;
		this._layersMinZoom = minZoom === Infinity ? undefined : minZoom;

		// @section Map state change events
		// @event zoomlevelschange: Event
		// Fired when the number of zoomlevels on the map is changed due
		// to adding or removing a layer.
		if (oldZoomSpan !== this._getZoomSpan()) {
			this.fire('zoomlevelschange');
		}

		if (this.options.maxZoom === undefined && this._layersMaxZoom && this.getZoom() > this._layersMaxZoom) {
			this.setZoom(this._layersMaxZoom);
		}
		if (this.options.minZoom === undefined && this._layersMinZoom && this.getZoom() < this._layersMinZoom) {
			this.setZoom(this._layersMinZoom);
		}
	}
});

/*
 * @class LayerGroup
 * @aka L.LayerGroup
 * @inherits Layer
 *
 * Used to group several layers and handle them as one. If you add it to the map,
 * any layers added or removed from the group will be added/removed on the map as
 * well. Extends `Layer`.
 *
 * @example
 *
 * ```js
 * L.layerGroup([marker1, marker2])
 * 	.addLayer(polyline)
 * 	.addTo(map);
 * ```
 */

var LayerGroup = Layer.extend({

	initialize: function (layers, options) {
		setOptions(this, options);

		this._layers = {};

		var i, len;

		if (layers) {
			for (i = 0, len = layers.length; i < len; i++) {
				this.addLayer(layers[i]);
			}
		}
	},

	// @method addLayer(layer: Layer): this
	// Adds the given layer to the group.
	addLayer: function (layer) {
		var id = this.getLayerId(layer);

		this._layers[id] = layer;

		if (this._map) {
			this._map.addLayer(layer);
		}

		return this;
	},

	// @method removeLayer(layer: Layer): this
	// Removes the given layer from the group.
	// @alternative
	// @method removeLayer(id: Number): this
	// Removes the layer with the given internal ID from the group.
	removeLayer: function (layer) {
		var id = layer in this._layers ? layer : this.getLayerId(layer);

		if (this._map && this._layers[id]) {
			this._map.removeLayer(this._layers[id]);
		}

		delete this._layers[id];

		return this;
	},

	// @method hasLayer(layer: Layer): Boolean
	// Returns `true` if the given layer is currently added to the group.
	// @alternative
	// @method hasLayer(id: Number): Boolean
	// Returns `true` if the given internal ID is currently added to the group.
	hasLayer: function (layer) {
		return !!layer && (layer in this._layers || this.getLayerId(layer) in this._layers);
	},

	// @method clearLayers(): this
	// Removes all the layers from the group.
	clearLayers: function () {
		return this.eachLayer(this.removeLayer, this);
	},

	// @method invoke(methodName: String, …): this
	// Calls `methodName` on every layer contained in this group, passing any
	// additional parameters. Has no effect if the layers contained do not
	// implement `methodName`.
	invoke: function (methodName) {
		var args = Array.prototype.slice.call(arguments, 1),
		    i, layer;

		for (i in this._layers) {
			layer = this._layers[i];

			if (layer[methodName]) {
				layer[methodName].apply(layer, args);
			}
		}

		return this;
	},

	onAdd: function (map) {
		this.eachLayer(map.addLayer, map);
	},

	onRemove: function (map) {
		this.eachLayer(map.removeLayer, map);
	},

	// @method eachLayer(fn: Function, context?: Object): this
	// Iterates over the layers of the group, optionally specifying context of the iterator function.
	// ```js
	// group.eachLayer(function (layer) {
	// 	layer.bindPopup('Hello');
	// });
	// ```
	eachLayer: function (method, context) {
		for (var i in this._layers) {
			method.call(context, this._layers[i]);
		}
		return this;
	},

	// @method getLayer(id: Number): Layer
	// Returns the layer with the given internal ID.
	getLayer: function (id) {
		return this._layers[id];
	},

	// @method getLayers(): Layer[]
	// Returns an array of all the layers added to the group.
	getLayers: function () {
		var layers = [];
		this.eachLayer(layers.push, layers);
		return layers;
	},

	// @method setZIndex(zIndex: Number): this
	// Calls `setZIndex` on every layer contained in this group, passing the z-index.
	setZIndex: function (zIndex) {
		return this.invoke('setZIndex', zIndex);
	},

	// @method getLayerId(layer: Layer): Number
	// Returns the internal ID for a layer
	getLayerId: function (layer) {
		return stamp(layer);
	}
});


// @factory L.layerGroup(layers?: Layer[], options?: Object)
// Create a layer group, optionally given an initial set of layers and an `options` object.
var layerGroup = function (layers, options) {
	return new LayerGroup(layers, options);
};

/*
 * @class FeatureGroup
 * @aka L.FeatureGroup
 * @inherits LayerGroup
 *
 * Extended `LayerGroup` that makes it easier to do the same thing to all its member layers:
 *  * [`bindPopup`](#layer-bindpopup) binds a popup to all of the layers at once (likewise with [`bindTooltip`](#layer-bindtooltip))
 *  * Events are propagated to the `FeatureGroup`, so if the group has an event
 * handler, it will handle events from any of the layers. This includes mouse events
 * and custom events.
 *  * Has `layeradd` and `layerremove` events
 *
 * @example
 *
 * ```js
 * L.featureGroup([marker1, marker2, polyline])
 * 	.bindPopup('Hello world!')
 * 	.on('click', function() { alert('Clicked on a member of the group!'); })
 * 	.addTo(map);
 * ```
 */

var FeatureGroup = LayerGroup.extend({

	addLayer: function (layer) {
		if (this.hasLayer(layer)) {
			return this;
		}

		layer.addEventParent(this);

		LayerGroup.prototype.addLayer.call(this, layer);

		// @event layeradd: LayerEvent
		// Fired when a layer is added to this `FeatureGroup`
		return this.fire('layeradd', {layer: layer});
	},

	removeLayer: function (layer) {
		if (!this.hasLayer(layer)) {
			return this;
		}
		if (layer in this._layers) {
			layer = this._layers[layer];
		}

		layer.removeEventParent(this);

		LayerGroup.prototype.removeLayer.call(this, layer);

		// @event layerremove: LayerEvent
		// Fired when a layer is removed from this `FeatureGroup`
		return this.fire('layerremove', {layer: layer});
	},

	// @method setStyle(style: Path options): this
	// Sets the given path options to each layer of the group that has a `setStyle` method.
	setStyle: function (style) {
		return this.invoke('setStyle', style);
	},

	// @method bringToFront(): this
	// Brings the layer group to the top of all other layers
	bringToFront: function () {
		return this.invoke('bringToFront');
	},

	// @method bringToBack(): this
	// Brings the layer group to the back of all other layers
	bringToBack: function () {
		return this.invoke('bringToBack');
	},

	// @method getBounds(): LatLngBounds
	// Returns the LatLngBounds of the Feature Group (created from bounds and coordinates of its children).
	getBounds: function () {
		var bounds = new LatLngBounds();

		for (var id in this._layers) {
			var layer = this._layers[id];
			bounds.extend(layer.getBounds ? layer.getBounds() : layer.getLatLng());
		}
		return bounds;
	}
});

// @factory L.featureGroup(layers: Layer[])
// Create a feature group, optionally given an initial set of layers.
var featureGroup = function (layers) {
	return new FeatureGroup(layers);
};

/*
 * @class Icon
 * @aka L.Icon
 *
 * Represents an icon to provide when creating a marker.
 *
 * @example
 *
 * ```js
 * var myIcon = L.icon({
 *     iconUrl: 'my-icon.png',
 *     iconRetinaUrl: 'my-icon@2x.png',
 *     iconSize: [38, 95],
 *     iconAnchor: [22, 94],
 *     popupAnchor: [-3, -76],
 *     shadowUrl: 'my-icon-shadow.png',
 *     shadowRetinaUrl: 'my-icon-shadow@2x.png',
 *     shadowSize: [68, 95],
 *     shadowAnchor: [22, 94]
 * });
 *
 * L.marker([50.505, 30.57], {icon: myIcon}).addTo(map);
 * ```
 *
 * `L.Icon.Default` extends `L.Icon` and is the blue icon Leaflet uses for markers by default.
 *
 */

var Icon = Class.extend({

	/* @section
	 * @aka Icon options
	 *
	 * @option iconUrl: String = null
	 * **(required)** The URL to the icon image (absolute or relative to your script path).
	 *
	 * @option iconRetinaUrl: String = null
	 * The URL to a retina sized version of the icon image (absolute or relative to your
	 * script path). Used for Retina screen devices.
	 *
	 * @option iconSize: Point = null
	 * Size of the icon image in pixels.
	 *
	 * @option iconAnchor: Point = null
	 * The coordinates of the "tip" of the icon (relative to its top left corner). The icon
	 * will be aligned so that this point is at the marker's geographical location. Centered
	 * by default if size is specified, also can be set in CSS with negative margins.
	 *
	 * @option popupAnchor: Point = [0, 0]
	 * The coordinates of the point from which popups will "open", relative to the icon anchor.
	 *
	 * @option tooltipAnchor: Point = [0, 0]
	 * The coordinates of the point from which tooltips will "open", relative to the icon anchor.
	 *
	 * @option shadowUrl: String = null
	 * The URL to the icon shadow image. If not specified, no shadow image will be created.
	 *
	 * @option shadowRetinaUrl: String = null
	 *
	 * @option shadowSize: Point = null
	 * Size of the shadow image in pixels.
	 *
	 * @option shadowAnchor: Point = null
	 * The coordinates of the "tip" of the shadow (relative to its top left corner) (the same
	 * as iconAnchor if not specified).
	 *
	 * @option className: String = ''
	 * A custom class name to assign to both icon and shadow images. Empty by default.
	 */

	options: {
		popupAnchor: [0, 0],
		tooltipAnchor: [0, 0]
	},

	initialize: function (options) {
		setOptions(this, options);
	},

	// @method createIcon(oldIcon?: HTMLElement): HTMLElement
	// Called internally when the icon has to be shown, returns a `<img>` HTML element
	// styled according to the options.
	createIcon: function (oldIcon) {
		return this._createIcon('icon', oldIcon);
	},

	// @method createShadow(oldIcon?: HTMLElement): HTMLElement
	// As `createIcon`, but for the shadow beneath it.
	createShadow: function (oldIcon) {
		return this._createIcon('shadow', oldIcon);
	},

	_createIcon: function (name, oldIcon) {
		var src = this._getIconUrl(name);

		if (!src) {
			if (name === 'icon') {
				throw new Error('iconUrl not set in Icon options (see the docs).');
			}
			return null;
		}

		var img = this._createImg(src, oldIcon && oldIcon.tagName === 'IMG' ? oldIcon : null);
		this._setIconStyles(img, name);

		return img;
	},

	_setIconStyles: function (img, name) {
		var options = this.options;
		var sizeOption = options[name + 'Size'];

		if (typeof sizeOption === 'number') {
			sizeOption = [sizeOption, sizeOption];
		}

		var size = toPoint(sizeOption),
		    anchor = toPoint(name === 'shadow' && options.shadowAnchor || options.iconAnchor ||
		            size && size.divideBy(2, true));

		img.className = 'leaflet-marker-' + name + ' ' + (options.className || '');

		if (anchor) {
			img.style.marginLeft = (-anchor.x) + 'px';
			img.style.marginTop  = (-anchor.y) + 'px';
		}

		if (size) {
			img.style.width  = size.x + 'px';
			img.style.height = size.y + 'px';
		}
	},

	_createImg: function (src, el) {
		el = el || document.createElement('img');
		el.src = src;
		return el;
	},

	_getIconUrl: function (name) {
		return retina && this.options[name + 'RetinaUrl'] || this.options[name + 'Url'];
	}
});


// @factory L.icon(options: Icon options)
// Creates an icon instance with the given options.
function icon(options) {
	return new Icon(options);
}

/*
 * @miniclass Icon.Default (Icon)
 * @aka L.Icon.Default
 * @section
 *
 * A trivial subclass of `Icon`, represents the icon to use in `Marker`s when
 * no icon is specified. Points to the blue marker image distributed with Leaflet
 * releases.
 *
 * In order to customize the default icon, just change the properties of `L.Icon.Default.prototype.options`
 * (which is a set of `Icon options`).
 *
 * If you want to _completely_ replace the default icon, override the
 * `L.Marker.prototype.options.icon` with your own icon instead.
 */

var IconDefault = Icon.extend({

	options: {
		iconUrl:       'marker-icon.png',
		iconRetinaUrl: 'marker-icon-2x.png',
		shadowUrl:     'marker-shadow.png',
		iconSize:    [25, 41],
		iconAnchor:  [12, 41],
		popupAnchor: [1, -34],
		tooltipAnchor: [16, -28],
		shadowSize:  [41, 41]
	},

	_getIconUrl: function (name) {
		if (!IconDefault.imagePath) {	// Deprecated, backwards-compatibility only
			IconDefault.imagePath = this._detectIconPath();
		}

		// @option imagePath: String
		// `Icon.Default` will try to auto-detect the location of the
		// blue icon images. If you are placing these images in a non-standard
		// way, set this option to point to the right path.
		return (this.options.imagePath || IconDefault.imagePath) + Icon.prototype._getIconUrl.call(this, name);
	},

	_detectIconPath: function () {
		var el = create$1('div',  'leaflet-default-icon-path', document.body);
		var path = getStyle(el, 'background-image') ||
		           getStyle(el, 'backgroundImage');	// IE8

		document.body.removeChild(el);

		if (path === null || path.indexOf('url') !== 0) {
			path = '';
		} else {
			path = path.replace(/^url\(["']?/, '').replace(/marker-icon\.png["']?\)$/, '');
		}

		return path;
	}
});

/*
 * L.Handler.MarkerDrag is used internally by L.Marker to make the markers draggable.
 */


/* @namespace Marker
 * @section Interaction handlers
 *
 * Interaction handlers are properties of a marker instance that allow you to control interaction behavior in runtime, enabling or disabling certain features such as dragging (see `Handler` methods). Example:
 *
 * ```js
 * marker.dragging.disable();
 * ```
 *
 * @property dragging: Handler
 * Marker dragging handler (by both mouse and touch). Only valid when the marker is on the map (Otherwise set [`marker.options.draggable`](#marker-draggable)).
 */

var MarkerDrag = Handler.extend({
	initialize: function (marker) {
		this._marker = marker;
	},

	addHooks: function () {
		var icon = this._marker._icon;

		if (!this._draggable) {
			this._draggable = new Draggable(icon, icon, true);
		}

		this._draggable.on({
			dragstart: this._onDragStart,
			predrag: this._onPreDrag,
			drag: this._onDrag,
			dragend: this._onDragEnd
		}, this).enable();

		addClass(icon, 'leaflet-marker-draggable');
	},

	removeHooks: function () {
		this._draggable.off({
			dragstart: this._onDragStart,
			predrag: this._onPreDrag,
			drag: this._onDrag,
			dragend: this._onDragEnd
		}, this).disable();

		if (this._marker._icon) {
			removeClass(this._marker._icon, 'leaflet-marker-draggable');
		}
	},

	moved: function () {
		return this._draggable && this._draggable._moved;
	},

	_adjustPan: function (e) {
		var marker = this._marker,
		    map = marker._map,
		    speed = this._marker.options.autoPanSpeed,
		    padding = this._marker.options.autoPanPadding,
		    iconPos = getPosition(marker._icon),
		    bounds = map.getPixelBounds(),
		    origin = map.getPixelOrigin();

		var panBounds = toBounds(
			bounds.min._subtract(origin).add(padding),
			bounds.max._subtract(origin).subtract(padding)
		);

		if (!panBounds.contains(iconPos)) {
			// Compute incremental movement
			var movement = toPoint(
				(Math.max(panBounds.max.x, iconPos.x) - panBounds.max.x) / (bounds.max.x - panBounds.max.x) -
				(Math.min(panBounds.min.x, iconPos.x) - panBounds.min.x) / (bounds.min.x - panBounds.min.x),

				(Math.max(panBounds.max.y, iconPos.y) - panBounds.max.y) / (bounds.max.y - panBounds.max.y) -
				(Math.min(panBounds.min.y, iconPos.y) - panBounds.min.y) / (bounds.min.y - panBounds.min.y)
			).multiplyBy(speed);

			map.panBy(movement, {animate: false});

			this._draggable._newPos._add(movement);
			this._draggable._startPos._add(movement);

			setPosition(marker._icon, this._draggable._newPos);
			this._onDrag(e);

			this._panRequest = requestAnimFrame(this._adjustPan.bind(this, e));
		}
	},

	_onDragStart: function () {
		// @section Dragging events
		// @event dragstart: Event
		// Fired when the user starts dragging the marker.

		// @event movestart: Event
		// Fired when the marker starts moving (because of dragging).

		this._oldLatLng = this._marker.getLatLng();
		this._marker
		    .closePopup()
		    .fire('movestart')
		    .fire('dragstart');
	},

	_onPreDrag: function (e) {
		if (this._marker.options.autoPan) {
			cancelAnimFrame(this._panRequest);
			this._panRequest = requestAnimFrame(this._adjustPan.bind(this, e));
		}
	},

	_onDrag: function (e) {
		var marker = this._marker,
		    shadow = marker._shadow,
		    iconPos = getPosition(marker._icon),
		    latlng = marker._map.layerPointToLatLng(iconPos);

		// update shadow position
		if (shadow) {
			setPosition(shadow, iconPos);
		}

		marker._latlng = latlng;
		e.latlng = latlng;
		e.oldLatLng = this._oldLatLng;

		// @event drag: Event
		// Fired repeatedly while the user drags the marker.
		marker
		    .fire('move', e)
		    .fire('drag', e);
	},

	_onDragEnd: function (e) {
		// @event dragend: DragEndEvent
		// Fired when the user stops dragging the marker.

		 cancelAnimFrame(this._panRequest);

		// @event moveend: Event
		// Fired when the marker stops moving (because of dragging).
		delete this._oldLatLng;
		this._marker
		    .fire('moveend')
		    .fire('dragend', e);
	}
});

/*
 * @class Marker
 * @inherits Interactive layer
 * @aka L.Marker
 * L.Marker is used to display clickable/draggable icons on the map. Extends `Layer`.
 *
 * @example
 *
 * ```js
 * L.marker([50.5, 30.5]).addTo(map);
 * ```
 */

var Marker = Layer.extend({

	// @section
	// @aka Marker options
	options: {
		// @option icon: Icon = *
		// Icon instance to use for rendering the marker.
		// See [Icon documentation](#L.Icon) for details on how to customize the marker icon.
		// If not specified, a common instance of `L.Icon.Default` is used.
		icon: new IconDefault(),

		// Option inherited from "Interactive layer" abstract class
		interactive: true,

		// @option keyboard: Boolean = true
		// Whether the marker can be tabbed to with a keyboard and clicked by pressing enter.
		keyboard: true,

		// @option title: String = ''
		// Text for the browser tooltip that appear on marker hover (no tooltip by default).
		title: '',

		// @option alt: String = ''
		// Text for the `alt` attribute of the icon image (useful for accessibility).
		alt: '',

		// @option zIndexOffset: Number = 0
		// By default, marker images zIndex is set automatically based on its latitude. Use this option if you want to put the marker on top of all others (or below), specifying a high value like `1000` (or high negative value, respectively).
		zIndexOffset: 0,

		// @option opacity: Number = 1.0
		// The opacity of the marker.
		opacity: 1,

		// @option riseOnHover: Boolean = false
		// If `true`, the marker will get on top of others when you hover the mouse over it.
		riseOnHover: false,

		// @option riseOffset: Number = 250
		// The z-index offset used for the `riseOnHover` feature.
		riseOffset: 250,

		// @option pane: String = 'markerPane'
		// `Map pane` where the markers icon will be added.
		pane: 'markerPane',

		// @option bubblingMouseEvents: Boolean = false
		// When `true`, a mouse event on this marker will trigger the same event on the map
		// (unless [`L.DomEvent.stopPropagation`](#domevent-stoppropagation) is used).
		bubblingMouseEvents: false,

		// @section Draggable marker options
		// @option draggable: Boolean = false
		// Whether the marker is draggable with mouse/touch or not.
		draggable: false,

		// @option autoPan: Boolean = false
		// Whether to pan the map when dragging this marker near its edge or not.
		autoPan: false,

		// @option autoPanPadding: Point = Point(50, 50)
		// Distance (in pixels to the left/right and to the top/bottom) of the
		// map edge to start panning the map.
		autoPanPadding: [50, 50],

		// @option autoPanSpeed: Number = 10
		// Number of pixels the map should pan by.
		autoPanSpeed: 10
	},

	/* @section
	 *
	 * In addition to [shared layer methods](#Layer) like `addTo()` and `remove()` and [popup methods](#Popup) like bindPopup() you can also use the following methods:
	 */

	initialize: function (latlng, options) {
		setOptions(this, options);
		this._latlng = toLatLng(latlng);
	},

	onAdd: function (map) {
		this._zoomAnimated = this._zoomAnimated && map.options.markerZoomAnimation;

		if (this._zoomAnimated) {
			map.on('zoomanim', this._animateZoom, this);
		}

		this._initIcon();
		this.update();
	},

	onRemove: function (map) {
		if (this.dragging && this.dragging.enabled()) {
			this.options.draggable = true;
			this.dragging.removeHooks();
		}
		delete this.dragging;

		if (this._zoomAnimated) {
			map.off('zoomanim', this._animateZoom, this);
		}

		this._removeIcon();
		this._removeShadow();
	},

	getEvents: function () {
		return {
			zoom: this.update,
			viewreset: this.update
		};
	},

	// @method getLatLng: LatLng
	// Returns the current geographical position of the marker.
	getLatLng: function () {
		return this._latlng;
	},

	// @method setLatLng(latlng: LatLng): this
	// Changes the marker position to the given point.
	setLatLng: function (latlng) {
		var oldLatLng = this._latlng;
		this._latlng = toLatLng(latlng);
		this.update();

		// @event move: Event
		// Fired when the marker is moved via [`setLatLng`](#marker-setlatlng) or by [dragging](#marker-dragging). Old and new coordinates are included in event arguments as `oldLatLng`, `latlng`.
		return this.fire('move', {oldLatLng: oldLatLng, latlng: this._latlng});
	},

	// @method setZIndexOffset(offset: Number): this
	// Changes the [zIndex offset](#marker-zindexoffset) of the marker.
	setZIndexOffset: function (offset) {
		this.options.zIndexOffset = offset;
		return this.update();
	},

	// @method setIcon(icon: Icon): this
	// Changes the marker icon.
	setIcon: function (icon) {

		this.options.icon = icon;

		if (this._map) {
			this._initIcon();
			this.update();
		}

		if (this._popup) {
			this.bindPopup(this._popup, this._popup.options);
		}

		return this;
	},

	getElement: function () {
		return this._icon;
	},

	update: function () {

		if (this._icon && this._map) {
			var pos = this._map.latLngToLayerPoint(this._latlng).round();
			this._setPos(pos);
		}

		return this;
	},

	_initIcon: function () {
		var options = this.options,
		    classToAdd = 'leaflet-zoom-' + (this._zoomAnimated ? 'animated' : 'hide');

		var icon = options.icon.createIcon(this._icon),
		    addIcon = false;

		// if we're not reusing the icon, remove the old one and init new one
		if (icon !== this._icon) {
			if (this._icon) {
				this._removeIcon();
			}
			addIcon = true;

			if (options.title) {
				icon.title = options.title;
			}

			if (icon.tagName === 'IMG') {
				icon.alt = options.alt || '';
			}
		}

		addClass(icon, classToAdd);

		if (options.keyboard) {
			icon.tabIndex = '0';
		}

		this._icon = icon;

		if (options.riseOnHover) {
			this.on({
				mouseover: this._bringToFront,
				mouseout: this._resetZIndex
			});
		}

		var newShadow = options.icon.createShadow(this._shadow),
		    addShadow = false;

		if (newShadow !== this._shadow) {
			this._removeShadow();
			addShadow = true;
		}

		if (newShadow) {
			addClass(newShadow, classToAdd);
			newShadow.alt = '';
		}
		this._shadow = newShadow;


		if (options.opacity < 1) {
			this._updateOpacity();
		}


		if (addIcon) {
			this.getPane().appendChild(this._icon);
		}
		this._initInteraction();
		if (newShadow && addShadow) {
			this.getPane('shadowPane').appendChild(this._shadow);
		}
	},

	_removeIcon: function () {
		if (this.options.riseOnHover) {
			this.off({
				mouseover: this._bringToFront,
				mouseout: this._resetZIndex
			});
		}

		remove(this._icon);
		this.removeInteractiveTarget(this._icon);

		this._icon = null;
	},

	_removeShadow: function () {
		if (this._shadow) {
			remove(this._shadow);
		}
		this._shadow = null;
	},

	_setPos: function (pos) {
		setPosition(this._icon, pos);

		if (this._shadow) {
			setPosition(this._shadow, pos);
		}

		this._zIndex = pos.y + this.options.zIndexOffset;

		this._resetZIndex();
	},

	_updateZIndex: function (offset) {
		this._icon.style.zIndex = this._zIndex + offset;
	},

	_animateZoom: function (opt) {
		var pos = this._map._latLngToNewLayerPoint(this._latlng, opt.zoom, opt.center).round();

		this._setPos(pos);
	},

	_initInteraction: function () {

		if (!this.options.interactive) { return; }

		addClass(this._icon, 'leaflet-interactive');

		this.addInteractiveTarget(this._icon);

		if (MarkerDrag) {
			var draggable = this.options.draggable;
			if (this.dragging) {
				draggable = this.dragging.enabled();
				this.dragging.disable();
			}

			this.dragging = new MarkerDrag(this);

			if (draggable) {
				this.dragging.enable();
			}
		}
	},

	// @method setOpacity(opacity: Number): this
	// Changes the opacity of the marker.
	setOpacity: function (opacity) {
		this.options.opacity = opacity;
		if (this._map) {
			this._updateOpacity();
		}

		return this;
	},

	_updateOpacity: function () {
		var opacity = this.options.opacity;

		setOpacity(this._icon, opacity);

		if (this._shadow) {
			setOpacity(this._shadow, opacity);
		}
	},

	_bringToFront: function () {
		this._updateZIndex(this.options.riseOffset);
	},

	_resetZIndex: function () {
		this._updateZIndex(0);
	},

	_getPopupAnchor: function () {
		return this.options.icon.options.popupAnchor;
	},

	_getTooltipAnchor: function () {
		return this.options.icon.options.tooltipAnchor;
	}
});


// factory L.marker(latlng: LatLng, options? : Marker options)

// @factory L.marker(latlng: LatLng, options? : Marker options)
// Instantiates a Marker object given a geographical point and optionally an options object.
function marker(latlng, options) {
	return new Marker(latlng, options);
}

/*
 * @class Path
 * @aka L.Path
 * @inherits Interactive layer
 *
 * An abstract class that contains options and constants shared between vector
 * overlays (Polygon, Polyline, Circle). Do not use it directly. Extends `Layer`.
 */

var Path = Layer.extend({

	// @section
	// @aka Path options
	options: {
		// @option stroke: Boolean = true
		// Whether to draw stroke along the path. Set it to `false` to disable borders on polygons or circles.
		stroke: true,

		// @option color: String = '#3388ff'
		// Stroke color
		color: '#3388ff',

		// @option weight: Number = 3
		// Stroke width in pixels
		weight: 3,

		// @option opacity: Number = 1.0
		// Stroke opacity
		opacity: 1,

		// @option lineCap: String= 'round'
		// A string that defines [shape to be used at the end](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-linecap) of the stroke.
		lineCap: 'round',

		// @option lineJoin: String = 'round'
		// A string that defines [shape to be used at the corners](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-linejoin) of the stroke.
		lineJoin: 'round',

		// @option dashArray: String = null
		// A string that defines the stroke [dash pattern](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-dasharray). Doesn't work on `Canvas`-powered layers in [some old browsers](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/setLineDash#Browser_compatibility).
		dashArray: null,

		// @option dashOffset: String = null
		// A string that defines the [distance into the dash pattern to start the dash](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-dashoffset). Doesn't work on `Canvas`-powered layers in [some old browsers](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/setLineDash#Browser_compatibility).
		dashOffset: null,

		// @option fill: Boolean = depends
		// Whether to fill the path with color. Set it to `false` to disable filling on polygons or circles.
		fill: false,

		// @option fillColor: String = *
		// Fill color. Defaults to the value of the [`color`](#path-color) option
		fillColor: null,

		// @option fillOpacity: Number = 0.2
		// Fill opacity.
		fillOpacity: 0.2,

		// @option fillRule: String = 'evenodd'
		// A string that defines [how the inside of a shape](https://developer.mozilla.org/docs/Web/SVG/Attribute/fill-rule) is determined.
		fillRule: 'evenodd',

		// className: '',

		// Option inherited from "Interactive layer" abstract class
		interactive: true,

		// @option bubblingMouseEvents: Boolean = true
		// When `true`, a mouse event on this path will trigger the same event on the map
		// (unless [`L.DomEvent.stopPropagation`](#domevent-stoppropagation) is used).
		bubblingMouseEvents: true
	},

	beforeAdd: function (map) {
		// Renderer is set here because we need to call renderer.getEvents
		// before this.getEvents.
		this._renderer = map.getRenderer(this);
	},

	onAdd: function () {
		this._renderer._initPath(this);
		this._reset();
		this._renderer._addPath(this);
	},

	onRemove: function () {
		this._renderer._removePath(this);
	},

	// @method redraw(): this
	// Redraws the layer. Sometimes useful after you changed the coordinates that the path uses.
	redraw: function () {
		if (this._map) {
			this._renderer._updatePath(this);
		}
		return this;
	},

	// @method setStyle(style: Path options): this
	// Changes the appearance of a Path based on the options in the `Path options` object.
	setStyle: function (style) {
		setOptions(this, style);
		if (this._renderer) {
			this._renderer._updateStyle(this);
		}
		return this;
	},

	// @method bringToFront(): this
	// Brings the layer to the top of all path layers.
	bringToFront: function () {
		if (this._renderer) {
			this._renderer._bringToFront(this);
		}
		return this;
	},

	// @method bringToBack(): this
	// Brings the layer to the bottom of all path layers.
	bringToBack: function () {
		if (this._renderer) {
			this._renderer._bringToBack(this);
		}
		return this;
	},

	getElement: function () {
		return this._path;
	},

	_reset: function () {
		// defined in child classes
		this._project();
		this._update();
	},

	_clickTolerance: function () {
		// used when doing hit detection for Canvas layers
		return (this.options.stroke ? this.options.weight / 2 : 0) + this._renderer.options.tolerance;
	}
});

/*
 * @class CircleMarker
 * @aka L.CircleMarker
 * @inherits Path
 *
 * A circle of a fixed size with radius specified in pixels. Extends `Path`.
 */

var CircleMarker = Path.extend({

	// @section
	// @aka CircleMarker options
	options: {
		fill: true,

		// @option radius: Number = 10
		// Radius of the circle marker, in pixels
		radius: 10
	},

	initialize: function (latlng, options) {
		setOptions(this, options);
		this._latlng = toLatLng(latlng);
		this._radius = this.options.radius;
	},

	// @method setLatLng(latLng: LatLng): this
	// Sets the position of a circle marker to a new location.
	setLatLng: function (latlng) {
		this._latlng = toLatLng(latlng);
		this.redraw();
		return this.fire('move', {latlng: this._latlng});
	},

	// @method getLatLng(): LatLng
	// Returns the current geographical position of the circle marker
	getLatLng: function () {
		return this._latlng;
	},

	// @method setRadius(radius: Number): this
	// Sets the radius of a circle marker. Units are in pixels.
	setRadius: function (radius) {
		this.options.radius = this._radius = radius;
		return this.redraw();
	},

	// @method getRadius(): Number
	// Returns the current radius of the circle
	getRadius: function () {
		return this._radius;
	},

	setStyle : function (options) {
		var radius = options && options.radius || this._radius;
		Path.prototype.setStyle.call(this, options);
		this.setRadius(radius);
		return this;
	},

	_project: function () {
		this._point = this._map.latLngToLayerPoint(this._latlng);
		this._updateBounds();
	},

	_updateBounds: function () {
		var r = this._radius,
		    r2 = this._radiusY || r,
		    w = this._clickTolerance(),
		    p = [r + w, r2 + w];
		this._pxBounds = new Bounds(this._point.subtract(p), this._point.add(p));
	},

	_update: function () {
		if (this._map) {
			this._updatePath();
		}
	},

	_updatePath: function () {
		this._renderer._updateCircle(this);
	},

	_empty: function () {
		return this._radius && !this._renderer._bounds.intersects(this._pxBounds);
	},

	// Needed by the `Canvas` renderer for interactivity
	_containsPoint: function (p) {
		return p.distanceTo(this._point) <= this._radius + this._clickTolerance();
	}
});


// @factory L.circleMarker(latlng: LatLng, options?: CircleMarker options)
// Instantiates a circle marker object given a geographical point, and an optional options object.
function circleMarker(latlng, options) {
	return new CircleMarker(latlng, options);
}

/*
 * @class Circle
 * @aka L.Circle
 * @inherits CircleMarker
 *
 * A class for drawing circle overlays on a map. Extends `CircleMarker`.
 *
 * It's an approximation and starts to diverge from a real circle closer to poles (due to projection distortion).
 *
 * @example
 *
 * ```js
 * L.circle([50.5, 30.5], {radius: 200}).addTo(map);
 * ```
 */

var Circle = CircleMarker.extend({

	initialize: function (latlng, options, legacyOptions) {
		if (typeof options === 'number') {
			// Backwards compatibility with 0.7.x factory (latlng, radius, options?)
			options = extend({}, legacyOptions, {radius: options});
		}
		setOptions(this, options);
		this._latlng = toLatLng(latlng);

		if (isNaN(this.options.radius)) { throw new Error('Circle radius cannot be NaN'); }

		// @section
		// @aka Circle options
		// @option radius: Number; Radius of the circle, in meters.
		this._mRadius = this.options.radius;
	},

	// @method setRadius(radius: Number): this
	// Sets the radius of a circle. Units are in meters.
	setRadius: function (radius) {
		this._mRadius = radius;
		return this.redraw();
	},

	// @method getRadius(): Number
	// Returns the current radius of a circle. Units are in meters.
	getRadius: function () {
		return this._mRadius;
	},

	// @method getBounds(): LatLngBounds
	// Returns the `LatLngBounds` of the path.
	getBounds: function () {
		var half = [this._radius, this._radiusY || this._radius];

		return new LatLngBounds(
			this._map.layerPointToLatLng(this._point.subtract(half)),
			this._map.layerPointToLatLng(this._point.add(half)));
	},

	setStyle: Path.prototype.setStyle,

	_project: function () {

		var lng = this._latlng.lng,
		    lat = this._latlng.lat,
		    map = this._map,
		    crs = map.options.crs;

		if (crs.distance === Earth.distance) {
			var d = Math.PI / 180,
			    latR = (this._mRadius / Earth.R) / d,
			    top = map.project([lat + latR, lng]),
			    bottom = map.project([lat - latR, lng]),
			    p = top.add(bottom).divideBy(2),
			    lat2 = map.unproject(p).lat,
			    lngR = Math.acos((Math.cos(latR * d) - Math.sin(lat * d) * Math.sin(lat2 * d)) /
			            (Math.cos(lat * d) * Math.cos(lat2 * d))) / d;

			if (isNaN(lngR) || lngR === 0) {
				lngR = latR / Math.cos(Math.PI / 180 * lat); // Fallback for edge case, #2425
			}

			this._point = p.subtract(map.getPixelOrigin());
			this._radius = isNaN(lngR) ? 0 : p.x - map.project([lat2, lng - lngR]).x;
			this._radiusY = p.y - top.y;

		} else {
			var latlng2 = crs.unproject(crs.project(this._latlng).subtract([this._mRadius, 0]));

			this._point = map.latLngToLayerPoint(this._latlng);
			this._radius = this._point.x - map.latLngToLayerPoint(latlng2).x;
		}

		this._updateBounds();
	}
});

// @factory L.circle(latlng: LatLng, options?: Circle options)
// Instantiates a circle object given a geographical point, and an options object
// which contains the circle radius.
// @alternative
// @factory L.circle(latlng: LatLng, radius: Number, options?: Circle options)
// Obsolete way of instantiating a circle, for compatibility with 0.7.x code.
// Do not use in new applications or plugins.
function circle(latlng, options, legacyOptions) {
	return new Circle(latlng, options, legacyOptions);
}

/*
 * @class Polyline
 * @aka L.Polyline
 * @inherits Path
 *
 * A class for drawing polyline overlays on a map. Extends `Path`.
 *
 * @example
 *
 * ```js
 * // create a red polyline from an array of LatLng points
 * var latlngs = [
 * 	[45.51, -122.68],
 * 	[37.77, -122.43],
 * 	[34.04, -118.2]
 * ];
 *
 * var polyline = L.polyline(latlngs, {color: 'red'}).addTo(map);
 *
 * // zoom the map to the polyline
 * map.fitBounds(polyline.getBounds());
 * ```
 *
 * You can also pass a multi-dimensional array to represent a `MultiPolyline` shape:
 *
 * ```js
 * // create a red polyline from an array of arrays of LatLng points
 * var latlngs = [
 * 	[[45.51, -122.68],
 * 	 [37.77, -122.43],
 * 	 [34.04, -118.2]],
 * 	[[40.78, -73.91],
 * 	 [41.83, -87.62],
 * 	 [32.76, -96.72]]
 * ];
 * ```
 */


var Polyline = Path.extend({

	// @section
	// @aka Polyline options
	options: {
		// @option smoothFactor: Number = 1.0
		// How much to simplify the polyline on each zoom level. More means
		// better performance and smoother look, and less means more accurate representation.
		smoothFactor: 1.0,

		// @option noClip: Boolean = false
		// Disable polyline clipping.
		noClip: false
	},

	initialize: function (latlngs, options) {
		setOptions(this, options);
		this._setLatLngs(latlngs);
	},

	// @method getLatLngs(): LatLng[]
	// Returns an array of the points in the path, or nested arrays of points in case of multi-polyline.
	getLatLngs: function () {
		return this._latlngs;
	},

	// @method setLatLngs(latlngs: LatLng[]): this
	// Replaces all the points in the polyline with the given array of geographical points.
	setLatLngs: function (latlngs) {
		this._setLatLngs(latlngs);
		return this.redraw();
	},

	// @method isEmpty(): Boolean
	// Returns `true` if the Polyline has no LatLngs.
	isEmpty: function () {
		return !this._latlngs.length;
	},

	// @method closestLayerPoint(p: Point): Point
	// Returns the point closest to `p` on the Polyline.
	closestLayerPoint: function (p) {
		var minDistance = Infinity,
		    minPoint = null,
		    closest = _sqClosestPointOnSegment,
		    p1, p2;

		for (var j = 0, jLen = this._parts.length; j < jLen; j++) {
			var points = this._parts[j];

			for (var i = 1, len = points.length; i < len; i++) {
				p1 = points[i - 1];
				p2 = points[i];

				var sqDist = closest(p, p1, p2, true);

				if (sqDist < minDistance) {
					minDistance = sqDist;
					minPoint = closest(p, p1, p2);
				}
			}
		}
		if (minPoint) {
			minPoint.distance = Math.sqrt(minDistance);
		}
		return minPoint;
	},

	// @method getCenter(): LatLng
	// Returns the center ([centroid](http://en.wikipedia.org/wiki/Centroid)) of the polyline.
	getCenter: function () {
		// throws error when not yet added to map as this center calculation requires projected coordinates
		if (!this._map) {
			throw new Error('Must add layer to map before using getCenter()');
		}

		var i, halfDist, segDist, dist, p1, p2, ratio,
		    points = this._rings[0],
		    len = points.length;

		if (!len) { return null; }

		// polyline centroid algorithm; only uses the first ring if there are multiple

		for (i = 0, halfDist = 0; i < len - 1; i++) {
			halfDist += points[i].distanceTo(points[i + 1]) / 2;
		}

		// The line is so small in the current view that all points are on the same pixel.
		if (halfDist === 0) {
			return this._map.layerPointToLatLng(points[0]);
		}

		for (i = 0, dist = 0; i < len - 1; i++) {
			p1 = points[i];
			p2 = points[i + 1];
			segDist = p1.distanceTo(p2);
			dist += segDist;

			if (dist > halfDist) {
				ratio = (dist - halfDist) / segDist;
				return this._map.layerPointToLatLng([
					p2.x - ratio * (p2.x - p1.x),
					p2.y - ratio * (p2.y - p1.y)
				]);
			}
		}
	},

	// @method getBounds(): LatLngBounds
	// Returns the `LatLngBounds` of the path.
	getBounds: function () {
		return this._bounds;
	},

	// @method addLatLng(latlng: LatLng, latlngs? LatLng[]): this
	// Adds a given point to the polyline. By default, adds to the first ring of
	// the polyline in case of a multi-polyline, but can be overridden by passing
	// a specific ring as a LatLng array (that you can earlier access with [`getLatLngs`](#polyline-getlatlngs)).
	addLatLng: function (latlng, latlngs) {
		latlngs = latlngs || this._defaultShape();
		latlng = toLatLng(latlng);
		latlngs.push(latlng);
		this._bounds.extend(latlng);
		return this.redraw();
	},

	_setLatLngs: function (latlngs) {
		this._bounds = new LatLngBounds();
		this._latlngs = this._convertLatLngs(latlngs);
	},

	_defaultShape: function () {
		return isFlat(this._latlngs) ? this._latlngs : this._latlngs[0];
	},

	// recursively convert latlngs input into actual LatLng instances; calculate bounds along the way
	_convertLatLngs: function (latlngs) {
		var result = [],
		    flat = isFlat(latlngs);

		for (var i = 0, len = latlngs.length; i < len; i++) {
			if (flat) {
				result[i] = toLatLng(latlngs[i]);
				this._bounds.extend(result[i]);
			} else {
				result[i] = this._convertLatLngs(latlngs[i]);
			}
		}

		return result;
	},

	_project: function () {
		var pxBounds = new Bounds();
		this._rings = [];
		this._projectLatlngs(this._latlngs, this._rings, pxBounds);

		var w = this._clickTolerance(),
		    p = new Point(w, w);

		if (this._bounds.isValid() && pxBounds.isValid()) {
			pxBounds.min._subtract(p);
			pxBounds.max._add(p);
			this._pxBounds = pxBounds;
		}
	},

	// recursively turns latlngs into a set of rings with projected coordinates
	_projectLatlngs: function (latlngs, result, projectedBounds) {
		var flat = latlngs[0] instanceof LatLng,
		    len = latlngs.length,
		    i, ring;

		if (flat) {
			ring = [];
			for (i = 0; i < len; i++) {
				ring[i] = this._map.latLngToLayerPoint(latlngs[i]);
				projectedBounds.extend(ring[i]);
			}
			result.push(ring);
		} else {
			for (i = 0; i < len; i++) {
				this._projectLatlngs(latlngs[i], result, projectedBounds);
			}
		}
	},

	// clip polyline by renderer bounds so that we have less to render for performance
	_clipPoints: function () {
		var bounds = this._renderer._bounds;

		this._parts = [];
		if (!this._pxBounds || !this._pxBounds.intersects(bounds)) {
			return;
		}

		if (this.options.noClip) {
			this._parts = this._rings;
			return;
		}

		var parts = this._parts,
		    i, j, k, len, len2, segment, points;

		for (i = 0, k = 0, len = this._rings.length; i < len; i++) {
			points = this._rings[i];

			for (j = 0, len2 = points.length; j < len2 - 1; j++) {
				segment = clipSegment(points[j], points[j + 1], bounds, j, true);

				if (!segment) { continue; }

				parts[k] = parts[k] || [];
				parts[k].push(segment[0]);

				// if segment goes out of screen, or it's the last one, it's the end of the line part
				if ((segment[1] !== points[j + 1]) || (j === len2 - 2)) {
					parts[k].push(segment[1]);
					k++;
				}
			}
		}
	},

	// simplify each clipped part of the polyline for performance
	_simplifyPoints: function () {
		var parts = this._parts,
		    tolerance = this.options.smoothFactor;

		for (var i = 0, len = parts.length; i < len; i++) {
			parts[i] = simplify(parts[i], tolerance);
		}
	},

	_update: function () {
		if (!this._map) { return; }

		this._clipPoints();
		this._simplifyPoints();
		this._updatePath();
	},

	_updatePath: function () {
		this._renderer._updatePoly(this);
	},

	// Needed by the `Canvas` renderer for interactivity
	_containsPoint: function (p, closed) {
		var i, j, k, len, len2, part,
		    w = this._clickTolerance();

		if (!this._pxBounds || !this._pxBounds.contains(p)) { return false; }

		// hit detection for polylines
		for (i = 0, len = this._parts.length; i < len; i++) {
			part = this._parts[i];

			for (j = 0, len2 = part.length, k = len2 - 1; j < len2; k = j++) {
				if (!closed && (j === 0)) { continue; }

				if (pointToSegmentDistance(p, part[k], part[j]) <= w) {
					return true;
				}
			}
		}
		return false;
	}
});

// @factory L.polyline(latlngs: LatLng[], options?: Polyline options)
// Instantiates a polyline object given an array of geographical points and
// optionally an options object. You can create a `Polyline` object with
// multiple separate lines (`MultiPolyline`) by passing an array of arrays
// of geographic points.
function polyline(latlngs, options) {
	return new Polyline(latlngs, options);
}

// Retrocompat. Allow plugins to support Leaflet versions before and after 1.1.
Polyline._flat = _flat;

/*
 * @class Polygon
 * @aka L.Polygon
 * @inherits Polyline
 *
 * A class for drawing polygon overlays on a map. Extends `Polyline`.
 *
 * Note that points you pass when creating a polygon shouldn't have an additional last point equal to the first one — it's better to filter out such points.
 *
 *
 * @example
 *
 * ```js
 * // create a red polygon from an array of LatLng points
 * var latlngs = [[37, -109.05],[41, -109.03],[41, -102.05],[37, -102.04]];
 *
 * var polygon = L.polygon(latlngs, {color: 'red'}).addTo(map);
 *
 * // zoom the map to the polygon
 * map.fitBounds(polygon.getBounds());
 * ```
 *
 * You can also pass an array of arrays of latlngs, with the first array representing the outer shape and the other arrays representing holes in the outer shape:
 *
 * ```js
 * var latlngs = [
 *   [[37, -109.05],[41, -109.03],[41, -102.05],[37, -102.04]], // outer ring
 *   [[37.29, -108.58],[40.71, -108.58],[40.71, -102.50],[37.29, -102.50]] // hole
 * ];
 * ```
 *
 * Additionally, you can pass a multi-dimensional array to represent a MultiPolygon shape.
 *
 * ```js
 * var latlngs = [
 *   [ // first polygon
 *     [[37, -109.05],[41, -109.03],[41, -102.05],[37, -102.04]], // outer ring
 *     [[37.29, -108.58],[40.71, -108.58],[40.71, -102.50],[37.29, -102.50]] // hole
 *   ],
 *   [ // second polygon
 *     [[41, -111.03],[45, -111.04],[45, -104.05],[41, -104.05]]
 *   ]
 * ];
 * ```
 */

var Polygon = Polyline.extend({

	options: {
		fill: true
	},

	isEmpty: function () {
		return !this._latlngs.length || !this._latlngs[0].length;
	},

	getCenter: function () {
		// throws error when not yet added to map as this center calculation requires projected coordinates
		if (!this._map) {
			throw new Error('Must add layer to map before using getCenter()');
		}

		var i, j, p1, p2, f, area, x, y, center,
		    points = this._rings[0],
		    len = points.length;

		if (!len) { return null; }

		// polygon centroid algorithm; only uses the first ring if there are multiple

		area = x = y = 0;

		for (i = 0, j = len - 1; i < len; j = i++) {
			p1 = points[i];
			p2 = points[j];

			f = p1.y * p2.x - p2.y * p1.x;
			x += (p1.x + p2.x) * f;
			y += (p1.y + p2.y) * f;
			area += f * 3;
		}

		if (area === 0) {
			// Polygon is so small that all points are on same pixel.
			center = points[0];
		} else {
			center = [x / area, y / area];
		}
		return this._map.layerPointToLatLng(center);
	},

	_convertLatLngs: function (latlngs) {
		var result = Polyline.prototype._convertLatLngs.call(this, latlngs),
		    len = result.length;

		// remove last point if it equals first one
		if (len >= 2 && result[0] instanceof LatLng && result[0].equals(result[len - 1])) {
			result.pop();
		}
		return result;
	},

	_setLatLngs: function (latlngs) {
		Polyline.prototype._setLatLngs.call(this, latlngs);
		if (isFlat(this._latlngs)) {
			this._latlngs = [this._latlngs];
		}
	},

	_defaultShape: function () {
		return isFlat(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0];
	},

	_clipPoints: function () {
		// polygons need a different clipping algorithm so we redefine that

		var bounds = this._renderer._bounds,
		    w = this.options.weight,
		    p = new Point(w, w);

		// increase clip padding by stroke width to avoid stroke on clip edges
		bounds = new Bounds(bounds.min.subtract(p), bounds.max.add(p));

		this._parts = [];
		if (!this._pxBounds || !this._pxBounds.intersects(bounds)) {
			return;
		}

		if (this.options.noClip) {
			this._parts = this._rings;
			return;
		}

		for (var i = 0, len = this._rings.length, clipped; i < len; i++) {
			clipped = clipPolygon(this._rings[i], bounds, true);
			if (clipped.length) {
				this._parts.push(clipped);
			}
		}
	},

	_updatePath: function () {
		this._renderer._updatePoly(this, true);
	},

	// Needed by the `Canvas` renderer for interactivity
	_containsPoint: function (p) {
		var inside = false,
		    part, p1, p2, i, j, k, len, len2;

		if (!this._pxBounds || !this._pxBounds.contains(p)) { return false; }

		// ray casting algorithm for detecting if point is in polygon
		for (i = 0, len = this._parts.length; i < len; i++) {
			part = this._parts[i];

			for (j = 0, len2 = part.length, k = len2 - 1; j < len2; k = j++) {
				p1 = part[j];
				p2 = part[k];

				if (((p1.y > p.y) !== (p2.y > p.y)) && (p.x < (p2.x - p1.x) * (p.y - p1.y) / (p2.y - p1.y) + p1.x)) {
					inside = !inside;
				}
			}
		}

		// also check if it's on polygon stroke
		return inside || Polyline.prototype._containsPoint.call(this, p, true);
	}

});


// @factory L.polygon(latlngs: LatLng[], options?: Polyline options)
function polygon(latlngs, options) {
	return new Polygon(latlngs, options);
}

/*
 * @class GeoJSON
 * @aka L.GeoJSON
 * @inherits FeatureGroup
 *
 * Represents a GeoJSON object or an array of GeoJSON objects. Allows you to parse
 * GeoJSON data and display it on the map. Extends `FeatureGroup`.
 *
 * @example
 *
 * ```js
 * L.geoJSON(data, {
 * 	style: function (feature) {
 * 		return {color: feature.properties.color};
 * 	}
 * }).bindPopup(function (layer) {
 * 	return layer.feature.properties.description;
 * }).addTo(map);
 * ```
 */

var GeoJSON = FeatureGroup.extend({

	/* @section
	 * @aka GeoJSON options
	 *
	 * @option pointToLayer: Function = *
	 * A `Function` defining how GeoJSON points spawn Leaflet layers. It is internally
	 * called when data is added, passing the GeoJSON point feature and its `LatLng`.
	 * The default is to spawn a default `Marker`:
	 * ```js
	 * function(geoJsonPoint, latlng) {
	 * 	return L.marker(latlng);
	 * }
	 * ```
	 *
	 * @option style: Function = *
	 * A `Function` defining the `Path options` for styling GeoJSON lines and polygons,
	 * called internally when data is added.
	 * The default value is to not override any defaults:
	 * ```js
	 * function (geoJsonFeature) {
	 * 	return {}
	 * }
	 * ```
	 *
	 * @option onEachFeature: Function = *
	 * A `Function` that will be called once for each created `Feature`, after it has
	 * been created and styled. Useful for attaching events and popups to features.
	 * The default is to do nothing with the newly created layers:
	 * ```js
	 * function (feature, layer) {}
	 * ```
	 *
	 * @option filter: Function = *
	 * A `Function` that will be used to decide whether to include a feature or not.
	 * The default is to include all features:
	 * ```js
	 * function (geoJsonFeature) {
	 * 	return true;
	 * }
	 * ```
	 * Note: dynamically changing the `filter` option will have effect only on newly
	 * added data. It will _not_ re-evaluate already included features.
	 *
	 * @option coordsToLatLng: Function = *
	 * A `Function` that will be used for converting GeoJSON coordinates to `LatLng`s.
	 * The default is the `coordsToLatLng` static method.
	 */

	initialize: function (geojson, options) {
		setOptions(this, options);

		this._layers = {};

		if (geojson) {
			this.addData(geojson);
		}
	},

	// @method addData( <GeoJSON> data ): this
	// Adds a GeoJSON object to the layer.
	addData: function (geojson) {
		var features = isArray(geojson) ? geojson : geojson.features,
		    i, len, feature;

		if (features) {
			for (i = 0, len = features.length; i < len; i++) {
				// only add this if geometry or geometries are set and not null
				feature = features[i];
				if (feature.geometries || feature.geometry || feature.features || feature.coordinates) {
					this.addData(feature);
				}
			}
			return this;
		}

		var options = this.options;

		if (options.filter && !options.filter(geojson)) { return this; }

		var layer = geometryToLayer(geojson, options);
		if (!layer) {
			return this;
		}
		layer.feature = asFeature(geojson);

		layer.defaultOptions = layer.options;
		this.resetStyle(layer);

		if (options.onEachFeature) {
			options.onEachFeature(geojson, layer);
		}

		return this.addLayer(layer);
	},

	// @method resetStyle( <Path> layer ): this
	// Resets the given vector layer's style to the original GeoJSON style, useful for resetting style after hover events.
	resetStyle: function (layer) {
		// reset any custom styles
		layer.options = extend({}, layer.defaultOptions);
		this._setLayerStyle(layer, this.options.style);
		return this;
	},

	// @method setStyle( <Function> style ): this
	// Changes styles of GeoJSON vector layers with the given style function.
	setStyle: function (style) {
		return this.eachLayer(function (layer) {
			this._setLayerStyle(layer, style);
		}, this);
	},

	_setLayerStyle: function (layer, style) {
		if (typeof style === 'function') {
			style = style(layer.feature);
		}
		if (layer.setStyle) {
			layer.setStyle(style);
		}
	}
});

// @section
// There are several static functions which can be called without instantiating L.GeoJSON:

// @function geometryToLayer(featureData: Object, options?: GeoJSON options): Layer
// Creates a `Layer` from a given GeoJSON feature. Can use a custom
// [`pointToLayer`](#geojson-pointtolayer) and/or [`coordsToLatLng`](#geojson-coordstolatlng)
// functions if provided as options.
function geometryToLayer(geojson, options) {

	var geometry = geojson.type === 'Feature' ? geojson.geometry : geojson,
	    coords = geometry ? geometry.coordinates : null,
	    layers = [],
	    pointToLayer = options && options.pointToLayer,
	    _coordsToLatLng = options && options.coordsToLatLng || coordsToLatLng,
	    latlng, latlngs, i, len;

	if (!coords && !geometry) {
		return null;
	}

	switch (geometry.type) {
	case 'Point':
		latlng = _coordsToLatLng(coords);
		return pointToLayer ? pointToLayer(geojson, latlng) : new Marker(latlng);

	case 'MultiPoint':
		for (i = 0, len = coords.length; i < len; i++) {
			latlng = _coordsToLatLng(coords[i]);
			layers.push(pointToLayer ? pointToLayer(geojson, latlng) : new Marker(latlng));
		}
		return new FeatureGroup(layers);

	case 'LineString':
	case 'MultiLineString':
		latlngs = coordsToLatLngs(coords, geometry.type === 'LineString' ? 0 : 1, _coordsToLatLng);
		return new Polyline(latlngs, options);

	case 'Polygon':
	case 'MultiPolygon':
		latlngs = coordsToLatLngs(coords, geometry.type === 'Polygon' ? 1 : 2, _coordsToLatLng);
		return new Polygon(latlngs, options);

	case 'GeometryCollection':
		for (i = 0, len = geometry.geometries.length; i < len; i++) {
			var layer = geometryToLayer({
				geometry: geometry.geometries[i],
				type: 'Feature',
				properties: geojson.properties
			}, options);

			if (layer) {
				layers.push(layer);
			}
		}
		return new FeatureGroup(layers);

	default:
		throw new Error('Invalid GeoJSON object.');
	}
}

// @function coordsToLatLng(coords: Array): LatLng
// Creates a `LatLng` object from an array of 2 numbers (longitude, latitude)
// or 3 numbers (longitude, latitude, altitude) used in GeoJSON for points.
function coordsToLatLng(coords) {
	return new LatLng(coords[1], coords[0], coords[2]);
}

// @function coordsToLatLngs(coords: Array, levelsDeep?: Number, coordsToLatLng?: Function): Array
// Creates a multidimensional array of `LatLng`s from a GeoJSON coordinates array.
// `levelsDeep` specifies the nesting level (0 is for an array of points, 1 for an array of arrays of points, etc., 0 by default).
// Can use a custom [`coordsToLatLng`](#geojson-coordstolatlng) function.
function coordsToLatLngs(coords, levelsDeep, _coordsToLatLng) {
	var latlngs = [];

	for (var i = 0, len = coords.length, latlng; i < len; i++) {
		latlng = levelsDeep ?
			coordsToLatLngs(coords[i], levelsDeep - 1, _coordsToLatLng) :
			(_coordsToLatLng || coordsToLatLng)(coords[i]);

		latlngs.push(latlng);
	}

	return latlngs;
}

// @function latLngToCoords(latlng: LatLng, precision?: Number): Array
// Reverse of [`coordsToLatLng`](#geojson-coordstolatlng)
function latLngToCoords(latlng, precision) {
	precision = typeof precision === 'number' ? precision : 6;
	return latlng.alt !== undefined ?
		[formatNum(latlng.lng, precision), formatNum(latlng.lat, precision), formatNum(latlng.alt, precision)] :
		[formatNum(latlng.lng, precision), formatNum(latlng.lat, precision)];
}

// @function latLngsToCoords(latlngs: Array, levelsDeep?: Number, closed?: Boolean): Array
// Reverse of [`coordsToLatLngs`](#geojson-coordstolatlngs)
// `closed` determines whether the first point should be appended to the end of the array to close the feature, only used when `levelsDeep` is 0. False by default.
function latLngsToCoords(latlngs, levelsDeep, closed, precision) {
	var coords = [];

	for (var i = 0, len = latlngs.length; i < len; i++) {
		coords.push(levelsDeep ?
			latLngsToCoords(latlngs[i], levelsDeep - 1, closed, precision) :
			latLngToCoords(latlngs[i], precision));
	}

	if (!levelsDeep && closed) {
		coords.push(coords[0]);
	}

	return coords;
}

function getFeature(layer, newGeometry) {
	return layer.feature ?
		extend({}, layer.feature, {geometry: newGeometry}) :
		asFeature(newGeometry);
}

// @function asFeature(geojson: Object): Object
// Normalize GeoJSON geometries/features into GeoJSON features.
function asFeature(geojson) {
	if (geojson.type === 'Feature' || geojson.type === 'FeatureCollection') {
		return geojson;
	}

	return {
		type: 'Feature',
		properties: {},
		geometry: geojson
	};
}

var PointToGeoJSON = {
	toGeoJSON: function (precision) {
		return getFeature(this, {
			type: 'Point',
			coordinates: latLngToCoords(this.getLatLng(), precision)
		});
	}
};

// @namespace Marker
// @method toGeoJSON(): Object
// Returns a [`GeoJSON`](http://en.wikipedia.org/wiki/GeoJSON) representation of the marker (as a GeoJSON `Point` Feature).
Marker.include(PointToGeoJSON);

// @namespace CircleMarker
// @method toGeoJSON(): Object
// Returns a [`GeoJSON`](http://en.wikipedia.org/wiki/GeoJSON) representation of the circle marker (as a GeoJSON `Point` Feature).
Circle.include(PointToGeoJSON);
CircleMarker.include(PointToGeoJSON);


// @namespace Polyline
// @method toGeoJSON(): Object
// Returns a [`GeoJSON`](http://en.wikipedia.org/wiki/GeoJSON) representation of the polyline (as a GeoJSON `LineString` or `MultiLineString` Feature).
Polyline.include({
	toGeoJSON: function (precision) {
		var multi = !isFlat(this._latlngs);

		var coords = latLngsToCoords(this._latlngs, multi ? 1 : 0, false, precision);

		return getFeature(this, {
			type: (multi ? 'Multi' : '') + 'LineString',
			coordinates: coords
		});
	}
});

// @namespace Polygon
// @method toGeoJSON(): Object
// Returns a [`GeoJSON`](http://en.wikipedia.org/wiki/GeoJSON) representation of the polygon (as a GeoJSON `Polygon` or `MultiPolygon` Feature).
Polygon.include({
	toGeoJSON: function (precision) {
		var holes = !isFlat(this._latlngs),
		    multi = holes && !isFlat(this._latlngs[0]);

		var coords = latLngsToCoords(this._latlngs, multi ? 2 : holes ? 1 : 0, true, precision);

		if (!holes) {
			coords = [coords];
		}

		return getFeature(this, {
			type: (multi ? 'Multi' : '') + 'Polygon',
			coordinates: coords
		});
	}
});


// @namespace LayerGroup
LayerGroup.include({
	toMultiPoint: function (precision) {
		var coords = [];

		this.eachLayer(function (layer) {
			coords.push(layer.toGeoJSON(precision).geometry.coordinates);
		});

		return getFeature(this, {
			type: 'MultiPoint',
			coordinates: coords
		});
	},

	// @method toGeoJSON(): Object
	// Returns a [`GeoJSON`](http://en.wikipedia.org/wiki/GeoJSON) representation of the layer group (as a GeoJSON `FeatureCollection`, `GeometryCollection`, or `MultiPoint`).
	toGeoJSON: function (precision) {

		var type = this.feature && this.feature.geometry && this.feature.geometry.type;

		if (type === 'MultiPoint') {
			return this.toMultiPoint(precision);
		}

		var isGeometryCollection = type === 'GeometryCollection',
		    jsons = [];

		this.eachLayer(function (layer) {
			if (layer.toGeoJSON) {
				var json = layer.toGeoJSON(precision);
				if (isGeometryCollection) {
					jsons.push(json.geometry);
				} else {
					var feature = asFeature(json);
					// Squash nested feature collections
					if (feature.type === 'FeatureCollection') {
						jsons.push.apply(jsons, feature.features);
					} else {
						jsons.push(feature);
					}
				}
			}
		});

		if (isGeometryCollection) {
			return getFeature(this, {
				geometries: jsons,
				type: 'GeometryCollection'
			});
		}

		return {
			type: 'FeatureCollection',
			features: jsons
		};
	}
});

// @namespace GeoJSON
// @factory L.geoJSON(geojson?: Object, options?: GeoJSON options)
// Creates a GeoJSON layer. Optionally accepts an object in
// [GeoJSON format](https://tools.ietf.org/html/rfc7946) to display on the map
// (you can alternatively add it later with `addData` method) and an `options` object.
function geoJSON(geojson, options) {
	return new GeoJSON(geojson, options);
}

// Backward compatibility.
var geoJson = geoJSON;

/*
 * @class ImageOverlay
 * @aka L.ImageOverlay
 * @inherits Interactive layer
 *
 * Used to load and display a single image over specific bounds of the map. Extends `Layer`.
 *
 * @example
 *
 * ```js
 * var imageUrl = 'http://www.lib.utexas.edu/maps/historical/newark_nj_1922.jpg',
 * 	imageBounds = [[40.712216, -74.22655], [40.773941, -74.12544]];
 * L.imageOverlay(imageUrl, imageBounds).addTo(map);
 * ```
 */

var ImageOverlay = Layer.extend({

	// @section
	// @aka ImageOverlay options
	options: {
		// @option opacity: Number = 1.0
		// The opacity of the image overlay.
		opacity: 1,

		// @option alt: String = ''
		// Text for the `alt` attribute of the image (useful for accessibility).
		alt: '',

		// @option interactive: Boolean = false
		// If `true`, the image overlay will emit [mouse events](#interactive-layer) when clicked or hovered.
		interactive: false,

		// @option crossOrigin: Boolean|String = false
		// Whether the crossOrigin attribute will be added to the image.
		// If a String is provided, the image will have its crossOrigin attribute set to the String provided. This is needed if you want to access image pixel data.
		// Refer to [CORS Settings](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for valid String values.
		crossOrigin: false,

		// @option errorOverlayUrl: String = ''
		// URL to the overlay image to show in place of the overlay that failed to load.
		errorOverlayUrl: '',

		// @option zIndex: Number = 1
		// The explicit [zIndex](https://developer.mozilla.org/docs/Web/CSS/CSS_Positioning/Understanding_z_index) of the overlay layer.
		zIndex: 1,

		// @option className: String = ''
		// A custom class name to assign to the image. Empty by default.
		className: ''
	},

	initialize: function (url, bounds, options) { // (String, LatLngBounds, Object)
		this._url = url;
		this._bounds = toLatLngBounds(bounds);

		setOptions(this, options);
	},

	onAdd: function () {
		if (!this._image) {
			this._initImage();

			if (this.options.opacity < 1) {
				this._updateOpacity();
			}
		}

		if (this.options.interactive) {
			addClass(this._image, 'leaflet-interactive');
			this.addInteractiveTarget(this._image);
		}

		this.getPane().appendChild(this._image);
		this._reset();
	},

	onRemove: function () {
		remove(this._image);
		if (this.options.interactive) {
			this.removeInteractiveTarget(this._image);
		}
	},

	// @method setOpacity(opacity: Number): this
	// Sets the opacity of the overlay.
	setOpacity: function (opacity) {
		this.options.opacity = opacity;

		if (this._image) {
			this._updateOpacity();
		}
		return this;
	},

	setStyle: function (styleOpts) {
		if (styleOpts.opacity) {
			this.setOpacity(styleOpts.opacity);
		}
		return this;
	},

	// @method bringToFront(): this
	// Brings the layer to the top of all overlays.
	bringToFront: function () {
		if (this._map) {
			toFront(this._image);
		}
		return this;
	},

	// @method bringToBack(): this
	// Brings the layer to the bottom of all overlays.
	bringToBack: function () {
		if (this._map) {
			toBack(this._image);
		}
		return this;
	},

	// @method setUrl(url: String): this
	// Changes the URL of the image.
	setUrl: function (url) {
		this._url = url;

		if (this._image) {
			this._image.src = url;
		}
		return this;
	},

	// @method setBounds(bounds: LatLngBounds): this
	// Update the bounds that this ImageOverlay covers
	setBounds: function (bounds) {
		this._bounds = toLatLngBounds(bounds);

		if (this._map) {
			this._reset();
		}
		return this;
	},

	getEvents: function () {
		var events = {
			zoom: this._reset,
			viewreset: this._reset
		};

		if (this._zoomAnimated) {
			events.zoomanim = this._animateZoom;
		}

		return events;
	},

	// @method setZIndex(value: Number): this
	// Changes the [zIndex](#imageoverlay-zindex) of the image overlay.
	setZIndex: function (value) {
		this.options.zIndex = value;
		this._updateZIndex();
		return this;
	},

	// @method getBounds(): LatLngBounds
	// Get the bounds that this ImageOverlay covers
	getBounds: function () {
		return this._bounds;
	},

	// @method getElement(): HTMLElement
	// Returns the instance of [`HTMLImageElement`](https://developer.mozilla.org/docs/Web/API/HTMLImageElement)
	// used by this overlay.
	getElement: function () {
		return this._image;
	},

	_initImage: function () {
		var wasElementSupplied = this._url.tagName === 'IMG';
		var img = this._image = wasElementSupplied ? this._url : create$1('img');

		addClass(img, 'leaflet-image-layer');
		if (this._zoomAnimated) { addClass(img, 'leaflet-zoom-animated'); }
		if (this.options.className) { addClass(img, this.options.className); }

		img.onselectstart = falseFn;
		img.onmousemove = falseFn;

		// @event load: Event
		// Fired when the ImageOverlay layer has loaded its image
		img.onload = bind(this.fire, this, 'load');
		img.onerror = bind(this._overlayOnError, this, 'error');

		if (this.options.crossOrigin || this.options.crossOrigin === '') {
			img.crossOrigin = this.options.crossOrigin === true ? '' : this.options.crossOrigin;
		}

		if (this.options.zIndex) {
			this._updateZIndex();
		}

		if (wasElementSupplied) {
			this._url = img.src;
			return;
		}

		img.src = this._url;
		img.alt = this.options.alt;
	},

	_animateZoom: function (e) {
		var scale = this._map.getZoomScale(e.zoom),
		    offset = this._map._latLngBoundsToNewLayerBounds(this._bounds, e.zoom, e.center).min;

		setTransform(this._image, offset, scale);
	},

	_reset: function () {
		var image = this._image,
		    bounds = new Bounds(
		        this._map.latLngToLayerPoint(this._bounds.getNorthWest()),
		        this._map.latLngToLayerPoint(this._bounds.getSouthEast())),
		    size = bounds.getSize();

		setPosition(image, bounds.min);

		image.style.width  = size.x + 'px';
		image.style.height = size.y + 'px';
	},

	_updateOpacity: function () {
		setOpacity(this._image, this.options.opacity);
	},

	_updateZIndex: function () {
		if (this._image && this.options.zIndex !== undefined && this.options.zIndex !== null) {
			this._image.style.zIndex = this.options.zIndex;
		}
	},

	_overlayOnError: function () {
		// @event error: Event
		// Fired when the ImageOverlay layer fails to load its image
		this.fire('error');

		var errorUrl = this.options.errorOverlayUrl;
		if (errorUrl && this._url !== errorUrl) {
			this._url = errorUrl;
			this._image.src = errorUrl;
		}
	}
});

// @factory L.imageOverlay(imageUrl: String, bounds: LatLngBounds, options?: ImageOverlay options)
// Instantiates an image overlay object given the URL of the image and the
// geographical bounds it is tied to.
var imageOverlay = function (url, bounds, options) {
	return new ImageOverlay(url, bounds, options);
};

/*
 * @class VideoOverlay
 * @aka L.VideoOverlay
 * @inherits ImageOverlay
 *
 * Used to load and display a video player over specific bounds of the map. Extends `ImageOverlay`.
 *
 * A video overlay uses the [`<video>`](https://developer.mozilla.org/docs/Web/HTML/Element/video)
 * HTML5 element.
 *
 * @example
 *
 * ```js
 * var videoUrl = 'https://www.mapbox.com/bites/00188/patricia_nasa.webm',
 * 	videoBounds = [[ 32, -130], [ 13, -100]];
 * L.videoOverlay(videoUrl, videoBounds ).addTo(map);
 * ```
 */

var VideoOverlay = ImageOverlay.extend({

	// @section
	// @aka VideoOverlay options
	options: {
		// @option autoplay: Boolean = true
		// Whether the video starts playing automatically when loaded.
		autoplay: true,

		// @option loop: Boolean = true
		// Whether the video will loop back to the beginning when played.
		loop: true
	},

	_initImage: function () {
		var wasElementSupplied = this._url.tagName === 'VIDEO';
		var vid = this._image = wasElementSupplied ? this._url : create$1('video');

		addClass(vid, 'leaflet-image-layer');
		if (this._zoomAnimated) { addClass(vid, 'leaflet-zoom-animated'); }

		vid.onselectstart = falseFn;
		vid.onmousemove = falseFn;

		// @event load: Event
		// Fired when the video has finished loading the first frame
		vid.onloadeddata = bind(this.fire, this, 'load');

		if (wasElementSupplied) {
			var sourceElements = vid.getElementsByTagName('source');
			var sources = [];
			for (var j = 0; j < sourceElements.length; j++) {
				sources.push(sourceElements[j].src);
			}

			this._url = (sourceElements.length > 0) ? sources : [vid.src];
			return;
		}

		if (!isArray(this._url)) { this._url = [this._url]; }

		vid.autoplay = !!this.options.autoplay;
		vid.loop = !!this.options.loop;
		for (var i = 0; i < this._url.length; i++) {
			var source = create$1('source');
			source.src = this._url[i];
			vid.appendChild(source);
		}
	}

	// @method getElement(): HTMLVideoElement
	// Returns the instance of [`HTMLVideoElement`](https://developer.mozilla.org/docs/Web/API/HTMLVideoElement)
	// used by this overlay.
});


// @factory L.videoOverlay(video: String|Array|HTMLVideoElement, bounds: LatLngBounds, options?: VideoOverlay options)
// Instantiates an image overlay object given the URL of the video (or array of URLs, or even a video element) and the
// geographical bounds it is tied to.

function videoOverlay(video, bounds, options) {
	return new VideoOverlay(video, bounds, options);
}

/*
 * @class DivOverlay
 * @inherits Layer
 * @aka L.DivOverlay
 * Base model for L.Popup and L.Tooltip. Inherit from it for custom popup like plugins.
 */

// @namespace DivOverlay
var DivOverlay = Layer.extend({

	// @section
	// @aka DivOverlay options
	options: {
		// @option offset: Point = Point(0, 7)
		// The offset of the popup position. Useful to control the anchor
		// of the popup when opening it on some overlays.
		offset: [0, 7],

		// @option className: String = ''
		// A custom CSS class name to assign to the popup.
		className: '',

		// @option pane: String = 'popupPane'
		// `Map pane` where the popup will be added.
		pane: 'popupPane'
	},

	initialize: function (options, source) {
		setOptions(this, options);

		this._source = source;
	},

	onAdd: function (map) {
		this._zoomAnimated = map._zoomAnimated;

		if (!this._container) {
			this._initLayout();
		}

		if (map._fadeAnimated) {
			setOpacity(this._container, 0);
		}

		clearTimeout(this._removeTimeout);
		this.getPane().appendChild(this._container);
		this.update();

		if (map._fadeAnimated) {
			setOpacity(this._container, 1);
		}

		this.bringToFront();
	},

	onRemove: function (map) {
		if (map._fadeAnimated) {
			setOpacity(this._container, 0);
			this._removeTimeout = setTimeout(bind(remove, undefined, this._container), 200);
		} else {
			remove(this._container);
		}
	},

	// @namespace Popup
	// @method getLatLng: LatLng
	// Returns the geographical point of popup.
	getLatLng: function () {
		return this._latlng;
	},

	// @method setLatLng(latlng: LatLng): this
	// Sets the geographical point where the popup will open.
	setLatLng: function (latlng) {
		this._latlng = toLatLng(latlng);
		if (this._map) {
			this._updatePosition();
			this._adjustPan();
		}
		return this;
	},

	// @method getContent: String|HTMLElement
	// Returns the content of the popup.
	getContent: function () {
		return this._content;
	},

	// @method setContent(htmlContent: String|HTMLElement|Function): this
	// Sets the HTML content of the popup. If a function is passed the source layer will be passed to the function. The function should return a `String` or `HTMLElement` to be used in the popup.
	setContent: function (content) {
		this._content = content;
		this.update();
		return this;
	},

	// @method getElement: String|HTMLElement
	// Alias for [getContent()](#popup-getcontent)
	getElement: function () {
		return this._container;
	},

	// @method update: null
	// Updates the popup content, layout and position. Useful for updating the popup after something inside changed, e.g. image loaded.
	update: function () {
		if (!this._map) { return; }

		this._container.style.visibility = 'hidden';

		this._updateContent();
		this._updateLayout();
		this._updatePosition();

		this._container.style.visibility = '';

		this._adjustPan();
	},

	getEvents: function () {
		var events = {
			zoom: this._updatePosition,
			viewreset: this._updatePosition
		};

		if (this._zoomAnimated) {
			events.zoomanim = this._animateZoom;
		}
		return events;
	},

	// @method isOpen: Boolean
	// Returns `true` when the popup is visible on the map.
	isOpen: function () {
		return !!this._map && this._map.hasLayer(this);
	},

	// @method bringToFront: this
	// Brings this popup in front of other popups (in the same map pane).
	bringToFront: function () {
		if (this._map) {
			toFront(this._container);
		}
		return this;
	},

	// @method bringToBack: this
	// Brings this popup to the back of other popups (in the same map pane).
	bringToBack: function () {
		if (this._map) {
			toBack(this._container);
		}
		return this;
	},

	_updateContent: function () {
		if (!this._content) { return; }

		var node = this._contentNode;
		var content = (typeof this._content === 'function') ? this._content(this._source || this) : this._content;

		if (typeof content === 'string') {
			node.innerHTML = content;
		} else {
			while (node.hasChildNodes()) {
				node.removeChild(node.firstChild);
			}
			node.appendChild(content);
		}
		this.fire('contentupdate');
	},

	_updatePosition: function () {
		if (!this._map) { return; }

		var pos = this._map.latLngToLayerPoint(this._latlng),
		    offset = toPoint(this.options.offset),
		    anchor = this._getAnchor();

		if (this._zoomAnimated) {
			setPosition(this._container, pos.add(anchor));
		} else {
			offset = offset.add(pos).add(anchor);
		}

		var bottom = this._containerBottom = -offset.y,
		    left = this._containerLeft = -Math.round(this._containerWidth / 2) + offset.x;

		// bottom position the popup in case the height of the popup changes (images loading etc)
		this._container.style.bottom = bottom + 'px';
		this._container.style.left = left + 'px';
	},

	_getAnchor: function () {
		return [0, 0];
	}

});

/*
 * @class Popup
 * @inherits DivOverlay
 * @aka L.Popup
 * Used to open popups in certain places of the map. Use [Map.openPopup](#map-openpopup) to
 * open popups while making sure that only one popup is open at one time
 * (recommended for usability), or use [Map.addLayer](#map-addlayer) to open as many as you want.
 *
 * @example
 *
 * If you want to just bind a popup to marker click and then open it, it's really easy:
 *
 * ```js
 * marker.bindPopup(popupContent).openPopup();
 * ```
 * Path overlays like polylines also have a `bindPopup` method.
 * Here's a more complicated way to open a popup on a map:
 *
 * ```js
 * var popup = L.popup()
 * 	.setLatLng(latlng)
 * 	.setContent('<p>Hello world!<br />This is a nice popup.</p>')
 * 	.openOn(map);
 * ```
 */


// @namespace Popup
var Popup = DivOverlay.extend({

	// @section
	// @aka Popup options
	options: {
		// @option maxWidth: Number = 300
		// Max width of the popup, in pixels.
		maxWidth: 300,

		// @option minWidth: Number = 50
		// Min width of the popup, in pixels.
		minWidth: 50,

		// @option maxHeight: Number = null
		// If set, creates a scrollable container of the given height
		// inside a popup if its content exceeds it.
		maxHeight: null,

		// @option autoPan: Boolean = true
		// Set it to `false` if you don't want the map to do panning animation
		// to fit the opened popup.
		autoPan: true,

		// @option autoPanPaddingTopLeft: Point = null
		// The margin between the popup and the top left corner of the map
		// view after autopanning was performed.
		autoPanPaddingTopLeft: null,

		// @option autoPanPaddingBottomRight: Point = null
		// The margin between the popup and the bottom right corner of the map
		// view after autopanning was performed.
		autoPanPaddingBottomRight: null,

		// @option autoPanPadding: Point = Point(5, 5)
		// Equivalent of setting both top left and bottom right autopan padding to the same value.
		autoPanPadding: [5, 5],

		// @option keepInView: Boolean = false
		// Set it to `true` if you want to prevent users from panning the popup
		// off of the screen while it is open.
		keepInView: false,

		// @option closeButton: Boolean = true
		// Controls the presence of a close button in the popup.
		closeButton: true,

		// @option autoClose: Boolean = true
		// Set it to `false` if you want to override the default behavior of
		// the popup closing when another popup is opened.
		autoClose: true,

		// @option closeOnEscapeKey: Boolean = true
		// Set it to `false` if you want to override the default behavior of
		// the ESC key for closing of the popup.
		closeOnEscapeKey: true,

		// @option closeOnClick: Boolean = *
		// Set it if you want to override the default behavior of the popup closing when user clicks
		// on the map. Defaults to the map's [`closePopupOnClick`](#map-closepopuponclick) option.

		// @option className: String = ''
		// A custom CSS class name to assign to the popup.
		className: ''
	},

	// @namespace Popup
	// @method openOn(map: Map): this
	// Adds the popup to the map and closes the previous one. The same as `map.openPopup(popup)`.
	openOn: function (map) {
		map.openPopup(this);
		return this;
	},

	onAdd: function (map) {
		DivOverlay.prototype.onAdd.call(this, map);

		// @namespace Map
		// @section Popup events
		// @event popupopen: PopupEvent
		// Fired when a popup is opened in the map
		map.fire('popupopen', {popup: this});

		if (this._source) {
			// @namespace Layer
			// @section Popup events
			// @event popupopen: PopupEvent
			// Fired when a popup bound to this layer is opened
			this._source.fire('popupopen', {popup: this}, true);
			// For non-path layers, we toggle the popup when clicking
			// again the layer, so prevent the map to reopen it.
			if (!(this._source instanceof Path)) {
				this._source.on('preclick', stopPropagation);
			}
		}
	},

	onRemove: function (map) {
		DivOverlay.prototype.onRemove.call(this, map);

		// @namespace Map
		// @section Popup events
		// @event popupclose: PopupEvent
		// Fired when a popup in the map is closed
		map.fire('popupclose', {popup: this});

		if (this._source) {
			// @namespace Layer
			// @section Popup events
			// @event popupclose: PopupEvent
			// Fired when a popup bound to this layer is closed
			this._source.fire('popupclose', {popup: this}, true);
			if (!(this._source instanceof Path)) {
				this._source.off('preclick', stopPropagation);
			}
		}
	},

	getEvents: function () {
		var events = DivOverlay.prototype.getEvents.call(this);

		if (this.options.closeOnClick !== undefined ? this.options.closeOnClick : this._map.options.closePopupOnClick) {
			events.preclick = this._close;
		}

		if (this.options.keepInView) {
			events.moveend = this._adjustPan;
		}

		return events;
	},

	_close: function () {
		if (this._map) {
			this._map.closePopup(this);
		}
	},

	_initLayout: function () {
		var prefix = 'leaflet-popup',
		    container = this._container = create$1('div',
			prefix + ' ' + (this.options.className || '') +
			' leaflet-zoom-animated');

		var wrapper = this._wrapper = create$1('div', prefix + '-content-wrapper', container);
		this._contentNode = create$1('div', prefix + '-content', wrapper);

		disableClickPropagation(wrapper);
		disableScrollPropagation(this._contentNode);
		on(wrapper, 'contextmenu', stopPropagation);

		this._tipContainer = create$1('div', prefix + '-tip-container', container);
		this._tip = create$1('div', prefix + '-tip', this._tipContainer);

		if (this.options.closeButton) {
			var closeButton = this._closeButton = create$1('a', prefix + '-close-button', container);
			closeButton.href = '#close';
			closeButton.innerHTML = '&#215;';

			on(closeButton, 'click', this._onCloseButtonClick, this);
		}
	},

	_updateLayout: function () {
		var container = this._contentNode,
		    style = container.style;

		style.width = '';
		style.whiteSpace = 'nowrap';

		var width = container.offsetWidth;
		width = Math.min(width, this.options.maxWidth);
		width = Math.max(width, this.options.minWidth);

		style.width = (width + 1) + 'px';
		style.whiteSpace = '';

		style.height = '';

		var height = container.offsetHeight,
		    maxHeight = this.options.maxHeight,
		    scrolledClass = 'leaflet-popup-scrolled';

		if (maxHeight && height > maxHeight) {
			style.height = maxHeight + 'px';
			addClass(container, scrolledClass);
		} else {
			removeClass(container, scrolledClass);
		}

		this._containerWidth = this._container.offsetWidth;
	},

	_animateZoom: function (e) {
		var pos = this._map._latLngToNewLayerPoint(this._latlng, e.zoom, e.center),
		    anchor = this._getAnchor();
		setPosition(this._container, pos.add(anchor));
	},

	_adjustPan: function () {
		if (!this.options.autoPan) { return; }
		if (this._map._panAnim) { this._map._panAnim.stop(); }

		var map = this._map,
		    marginBottom = parseInt(getStyle(this._container, 'marginBottom'), 10) || 0,
		    containerHeight = this._container.offsetHeight + marginBottom,
		    containerWidth = this._containerWidth,
		    layerPos = new Point(this._containerLeft, -containerHeight - this._containerBottom);

		layerPos._add(getPosition(this._container));

		var containerPos = map.layerPointToContainerPoint(layerPos),
		    padding = toPoint(this.options.autoPanPadding),
		    paddingTL = toPoint(this.options.autoPanPaddingTopLeft || padding),
		    paddingBR = toPoint(this.options.autoPanPaddingBottomRight || padding),
		    size = map.getSize(),
		    dx = 0,
		    dy = 0;

		if (containerPos.x + containerWidth + paddingBR.x > size.x) { // right
			dx = containerPos.x + containerWidth - size.x + paddingBR.x;
		}
		if (containerPos.x - dx - paddingTL.x < 0) { // left
			dx = containerPos.x - paddingTL.x;
		}
		if (containerPos.y + containerHeight + paddingBR.y > size.y) { // bottom
			dy = containerPos.y + containerHeight - size.y + paddingBR.y;
		}
		if (containerPos.y - dy - paddingTL.y < 0) { // top
			dy = containerPos.y - paddingTL.y;
		}

		// @namespace Map
		// @section Popup events
		// @event autopanstart: Event
		// Fired when the map starts autopanning when opening a popup.
		if (dx || dy) {
			map
			    .fire('autopanstart')
			    .panBy([dx, dy]);
		}
	},

	_onCloseButtonClick: function (e) {
		this._close();
		stop(e);
	},

	_getAnchor: function () {
		// Where should we anchor the popup on the source layer?
		return toPoint(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0]);
	}

});

// @namespace Popup
// @factory L.popup(options?: Popup options, source?: Layer)
// Instantiates a `Popup` object given an optional `options` object that describes its appearance and location and an optional `source` object that is used to tag the popup with a reference to the Layer to which it refers.
var popup = function (options, source) {
	return new Popup(options, source);
};


/* @namespace Map
 * @section Interaction Options
 * @option closePopupOnClick: Boolean = true
 * Set it to `false` if you don't want popups to close when user clicks the map.
 */
Map.mergeOptions({
	closePopupOnClick: true
});


// @namespace Map
// @section Methods for Layers and Controls
Map.include({
	// @method openPopup(popup: Popup): this
	// Opens the specified popup while closing the previously opened (to make sure only one is opened at one time for usability).
	// @alternative
	// @method openPopup(content: String|HTMLElement, latlng: LatLng, options?: Popup options): this
	// Creates a popup with the specified content and options and opens it in the given point on a map.
	openPopup: function (popup, latlng, options) {
		if (!(popup instanceof Popup)) {
			popup = new Popup(options).setContent(popup);
		}

		if (latlng) {
			popup.setLatLng(latlng);
		}

		if (this.hasLayer(popup)) {
			return this;
		}

		if (this._popup && this._popup.options.autoClose) {
			this.closePopup();
		}

		this._popup = popup;
		return this.addLayer(popup);
	},

	// @method closePopup(popup?: Popup): this
	// Closes the popup previously opened with [openPopup](#map-openpopup) (or the given one).
	closePopup: function (popup) {
		if (!popup || popup === this._popup) {
			popup = this._popup;
			this._popup = null;
		}
		if (popup) {
			this.removeLayer(popup);
		}
		return this;
	}
});

/*
 * @namespace Layer
 * @section Popup methods example
 *
 * All layers share a set of methods convenient for binding popups to it.
 *
 * ```js
 * var layer = L.Polygon(latlngs).bindPopup('Hi There!').addTo(map);
 * layer.openPopup();
 * layer.closePopup();
 * ```
 *
 * Popups will also be automatically opened when the layer is clicked on and closed when the layer is removed from the map or another popup is opened.
 */

// @section Popup methods
Layer.include({

	// @method bindPopup(content: String|HTMLElement|Function|Popup, options?: Popup options): this
	// Binds a popup to the layer with the passed `content` and sets up the
	// necessary event listeners. If a `Function` is passed it will receive
	// the layer as the first argument and should return a `String` or `HTMLElement`.
	bindPopup: function (content, options) {

		if (content instanceof Popup) {
			setOptions(content, options);
			this._popup = content;
			content._source = this;
		} else {
			if (!this._popup || options) {
				this._popup = new Popup(options, this);
			}
			this._popup.setContent(content);
		}

		if (!this._popupHandlersAdded) {
			this.on({
				click: this._openPopup,
				keypress: this._onKeyPress,
				remove: this.closePopup,
				move: this._movePopup
			});
			this._popupHandlersAdded = true;
		}

		return this;
	},

	// @method unbindPopup(): this
	// Removes the popup previously bound with `bindPopup`.
	unbindPopup: function () {
		if (this._popup) {
			this.off({
				click: this._openPopup,
				keypress: this._onKeyPress,
				remove: this.closePopup,
				move: this._movePopup
			});
			this._popupHandlersAdded = false;
			this._popup = null;
		}
		return this;
	},

	// @method openPopup(latlng?: LatLng): this
	// Opens the bound popup at the specified `latlng` or at the default popup anchor if no `latlng` is passed.
	openPopup: function (layer, latlng) {
		if (!(layer instanceof Layer)) {
			latlng = layer;
			layer = this;
		}

		if (layer instanceof FeatureGroup) {
			for (var id in this._layers) {
				layer = this._layers[id];
				break;
			}
		}

		if (!latlng) {
			latlng = layer.getCenter ? layer.getCenter() : layer.getLatLng();
		}

		if (this._popup && this._map) {
			// set popup source to this layer
			this._popup._source = layer;

			// update the popup (content, layout, ect...)
			this._popup.update();

			// open the popup on the map
			this._map.openPopup(this._popup, latlng);
		}

		return this;
	},

	// @method closePopup(): this
	// Closes the popup bound to this layer if it is open.
	closePopup: function () {
		if (this._popup) {
			this._popup._close();
		}
		return this;
	},

	// @method togglePopup(): this
	// Opens or closes the popup bound to this layer depending on its current state.
	togglePopup: function (target) {
		if (this._popup) {
			if (this._popup._map) {
				this.closePopup();
			} else {
				this.openPopup(target);
			}
		}
		return this;
	},

	// @method isPopupOpen(): boolean
	// Returns `true` if the popup bound to this layer is currently open.
	isPopupOpen: function () {
		return (this._popup ? this._popup.isOpen() : false);
	},

	// @method setPopupContent(content: String|HTMLElement|Popup): this
	// Sets the content of the popup bound to this layer.
	setPopupContent: function (content) {
		if (this._popup) {
			this._popup.setContent(content);
		}
		return this;
	},

	// @method getPopup(): Popup
	// Returns the popup bound to this layer.
	getPopup: function () {
		return this._popup;
	},

	_openPopup: function (e) {
		var layer = e.layer || e.target;

		if (!this._popup) {
			return;
		}

		if (!this._map) {
			return;
		}

		// prevent map click
		stop(e);

		// if this inherits from Path its a vector and we can just
		// open the popup at the new location
		if (layer instanceof Path) {
			this.openPopup(e.layer || e.target, e.latlng);
			return;
		}

		// otherwise treat it like a marker and figure out
		// if we should toggle it open/closed
		if (this._map.hasLayer(this._popup) && this._popup._source === layer) {
			this.closePopup();
		} else {
			this.openPopup(layer, e.latlng);
		}
	},

	_movePopup: function (e) {
		this._popup.setLatLng(e.latlng);
	},

	_onKeyPress: function (e) {
		if (e.originalEvent.keyCode === 13) {
			this._openPopup(e);
		}
	}
});

/*
 * @class Tooltip
 * @inherits DivOverlay
 * @aka L.Tooltip
 * Used to display small texts on top of map layers.
 *
 * @example
 *
 * ```js
 * marker.bindTooltip("my tooltip text").openTooltip();
 * ```
 * Note about tooltip offset. Leaflet takes two options in consideration
 * for computing tooltip offsetting:
 * - the `offset` Tooltip option: it defaults to [0, 0], and it's specific to one tooltip.
 *   Add a positive x offset to move the tooltip to the right, and a positive y offset to
 *   move it to the bottom. Negatives will move to the left and top.
 * - the `tooltipAnchor` Icon option: this will only be considered for Marker. You
 *   should adapt this value if you use a custom icon.
 */


// @namespace Tooltip
var Tooltip = DivOverlay.extend({

	// @section
	// @aka Tooltip options
	options: {
		// @option pane: String = 'tooltipPane'
		// `Map pane` where the tooltip will be added.
		pane: 'tooltipPane',

		// @option offset: Point = Point(0, 0)
		// Optional offset of the tooltip position.
		offset: [0, 0],

		// @option direction: String = 'auto'
		// Direction where to open the tooltip. Possible values are: `right`, `left`,
		// `top`, `bottom`, `center`, `auto`.
		// `auto` will dynamically switch between `right` and `left` according to the tooltip
		// position on the map.
		direction: 'auto',

		// @option permanent: Boolean = false
		// Whether to open the tooltip permanently or only on mouseover.
		permanent: false,

		// @option sticky: Boolean = false
		// If true, the tooltip will follow the mouse instead of being fixed at the feature center.
		sticky: false,

		// @option interactive: Boolean = false
		// If true, the tooltip will listen to the feature events.
		interactive: false,

		// @option opacity: Number = 0.9
		// Tooltip container opacity.
		opacity: 0.9
	},

	onAdd: function (map) {
		DivOverlay.prototype.onAdd.call(this, map);
		this.setOpacity(this.options.opacity);

		// @namespace Map
		// @section Tooltip events
		// @event tooltipopen: TooltipEvent
		// Fired when a tooltip is opened in the map.
		map.fire('tooltipopen', {tooltip: this});

		if (this._source) {
			// @namespace Layer
			// @section Tooltip events
			// @event tooltipopen: TooltipEvent
			// Fired when a tooltip bound to this layer is opened.
			this._source.fire('tooltipopen', {tooltip: this}, true);
		}
	},

	onRemove: function (map) {
		DivOverlay.prototype.onRemove.call(this, map);

		// @namespace Map
		// @section Tooltip events
		// @event tooltipclose: TooltipEvent
		// Fired when a tooltip in the map is closed.
		map.fire('tooltipclose', {tooltip: this});

		if (this._source) {
			// @namespace Layer
			// @section Tooltip events
			// @event tooltipclose: TooltipEvent
			// Fired when a tooltip bound to this layer is closed.
			this._source.fire('tooltipclose', {tooltip: this}, true);
		}
	},

	getEvents: function () {
		var events = DivOverlay.prototype.getEvents.call(this);

		if (touch && !this.options.permanent) {
			events.preclick = this._close;
		}

		return events;
	},

	_close: function () {
		if (this._map) {
			this._map.closeTooltip(this);
		}
	},

	_initLayout: function () {
		var prefix = 'leaflet-tooltip',
		    className = prefix + ' ' + (this.options.className || '') + ' leaflet-zoom-' + (this._zoomAnimated ? 'animated' : 'hide');

		this._contentNode = this._container = create$1('div', className);
	},

	_updateLayout: function () {},

	_adjustPan: function () {},

	_setPosition: function (pos) {
		var map = this._map,
		    container = this._container,
		    centerPoint = map.latLngToContainerPoint(map.getCenter()),
		    tooltipPoint = map.layerPointToContainerPoint(pos),
		    direction = this.options.direction,
		    tooltipWidth = container.offsetWidth,
		    tooltipHeight = container.offsetHeight,
		    offset = toPoint(this.options.offset),
		    anchor = this._getAnchor();

		if (direction === 'top') {
			pos = pos.add(toPoint(-tooltipWidth / 2 + offset.x, -tooltipHeight + offset.y + anchor.y, true));
		} else if (direction === 'bottom') {
			pos = pos.subtract(toPoint(tooltipWidth / 2 - offset.x, -offset.y, true));
		} else if (direction === 'center') {
			pos = pos.subtract(toPoint(tooltipWidth / 2 + offset.x, tooltipHeight / 2 - anchor.y + offset.y, true));
		} else if (direction === 'right' || direction === 'auto' && tooltipPoint.x < centerPoint.x) {
			direction = 'right';
			pos = pos.add(toPoint(offset.x + anchor.x, anchor.y - tooltipHeight / 2 + offset.y, true));
		} else {
			direction = 'left';
			pos = pos.subtract(toPoint(tooltipWidth + anchor.x - offset.x, tooltipHeight / 2 - anchor.y - offset.y, true));
		}

		removeClass(container, 'leaflet-tooltip-right');
		removeClass(container, 'leaflet-tooltip-left');
		removeClass(container, 'leaflet-tooltip-top');
		removeClass(container, 'leaflet-tooltip-bottom');
		addClass(container, 'leaflet-tooltip-' + direction);
		setPosition(container, pos);
	},

	_updatePosition: function () {
		var pos = this._map.latLngToLayerPoint(this._latlng);
		this._setPosition(pos);
	},

	setOpacity: function (opacity) {
		this.options.opacity = opacity;

		if (this._container) {
			setOpacity(this._container, opacity);
		}
	},

	_animateZoom: function (e) {
		var pos = this._map._latLngToNewLayerPoint(this._latlng, e.zoom, e.center);
		this._setPosition(pos);
	},

	_getAnchor: function () {
		// Where should we anchor the tooltip on the source layer?
		return toPoint(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [0, 0]);
	}

});

// @namespace Tooltip
// @factory L.tooltip(options?: Tooltip options, source?: Layer)
// Instantiates a Tooltip object given an optional `options` object that describes its appearance and location and an optional `source` object that is used to tag the tooltip with a reference to the Layer to which it refers.
var tooltip = function (options, source) {
	return new Tooltip(options, source);
};

// @namespace Map
// @section Methods for Layers and Controls
Map.include({

	// @method openTooltip(tooltip: Tooltip): this
	// Opens the specified tooltip.
	// @alternative
	// @method openTooltip(content: String|HTMLElement, latlng: LatLng, options?: Tooltip options): this
	// Creates a tooltip with the specified content and options and open it.
	openTooltip: function (tooltip, latlng, options) {
		if (!(tooltip instanceof Tooltip)) {
			tooltip = new Tooltip(options).setContent(tooltip);
		}

		if (latlng) {
			tooltip.setLatLng(latlng);
		}

		if (this.hasLayer(tooltip)) {
			return this;
		}

		return this.addLayer(tooltip);
	},

	// @method closeTooltip(tooltip?: Tooltip): this
	// Closes the tooltip given as parameter.
	closeTooltip: function (tooltip) {
		if (tooltip) {
			this.removeLayer(tooltip);
		}
		return this;
	}

});

/*
 * @namespace Layer
 * @section Tooltip methods example
 *
 * All layers share a set of methods convenient for binding tooltips to it.
 *
 * ```js
 * var layer = L.Polygon(latlngs).bindTooltip('Hi There!').addTo(map);
 * layer.openTooltip();
 * layer.closeTooltip();
 * ```
 */

// @section Tooltip methods
Layer.include({

	// @method bindTooltip(content: String|HTMLElement|Function|Tooltip, options?: Tooltip options): this
	// Binds a tooltip to the layer with the passed `content` and sets up the
	// necessary event listeners. If a `Function` is passed it will receive
	// the layer as the first argument and should return a `String` or `HTMLElement`.
	bindTooltip: function (content, options) {

		if (content instanceof Tooltip) {
			setOptions(content, options);
			this._tooltip = content;
			content._source = this;
		} else {
			if (!this._tooltip || options) {
				this._tooltip = new Tooltip(options, this);
			}
			this._tooltip.setContent(content);

		}

		this._initTooltipInteractions();

		if (this._tooltip.options.permanent && this._map && this._map.hasLayer(this)) {
			this.openTooltip();
		}

		return this;
	},

	// @method unbindTooltip(): this
	// Removes the tooltip previously bound with `bindTooltip`.
	unbindTooltip: function () {
		if (this._tooltip) {
			this._initTooltipInteractions(true);
			this.closeTooltip();
			this._tooltip = null;
		}
		return this;
	},

	_initTooltipInteractions: function (remove$$1) {
		if (!remove$$1 && this._tooltipHandlersAdded) { return; }
		var onOff = remove$$1 ? 'off' : 'on',
		    events = {
			remove: this.closeTooltip,
			move: this._moveTooltip
		    };
		if (!this._tooltip.options.permanent) {
			events.mouseover = this._openTooltip;
			events.mouseout = this.closeTooltip;
			if (this._tooltip.options.sticky) {
				events.mousemove = this._moveTooltip;
			}
			if (touch) {
				events.click = this._openTooltip;
			}
		} else {
			events.add = this._openTooltip;
		}
		this[onOff](events);
		this._tooltipHandlersAdded = !remove$$1;
	},

	// @method openTooltip(latlng?: LatLng): this
	// Opens the bound tooltip at the specified `latlng` or at the default tooltip anchor if no `latlng` is passed.
	openTooltip: function (layer, latlng) {
		if (!(layer instanceof Layer)) {
			latlng = layer;
			layer = this;
		}

		if (layer instanceof FeatureGroup) {
			for (var id in this._layers) {
				layer = this._layers[id];
				break;
			}
		}

		if (!latlng) {
			latlng = layer.getCenter ? layer.getCenter() : layer.getLatLng();
		}

		if (this._tooltip && this._map) {

			// set tooltip source to this layer
			this._tooltip._source = layer;

			// update the tooltip (content, layout, ect...)
			this._tooltip.update();

			// open the tooltip on the map
			this._map.openTooltip(this._tooltip, latlng);

			// Tooltip container may not be defined if not permanent and never
			// opened.
			if (this._tooltip.options.interactive && this._tooltip._container) {
				addClass(this._tooltip._container, 'leaflet-clickable');
				this.addInteractiveTarget(this._tooltip._container);
			}
		}

		return this;
	},

	// @method closeTooltip(): this
	// Closes the tooltip bound to this layer if it is open.
	closeTooltip: function () {
		if (this._tooltip) {
			this._tooltip._close();
			if (this._tooltip.options.interactive && this._tooltip._container) {
				removeClass(this._tooltip._container, 'leaflet-clickable');
				this.removeInteractiveTarget(this._tooltip._container);
			}
		}
		return this;
	},

	// @method toggleTooltip(): this
	// Opens or closes the tooltip bound to this layer depending on its current state.
	toggleTooltip: function (target) {
		if (this._tooltip) {
			if (this._tooltip._map) {
				this.closeTooltip();
			} else {
				this.openTooltip(target);
			}
		}
		return this;
	},

	// @method isTooltipOpen(): boolean
	// Returns `true` if the tooltip bound to this layer is currently open.
	isTooltipOpen: function () {
		return this._tooltip.isOpen();
	},

	// @method setTooltipContent(content: String|HTMLElement|Tooltip): this
	// Sets the content of the tooltip bound to this layer.
	setTooltipContent: function (content) {
		if (this._tooltip) {
			this._tooltip.setContent(content);
		}
		return this;
	},

	// @method getTooltip(): Tooltip
	// Returns the tooltip bound to this layer.
	getTooltip: function () {
		return this._tooltip;
	},

	_openTooltip: function (e) {
		var layer = e.layer || e.target;

		if (!this._tooltip || !this._map) {
			return;
		}
		this.openTooltip(layer, this._tooltip.options.sticky ? e.latlng : undefined);
	},

	_moveTooltip: function (e) {
		var latlng = e.latlng, containerPoint, layerPoint;
		if (this._tooltip.options.sticky && e.originalEvent) {
			containerPoint = this._map.mouseEventToContainerPoint(e.originalEvent);
			layerPoint = this._map.containerPointToLayerPoint(containerPoint);
			latlng = this._map.layerPointToLatLng(layerPoint);
		}
		this._tooltip.setLatLng(latlng);
	}
});

/*
 * @class DivIcon
 * @aka L.DivIcon
 * @inherits Icon
 *
 * Represents a lightweight icon for markers that uses a simple `<div>`
 * element instead of an image. Inherits from `Icon` but ignores the `iconUrl` and shadow options.
 *
 * @example
 * ```js
 * var myIcon = L.divIcon({className: 'my-div-icon'});
 * // you can set .my-div-icon styles in CSS
 *
 * L.marker([50.505, 30.57], {icon: myIcon}).addTo(map);
 * ```
 *
 * By default, it has a 'leaflet-div-icon' CSS class and is styled as a little white square with a shadow.
 */

var DivIcon = Icon.extend({
	options: {
		// @section
		// @aka DivIcon options
		iconSize: [12, 12], // also can be set through CSS

		// iconAnchor: (Point),
		// popupAnchor: (Point),

		// @option html: String = ''
		// Custom HTML code to put inside the div element, empty by default.
		html: false,

		// @option bgPos: Point = [0, 0]
		// Optional relative position of the background, in pixels
		bgPos: null,

		className: 'leaflet-div-icon'
	},

	createIcon: function (oldIcon) {
		var div = (oldIcon && oldIcon.tagName === 'DIV') ? oldIcon : document.createElement('div'),
		    options = this.options;

		div.innerHTML = options.html !== false ? options.html : '';

		if (options.bgPos) {
			var bgPos = toPoint(options.bgPos);
			div.style.backgroundPosition = (-bgPos.x) + 'px ' + (-bgPos.y) + 'px';
		}
		this._setIconStyles(div, 'icon');

		return div;
	},

	createShadow: function () {
		return null;
	}
});

// @factory L.divIcon(options: DivIcon options)
// Creates a `DivIcon` instance with the given options.
function divIcon(options) {
	return new DivIcon(options);
}

Icon.Default = IconDefault;

/*
 * @class GridLayer
 * @inherits Layer
 * @aka L.GridLayer
 *
 * Generic class for handling a tiled grid of HTML elements. This is the base class for all tile layers and replaces `TileLayer.Canvas`.
 * GridLayer can be extended to create a tiled grid of HTML elements like `<canvas>`, `<img>` or `<div>`. GridLayer will handle creating and animating these DOM elements for you.
 *
 *
 * @section Synchronous usage
 * @example
 *
 * To create a custom layer, extend GridLayer and implement the `createTile()` method, which will be passed a `Point` object with the `x`, `y`, and `z` (zoom level) coordinates to draw your tile.
 *
 * ```js
 * var CanvasLayer = L.GridLayer.extend({
 *     createTile: function(coords){
 *         // create a <canvas> element for drawing
 *         var tile = L.DomUtil.create('canvas', 'leaflet-tile');
 *
 *         // setup tile width and height according to the options
 *         var size = this.getTileSize();
 *         tile.width = size.x;
 *         tile.height = size.y;
 *
 *         // get a canvas context and draw something on it using coords.x, coords.y and coords.z
 *         var ctx = tile.getContext('2d');
 *
 *         // return the tile so it can be rendered on screen
 *         return tile;
 *     }
 * });
 * ```
 *
 * @section Asynchronous usage
 * @example
 *
 * Tile creation can also be asynchronous, this is useful when using a third-party drawing library. Once the tile is finished drawing it can be passed to the `done()` callback.
 *
 * ```js
 * var CanvasLayer = L.GridLayer.extend({
 *     createTile: function(coords, done){
 *         var error;
 *
 *         // create a <canvas> element for drawing
 *         var tile = L.DomUtil.create('canvas', 'leaflet-tile');
 *
 *         // setup tile width and height according to the options
 *         var size = this.getTileSize();
 *         tile.width = size.x;
 *         tile.height = size.y;
 *
 *         // draw something asynchronously and pass the tile to the done() callback
 *         setTimeout(function() {
 *             done(error, tile);
 *         }, 1000);
 *
 *         return tile;
 *     }
 * });
 * ```
 *
 * @section
 */


var GridLayer = Layer.extend({

	// @section
	// @aka GridLayer options
	options: {
		// @option tileSize: Number|Point = 256
		// Width and height of tiles in the grid. Use a number if width and height are equal, or `L.point(width, height)` otherwise.
		tileSize: 256,

		// @option opacity: Number = 1.0
		// Opacity of the tiles. Can be used in the `createTile()` function.
		opacity: 1,

		// @option updateWhenIdle: Boolean = (depends)
		// Load new tiles only when panning ends.
		// `true` by default on mobile browsers, in order to avoid too many requests and keep smooth navigation.
		// `false` otherwise in order to display new tiles _during_ panning, since it is easy to pan outside the
		// [`keepBuffer`](#gridlayer-keepbuffer) option in desktop browsers.
		updateWhenIdle: mobile,

		// @option updateWhenZooming: Boolean = true
		// By default, a smooth zoom animation (during a [touch zoom](#map-touchzoom) or a [`flyTo()`](#map-flyto)) will update grid layers every integer zoom level. Setting this option to `false` will update the grid layer only when the smooth animation ends.
		updateWhenZooming: true,

		// @option updateInterval: Number = 200
		// Tiles will not update more than once every `updateInterval` milliseconds when panning.
		updateInterval: 200,

		// @option zIndex: Number = 1
		// The explicit zIndex of the tile layer.
		zIndex: 1,

		// @option bounds: LatLngBounds = undefined
		// If set, tiles will only be loaded inside the set `LatLngBounds`.
		bounds: null,

		// @option minZoom: Number = 0
		// The minimum zoom level down to which this layer will be displayed (inclusive).
		minZoom: 0,

		// @option maxZoom: Number = undefined
		// The maximum zoom level up to which this layer will be displayed (inclusive).
		maxZoom: undefined,

		// @option maxNativeZoom: Number = undefined
		// Maximum zoom number the tile source has available. If it is specified,
		// the tiles on all zoom levels higher than `maxNativeZoom` will be loaded
		// from `maxNativeZoom` level and auto-scaled.
		maxNativeZoom: undefined,

		// @option minNativeZoom: Number = undefined
		// Minimum zoom number the tile source has available. If it is specified,
		// the tiles on all zoom levels lower than `minNativeZoom` will be loaded
		// from `minNativeZoom` level and auto-scaled.
		minNativeZoom: undefined,

		// @option noWrap: Boolean = false
		// Whether the layer is wrapped around the antimeridian. If `true`, the
		// GridLayer will only be displayed once at low zoom levels. Has no
		// effect when the [map CRS](#map-crs) doesn't wrap around. Can be used
		// in combination with [`bounds`](#gridlayer-bounds) to prevent requesting
		// tiles outside the CRS limits.
		noWrap: false,

		// @option pane: String = 'tilePane'
		// `Map pane` where the grid layer will be added.
		pane: 'tilePane',

		// @option className: String = ''
		// A custom class name to assign to the tile layer. Empty by default.
		className: '',

		// @option keepBuffer: Number = 2
		// When panning the map, keep this many rows and columns of tiles before unloading them.
		keepBuffer: 2
	},

	initialize: function (options) {
		setOptions(this, options);
	},

	onAdd: function () {
		this._initContainer();

		this._levels = {};
		this._tiles = {};

		this._resetView();
		this._update();
	},

	beforeAdd: function (map) {
		map._addZoomLimit(this);
	},

	onRemove: function (map) {
		this._removeAllTiles();
		remove(this._container);
		map._removeZoomLimit(this);
		this._container = null;
		this._tileZoom = undefined;
	},

	// @method bringToFront: this
	// Brings the tile layer to the top of all tile layers.
	bringToFront: function () {
		if (this._map) {
			toFront(this._container);
			this._setAutoZIndex(Math.max);
		}
		return this;
	},

	// @method bringToBack: this
	// Brings the tile layer to the bottom of all tile layers.
	bringToBack: function () {
		if (this._map) {
			toBack(this._container);
			this._setAutoZIndex(Math.min);
		}
		return this;
	},

	// @method getContainer: HTMLElement
	// Returns the HTML element that contains the tiles for this layer.
	getContainer: function () {
		return this._container;
	},

	// @method setOpacity(opacity: Number): this
	// Changes the [opacity](#gridlayer-opacity) of the grid layer.
	setOpacity: function (opacity) {
		this.options.opacity = opacity;
		this._updateOpacity();
		return this;
	},

	// @method setZIndex(zIndex: Number): this
	// Changes the [zIndex](#gridlayer-zindex) of the grid layer.
	setZIndex: function (zIndex) {
		this.options.zIndex = zIndex;
		this._updateZIndex();

		return this;
	},

	// @method isLoading: Boolean
	// Returns `true` if any tile in the grid layer has not finished loading.
	isLoading: function () {
		return this._loading;
	},

	// @method redraw: this
	// Causes the layer to clear all the tiles and request them again.
	redraw: function () {
		if (this._map) {
			this._removeAllTiles();
			this._update();
		}
		return this;
	},

	getEvents: function () {
		var events = {
			viewprereset: this._invalidateAll,
			viewreset: this._resetView,
			zoom: this._resetView,
			moveend: this._onMoveEnd
		};

		if (!this.options.updateWhenIdle) {
			// update tiles on move, but not more often than once per given interval
			if (!this._onMove) {
				this._onMove = throttle(this._onMoveEnd, this.options.updateInterval, this);
			}

			events.move = this._onMove;
		}

		if (this._zoomAnimated) {
			events.zoomanim = this._animateZoom;
		}

		return events;
	},

	// @section Extension methods
	// Layers extending `GridLayer` shall reimplement the following method.
	// @method createTile(coords: Object, done?: Function): HTMLElement
	// Called only internally, must be overridden by classes extending `GridLayer`.
	// Returns the `HTMLElement` corresponding to the given `coords`. If the `done` callback
	// is specified, it must be called when the tile has finished loading and drawing.
	createTile: function () {
		return document.createElement('div');
	},

	// @section
	// @method getTileSize: Point
	// Normalizes the [tileSize option](#gridlayer-tilesize) into a point. Used by the `createTile()` method.
	getTileSize: function () {
		var s = this.options.tileSize;
		return s instanceof Point ? s : new Point(s, s);
	},

	_updateZIndex: function () {
		if (this._container && this.options.zIndex !== undefined && this.options.zIndex !== null) {
			this._container.style.zIndex = this.options.zIndex;
		}
	},

	_setAutoZIndex: function (compare) {
		// go through all other layers of the same pane, set zIndex to max + 1 (front) or min - 1 (back)

		var layers = this.getPane().children,
		    edgeZIndex = -compare(-Infinity, Infinity); // -Infinity for max, Infinity for min

		for (var i = 0, len = layers.length, zIndex; i < len; i++) {

			zIndex = layers[i].style.zIndex;

			if (layers[i] !== this._container && zIndex) {
				edgeZIndex = compare(edgeZIndex, +zIndex);
			}
		}

		if (isFinite(edgeZIndex)) {
			this.options.zIndex = edgeZIndex + compare(-1, 1);
			this._updateZIndex();
		}
	},

	_updateOpacity: function () {
		if (!this._map) { return; }

		// IE doesn't inherit filter opacity properly, so we're forced to set it on tiles
		if (ielt9) { return; }

		setOpacity(this._container, this.options.opacity);

		var now = +new Date(),
		    nextFrame = false,
		    willPrune = false;

		for (var key in this._tiles) {
			var tile = this._tiles[key];
			if (!tile.current || !tile.loaded) { continue; }

			var fade = Math.min(1, (now - tile.loaded) / 200);

			setOpacity(tile.el, fade);
			if (fade < 1) {
				nextFrame = true;
			} else {
				if (tile.active) {
					willPrune = true;
				} else {
					this._onOpaqueTile(tile);
				}
				tile.active = true;
			}
		}

		if (willPrune && !this._noPrune) { this._pruneTiles(); }

		if (nextFrame) {
			cancelAnimFrame(this._fadeFrame);
			this._fadeFrame = requestAnimFrame(this._updateOpacity, this);
		}
	},

	_onOpaqueTile: falseFn,

	_initContainer: function () {
		if (this._container) { return; }

		this._container = create$1('div', 'leaflet-layer ' + (this.options.className || ''));
		this._updateZIndex();

		if (this.options.opacity < 1) {
			this._updateOpacity();
		}

		this.getPane().appendChild(this._container);
	},

	_updateLevels: function () {

		var zoom = this._tileZoom,
		    maxZoom = this.options.maxZoom;

		if (zoom === undefined) { return undefined; }

		for (var z in this._levels) {
			if (this._levels[z].el.children.length || z === zoom) {
				this._levels[z].el.style.zIndex = maxZoom - Math.abs(zoom - z);
				this._onUpdateLevel(z);
			} else {
				remove(this._levels[z].el);
				this._removeTilesAtZoom(z);
				this._onRemoveLevel(z);
				delete this._levels[z];
			}
		}

		var level = this._levels[zoom],
		    map = this._map;

		if (!level) {
			level = this._levels[zoom] = {};

			level.el = create$1('div', 'leaflet-tile-container leaflet-zoom-animated', this._container);
			level.el.style.zIndex = maxZoom;

			level.origin = map.project(map.unproject(map.getPixelOrigin()), zoom).round();
			level.zoom = zoom;

			this._setZoomTransform(level, map.getCenter(), map.getZoom());

			// force the browser to consider the newly added element for transition
			falseFn(level.el.offsetWidth);

			this._onCreateLevel(level);
		}

		this._level = level;

		return level;
	},

	_onUpdateLevel: falseFn,

	_onRemoveLevel: falseFn,

	_onCreateLevel: falseFn,

	_pruneTiles: function () {
		if (!this._map) {
			return;
		}

		var key, tile;

		var zoom = this._map.getZoom();
		if (zoom > this.options.maxZoom ||
			zoom < this.options.minZoom) {
			this._removeAllTiles();
			return;
		}

		for (key in this._tiles) {
			tile = this._tiles[key];
			tile.retain = tile.current;
		}

		for (key in this._tiles) {
			tile = this._tiles[key];
			if (tile.current && !tile.active) {
				var coords = tile.coords;
				if (!this._retainParent(coords.x, coords.y, coords.z, coords.z - 5)) {
					this._retainChildren(coords.x, coords.y, coords.z, coords.z + 2);
				}
			}
		}

		for (key in this._tiles) {
			if (!this._tiles[key].retain) {
				this._removeTile(key);
			}
		}
	},

	_removeTilesAtZoom: function (zoom) {
		for (var key in this._tiles) {
			if (this._tiles[key].coords.z !== zoom) {
				continue;
			}
			this._removeTile(key);
		}
	},

	_removeAllTiles: function () {
		for (var key in this._tiles) {
			this._removeTile(key);
		}
	},

	_invalidateAll: function () {
		for (var z in this._levels) {
			remove(this._levels[z].el);
			this._onRemoveLevel(z);
			delete this._levels[z];
		}
		this._removeAllTiles();

		this._tileZoom = undefined;
	},

	_retainParent: function (x, y, z, minZoom) {
		var x2 = Math.floor(x / 2),
		    y2 = Math.floor(y / 2),
		    z2 = z - 1,
		    coords2 = new Point(+x2, +y2);
		coords2.z = +z2;

		var key = this._tileCoordsToKey(coords2),
		    tile = this._tiles[key];

		if (tile && tile.active) {
			tile.retain = true;
			return true;

		} else if (tile && tile.loaded) {
			tile.retain = true;
		}

		if (z2 > minZoom) {
			return this._retainParent(x2, y2, z2, minZoom);
		}

		return false;
	},

	_retainChildren: function (x, y, z, maxZoom) {

		for (var i = 2 * x; i < 2 * x + 2; i++) {
			for (var j = 2 * y; j < 2 * y + 2; j++) {

				var coords = new Point(i, j);
				coords.z = z + 1;

				var key = this._tileCoordsToKey(coords),
				    tile = this._tiles[key];

				if (tile && tile.active) {
					tile.retain = true;
					continue;

				} else if (tile && tile.loaded) {
					tile.retain = true;
				}

				if (z + 1 < maxZoom) {
					this._retainChildren(i, j, z + 1, maxZoom);
				}
			}
		}
	},

	_resetView: function (e) {
		var animating = e && (e.pinch || e.flyTo);
		this._setView(this._map.getCenter(), this._map.getZoom(), animating, animating);
	},

	_animateZoom: function (e) {
		this._setView(e.center, e.zoom, true, e.noUpdate);
	},

	_clampZoom: function (zoom) {
		var options = this.options;

		if (undefined !== options.minNativeZoom && zoom < options.minNativeZoom) {
			return options.minNativeZoom;
		}

		if (undefined !== options.maxNativeZoom && options.maxNativeZoom < zoom) {
			return options.maxNativeZoom;
		}

		return zoom;
	},

	_setView: function (center, zoom, noPrune, noUpdate) {
		var tileZoom = this._clampZoom(Math.round(zoom));
		if ((this.options.maxZoom !== undefined && tileZoom > this.options.maxZoom) ||
		    (this.options.minZoom !== undefined && tileZoom < this.options.minZoom)) {
			tileZoom = undefined;
		}

		var tileZoomChanged = this.options.updateWhenZooming && (tileZoom !== this._tileZoom);

		if (!noUpdate || tileZoomChanged) {

			this._tileZoom = tileZoom;

			if (this._abortLoading) {
				this._abortLoading();
			}

			this._updateLevels();
			this._resetGrid();

			if (tileZoom !== undefined) {
				this._update(center);
			}

			if (!noPrune) {
				this._pruneTiles();
			}

			// Flag to prevent _updateOpacity from pruning tiles during
			// a zoom anim or a pinch gesture
			this._noPrune = !!noPrune;
		}

		this._setZoomTransforms(center, zoom);
	},

	_setZoomTransforms: function (center, zoom) {
		for (var i in this._levels) {
			this._setZoomTransform(this._levels[i], center, zoom);
		}
	},

	_setZoomTransform: function (level, center, zoom) {
		var scale = this._map.getZoomScale(zoom, level.zoom),
		    translate = level.origin.multiplyBy(scale)
		        .subtract(this._map._getNewPixelOrigin(center, zoom)).round();

		if (any3d) {
			setTransform(level.el, translate, scale);
		} else {
			setPosition(level.el, translate);
		}
	},

	_resetGrid: function () {
		var map = this._map,
		    crs = map.options.crs,
		    tileSize = this._tileSize = this.getTileSize(),
		    tileZoom = this._tileZoom;

		var bounds = this._map.getPixelWorldBounds(this._tileZoom);
		if (bounds) {
			this._globalTileRange = this._pxBoundsToTileRange(bounds);
		}

		this._wrapX = crs.wrapLng && !this.options.noWrap && [
			Math.floor(map.project([0, crs.wrapLng[0]], tileZoom).x / tileSize.x),
			Math.ceil(map.project([0, crs.wrapLng[1]], tileZoom).x / tileSize.y)
		];
		this._wrapY = crs.wrapLat && !this.options.noWrap && [
			Math.floor(map.project([crs.wrapLat[0], 0], tileZoom).y / tileSize.x),
			Math.ceil(map.project([crs.wrapLat[1], 0], tileZoom).y / tileSize.y)
		];
	},

	_onMoveEnd: function () {
		if (!this._map || this._map._animatingZoom) { return; }

		this._update();
	},

	_getTiledPixelBounds: function (center) {
		var map = this._map,
		    mapZoom = map._animatingZoom ? Math.max(map._animateToZoom, map.getZoom()) : map.getZoom(),
		    scale = map.getZoomScale(mapZoom, this._tileZoom),
		    pixelCenter = map.project(center, this._tileZoom).floor(),
		    halfSize = map.getSize().divideBy(scale * 2);

		return new Bounds(pixelCenter.subtract(halfSize), pixelCenter.add(halfSize));
	},

	// Private method to load tiles in the grid's active zoom level according to map bounds
	_update: function (center) {
		var map = this._map;
		if (!map) { return; }
		var zoom = this._clampZoom(map.getZoom());

		if (center === undefined) { center = map.getCenter(); }
		if (this._tileZoom === undefined) { return; }	// if out of minzoom/maxzoom

		var pixelBounds = this._getTiledPixelBounds(center),
		    tileRange = this._pxBoundsToTileRange(pixelBounds),
		    tileCenter = tileRange.getCenter(),
		    queue = [],
		    margin = this.options.keepBuffer,
		    noPruneRange = new Bounds(tileRange.getBottomLeft().subtract([margin, -margin]),
		                              tileRange.getTopRight().add([margin, -margin]));

		// Sanity check: panic if the tile range contains Infinity somewhere.
		if (!(isFinite(tileRange.min.x) &&
		      isFinite(tileRange.min.y) &&
		      isFinite(tileRange.max.x) &&
		      isFinite(tileRange.max.y))) { throw new Error('Attempted to load an infinite number of tiles'); }

		for (var key in this._tiles) {
			var c = this._tiles[key].coords;
			if (c.z !== this._tileZoom || !noPruneRange.contains(new Point(c.x, c.y))) {
				this._tiles[key].current = false;
			}
		}

		// _update just loads more tiles. If the tile zoom level differs too much
		// from the map's, let _setView reset levels and prune old tiles.
		if (Math.abs(zoom - this._tileZoom) > 1) { this._setView(center, zoom); return; }

		// create a queue of coordinates to load tiles from
		for (var j = tileRange.min.y; j <= tileRange.max.y; j++) {
			for (var i = tileRange.min.x; i <= tileRange.max.x; i++) {
				var coords = new Point(i, j);
				coords.z = this._tileZoom;

				if (!this._isValidTile(coords)) { continue; }

				var tile = this._tiles[this._tileCoordsToKey(coords)];
				if (tile) {
					tile.current = true;
				} else {
					queue.push(coords);
				}
			}
		}

		// sort tile queue to load tiles in order of their distance to center
		queue.sort(function (a, b) {
			return a.distanceTo(tileCenter) - b.distanceTo(tileCenter);
		});

		if (queue.length !== 0) {
			// if it's the first batch of tiles to load
			if (!this._loading) {
				this._loading = true;
				// @event loading: Event
				// Fired when the grid layer starts loading tiles.
				this.fire('loading');
			}

			// create DOM fragment to append tiles in one batch
			var fragment = document.createDocumentFragment();

			for (i = 0; i < queue.length; i++) {
				this._addTile(queue[i], fragment);
			}

			this._level.el.appendChild(fragment);
		}
	},

	_isValidTile: function (coords) {
		var crs = this._map.options.crs;

		if (!crs.infinite) {
			// don't load tile if it's out of bounds and not wrapped
			var bounds = this._globalTileRange;
			if ((!crs.wrapLng && (coords.x < bounds.min.x || coords.x > bounds.max.x)) ||
			    (!crs.wrapLat && (coords.y < bounds.min.y || coords.y > bounds.max.y))) { return false; }
		}

		if (!this.options.bounds) { return true; }

		// don't load tile if it doesn't intersect the bounds in options
		var tileBounds = this._tileCoordsToBounds(coords);
		return toLatLngBounds(this.options.bounds).overlaps(tileBounds);
	},

	_keyToBounds: function (key) {
		return this._tileCoordsToBounds(this._keyToTileCoords(key));
	},

	_tileCoordsToNwSe: function (coords) {
		var map = this._map,
		    tileSize = this.getTileSize(),
		    nwPoint = coords.scaleBy(tileSize),
		    sePoint = nwPoint.add(tileSize),
		    nw = map.unproject(nwPoint, coords.z),
		    se = map.unproject(sePoint, coords.z);
		return [nw, se];
	},

	// converts tile coordinates to its geographical bounds
	_tileCoordsToBounds: function (coords) {
		var bp = this._tileCoordsToNwSe(coords),
		    bounds = new LatLngBounds(bp[0], bp[1]);

		if (!this.options.noWrap) {
			bounds = this._map.wrapLatLngBounds(bounds);
		}
		return bounds;
	},
	// converts tile coordinates to key for the tile cache
	_tileCoordsToKey: function (coords) {
		return coords.x + ':' + coords.y + ':' + coords.z;
	},

	// converts tile cache key to coordinates
	_keyToTileCoords: function (key) {
		var k = key.split(':'),
		    coords = new Point(+k[0], +k[1]);
		coords.z = +k[2];
		return coords;
	},

	_removeTile: function (key) {
		var tile = this._tiles[key];
		if (!tile) { return; }

		remove(tile.el);

		delete this._tiles[key];

		// @event tileunload: TileEvent
		// Fired when a tile is removed (e.g. when a tile goes off the screen).
		this.fire('tileunload', {
			tile: tile.el,
			coords: this._keyToTileCoords(key)
		});
	},

	_initTile: function (tile) {
		addClass(tile, 'leaflet-tile');

		var tileSize = this.getTileSize();
		tile.style.width = tileSize.x + 'px';
		tile.style.height = tileSize.y + 'px';

		tile.onselectstart = falseFn;
		tile.onmousemove = falseFn;

		// update opacity on tiles in IE7-8 because of filter inheritance problems
		if (ielt9 && this.options.opacity < 1) {
			setOpacity(tile, this.options.opacity);
		}

		// without this hack, tiles disappear after zoom on Chrome for Android
		// https://github.com/Leaflet/Leaflet/issues/2078
		if (android && !android23) {
			tile.style.WebkitBackfaceVisibility = 'hidden';
		}
	},

	_addTile: function (coords, container) {
		var tilePos = this._getTilePos(coords),
		    key = this._tileCoordsToKey(coords);

		var tile = this.createTile(this._wrapCoords(coords), bind(this._tileReady, this, coords));

		this._initTile(tile);

		// if createTile is defined with a second argument ("done" callback),
		// we know that tile is async and will be ready later; otherwise
		if (this.createTile.length < 2) {
			// mark tile as ready, but delay one frame for opacity animation to happen
			requestAnimFrame(bind(this._tileReady, this, coords, null, tile));
		}

		setPosition(tile, tilePos);

		// save tile in cache
		this._tiles[key] = {
			el: tile,
			coords: coords,
			current: true
		};

		container.appendChild(tile);
		// @event tileloadstart: TileEvent
		// Fired when a tile is requested and starts loading.
		this.fire('tileloadstart', {
			tile: tile,
			coords: coords
		});
	},

	_tileReady: function (coords, err, tile) {
		if (err) {
			// @event tileerror: TileErrorEvent
			// Fired when there is an error loading a tile.
			this.fire('tileerror', {
				error: err,
				tile: tile,
				coords: coords
			});
		}

		var key = this._tileCoordsToKey(coords);

		tile = this._tiles[key];
		if (!tile) { return; }

		tile.loaded = +new Date();
		if (this._map._fadeAnimated) {
			setOpacity(tile.el, 0);
			cancelAnimFrame(this._fadeFrame);
			this._fadeFrame = requestAnimFrame(this._updateOpacity, this);
		} else {
			tile.active = true;
			this._pruneTiles();
		}

		if (!err) {
			addClass(tile.el, 'leaflet-tile-loaded');

			// @event tileload: TileEvent
			// Fired when a tile loads.
			this.fire('tileload', {
				tile: tile.el,
				coords: coords
			});
		}

		if (this._noTilesToLoad()) {
			this._loading = false;
			// @event load: Event
			// Fired when the grid layer loaded all visible tiles.
			this.fire('load');

			if (ielt9 || !this._map._fadeAnimated) {
				requestAnimFrame(this._pruneTiles, this);
			} else {
				// Wait a bit more than 0.2 secs (the duration of the tile fade-in)
				// to trigger a pruning.
				setTimeout(bind(this._pruneTiles, this), 250);
			}
		}
	},

	_getTilePos: function (coords) {
		return coords.scaleBy(this.getTileSize()).subtract(this._level.origin);
	},

	_wrapCoords: function (coords) {
		var newCoords = new Point(
			this._wrapX ? wrapNum(coords.x, this._wrapX) : coords.x,
			this._wrapY ? wrapNum(coords.y, this._wrapY) : coords.y);
		newCoords.z = coords.z;
		return newCoords;
	},

	_pxBoundsToTileRange: function (bounds) {
		var tileSize = this.getTileSize();
		return new Bounds(
			bounds.min.unscaleBy(tileSize).floor(),
			bounds.max.unscaleBy(tileSize).ceil().subtract([1, 1]));
	},

	_noTilesToLoad: function () {
		for (var key in this._tiles) {
			if (!this._tiles[key].loaded) { return false; }
		}
		return true;
	}
});

// @factory L.gridLayer(options?: GridLayer options)
// Creates a new instance of GridLayer with the supplied options.
function gridLayer(options) {
	return new GridLayer(options);
}

/*
 * @class TileLayer
 * @inherits GridLayer
 * @aka L.TileLayer
 * Used to load and display tile layers on the map. Note that most tile servers require attribution, which you can set under `Layer`. Extends `GridLayer`.
 *
 * @example
 *
 * ```js
 * L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', {foo: 'bar', attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'}).addTo(map);
 * ```
 *
 * @section URL template
 * @example
 *
 * A string of the following form:
 *
 * ```
 * 'http://{s}.somedomain.com/blabla/{z}/{x}/{y}{r}.png'
 * ```
 *
 * `{s}` means one of the available subdomains (used sequentially to help with browser parallel requests per domain limitation; subdomain values are specified in options; `a`, `b` or `c` by default, can be omitted), `{z}` — zoom level, `{x}` and `{y}` — tile coordinates. `{r}` can be used to add "&commat;2x" to the URL to load retina tiles.
 *
 * You can use custom keys in the template, which will be [evaluated](#util-template) from TileLayer options, like this:
 *
 * ```
 * L.tileLayer('http://{s}.somedomain.com/{foo}/{z}/{x}/{y}.png', {foo: 'bar'});
 * ```
 */


var TileLayer = GridLayer.extend({

	// @section
	// @aka TileLayer options
	options: {
		// @option minZoom: Number = 0
		// The minimum zoom level down to which this layer will be displayed (inclusive).
		minZoom: 0,

		// @option maxZoom: Number = 18
		// The maximum zoom level up to which this layer will be displayed (inclusive).
		maxZoom: 18,

		// @option subdomains: String|String[] = 'abc'
		// Subdomains of the tile service. Can be passed in the form of one string (where each letter is a subdomain name) or an array of strings.
		subdomains: 'abc',

		// @option errorTileUrl: String = ''
		// URL to the tile image to show in place of the tile that failed to load.
		errorTileUrl: '',

		// @option zoomOffset: Number = 0
		// The zoom number used in tile URLs will be offset with this value.
		zoomOffset: 0,

		// @option tms: Boolean = false
		// If `true`, inverses Y axis numbering for tiles (turn this on for [TMS](https://en.wikipedia.org/wiki/Tile_Map_Service) services).
		tms: false,

		// @option zoomReverse: Boolean = false
		// If set to true, the zoom number used in tile URLs will be reversed (`maxZoom - zoom` instead of `zoom`)
		zoomReverse: false,

		// @option detectRetina: Boolean = false
		// If `true` and user is on a retina display, it will request four tiles of half the specified size and a bigger zoom level in place of one to utilize the high resolution.
		detectRetina: false,

		// @option crossOrigin: Boolean|String = false
		// Whether the crossOrigin attribute will be added to the tiles.
		// If a String is provided, all tiles will have their crossOrigin attribute set to the String provided. This is needed if you want to access tile pixel data.
		// Refer to [CORS Settings](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for valid String values.
		crossOrigin: false
	},

	initialize: function (url, options) {

		this._url = url;

		options = setOptions(this, options);

		// detecting retina displays, adjusting tileSize and zoom levels
		if (options.detectRetina && retina && options.maxZoom > 0) {

			options.tileSize = Math.floor(options.tileSize / 2);

			if (!options.zoomReverse) {
				options.zoomOffset++;
				options.maxZoom--;
			} else {
				options.zoomOffset--;
				options.minZoom++;
			}

			options.minZoom = Math.max(0, options.minZoom);
		}

		if (typeof options.subdomains === 'string') {
			options.subdomains = options.subdomains.split('');
		}

		// for https://github.com/Leaflet/Leaflet/issues/137
		if (!android) {
			this.on('tileunload', this._onTileRemove);
		}
	},

	// @method setUrl(url: String, noRedraw?: Boolean): this
	// Updates the layer's URL template and redraws it (unless `noRedraw` is set to `true`).
	// If the URL does not change, the layer will not be redrawn unless
	// the noRedraw parameter is set to false.
	setUrl: function (url, noRedraw) {
		if (this._url === url && noRedraw === undefined) {
			noRedraw = true;
		}

		this._url = url;

		if (!noRedraw) {
			this.redraw();
		}
		return this;
	},

	// @method createTile(coords: Object, done?: Function): HTMLElement
	// Called only internally, overrides GridLayer's [`createTile()`](#gridlayer-createtile)
	// to return an `<img>` HTML element with the appropriate image URL given `coords`. The `done`
	// callback is called when the tile has been loaded.
	createTile: function (coords, done) {
		var tile = document.createElement('img');

		on(tile, 'load', bind(this._tileOnLoad, this, done, tile));
		on(tile, 'error', bind(this._tileOnError, this, done, tile));

		if (this.options.crossOrigin || this.options.crossOrigin === '') {
			tile.crossOrigin = this.options.crossOrigin === true ? '' : this.options.crossOrigin;
		}

		/*
		 Alt tag is set to empty string to keep screen readers from reading URL and for compliance reasons
		 http://www.w3.org/TR/WCAG20-TECHS/H67
		*/
		tile.alt = '';

		/*
		 Set role="presentation" to force screen readers to ignore this
		 https://www.w3.org/TR/wai-aria/roles#textalternativecomputation
		*/
		tile.setAttribute('role', 'presentation');

		tile.src = this.getTileUrl(coords);

		return tile;
	},

	// @section Extension methods
	// @uninheritable
	// Layers extending `TileLayer` might reimplement the following method.
	// @method getTileUrl(coords: Object): String
	// Called only internally, returns the URL for a tile given its coordinates.
	// Classes extending `TileLayer` can override this function to provide custom tile URL naming schemes.
	getTileUrl: function (coords) {
		var data = {
			r: retina ? '@2x' : '',
			s: this._getSubdomain(coords),
			x: coords.x,
			y: coords.y,
			z: this._getZoomForUrl()
		};
		if (this._map && !this._map.options.crs.infinite) {
			var invertedY = this._globalTileRange.max.y - coords.y;
			if (this.options.tms) {
				data['y'] = invertedY;
			}
			data['-y'] = invertedY;
		}

		return template(this._url, extend(data, this.options));
	},

	_tileOnLoad: function (done, tile) {
		// For https://github.com/Leaflet/Leaflet/issues/3332
		if (ielt9) {
			setTimeout(bind(done, this, null, tile), 0);
		} else {
			done(null, tile);
		}
	},

	_tileOnError: function (done, tile, e) {
		var errorUrl = this.options.errorTileUrl;
		if (errorUrl && tile.getAttribute('src') !== errorUrl) {
			tile.src = errorUrl;
		}
		done(e, tile);
	},

	_onTileRemove: function (e) {
		e.tile.onload = null;
	},

	_getZoomForUrl: function () {
		var zoom = this._tileZoom,
		maxZoom = this.options.maxZoom,
		zoomReverse = this.options.zoomReverse,
		zoomOffset = this.options.zoomOffset;

		if (zoomReverse) {
			zoom = maxZoom - zoom;
		}

		return zoom + zoomOffset;
	},

	_getSubdomain: function (tilePoint) {
		var index = Math.abs(tilePoint.x + tilePoint.y) % this.options.subdomains.length;
		return this.options.subdomains[index];
	},

	// stops loading all tiles in the background layer
	_abortLoading: function () {
		var i, tile;
		for (i in this._tiles) {
			if (this._tiles[i].coords.z !== this._tileZoom) {
				tile = this._tiles[i].el;

				tile.onload = falseFn;
				tile.onerror = falseFn;

				if (!tile.complete) {
					tile.src = emptyImageUrl;
					remove(tile);
					delete this._tiles[i];
				}
			}
		}
	},

	_removeTile: function (key) {
		var tile = this._tiles[key];
		if (!tile) { return; }

		// Cancels any pending http requests associated with the tile
		// unless we're on Android's stock browser,
		// see https://github.com/Leaflet/Leaflet/issues/137
		if (!androidStock) {
			tile.el.setAttribute('src', emptyImageUrl);
		}

		return GridLayer.prototype._removeTile.call(this, key);
	},

	_tileReady: function (coords, err, tile) {
		if (!this._map || (tile && tile.getAttribute('src') === emptyImageUrl)) {
			return;
		}

		return GridLayer.prototype._tileReady.call(this, coords, err, tile);
	}
});


// @factory L.tilelayer(urlTemplate: String, options?: TileLayer options)
// Instantiates a tile layer object given a `URL template` and optionally an options object.

function tileLayer(url, options) {
	return new TileLayer(url, options);
}

/*
 * @class TileLayer.WMS
 * @inherits TileLayer
 * @aka L.TileLayer.WMS
 * Used to display [WMS](https://en.wikipedia.org/wiki/Web_Map_Service) services as tile layers on the map. Extends `TileLayer`.
 *
 * @example
 *
 * ```js
 * var nexrad = L.tileLayer.wms("http://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0r.cgi", {
 * 	layers: 'nexrad-n0r-900913',
 * 	format: 'image/png',
 * 	transparent: true,
 * 	attribution: "Weather data © 2012 IEM Nexrad"
 * });
 * ```
 */

var TileLayerWMS = TileLayer.extend({

	// @section
	// @aka TileLayer.WMS options
	// If any custom options not documented here are used, they will be sent to the
	// WMS server as extra parameters in each request URL. This can be useful for
	// [non-standard vendor WMS parameters](http://docs.geoserver.org/stable/en/user/services/wms/vendor.html).
	defaultWmsParams: {
		service: 'WMS',
		request: 'GetMap',

		// @option layers: String = ''
		// **(required)** Comma-separated list of WMS layers to show.
		layers: '',

		// @option styles: String = ''
		// Comma-separated list of WMS styles.
		styles: '',

		// @option format: String = 'image/jpeg'
		// WMS image format (use `'image/png'` for layers with transparency).
		format: 'image/jpeg',

		// @option transparent: Boolean = false
		// If `true`, the WMS service will return images with transparency.
		transparent: false,

		// @option version: String = '1.1.1'
		// Version of the WMS service to use
		version: '1.1.1'
	},

	options: {
		// @option crs: CRS = null
		// Coordinate Reference System to use for the WMS requests, defaults to
		// map CRS. Don't change this if you're not sure what it means.
		crs: null,

		// @option uppercase: Boolean = false
		// If `true`, WMS request parameter keys will be uppercase.
		uppercase: false
	},

	initialize: function (url, options) {

		this._url = url;

		var wmsParams = extend({}, this.defaultWmsParams);

		// all keys that are not TileLayer options go to WMS params
		for (var i in options) {
			if (!(i in this.options)) {
				wmsParams[i] = options[i];
			}
		}

		options = setOptions(this, options);

		var realRetina = options.detectRetina && retina ? 2 : 1;
		var tileSize = this.getTileSize();
		wmsParams.width = tileSize.x * realRetina;
		wmsParams.height = tileSize.y * realRetina;

		this.wmsParams = wmsParams;
	},

	onAdd: function (map) {

		this._crs = this.options.crs || map.options.crs;
		this._wmsVersion = parseFloat(this.wmsParams.version);

		var projectionKey = this._wmsVersion >= 1.3 ? 'crs' : 'srs';
		this.wmsParams[projectionKey] = this._crs.code;

		TileLayer.prototype.onAdd.call(this, map);
	},

	getTileUrl: function (coords) {

		var tileBounds = this._tileCoordsToNwSe(coords),
		    crs = this._crs,
		    bounds = toBounds(crs.project(tileBounds[0]), crs.project(tileBounds[1])),
		    min = bounds.min,
		    max = bounds.max,
		    bbox = (this._wmsVersion >= 1.3 && this._crs === EPSG4326 ?
		    [min.y, min.x, max.y, max.x] :
		    [min.x, min.y, max.x, max.y]).join(','),
		    url = TileLayer.prototype.getTileUrl.call(this, coords);
		return url +
			getParamString(this.wmsParams, url, this.options.uppercase) +
			(this.options.uppercase ? '&BBOX=' : '&bbox=') + bbox;
	},

	// @method setParams(params: Object, noRedraw?: Boolean): this
	// Merges an object with the new parameters and re-requests tiles on the current screen (unless `noRedraw` was set to true).
	setParams: function (params, noRedraw) {

		extend(this.wmsParams, params);

		if (!noRedraw) {
			this.redraw();
		}

		return this;
	}
});


// @factory L.tileLayer.wms(baseUrl: String, options: TileLayer.WMS options)
// Instantiates a WMS tile layer object given a base URL of the WMS service and a WMS parameters/options object.
function tileLayerWMS(url, options) {
	return new TileLayerWMS(url, options);
}

TileLayer.WMS = TileLayerWMS;
tileLayer.wms = tileLayerWMS;

/*
 * @class Renderer
 * @inherits Layer
 * @aka L.Renderer
 *
 * Base class for vector renderer implementations (`SVG`, `Canvas`). Handles the
 * DOM container of the renderer, its bounds, and its zoom animation.
 *
 * A `Renderer` works as an implicit layer group for all `Path`s - the renderer
 * itself can be added or removed to the map. All paths use a renderer, which can
 * be implicit (the map will decide the type of renderer and use it automatically)
 * or explicit (using the [`renderer`](#path-renderer) option of the path).
 *
 * Do not use this class directly, use `SVG` and `Canvas` instead.
 *
 * @event update: Event
 * Fired when the renderer updates its bounds, center and zoom, for example when
 * its map has moved
 */

var Renderer = Layer.extend({

	// @section
	// @aka Renderer options
	options: {
		// @option padding: Number = 0.1
		// How much to extend the clip area around the map view (relative to its size)
		// e.g. 0.1 would be 10% of map view in each direction
		padding: 0.1,

		// @option tolerance: Number = 0
		// How much to extend click tolerance round a path/object on the map
		tolerance : 0
	},

	initialize: function (options) {
		setOptions(this, options);
		stamp(this);
		this._layers = this._layers || {};
	},

	onAdd: function () {
		if (!this._container) {
			this._initContainer(); // defined by renderer implementations

			if (this._zoomAnimated) {
				addClass(this._container, 'leaflet-zoom-animated');
			}
		}

		this.getPane().appendChild(this._container);
		this._update();
		this.on('update', this._updatePaths, this);
	},

	onRemove: function () {
		this.off('update', this._updatePaths, this);
		this._destroyContainer();
	},

	getEvents: function () {
		var events = {
			viewreset: this._reset,
			zoom: this._onZoom,
			moveend: this._update,
			zoomend: this._onZoomEnd
		};
		if (this._zoomAnimated) {
			events.zoomanim = this._onAnimZoom;
		}
		return events;
	},

	_onAnimZoom: function (ev) {
		this._updateTransform(ev.center, ev.zoom);
	},

	_onZoom: function () {
		this._updateTransform(this._map.getCenter(), this._map.getZoom());
	},

	_updateTransform: function (center, zoom) {
		var scale = this._map.getZoomScale(zoom, this._zoom),
		    position = getPosition(this._container),
		    viewHalf = this._map.getSize().multiplyBy(0.5 + this.options.padding),
		    currentCenterPoint = this._map.project(this._center, zoom),
		    destCenterPoint = this._map.project(center, zoom),
		    centerOffset = destCenterPoint.subtract(currentCenterPoint),

		    topLeftOffset = viewHalf.multiplyBy(-scale).add(position).add(viewHalf).subtract(centerOffset);

		if (any3d) {
			setTransform(this._container, topLeftOffset, scale);
		} else {
			setPosition(this._container, topLeftOffset);
		}
	},

	_reset: function () {
		this._update();
		this._updateTransform(this._center, this._zoom);

		for (var id in this._layers) {
			this._layers[id]._reset();
		}
	},

	_onZoomEnd: function () {
		for (var id in this._layers) {
			this._layers[id]._project();
		}
	},

	_updatePaths: function () {
		for (var id in this._layers) {
			this._layers[id]._update();
		}
	},

	_update: function () {
		// Update pixel bounds of renderer container (for positioning/sizing/clipping later)
		// Subclasses are responsible of firing the 'update' event.
		var p = this.options.padding,
		    size = this._map.getSize(),
		    min = this._map.containerPointToLayerPoint(size.multiplyBy(-p)).round();

		this._bounds = new Bounds(min, min.add(size.multiplyBy(1 + p * 2)).round());

		this._center = this._map.getCenter();
		this._zoom = this._map.getZoom();
	}
});

/*
 * @class Canvas
 * @inherits Renderer
 * @aka L.Canvas
 *
 * Allows vector layers to be displayed with [`<canvas>`](https://developer.mozilla.org/docs/Web/API/Canvas_API).
 * Inherits `Renderer`.
 *
 * Due to [technical limitations](http://caniuse.com/#search=canvas), Canvas is not
 * available in all web browsers, notably IE8, and overlapping geometries might
 * not display properly in some edge cases.
 *
 * @example
 *
 * Use Canvas by default for all paths in the map:
 *
 * ```js
 * var map = L.map('map', {
 * 	renderer: L.canvas()
 * });
 * ```
 *
 * Use a Canvas renderer with extra padding for specific vector geometries:
 *
 * ```js
 * var map = L.map('map');
 * var myRenderer = L.canvas({ padding: 0.5 });
 * var line = L.polyline( coordinates, { renderer: myRenderer } );
 * var circle = L.circle( center, { renderer: myRenderer } );
 * ```
 */

var Canvas = Renderer.extend({
	getEvents: function () {
		var events = Renderer.prototype.getEvents.call(this);
		events.viewprereset = this._onViewPreReset;
		return events;
	},

	_onViewPreReset: function () {
		// Set a flag so that a viewprereset+moveend+viewreset only updates&redraws once
		this._postponeUpdatePaths = true;
	},

	onAdd: function () {
		Renderer.prototype.onAdd.call(this);

		// Redraw vectors since canvas is cleared upon removal,
		// in case of removing the renderer itself from the map.
		this._draw();
	},

	_initContainer: function () {
		var container = this._container = document.createElement('canvas');

		on(container, 'mousemove', throttle(this._onMouseMove, 32, this), this);
		on(container, 'click dblclick mousedown mouseup contextmenu', this._onClick, this);
		on(container, 'mouseout', this._handleMouseOut, this);

		this._ctx = container.getContext('2d');
	},

	_destroyContainer: function () {
		cancelAnimFrame(this._redrawRequest);
		delete this._ctx;
		remove(this._container);
		off(this._container);
		delete this._container;
	},

	_updatePaths: function () {
		if (this._postponeUpdatePaths) { return; }

		var layer;
		this._redrawBounds = null;
		for (var id in this._layers) {
			layer = this._layers[id];
			layer._update();
		}
		this._redraw();
	},

	_update: function () {
		if (this._map._animatingZoom && this._bounds) { return; }

		Renderer.prototype._update.call(this);

		var b = this._bounds,
		    container = this._container,
		    size = b.getSize(),
		    m = retina ? 2 : 1;

		setPosition(container, b.min);

		// set canvas size (also clearing it); use double size on retina
		container.width = m * size.x;
		container.height = m * size.y;
		container.style.width = size.x + 'px';
		container.style.height = size.y + 'px';

		if (retina) {
			this._ctx.scale(2, 2);
		}

		// translate so we use the same path coordinates after canvas element moves
		this._ctx.translate(-b.min.x, -b.min.y);

		// Tell paths to redraw themselves
		this.fire('update');
	},

	_reset: function () {
		Renderer.prototype._reset.call(this);

		if (this._postponeUpdatePaths) {
			this._postponeUpdatePaths = false;
			this._updatePaths();
		}
	},

	_initPath: function (layer) {
		this._updateDashArray(layer);
		this._layers[stamp(layer)] = layer;

		var order = layer._order = {
			layer: layer,
			prev: this._drawLast,
			next: null
		};
		if (this._drawLast) { this._drawLast.next = order; }
		this._drawLast = order;
		this._drawFirst = this._drawFirst || this._drawLast;
	},

	_addPath: function (layer) {
		this._requestRedraw(layer);
	},

	_removePath: function (layer) {
		var order = layer._order;
		var next = order.next;
		var prev = order.prev;

		if (next) {
			next.prev = prev;
		} else {
			this._drawLast = prev;
		}
		if (prev) {
			prev.next = next;
		} else {
			this._drawFirst = next;
		}

		delete layer._order;

		delete this._layers[stamp(layer)];

		this._requestRedraw(layer);
	},

	_updatePath: function (layer) {
		// Redraw the union of the layer's old pixel
		// bounds and the new pixel bounds.
		this._extendRedrawBounds(layer);
		layer._project();
		layer._update();
		// The redraw will extend the redraw bounds
		// with the new pixel bounds.
		this._requestRedraw(layer);
	},

	_updateStyle: function (layer) {
		this._updateDashArray(layer);
		this._requestRedraw(layer);
	},

	_updateDashArray: function (layer) {
		if (typeof layer.options.dashArray === 'string') {
			var parts = layer.options.dashArray.split(/[, ]+/),
			    dashArray = [],
			    dashValue,
			    i;
			for (i = 0; i < parts.length; i++) {
				dashValue = Number(parts[i]);
				// Ignore dash array containing invalid lengths
				if (isNaN(dashValue)) { return; }
				dashArray.push(dashValue);
			}
			layer.options._dashArray = dashArray;
		} else {
			layer.options._dashArray = layer.options.dashArray;
		}
	},

	_requestRedraw: function (layer) {
		if (!this._map) { return; }

		this._extendRedrawBounds(layer);
		this._redrawRequest = this._redrawRequest || requestAnimFrame(this._redraw, this);
	},

	_extendRedrawBounds: function (layer) {
		if (layer._pxBounds) {
			var padding = (layer.options.weight || 0) + 1;
			this._redrawBounds = this._redrawBounds || new Bounds();
			this._redrawBounds.extend(layer._pxBounds.min.subtract([padding, padding]));
			this._redrawBounds.extend(layer._pxBounds.max.add([padding, padding]));
		}
	},

	_redraw: function () {
		this._redrawRequest = null;

		if (this._redrawBounds) {
			this._redrawBounds.min._floor();
			this._redrawBounds.max._ceil();
		}

		this._clear(); // clear layers in redraw bounds
		this._draw(); // draw layers

		this._redrawBounds = null;
	},

	_clear: function () {
		var bounds = this._redrawBounds;
		if (bounds) {
			var size = bounds.getSize();
			this._ctx.clearRect(bounds.min.x, bounds.min.y, size.x, size.y);
		} else {
			this._ctx.clearRect(0, 0, this._container.width, this._container.height);
		}
	},

	_draw: function () {
		var layer, bounds = this._redrawBounds;
		this._ctx.save();
		if (bounds) {
			var size = bounds.getSize();
			this._ctx.beginPath();
			this._ctx.rect(bounds.min.x, bounds.min.y, size.x, size.y);
			this._ctx.clip();
		}

		this._drawing = true;

		for (var order = this._drawFirst; order; order = order.next) {
			layer = order.layer;
			if (!bounds || (layer._pxBounds && layer._pxBounds.intersects(bounds))) {
				layer._updatePath();
			}
		}

		this._drawing = false;

		this._ctx.restore();  // Restore state before clipping.
	},

	_updatePoly: function (layer, closed) {
		if (!this._drawing) { return; }

		var i, j, len2, p,
		    parts = layer._parts,
		    len = parts.length,
		    ctx = this._ctx;

		if (!len) { return; }

		ctx.beginPath();

		for (i = 0; i < len; i++) {
			for (j = 0, len2 = parts[i].length; j < len2; j++) {
				p = parts[i][j];
				ctx[j ? 'lineTo' : 'moveTo'](p.x, p.y);
			}
			if (closed) {
				ctx.closePath();
			}
		}

		this._fillStroke(ctx, layer);

		// TODO optimization: 1 fill/stroke for all features with equal style instead of 1 for each feature
	},

	_updateCircle: function (layer) {

		if (!this._drawing || layer._empty()) { return; }

		var p = layer._point,
		    ctx = this._ctx,
		    r = Math.max(Math.round(layer._radius), 1),
		    s = (Math.max(Math.round(layer._radiusY), 1) || r) / r;

		if (s !== 1) {
			ctx.save();
			ctx.scale(1, s);
		}

		ctx.beginPath();
		ctx.arc(p.x, p.y / s, r, 0, Math.PI * 2, false);

		if (s !== 1) {
			ctx.restore();
		}

		this._fillStroke(ctx, layer);
	},

	_fillStroke: function (ctx, layer) {
		var options = layer.options;

		if (options.fill) {
			ctx.globalAlpha = options.fillOpacity;
			ctx.fillStyle = options.fillColor || options.color;
			ctx.fill(options.fillRule || 'evenodd');
		}

		if (options.stroke && options.weight !== 0) {
			if (ctx.setLineDash) {
				ctx.setLineDash(layer.options && layer.options._dashArray || []);
			}
			ctx.globalAlpha = options.opacity;
			ctx.lineWidth = options.weight;
			ctx.strokeStyle = options.color;
			ctx.lineCap = options.lineCap;
			ctx.lineJoin = options.lineJoin;
			ctx.stroke();
		}
	},

	// Canvas obviously doesn't have mouse events for individual drawn objects,
	// so we emulate that by calculating what's under the mouse on mousemove/click manually

	_onClick: function (e) {
		var point = this._map.mouseEventToLayerPoint(e), layer, clickedLayer;

		for (var order = this._drawFirst; order; order = order.next) {
			layer = order.layer;
			if (layer.options.interactive && layer._containsPoint(point) && !this._map._draggableMoved(layer)) {
				clickedLayer = layer;
			}
		}
		if (clickedLayer)  {
			fakeStop(e);
			this._fireEvent([clickedLayer], e);
		}
	},

	_onMouseMove: function (e) {
		if (!this._map || this._map.dragging.moving() || this._map._animatingZoom) { return; }

		var point = this._map.mouseEventToLayerPoint(e);
		this._handleMouseHover(e, point);
	},


	_handleMouseOut: function (e) {
		var layer = this._hoveredLayer;
		if (layer) {
			// if we're leaving the layer, fire mouseout
			removeClass(this._container, 'leaflet-interactive');
			this._fireEvent([layer], e, 'mouseout');
			this._hoveredLayer = null;
		}
	},

	_handleMouseHover: function (e, point) {
		var layer, candidateHoveredLayer;

		for (var order = this._drawFirst; order; order = order.next) {
			layer = order.layer;
			if (layer.options.interactive && layer._containsPoint(point)) {
				candidateHoveredLayer = layer;
			}
		}

		if (candidateHoveredLayer !== this._hoveredLayer) {
			this._handleMouseOut(e);

			if (candidateHoveredLayer) {
				addClass(this._container, 'leaflet-interactive'); // change cursor
				this._fireEvent([candidateHoveredLayer], e, 'mouseover');
				this._hoveredLayer = candidateHoveredLayer;
			}
		}

		if (this._hoveredLayer) {
			this._fireEvent([this._hoveredLayer], e);
		}
	},

	_fireEvent: function (layers, e, type) {
		this._map._fireDOMEvent(e, type || e.type, layers);
	},

	_bringToFront: function (layer) {
		var order = layer._order;

		if (!order) { return; }

		var next = order.next;
		var prev = order.prev;

		if (next) {
			next.prev = prev;
		} else {
			// Already last
			return;
		}
		if (prev) {
			prev.next = next;
		} else if (next) {
			// Update first entry unless this is the
			// single entry
			this._drawFirst = next;
		}

		order.prev = this._drawLast;
		this._drawLast.next = order;

		order.next = null;
		this._drawLast = order;

		this._requestRedraw(layer);
	},

	_bringToBack: function (layer) {
		var order = layer._order;

		if (!order) { return; }

		var next = order.next;
		var prev = order.prev;

		if (prev) {
			prev.next = next;
		} else {
			// Already first
			return;
		}
		if (next) {
			next.prev = prev;
		} else if (prev) {
			// Update last entry unless this is the
			// single entry
			this._drawLast = prev;
		}

		order.prev = null;

		order.next = this._drawFirst;
		this._drawFirst.prev = order;
		this._drawFirst = order;

		this._requestRedraw(layer);
	}
});

// @factory L.canvas(options?: Renderer options)
// Creates a Canvas renderer with the given options.
function canvas$1(options) {
	return canvas ? new Canvas(options) : null;
}

/*
 * Thanks to Dmitry Baranovsky and his Raphael library for inspiration!
 */


var vmlCreate = (function () {
	try {
		document.namespaces.add('lvml', 'urn:schemas-microsoft-com:vml');
		return function (name) {
			return document.createElement('<lvml:' + name + ' class="lvml">');
		};
	} catch (e) {
		return function (name) {
			return document.createElement('<' + name + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">');
		};
	}
})();


/*
 * @class SVG
 *
 *
 * VML was deprecated in 2012, which means VML functionality exists only for backwards compatibility
 * with old versions of Internet Explorer.
 */

// mixin to redefine some SVG methods to handle VML syntax which is similar but with some differences
var vmlMixin = {

	_initContainer: function () {
		this._container = create$1('div', 'leaflet-vml-container');
	},

	_update: function () {
		if (this._map._animatingZoom) { return; }
		Renderer.prototype._update.call(this);
		this.fire('update');
	},

	_initPath: function (layer) {
		var container = layer._container = vmlCreate('shape');

		addClass(container, 'leaflet-vml-shape ' + (this.options.className || ''));

		container.coordsize = '1 1';

		layer._path = vmlCreate('path');
		container.appendChild(layer._path);

		this._updateStyle(layer);
		this._layers[stamp(layer)] = layer;
	},

	_addPath: function (layer) {
		var container = layer._container;
		this._container.appendChild(container);

		if (layer.options.interactive) {
			layer.addInteractiveTarget(container);
		}
	},

	_removePath: function (layer) {
		var container = layer._container;
		remove(container);
		layer.removeInteractiveTarget(container);
		delete this._layers[stamp(layer)];
	},

	_updateStyle: function (layer) {
		var stroke = layer._stroke,
		    fill = layer._fill,
		    options = layer.options,
		    container = layer._container;

		container.stroked = !!options.stroke;
		container.filled = !!options.fill;

		if (options.stroke) {
			if (!stroke) {
				stroke = layer._stroke = vmlCreate('stroke');
			}
			container.appendChild(stroke);
			stroke.weight = options.weight + 'px';
			stroke.color = options.color;
			stroke.opacity = options.opacity;

			if (options.dashArray) {
				stroke.dashStyle = isArray(options.dashArray) ?
				    options.dashArray.join(' ') :
				    options.dashArray.replace(/( *, *)/g, ' ');
			} else {
				stroke.dashStyle = '';
			}
			stroke.endcap = options.lineCap.replace('butt', 'flat');
			stroke.joinstyle = options.lineJoin;

		} else if (stroke) {
			container.removeChild(stroke);
			layer._stroke = null;
		}

		if (options.fill) {
			if (!fill) {
				fill = layer._fill = vmlCreate('fill');
			}
			container.appendChild(fill);
			fill.color = options.fillColor || options.color;
			fill.opacity = options.fillOpacity;

		} else if (fill) {
			container.removeChild(fill);
			layer._fill = null;
		}
	},

	_updateCircle: function (layer) {
		var p = layer._point.round(),
		    r = Math.round(layer._radius),
		    r2 = Math.round(layer._radiusY || r);

		this._setPath(layer, layer._empty() ? 'M0 0' :
			'AL ' + p.x + ',' + p.y + ' ' + r + ',' + r2 + ' 0,' + (65535 * 360));
	},

	_setPath: function (layer, path) {
		layer._path.v = path;
	},

	_bringToFront: function (layer) {
		toFront(layer._container);
	},

	_bringToBack: function (layer) {
		toBack(layer._container);
	}
};

var create$2 = vml ? vmlCreate : svgCreate;

/*
 * @class SVG
 * @inherits Renderer
 * @aka L.SVG
 *
 * Allows vector layers to be displayed with [SVG](https://developer.mozilla.org/docs/Web/SVG).
 * Inherits `Renderer`.
 *
 * Due to [technical limitations](http://caniuse.com/#search=svg), SVG is not
 * available in all web browsers, notably Android 2.x and 3.x.
 *
 * Although SVG is not available on IE7 and IE8, these browsers support
 * [VML](https://en.wikipedia.org/wiki/Vector_Markup_Language)
 * (a now deprecated technology), and the SVG renderer will fall back to VML in
 * this case.
 *
 * @example
 *
 * Use SVG by default for all paths in the map:
 *
 * ```js
 * var map = L.map('map', {
 * 	renderer: L.svg()
 * });
 * ```
 *
 * Use a SVG renderer with extra padding for specific vector geometries:
 *
 * ```js
 * var map = L.map('map');
 * var myRenderer = L.svg({ padding: 0.5 });
 * var line = L.polyline( coordinates, { renderer: myRenderer } );
 * var circle = L.circle( center, { renderer: myRenderer } );
 * ```
 */

var SVG = Renderer.extend({

	getEvents: function () {
		var events = Renderer.prototype.getEvents.call(this);
		events.zoomstart = this._onZoomStart;
		return events;
	},

	_initContainer: function () {
		this._container = create$2('svg');

		// makes it possible to click through svg root; we'll reset it back in individual paths
		this._container.setAttribute('pointer-events', 'none');

		this._rootGroup = create$2('g');
		this._container.appendChild(this._rootGroup);
	},

	_destroyContainer: function () {
		remove(this._container);
		off(this._container);
		delete this._container;
		delete this._rootGroup;
		delete this._svgSize;
	},

	_onZoomStart: function () {
		// Drag-then-pinch interactions might mess up the center and zoom.
		// In this case, the easiest way to prevent this is re-do the renderer
		//   bounds and padding when the zooming starts.
		this._update();
	},

	_update: function () {
		if (this._map._animatingZoom && this._bounds) { return; }

		Renderer.prototype._update.call(this);

		var b = this._bounds,
		    size = b.getSize(),
		    container = this._container;

		// set size of svg-container if changed
		if (!this._svgSize || !this._svgSize.equals(size)) {
			this._svgSize = size;
			container.setAttribute('width', size.x);
			container.setAttribute('height', size.y);
		}

		// movement: update container viewBox so that we don't have to change coordinates of individual layers
		setPosition(container, b.min);
		container.setAttribute('viewBox', [b.min.x, b.min.y, size.x, size.y].join(' '));

		this.fire('update');
	},

	// methods below are called by vector layers implementations

	_initPath: function (layer) {
		var path = layer._path = create$2('path');

		// @namespace Path
		// @option className: String = null
		// Custom class name set on an element. Only for SVG renderer.
		if (layer.options.className) {
			addClass(path, layer.options.className);
		}

		if (layer.options.interactive) {
			addClass(path, 'leaflet-interactive');
		}

		this._updateStyle(layer);
		this._layers[stamp(layer)] = layer;
	},

	_addPath: function (layer) {
		if (!this._rootGroup) { this._initContainer(); }
		this._rootGroup.appendChild(layer._path);
		layer.addInteractiveTarget(layer._path);
	},

	_removePath: function (layer) {
		remove(layer._path);
		layer.removeInteractiveTarget(layer._path);
		delete this._layers[stamp(layer)];
	},

	_updatePath: function (layer) {
		layer._project();
		layer._update();
	},

	_updateStyle: function (layer) {
		var path = layer._path,
		    options = layer.options;

		if (!path) { return; }

		if (options.stroke) {
			path.setAttribute('stroke', options.color);
			path.setAttribute('stroke-opacity', options.opacity);
			path.setAttribute('stroke-width', options.weight);
			path.setAttribute('stroke-linecap', options.lineCap);
			path.setAttribute('stroke-linejoin', options.lineJoin);

			if (options.dashArray) {
				path.setAttribute('stroke-dasharray', options.dashArray);
			} else {
				path.removeAttribute('stroke-dasharray');
			}

			if (options.dashOffset) {
				path.setAttribute('stroke-dashoffset', options.dashOffset);
			} else {
				path.removeAttribute('stroke-dashoffset');
			}
		} else {
			path.setAttribute('stroke', 'none');
		}

		if (options.fill) {
			path.setAttribute('fill', options.fillColor || options.color);
			path.setAttribute('fill-opacity', options.fillOpacity);
			path.setAttribute('fill-rule', options.fillRule || 'evenodd');
		} else {
			path.setAttribute('fill', 'none');
		}
	},

	_updatePoly: function (layer, closed) {
		this._setPath(layer, pointsToPath(layer._parts, closed));
	},

	_updateCircle: function (layer) {
		var p = layer._point,
		    r = Math.max(Math.round(layer._radius), 1),
		    r2 = Math.max(Math.round(layer._radiusY), 1) || r,
		    arc = 'a' + r + ',' + r2 + ' 0 1,0 ';

		// drawing a circle with two half-arcs
		var d = layer._empty() ? 'M0 0' :
			'M' + (p.x - r) + ',' + p.y +
			arc + (r * 2) + ',0 ' +
			arc + (-r * 2) + ',0 ';

		this._setPath(layer, d);
	},

	_setPath: function (layer, path) {
		layer._path.setAttribute('d', path);
	},

	// SVG does not have the concept of zIndex so we resort to changing the DOM order of elements
	_bringToFront: function (layer) {
		toFront(layer._path);
	},

	_bringToBack: function (layer) {
		toBack(layer._path);
	}
});

if (vml) {
	SVG.include(vmlMixin);
}

// @namespace SVG
// @factory L.svg(options?: Renderer options)
// Creates a SVG renderer with the given options.
function svg$1(options) {
	return svg || vml ? new SVG(options) : null;
}

Map.include({
	// @namespace Map; @method getRenderer(layer: Path): Renderer
	// Returns the instance of `Renderer` that should be used to render the given
	// `Path`. It will ensure that the `renderer` options of the map and paths
	// are respected, and that the renderers do exist on the map.
	getRenderer: function (layer) {
		// @namespace Path; @option renderer: Renderer
		// Use this specific instance of `Renderer` for this path. Takes
		// precedence over the map's [default renderer](#map-renderer).
		var renderer = layer.options.renderer || this._getPaneRenderer(layer.options.pane) || this.options.renderer || this._renderer;

		if (!renderer) {
			renderer = this._renderer = this._createRenderer();
		}

		if (!this.hasLayer(renderer)) {
			this.addLayer(renderer);
		}
		return renderer;
	},

	_getPaneRenderer: function (name) {
		if (name === 'overlayPane' || name === undefined) {
			return false;
		}

		var renderer = this._paneRenderers[name];
		if (renderer === undefined) {
			renderer = this._createRenderer({pane: name});
			this._paneRenderers[name] = renderer;
		}
		return renderer;
	},

	_createRenderer: function (options) {
		// @namespace Map; @option preferCanvas: Boolean = false
		// Whether `Path`s should be rendered on a `Canvas` renderer.
		// By default, all `Path`s are rendered in a `SVG` renderer.
		return (this.options.preferCanvas && canvas$1(options)) || svg$1(options);
	}
});

/*
 * L.Rectangle extends Polygon and creates a rectangle when passed a LatLngBounds object.
 */

/*
 * @class Rectangle
 * @aka L.Rectangle
 * @inherits Polygon
 *
 * A class for drawing rectangle overlays on a map. Extends `Polygon`.
 *
 * @example
 *
 * ```js
 * // define rectangle geographical bounds
 * var bounds = [[54.559322, -5.767822], [56.1210604, -3.021240]];
 *
 * // create an orange rectangle
 * L.rectangle(bounds, {color: "#ff7800", weight: 1}).addTo(map);
 *
 * // zoom the map to the rectangle bounds
 * map.fitBounds(bounds);
 * ```
 *
 */


var Rectangle = Polygon.extend({
	initialize: function (latLngBounds, options) {
		Polygon.prototype.initialize.call(this, this._boundsToLatLngs(latLngBounds), options);
	},

	// @method setBounds(latLngBounds: LatLngBounds): this
	// Redraws the rectangle with the passed bounds.
	setBounds: function (latLngBounds) {
		return this.setLatLngs(this._boundsToLatLngs(latLngBounds));
	},

	_boundsToLatLngs: function (latLngBounds) {
		latLngBounds = toLatLngBounds(latLngBounds);
		return [
			latLngBounds.getSouthWest(),
			latLngBounds.getNorthWest(),
			latLngBounds.getNorthEast(),
			latLngBounds.getSouthEast()
		];
	}
});


// @factory L.rectangle(latLngBounds: LatLngBounds, options?: Polyline options)
function rectangle(latLngBounds, options) {
	return new Rectangle(latLngBounds, options);
}

SVG.create = create$2;
SVG.pointsToPath = pointsToPath;

GeoJSON.geometryToLayer = geometryToLayer;
GeoJSON.coordsToLatLng = coordsToLatLng;
GeoJSON.coordsToLatLngs = coordsToLatLngs;
GeoJSON.latLngToCoords = latLngToCoords;
GeoJSON.latLngsToCoords = latLngsToCoords;
GeoJSON.getFeature = getFeature;
GeoJSON.asFeature = asFeature;

/*
 * L.Handler.BoxZoom is used to add shift-drag zoom interaction to the map
 * (zoom to a selected bounding box), enabled by default.
 */

// @namespace Map
// @section Interaction Options
Map.mergeOptions({
	// @option boxZoom: Boolean = true
	// Whether the map can be zoomed to a rectangular area specified by
	// dragging the mouse while pressing the shift key.
	boxZoom: true
});

var BoxZoom = Handler.extend({
	initialize: function (map) {
		this._map = map;
		this._container = map._container;
		this._pane = map._panes.overlayPane;
		this._resetStateTimeout = 0;
		map.on('unload', this._destroy, this);
	},

	addHooks: function () {
		on(this._container, 'mousedown', this._onMouseDown, this);
	},

	removeHooks: function () {
		off(this._container, 'mousedown', this._onMouseDown, this);
	},

	moved: function () {
		return this._moved;
	},

	_destroy: function () {
		remove(this._pane);
		delete this._pane;
	},

	_resetState: function () {
		this._resetStateTimeout = 0;
		this._moved = false;
	},

	_clearDeferredResetState: function () {
		if (this._resetStateTimeout !== 0) {
			clearTimeout(this._resetStateTimeout);
			this._resetStateTimeout = 0;
		}
	},

	_onMouseDown: function (e) {
		if (!e.shiftKey || ((e.which !== 1) && (e.button !== 1))) { return false; }

		// Clear the deferred resetState if it hasn't executed yet, otherwise it
		// will interrupt the interaction and orphan a box element in the container.
		this._clearDeferredResetState();
		this._resetState();

		disableTextSelection();
		disableImageDrag();

		this._startPoint = this._map.mouseEventToContainerPoint(e);

		on(document, {
			contextmenu: stop,
			mousemove: this._onMouseMove,
			mouseup: this._onMouseUp,
			keydown: this._onKeyDown
		}, this);
	},

	_onMouseMove: function (e) {
		if (!this._moved) {
			this._moved = true;

			this._box = create$1('div', 'leaflet-zoom-box', this._container);
			addClass(this._container, 'leaflet-crosshair');

			this._map.fire('boxzoomstart');
		}

		this._point = this._map.mouseEventToContainerPoint(e);

		var bounds = new Bounds(this._point, this._startPoint),
		    size = bounds.getSize();

		setPosition(this._box, bounds.min);

		this._box.style.width  = size.x + 'px';
		this._box.style.height = size.y + 'px';
	},

	_finish: function () {
		if (this._moved) {
			remove(this._box);
			removeClass(this._container, 'leaflet-crosshair');
		}

		enableTextSelection();
		enableImageDrag();

		off(document, {
			contextmenu: stop,
			mousemove: this._onMouseMove,
			mouseup: this._onMouseUp,
			keydown: this._onKeyDown
		}, this);
	},

	_onMouseUp: function (e) {
		if ((e.which !== 1) && (e.button !== 1)) { return; }

		this._finish();

		if (!this._moved) { return; }
		// Postpone to next JS tick so internal click event handling
		// still see it as "moved".
		this._clearDeferredResetState();
		this._resetStateTimeout = setTimeout(bind(this._resetState, this), 0);

		var bounds = new LatLngBounds(
		        this._map.containerPointToLatLng(this._startPoint),
		        this._map.containerPointToLatLng(this._point));

		this._map
			.fitBounds(bounds)
			.fire('boxzoomend', {boxZoomBounds: bounds});
	},

	_onKeyDown: function (e) {
		if (e.keyCode === 27) {
			this._finish();
		}
	}
});

// @section Handlers
// @property boxZoom: Handler
// Box (shift-drag with mouse) zoom handler.
Map.addInitHook('addHandler', 'boxZoom', BoxZoom);

/*
 * L.Handler.DoubleClickZoom is used to handle double-click zoom on the map, enabled by default.
 */

// @namespace Map
// @section Interaction Options

Map.mergeOptions({
	// @option doubleClickZoom: Boolean|String = true
	// Whether the map can be zoomed in by double clicking on it and
	// zoomed out by double clicking while holding shift. If passed
	// `'center'`, double-click zoom will zoom to the center of the
	//  view regardless of where the mouse was.
	doubleClickZoom: true
});

var DoubleClickZoom = Handler.extend({
	addHooks: function () {
		this._map.on('dblclick', this._onDoubleClick, this);
	},

	removeHooks: function () {
		this._map.off('dblclick', this._onDoubleClick, this);
	},

	_onDoubleClick: function (e) {
		var map = this._map,
		    oldZoom = map.getZoom(),
		    delta = map.options.zoomDelta,
		    zoom = e.originalEvent.shiftKey ? oldZoom - delta : oldZoom + delta;

		if (map.options.doubleClickZoom === 'center') {
			map.setZoom(zoom);
		} else {
			map.setZoomAround(e.containerPoint, zoom);
		}
	}
});

// @section Handlers
//
// Map properties include interaction handlers that allow you to control
// interaction behavior in runtime, enabling or disabling certain features such
// as dragging or touch zoom (see `Handler` methods). For example:
//
// ```js
// map.doubleClickZoom.disable();
// ```
//
// @property doubleClickZoom: Handler
// Double click zoom handler.
Map.addInitHook('addHandler', 'doubleClickZoom', DoubleClickZoom);

/*
 * L.Handler.MapDrag is used to make the map draggable (with panning inertia), enabled by default.
 */

// @namespace Map
// @section Interaction Options
Map.mergeOptions({
	// @option dragging: Boolean = true
	// Whether the map be draggable with mouse/touch or not.
	dragging: true,

	// @section Panning Inertia Options
	// @option inertia: Boolean = *
	// If enabled, panning of the map will have an inertia effect where
	// the map builds momentum while dragging and continues moving in
	// the same direction for some time. Feels especially nice on touch
	// devices. Enabled by default unless running on old Android devices.
	inertia: !android23,

	// @option inertiaDeceleration: Number = 3000
	// The rate with which the inertial movement slows down, in pixels/second².
	inertiaDeceleration: 3400, // px/s^2

	// @option inertiaMaxSpeed: Number = Infinity
	// Max speed of the inertial movement, in pixels/second.
	inertiaMaxSpeed: Infinity, // px/s

	// @option easeLinearity: Number = 0.2
	easeLinearity: 0.2,

	// TODO refactor, move to CRS
	// @option worldCopyJump: Boolean = false
	// With this option enabled, the map tracks when you pan to another "copy"
	// of the world and seamlessly jumps to the original one so that all overlays
	// like markers and vector layers are still visible.
	worldCopyJump: false,

	// @option maxBoundsViscosity: Number = 0.0
	// If `maxBounds` is set, this option will control how solid the bounds
	// are when dragging the map around. The default value of `0.0` allows the
	// user to drag outside the bounds at normal speed, higher values will
	// slow down map dragging outside bounds, and `1.0` makes the bounds fully
	// solid, preventing the user from dragging outside the bounds.
	maxBoundsViscosity: 0.0
});

var Drag = Handler.extend({
	addHooks: function () {
		if (!this._draggable) {
			var map = this._map;

			this._draggable = new Draggable(map._mapPane, map._container);

			this._draggable.on({
				dragstart: this._onDragStart,
				drag: this._onDrag,
				dragend: this._onDragEnd
			}, this);

			this._draggable.on('predrag', this._onPreDragLimit, this);
			if (map.options.worldCopyJump) {
				this._draggable.on('predrag', this._onPreDragWrap, this);
				map.on('zoomend', this._onZoomEnd, this);

				map.whenReady(this._onZoomEnd, this);
			}
		}
		addClass(this._map._container, 'leaflet-grab leaflet-touch-drag');
		this._draggable.enable();
		this._positions = [];
		this._times = [];
	},

	removeHooks: function () {
		removeClass(this._map._container, 'leaflet-grab');
		removeClass(this._map._container, 'leaflet-touch-drag');
		this._draggable.disable();
	},

	moved: function () {
		return this._draggable && this._draggable._moved;
	},

	moving: function () {
		return this._draggable && this._draggable._moving;
	},

	_onDragStart: function () {
		var map = this._map;

		map._stop();
		if (this._map.options.maxBounds && this._map.options.maxBoundsViscosity) {
			var bounds = toLatLngBounds(this._map.options.maxBounds);

			this._offsetLimit = toBounds(
				this._map.latLngToContainerPoint(bounds.getNorthWest()).multiplyBy(-1),
				this._map.latLngToContainerPoint(bounds.getSouthEast()).multiplyBy(-1)
					.add(this._map.getSize()));

			this._viscosity = Math.min(1.0, Math.max(0.0, this._map.options.maxBoundsViscosity));
		} else {
			this._offsetLimit = null;
		}

		map
		    .fire('movestart')
		    .fire('dragstart');

		if (map.options.inertia) {
			this._positions = [];
			this._times = [];
		}
	},

	_onDrag: function (e) {
		if (this._map.options.inertia) {
			var time = this._lastTime = +new Date(),
			    pos = this._lastPos = this._draggable._absPos || this._draggable._newPos;

			this._positions.push(pos);
			this._times.push(time);

			this._prunePositions(time);
		}

		this._map
		    .fire('move', e)
		    .fire('drag', e);
	},

	_prunePositions: function (time) {
		while (this._positions.length > 1 && time - this._times[0] > 50) {
			this._positions.shift();
			this._times.shift();
		}
	},

	_onZoomEnd: function () {
		var pxCenter = this._map.getSize().divideBy(2),
		    pxWorldCenter = this._map.latLngToLayerPoint([0, 0]);

		this._initialWorldOffset = pxWorldCenter.subtract(pxCenter).x;
		this._worldWidth = this._map.getPixelWorldBounds().getSize().x;
	},

	_viscousLimit: function (value, threshold) {
		return value - (value - threshold) * this._viscosity;
	},

	_onPreDragLimit: function () {
		if (!this._viscosity || !this._offsetLimit) { return; }

		var offset = this._draggable._newPos.subtract(this._draggable._startPos);

		var limit = this._offsetLimit;
		if (offset.x < limit.min.x) { offset.x = this._viscousLimit(offset.x, limit.min.x); }
		if (offset.y < limit.min.y) { offset.y = this._viscousLimit(offset.y, limit.min.y); }
		if (offset.x > limit.max.x) { offset.x = this._viscousLimit(offset.x, limit.max.x); }
		if (offset.y > limit.max.y) { offset.y = this._viscousLimit(offset.y, limit.max.y); }

		this._draggable._newPos = this._draggable._startPos.add(offset);
	},

	_onPreDragWrap: function () {
		// TODO refactor to be able to adjust map pane position after zoom
		var worldWidth = this._worldWidth,
		    halfWidth = Math.round(worldWidth / 2),
		    dx = this._initialWorldOffset,
		    x = this._draggable._newPos.x,
		    newX1 = (x - halfWidth + dx) % worldWidth + halfWidth - dx,
		    newX2 = (x + halfWidth + dx) % worldWidth - halfWidth - dx,
		    newX = Math.abs(newX1 + dx) < Math.abs(newX2 + dx) ? newX1 : newX2;

		this._draggable._absPos = this._draggable._newPos.clone();
		this._draggable._newPos.x = newX;
	},

	_onDragEnd: function (e) {
		var map = this._map,
		    options = map.options,

		    noInertia = !options.inertia || this._times.length < 2;

		map.fire('dragend', e);

		if (noInertia) {
			map.fire('moveend');

		} else {
			this._prunePositions(+new Date());

			var direction = this._lastPos.subtract(this._positions[0]),
			    duration = (this._lastTime - this._times[0]) / 1000,
			    ease = options.easeLinearity,

			    speedVector = direction.multiplyBy(ease / duration),
			    speed = speedVector.distanceTo([0, 0]),

			    limitedSpeed = Math.min(options.inertiaMaxSpeed, speed),
			    limitedSpeedVector = speedVector.multiplyBy(limitedSpeed / speed),

			    decelerationDuration = limitedSpeed / (options.inertiaDeceleration * ease),
			    offset = limitedSpeedVector.multiplyBy(-decelerationDuration / 2).round();

			if (!offset.x && !offset.y) {
				map.fire('moveend');

			} else {
				offset = map._limitOffset(offset, map.options.maxBounds);

				requestAnimFrame(function () {
					map.panBy(offset, {
						duration: decelerationDuration,
						easeLinearity: ease,
						noMoveStart: true,
						animate: true
					});
				});
			}
		}
	}
});

// @section Handlers
// @property dragging: Handler
// Map dragging handler (by both mouse and touch).
Map.addInitHook('addHandler', 'dragging', Drag);

/*
 * L.Map.Keyboard is handling keyboard interaction with the map, enabled by default.
 */

// @namespace Map
// @section Keyboard Navigation Options
Map.mergeOptions({
	// @option keyboard: Boolean = true
	// Makes the map focusable and allows users to navigate the map with keyboard
	// arrows and `+`/`-` keys.
	keyboard: true,

	// @option keyboardPanDelta: Number = 80
	// Amount of pixels to pan when pressing an arrow key.
	keyboardPanDelta: 80
});

var Keyboard = Handler.extend({

	keyCodes: {
		left:    [37],
		right:   [39],
		down:    [40],
		up:      [38],
		zoomIn:  [187, 107, 61, 171],
		zoomOut: [189, 109, 54, 173]
	},

	initialize: function (map) {
		this._map = map;

		this._setPanDelta(map.options.keyboardPanDelta);
		this._setZoomDelta(map.options.zoomDelta);
	},

	addHooks: function () {
		var container = this._map._container;

		// make the container focusable by tabbing
		if (container.tabIndex <= 0) {
			container.tabIndex = '0';
		}

		on(container, {
			focus: this._onFocus,
			blur: this._onBlur,
			mousedown: this._onMouseDown
		}, this);

		this._map.on({
			focus: this._addHooks,
			blur: this._removeHooks
		}, this);
	},

	removeHooks: function () {
		this._removeHooks();

		off(this._map._container, {
			focus: this._onFocus,
			blur: this._onBlur,
			mousedown: this._onMouseDown
		}, this);

		this._map.off({
			focus: this._addHooks,
			blur: this._removeHooks
		}, this);
	},

	_onMouseDown: function () {
		if (this._focused) { return; }

		var body = document.body,
		    docEl = document.documentElement,
		    top = body.scrollTop || docEl.scrollTop,
		    left = body.scrollLeft || docEl.scrollLeft;

		this._map._container.focus();

		window.scrollTo(left, top);
	},

	_onFocus: function () {
		this._focused = true;
		this._map.fire('focus');
	},

	_onBlur: function () {
		this._focused = false;
		this._map.fire('blur');
	},

	_setPanDelta: function (panDelta) {
		var keys = this._panKeys = {},
		    codes = this.keyCodes,
		    i, len;

		for (i = 0, len = codes.left.length; i < len; i++) {
			keys[codes.left[i]] = [-1 * panDelta, 0];
		}
		for (i = 0, len = codes.right.length; i < len; i++) {
			keys[codes.right[i]] = [panDelta, 0];
		}
		for (i = 0, len = codes.down.length; i < len; i++) {
			keys[codes.down[i]] = [0, panDelta];
		}
		for (i = 0, len = codes.up.length; i < len; i++) {
			keys[codes.up[i]] = [0, -1 * panDelta];
		}
	},

	_setZoomDelta: function (zoomDelta) {
		var keys = this._zoomKeys = {},
		    codes = this.keyCodes,
		    i, len;

		for (i = 0, len = codes.zoomIn.length; i < len; i++) {
			keys[codes.zoomIn[i]] = zoomDelta;
		}
		for (i = 0, len = codes.zoomOut.length; i < len; i++) {
			keys[codes.zoomOut[i]] = -zoomDelta;
		}
	},

	_addHooks: function () {
		on(document, 'keydown', this._onKeyDown, this);
	},

	_removeHooks: function () {
		off(document, 'keydown', this._onKeyDown, this);
	},

	_onKeyDown: function (e) {
		if (e.altKey || e.ctrlKey || e.metaKey) { return; }

		var key = e.keyCode,
		    map = this._map,
		    offset;

		if (key in this._panKeys) {
			if (!map._panAnim || !map._panAnim._inProgress) {
				offset = this._panKeys[key];
				if (e.shiftKey) {
					offset = toPoint(offset).multiplyBy(3);
				}

				map.panBy(offset);

				if (map.options.maxBounds) {
					map.panInsideBounds(map.options.maxBounds);
				}
			}
		} else if (key in this._zoomKeys) {
			map.setZoom(map.getZoom() + (e.shiftKey ? 3 : 1) * this._zoomKeys[key]);

		} else if (key === 27 && map._popup && map._popup.options.closeOnEscapeKey) {
			map.closePopup();

		} else {
			return;
		}

		stop(e);
	}
});

// @section Handlers
// @section Handlers
// @property keyboard: Handler
// Keyboard navigation handler.
Map.addInitHook('addHandler', 'keyboard', Keyboard);

/*
 * L.Handler.ScrollWheelZoom is used by L.Map to enable mouse scroll wheel zoom on the map.
 */

// @namespace Map
// @section Interaction Options
Map.mergeOptions({
	// @section Mousewheel options
	// @option scrollWheelZoom: Boolean|String = true
	// Whether the map can be zoomed by using the mouse wheel. If passed `'center'`,
	// it will zoom to the center of the view regardless of where the mouse was.
	scrollWheelZoom: true,

	// @option wheelDebounceTime: Number = 40
	// Limits the rate at which a wheel can fire (in milliseconds). By default
	// user can't zoom via wheel more often than once per 40 ms.
	wheelDebounceTime: 40,

	// @option wheelPxPerZoomLevel: Number = 60
	// How many scroll pixels (as reported by [L.DomEvent.getWheelDelta](#domevent-getwheeldelta))
	// mean a change of one full zoom level. Smaller values will make wheel-zooming
	// faster (and vice versa).
	wheelPxPerZoomLevel: 60
});

var ScrollWheelZoom = Handler.extend({
	addHooks: function () {
		on(this._map._container, 'mousewheel', this._onWheelScroll, this);

		this._delta = 0;
	},

	removeHooks: function () {
		off(this._map._container, 'mousewheel', this._onWheelScroll, this);
	},

	_onWheelScroll: function (e) {
		var delta = getWheelDelta(e);

		var debounce = this._map.options.wheelDebounceTime;

		this._delta += delta;
		this._lastMousePos = this._map.mouseEventToContainerPoint(e);

		if (!this._startTime) {
			this._startTime = +new Date();
		}

		var left = Math.max(debounce - (+new Date() - this._startTime), 0);

		clearTimeout(this._timer);
		this._timer = setTimeout(bind(this._performZoom, this), left);

		stop(e);
	},

	_performZoom: function () {
		var map = this._map,
		    zoom = map.getZoom(),
		    snap = this._map.options.zoomSnap || 0;

		map._stop(); // stop panning and fly animations if any

		// map the delta with a sigmoid function to -4..4 range leaning on -1..1
		var d2 = this._delta / (this._map.options.wheelPxPerZoomLevel * 4),
		    d3 = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(d2)))) / Math.LN2,
		    d4 = snap ? Math.ceil(d3 / snap) * snap : d3,
		    delta = map._limitZoom(zoom + (this._delta > 0 ? d4 : -d4)) - zoom;

		this._delta = 0;
		this._startTime = null;

		if (!delta) { return; }

		if (map.options.scrollWheelZoom === 'center') {
			map.setZoom(zoom + delta);
		} else {
			map.setZoomAround(this._lastMousePos, zoom + delta);
		}
	}
});

// @section Handlers
// @property scrollWheelZoom: Handler
// Scroll wheel zoom handler.
Map.addInitHook('addHandler', 'scrollWheelZoom', ScrollWheelZoom);

/*
 * L.Map.Tap is used to enable mobile hacks like quick taps and long hold.
 */

// @namespace Map
// @section Interaction Options
Map.mergeOptions({
	// @section Touch interaction options
	// @option tap: Boolean = true
	// Enables mobile hacks for supporting instant taps (fixing 200ms click
	// delay on iOS/Android) and touch holds (fired as `contextmenu` events).
	tap: true,

	// @option tapTolerance: Number = 15
	// The max number of pixels a user can shift his finger during touch
	// for it to be considered a valid tap.
	tapTolerance: 15
});

var Tap = Handler.extend({
	addHooks: function () {
		on(this._map._container, 'touchstart', this._onDown, this);
	},

	removeHooks: function () {
		off(this._map._container, 'touchstart', this._onDown, this);
	},

	_onDown: function (e) {
		if (!e.touches) { return; }

		preventDefault(e);

		this._fireClick = true;

		// don't simulate click or track longpress if more than 1 touch
		if (e.touches.length > 1) {
			this._fireClick = false;
			clearTimeout(this._holdTimeout);
			return;
		}

		var first = e.touches[0],
		    el = first.target;

		this._startPos = this._newPos = new Point(first.clientX, first.clientY);

		// if touching a link, highlight it
		if (el.tagName && el.tagName.toLowerCase() === 'a') {
			addClass(el, 'leaflet-active');
		}

		// simulate long hold but setting a timeout
		this._holdTimeout = setTimeout(bind(function () {
			if (this._isTapValid()) {
				this._fireClick = false;
				this._onUp();
				this._simulateEvent('contextmenu', first);
			}
		}, this), 1000);

		this._simulateEvent('mousedown', first);

		on(document, {
			touchmove: this._onMove,
			touchend: this._onUp
		}, this);
	},

	_onUp: function (e) {
		clearTimeout(this._holdTimeout);

		off(document, {
			touchmove: this._onMove,
			touchend: this._onUp
		}, this);

		if (this._fireClick && e && e.changedTouches) {

			var first = e.changedTouches[0],
			    el = first.target;

			if (el && el.tagName && el.tagName.toLowerCase() === 'a') {
				removeClass(el, 'leaflet-active');
			}

			this._simulateEvent('mouseup', first);

			// simulate click if the touch didn't move too much
			if (this._isTapValid()) {
				this._simulateEvent('click', first);
			}
		}
	},

	_isTapValid: function () {
		return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance;
	},

	_onMove: function (e) {
		var first = e.touches[0];
		this._newPos = new Point(first.clientX, first.clientY);
		this._simulateEvent('mousemove', first);
	},

	_simulateEvent: function (type, e) {
		var simulatedEvent = document.createEvent('MouseEvents');

		simulatedEvent._simulated = true;
		e.target._simulatedClick = true;

		simulatedEvent.initMouseEvent(
		        type, true, true, window, 1,
		        e.screenX, e.screenY,
		        e.clientX, e.clientY,
		        false, false, false, false, 0, null);

		e.target.dispatchEvent(simulatedEvent);
	}
});

// @section Handlers
// @property tap: Handler
// Mobile touch hacks (quick tap and touch hold) handler.
if (touch && !pointer) {
	Map.addInitHook('addHandler', 'tap', Tap);
}

/*
 * L.Handler.TouchZoom is used by L.Map to add pinch zoom on supported mobile browsers.
 */

// @namespace Map
// @section Interaction Options
Map.mergeOptions({
	// @section Touch interaction options
	// @option touchZoom: Boolean|String = *
	// Whether the map can be zoomed by touch-dragging with two fingers. If
	// passed `'center'`, it will zoom to the center of the view regardless of
	// where the touch events (fingers) were. Enabled for touch-capable web
	// browsers except for old Androids.
	touchZoom: touch && !android23,

	// @option bounceAtZoomLimits: Boolean = true
	// Set it to false if you don't want the map to zoom beyond min/max zoom
	// and then bounce back when pinch-zooming.
	bounceAtZoomLimits: true
});

var TouchZoom = Handler.extend({
	addHooks: function () {
		addClass(this._map._container, 'leaflet-touch-zoom');
		on(this._map._container, 'touchstart', this._onTouchStart, this);
	},

	removeHooks: function () {
		removeClass(this._map._container, 'leaflet-touch-zoom');
		off(this._map._container, 'touchstart', this._onTouchStart, this);
	},

	_onTouchStart: function (e) {
		var map = this._map;
		if (!e.touches || e.touches.length !== 2 || map._animatingZoom || this._zooming) { return; }

		var p1 = map.mouseEventToContainerPoint(e.touches[0]),
		    p2 = map.mouseEventToContainerPoint(e.touches[1]);

		this._centerPoint = map.getSize()._divideBy(2);
		this._startLatLng = map.containerPointToLatLng(this._centerPoint);
		if (map.options.touchZoom !== 'center') {
			this._pinchStartLatLng = map.containerPointToLatLng(p1.add(p2)._divideBy(2));
		}

		this._startDist = p1.distanceTo(p2);
		this._startZoom = map.getZoom();

		this._moved = false;
		this._zooming = true;

		map._stop();

		on(document, 'touchmove', this._onTouchMove, this);
		on(document, 'touchend', this._onTouchEnd, this);

		preventDefault(e);
	},

	_onTouchMove: function (e) {
		if (!e.touches || e.touches.length !== 2 || !this._zooming) { return; }

		var map = this._map,
		    p1 = map.mouseEventToContainerPoint(e.touches[0]),
		    p2 = map.mouseEventToContainerPoint(e.touches[1]),
		    scale = p1.distanceTo(p2) / this._startDist;

		this._zoom = map.getScaleZoom(scale, this._startZoom);

		if (!map.options.bounceAtZoomLimits && (
			(this._zoom < map.getMinZoom() && scale < 1) ||
			(this._zoom > map.getMaxZoom() && scale > 1))) {
			this._zoom = map._limitZoom(this._zoom);
		}

		if (map.options.touchZoom === 'center') {
			this._center = this._startLatLng;
			if (scale === 1) { return; }
		} else {
			// Get delta from pinch to center, so centerLatLng is delta applied to initial pinchLatLng
			var delta = p1._add(p2)._divideBy(2)._subtract(this._centerPoint);
			if (scale === 1 && delta.x === 0 && delta.y === 0) { return; }
			this._center = map.unproject(map.project(this._pinchStartLatLng, this._zoom).subtract(delta), this._zoom);
		}

		if (!this._moved) {
			map._moveStart(true, false);
			this._moved = true;
		}

		cancelAnimFrame(this._animRequest);

		var moveFn = bind(map._move, map, this._center, this._zoom, {pinch: true, round: false});
		this._animRequest = requestAnimFrame(moveFn, this, true);

		preventDefault(e);
	},

	_onTouchEnd: function () {
		if (!this._moved || !this._zooming) {
			this._zooming = false;
			return;
		}

		this._zooming = false;
		cancelAnimFrame(this._animRequest);

		off(document, 'touchmove', this._onTouchMove);
		off(document, 'touchend', this._onTouchEnd);

		// Pinch updates GridLayers' levels only when zoomSnap is off, so zoomSnap becomes noUpdate.
		if (this._map.options.zoomAnimation) {
			this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), true, this._map.options.zoomSnap);
		} else {
			this._map._resetView(this._center, this._map._limitZoom(this._zoom));
		}
	}
});

// @section Handlers
// @property touchZoom: Handler
// Touch zoom handler.
Map.addInitHook('addHandler', 'touchZoom', TouchZoom);

Map.BoxZoom = BoxZoom;
Map.DoubleClickZoom = DoubleClickZoom;
Map.Drag = Drag;
Map.Keyboard = Keyboard;
Map.ScrollWheelZoom = ScrollWheelZoom;
Map.Tap = Tap;
Map.TouchZoom = TouchZoom;

Object.freeze = freeze;

exports.version = version;
exports.Control = Control;
exports.control = control;
exports.Browser = Browser;
exports.Evented = Evented;
exports.Mixin = Mixin;
exports.Util = Util;
exports.Class = Class;
exports.Handler = Handler;
exports.extend = extend;
exports.bind = bind;
exports.stamp = stamp;
exports.setOptions = setOptions;
exports.DomEvent = DomEvent;
exports.DomUtil = DomUtil;
exports.PosAnimation = PosAnimation;
exports.Draggable = Draggable;
exports.LineUtil = LineUtil;
exports.PolyUtil = PolyUtil;
exports.Point = Point;
exports.point = toPoint;
exports.Bounds = Bounds;
exports.bounds = toBounds;
exports.Transformation = Transformation;
exports.transformation = toTransformation;
exports.Projection = index;
exports.LatLng = LatLng;
exports.latLng = toLatLng;
exports.LatLngBounds = LatLngBounds;
exports.latLngBounds = toLatLngBounds;
exports.CRS = CRS;
exports.GeoJSON = GeoJSON;
exports.geoJSON = geoJSON;
exports.geoJson = geoJson;
exports.Layer = Layer;
exports.LayerGroup = LayerGroup;
exports.layerGroup = layerGroup;
exports.FeatureGroup = FeatureGroup;
exports.featureGroup = featureGroup;
exports.ImageOverlay = ImageOverlay;
exports.imageOverlay = imageOverlay;
exports.VideoOverlay = VideoOverlay;
exports.videoOverlay = videoOverlay;
exports.DivOverlay = DivOverlay;
exports.Popup = Popup;
exports.popup = popup;
exports.Tooltip = Tooltip;
exports.tooltip = tooltip;
exports.Icon = Icon;
exports.icon = icon;
exports.DivIcon = DivIcon;
exports.divIcon = divIcon;
exports.Marker = Marker;
exports.marker = marker;
exports.TileLayer = TileLayer;
exports.tileLayer = tileLayer;
exports.GridLayer = GridLayer;
exports.gridLayer = gridLayer;
exports.SVG = SVG;
exports.svg = svg$1;
exports.Renderer = Renderer;
exports.Canvas = Canvas;
exports.canvas = canvas$1;
exports.Path = Path;
exports.CircleMarker = CircleMarker;
exports.circleMarker = circleMarker;
exports.Circle = Circle;
exports.circle = circle;
exports.Polyline = Polyline;
exports.polyline = polyline;
exports.Polygon = Polygon;
exports.polygon = polygon;
exports.Rectangle = Rectangle;
exports.rectangle = rectangle;
exports.Map = Map;
exports.map = createMap;

var oldL = window.L;
exports.noConflict = function() {
	window.L = oldL;
	return this;
}

// Always export us to window global (see #2364)
window.L = exports;

})));
//# sourceMappingURL=leaflet-src.js.map


/***/ }),

/***/ "./node_modules/leaflet/dist/leaflet.css":
/*!***********************************************!*\
  !*** ./node_modules/leaflet/dist/leaflet.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../css-loader/dist/cjs.js??ref--5-1!./leaflet.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/leaflet/dist/leaflet.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/css/map.css":
/*!*************************!*\
  !*** ./src/css/map.css ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-1!./map.css */ "./node_modules/css-loader/dist/cjs.js?!./src/css/map.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/data/store.json":
/*!*****************************!*\
  !*** ./src/data/store.json ***!
  \*****************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360, 361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390, 391, 392, 393, 394, 395, 396, 397, 398, 399, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440, 441, 442, 443, 444, 445, 446, 447, 448, 449, 450, 451, 452, 453, 454, 455, 456, 457, 458, 459, 460, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 479, 480, 481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 512, 513, 514, 515, 516, 517, 518, 519, 520, 521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539, 540, 541, 542, 543, 544, 545, 546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 560, 561, 562, 563, 564, 565, 566, 567, 568, 569, 570, 571, 572, 573, 574, 575, 576, 577, 578, 579, 580, 581, 582, 583, 584, 585, 586, 587, 588, 589, 590, 591, 592, 593, 594, 595, 596, 597, 598, 599, 600, 601, 602, 603, 604, 605, 606, 607, 608, 609, 610, 611, 612, 613, 614, 615, 616, 617, 618, 619, 620, 621, 622, 623, 624, 625, 626, 627, 628, 629, 630, 631, 632, 633, 634, 635, 636, 637, 638, 639, 640, 641, 642, 643, 644, 645, 646, 647, 648, 649, 650, 651, 652, 653, 654, 655, 656, 657, 658, 659, 660, 661, 662, 663, 664, 665, 666, 667, 668, 669, 670, 671, 672, 673, 674, 675, 676, 677, 678, 679, 680, 681, 682, 683, 684, 685, 686, 687, 688, 689, 690, 691, 692, 693, 694, 695, 696, 697, 698, 699, 700, 701, 702, 703, 704, 705, 706, 707, 708, 709, 710, 711, 712, 713, 714, 715, 716, 717, 718, 719, 720, 721, 722, 723, 724, 725, 726, 727, 728, 729, 730, 731, 732, 733, 734, 735, 736, 737, 738, 739, 740, 741, 742, 743, 744, 745, 746, 747, 748, 749, 750, 751, 752, 753, 754, 755, 756, 757, 758, 759, 760, 761, 762, 763, 764, 765, 766, 767, 768, 769, 770, 771, 772, 773, 774, 775, 776, 777, 778, 779, 780, 781, 782, 783, 784, 785, 786, 787, 788, 789, 790, 791, 792, 793, 794, 795, 796, 797, 798, 799, 800, 801, 802, 803, 804, 805, 806, 807, 808, 809, 810, 811, 812, 813, 814, 815, 816, 817, 818, 819, 820, 821, 822, 823, 824, 825, 826, 827, 828, 829, 830, 831, 832, 833, 834, 835, 836, 837, 838, 839, 840, 841, 842, 843, 844, 845, 846, 847, 848, 849, 850, 851, 852, 853, 854, 855, 856, 857, 858, 859, 860, 861, 862, 863, 864, 865, 866, 867, 868, 869, 870, 871, 872, 873, 874, 875, 876, 877, 878, 879, 880, 881, 882, 883, 884, 885, 886, 887, 888, 889, 890, 891, 892, 893, 894, 895, 896, 897, 898, 899, 900, 901, 902, 903, 904, 905, 906, 907, 908, 909, 910, 911, 912, 913, 914, 915, 916, 917, 918, 919, 920, 921, 922, 923, 924, 925, 926, 927, 928, 929, 930, 931, 932, 933, 934, 935, 936, 937, 938, 939, 940, 941, 942, 943, 944, 945, 946, 947, 948, 949, 950, 951, 952, 953, 954, 955, 956, 957, 958, 959, 960, 961, 962, 963, 964, 965, 966, 967, 968, 969, 970, 971, 972, 973, 974, 975, 976, 977, 978, 979, 980, 981, 982, 983, 984, 985, 986, 987, 988, 989, 990, 991, 992, 993, 994, 995, 996, 997, 998, 999, 1000, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018, 1019, 1020, 1021, 1022, 1023, 1024, 1025, 1026, 1027, 1028, 1029, 1030, 1031, 1032, 1033, 1034, 1035, 1036, 1037, 1038, 1039, 1040, 1041, 1042, 1043, 1044, 1045, 1046, 1047, 1048, 1049, 1050, 1051, 1052, 1053, 1054, 1055, 1056, 1057, 1058, 1059, 1060, 1061, 1062, 1063, 1064, 1065, 1066, 1067, 1068, 1069, 1070, 1071, 1072, 1073, 1074, 1075, 1076, 1077, 1078, 1079, 1080, 1081, 1082, 1083, 1084, 1085, 1086, 1087, 1088, 1089, 1090, 1091, 1092, 1093, 1094, 1095, 1096, 1097, 1098, 1099, 1100, 1101, 1102, 1103, 1104, 1105, 1106, 1107, 1108, 1109, 1110, 1111, 1112, 1113, 1114, 1115, 1116, 1117, 1118, 1119, 1120, 1121, 1122, 1123, 1124, 1125, 1126, 1127, 1128, 1129, 1130, 1131, 1132, 1133, 1134, 1135, 1136, 1137, 1138, 1139, 1140, 1141, 1142, 1143, 1144, 1145, 1146, 1147, 1148, 1149, 1150, 1151, 1152, 1153, 1154, 1155, 1156, 1157, 1158, 1159, 1160, 1161, 1162, 1163, 1164, 1165, 1166, 1167, 1168, 1169, 1170, 1171, 1172, 1173, 1174, 1175, 1176, 1177, 1178, 1179, 1180, 1181, 1182, 1183, 1184, 1185, 1186, 1187, 1188, 1189, 1190, 1191, 1192, 1193, 1194, 1195, 1196, 1197, 1198, 1199, 1200, 1201, 1202, 1203, 1204, 1205, 1206, 1207, 1208, 1209, 1210, 1211, 1212, 1213, 1214, 1215, 1216, 1217, 1218, 1219, 1220, 1221, 1222, 1223, 1224, 1225, 1226, 1227, 1228, 1229, 1230, 1231, 1232, 1233, 1234, 1235, 1236, 1237, 1238, 1239, 1240, 1241, 1242, 1243, 1244, 1245, 1246, 1247, 1248, 1249, 1250, 1251, 1252, 1253, 1254, 1255, 1256, 1257, 1258, 1259, 1260, 1261, 1262, 1263, 1264, 1265, 1266, 1267, 1268, 1269, 1270, 1271, 1272, 1273, 1274, 1275, 1276, 1277, 1278, 1279, 1280, 1281, 1282, 1283, 1284, 1285, 1286, 1287, 1288, 1289, 1290, 1291, 1292, 1293, 1294, 1295, 1296, 1297, 1298, 1299, 1300, 1301, 1302, 1303, 1304, 1305, 1306, 1307, 1308, 1309, 1310, 1311, 1312, 1313, 1314, 1315, 1316, 1317, 1318, 1319, 1320, 1321, 1322, 1323, 1324, 1325, 1326, 1327, 1328, 1329, 1330, 1331, 1332, 1333, 1334, 1335, 1336, 1337, 1338, 1339, 1340, 1341, 1342, 1343, 1344, 1345, 1346, 1347, 1348, 1349, 1350, 1351, 1352, 1353, 1354, 1355, 1356, 1357, 1358, 1359, 1360, 1361, 1362, 1363, 1364, 1365, 1366, 1367, 1368, 1369, 1370, 1371, 1372, 1373, 1374, 1375, 1376, 1377, 1378, 1379, 1380, 1381, 1382, 1383, 1384, 1385, 1386, 1387, 1388, 1389, 1390, 1391, 1392, 1393, 1394, 1395, 1396, 1397, 1398, 1399, 1400, 1401, 1402, 1403, 1404, 1405, 1406, 1407, 1408, 1409, 1410, 1411, 1412, 1413, 1414, 1415, 1416, 1417, 1418, 1419, 1420, 1421, 1422, 1423, 1424, 1425, 1426, 1427, 1428, 1429, 1430, 1431, 1432, 1433, 1434, 1435, 1436, 1437, 1438, 1439, 1440, 1441, 1442, 1443, 1444, 1445, 1446, 1447, 1448, 1449, 1450, 1451, 1452, 1453, 1454, 1455, 1456, 1457, 1458, 1459, 1460, 1461, 1462, 1463, 1464, 1465, 1466, 1467, 1468, 1469, 1470, 1471, 1472, 1473, 1474, 1475, 1476, 1477, 1478, 1479, 1480, 1481, 1482, 1483, 1484, 1485, 1486, 1487, 1488, 1489, 1490, 1491, 1492, 1493, 1494, 1495, 1496, 1497, 1498, 1499, 1500, 1501, 1502, 1503, 1504, 1505, 1506, 1507, 1508, 1509, 1510, 1511, 1512, 1513, 1514, 1515, 1516, 1517, 1518, 1519, 1520, 1521, 1522, 1523, 1524, 1525, 1526, 1527, 1528, 1529, 1530, 1531, 1532, 1533, 1534, 1535, 1536, 1537, 1538, 1539, 1540, 1541, 1542, 1543, 1544, 1545, 1546, 1547, 1548, 1549, 1550, 1551, 1552, 1553, 1554, 1555, 1556, 1557, 1558, 1559, 1560, 1561, 1562, 1563, 1564, 1565, 1566, 1567, 1568, 1569, 1570, 1571, 1572, 1573, 1574, 1575, 1576, 1577, 1578, 1579, 1580, 1581, 1582, 1583, 1584, 1585, 1586, 1587, 1588, 1589, 1590, 1591, 1592, 1593, 1594, 1595, 1596, 1597, 1598, 1599, 1600, 1601, 1602, 1603, 1604, 1605, 1606, 1607, 1608, 1609, 1610, 1611, 1612, 1613, 1614, 1615, 1616, 1617, 1618, 1619, 1620, 1621, 1622, 1623, 1624, 1625, 1626, 1627, 1628, 1629, 1630, 1631, 1632, 1633, 1634, 1635, 1636, 1637, 1638, 1639, 1640, 1641, 1642, 1643, 1644, 1645, 1646, 1647, 1648, 1649, 1650, 1651, 1652, 1653, 1654, 1655, 1656, 1657, 1658, 1659, 1660, 1661, 1662, 1663, 1664, 1665, 1666, 1667, 1668, 1669, 1670, 1671, 1672, 1673, 1674, 1675, 1676, 1677, 1678, 1679, 1680, 1681, 1682, 1683, 1684, 1685, 1686, 1687, 1688, 1689, 1690, 1691, 1692, 1693, 1694, 1695, 1696, 1697, 1698, 1699, 1700, 1701, 1702, 1703, 1704, 1705, 1706, 1707, 1708, 1709, 1710, 1711, 1712, 1713, 1714, 1715, 1716, 1717, 1718, 1719, 1720, 1721, 1722, 1723, 1724, 1725, 1726, 1727, 1728, 1729, 1730, 1731, 1732, 1733, 1734, 1735, 1736, 1737, 1738, 1739, 1740, 1741, 1742, 1743, 1744, 1745, 1746, 1747, 1748, 1749, 1750, 1751, 1752, 1753, 1754, 1755, 1756, 1757, 1758, 1759, 1760, 1761, 1762, 1763, 1764, 1765, 1766, 1767, 1768, 1769, 1770, 1771, 1772, 1773, 1774, 1775, 1776, 1777, 1778, 1779, 1780, 1781, 1782, 1783, 1784, 1785, 1786, 1787, 1788, 1789, 1790, 1791, 1792, 1793, 1794, 1795, 1796, 1797, 1798, 1799, 1800, 1801, 1802, 1803, 1804, 1805, 1806, 1807, 1808, 1809, 1810, 1811, 1812, 1813, 1814, 1815, 1816, 1817, 1818, 1819, 1820, 1821, 1822, 1823, 1824, 1825, 1826, 1827, 1828, 1829, 1830, 1831, 1832, 1833, 1834, 1835, 1836, 1837, 1838, 1839, 1840, 1841, 1842, 1843, 1844, 1845, 1846, 1847, 1848, 1849, 1850, 1851, 1852, 1853, 1854, 1855, 1856, 1857, 1858, 1859, 1860, 1861, 1862, 1863, 1864, 1865, 1866, 1867, 1868, 1869, 1870, 1871, 1872, 1873, 1874, 1875, 1876, 1877, 1878, 1879, 1880, 1881, 1882, 1883, 1884, 1885, 1886, 1887, 1888, 1889, 1890, 1891, 1892, 1893, 1894, 1895, 1896, 1897, 1898, 1899, 1900, 1901, 1902, 1903, 1904, 1905, 1906, 1907, 1908, 1909, 1910, 1911, 1912, 1913, 1914, 1915, 1916, 1917, 1918, 1919, 1920, 1921, 1922, 1923, 1924, 1925, 1926, 1927, 1928, 1929, 1930, 1931, 1932, 1933, 1934, 1935, 1936, 1937, 1938, 1939, 1940, 1941, 1942, 1943, 1944, 1945, 1946, 1947, 1948, 1949, 1950, 1951, 1952, 1953, 1954, 1955, 1956, 1957, 1958, 1959, 1960, 1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033, 2034, 2035, 2036, 2037, 2038, 2039, 2040, 2041, 2042, 2043, 2044, 2045, 2046, 2047, 2048, 2049, 2050, 2051, 2052, 2053, 2054, 2055, 2056, 2057, 2058, 2059, 2060, 2061, 2062, 2063, 2064, 2065, 2066, 2067, 2068, 2069, 2070, 2071, 2072, 2073, 2074, 2075, 2076, 2077, 2078, 2079, 2080, 2081, 2082, 2083, 2084, 2085, 2086, 2087, 2088, 2089, 2090, 2091, 2092, 2093, 2094, 2095, 2096, 2097, 2098, 2099, 2100, 2101, 2102, 2103, 2104, 2105, 2106, 2107, 2108, 2109, 2110, 2111, 2112, 2113, 2114, 2115, 2116, 2117, 2118, 2119, 2120, 2121, 2122, 2123, 2124, 2125, 2126, 2127, 2128, 2129, 2130, 2131, 2132, 2133, 2134, 2135, 2136, 2137, 2138, 2139, 2140, 2141, 2142, 2143, 2144, 2145, 2146, 2147, 2148, 2149, 2150, 2151, 2152, 2153, 2154, 2155, 2156, default */
/***/ (function(module) {

module.exports = [{"name":"イトーヨーカドー旭川","address":"北海道旭川市６条１４丁目６４番地玩具売場","grid":[43.768795,142.372468],"machineNum":1,"prefId":1},{"name":"モーリーファンタジー旭川パルプ","address":"北海道旭川市パルプ町１条２丁目５０５番２ショッピングセンターパルプタウン１Ｆ","grid":[43.774159,142.385687],"machineNum":1,"prefId":1},{"name":"ソユーゲームフィールド旭川駅前店","address":"北海道旭川市宮下通７丁目２番５号イオンモール旭川駅前４Ｆ","grid":[43.763693,142.357372],"machineNum":1,"prefId":1},{"name":"イオン旭川春光","address":"北海道旭川市春光町１０","grid":[43.789742,142.359807],"machineNum":1,"prefId":1},{"name":"SOYUGameField旭川西店","address":"北海道旭川市北海道旭川市緑町二十三丁目２１６１番地３イオンモール旭川西３Ｆ","grid":[43.793938,142.326353],"machineNum":1,"prefId":1},{"name":"おもちゃのヨシダ","address":"北海道旭川市本町３丁目４３７－２３８　吉田ビル１Ｆ","grid":[43.78097,142.355906],"machineNum":1,"prefId":1},{"name":"モーリーファンタジー旭川西","address":"北海道旭川市緑町２３－２１６１－３イオン２Ｆ","grid":[43.793759,142.326937],"machineNum":1,"prefId":1},{"name":"イオン旭川西","address":"北海道旭川市緑町２３丁目２１６１－３　玩具売場","grid":[43.793759,142.326937],"machineNum":1,"prefId":1},{"name":"イオン伊達","address":"北海道伊達市末永町８－１　玩具売場","grid":[42.473537,140.862524],"machineNum":1,"prefId":1},{"name":"トイザらス帯広音更","address":"北海道河東郡音更町木野大通西１７－１　スーパーオーケーセンター音更店内","grid":[42.971154,143.206642],"machineNum":1,"prefId":1},{"name":"イオン岩見沢","address":"北海道岩見沢市大和４条８丁目１　玩具売場","grid":[43.184503,141.741088],"machineNum":1,"prefId":1},{"name":"ＢＥＳＴＯＭ 中富良野","address":"北海道空知郡中富良野町字中富良野東１線北１７号","grid":[43.384711,142.409247],"machineNum":1,"prefId":1},{"name":"ＰＡＬＯ釧路","address":"北海道釧路郡釧路町桂木１－１－７　　イオン２Ｆ","grid":[43.009194,144.404659],"machineNum":1,"prefId":1},{"name":"イオン釧路","address":"北海道釧路郡釧路町桂木１丁目１番地７　玩具売場","grid":[43.009194,144.404659],"machineNum":1,"prefId":1},{"name":"モーリーファンタジー釧路昭和","address":"北海道釧路市昭和中央　４－１８－１イオン２Ｆ","grid":[43.026652,144.360011],"machineNum":1,"prefId":1},{"name":"イトーヨーカドー恵庭","address":"北海道恵庭市恵み野西２丁目１玩具売場","grid":[42.901157,141.575253],"machineNum":1,"prefId":1},{"name":"ＰＡＬＯ江別","address":"北海道江別市幸町３５　イオン３Ｆ","grid":[43.096737,141.533932],"machineNum":1,"prefId":1},{"name":"イオン江別","address":"北海道江別市幸町３５番地　玩具売場","grid":[43.096978,141.533644],"machineNum":1,"prefId":1},{"name":"イオン根室","address":"北海道根室市常盤町３丁目９番地　玩具売場","grid":[43.332222,145.582937],"machineNum":1,"prefId":1},{"name":"ゲームコーナー新さっぽろ","address":"北海道札幌市厚別区厚別中央２条５丁目６－２","grid":[43.038972,141.47249],"machineNum":1,"prefId":1},{"name":"ファンタジーキッズリゾート新さっぽろ","address":"北海道札幌市厚別区厚別中央二条５－７－２サンピアザ１Ｆ","grid":[43.037849,141.472433],"machineNum":1,"prefId":1},{"name":"キャッツアイ新札幌","address":"北海道札幌市厚別区厚別東５条１丁目","grid":[43.046127,141.474788],"machineNum":1,"prefId":1},{"name":"ゲームランド新さっぽろ","address":"北海道札幌市厚別区中央２条５丁目７番新さっぽろイオンカテブリ新さっぽろ３Ｆ","grid":[43.037939,141.472189],"machineNum":1,"prefId":1},{"name":"西友手稲","address":"北海道札幌市手稲区前田１条１１－３１１－１　玩具売場","grid":[43.121107,141.245189],"machineNum":1,"prefId":1},{"name":"モーリーファンタジー手稲山口","address":"北海道札幌市手稲区明日風６丁目１番１号イオンスーパーセンター手稲山口店１階","grid":[43.142268,141.233593],"machineNum":1,"prefId":1},{"name":"キャッツアイ清田店","address":"北海道札幌市清田区清田１条１丁目２０－１","grid":[43.004084,141.435274],"machineNum":1,"prefId":1},{"name":"タイトーステーションイオンモール札幌平岡","address":"北海道札幌市清田区平岡３条５－３－１イオンモール札幌平岡店２Ｆ","grid":[42.997065,141.458557],"machineNum":1,"prefId":1},{"name":"モーリーファンタジー札幌平岡","address":"北海道札幌市清田区平岡３条５丁目３－１イオン２Ｆ","grid":[42.997065,141.458557],"machineNum":1,"prefId":1},{"name":"イオン札幌平岡","address":"北海道札幌市清田区平岡三条５－３－１　玩具売場","grid":[42.997065,141.458557],"machineNum":1,"prefId":1},{"name":"イトーヨーカドー琴似","address":"北海道札幌市西区琴似２条１－４－１玩具売場","grid":[43.080715,141.305971],"machineNum":1,"prefId":1},{"name":"モーリーファンタジー札幌琴似","address":"北海道札幌市西区琴似２条４－２－２イオン札幌琴似３階","grid":[43.076733,141.302882],"machineNum":1,"prefId":1},{"name":"モーリーファンタジー札幌発寒","address":"北海道札幌市西区発寒８条１２丁目１－１　イオン３Ｆ","grid":[43.096062,141.277576],"machineNum":1,"prefId":1},{"name":"イオン札幌発寒","address":"北海道札幌市西区発寒８条１２丁目１－１　玩具売場","grid":[43.096062,141.277576],"machineNum":1,"prefId":1},{"name":"ＳＯＹＵ　Ｇａｍｅ　Ｆｉｅｌｄ発寒店","address":"北海道札幌市西区発寒８条１２丁目１番１号　イオンモール札幌発寒３Ｆ","grid":[43.096062,141.277576],"machineNum":1,"prefId":1},{"name":"ＳＯＹＵＧａｍｅＦｉｅｌｄ発寒","address":"北海道札幌市西区発寒８条１２丁目１番１号イオンモール札幌発寒３Ｆ","grid":[43.096062,141.277576],"machineNum":1,"prefId":1},{"name":"プリズムストーン  札幌店","address":"北海道札幌市中央区南1条西3丁目3番地　札幌パルコ　4F　アニメガ札幌パルコ店内","grid":[43.058743,141.353158],"machineNum":1,"prefId":1},{"name":"タイトーステーション　札幌狸小路２丁目","address":"北海道札幌市中央区南三条西２-１４","grid":[43.057331,141.355471],"machineNum":1,"prefId":1},{"name":"モーリーファンタジー札幌桑園","address":"北海道札幌市中央区北８条西１４丁目２８番地　　イオン２Ｆ","grid":[43.068386,141.333216],"machineNum":1,"prefId":1},{"name":"ビックカメラ札幌店","address":"北海道札幌市中央区北五条西２－１　札幌ＥＳＴＡ　ＪＲタワー４Ｆ","grid":[43.067435,141.352881],"machineNum":1,"prefId":1},{"name":"モーリーファンタジー札幌苗穂","address":"北海道札幌市東区東苗穂２条３丁目１番１号イオン２Ｆ","grid":[43.080063,141.403285],"machineNum":1,"prefId":1},{"name":"ソユーゲームフィールド苗穂","address":"北海道札幌市東区東苗穂２条三丁目１番１号イオンモール札幌苗穂２Ｆ","grid":[43.080063,141.403285],"machineNum":1,"prefId":1},{"name":"モーリーファンタジー札幌元町","address":"北海道札幌市東区北３１条東１５丁目１－１イオン札幌元町店３Ｆ","grid":[43.101007,141.369228],"machineNum":1,"prefId":1},{"name":"アドアーズ札幌北４２条","address":"北海道札幌市東区北４２条東７丁目１－１","grid":[43.112087,141.355085],"machineNum":1,"prefId":1},{"name":"イトーヨーカドーアリオ札幌","address":"北海道札幌市東区北７条東９－２－２０玩具売場","grid":[43.071551,141.370388],"machineNum":1,"prefId":1},{"name":"イオン札幌藻岩","address":"北海道札幌市南区川沿２条２丁目１－１　玩具売場","grid":[42.999335,141.336401],"machineNum":1,"prefId":1},{"name":"モーリーファンタジー東札幌","address":"北海道札幌市白石区東札幌３条２－１ダイエー東札幌店２Ｆ","grid":[43.052227,141.385402],"machineNum":1,"prefId":1},{"name":"げーむぱーくぎゃらくしー","address":"北海道札幌市白石区東札幌三条１丁目１－１","grid":[43.054045,141.383411],"machineNum":1,"prefId":1},{"name":"イトーヨーカドー福住","address":"北海道札幌市豊平区福住2条1-2-5","grid":[43.019872,141.403495],"machineNum":1,"prefId":1},{"name":"キャッツアイ篠路","address":"北海道札幌市北区篠路1条4丁目6-30","grid":[43.140638,141.357187],"machineNum":1,"prefId":1},{"name":"キャッツアイ新川店","address":"北海道札幌市北区新川２条７丁目１－７","grid":[43.10075,141.310247],"machineNum":1,"prefId":1},{"name":"イトーヨーカドー屯田","address":"北海道札幌市北区屯田８条３丁目５－１玩具売場","grid":[43.140249,141.340839],"machineNum":1,"prefId":1},{"name":"モーリーファンタジー札幌麻生","address":"北海道札幌市北区北３９条西４－１－５イオン４Ｆ","grid":[43.10729,141.339721],"machineNum":1,"prefId":1},{"name":"ヨドバシカメラマルチメディア札幌","address":"北海道札幌市北区北６条西５－１－２２　玩具売場","grid":[43.068294,141.347586],"machineNum":1,"prefId":1},{"name":"ＭＡＸＩＭＨＥＲＯ","address":"北海道札幌市北区北６条西６丁目鉄道高架下","grid":[43.067952,141.346007],"machineNum":1,"prefId":1},{"name":"モーリーファンタジー三笠","address":"北海道三笠市岡山１０５９－１　ＳｕＣ１Ｆ","grid":[43.244379,141.805172],"machineNum":1,"prefId":1},{"name":"西條士別","address":"北海道士別市大通東１６丁目３１４３","grid":[44.164969,142.396052],"machineNum":1,"prefId":1},{"name":"イオン室蘭","address":"北海道室蘭市東町２丁目４番３２号　玩具売場","grid":[42.315179,140.973767],"machineNum":1,"prefId":1},{"name":"ドリームランド・イカロスの城","address":"北海道小樽市築港１１　ウイングベイ小樽内","grid":[43.183952,141.023066],"machineNum":1,"prefId":1},{"name":"イオン小樽","address":"北海道小樽市築港１１番６号　玩具売場","grid":[43.184392,141.021713],"machineNum":1,"prefId":1},{"name":"イエローグローブ今金","address":"北海道瀬棚郡今金町字神丘546-23","grid":[42.433226,140.001124],"machineNum":1,"prefId":1},{"name":"モーリーファンタジー石狩緑苑台","address":"北海道石狩市緑苑台中央１丁目２番ＳｕＣ１Ｆ","grid":[43.158541,141.335354],"machineNum":1,"prefId":1},{"name":"イトーヨーカドー帯広","address":"北海道帯広市稲田町南八線西１０－１玩具売場","grid":[42.88929,143.199824],"machineNum":1,"prefId":1},{"name":"イオン帯広","address":"北海道帯広市西４条南２０丁目１　玩具売場","grid":[42.908825,143.20039],"machineNum":1,"prefId":1},{"name":"スガイディノス帯広","address":"北海道帯広市白樺１６条西２丁目ドリームタウン白樺内","grid":[42.918857,143.173186],"machineNum":1,"prefId":1},{"name":"イオン滝川","address":"北海道滝川市東町２－２５－３　玩具売場","grid":[43.554292,141.930987],"machineNum":1,"prefId":1},{"name":"ＰＡＬＯ滝川","address":"北海道滝川市東町２丁目２９－１　　　　　　　イオン滝川店１Ｆ","grid":[43.55397,141.930968],"machineNum":1,"prefId":1},{"name":"アクロスプラザたきかわ","address":"北海道滝川市南滝の川１１５－４","grid":[43.570531,141.931582],"machineNum":1,"prefId":1},{"name":"西條百貨店稚内","address":"北海道稚内市大黒４丁目７－１玩具売場","grid":[45.397639,141.692092],"machineNum":1,"prefId":1},{"name":"イオン登別","address":"北海道登別市若山町４－３３－１","grid":[42.381349,141.068468],"machineNum":1,"prefId":1},{"name":"モーリーファンタジー登別","address":"北海道登別市若山町４－３３－１","grid":[42.381349,141.068468],"machineNum":1,"prefId":1},{"name":"ＰＡＬＯ苫小牧","address":"北海道苫小牧市糸井１３５－１　トライアルＧ棟トライアル苫小牧店","grid":[42.61289,141.524736],"machineNum":1,"prefId":1},{"name":"イオン苫小牧","address":"北海道苫小牧市柳町３－１－２０　玩具売場","grid":[42.655582,141.640289],"machineNum":1,"prefId":1},{"name":"モーリーファンタジー苫小牧","address":"北海道苫小牧市柳町３－１－２０イオン２Ｆ","grid":[42.656167,141.64231],"machineNum":1,"prefId":1},{"name":"スガイディノス函館昭和","address":"北海道函館市昭和町３－２４－１８ゲオ函館昭和店内","grid":[41.819309,140.734381],"machineNum":1,"prefId":1},{"name":"モーリーファンタジー湯川","address":"北海道函館市湯川町３－１４－５　　イオン湯川店１・２Ｆ","grid":[41.777645,140.794043],"machineNum":1,"prefId":1},{"name":"イトーヨーカドー函館","address":"北海道函館市美原１－３－１玩具売場","grid":[41.813432,140.757907],"machineNum":1,"prefId":1},{"name":"ＭＥＧＡドン・キホーテ函館","address":"北海道函館市美原１－７－１","grid":[41.813309,140.756333],"machineNum":1,"prefId":1},{"name":"モーリーファンタジー中標津","address":"北海道標津郡中標津町南町３番地１０","grid":[43.535813,144.978104],"machineNum":1,"prefId":1},{"name":"ゲオ北見南大通","address":"北海道北見市とん田西町２４８番地２","grid":[43.794786,143.874414],"machineNum":1,"prefId":1},{"name":"イトーヨーカドー北見","address":"北海道北見市光西町１８５玩具売場","grid":[43.798328,143.870174],"machineNum":1,"prefId":1},{"name":"東武イーストモール端野","address":"北海道北見市端野町三区５７２番地１","grid":[43.841503,143.928661],"machineNum":1,"prefId":1},{"name":"イオン北見","address":"北海道北見市北進町１丁目１－１　玩具売場","grid":[43.808473,143.875571],"machineNum":1,"prefId":1},{"name":"イオンファンタジー上磯","address":"北海道北斗市七重浜４－４４－１　　　　　イオン上磯店１Ｆ","grid":[41.821483,140.712353],"machineNum":1,"prefId":1},{"name":"イオン上磯","address":"北海道北斗市七重浜４－４４－１　玩具売場","grid":[41.821483,140.712353],"machineNum":1,"prefId":1},{"name":"モーリーファンタジー上磯","address":"北海道北斗市七重浜４－４４－１イオン1階","grid":[41.821483,140.712353],"machineNum":1,"prefId":1},{"name":"モーリーファンタジー名寄","address":"北海道名寄市字徳田８０番地１イオンＳＣ２Ｆ","grid":[44.338687,142.452831],"machineNum":1,"prefId":1},{"name":"ＰＡＬＯ網走","address":"北海道網走市駒場北５丁目８３番地駒場ショッピングタウン","grid":[44.000771,144.284325],"machineNum":1,"prefId":1},{"name":"イオン紋別","address":"北海道紋別市花園町３－４－３９","grid":[44.349459,143.34783],"machineNum":1,"prefId":1},{"name":"イオン余市","address":"北海道余市郡余市町黒川町１２－６２－１","grid":[43.185621,140.798646],"machineNum":1,"prefId":1},{"name":"モーリーファンタジーつがる柏","address":"青森県つがる市柏稲盛幾世４１－１イオン１Ｆ","grid":[40.803652,140.415956],"machineNum":1,"prefId":2},{"name":"プラサカプコンつがる柏","address":"青森県つるが市柏稲盛幾世４１　イオンモールつがる柏　シネマ棟１Ｆ","grid":[40.802423,140.416547],"machineNum":1,"prefId":2},{"name":"マエダ本店","address":"青森県むつ市小川町２丁目４－８","grid":[41.292744,141.207821],"machineNum":1,"prefId":2},{"name":"ハロータイトーむつ","address":"青森県むつ市小川町２丁目４－８前田百貨店内４Ｆ","grid":[41.29273,141.207554],"machineNum":1,"prefId":2},{"name":"ＰＡＬＯむつ","address":"青森県むつ市中央２丁目７番８号","grid":[41.286918,141.183732],"machineNum":1,"prefId":2},{"name":"ＰＡＬＯ五所川原","address":"青森県五所川原市大字唐笠柳字藤巻６４１番１アクロスプラザ五所川原","grid":[40.800867,140.461427],"machineNum":1,"prefId":2},{"name":"スカロップ弘前店","address":"青森県弘前市城東北３－１０－１　さくら野弘前店３Ｆ","grid":[40.606709,140.495914],"machineNum":1,"prefId":2},{"name":"スペースファンタジーインフィニ","address":"青森県弘前市城東北３－１０－１さくら野弘前店４Ｆ","grid":[40.606709,140.495914],"machineNum":1,"prefId":2},{"name":"イトーヨーカドー弘前","address":"青森県弘前市大字駅前３－２－１玩具売場","grid":[40.599741,140.481073],"machineNum":1,"prefId":2},{"name":"ＳＯＹＵＧａｍｅＦｉｅｌｄ弘前樋の口","address":"青森県弘前市樋の口２－９－６イオンタウン弘前樋の口内","grid":[40.602313,140.44416],"machineNum":1,"prefId":2},{"name":"セガ弘前","address":"青森県弘前市末広１－３－３","grid":[40.604113,140.499914],"machineNum":1,"prefId":2},{"name":"ＰＡＬＯ黒石","address":"青森県黒石市富士見１０３番地３アクロスプラザ黒石","grid":[40.667216,140.601473],"machineNum":1,"prefId":2},{"name":"モーリーファンタジー三沢","address":"青森県三沢市松園町３－１０－１　　　　　　　　ビードルプラザ三沢店１Ｆ","grid":[40.675,141.363142],"machineNum":1,"prefId":2},{"name":"モーリーファンタジー十和田","address":"青森県十和田市大字相坂字六日町山１６６番１ＳｕＣ１Ｆ","grid":[40.603558,141.256996],"machineNum":1,"prefId":2},{"name":"モーリーファンタジー下田","address":"青森県上北郡おいらせ町中野平４０－１イオン２Ｆ","grid":[40.602358,141.416901],"machineNum":1,"prefId":2},{"name":"ユーズランド下田","address":"青森県上北郡おいらせ町中野平４０－１イオンモール下田１Ｆ","grid":[40.602358,141.416901],"machineNum":1,"prefId":2},{"name":"イオン下田","address":"青森県上北郡おいらせ町中野平４０－１玩具売場","grid":[40.602358,141.416901],"machineNum":1,"prefId":2},{"name":"ハロータイトーイオン七戸十和田駅前","address":"青森県上北郡七戸町字荒熊内６７番地９９０イオン七戸十和田駅前店内","grid":[40.718011,141.155858],"machineNum":1,"prefId":2},{"name":"青森メトロポリス","address":"青森県青森市三好１－１５－８","grid":[40.834866,140.702444],"machineNum":1,"prefId":2},{"name":"トイザらス青森","address":"青森県青森市三好２－３－１１　ガーラタウン","grid":[40.833395,140.701856],"machineNum":1,"prefId":2},{"name":"タイトーステーション青森ガーラモール","address":"青森県青森市三好２－３－１９","grid":[40.833023,140.702636],"machineNum":1,"prefId":2},{"name":"イトーヨーカドー青森","address":"青森県青森市浜田１－１４－１玩具売場","grid":[40.800847,140.749049],"machineNum":1,"prefId":2},{"name":"イオン青森","address":"青森県青森市緑３－９－２玩具売場","grid":[40.807672,140.753552],"machineNum":1,"prefId":2},{"name":"モーリーファンタジー藤崎","address":"青森県南津軽郡藤崎町大字西豊田１－７－１イオン２Ｆ","grid":[40.656762,140.502139],"machineNum":1,"prefId":2},{"name":"ファンタジードーム八戸","address":"青森県八戸市江陽２－１４－１ラピア八戸店別棟","grid":[40.521879,141.503361],"machineNum":1,"prefId":2},{"name":"チーノランド八戸","address":"青森県八戸市十三日町１６番地八戸スカイビル６階","grid":[40.508123,141.488771],"machineNum":1,"prefId":2},{"name":"モーリーファンタジー三春屋","address":"青森県八戸市十三日町十三番地三春屋５Ｆ","grid":[40.508985,141.489367],"machineNum":1,"prefId":2},{"name":"イトーヨーカドー八戸沼館","address":"青森県八戸市沼館４－７－１１１玩具売場","grid":[40.527859,141.497643],"machineNum":1,"prefId":2},{"name":"プレイランドソピア八戸","address":"青森県八戸市沼館４－７－１１２","grid":[40.527732,141.497573],"machineNum":1,"prefId":2},{"name":"モーリーファンタジー八戸田向","address":"青森県八戸市大字田向字毘沙門平２７－１イオン１Ｆ","grid":[40.491897,141.509548],"machineNum":1,"prefId":2},{"name":"モーリーファンタジー平賀","address":"青森県平川市小和森上松岡１９３－１　イオンタウン平賀店1階","grid":[40.590663,140.566281],"machineNum":1,"prefId":2},{"name":"モーリーファンタジー鶴田","address":"青森県北津軽郡鶴田町大字鶴田字中泉２４５番地１鶴田フットリバーモール店１Ｆ","grid":[40.764421,140.441532],"machineNum":1,"prefId":2},{"name":"モーリーファンタジースーパーセンター一関","address":"岩手県一関市狐禅寺字石ノ瀬１１番１ＳｕＣ１Ｆ","grid":[38.939527,141.153807],"machineNum":1,"prefId":3},{"name":"モーリーファンタジー一関","address":"岩手県一関市山目字泥田８９－１イオン２Ｆ","grid":[38.936962,141.112946],"machineNum":1,"prefId":3},{"name":"セガワールド水沢","address":"岩手県奥州市水沢区佐倉河字鐙田４－１","grid":[39.15262,141.149429],"machineNum":1,"prefId":3},{"name":"イオンスーパーセンター水沢桜屋敷","address":"岩手県奥州市水沢区桜屋敷西28-10","grid":[39.124412,141.123521],"machineNum":1,"prefId":3},{"name":"イオン前沢","address":"岩手県奥州市前沢区向田２－８５玩具売場","grid":[39.052503,141.129714],"machineNum":1,"prefId":3},{"name":"モーリーファンタジー前沢","address":"岩手県奥州市前沢区向田２丁目８５イオン２Ｆ","grid":[39.052424,141.129671],"machineNum":1,"prefId":3},{"name":"イトーヨーカドー花巻","address":"岩手県花巻市下小舟渡１１８－１玩具売場","grid":[39.393513,141.117825],"machineNum":1,"prefId":3},{"name":"ＳＯＹＵファミリーゲームフィールド花巻","address":"岩手県花巻市高木第１６地割６８番地６銀河モール花巻内","grid":[39.386047,141.135754],"machineNum":1,"prefId":3},{"name":"イオンスーパーセンター釜石","address":"岩手県釜石市港町２－１－１","grid":[39.271311,141.881136],"machineNum":1,"prefId":3},{"name":"ＳＯＹＵＧａｍｅＦｉｅｌｄ釜石","address":"岩手県釜石市港町二丁目１番１号　イオンタウン釜石店３Ｆ","grid":[39.271386,141.881167],"machineNum":1,"prefId":3},{"name":"ＰＡＬＯ久慈","address":"岩手県久慈市長内町第３０地割３２－２久慈ショッピングセンター１Ｆ","grid":[40.189799,141.785562],"machineNum":1,"prefId":3},{"name":"モーリーファンタジー盛岡渋民","address":"岩手県盛岡市玉山区渋民字鶴飼２０番地－１ＳｕＣ１Ｆ","grid":[39.849976,141.172806],"machineNum":1,"prefId":3},{"name":"スカロップ川徳店","address":"岩手県盛岡市菜園１－１０－１　パルクアベニュー川徳６Ｆ","grid":[39.700636,141.146947],"machineNum":1,"prefId":3},{"name":"タイトーステーション盛岡マッハランド","address":"岩手県盛岡市上堂１－２－３８マッハランド内","grid":[39.72368,141.126865],"machineNum":1,"prefId":3},{"name":"モーリーファンタジー盛岡","address":"岩手県盛岡市前潟４－７－１イオン２Ｆ","grid":[39.7116,141.098857],"machineNum":1,"prefId":3},{"name":"イオン盛岡","address":"岩手県盛岡市前潟４－７－１玩具売場","grid":[39.7116,141.098857],"machineNum":1,"prefId":3},{"name":"プラサカプコン盛岡","address":"岩手県盛岡市前潟４丁目７番１号イオンモール盛岡２Ｆ","grid":[39.7116,141.098857],"machineNum":1,"prefId":3},{"name":"モーリーファンタジー盛岡南","address":"岩手県盛岡市津志田西２丁目１７－５０盛岡南ショッピングセンターサンサ店１Ｆ","grid":[39.661956,141.148188],"machineNum":1,"prefId":3},{"name":"モーリーファンタジーイオン盛岡南","address":"岩手県盛岡市本宮７－１－１イオン３Ｆ","grid":[39.684069,141.128553],"machineNum":1,"prefId":3},{"name":"イオン盛岡南","address":"岩手県盛岡市本宮字稲荷１０－１玩具売場","grid":[39.686913,141.124142],"machineNum":1,"prefId":3},{"name":"イオンスーパーセンター金ヶ崎","address":"岩手県胆沢郡金ヶ崎町三ケ尻荒巻１６５","grid":[39.220108,141.099539],"machineNum":1,"prefId":3},{"name":"イオン江釣子","address":"岩手県北上市北鬼柳１９－６８玩具売場","grid":[39.296045,141.095426],"machineNum":1,"prefId":3},{"name":"トイザらス北上","address":"岩手県北上市有田町１０－３","grid":[39.293729,141.104667],"machineNum":1,"prefId":3},{"name":"イオンスーパーセンター陸前高田","address":"岩手県陸前高田市米崎町字川崎２２６玩具売場","grid":[39.013793,141.657269],"machineNum":1,"prefId":3},{"name":"モーリーファンタジー涌谷","address":"宮城県遠田郡涌谷町字洞ヶ崎５番地イオンスーパーセンター１Ｆ","grid":[38.536858,141.147365],"machineNum":1,"prefId":4},{"name":"モーリーファンタジー塩釜","address":"宮城県塩釜市海岸通１５番１００号マックスバリュ２Ｆ","grid":[38.318788,141.025273],"machineNum":1,"prefId":4},{"name":"イオンスーパーセンター加美","address":"宮城県加美郡加美町字赤塚１７８","grid":[38.562632,140.865945],"machineNum":1,"prefId":4},{"name":"ヨークベニマル角田","address":"宮城県角田市角田字町尻４２８　玩具売場","grid":[37.982906,140.780893],"machineNum":1,"prefId":4},{"name":"ヨークベニマル岩沼","address":"宮城県岩沼市藤浪２丁目４－１０　玩具売場","grid":[38.101449,140.872797],"machineNum":1,"prefId":4},{"name":"モーリーファンタジー気仙沼","address":"宮城県気仙沼市字赤岩舘下６－１外イオン２Ｆ","grid":[38.889022,141.572962],"machineNum":1,"prefId":4},{"name":"イオン気仙沼","address":"宮城県気仙沼市赤岩舘下６－１外玩具売場","grid":[38.889022,141.572962],"machineNum":1,"prefId":4},{"name":"モーリーファンタジー利府","address":"宮城県宮城郡　利府町　字新屋田前２２イオン２Ｆ","grid":[38.326849,140.971978],"machineNum":1,"prefId":4},{"name":"イオン利府","address":"宮城県宮城郡利府町利府字新屋田前２２玩具売場","grid":[38.326849,140.971978],"machineNum":1,"prefId":4},{"name":"モーリーファンタジー栗原志波姫","address":"宮城県栗原市志波姫新熊谷１１番ＳｕＣ１Ｆ","grid":[38.748912,141.068154],"machineNum":1,"prefId":4},{"name":"プレビプレイランド大和吉岡","address":"宮城県黒川郡大和町吉岡東１－２－１","grid":[38.436572,140.893195],"machineNum":1,"prefId":4},{"name":"モーリーファンタジー富谷","address":"宮城県黒川郡富谷町大清水１ー３３－１イオン１Ｆ","grid":[38.364737,140.875154],"machineNum":1,"prefId":4},{"name":"イオン富谷","address":"宮城県黒川郡富谷町大清水１－３３－１玩具売場","grid":[38.364737,140.875154],"machineNum":1,"prefId":4},{"name":"あそびの広場船岡","address":"宮城県柴田郡芝田町西船迫2-1-15　イオン2F","grid":[38.06389,140.762961],"machineNum":1,"prefId":4},{"name":"サニーランドフォルテ店","address":"宮城県柴田郡大河原町字小島２－１玩具売り場","grid":[38.065549,140.737386],"machineNum":1,"prefId":4},{"name":"イトーヨーカドー石巻あけぼの","address":"宮城県石巻市あけぼの１－１－２玩具売場","grid":[38.448274,141.273404],"machineNum":1,"prefId":4},{"name":"モーリーファンタジー石巻","address":"宮城県石巻市茜平４－１０４番地イオン２Ｆ","grid":[38.448129,141.265925],"machineNum":1,"prefId":4},{"name":"プラサカプコン石巻","address":"宮城県石巻市茜平４丁目１０４番地　イオン石巻ＳＣ２Ｆ","grid":[38.448129,141.265925],"machineNum":1,"prefId":4},{"name":"イオン石巻","address":"宮城県石巻市蛇田字新金沼１７０玩具売場","grid":[38.445903,141.267402],"machineNum":1,"prefId":4},{"name":"ヨークベニマル中浦","address":"宮城県石巻市中浦１丁目１－２５","grid":[38.429671,141.267896],"machineNum":1,"prefId":4},{"name":"モーリーファンタジー石巻東","address":"宮城県石巻市流留字七勺１番１SｕC1階","grid":[38.428678,141.374476],"machineNum":1,"prefId":4},{"name":"モーリーファンタジー仙台中山","address":"宮城県仙台市　泉区南中山１－３５－４０イオン３Ｆ","grid":[38.298532,140.824754],"machineNum":1,"prefId":4},{"name":"イオン仙台幸町","address":"宮城県仙台市宮城野区幸町５－１０－１玩具売場","grid":[38.273445,140.902984],"machineNum":1,"prefId":4},{"name":"ヨークベニマル新田東","address":"宮城県仙台市宮城野区新田東３－１－５　玩具売場","grid":[38.276602,140.935971],"machineNum":1,"prefId":4},{"name":"セガ仙台コロナワールド","address":"宮城県仙台市宮城野区福室字田中前一番５３－１","grid":[38.260588,140.968915],"machineNum":1,"prefId":4},{"name":"ヨドバシカメラ仙台","address":"宮城県仙台市宮城野区榴岡１－３－１玩具売場２Ｆ","grid":[38.258969,140.883495],"machineNum":1,"prefId":4},{"name":"仙台レジャーランド一番町","address":"宮城県仙台市青葉区一番町4-3-27　ガレリア一番町ビル１階～３階","grid":[38.263004,140.871025],"machineNum":1,"prefId":4},{"name":"ヒルサイドショップ＆アウトレット","address":"宮城県仙台市青葉区錦ケ丘１－３－１","grid":[38.257366,140.764087],"machineNum":1,"prefId":4},{"name":"ＭＥＧＡドン・キホーテ仙台台原","address":"宮城県仙台市青葉区台原１－７－４０","grid":[38.282495,140.873124],"machineNum":1,"prefId":4},{"name":"プリズムストーン  仙台店","address":"宮城県仙台市青葉区中央1-10-10　仙台ロフト店7F　アニメガ仙台ロフト店","grid":[38.260132,140.880589],"machineNum":1,"prefId":4},{"name":"タイトーステーション仙台クリスロード","address":"宮城県仙台市青葉区中央２－３－２５","grid":[38.260987,140.875646],"machineNum":1,"prefId":4},{"name":"ヤマダ電機ＬＡＢＩ仙台","address":"宮城県仙台市青葉区中央３丁目6-1","grid":[38.25989,140.878675],"machineNum":1,"prefId":4},{"name":"ヨークベニマル南吉成","address":"宮城県仙台市青葉区南吉成３－１－２１","grid":[38.286755,140.816001],"machineNum":1,"prefId":4},{"name":"ビーカム松森","address":"宮城県仙台市泉区松森字斉兵衛５８－１","grid":[38.304489,140.909977],"machineNum":1,"prefId":4},{"name":"イトーヨーカドーアリオ仙台泉","address":"宮城県仙台市泉区泉中央１－５－１玩具売場","grid":[38.324539,140.88223],"machineNum":1,"prefId":4},{"name":"トイザらス仙台泉大沢","address":"宮城県仙台市泉区大沢１－５－１イオンタウン仙台泉大沢２Ｆ","grid":[38.350091,140.880964],"machineNum":1,"prefId":4},{"name":"スイーツハート仙台泉大沢","address":"宮城県仙台市泉区大沢１丁目５－１イオン２階","grid":[38.350076,140.880937],"machineNum":1,"prefId":4},{"name":"ヨークベニマル太子堂","address":"宮城県仙台市太白区あすと長町３－１２－３０","grid":[38.217202,140.883831],"machineNum":1,"prefId":4},{"name":"仙台ベガロポリス","address":"宮城県仙台市太白区西多賀５丁目２４－１","grid":[38.219414,140.848952],"machineNum":1,"prefId":4},{"name":"テックランド仙台南","address":"宮城県仙台市太白区中田町字後河原４８－１","grid":[38.192179,140.892019],"machineNum":1,"prefId":4},{"name":"ソユーゲームフィールド仙台長町","address":"宮城県仙台市太白区長町７丁目２０番３号ザ・モール仙台長町店３Ｆ","grid":[38.22568,140.876862],"machineNum":1,"prefId":4},{"name":"モーリーファンタジー鈎取","address":"宮城県仙台市太白区本町１－２１－１イオンスーパーセンター鈎取店１Ｆ","grid":[38.316348,140.913329],"machineNum":1,"prefId":4},{"name":"モーリーファンタジー多賀城","address":"宮城県多賀城市町前４－１－１イオン３Ｆ","grid":[38.282427,141.004647],"machineNum":1,"prefId":4},{"name":"イオン多賀城","address":"宮城県多賀城市町前４－１－１玩具売場","grid":[38.282427,141.004647],"machineNum":1,"prefId":4},{"name":"イオン古川","address":"宮城県大崎市古川旭２－２－１玩具売場","grid":[38.567065,140.972879],"machineNum":1,"prefId":4},{"name":"モーリーファンタジー古川","address":"宮城県大崎市古川旭２丁目２－１イオン２Ｆ","grid":[38.567065,140.972879],"machineNum":1,"prefId":4},{"name":"ＰＡＬＯ古川","address":"宮城県大崎市古川沢田筒場浦１５イオンタウン１Ｆ","grid":[38.599031,140.974142],"machineNum":1,"prefId":4},{"name":"ゲームランド佐沼","address":"宮城県登米市　南方町新島前　４６－１　イオンタウン佐沼　１Ｆ","grid":[38.681745,141.181752],"machineNum":1,"prefId":4},{"name":"イオンスーパーセンター佐沼","address":"宮城県登米市南方町新島前４６－１　玩具売場","grid":[38.681745,141.181752],"machineNum":1,"prefId":4},{"name":"トイザらス石巻矢本","address":"宮城県東松島市小松字上浮足４３","grid":[38.42665,141.203967],"machineNum":1,"prefId":4},{"name":"こころっこ名取","address":"宮城県名取市愛島塩手字前野田４８－１０　ホームセンタームサシ名取店内２階　プレビプレイランドコーナー　ここ","grid":[38.163199,140.856885],"machineNum":1,"prefId":4},{"name":"ヨークベニマル名取西","address":"宮城県名取市田高字原３８９　玩具売場","grid":[38.178202,140.876461],"machineNum":1,"prefId":4},{"name":"イオン新名取","address":"宮城県名取市杜せきのした　５丁目３番地の１　イオン３Ｆ玩具売場","grid":[38.163808,140.89581],"machineNum":1,"prefId":4},{"name":"モーリーファンタジー新名取","address":"宮城県名取市杜せきのした　５丁目３番地の１イオン３Ｆ","grid":[38.163808,140.89581],"machineNum":1,"prefId":4},{"name":"セガ名取セッツウイングス","address":"宮城県名取市飯野坂字土城堀５７－１","grid":[38.156556,140.888379],"machineNum":1,"prefId":4},{"name":"モーリーファンタジー横手","address":"秋田県横手市安田字向田１４７イオン２Ｆ","grid":[39.298781,140.553646],"machineNum":1,"prefId":5},{"name":"イオン横手","address":"秋田県横手市安田字向田１４７玩具売場","grid":[39.298781,140.553646],"machineNum":1,"prefId":5},{"name":"ファンタジープラザ秋田","address":"秋田県秋田市旭北錦町４－５８ドン・キホーテ秋田２Ｆ","grid":[39.714759,140.109363],"machineNum":1,"prefId":5},{"name":"セガワールド秋田","address":"秋田県秋田市茨島１－１－１６","grid":[39.704245,140.104633],"machineNum":1,"prefId":5},{"name":"モーリーファンタジー御所野","address":"秋田県秋田市御所野地蔵田1-1-1　イオン御所野３F","grid":[39.663262,140.160741],"machineNum":1,"prefId":5},{"name":"イオン御所野","address":"秋田県秋田市御所野地蔵田１－１－１玩具売場","grid":[39.663262,140.160741],"machineNum":1,"prefId":5},{"name":"ＳＯＹＵＧａｍｅＦｉｅｌｄ御所野","address":"秋田県秋田市御所野地蔵田一丁目１番地１号イオンモール秋田２Ｆ","grid":[39.663262,140.160741],"machineNum":1,"prefId":5},{"name":"イオン土崎港","address":"秋田県秋田市土崎港南２－３－４１玩具売場","grid":[39.747171,140.072817],"machineNum":1,"prefId":5},{"name":"Ｒ－ＢＯＸアルヴェ","address":"秋田県秋田市東通仲町４－１秋田拠点センターアルヴェ１階","grid":[39.716738,140.130056],"machineNum":1,"prefId":5},{"name":"モーリーファンタジー秋田中央","address":"秋田県秋田市楢山川口境５－１１　　イオン３Ｆ","grid":[39.704145,140.109557],"machineNum":1,"prefId":5},{"name":"イオン秋田中央","address":"秋田県秋田市楢山川口境５－１１玩具売場","grid":[39.704145,140.109557],"machineNum":1,"prefId":5},{"name":"メルヘンランド大館店","address":"秋田県大館市御成町３丁目７－５８いとく大館ショッピングセンター３階","grid":[40.280824,140.56038],"machineNum":1,"prefId":5},{"name":"モーリーファンタジー大館","address":"秋田県大館市大田面２３８ＳｕＣ１Ｆ","grid":[40.286148,140.57675],"machineNum":1,"prefId":5},{"name":"モーリーファンタジー中仙","address":"秋田県大仙市北長野字袴田１８８イオン１Ｆ","grid":[39.551316,140.551325],"machineNum":1,"prefId":5},{"name":"プラサカプコン大曲","address":"秋田県大仙市和合字坪立177 イオンモール大曲 2F","grid":[39.437664,140.50916],"machineNum":1,"prefId":5},{"name":"イオン大曲","address":"秋田県大仙市和合字坪立１７７番地　イオン２Ｆ玩具売場","grid":[39.437664,140.50916],"machineNum":1,"prefId":5},{"name":"モーリーファンタジー大曲","address":"秋田県大仙市和合字坪立１７７番地イオン２Ｆ","grid":[39.437664,140.50916],"machineNum":1,"prefId":5},{"name":"ＰＲＥＳＴＯユザワプラザ","address":"秋田県湯沢市材木町２－１－１８ユザワプラザ２階","grid":[39.161643,140.488086],"machineNum":1,"prefId":5},{"name":"リスチャイルド湯沢店","address":"秋田県湯沢市字上荻生田１６２イオンスーパーセンター湯沢店内","grid":[39.149833,140.471393],"machineNum":1,"prefId":5},{"name":"ＡＮ.ＫＩＮ.ＴＡＮ五城目店","address":"秋田県南秋田郡五城目町大字大川西野字田屋前１３８　イオンスーパーセンター五城目店内","grid":[39.93564,140.107602],"machineNum":1,"prefId":5},{"name":"イオンスーパーセンター（株）五城目","address":"秋田県南秋田郡五城目町大川西野字田屋前１３８　玩具売場","grid":[39.935817,140.107491],"machineNum":1,"prefId":5},{"name":"モーリーファンタジー能代","address":"秋田県能代市　柳町１１－１イオン３Ｆ","grid":[40.209071,140.024633],"machineNum":1,"prefId":5},{"name":"リスチャイルドたかのす店","address":"秋田県北秋田市栄字中綱３１－１イオンタウンたかのすＳＣ内","grid":[40.230102,140.384446],"machineNum":1,"prefId":5},{"name":"リスチャイルド本荘店","address":"秋田県由利本荘市石脇字田中１３８イオンスーパーセンター本荘店内","grid":[39.391632,140.027388],"machineNum":1,"prefId":5},{"name":"モーリーファンタジー山形南","address":"山形県山形市若宮３－７－８イオン2階","grid":[38.22667,140.30547],"machineNum":1,"prefId":6},{"name":"ビーカム成沢店","address":"山形県山形市成沢西５－３－２７","grid":[38.208559,140.31775],"machineNum":1,"prefId":6},{"name":"モーリーファンタジー山形北","address":"山形県山形市馬見ケ崎２－１２－１９イオン２Ｆ","grid":[38.282727,140.330825],"machineNum":1,"prefId":6},{"name":"モーリーファンタジー酒田南","address":"山形県酒田市あきほ町１２０－１イオン１Ｆ","grid":[38.891982,139.852586],"machineNum":1,"prefId":6},{"name":"イオン酒田南","address":"山形県酒田市あきほ町１２０－１玩具売場","grid":[38.891982,139.852586],"machineNum":1,"prefId":6},{"name":"わくわくランド新庄","address":"山形県新庄市金沢字大道上２０３３－４ヤマザワ新庄店内","grid":[38.753228,140.309339],"machineNum":1,"prefId":6},{"name":"アピナ鶴岡","address":"山形県鶴岡市文下字広野１－１","grid":[38.758111,139.844383],"machineNum":1,"prefId":6},{"name":"ＳＯＹＵ　Ｇａｍｅ　Ｆｉｅｌｄ天童店","address":"山形県天童市芳賀土地区画整理事業地内３４街区　イオンモール天童２階","grid":[38.361999,140.377038],"machineNum":1,"prefId":6},{"name":"モーリーファンタジー天童","address":"山形県天童市芳賀土地区画整理事業地内３４街区イオン３Ｆ","grid":[38.361999,140.377038],"machineNum":1,"prefId":6},{"name":"イオン東根","address":"山形県東根市さくらんぼ駅前３丁目７番１５号","grid":[38.427262,140.387083],"machineNum":1,"prefId":6},{"name":"モーリーファンタジー東根","address":"山形県東根市さくらんぼ駅前３丁目７番１５号","grid":[38.427262,140.387083],"machineNum":1,"prefId":6},{"name":"わくわくランド中山店","address":"山形県東村山郡中山町大字長崎新町３０３０－１ヤマザワ中山店内","grid":[38.327786,140.279254],"machineNum":1,"prefId":6},{"name":"イオン三川","address":"山形県東田川郡三川町大字猪子字和田庫１２８－１　イオン２Ｆ玩具売場","grid":[38.81552,139.837348],"machineNum":1,"prefId":6},{"name":"モーリーファンタジー三川","address":"山形県東田川郡三川町大字猪子字和田庫１２８－１イオン２Ｆ","grid":[38.81523,139.837442],"machineNum":1,"prefId":6},{"name":"モーリーファンタジー米沢","address":"山形県米沢市春日２－１３－４　　イオン２Ｆ","grid":[37.923358,140.108943],"machineNum":1,"prefId":6},{"name":"イオン米沢","address":"山形県米沢市春日２－１３－４玩具売場","grid":[37.923009,140.108618],"machineNum":1,"prefId":6},{"name":"ソユーゲームフィールドいわき小名浜","address":"福島県いわき市いわき都市計画事業小名浜港背後地震災復興土地区画整理事業地内イオンモールいわき小名浜３Ｆ","grid":[37.050506,140.887744],"machineNum":1,"prefId":7},{"name":"らくだのせなか鹿島エブリア","address":"福島県いわき市鹿島町米田字日渡５鹿島エブリアショッピングセンター内プレビプレイランドコーナーらくだ","grid":[36.994049,140.905262],"machineNum":1,"prefId":7},{"name":"ちびっこザウルス","address":"福島県いわき市小名浜大原字東田96ヨークタウンアクロスプラザ大原店内","grid":[36.966641,140.889209],"machineNum":1,"prefId":7},{"name":"セガ小名浜","address":"福島県いわき市小名浜林城字塚前１８－１","grid":[36.985936,140.897165],"machineNum":1,"prefId":7},{"name":"イトーヨーカドー平","address":"福島県いわき市平６－６－２玩具売場","grid":[37.057683,140.899042],"machineNum":1,"prefId":7},{"name":"こころっこ平","address":"福島県いわき市平６丁目６番地２　　イトーヨーカドー平店内　プレビプレイランドコーナー　こころっこ","grid":[37.057586,140.897951],"machineNum":1,"prefId":7},{"name":"イオンいわき","address":"福島県いわき市平字三倉６８－１","grid":[37.050865,140.89963],"machineNum":1,"prefId":7},{"name":"モーリーファンタジーいわき","address":"福島県いわき市平字三倉６８－１","grid":[37.050865,140.89963],"machineNum":1,"prefId":7},{"name":"セガワールド勿来","address":"福島県いわき市勿来町四沢字鍵田１３","grid":[36.889192,140.784575],"machineNum":1,"prefId":7},{"name":"アピタ会津若松","address":"福島県会津若松市神指町大字南四合字幕内南１５４　玩具売場","grid":[37.494429,139.89765],"machineNum":1,"prefId":7},{"name":"おもちゃ屋本舗会津千石","address":"福島県会津若松市八角町１番１号","grid":[37.50291,139.942545],"machineNum":1,"prefId":7},{"name":"モーリーファンタジー鏡石","address":"福島県岩瀬郡鏡石町桜岡３７５－９ＳｕＣ１Ｆ","grid":[37.242992,140.332162],"machineNum":1,"prefId":7},{"name":"ＰＡＬＯ喜多方","address":"福島県喜多方市字押切南２－４２－１","grid":[37.6468,139.859584],"machineNum":1,"prefId":7},{"name":"タイトーＦステーション郡山オリエントパーク","address":"福島県郡山市安積町荒井字大久保３５－１","grid":[37.374482,140.348763],"machineNum":1,"prefId":7},{"name":"タイトーＦステーション郡山アティ","address":"福島県郡山市駅前１－１６－７","grid":[37.39691,140.387481],"machineNum":1,"prefId":7},{"name":"ヨドバシカメラ郡山駅前","address":"福島県郡山市駅前１－１６－７","grid":[37.39691,140.387481],"machineNum":1,"prefId":7},{"name":"トイザらス郡山","address":"福島県郡山市松木町２－８８","grid":[37.391394,140.388565],"machineNum":1,"prefId":7},{"name":"イトーヨーカドー郡山","address":"福島県郡山市西ノ内２－１１－４０玩具売場","grid":[37.407629,140.36411],"machineNum":1,"prefId":7},{"name":"西友郡山","address":"福島県郡山市長者１－１－５６　玩具売場","grid":[37.397682,140.369989],"machineNum":1,"prefId":7},{"name":"モーリーファンタジー郡山フェスタ","address":"福島県郡山市日和田町字小原１イオン１Ｆ","grid":[37.444665,140.376336],"machineNum":1,"prefId":7},{"name":"イオン郡山フェスタ","address":"福島県郡山市日和田町字小原１玩具売場","grid":[37.444665,140.376336],"machineNum":1,"prefId":7},{"name":"セガ日和田","address":"福島県郡山市日和田町字西中島7-1","grid":[37.448214,140.380429],"machineNum":1,"prefId":7},{"name":"ＳＯＹＵＥＮＴＥＲＴＡＩＮＭＥＮＴＳＴＵＤＩＯ須賀川","address":"福島県須賀川市古河１０５番イオンタウン須賀川Ｂ棟内","grid":[37.298421,140.385298],"machineNum":1,"prefId":7},{"name":"モーリーファンタジー白河西郷","address":"福島県西白河郡西郷村大字小田倉字岩下１１－１イオン２Ｆ","grid":[37.12124,140.177711],"machineNum":1,"prefId":7},{"name":"イオン白河西郷","address":"福島県西白河郡西郷村大字小田倉字岩倉１１－１玩具売場","grid":[37.121565,140.177307],"machineNum":1,"prefId":7},{"name":"モーリーファンタジー相馬","address":"福島県相馬市馬場野字雨田５１イオン２Ｆ","grid":[37.787641,140.930435],"machineNum":1,"prefId":7},{"name":"ジャスモールファンタジー","address":"福島県南相馬市原町区大木戸字金場７７南相馬ジャスモールＷ１棟","grid":[37.637582,140.943903],"machineNum":1,"prefId":7},{"name":"イオンスーパーセンター南相馬","address":"福島県南相馬市原町区大木戸字金場77番地","grid":[37.636916,140.942926],"machineNum":1,"prefId":7},{"name":"ＴＨＥ３ＲＤＰＬＡＮＥＴピボット福島","address":"福島県福島市栄町１－１パワーシティピボット内","grid":[37.754528,140.458769],"machineNum":1,"prefId":7},{"name":"トイザらス福島","address":"福島県福島市森合字清水７　コープマートいずみ２Ｆ","grid":[37.772103,140.44145],"machineNum":1,"prefId":7},{"name":"イトーヨーカドー福島","address":"福島県福島市太田町１３－４玩具売場","grid":[37.754032,140.456878],"machineNum":1,"prefId":7},{"name":"イオン福島","address":"福島県福島市南矢野目字西荒田５０－１７玩具売場","grid":[37.788296,140.457748],"machineNum":1,"prefId":7},{"name":"モーリーファンタジー福島","address":"福島県福島市南矢野目字西荒田５０番地の１７イオン３Ｆ","grid":[37.788296,140.457748],"machineNum":1,"prefId":7},{"name":"モーリーファンタジーつくば","address":"茨城県つくば市稲岡６６－１イオン３Ｆ","grid":[36.035055,140.133179],"machineNum":1,"prefId":8},{"name":"イオンつくば","address":"茨城県つくば市稲岡６６－１玩具売場","grid":[36.035055,140.133179],"machineNum":1,"prefId":8},{"name":"ジャムジャムつくば","address":"茨城県つくば市竹園1-9-2ディズタウンつくばB1F","grid":[36.077984,140.114807],"machineNum":1,"prefId":8},{"name":"ＪＯＹＦＵＬ－２ニューポートひたちなか","address":"茨城県ひたちなか市新光町３４－１　玩具売場","grid":[36.407684,140.586066],"machineNum":1,"prefId":8},{"name":"MEGAドン・キホーテ勝田","address":"茨城県ひたちなか市石川町１－１","grid":[36.393173,140.52763],"machineNum":1,"prefId":8},{"name":"ジャムジャムひたちなか本店新館","address":"茨城県ひたちなか市田中後４０－２","grid":[36.347457,140.580161],"machineNum":1,"prefId":8},{"name":"新利根SC","address":"茨城県稲敷市角崎１６７８番地","grid":[35.905849,140.286765],"machineNum":1,"prefId":8},{"name":"こころっこＪ’Ｓ新利根ＳＣ店","address":"茨城県稲敷市角崎１６７８番地　　新利根ショッピングセンター内　プレビプレイランドコーナー　こころっこＪ’ｓ","grid":[35.905849,140.286765],"machineNum":1,"prefId":8},{"name":"ハローズガーデン江戸崎店","address":"茨城県稲敷市江戸崎甲４８３６番地パンプ江戸崎ショッピングセンター１階","grid":[35.963594,140.319804],"machineNum":1,"prefId":8},{"name":"アピタ佐原東","address":"茨城県稲敷市西代１４８０　玩具売場","grid":[35.918535,140.487891],"machineNum":1,"prefId":8},{"name":"タイトーステーション佐原東","address":"茨城県稲敷市西代１４９５ショッピングセンターパルナ２Ｆ","grid":[35.918599,140.488128],"machineNum":1,"prefId":8},{"name":"モーリーファンタジー佐原東","address":"茨城県稲敷市西代１４９５パルナ２Ｆ","grid":[35.918599,140.488128],"machineNum":1,"prefId":8},{"name":"イオン下妻","address":"茨城県下妻市堀篭９７２－１玩具売場","grid":[36.189545,139.990167],"machineNum":1,"prefId":8},{"name":"モーリーファンタジー下妻","address":"茨城県下妻市堀籠９７２－１イオン２Ｆ","grid":[36.182714,139.975673],"machineNum":1,"prefId":8},{"name":"ジャングルパーク笠間店","address":"茨城県笠間市赤坂８番地笠間ＳＣポレポレシティ１階","grid":[36.391285,140.251583],"machineNum":1,"prefId":8},{"name":"西友ひたち野うしく","address":"茨城県牛久市ひたち野東２２－１　玩具売場","grid":[36.004197,140.163953],"machineNum":1,"prefId":8},{"name":"モーリーファンタジー古河","address":"茨城県古河市旭町１－２－１７　イオン２Ｆ","grid":[36.197037,139.720193],"machineNum":1,"prefId":8},{"name":"イオン古河","address":"茨城県古河市旭町１－２－１７玩具売場","grid":[36.197037,139.72002],"machineNum":1,"prefId":8},{"name":"ＦＥＳＴＡ古河","address":"茨城県古河市松並２－１８－１０マーケットシティ古河内","grid":[36.210101,139.708421],"machineNum":1,"prefId":8},{"name":"スコナランド行方","address":"茨城県行方市麻生３２８８番－５０セイミヤモール麻生店１Ｆ","grid":[36.018175,140.498705],"machineNum":1,"prefId":8},{"name":"モーリーファンタジー高萩","address":"茨城県高萩市安良川231 イオン２F","grid":[36.705943,140.708138],"machineNum":1,"prefId":8},{"name":"イオン高萩","address":"茨城県高萩市安良川２３１－１玩具売場","grid":[36.705885,140.708091],"machineNum":1,"prefId":8},{"name":"宝島鹿嶋","address":"茨城県鹿嶋市宮中２９０－１ショッピングセンターチェリオ１階","grid":[35.960043,140.644038],"machineNum":1,"prefId":8},{"name":"イオン鹿嶋","address":"茨城県鹿嶋市宮中２９０－１玩具売場","grid":[35.959922,140.643812],"machineNum":1,"prefId":8},{"name":"アピタ守谷","address":"茨城県守谷市久保ヶ丘２－１－１玩具売場","grid":[35.967846,139.974375],"machineNum":1,"prefId":8},{"name":"ＳＯＹＵＴＯＹ’ｓＮＹ守谷","address":"茨城県守谷市百合ヶ丘三丁目２４９番１　イオンタウン守谷２Ｆ","grid":[35.944738,139.990552],"machineNum":1,"prefId":8},{"name":"ファミリーランド神栖","address":"茨城県神栖市大野原4-8-67ベイシア神栖店2F","grid":[35.899642,140.636435],"machineNum":1,"prefId":8},{"name":"テックランド水戸本店","address":"茨城県水戸市笠原町２０９","grid":[36.347891,140.458843],"machineNum":1,"prefId":8},{"name":"スタジオプリモマイム水戸","address":"茨城県水戸市宮町１－２－４マイム１Ｆ","grid":[36.371377,140.477467],"machineNum":1,"prefId":8},{"name":"ビックカメラ水戸店４Ｆトイズコーナー","address":"茨城県水戸市宮町１－７－３１　エクセルみなみ４Ｆ・５Ｆ","grid":[36.3701,140.477018],"machineNum":1,"prefId":8},{"name":"ピンクパンサー水戸けやき台","address":"茨城県水戸市酒門町３２７６－１","grid":[36.338082,140.483112],"machineNum":1,"prefId":8},{"name":"セガ水戸南","address":"茨城県水戸市千波町２０１７－１－１Ｆ","grid":[36.350322,140.44301],"machineNum":1,"prefId":8},{"name":"水戸京成百貨店","address":"茨城県水戸市泉町１－６－１水戸京成百貨店　７Ｆ玩具売場","grid":[36.37808,140.464352],"machineNum":1,"prefId":8},{"name":"イオン水戸内原","address":"茨城県水戸市中原町字西１３５玩具売場","grid":[36.38107,140.357216],"machineNum":1,"prefId":8},{"name":"ユーズランド水戸内原店","address":"茨城県水戸市中原町字西１３５番地　イオンモール水戸内原２Ｆ","grid":[36.38107,140.357216],"machineNum":1,"prefId":8},{"name":"モーリーファンタジー水戸内原","address":"茨城県水戸市内原２丁目１番地　イオン３Ｆ","grid":[36.37454,140.359419],"machineNum":1,"prefId":8},{"name":"ＡＧスクエア石岡","address":"茨城県石岡市東大橋中峯１９７６－１","grid":[36.261506,140.283704],"machineNum":1,"prefId":8},{"name":"アピナ下館店","address":"茨城県筑西市玉戸１０１２－３","grid":[36.29537,139.945461],"machineNum":1,"prefId":8},{"name":"イオン土浦","address":"茨城県土浦市上高津３６７番　イオン３Ｆ玩具売場","grid":[36.080546,140.17975],"machineNum":1,"prefId":8},{"name":"モーリーファンタジー土浦","address":"茨城県土浦市上高津３６７番イオン３Ｆ","grid":[36.080546,140.17975],"machineNum":1,"prefId":8},{"name":"楽市楽座イオンモール土浦","address":"茨城県土浦市上高津３６７番地イオンモール土浦店３階","grid":[36.080546,140.17975],"machineNum":1,"prefId":8},{"name":"プラサカプコン土浦","address":"茨城県土浦市真鍋２－１－２９","grid":[36.090337,140.198977],"machineNum":1,"prefId":8},{"name":"タイトーＦステーションイオンタウン水戸南","address":"茨城県東茨城郡茨城町長岡３４８０－１０１イオンタウン水戸南ショッピングセンター","grid":[36.310779,140.441215],"machineNum":1,"prefId":8},{"name":"イオン東海","address":"茨城県那珂郡東海村舟石川駅東４－１－１玩具売場","grid":[36.463291,140.566786],"machineNum":1,"prefId":8},{"name":"モーリーファンタジー東海","address":"茨城県那珂郡東海村舟石川駅東四丁目１番１号イオン2階","grid":[36.463291,140.566786],"machineNum":1,"prefId":8},{"name":"こころっこ日立店","address":"茨城県日立市幸町１－１６－１　イトーヨーカドー日立店５階　プレビプレイランドコーナー　こころっこ","grid":[36.59171,140.659296],"machineNum":1,"prefId":8},{"name":"イトーヨーカドー日立","address":"茨城県日立市幸町１－１６－１玩具売場","grid":[36.591738,140.659053],"machineNum":1,"prefId":8},{"name":"セガワールド日立","address":"茨城県日立市田尻町３－２６－１","grid":[36.626423,140.66977],"machineNum":1,"prefId":8},{"name":"ピンクパンサー日立","address":"茨城県日立市東多賀町５－１０－１０","grid":[36.548234,140.630508],"machineNum":1,"prefId":8},{"name":"カインズホーム日立","address":"茨城県日立市留町字前川１２７０－２","grid":[36.491268,140.599003],"machineNum":1,"prefId":8},{"name":"ハローズガーデン竜ヶ崎店","address":"茨城県龍ケ崎市小柴５－１－２ショッピングセンターサプラ２階","grid":[35.932962,140.160322],"machineNum":1,"prefId":8},{"name":"イトーヨーカドー竜ヶ崎","address":"茨城県龍ケ崎市小柴５－１－２玩具売場","grid":[35.932962,140.160322],"machineNum":1,"prefId":8},{"name":"セガワールド龍ヶ崎","address":"茨城県龍ヶ崎市藤ヶ丘４－２－８","grid":[35.938539,140.195859],"machineNum":1,"prefId":8},{"name":"モーリーファンタジーさくら","address":"栃木県さくら市桜野１５５１ザ　ビッグ１Ｆ","grid":[36.689618,139.979317],"machineNum":1,"prefId":9},{"name":"ＦＫＤインターパーク","address":"栃木県宇都宮市インターパーク６－１－１　２Ｆ　玩具売場","grid":[36.490548,139.906607],"machineNum":1,"prefId":9},{"name":"テクモピアロックダムインターパーク","address":"栃木県宇都宮市インターパーク６－１－１ＦＫＤショピングモールインターパーク店２階","grid":[36.490519,139.906449],"machineNum":1,"prefId":9},{"name":"ヨドバシカメラマルチメディア宇都宮","address":"栃木県宇都宮市駅前通り１－４－６　玩具売場","grid":[36.560438,139.896968],"machineNum":1,"prefId":9},{"name":"タイトーＦステーションララスクエア宇都宮","address":"栃木県宇都宮市駅前通り1丁目４－６","grid":[36.560438,139.896968],"machineNum":1,"prefId":9},{"name":"ジャンボリー御幸ケ原","address":"栃木県宇都宮市御幸が原５０－１ヨークベニマル御幸が原店内プレビプレイランドコーナー　ジャンボリー","grid":[36.555075,139.882621],"machineNum":1,"prefId":9},{"name":"アピタ宇都宮","address":"栃木県宇都宮市江曽島本町２２－７　玩具売場","grid":[36.531593,139.866942],"machineNum":1,"prefId":9},{"name":"テクモピアパルテノン宇都宮","address":"栃木県宇都宮市今泉町２３７　福田屋ショッピングプラザ宇都宮店２Ｆ","grid":[36.573702,139.900374],"machineNum":1,"prefId":9},{"name":"ＦＫＤ宇都宮","address":"栃木県宇都宮市今泉町２３７番地　２Ｆ　玩具売場","grid":[36.573646,139.900294],"machineNum":1,"prefId":9},{"name":"コジマ×ビックカメラ宇都宮","address":"栃木県宇都宮市今泉町２９９６－１","grid":[36.571904,139.915855],"machineNum":1,"prefId":9},{"name":"セガワールド宇都宮","address":"栃木県宇都宮市東宿郷５－１－７","grid":[36.558247,139.908899],"machineNum":1,"prefId":9},{"name":"スコナランド宇都宮","address":"栃木県宇都宮市馬場通り２－３－１２　ＭＥＧＡドンキホーテ　ラパークＢ１","grid":[36.560772,139.885309],"machineNum":1,"prefId":9},{"name":"スコナランドトライアル宇都宮","address":"栃木県宇都宮市睦町５－５スーパーセンタートライアル宇都宮店１Ｆ","grid":[36.561868,139.862886],"machineNum":1,"prefId":9},{"name":"タイトーステーション　宇都宮ベルモール店","address":"栃木県宇都宮市陽東６丁目２－１","grid":[36.555058,139.928244],"machineNum":1,"prefId":9},{"name":"イトーヨーカドー宇都宮","address":"栃木県宇都宮市陽東６丁目２番１号玩具売場","grid":[36.554631,139.9277],"machineNum":1,"prefId":9},{"name":"トイセルタウン　おもちゃのまち本店","address":"栃木県下都賀郡壬生町おもちゃのまち１－２－２０","grid":[36.463468,139.836692],"machineNum":1,"prefId":9},{"name":"ＰＡＬＯ石橋","address":"栃木県下野市下古山３３６２－１ヨークタウン","grid":[36.468546,139.868341],"machineNum":1,"prefId":9},{"name":"タイトーステーションイオンモール佐野新都市","address":"栃木県佐野市高萩町１３２４－１","grid":[36.299642,139.606642],"machineNum":1,"prefId":9},{"name":"モーリーファンタジー佐野新都市","address":"栃木県佐野市高萩町１３２４－１イオン２Ｆ","grid":[36.299104,139.606386],"machineNum":1,"prefId":9},{"name":"テクモピア鹿沼","address":"栃木県鹿沼市東末広町１０７３福田屋鹿沼店3F","grid":[36.56478,139.752099],"machineNum":1,"prefId":9},{"name":"イトーヨーカドー小山","address":"栃木県小山市駅東通り２－３－１５玩具売場","grid":[36.313371,139.808752],"machineNum":1,"prefId":9},{"name":"アピナ小山","address":"栃木県小山市駅南町４－２７－１８","grid":[36.300375,139.809231],"machineNum":1,"prefId":9},{"name":"タイトーＦステーション小山","address":"栃木県小山市喜沢１４７５番地","grid":[36.33584,139.806913],"machineNum":1,"prefId":9},{"name":"モーリーファンタジー小山","address":"栃木県小山市中久喜１４６７－１イオン２Ｆ","grid":[36.321806,139.840817],"machineNum":1,"prefId":9},{"name":"モーリーファンタジー真岡","address":"栃木県真岡市台町２６６８ザ　ビッグ１Ｆ","grid":[36.432567,140.001685],"machineNum":1,"prefId":9},{"name":"らんらんらんど足利","address":"栃木県足利市朝倉町２－２１－１６ヨークタウン足利店１Ｆ","grid":[36.316191,139.445156],"machineNum":1,"prefId":9},{"name":"ＰＡＬＯ足利","address":"栃木県足利市朝倉町２－２１－１６ヨークタウン足利店１階","grid":[36.316191,139.445156],"machineNum":1,"prefId":9},{"name":"ドラマ足利","address":"栃木県足利市朝倉町２４４－１","grid":[36.322037,139.450652],"machineNum":1,"prefId":9},{"name":"アピタ足利","address":"栃木県足利市朝倉町２４５　玩具売場","grid":[36.320732,139.449758],"machineNum":1,"prefId":9},{"name":"ヨークベニマル西那須野","address":"栃木県那須塩原市西大和１－８　玩具売場","grid":[36.8866,139.982208],"machineNum":1,"prefId":9},{"name":"モーリーファンタジー那須塩原","address":"栃木県那須塩原市島方４５５イオンタウン１Ｆ","grid":[36.92965,140.006846],"machineNum":1,"prefId":9},{"name":"セガ西那須野","address":"栃木県那須塩原市南郷屋２－１０６－２７","grid":[36.895073,139.982323],"machineNum":1,"prefId":9},{"name":"モーリーファンタジー今市","address":"栃木県日光市豊田字若林７９－１イオン２Ｆ","grid":[36.735099,139.703902],"machineNum":1,"prefId":9},{"name":"宝島大間々","address":"群馬県みどり市大間々町大間々４０番地さくらもーる?２Ｆ","grid":[36.413877,139.281372],"machineNum":1,"prefId":10},{"name":"モーリーファンタジーミスターマックス伊勢崎","address":"群馬県伊勢崎市宮子町３５５６番地１　ミスターマックス１Ｆ","grid":[36.329295,139.151167],"machineNum":1,"prefId":10},{"name":"アピタ伊勢崎東","address":"群馬県伊勢崎市三室町5330","grid":[36.329025,139.233825],"machineNum":1,"prefId":10},{"name":"プレビ劇場ＩＳＥＳＡＫＩ","address":"群馬県伊勢崎市西小保方町３６８　スマーク伊勢崎店内３階","grid":[36.339174,139.233043],"machineNum":1,"prefId":10},{"name":"アミュージアム伊勢崎","address":"群馬県伊勢崎市連取町１５０７イトーヨーカドー伊勢崎店２Ｆ","grid":[36.316347,139.181862],"machineNum":1,"prefId":10},{"name":"イトーヨーカドー伊勢崎","address":"群馬県伊勢崎市連取町１５０７玩具売場","grid":[36.316347,139.181862],"machineNum":1,"prefId":10},{"name":"レジャーランド伊勢崎","address":"群馬県伊勢崎市連取町３０６６－１","grid":[36.318183,139.172415],"machineNum":1,"prefId":10},{"name":"セガワールド館林","address":"群馬県館林市小桑原町９４９－１","grid":[36.235177,139.520251],"machineNum":1,"prefId":10},{"name":"ＭＥＧＡドン・キホーテ桐生","address":"群馬県桐生市永楽町５－１０","grid":[36.412457,139.335972],"machineNum":1,"prefId":10},{"name":"宝島桐生","address":"群馬県桐生市永楽町５－１０　ＭＥＧＡドン・キホーテ桐生店３Ｆ","grid":[36.412476,139.335905],"machineNum":1,"prefId":10},{"name":"ヤマダ電機ＬＡＢＩ１高崎","address":"群馬県高崎市栄町１番１号玩具売場","grid":[36.323193,139.013698],"machineNum":1,"prefId":10},{"name":"ＴＨＥ３ＲＤＰＬＡＮＥＴ高崎","address":"群馬県高崎市下和田町５－３－８メディアメガ高崎内","grid":[36.319572,139.013981],"machineNum":1,"prefId":10},{"name":"群馬レジャーランド高崎駅東口","address":"群馬県高崎市江木町３３３番地１高崎ＥＸビル","grid":[36.329894,139.012844],"machineNum":1,"prefId":10},{"name":"モーリーファンタジー倉賀野","address":"群馬県高崎市倉賀野町４６９１－１ミスターマックス倉賀野店１Ｆ","grid":[36.301339,139.054526],"machineNum":1,"prefId":10},{"name":"ユーズランド高崎店","address":"群馬県高崎市棟高町１４００番地　イオンモール高崎２Ｆ","grid":[36.39049,139.00675],"machineNum":1,"prefId":10},{"name":"モーリーファンタジー高崎","address":"群馬県高崎市棟高町１４００番地イオン3階","grid":[36.39049,139.00675],"machineNum":1,"prefId":10},{"name":"ハローズガーデン高崎","address":"群馬県高崎市矢中町字渕ノ内６６８－１　アピタ高崎店２F","grid":[36.309907,139.054331],"machineNum":1,"prefId":10},{"name":"アピタ高崎","address":"群馬県高崎市矢中町字渕ノ内６６８－１　玩具売場","grid":[36.309907,139.054331],"machineNum":1,"prefId":10},{"name":"セガワールド沼田","address":"群馬県沼田市下久屋町１１００－１","grid":[36.656781,139.078042],"machineNum":1,"prefId":10},{"name":"タイトーＦステーション前橋リリカ","address":"群馬県前橋市国領町２－１４－１前橋リリカ２Ｆ","grid":[36.404695,139.067979],"machineNum":1,"prefId":10},{"name":"モーリーファンタジーガーデン前橋","address":"群馬県前橋市小屋原町４７２－１ガーデン前橋　１Ｆ","grid":[36.355895,139.129841],"machineNum":1,"prefId":10},{"name":"ヤマダ電機ＰＣ＆マルチメディア館前橋本店","address":"群馬県前橋市日吉町　４－１４－１３","grid":[36.405566,139.076623],"machineNum":1,"prefId":10},{"name":"アピタ前橋","address":"群馬県前橋市文京町２－１－１　玩具売場","grid":[36.379102,139.078091],"machineNum":1,"prefId":10},{"name":"ハローズガーデン前橋","address":"群馬県前橋市文京町２－１－１アピタけやきウォーク前橋店２階","grid":[36.379102,139.078091],"machineNum":1,"prefId":10},{"name":"こころっこ新田店","address":"群馬県太田市新田市野井町５９２－１３　　ニコモール新田店内プレビプレイランドコーナー　こころっこ","grid":[36.303929,139.301889],"machineNum":1,"prefId":10},{"name":"レジャーランド太田","address":"群馬県太田市西矢島町１６２２","grid":[36.270556,139.3742],"machineNum":1,"prefId":10},{"name":"セガワールド太田","address":"群馬県太田市西矢島町５７５－１","grid":[36.274551,139.3781],"machineNum":1,"prefId":10},{"name":"ユーズランド太田","address":"群馬県太田市石原町８１番地","grid":[36.294681,139.400509],"machineNum":1,"prefId":10},{"name":"モーリーファンタジー太田","address":"群馬県太田市石原町８１番地イオン２Ｆ","grid":[36.294681,139.400509],"machineNum":1,"prefId":10},{"name":"アピナ太田","address":"群馬県太田市内ヶ島町９０７－１","grid":[36.282871,139.398348],"machineNum":1,"prefId":10},{"name":"レジャーランド藤岡","address":"群馬県藤岡市中２００２－１","grid":[36.274437,139.071767],"machineNum":1,"prefId":10},{"name":"ピアゴ藤岡","address":"群馬県藤岡市藤岡４１６－４　玩具売場","grid":[36.245454,139.081647],"machineNum":1,"prefId":10},{"name":"ハローズガーデン藤岡","address":"群馬県藤岡市藤岡４１６－４ピアゴ藤岡店２Ｆ","grid":[36.245454,139.081647],"machineNum":1,"prefId":10},{"name":"ジョイフル本田千代田","address":"群馬県邑楽郡千代田町萱野８１３－１","grid":[36.205613,139.472661],"machineNum":1,"prefId":10},{"name":"ビックカメラ大宮西口そごう店","address":"埼玉県さいたま市さいたま市大宮区桜木町１－８－４　そごうパーキング館","grid":[35.904402,139.620983],"machineNum":1,"prefId":11},{"name":"プレイランドイオン北浦和","address":"埼玉県さいたま市浦和区常盤１０－２０－２９　イオン北浦和３Ｆ","grid":[35.871391,139.638633],"machineNum":1,"prefId":11},{"name":"イオン北浦和","address":"埼玉県さいたま市浦和区常盤１０－２０－２９玩具売場","grid":[35.871391,139.638633],"machineNum":1,"prefId":11},{"name":"イトーヨーカドー浦和","address":"埼玉県さいたま市浦和区仲町１－７－１玩具売場","grid":[35.860428,139.655313],"machineNum":1,"prefId":11},{"name":"あひるのたまご岩槻","address":"埼玉県さいたま市岩槻区本丸３－２０－５３　マミーマート岩槻店内　プレビプレイランドコーナー　あひるのたまご","grid":[35.954763,139.7077],"machineNum":1,"prefId":11},{"name":"モーリーファンタジー東大宮","address":"埼玉県さいたま市見沼区春野２丁目８番地パトリア東大宮店３Ｆ","grid":[35.956954,139.659333],"machineNum":1,"prefId":11},{"name":"ウェアハウス三橋","address":"埼玉県さいたま市西区三橋６－９５５－１","grid":[35.915881,139.595834],"machineNum":1,"prefId":11},{"name":"ヨドバシカメラマルチメディアさいたま新都心駅前","address":"埼玉県さいたま市大宮区吉敷町4-263-6","grid":[35.8954,139.634421],"machineNum":1,"prefId":11},{"name":"そごう大宮","address":"埼玉県さいたま市大宮区桜木町1-6-2そごう大宮店5F玩具売場","grid":[35.904738,139.622128],"machineNum":1,"prefId":11},{"name":"タイトーＦステーションダイエー大宮","address":"埼玉県さいたま市大宮区桜木町２－３ＤＯＭショッピングセンター６Ｆ","grid":[35.908047,139.619072],"machineNum":1,"prefId":11},{"name":"タイトーステーション大宮店","address":"埼玉県さいたま市大宮区大門町一丁目１番地","grid":[35.907444,139.625585],"machineNum":1,"prefId":11},{"name":"セガ与野","address":"埼玉県さいたま市中央区本町西５－２－９　イオン与野ショッピングセンター３Ｆ","grid":[35.890913,139.61488],"machineNum":1,"prefId":11},{"name":"イオン与野","address":"埼玉県さいたま市中央区本町西５－２－９玩具売場","grid":[35.890913,139.61488],"machineNum":1,"prefId":11},{"name":"モーリーファンタジー与野","address":"埼玉県さいたま市中央区本町西５丁目２－９イオン３Ｆ","grid":[35.890913,139.61488],"machineNum":1,"prefId":11},{"name":"ダイエー南浦和東口","address":"埼玉県さいたま市南区南浦和３－２－１　玩具売場","grid":[35.846277,139.671929],"machineNum":1,"prefId":11},{"name":"イトーヨーカドー大宮宮原","address":"埼玉県さいたま市北区宮原町１－８５４－１玩具売場","grid":[35.932772,139.622029],"machineNum":1,"prefId":11},{"name":"モーリーファンタジー大宮","address":"埼玉県さいたま市北区櫛引町２－５７４－１イオン３Ｆ","grid":[35.919101,139.608238],"machineNum":1,"prefId":11},{"name":"MEGAドン･キホーテ浦和原山","address":"埼玉県さいたま市緑区原山４－３－３","grid":[35.870853,139.674566],"machineNum":1,"prefId":11},{"name":"宝島浦和原山","address":"埼玉県さいたま市緑区原山４－３－３","grid":[35.870853,139.674566],"machineNum":1,"prefId":11},{"name":"宝島浦和美園","address":"埼玉県さいたま市緑区大門３７１０イオンモール浦和美園２Ｆ","grid":[35.883843,139.730715],"machineNum":1,"prefId":11},{"name":"イオン浦和美園","address":"埼玉県さいたま市緑区大門３７１０玩具売場","grid":[35.883843,139.730715],"machineNum":1,"prefId":11},{"name":"モーリーファンタジー浦和美園","address":"埼玉県さいたま市緑区美園５－５０－１イオンモール３Ｆ","grid":[35.890875,139.731249],"machineNum":1,"prefId":11},{"name":"モーリーファンタジー大井","address":"埼玉県ふじみ野市ふじみ野１－２－１　イオン３Ｆ","grid":[35.859826,139.514317],"machineNum":1,"prefId":11},{"name":"イオン大井","address":"埼玉県ふじみ野市ふじみ野１－２－１玩具売場","grid":[35.859826,139.514317],"machineNum":1,"prefId":11},{"name":"ＰＡＬＯ埼玉大井","address":"埼玉県ふじみ野市西鶴ケ岡１丁目３番１５号ビバモール埼玉大井ショッピングセンター２Ｆ","grid":[35.8639,139.502232],"machineNum":1,"prefId":11},{"name":"イトーヨーカドー埼玉大井","address":"埼玉県ふじみ野市西鶴ヶ丘１－３－１５","grid":[35.863963,139.502234],"machineNum":1,"prefId":11},{"name":"イトーヨーカドー上福岡東","address":"埼玉県ふじみ野市大原２－１－３０玩具売場","grid":[35.880511,139.518202],"machineNum":1,"prefId":11},{"name":"イオン羽生","address":"埼玉県羽生市川崎２－２８１－３玩具売場","grid":[36.142899,139.542111],"machineNum":1,"prefId":11},{"name":"プラサカプコン羽生","address":"埼玉県羽生市川崎２－３８１－３イオンモール羽生２Ｆ","grid":[36.142596,139.54206],"machineNum":1,"prefId":11},{"name":"モーリーファンタジー羽生","address":"埼玉県羽生市川崎２丁目２８１番地３イオン３Ｆ","grid":[36.142899,139.542111],"machineNum":1,"prefId":11},{"name":"プレビALCo越谷ショッピングスクエア","address":"埼玉県越谷市越谷１－１６－６ALCo越谷ショッピングスクエア内Ｂ１Ｆ","grid":[35.886707,139.788106],"machineNum":1,"prefId":11},{"name":"モーリーファンタジーせんげん台","address":"埼玉県越谷市千間台西３－２－１２イオン３Ｆ","grid":[35.93347,139.767391],"machineNum":1,"prefId":11},{"name":"トイザらス越谷","address":"埼玉県越谷市大字上間久里３０８－１","grid":[35.931857,139.787466],"machineNum":1,"prefId":11},{"name":"ゲオ東越谷店","address":"埼玉県越谷市東越谷４－８－１７","grid":[35.898779,139.797039],"machineNum":1,"prefId":11},{"name":"イオンレイクタウン","address":"埼玉県越谷市東町２－８玩具売場","grid":[35.932307,139.767884],"machineNum":1,"prefId":11},{"name":"モーリーファンタジーレイクタウン","address":"埼玉県越谷市東町２丁目８イオン３Ｆ","grid":[35.883872,139.834893],"machineNum":1,"prefId":11},{"name":"ユーズランド越谷店","address":"埼玉県越谷市東町４－２１－１イオンレイクタウンＫＡＺＥ３ＦＡ３４２","grid":[35.880206,139.821461],"machineNum":1,"prefId":11},{"name":"テクモピア南越谷","address":"埼玉県越谷市南越谷１－１５－１ラクーン南越谷２Ｆ","grid":[35.875013,139.793168],"machineNum":1,"prefId":11},{"name":"アピタ桶川","address":"埼玉県桶川市桶川都市計画事業下日出谷東特定土地区画整理事業地内４２街区１画地","grid":[35.998174,139.54964],"machineNum":1,"prefId":11},{"name":"トイザらス桶川","address":"埼玉県桶川市西２－９－３６","grid":[36.007716,139.557519],"machineNum":1,"prefId":11},{"name":"ピアゴ大桑","address":"埼玉県加須市鳩山町10番地10","grid":[36.107072,139.655652],"machineNum":1,"prefId":11},{"name":"ライフ吉川駅前","address":"埼玉県吉川市保１－１３－３　玩具売場","grid":[35.878043,139.844006],"machineNum":1,"prefId":11},{"name":"イトーヨーカドーアリオ鷲宮","address":"埼玉県久喜市久本寺谷田７番地１玩具売場","grid":[36.082599,139.656688],"machineNum":1,"prefId":11},{"name":"こころっこ東鷲宮","address":"埼玉県久喜市桜田3-2-1イオン東鷲宮店内3F","grid":[36.089492,139.681447],"machineNum":1,"prefId":11},{"name":"プレイランド菖蒲","address":"埼玉県久喜市菖蒲町菖蒲６００５番地１モラ―ジュ菖蒲３Ｆ","grid":[36.075056,139.611303],"machineNum":1,"prefId":11},{"name":"イトーヨーカドー久喜","address":"埼玉県久喜市中央４－９－１１玩具売場","grid":[36.071069,139.675204],"machineNum":1,"prefId":11},{"name":"モーリーファンタジー狭山","address":"埼玉県狭山市上奥富１１２６－１イオン２Ｆ","grid":[35.867898,139.410218],"machineNum":1,"prefId":11},{"name":"キャッツアイ狭山","address":"埼玉県狭山市入間川３１４１","grid":[35.846569,139.42745],"machineNum":1,"prefId":11},{"name":"プリズムストーン  熊谷店","address":"埼玉県熊谷市銀座２丁目２４５ ニットーモール 4F","grid":[36.138796,139.393655],"machineNum":1,"prefId":11},{"name":"ＳＯＹＵＧａｍｅＦｉｅｌｄ熊谷店","address":"埼玉県熊谷市埼玉県熊谷市銀座二丁目２４５番地ショッピングセンターニットーモール４Ｆ","grid":[36.138796,139.393655],"machineNum":1,"prefId":11},{"name":"トイザらス熊谷","address":"埼玉県熊谷市代１０６７","grid":[36.17434,139.369328],"machineNum":1,"prefId":11},{"name":"イオン熊谷","address":"埼玉県熊谷市本石２－１３５　　イオン３Ｆ玩具売場","grid":[36.145464,139.378838],"machineNum":1,"prefId":11},{"name":"モーリーファンタジー熊谷","address":"埼玉県熊谷市本石２－１３５　イオン３Ｆ","grid":[36.146252,139.378594],"machineNum":1,"prefId":11},{"name":"モーリーファンタジー北戸田","address":"埼玉県戸田市美女木東１－３－１イオン２Ｆ","grid":[35.826822,139.652539],"machineNum":1,"prefId":11},{"name":"イオン北戸田","address":"埼玉県戸田市美女木東１－３－１玩具売場","grid":[35.826822,139.652539],"machineNum":1,"prefId":11},{"name":"ＪＯＹＦＵＬ－２幸手","address":"埼玉県幸手市上高野１２５８－１　玩具売場","grid":[36.060878,139.71487],"machineNum":1,"prefId":11},{"name":"にこぱエムズタウン幸手店","address":"埼玉県幸手市上高野７６４　エムズタウン幸手","grid":[36.068205,139.714926],"machineNum":1,"prefId":11},{"name":"アピタ吹上","address":"埼玉県鴻巣市袋９０－１　玩具売場","grid":[36.096079,139.467337],"machineNum":1,"prefId":11},{"name":"アミュージアム鴻巣","address":"埼玉県鴻巣市本町１－１－２　エルミこうのす３F","grid":[36.05994,139.509994],"machineNum":1,"prefId":11},{"name":"テックランド坂戸","address":"埼玉県坂戸市八幡１－３－４５","grid":[35.959332,139.40388],"machineNum":1,"prefId":11},{"name":"ラクガキ王国三郷","address":"埼玉県三郷市天神２－２２イトーヨーカドー２階","grid":[35.844296,139.847688],"machineNum":1,"prefId":11},{"name":"イトーヨーカドー三郷","address":"埼玉県三郷市天神２－２２玩具売場","grid":[35.844296,139.847688],"machineNum":1,"prefId":11},{"name":"ゲームパニック三郷","address":"埼玉県三郷市彦野２－２５","grid":[35.84168,139.852967],"machineNum":1,"prefId":11},{"name":"モーリーファンタジー上里","address":"埼玉県児玉郡上里町大字金久保字蓮山３５９番１イオンタウン２Ｆ","grid":[36.263895,139.139838],"machineNum":1,"prefId":11},{"name":"ユーズランド春日部店","address":"埼玉県春日部市下柳４２０－１　イオンモール春日部２Ｆ　区画番号２０３７","grid":[35.987758,139.788432],"machineNum":1,"prefId":11},{"name":"モーリーファンタジー春日部","address":"埼玉県春日部市下柳４２０－１イオン３Ｆ","grid":[35.988009,139.788773],"machineNum":1,"prefId":11},{"name":"イオン春日部","address":"埼玉県春日部市下柳４２０－１玩具売場","grid":[35.987359,139.787733],"machineNum":1,"prefId":11},{"name":"レジャーランド春日部","address":"埼玉県春日部市大字増富字谷際１６３－１","grid":[35.959357,139.728951],"machineNum":1,"prefId":11},{"name":"イトーヨーカドー春日部","address":"埼玉県春日部市中央１－１３－１玩具売場","grid":[35.979685,139.749578],"machineNum":1,"prefId":11},{"name":"西友小手指","address":"埼玉県所沢市小手指町１－２５－８　玩具売場","grid":[35.802535,139.439107],"machineNum":1,"prefId":11},{"name":"仔熊西武百貨店所沢","address":"埼玉県所沢市日吉町１２－１西武百貨店所沢店７階玩具売場","grid":[35.785851,139.472366],"machineNum":1,"prefId":11},{"name":"タイトーステーション 所沢店","address":"埼玉県所沢市日吉町3-7 スカイビュウビル","grid":[35.788089,139.472427],"machineNum":1,"prefId":11},{"name":"トイザらス所沢","address":"埼玉県所沢市北原町１４０４","grid":[35.809482,139.48039],"machineNum":1,"prefId":11},{"name":"アミュージアム所沢","address":"埼玉県所沢市小手指台２３－１マミーマート所沢山口店２Ｆ","grid":[35.791814,139.442843],"machineNum":1,"prefId":11},{"name":"ＦＥＳＴＡ上尾","address":"埼玉県上尾市愛宕３丁目１－４０　バリュープラザ上尾愛宕店内","grid":[35.964399,139.596826],"machineNum":1,"prefId":11},{"name":"イトーヨーカドーアリオ上尾","address":"埼玉県上尾市大字壱丁目３６７玩具売場","grid":[35.961737,139.566036],"machineNum":1,"prefId":11},{"name":"龍宮ガーデンアリオ上尾","address":"埼玉県上尾市大字壱丁目３６７番地　アリオ上尾店内２階","grid":[35.962089,139.566079],"machineNum":1,"prefId":11},{"name":"イトーヨーカドー上尾駅前","address":"埼玉県上尾市谷津２－１－１玩具売場","grid":[35.971997,139.58857],"machineNum":1,"prefId":11},{"name":"アピナ上尾","address":"埼玉県上尾市緑丘３丁目３番１１－２号　ＰＡＰＡ上尾　プリンセス棟１階・２階","grid":[35.987393,139.580059],"machineNum":1,"prefId":11},{"name":"ライフ新座","address":"埼玉県新座市栗原４－１２－２５玩具売場","grid":[35.755554,139.550935],"machineNum":1,"prefId":11},{"name":"スコナランド新座","address":"埼玉県新座市中野２－１－３８０ＳＣデオシティ新座３Ｆ","grid":[35.816337,139.548765],"machineNum":1,"prefId":11},{"name":"アミュージアム新座","address":"埼玉県新座市東北２－３２－１２","grid":[35.820066,139.574871],"machineNum":1,"prefId":11},{"name":"イオン新座","address":"埼玉県新座市東北２－３２－１２玩具売場","grid":[35.820153,139.5748],"machineNum":1,"prefId":11},{"name":"トイザらス新座","address":"埼玉県新座市野火止５－２－６０　ラ・ウ゛ィニュ２Ｆ","grid":[35.803038,139.558198],"machineNum":1,"prefId":11},{"name":"コジマ×ビックカメラ新座","address":"埼玉県新座市野火止６－１－１０","grid":[35.800267,139.561139],"machineNum":1,"prefId":11},{"name":"ＡＧスクエア埼玉花園","address":"埼玉県深谷市荒川３５９","grid":[36.120392,139.233112],"machineNum":1,"prefId":11},{"name":"ハローズガーデン深谷店","address":"埼玉県深谷市上紫町西４－２－１４アリオ深谷店２階","grid":[36.183204,139.296819],"machineNum":1,"prefId":11},{"name":"イトーヨーカドーアリオ深谷","address":"埼玉県深谷市上柴町西４－２－１４玩具売場","grid":[36.181269,139.299219],"machineNum":1,"prefId":11},{"name":"ゲームシティプラス川越","address":"埼玉県川越市埼玉県川越市泉町１－１ウニクス南古谷シネマ棟１Ｆ","grid":[35.903088,139.513158],"machineNum":1,"prefId":11},{"name":"レジャーランド川越","address":"埼玉県川越市新富町１－１７－４","grid":[35.91481,139.483402],"machineNum":1,"prefId":11},{"name":"モーリーファンタジーイオン川口","address":"埼玉県川口市安行領根岸字外谷田３１８０－１イオン３Ｆ","grid":[35.844356,139.717945],"machineNum":1,"prefId":11},{"name":"イオン川口","address":"埼玉県川口市安行領根岸字外谷田３１８０－１玩具売場","grid":[35.844356,139.717945],"machineNum":1,"prefId":11},{"name":"ＡＭＰＩＡ川口","address":"埼玉県川口市栄町３－１－１イート川口ビル４階","grid":[35.80304,139.716724],"machineNum":1,"prefId":11},{"name":"あそびライブラリー","address":"埼玉県川口市宮町18-9ラらガーデン川口店2F","grid":[35.804829,139.698344],"machineNum":1,"prefId":11},{"name":"ゲームシティ川口","address":"埼玉県川口市埼玉県川口市栄町１－１０－５","grid":[35.802497,139.725593],"machineNum":1,"prefId":11},{"name":"モーリーファンタジー川口前川","address":"埼玉県川口市前川１丁目１番１１号イオン3階","grid":[35.833536,139.707211],"machineNum":1,"prefId":11},{"name":"セガ川口","address":"埼玉県川口市東領家　２－２－１０","grid":[35.794596,139.74766],"machineNum":1,"prefId":11},{"name":"イトーヨーカドーアリオ川口","address":"埼玉県川口市並木元町１－７９玩具売場","grid":[35.80731,139.714284],"machineNum":1,"prefId":11},{"name":"ソユーゴールドフィッシュ川口店","address":"埼玉県川口市並木元町１番７９号　アリオ川口３Ｆ","grid":[35.80731,139.714284],"machineNum":1,"prefId":11},{"name":"アミュージアム川口","address":"埼玉県川口市本町２－７－２５ミエルかわぐち３Ｆ","grid":[35.800996,139.727468],"machineNum":1,"prefId":11},{"name":"イトーヨーカドー草加","address":"埼玉県草加市高砂２－７－１玩具売場","grid":[35.827942,139.80466],"machineNum":1,"prefId":11},{"name":"ニコパ草加舎人店","address":"埼玉県草加市遊馬町２－１　島忠ホームズ草加舎人店　１Ｆ","grid":[35.818286,139.768882],"machineNum":1,"prefId":11},{"name":"ハローズパシオス秩父店","address":"埼玉県秩父市永田町１０－２７","grid":[36.009344,139.086289],"machineNum":1,"prefId":11},{"name":"マルエツ朝霞","address":"埼玉県朝霞市本町１－１２－１０　玩具売場","grid":[35.799697,139.593101],"machineNum":1,"prefId":11},{"name":"ハローズガーデンワカバウォーク店","address":"埼玉県鶴ケ島市富士見１－２－１ワカバウォーク北棟２階","grid":[35.949846,139.411116],"machineNum":1,"prefId":11},{"name":"アピタ東松山","address":"埼玉県東松山市あずま町４－３　玩具売場","grid":[36.005415,139.410149],"machineNum":1,"prefId":11},{"name":"ゲオ東松山","address":"埼玉県東松山市松本町２丁目１番５１号","grid":[36.038233,139.41412],"machineNum":1,"prefId":11},{"name":"ポップンパーク宮代キッズ","address":"埼玉県南埼玉郡宮代町道佛５９５　フードスクエア宮代店１Ｆ","grid":[36.016535,139.730715],"machineNum":1,"prefId":11},{"name":"ゲームスクエア三芳","address":"埼玉県入間郡三芳町大字藤久保字北新埜８５５-４０３アクロスプラザ三芳内","grid":[35.836227,139.530545],"machineNum":1,"prefId":11},{"name":"ライフ毛呂山店","address":"埼玉県入間郡毛呂山町岩井西３丁目１２番地３４玩具売場","grid":[35.942225,139.314075],"machineNum":1,"prefId":11},{"name":"モーリーファンタジー入間","address":"埼玉県入間市上藤沢４６２－１イオン２Ｆ","grid":[35.822183,139.394809],"machineNum":1,"prefId":11},{"name":"イオン入間","address":"埼玉県入間市上藤沢４６２－１玩具売場","grid":[35.822183,139.394809],"machineNum":1,"prefId":11},{"name":"セガワールド入間","address":"埼玉県入間市東藤沢　２－１８","grid":[35.818984,139.418328],"machineNum":1,"prefId":11},{"name":"トイザらス入間","address":"埼玉県入間市豊岡２－１－１","grid":[35.8362,139.386884],"machineNum":1,"prefId":11},{"name":"ＴＨＥ３ＲＤＰＬＡＮＥＴフレスポ八潮","address":"埼玉県八潮市大瀬８２２番地１フレスポ八潮３Ｆ","grid":[35.806256,139.845769],"machineNum":1,"prefId":11},{"name":"セガららぽーと富士見台","address":"埼玉県富士見市山室1-1313　3階35200区画","grid":[35.858229,139.547651],"machineNum":1,"prefId":11},{"name":"こころっこ北本","address":"埼玉県北本市深井６－８７ＨｅｙＷｏｒｌｄ店内プレビプレイランドコーナーこころっこ","grid":[36.053595,139.525613],"machineNum":1,"prefId":11},{"name":"アピタ本庄","address":"埼玉県本庄市南１－２－１０　玩具売場","grid":[36.243548,139.190477],"machineNum":1,"prefId":11},{"name":"ハローズガーデン本庄","address":"埼玉県本庄市南１－２－１０アピタ本庄店１階","grid":[36.236575,139.182206],"machineNum":1,"prefId":11},{"name":"MEGAドン・キホーテ蓮田","address":"埼玉県蓮田市東４－５－１３","grid":[35.980124,139.657581],"machineNum":1,"prefId":11},{"name":"イトーヨーカドー和光","address":"埼玉県和光市丸山台１－９－３玩具売場","grid":[35.786409,139.612381],"machineNum":1,"prefId":11},{"name":"イトーヨーカドー錦町","address":"埼玉県蕨市錦町１－１２－１玩具売場","grid":[35.821647,139.678041],"machineNum":1,"prefId":11},{"name":"Ｓｏｙｕ　Ｐｉｒａｔｅｓ　Ｋｉｄｓ錦町店","address":"埼玉県蕨市錦町一丁目１２番１号　イトーヨーカドー錦町店２Ｆ","grid":[35.821647,139.678041],"machineNum":1,"prefId":11},{"name":"タイトーステーション　旭サンモール店","address":"千葉県旭市イ－２６７６－１　サンモール３Ｆ","grid":[35.725268,140.658355],"machineNum":1,"prefId":12},{"name":"カインズホーム旭飯岡","address":"千葉県旭市三川字犬林セの４３３４－１","grid":[35.72163,140.686824],"machineNum":1,"prefId":12},{"name":"セガワールド旭","address":"千葉県旭市二３１５０－１","grid":[35.723505,140.639622],"machineNum":1,"prefId":12},{"name":"ＪＯＹＦＵＬ－２千葉ニュータウン","address":"千葉県印西市市草深１９２１","grid":[35.791353,140.157521],"machineNum":1,"prefId":12},{"name":"イオン千葉ニュータウン","address":"千葉県印西市中央北３－１－１玩具売場","grid":[35.802936,140.113733],"machineNum":1,"prefId":12},{"name":"ゲームランド千葉ニュータウン","address":"千葉県印西市中央北３－２ イオンモール千葉ニュータウンモールシネマスポーツ棟2F","grid":[35.802211,140.112095],"machineNum":1,"prefId":12},{"name":"モーリーファンタジー千葉ニュ－タウン","address":"千葉県印西市中央北３丁目１番１イオン３Ｆ","grid":[35.802936,140.113733],"machineNum":1,"prefId":12},{"name":"スコナランド酒々井","address":"千葉県印旛郡酒々井町本佐倉４５７－２トライアル酒々井店２Ｆ","grid":[35.72149,140.256567],"machineNum":1,"prefId":12},{"name":"イオン新浦安","address":"千葉県浦安市入船１－４－１　玩具売場","grid":[35.648862,139.914729],"machineNum":1,"prefId":12},{"name":"宝島新浦安","address":"千葉県浦安市入船１－４－１イオン新浦安店４Ｆ","grid":[35.648862,139.914729],"machineNum":1,"prefId":12},{"name":"ＮＩＣＯＰＡ＆ｎｉｃｏｇｒｏｕｎｄ新浦安","address":"千葉県浦安市明海４－１－１ニューコースト新浦安３Ｆ","grid":[35.642852,139.9228],"machineNum":1,"prefId":12},{"name":"イトーヨーカドー我孫子","address":"千葉県我孫子市我孫子４－１１－１玩具売場","grid":[35.876608,140.009152],"machineNum":1,"prefId":12},{"name":"セガ我孫子","address":"千葉県我孫子市柴崎字天王台　４７－１","grid":[35.878207,140.030068],"machineNum":1,"prefId":12},{"name":"にこぱアクロスモール新鎌ヶ谷店","address":"千葉県鎌ケ谷市新鎌ヶ谷２－１２－１　アクロスモール新鎌ヶ谷２Ｆ","grid":[35.780768,140.001278],"machineNum":1,"prefId":12},{"name":"イオン鎌ケ谷","address":"千葉県鎌ケ谷市新鎌ケ谷２－７－１　イオン玩具売場２Ｆ","grid":[35.778476,140.001063],"machineNum":1,"prefId":12},{"name":"モーリーファンタジー鎌ヶ谷","address":"千葉県鎌ヶ谷市新鎌ヶ谷２丁目７番１号イオン２Ｆ","grid":[35.778476,140.001063],"machineNum":1,"prefId":12},{"name":"モーリーファンタジー館山","address":"千葉県館山市八幡５４５－１イオン１Ｆ","grid":[35.007019,139.861557],"machineNum":1,"prefId":12},{"name":"イオン館山","address":"千葉県館山市八幡５４５－１玩具売場","grid":[35.007019,139.861557],"machineNum":1,"prefId":12},{"name":"スコナランド佐原","address":"千葉県香取市佐原ホ１２３６－１サワラシティ２Ｆ","grid":[35.900297,140.489235],"machineNum":1,"prefId":12},{"name":"イオン臼井","address":"千葉県佐倉市王子台１－２３玩具売場","grid":[35.729789,140.182501],"machineNum":1,"prefId":12},{"name":"イオンユーカリが丘","address":"千葉県佐倉市西ユーカリが丘6丁目12番地の3","grid":[35.7267,140.150089],"machineNum":1,"prefId":12},{"name":"モーリーファンタジーユーカリが丘","address":"千葉県佐倉市西ユーカリが丘6丁目12番地の3","grid":[35.7267,140.150089],"machineNum":1,"prefId":12},{"name":"メルヘンランドアメリー大網","address":"千葉県山武郡大網白里町みやこ野１－１－１大網白里アメリー３階","grid":[35.522001,140.315801],"machineNum":1,"prefId":12},{"name":"ＭＥＧＡドン・キホーテラパーク成東","address":"千葉県山武市成東1808-1","grid":[35.595642,140.397395],"machineNum":1,"prefId":12},{"name":"レジャーレンド成東","address":"千葉県山武市姫島１１１－１","grid":[35.588423,140.390212],"machineNum":1,"prefId":12},{"name":"宝島四街道","address":"千葉県四街道市めいわ２－１－１ＭＥＧＡドン・キホーテ２Ｆ","grid":[35.652877,140.17003],"machineNum":1,"prefId":12},{"name":"イトーヨーカドー四街道","address":"千葉県四街道市中央５番地玩具売場","grid":[35.667582,140.165227],"machineNum":1,"prefId":12},{"name":"プラサカプコンちはら台","address":"千葉県市原市ちはら台西３－４　ショッピングモールｕｎｉｍｏちはら台２Ｆ","grid":[35.527921,140.171754],"machineNum":1,"prefId":12},{"name":"イトーヨーカドーアリオ市原","address":"千葉県市原市更級４-３-２","grid":[35.508066,140.101435],"machineNum":1,"prefId":12},{"name":"トムソーヤの仲間たちアリオ市原","address":"千葉県市原市更級４－３－２アリオ内２階","grid":[35.508115,140.101375],"machineNum":1,"prefId":12},{"name":"こころっこ姉崎","address":"千葉県市原市姉崎６４５－１イトーヨーカドー姉崎店内３階","grid":[35.479935,140.045463],"machineNum":1,"prefId":12},{"name":"イトーヨーカドー姉崎","address":"千葉県市原市姉崎６４５－１玩具売場","grid":[35.479935,140.045463],"machineNum":1,"prefId":12},{"name":"アピタ市原","address":"千葉県市原市青柳北１－１　玩具売場","grid":[35.514298,140.06434],"machineNum":1,"prefId":12},{"name":"ハローズガーデン市原","address":"千葉県市原市青柳北1-1アピタ市原店2階","grid":[35.514298,140.06434],"machineNum":1,"prefId":12},{"name":"ＰＡＬＯパロ市川","address":"千葉県市川市鬼高　１－１－１","grid":[35.71769,139.933286],"machineNum":1,"prefId":12},{"name":"トイザらス市川","address":"千葉県市川市鬼高１－１－１　ニッケコルトンプラザイースト館２Ｆ","grid":[35.717688,139.933319],"machineNum":1,"prefId":12},{"name":"西友行徳","address":"千葉県市川市行徳駅前１－１９－１","grid":[35.684051,139.915313],"machineNum":1,"prefId":12},{"name":"アミューズメントエース市川","address":"千葉県市川市市川1-9-11　サン市川ハイツ１Ｆ","grid":[35.730408,139.907021],"machineNum":1,"prefId":12},{"name":"モーリーファンタジー南行徳","address":"千葉県市川市南行徳２－２０－２５","grid":[35.668521,139.905804],"machineNum":1,"prefId":12},{"name":"タイトーＦステーション　イオン市川妙典店","address":"千葉県市川市妙典４丁目１番１号　イオン市川妙典店２番街２階","grid":[35.692539,139.926762],"machineNum":1,"prefId":12},{"name":"モーリーファンタジー市川妙典３Ｆ","address":"千葉県市川市妙典５－３－１　イオン３Ｆ","grid":[35.692872,139.927938],"machineNum":1,"prefId":12},{"name":"イオン市川妙典","address":"千葉県市川市妙典５－３－１玩具売場","grid":[35.692872,139.927938],"machineNum":1,"prefId":12},{"name":"スーパービバホーム新習志野店","address":"千葉県習志野市茜浜１－１－２スーパービバホーム新習志野店２Ｆゲームコーナー","grid":[35.676842,140.000565],"machineNum":1,"prefId":12},{"name":"ヤマダ電機ＬＡＢＩ津田沼","address":"千葉県習志野市谷津　１－１６－１　モリシア津田沼　３Ｆ","grid":[35.689509,140.01909],"machineNum":1,"prefId":12},{"name":"イトーヨーカドー津田沼","address":"千葉県習志野市津田沼１－１０－３０玩具売場","grid":[35.689825,140.02379],"machineNum":1,"prefId":12},{"name":"ホビーステーション津田沼","address":"千葉県習志野市津田沼１－２－２２小倉ビル３Ｆ","grid":[35.690777,140.021853],"machineNum":1,"prefId":12},{"name":"ゲームランド津田沼","address":"千葉県習志野市津田沼１－２３－１イオンモール内","grid":[35.690303,140.025027],"machineNum":1,"prefId":12},{"name":"イオンキッズ津田沼","address":"千葉県習志野市津田沼１－２３－１玩具売場","grid":[35.690746,140.023454],"machineNum":1,"prefId":12},{"name":"モーリーファンタジー津田沼","address":"千葉県習志野市津田沼１丁目２３番１号イオン３Ｆ","grid":[35.690303,140.025027],"machineNum":1,"prefId":12},{"name":"モーリーファンタジー東習志野","address":"千葉県習志野市東習志野６丁目７－８イオンタウン１Ｆ","grid":[35.699754,140.066811],"machineNum":1,"prefId":12},{"name":"モーリーファンタジー五香","address":"千葉県松戸市五香８－４４－６オウル五香１Ｆ","grid":[35.79657,139.981401],"machineNum":1,"prefId":12},{"name":"イトーヨーカドー松戸","address":"千葉県松戸市松戸１１４９玩具売場","grid":[35.783792,139.902381],"machineNum":1,"prefId":12},{"name":"ザ・プライス五香","address":"千葉県松戸市常盤平５－２２－３玩具売場","grid":[35.796029,139.961931],"machineNum":1,"prefId":12},{"name":"モーリーファンタジー新松戸","address":"千葉県松戸市新松戸３－２－２","grid":[35.825107,139.9156],"machineNum":1,"prefId":12},{"name":"タイトーＦステーションダイエー新松戸","address":"千葉県松戸市新松戸3-2-21","grid":[35.824948,139.916385],"machineNum":1,"prefId":12},{"name":"トイザらス松戸","address":"千葉県松戸市二ツ木１７８１－２　プチモール二ツ木２Ｆ","grid":[35.817301,139.925939],"machineNum":1,"prefId":12},{"name":"セガ松戸","address":"千葉県松戸市日暮1-1-1 八柱駅第2ビル2階","grid":[35.791344,139.937771],"machineNum":1,"prefId":12},{"name":"イトーヨーカドー八柱","address":"千葉県松戸市日暮１－１５－８玩具売場","grid":[35.791117,139.939834],"machineNum":1,"prefId":12},{"name":"プラサカプコン成田","address":"千葉県成田市ウイング土屋２４イオンモール成田２Ｆ","grid":[35.795296,140.319227],"machineNum":1,"prefId":12},{"name":"イオン成田","address":"千葉県成田市ウイング土屋２４番地　イオン２Ｆ玩具売場","grid":[35.795296,140.319227],"machineNum":1,"prefId":12},{"name":"モーリーファンタジー成田","address":"千葉県成田市ウイング土屋２４番地イオン２Ｆ","grid":[35.795296,140.319227],"machineNum":1,"prefId":12},{"name":"イトーヨーカドー成田","address":"千葉県成田市公津の杜４－５－３玩具売場","grid":[35.759672,140.296563],"machineNum":1,"prefId":12},{"name":"テクモピア公津の杜店","address":"千葉県成田市公津の杜４－５－３成田ユアエルム３Ｆ","grid":[35.759672,140.296563],"machineNum":1,"prefId":12},{"name":"キッズパークボンベルタ成田","address":"千葉県成田市赤坂２－１－１０ボンベルタ成田３Ｆ","grid":[35.778505,140.290607],"machineNum":1,"prefId":12},{"name":"Ｆｏｒｋｉｄｓ’ｂｙこぐまボンベルタ成田","address":"千葉県成田市赤坂２ー１ー１０ボンベルタ成田３ＦＦｏｒｋｉｄｓ'byこぐま成田店","grid":[35.77819,140.290613],"machineNum":1,"prefId":12},{"name":"ＮＩＣＯＰＡ成田富里","address":"千葉県成田市東町133番地　イオンタウン成田富里店２Ｆ","grid":[35.777942,140.322764],"machineNum":1,"prefId":12},{"name":"ミスターマックスおゆみの","address":"千葉県千葉市おゆみ野中央２－３－１","grid":[35.554322,140.159209],"machineNum":1,"prefId":12},{"name":"アミュージアム稲毛","address":"千葉県千葉市稲毛区小仲台１－４－２０イオン稲毛２Ｆ","grid":[35.636601,140.094985],"machineNum":1,"prefId":12},{"name":"イオン稲毛","address":"千葉県千葉市稲毛区小仲台１－４－２０玩具売場","grid":[35.636675,140.094918],"machineNum":1,"prefId":12},{"name":"パレパレ稲毛長沼","address":"千葉県千葉市稲毛区長沼原町７３１－１７","grid":[35.656415,140.128605],"machineNum":1,"prefId":12},{"name":"モーリーファンタジー千葉長沼","address":"千葉県千葉市稲毛区長沼町３３０－５０ダイエー千葉長沼店１Ｆ","grid":[35.657013,140.117457],"machineNum":1,"prefId":12},{"name":"イトーヨーカドー幕張","address":"千葉県千葉市花見川区幕張町４－４１７－２５玩具売場","grid":[35.656276,140.051118],"machineNum":1,"prefId":12},{"name":"ソユープレイランドソピア幕張店","address":"千葉県千葉市花見川区幕張町四丁目４１７－２５　イトーヨーカドー幕張店２Ｆ","grid":[35.656276,140.051118],"machineNum":1,"prefId":12},{"name":"サンファンタジー千城台","address":"千葉県千葉市若葉区千城台北３－２１－１　ラパーク千城台３Ｆ","grid":[35.622897,140.189101],"machineNum":1,"prefId":12},{"name":"そごう千葉","address":"千葉県千葉市中央区新町１０００そごう　千葉店　本館　６Ｆ玩具売場","grid":[35.611104,140.113924],"machineNum":1,"prefId":12},{"name":"ＳＥＧＡＡＲＥＮＡＳＯＧＡ","address":"千葉県千葉市中央区川崎町５１－１　ハーバーシティ蘇我フェスティバルウォークアミューズメント棟１Ｆ","grid":[35.592628,140.117906],"machineNum":1,"prefId":12},{"name":"タイトーステーションアリオ蘇我","address":"千葉県千葉市中央区川崎町５２－７アリオ蘇我２Ｆ","grid":[35.589425,140.121939],"machineNum":1,"prefId":12},{"name":"イトーヨーカドーアリオ蘇我","address":"千葉県千葉市中央区川崎町５２－７玩具売場","grid":[35.589425,140.121939],"machineNum":1,"prefId":12},{"name":"ヨドバシカメラマルチメディア千葉","address":"千葉県千葉市中央区富士見２－３－１","grid":[35.611646,140.116511],"machineNum":1,"prefId":12},{"name":"プレビ　イオン幕張","address":"千葉県千葉市美浜区ひび野１－３　イオン幕張店内２階　プレビプレイランドコーナー","grid":[35.651882,140.045522],"machineNum":1,"prefId":12},{"name":"プレビイオン幕張","address":"千葉県千葉市美浜区ひび野１－３イオン幕張店内２階プレビプレイランドコーナー","grid":[35.651882,140.045522],"machineNum":1,"prefId":12},{"name":"イオン幕張","address":"千葉県千葉市美浜区ひび野１－３玩具売場","grid":[35.651815,140.045416],"machineNum":1,"prefId":12},{"name":"セガ幕張","address":"千葉県千葉市美浜区ひび野１－８　メッセ・アミューズ・モール１階","grid":[35.649753,140.042351],"machineNum":1,"prefId":12},{"name":"ニコパマリンピア店","address":"千葉県千葉市美浜区高洲３－１３－１　　マリンピア４階","grid":[35.627375,140.072126],"machineNum":1,"prefId":12},{"name":"プレビミスターマックス千葉美浜","address":"千葉県千葉市美浜区新港３２番１１号ミスターマックス千葉美浜店内","grid":[35.618039,140.090273],"machineNum":1,"prefId":12},{"name":"モーリーファンタジー幕張新都心","address":"千葉県千葉市美浜区豊砂１－５イオンモール（ファミリーモール）２Ｆ","grid":[35.655124,140.027812],"machineNum":1,"prefId":12},{"name":"ゲームファンタジア美浜","address":"千葉県千葉市美浜新港３２－６－１（１号棟-２）","grid":[35.620198,140.087454],"machineNum":1,"prefId":12},{"name":"モーリーファンタジーあすみが丘","address":"千葉県千葉市緑区あすみが丘７丁目１あすみが丘ブランニューモール２Ｆ","grid":[35.520591,140.267829],"machineNum":1,"prefId":12},{"name":"イオン鎌取","address":"千葉県千葉市緑区おゆみ野３－１６－１玩具売場","grid":[35.561405,140.177504],"machineNum":1,"prefId":12},{"name":"モーリーファンタジー鎌取","address":"千葉県千葉市緑区おゆみ野３丁目１６番地イオン４Ｆ","grid":[35.561292,140.177466],"machineNum":1,"prefId":12},{"name":"モーリーファンタジーおゆみ野","address":"千葉県千葉市緑区おゆみ野南５丁目３７－１イオンタウン２Ｆ","grid":[35.544076,140.172912],"machineNum":1,"prefId":12},{"name":"ベイシアちば古市場","address":"千葉県千葉市緑区古市場９０６－２９","grid":[35.540562,140.154541],"machineNum":1,"prefId":12},{"name":"イオン船橋","address":"千葉県船橋市山手１－１－８玩具売場","grid":[35.712585,139.978117],"machineNum":1,"prefId":12},{"name":"モーリーファンタジー船橋","address":"千葉県船橋市山手１丁目１番地８号イオン３Ｆ","grid":[35.712585,139.978117],"machineNum":1,"prefId":12},{"name":"セガららぽーとＴＯＫＹＯ－ＢＡＹ","address":"千葉県船橋市浜町2-1-1　北館1階　E122区画","grid":[35.686147,139.990219],"machineNum":1,"prefId":12},{"name":"テクモピア船橋","address":"千葉県船橋市浜町２－２－７ビビット南船橋４階","grid":[35.687389,139.993186],"machineNum":1,"prefId":12},{"name":"マリンガーデンららぽーと船橋","address":"千葉県船橋市浜町２丁目１番１号　ららぽーとＴＯＫＹＯ－ＢＡＹ　西館３階","grid":[35.686215,139.990387],"machineNum":1,"prefId":12},{"name":"タイトーステーション船橋","address":"千葉県船橋市本町1丁目6-1","grid":[35.699881,139.986003],"machineNum":1,"prefId":12},{"name":"イトーヨーカドー船橋","address":"千葉県船橋市本町７－６－１玩具売場","grid":[35.703253,139.985046],"machineNum":1,"prefId":12},{"name":"カインズホーム八日市場","address":"千葉県匝瑳市八日市場口字横田１１８","grid":[35.701822,140.556081],"machineNum":1,"prefId":12},{"name":"モーリーファンタジー長浦","address":"千葉県袖ヶ浦市長浦駅前１－７","grid":[35.450294,139.997486],"machineNum":1,"prefId":12},{"name":"カインズホーム銚子","address":"千葉県銚子市芦崎町８１０","grid":[35.755524,140.774628],"machineNum":1,"prefId":12},{"name":"イオン銚子","address":"千葉県銚子市三崎町２－２６６０－１玩具売場","grid":[35.710263,140.788016],"machineNum":1,"prefId":12},{"name":"セガイオンモール銚子","address":"千葉県銚子市三崎町２丁目２６６０－１　イオンモール銚子　２Ｆ","grid":[35.710263,140.788016],"machineNum":1,"prefId":12},{"name":"モーリーファンタジー銚子","address":"千葉県銚子市三崎町２丁目２６６０－１イオン２Ｆ","grid":[35.710263,140.788016],"machineNum":1,"prefId":12},{"name":"パラボランド東金","address":"千葉県東金市東岩崎８－１０サンピア３Ｆ","grid":[35.558607,140.364785],"machineNum":1,"prefId":12},{"name":"宝島ららぽーと柏の葉","address":"千葉県柏市若柴１７５","grid":[35.893389,139.951109],"machineNum":1,"prefId":12},{"name":"タイトーFステーション柏中央","address":"千葉県柏市十余ニ249-5　MEM内","grid":[35.882205,139.959199],"machineNum":1,"prefId":12},{"name":"タイトーＦステーションキッズパークモラ―ジュ柏","address":"千葉県柏市大山台２－３－１モラ―ジュ柏２階","grid":[35.882378,139.969293],"machineNum":1,"prefId":12},{"name":"タイトーステーションセブンパークアリオ柏","address":"千葉県柏市大島田９５０－１","grid":[35.833492,140.01283],"machineNum":1,"prefId":12},{"name":"タイトーステーション柏","address":"千葉県柏市柏２－３－１","grid":[35.861517,139.972686],"machineNum":1,"prefId":12},{"name":"ビックカメラ柏店","address":"千葉県柏市柏市１－１－２０スカイプラザ柏玩具売り場","grid":[35.862313,139.972181],"machineNum":1,"prefId":12},{"name":"モーリーファンタジー柏","address":"千葉県柏市豊町２丁目５番２５号イオン２Ｆ","grid":[35.851876,139.961929],"machineNum":1,"prefId":12},{"name":"モーリーファンタジー八街","address":"千葉県八街市文違３０１イオン１Ｆ","grid":[35.681265,140.314189],"machineNum":1,"prefId":12},{"name":"キャッツアイ八千代","address":"千葉県八千代市吉橋１８５１番地　ｉｓｍ緑が丘内","grid":[35.733528,140.072505],"machineNum":1,"prefId":12},{"name":"イトーヨーカドー八千代","address":"千葉県八千代市村上４００１－４玩具売場","grid":[35.721334,140.117305],"machineNum":1,"prefId":12},{"name":"イオン八千代緑ヶ丘","address":"千葉県八千代市緑が丘２－１－３玩具売場","grid":[35.727639,140.073772],"machineNum":1,"prefId":12},{"name":"モーリーファンタジー八千代緑が丘","address":"千葉県八千代市緑が丘２丁目１－３イオン４Ｆ","grid":[35.727888,140.073051],"machineNum":1,"prefId":12},{"name":"プラサカプコン富津","address":"千葉県富津市青木一丁目５番地１　イオンモール富津２Ｆ","grid":[35.322801,139.842131],"machineNum":1,"prefId":12},{"name":"タイトーステーション　茂原アスモ店","address":"千葉県茂原市高師１７３５　　茂原ショッピングプラザ　アスモ２Ｆ","grid":[35.434567,140.288054],"machineNum":1,"prefId":12},{"name":"ＧＡＭＥＳＱＵＡＲＥ茂原","address":"千葉県茂原市六ツ野八貫野２７８５－１　ライフガーデン茂原","grid":[35.431054,140.310015],"machineNum":1,"prefId":12},{"name":"アピタ木更津","address":"千葉県木更津市ほたるの４－２－４８　玩具売場","grid":[35.375771,139.96274],"machineNum":1,"prefId":12},{"name":"ハローズガーデン木更津","address":"千葉県木更津市ほたる野４－２－４８アピタ木更津店２Ｆ","grid":[35.375674,139.962694],"machineNum":1,"prefId":12},{"name":"モーリーファンタジー木更津","address":"千葉県木更津市築地１－４　イオン２Ｆ","grid":[35.366989,139.907992],"machineNum":1,"prefId":12},{"name":"ＳＯＹＵ　ＧａｍｅＦｉｅｌｄ木更津店","address":"千葉県木更津市築地１番４イオンモール木更津２Ｆ","grid":[35.366989,139.907992],"machineNum":1,"prefId":12},{"name":"レジャーランド野田","address":"千葉県野田市吉春776-1","grid":[35.971513,139.865294],"machineNum":1,"prefId":12},{"name":"ＹＡＺワールド野田七光台","address":"千葉県野田市七光台４－２","grid":[35.982669,139.851133],"machineNum":1,"prefId":12},{"name":"モーリーファンタジーノア","address":"千葉県野田市中根３６－１イオン１Ｆ","grid":[35.947651,139.875815],"machineNum":1,"prefId":12},{"name":"野田ホビー　ノア店","address":"千葉県野田市中根３６ショッピングセンターノア３Ｆ","grid":[35.946784,139.876698],"machineNum":1,"prefId":12},{"name":"Ｆｏｒｋｉｄｓ’+ｂｂｙこぐま流山おおたかの森ＳＣ","address":"千葉県流山市西初石６－１８５－２流山おおたかの森ＳＣ３Ｆ","grid":[35.870579,139.926071],"machineNum":1,"prefId":12},{"name":"イトーヨーカドー流山","address":"千葉県流山市流山９－８００－２玩具売場","grid":[35.850102,139.8997],"machineNum":1,"prefId":12},{"name":"ハロータイトー流山","address":"千葉県流山市流山市９丁目８００２号イトーヨーカドー流山店３Ｆ","grid":[35.850192,139.899285],"machineNum":1,"prefId":12},{"name":"ハローズガーデンあきる野東急","address":"東京都あきる野市秋川１－１７－１あきる野東急４F","grid":[35.730736,139.287337],"machineNum":1,"prefId":13},{"name":"テックランド稲城若葉台","address":"東京都稲城市若葉台２－８","grid":[35.623849,139.471824],"machineNum":1,"prefId":13},{"name":"イトーヨーカドーアリオ亀有","address":"東京都葛飾区亀有３－４９－３玩具売場","grid":[35.763972,139.853087],"machineNum":1,"prefId":13},{"name":"イトーヨーカドー高砂","address":"東京都葛飾区高砂３－１２－５玩具売場","grid":[35.75079,139.868122],"machineNum":1,"prefId":13},{"name":"イトーヨーカドー四つ木","address":"東京都葛飾区四つ木２－２１－１玩具売場","grid":[35.737197,139.83859],"machineNum":1,"prefId":13},{"name":"○×△□（ラくトス）","address":"東京都葛飾区新小岩１－４４－６","grid":[35.716094,139.858241],"machineNum":1,"prefId":13},{"name":"イトーヨーカドーセブンホームセンター金町","address":"東京都葛飾区東金町１－１０－８","grid":[35.770227,139.867507],"machineNum":1,"prefId":13},{"name":"ライフ篠崎","address":"東京都江戸川区篠崎町７－２７－１玩具売場","grid":[35.706026,139.903766],"machineNum":1,"prefId":13},{"name":"ドン･キホーテラパーク瑞江","address":"東京都江戸川区瑞江２－１－２","grid":[35.692742,139.896827],"machineNum":1,"prefId":13},{"name":"宝島瑞江","address":"東京都江戸川区瑞江２－１－２ドン・キホーテ瑞江４Ｆ","grid":[35.692742,139.896827],"machineNum":1,"prefId":13},{"name":"モーリーファンタジー葛西","address":"東京都江戸川区西葛西３－９－１９イオン３Ｆ","grid":[35.669272,139.858521],"machineNum":1,"prefId":13},{"name":"キャッツアイ西葛西","address":"東京都江戸川区西葛西４－２－２８サニーモール西葛西店３Ｆ","grid":[35.668264,139.861764],"machineNum":1,"prefId":13},{"name":"イトーヨーカドー小岩","address":"東京都江戸川区西小岩１－２４－１玩具売場","grid":[35.733637,139.88151],"machineNum":1,"prefId":13},{"name":"ダイエー船堀","address":"東京都江戸川区船堀１－１－５１","grid":[35.684747,139.862294],"machineNum":1,"prefId":13},{"name":"セガワールド船堀","address":"東京都江戸川区船堀１－６－１１","grid":[35.684881,139.863931],"machineNum":1,"prefId":13},{"name":"セガワールド葛西","address":"東京都江戸川区東葛西９－３－３　イトーヨーカドー３Ｆ","grid":[35.652536,139.881808],"machineNum":1,"prefId":13},{"name":"イトーヨーカドー葛西","address":"東京都江戸川区東葛西９－３－３玩具売場","grid":[35.652536,139.881808],"machineNum":1,"prefId":13},{"name":"こころっこ葛西店","address":"東京都江戸川区東葛西９－３－６　ホームズ葛西店内１Ｆ　プレビプレイランドコーナー　こころっこ","grid":[35.653854,139.882791],"machineNum":1,"prefId":13},{"name":"アドアーズ南砂町ＳＵＮＡＭＯ","address":"東京都江東区新砂３－４－３１南砂町ショッピングセンターＳＵＮＡＭＯ４階","grid":[35.665045,139.835112],"machineNum":1,"prefId":13},{"name":"キデイランドウ゛ィーナスフォート","address":"東京都江東区青海１丁目３番１５号　ヴィーナスフォート２Ｆ","grid":[35.62557,139.781042],"machineNum":1,"prefId":13},{"name":"モーリーファンタジー大島","address":"東京都江東区大島４－６－１　　　　　　　　　　ダイエー大島店４Ｆ","grid":[35.688924,139.828976],"machineNum":1,"prefId":13},{"name":"スコナランド大島","address":"東京都江東区大島４－６－１ダイエー大島４Ｆ","grid":[35.688871,139.828961],"machineNum":1,"prefId":13},{"name":"イオン東雲","address":"東京都江東区東雲１－９－１０玩具売場","grid":[35.648562,139.802152],"machineNum":1,"prefId":13},{"name":"モーリーファンタジー南砂","address":"東京都江東区南砂６－７－１５イオン３Ｆ","grid":[35.671598,139.835639],"machineNum":1,"prefId":13},{"name":"アミュージアム豊洲","address":"東京都江東区豊洲２－４－９アーバンドックららぽーと豊洲３Ｆ","grid":[35.655531,139.79234],"machineNum":1,"prefId":13},{"name":"ハローズガーデン北砂","address":"東京都江東区北砂2-17-1アリオ北砂店アリオモール3階","grid":[35.682223,139.825726],"machineNum":1,"prefId":13},{"name":"イトーヨーカドーアリオ北砂","address":"東京都江東区北砂２－１７玩具売場","grid":[35.684226,139.825857],"machineNum":1,"prefId":13},{"name":"イトーヨーカドー木場","address":"東京都江東区木場１－５－３０玩具売場","grid":[35.66618,139.804265],"machineNum":1,"prefId":13},{"name":"ビックカメラ赤坂見附駅","address":"東京都港区赤坂３－１－６","grid":[35.677038,139.736768],"machineNum":1,"prefId":13},{"name":"トイザらスお台場","address":"東京都港区台場１－７－１　アクアシティお台場１Ｆ","grid":[35.627948,139.773834],"machineNum":1,"prefId":13},{"name":"東京レジャーランドお台場","address":"東京都港区台場１－７－１アクアシティお台場４Ｆ４０９区","grid":[35.627742,139.773522],"machineNum":1,"prefId":13},{"name":"サンポップマチヤ","address":"東京都荒川区荒川７－５０－９","grid":[35.742439,139.780784],"machineNum":1,"prefId":13},{"name":"ハイテクランドセガシブヤ","address":"東京都渋谷区渋谷１－１４－１４ＥＳＴ　１階","grid":[35.65998,139.702681],"machineNum":1,"prefId":13},{"name":"ビックカメラ渋谷東口","address":"東京都渋谷区渋谷１－２４－１２　５Ｆ","grid":[35.659985,139.701951],"machineNum":1,"prefId":13},{"name":"タイトーステーション渋谷","address":"東京都渋谷区渋谷１－２４－１２渋谷東映プラザ","grid":[35.659985,139.701951],"machineNum":1,"prefId":13},{"name":"プリズムストーン  原宿店","address":"東京都渋谷区神宮前3-18-27　1F","grid":[35.670328,139.708875],"machineNum":1,"prefId":13},{"name":"東急本店","address":"東京都渋谷区道玄坂2-24-1東急百貨店　本店　6F玩具売場","grid":[35.660885,139.695518],"machineNum":1,"prefId":13},{"name":"ヤマダ電機ＬＡＢＩ渋谷","address":"東京都渋谷区道玄坂２－２９－２０","grid":[35.659781,139.698099],"machineNum":1,"prefId":13},{"name":"ハローズガーデン武蔵小金井","address":"東京都小金井市本町６－１４－９イトーヨーカドー武蔵小金井店４Ｆ","grid":[35.700495,139.504785],"machineNum":1,"prefId":13},{"name":"イトーヨーカドー武蔵小金井","address":"東京都小金井市本町６－１４－９玩具売場","grid":[35.700495,139.504785],"machineNum":1,"prefId":13},{"name":"モーリーファンタジー小平","address":"東京都小平市小川東町２－１２－１","grid":[35.743227,139.467704],"machineNum":1,"prefId":13},{"name":"イトーヨーカドー拝島","address":"東京都昭島市松原町３－２－１２玩具売場","grid":[35.715595,139.347929],"machineNum":1,"prefId":13},{"name":"イトーヨーカドー昭島","address":"東京都昭島市田中町５６２－１玩具売場","grid":[35.714106,139.362165],"machineNum":1,"prefId":13},{"name":"アミュージアムモリタウン昭島","address":"東京都昭島市田中町５７３－１－２","grid":[35.715252,139.362195],"machineNum":1,"prefId":13},{"name":"トイザらス昭島","address":"東京都昭島市田中町５７３－１－４　モリタウン内","grid":[35.714999,139.363211],"machineNum":1,"prefId":13},{"name":"タイトーステーション新宿南口ゲームワールド店","address":"東京都新宿区新宿３－３５－８","grid":[35.689855,139.702264],"machineNum":1,"prefId":13},{"name":"タイトーステーションBIGBOX高田馬場","address":"東京都新宿区高田馬場1-35-3","grid":[35.712595,139.704288],"machineNum":1,"prefId":13},{"name":"タイトーステーション新宿東口","address":"東京都新宿区新宿3-22-7","grid":[35.693238,139.701465],"machineNum":1,"prefId":13},{"name":"ヤマダ電機ＬＡＢＩ新宿東口館","address":"東京都新宿区新宿３－２３－７","grid":[35.693287,139.700757],"machineNum":1,"prefId":13},{"name":"ヨドバシカメラマルチメディア新宿東口","address":"東京都新宿区新宿３－２６－７玩具売場","grid":[35.691689,139.701823],"machineNum":1,"prefId":13},{"name":"ビックカメラビックロ新宿東口店","address":"東京都新宿区新宿３－２９－１","grid":[35.69138,139.702996],"machineNum":1,"prefId":13},{"name":"タワーレコード新宿","address":"東京都新宿区新宿３－３７－１フラッグス７Ｆ－１０Ｆ","grid":[35.68991,139.701514],"machineNum":1,"prefId":13},{"name":"ヨドバシカメラ新宿西口本店","address":"東京都新宿区西新宿１－１１－１ゲームホビー館　玩具売場","grid":[35.689696,139.697367],"machineNum":1,"prefId":13},{"name":"ＣＬＵＢＳＥＧＡ新宿西口","address":"東京都新宿区西新宿１－１２－５","grid":[35.689552,139.697378],"machineNum":1,"prefId":13},{"name":"小田急百貨店新宿","address":"東京都新宿区西新宿１－１－３　９Ｆ　玩具売場","grid":[35.691654,139.699632],"machineNum":1,"prefId":13},{"name":"京王百貨店新宿","address":"東京都新宿区西新宿１－１－４京王百貨店　新宿店　７Ｆ玩具売場","grid":[35.690055,139.699154],"machineNum":1,"prefId":13},{"name":"ヤマダ電機ＬＡＢＩ新宿西口館","address":"東京都新宿区西新宿１－１８－８","grid":[35.688559,139.697959],"machineNum":1,"prefId":13},{"name":"ビックカメラ新宿西口店","address":"東京都新宿区西新宿１－５－１　ハルク５Ｆ　トイズコーナー","grid":[35.69248,139.698665],"machineNum":1,"prefId":13},{"name":"西友阿佐ヶ谷","address":"東京都杉並区阿佐谷北１－５－６　玩具売場","grid":[35.705623,139.636882],"machineNum":1,"prefId":13},{"name":"西友荻窪","address":"東京都杉並区上萩１－９－１タウンセブン　玩具売場","grid":[35.705075,139.619559],"machineNum":1,"prefId":13},{"name":"タイトーステーション祖師ヶ谷大蔵店","address":"東京都世田谷区砧８－１０番１号","grid":[35.642483,139.608325],"machineNum":1,"prefId":13},{"name":"キデイランド二子玉川","address":"東京都世田谷区玉川２－２１－１　二子玉川ライズ・ショッピングセンター・タ　ウンフロント６Ｆ","grid":[35.61226,139.6285],"machineNum":1,"prefId":13},{"name":"ライフ経堂","address":"東京都世田谷区経堂５－３２－６　玩具売場","grid":[35.648219,139.632247],"machineNum":1,"prefId":13},{"name":"テックランド東京本店","address":"東京都世田谷区上北沢５－３７－１８","grid":[35.673672,139.614076],"machineNum":1,"prefId":13},{"name":"西友深沢","address":"東京都世田谷区深沢１－８－１玩具売場","grid":[35.614036,139.660827],"machineNum":1,"prefId":13},{"name":"西友三軒茶屋","address":"東京都世田谷区太子堂４－２４－８　玩具売場","grid":[35.644584,139.670249],"machineNum":1,"prefId":13},{"name":"西友清瀬","address":"東京都清瀬市元町１－４－５　玩具売場","grid":[35.773174,139.520642],"machineNum":1,"prefId":13},{"name":"ＪＯＹＦＵＬ－２瑞穂","address":"東京都西多摩郡瑞穂町殿ケ谷４４２ＪＯＹＦＵＬ－２玩具売場","grid":[35.759821,139.356431],"machineNum":1,"prefId":13},{"name":"ドラマ瑞穂","address":"東京都西多摩郡瑞穂町武蔵３８２－１","grid":[35.763362,139.356868],"machineNum":1,"prefId":13},{"name":"ユーズランド日の出店","address":"東京都西多摩郡日の出町大字平井字三吉野桜木２３７－３イオンモール日の出３Ｆ","grid":[35.734714,139.273949],"machineNum":1,"prefId":13},{"name":"モーリーファンタジー日の出","address":"東京都西多摩郡日の出町大字平井字三吉野桜木５５７番地イオン３Ｆ","grid":[35.74585,139.268936],"machineNum":1,"prefId":13},{"name":"西友ＬＩＶＩＮ田無","address":"東京都西東京市田無町２－１－１　玩具売場","grid":[35.72851,139.540321],"machineNum":1,"prefId":13},{"name":"西友河辺","address":"東京都青梅市河辺町１０－９－１　玩具売場","grid":[35.786033,139.284783],"machineNum":1,"prefId":13},{"name":"Ｈｅｙ","address":"東京都千代田区外神田１－１０－５広瀬本社ビル２Ｆ","grid":[35.699024,139.771062],"machineNum":1,"prefId":13},{"name":"イエローサブマリン秋葉原本店★ミント","address":"東京都千代田区外神田1-15-16ラジオ会館6F","grid":[35.697906,139.771913],"machineNum":1,"prefId":13},{"name":"レジャーランド秋葉原１号","address":"東京都千代田区外神田１丁目９番５号","grid":[35.698821,139.770153],"machineNum":1,"prefId":13},{"name":"レジャーランド秋葉原２号","address":"東京都千代田区外神田４－３－３ ミナミビル６Ｆ・７Ｆ","grid":[35.700716,139.77205],"machineNum":1,"prefId":13},{"name":"ＣＬＵＢＳＥＧＡ秋葉原新館","address":"東京都千代田区外神田一丁目１１番１１号外神田１丁目ビルディング","grid":[35.699205,139.770892],"machineNum":1,"prefId":13},{"name":"プリズムストーン  東京駅店","address":"東京都千代田区丸の内1-9-1 東京駅一番街 B1F 東京ｷｬﾗｸﾀｰｽﾄﾘｰﾄ内","grid":[35.681547,139.768856],"machineNum":1,"prefId":13},{"name":"ヨドバシカメラマルチメディアＡｋｉｂａ","address":"東京都千代田区神田花岡町１－１　玩具売場","grid":[35.698713,139.774761],"machineNum":1,"prefId":13},{"name":"ビックカメラ有楽町本館","address":"東京都千代田区有楽町１－１１－１　３Ｆ玩具売場","grid":[35.675583,139.762929],"machineNum":1,"prefId":13},{"name":"イトーヨーカドー綾瀬","address":"東京都足立区綾瀬３－４－２５玩具売場","grid":[35.762709,139.82537],"machineNum":1,"prefId":13},{"name":"イトーヨーカドーアリオ西新井","address":"東京都足立区西新井栄町１丁目２０番１号玩具売場","grid":[35.774708,139.785676],"machineNum":1,"prefId":13},{"name":"西友青井","address":"東京都足立区青井３－１－１","grid":[35.77008,139.817231],"machineNum":1,"prefId":13},{"name":"ゲオ鹿浜","address":"東京都足立区谷在家２丁目１１番２号","grid":[35.783423,139.76612],"machineNum":1,"prefId":13},{"name":"イトーヨーカドー竹の塚","address":"東京都足立区竹の塚５－１７－１玩具売場","grid":[35.795424,139.795326],"machineNum":1,"prefId":13},{"name":"セガ竹の塚","address":"東京都足立区竹の塚６－８","grid":[35.794817,139.792529],"machineNum":1,"prefId":13},{"name":"テックランド足立","address":"東京都足立区平野２－１－５","grid":[35.782376,139.80345],"machineNum":1,"prefId":13},{"name":"キッズトレイン成績桜ヶ丘","address":"東京都多摩市関戸１－１０－１　京王聖蹟桜ヶ丘ショッピングセンターA館８F","grid":[35.651355,139.447202],"machineNum":1,"prefId":13},{"name":"ＰＡＬＯ聖蹟桜ヶ丘","address":"東京都多摩市関戸4-72","grid":[35.649634,139.447073],"machineNum":1,"prefId":13},{"name":"トイザらス多摩","address":"東京都多摩市東寺方６６０－１","grid":[35.641016,139.436068],"machineNum":1,"prefId":13},{"name":"ＴＨＥ３ＲＤＰＬＡＮＥＴ多摩センター","address":"東京都多摩市落合１－４１－１マグレブビルＷＥＳＴ１Ｆ・２Ｆ","grid":[35.624039,139.423428],"machineNum":1,"prefId":13},{"name":"イトーヨーカドー多摩センター","address":"東京都多摩市落合１－４４玩具売場","grid":[35.623619,139.425732],"machineNum":1,"prefId":13},{"name":"タイトーステーション多摩センター店","address":"東京都多摩市落合１－４５－１","grid":[35.623164,139.426274],"machineNum":1,"prefId":13},{"name":"ヨドバシカメラマルチメディア上野","address":"東京都台東区上野４－１０－１０　玩具売場","grid":[35.711101,139.774433],"machineNum":1,"prefId":13},{"name":"タイトーステーション浅草","address":"東京都台東区浅草１－２７－５ＲＯＸＤＯＭＥ１Ｆ","grid":[35.712592,139.793932],"machineNum":1,"prefId":13},{"name":"シルクハット蒲田Ｍ２","address":"東京都大田区西蒲田７丁目２－３第二醍醐ビル地下１Ｆ・２Ｆ","grid":[35.563057,139.71591],"machineNum":1,"prefId":13},{"name":"シルクハット蒲田西口","address":"東京都大田区西蒲田７丁目２－３第二醍醐ビル地下１Ｆ・２Ｆ","grid":[35.563057,139.71591],"machineNum":1,"prefId":13},{"name":"イトーヨーカドー大森","address":"東京都大田区大森北二－１３－１玩具売場","grid":[35.586496,139.732997],"machineNum":1,"prefId":13},{"name":"ＳＯＹＵＺＡＵＲＵＳＷＯＲＬＤ大森","address":"東京都大田区大森北二丁目１３－１　イトーヨーカドー大森店３Ｆ","grid":[35.586299,139.732953],"machineNum":1,"prefId":13},{"name":"ハローズガーデン新糀谷","address":"東京都大田区萩中２－１２－５マルエツ新糀谷店２階","grid":[35.550955,139.732861],"machineNum":1,"prefId":13},{"name":"タイトーステーション BIGFUN平和島","address":"東京都大田区平和島１－１－１ＢＩＧＦUN平和島３F","grid":[35.585505,139.740295],"machineNum":1,"prefId":13},{"name":"ポップンパーク本羽田萩中","address":"東京都大田区本羽田萩中２丁目３－１","grid":[35.552553,139.731588],"machineNum":1,"prefId":13},{"name":"博品館ＴＯＹＰＡＲＫ","address":"東京都中央区銀座８－８－１１　３階玩具売場","grid":[35.667832,139.761034],"machineNum":1,"prefId":13},{"name":"アドアーズ中野","address":"東京都中野区中野５－５２－１５ブロードウェイ１８５","grid":[35.709236,139.665723],"machineNum":1,"prefId":13},{"name":"ライフ東中野","address":"東京都中野区東中野３－９－７","grid":[35.707758,139.682606],"machineNum":1,"prefId":13},{"name":"プレビままともプラザ","address":"東京都町田市旭町１丁目２４番１号ままともプラザ２Ｆ","grid":[35.554925,139.442568],"machineNum":1,"prefId":13},{"name":"ヨドバシカメラマルチメディア町田","address":"東京都町田市原町田１－１－１１　玩具売場","grid":[35.542208,139.444467],"machineNum":1,"prefId":13},{"name":"タイトーステーション町田","address":"東京都町田市原町田６－２１－２３","grid":[35.542744,139.448467],"machineNum":1,"prefId":13},{"name":"こころっこ町田根岸","address":"東京都町田市根岸２丁目１８番地１号　アメリア町田根岸店内２Ｆ","grid":[35.575916,139.410899],"machineNum":1,"prefId":13},{"name":"ミスターマックス町田多摩境","address":"東京都町田市小山ヶ丘６－１－１０","grid":[35.606144,139.349615],"machineNum":1,"prefId":13},{"name":"ＮＩＣＯＰＡクロスガーデン調布","address":"東京都調布市菊野台１－３３－３　クロスガーデン調布２階","grid":[35.657394,139.568041],"machineNum":1,"prefId":13},{"name":"アドベンチャーリーフ国領","address":"東京都調布市国領町8-2-64イトーヨーカドー国領店3階","grid":[35.646748,139.564],"machineNum":1,"prefId":13},{"name":"イトーヨーカドー国領","address":"東京都調布市国領町８－２－６４玩具売場","grid":[35.646748,139.564],"machineNum":1,"prefId":13},{"name":"西友調布","address":"東京都調布市小島町１－１０－１　玩具売場","grid":[35.653619,139.543939],"machineNum":1,"prefId":13},{"name":"ビックカメラ京王調布","address":"東京都調布市小島町２－４８－６トリエ京王調布Ｂ館３Ｆ玩具コーナー","grid":[35.652114,139.543202],"machineNum":1,"prefId":13},{"name":"イオン東久留米","address":"東京都東久留米市南沢５－１７玩具売場","grid":[35.744819,139.527881],"machineNum":1,"prefId":13},{"name":"モーリーファンタジー東久留米","address":"東京都東久留米市南沢５丁目１７イオン３Ｆ","grid":[35.7452,139.526676],"machineNum":1,"prefId":13},{"name":"イトーヨーカドー東久留米","address":"東京都東久留米市本町３－８－１玩具売場","grid":[35.75897,139.528823],"machineNum":1,"prefId":13},{"name":"イトーヨーカドー東村山","address":"東京都東村山市本町２－２－１９玩具売場","grid":[35.758759,139.466483],"machineNum":1,"prefId":13},{"name":"イトーヨーカドー東大和","address":"東京都東大和市桜が丘２－１４２－１玩具売場","grid":[35.735946,139.424358],"machineNum":1,"prefId":13},{"name":"セガワールド東大和","address":"東京都東大和市桜ヶ丘１－１３３０－１９ＢＩＧＢＯＸ東大和１Ｆ","grid":[35.733662,139.434047],"machineNum":1,"prefId":13},{"name":"ハローズガーデン東大和","address":"東京都東大和市桜ヶ丘2-142-1 イトーヨーカドー東大和店2F","grid":[35.735946,139.424358],"machineNum":1,"prefId":13},{"name":"西友豊田","address":"東京都日野市多摩平１－９－１玩具売場","grid":[35.660346,139.37952],"machineNum":1,"prefId":13},{"name":"モーリーファンタジー多摩平の森","address":"東京都日野市多摩平２丁目４番１イオンモール3階","grid":[35.662119,139.381024],"machineNum":1,"prefId":13},{"name":"ＮＩＣＯＰＡ＆ｎｉｃｏｇｒｏｕｎｄイーアス高尾","address":"東京都八王子市東浅川町５５０－１イーアス高尾２F","grid":[35.643195,139.288483],"machineNum":1,"prefId":13},{"name":"ＹＡＺ八王子","address":"東京都八王子市みなみ野１－２－１アクロスモール３Ｆ","grid":[35.630983,139.328961],"machineNum":1,"prefId":13},{"name":"キラキラAsobox八王子みなみ野","address":"東京都八王子市みなみ野１－８－１ＢＯＯＫＯＦＦ内","grid":[35.6314,139.327727],"machineNum":1,"prefId":13},{"name":"シルクハット八王子","address":"東京都八王子市旭町２－５八王子ツインタワービル３階","grid":[35.656433,139.338483],"machineNum":1,"prefId":13},{"name":"ソユープレイランドソピア八王子店","address":"東京都八王子市狭間町１４６２－１　イトーヨーカドー八王子店３Ｆ","grid":[35.637843,139.293528],"machineNum":1,"prefId":13},{"name":"イトーヨーカドー八王子","address":"東京都八王子市狭間町１４６２－１玩具売場","grid":[35.637664,139.293105],"machineNum":1,"prefId":13},{"name":"ドラマ八王子高倉","address":"東京都八王子市高倉町５５－４","grid":[35.665081,139.36649],"machineNum":1,"prefId":13},{"name":"ドン・キホーテ八王子駅前","address":"東京都八王子市中町１－３","grid":[35.658032,139.337276],"machineNum":1,"prefId":13},{"name":"ヨドバシカメラ八王子","address":"東京都八王子市東町７－４玩具売場","grid":[35.657966,139.339623],"machineNum":1,"prefId":13},{"name":"イトーヨーカドー南大沢","address":"東京都八王子市南大沢２－２８－１玩具売場","grid":[35.613166,139.379419],"machineNum":1,"prefId":13},{"name":"ソユープレイランドソピア南大沢","address":"東京都八王子市南大沢二丁目２８－１　イトーヨーカドー南大沢店３Ｆ","grid":[35.613202,139.379486],"machineNum":1,"prefId":13},{"name":"ビックカメラＪＲ八王子駅","address":"東京都八王子市八王子市旭町１－１７　トイズコーナー","grid":[35.654718,139.339003],"machineNum":1,"prefId":13},{"name":"プレビ　三和堀之内","address":"東京都八王子市別所２－１　三和堀之内店内２階プレビプレイランド","grid":[35.624369,139.40083],"machineNum":1,"prefId":13},{"name":"東京あそびマーレ","address":"東京都八王子市別所２－１ビア長池新館","grid":[35.6237,139.400443],"machineNum":1,"prefId":13},{"name":"ヤマダ電機テックランドＮｅｗ八王子別所","address":"東京都八王子市別所２－５６","grid":[35.611544,139.396313],"machineNum":1,"prefId":13},{"name":"イトーヨーカドー上板橋","address":"東京都板橋区常盤台４－２６－１玩具売場","grid":[35.764069,139.678086],"machineNum":1,"prefId":13},{"name":"ＰＡＬＯ成増","address":"東京都板橋区成増２－２１－２　　　　　　　　　ダイエー成増店４Ｆ","grid":[35.778126,139.63044],"machineNum":1,"prefId":13},{"name":"イオンリテールストア板橋前野町","address":"東京都板橋区前野町４－２１－２２","grid":[35.771099,139.691809],"machineNum":1,"prefId":13},{"name":"イオン板橋","address":"東京都板橋区徳丸２－６－１玩具売場","grid":[35.770191,139.660766],"machineNum":1,"prefId":13},{"name":"モーリーファンタジー板橋","address":"東京都板橋区徳丸２丁目６番地１　イオン３Ｆ","grid":[35.770191,139.660766],"machineNum":1,"prefId":13},{"name":"モーリーファンタジー西台","address":"東京都板橋区蓮根３－８－１２","grid":[35.786283,139.674611],"machineNum":1,"prefId":13},{"name":"イトーヨーカドー大井町","address":"東京都品川区大井１－３－６玩具売場","grid":[35.607208,139.733966],"machineNum":1,"prefId":13},{"name":"ヤマダ電機LABI品川大井町","address":"東京都品川区東大井５丁目２０－１ＡＶソフトコーナー","grid":[35.605672,139.73525],"machineNum":1,"prefId":13},{"name":"イオン品川シーサイド","address":"東京都品川区東品川４－１２－５玩具売場","grid":[35.610727,139.749026],"machineNum":1,"prefId":13},{"name":"モーリーファンタジー品川シーサイド","address":"東京都品川区東品川４丁目１２－５イオン２Ｆ","grid":[35.610727,139.749026],"machineNum":1,"prefId":13},{"name":"伊勢丹府中","address":"東京都府中市宮町１－４１－２　伊勢丹府中店７Ｆ","grid":[35.670795,139.479823],"machineNum":1,"prefId":13},{"name":"トイザらス府中駅前","address":"東京都府中市宮町１－５０　くるるＢ１Ｆ","grid":[35.671468,139.480935],"machineNum":1,"prefId":13},{"name":"セガワールド府中","address":"東京都府中市西原町１－６－２　フレスポ府中２Ｆ","grid":[35.682317,139.460345],"machineNum":1,"prefId":13},{"name":"ダイエー武蔵村山","address":"東京都武蔵村山市伊奈平３－３６－１　玩具売場","grid":[35.735703,139.3789],"machineNum":1,"prefId":13},{"name":"タイトーステーションダイエー武蔵村山","address":"東京都武蔵村山市伊奈平３－３６－１ダイエー武蔵村山店２階","grid":[35.735641,139.378802],"machineNum":1,"prefId":13},{"name":"セガイオンモールむさし村山","address":"東京都武蔵村山市榎１－１－３－２０５９","grid":[35.746384,139.384923],"machineNum":1,"prefId":13},{"name":"イオンむさし村山","address":"東京都武蔵村山市榎１－１－３玩具売場","grid":[35.746384,139.384923],"machineNum":1,"prefId":13},{"name":"モーリーファンタジーむさし村山","address":"東京都武蔵村山市榎１丁目１番３号イオン３Ｆ","grid":[35.746384,139.384923],"machineNum":1,"prefId":13},{"name":"キデイランド吉祥寺","address":"東京都武蔵野市吉祥寺本町１－１１－５　コピス吉祥寺Ａ館６階","grid":[35.70508,139.579673],"machineNum":1,"prefId":13},{"name":"ヨドバシカメラマルチメディア吉祥寺","address":"東京都武蔵野市吉祥寺本町１－１９－１　玩具売場","grid":[35.704752,139.581512],"machineNum":1,"prefId":13},{"name":"プラサカプコン吉祥寺","address":"東京都武蔵野市吉祥寺本町１丁目１０－１いなりやビル地下1階","grid":[35.705313,139.579067],"machineNum":1,"prefId":13},{"name":"イトーヨーカドー武蔵境","address":"東京都武蔵野市境南町２－２－２０玩具売場","grid":[35.70106,139.544773],"machineNum":1,"prefId":13},{"name":"西友福生","address":"東京都福生市東町５－１　玩具売場","grid":[35.743369,139.327989],"machineNum":1,"prefId":13},{"name":"セガ東京ドームシティ","address":"東京都文京区後楽1-3-61","grid":[35.705341,139.752111],"machineNum":1,"prefId":13},{"name":"タイトーステーション池袋西口","address":"東京都豊島区西池袋１－１５－９","grid":[35.730522,139.709724],"machineNum":1,"prefId":13},{"name":"ビックカメラ池袋西口店","address":"東京都豊島区西池袋１－１６－３","grid":[35.730832,139.708954],"machineNum":1,"prefId":13},{"name":"ドン・キホーテ北池袋","address":"東京都豊島区池袋本町２－７－５","grid":[35.741185,139.707929],"machineNum":1,"prefId":13},{"name":"池袋ＧＩＧＯ","address":"東京都豊島区東池袋1-21-1","grid":[35.730172,139.715915],"machineNum":1,"prefId":13},{"name":"ＡＭサントロペ池袋","address":"東京都豊島区東池袋１－２９サントロペビル２階","grid":[35.730375,139.716428],"machineNum":1,"prefId":13},{"name":"AMサントロペ池袋","address":"東京都豊島区東池袋1-29サントロペビル2階","grid":[35.730375,139.716428],"machineNum":1,"prefId":13},{"name":"ヤマダ電機ＩＫＥＢＵＫＵＲＯアウトレット・リユースＴＡＸＦＲ","address":"東京都豊島区東池袋１－４１－１","grid":[35.731796,139.713347],"machineNum":1,"prefId":13},{"name":"ビックカメラ池袋本店","address":"東京都豊島区東池袋１－４１－５　５Ｆ","grid":[35.731693,139.712907],"machineNum":1,"prefId":13},{"name":"ヤマダ電機LABI1日本総本店池袋","address":"東京都豊島区東池袋1-5-7","grid":[35.730915,139.713679],"machineNum":1,"prefId":13},{"name":"ライフ落合南長崎駅前","address":"東京都豊島区南長崎４－５－２０","grid":[35.724274,139.682641],"machineNum":1,"prefId":13},{"name":"ライフ千川","address":"東京都豊島区要町３－４５－４　玩具売場","grid":[35.739607,139.688257],"machineNum":1,"prefId":13},{"name":"イオン赤羽北本通り","address":"東京都北区神谷３－１２－１　玩具売場","grid":[35.774401,139.731661],"machineNum":1,"prefId":13},{"name":"プレビダイエー赤羽","address":"東京都北区赤羽２－５－７ダイエー赤羽店内２Ｆプレビプレイランドコーナー","grid":[35.778865,139.725214],"machineNum":1,"prefId":13},{"name":"イトーヨーカドー赤羽","address":"東京都北区赤羽西１－７－１玩具売場","grid":[35.777185,139.719344],"machineNum":1,"prefId":13},{"name":"イトーヨーカドー曳舟","address":"東京都墨田区京島１－２－１","grid":[35.717456,139.817784],"machineNum":1,"prefId":13},{"name":"ヨドバシカメラマルチメディア錦糸町","address":"東京都墨田区江東橋３－１４－５錦糸町ステーションビル内玩具売り場","grid":[35.696447,139.813927],"machineNum":1,"prefId":13},{"name":"NICOPA　丸井錦糸町店","address":"東京都墨田区江東橋３－９－１０　丸井錦糸町店４F","grid":[35.69489,139.813705],"machineNum":1,"prefId":13},{"name":"タイトーステーション錦糸町楽天地","address":"東京都墨田区江東橋４－２７－１４楽天地ビル地下１階","grid":[35.696312,139.81566],"machineNum":1,"prefId":13},{"name":"タイトーＦステーションオリナス錦糸町","address":"東京都墨田区太平４－１－２オリナスモール地下１階","grid":[35.700644,139.815698],"machineNum":1,"prefId":13},{"name":"ハローズガーデン墨田文化","address":"東京都墨田区文花１－３１－９オリンピック墨田文花店１Ｆ","grid":[35.706948,139.82362],"machineNum":1,"prefId":13},{"name":"ＣＬＵＢＳＥＧＡ自由ヶ丘","address":"東京都目黒区自由ヶ丘２－１０－９","grid":[35.608287,139.66755],"machineNum":1,"prefId":13},{"name":"CLUBSEGA立川","address":"東京都立川市柴崎町3-2-1　サザンビル1F","grid":[35.697261,139.414696],"machineNum":1,"prefId":13},{"name":"ホビーステーション立川","address":"東京都立川市曙町２－１１－２フロム中武６Ｆ","grid":[35.69979,139.414914],"machineNum":1,"prefId":13},{"name":"ビックカメラ立川店","address":"東京都立川市曙町２－１２－２","grid":[35.699299,139.414854],"machineNum":1,"prefId":13},{"name":"ＭＥＧＡドン・キホーテ立川","address":"東京都立川市曙町２－１８－１８","grid":[35.700701,139.416084],"machineNum":1,"prefId":13},{"name":"ﾀｲﾄｰステーション立川北口","address":"東京都立川市曙町２－４－５クリサス立川","grid":[35.69919,139.412117],"machineNum":1,"prefId":13},{"name":"プリズムストーン 立川店","address":"東京都立川市緑町4-5壽屋ビル1階","grid":[35.703039,139.413121],"machineNum":1,"prefId":13},{"name":"イオン練馬","address":"東京都練馬区光が丘５－１－１　玩具売場","grid":[35.760323,139.628414],"machineNum":1,"prefId":13},{"name":"西友光が丘","address":"東京都練馬区光が丘5-1-1　玩具売場","grid":[35.760323,139.628414],"machineNum":1,"prefId":13},{"name":"キデイランド光が丘","address":"東京都練馬区光が丘５－１－１光が丘ＩＭＡ２Ｆ　玩具売場","grid":[35.759808,139.628244],"machineNum":1,"prefId":13},{"name":"アミュージアム大泉","address":"東京都練馬区東大泉２－１０－１１ ＬＩＶＩＮオズ大泉５Ｆ","grid":[35.752436,139.595335],"machineNum":1,"prefId":13},{"name":"ライフ平和台","address":"東京都練馬区北町6-10-1　玩具売場","grid":[35.758951,139.653396],"machineNum":1,"prefId":13},{"name":"西友練馬","address":"東京都練馬区練馬1-3-10　玩具売場","grid":[35.737957,139.655492],"machineNum":1,"prefId":13},{"name":"スーパーアルプス愛川","address":"神奈川県愛甲郡愛川町角田５８０スーパーアルプス愛川店","grid":[35.533089,139.329349],"machineNum":1,"prefId":14},{"name":"ハローズガーデン綾瀬店","address":"神奈川県綾瀬市深谷３７３４－１綾瀬タウンヒルズショッピングセンター２階","grid":[35.436777,139.429045],"machineNum":1,"prefId":14},{"name":"MEGAドン・キホーテ綾瀬","address":"神奈川県綾瀬市大上2-1-1","grid":[35.457736,139.426881],"machineNum":1,"prefId":14},{"name":"イトーヨーカドー伊勢原","address":"神奈川県伊勢原市桜台１－８－１玩具売場","grid":[35.395343,139.31524],"machineNum":1,"prefId":14},{"name":"タイトーＦステーションイオン伊勢原","address":"神奈川県伊勢原市白根６３０－１イオン伊勢原店３Ｆ","grid":[35.397473,139.295497],"machineNum":1,"prefId":14},{"name":"モーリーファンタジー久里浜","address":"神奈川県横須賀市久里浜５丁目１３－１イオン２Ｆ","grid":[35.228988,139.704037],"machineNum":1,"prefId":14},{"name":"プラサカプコン横須賀","address":"神奈川県横須賀市若松町２－３０モアーズシティ４Ｆ","grid":[35.278234,139.67008],"machineNum":1,"prefId":14},{"name":"西友ＬＩＶＩＮよこすか","address":"神奈川県横須賀市平成町３－２１－４　玩具売場","grid":[35.274933,139.683722],"machineNum":1,"prefId":14},{"name":"富士シティオ野比","address":"神奈川県横須賀市野比１－３９－８","grid":[35.215772,139.68766],"machineNum":1,"prefId":14},{"name":"イトーヨーカドー若葉台","address":"神奈川県横浜市旭区若葉台３－７－１玩具売場","grid":[35.505249,139.498155],"machineNum":1,"prefId":14},{"name":"ＮＩＣＯＰＡ横浜四季の森フォレオ店","address":"神奈川県横浜市旭区上白根３丁目４１番１号","grid":[35.498922,139.540844],"machineNum":1,"prefId":14},{"name":"プラサカプコン磯子","address":"神奈川県横浜市磯子区　磯子　１－１－１　マリコム磯子ＳＣ２Ｆ","grid":[35.414345,139.626686],"machineNum":1,"prefId":14},{"name":"テックランド磯子","address":"神奈川県横浜市磯子区磯子１－２－１","grid":[35.413388,139.626373],"machineNum":1,"prefId":14},{"name":"ＣＬＵＢＳＥＧＡ新杉田","address":"神奈川県横浜市磯子区杉田１－１－１　らびすた新杉田２Ｆ","grid":[35.385729,139.619103],"machineNum":1,"prefId":14},{"name":"イトーヨーカドー洋光台","address":"神奈川県横浜市磯子区洋光台３－１０－３","grid":[35.380235,139.59414],"machineNum":1,"prefId":14},{"name":"イトーヨーカドー桂台","address":"神奈川県横浜市栄区中１５－１","grid":[35.371595,139.638734],"machineNum":1,"prefId":14},{"name":"モーリーファンタジー金沢八景","address":"神奈川県横浜市金沢区泥亀１－２７－１","grid":[35.333715,139.622386],"machineNum":1,"prefId":14},{"name":"イトーヨーカドー能見台","address":"神奈川県横浜市金沢区能見台東３－１玩具売場","grid":[35.358486,139.627244],"machineNum":1,"prefId":14},{"name":"スコナランド金沢シーサイド","address":"神奈川県横浜市金沢区並木２－１３－１　３Ｆ","grid":[35.361966,139.640726],"machineNum":1,"prefId":14},{"name":"イオン金沢シーサイド","address":"神奈川県横浜市金沢区並木２－１３－１玩具売場","grid":[35.361569,139.640011],"machineNum":1,"prefId":14},{"name":"ヤマダ電機テックランド戸塚","address":"神奈川県横浜市戸塚区汲沢二丁目１－７","grid":[35.404469,139.519352],"machineNum":1,"prefId":14},{"name":"タイトーステーション戸塚西口","address":"神奈川県横浜市戸塚区戸塚町４０２３","grid":[35.399552,139.531812],"machineNum":1,"prefId":14},{"name":"モーリーファンタジーサクラス戸塚","address":"神奈川県横浜市戸塚区戸塚町４２５３－１サクラス戸塚店２Ｆ","grid":[35.401187,139.530907],"machineNum":1,"prefId":14},{"name":"アピタ戸塚","address":"神奈川県横浜市戸塚区上倉田町７６９－１　玩具売場","grid":[35.399208,139.537564],"machineNum":1,"prefId":14},{"name":"モーリーファンタジー東戸塚","address":"神奈川県横浜市戸塚区品濃町５３５－１","grid":[35.430301,139.561401],"machineNum":1,"prefId":14},{"name":"キッズトレイン東戸塚","address":"神奈川県横浜市戸塚区品濃町５３７－１　オーロラモール6F","grid":[35.430205,139.558567],"machineNum":1,"prefId":14},{"name":"イトーヨーカドー上永谷","address":"神奈川県横浜市港南区丸山台１－１２玩具売場","grid":[35.400611,139.572066],"machineNum":1,"prefId":14},{"name":"モーリーファンタジー港南台","address":"神奈川県横浜市港南区港南台３－１－２","grid":[35.375863,139.5773],"machineNum":1,"prefId":14},{"name":"ヤマダ電機ＬＡＢＩ上大岡","address":"神奈川県横浜市港南区上大岡西１－１８－５","grid":[35.407321,139.594902],"machineNum":1,"prefId":14},{"name":"アミューズメントパーク ジアス上大岡","address":"神奈川県横浜市港南区上大岡西２－１－２８赤い風船ビル２Ｆ","grid":[35.406628,139.596081],"machineNum":1,"prefId":14},{"name":"ＣＬＵＢＳＥＧＡ綱島","address":"神奈川県横浜市港北区綱島西２－６－２９　城田ビル３Ｆ","grid":[35.536461,139.632959],"machineNum":1,"prefId":14},{"name":"イトーヨーカドー綱島","address":"神奈川県横浜市港北区綱島西２－８－１玩具売場","grid":[35.535408,139.631841],"machineNum":1,"prefId":14},{"name":"セガワールドトレッサ横浜","address":"神奈川県横浜市港北区師岡町７００番地　トレッサ横浜　南棟１Ｆ","grid":[35.525578,139.645397],"machineNum":1,"prefId":14},{"name":"ビックカメラ新横浜","address":"神奈川県横浜市港北区新横浜２丁目１００－４５　新横浜中央ビル　９階　　玩具売場","grid":[35.507606,139.617247],"machineNum":1,"prefId":14},{"name":"モーリーファンタジー横浜新吉田","address":"神奈川県横浜市港北区新吉田東八丁目４９番１号イオン２Ｆ","grid":[35.532446,139.612767],"machineNum":1,"prefId":14},{"name":"アピタ日吉","address":"神奈川県横浜市港北区箕輪町２－７－５　玩具売場","grid":[35.546487,139.645006],"machineNum":1,"prefId":14},{"name":"ピアゴ大口","address":"神奈川県横浜市神奈川区神之木町２－３０　玩具売場","grid":[35.493638,139.647513],"machineNum":1,"prefId":14},{"name":"モラモラ東神奈川店","address":"神奈川県横浜市神奈川区富家町１イオン東神奈川店４階","grid":[35.480066,139.633195],"machineNum":1,"prefId":14},{"name":"モーリーファンタジー三ツ境","address":"神奈川県横浜市瀬谷区三ッ境７－１","grid":[35.466023,139.504048],"machineNum":1,"prefId":14},{"name":"そごう横浜","address":"神奈川県横浜市西区高島２－１８－１そごう　横浜店　８Ｆ　玩具売場","grid":[35.465425,139.625095],"machineNum":1,"prefId":14},{"name":"タイトーステーション横浜西口五番街","address":"神奈川県横浜市西区南幸１－１２－９","grid":[35.464671,139.619592],"machineNum":1,"prefId":14},{"name":"ヨドバシカメラマルチメディア横浜","address":"神奈川県横浜市西区北幸１－２－７　玩具売場","grid":[35.467594,139.620408],"machineNum":1,"prefId":14},{"name":"モーリーファンタジーすすき野","address":"神奈川県横浜市青葉区すすき野２－５－４すすき野とうきゅう店２Ｆ","grid":[35.576859,139.526568],"machineNum":1,"prefId":14},{"name":"イトーヨーカドーたまプラーザ","address":"神奈川県横浜市青葉区美しが丘１－６－１玩具売場","grid":[35.578348,139.556702],"machineNum":1,"prefId":14},{"name":"イトーヨーカドー立場","address":"神奈川県横浜市泉区中田西１－１－１５玩具売場","grid":[35.413198,139.500553],"machineNum":1,"prefId":14},{"name":"ＴＨＥ３ＲＤＰＬＡＮＥＴ港北ニュータウン","address":"神奈川県横浜市筑区中川中央１丁目２５番地１号　ノースポートモール６Ｆ","grid":[35.552024,139.57931],"machineNum":1,"prefId":14},{"name":"アピナ山下公園店","address":"神奈川県横浜市中区新山下１－２－８港山下ナナイロビル２Ｆ","grid":[35.442358,139.654049],"machineNum":1,"prefId":14},{"name":"モーリーファンタジー本牧","address":"神奈川県横浜市中区本牧原７－１イオン５Ｆ","grid":[35.425502,139.667071],"machineNum":1,"prefId":14},{"name":"イオン本牧","address":"神奈川県横浜市中区本牧原７－１玩具売場","grid":[35.425502,139.667071],"machineNum":1,"prefId":14},{"name":"イトーヨーカドー鶴見","address":"神奈川県横浜市鶴見区鶴見中央３－１５－３０玩具売場","grid":[35.508884,139.68615],"machineNum":1,"prefId":14},{"name":"ライフ鶴見","address":"神奈川県横浜市鶴見区北寺尾２－１９　玩具売場","grid":[35.515578,139.665151],"machineNum":1,"prefId":14},{"name":"キデイランド港北ニュータウン","address":"神奈川県横浜市都筑区茅ヶ崎中央５－１港北東急ショッピングセンター２Ｆ","grid":[35.544222,139.572239],"machineNum":1,"prefId":14},{"name":"ファンタスティックジャーニー横浜","address":"神奈川県横浜市都筑区池辺町４０３５－１イトーヨーカドーららぽーと横浜店２Ｆ","grid":[35.517305,139.566575],"machineNum":1,"prefId":14},{"name":"イトーヨーカドーららぽーと横浜","address":"神奈川県横浜市都筑区池辺町４０３５－１玩具売場","grid":[35.517305,139.566575],"machineNum":1,"prefId":14},{"name":"モーリーファンタジー港北","address":"神奈川県横浜市都筑区中川中央１－３１－１－５０８３","grid":[35.554993,139.577962],"machineNum":1,"prefId":14},{"name":"モーリーファンタジールララ港北","address":"神奈川県横浜市都筑区中川中央２－２－１ルララこうほく４Ｆ","grid":[35.548778,139.577817],"machineNum":1,"prefId":14},{"name":"ドラマ港北","address":"神奈川県横浜市都筑区東方町３２１－６","grid":[35.51915,139.584585],"machineNum":1,"prefId":14},{"name":"ヨドバシカメラマルチメディア京急上大岡","address":"神奈川県横浜市南区上大岡西１－６－１京急百貨店８階玩具売場","grid":[35.408969,139.596499],"machineNum":1,"prefId":14},{"name":"イトーヨーカドー横浜別所","address":"神奈川県横浜市南区別所１－１４－１玩具売場","grid":[35.415904,139.594723],"machineNum":1,"prefId":14},{"name":"アピタ長津田","address":"神奈川県横浜市緑区長津田みなみ台４丁目７－１　玩具売場","grid":[35.518572,139.498955],"machineNum":1,"prefId":14},{"name":"タイトーステーション海老名ビナウォーク店","address":"神奈川県海老名市中央１ー１８－１","grid":[35.452695,139.395569],"machineNum":1,"prefId":14},{"name":"ハローズガーデン海老名","address":"神奈川県海老名市中央２－４－１イオン海老名店２階","grid":[35.450273,139.393064],"machineNum":1,"prefId":14},{"name":"イオン海老名","address":"神奈川県海老名市中央２－４－１玩具売場","grid":[35.450273,139.393064],"machineNum":1,"prefId":14},{"name":"ノジマ　ららぽーと海老名店","address":"神奈川県海老名市中央2丁目4-1","grid":[35.450273,139.393064],"machineNum":1,"prefId":14},{"name":"プレイランドダイエー海老名","address":"神奈川県海老名市中央３－２－５ダイエー海老名３階","grid":[35.450538,139.39061],"machineNum":1,"prefId":14},{"name":"ＡＭＰＩＡ大船","address":"神奈川県鎌倉市大船１－２４大船駅前ビル１Ｆ～３Ｆ","grid":[35.3532,139.533218],"machineNum":1,"prefId":14},{"name":"ジャンボリー大船","address":"神奈川県鎌倉市大船６－１－１","grid":[35.353985,139.538342],"machineNum":1,"prefId":14},{"name":"イトーヨーカドー大船","address":"神奈川県鎌倉市大船６－１－１玩具売場","grid":[35.353298,139.538067],"machineNum":1,"prefId":14},{"name":"モーリーファンタジー茅ヶ崎","address":"神奈川県茅ヶ崎市茅ヶ崎２－７－７１　イオン２Ｆ","grid":[35.334794,139.409128],"machineNum":1,"prefId":14},{"name":"イオン茅ヶ崎","address":"神奈川県茅ヶ崎市茅ヶ崎２－７－７１玩具売場","grid":[35.334794,139.409128],"machineNum":1,"prefId":14},{"name":"イオン茅ヶ崎中央","address":"神奈川県茅ヶ崎市茅ヶ崎３－５－１６玩具売場","grid":[35.336035,139.402498],"machineNum":1,"prefId":14},{"name":"モーリーファンタジー茅ヶ崎中央","address":"神奈川県茅ヶ崎市茅ケ崎３丁目５番１６号イオン３Ｆ","grid":[35.336035,139.402498],"machineNum":1,"prefId":14},{"name":"神奈川レジャーランド厚木","address":"神奈川県厚木市戸室５丁目３１－１","grid":[35.448225,139.342632],"machineNum":1,"prefId":14},{"name":"イオン厚木","address":"神奈川県厚木市中町１－５－１０","grid":[35.442011,139.366639],"machineNum":1,"prefId":14},{"name":"ハローズガーデン厚木","address":"神奈川県厚木市中町１－５－１０厚木ガーデンシティビル５Ｆ","grid":[35.442011,139.366639],"machineNum":1,"prefId":14},{"name":"モーリーファンタジー座間","address":"神奈川県座間市広野台２－１０イオンスタイル座間店３階","grid":[35.498276,139.423145],"machineNum":1,"prefId":14},{"name":"ピアゴ座間","address":"神奈川県座間市入谷一丁目４１６番地の２　玩具売場","grid":[35.482969,139.394581],"machineNum":1,"prefId":14},{"name":"タイトーステーション小田原シティーモールクレッセ店","address":"神奈川県小田原市前川１２０小田原シティモールクレッセ内２Ｆ","grid":[35.280247,139.195119],"machineNum":1,"prefId":14},{"name":"小田原メトロポリス","address":"神奈川県小田原市前川２１９－４","grid":[35.278693,139.194209],"machineNum":1,"prefId":14},{"name":"キッズトレイン小田原","address":"神奈川県小田原市中里２０８　ダイナシティーウェスト４F","grid":[35.283981,139.185547],"machineNum":1,"prefId":14},{"name":"セガ小田原ダイナシティ","address":"神奈川県小田原市中里２９６－１　ダイナシティイーストモール　イトーヨーカ堂３Ｆ","grid":[35.281716,139.188598],"machineNum":1,"prefId":14},{"name":"イトーヨーカドー小田原","address":"神奈川県小田原市中里２９６－１玩具売場","grid":[35.281699,139.188716],"machineNum":1,"prefId":14},{"name":"モーリーファンタジー秦野","address":"神奈川県秦野市入船町１２－１イオン２Ｆ","grid":[35.378119,139.228206],"machineNum":1,"prefId":14},{"name":"イオン秦野","address":"神奈川県秦野市入船町１２－１玩具売場","grid":[35.377993,139.22833],"machineNum":1,"prefId":14},{"name":"ヤマダ電機テックランド向ヶ丘","address":"神奈川県川崎市宮前区平2-3-10","grid":[35.599806,139.57154],"machineNum":1,"prefId":14},{"name":"ＹＡＺ川崎","address":"神奈川県川崎市幸区小倉５－１９－２３クロスガーデン川崎１Ｆ","grid":[35.53601,139.667214],"machineNum":1,"prefId":14},{"name":"ビックカメララゾーナ川崎","address":"神奈川県川崎市幸区堀川町７２－１　３Ｆトイズコーナー","grid":[35.532839,139.695871],"machineNum":1,"prefId":14},{"name":"イトーヨーカドー溝ノ口","address":"神奈川県川崎市高津区久本３－６－２０玩具売場","grid":[35.599013,139.615877],"machineNum":1,"prefId":14},{"name":"タイトーステーション溝の口","address":"神奈川県川崎市高津区溝口１－１１－８ＯＫＫＡ６３４ビル","grid":[35.60016,139.612418],"machineNum":1,"prefId":14},{"name":"AMPIA川崎モアーズ","address":"神奈川県川崎市川崎区駅前本町7番地岡田屋モアーズ1階","grid":[35.530543,139.699687],"machineNum":1,"prefId":14},{"name":"シルクハット川崎ダイス","address":"神奈川県川崎市川崎区駅前本町8番地ダイスビル地下2階","grid":[35.531165,139.700135],"machineNum":1,"prefId":14},{"name":"アムジーＫＴなっつべりぃ","address":"神奈川県川崎市川崎区港町１２－１　イトーヨーカドー川崎港町店２Ｆ","grid":[35.534198,139.718931],"machineNum":1,"prefId":14},{"name":"イトーヨーカドー川崎港町","address":"神奈川県川崎市川崎区港町１２－１玩具売場","grid":[35.534198,139.718931],"machineNum":1,"prefId":14},{"name":"イトーヨーカドー川崎","address":"神奈川県川崎市川崎区小田栄２－２－１玩具売場","grid":[35.51454,139.708807],"machineNum":1,"prefId":14},{"name":"モーリーファンタジー川崎小田栄","address":"神奈川県川崎市川崎区小田栄２－３－１ホームセンターコーナン２階","grid":[35.515117,139.706517],"machineNum":1,"prefId":14},{"name":"プレイランド川崎","address":"神奈川県川崎市川崎区小田栄二丁目２－１イトーヨーカドー川崎店３Ｆ","grid":[35.512376,139.702625],"machineNum":1,"prefId":14},{"name":"こころっこ川崎店","address":"神奈川県川崎市川崎区中瀬３－２０　ホームズ川崎店内２Ｆ　プレビプレイランドコーナー　こころっこ","grid":[35.538705,139.733366],"machineNum":1,"prefId":14},{"name":"ヨドバシカメラマルチメディア川崎ルフロン","address":"神奈川県川崎市川崎区日進町１－１１玩具売場４Ｆ","grid":[35.529378,139.696648],"machineNum":1,"prefId":14},{"name":"モーリーファンタジー向ケ丘","address":"神奈川県川崎市多摩区登戸２７８９","grid":[35.615279,139.566292],"machineNum":1,"prefId":14},{"name":"イトーヨーカドー武蔵小杉駅前","address":"神奈川県川崎市中原区小杉町３－４２０玩具売場","grid":[35.575523,139.657804],"machineNum":1,"prefId":14},{"name":"イトーヨーカドーグランツリー武蔵小杉","address":"神奈川県川崎市中原区新丸子東3丁目1135番地1号","grid":[35.573825,139.660319],"machineNum":1,"prefId":14},{"name":"ウェアハウス川崎","address":"神奈川県川崎市日進町３－７　２Ｆ","grid":[35.526924,139.694007],"machineNum":1,"prefId":14},{"name":"イオン新百合丘","address":"神奈川県川崎市麻生区上麻生１－１９玩具売場","grid":[35.602326,139.506774],"machineNum":1,"prefId":14},{"name":"イトーヨーカドー新百合ヶ丘","address":"神奈川県川崎市麻生区上麻生１－４－１玩具売場","grid":[35.603111,139.509257],"machineNum":1,"prefId":14},{"name":"イトーヨーカドー古淵","address":"神奈川県相模原市古淵３－１３－３３玩具売場","grid":[35.552832,139.418557],"machineNum":1,"prefId":14},{"name":"ドラマ淵野辺","address":"神奈川県相模原市中央区共和4-2-16","grid":[35.565341,139.394598],"machineNum":1,"prefId":14},{"name":"ジョーシン相模原小山","address":"神奈川県相模原市中央区小山３－３７－１","grid":[35.583042,139.35645],"machineNum":1,"prefId":14},{"name":"モーリーファンタジー相模原小山","address":"神奈川県相模原市中央区小山３－３７－１相模原小山モール２Ｆ","grid":[35.583042,139.35645],"machineNum":1,"prefId":14},{"name":"モーリーファンタジーイオン相模原","address":"神奈川県相模原市南区古淵２－１０－１イオンＳＣ3階","grid":[35.553598,139.417366],"machineNum":1,"prefId":14},{"name":"イオン相模原","address":"神奈川県相模原市南区古淵２－１０－１玩具売場","grid":[35.55371,139.417027],"machineNum":1,"prefId":14},{"name":"セガワールド古淵","address":"神奈川県相模原市南区古淵３－１３－３３　イトーヨーカドー３Ｆ","grid":[35.552689,139.418794],"machineNum":1,"prefId":14},{"name":"イトーヨーカドー相模原","address":"神奈川県相模原市南区松が枝町１７－１玩具売場","grid":[35.515415,139.425048],"machineNum":1,"prefId":14},{"name":"キッズトレイン相模原","address":"神奈川県相模原市南区松ヶ枝町１７－１","grid":[35.515367,139.42499],"machineNum":1,"prefId":14},{"name":"ビックカメラ相模大野駅店","address":"神奈川県相模原市南区相模大野３－８－１相模大野ステーションスクエアＢ館６Ｆ","grid":[35.531218,139.436687],"machineNum":1,"prefId":14},{"name":"ニコパニトリモール相模原店","address":"神奈川県相模原市南区大野台６－１－１ニトリモール相模原３Ｆ","grid":[35.555297,139.41023],"machineNum":1,"prefId":14},{"name":"アドアーズ橋本","address":"神奈川県相模原市緑区橋本３－３－１ＳＩＮＧ橋本２Ｆ","grid":[35.595812,139.348183],"machineNum":1,"prefId":14},{"name":"イオン橋本","address":"神奈川県相模原市緑区橋本６－２－１玩具売場","grid":[35.596151,139.344809],"machineNum":1,"prefId":14},{"name":"アピナ橋本","address":"神奈川県相模原市緑区西橋本５－１－１ラ・フロール駐車場棟１階","grid":[35.598176,139.337541],"machineNum":1,"prefId":14},{"name":"イトーヨーカドーアリオ橋本","address":"神奈川県相模原市緑区大山町１ー２２玩具売場","grid":[35.590977,139.349738],"machineNum":1,"prefId":14},{"name":"エブリデイＦＵＮハウスこころっこ橋本","address":"神奈川県相模原市緑区大山町１－２２アリオ橋本店内２階","grid":[35.590977,139.349738],"machineNum":1,"prefId":14},{"name":"イオンつきみ野","address":"神奈川県大和市つきみ野1-6-1玩具売場","grid":[35.504174,139.462726],"machineNum":1,"prefId":14},{"name":"モーリーファンタジーつきみ野","address":"神奈川県大和市つきみ野町１－６－１　イオン３Ｆ","grid":[35.502956,139.457467],"machineNum":1,"prefId":14},{"name":"イトーヨーカドー大和鶴間","address":"神奈川県大和市下鶴間１－３－１玩具売場","grid":[35.490558,139.457225],"machineNum":1,"prefId":14},{"name":"モーリーファンタジー大和鶴間","address":"神奈川県大和市下鶴間一丁目２番１号イオン３Ｆ","grid":[35.488923,139.457961],"machineNum":1,"prefId":14},{"name":"プレイランド大和鶴間","address":"神奈川県大和市下鶴間一丁目３－１　イトーヨーカドー大和鶴間店３Ｆ","grid":[35.490558,139.457225],"machineNum":1,"prefId":14},{"name":"モーリーファンタジー大和","address":"神奈川県大和市下和田字上ノ原1216-1　イオン3F","grid":[35.42953,139.468211],"machineNum":1,"prefId":14},{"name":"ヤマダ電機テックランドNEW大和深見","address":"神奈川県大和市深見台1-1","grid":[35.465939,139.468847],"machineNum":1,"prefId":14},{"name":"ハローズガーデン湘南","address":"神奈川県藤沢市遠藤６９８－１０　湘南とうきゅうショッピングセンター　２Ｆ","grid":[35.371347,139.442037],"machineNum":1,"prefId":14},{"name":"イトーヨーカドー藤沢","address":"神奈川県藤沢市鵠沼石上１－１０－１玩具売場","grid":[35.335005,139.489113],"machineNum":1,"prefId":14},{"name":"イトーヨーカドー湘南台","address":"神奈川県藤沢市石川６－２－１玩具売場","grid":[35.392388,139.446687],"machineNum":1,"prefId":14},{"name":"ミスターマックス湘南藤沢","address":"神奈川県藤沢市辻堂新町４－３－５","grid":[35.340222,139.464783],"machineNum":1,"prefId":14},{"name":"楽市楽座湘南藤沢","address":"神奈川県藤沢市辻堂新町４丁目３番５号ミスターマックス湘南藤沢ＳＣ２階","grid":[35.340222,139.464783],"machineNum":1,"prefId":14},{"name":"ＳＯＹＵＧａｍｅＦｉｅｌｄ湘南","address":"神奈川県藤沢市辻堂新町四丁目１番１号　湘南モールＦＩＬＬ２Ｆ","grid":[35.338812,139.464637],"machineNum":1,"prefId":14},{"name":"ビックカメラ藤沢","address":"神奈川県藤沢市藤沢５５９増田ビル遊行通り共同ビル６Ｆ玩具売り場","grid":[35.339536,139.488152],"machineNum":1,"prefId":14},{"name":"タイトーステーション藤沢","address":"神奈川県藤沢市南藤沢２１－１","grid":[35.33753,139.487683],"machineNum":1,"prefId":14},{"name":"ドラマ藤沢","address":"神奈川県藤沢市本藤沢５－６－８","grid":[35.357548,139.468052],"machineNum":1,"prefId":14},{"name":"ピアゴ大雄山","address":"神奈川県南足柄市関本５６９番地　玩具売場","grid":[35.319383,139.102348],"machineNum":1,"prefId":14},{"name":"トイザらス平塚","address":"神奈川県平塚市代官町３３－１　ＯＳＣ湘南シティ１Ｆ","grid":[35.328764,139.358493],"machineNum":1,"prefId":14},{"name":"ＹＡＺ平塚","address":"神奈川県平塚市田村１－４－２６","grid":[35.365274,139.360484],"machineNum":1,"prefId":14},{"name":"西友平塚","address":"神奈川県平塚市東中原１－１－２５　玩具売場","grid":[35.351459,139.342474],"machineNum":1,"prefId":14},{"name":"タイトーＦステーション燕三条","address":"新潟県燕市井土巻３－１５０イオン県央店アメニティ棟１Ｆ","grid":[37.65058,138.93646],"machineNum":1,"prefId":15},{"name":"モーリーファンタジー県央","address":"新潟県燕市井土巻３－６５　イオン２Ｆ","grid":[37.651202,138.934943],"machineNum":1,"prefId":15},{"name":"イオン県央","address":"新潟県燕市井土巻３－６５玩具売場","grid":[37.651202,138.934943],"machineNum":1,"prefId":15},{"name":"イオン三条","address":"新潟県三条市西裏館２－１２－２０玩具売場","grid":[37.6396,138.956613],"machineNum":1,"prefId":15},{"name":"ＰＡＬＯ十日町","address":"新潟県十日町市旭町１６１リオン・ドール十日町","grid":[37.135947,138.758339],"machineNum":1,"prefId":15},{"name":"モーリーファンタジー十日町","address":"新潟県十日町市字川端丑７８４－１イオン１Ｆ","grid":[37.138415,138.745592],"machineNum":1,"prefId":15},{"name":"モーリーファンタジー小千谷","address":"新潟県小千谷市大字平沢新田字荒田３３９　イオン２Ｆ","grid":[37.320544,138.79455],"machineNum":1,"prefId":15},{"name":"こころっこ上越","address":"新潟県上越市とよば２３９番の１　バロー上越店内","grid":[37.102591,138.27687],"machineNum":1,"prefId":15},{"name":"アピナ上越インター","address":"新潟県上越市下門前１６６１","grid":[37.154277,138.255641],"machineNum":1,"prefId":15},{"name":"イトーヨーカドー直江津","address":"新潟県上越市西本町３－８－８玩具売場","grid":[37.170788,138.23763],"machineNum":1,"prefId":15},{"name":"イオン上越","address":"新潟県上越市富岡３４５７玩具売場","grid":[37.152928,138.258446],"machineNum":1,"prefId":15},{"name":"モーリーファンタジー上越","address":"新潟県上越市富岡３４５８番地　アコーレ２階アコーレ２Ｆ","grid":[37.151636,138.257754],"machineNum":1,"prefId":15},{"name":"アピタ新潟亀田","address":"新潟県新潟市江南区鵜ノ子４－４６６　玩具売場","grid":[37.872149,139.088991],"machineNum":1,"prefId":15},{"name":"ハローズガーデン新潟亀田","address":"新潟県新潟市江南区鵜ノ子４－４６６アピタ新潟亀田店２Ｆ","grid":[37.872302,139.088707],"machineNum":1,"prefId":15},{"name":"イオン新潟南","address":"新潟県新潟市江南区下早通柳田１－１－１玩具売場","grid":[37.876274,139.08179],"machineNum":1,"prefId":15},{"name":"モーリーファンタジー・ｆ新潟南","address":"新潟県新潟市江南区下早通柳田1丁目1番1号イオンモール２Ｆ","grid":[37.876274,139.08179],"machineNum":1,"prefId":15},{"name":"モーリーファンタジー新潟南","address":"新潟県新潟市江南区下早通柳田１丁目１番１号イオンモール３Ｆ","grid":[37.876067,139.081239],"machineNum":1,"prefId":15},{"name":"アピタ新潟西","address":"新潟県新潟市小新４７４　玩具売場","grid":[37.879209,138.999101],"machineNum":1,"prefId":15},{"name":"ゲオ寺尾","address":"新潟県新潟市西区五十嵐東１丁目７番１号","grid":[37.874095,138.959288],"machineNum":1,"prefId":15},{"name":"ファミリーアミューズメント新潟西","address":"新潟県新潟市西区小新字白鳥４７４アピタ新潟西店２Ｆ","grid":[37.879209,138.999101],"machineNum":1,"prefId":15},{"name":"タイトーＦステーションイオン新潟西","address":"新潟県新潟市西区小新南２丁目１番１０号","grid":[37.86829,138.994705],"machineNum":1,"prefId":15},{"name":"モーリーファンタジー新潟青山","address":"新潟県新潟市西区青山２－５－１イオン２Ｆ","grid":[37.896237,139.004808],"machineNum":1,"prefId":15},{"name":"ビックカメラ新潟店","address":"新潟県新潟市中央区花園１－１－２１　ＣｏＣｏＬｏ南館内１Ｆ","grid":[37.911829,139.063132],"machineNum":1,"prefId":15},{"name":"トイザらス新潟","address":"新潟県新潟市中央区上近江４－１２－２０　デッキィ４０１内","grid":[37.898397,139.029633],"machineNum":1,"prefId":15},{"name":"ヨドバシカメラマルチメディア新潟駅前","address":"新潟県新潟市中央区弁天１－２－６　玩具売場","grid":[37.913203,139.059427],"machineNum":1,"prefId":15},{"name":"イトーヨーカドー丸大新潟","address":"新潟県新潟市中央区本町通り６－１１２２－１玩具売場","grid":[37.920024,139.047007],"machineNum":1,"prefId":15},{"name":"モーリーファンタジー新潟東","address":"新潟県新潟市東区大形本町３－１－２イオン３Ｆ","grid":[37.924993,139.114692],"machineNum":1,"prefId":15},{"name":"カプコサーカス新潟東","address":"新潟県新潟市東区大形本町３－１－２イオン新潟東店内ゲームコーナー","grid":[37.926077,139.115073],"machineNum":1,"prefId":15},{"name":"イオン白根","address":"新潟県新潟市南区能登４０９－２","grid":[37.768152,139.018873],"machineNum":1,"prefId":15},{"name":"モーリーファンタジー新発田","address":"新潟県新発田市住吉町５丁目１１番５号イオン２Ｆ","grid":[37.942552,139.309295],"machineNum":1,"prefId":15},{"name":"タカラ島新村上","address":"新潟県村上市仲間町２００番地村上プラザ１階内","grid":[38.220729,139.491891],"machineNum":1,"prefId":15},{"name":"イオン長岡","address":"新潟県長岡市古正寺１－２４９－１玩具売場","grid":[37.454428,138.823423],"machineNum":1,"prefId":15},{"name":"アピナ長岡","address":"新潟県長岡市堺東町２２","grid":[37.457849,138.813116],"machineNum":1,"prefId":15},{"name":"アピタ長岡","address":"新潟県長岡市千秋2-278","grid":[37.460681,138.826739],"machineNum":1,"prefId":15},{"name":"ハローズガーデン長岡","address":"新潟県長岡市千秋２－２７８アピタＲＩＶＥＲＳＩＤＥＳＥＮＳＨＵ長岡店２Ｆ","grid":[37.460681,138.826739],"machineNum":1,"prefId":15},{"name":"トイザらス長岡","address":"新潟県長岡市川崎町１４３６－５","grid":[37.458406,138.877033],"machineNum":1,"prefId":15},{"name":"モーリーファンタジー六日町","address":"新潟県南魚沼市余川　３１００イオン２Ｆ","grid":[37.081068,138.878604],"machineNum":1,"prefId":15},{"name":"ＭＥＧＡドン・キホーテ柏崎","address":"新潟県柏崎市東長浜町４－１５","grid":[37.368421,138.579021],"machineNum":1,"prefId":15},{"name":"アピタ魚津","address":"富山県魚津市住吉６００番地　玩具売場","grid":[36.806936,137.406219],"machineNum":1,"prefId":16},{"name":"モーリーファンタジー高岡南","address":"富山県高岡市下伏間江３８３イオン２Ｆ","grid":[36.724018,137.016759],"machineNum":1,"prefId":16},{"name":"ユーズランド高岡店","address":"富山県高岡市下伏間江３８３イオンモール高岡２Ｆ","grid":[36.724018,137.016759],"machineNum":1,"prefId":16},{"name":"モーリーファンタジー高岡","address":"富山県高岡市江尻３３１－１イオン１Ｆ","grid":[36.761525,137.031679],"machineNum":1,"prefId":16},{"name":"アピタ黒部","address":"富山県黒部市前沢字北１０１７番地４　玩具売場","grid":[36.862181,137.452225],"machineNum":1,"prefId":16},{"name":"モーリーファンタジー小杉","address":"富山県射水市三ヶ２６０２アル・プラザ小杉２Ｆ","grid":[36.730639,137.075545],"machineNum":1,"prefId":16},{"name":"アピタ砺波","address":"富山県砺波市太郎丸３丁目６９番地　玩具売場","grid":[36.629173,136.958954],"machineNum":1,"prefId":16},{"name":"ユーズランドとなみ","address":"富山県砺波市中神地区画事業31街区1　イオンモールとなみ2F　区画番号２０５","grid":[36.641128,136.946675],"machineNum":1,"prefId":16},{"name":"モーリーファンタジーとなみ","address":"富山県砺波市中神土地区画整理事業地内３１街区１　２Ｆ","grid":[36.641128,136.946675],"machineNum":1,"prefId":16},{"name":"イオンとなみ","address":"富山県砺波市中神土地区画整理事業地内３１街区１-２Ｆ","grid":[36.641128,136.946675],"machineNum":1,"prefId":16},{"name":"トイザらス富山","address":"富山県富山市五福１１４３－１　五福ショッピングセンターアリス２Ｆ","grid":[36.695596,137.19269],"machineNum":1,"prefId":16},{"name":"アピナ富山新庄","address":"富山県富山市荒川３－２－１２","grid":[36.695355,137.248085],"machineNum":1,"prefId":16},{"name":"アピタ富山","address":"富山県富山市上袋１００番６８　玩具売場","grid":[36.660804,137.211561],"machineNum":1,"prefId":16},{"name":"アピタ富山東","address":"富山県富山市上冨居3-8-38","grid":[36.708838,137.240962],"machineNum":1,"prefId":16},{"name":"アル・プラザ富山","address":"富山県富山市婦中町下轡田１６５－１　玩具売場","grid":[36.662932,137.171337],"machineNum":1,"prefId":16},{"name":"タイトーステーションファボーレ婦中","address":"富山県富山市婦中町下轡田１６５－１フューチャーシティファボーレ２Ｆ","grid":[36.662932,137.171337],"machineNum":1,"prefId":16},{"name":"アピナ富山豊田","address":"富山県富山市豊田町２－１２－６６","grid":[36.72107,137.235448],"machineNum":1,"prefId":16},{"name":"アピナ富山南店","address":"富山県富山市堀川町３５５－３マイプラザ内","grid":[36.664971,137.217392],"machineNum":1,"prefId":16},{"name":"おもちゃのバンビ本郷店","address":"富山県富山市本郷１６－８玩具売場","grid":[36.668326,137.229228],"machineNum":1,"prefId":16},{"name":"イオンかほく","address":"石川県かほく市内日角タ２５玩具売場","grid":[36.703967,136.701321],"machineNum":1,"prefId":17},{"name":"モーリーファンタジーかほく","address":"石川県かほく市内日角地内タ２５番イオン２Ｆ","grid":[36.719842,136.706734],"machineNum":1,"prefId":17},{"name":"アル・プラザ加賀","address":"石川県加賀市作見町ル２５－１","grid":[36.322064,136.354462],"machineNum":1,"prefId":17},{"name":"レジャーランド加賀","address":"石川県加賀市箱宮町ヲ１番－１","grid":[36.325154,136.411374],"machineNum":1,"prefId":17},{"name":"アミュージアム津幡","address":"石川県河北郡津幡町北中条１－１アル・プラザ津幡店２Ｆ","grid":[36.660476,136.726101],"machineNum":1,"prefId":17},{"name":"セガイオンタウン金沢示野","address":"石川県金沢市示野中町８７街区２号","grid":[36.579077,136.615898],"machineNum":1,"prefId":17},{"name":"セガワールド金沢","address":"石川県金沢市諸江町３０－１","grid":[36.591117,136.643183],"machineNum":1,"prefId":17},{"name":"アル・プラザ金沢","address":"石川県金沢市諸江町３０－１　玩具売場","grid":[36.591091,136.643575],"machineNum":1,"prefId":17},{"name":"ハローズガーデン金沢","address":"石川県金沢市中村町10-20　アピタ金沢店内2F","grid":[36.559448,136.642769],"machineNum":1,"prefId":17},{"name":"アピタ金沢","address":"石川県金沢市中村町１０番２０号　玩具売場","grid":[36.559448,136.642769],"machineNum":1,"prefId":17},{"name":"レジャーランド藤江新館","address":"石川県金沢市藤江南２－１０５","grid":[36.583659,136.620679],"machineNum":1,"prefId":17},{"name":"イオン金沢","address":"石川県金沢市福久２－５８玩具売場","grid":[36.617315,136.681387],"machineNum":1,"prefId":17},{"name":"金沢メトロポリス","address":"石川県金沢市無量寺４丁目１２１番地１","grid":[36.60117,136.613968],"machineNum":1,"prefId":17},{"name":"アル・プラザ鹿島","address":"石川県鹿島郡中能登町井田と部１－１　玩具売場","grid":[36.959439,136.914894],"machineNum":1,"prefId":17},{"name":"ピアゴ七尾","address":"石川県七尾市御祓町１番地　玩具売場","grid":[37.043707,136.967059],"machineNum":1,"prefId":17},{"name":"アルプラザ小松","address":"石川県小松市園町八２３番地１","grid":[36.406637,136.460559],"machineNum":1,"prefId":17},{"name":"楽市楽座イオンモール新小松","address":"石川県小松市沖周辺土地区画整理事業区域内２０街区　イオンモール新小松店２階","grid":[36.399082,136.464538],"machineNum":1,"prefId":17},{"name":"モーリーファンタジー新小松","address":"石川県小松市沖周辺土地区画整理事業地内仮換地20街区イオンモール3階","grid":[36.399082,136.464538],"machineNum":1,"prefId":17},{"name":"イオン御経塚","address":"石川県石川郡野々市町御経塚２－９１玩具売場","grid":[36.548348,136.598518],"machineNum":1,"prefId":17},{"name":"イオン松任","address":"石川県白山市平松町１０２－１玩具売場","grid":[36.507215,136.565196],"machineNum":1,"prefId":17},{"name":"モーリーファンタジー・ｆ御経塚","address":"石川県野々市市御経塚２丁目９１番地　イオン１Ｆ","grid":[36.548687,136.59834],"machineNum":1,"prefId":17},{"name":"アピナ野々市","address":"石川県野々市市白山町４－１イオンタウン野々市店内","grid":[36.526444,136.612353],"machineNum":1,"prefId":17},{"name":"ＰＡＬＯ武生","address":"福井県越前市横市町２８－１４－１エスカモール武生楽市店2Ｆ","grid":[35.907136,136.193025],"machineNum":1,"prefId":18},{"name":"セガワールド武生","address":"福井県越前市新町３字１３－４","grid":[35.905189,136.153409],"machineNum":1,"prefId":18},{"name":"ピアゴ丸岡","address":"福井県坂井市丸岡町一本田弐字小深町11-3","grid":[36.149493,136.261068],"machineNum":1,"prefId":18},{"name":"アル・プラザアミ","address":"福井県坂井市春江随応寺16-11","grid":[36.134928,136.219024],"machineNum":1,"prefId":18},{"name":"モーリーファンタジー鯖江","address":"福井県鯖江市下河端１６字下町１６－１アル・プラザ鯖江２Ｆ","grid":[35.969307,136.189513],"machineNum":1,"prefId":18},{"name":"アルプラザ鯖江","address":"福井県鯖江市下河端町１６字下町１６番１","grid":[35.969307,136.189513],"machineNum":1,"prefId":18},{"name":"アピタ敦賀","address":"福井県敦賀市中央町１丁目５番５号　玩具売場","grid":[35.643625,136.059072],"machineNum":1,"prefId":18},{"name":"アルプラザ敦賀","address":"福井県敦賀市白銀町１１番５号","grid":[35.648208,136.071672],"machineNum":1,"prefId":18},{"name":"アル・プラザベル","address":"福井県福井市花堂南２－１６－１　玩具売場","grid":[36.032447,136.21204],"machineNum":1,"prefId":18},{"name":"ジョイランド　ベル","address":"福井県福井市花堂南２丁目１６－１ショッピングステージ・ベル店内２Ｆ","grid":[36.032447,136.21204],"machineNum":1,"prefId":18},{"name":"ジョーシン福井本店","address":"福井県福井市高柳１－２０１","grid":[36.089453,136.242106],"machineNum":1,"prefId":18},{"name":"モーリーファンタジー福井","address":"福井県福井市松城町１２－７","grid":[36.062214,136.240739],"machineNum":1,"prefId":18},{"name":"レジャーランドワイプラザ","address":"福井県福井市新保町７－９－１Ｂ棟２Ｆ","grid":[36.085073,136.252073],"machineNum":1,"prefId":18},{"name":"アピタ福井大和田","address":"福井県福井市大和田２丁目１２３０","grid":[36.096676,136.250256],"machineNum":1,"prefId":18},{"name":"ジョイランドエルパ","address":"福井県福井市大和田町２丁目１２１２番地ラブリーパートナー・エルパ店内２Ｆ","grid":[36.095598,136.249547],"machineNum":1,"prefId":18},{"name":"福井西武","address":"福井県福井市中央１－８－１西武百貨店福井店７Ｆ玩具売場","grid":[36.061811,136.219091],"machineNum":1,"prefId":18},{"name":"タイトーＦステーションラザウォーク甲斐双葉","address":"山梨県甲斐市志田字柿木６１６－１","grid":[35.687745,138.482474],"machineNum":1,"prefId":19},{"name":"アピタ双葉","address":"山梨県甲斐市志田字柿木６４５－１番地　玩具売場","grid":[35.684562,138.484054],"machineNum":1,"prefId":19},{"name":"イオン大月","address":"山梨県大月市御太刀1-13-29玩具売場","grid":[35.613932,138.945941],"machineNum":1,"prefId":19},{"name":"イトーヨーカドー甲府昭和","address":"山梨県中巨摩郡昭和町西条１３－１玩具売場","grid":[35.639619,138.543952],"machineNum":1,"prefId":19},{"name":"プラサカプコン甲府","address":"山梨県中巨摩郡昭和町西条字北河原３７１７","grid":[35.638619,138.541234],"machineNum":1,"prefId":19},{"name":"楽市楽座イオンモール甲府","address":"山梨県中巨摩郡昭和町飯喰１５０５－1イオンモール甲府昭和２０１１","grid":[35.623105,138.527198],"machineNum":1,"prefId":19},{"name":"モーリーファンタジー甲府昭和","address":"山梨県中巨摩郡昭和町飯喰１５０５－１イオン甲府昭和店３階","grid":[35.623105,138.527198],"machineNum":1,"prefId":19},{"name":"モーリーファンタジー石和","address":"山梨県笛吹市石和町駅前１６－１イオン３Ｆ","grid":[35.656748,138.634358],"machineNum":1,"prefId":19},{"name":"イオン石和","address":"山梨県笛吹市石和町駅前１６－１玩具売場","grid":[35.656748,138.634358],"machineNum":1,"prefId":19},{"name":"ハローズガーデン石和","address":"山梨県笛吹市石和町窪中島１５４アピタ石和店２Ｆ","grid":[35.645808,138.632045],"machineNum":1,"prefId":19},{"name":"アピタ石和","address":"山梨県笛吹市石和町窪中島１５４番地　玩具売場","grid":[35.645808,138.632045],"machineNum":1,"prefId":19},{"name":"アミュージアム南アルプス","address":"山梨県南アルプス市小笠原１４２３－１スーパーセンタートライアル南アルプス店１Ｆ","grid":[35.617539,138.466667],"machineNum":1,"prefId":19},{"name":"アミュージアム河口湖","address":"山梨県南都留郡富士河口湖町船津２９８６河口湖ショッピングセンターベル３Ｆ","grid":[35.490028,138.764281],"machineNum":1,"prefId":19},{"name":"富士急百貨店","address":"山梨県富士吉田市上吉田２－５－１　玩具売り場","grid":[35.48352,138.795833],"machineNum":1,"prefId":19},{"name":"アピナ穂高","address":"長野県安曇野市穂高２４５０","grid":[36.334634,137.891993],"machineNum":1,"prefId":20},{"name":"モーリーファンタジー豊科","address":"長野県安曇野市豊科４２７２－１０　　イオン２Ｆ","grid":[36.30106,137.907986],"machineNum":1,"prefId":20},{"name":"イオン豊科","address":"長野県安曇野市豊科４２７２－１０玩具売場","grid":[36.301066,137.908035],"machineNum":1,"prefId":20},{"name":"アピタ伊那","address":"長野県伊那市伊那下川原５１９８番地玩具売場","grid":[35.827575,137.95801],"machineNum":1,"prefId":20},{"name":"アピナ伊那","address":"長野県伊那市西町５０９３","grid":[35.833764,137.950896],"machineNum":1,"prefId":20},{"name":"アピナ塩尻店","address":"長野県塩尻市広丘野村１７９４－１","grid":[36.141547,137.953752],"machineNum":1,"prefId":20},{"name":"アピタ岡谷","address":"長野県岡谷市銀座一丁目１番５号　玩具売場","grid":[36.067002,138.049371],"machineNum":1,"prefId":20},{"name":"AGスクエア岡谷","address":"長野県岡谷市塚間町2-1-21","grid":[36.065227,138.053033],"machineNum":1,"prefId":20},{"name":"アピタ高森","address":"長野県下伊那郡高森町山吹４５１５番地　玩具売場","grid":[35.573207,137.899032],"machineNum":1,"prefId":20},{"name":"タカラ島駒ヶ根","address":"長野県駒ヶ根市赤穂１５６８ベルシャイン駒ヶ根１Ｆ","grid":[35.742336,137.926495],"machineNum":1,"prefId":20},{"name":"ＰＡＬＯ佐久","address":"長野県佐久市岩村田６－２ステーションパーク佐久","grid":[36.289398,138.486946],"machineNum":1,"prefId":20},{"name":"アピナ佐久インター","address":"長野県佐久市岩村田北１－１３－１","grid":[36.284438,138.482403],"machineNum":1,"prefId":20},{"name":"イオン佐久平","address":"長野県佐久市佐久平駅南１１－１０玩具売場","grid":[36.275497,138.46424],"machineNum":1,"prefId":20},{"name":"イトーヨーカドー南松本","address":"長野県松本市高宮中１－２０玩具売場","grid":[36.212744,137.961096],"machineNum":1,"prefId":20},{"name":"セガ松本","address":"長野県松本市渚１－７－１","grid":[36.233917,137.955115],"machineNum":1,"prefId":20},{"name":"プリズムストーン  松本店","address":"長野県松本市深志1-3-11 コングロM 3F","grid":[36.229622,137.967211],"machineNum":1,"prefId":20},{"name":"アピナ松本","address":"長野県松本市双葉１９－１０","grid":[36.210527,137.961503],"machineNum":1,"prefId":20},{"name":"モーリーファンタジー南松本","address":"長野県松本市双葉５－２０イオン２Ｆ","grid":[36.208119,137.965787],"machineNum":1,"prefId":20},{"name":"楽市楽座イオンモール松本","address":"長野県松本市中央４－９－５１　イオンモール松本店　風庭２F","grid":[36.234039,137.978216],"machineNum":1,"prefId":20},{"name":"モーリーファンタジー松本","address":"長野県松本市中央４－９－５１イオンスタイル松本店内３Ｆ","grid":[36.234039,137.978216],"machineNum":1,"prefId":20},{"name":"タイトーＦステーション松本","address":"長野県松本市平田東１－２７－１","grid":[36.201433,137.966803],"machineNum":1,"prefId":20},{"name":"アピナ上田","address":"長野県上田市秋和３５９－１","grid":[36.416009,138.223416],"machineNum":1,"prefId":20},{"name":"モーリーファンタジー上田","address":"長野県上田市常田２－１２－１８イオン２Ｆ","grid":[36.392232,138.257996],"machineNum":1,"prefId":20},{"name":"イオン上田","address":"長野県上田市常田２－１２－１８玩具売場","grid":[36.392232,138.257996],"machineNum":1,"prefId":20},{"name":"セガワールド上田","address":"長野県上田市大字上田１８４７－１","grid":[36.412778,138.261944],"machineNum":1,"prefId":20},{"name":"イトーヨーカドーアリオ上田","address":"長野県上田市天神３－５１玩具売場","grid":[36.400542,138.241219],"machineNum":1,"prefId":20},{"name":"ＰＡＬＯ諏訪","address":"長野県諏訪市沖田町５－１８ステーションパーク・諏訪１Ｆ・２Ｆ","grid":[36.00547,138.128415],"machineNum":1,"prefId":20},{"name":"こどもや諏訪","address":"長野県諏訪市沖田町５－１９　諏訪ステーションパーク内","grid":[36.005054,138.128622],"machineNum":1,"prefId":20},{"name":"モーリーファンタジー中野","address":"長野県中野市大字一本木２５２－１イオン２Ｆ","grid":[36.756052,138.377613],"machineNum":1,"prefId":20},{"name":"イトーヨーカドー長野","address":"長野県長野市権堂町２２０１玩具売場","grid":[36.653226,138.192057],"machineNum":1,"prefId":20},{"name":"ファンタジープラザ長野","address":"長野県長野市高田１７５８番地　ＭＥＧＡドン・キホーテ長野店内","grid":[36.642594,138.215961],"machineNum":1,"prefId":20},{"name":"ＳＯＹＵＧａｍｅＦｉｅｌｄ長野三輪","address":"長野県長野市三輪九丁目４３番２４号イオンタウン長野三輪２Ｆ","grid":[36.669703,138.207174],"machineNum":1,"prefId":20},{"name":"アピナ長野大橋","address":"長野県長野市若里７－９－１２","grid":[36.626537,138.200368],"machineNum":1,"prefId":20},{"name":"アピナ長野川中島","address":"長野県長野市川中島町御厨９６７－１","grid":[36.59136,138.162279],"machineNum":1,"prefId":20},{"name":"西友川中島","address":"長野県長野市川中島町今井字薬師堂１８１４－１　玩具売場","grid":[36.594333,138.156836],"machineNum":1,"prefId":20},{"name":"アピナ長野村山店","address":"長野県長野市村山５０２－１","grid":[36.668027,138.263419],"machineNum":1,"prefId":20},{"name":"ＭＥＧＡドン・キホーテ長野","address":"長野県長野市大字高田１７５８","grid":[36.642594,138.215961],"machineNum":1,"prefId":20},{"name":"ＴＨＥ３ＲＤＰＬＡＮＥＴ長野大通り店","address":"長野県長野市大字鶴賀権堂町１５０６番地３　長電権堂弟２ビル１階","grid":[36.654168,138.192802],"machineNum":1,"prefId":20},{"name":"タイトーステーション　アイシティ２１松本店","address":"長野県東筑摩郡山形村７９７７","grid":[36.184409,137.892629],"machineNum":1,"prefId":20},{"name":"アピナ飯田","address":"長野県飯田市座光寺３７２８－１","grid":[35.543217,137.8452],"machineNum":1,"prefId":20},{"name":"イオン飯田","address":"長野県飯田市上郷飯沼１５７５玩具売場","grid":[35.523314,137.850718],"machineNum":1,"prefId":20},{"name":"モーリーファンタジー飯田アップルロード","address":"長野県飯田市鼎一色４５６　　イオン２Ｆ","grid":[35.500743,137.816692],"machineNum":1,"prefId":20},{"name":"アピタ飯田","address":"長野県飯田市鼎名古熊２４６１番地　玩具売場","grid":[35.500076,137.829642],"machineNum":1,"prefId":20},{"name":"ハローズ多治見","address":"岐阜県羽島市江吉良町２９３９　（ハローズ多治見店分）","grid":[35.305162,136.691894],"machineNum":1,"prefId":21},{"name":"バローランド羽島","address":"岐阜県羽島市江吉良町２９３９バロー羽島インター店１Ｆ","grid":[35.305066,136.690826],"machineNum":1,"prefId":21},{"name":"ハローズ萩原","address":"岐阜県下呂市萩原町大字花池字川原164-1バロー萩原店","grid":[35.875361,137.210581],"machineNum":1,"prefId":21},{"name":"アピタ御嵩","address":"岐阜県可児郡御嵩町上恵土字西畑1052-1","grid":[35.438161,137.076552],"machineNum":1,"prefId":21},{"name":"アピタ御嵩","address":"岐阜県可児郡御嵩町上恵土字西畑１０５２ばん１　玩具売場","grid":[35.433652,137.071513],"machineNum":1,"prefId":21},{"name":"レイク・リビン可児","address":"岐阜県可児市下恵土５７５０玩具売り場","grid":[35.414896,137.05037],"machineNum":1,"prefId":21},{"name":"プレビドン・キホーテＵＮＹ可児","address":"岐阜県可児市中恵土字溝向２１２０番１ＭＥＧＡドン・キホーテＵＮＹ可児店内プレビプレイランドコーナー","grid":[35.427064,137.064187],"machineNum":1,"prefId":21},{"name":"アピタ各務原","address":"岐阜県各務原市鵜沼各務原町８丁目７番地　玩具売場","grid":[35.396374,136.904405],"machineNum":1,"prefId":21},{"name":"モーリーファンタジー各務原","address":"岐阜県各務原市那加萱場町３－８イオンモール３Ｆ","grid":[35.391707,136.824392],"machineNum":1,"prefId":21},{"name":"イオン各務原","address":"岐阜県各務原市那加萱場町３－８玩具売場","grid":[35.391707,136.824392],"machineNum":1,"prefId":21},{"name":"トイザらス・ベビーザラス各務原","address":"岐阜県各務原市那珂萱場町３－８イオンモール各務原３Ｆ","grid":[35.398923,136.848447],"machineNum":1,"prefId":21},{"name":"イオン関","address":"岐阜県関市倉知５１６　サンサンシティ・マーゴ　イオン１Ｆ玩具売場","grid":[35.478991,136.900242],"machineNum":1,"prefId":21},{"name":"モーリーファンタジー関","address":"岐阜県関市倉知５１６　サンサンシティ・マーゴイオン１Ｆ","grid":[35.478991,136.900242],"machineNum":1,"prefId":21},{"name":"セガマーゴ関","address":"岐阜県関市倉知５１６番地","grid":[35.478988,136.900336],"machineNum":1,"prefId":21},{"name":"アピタ岐阜","address":"岐阜県岐阜市加納神明町６丁目１番地　玩具売場","grid":[35.401491,136.748847],"machineNum":1,"prefId":21},{"name":"プレビ　Ｖタウン芥見","address":"岐阜県岐阜市芥見南山２－１－８　Ｖタウン芥見店内　プレビプレイランドコーナー","grid":[35.456204,136.851595],"machineNum":1,"prefId":21},{"name":"モーリーファンタジー岐阜","address":"岐阜県岐阜市正木中１－２－１　　マーサ２１　北館　３Ｆイオン岐阜３Ｆ","grid":[35.447971,136.745114],"machineNum":1,"prefId":21},{"name":"ピアゴ長良","address":"岐阜県岐阜市福光東1丁目26番7号","grid":[35.452191,136.774326],"machineNum":1,"prefId":21},{"name":"イトーヨーカドー柳津","address":"岐阜県岐阜市柳津町丸野３－３－６玩具売場","grid":[35.363527,136.729712],"machineNum":1,"prefId":21},{"name":"バロー領下","address":"岐阜県岐阜市領下４丁目５５","grid":[35.407609,136.779761],"machineNum":1,"prefId":21},{"name":"ピアゴ恵那","address":"岐阜県恵那市長島町正家二丁目２番地１７　玩具売場","grid":[35.447874,137.413808],"machineNum":1,"prefId":21},{"name":"ルビットランド高山","address":"岐阜県高山市岡本町３丁目１８－２ルビットタウン２Ｆ","grid":[36.149553,137.24705],"machineNum":1,"prefId":21},{"name":"平和堂高富","address":"岐阜県山県市高木１４７３　玩具売場","grid":[35.505018,136.789732],"machineNum":1,"prefId":21},{"name":"ピアゴ瑞浪","address":"岐阜県瑞浪市薬師町二丁目７２番地　玩具売場","grid":[35.362451,137.232746],"machineNum":1,"prefId":21},{"name":"ピアゴ多治見","address":"岐阜県多治見市住吉町三丁目１９番地の１　玩具売場","grid":[35.343682,137.122806],"machineNum":1,"prefId":21},{"name":"モーリーファンタジー多治見","address":"岐阜県多治見市西坂町５－３１－１多治見インター店２Ｆ","grid":[35.349683,137.104929],"machineNum":1,"prefId":21},{"name":"モーリーファンタジー大垣","address":"岐阜県大垣市外野２丁目１００番イオン２Ｆ","grid":[35.33679,136.614051],"machineNum":1,"prefId":21},{"name":"カラフルパーク大垣店","address":"岐阜県大垣市三塚町丹瀬４６３－１イオンタウン大垣１Ｆ","grid":[35.366173,136.630715],"machineNum":1,"prefId":21},{"name":"アル・プラザ鶴見","address":"岐阜県大垣市鶴見町字上渡瀬６４１－２　玩具売場","grid":[35.361539,136.640365],"machineNum":1,"prefId":21},{"name":"にこぱアクアウォーク大垣店","address":"岐阜県大垣市林町６丁目８０番２１","grid":[35.369882,136.6173],"machineNum":1,"prefId":21},{"name":"セガワールドアクアウォーク大垣","address":"岐阜県大垣市林町六丁目８０番２１　アクアウォーク大垣２Ｆ","grid":[35.369882,136.6173],"machineNum":1,"prefId":21},{"name":"アピタ大垣","address":"岐阜県大垣市林町六丁目８０番２１号　玩具売場","grid":[35.370044,136.617274],"machineNum":1,"prefId":21},{"name":"バローランド中津川","address":"岐阜県中津川市淀川町３－８ルビットタウン２Ｆ","grid":[35.49816,137.50764],"machineNum":1,"prefId":21},{"name":"アピタ美濃加茂","address":"岐阜県美濃加茂市野笹町２丁目５番６５号　玩具売場","grid":[35.443627,137.039115],"machineNum":1,"prefId":21},{"name":"アピタ北方","address":"岐阜県本巣郡北方町平成２丁目３番地　玩具売場","grid":[35.432597,136.681444],"machineNum":1,"prefId":21},{"name":"平和堂大野","address":"岐阜県揖斐郡大野町大字黒野字上柿木１２－１　玩具売場","grid":[35.467152,136.621697],"machineNum":1,"prefId":21},{"name":"アピタ伊東","address":"静岡県伊東市玖須美元和田７２０番地の１４３　玩具売場","grid":[34.948785,139.114751],"machineNum":1,"prefId":22},{"name":"アピタ大仁","address":"静岡県伊豆の国市吉田字九十分１５３番の１　玩具売場","grid":[35.000131,138.936206],"machineNum":1,"prefId":22},{"name":"AGスクエア掛川","address":"静岡県掛川市細田248","grid":[34.773801,137.985433],"machineNum":1,"prefId":22},{"name":"アピタ掛川","address":"静岡県掛川市大池２８２６番地　玩具売場","grid":[34.772847,137.989556],"machineNum":1,"prefId":22},{"name":"モーリーファンタジー御殿場","address":"静岡県御殿場市萩原６３６番地","grid":[35.305042,138.93464],"machineNum":1,"prefId":22},{"name":"イトーヨーカドー三島","address":"静岡県三島市中田町９－３０玩具売場","grid":[35.113286,138.919308],"machineNum":1,"prefId":22},{"name":"ミシマトイス","address":"静岡県三島市本町３番３５号","grid":[35.119461,138.914085],"machineNum":1,"prefId":22},{"name":"ピアゴ森","address":"静岡県周智郡森町睦実字鳥喰２３２７番地１","grid":[34.823155,137.926251],"machineNum":1,"prefId":22},{"name":"セガワールドサントムーン","address":"静岡県駿東郡清水町玉川61-2","grid":[35.109826,138.903953],"machineNum":1,"prefId":22},{"name":"エディオン柿田川","address":"静岡県駿東郡清水町伏見字泉頭５８－１","grid":[35.108695,138.900785],"machineNum":1,"prefId":22},{"name":"タイトーステーション　ウェルディ長泉店","address":"静岡県駿東郡長泉町下長窪字城山１０７６－１ウェルディ長泉２Ｆ","grid":[35.145358,138.890695],"machineNum":1,"prefId":22},{"name":"ピアゴ香貫","address":"静岡県沼津市下香貫字汐入２２１６番地　玩具売場","grid":[35.079526,138.870402],"machineNum":1,"prefId":22},{"name":"イトーヨーカドー沼津","address":"静岡県沼津市高島本町１－５玩具売場","grid":[35.107931,138.85801],"machineNum":1,"prefId":22},{"name":"キッズトレイン沼津南","address":"静岡県沼津市西島町１０?１","grid":[35.084625,138.863639],"machineNum":1,"prefId":22},{"name":"ＴＨＥ　３ＲＤ　ＰＬＡＮＥＴ　ＢｉＶｉ沼津店","address":"静岡県沼津市大手町１丁目１番５号","grid":[35.104003,138.860966],"machineNum":1,"prefId":22},{"name":"THE3RDPLANETBivi沼津","address":"静岡県沼津市大手町1丁目1番5号","grid":[35.104003,138.860966],"machineNum":1,"prefId":22},{"name":"ジョイランドアミューズ諏訪","address":"静岡県沼津市大諏訪叶２０－２","grid":[35.111784,138.832195],"machineNum":1,"prefId":22},{"name":"ピアゴ大覚寺","address":"静岡県焼津市大覚寺2-27-15","grid":[34.876084,138.299029],"machineNum":1,"prefId":22},{"name":"モーリーファンタジー焼津","address":"静岡県焼津市祢宜島５５５イオン２Ｆ","grid":[34.839311,138.309767],"machineNum":1,"prefId":22},{"name":"イオン焼津","address":"静岡県焼津市祢宜島５５５玩具売場","grid":[34.83931,138.309776],"machineNum":1,"prefId":22},{"name":"モーリーファンタジー裾野","address":"静岡県裾野市佐野１０３９マックスバリューベルシティー裾野店","grid":[35.175846,138.908126],"machineNum":1,"prefId":22},{"name":"タイトーＦステーション静岡","address":"静岡県静岡市葵区呉服町二丁目５番地４ふしみや第２ビル","grid":[34.9744,138.383211],"machineNum":1,"prefId":22},{"name":"松坂屋静岡","address":"静岡県静岡市葵区御幸町10-2　松坂屋静岡店本館５Ｆ玩具売場","grid":[34.973215,138.388149],"machineNum":1,"prefId":22},{"name":"セガワールド静岡","address":"静岡県静岡市葵区七間町４－２静活プラザビル１，２Ｆ","grid":[34.974139,138.381783],"machineNum":1,"prefId":22},{"name":"プリズムストーン  静岡店","address":"静岡県静岡市葵区伝馬町6-1　静岡東急スクエア B1F　アニメガ静岡109店内","grid":[34.974381,138.387639],"machineNum":1,"prefId":22},{"name":"ＭＡＲＫＩＳ静岡","address":"静岡県静岡市葵区柚木１９１　ＭＡＲＫ　ＩＳ　静岡３階","grid":[34.98455,138.409737],"machineNum":1,"prefId":22},{"name":"イトーヨーカドー静岡","address":"静岡県静岡市駿河区曲金３－１－５玩具売場","grid":[34.972413,138.407206],"machineNum":1,"prefId":22},{"name":"アピタ静岡","address":"静岡県静岡市駿河区石田１丁目５番１号　玩具売場","grid":[34.959722,138.401666],"machineNum":1,"prefId":22},{"name":"ソユー竜宮タウン静岡店","address":"静岡県静岡市駿河区石田一丁目５番１号　アピタ静岡ＳＣ２Ｆ","grid":[34.959594,138.401636],"machineNum":1,"prefId":22},{"name":"ＡＧスクエア清水","address":"静岡県静岡市清水区駒越北町８－１　ベイドリーム清水","grid":[34.984763,138.499583],"machineNum":1,"prefId":22},{"name":"ピアゴ清水高橋","address":"静岡県静岡市清水区高橋5丁目1番の1号","grid":[35.025503,138.470823],"machineNum":1,"prefId":22},{"name":"モーリーファンタジー清水","address":"静岡県静岡市清水区上原１－６－１６イオン２Ｆ","grid":[35.009252,138.458736],"machineNum":1,"prefId":22},{"name":"イオン清水","address":"静岡県静岡市清水区上原１－６－１６玩具売場","grid":[35.009252,138.458736],"machineNum":1,"prefId":22},{"name":"トイザらス静岡","address":"静岡県静岡市清水区鳥坂８６０　クレッセ静岡２Ｆ","grid":[35.013202,138.43415],"machineNum":1,"prefId":22},{"name":"ＴＨＥ　３ＲＤ　ＰＬＡＮＥＴ　フレスポ静岡店","address":"静岡県静岡市清水区鳥坂８６０番地","grid":[35.013202,138.43415],"machineNum":1,"prefId":22},{"name":"アミュージアム清水","address":"静岡県静岡市清水区入船町１３－１５エスパルスドリームプラザ３Ｆ","grid":[35.010486,138.49294],"machineNum":1,"prefId":22},{"name":"モーリーファンタジー袋井","address":"静岡県袋井市上山梨４丁目１番地の１イオン２Ｆ","grid":[34.784565,137.902877],"machineNum":1,"prefId":22},{"name":"ピアゴ袋井","address":"静岡県袋井市新池字原川田１１５８番地１　玩具売場","grid":[34.740122,137.913299],"machineNum":1,"prefId":22},{"name":"ハローズガーデン島田","address":"静岡県島田市宝来町8-2アピタ2F","grid":[34.82753,138.184872],"machineNum":1,"prefId":22},{"name":"アピタ島田","address":"静岡県島田市宝来町８番２号　玩具売場","grid":[34.82753,138.184872],"machineNum":1,"prefId":22},{"name":"ＬＡＮＤ藤枝","address":"静岡県藤枝市前島１丁目７番１０号ＢｉＶｉ藤枝４Ｆ","grid":[34.847336,138.252957],"machineNum":1,"prefId":22},{"name":"アピタ藤枝","address":"静岡県藤枝市田沼１丁目１８番１号　玩具売場","grid":[34.848028,138.253981],"machineNum":1,"prefId":22},{"name":"ＡＧスクエア磐田","address":"静岡県磐田市下万能４１３","grid":[34.717717,137.833662],"machineNum":1,"prefId":22},{"name":"ピアゴ上岡田","address":"静岡県磐田市上岡田字村東８１７番地１　玩具売場","grid":[34.697807,137.848905],"machineNum":1,"prefId":22},{"name":"ＹＡＺ磐田","address":"静岡県磐田市西貝塚横須賀道北３６９０　イオンタウン内","grid":[34.710118,137.869904],"machineNum":1,"prefId":22},{"name":"タイトーステーション新浜松ザザシティ店","address":"静岡県浜松市　中区鍛冶町１５番地","grid":[34.704855,137.729186],"machineNum":1,"prefId":22},{"name":"ＹＡＺワールド浜松葵","address":"静岡県浜松市葵西２－２７－１０イオンタウン内","grid":[34.767133,137.708118],"machineNum":1,"prefId":22},{"name":"アピタ浜北","address":"静岡県浜松市貴布称１２００番地　玩具売場","grid":[34.710275,137.727416],"machineNum":1,"prefId":22},{"name":"プラサカプコンパルパル","address":"静岡県浜松市西区館山寺町１８９１浜名湖パルパル内ゲームコーナー","grid":[34.763348,137.61686],"machineNum":1,"prefId":22},{"name":"モーリーファンタジー浜松志都呂","address":"静岡県浜松市西区志都呂町２丁目３７番１号イオン３Ｆ","grid":[34.696809,137.65122],"machineNum":1,"prefId":22},{"name":"イオン浜松志戸呂","address":"静岡県浜松市西区志都呂町５６０５","grid":[34.70376,137.65413],"machineNum":1,"prefId":22},{"name":"プラサカプコン志都呂店","address":"静岡県浜松市西区志都呂町５６０５　イオンモール浜松志都呂　３Ｆ","grid":[34.696753,137.651432],"machineNum":1,"prefId":22},{"name":"モーリーファンタジー浜松西","address":"静岡県浜松市西区入野町６２４４－１イオン３Ｆ","grid":[34.699061,137.690142],"machineNum":1,"prefId":22},{"name":"仔熊遠鉄","address":"静岡県浜松市中区砂山町　３２０－２　遠鉄百貨店　本館５Ｆ玩具売場","grid":[34.703775,137.733136],"machineNum":1,"prefId":22},{"name":"ビックカメラ浜松店","address":"静岡県浜松市中区砂山町３２２－１","grid":[34.703422,137.733894],"machineNum":1,"prefId":22},{"name":"ピアゴ浜松泉町","address":"静岡県浜松市中区和泉1丁目6番1号","grid":[34.737431,137.714458],"machineNum":1,"prefId":22},{"name":"ＴＨＥ３ＲＤＰＬＡＮＥＴＯＺ浜松","address":"静岡県浜松市東区宮竹町322番地の1","grid":[34.722429,137.764913],"machineNum":1,"prefId":22},{"name":"モーリーファンタジー浜松市野","address":"静岡県浜松市東区天王町字諏訪１９８１－３イオン２Ｆ","grid":[34.736531,137.771155],"machineNum":1,"prefId":22},{"name":"タイトーＦステーション浜松市野","address":"静岡県浜松市東区天王町字諏訪１９８１－３イオンモール浜松市野店１Ｆ","grid":[34.736531,137.771155],"machineNum":1,"prefId":22},{"name":"イオン浜松市野","address":"静岡県浜松市東区天王町字諏訪１９８１－３玩具売場","grid":[34.736531,137.771155],"machineNum":1,"prefId":22},{"name":"ＭＥＧＡドン・キホーテ浜松可美","address":"静岡県浜松市南区東若林町１１－１","grid":[34.69201,137.71418],"machineNum":1,"prefId":22},{"name":"ピアゴ於呂","address":"静岡県浜松市浜北区於呂字荒巻982番地　玩具売場","grid":[34.833448,137.795825],"machineNum":1,"prefId":22},{"name":"タイトーＦステーション　プレ葉ウォーク浜北","address":"静岡県浜松市浜北区貴布祢１２００番地","grid":[34.797616,137.779404],"machineNum":1,"prefId":22},{"name":"イオン富士宮","address":"静岡県富士宮市浅間町１－８玩具売場","grid":[35.220784,138.612063],"machineNum":1,"prefId":22},{"name":"タイトーＦステーションイオン富士宮","address":"静岡県富士宮市浅間町１番８号","grid":[35.22064,138.612266],"machineNum":1,"prefId":22},{"name":"ピアゴ富士宮","address":"静岡県富士宮市東阿幸地５４１番地　玩具売場","grid":[35.228669,138.624587],"machineNum":1,"prefId":22},{"name":"ＴＨＥ３ＲＤＰＬＡＮＥＴ富士","address":"静岡県富士市永田町２－９９","grid":[35.162789,138.669294],"machineNum":1,"prefId":22},{"name":"アピタ富士吉原","address":"静岡県富士市久保二丁目１番－１０号　玩具売場","grid":[35.161484,138.67622],"machineNum":1,"prefId":22},{"name":"ハローズガーデン富士吉原","address":"静岡県富士市国久保２－１－１０アピタ富士吉原店２Ｆ","grid":[35.167802,138.680725],"machineNum":1,"prefId":22},{"name":"モーリーファンタジー・ｆ富士南","address":"静岡県富士市鮫島１１８－１０イオンタウン２Ｆ","grid":[35.1403,138.675709],"machineNum":1,"prefId":22},{"name":"ピアゴ富士中央","address":"静岡県富士市青葉町625番地","grid":[35.165001,138.659947],"machineNum":1,"prefId":22},{"name":"ピアゴ榛原","address":"静岡県牧之原市細江字濱田１３７１番地１　玩具売場","grid":[34.749921,138.239376],"machineNum":1,"prefId":22},{"name":"レイク・リビン甚目寺","address":"愛知県あま市甚目寺五位田１２８","grid":[35.19693,136.82512],"machineNum":1,"prefId":23},{"name":"イオン三好","address":"愛知県みよし市三好町青木９１玩具売場","grid":[35.093304,137.077779],"machineNum":1,"prefId":23},{"name":"モーリーファンタジー三好","address":"愛知県みよし市三好町青木９１番地イオン２Ｆ","grid":[35.092288,137.07954],"machineNum":1,"prefId":23},{"name":"ピアゴ勝幡","address":"愛知県愛西市勝幡町弁才天２２８３番地６０玩具売場","grid":[35.194538,136.749526],"machineNum":1,"prefId":23},{"name":"ピアゴ佐屋","address":"愛知県愛西市北一色町東田面１０－１","grid":[35.147684,136.730247],"machineNum":1,"prefId":23},{"name":"アピタ安城南","address":"愛知県安城市桜井町貝戸尻６０番地　玩具売場","grid":[34.920246,137.087576],"machineNum":1,"prefId":23},{"name":"ハローズガーデン安城南","address":"愛知県安城市桜井町貝戸尻６０番地アピタ安城南店２階","grid":[34.920246,137.087576],"machineNum":1,"prefId":23},{"name":"ハローズガーデン三河安城","address":"愛知県安城市三河安城南町１－４－８ピアゴ三河安城店２Ｆ","grid":[34.965109,137.062199],"machineNum":1,"prefId":23},{"name":"プレイランドソピア安城","address":"愛知県安城市住吉町３－１－８イトーヨーカドー安城店２階","grid":[34.9851,137.083247],"machineNum":1,"prefId":23},{"name":"イトーヨーカドー安城","address":"愛知県安城市住吉町３－１－８玩具売場","grid":[34.9851,137.083247],"machineNum":1,"prefId":23},{"name":"西友安城","address":"愛知県安城市大東町９－３１　玩具売場","grid":[34.966172,137.079675],"machineNum":1,"prefId":23},{"name":"ピアゴ東栄","address":"愛知県安城市東栄町５丁目２０－１玩具売場","grid":[34.986544,137.095439],"machineNum":1,"prefId":23},{"name":"セガ安城","address":"愛知県安城市百石町２丁目３５番地１３","grid":[34.947333,137.073167],"machineNum":1,"prefId":23},{"name":"安城メトロポリス","address":"愛知県安城市浜富町６－８","grid":[34.954999,137.098232],"machineNum":1,"prefId":23},{"name":"ピアゴ福釜","address":"愛知県安城市福釜町矢場１６番地５　玩具売場","grid":[34.95077,137.061421],"machineNum":1,"prefId":23},{"name":"ピアゴ尾西","address":"愛知県一宮市小信中島東鵯平５９","grid":[35.312164,136.752263],"machineNum":1,"prefId":23},{"name":"ＰＩＣＯ尾西","address":"愛知県一宮市小信中島東鵯平５９番地ピアゴ尾西２Ｆ","grid":[35.312164,136.752263],"machineNum":1,"prefId":23},{"name":"モーリーファンタジー妙興寺","address":"愛知県一宮市大和町妙興寺字白山西３番地２ピアゴ妙興寺店3階","grid":[35.286577,136.797518],"machineNum":1,"prefId":23},{"name":"モーリーファンタジーピアゴ大和","address":"愛知県一宮市大和町毛受字一本松１９番地ピアゴ大和２Ｆ","grid":[35.296424,136.78262],"machineNum":1,"prefId":23},{"name":"ピアゴ妙興寺","address":"愛知県一宮市大和田町妙興寺白山西３－２","grid":[35.286792,136.802586],"machineNum":1,"prefId":23},{"name":"モーリーファンタジー木曽川","address":"愛知県一宮市木曽川町黒田字南八ツヶ池２５－１イオン２Ｆ","grid":[35.346063,136.784132],"machineNum":1,"prefId":23},{"name":"イオン木曽川","address":"愛知県一宮市木曽川町黒田字南八ツケ池２５－１玩具売場","grid":[35.349459,136.774756],"machineNum":1,"prefId":23},{"name":"セガイオンモール木曽川","address":"愛知県一宮市木曽川町黒田八ヶ池２５－１　イオンモール木曽川３階","grid":[35.350473,136.773753],"machineNum":1,"prefId":23},{"name":"アピタ木曽川","address":"愛知県一宮市木曽川町黒田八ノ通51番地の4","grid":[35.344689,136.790651],"machineNum":1,"prefId":23},{"name":"アピタ一宮","address":"愛知県一宮市両郷町１丁目６番地　玩具売場","grid":[35.31052,136.816767],"machineNum":1,"prefId":23},{"name":"セガワールド尾西","address":"愛知県一宮市篭屋３－９－７アソビックスびさい１Ｆ","grid":[35.309199,136.771506],"machineNum":1,"prefId":23},{"name":"ＭＥＧＡドン・キホーテＵＮＹ伝法寺","address":"愛知県一宮市伝法寺９丁目３番地２０","grid":[35.26371,136.842292],"machineNum":1,"prefId":23},{"name":"プラサカプコン稲沢","address":"愛知県稲沢市下津町地内尾張西部郡都市拠点地区１３街区　リーフフォーク稲沢２０１区画","grid":[35.259125,136.819367],"machineNum":1,"prefId":23},{"name":"アピタ稲沢東","address":"愛知県稲沢市下津穂所１－１－１　玩具売場","grid":[35.259102,136.819434],"machineNum":1,"prefId":23},{"name":"アピタ稲沢","address":"愛知県稲沢市天池五反田町１番地　玩具売場","grid":[35.253557,136.770659],"machineNum":1,"prefId":23},{"name":"ニコパウイングタウン岡崎店","address":"愛知県岡崎市羽根町小豆坂３番地","grid":[34.923398,137.174883],"machineNum":1,"prefId":23},{"name":"モーリーファンタジー岡崎南","address":"愛知県岡崎市戸崎町字ばら山１－１イオン３Ｆ","grid":[34.938729,137.164376],"machineNum":1,"prefId":23},{"name":"イオン岡崎南","address":"愛知県岡崎市戸崎町字ばら山１－１玩具売場","grid":[34.938704,137.164108],"machineNum":1,"prefId":23},{"name":"ゲームランド岡崎","address":"愛知県岡崎市戸崎町字外山３８－５イオンモール岡崎シネマ館３Ｆ","grid":[34.937748,137.164099],"machineNum":1,"prefId":23},{"name":"モーリーファンタジー岡崎","address":"愛知県岡崎市上六名町字宮前１ショッピングセンターコムタウン１Ｆ","grid":[34.950858,137.156556],"machineNum":1,"prefId":23},{"name":"ピアゴ上和田","address":"愛知県岡崎市上和田町字サジ１０　玩具売場","grid":[34.933964,137.147926],"machineNum":1,"prefId":23},{"name":"にこぱエルエルタウン岡崎店","address":"愛知県岡崎市上和田町南天白５－１エルエルタウン岡崎店","grid":[34.932199,137.150225],"machineNum":1,"prefId":23},{"name":"ピアゴ洞","address":"愛知県岡崎市洞町字的場72-2","grid":[34.948504,137.190762],"machineNum":1,"prefId":23},{"name":"アピタ岡崎北","address":"愛知県岡崎市日名北町４番地４６　玩具売場","grid":[34.975115,137.15257],"machineNum":1,"prefId":23},{"name":"ヨシヅヤJR蟹江","address":"愛知県海部郡蟹江町今３丁目１７番地","grid":[35.143971,136.796779],"machineNum":1,"prefId":23},{"name":"ピアゴ幸田","address":"愛知県額田郡幸田町大草山添170番地","grid":[34.872318,137.17506],"machineNum":1,"prefId":23},{"name":"アピタ蒲郡","address":"愛知県蒲郡市港町１７番１０号　玩具売場","grid":[34.821165,137.225257],"machineNum":1,"prefId":23},{"name":"ピアゴ井ヶ谷","address":"愛知県刈谷市井ヶ谷町下前田３５番地１　玩具売場","grid":[35.053918,137.053437],"machineNum":1,"prefId":23},{"name":"イトーヨーカドー刈谷","address":"愛知県刈谷市高倉町２６０１玩具売場","grid":[35.002179,136.995695],"machineNum":1,"prefId":23},{"name":"セガイオンタウン刈谷","address":"愛知県刈谷市東境町京和１","grid":[35.038641,137.026431],"machineNum":1,"prefId":23},{"name":"アピタ刈谷","address":"愛知県刈谷市南桜町２丁目５６番１号　玩具売場","grid":[34.99111,137.004776],"machineNum":1,"prefId":23},{"name":"アピタ岩倉","address":"愛知県岩倉市旭町1丁目25番地","grid":[35.27651,136.872965],"machineNum":1,"prefId":23},{"name":"ピアゴ八剱","address":"愛知県岩倉市八剱町長野１番地３","grid":[35.293497,136.88268],"machineNum":1,"prefId":23},{"name":"ワンダーフォレスト江南西","address":"愛知県江南市松竹町上野２０５ＶＩＡＭＡＬＬアピタ江南西店２Ｆ","grid":[35.342164,136.854958],"machineNum":1,"prefId":23},{"name":"アピタ江南西","address":"愛知県江南市松竹町上野205番地　玩具売場","grid":[35.343286,136.854692],"machineNum":1,"prefId":23},{"name":"平和堂江南","address":"愛知県江南市上奈良町栄６１－３　玩具売場","grid":[35.332341,136.856469],"machineNum":1,"prefId":23},{"name":"ピアゴ布袋","address":"愛知県江南市布袋下山町西１９番地","grid":[35.316925,136.867227],"machineNum":1,"prefId":23},{"name":"ピアゴ江南","address":"愛知県江南市村久野町瀬頭163","grid":[35.354845,136.873665],"machineNum":1,"prefId":23},{"name":"ピアゴ篠木","address":"愛知県春日井下市場町3丁目6番地2","grid":[35.259756,136.997544],"machineNum":1,"prefId":23},{"name":"キッズインタイトーイオン春日井","address":"愛知県春日井市　柏井町４丁目１７番地　イオン春日井店３Ｆゲームコーナー","grid":[35.238126,136.962444],"machineNum":1,"prefId":23},{"name":"クラブセガ春日井","address":"愛知県春日井市岩野町菅廻間4180","grid":[35.269504,136.960537],"machineNum":1,"prefId":23},{"name":"アピタ高蔵寺","address":"愛知県春日井市中央台２丁目５番地　玩具売場","grid":[35.28276,137.048876],"machineNum":1,"prefId":23},{"name":"モーリーファンタジー春日井","address":"愛知県春日井市柏井町４－１７イオン4階","grid":[35.2378,136.962293],"machineNum":1,"prefId":23},{"name":"西友ＬＩＶＩＮザ・モール春日井","address":"愛知県春日井市六軒屋町字東丘２２　玩具売場","grid":[35.258736,136.981677],"machineNum":1,"prefId":23},{"name":"アピタ桃花台","address":"愛知県小牧市古雅一丁目１番地　玩具売場","grid":[35.301185,136.98239],"machineNum":1,"prefId":23},{"name":"イオン小牧","address":"愛知県小牧市東１－１２６玩具売場","grid":[35.284956,136.939677],"machineNum":1,"prefId":23},{"name":"ヨドバシカメラマルチメディア名古屋松坂屋","address":"愛知県小牧市入鹿出新田８２２","grid":[35.304575,136.899289],"machineNum":1,"prefId":23},{"name":"アピタ小牧","address":"愛知県小牧市堀の内３丁目１５番地　玩具売場","grid":[35.289708,136.912804],"machineNum":1,"prefId":23},{"name":"モーリーファンタジー常滑","address":"愛知県常滑市りんくう町2丁目20番3　イオンスタイル2F","grid":[34.880206,136.826459],"machineNum":1,"prefId":23},{"name":"アミューズファクトリー常滑","address":"愛知県常滑市りんくう町２丁目２０番３イオンモール常滑店２F","grid":[34.882162,136.826214],"machineNum":1,"prefId":23},{"name":"ファミリーアミューズメント新城","address":"愛知県新城市宮ノ後６８ピアゴ新城店２Ｆ","grid":[34.903454,137.495112],"machineNum":1,"prefId":23},{"name":"ピアゴ新城","address":"愛知県新城市字的場２５番地の１１　玩具売場","grid":[34.904019,137.496092],"machineNum":1,"prefId":23},{"name":"モーリーファンタジー瀬戸みずの","address":"愛知県瀬戸市みずの坂２丁目２５３番地　イオン２Ｆ","grid":[35.24285,137.067491],"machineNum":1,"prefId":23},{"name":"アピタ瀬戸","address":"愛知県瀬戸市幸町３３番地　玩具売場","grid":[35.22293,137.096513],"machineNum":1,"prefId":23},{"name":"セガ東名ボール","address":"愛知県瀬戸市西原町２丁目１１４","grid":[35.209151,137.06294],"machineNum":1,"prefId":23},{"name":"レイク・リビン清洲店","address":"愛知県清須市西市場５丁目５－３玩具売場","grid":[35.219941,136.831944],"machineNum":1,"prefId":23},{"name":"アピタ名古屋空港","address":"愛知県西春日井郡豊山町大字豊場字林先１番８　玩具売場","grid":[35.245942,136.924823],"machineNum":1,"prefId":23},{"name":"ファンタジーウエストタウン西尾","address":"愛知県西尾市高畠町３－２３－９ヴェルサウォーク西尾店３階","grid":[34.863383,137.059468],"machineNum":1,"prefId":23},{"name":"ファンタジーウエストタウン西尾店","address":"愛知県西尾市高畠町３－２３－９ヴェルサウォーク西尾店３階","grid":[34.863383,137.059468],"machineNum":1,"prefId":23},{"name":"アピタ西尾","address":"愛知県西尾市高畠町３丁目２３－９　玩具売場","grid":[34.86323,137.059684],"machineNum":1,"prefId":23},{"name":"アピタ大府","address":"愛知県大府市明成町４丁目１３３番地　玩具売場","grid":[35.021338,136.951536],"machineNum":1,"prefId":23},{"name":"アピタ大口","address":"愛知県丹羽郡大口町丸２丁目３６番地　玩具売場","grid":[35.330769,136.905651],"machineNum":1,"prefId":23},{"name":"モーリーファンタジー扶桑","address":"愛知県丹羽郡扶桑町大字南山名字高塚５－１イオン２Ｆ","grid":[35.359099,136.913215],"machineNum":1,"prefId":23},{"name":"イオン扶桑","address":"愛知県丹羽郡扶桑町大字南山名字高塚５－１玩具売場","grid":[35.359099,136.913215],"machineNum":1,"prefId":23},{"name":"アピタ阿久比","address":"愛知県知多郡阿久比町椋岡徳吉１番地１２　玩具売場","grid":[34.921055,136.920793],"machineNum":1,"prefId":23},{"name":"ユーズランド東浦店","address":"愛知県知多郡東浦町緒川申新田二区６７－８　イオンモール東浦２Ｆ","grid":[34.979563,136.971705],"machineNum":1,"prefId":23},{"name":"モーリーファンタジー東浦","address":"愛知県知多郡東浦町大字緒川字申新田二区６７－８イオン１Ｆ","grid":[34.979563,136.971705],"machineNum":1,"prefId":23},{"name":"イオン東浦","address":"愛知県知多郡東浦町大字緒川字申新田二区６７－８玩具売場","grid":[34.979563,136.971705],"machineNum":1,"prefId":23},{"name":"ピアゴ武豊","address":"愛知県知多郡武豊町西田崎１９番地の１　玩具売場","grid":[34.848004,136.915959],"machineNum":1,"prefId":23},{"name":"イトーヨーカドー知多","address":"愛知県知多市新知東町１－１０－１玩具売場","grid":[34.981428,136.866987],"machineNum":1,"prefId":23},{"name":"アピタ知立","address":"愛知県知立市長篠町大山18-1","grid":[34.998278,137.053275],"machineNum":1,"prefId":23},{"name":"セガワールド知立","address":"愛知県知立市長篠町大山１８－１ギャラリエアピタ１階","grid":[34.998208,137.053627],"machineNum":1,"prefId":23},{"name":"アピタ知立","address":"愛知県知立市長篠町大山１８番地の１　玩具売場","grid":[34.997795,137.052752],"machineNum":1,"prefId":23},{"name":"ピアゴ知立","address":"愛知県知立市南新地1番地2-6","grid":[35.002475,137.038311],"machineNum":1,"prefId":23},{"name":"アピタ長久手","address":"愛知県長久手市戸田谷９０１番地１　玩具売場","grid":[35.172532,137.038539],"machineNum":1,"prefId":23},{"name":"モーリーファンタジー長久手","address":"愛知県長久手市長久手中央イオン３Ｆ","grid":[35.184083,137.048722],"machineNum":1,"prefId":23},{"name":"ヨシヅヤ津島本店","address":"愛知県津島市大字津島字北新開３５１番地","grid":[35.1746,136.746414],"machineNum":1,"prefId":23},{"name":"レイク・リビン津島本店","address":"愛知県津島市大字津島字北新開３５１番地　玩具売場","grid":[35.174478,136.746413],"machineNum":1,"prefId":23},{"name":"アミュージアム津島","address":"愛知県津島市大字津島北新開３５１番地　ヨシズヤ津島本店　別館２階","grid":[35.174478,136.746413],"machineNum":1,"prefId":23},{"name":"ファミリーランドドリーム","address":"愛知県田原市田原町南新地７６－１","grid":[34.672355,137.274535],"machineNum":1,"prefId":23},{"name":"アピタ東海荒尾","address":"愛知県東海市荒尾町山王前２０番地玩具売場","grid":[35.038112,136.905869],"machineNum":1,"prefId":23},{"name":"ピアゴ太田川","address":"愛知県東海市大田町下浜田１０２-１　玩具売場","grid":[35.022008,136.892996],"machineNum":1,"prefId":23},{"name":"ピアゴ香久山","address":"愛知県日進市香久山五丁目１８０１番地　玩具売場","grid":[35.141954,137.027096],"machineNum":1,"prefId":23},{"name":"セガプライムツリー赤池","address":"愛知県日進市赤池町箕ノ手１番（３１３区画）（仮）","grid":[35.119015,137.020377],"machineNum":1,"prefId":23},{"name":"ビックトイズプライムツリー赤池","address":"愛知県日進市赤池町箕ノ手１番３Ｆ","grid":[35.119015,137.020377],"machineNum":1,"prefId":23},{"name":"ピアゴ吉良","address":"愛知県幡豆郡吉良町吉田字天笠桂１６番地３　玩具売場","grid":[34.801061,137.063291],"machineNum":1,"prefId":23},{"name":"サムソン半田","address":"愛知県半田市乙川吉野町９番地パワードーム半田Ｂ１Ｆ","grid":[34.905916,136.936823],"machineNum":1,"prefId":23},{"name":"ジョーシン半田","address":"愛知県半田市浜田町３－８－１","grid":[34.903101,136.942721],"machineNum":1,"prefId":23},{"name":"モーリーファンタジー半田","address":"愛知県半田市有楽町８－７イオン２Ｆ","grid":[34.869221,136.917662],"machineNum":1,"prefId":23},{"name":"ピアゴ印場","address":"愛知県尾張旭市庄中町1-5-1","grid":[35.206284,137.01323],"machineNum":1,"prefId":23},{"name":"イトーヨーカドー尾張旭","address":"愛知県尾張旭市南原山町石原１１６－４玩具売場","grid":[35.213515,137.051512],"machineNum":1,"prefId":23},{"name":"ピアゴ碧南","address":"愛知県碧南市天王町2丁目1番地　玩具売場","grid":[34.888243,136.988229],"machineNum":1,"prefId":23},{"name":"ピアゴ碧南東","address":"愛知県碧南市東浦町６丁目１７番地　玩具売場","grid":[34.875766,136.999226],"machineNum":1,"prefId":23},{"name":"ＭＥＧＡドン・キホーテ豊橋","address":"愛知県豊橋市藤沢町１４１","grid":[34.744383,137.371002],"machineNum":1,"prefId":23},{"name":"タイトーステーション豊橋","address":"愛知県豊橋市藤沢町１４１－１　１Ｆ","grid":[34.744757,137.372109],"machineNum":1,"prefId":23},{"name":"ピアゴ大清水","address":"愛知県豊橋市南大清水町字富士見700-1","grid":[34.686488,137.361708],"machineNum":1,"prefId":23},{"name":"モーリーファンタジー豊橋南","address":"愛知県豊橋市野依町字落合１－１２イオン２Ｆ","grid":[34.709729,137.388008],"machineNum":1,"prefId":23},{"name":"イオン豊橋南","address":"愛知県豊橋市野依町字落合１－１２玩具売場","grid":[34.709847,137.388092],"machineNum":1,"prefId":23},{"name":"豊川メトロポリス","address":"愛知県豊川市下長山町上アライ１４－１","grid":[34.802452,137.384578],"machineNum":1,"prefId":23},{"name":"モーリーファンタジー豊川","address":"愛知県豊川市開運通り２－３１　イオン２Ｆ","grid":[34.826752,137.375777],"machineNum":1,"prefId":23},{"name":"ＭＥＧＡドン・キホーテＵＮＹ国府","address":"愛知県豊川市国府町桜田１０３","grid":[34.838807,137.326387],"machineNum":1,"prefId":23},{"name":"モーリーファンタジー豊田","address":"愛知県豊田市広路１－１イオンスタイル豊田内３Ｆ","grid":[35.078353,137.160279],"machineNum":1,"prefId":23},{"name":"トヨタ生協本店","address":"愛知県豊田市山之手８－９２","grid":[35.052535,137.145136],"machineNum":1,"prefId":23},{"name":"アピタ豊田元町","address":"愛知県豊田市土橋町２丁目６５番地　玩具売場","grid":[35.062543,137.131176],"machineNum":1,"prefId":23},{"name":"プラサカプコン豊田","address":"愛知県豊田市東山町１－５－１　グリーンシティ３Ｆ","grid":[35.087756,137.184393],"machineNum":1,"prefId":23},{"name":"イオン高橋","address":"愛知県豊田市東山町１－５－１玩具売場","grid":[35.228537,137.064385],"machineNum":1,"prefId":23},{"name":"ピアゴ豊明","address":"愛知県豊明市三崎町井ノ花５番地の１　玩具売場","grid":[35.051196,137.007318],"machineNum":1,"prefId":23},{"name":"レイク・リビン師勝店","address":"愛知県北名古屋市師勝町大字鹿田１９２９玩具売場","grid":[35.252966,136.876525],"machineNum":1,"prefId":23},{"name":"アピタ東海通","address":"愛知県名古屋市港区港明１丁目１０番２８号　玩具売場","grid":[35.110461,136.886562],"machineNum":1,"prefId":23},{"name":"モーリーファンタジー名古屋茶屋","address":"愛知県名古屋市港区西茶屋２丁目１１イオン３Ｆ","grid":[35.1027,136.825062],"machineNum":1,"prefId":23},{"name":"楽市楽座イオンモール名古屋茶屋","address":"愛知県名古屋市港区西茶屋２丁目１１イオンモール名古屋茶屋店３階","grid":[35.1027,136.825062],"machineNum":1,"prefId":23},{"name":"サムソンみなと","address":"愛知県名古屋市港区当知２－１５０１ポートウォークみなと２Ｆ","grid":[35.109428,136.84778],"machineNum":1,"prefId":23},{"name":"アピタ港","address":"愛知県名古屋市港区当知二丁目1501番地　玩具売場","grid":[35.109428,136.84778],"machineNum":1,"prefId":23},{"name":"モーリーファンタジー名古屋みなと","address":"愛知県名古屋市港区品川町２－１－６イオン３Ｆ","grid":[35.103333,136.862573],"machineNum":1,"prefId":23},{"name":"イオン名古屋みなと","address":"愛知県名古屋市港区品川町２－１－６玩具売場","grid":[35.103333,136.862573],"machineNum":1,"prefId":23},{"name":"モーリーファンタジー守山","address":"愛知県名古屋市守山区笹ヶ根３－１２２８イオン2階","grid":[35.234952,137.003866],"machineNum":1,"prefId":23},{"name":"ＮＩＣＯＰＡアピタ新守山","address":"愛知県名古屋市守山区新守山２８３０アピタ新守山２Ｆ","grid":[35.2055,136.948266],"machineNum":1,"prefId":23},{"name":"ピアゴ西城","address":"愛知県名古屋市守山区村合町１７５番地","grid":[35.207795,136.963677],"machineNum":1,"prefId":23},{"name":"セガイオンタウン名西","address":"愛知県名古屋市西区香呑町六丁目４９－１","grid":[35.203845,136.892669],"machineNum":1,"prefId":23},{"name":"モーリーファンタジーワンダーシティ","address":"愛知県名古屋市西区二方町４０イオン３Ｆ","grid":[35.224681,136.880943],"machineNum":1,"prefId":23},{"name":"イオンワンダーシティ","address":"愛知県名古屋市西区二方町４０玩具売場","grid":[35.224681,136.880943],"machineNum":1,"prefId":23},{"name":"セガワールド上小田井ｍｏｚｏワンダーシティ","address":"愛知県名古屋市西区二方町４０番地「ｍｏｚｏ　ワンダーシティ」４Ｆ","grid":[35.225419,136.884347],"machineNum":1,"prefId":23},{"name":"ヨシヅヤ名西","address":"愛知県名古屋市西区名西２丁目３３－８玩具売場","grid":[35.190071,136.878501],"machineNum":1,"prefId":23},{"name":"カラフルパークイオン千種店","address":"愛知県名古屋市千種区千種２－１６－１３イオン千種ＳＣ２Ｆ","grid":[35.161691,136.923811],"machineNum":1,"prefId":23},{"name":"サムソン千代田橋","address":"愛知県名古屋市千種区千代田橋２－１－１アピタ千代田橋３Ｆ","grid":[35.187352,136.969454],"machineNum":1,"prefId":23},{"name":"アピタ千代田橋","address":"愛知県名古屋市千種区千代田橋2丁目1番1号","grid":[35.187352,136.969454],"machineNum":1,"prefId":23},{"name":"タイトーステーション大須店","address":"愛知県名古屋市中区大須３－２０－７","grid":[35.15968,136.904802],"machineNum":1,"prefId":23},{"name":"タイトーステーションフェドラ大須","address":"愛知県名古屋市中区大須３－３０－３１萬松寺駐車場ビル１階・２階","grid":[35.160324,136.90405],"machineNum":1,"prefId":23},{"name":"ヨシヅヤ太平通り","address":"愛知県名古屋市中川区宮脇町２丁目１１番地玩具売場","grid":[35.135134,136.868098],"machineNum":1,"prefId":23},{"name":"中川メトロポリス","address":"愛知県名古屋市中川区江松三丁目１１０番地","grid":[35.125372,136.823828],"machineNum":1,"prefId":23},{"name":"トイザらス名古屋中川","address":"愛知県名古屋市中川区新家１－２４２１　アズパーク２Ｆ","grid":[35.157119,136.805373],"machineNum":1,"prefId":23},{"name":"ピアゴ中村","address":"愛知県名古屋市中村区大門町２７番地　玩具売場","grid":[35.170895,136.865669],"machineNum":1,"prefId":23},{"name":"ビックカメラ名古屋駅西店","address":"愛知県名古屋市中村区椿町６－９　トイズコーナー","grid":[35.170319,136.879397],"machineNum":1,"prefId":23},{"name":"名古屋レジャーランドささしま","address":"愛知県名古屋市中村区平池町４丁目６０番１４号","grid":[35.162623,136.884936],"machineNum":1,"prefId":23},{"name":"ビックカメラ名古屋ＪＲゲートタワー","address":"愛知県名古屋市中村区名駅１－１－３　９階・１０階","grid":[35.172207,136.882618],"machineNum":1,"prefId":23},{"name":"タワーレコード名古屋近鉄パッセ","address":"愛知県名古屋市中村区名駅１－２－２近鉄パッセ９Ｆ","grid":[35.169162,136.88429],"machineNum":1,"prefId":23},{"name":"ヤマダ電機LABI名古屋","address":"愛知県名古屋市中村区名駅１－２－５","grid":[35.168088,136.884574],"machineNum":1,"prefId":23},{"name":"エディオン名古屋本店","address":"愛知県名古屋市中村区名駅南２－４－２２","grid":[35.163867,136.891293],"machineNum":1,"prefId":23},{"name":"ピアゴ植田","address":"愛知県名古屋市天白区元植田１－３０２","grid":[35.139883,136.991836],"machineNum":1,"prefId":23},{"name":"ピアゴ平針","address":"愛知県名古屋市天白区平針二丁目１２０１番地","grid":[35.12363,137.006885],"machineNum":1,"prefId":23},{"name":"イオンナゴヤドーム前","address":"愛知県名古屋市東区矢田南４－１０２－３玩具売場","grid":[35.188883,136.944693],"machineNum":1,"prefId":23},{"name":"モーリーファンタジーナゴヤドーム前","address":"愛知県名古屋市東区矢田南４丁目１０２番地の３イオン３Ｆ","grid":[35.188883,136.944693],"machineNum":1,"prefId":23},{"name":"モーリーファンタジー・ｆ新瑞橋","address":"愛知県名古屋市南区菊住１丁目７－１０イオンモール3階","grid":[35.114643,136.935251],"machineNum":1,"prefId":23},{"name":"ピアゴラフーズコアアラタマ","address":"愛知県名古屋市南区駈丘１－１－３１","grid":[35.097462,136.927098],"machineNum":1,"prefId":23},{"name":"アピタ名古屋南","address":"愛知県名古屋市南区豊田四丁目９番４７号","grid":[35.102808,136.912902],"machineNum":1,"prefId":23},{"name":"アピタ名南","address":"愛知県名古屋市南区豊田四丁目９番４７号　玩具売場","grid":[35.102799,136.913085],"machineNum":1,"prefId":23},{"name":"イオン熱田","address":"愛知県名古屋市熱田区六野１－２－１１玩具売場","grid":[35.137187,136.908907],"machineNum":1,"prefId":23},{"name":"モーリーファンタジー熱田","address":"愛知県名古屋市熱田区六野一丁目２番１１号イオン２Ｆ","grid":[35.137187,136.908907],"machineNum":1,"prefId":23},{"name":"モーリーファンタジー上飯田","address":"愛知県名古屋市北区織部町１ダイエー上飯田店３Ｆ","grid":[35.201084,136.928788],"machineNum":1,"prefId":23},{"name":"イオン上飯田","address":"愛知県名古屋市北区織部町１玩具売場","grid":[35.201404,136.928579],"machineNum":1,"prefId":23},{"name":"アピタ名北","address":"愛知県名古屋市北区辻町９丁目１番地　玩具売場","grid":[35.209543,136.922789],"machineNum":1,"prefId":23},{"name":"モーリーファンタジーメイトピア","address":"愛知県名古屋市名東区高間町５０１－１ダイエーメイトピア店２Ｆ","grid":[35.159955,137.003331],"machineNum":1,"prefId":23},{"name":"モーリーファンタジー名古屋東","address":"愛知県名古屋市名東区猪子石原２－１７０１イオン１Ｆ","grid":[35.195344,136.99382],"machineNum":1,"prefId":23},{"name":"にこぱなるぱーく店","address":"愛知県名古屋市緑区浦里三丁目２３２　なるぱーく２Ｆ","grid":[35.084437,136.946362],"machineNum":1,"prefId":23},{"name":"ピアゴ清水山","address":"愛知県名古屋市緑区清水山1-501","grid":[35.051726,136.961454],"machineNum":1,"prefId":23},{"name":"モーリーファンタジー大高","address":"愛知県名古屋市緑区大高町字奥平子１－１イオン３Ｆ","grid":[35.066946,136.934378],"machineNum":1,"prefId":23},{"name":"イオン大高","address":"愛知県名古屋市緑区大高町字奥平子１－１玩具売場","grid":[35.066946,136.934378],"machineNum":1,"prefId":23},{"name":"アピタ緑","address":"愛知県名古屋市緑区徳重二丁目２０１番地　玩具売場","grid":[35.089981,137.003225],"machineNum":1,"prefId":23},{"name":"ＢＲＥＭＥＮＴＯＷＮ鳴海","address":"愛知県名古屋市緑区鳴海町字伝冶山３－９アピタ鳴海店２Ｆ","grid":[35.084472,136.953797],"machineNum":1,"prefId":23},{"name":"プラサカプコン徳重","address":"愛知県名古屋市緑区鳴海町字徳重１８番地４４ヒルズウォーク徳重ガーデンズガーデンズ棟２Ｆ","grid":[35.094439,136.999311],"machineNum":1,"prefId":23},{"name":"カラフルパークイオン有松店","address":"愛知県名古屋市緑区鳴海町字有松裏２００番地イオンタウン有松１Ｆ","grid":[35.067941,136.972161],"machineNum":1,"prefId":23},{"name":"アピタ鳴海","address":"愛知県名古屋市緑区鳴海町伝治山３番地９　玩具売場","grid":[35.094108,136.95923],"machineNum":1,"prefId":23},{"name":"タイトーステーション弥富","address":"愛知県弥富市五明蒲原１３７１－４","grid":[35.114094,136.716577],"machineNum":1,"prefId":23},{"name":"ハローズいなべ","address":"三重県いなべ市大安町石榑東１９２８－１スーパーセンターオークワいなべ店","grid":[35.106406,136.526656],"machineNum":1,"prefId":24},{"name":"モーリーファンタジー伊賀上野","address":"三重県伊賀市上野茅町２５１９イオン２Ｆ","grid":[34.760018,136.136522],"machineNum":1,"prefId":24},{"name":"モーリーファンタジー伊勢ララパーク","address":"三重県伊勢市小木町曽弥５３８イオンタウン伊勢ララパーク２Ｆ","grid":[34.50522,136.724884],"machineNum":1,"prefId":24},{"name":"ＮＩＣＯＰＡイオン伊勢店","address":"三重県伊勢市楠部町乙１６０　イオン伊勢店","grid":[34.475014,136.735761],"machineNum":1,"prefId":24},{"name":"イオン伊勢","address":"三重県伊勢市楠部町乙１６０－２玩具売場","grid":[34.475014,136.735761],"machineNum":1,"prefId":24},{"name":"モーリーファンタジー東員","address":"三重県員弁郡東員町長深字築田５１０番地１イオン３Ｆ","grid":[35.060091,136.578877],"machineNum":1,"prefId":24},{"name":"ピアゴ東員","address":"三重県員弁郡東員町六杷野新田字村西７８５番地６","grid":[35.082342,136.59314],"machineNum":1,"prefId":24},{"name":"ＰＡＬＯ桑名","address":"三重県桑名市新西方１丁目２２番地","grid":[35.072291,136.662491],"machineNum":1,"prefId":24},{"name":"ＮＯＳＩＣＡ桑名","address":"三重県桑名市新西方１丁目２２番地イオンモール桑名２番街２階","grid":[35.072291,136.662491],"machineNum":1,"prefId":24},{"name":"モーリーファンタジー桑名","address":"三重県桑名市新西方１丁目２２番地イオン桑名ＳＣ１番街３階","grid":[35.072291,136.662491],"machineNum":1,"prefId":24},{"name":"アピタ桑名","address":"三重県桑名市中央町三丁目２１番地　玩具売場","grid":[35.064066,136.687928],"machineNum":1,"prefId":24},{"name":"ピアゴ菰野","address":"三重県三重郡菰野町竹成３９９８－７","grid":[35.039162,136.52905],"machineNum":1,"prefId":24},{"name":"ピアゴ阿倉川","address":"三重県四日市市阿倉川町１５番２７号　玩具売場","grid":[34.985779,136.628231],"machineNum":1,"prefId":24},{"name":"四日市アミューズメントパーク","address":"三重県四日市市安島１－３－３１　ララスクエア５Ｆ","grid":[34.968303,136.616578],"machineNum":1,"prefId":24},{"name":"プレビララスクエア四日市","address":"三重県四日市市安島１－３－３１ララスクエア５Ｆ","grid":[34.968303,136.616578],"machineNum":1,"prefId":24},{"name":"アピタ四日市","address":"三重県四日市市安島１丁目３番３１号玩具売場","grid":[34.968303,136.616578],"machineNum":1,"prefId":24},{"name":"仔熊近鉄百貨店四日市","address":"三重県四日市市諏訪栄町７－３４近鉄百貨店四日市店６階玩具売り場","grid":[34.967118,136.618679],"machineNum":1,"prefId":24},{"name":"ＹＡＺワールド四日市","address":"三重県四日市市泊小柳４－３－４","grid":[34.937944,136.604187],"machineNum":1,"prefId":24},{"name":"モーリーファンタジー四日市尾平","address":"三重県四日市市尾平町字天王川原１８０５イオン３Ｆ","grid":[34.980381,136.586107],"machineNum":1,"prefId":24},{"name":"イオン四日市尾平","address":"三重県四日市市尾平町字天王川原１８０５玩具売場","grid":[34.977233,136.591719],"machineNum":1,"prefId":24},{"name":"イオン四日市北","address":"三重県四日市市富州原町２－４０","grid":[35.007669,136.658179],"machineNum":1,"prefId":24},{"name":"ＮＩＣＯＰＡ四日市北店","address":"三重県四日市市富州原町２－４０　イオン四日市北店","grid":[35.007668,136.658179],"machineNum":1,"prefId":24},{"name":"モーリーファンタジー四日市北","address":"三重県四日市市富州原町２－４０イオン２Ｆ","grid":[35.007668,136.658179],"machineNum":1,"prefId":24},{"name":"モーリーファンタジー阿児","address":"三重県志摩市阿児町鵜方３２１５イオン２Ｆ","grid":[34.323467,136.828474],"machineNum":1,"prefId":24},{"name":"ピアゴ嬉野店","address":"三重県松阪市嬉野中川新町４丁目２０５番地　玩具売場","grid":[34.632352,136.479689],"machineNum":1,"prefId":24},{"name":"アピタ松阪三雲","address":"三重県松阪市市場庄町１２６６番地の１　玩具売場","grid":[34.604084,136.520414],"machineNum":1,"prefId":24},{"name":"モーリーファンタジー松阪","address":"三重県松阪市船江町１３９２－２７まーむ３Ｆ","grid":[34.593673,136.522734],"machineNum":1,"prefId":24},{"name":"ＣＬＵＢＳＥＧＡアドバンスモール松阪","address":"三重県松阪市田村町２３５－１","grid":[34.555594,136.5119],"machineNum":1,"prefId":24},{"name":"アピタ伊賀上野","address":"三重県上野市服部町１７８８番地　玩具売場","grid":[34.7785,136.137574],"machineNum":1,"prefId":24},{"name":"タイトーステーションイオンモール明和","address":"三重県多気郡明和町中村１２２３イオンモール明和２Ｆ","grid":[34.581819,136.613966],"machineNum":1,"prefId":24},{"name":"イオン明和","address":"三重県多気郡明和町中村１２２３玩具売場","grid":[34.581232,136.615339],"machineNum":1,"prefId":24},{"name":"モーリーファンタジー明和","address":"三重県多気郡明和町中村長波賀１２２３番地イオン２Ｆ","grid":[34.547569,136.623191],"machineNum":1,"prefId":24},{"name":"モーリーファンタジー津城山","address":"三重県津市久居小野辺町１１３０－７イオンタウン２Ｆ","grid":[34.679394,136.501372],"machineNum":1,"prefId":24},{"name":"セガワールド久居","address":"三重県津市久居明神町字風早２５３４－１","grid":[34.68411,136.466832],"machineNum":1,"prefId":24},{"name":"ＮＩＣＯＰＡイオン津店","address":"三重県津市桜橋３－４４６　イオン津店　２Ｆ","grid":[34.736591,136.519451],"machineNum":1,"prefId":24},{"name":"アピタ名張","address":"三重県名張市下比奈知黒田３１００番地の１玩具売場","grid":[34.624566,136.13091],"machineNum":1,"prefId":24},{"name":"モーリーファンタジー鈴鹿","address":"三重県鈴鹿市算所２－５－１","grid":[34.873525,136.546376],"machineNum":1,"prefId":24},{"name":"モーリーファンタジーイオン鈴鹿","address":"三重県鈴鹿市庄野羽山４－１－２イオン２Ｆ","grid":[34.871628,136.531569],"machineNum":1,"prefId":24},{"name":"イオン鈴鹿","address":"三重県鈴鹿市庄野羽山４－１－２玩具売場","grid":[34.871628,136.531569],"machineNum":1,"prefId":24},{"name":"アピナ鈴鹿店","address":"三重県鈴鹿市庄野羽山４－２０－１　イオンタウン鈴鹿２階","grid":[34.872131,136.527105],"machineNum":1,"prefId":24},{"name":"アピタ鈴鹿","address":"三重県鈴鹿市南玉垣町３６２８　玩具売場","grid":[34.853198,136.582163],"machineNum":1,"prefId":24},{"name":"ハローズガーデン鈴鹿","address":"三重県鈴鹿市南玉垣町３６２８アピタ鈴鹿店２Ｆ","grid":[34.853198,136.582163],"machineNum":1,"prefId":24},{"name":"イオン白子","address":"三重県鈴鹿市白子駅前９－２０","grid":[34.836439,136.59138],"machineNum":1,"prefId":24},{"name":"ドナリアコット サンズ店","address":"三重県鈴鹿市白子駅前９－２０サンズ店内３Ｆ","grid":[34.836297,136.591389],"machineNum":1,"prefId":24},{"name":"アルプラザ近江八幡","address":"滋賀県近江八幡市桜宮町２０２－１","grid":[35.130395,136.096081],"machineNum":1,"prefId":25},{"name":"モーリーファンタジーイオン近江八幡","address":"滋賀県近江八幡市鷹飼町南３丁目７番","grid":[35.121641,136.103078],"machineNum":1,"prefId":25},{"name":"タイトーＦステーションイオン近江八幡店","address":"滋賀県近江八幡市鷹飼町南３丁目７番地イオン近江八幡２番街１階","grid":[35.121641,136.103078],"machineNum":1,"prefId":25},{"name":"アル・プラザ栗東","address":"滋賀県栗東市綣２－３－２２","grid":[35.036601,135.981722],"machineNum":1,"prefId":25},{"name":"セガワールド甲西","address":"滋賀県湖南市夏見二ツ橋３５６－１","grid":[34.994884,136.097188],"machineNum":1,"prefId":25},{"name":"アミパライオンタウン湖南ゲームコーナー","address":"滋賀県湖南市岩根4580　ｲｵﾝﾀｳﾝ湖南","grid":[34.994758,136.108096],"machineNum":1,"prefId":25},{"name":"アル・プラザ水口","address":"滋賀県甲賀市水口町本綾野５６６－１　玩具売場","grid":[34.976001,136.172694],"machineNum":1,"prefId":25},{"name":"ＧａｍｅＦｉｅｌｄピエリ守山","address":"滋賀県守山市滋賀県守山市今浜町２６２０－５","grid":[35.123048,135.945579],"machineNum":1,"prefId":25},{"name":"アルプラザ守山","address":"滋賀県守山市播磨田町１８５の１","grid":[35.066485,135.994817],"machineNum":1,"prefId":25},{"name":"モーリーファンタジー草津","address":"滋賀県草津市新浜町３００イオン３Ｆ","grid":[34.998466,135.910824],"machineNum":1,"prefId":25},{"name":"ゲームランド草津","address":"滋賀県草津市新浜町３００イオンモール草津３Ｆ","grid":[34.998466,135.910824],"machineNum":1,"prefId":25},{"name":"イオン草津","address":"滋賀県草津市新浜町３００玩具売場","grid":[34.998466,135.910824],"machineNum":1,"prefId":25},{"name":"アル・プラザ草津","address":"滋賀県草津市西渋川１－２３－３０　玩具売場","grid":[35.025394,135.958462],"machineNum":1,"prefId":25},{"name":"セガワールド草津","address":"滋賀県草津市西渋川一丁目２３番２３号　ＳＡＲＡ新棟２Ｆ","grid":[35.024392,135.959333],"machineNum":1,"prefId":25},{"name":"滋賀レジャーランド大津","address":"滋賀県大津市におの浜３－１－４３","grid":[35.003943,135.883433],"machineNum":1,"prefId":25},{"name":"モーリーファンタジー大津一里山","address":"滋賀県大津市一里山7-1-1　フォレオ大津一里山2F","grid":[34.974207,135.933241],"machineNum":1,"prefId":25},{"name":"アル・プラザ瀬田","address":"滋賀県大津市月輪１－３－８","grid":[34.98729,135.929294],"machineNum":1,"prefId":25},{"name":"ＴＨＥ３ＲＤＰＬＡＮＥＴ大津","address":"滋賀県大津市打出浜１４－３０（仮）打出浜商業施設６F","grid":[35.004456,135.879246],"machineNum":1,"prefId":25},{"name":"モーリーファンタジー長浜","address":"滋賀県長浜市山階町２７１－１イオン２Ｆ","grid":[35.397037,136.289442],"machineNum":1,"prefId":25},{"name":"アル・プラザ長浜","address":"滋賀県長浜市小堀町４５０","grid":[35.383596,136.285901],"machineNum":1,"prefId":25},{"name":"アル・プラザ八日市","address":"滋賀県東近江市八日市浜野町３－１","grid":[35.114591,136.197048],"machineNum":1,"prefId":25},{"name":"ビバシティ平和堂","address":"滋賀県彦根市竹ケ鼻町４３－１　玩具売場","grid":[35.243842,136.251487],"machineNum":1,"prefId":25},{"name":"モーリーファンタジーベイシア彦根","address":"滋賀県彦根市馬場２－１－１ １Ｆ","grid":[35.279575,136.242726],"machineNum":1,"prefId":25},{"name":"アルプラザ野洲","address":"滋賀県野洲市小篠原１０００番地","grid":[35.064758,136.026689],"machineNum":1,"prefId":25},{"name":"モーリーファンタジー綾部","address":"京都府綾部市綾中町花ノ木３０バザールタウン綾部店２Ｆ","grid":[35.302386,135.257791],"machineNum":1,"prefId":26},{"name":"ジョーシン宇治","address":"京都府宇治市宇治樋ノ尻７９－１ホームセンターコーナン２階","grid":[34.892601,135.794381],"machineNum":1,"prefId":26},{"name":"アル・プラザ亀岡","address":"京都府亀岡市篠町野条上又１１－１　玩具売場","grid":[35.001422,135.6026],"machineNum":1,"prefId":26},{"name":"ジョーシン亀岡","address":"京都府亀岡市余部町樋又８０","grid":[35.015726,135.566865],"machineNum":1,"prefId":26},{"name":"モーリーファンタジー久御山","address":"京都府久世郡久御山町森南大内１５６－１イオン２Ｆ","grid":[34.893247,135.74611],"machineNum":1,"prefId":26},{"name":"エール峰山","address":"京都府京丹後市峰山町新町１６０６－１","grid":[35.608364,135.082837],"machineNum":1,"prefId":26},{"name":"アル・プラザ京田辺","address":"京都府京田辺市田辺中央５－２－１　玩具売場","grid":[34.822018,135.768938],"machineNum":1,"prefId":26},{"name":"プレイランド京都","address":"京都府京都市右京区山ノ内池尻町１－１京都ファミリー３Ｆ","grid":[35.004535,135.720963],"machineNum":1,"prefId":26},{"name":"イオン京都五条","address":"京都府京都市右京区西院追分町２５－１　イオン２Ｆ玩具売場","grid":[34.997548,135.727093],"machineNum":1,"prefId":26},{"name":"モーリーファンタジー京都五条","address":"京都府京都市右京区西院追分町２５－１イオン２Ｆ","grid":[34.997548,135.727093],"machineNum":1,"prefId":26},{"name":"プラサカプコン京都","address":"京都府京都市右京区西院追分町２５－１イオンモール京都五条３Ｆ","grid":[34.997548,135.727093],"machineNum":1,"prefId":26},{"name":"ライフ太秦","address":"京都府京都市右京区太秦安井池田町６　玩具売場","grid":[35.015079,135.716718],"machineNum":1,"prefId":26},{"name":"ヨドバシカメラマルチメディア京都","address":"京都府京都市下京区烏丸通り七条下ル東塩小路町５９０－２","grid":[34.988352,135.758986],"machineNum":1,"prefId":26},{"name":"大丸京都店","address":"京都府京都市下京区四条通高倉西入立売西町７９番地玩具売り場","grid":[35.003913,135.762142],"machineNum":1,"prefId":26},{"name":"ビックカメラＪＲ京都駅","address":"京都府京都市下京区東塩小路町９２７　トイズコーナー","grid":[34.985873,135.755638],"machineNum":1,"prefId":26},{"name":"イズミヤ高野","address":"京都府京都市左京区高野東開町１６番地","grid":[35.041117,135.781166],"machineNum":1,"prefId":26},{"name":"ゲームパニック京都","address":"京都府京都市中京区桜之町４１５番京都松竹座ビル","grid":[35.007911,135.767712],"machineNum":1,"prefId":26},{"name":"ライフ二条駅前","address":"京都府京都市中京区西ノ京星池町２４８","grid":[35.013168,135.742301],"machineNum":1,"prefId":26},{"name":"ＴＨＥ３ＲＤＰＬＡＮＥＴＢｉＶｉ京都二条","address":"京都府京都市中京区西ノ京栂尾町１－６","grid":[35.013924,135.742115],"machineNum":1,"prefId":26},{"name":"モーリーファンタジー洛南","address":"京都府京都市南区吉祥院御池町３１イオン２Ｆ","grid":[34.975538,135.736458],"machineNum":1,"prefId":26},{"name":"イオン洛南","address":"京都府京都市南区吉祥院御池町３１玩具売場","grid":[34.975426,135.736401],"machineNum":1,"prefId":26},{"name":"モーリーファンタジー京都桂川","address":"京都府京都市南区久世高田町３７６番　イオン３階","grid":[34.963871,135.707613],"machineNum":1,"prefId":26},{"name":"楽市楽座イオンモール京都桂川","address":"京都府京都市南区久世高田町３７６番１イオンモール京都桂川店３階","grid":[34.963871,135.707613],"machineNum":1,"prefId":26},{"name":"モーリーファンタジー桂南","address":"京都府京都市南区久世上久世町４８５","grid":[34.967453,135.71717],"machineNum":1,"prefId":26},{"name":"イオン伏見","address":"京都府京都市伏見区御堂前町６１６玩具売場","grid":[34.932336,135.762582],"machineNum":1,"prefId":26},{"name":"アル・プラザ醍醐","address":"京都府京都市伏見区醍醐高畑町１－３７","grid":[34.951134,135.811215],"machineNum":1,"prefId":26},{"name":"セガワールド六地蔵","address":"京都府京都市伏見区桃山町山ノ下３２　京都ショッピングセンタービルＡＭ棟２Ｆ","grid":[34.936717,135.793968],"machineNum":1,"prefId":26},{"name":"北大路ビブレ４Ｆゲームコーナー","address":"京都府京都市北区小山北上総町４９－１　北大路ビブレ４Ｆ","grid":[35.045159,135.758466],"machineNum":1,"prefId":26},{"name":"アル・プラザ城陽","address":"京都府城陽市富野荒見田１１２　玩具売場","grid":[34.842472,135.786816],"machineNum":1,"prefId":26},{"name":"アピタ精華台","address":"京都府相楽郡精華町精華台９丁目２番地４玩具売場","grid":[34.746607,135.770217],"machineNum":1,"prefId":26},{"name":"イズミヤ長岡","address":"京都府長岡京市開田４丁目７番１号","grid":[34.922807,135.692603],"machineNum":1,"prefId":26},{"name":"イズミヤ八幡","address":"京都府八幡市八幡一ノ坪２３－１　玩具売場","grid":[34.861129,135.712727],"machineNum":1,"prefId":26},{"name":"エール東舞鶴","address":"京都府舞鶴市南浜町２７番地５","grid":[35.466648,135.395507],"machineNum":1,"prefId":26},{"name":"モーリーファンタジー福知山","address":"京都府福知山市岩井７９－８イオン２Ｆ","grid":[35.317015,135.100954],"machineNum":1,"prefId":26},{"name":"イオン福知山","address":"京都府福知山市岩井７９－８玩具売場","grid":[35.317015,135.100954],"machineNum":1,"prefId":26},{"name":"アミュージアム木津川店","address":"京都府木津川市州見台１丁目１番地１－１　ガーデンモール木津川２","grid":[34.719905,135.817093],"machineNum":1,"prefId":26},{"name":"アルプラザ木津","address":"京都府木津川市相楽城西１５番地","grid":[34.738616,135.791947],"machineNum":1,"prefId":26},{"name":"イオン高の原","address":"京都府木津川市相楽台１－１－１","grid":[34.725257,135.790762],"machineNum":1,"prefId":26},{"name":"モーリーファンタジー高の原","address":"京都府木津川市相楽台１－１－１","grid":[34.725257,135.790762],"machineNum":1,"prefId":26},{"name":"セガ あべのキューズモール","address":"大阪府阿倍野区阿倍野筋1-6-1キューズモール3F","grid":[34.644773,135.511589],"machineNum":1,"prefId":27},{"name":"イオン茨木","address":"大阪府茨木市松ヶ本町８－３０－３玩具売場","grid":[34.810783,135.5584],"machineNum":1,"prefId":27},{"name":"モーリーファンタジー茨木","address":"大阪府茨木市松ヶ本町８－３０－５　イオンＳＣ４Ｆ","grid":[34.810014,135.558083],"machineNum":1,"prefId":27},{"name":"アル・プラザ茨木","address":"大阪府茨木市上郡２－１２－８　玩具売場","grid":[34.838178,135.555834],"machineNum":1,"prefId":27},{"name":"イオン新茨木","address":"大阪府茨木市中津町１８－１","grid":[34.815239,135.579903],"machineNum":1,"prefId":27},{"name":"モーリーファンタジー貝塚","address":"大阪府貝塚市地蔵堂７４－２イオン２Ｆ","grid":[34.438521,135.358554],"machineNum":1,"prefId":27},{"name":"ジョーシン岸和田","address":"大阪府岸和田市作才町１－３－１２","grid":[34.4525,135.385701],"machineNum":1,"prefId":27},{"name":"宝島岸和田","address":"大阪府岸和田市春木若松町２１－１ラパーク岸和田店２Ｆ","grid":[34.47959,135.392077],"machineNum":1,"prefId":27},{"name":"モーリーファンタジー東岸和田","address":"大阪府岸和田市土生町２－３２－７　　イオン２Ｆ","grid":[34.44743,135.381481],"machineNum":1,"prefId":27},{"name":"わくわくアミーゴ河内長野","address":"大阪府河内長野市本町２４－１　ノバティながの北館４F","grid":[34.451495,135.572311],"machineNum":1,"prefId":27},{"name":"イズミヤ交野","address":"大阪府交野市私部西１丁目３３－２０","grid":[34.785768,135.674563],"machineNum":1,"prefId":27},{"name":"アル・プラザ高槻","address":"大阪府高槻市芥川町１－２Ｃ－２０１　玩具売場","grid":[34.852255,135.616655],"machineNum":1,"prefId":27},{"name":"モーリーファンタジー摂津富田","address":"大阪府高槻市大畑町１３－１　ダイエー摂津富田店２Ｆ","grid":[34.837633,135.589347],"machineNum":1,"prefId":27},{"name":"モーリーファンタジー高槻","address":"大阪府高槻市萩之庄３－４７－２イオン３Ｆ","grid":[34.858955,135.644317],"machineNum":1,"prefId":27},{"name":"イオン高槻","address":"大阪府高槻市萩之庄３－４７－２玩具売場","grid":[34.858955,135.644317],"machineNum":1,"prefId":27},{"name":"わくわくアミーゴ尾崎","address":"大阪府阪南市下出１６７－１　オークワわくわくＣＩＴＹ尾　崎店２Ｆ","grid":[34.362014,135.244695],"machineNum":1,"prefId":27},{"name":"堺タカシマヤ","address":"大阪府堺市堺区三国ヶ丘御幸通５９番地７階玩具売場","grid":[34.576506,135.484763],"machineNum":1,"prefId":27},{"name":"ＳＯＹＵＧＡＭＥＦＩＥＬＤ堺鉄砲町","address":"大阪府堺市堺区鉄砲町１番地　イオンモール堺鉄砲町３Ｆ","grid":[34.594265,135.481363],"machineNum":1,"prefId":27},{"name":"ハローズガーデン津久野","address":"大阪府堺市西区下田町２０－１イトーヨーカドー津久野店２Ｆ","grid":[34.54155,135.46452],"machineNum":1,"prefId":27},{"name":"イトーヨーカドー津久野","address":"大阪府堺市西区下田町２０－１玩具売場","grid":[34.54155,135.46452],"machineNum":1,"prefId":27},{"name":"モーリーファンタジーおおとり","address":"大阪府堺市西区鳳東町７－７３３　　　　　　　　　　おおとりウィングス２Ｆ","grid":[34.532712,135.463437],"machineNum":1,"prefId":27},{"name":"ハローズガーデン鳳","address":"大阪府堺市西区鳳南町３－１９９－１２アリオ鳳店３Ｆ","grid":[34.524502,135.459176],"machineNum":1,"prefId":27},{"name":"イトーヨーカドーアリオ鳳","address":"大阪府堺市西区鳳南町３－１９９－１２玩具売場","grid":[34.524502,135.459176],"machineNum":1,"prefId":27},{"name":"トイザらス泉北ニュータウン","address":"大阪府堺市中区三原台１－１－３　ＪＯＹＰＡＲＫ泉ヶ丘３Ｆ","grid":[34.498515,135.514284],"machineNum":1,"prefId":27},{"name":"宝島泉ヶ丘","address":"大阪府堺市中区三原台１－１－３ジョイパーク泉ヶ丘１Ｆ","grid":[34.498515,135.514284],"machineNum":1,"prefId":27},{"name":"イズミヤ泉北","address":"大阪府堺市中区小阪２７０　玩具売場","grid":[34.521819,135.492787],"machineNum":1,"prefId":27},{"name":"モーリーファンタジー新金岡","address":"大阪府堺市北区新金岡町４－１－１１イオン３Ｆ","grid":[34.566762,135.515014],"machineNum":1,"prefId":27},{"name":"キッズパーク堺","address":"大阪府堺市北区蔵前町１丁７－１５","grid":[34.575387,135.509823],"machineNum":1,"prefId":27},{"name":"モーリーファンタジー堺北花田","address":"大阪府堺市北区東浅香山町４－１－１２イオン２Ｆ","grid":[34.584482,135.514728],"machineNum":1,"prefId":27},{"name":"イオン堺北花田","address":"大阪府堺市北区東浅香山町４丁１－１２玩具売場","grid":[34.584482,135.514728],"machineNum":1,"prefId":27},{"name":"モーリーファンタジー四條畷","address":"大阪府四条畷市砂四丁目3番2号イオンスタイル3F","grid":[34.746375,135.629194],"machineNum":1,"prefId":27},{"name":"楽市楽座イオンモール四條畷","address":"大阪府四條畷市砂４丁目３番２号イオンモール四條畷店３Ｆ３０２８","grid":[34.746375,135.629194],"machineNum":1,"prefId":27},{"name":"イオン大日","address":"大阪府守口市大日東町１－１８玩具売場","grid":[34.749306,135.579848],"machineNum":1,"prefId":27},{"name":"モーリーファンタジー大日","address":"大阪府守口市大日東町１番１８号イオン２Ｆ","grid":[34.749306,135.579848],"machineNum":1,"prefId":27},{"name":"イズミヤ松原","address":"大阪府松原市上田６－４－８余暇　玩具売場","grid":[34.57463,135.561827],"machineNum":1,"prefId":27},{"name":"セガビバモール寝屋川","address":"大阪府寝屋川市寝屋南２丁目２２－２　ビバモール寝屋川　モール棟２Ｆ","grid":[34.766883,135.650732],"machineNum":1,"prefId":27},{"name":"ＹＡＺ寝屋川","address":"大阪府寝屋川市石津中町２５－２６","grid":[34.78029,135.619385],"machineNum":1,"prefId":27},{"name":"フレンドマート東寝屋川","address":"大阪府寝屋川市打上中町９－５","grid":[34.759133,135.65486],"machineNum":1,"prefId":27},{"name":"トイザらス香里園","address":"大阪府寝屋川市日新町５－５　アル・プラザ香里園３Ｆ","grid":[34.783242,135.623312],"machineNum":1,"prefId":27},{"name":"アル・プラザ香里園","address":"大阪府寝屋川市日新町５－５　玩具売場","grid":[34.783138,135.623567],"machineNum":1,"prefId":27},{"name":"トイザらス阪急山田","address":"大阪府吹田市山田西４－１－２","grid":[34.805001,135.515333],"machineNum":1,"prefId":27},{"name":"モーリーファンタジー南千里","address":"大阪府吹田市千里山西６－５６－１イオン４Ｆ","grid":[34.785926,135.50567],"machineNum":1,"prefId":27},{"name":"ＥＮＴＥＲＴＡＩＮＭＥＮＴ　ＦＩＥＬＤ","address":"大阪府吹田市千里万博公園２－１ららぽーとＥＸＰＯＣＩＴＹ３Ｆ","grid":[34.805123,135.535396],"machineNum":1,"prefId":27},{"name":"モーリーファンタジー吹田","address":"大阪府吹田市朝日町２－１０１イオン４Ｆ","grid":[34.762675,135.525854],"machineNum":1,"prefId":27},{"name":"ハローズ中もず","address":"大阪府泉佐野市下瓦屋２－２－７７（ハローズ中もず店分）いこらもーる泉佐野１Ｆ","grid":[34.406893,135.327303],"machineNum":1,"prefId":27},{"name":"宝島　日根野","address":"大阪府泉佐野市日根野２４９６－１　２Ｆ","grid":[34.393734,135.333889],"machineNum":1,"prefId":27},{"name":"ふぇすたらんど泉大津","address":"大阪府泉大津市我孫子２２０-１","grid":[34.492165,135.416273],"machineNum":1,"prefId":27},{"name":"モーリーファンタジーりんくう泉南","address":"大阪府泉南市りんくう南浜３－１イオン２Ｆ","grid":[34.380664,135.267746],"machineNum":1,"prefId":27},{"name":"ＳＯＹＵＧＡＭＥＦＩＥＬＤ泉南","address":"大阪府泉南市りんくう南浜３番１２　イオンモールりんくう泉南２Ｆ","grid":[34.37941,135.266769],"machineNum":1,"prefId":27},{"name":"モーリーファンタジー金剛","address":"大阪府大阪狭山市半田１－３５－１","grid":[34.498269,135.557875],"machineNum":1,"prefId":27},{"name":"Ｆｏｒｋｉｄｓ’こぐまあべの","address":"大阪府大阪市阿倍野区阿倍野筋１－１－４３あべのハルカス近鉄本店　ウイング館　８Ｆ","grid":[34.645952,135.513974],"machineNum":1,"prefId":27},{"name":"セガワールドアポロ","address":"大阪府大阪市阿倍野区阿倍野筋１－５－３１アポロビル３Ｆ","grid":[34.646541,135.511716],"machineNum":1,"prefId":27},{"name":"セガあべのキューズモール","address":"大阪府大阪市阿倍野区阿倍野筋１－６－１　あべのマーケットパーク　キューズモール３階","grid":[34.644773,135.511589],"machineNum":1,"prefId":27},{"name":"イトーヨーカドーあべの","address":"大阪府大阪市阿倍野区阿倍野筋１－６－１玩具売場","grid":[34.644773,135.511589],"machineNum":1,"prefId":27},{"name":"天王子パスカ","address":"大阪府大阪市阿倍野区阿倍野筋２－４－５１","grid":[34.643866,135.512788],"machineNum":1,"prefId":27},{"name":"ライフ関目","address":"大阪府大阪市関目１－５－３","grid":[34.708864,135.546832],"machineNum":1,"prefId":27},{"name":"セガ今福","address":"大阪府大阪市城東区今福東１－９－３４","grid":[34.700979,135.557444],"machineNum":1,"prefId":27},{"name":"ライフ巽","address":"大阪府大阪市生野区巽中１－２２－２　玩具売場","grid":[34.651155,135.554242],"machineNum":1,"prefId":27},{"name":"イオン大阪DC","address":"大阪府大阪市西区千代崎３－１３－１玩具売場","grid":[34.670377,135.477934],"machineNum":1,"prefId":27},{"name":"モーリーファンタジー大阪ドームシティ","address":"大阪府大阪市西区千代崎３丁目１３番１イオン３Ｆ","grid":[34.670377,135.477934],"machineNum":1,"prefId":27},{"name":"楽市楽座イオンモール大阪ドーム","address":"大阪府大阪市西区千代崎３丁目１３番１イオンモール大阪ドームシティ店４階","grid":[34.670377,135.477934],"machineNum":1,"prefId":27},{"name":"ライフ南津守","address":"大阪府大阪市西成区南津守６－１－７５　玩具売場","grid":[34.628055,135.48303],"machineNum":1,"prefId":27},{"name":"ライフ歌島","address":"大阪府大阪市西淀川区歌島２－６－１３","grid":[34.714555,135.463014],"machineNum":1,"prefId":27},{"name":"イズミヤ福町","address":"大阪府大阪市西淀川区福町３－２","grid":[34.700181,135.443627],"machineNum":1,"prefId":27},{"name":"ビックカメラなんば","address":"大阪府大阪市中央区千日前２丁目１０－１　トイズコーナー","grid":[34.666574,135.502636],"machineNum":1,"prefId":27},{"name":"タイトーステーション難波","address":"大阪府大阪市中央区難波千日前１５－１２","grid":[34.663354,135.503188],"machineNum":1,"prefId":27},{"name":"モーリーファンタジー鶴見緑地","address":"大阪府大阪市鶴見区鶴見４丁目１７－１イオン３Ｆ","grid":[34.704395,135.566296],"machineNum":1,"prefId":27},{"name":"仔熊近鉄百貨店上本町","address":"大阪府大阪市天王寺区上本町6-1-55　近鉄百貨店上本町店７Ｆ","grid":[34.665499,135.521044],"machineNum":1,"prefId":27},{"name":"モーリーファンタジー京橋","address":"大阪府大阪市都島区片町２－３－５１　　　　　　ダイエー京橋店４Ｆ","grid":[34.696161,135.532909],"machineNum":1,"prefId":27},{"name":"ＰＡＬＯ京橋","address":"大阪府大阪市都島区片町2-3-51　ダイエー京橋店2・3F","grid":[34.696161,135.532909],"machineNum":1,"prefId":27},{"name":"ライフ毛馬","address":"大阪府大阪市都島区毛馬町２丁目２－８","grid":[34.720868,135.525055],"machineNum":1,"prefId":27},{"name":"ＮＩＣＯＰＡベルファ都島店","address":"大阪府大阪市都島区友渕町２－１３－３４","grid":[34.715659,135.530121],"machineNum":1,"prefId":27},{"name":"ライフ杭全","address":"大阪府大阪市東住吉区杭全５－１１－７　玩具売場","grid":[34.633267,135.537444],"machineNum":1,"prefId":27},{"name":"モーリーファンタジー野田阪神","address":"大阪府大阪市福島区海老江１－１－２３イオン４Ｆ","grid":[34.69539,135.475801],"machineNum":1,"prefId":27},{"name":"イオン野田阪神","address":"大阪府大阪市福島区海老江１－１－２３玩具売場","grid":[34.695349,135.475843],"machineNum":1,"prefId":27},{"name":"モーリーファンタジー喜連瓜破駅前","address":"大阪府大阪市平野区瓜破２－１－１３イオン３Ｆ","grid":[34.608132,135.551778],"machineNum":1,"prefId":27},{"name":"ジョーシン平野加美","address":"大阪府大阪市平野区加美北５－６－４０","grid":[34.638406,135.562662],"machineNum":1,"prefId":27},{"name":"モーリーファンタジー長吉","address":"大阪府大阪市平野区長吉長原西１－１－１０","grid":[34.608211,135.566162],"machineNum":1,"prefId":27},{"name":"キデイランド大阪梅田","address":"大阪府大阪市北区芝田１－１－３阪急三番街","grid":[34.706044,135.498436],"machineNum":1,"prefId":27},{"name":"ヨドバシカメラマルチメディア梅田","address":"大阪府大阪市北区大深町１－１　玩具売場","grid":[34.70419,135.496255],"machineNum":1,"prefId":27},{"name":"タイトーステーション梅三小路","address":"大阪府大阪市北区梅田３丁目２－１３６大阪ステーションシティ","grid":[34.70115,135.494175],"machineNum":1,"prefId":27},{"name":"ライフ本庄","address":"大阪府大阪市北区本庄東２－３－３５","grid":[34.714572,135.507972],"machineNum":1,"prefId":27},{"name":"プリズムストーン  梅田店","address":"大阪府大阪市北区茶屋町１６−７ 梅田ロフト7階","grid":[34.707978,135.499932],"machineNum":1,"prefId":27},{"name":"ライフ西宮原","address":"大阪府大阪市淀川区西宮原２－２－２２　玩具売場","grid":[34.735525,135.4933],"machineNum":1,"prefId":27},{"name":"ＭＥＧＡドン・キホーテ新世界","address":"大阪府大阪市浪速区恵比寿東３－４－３６","grid":[34.650327,135.504763],"machineNum":1,"prefId":27},{"name":"ヤマダ電機ＬＡＢＩ１なんば","address":"大阪府大阪市浪速区難波中二丁目１１番３５号ＡＶソフトコーナー","grid":[34.659967,135.501313],"machineNum":1,"prefId":27},{"name":"なんばＡ","address":"大阪府大阪市浪速区日本橋3-8-16","grid":[34.661778,135.505071],"machineNum":1,"prefId":27},{"name":"タイトーステーション大阪日本橋","address":"大阪府大阪市浪速区日本橋４－９－１４","grid":[34.6604,135.50617],"machineNum":1,"prefId":27},{"name":"タイトーＦステーション　住道店","address":"大阪府大東市赤井１丁目４番３号","grid":[34.708501,135.619552],"machineNum":1,"prefId":27},{"name":"アミパラ大東","address":"大阪府大東市南新田２－３－５","grid":[34.700587,135.638217],"machineNum":1,"prefId":27},{"name":"モーリーファンタジー池田駅前","address":"大阪府池田市満寿美町２－２","grid":[34.821367,135.424995],"machineNum":1,"prefId":27},{"name":"ＡＧスクエア東大阪","address":"大阪府東大阪市稲田新町３－９－６４","grid":[34.690892,135.591373],"machineNum":1,"prefId":27},{"name":"ペリカン若江岩田","address":"大阪府東大阪市瓜生堂１－１０－５２イズミヤ内２Ｆ　玩具売場","grid":[34.661821,135.601015],"machineNum":1,"prefId":27},{"name":"モーリーファンタジー東大阪","address":"大阪府東大阪市荒本北２丁目３番２２号イオン１Ｆ","grid":[34.67971,135.602292],"machineNum":1,"prefId":27},{"name":"宝島鴻池","address":"大阪府東大阪市鴻池１－１－７２イオン鴻池店２Ｆ","grid":[34.698896,135.60263],"machineNum":1,"prefId":27},{"name":"ふぇすたらんど東大阪","address":"大阪府東大阪市西岩田３－２－３山陽マルナカ東大阪店２階","grid":[34.669092,135.596602],"machineNum":1,"prefId":27},{"name":"セガワールド布施","address":"大阪府東大阪市長堂１－１－１ロンモール布施内","grid":[34.664333,135.563428],"machineNum":1,"prefId":27},{"name":"トイザらス藤井寺","address":"大阪府藤井寺市岡２－８－４１　ソリヤ２Ｆ","grid":[34.572186,135.593286],"machineNum":1,"prefId":27},{"name":"ＣＬＵＢＳＥＧＡ藤井寺","address":"大阪府藤井寺市沢田１－２０－８","grid":[34.572797,135.605834],"machineNum":1,"prefId":27},{"name":"タイトーステーションアリオ八尾","address":"大阪府八尾市光町２－３イトーヨーカドーアリオ八尾３Ｆ","grid":[34.632531,135.606773],"machineNum":1,"prefId":27},{"name":"イトーヨーカドーアリオ八尾","address":"大阪府八尾市光町２－３玩具売場","grid":[34.632531,135.606773],"machineNum":1,"prefId":27},{"name":"イズミヤ八尾","address":"大阪府八尾市沼１－１玩具売場","grid":[34.588195,135.601301],"machineNum":1,"prefId":27},{"name":"ゲオ八尾店","address":"大阪府八尾市東本町４丁目２番５０号","grid":[34.626103,135.605451],"machineNum":1,"prefId":27},{"name":"ライフ久宝寺駅前","address":"大阪府八尾市龍華町１－４－３","grid":[34.621072,135.584993],"machineNum":1,"prefId":27},{"name":"モーリーファンタジー金剛東","address":"大阪府富田林市向陽台３－１－１イオン４Ｆ","grid":[34.501318,135.580211],"machineNum":1,"prefId":27},{"name":"ライフ庄内","address":"大阪府豊中市庄内栄町５－５－１０","grid":[34.743594,135.467155],"machineNum":1,"prefId":27},{"name":"ヤマダ電機ＬＡＢＩ千里","address":"大阪府豊中市新千里東町１丁目２－２０ＡＶソフトコーナー","grid":[34.812179,135.494508],"machineNum":1,"prefId":27},{"name":"セガ新三国アルゴ７","address":"大阪府豊中市神州町１－１５","grid":[34.738561,135.479468],"machineNum":1,"prefId":27},{"name":"モーリーファンタジー曽根","address":"大阪府豊中市曽根東町３－３－１　玩具売場","grid":[34.770872,135.468371],"machineNum":1,"prefId":27},{"name":"モーリーファンタジー枚方","address":"大阪府枚方市岡本町７番１－２０３イオン4階","grid":[34.815664,135.646513],"machineNum":1,"prefId":27},{"name":"ジョーシン東香里","address":"大阪府枚方市高田１－２０－５０","grid":[34.776353,135.658819],"machineNum":1,"prefId":27},{"name":"セガワールド枚方","address":"大阪府枚方市須山町８３－１　サンシャインプラザ枚方内","grid":[34.81962,135.675564],"machineNum":1,"prefId":27},{"name":"アル・プラザ枚方","address":"大阪府枚方市津田元町１－４－１　玩具売場","grid":[34.808104,135.702031],"machineNum":1,"prefId":27},{"name":"セガニトリモール枚方","address":"大阪府枚方市北山1丁目2番1号","grid":[34.838759,135.697759],"machineNum":1,"prefId":27},{"name":"ライフ箕面","address":"大阪府箕面市稲１－１０－１３－２","grid":[34.82635,135.475237],"machineNum":1,"prefId":27},{"name":"イオン箕面","address":"大阪府箕面市西宿１－１５－３０玩具売場","grid":[34.833042,135.489366],"machineNum":1,"prefId":27},{"name":"ライフ門真","address":"大阪府門真市島頭３－４－１　玩具売場","grid":[34.731161,135.607725],"machineNum":1,"prefId":27},{"name":"イオン古川橋駅前","address":"大阪府門真市末広町４１－２","grid":[34.738403,135.591662],"machineNum":1,"prefId":27},{"name":"モーリーファンタジー古川橋駅前","address":"大阪府門真市末広町４１－２","grid":[34.738403,135.591662],"machineNum":1,"prefId":27},{"name":"ペリカン和泉中央","address":"大阪府和泉市いぶき野５丁目１番１１号エコールいずみ店内２Ｆ　玩具売場","grid":[34.460181,135.456905],"machineNum":1,"prefId":27},{"name":"ジョーシン光明池","address":"大阪府和泉市堂町８２４－３６コムボックス１階","grid":[34.483299,135.423775],"machineNum":1,"prefId":27},{"name":"モーリーファンタジー和泉府中","address":"大阪府和泉市肥子町２－２－１　イオン４Ｆ","grid":[34.48588,135.420688],"machineNum":1,"prefId":27},{"name":"イオン和泉府中","address":"大阪府和泉市肥子町２－２－１玩具売場","grid":[34.485641,135.421106],"machineNum":1,"prefId":27},{"name":"セガワールド和泉","address":"大阪府和泉市肥子町２－４－４１","grid":[34.486706,135.417994],"machineNum":1,"prefId":27},{"name":"ＮＩＣＯＰＡ和泉府中","address":"大阪府泉大津市東豊中町１丁目５番１０号カナートモール和泉府中店  ２F","grid":[34.491532,135.423452],"machineNum":1,"prefId":27},{"name":"モーリーファンタジー竜野","address":"兵庫県たつの市龍野町堂本字五反田２５０－１ダイエー竜野店３Ｆ","grid":[34.85542,134.553725],"machineNum":1,"prefId":28},{"name":"イオン伊丹昆陽","address":"兵庫県伊丹市池尻４－１－１　　イオン３Ｆ玩具売場","grid":[34.78459,135.381496],"machineNum":1,"prefId":28},{"name":"モーリーファンタジー伊丹昆陽","address":"兵庫県伊丹市池尻４－１－１　イオン３Ｆ","grid":[34.78459,135.381496],"machineNum":1,"prefId":28},{"name":"カリヨンパークイオン伊丹昆陽店","address":"兵庫県伊丹市池尻４丁目１－１イオン伊丹昆陽ＳＣ内４Ｆ","grid":[34.78459,135.381496],"machineNum":1,"prefId":28},{"name":"モーリーファンタジー伊丹","address":"兵庫県伊丹市藤ノ木１－１－１イオン３Ｆ","grid":[34.781713,135.423799],"machineNum":1,"prefId":28},{"name":"テクモピアフォーレ伊丹","address":"兵庫県伊丹市藤木１－１－１イオンモール伊丹テラス３Ｆ","grid":[34.781713,135.423799],"machineNum":1,"prefId":28},{"name":"ホムスタ加古川","address":"兵庫県加古川市尾上町安田３５１番メガコート２Ｆ","grid":[34.745709,134.835563],"machineNum":1,"prefId":28},{"name":"アミパラ加古川","address":"兵庫県加古川市尾上町今福７１－２","grid":[34.751371,134.828638],"machineNum":1,"prefId":28},{"name":"タイトーＦステーションイオン加古川","address":"兵庫県加古川市平岡町新在家６１５－１イオン加古川店３Ｆ","grid":[34.748929,134.862389],"machineNum":1,"prefId":28},{"name":"イオン加古川","address":"兵庫県加古川市平岡町新在家６１５－１玩具売場","grid":[34.749166,134.862395],"machineNum":1,"prefId":28},{"name":"イトーヨーカドー加古川","address":"兵庫県加古川市別府町緑町２玩具売場","grid":[34.726978,134.848041],"machineNum":1,"prefId":28},{"name":"イオン加西北条","address":"兵庫県加西市北条町北条３０８－１","grid":[34.930469,134.828356],"machineNum":1,"prefId":28},{"name":"モーリーファンタジー加西北条","address":"兵庫県加西市北条町北条３０８－１イオン２Ｆ","grid":[34.930469,134.828356],"machineNum":1,"prefId":28},{"name":"モーリーファンタジー社","address":"兵庫県加東市社１１２６－１イオン２Ｆ","grid":[34.914655,134.961604],"machineNum":1,"prefId":28},{"name":"モーリーファンタジー高砂","address":"兵庫県高砂市緑丘２丁目１－４０イオン２Ｆ","grid":[34.76956,134.802654],"machineNum":1,"prefId":28},{"name":"イオン三田ウッディタウン","address":"兵庫県三田市けやき台１－６－２玩具売場","grid":[34.90826,135.186114],"machineNum":1,"prefId":28},{"name":"モーリーファンタジー三木青山","address":"兵庫県三木市志染町青山３－９イオン三木青山２Ｆ","grid":[34.779577,135.036383],"machineNum":1,"prefId":28},{"name":"モーリーファンタジー三木","address":"兵庫県三木市大村字砂１６３イオン３Ｆ","grid":[34.809238,134.969682],"machineNum":1,"prefId":28},{"name":"モーリーファンタジー山崎","address":"兵庫県宍粟市山崎町中井字城下１０イオン３Ｆ","grid":[34.998337,134.54149],"machineNum":1,"prefId":28},{"name":"モーリーファンタジー洲本","address":"兵庫県洲本市塩屋１－１－８イオン２Ｆ","grid":[34.344573,134.892128],"machineNum":1,"prefId":28},{"name":"イオン洲本","address":"兵庫県洲本市塩屋１－１－８玩具売場","grid":[34.344573,134.892128],"machineNum":1,"prefId":28},{"name":"ふぇすたらんど小野","address":"兵庫県小野市王子町８６８－１イオン小野店２Ｆ","grid":[34.856414,134.935725],"machineNum":1,"prefId":28},{"name":"モーリーファンタジー板宿","address":"兵庫県神戸市須磨区前池町３－２－１ダイエー板宿店４Ｆ","grid":[34.662152,135.132494],"machineNum":1,"prefId":28},{"name":"モーリーファンタジージェームス山","address":"兵庫県神戸市垂水区青山台７－７－１　イオン１Ｆ","grid":[34.646234,135.076147],"machineNum":1,"prefId":28},{"name":"ヤマダ電機テックランドNew神戸垂水本店","address":"兵庫県神戸市垂水区多聞町字小束山８６８－６","grid":[34.671086,135.059999],"machineNum":1,"prefId":28},{"name":"モーリーファンタジー舞子","address":"兵庫県神戸市垂水区舞子台６－２０－１７ダイエー舞子店２Ｆ","grid":[34.639441,135.03163],"machineNum":1,"prefId":28},{"name":"エディオン垂水","address":"兵庫県神戸市垂水区舞多聞東２丁目１－４５","grid":[34.663764,135.054157],"machineNum":1,"prefId":28},{"name":"ダイエー神戸学園","address":"兵庫県神戸市西区学園西町１－４","grid":[34.683121,135.057587],"machineNum":1,"prefId":28},{"name":"ホムスタ玉津","address":"兵庫県神戸市西区丸塚２－９－１８メガパレス２Ｆ","grid":[34.679015,134.983126],"machineNum":1,"prefId":28},{"name":"ペリカン西神戸","address":"兵庫県神戸市西区竜が岡１－２１－１カナート西神戸内２Ｆ　玩具売場","grid":[34.710827,134.940401],"machineNum":1,"prefId":28},{"name":"モーリーファンタジー西神中央","address":"兵庫県神戸市西区糀台５－３－４","grid":[34.720058,135.019225],"machineNum":1,"prefId":28},{"name":"仔熊そごう西神","address":"兵庫県神戸市西区糀台５－９－４","grid":[34.718727,135.017597],"machineNum":1,"prefId":28},{"name":"ヤマダ電機ＬＡＢＩ三宮","address":"兵庫県神戸市中央区三宮町１丁目５－８","grid":[34.691772,135.193985],"machineNum":1,"prefId":28},{"name":"プリズムストーン  三宮店","address":"兵庫県神戸市中央区三宮町１丁目９－１－２０１－２　センタープラザ２Ｆ","grid":[34.691934,135.192448],"machineNum":1,"prefId":28},{"name":"タイトーＦステーション三宮西館","address":"兵庫県神戸市中央区三宮町２－１１－１三宮センタービル西館３階","grid":[34.691148,135.1912],"machineNum":1,"prefId":28},{"name":"そごう神戸","address":"兵庫県神戸市中央区小野柄通８－１－８そごう　神戸店　８Ｆ玩具売場","grid":[34.692979,135.195387],"machineNum":1,"prefId":28},{"name":"セガ神戸ｕｍｉｅサウスモール","address":"兵庫県神戸市中央区東川崎１－７－２","grid":[34.678981,135.18264],"machineNum":1,"prefId":28},{"name":"ライフ春日野道","address":"兵庫県神戸市中央区北本町通１－１－２３","grid":[34.698579,135.208318],"machineNum":1,"prefId":28},{"name":"タイトーＦステーションＨＡＴ神戸","address":"兵庫県神戸市中央区脇浜海岸通２－２－２ブルメールＨＡＴ神戸２Ｆ","grid":[34.699482,135.214232],"machineNum":1,"prefId":28},{"name":"モーリーファンタジー長田南","address":"兵庫県神戸市長田区東尻池新町１番２０号イオン長田南ショッピングセンター内２Ｆ","grid":[34.65519,135.159246],"machineNum":1,"prefId":28},{"name":"グルメシティ六甲アイランド","address":"兵庫県神戸市東灘区向洋町中５－１５","grid":[34.69051,135.267803],"machineNum":1,"prefId":28},{"name":"セルバ甲南山手店３Ｆゲームセンター","address":"兵庫県神戸市東灘区森南町１－５－１　３Ｆゲームセンター","grid":[34.729667,135.294243],"machineNum":1,"prefId":28},{"name":"ライフ本山","address":"兵庫県神戸市東灘区本山南町６丁目１０－２８","grid":[34.726302,135.287254],"machineNum":1,"prefId":28},{"name":"セガフェニックスプラザ摩耶","address":"兵庫県神戸市灘区味泥町６－１","grid":[34.704056,135.228084],"machineNum":1,"prefId":28},{"name":"ダイエー湊川","address":"兵庫県神戸市兵庫区荒田町2-18-20　玩具売場","grid":[34.680964,135.166253],"machineNum":1,"prefId":28},{"name":"モーリーファンタジー湊川","address":"兵庫県神戸市兵庫区荒田町２－１８－２０ダイエー湊川店３Ｆ","grid":[34.680964,135.166253],"machineNum":1,"prefId":28},{"name":"モーリーファンタジー神戸北","address":"兵庫県神戸市北区上津台８－１－１　イオン３Ｆ","grid":[34.861085,135.195706],"machineNum":1,"prefId":28},{"name":"イオン神戸北","address":"兵庫県神戸市北区上津台８－１－１玩具売場","grid":[34.861085,135.195706],"machineNum":1,"prefId":28},{"name":"モーリーファンタジー藤原台","address":"兵庫県神戸市北区藤原台中町１－２－２　玩具売場","grid":[34.821727,135.220516],"machineNum":1,"prefId":28},{"name":"わいわいカーニバル","address":"兵庫県神戸市北区日の峰２－６－１コアキタマチ３Ｆ","grid":[34.756152,135.143645],"machineNum":1,"prefId":28},{"name":"セガららぽーと甲子園","address":"兵庫県西宮市甲子園八番町１－１００　ららぽーと甲子園２Ｆ","grid":[34.718525,135.363502],"machineNum":1,"prefId":28},{"name":"イトーヨーカドー甲子園","address":"兵庫県西宮市甲子園八番町１－１００玩具売場","grid":[34.718525,135.363502],"machineNum":1,"prefId":28},{"name":"キッズパーク西宮","address":"兵庫県西宮市浜松原町２１－１マルナカ西宮店２Ｆ","grid":[34.725728,135.34612],"machineNum":1,"prefId":28},{"name":"モーリーファンタジー西宮","address":"兵庫県西宮市林田町２－２４　　　　　　　　　　ダイエー西宮店２Ｆ","grid":[34.755935,135.362153],"machineNum":1,"prefId":28},{"name":"イオン赤穂","address":"兵庫県赤穂市中広字別所５５－３玩具売場","grid":[34.737505,134.387479],"machineNum":1,"prefId":28},{"name":"イオン猪名川","address":"兵庫県川辺郡猪名川町猪名川町白金２－１玩具売場","grid":[34.899407,135.359261],"machineNum":1,"prefId":28},{"name":"モーリーファンタジー猪名川","address":"兵庫県川辺郡猪名川町白金２－１イオン３Ｆ","grid":[34.899407,135.359261],"machineNum":1,"prefId":28},{"name":"ニシダヤ丹波ゆめタウン","address":"兵庫県丹波市氷上町本郷３００ゆめタウン１階","grid":[35.158844,135.045423],"machineNum":1,"prefId":28},{"name":"アル・クリオゲームコーナー","address":"兵庫県淡路市志筑新島１０番地の３","grid":[34.425841,134.90592],"machineNum":1,"prefId":28},{"name":"イオン和田山","address":"兵庫県朝来市和田山町牧田岡７７４玩具売場","grid":[35.293964,134.838853],"machineNum":1,"prefId":28},{"name":"モーリーファンタジー和田山","address":"兵庫県朝来市和田山町枚田岡７７４　イオン２Ｆ","grid":[35.329815,134.86394],"machineNum":1,"prefId":28},{"name":"モーリーファンタジー南淡路","address":"兵庫県南あわじ市賀集八幡北　字東内３７８－１イオン１Ｆ","grid":[34.279489,134.74089],"machineNum":1,"prefId":28},{"name":"モーリーファンタジー尼崎","address":"兵庫県尼崎市次屋３－１３－１８イオン２Ｆ","grid":[34.742105,135.442443],"machineNum":1,"prefId":28},{"name":"エディオン尼崎","address":"兵庫県尼崎市潮江１－１－５０","grid":[34.73175,135.432301],"machineNum":1,"prefId":28},{"name":"アル・プラザあまがさき","address":"兵庫県尼崎市潮江１－３－１　玩具売場","grid":[34.733576,135.430763],"machineNum":1,"prefId":28},{"name":"セガワールドココエあまがさき","address":"兵庫県尼崎市潮江１－３－１ココエあまがさき内４Ｆ","grid":[34.733576,135.430763],"machineNum":1,"prefId":28},{"name":"アルプラザつかしん","address":"兵庫県尼崎市塚口本町４－８－１","grid":[34.761718,135.419654],"machineNum":1,"prefId":28},{"name":"ジョーシンつかしん","address":"兵庫県尼崎市塚口本町４－８－１","grid":[34.761718,135.419654],"machineNum":1,"prefId":28},{"name":"タイトーステーション尼崎つかしん","address":"兵庫県尼崎市塚口本町４－８－１ SCつかしん内東町北館３階","grid":[34.761669,135.419511],"machineNum":1,"prefId":28},{"name":"セガつかしん","address":"兵庫県尼崎市塚口本町４－８－１　つかしん内","grid":[34.761669,135.419511],"machineNum":1,"prefId":28},{"name":"タイトーＦステーション姫路","address":"兵庫県姫路市駅前町２６９・２７０番地","grid":[34.828554,134.691717],"machineNum":1,"prefId":28},{"name":"ふぇすたらんど広畑","address":"兵庫県姫路市広畑区吾妻町３－２９－２マルナカ広畑店内","grid":[34.795321,134.619922],"machineNum":1,"prefId":28},{"name":"ハローズガーデン広畑","address":"兵庫県姫路市広畑区夢前町１－１－１ＭＥＧＡドンキホーテ姫路広畑店１階","grid":[34.796584,134.636627],"machineNum":1,"prefId":28},{"name":"ハローズ夢前台","address":"兵庫県姫路市上手野３１０－８","grid":[34.861295,134.658411],"machineNum":1,"prefId":28},{"name":"モーリーファンタジー姫路ＲＣ","address":"兵庫県姫路市飾磨区細江２５６０番地イオン１Ｆ","grid":[34.79837,134.668442],"machineNum":1,"prefId":28},{"name":"ペリカン姫路","address":"兵庫県姫路市神子岡前３－１２－１７ゆめタイウン４Ｆ","grid":[34.840856,134.670054],"machineNum":1,"prefId":28},{"name":"セガワールド花北","address":"兵庫県姫路市増位新町１－６２Ｆ","grid":[34.855505,134.708533],"machineNum":1,"prefId":28},{"name":"ハローズガーデン姫路","address":"兵庫県姫路市増位本町２－１２－１０イオン姫路店２Ｆ","grid":[34.856808,134.706406],"machineNum":1,"prefId":28},{"name":"イオン姫路","address":"兵庫県姫路市増位本町２－１２－１０玩具売場","grid":[34.856808,134.706406],"machineNum":1,"prefId":28},{"name":"モーリーファンタジー姫路大津","address":"兵庫県姫路市大津区大津町２丁目５番イオンモール２Ｆ","grid":[34.806557,134.606673],"machineNum":1,"prefId":28},{"name":"イオン姫路大津","address":"兵庫県姫路市大津町２－５玩具売場","grid":[34.806557,134.606673],"machineNum":1,"prefId":28},{"name":"アピナ姫路","address":"兵庫県姫路市東郷町１４５４－３姫路リオス２Ｆ","grid":[34.826718,134.715087],"machineNum":1,"prefId":28},{"name":"モーリーファンタジー宝塚中山","address":"兵庫県宝塚市売布東の町２１－２２　玩具売場","grid":[34.817114,135.367569],"machineNum":1,"prefId":28},{"name":"セガ明石","address":"兵庫県明石市魚住町清水２４６４－１　ドライブインなかざわ","grid":[34.720798,134.897225],"machineNum":1,"prefId":28},{"name":"ふぇすたらんど土山","address":"兵庫県明石市魚住町清水字舞々２２０８－１イオン土山店内","grid":[34.721599,134.89281],"machineNum":1,"prefId":28},{"name":"イオン明石","address":"兵庫県明石市大久保町ゆりのき通３－３－１玩具売場","grid":[34.678726,134.934865],"machineNum":1,"prefId":28},{"name":"モーリーファンタジー明石","address":"兵庫県明石市大久保町ゆりのき通り３－３－１","grid":[34.680502,134.936426],"machineNum":1,"prefId":28},{"name":"トイザらス明石","address":"兵庫県明石市東仲ノ町６－１　アスピア明石南館３Ｆ","grid":[34.647735,134.995278],"machineNum":1,"prefId":28},{"name":"イトーヨーカドー明石","address":"兵庫県明石市二見町西二見駅前１－１８玩具売場","grid":[34.705119,134.878316],"machineNum":1,"prefId":28},{"name":"エディオン太子","address":"兵庫県揖保郡太子町東南５９８－１","grid":[34.832624,134.587918],"machineNum":1,"prefId":28},{"name":"モーリーファンタジー橿原","address":"奈良県橿原市曲川町７－２０－１イオン２Ｆ","grid":[34.504941,135.761999],"machineNum":1,"prefId":29},{"name":"ＳＯＹＵＧａｍｅＦｉｅｌｄ奈良橿原","address":"奈良県橿原市曲川町７－２０－１イオンモール奈良橿原３Ｆ","grid":[34.504941,135.761999],"machineNum":1,"prefId":29},{"name":"イオン五條","address":"奈良県五條市今井２－１５０玩具売場","grid":[34.353342,135.702077],"machineNum":1,"prefId":29},{"name":"ライフ御所","address":"奈良県御所市東松本３０","grid":[34.464605,135.731126],"machineNum":1,"prefId":29},{"name":"モーリーファンタジー桜井","address":"奈良県桜井市上之庄２７８－１イオン２Ｆ","grid":[34.52127,135.837548],"machineNum":1,"prefId":29},{"name":"モーリーファンタジー登美ヶ丘","address":"奈良県生駒市鹿畑町３０２７番地イオンモール奈良登美ヶ丘２Ｆ","grid":[34.725688,135.750512],"machineNum":1,"prefId":29},{"name":"モーリーファンタジー大和郡山","address":"奈良県大和郡山市下三橋　７４１イオン３Ｆ","grid":[34.651053,135.8021],"machineNum":1,"prefId":29},{"name":"ジョーシン郡山イオンモール","address":"奈良県大和郡山市下三橋町７４１－１７０　イオンモール大和郡山１Ｆ","grid":[34.649411,135.802519],"machineNum":1,"prefId":29},{"name":"楽市楽座イオンモール大和郡山","address":"奈良県大和郡山市下三橋町７４１イオンモール大和郡山店３階","grid":[34.651053,135.8021],"machineNum":1,"prefId":29},{"name":"イオン大和郡山","address":"奈良県大和郡山市下三橋町７４１玩具売場","grid":[34.651053,135.8021],"machineNum":1,"prefId":29},{"name":"ハローズガーデン大和郡山","address":"奈良県大和郡山市田中町字宮西５１７アピタ大和郡山店２Ｆ","grid":[34.641171,135.769871],"machineNum":1,"prefId":29},{"name":"アピタ大和郡山","address":"奈良県大和郡山市田中町字宮西５１７番　玩具売場","grid":[34.641171,135.769871],"machineNum":1,"prefId":29},{"name":"モーリーファンタジー大和高田","address":"奈良県大和高田市幸町３番地６オークタウン大和高田５Ｆ","grid":[34.518528,135.744542],"machineNum":1,"prefId":29},{"name":"モーリーファンタジー天理","address":"奈良県天理市東井戸堂町３８１ザ・ビッグエクストラ１Ｆ","grid":[34.590774,135.824942],"machineNum":1,"prefId":29},{"name":"西友王寺","address":"奈良県北葛城郡王寺町久度２－２－１玩具売場","grid":[34.597969,135.702923],"machineNum":1,"prefId":29},{"name":"アピタ西大和","address":"奈良県北葛城郡上牧町上牧３０００－１　玩具売場","grid":[34.56017,135.719089],"machineNum":1,"prefId":29},{"name":"ドナリアコットミレニアシティ岩出店","address":"和歌山県岩出市中迫字塚本１４７　ミレニアシティ","grid":[34.26333,135.314641],"machineNum":1,"prefId":30},{"name":"ＰＡＬＯ橋本彩の台","address":"和歌山県橋本市あやの台１丁目５０番地２彩の台ショッピングセンター","grid":[34.33553,135.651586],"machineNum":1,"prefId":30},{"name":"タイトーＦステーション御坊","address":"和歌山県御坊市湯川町財部１８１番地","grid":[33.897649,135.148816],"machineNum":1,"prefId":30},{"name":"モーリーファンタジー新宮","address":"和歌山県新宮市橋本２丁目１４番２３号イオン２Ｆ","grid":[33.714317,135.990464],"machineNum":1,"prefId":30},{"name":"ＰＡＬＯ田辺","address":"和歌山県田辺市宝来町２４番２６号グルメシティ田辺店３Ｆ","grid":[33.734745,135.388119],"machineNum":1,"prefId":30},{"name":"タイトーＦステーションセントラルシティ和歌山","address":"和歌山県和歌山市小雑貨８０５－１セントラルシティ和歌山店１階","grid":[34.195316,135.18336],"machineNum":1,"prefId":30},{"name":"ペリカン和歌山","address":"和歌山県和歌山市新生町７－２０イズミヤ内２Ｆ　玩具売場","grid":[34.221616,135.187463],"machineNum":1,"prefId":30},{"name":"モーリーファンタジー和歌山","address":"和歌山県和歌山市中字楠谷５７３番地　イオン３Ｆ","grid":[34.277315,135.149574],"machineNum":1,"prefId":30},{"name":"ユーズランド和歌山店","address":"和歌山県和歌山市中字楠谷５７３番地　イオンモール和歌山２Ｆ　区画番号２０５９","grid":[34.275376,135.149306],"machineNum":1,"prefId":30},{"name":"仔熊近鉄和歌山","address":"和歌山県和歌山市友田町５－１８近鉄百貨店　和歌山店　４Ｆ　トイランド","grid":[34.233009,135.190596],"machineNum":1,"prefId":30},{"name":"ＰＡＬＯ境港","address":"鳥取県境港市竹内団地８１番地３","grid":[35.522773,133.25336],"machineNum":1,"prefId":31},{"name":"イオン日吉津","address":"鳥取県西伯郡日吉津村日吉津１１６０－１","grid":[35.445829,133.38724],"machineNum":1,"prefId":31},{"name":"モーリーファンタジー日吉津","address":"鳥取県西伯郡日吉津村日吉津１１６０－１イオン２Ｆ","grid":[35.445829,133.38724],"machineNum":1,"prefId":31},{"name":"モーリーファンタジー鳥取","address":"鳥取県鳥取市　天神町　１イオン２Ｆ","grid":[35.493479,134.221948],"machineNum":1,"prefId":31},{"name":"モーリーファンタジー鳥取北","address":"鳥取県鳥取市晩稲３４８番地イオン２Ｆ","grid":[35.523991,134.201525],"machineNum":1,"prefId":31},{"name":"イオン鳥取北","address":"鳥取県鳥取市晩稲３４８番地玩具売場","grid":[35.523991,134.201525],"machineNum":1,"prefId":31},{"name":"モーリーファンタジーホープタウン","address":"鳥取県米子市米原２－１－１　ホープタウン３Ｆ","grid":[35.442181,133.330513],"machineNum":1,"prefId":31},{"name":"モーリーファンタジー米子駅前","address":"鳥取県米子市末広町３１１　　イオン３Ｆ","grid":[35.423072,133.332341],"machineNum":1,"prefId":31},{"name":"ペリカン益田","address":"島根県益田市高津　７－２１－１２．　ゆめタウン益田内２Ｆ","grid":[34.691037,131.815912],"machineNum":1,"prefId":32},{"name":"ｙｏｕｍｅＣＩＲＣＵＳ（出雲）","address":"島根県出雲市大塚町６５０－１ゆめタウン出雲東館３Ｆ","grid":[35.377131,132.754954],"machineNum":1,"prefId":32},{"name":"セガ松江","address":"島根県松江市嫁島町１２－１５","grid":[35.450094,133.047826],"machineNum":1,"prefId":32},{"name":"モーリーファンタジー・ｆ松江","address":"島根県松江市東朝日町１５１　　イオンＳＣ３Ｆ","grid":[35.462827,133.069499],"machineNum":1,"prefId":32},{"name":"イオン松江","address":"島根県松江市東朝日町１５１玩具売場","grid":[35.462827,133.069499],"machineNum":1,"prefId":32},{"name":"ペリカン浜田","address":"島根県浜田市港町２２７－１","grid":[34.899994,132.071526],"machineNum":1,"prefId":32},{"name":"プレビエブリイＯｋａｎａｋａ津高","address":"岡山県岡山市横井８３番３号エブリイｏｋａｎａｋａ津高店プレビゲームコーナー","grid":[34.655531,133.919795],"machineNum":1,"prefId":33},{"name":"こどもや西大寺店","address":"岡山県岡山市西大寺南１－２－１天満屋ハピータウン西大寺店内玩具売場","grid":[34.651962,134.028151],"machineNum":1,"prefId":33},{"name":"こころっこ原尾島","address":"岡山県岡山市中区原尾島１－６－２０天満屋ハピータウン３Ｆ","grid":[34.671682,133.947404],"machineNum":1,"prefId":33},{"name":"モーリーファンタジー原尾島","address":"岡山県岡山市中区原尾島１－６－２０天満屋ハピータウン３Ｆ","grid":[34.671682,133.947404],"machineNum":1,"prefId":33},{"name":"ハローズ江崎","address":"岡山県岡山市中区江崎６９０番地１","grid":[34.620199,133.965535],"machineNum":1,"prefId":33},{"name":"アミューズメントプレイス・ギミック・セガ","address":"岡山県岡山市中区藤崎５９９－１２","grid":[34.608851,133.976611],"machineNum":1,"prefId":33},{"name":"ふぇすたらんど平島","address":"岡山県岡山市東区東平島１６０９マルナカ平島店内","grid":[34.707888,134.049856],"machineNum":1,"prefId":33},{"name":"ハローズ岡南","address":"岡山県岡山市南区松浜町４－７","grid":[34.61305,133.94244],"machineNum":1,"prefId":33},{"name":"ふぇすたらんど築港","address":"岡山県岡山市南区築港元町１４－１　山陽マルナカ築港店内","grid":[34.606247,133.948752],"machineNum":1,"prefId":33},{"name":"こころっこ岡南","address":"岡山県岡山市南区築港新町１－１８－５天満屋ハピータウン３Ｆ","grid":[34.603866,133.940847],"machineNum":1,"prefId":33},{"name":"モーリーファンタジー岡南","address":"岡山県岡山市南区築港新町１－１８－５天満屋ハピータウン３Ｆ","grid":[34.603866,133.940847],"machineNum":1,"prefId":33},{"name":"ハローズ当新田","address":"岡山県岡山市南区当新田１２６－３","grid":[34.62297,133.908708],"machineNum":1,"prefId":33},{"name":"ビックカメラ岡山駅前","address":"岡山県岡山市北区駅前町１－１－１　トイズコーナー","grid":[34.665932,133.919814],"machineNum":1,"prefId":33},{"name":"セガイオンモール岡山","address":"岡山県岡山市北区下石井１丁目１８番１","grid":[34.662234,133.91655],"machineNum":1,"prefId":33},{"name":"ミスターマックス岡山西","address":"岡山県岡山市北区久米３１０番地１号","grid":[34.648765,133.872779],"machineNum":1,"prefId":33},{"name":"アミパラ岡山店","address":"岡山県岡山市北区青江１丁目１３－８","grid":[34.636182,133.920024],"machineNum":1,"prefId":33},{"name":"モーリーファンタジー岡山","address":"岡山県岡山市北区青江２－７－１イオン２Ｆ","grid":[34.634829,133.920378],"machineNum":1,"prefId":33},{"name":"こころっこ岡北","address":"岡山県岡山市北区中井町２－２－７天満屋ハピータウン３Ｆ","grid":[34.679589,133.928626],"machineNum":1,"prefId":33},{"name":"モーリーファンタジー岡北","address":"岡山県岡山市北区中井町２－２－７天満屋ハピータウン３Ｆ","grid":[34.679589,133.928626],"machineNum":1,"prefId":33},{"name":"ハローズ津高","address":"岡山県岡山市北区津高６４０－１","grid":[34.698603,133.903539],"machineNum":1,"prefId":33},{"name":"ハローズ花尻","address":"岡山県岡山市北区白石西新町９－１１６","grid":[34.65551,133.870508],"machineNum":1,"prefId":33},{"name":"ハローズ庭瀬","address":"岡山県岡山市北区平野１１００－１","grid":[34.650032,133.853097],"machineNum":1,"prefId":33},{"name":"ハローズ笠岡","address":"岡山県笠岡市富岡２３２－１","grid":[34.497861,133.525259],"machineNum":1,"prefId":33},{"name":"こころっこ玉野","address":"岡山県玉野市宇野１－３８－１天満屋ハピータウン３Ｆ","grid":[34.491877,133.945068],"machineNum":1,"prefId":33},{"name":"こころっこ高梁","address":"岡山県高梁市中原町１０８４番地の１ポルカ天満屋ハッピータウン内２階","grid":[34.783216,133.610777],"machineNum":1,"prefId":33},{"name":"ハッピーランド山陽","address":"岡山県赤磐市下市１３３","grid":[34.750721,134.017981],"machineNum":1,"prefId":33},{"name":"エディオン倉敷本店","address":"岡山県倉敷市笹沖１２０９－１","grid":[34.578989,133.768591],"machineNum":1,"prefId":33},{"name":"こころっこ児島","address":"岡山県倉敷市児島駅前２－３５天満屋ハピータウン３Ｆ","grid":[34.466882,133.804275],"machineNum":1,"prefId":33},{"name":"ハローズ中庄","address":"岡山県倉敷市松島９７１－１","grid":[34.631612,133.806426],"machineNum":1,"prefId":33},{"name":"モーリーファンタジー倉敷","address":"岡山県倉敷市水江１番地イオン１Ｆ","grid":[34.603438,133.746177],"machineNum":1,"prefId":33},{"name":"ユーズランド倉敷","address":"岡山県倉敷市水江一番地イオンモール倉敷２Ｆ","grid":[34.603438,133.746177],"machineNum":1,"prefId":33},{"name":"モーリーファンタジー水島","address":"岡山県倉敷市水島高砂町３番１１号","grid":[34.529917,133.735946],"machineNum":1,"prefId":33},{"name":"ふぇすたらんど中島","address":"岡山県倉敷市中島２７８０－１山陽マルナカ中島店内","grid":[34.575763,133.741655],"machineNum":1,"prefId":33},{"name":"ハローズ田ノ上","address":"岡山県倉敷市田ノ上１００８","grid":[34.586697,133.755895],"machineNum":1,"prefId":33},{"name":"ハローズ総社","address":"岡山県総社市井出５９６番地１","grid":[34.67509,133.760799],"machineNum":1,"prefId":33},{"name":"こどもやリブ総社","address":"岡山県総社市門田１８７リブ総社２１店内３Ｆ　玩具売場","grid":[34.676719,133.74181],"machineNum":1,"prefId":33},{"name":"モーリーファンタジー津山","address":"岡山県津山市河辺１０００－１イオン２Ｆ","grid":[35.06487,134.045627],"machineNum":1,"prefId":33},{"name":"イオン津山","address":"岡山県津山市河辺１０００－１玩具売場","grid":[35.06487,134.045627],"machineNum":1,"prefId":33},{"name":"セガ海田","address":"広島県安芸郡海田町南大正町３－３５","grid":[34.367631,132.533695],"machineNum":1,"prefId":34},{"name":"フジグラン安芸","address":"広島県安芸郡坂町北新地２丁目３－３０　玩具売場","grid":[34.341284,132.513635],"machineNum":1,"prefId":34},{"name":"トイザらスベビーザらス広島府中","address":"広島県安芸郡府中町大須２－１－１　イオンモール広島府中３Ｆ","grid":[34.394756,132.497634],"machineNum":1,"prefId":34},{"name":"モーリーファンタジー広島府中","address":"広島県安芸郡府中町大須２－１－１イオン２Ｆ","grid":[34.394756,132.497634],"machineNum":1,"prefId":34},{"name":"イオン広島府中","address":"広島県安芸郡府中町大須２－１－１玩具売場","grid":[34.394756,132.497634],"machineNum":1,"prefId":34},{"name":"ペリカン呉","address":"広島県呉市宝町５－１０ゆめタウン呉内３Ｆ　玩具売場","grid":[34.242161,132.556296],"machineNum":1,"prefId":34},{"name":"モーリーファンタジー広島祇園","address":"広島県広島市安佐南区祇園3丁目２－１イオン３Ｆ","grid":[34.443766,132.461478],"machineNum":1,"prefId":34},{"name":"フジグラン緑井","address":"広島県広島市安佐南区緑井１－５－２　玩具売場","grid":[34.466401,132.476382],"machineNum":1,"prefId":34},{"name":"タイトーステーションフジグラン緑井","address":"広島県広島市安佐南区緑井１－５－２フジグラン緑井３Ｆ","grid":[34.466683,132.476601],"machineNum":1,"prefId":34},{"name":"フジグラン高陽","address":"広島県広島市安佐北区亀崎一丁目１番６号　玩具売場","grid":[34.482285,132.523175],"machineNum":1,"prefId":34},{"name":"娯楽座メリーゴーランド高陽","address":"広島県広島市安佐北区口田４丁目６－３２マックスバリュ高陽店３階","grid":[34.468281,132.505974],"machineNum":1,"prefId":34},{"name":"ふぇすたらんど可部","address":"広島県広島市安佐北区可部７丁目４－１３","grid":[34.523266,132.511894],"machineNum":1,"prefId":34},{"name":"わいわい王国メリーゴーランド楽々園","address":"広島県広島市佐伯区楽々園４丁目１４－１ナイスデイ２階","grid":[34.362585,132.352715],"machineNum":1,"prefId":34},{"name":"ヤマダ電機テックランド佐伯","address":"広島県広島市佐伯区楽々園四丁目１４－３２","grid":[34.361732,132.351929],"machineNum":1,"prefId":34},{"name":"プラサカプコン広島","address":"広島県広島市佐伯区石内東４丁目１番１号ジアウトレット広島１Ｆ","grid":[34.408936,132.397139],"machineNum":1,"prefId":34},{"name":"ふぇすたらんど五日市","address":"広島県広島市佐伯区八幡１－２４－１７　サンリブ五日市店内","grid":[34.386889,132.35836],"machineNum":1,"prefId":34},{"name":"アミパラ広島店","address":"広島県広島市西区西観音町３－１７","grid":[34.393453,132.436009],"machineNum":1,"prefId":34},{"name":"ヤマダ電機ＬＡＢＩ広島","address":"広島県広島市中区胡町５－２２","grid":[34.39306,132.463711],"machineNum":1,"prefId":34},{"name":"エディオン広島本店","address":"広島県広島市中区紙屋町２－１－１８","grid":[34.39521,132.456597],"machineNum":1,"prefId":34},{"name":"タイトーステーション広島紙屋町","address":"広島県広島市中区紙屋町２丁目２－２１","grid":[34.394077,132.456076],"machineNum":1,"prefId":34},{"name":"タイトーステーション広島本通","address":"広島県広島市中区本通３－５","grid":[34.392856,132.460575],"machineNum":1,"prefId":34},{"name":"アミパラフォレオ広島東","address":"広島県広島市東区温品１丁目３－２フォレオ広島東１階","grid":[34.407987,132.503503],"machineNum":1,"prefId":34},{"name":"アミューズメント141メリーゴーランド温品","address":"広島県広島市東区温品１丁目３－２フォレオ広島東２階","grid":[34.407987,132.503503],"machineNum":1,"prefId":34},{"name":"タイトーＦステーションゆめタウンみゆき","address":"広島県広島市南区宇品西６丁目７番１４号ゆめタウンみゆき２Ｆ","grid":[34.358475,132.456651],"machineNum":1,"prefId":34},{"name":"イオン宇品","address":"広島県広島市南区宇品東６－１－１５","grid":[34.36261,132.468341],"machineNum":1,"prefId":34},{"name":"モーリーファンタジー宇品","address":"広島県広島市南区宇品東６－１－１５イオン２Ｆ","grid":[34.36261,132.468341],"machineNum":1,"prefId":34},{"name":"ビックカメラ広島駅前","address":"広島県広島市南区松原町5-1","grid":[34.395734,132.474977],"machineNum":1,"prefId":34},{"name":"楽市楽座広島","address":"広島県広島市南区段原南１－３－５２広島段原ショッピングセンター７階","grid":[34.385252,132.475379],"machineNum":1,"prefId":34},{"name":"フジグラン三原","address":"広島県三原市円一町１－１－７　玩具売場","grid":[34.392692,133.07863],"machineNum":1,"prefId":34},{"name":"モーリーファンタジー三原","address":"広島県三原市城町２－１３－１イオン２Ｆ","grid":[34.399016,133.087227],"machineNum":1,"prefId":34},{"name":"イオン三原","address":"広島県三原市城町２－１３－１玩具売場","grid":[34.399016,133.087227],"machineNum":1,"prefId":34},{"name":"ペリカン大竹","address":"広島県大竹市晴海１－６－１ゆめタウン大竹内２Ｆ　玩具売場","grid":[34.241131,132.223501],"machineNum":1,"prefId":34},{"name":"ゆめタウン学園","address":"広島県東広島市西条下見６丁目２－３２","grid":[34.408997,132.713873],"machineNum":1,"prefId":34},{"name":"フジグラン東広島","address":"広島県東広島市西条町御薗宇４４０５　玩具売場","grid":[34.408073,132.749447],"machineNum":1,"prefId":34},{"name":"ペリカン東広島","address":"広島県東広島市西条町土与丸１－５－７ゆめタウン東広島内４Ｆ","grid":[34.426996,132.750077],"machineNum":1,"prefId":34},{"name":"ゆめタウン廿日市","address":"広島県廿日市市下平良二丁目2-1","grid":[34.34619,132.335497],"machineNum":1,"prefId":34},{"name":"モーリーファンタジー尾道","address":"広島県尾道市天満町１７－２３イオン２Ｆ","grid":[34.406675,133.189542],"machineNum":1,"prefId":34},{"name":"フジグラン尾道","address":"広島県尾道市東尾道１９番地７","grid":[34.425536,133.239001],"machineNum":1,"prefId":34},{"name":"福山メトロポリス","address":"広島県福山市一文字町２４－１","grid":[34.468242,133.410277],"machineNum":1,"prefId":34},{"name":"あみぱらんど福山店","address":"広島県福山市三吉町南２－８－２４","grid":[34.488367,133.378505],"machineNum":1,"prefId":34},{"name":"メリーゴーランド神辺","address":"広島県福山市神辺町新湯野２－３０－４アクト神辺１階","grid":[34.557629,133.389333],"machineNum":1,"prefId":34},{"name":"タイトーステーションフジグラン神辺","address":"広島県福山市神辺町大字新道上字２－１０－２６フジグラン神辺店３Ｆ","grid":[34.543791,133.357825],"machineNum":1,"prefId":34},{"name":"フジグラン神辺","address":"広島県福山市神辺町道上７５　玩具売場","grid":[34.544492,133.35719],"machineNum":1,"prefId":34},{"name":"セガワールド福山","address":"広島県福山市瀬戸町大字山北300","grid":[34.475588,133.316474],"machineNum":1,"prefId":34},{"name":"トイザらス福山","address":"広島県福山市東深津町３－２１－４","grid":[34.494561,133.398526],"machineNum":1,"prefId":34},{"name":"ペリカン宇部","address":"山口県宇部市大字妻崎開作４１１ゆめタウン宇部内１Ｆ","grid":[33.971338,131.208027],"machineNum":1,"prefId":35},{"name":"フジグラン宇部","address":"山口県宇部市明神町３－１－１　玩具売場","grid":[33.930606,131.256297],"machineNum":1,"prefId":35},{"name":"トイザらス下関","address":"山口県下関市ゆめタウン１－１　ゆめタウン長府内","grid":[34.030204,131.012764],"machineNum":1,"prefId":35},{"name":"サンゲームス下関","address":"山口県下関市ゆめタウン２－７","grid":[34.029164,131.013815],"machineNum":1,"prefId":35},{"name":"ミスターマックス綾羅木","address":"山口県下関市綾羅木町３－２－１","grid":[34.010684,130.928199],"machineNum":1,"prefId":35},{"name":"モーリーファンタジー下関","address":"山口県下関市竹崎町４－４－７シーモールエスト４Ｆ","grid":[33.94936,130.924386],"machineNum":1,"prefId":35},{"name":"アミパラ下関店","address":"山口県下関市長府才川１丁目４２－４８","grid":[34.02533,131.007485],"machineNum":1,"prefId":35},{"name":"アミュージアム周南","address":"山口県下松市中央町２１－３ＴＨＥ　ＭＡＬＬ周南３Ｆ","grid":[34.018795,131.863382],"machineNum":1,"prefId":35},{"name":"ふぇすたらんど下松","address":"山口県下松市南花岡六丁目８番１号　サンリブ下松店内","grid":[34.030647,131.865474],"machineNum":1,"prefId":35},{"name":"娯楽座メリーゴーランド周東","address":"山口県岩国市周東町下久原４３６ザ・ビッグ周東店内","grid":[34.090115,132.06275],"machineNum":1,"prefId":35},{"name":"ペリカン南岩国","address":"山口県岩国市南岩国町１－２０－３０ゆめタウン南岩国内２Ｆ","grid":[34.134906,132.20258],"machineNum":1,"prefId":35},{"name":"フジグラン岩国","address":"山口県岩国市麻里布町二丁目９番８号","grid":[34.168692,132.223372],"machineNum":1,"prefId":35},{"name":"モーリーファンタジー光","address":"山口県光市浅江字木園１７５６－１イオン２Ｆ","grid":[33.978898,131.927797],"machineNum":1,"prefId":35},{"name":"テクモピア阿知須店","address":"山口県山口市阿知須４８２５－１サンパークあじす２階","grid":[34.009565,131.35187],"machineNum":1,"prefId":35},{"name":"フジグラン山口","address":"山口県山口市黒川３７３６番地","grid":[34.137633,131.436373],"machineNum":1,"prefId":35},{"name":"ＡＧスクエア小郡","address":"山口県山口市小郡前田町３－６","grid":[34.086998,131.398637],"machineNum":1,"prefId":35},{"name":"ペリカン山口","address":"山口県山口市大内御堀１３０２－１ゆめタウン山口内２Ｆ","grid":[34.137896,131.496279],"machineNum":1,"prefId":35},{"name":"ＴＨＥ３ＲＤＰＬＡＮＥＴ山口","address":"山口県山口市湯田温泉６－８－３","grid":[34.164708,131.452383],"machineNum":1,"prefId":35},{"name":"ペリカン新南陽","address":"山口県周南市清水２－２－１ゆめタウン新南陽内","grid":[34.070789,131.772528],"machineNum":1,"prefId":35},{"name":"ゆめパークゆめタウン徳山","address":"山口県周南市青山町１丁目１８番ゆめタウン徳山２Ｆ","grid":[34.042889,131.815518],"machineNum":1,"prefId":35},{"name":"フジグラン長門","address":"山口県長門市仙崎字網田３２２番地２","grid":[34.376933,131.193966],"machineNum":1,"prefId":35},{"name":"ふぇすたらんど萩","address":"山口県萩市大字唐桶町２－４サンリブ萩店内","grid":[34.408112,131.39905],"machineNum":1,"prefId":35},{"name":"ＳＯＹＵＦａｍｉｌｙＧａｍｅＦｉｅｌｄ防府店","address":"山口県防府市山口県防府市鐘紡町７番１号イオンタウン防府１Ｆ","grid":[34.04799,131.590249],"machineNum":1,"prefId":35},{"name":"ＰＡＬＯ防府","address":"山口県防府市中央町１－３","grid":[34.052394,131.569621],"machineNum":1,"prefId":35},{"name":"イオン防府","address":"山口県防府市中央町１－３玩具売場","grid":[34.052457,131.569789],"machineNum":1,"prefId":35},{"name":"ペリカン防府","address":"山口県防府市八王子２－８－８ゆめタウン防府内３Ｆ","grid":[34.058357,131.568515],"machineNum":1,"prefId":35},{"name":"テクモピア柳井店","address":"山口県柳井市駅南１－１１ミスターマックス柳井ショッピングセンターＡ棟","grid":[33.966086,132.103545],"machineNum":1,"prefId":35},{"name":"フジグラン阿南","address":"徳島県阿南市領家町土倉１０　玩具売場","grid":[33.920526,134.665684],"machineNum":1,"prefId":36},{"name":"ＰＡＬＯ小松島","address":"徳島県小松島市小松島町字領田２０番地小松島ショッピングプラザ　ルピア１Ｆ","grid":[34.005346,134.571801],"machineNum":1,"prefId":36},{"name":"パレパレ田宮","address":"徳島県徳島市南田宮２丁目２－４６","grid":[34.085991,134.542395],"machineNum":1,"prefId":36},{"name":"モーリーファンタジー徳島","address":"徳島県徳島市南末広町４－１　　イオンスタイル徳島　４Ｆ","grid":[34.062148,134.574011],"machineNum":1,"prefId":36},{"name":"セガ徳島スエヒロボウル","address":"徳島県徳島市南末広町４－９５－２","grid":[34.06172,134.573126],"machineNum":1,"prefId":36},{"name":"タイトーステーションフジグラン北島","address":"徳島県板野郡北島町鯛浜字西ノ須１７４番地","grid":[34.112697,134.546405],"machineNum":1,"prefId":36},{"name":"フジグラン北島","address":"徳島県板野郡北島町鯛浜字西ノ須１７４番地　玩具売場","grid":[34.112733,134.546412],"machineNum":1,"prefId":36},{"name":"おもちゃのイルカ","address":"徳島県板野郡藍住町奥野字東中須８８－１ゆめタウン徳島２Ｆ","grid":[34.11936,134.500638],"machineNum":1,"prefId":36},{"name":"ポップンパーク貞光　※無人店","address":"徳島県美馬郡つるぎ町貞光字中須賀３３－１","grid":[34.038264,134.063711],"machineNum":1,"prefId":36},{"name":"ふぇすたらんど脇町","address":"徳島県美馬郡脇町字拝原１７１１番地１山陽マルナカ脇町店２Ｆ","grid":[34.064695,134.165742],"machineNum":1,"prefId":36},{"name":"フジグラン石井","address":"徳島県名西郡石井町坂川原５４４番地１　玩具売場","grid":[34.083697,134.441971],"machineNum":1,"prefId":36},{"name":"ルネッサンスリゾートナルト","address":"徳島県鳴門市土佐泊浦字大毛１６－４５","grid":[34.220286,134.633029],"machineNum":1,"prefId":36},{"name":"モーリーファンタジー綾川","address":"香川県綾歌郡綾川町萱原８２２－１イオン３Ｆ","grid":[34.25162,133.930809],"machineNum":1,"prefId":37},{"name":"イオン綾川","address":"香川県綾歌郡綾川町萱原８２２－１玩具売場","grid":[34.25162,133.930809],"machineNum":1,"prefId":37},{"name":"ペリカン丸亀","address":"香川県丸亀市新田町１５０ゆめタウン丸亀内３Ｆ　玩具売場","grid":[34.27336,133.78539],"machineNum":1,"prefId":37},{"name":"フジグラン丸亀","address":"香川県丸亀市川西町南１２８０－１　玩具売場","grid":[34.240417,133.835745],"machineNum":1,"prefId":37},{"name":"タイトーステーション丸亀","address":"香川県丸亀市川西町南１２８０番地１　フジグラン丸亀　バッハ棟２Ｆ","grid":[34.241651,133.835173],"machineNum":1,"prefId":37},{"name":"トイザらス丸亀","address":"香川県丸亀市蓬莱町５６－１　パブリックプラザ丸亀内","grid":[34.295046,133.786489],"machineNum":1,"prefId":37},{"name":"ハローズ円座店","address":"香川県高松市円座町８４５－３","grid":[34.293952,134.011935],"machineNum":1,"prefId":37},{"name":"モーリーファンタジー高松","address":"香川県高松市香西本町１－１イオン３Ｆ","grid":[34.352416,134.005094],"machineNum":1,"prefId":37},{"name":"イオン高松","address":"香川県高松市香西本町１－１玩具売場","grid":[34.352942,134.005807],"machineNum":1,"prefId":37},{"name":"ペリカン高松","address":"香川県高松市三条町字中所６０８－１ゆめタウン高松内２Ｆ　玩具売場","grid":[34.314627,134.047283],"machineNum":1,"prefId":37},{"name":"フジグラン十川","address":"香川県高松市十川東町５５番地１　玩具売場","grid":[34.271739,134.109758],"machineNum":1,"prefId":37},{"name":"ハローズ高松春日","address":"香川県高松市春日町１０７２－１","grid":[34.327868,134.093611],"machineNum":1,"prefId":37},{"name":"プリズムストーン  高松店","address":"香川県高松市常磐町1-3-1瓦町FLAG3F　アニメガ高松店内","grid":[34.339143,134.052741],"machineNum":1,"prefId":37},{"name":"ヤマダ電機テックランドＮｅｗ高松レインボー通り","address":"香川県高松市伏石町２０８４玩具売場","grid":[34.31124,134.060136],"machineNum":1,"prefId":37},{"name":"アミュージアム高松店","address":"香川県高松市伏石町２１４４－９ 　１Ｆ","grid":[34.30771,134.060293],"machineNum":1,"prefId":37},{"name":"モーリーファンタジー高松東","address":"香川県高松市福岡町３-８-５イオン３F","grid":[34.34545,134.072733],"machineNum":1,"prefId":37},{"name":"ポップンパーク坂出","address":"香川県坂出市江尻町北新開１１６６－１","grid":[34.317728,133.871312],"machineNum":1,"prefId":37},{"name":"ペリカン三豊","address":"香川県三豊市豊中町本山甲２２番地ゆめタウン２Ｆ　玩具売場","grid":[34.145431,133.699405],"machineNum":1,"prefId":37},{"name":"ポップンパーク豊中","address":"香川県三豊市豊中町本山甲国繋９４４","grid":[34.141458,133.692684],"machineNum":1,"prefId":37},{"name":"エミフルＭＡＳＡＫＩ","address":"愛媛県伊予郡松前町筒井８５０番　玩具売場","grid":[33.788888,132.715267],"machineNum":1,"prefId":38},{"name":"フォレストハンター松前","address":"愛媛県伊予郡松前町筒井８５０番地エミフルＭＡＳＡＫＩＡＭ棟１Ｆ","grid":[33.787868,132.714865],"machineNum":1,"prefId":38},{"name":"フジグラン北宇和島","address":"愛媛県宇和島市伊吹町甲９１２番地２","grid":[33.235495,132.569893],"machineNum":1,"prefId":38},{"name":"楽市楽座イオンモール今治","address":"愛媛県今治市にぎわい広場１－１イオンモール今治新都市店２階２０２３","grid":[34.044365,132.962193],"machineNum":1,"prefId":38},{"name":"モーリーファンタジー今治新都市","address":"愛媛県今治市にぎわい広場１番地１イオンモール2階","grid":[34.044365,132.962193],"machineNum":1,"prefId":38},{"name":"ハローズ今治店","address":"愛媛県今治市土橋町１－４－２６","grid":[34.048012,133.007115],"machineNum":1,"prefId":38},{"name":"フジグラン今治","address":"愛媛県今治市東門町５丁目１３番地１号","grid":[34.06168,133.015087],"machineNum":1,"prefId":38},{"name":"ポップンパーク三島","address":"愛媛県四国中央市寒川町字神ノ木３５－５","grid":[33.972339,133.524963],"machineNum":1,"prefId":38},{"name":"フジグラン川之江","address":"愛媛県四国中央市妻鳥町１１３６－１　玩具売場","grid":[33.992911,133.574934],"machineNum":1,"prefId":38},{"name":"ふぇすたらんど川之江","address":"愛媛県四国中央市妻鳥町上樋ノ上１７９５－１イオン川之江店内","grid":[33.993428,133.567903],"machineNum":1,"prefId":38},{"name":"タイトーステーション衣山","address":"愛媛県松山市衣山１丁目１８８　パルティフジ内","grid":[33.85294,132.746617],"machineNum":1,"prefId":38},{"name":"フジグラン松山","address":"愛媛県松山市宮西１－２－１　玩具売場","grid":[33.84487,132.753082],"machineNum":1,"prefId":38},{"name":"アミパラ松山店","address":"愛媛県松山市生石町６５５－１","grid":[33.833782,132.744944],"machineNum":1,"prefId":38},{"name":"モーリーファンタジー南松山","address":"愛媛県松山市朝生田町５丁目１番２５号","grid":[33.821098,132.77292],"machineNum":1,"prefId":38},{"name":"イオン松山","address":"愛媛県松山市天山１丁目１３番５号","grid":[33.823518,132.776454],"machineNum":1,"prefId":38},{"name":"モーリーファンタジー松山","address":"愛媛県松山市天山１丁目１３番５号","grid":[33.823518,132.776454],"machineNum":1,"prefId":38},{"name":"ポップンパーク東石井","address":"愛媛県松山市東石井６丁目１６番３９号","grid":[33.813028,132.777779],"machineNum":1,"prefId":38},{"name":"ポップンパーク若水","address":"愛媛県新居浜市若水町２丁目６－５","grid":[33.968252,133.278213],"machineNum":1,"prefId":38},{"name":"フジグラン新居浜","address":"愛媛県新居浜市新須賀町２丁目１０番７号","grid":[33.967467,133.283423],"machineNum":1,"prefId":38},{"name":"プラサカプコン新居浜","address":"愛媛県新居浜市前田町８－８イオンモール新居浜２Ｆ","grid":[33.954788,133.267865],"machineNum":1,"prefId":38},{"name":"モーリーファンタジー新居浜","address":"愛媛県新居浜市前田町８番８号","grid":[33.954788,133.267865],"machineNum":1,"prefId":38},{"name":"フジグラン西条","address":"愛媛県西条市新田字北新田２３５番地","grid":[33.919495,133.181144],"machineNum":1,"prefId":38},{"name":"フジグラン大洲","address":"愛媛県大洲市中村２４６－１　玩具売場","grid":[33.51622,132.545097],"machineNum":1,"prefId":38},{"name":"フジグラン重信","address":"愛媛県東温市野田３丁目１－１３","grid":[33.795677,132.833474],"machineNum":1,"prefId":38},{"name":"フジグラン北浜","address":"愛媛県八幡浜市北浜一丁目４番３３号","grid":[33.461922,132.420723],"machineNum":1,"prefId":38},{"name":"タイトーＦステーション野市","address":"高知県香南市野市町西野２００７－１　フジグラン野市店内","grid":[33.561144,133.696299],"machineNum":1,"prefId":39},{"name":"フジグラン野市","address":"高知県香南市野市町西野２００７－１　玩具売場","grid":[33.560674,133.696653],"machineNum":1,"prefId":39},{"name":"ポップンパーク佐川","address":"高知県高岡郡高岡郡0889-20-0270","grid":[33.322832,133.097163],"machineNum":1,"prefId":39},{"name":"フジグラン葛島","address":"高知県高知市小倉町３番３０号　玩具売場","grid":[33.558661,133.567584],"machineNum":1,"prefId":39},{"name":"プラサカプコン高知","address":"高知県高知市秦南町１－４－８　イオンモール高知２Ｆ","grid":[33.576403,133.542493],"machineNum":1,"prefId":39},{"name":"イオン高知","address":"高知県高知市秦南町１－４－８玩具売場","grid":[33.576403,133.542493],"machineNum":1,"prefId":39},{"name":"モーリーファンタジー高知","address":"高知県高知市秦南町１丁目４－８イオン２Ｆ","grid":[33.576403,133.542493],"machineNum":1,"prefId":39},{"name":"フジグラン高知","address":"高知県高知市朝倉東町５２－１５　玩具売場","grid":[33.542684,133.498078],"machineNum":1,"prefId":39},{"name":"セガワールドフジグラン","address":"高知県高知市朝倉東町５２－１５フジグラン高知３階","grid":[33.542877,133.497849],"machineNum":1,"prefId":39},{"name":"フジグラン四万十","address":"高知県四万十市具同２２２２番地","grid":[32.98092,132.920558],"machineNum":1,"prefId":39},{"name":"フジ須崎","address":"高知県須崎市西町二丁目７番１５号","grid":[33.387758,133.279648],"machineNum":1,"prefId":39},{"name":"ペリカン遠賀","address":"福岡県遠賀郡遠賀町松の本1－1－1ゆめタウン遠賀２Ｆ","grid":[33.852236,130.669783],"machineNum":1,"prefId":40},{"name":"ヤマダ電機テックランド福岡香椎本店","address":"福岡県遠賀郡遠賀町松の本1-1-1ゆめタウン横賀2F","grid":[33.852209,130.669736],"machineNum":1,"prefId":40},{"name":"トイザらス久留米","address":"福岡県久留米市新合川１－３－３０","grid":[33.320378,130.537605],"machineNum":1,"prefId":40},{"name":"楽市街道くるめ","address":"福岡県久留米市新合川２丁目７番１０号久留米アミューズメントビル内","grid":[33.319712,130.542757],"machineNum":1,"prefId":40},{"name":"ふぇすたらんど久留米","address":"福岡県久留米市野中町１４１１－１サンリブ久留米店内","grid":[33.303253,130.530053],"machineNum":1,"prefId":40},{"name":"ふぇすたらんど古賀","address":"福岡県古賀市天神２丁目５－１サンリブ古賀店内","grid":[33.734503,130.466513],"machineNum":1,"prefId":40},{"name":"ペリカン行橋","address":"福岡県行橋市西宮市３丁目８－１ゆめタウン行橋内２Ｆ　玩具売場","grid":[33.72025,130.967413],"machineNum":1,"prefId":40},{"name":"ペリカン宗像","address":"福岡県宗像市田久２－１－１ゆめタウン宗像内２Ｆ","grid":[33.805983,130.568178],"machineNum":1,"prefId":40},{"name":"西友ザ・モール春日","address":"福岡県春日市春日５－１７　玩具売場","grid":[33.516301,130.470669],"machineNum":1,"prefId":40},{"name":"ミスターマックス春日","address":"福岡県春日市星見ヶ丘４－７","grid":[33.506214,130.455174],"machineNum":1,"prefId":40},{"name":"楽市楽座２１０トリアス","address":"福岡県糟屋郡久山町大字山田９９０","grid":[33.652907,130.491963],"machineNum":1,"prefId":40},{"name":"イオン福岡東","address":"福岡県糟屋郡志免町大字御手洗字高原６　玩具売場","grid":[33.606068,130.44463],"machineNum":1,"prefId":40},{"name":"ゆめマート新宮店","address":"福岡県糟屋郡新宮町緑ヶ浜４丁目１８－１玩具売場","grid":[33.71272,130.447177],"machineNum":1,"prefId":40},{"name":"モーリーファンタジー福岡","address":"福岡県糟屋郡粕屋町大字酒殿字老ノ木１９２－１イオン２Ｆ","grid":[33.61073,130.480559],"machineNum":1,"prefId":40},{"name":"楽市楽座イオンモール福岡","address":"福岡県糟屋郡粕屋町大字酒殿字老ノ木１９２番地１イオンモール福岡店２階","grid":[33.599082,130.484727],"machineNum":1,"prefId":40},{"name":"ペリカン大川","address":"福岡県大川市大字上巻字野口４３０－１ゆめタウン大川内２Ｆ　玩具売場","grid":[33.202934,130.388051],"machineNum":1,"prefId":40},{"name":"パスカワールド大牟田","address":"福岡県大牟田市旭町２丁目２８－１ゆめタウン大牟田店２Ｆ","grid":[33.035791,130.452082],"machineNum":1,"prefId":40},{"name":"ＰＡＬＯ博多","address":"福岡県大牟田市博多区住吉１－２－２２","grid":[33.589319,130.411099],"machineNum":1,"prefId":40},{"name":"イオン大牟田","address":"福岡県大牟田市岬町３－４　イオン２Ｆ玩具売場","grid":[33.030674,130.428013],"machineNum":1,"prefId":40},{"name":"モーリーファンタジー大牟田","address":"福岡県大牟田市岬町３－４イオン2階","grid":[33.030674,130.428013],"machineNum":1,"prefId":40},{"name":"楽市楽座イオンモール大牟田","address":"福岡県大牟田市岬町３番４イオンモール大牟田店２階","grid":[33.030674,130.428013],"machineNum":1,"prefId":40},{"name":"モーリーファンタジー大野城","address":"福岡県大野城市錦町４－１－１　イオン３Ｆ","grid":[33.537961,130.475661],"machineNum":1,"prefId":40},{"name":"イオン大野城","address":"福岡県大野城市錦町４－１－１　玩具売場","grid":[33.538022,130.476002],"machineNum":1,"prefId":40},{"name":"モーリーファンタジー筑後","address":"福岡県筑後市大字上北島字井原口１２５９－１トライアル筑後店１Ｆ","grid":[33.20387,130.493688],"machineNum":1,"prefId":40},{"name":"ペリカン筑紫野","address":"福岡県筑紫野市針摺東３－３－１ゆめタウン筑紫野内２Ｆ","grid":[33.484317,130.538339],"machineNum":1,"prefId":40},{"name":"モーリーファンタジー筑紫野","address":"福岡県筑紫野市大字立明寺４３４－１イオン３Ｆ","grid":[33.481073,130.526528],"machineNum":1,"prefId":40},{"name":"イオン筑紫野","address":"福岡県筑紫野市立明寺４３４－１　玩具売場","grid":[33.481073,130.526528],"machineNum":1,"prefId":40},{"name":"楽市楽座イオンモール筑紫野","address":"福岡県筑紫野市立明寺４３４－１イオンモール筑紫野店３階","grid":[33.481073,130.526528],"machineNum":1,"prefId":40},{"name":"モーリーファンタジーなかま","address":"福岡県中間市上蓮花寺１-１-１イオン１F","grid":[33.823335,130.723279],"machineNum":1,"prefId":40},{"name":"モーリーファンタジー中間","address":"福岡県中間市上蓮花寺１丁目１番１号ショッパーズモールなかま店　１Ｆ","grid":[33.823335,130.723279],"machineNum":1,"prefId":40},{"name":"ＳＥＧＡＡＲＥＮＡ中間","address":"福岡県中間市上蓮花寺３－１－１","grid":[33.823083,130.721719],"machineNum":1,"prefId":40},{"name":"スペースタイム２５イオン甘木","address":"福岡県朝倉市甘木岩入３８０番地イオン甘木２階","grid":[33.421324,130.656053],"machineNum":1,"prefId":40},{"name":"プラサカプコン直方","address":"福岡県直方市湯野原２－１－１　イオンモール直方２Ｆ","grid":[33.768585,130.749644],"machineNum":1,"prefId":40},{"name":"イオン直方","address":"福岡県直方市湯野原２－１－１　玩具売場","grid":[33.768585,130.749644],"machineNum":1,"prefId":40},{"name":"モーリーファンタジー直方","address":"福岡県直方市湯野原２丁目１番１号イオン２Ｆ","grid":[33.768585,130.749644],"machineNum":1,"prefId":40},{"name":"モーリーファンタジー田川","address":"福岡県田川市大字伊田４６１６トライアル田川店１Ｆ","grid":[33.652728,130.809144],"machineNum":1,"prefId":40},{"name":"ふぇすたらんど田川","address":"福岡県田川市大字川宮１６９３－１サンリブ田川店内","grid":[33.64949,130.798064],"machineNum":1,"prefId":40},{"name":"キデイランド穂波","address":"福岡県飯塚市枝国長浦６６６－４８","grid":[33.637342,130.673737],"machineNum":1,"prefId":40},{"name":"イオン穂波","address":"福岡県飯塚市枝国長浦６６６－４８　玩具売場","grid":[33.634397,130.670498],"machineNum":1,"prefId":40},{"name":"モーリーファンタジー飯塚","address":"福岡県飯塚市大字徳前１－４　トライアル飯塚店１Ｆ","grid":[33.632048,130.683043],"machineNum":1,"prefId":40},{"name":"モーリーファンタジー福重","address":"福岡県福岡市西区拾六町１－７－１","grid":[33.56725,130.314872],"machineNum":1,"prefId":40},{"name":"タイトーステーション　マリノア店","address":"福岡県福岡市西区小戸２－１２－３０　マリノアシティ福岡　マリナサイド棟　２Ｆ","grid":[33.595147,130.322745],"machineNum":1,"prefId":40},{"name":"イオン福岡伊都","address":"福岡県福岡市西区徳永１１３－１　玩具売場","grid":[33.570141,130.256512],"machineNum":1,"prefId":40},{"name":"モーリーファンタジー福岡伊都","address":"福岡県福岡市西区徳永１１３－１イオンモール３Ｆ","grid":[33.570141,130.256512],"machineNum":1,"prefId":40},{"name":"モーリーファンタジーマリナタウン","address":"福岡県福岡市西区豊浜３-１-１０","grid":[33.58945,130.333909],"machineNum":1,"prefId":40},{"name":"楽市楽座イオンモール福岡伊都","address":"福岡県福岡市西区北原１丁目３番１号イオンモール福岡伊都店別館","grid":[33.577152,130.256386],"machineNum":1,"prefId":40},{"name":"イオン原","address":"福岡県福岡市早良区原６－２７－５２　玩具売場","grid":[33.564539,130.34206],"machineNum":1,"prefId":40},{"name":"モーリーファンタジー原","address":"福岡県福岡市早良区原６丁目２７番８号イオン３Ｆ","grid":[33.564537,130.341953],"machineNum":1,"prefId":40},{"name":"モーリーファンタジー笹丘","address":"福岡県福岡市中央区笹丘１－２８－７４","grid":[33.564983,130.376842],"machineNum":1,"prefId":40},{"name":"ビックカメラ天神","address":"福岡県福岡市中央区天神２－４－５","grid":[33.587594,130.39859],"machineNum":1,"prefId":40},{"name":"タイトーステーション福岡天神","address":"福岡県福岡市中央区天神２－６－３５サザンクロスビル","grid":[33.589624,130.397327],"machineNum":1,"prefId":40},{"name":"プリズムストーン  福岡店","address":"福岡県福岡市中央区天神2丁目11-1　福岡パルコ　西鉄増床部7F　アニメガリミテッドストア福岡パルコ店内","grid":[33.590556,130.398874],"machineNum":1,"prefId":40},{"name":"トイザらス福岡香椎","address":"福岡県福岡市東区香椎浜３１２－１","grid":[33.65555,130.427437],"machineNum":1,"prefId":40},{"name":"モーリーファンタジー香椎浜","address":"福岡県福岡市東区香椎浜３－１２－１イオンモール２Ｆ","grid":[33.654883,130.45506],"machineNum":1,"prefId":40},{"name":"家電住まいる館ＹＡＭＡＤＡ福岡香椎本店","address":"福岡県福岡市東区千早５－８－１","grid":[33.654869,130.440301],"machineNum":1,"prefId":40},{"name":"ＡＢＣパレード博多店","address":"福岡県福岡市東区東浜１－１－１ゆめタウン玩具売場２Ｆ","grid":[33.612158,130.411981],"machineNum":1,"prefId":40},{"name":"楽市街道箱崎","address":"福岡県福岡市東区箱崎５丁目１番８号","grid":[33.624248,130.419627],"machineNum":1,"prefId":40},{"name":"ジーカム和白","address":"福岡県福岡市東区和白３－２７－６９","grid":[33.690709,130.431889],"machineNum":1,"prefId":40},{"name":"タイトーステーション　博多パピヨンプラザ店","address":"福岡県福岡市博多区千代１－２－１７","grid":[33.602644,130.419885],"machineNum":1,"prefId":40},{"name":"遊遊パークフォレスト博多","address":"福岡県福岡市博多区東那珂１－１４－４６フォレオ博多２Ｆ","grid":[33.574195,130.439696],"machineNum":1,"prefId":40},{"name":"ヨドバシカメラ博多","address":"福岡県福岡市博多区博多駅中央街６－１２　２階玩具フロア","grid":[33.588122,130.421684],"machineNum":1,"prefId":40},{"name":"タイトーステーションヨドバシ博多","address":"福岡県福岡市博多区博多駅中央街６ー１２","grid":[33.588122,130.421684],"machineNum":1,"prefId":40},{"name":"イオン福津","address":"福岡県福津市７９３（福間駅東地区１００街区１画地）　玩具売場","grid":[33.762632,130.495542],"machineNum":1,"prefId":40},{"name":"モーリーファンタジー福津","address":"福岡県福津市７９３番地イオン２Ｆ","grid":[33.766763,130.491062],"machineNum":1,"prefId":40},{"name":"楽市楽座イオンモール福津","address":"福岡県福津市日蒔野６丁目１６番地の１イオンモール福津店３階","grid":[33.753469,130.493851],"machineNum":1,"prefId":40},{"name":"イオン戸畑","address":"福岡県北九州市戸畑区汐井町２－２　玩具売場","grid":[33.896144,130.819681],"machineNum":1,"prefId":40},{"name":"イオン若松","address":"福岡県北九州市若松区二島１－３－１　玩具売場","grid":[33.891803,130.743857],"machineNum":1,"prefId":40},{"name":"モーリーファンタジー若松","address":"福岡県北九州市若松区二島１－３－１イオン２Ｆ","grid":[33.891803,130.743857],"machineNum":1,"prefId":40},{"name":"タイトーステーション サニーサイドモール小倉","address":"福岡県北九州市小倉南区下曽根新町１０－１","grid":[33.832316,130.933174],"machineNum":1,"prefId":40},{"name":"コジマ×ビックカメラ小倉店","address":"福岡県北九州市小倉南区上葛原２－１８－１トイズコーナー","grid":[33.837702,130.909416],"machineNum":1,"prefId":40},{"name":"楽市楽座サンリブシティ小倉","address":"福岡県北九州市小倉南区上葛原２丁目１４番１サンリブシティ小倉店２階","grid":[33.838589,130.907997],"machineNum":1,"prefId":40},{"name":"楽市楽座砂津","address":"福岡県北九州市小倉北区砂津３丁目１－１チャチャタウン小倉店Ｂ棟３階","grid":[33.883428,130.888775],"machineNum":1,"prefId":40},{"name":"タイトーステーションリバーウォーク店","address":"福岡県北九州市小倉北区室町１ー１－１","grid":[33.885886,130.875155],"machineNum":1,"prefId":40},{"name":"小倉メトロポリス","address":"福岡県北九州市小倉北区西港町２７－５","grid":[33.896646,130.858151],"machineNum":1,"prefId":40},{"name":"ミスターマックス八幡西","address":"福岡県北九州市八幡西区真名子２－４－１","grid":[33.783801,130.730193],"machineNum":1,"prefId":40},{"name":"パスカランド黒崎","address":"福岡県北九州市八幡西区西曲里町３－１　イオンタウン黒崎店内","grid":[33.859786,130.76025],"machineNum":1,"prefId":40},{"name":"トイザらス八幡","address":"福岡県北九州市八幡東区東田３－２－１０２　イオンモール八幡東１Ｆ","grid":[33.87043,130.811038],"machineNum":1,"prefId":40},{"name":"モーリーファンタジー八幡東","address":"福岡県北九州市八幡東区東田３丁目２－１０２イオン３Ｆ","grid":[33.87043,130.811038],"machineNum":1,"prefId":40},{"name":"あおきモラージュ佐賀","address":"佐賀県佐賀市巨勢町大字牛島７３０モラージュ佐賀南館２Ｆ","grid":[33.252554,130.318591],"machineNum":1,"prefId":41},{"name":"イオン佐賀大和","address":"佐賀県佐賀市大和町大字尼寺３５３５番　玩具売場","grid":[33.304133,130.280621],"machineNum":1,"prefId":41},{"name":"モーリーファンタジー佐賀大和","address":"佐賀県佐賀市大和町大字尼寺３５３５番地イオンモール２Ｆ","grid":[33.304188,130.280646],"machineNum":1,"prefId":41},{"name":"ポップンパーク佐賀","address":"佐賀県佐賀市東与賀町大字下古賀字一本杉８７番地１","grid":[33.222569,130.308258],"machineNum":1,"prefId":41},{"name":"モーリーファンタジー唐津","address":"佐賀県唐津市鏡字立神４６７１　イオン２Ｆ","grid":[33.432105,130.009461],"machineNum":1,"prefId":41},{"name":"イオン唐津","address":"佐賀県唐津市鏡字立神４６７１イオン２Ｆ","grid":[33.432105,130.009461],"machineNum":1,"prefId":41},{"name":"ペリカン武雄","address":"佐賀県武雄市武雄町大字武雄４９９２ゆめタウン武雄内２Ｆ　玩具売場","grid":[33.18296,130.019722],"machineNum":1,"prefId":41},{"name":"モーリーファンタジー壱岐","address":"長崎県壱岐市芦辺町箱崎中山触字干拓２６０４－２ダイエー壱岐店２Ｆ","grid":[33.81024,129.751437],"machineNum":1,"prefId":42},{"name":"イオン壱岐","address":"長崎県壱岐市芦辺町箱崎中山触字干拓２６０４－２玩具売場","grid":[33.81024,129.751437],"machineNum":1,"prefId":42},{"name":"楽市楽座諫早","address":"長崎県諌早市長野町１０８６番地１７","grid":[32.833562,130.075884],"machineNum":1,"prefId":42},{"name":"イオン大塔","address":"長崎県佐世保市大塔町１４－２　玩具売場","grid":[33.148694,129.780044],"machineNum":1,"prefId":42},{"name":"モーリーファンタジー大塔","address":"長崎県佐世保市大塔町１４－２イオン３Ｆ","grid":[33.148694,129.780044],"machineNum":1,"prefId":42},{"name":"イオン佐世保","address":"長崎県佐世保市島瀬町１０－９　玩具売場","grid":[33.171172,129.720557],"machineNum":1,"prefId":42},{"name":"スペースタイム２５イオン佐世保","address":"長崎県佐世保市島瀬町１０－９イオン佐世保８階","grid":[33.171241,129.720598],"machineNum":1,"prefId":42},{"name":"イオン時津","address":"長崎県西彼杵郡時津町浜田郷７５１－５　玩具売場","grid":[32.831335,129.863151],"machineNum":1,"prefId":42},{"name":"モーリーファンタジー時津","address":"長崎県西彼杵郡時津町浜田郷７５１－５イオン２Ｆ","grid":[32.831335,129.863151],"machineNum":1,"prefId":42},{"name":"イオン大村","address":"長崎県大村市幸町２５－２００　玩具売場","grid":[32.901346,129.953922],"machineNum":1,"prefId":42},{"name":"モーリーファンタジー大村","address":"長崎県大村市幸町２５－２００イオン２Ｆ","grid":[32.900026,129.957863],"machineNum":1,"prefId":42},{"name":"ミスターマックス長崎","address":"長崎県長崎市岩見町２６－１","grid":[32.76815,129.851843],"machineNum":1,"prefId":42},{"name":"モーリーファンタジー長崎","address":"長崎県長崎市新地町３－１７イオン長崎店５Ｆ","grid":[32.741659,129.874312],"machineNum":1,"prefId":42},{"name":"イオンチトセピア","address":"長崎県長崎市千歳町５－１玩具売場","grid":[32.79031,129.861758],"machineNum":1,"prefId":42},{"name":"モーリーファンタジーチトセピア","address":"長崎県長崎市千歳町５番１号","grid":[32.790352,129.861689],"machineNum":1,"prefId":42},{"name":"モーリーファンタジー東長崎","address":"長崎県長崎市田中町１０２７－８　イオン２Ｆ","grid":[32.768372,129.952382],"machineNum":1,"prefId":42},{"name":"イオン東長崎","address":"長崎県長崎市田中町１０２７－８　玩具売場","grid":[32.768463,129.952355],"machineNum":1,"prefId":42},{"name":"タイトーステーションアミュプラザ長崎２","address":"長崎県長崎市尾上町１－１アミュプラザ長崎４Ｆ","grid":[32.751755,129.871006],"machineNum":1,"prefId":42},{"name":"セガワールド長崎ココウォーク","address":"長崎県長崎市茂里町１番５５号　みらい長崎ココウォーク５階","grid":[32.762322,129.864739],"machineNum":1,"prefId":42},{"name":"あおき長崎葉山","address":"長崎県長崎市葉山１丁目28-15S＆B葉山ショッピングプラザ１F","grid":[32.805291,129.84898],"machineNum":1,"prefId":42},{"name":"モーリーファンタジー有家","address":"長崎県南島原市有家町山川１３５－１　イオン1F","grid":[32.663496,130.309163],"machineNum":1,"prefId":42},{"name":"イオン有家","address":"長崎県南島原市有家町山川１３５－１玩具売場","grid":[32.663496,130.309163],"machineNum":1,"prefId":42},{"name":"ぴのきお","address":"長崎県北松浦郡佐々町本田原免７３－３　マックスバリュー佐々店２Ｆ","grid":[33.239869,129.649912],"machineNum":1,"prefId":42},{"name":"パスカワールド宇土","address":"熊本県宇土市善道寺町綾織９５宇土シティモール内","grid":[32.680566,130.674017],"machineNum":1,"prefId":43},{"name":"イオン菊陽","address":"熊本県菊池郡菊陽町津久礼２４７２　玩具売場","grid":[32.862005,130.801206],"machineNum":1,"prefId":43},{"name":"タイトーステーションゆめタウン光の森店","address":"熊本県菊池郡菊陽町津久礼３３１０","grid":[32.856097,130.799446],"machineNum":1,"prefId":43},{"name":"ピノキオランド玉名","address":"熊本県玉名市亀甲字前田１１０カリーノ玉名店２Ｆ","grid":[32.928054,130.555465],"machineNum":1,"prefId":43},{"name":"トイザらス熊本","address":"熊本県熊本市上南部２－２－２　ゆめタウンサンピアン１Ｆ","grid":[32.827043,130.76342],"machineNum":1,"prefId":43},{"name":"モーリーファンタジー田崎","address":"熊本県熊本市西区田崎町字下寄３８０番地イオンタウン１階","grid":[32.782357,130.677188],"machineNum":1,"prefId":43},{"name":"アムズ下通り","address":"熊本県熊本市中央区手取本町４－１２","grid":[32.80268,130.709372],"machineNum":1,"prefId":43},{"name":"モーリーファンタジー熊本中央","address":"熊本県熊本市中央区大江４－２－１","grid":[32.80009,130.718707],"machineNum":1,"prefId":43},{"name":"ペリカンはません","address":"熊本県熊本市田井島１－２－１ゆめタウンはません内２Ｆ","grid":[32.77158,130.726497],"machineNum":1,"prefId":43},{"name":"サンゲームス熊本インタープラザ","address":"熊本県熊本市東区御領８－４－８２","grid":[32.831,130.771382],"machineNum":1,"prefId":43},{"name":"パスカワールド長嶺","address":"熊本県熊本市東区長嶺西１－５－１シュロアモール長嶺店内","grid":[32.812744,130.761187],"machineNum":1,"prefId":43},{"name":"パスカランドはません","address":"熊本県熊本市南区田井島１丁目２－１ゆめタウンはません３階","grid":[32.771654,130.726312],"machineNum":1,"prefId":43},{"name":"パスカワールドグリーンランド","address":"熊本県荒尾市本井手１５７４番５４","grid":[32.987947,130.471125],"machineNum":1,"prefId":43},{"name":"モーリーファンタジーあらおシティーモール","address":"熊本県荒尾市緑ヶ丘１－１－１あらおシティーモール２Ｆ","grid":[32.982538,130.470646],"machineNum":1,"prefId":43},{"name":"ペリカンあらお","address":"熊本県荒尾市緑ケ丘１丁目１－１－２Ｆあらおシティモール","grid":[32.982538,130.470646],"machineNum":1,"prefId":43},{"name":"ＦＥＳＴＡ山鹿","address":"熊本県山鹿市方保田字鳥越３４６８－１Ｍｒ．Ｍａｘ山鹿ショッピングセンター内","grid":[33.004723,130.723035],"machineNum":1,"prefId":43},{"name":"イオン熊本","address":"熊本県上益城郡嘉島町上島字長池２２３２　イオン２Ｆ玩具売場","grid":[32.737618,130.753867],"machineNum":1,"prefId":43},{"name":"モーリーファンタジー熊本","address":"熊本県上益城郡嘉島町上島字長池２２３２イオン２Ｆ","grid":[32.737618,130.753867],"machineNum":1,"prefId":43},{"name":"楽市楽座イオンモール熊本","address":"熊本県上益城郡嘉島町大字上島長池２２３２","grid":[32.737618,130.753867],"machineNum":1,"prefId":43},{"name":"ＦＥＳＴＡ人吉","address":"熊本県人吉市宝来町１３０７－１人吉レックス内","grid":[32.212048,130.748247],"machineNum":1,"prefId":43},{"name":"モーリーファンタジー天草","address":"熊本県天草市　亀場町食場後山下７４０イオン２Ｆ","grid":[32.428305,130.173422],"machineNum":1,"prefId":43},{"name":"イオン八代","address":"熊本県八代市沖町六番割３９８７－３　玩具売場","grid":[32.527467,130.582625],"machineNum":1,"prefId":43},{"name":"モーリーファンタジー八代","address":"熊本県八代市沖町六番割３９８７－３イオン２Ｆ","grid":[32.52497,130.584931],"machineNum":1,"prefId":43},{"name":"タイトーステーションゆめタウン八代","address":"熊本県八代市建馬町３－１ゆめタウン八代２Ｆ","grid":[32.505968,130.585563],"machineNum":1,"prefId":43},{"name":"ミスターマックス宇佐","address":"大分県宇佐市大字法鏡寺５００","grid":[33.524534,131.34809],"machineNum":1,"prefId":44},{"name":"ＦＥＳＴＡコスモタウン佐伯","address":"大分県佐伯市鶴岡西町２丁目１６３番地コスモタウン佐伯内","grid":[32.960973,131.866225],"machineNum":1,"prefId":44},{"name":"イオンパークプレイス大分","address":"大分県大分市公園通り西２－１　玩具売場","grid":[33.195832,131.656799],"machineNum":1,"prefId":44},{"name":"モーリーファンタジーパークプレイス大分","address":"大分県大分市公園通り西２丁目－１イオン２Ｆ","grid":[33.195832,131.656799],"machineNum":1,"prefId":44},{"name":"プラサカプコン大分店","address":"大分県大分市公園通り西２丁目１番　パークプレイス大分２Ｆ","grid":[33.195832,131.656799],"machineNum":1,"prefId":44},{"name":"イオン高城","address":"大分県大分市高城西町２８－１　玩具売場","grid":[33.240977,131.652904],"machineNum":1,"prefId":44},{"name":"ＦＥＳＴＡフリーモールわさだ","address":"大分県大分市大字木上字鉾手２１０２番地フリーモールわさだ内","grid":[33.184726,131.568071],"machineNum":1,"prefId":44},{"name":"タイトーＦステーションセントポルタ大分","address":"大分県大分市中央町２－１－１","grid":[33.235356,131.606353],"machineNum":1,"prefId":44},{"name":"セガワールド高城","address":"大分県大分市牧１－１６１－８","grid":[33.235153,131.64041],"machineNum":1,"prefId":44},{"name":"タイトーステーションアミュプラザおおいた","address":"大分県大分市要町１－１４　アミュプラザおおいた４F","grid":[33.233146,131.606326],"machineNum":1,"prefId":44},{"name":"セガワールド中津","address":"大分県中津市沖代町１－２－１６","grid":[33.591197,131.201938],"machineNum":1,"prefId":44},{"name":"ユーズランド三光店","address":"大分県中津市三光佐知１０３２イオンモール三光２Ｆ","grid":[33.55815,131.193739],"machineNum":1,"prefId":44},{"name":"モーリーファンタジー三光","address":"大分県中津市三光佐知１０３２イオン三光店２F","grid":[33.55815,131.193739],"machineNum":1,"prefId":44},{"name":"ペリカン中津","address":"大分県中津市大字島田１３４－１ゆめタウン中津内３Ｆ　玩具売場","grid":[33.596326,131.186348],"machineNum":1,"prefId":44},{"name":"モーリーファンタジー日田","address":"大分県日田市南元町１４－２２イオン2階","grid":[33.315271,130.939164],"machineNum":1,"prefId":44},{"name":"ペリカン別府","address":"大分県別府市楠町３８２－７ゆめタウン別府内３Ｆ　玩具売場","grid":[33.276255,131.507754],"machineNum":1,"prefId":44},{"name":"モーリーファンタジー狭間","address":"大分県由布市挾間町北方７７番地　玩具売場","grid":[33.206477,131.522271],"machineNum":1,"prefId":44},{"name":"イオン延岡","address":"宮崎県延岡市旭町２－２－１　玩具売場","grid":[32.572433,131.670152],"machineNum":1,"prefId":45},{"name":"モーリーファンタジー延岡","address":"宮崎県延岡市旭町２－２－１イオン２Ｆ","grid":[32.572433,131.670152],"machineNum":1,"prefId":45},{"name":"ゲオ延岡","address":"宮崎県延岡市出北３丁目１９番１７号","grid":[32.572389,131.682763],"machineNum":1,"prefId":45},{"name":"イオン宮崎","address":"宮崎県宮崎市新別府町江口８６２－１　玩具売場","grid":[31.922628,131.456402],"machineNum":1,"prefId":45},{"name":"モーリーファンタジー宮崎","address":"宮崎県宮崎市新別府町江口８６２－１イオン２Ｆ","grid":[31.922628,131.456402],"machineNum":1,"prefId":45},{"name":"楽市楽座イオンモール宮崎","address":"宮崎県宮崎市新別府町江口８６２－１イオンモール宮崎店２階","grid":[31.922628,131.456402],"machineNum":1,"prefId":45},{"name":"モーリーファンタジー南宮崎","address":"宮崎県宮崎市大淀４－７－３０　玩具売場","grid":[31.895376,131.419338],"machineNum":1,"prefId":45},{"name":"ﾋﾟﾉｷｵﾗﾝﾄﾞ　西都店","address":"宮崎県西都市小野崎町１－７６　　西都ショッピングセンターパオ ２Ｆ","grid":[32.106462,131.404326],"machineNum":1,"prefId":45},{"name":"モーリーファンタジー都城駅前","address":"宮崎県都城市栄町４６７２－５イオン都城駅前２階","grid":[31.735229,131.079961],"machineNum":1,"prefId":45},{"name":"MEGAドン・キホーテ都城","address":"宮崎県都城市上川東４－５９４８－１","grid":[31.74691,131.078869],"machineNum":1,"prefId":45},{"name":"サンゲームス都城北","address":"宮崎県都城市上川東４－５９９７－４","grid":[31.749023,131.079009],"machineNum":1,"prefId":45},{"name":"モーリーファンタジー都城","address":"宮崎県都城市早鈴町１９５０番地イオン２Ｆ","grid":[31.714656,131.075727],"machineNum":1,"prefId":45},{"name":"イオン都城","address":"宮崎県都城市早鈴町１９９０　玩具売場","grid":[31.714738,131.075932],"machineNum":1,"prefId":45},{"name":"イオン日向","address":"宮崎県日向市大字日知屋字古田町６１－１　玩具売場","grid":[32.424057,131.652607],"machineNum":1,"prefId":45},{"name":"モーリーファンタジー日向","address":"宮崎県日向市日知屋字古田町６１－１イオン２Ｆ","grid":[32.424057,131.652607],"machineNum":1,"prefId":45},{"name":"ピノキオランド日南","address":"宮崎県日南市材木町１日南ショッピングセンター２Ｆ","grid":[31.587148,131.40184],"machineNum":1,"prefId":45},{"name":"モーリーファンタジー姶良","address":"鹿児島県姶良市西餅田264-1イオン3階","grid":[31.732129,130.626356],"machineNum":1,"prefId":46},{"name":"楽市楽座イオンタウン姶良","address":"鹿児島県姶良市東餅田３３６　イオンタウン姶良店２階","grid":[31.733179,130.628636],"machineNum":1,"prefId":46},{"name":"イオンプラザ大島（タイトーゲーム）","address":"鹿児島県奄美市名瀬小浜町２３－１","grid":[28.384068,129.500913],"machineNum":1,"prefId":46},{"name":"ダイエープラザ大島","address":"鹿児島県奄美市名瀬小浜町２３－１玩具売場","grid":[28.384042,129.500832],"machineNum":1,"prefId":46},{"name":"タイヨー浦上","address":"鹿児島県奄美市名瀬大字浦上字緑1133-4","grid":[28.387398,129.540997],"machineNum":1,"prefId":46},{"name":"モーリーファンタジー鹿児島鴨池","address":"鹿児島県鹿児島市鴨池２－２６－３０","grid":[31.562665,130.550719],"machineNum":1,"prefId":46},{"name":"ビックカメラ鹿児島中央駅店","address":"鹿児島県鹿児島市中央町１－１　１階トイズコーナー","grid":[31.583909,130.540301],"machineNum":1,"prefId":46},{"name":"タイトーステーションアミュプラザ鹿児島","address":"鹿児島県鹿児島市中央町１－１アミュプラザ鹿児島本館６階","grid":[31.58448,130.542628],"machineNum":1,"prefId":46},{"name":"モーリーファンタジー鹿児島","address":"鹿児島県鹿児島市東開町７イオンモール３Ｆ","grid":[31.527679,130.537828],"machineNum":1,"prefId":46},{"name":"ＴＨＥ３ＲＤＰＬＡＮＥＴジャングルパーク鹿児島","address":"鹿児島県鹿児島市与次郎１丁目１１番１号フレスポジャングルパーク２Ｆ","grid":[31.570505,130.565531],"machineNum":1,"prefId":46},{"name":"ＴＨＥ３ＲＤＰＬＡＮＥＴフレスポ国分","address":"鹿児島県霧島市国分広瀬2丁目4番1号フレスポ国分内","grid":[31.722383,130.756838],"machineNum":1,"prefId":46},{"name":"モーリーファンタジー隼人国分","address":"鹿児島県霧島市隼人町見次１２２９　イオン２Ｆ","grid":[31.738281,130.74187],"machineNum":1,"prefId":46},{"name":"（株）サンエー具志川メインシティ店","address":"沖縄県うるま市江洲４５０－１　２Ｆ玩具売場","grid":[26.352636,127.825694],"machineNum":1,"prefId":47},{"name":"サンエー石川ショッピングセンター","address":"沖縄県うるま市石川赤崎２－１－１玩具売場","grid":[26.433196,127.834458],"machineNum":1,"prefId":47},{"name":"モーリーファンタジー具志川","address":"沖縄県うるま市前原幸崎原３０３番地イオン２Ｆ","grid":[26.340736,127.847251],"machineNum":1,"prefId":47},{"name":"モーリーファンタジー浦添","address":"沖縄県浦添市城間４－７－１浦添ショッピングセンター３Ｆ","grid":[26.258492,127.712869],"machineNum":1,"prefId":47},{"name":"ゲオ西原","address":"沖縄県浦添市当山２丁目２番３号","grid":[26.252822,127.736172],"machineNum":1,"prefId":47},{"name":"モーリーファンタジー糸満","address":"沖縄県糸満市字兼城４００番地サンプラザいとまん店１Ｆ","grid":[26.139078,127.672542],"machineNum":1,"prefId":47},{"name":"（株）サンエーしおざきシティ店","address":"沖縄県糸満市潮崎町２－２　玩具売り場","grid":[26.122945,127.668137],"machineNum":1,"prefId":47},{"name":"モーリーファンタジー北谷","address":"沖縄県中頭郡北谷町字美浜８－３イオン２Ｆ","grid":[26.31439,127.75719],"machineNum":1,"prefId":47},{"name":"モーリーファンタジーライカム","address":"沖縄県中頭郡北中城村アクセ土地区整理事業地内","grid":[26.301078,127.793065],"machineNum":1,"prefId":47},{"name":"楽市楽座イオンモール沖縄ライカム","address":"沖縄県中頭郡北中城村アワセ土地区画整理事業地内４街区イオンモール沖縄ライカム店４F","grid":[26.301078,127.793065],"machineNum":1,"prefId":47},{"name":"イオン南風原","address":"沖縄県島尻郡南風原町字宮平２６４　玩具売場","grid":[26.200854,127.737735],"machineNum":1,"prefId":47},{"name":"モーリーファンタジー南風原","address":"沖縄県島尻郡南風原町字宮平２６４イオン２Ｆ","grid":[26.200854,127.737735],"machineNum":1,"prefId":47},{"name":"トイザらス那覇新都心","address":"沖縄県那覇市おもろまち３－３　あっぷるタウン１Ｆ","grid":[26.22906,127.69386],"machineNum":1,"prefId":47},{"name":"（株）サンエー那覇メインプレイス店","address":"沖縄県那覇市おもろまち４－４－９　２Ｆ玩具売場","grid":[26.225563,127.695029],"machineNum":1,"prefId":47},{"name":"イオン那覇","address":"沖縄県那覇市金城５－１０－２　玩具売場","grid":[26.196919,127.665842],"machineNum":1,"prefId":47},{"name":"モーリーファンタジー那覇","address":"沖縄県那覇市金城５－１０－２イオン３Ｆ","grid":[26.196957,127.665768],"machineNum":1,"prefId":47},{"name":"（株）サンエー豊見城ウイングシティ","address":"沖縄県豊見城市高安２６１－２　２Ｆ玩具売場","grid":[26.175024,127.688697],"machineNum":1,"prefId":47},{"name":"モーリーファンタジー名護","address":"沖縄県名護市字名護見取川原４４７２イオン１Ｆ","grid":[26.583769,128.004935],"machineNum":1,"prefId":47}];

/***/ }),

/***/ "./src/js/index.ts":
/*!*************************!*\
  !*** ./src/js/index.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const leaflet_1 = tslib_1.__importDefault(__webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js"));
const leaflet_heat_1 = tslib_1.__importDefault(__webpack_require__(/*! leaflet.heat */ "./node_modules/leaflet.heat/dist/leaflet-heat.js"));
__webpack_require__(/*! leaflet/dist/leaflet.css */ "./node_modules/leaflet/dist/leaflet.css");
__webpack_require__(/*! ../css/map.css */ "./src/css/map.css");
const store_json_1 = tslib_1.__importDefault(__webpack_require__(/*! ../data/store.json */ "./src/data/store.json"));
// leafletの上書きなので、インポートそのものにはあんまり意味が無い
// ほんとは以下みたいなのは要らないんだけどこうでもしないとビルド後に消滅しちゃう
console.log(leaflet_heat_1.default);
/** マーカーアイコン */
const icon = leaflet_1.default.icon({
    iconUrl: 'https://prichan.jp/shop/images/shop.png',
    iconRetinaUrl: 'https://prichan.jp/shop/images/shop.png',
    iconSize: [20, 20],
});
/** 地図の初期ズームレベル */
const zoom = 8;
const map = leaflet_1.default.map('map').setView([35.699024, 139.771062], zoom);
// 地図情報を取ってくるところ
leaflet_1.default.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 18,
}).addTo(map);
/** ヒートマップの座標リスト */
const heatPoints = [];
// マーカーセットとヒートリストへの追加
for (const store of store_json_1.default) {
    // マーカー置く
    const markerGrid = store.grid;
    leaflet_1.default.marker(markerGrid, { icon })
        .addTo(map)
        .bindPopup(`<h3>${store.name}</h3><span>${store.address}</span>`); // クリック時、店名と住所を表示
    // .openPopup();
    // 筐体数に応じてヒートを強くする
    const intensity = 100 + store.machineNum * 10;
    heatPoints.push([store.grid[0], store.grid[1], intensity]);
}
const heatOption = { radius: 25 };
// ヒートマップ描画
leaflet_1.default.heatLayer(heatPoints, heatOption).addTo(map);


/***/ })

/******/ });
//# sourceMappingURL=main.js.map