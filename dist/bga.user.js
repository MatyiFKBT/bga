// ==UserScript==
// @name           BGA Shortcuts
// @namespace      http://github.com/MatyiFKBT
// @description    Shortcuts for BGA
// @version        1.0.2
// @downloadURL    https://github.com/MatyiFKBT/bga/releases/latest/download/bga.user.js
// @include        https://boardgamearena.com/*
// ==/UserScript==

/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 229:
/***/ ((module) => {

function sevenwondersduel() {
  if (window.location.pathname.includes("sevenwondersduel")) {
    console.log("7wd hacks loaded...");
    document.querySelector('#middle_column').addEventListener('click', function(e) {
      if ([...e.target.classList].includes("glow")) {
        document.querySelector('#buttonConstructBuilding').click()
      }

    })
  };
}

module.exports.load = () => sevenwondersduel();

/***/ }),

/***/ 352:
/***/ ((module) => {

function carcassonne() {
  if (window.location.pathname.includes("carcassonne")) {
    console.log("carcassonne hacks loaded...");
    document.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        document.querySelector('.action-button.bgabutton.bgabutton_blue').click()
      }
    });
  };
}

module.exports.load = () => carcassonne();

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
const modules = [
  __webpack_require__(229),
  __webpack_require__(352),
]

modules.forEach(module=>{
  module.load()
})
})();

/******/ })()
;