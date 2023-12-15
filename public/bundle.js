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

/***/ "./src/classes/DOM.ts":
/*!****************************!*\
  !*** ./src/classes/DOM.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nclass DOM {\n    elementExistence(tagName, options) {\n        let element1 = null;\n        let element2 = null;\n        if ((options.isClass && options.isId && options.isTag) || (options.isId && options.isTag) || (options.isClass && options.isId) || (options.isId && options.isTag) || (options.isClass && options.isTag)) {\n            throw new Error('only one can be selected');\n        }\n        if (options.isId) {\n            element1 = document.getElementById(tagName);\n        }\n        if (options.isClass) {\n            element2 = document.getElementsByClassName(tagName);\n        }\n        if (options.isTag) {\n            element2 = document.getElementsByTagName(tagName);\n        }\n        if (element1 || (element2 !== null && element2.length > 0)) {\n            return true;\n        }\n        else\n            return false;\n    }\n    getElementByTagName(tagName) {\n        return document.getElementsByTagName(tagName)[0];\n    }\n    getWindowWidth() {\n        return window.innerWidth;\n    }\n    getWindowHeight() {\n        return window.innerHeight;\n    }\n    deleteElement(tagName, options) {\n        const isExistedElement = this.elementExistence(tagName, options);\n        if (isExistedElement) {\n            const element = this.getElementByTagName(tagName);\n            element.remove();\n            return true;\n        }\n        else {\n            return false;\n        }\n    }\n    createCanvas(parentElement) {\n        if (this.elementExistence('canvas', { isTag: true })) {\n            this.deleteElement('canvas', { isTag: true });\n        }\n        const canvas = document.createElement('canvas');\n        canvas.width = this.getWindowWidth();\n        canvas.height = this.getWindowHeight();\n        if (parentElement) {\n            parentElement.appendChild(canvas);\n        }\n        else {\n            const body = document.getElementsByTagName('body')[0];\n            body.appendChild(canvas);\n        }\n        return canvas;\n    }\n}\nexports[\"default\"] = DOM;\n\n\n//# sourceURL=webpack://drawing_canvas/./src/classes/DOM.ts?");

/***/ }),

/***/ "./src/classes/UISystem.ts":
/*!*********************************!*\
  !*** ./src/classes/UISystem.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.UISystem = void 0;\nconst DOM_1 = __importDefault(__webpack_require__(/*! ./DOM */ \"./src/classes/DOM.ts\"));\nclass UISystem extends DOM_1.default {\n    constructor() {\n        super();\n        this.createCanvas();\n    }\n}\nexports.UISystem = UISystem;\n\n\n//# sourceURL=webpack://drawing_canvas/./src/classes/UISystem.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst UISystem_1 = __webpack_require__(/*! ./classes/UISystem */ \"./src/classes/UISystem.ts\");\nwindow.addEventListener('DOMContentLoaded', () => {\n    new UISystem_1.UISystem();\n});\n\n\n//# sourceURL=webpack://drawing_canvas/./src/index.ts?");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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