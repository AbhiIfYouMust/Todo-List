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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n    padding: 0;\\n    margin: 0;\\n    display: flex;\\n}\\n\\n#projects {\\n    border: 2px solid green;\\n    width: 20vw;\\n    height: 100vh;\\n\\n} \\n\\n#TODO-display {\\n    border: 2px solid red;\\n    width: 80vw;\\n    height: 100vh;\\n}\\n\\n.project {\\n    border: 2px solid maroon;\\n    height: 80px;\\n}\\n\\n.todo {\\n    border: 2px solid maroon;\\n    height: 80px;\\n}\\n\\n.delete {\\n    border: 2px solid red;\\n    width: 5px;\\n    height: 5px;\\n    background-color: red;\\n}\\n\\n.edit {\\n    border: 2px solid grey;\\n    width: 5px;\\n    height: 5px;\\n    background-color:grey;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projectDOMGenerator\": () => (/* binding */ projectDOMGenerator),\n/* harmony export */   \"todoDOMGenerator\": () => (/* binding */ todoDOMGenerator)\n/* harmony export */ });\n// This module creates DOM element\nlet deleteDiv = document.createElement(\"button\");\ndeleteDiv.classList.add(\"delete\");\n\nlet editDiv = document.createElement(\"button\");\neditDiv.classList.add(\"edit\");\n\nfunction projectDOMGenerator(projectObject) {\n    const projectDiv = document.createElement(\"div\");\n    projectDiv.classList.add(\"project\");\n\n    let paragraph = document.createElement(\"p\");\n    projectDiv.appendChild(paragraph);\n\n    paragraph.textContent = `${projectObject.title}`;\n\n    projectDiv.appendChild(deleteDiv.cloneNode(true));\n    projectDiv.appendChild(editDiv.cloneNode(true));\n\n    return projectDiv;\n}\n\nfunction todoDOMGenerator(todoObject) {\n    const todoDiv = document.createElement('div');\n    todoDiv.classList.add(\"todo\");\n\n    let paragraph = document.createElement(\"p\");\n    todoDiv.appendChild(paragraph);\n\n    // Changes from DD-MM-YYYY if date in YYYY/MM/DD\n    function ChangeDateFormat (date) {\n        if (date.includes(\"/\")) {\n            const dateArray = date.split('/');\n            [dateArray[0], dateArray[2]] = [dateArray[2], dateArray[0]];\n            return dateArray.join('-');\n        }\n        else {\n            return date;\n        };  \n    };\n\n    paragraph.textContent = `${todoObject.title},  ${todoObject.description},   ${ChangeDateFormat(todoObject.dueDate)},   ${todoObject.priority}`;\n\n    todoDiv.appendChild(deleteDiv.cloneNode(true));\n    todoDiv.appendChild(editDiv.cloneNode(true));\n\n    return todoDiv;\n}\n\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/DOM.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _objectGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objectGenerator */ \"./src/objectGenerator.js\");\n/* harmony import */ var _delete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./delete */ \"./src/delete.js\");\n/* harmony import */ var _DisplayDOM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DisplayDOM */ \"./src/DisplayDOM.js\");\n/* harmony import */ var _popup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./popup */ \"./src/popup.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n\n\n\n\n\n\n// array to store all project(project is the file containing all TODOs)\nconst Projects = [];\n\n// area of index.html where projects would be displayed\nconst ProjectDisplay = document.querySelector(\"#project-display\");\n\n// Default project file\nconst project0 = (0,_objectGenerator__WEBPACK_IMPORTED_MODULE_0__.projectGenerator)(\"Default\");\nProjects.push(project0);\n\n// Test objects\nconst Todo1 = (0,_objectGenerator__WEBPACK_IMPORTED_MODULE_0__.todoGenerator)(\"home\",\"things to do\",\"22/03/2022\",\"High\");\nconst Todo2 = (0,_objectGenerator__WEBPACK_IMPORTED_MODULE_0__.todoGenerator)(\"class\",\"things done\",\"20/03/2022\",\"Medium\");\nconst Todo3 = (0,_objectGenerator__WEBPACK_IMPORTED_MODULE_0__.todoGenerator)(\"room\", \"my room is mine\", \"12/12/2021\",\"Low\");\n\nproject0.TodoList.push(Todo1);\nproject0.TodoList.push(Todo2);\nproject0.TodoList.push(Todo3);\n\n// For initialization\n(0,_DisplayDOM__WEBPACK_IMPORTED_MODULE_2__.displayProjects)(Projects, ProjectDisplay);\nlet selectedProject = Projects[0];\nlet ToDisplayTODOs = selectedProject.TodoList;\n\n// area of index.html where TODOs would be displayed\nconst TODODisplay = document.querySelector(\"#TODO-display\");\n\n(0,_DisplayDOM__WEBPACK_IMPORTED_MODULE_2__.displayTODOs)(ToDisplayTODOs, TODODisplay);\n\n// Triggers on clicking on project div and it's components\n// Changes selectedProject and displays it's content or deletes a project or edits it\nProjectDisplay.addEventListener('click', function(event){\n    if (event.target.className === 'project') {\n        let requiredTitle = event.target.textContent;\n        selectedProject = Projects.find(x => x.title === requiredTitle);\n\n        ToDisplayTODOs = selectedProject.TodoList;\n\n        (0,_DisplayDOM__WEBPACK_IMPORTED_MODULE_2__.displayTODOs)(ToDisplayTODOs, TODODisplay);\n\n    } else if (event.target.className === 'delete') {\n        // In case the currently selected project is to be deleted\n        if (selectedProject.TodoList === ToDisplayTODOs) {\n            (0,_delete__WEBPACK_IMPORTED_MODULE_1__.deleteProject)(selectedProject, Projects);\n\n            selectedProject = Projects[0];\n            ToDisplayTODOs = selectedProject.TodoList;\n\n            (0,_DisplayDOM__WEBPACK_IMPORTED_MODULE_2__.displayProjects)(Projects, ProjectDisplay);\n            (0,_DisplayDOM__WEBPACK_IMPORTED_MODULE_2__.displayTODOs)(ToDisplayTODOs, TODODisplay);\n\n        } else {\n            (0,_delete__WEBPACK_IMPORTED_MODULE_1__.deleteProject)(selectedProject, Projects);\n            (0,_DisplayDOM__WEBPACK_IMPORTED_MODULE_2__.displayProjects)(Projects, ProjectDisplay);\n        };\n    } else if (event.target.className === 'edit') {\n        // Finding selected edit button's parent div and associated object\n        let requiredTitle = event.target.parentNode.textContent;\n        selectedProject = Projects.find(x => x.title === requiredTitle);\n    \n        (0,_popup__WEBPACK_IMPORTED_MODULE_3__.projectEditPopup)(selectedProject, Projects, ProjectDisplay);\n    };\n});\n\n//Triggers on clicking TODOdisplay components, deletes and edits it\nTODODisplay.addEventListener('click', function(event) {\n    if (event.target.className === \"delete\") {\n        (0,_delete__WEBPACK_IMPORTED_MODULE_1__.deleteTodo)(event.target.parentNode, selectedProject);\n        (0,_DisplayDOM__WEBPACK_IMPORTED_MODULE_2__.displayTODOs)(ToDisplayTODOs, TODODisplay);\n\n    } else if (event.target.className === \"edit\") {\n        // Splits text content of Todo div on \",\" and stores the 0th index item, the title\n        const requiredTitle = event.target.parentNode.textContent.split(',')[0];\n\n        // Finds object of associated with the requiredTitle\n        const requiredTodoObject = selectedProject.TodoList.find(x => x.title === requiredTitle);\n\n        (0,_popup__WEBPACK_IMPORTED_MODULE_3__.todoEditPopup)(requiredTodoObject, ToDisplayTODOs, TODODisplay);\n    };\n});\n\nconst projectQuery = document.querySelector(\"#project-query\");\n\n// Triggers on hitting submit button on project div\nprojectQuery.addEventListener('submit', function(event) {\n\t// Prevent default form submit\n\tevent.preventDefault();\n\n    // Collecting user entries from FORM inputs\n    let title = projectQuery.querySelector('#title').value;\n\n    // Preventing duplicates\n    if (!(Projects.some((project) => title === project.title))) {\n        let project = (0,_objectGenerator__WEBPACK_IMPORTED_MODULE_0__.projectGenerator)(title);\n        Projects.push(project);\n    } else {\n        alert(`You already have a project with named ${title}.`);\n    };\n\n    (0,_DisplayDOM__WEBPACK_IMPORTED_MODULE_2__.displayProjects)(Projects, ProjectDisplay);\n\n\t// Clear the form fields\n\tevent.target.reset();\n});\n\nconst TODOquery = document.querySelector(\"#TODO-query\");\n\n// Triggers on hitting submit button on todo div\nTODOquery.addEventListener('submit', function(event) {\n\t// Prevent default form submit\n\tevent.preventDefault();\n\n    // Collecting user entries from FORM inputs          \n    let title = TODOquery.querySelector('#title').value;\n    let description = TODOquery.querySelector('#description').value;\n    let dueDate = TODOquery.querySelector('#dueDate').value;\n    let priority = TODOquery.querySelector('#priority').value;\n\n    // Preventing duplicate titles\n    if (!(selectedProject.TodoList.some((Todo) => title === Todo.title))) {\n        let TODO = (0,_objectGenerator__WEBPACK_IMPORTED_MODULE_0__.todoGenerator)(title, description, dueDate, priority);\n        selectedProject.TodoList.push(TODO);\n        \n    } else {\n        alert(`You already have a Todo titled ${title}.`);\n    };\n\n    (0,_DisplayDOM__WEBPACK_IMPORTED_MODULE_2__.displayTODOs)(selectedProject.TodoList, TODODisplay);\n\n\t// Clear the form fields\n\tevent.target.reset();\n});\n\n// const project1 = projectGenerator(\"Default\");\n// const project2 = projectGenerator(\"Top priority\");\n// const project3 = projectGenerator(\"Home applications\");\n\n// const Todo1 = todoGenerator(\"home\",\"things to do\",\"22/03/2022\",\"TOP\");\n// const Todo2 = todoGenerator(\"class\",\"things done\",\"20/03/2022\",\"MEDIUM\");\n// const Todo3 = todoGenerator(\"room\", \"my room is mine\", \"12/12/2021\",\"EASY\");\n\n// project1.TodoList.push(Todo1);\n// project1.TodoList.push(Todo2);\n// project1.TodoList.push(Todo3);\n\n// Projects.push(project1);\n// Projects.push(project2);\n// Projects.push(project3);\n\n// // Adds title of each project on DOM\n// Projects.forEach(function(project) {\n//     let projectDOM = projectDOMGenerator(project);\n//     projectsDiv.appendChild(projectDOM);\n// })\n\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projectEditPopup\": () => (/* binding */ projectEditPopup),\n/* harmony export */   \"todoEditPopup\": () => (/* binding */ todoEditPopup)\n/* harmony export */ });\n/* harmony import */ var _DisplayDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DisplayDOM */ \"./src/DisplayDOM.js\");\n\n\n// Edits project object on clicking edit div\nfunction projectEditPopup(project, projects, projectDOM) {\n    const modal = document.querySelector('#projectQueryModal');\n\n    modal.querySelector('#title').value = project.title;\n    modal.showModal();\n            \n    modal.addEventListener('cancel', (event) => {\n        event.preventDefault();\n    });\n\n    modal.addEventListener('submit', Submit, { once: true });\n\n    function Submit(event) {\n        // Prevent default form submit\n        event.preventDefault();\n\n        // Collecting user entries from FORM inputs\n        let newTitle = modal.querySelector('#title').value;\n\n        // case in which user decides to use old name\n        if (newTitle === project.title) {\n            project.title = newTitle;\n        } else if (projects.some((proj) => newTitle === proj.title)) {\n            alert(\"Don't make duplicates you wanker!\");\n        } else {\n            project.title = newTitle;\n        }\n\n        modal.close();\n\n        modal.querySelector('#title').value = '';\n\n        // Displays projects\n        (0,_DisplayDOM__WEBPACK_IMPORTED_MODULE_0__.displayProjects)(projects, projectDOM);\n    }\n};\n\nfunction todoEditPopup (todo, todoList, todoDOM) {\n    // Changes from DD-MM-YYYY if date in YYYY/MM/DD\n    function ChangeDateFormat (date) {\n        if (date.includes(\"/\")) {\n            const dateArray = date.split('/');\n            [dateArray[0], dateArray[2]] = [dateArray[2], dateArray[0]];\n            return dateArray.join('-');\n        }\n        else {\n            return date;\n        };  \n    }\n\n    const modal = document.querySelector('#todoQueryModal');\n\n    // Putting pre-existing data of TODO \n    modal.querySelector('#title').value = todo.title;\n    modal.querySelector('#description').value = todo.description;\n    modal.querySelector('#dueDate').value = ChangeDateFormat(todo.dueDate);\n    modal.querySelector('select').value = todo.priority;\n\n    modal.showModal();\n\n    modal.addEventListener('cancel', (event) => {    \n        event.preventDefault();\n    });\n\n    modal.addEventListener('submit', Submit, { once: true });\n\n    function Submit(event) {\n        // Prevent default form submit\n        event.preventDefault();\n\n        // Collecting user entries from FORM inputs\n        let newTitle = modal.querySelector('#title').value;\n        let newDescription = modal.querySelector('#description').value;\n        let newDueDate = modal.querySelector('#dueDate').value;\n        let newPriority = modal.querySelector('#priority').value;\n    \n\n        // case in which user decides to use old name\n        if (newTitle === todo.title) {\n            todo.title = newTitle;\n            todo.description = newDescription;\n            todo.dueDate = newDueDate;\n            todo.priority = newPriority;\n\n        } else if (todoList.some((TODO) => newTitle === TODO.title)) {\n            alert(\"Don't make duplicates you wanker!\");\n        } else {\n            todo.title = newTitle;\n            todo.description = newDescription;\n            todo.dueDate = newDueDate;\n            todo.priority = newPriority;\n        }\n\n        modal.close();\n\n        modal.querySelector('#title').value = '';\n        modal.querySelector('#title').value = '';\n        modal.querySelector('#description').value = '';\n        modal.querySelector('#dueDate').value = '';\n        modal.querySelector('select').value = '';\n\n        (0,_DisplayDOM__WEBPACK_IMPORTED_MODULE_0__.displayTODOs)(todoList, todoDOM);\n    }\n\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/popup.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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