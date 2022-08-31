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

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projectDOMGenerator\": () => (/* binding */ projectDOMGenerator),\n/* harmony export */   \"todoDOMGenerator\": () => (/* binding */ todoDOMGenerator)\n/* harmony export */ });\n// This module creates DOM element\nfunction projectDOMGenerator(projectObject) {\n    let projectDiv = document.createElement(\"div\");\n    projectDiv.classList.add(\"project\");\n\n    projectDiv.textContent = `${projectObject.title}`;\n    return projectDiv;\n}\n\nfunction todoDOMGenerator(todoObject) {\n    let todoDiv = document.createElement('div');\n    todoDiv.classList.add(\"todo\");\n\n    todoDiv.textContent = `${todoObject.title},  ${todoObject.description},   ${todoObject.dueDate},   ${todoObject.priority}`;\n    return todoDiv;\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/DOM.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _objectGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objectGenerator */ \"./src/objectGenerator.js\");\n/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM */ \"./src/DOM.js\");\n\n\n\n// array to store all project(project is the file containing all TODOs)\nconst Projects = [];\n\nconst projectsDiv = document.querySelector(\"#projects\");\n\n// Default project file\nconst project0 = (0,_objectGenerator__WEBPACK_IMPORTED_MODULE_0__.projectGenerator)(\"Default\");\nProjects.push(project0);\n\n// Adding default to DOM\nlet projectDOM0 = (0,_DOM__WEBPACK_IMPORTED_MODULE_1__.projectDOMGenerator)(project0);\nprojectsDiv.appendChild(projectDOM0);\n\nlet selectedProject = Projects[0];\n\n// Triggers on hitting submit button on project div\nprojectsDiv.addEventListener('submit', function(event) {\n\t// Prevent default form submit\n\tevent.preventDefault();\n\n    // Collecting user entries from FORM inputs\n    let title = projectsDiv.querySelector('#title').value;\n\n    let project = (0,_objectGenerator__WEBPACK_IMPORTED_MODULE_0__.projectGenerator)(title);\n    Projects.push(project);\n\n    let projectDOM = (0,_DOM__WEBPACK_IMPORTED_MODULE_1__.projectDOMGenerator)(project);\n    projectsDiv.appendChild(projectDOM);\n\n\t// Clear the form fields\n\tevent.target.reset();\n});\n\nconst TODODiv = document.querySelector(\"#TODOs\");\n\n// Triggers on hitting submit button on todo div\nTODODiv.addEventListener('submit', function(event) {\n\t// Prevent default form submit\n\tevent.preventDefault();\n\n    // Collecting user entries from FORM inputs          \n    let title = TODODiv.querySelector('#title').value;\n    let description = TODODiv.querySelector('#description').value;\n    let dueDate = TODODiv.querySelector('#dueDate').value;\n    let priority = TODODiv.querySelector('#priority').value;\n\n    let TODO = (0,_objectGenerator__WEBPACK_IMPORTED_MODULE_0__.todoGenerator)(title, description, dueDate, priority);\n\n    console.log(TODO);\n    selectedProject.TodoList.push(TODO);\n\n    let TODOdom = (0,_DOM__WEBPACK_IMPORTED_MODULE_1__.todoDOMGenerator)(TODO);\n    TODODiv.appendChild(TODOdom);\n\n\t// Clear the form fields\n\tevent.target.reset();\n});\n\n// const project1 = projectGenerator(\"Default\");\n// const project2 = projectGenerator(\"Top priority\");\n// const project3 = projectGenerator(\"Home applications\");\n\n// const Todo1 = todoGenerator(\"home\",\"things to do\",\"22/03/2022\",\"TOP\");\n// const Todo2 = todoGenerator(\"class\",\"things done\",\"20/03/2022\",\"MEDIUM\");\n// const Todo3 = todoGenerator(\"room\", \"my room is mine\", \"12/12/2021\",\"EASY\");\n\n// project1.TodoList.push(Todo1);\n// project1.TodoList.push(Todo2);\n// project1.TodoList.push(Todo3);\n\n// Projects.push(project1);\n// Projects.push(project2);\n// Projects.push(project3);\n\n// // Adds title of each project on DOM\n// Projects.forEach(function(project) {\n//     let projectDOM = projectDOMGenerator(project);\n//     projectsDiv.appendChild(projectDOM);\n// })\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/objectGenerator.js":
/*!********************************!*\
  !*** ./src/objectGenerator.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projectGenerator\": () => (/* binding */ projectGenerator),\n/* harmony export */   \"todoGenerator\": () => (/* binding */ todoGenerator)\n/* harmony export */ });\n// This module generates objects holding data\nfunction todoGenerator(title, description, dueDate, priority) {\n    return {\n        title: title,\n        description: description,\n        dueDate: dueDate,\n        priority: priority\n    };\n};\n\nfunction projectGenerator(title) {\n    return {\n        title: title,\n        TodoList : []\n    };\n};\n\n\n\n//# sourceURL=webpack://todo-list/./src/objectGenerator.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;