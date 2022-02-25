/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/scroll */ \"./modules/scroll.js\");\n/* harmony import */ var _modules_reg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/reg */ \"./modules/reg.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('28 february 2022')\r\n;(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n;(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n;(0,_modules_scroll__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\r\n;(0,_modules_reg__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n  const menuBtn = document.querySelector('.menu')\r\n  const menu = document.querySelector('menu')\r\n  const closeBtn = menu.querySelector('.close-btn')\r\n  const menuItems = menu.querySelectorAll('ul>li>a')\r\n\r\n  const handleMenu = () => {\r\n    if (document.documentElement.clientWidth > 768) {\r\n      menu.classList.toggle('active-menu')\r\n    } else {\r\n      menu.style.transform = 'translateX(-100%)'\r\n    }\r\n  }\r\n  menuBtn.addEventListener('click', () => {\r\n    if (document.documentElement.clientWidth > 768) {\r\n        handleMenu()\r\n      } else {\r\n        menu.style.transform = 'translateX(100%)'\r\n      }\r\n  })\r\n\r\n  closeBtn.addEventListener('click', handleMenu)\r\n\r\n  menuItems.forEach(menuItem => menuItem.addEventListener('click', handleMenu))\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\r\n  const modal = document.querySelector('.popup-content')\r\n  const buttons = document.querySelectorAll('.popup-btn')\r\n  const closeBtn = modal.querySelector('.popup-close')\r\n\r\n  let count = 50\r\n  let id\r\n\r\n  const animationAdd = () => {\r\n    count--\r\n    id = requestAnimationFrame(animationAdd)\r\n    if (count >= 0) {\r\n      modal.style.marginLeft = count +'%'\r\n    } else {\r\n      cancelAnimationFrame(id)\r\n      count = 50\r\n    }\r\n  }\r\n\r\n  buttons.forEach(btn => {\r\n    btn.addEventListener('click', () => {\r\n      document.querySelector('.popup').style.display = 'block'\r\n      modal.style.transform = 'translateX(0%)'\r\n      \r\n      if (document.documentElement.clientWidth > 768) {\r\n        animationAdd()\r\n      }\r\n    })\r\n  })\r\n\r\n  closeBtn.addEventListener('click', () => {\r\n    document.querySelector('.popup').style.display = 'none'\r\n  })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/reg.js":
/*!************************!*\
  !*** ./modules/reg.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst reg = () => {\r\n  const calcInputs = document.querySelectorAll('.calc-block>input')\r\n\r\n  const mainIputText = document.querySelector('main .form-name')\r\n  const mainIputMail = document.querySelector('main .form-email')\r\n  const mainIputPhone = document.querySelector('main .form-phone')\r\n  const mainForm = document.querySelector('#form1')\r\n\r\n  const popupIputMail = document.querySelector('.popup .form-email')\r\n  const popupIputPhone = document.querySelector('.popup .form-phone')\r\n  const popupIputName = document.querySelector('.popup .form-name')\r\n  const popupForm = document.querySelector('#form3')\r\n  const modal = document.querySelector('.popup')\r\n\r\n  const connectIputMail = document.querySelector('.connect .form-email')\r\n  const connectIputPhone = document.querySelector('.connect .form-phone')\r\n  const connectIputName = document.querySelector('.connect .top-form')\r\n  const connectIputMes = document.querySelector('.connect .form-message')\r\n  const connectForm = document.querySelector('#form2')\r\n\r\n\r\n  for (let calcInput of calcInputs) {\r\n    calcInput.addEventListener('input', function (e) {\r\n      e.preventDefault()\r\n      calcInput.value = calcInput.value.replace(/[^\\d]/g, '')\r\n    })\r\n  }\r\n\r\n  mainForm.addEventListener('submit',  (e) => {\r\n    e.preventDefault()\r\n    let isError = false\r\n\r\n    if (!/[а-яА-Я-\\s]/g.test(mainIputText.value)) {\r\n      alert('неправильные данные')\r\n    } else {\r\n      isError = true\r\n    }\r\n    \r\n    if(!/[^\\w-\".!~*']/g.test(mainIputMail.value)) {\r\n      alert('неправильные данные')\r\n    } else {\r\n      isError = true\r\n    }\r\n\r\n    if(!/[\\d]/g.test(mainIputPhone.value)) {\r\n      alert('неправильные данные')\r\n    } else {\r\n      isError = true\r\n    }\r\n  })\r\n\r\n  popupForm.addEventListener('submit',  (e) => {\r\n    e.preventDefault()\r\n    let isError = false\r\n\r\n    if (!/[а-яА-Я-\\s]/g.test(popupIputName.value)) {\r\n      alert('неправильные данные')\r\n    } else {\r\n      isError = true\r\n    }\r\n    \r\n    if(!/[^\\w-\".!~*']/g.test(popupIputMail.value)) {\r\n      alert('неправильные данные')\r\n    } else {\r\n      isError = true\r\n    }\r\n\r\n    if(!/[\\d]/g.test(popupIputPhone.value)) {\r\n      alert('неправильные данные')\r\n      console.log('3');\r\n    } else {\r\n      isError = true\r\n    }\r\n    if (isError) {\r\n      alert('данные отправлены')\r\n      modal.style.display = 'none'\r\n    }\r\n  })\r\n\r\n  connectForm.addEventListener('submit',  (e) => {\r\n    e.preventDefault()\r\n    let isError = false\r\n\r\n    if (!/[а-яА-Я-\\s]/g.test(connectIputName.value) && (/[а-яА-Я-\\s]/g.test(connectIputMes.value))){\r\n      alert('неправильные данные')\r\n    } else {\r\n      isError = true\r\n    }\r\n    \r\n    if(!/[^\\w-\".!~*']/g.test(connectIputMail.value)) {\r\n      alert('неправильные данные')\r\n    } else {\r\n      isError = true\r\n    }\r\n\r\n    if(!/[\\d]/g.test(connectIputPhone.value)) {\r\n      alert('неправильные данные')\r\n    } else {\r\n      isError = true\r\n    }\r\n  })\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reg);\n\n//# sourceURL=webpack:///./modules/reg.js?");

/***/ }),

/***/ "./modules/scroll.js":
/*!***************************!*\
  !*** ./modules/scroll.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst scroll = () => {\r\n  const menu = document.querySelector('menu')\r\n  const menuItems = menu.querySelectorAll('ul>li>a')\r\n  const btn = document.querySelector('main>a')\r\n  const hiddenElements = document.querySelectorAll('body>div')\r\n\r\n  const scrollBtn = () => {\r\n    hiddenElements[0].scrollIntoView({block: \"start\", behavior: \"smooth\"})\r\n  }\r\n\r\n  btn.addEventListener('click', (e) => {\r\n    e.preventDefault()\r\n    scrollBtn()\r\n  })\r\n\r\n  for (let menuItem of menuItems) {\r\n    menuItem.addEventListener('click', function (e) {\r\n        e.preventDefault();\r\n        const id = menuItem.getAttribute('href')\r\n\r\n        document.querySelector(id).scrollIntoView({\r\n            behavior: 'smooth',\r\n            block: 'start'\r\n        })\r\n    })\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scroll);\n\n//# sourceURL=webpack:///./modules/scroll.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\r\n  const timerHours = document.querySelector('#timer-hours')\r\n  const timerMinutes = document.querySelector('#timer-minutes')\r\n  const timerSeconds = document.querySelector('#timer-seconds')\r\n\r\n  const getTimeRemaining = () => {\r\n    let dateStop = new Date(deadline).getTime()\r\n    let dateNow = new Date().getTime()\r\n    let timeRemaining = (dateStop - dateNow) / 1000\r\n    let hours = Math.floor(timeRemaining / 3600)\r\n    let minutes = Math.floor((timeRemaining / 60) % 60)\r\n    let seconds = Math.floor(timeRemaining % 60)\r\n\r\n    return {timeRemaining, hours, minutes, seconds}\r\n  }\r\n\r\n  const updateClock = () => {\r\n    let getTime = getTimeRemaining()\r\n    let idInterval\r\n\r\n    const arr = [getTime.hours, getTime.minutes, getTime.seconds]\r\n    \r\n    arr.forEach((item, i, arr) => {\r\n      if (arr[i] < 10){\r\n        arr[i] = '0' + arr[i]\r\n      }\r\n    })\r\n    timerHours.textContent = arr[0]\r\n    timerMinutes.textContent = arr[1]\r\n    timerSeconds.textContent = arr[2]\r\n\r\n    if (getTime.timeRemaining > 0){\r\n      idInterval = setInterval(updateClock, 1000)\r\n    } else if (getTime.timeRemaining <= 0) {\r\n      timerHours.textContent = '00'\r\n      timerMinutes.textContent = '00'\r\n      timerSeconds.textContent = '00'\r\n    }\r\n\r\n    clearInterval(idInterval)\r\n  }\r\n  setInterval(updateClock, 1000)\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\r\n\n\n//# sourceURL=webpack:///./modules/timer.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;