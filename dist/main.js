/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Methods.js":
/*!************************!*\
  !*** ./src/Methods.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createItem: () => (/* binding */ createItem),\n/* harmony export */   deleteItem: () => (/* binding */ deleteItem)\n/* harmony export */ });\nfunction createItem(title,description,dueDate,priority,hasDone,project){\r\n    let item = new todoItem(title,description,dueDate,priority,hasDone,project);\r\n\r\n    let todoList = getList();\r\n    let id = getId();\r\n\r\n    todoList.push({id:id,item:item});\r\n\r\n    setList(todoList);\r\n    setId(++id);\r\n}\r\nfunction deleteItem(id){\r\n    let todoList = getList();\r\n    for(let i=0;i<todoList.length;i++){\r\n        if(todoList[i].id ==id){\r\n            todoList.splice(i,1);\r\n        }\r\n    }\r\n    setList(todoList);\r\n}\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvTWV0aG9kcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixnQkFBZ0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGtCQUFrQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9NZXRob2RzLmpzPzI1NGMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY3JlYXRlSXRlbSh0aXRsZSxkZXNjcmlwdGlvbixkdWVEYXRlLHByaW9yaXR5LGhhc0RvbmUscHJvamVjdCl7XHJcbiAgICBsZXQgaXRlbSA9IG5ldyB0b2RvSXRlbSh0aXRsZSxkZXNjcmlwdGlvbixkdWVEYXRlLHByaW9yaXR5LGhhc0RvbmUscHJvamVjdCk7XHJcblxyXG4gICAgbGV0IHRvZG9MaXN0ID0gZ2V0TGlzdCgpO1xyXG4gICAgbGV0IGlkID0gZ2V0SWQoKTtcclxuXHJcbiAgICB0b2RvTGlzdC5wdXNoKHtpZDppZCxpdGVtOml0ZW19KTtcclxuXHJcbiAgICBzZXRMaXN0KHRvZG9MaXN0KTtcclxuICAgIHNldElkKCsraWQpO1xyXG59XHJcbmZ1bmN0aW9uIGRlbGV0ZUl0ZW0oaWQpe1xyXG4gICAgbGV0IHRvZG9MaXN0ID0gZ2V0TGlzdCgpO1xyXG4gICAgZm9yKGxldCBpPTA7aTx0b2RvTGlzdC5sZW5ndGg7aSsrKXtcclxuICAgICAgICBpZih0b2RvTGlzdFtpXS5pZCA9PWlkKXtcclxuICAgICAgICAgICAgdG9kb0xpc3Quc3BsaWNlKGksMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2V0TGlzdCh0b2RvTGlzdCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7Y3JlYXRlSXRlbSxkZWxldGVJdGVtfTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Methods.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todoItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoItem */ \"./src/todoItem.js\");\n/* harmony import */ var _todoProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoProject */ \"./src/todoProject.js\");\n/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./localStorage */ \"./src/localStorage.js\");\n/* harmony import */ var _Methods__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Methods */ \"./src/Methods.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBa0M7QUFDTTtBQUNNO0FBQ2tCO0FBQ2Q7QUFDbEQ7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0b2RvSXRlbSBmcm9tIFwiLi90b2RvSXRlbVwiO1xyXG5pbXBvcnQgdG9kb1Byb2plY3QgZnJvbSBcIi4vdG9kb1Byb2plY3RcIjtcclxuaW1wb3J0IHsgY29tcGFyZUFzYywgZm9ybWF0IH0gZnJvbSBcImRhdGUtZm5zXCI7XHJcbmltcG9ydCB7aW5pdCxnZXRJZCxnZXRMaXN0LHNldElkLHNldExpc3R9IGZyb20gXCIuL2xvY2FsU3RvcmFnZVwiO1xyXG5pbXBvcnQgeyBjcmVhdGVJdGVtLGRlbGV0ZUl0ZW0gfSBmcm9tIFwiLi9NZXRob2RzXCI7XHJcblxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/localStorage.js":
/*!*****************************!*\
  !*** ./src/localStorage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getId: () => (/* binding */ getId),\n/* harmony export */   getList: () => (/* binding */ getList),\n/* harmony export */   init: () => (/* binding */ init),\n/* harmony export */   setId: () => (/* binding */ setId),\n/* harmony export */   setList: () => (/* binding */ setList)\n/* harmony export */ });\nfunction init(){\r\n    let id = 0;\r\n    let todoList = [];\r\n    localStorage.setItem(\"todoList\",JSON.stringify(todoList));\r\n    localStorage.setItem(\"id\",JSON.stringify(id));\r\n}\r\n\r\nfunction getId(){\r\n    let id = localStorage.getItem(\"id\");\r\n    return JSON.parse(id);\r\n}\r\nfunction getList(){\r\n    let todoList = localStorage.getItem(\"todoList\")\r\n    return JSON.parse(todoList);\r\n}\r\nfunction setId(id){\r\n    localStorage.setItem(\"id\",JSON.stringify(id));\r\n}\r\nfunction setList(todoList){\r\n    localStorage.setItem(\"todoList\",JSON.stringify(todoList));\r\n}\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbG9jYWxTdG9yYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbG9jYWxTdG9yYWdlLmpzP2YyZGYiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gaW5pdCgpe1xyXG4gICAgbGV0IGlkID0gMDtcclxuICAgIGxldCB0b2RvTGlzdCA9IFtdO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2RvTGlzdFwiLEpTT04uc3RyaW5naWZ5KHRvZG9MaXN0KSk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImlkXCIsSlNPTi5zdHJpbmdpZnkoaWQpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0SWQoKXtcclxuICAgIGxldCBpZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaWRcIik7XHJcbiAgICByZXR1cm4gSlNPTi5wYXJzZShpZCk7XHJcbn1cclxuZnVuY3Rpb24gZ2V0TGlzdCgpe1xyXG4gICAgbGV0IHRvZG9MaXN0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2RvTGlzdFwiKVxyXG4gICAgcmV0dXJuIEpTT04ucGFyc2UodG9kb0xpc3QpO1xyXG59XHJcbmZ1bmN0aW9uIHNldElkKGlkKXtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiaWRcIixKU09OLnN0cmluZ2lmeShpZCkpO1xyXG59XHJcbmZ1bmN0aW9uIHNldExpc3QodG9kb0xpc3Qpe1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2RvTGlzdFwiLEpTT04uc3RyaW5naWZ5KHRvZG9MaXN0KSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7aW5pdCxnZXRJZCxnZXRMaXN0LHNldElkLHNldExpc3R9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/localStorage.js\n");

/***/ }),

/***/ "./src/todoItem.js":
/*!*************************!*\
  !*** ./src/todoItem.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass todoItem{\r\n    constructor(title,description,dueDate,priority,hasDone,project){\r\n        this.title = title;\r\n        this.description = description;\r\n        this.dueDate = dueDate;\r\n        this.priority = priority;\r\n        this.hasDone = hasDone;\r\n        this.project = project;\r\n    }\r\n\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todoItem);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdG9kb0l0ZW0uanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG9JdGVtLmpzPzA5MTMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgdG9kb0l0ZW17XHJcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSxkZXNjcmlwdGlvbixkdWVEYXRlLHByaW9yaXR5LGhhc0RvbmUscHJvamVjdCl7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgICAgICB0aGlzLmhhc0RvbmUgPSBoYXNEb25lO1xyXG4gICAgICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IHRvZG9JdGVtOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/todoItem.js\n");

/***/ }),

/***/ "./src/todoProject.js":
/*!****************************!*\
  !*** ./src/todoProject.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nclass todoProject{\r\n    constructor(name){\r\n        this.name = name;\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todoProject);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdG9kb1Byb2plY3QuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsV0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvUHJvamVjdC5qcz9mZGU5Il0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5jbGFzcyB0b2RvUHJvamVjdHtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUpe1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRvZG9Qcm9qZWN0OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/todoProject.js\n");

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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;