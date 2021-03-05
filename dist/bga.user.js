// ==UserScript==
// @name           BGA Shortcuts
// @namespace      http://github.com/MatyiFKBT
// @description    Shortcuts for BGA
// @version        1.0.14
// @author         MatyiFKBT
// @downloadURL    https://github.com/MatyiFKBT/bga/raw/master/dist/bga.user.js
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
    document.querySelector('#middle_column').addEventListener('contextmenu', function(e) {
      e.preventDefault();
      if ([...e.target.classList].includes("glow")) {
        document.querySelector('#buttonDiscardBuilding').click()
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

/***/ }),

/***/ 115:
/***/ ((module) => {

function draftosaurus() {
  if (window.location.pathname.includes("draftosaurus")) {
    const dinos = {
      "Zöld": "parasaurolophus",
      "Lila": "brachiosaurus",
      "Sárga": "triceratops",
      "Kék": "stegosaurus",
      "Narancs": "spinodon",
      "Piros": "t-rex"    
    };
    document.querySelector('#counter-wrap').innerHTML+=`<div id="extrainfo"></div>`
    const extrainfo = document.querySelector('#extrainfo');
    
    const zold = "hsla(120,100%,25%,0.3)";


    function calcDino(name){
      return  [...document.querySelectorAll(`.dino.player-info.${name}`)].map(e=>e.childNodes[0].textContent).reduce((a,b)=>parseInt(a)+parseInt(b),0)
    }

    function calc(){
      
      let finalText = '';
      for (color in dinos){
        const dino = dinos[color];
        finalText+=`${color}: ${calcDino(dino)} (${calcDino(dino)/8*100}%)<br/>`
      }
      
      extrainfo.innerHTML = finalText
      colorTop()
    }
      
    function colorTop(){
      [...document.querySelectorAll('.dino-number')].forEach(item=>item.style.background = '')
      for (color in dinos){
        const dino = dinos[color];
        let topSzam = 0;
        let topElems = [];
        [...document.querySelectorAll(`.dino.player-info.${dino}`)].forEach(item=>{
          if(parseInt(item.childNodes[0].textContent)>topSzam){
            topSzam = parseInt(item.childNodes[0].textContent);
            topElem = item.childNodes[0];
          }
        })
        if(topElems && topSzam>0){
          topElem.style.background = zold;
        }
      }
    }
    document.querySelector('.board').addEventListener('click',calc);
    
    console.log("draftosaurus hacks loaded...");
    
  };
}

module.exports.load = () => draftosaurus();

/***/ }),

/***/ 465:
/***/ ((module) => {

function hearts() {
  if (window.location.pathname.includes("hearts")) {
    console.log("hearts hacks loaded...");
    document.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        document.querySelector('.action-button.bgabutton.bgabutton_blue').click()
      }
    });
  };
}

module.exports.load = () => hearts();

/***/ }),

/***/ 502:
/***/ ((module) => {

function lostcities() {
  if (window.location.pathname.includes("lostcities")) {
    const pakli = document.querySelector("#deck_action>.pick_card_inner");
    const decks = document.querySelectorAll('div.pick_card');
    const pickCards = document.querySelector('#pick_cards');
    const arr = document.querySelector('#arrow_down_wrap');
    const arrUp = document.querySelector('#arrow_up_wrap');
    
    function draw() {
      if ([...decks].filter(deck => deck.style.display == "block").length == 0) {
        console.log("paklibol huzok")
        pakli.click()
      } else {
        console.log("nem tudok automatikusan huzni")
      }
    }

    arr.addEventListener('click', () => { setTimeout(() => { draw() }, 1000) })
    arrUp.addEventListener('click', () => { setTimeout(() => { draw() }, 1000) })

    document.querySelector('#player_hand').addEventListener('contextmenu',(e)=>{
      e.preventDefault(); 
      e.target.click();
      setTimeout(()=>{arr.click()},350);
      setTimeout(()=>{pakli.click()},550);
      }
    );
    console.log('lostcities hacks loaded...')
  };
}

module.exports.load = () => lostcities();

/***/ }),

/***/ 598:
/***/ ((module) => {

function welcometo() {
  if (window.location.pathname.includes("welcometo")) {
    console.log("welcometo hacks loaded...");
    document.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        document.querySelector('.action-button.bgabutton.bgabutton_blue').click()
      }
    });
  };
}

module.exports.load = () => welcometo();

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
  __webpack_require__(598),
  __webpack_require__(465),
  __webpack_require__(502),
  __webpack_require__(115),
]

modules.forEach(module=>{
  module.load()
})
})();

/******/ })()
;