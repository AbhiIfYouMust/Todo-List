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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projectDOMGenerator\": () => (/* binding */ projectDOMGenerator),\n/* harmony export */   \"todoDOMGenerator\": () => (/* binding */ todoDOMGenerator)\n/* harmony export */ });\n// This module creates DOM element\nlet deleteDiv = document.createElement(\"button\");\ndeleteDiv.classList.add(\"delete\");\n\nlet editDiv = document.createElement(\"button\");\neditDiv.classList.add(\"edit\");\n\nfunction projectDOMGenerator(projectObject) {\n    const projectDiv = document.createElement(\"div\");\n    projectDiv.classList.add(\"project\");\n\n    let paragraph = document.createElement(\"p\");\n    projectDiv.appendChild(paragraph);\n\n    paragraph.textContent = `${projectObject.title}`;\n\n    projectDiv.appendChild(deleteDiv.cloneNode(true));\n    projectDiv.appendChild(editDiv.cloneNode(true));\n\n    return projectDiv;\n}\n\nfunction todoDOMGenerator(todoObject) {\n    const todoDiv = document.createElement('div');\n    todoDiv.classList.add(\"todo\");\n\n    let paragraph = document.createElement(\"p\");\n    todoDiv.appendChild(paragraph);\n\n    paragraph.textContent = `${todoObject.title},  ${todoObject.description},   ${todoObject.dueDate},   ${todoObject.priority}`;\n\n    todoDiv.appendChild(deleteDiv.cloneNode(true));\n    todoDiv.appendChild(editDiv.cloneNode(true));\n\n    return todoDiv;\n}\n\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/DOM.js?");

/***/ }),

/***/ "./src/DisplayDOM.js":
/*!***************************!*\
  !*** ./src/DisplayDOM.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayProjects\": () => (/* binding */ displayProjects),\n/* harmony export */   \"displayTODOs\": () => (/* binding */ displayTODOs)\n/* harmony export */ });\n/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM */ \"./src/DOM.js\");\n\n\nfunction displayTODOs(TODOlist, node) {\n    node.innerHTML = \"\";\n\n    TODOlist.forEach(element => {\n        let TodoDom = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.todoDOMGenerator)(element);\n        node.appendChild(TodoDom);\n    });\n};\n\nfunction displayProjects(Projects, node) {\n    node.innerHTML = \"\";\n    \n    Projects.forEach(element => {\n        let ProjectDOM = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.projectDOMGenerator)(element);\n        node.appendChild(ProjectDOM);\n    });\n};\n\n\n\n//# sourceURL=webpack://todo-list/./src/DisplayDOM.js?");

/***/ }),

/***/ "./src/delete.js":
/*!***********************!*\
  !*** ./src/delete.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"deleteProject\": () => (/* binding */ deleteProject),\n/* harmony export */   \"deleteTodo\": () => (/* binding */ deleteTodo)\n/* harmony export */ });\nfunction deleteProject(project, projects) {\n    const index = projects.indexOf(project);\n\n    if (index === 0) {\n        projects.shift();\n    } else {\n        projects.splice(index, 1);\n    }\n}\n\nfunction deleteTodo(Todo, project) {\n    \n    // Splits text content of Todo div on \",\" and stores the 0th index item, the title\n    const requiredTitle = Todo.textContent.split(',')[0];\n\n    // Finds object of associated with the requiredTitle\n    const object = project.TodoList.find(x => x.title === requiredTitle);\n\n    const index = project.TodoList.indexOf(object);\n\n    if (index === 0) {\n        project.TodoList.shift();\n    } else {\n        project.TodoList.splice(index, 1);\n    }\n}\n\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/delete.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _objectGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objectGenerator */ \"./src/objectGenerator.js\");\n/* harmony import */ var _delete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./delete */ \"./src/delete.js\");\n/* harmony import */ var _DisplayDOM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DisplayDOM */ \"./src/DisplayDOM.js\");\n/* harmony import */ var _popup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./popup */ \"./src/popup.js\");\n\n\n\n\n\n// array to store all project(project is the file containing all TODOs)\nconst Projects = [];\n\n// area of index.html where projects would be displayed\nconst ProjectDisplay = document.querySelector(\"#project-display\");\n\n// Default project file\nconst project0 = (0,_objectGenerator__WEBPACK_IMPORTED_MODULE_0__.projectGenerator)(\"Default\");\nProjects.push(project0);\n\n// Test objects\nconst Todo1 = (0,_objectGenerator__WEBPACK_IMPORTED_MODULE_0__.todoGenerator)(\"home\",\"things to do\",\"22/03/2022\",\"TOP\");\nconst Todo2 = (0,_objectGenerator__WEBPACK_IMPORTED_MODULE_0__.todoGenerator)(\"class\",\"things done\",\"20/03/2022\",\"MEDIUM\");\nconst Todo3 = (0,_objectGenerator__WEBPACK_IMPORTED_MODULE_0__.todoGenerator)(\"room\", \"my room is mine\", \"12/12/2021\",\"EASY\");\n\nproject0.TodoList.push(Todo1);\nproject0.TodoList.push(Todo2);\nproject0.TodoList.push(Todo3);\n\n// For initialization\n(0,_DisplayDOM__WEBPACK_IMPORTED_MODULE_2__.displayProjects)(Projects, ProjectDisplay);\nlet selectedProject = Projects[0];\nlet ToDisplayTODOs = selectedProject.TodoList;\n\n// area of index.html where TODOs would be displayed\nconst TODODisplay = document.querySelector(\"#TODO-display\");\n\n(0,_DisplayDOM__WEBPACK_IMPORTED_MODULE_2__.displayTODOs)(ToDisplayTODOs, TODODisplay);\n\n// Triggers on clicking on project div and it's components\n// Changes selectedProject and displays it's content or deletes a project or edits it\nProjectDisplay.addEventListener('click', function(event){\n    if (event.target.className === 'project') {\n        let requiredTitle = event.target.textContent;\n        selectedProject = Projects.find(x => x.title === requiredTitle);\n\n        ToDisplayTODOs = selectedProject.TodoList;\n\n        (0,_DisplayDOM__WEBPACK_IMPORTED_MODULE_2__.displayTODOs)(ToDisplayTODOs, TODODisplay);\n\n    } else if (event.target.className === 'delete') {\n        // In case the currently selected project is to be deleted\n        if (selectedProject.TodoList === ToDisplayTODOs) {\n            (0,_delete__WEBPACK_IMPORTED_MODULE_1__.deleteProject)(selectedProject, Projects);\n\n            selectedProject = Projects[0];\n            ToDisplayTODOs = selectedProject.TodoList;\n\n            (0,_DisplayDOM__WEBPACK_IMPORTED_MODULE_2__.displayProjects)(Projects, ProjectDisplay);\n            (0,_DisplayDOM__WEBPACK_IMPORTED_MODULE_2__.displayTODOs)(ToDisplayTODOs, TODODisplay);\n\n        } else {\n            (0,_delete__WEBPACK_IMPORTED_MODULE_1__.deleteProject)(selectedProject, Projects);\n            (0,_DisplayDOM__WEBPACK_IMPORTED_MODULE_2__.displayProjects)(Projects, ProjectDisplay);\n        };\n    } else if (event.target.className === 'edit') {\n\n        // Finding selected edit button's parent div and associated object\n        let requiredTitle = event.target.parentNode.textContent;\n        selectedProject = Projects.find(x => x.title === requiredTitle);\n \n        (0,_popup__WEBPACK_IMPORTED_MODULE_3__.projectEditPopup)(selectedProject);\n\n        (0,_DisplayDOM__WEBPACK_IMPORTED_MODULE_2__.displayProjects)(Projects, ProjectDisplay);\n    };\n});\n\n\n//Triggers on clicking TODOdisplay components, deletes and edits it\nTODODisplay.addEventListener('click', function(event) {\n    if (event.target.className === \"delete\") {\n        (0,_delete__WEBPACK_IMPORTED_MODULE_1__.deleteTodo)(event.target.parentNode, selectedProject);\n\n        (0,_DisplayDOM__WEBPACK_IMPORTED_MODULE_2__.displayTODOs)(ToDisplayTODOs, TODODisplay);\n    };\n});\n\nconst projectQuery = document.querySelector(\"#project-query\");\n\n// Triggers on hitting submit button on project div\nprojectQuery.addEventListener('submit', function(event) {\n\t// Prevent default form submit\n\tevent.preventDefault();\n\n    // Collecting user entries from FORM inputs\n    let title = projectQuery.querySelector('#title').value;\n\n    let project = (0,_objectGenerator__WEBPACK_IMPORTED_MODULE_0__.projectGenerator)(title);\n    Projects.push(project);\n\n    (0,_DisplayDOM__WEBPACK_IMPORTED_MODULE_2__.displayProjects)(Projects, ProjectDisplay);\n\n\t// Clear the form fields\n\tevent.target.reset();\n});\n\nconst TODOquery = document.querySelector(\"#TODO-query\");\n\n// Triggers on hitting submit button on todo div\nTODOquery.addEventListener('submit', function(event) {\n\t// Prevent default form submit\n\tevent.preventDefault();\n\n    // Collecting user entries from FORM inputs          \n    let title = TODOquery.querySelector('#title').value;\n    let description = TODOquery.querySelector('#description').value;\n    let dueDate = TODOquery.querySelector('#dueDate').value;\n    let priority = TODOquery.querySelector('#priority').value;\n\n    let TODO = (0,_objectGenerator__WEBPACK_IMPORTED_MODULE_0__.todoGenerator)(title, description, dueDate, priority);\n\n    selectedProject.TodoList.push(TODO);\n\n    (0,_DisplayDOM__WEBPACK_IMPORTED_MODULE_2__.displayTODOs)(selectedProject.TodoList, TODODisplay);\n\n\t// Clear the form fields\n\tevent.target.reset();\n});\n\n// const project1 = projectGenerator(\"Default\");\n// const project2 = projectGenerator(\"Top priority\");\n// const project3 = projectGenerator(\"Home applications\");\n\n// const Todo1 = todoGenerator(\"home\",\"things to do\",\"22/03/2022\",\"TOP\");\n// const Todo2 = todoGenerator(\"class\",\"things done\",\"20/03/2022\",\"MEDIUM\");\n// const Todo3 = todoGenerator(\"room\", \"my room is mine\", \"12/12/2021\",\"EASY\");\n\n// project1.TodoList.push(Todo1);\n// project1.TodoList.push(Todo2);\n// project1.TodoList.push(Todo3);\n\n// Projects.push(project1);\n// Projects.push(project2);\n// Projects.push(project3);\n\n// // Adds title of each project on DOM\n// Projects.forEach(function(project) {\n//     let projectDOM = projectDOMGenerator(project);\n//     projectsDiv.appendChild(projectDOM);\n// })\n\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/objectGenerator.js":
/*!********************************!*\
  !*** ./src/objectGenerator.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projectGenerator\": () => (/* binding */ projectGenerator),\n/* harmony export */   \"todoGenerator\": () => (/* binding */ todoGenerator)\n/* harmony export */ });\n// This module generates objects holding data\nfunction todoGenerator(title, description, dueDate, priority) {\n    return {\n        title: title,\n        description: description,\n        dueDate: dueDate,\n        priority: priority\n    };\n};\n\nfunction projectGenerator(title) {\n    return {\n        title: title,\n        TodoList : []\n    };\n};\n\n\n\n//# sourceURL=webpack://todo-list/./src/objectGenerator.js?");

/***/ }),

/***/ "./src/popup.js":
/*!**********************!*\
  !*** ./src/popup.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projectEditPopup\": () => (/* binding */ projectEditPopup)\n/* harmony export */ });\n/* harmony import */ var _DisplayDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DisplayDOM */ \"./src/DisplayDOM.js\");\n\n\n// Edits project object on clicking edit div\nfunction projectEditPopup(project) {\n\n    let newTitle = prompt(\"Please enter new title\", `${project.title}`);\n    project.title = newTitle;\n};\n\n\n\n//# sourceURL=webpack://todo-list/./src/popup.js?");

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