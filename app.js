/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,1]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _modules_tooltip__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_tooltip__WEBPACK_IMPORTED_MODULE_1__);
// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js
// Feel free with using ES6 here.

 // Smooth scrolling
// Select all links with hashes
// Only hook our container just in case

jquery__WEBPACK_IMPORTED_MODULE_0___default()('a[href*="#"]', '.SC-LB__container') // Remove links that don't actually link to anything
.not('[href="#"]').not('[href="#0"]').on('click', function (event) {
  // On-page links
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    // Figure out element to scroll to
    var target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.hash);
    target = target.length ? target : jquery__WEBPACK_IMPORTED_MODULE_0___default()('[name=' + this.hash.slice(1) + ']'); // Does a scroll target exist?

    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function () {
        // Callback after animation
        // Must change focus!
        var $target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(target);
        $target.focus();

        if ($target.is(":focus")) {
          // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable

          $target.focus(); // Set focus again
        }

        ;
      });
    }
  }
});

/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, exports) {

const tooltips = document.querySelectorAll(".all-tooltip .tooltip"); // const fullDiv = document.querySelector(".hotspot-container");

const allContainers = document.querySelectorAll('.hotspot-container');
const container = document.querySelector(".container");
let timeoutId;
window.addEventListener("resize", contentPosition);
window.addEventListener("DOMContentLoaded", contentPosition); // Positions

function contentPosition() {
  allContainers.forEach(container => {
    const childTooltips = container.querySelectorAll(".all-tooltip .tooltip");
    container.addEventListener('click', () => {
      childTooltips.forEach(tooltip => {
        tooltip.classList.toggle('active');
      });
    });
    childTooltips.forEach(tooltip => {
      const pin = tooltip.querySelector(".pin");
      const content = tooltip.querySelector(".tooltip-content");
      const arrow = tooltip.querySelector(".arrow");
      const pinLeft = pin.offsetLeft;

      if (pinLeft + content.offsetWidth / 2 > container.offsetWidth) {
        const extraLeft = container.offsetWidth - (pinLeft + content.offsetWidth / 2); // console.log('right-conflict', tooltip)

        content.style.left = pinLeft - content.offsetWidth / 2 + extraLeft - 30 + "px";
        content.style.top = pin.offsetTop - 20 - content.offsetHeight + "px";
      } else if (pin.offsetLeft + container.offsetLeft < content.offsetWidth / 2) {
        // console.log('left conflict', pin.offsetLeft)
        content.style.left = -container.offsetLeft + "px";
        content.style.top = pin.offsetTop - 20 - content.offsetHeight + "px"; //   content.style.top = pin.offsetTop + 30 + "px";
      } else {
        content.style.left = pinLeft - content.offsetWidth / 2 + "px"; //   content.style.top = pin.offsetTop + 30 + "px";

        content.style.top = pin.offsetTop - 20 - content.offsetHeight + 'px';
      }

      arrow.style.left = pinLeft - content.offsetLeft - pin.offsetWidth / 2 + "px";
    });
  });
} // Click / Hover Handlers


tooltips.forEach(tooltip => {
  const pin = tooltip.querySelector(".pin");
  const content = tooltip.querySelector(".tooltip-content");
  pin.addEventListener("mouseover", () => {
    tooltip.classList.add("active");
  });
  pin.addEventListener("mouseleave", () => {
    timeoutId = setTimeout(() => {
      if (!tooltip.classList.contains("content-hover")) {
        tooltip.classList.remove("active");
      }
    }, 2000);
  });
  content.addEventListener("mouseover", () => {
    clearTimeout(timeoutId);
    tooltip.classList.add("active");
    tooltip.classList.add("content-hover");
  });
  content.addEventListener("mouseleave", () => {
    timeoutId = setTimeout(() => {
      tooltip.classList.remove("active");
      tooltip.classList.remove("content-hover");
    }, 2000);
  });
});

/***/ })
/******/ ]);
