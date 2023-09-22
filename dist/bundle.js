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

/***/ "./src/Db/FeedingRegDb.ts":
/*!********************************!*\
  !*** ./src/Db/FeedingRegDb.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Db: () => (/* binding */ Db)\n/* harmony export */ });\nvar Db = /** @class */ (function () {\n    function Db() {\n        this.feedRegistration = [];\n    }\n    Db.prototype.insertFeeding = function (feedingTime) {\n        this.feedRegistration.push(feedingTime);\n    };\n    Db.prototype.getfeeding = function () {\n        return this.feedRegistration;\n    };\n    return Db;\n}());\n\n\n\n//# sourceURL=webpack://wbepack-setup/./src/Db/FeedingRegDb.ts?");

/***/ }),

/***/ "./src/animal.ts":
/*!***********************!*\
  !*** ./src/animal.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Animal: () => (/* binding */ Animal)\n/* harmony export */ });\nvar Animal = /** @class */ (function () {\n    function Animal(_a) {\n        var name = _a.name, age = _a.age;\n        this.name = name;\n        this.age = age;\n    }\n    return Animal;\n}());\n\n\n\n//# sourceURL=webpack://wbepack-setup/./src/animal.ts?");

/***/ }),

/***/ "./src/animals/tiger.ts":
/*!******************************!*\
  !*** ./src/animals/tiger.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Tiger: () => (/* binding */ Tiger)\n/* harmony export */ });\n/* harmony import */ var _animal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../animal */ \"./src/animal.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\nvar Tiger = /** @class */ (function (_super) {\n    __extends(Tiger, _super);\n    function Tiger(name, age, wasOutside) {\n        var _this = _super.call(this, { name: name, age: age }) || this;\n        _this.wasOutside = wasOutside;\n        return _this;\n    }\n    Tiger.prototype.MakeSound = function () {\n        console.log(\"Roar!\");\n    };\n    Tiger.prototype.WasOutside = function () {\n        if (this.wasOutside) {\n            return \"Tiger was outside from the cage in the past 8h\";\n        }\n        else {\n            return \"Tiger wasn't outside from the cage in the past 8h\";\n        }\n    };\n    Tiger.prototype.sleepAndWalk = function () { };\n    Tiger.prototype.jumpAndRun = function () { };\n    Tiger.prototype.swimAndHunt = function () { };\n    return Tiger;\n}(_animal__WEBPACK_IMPORTED_MODULE_0__.Animal));\n\n\n\n//# sourceURL=webpack://wbepack-setup/./src/animals/tiger.ts?");

/***/ }),

/***/ "./src/feedingRegister.ts":
/*!********************************!*\
  !*** ./src/feedingRegister.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Zookeeper: () => (/* binding */ Zookeeper)\n/* harmony export */ });\n//import { FeedingsType } from \"./dB\";\nvar Zookeeper = /** @class */ (function () {\n    function Zookeeper(zookeeperName, animalType, work) {\n        this.time = new Date().toISOString();\n        this.zookeeperName = zookeeperName;\n        this.animalType = animalType;\n        this.work = work;\n        // this.time = new Date().toISOString();\n    }\n    return Zookeeper;\n}());\n\n\n\n//# sourceURL=webpack://wbepack-setup/./src/feedingRegister.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _animals_tiger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animals/tiger */ \"./src/animals/tiger.ts\");\n/* harmony import */ var _Db_FeedingRegDb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Db/FeedingRegDb */ \"./src/Db/FeedingRegDb.ts\");\n/* harmony import */ var _feedingRegister__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./feedingRegister */ \"./src/feedingRegister.ts\");\n\n\n\nvar tiger = new _animals_tiger__WEBPACK_IMPORTED_MODULE_0__.Tiger(\"ryzius\", 8, false);\nconsole.log(tiger);\nconsole.log(tiger.WasOutside());\nvar registr = new _feedingRegister__WEBPACK_IMPORTED_MODULE_2__.Zookeeper(\"Jonas\", \"Tiger\", \"Cage cleaning\");\nvar registr1 = new _feedingRegister__WEBPACK_IMPORTED_MODULE_2__.Zookeeper(\"Petras\", \"Elephant\", \"feeding the animal\");\nvar db = new _Db_FeedingRegDb__WEBPACK_IMPORTED_MODULE_1__.Db();\ndb.insertFeeding(registr);\ndb.insertFeeding(registr1);\nconsole.log(db.getfeeding());\n\n\n//# sourceURL=webpack://wbepack-setup/./src/index.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;