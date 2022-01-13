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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_driversService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/driversService */ \"./modules/driversService.js\");\n/* harmony import */ var _modules_programmersService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/programmersService */ \"./modules/programmersService.js\");\n/* harmony import */ var _modules_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/form */ \"./modules/form.js\");\n/* harmony import */ var _modules_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/table */ \"./modules/table.js\");\n\r\n\r\n\r\n\r\n\r\nwindow.programmersService = new _modules_programmersService__WEBPACK_IMPORTED_MODULE_1__.ProgrammersService();\r\nwindow.driversService = new _modules_driversService__WEBPACK_IMPORTED_MODULE_0__.DriversService();\r\n\r\n(0,_modules_form__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_table__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./models/Driver.js":
/*!**************************!*\
  !*** ./models/Driver.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Driver\": () => (/* binding */ Driver)\n/* harmony export */ });\n/* harmony import */ var _Employee__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Employee */ \"./models/Employee.js\");\n/* harmony import */ var _modules_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/render */ \"./modules/render.js\");\n\r\n\r\n\r\nclass Driver extends _Employee__WEBPACK_IMPORTED_MODULE_0__.Employee {\r\n  constructor(id, lastname, firstname, age, isMarried, drivingExperience, workingCar) {\r\n    super(id, lastname, firstname, age, isMarried);\r\n    this._drivingExperience = +drivingExperience;\r\n    this._workingCar = workingCar;\r\n  }\r\n\r\n  set drivingExperience(years) {\r\n    this._drivingExperience = years;\r\n  }\r\n\r\n  get drivingExperience() {\r\n    return this._drivingExperience;\r\n  }\r\n\r\n  set workingCar(car) {\r\n    this._workingCar = car;\r\n  }\r\n\r\n  get workingCar() {\r\n    return this._workingCar;\r\n  }\r\n\r\n  static remove(id) {\r\n    let drivers = driversService.getDrivers();\r\n    drivers.splice(id, 1);\r\n    (0,_modules_render__WEBPACK_IMPORTED_MODULE_1__.render)('drivers', drivers);\r\n    driversService.setDrivers(drivers);\r\n  }\r\n}\n\n//# sourceURL=webpack:///./models/Driver.js?");

/***/ }),

/***/ "./models/Employee.js":
/*!****************************!*\
  !*** ./models/Employee.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Employee\": () => (/* binding */ Employee)\n/* harmony export */ });\nclass Employee {\r\n  constructor(id, lastname, firstname, age, isMarried) {\r\n    this._id = +id;\r\n    this._lastname = lastname;\r\n    this._firstname = firstname;\r\n    this._age = +age;\r\n    this._isMarried = isMarried;\r\n  }\r\n\r\n  get id() {\r\n    return this._id;\r\n  }\r\n\r\n  set id(id) {\r\n    this._id = id;\r\n  }\r\n\r\n  get lastname() {\r\n    return this._lastname;\r\n  }\r\n\r\n  set lastname(lastname) {\r\n    if (lastname.length < 2) { throw new Error('The value being set for lastname is too short'); }\r\n    else if (lastname.length > 50) { throw new Error('The value being set for lastname is too long'); }\r\n    this._lastname = lastname[0].toUpperCase() + lastname.slice(1).toLowerCase();\r\n  }\r\n\r\n  get firstname() {\r\n    return this._firstname;\r\n  }\r\n\r\n  set firstname(firstname) {\r\n    if (firstname.length < 2) { throw new Error('The value being set for firstname is too short'); }\r\n    else if (firstname.length > 50) { throw new Error('The value being set for firstname is too long'); }\r\n    this._firstname = firstname[0].toUpperCase() + firstname.slice(1).toLowerCase();\r\n  }\r\n\r\n  get age() {\r\n    return this._age;\r\n  }\r\n\r\n  set age(age) {\r\n    if (age < 0) { throw new Error('The age cannot be less than zero'); }\r\n    else if (age > 200) { throw new Error('The age cannot be more than 200 years'); }\r\n    this._age = age;\r\n  }\r\n\r\n  get isMarried() {\r\n    return this._isMarried;\r\n  }\r\n\r\n  set isMarried(isMarried) {\r\n    if (typeof isMarried === 'boolean') {\r\n      this._isMarried = isMarried;\r\n    } else if (isMarried === 'true' || isMarried === 'false') {\r\n      this._isMarried = Boolean(isMarried);\r\n    } else {\r\n      throw new Error('isMarried can only take the values true or false');\r\n    }\r\n  }\r\n\r\n  get fullName() {\r\n    return `${this.firstname} ${this.lastname}`;\r\n  }\r\n\r\n  set fullName(fullname) {\r\n    [this.firstname, this.lastname] = fullname.split(' ');\r\n  }\r\n}\n\n//# sourceURL=webpack:///./models/Employee.js?");

/***/ }),

/***/ "./models/Programmer.js":
/*!******************************!*\
  !*** ./models/Programmer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Programmer\": () => (/* binding */ Programmer)\n/* harmony export */ });\n/* harmony import */ var _modules_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/render */ \"./modules/render.js\");\n/* harmony import */ var _Employee__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Employee */ \"./models/Employee.js\");\n\r\n\r\n\r\nclass Programmer extends _Employee__WEBPACK_IMPORTED_MODULE_1__.Employee {\r\n  constructor(id, lastname, firstname, age, isMarried, level, experience, salary) {\r\n    super(id, lastname, firstname, age, isMarried);\r\n    this._level = level;\r\n    this._experience = +experience;\r\n    this._salary = +salary;\r\n  }\r\n\r\n  set level(level) {\r\n    this._level = level;\r\n  }\r\n\r\n  get level() {\r\n    return this._level;\r\n  }\r\n\r\n  set experience(experience) {\r\n    this._experience = experience;\r\n  }\r\n\r\n  get experience() {\r\n    return this._experience;\r\n  }\r\n\r\n  get salary() {\r\n    return this._salary;\r\n  }\r\n\r\n  set salary(salary) {\r\n    this._salary = salary;\r\n  }\r\n\r\n  static remove(id) {\r\n    let programmers = programmersService.getProgrammers();\r\n    programmers.splice(id, 1);\r\n    (0,_modules_render__WEBPACK_IMPORTED_MODULE_0__.render)('programmers', programmers);\r\n    programmersService.setProgrammers(programmers);\r\n  }\r\n}\n\n//# sourceURL=webpack:///./models/Programmer.js?");

/***/ }),

/***/ "./modules/driversService.js":
/*!***********************************!*\
  !*** ./modules/driversService.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DriversService\": () => (/* binding */ DriversService)\n/* harmony export */ });\n/* harmony import */ var _models_Driver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/Driver */ \"./models/Driver.js\");\n\r\n\r\nclass DriversService {\r\n  getDrivers() {\r\n    const json = localStorage.getItem('drivers');\r\n    const arr = JSON.parse(json);\r\n    let drivers = [];\r\n\r\n    if (!arr) { return drivers; }\r\n\r\n    arr.forEach(driver => {\r\n      drivers.push(\r\n        new _models_Driver__WEBPACK_IMPORTED_MODULE_0__.Driver(\r\n          driver._id,\r\n          driver._lastname,\r\n          driver._firstname,\r\n          driver._age,\r\n          driver._isMarried,\r\n          driver._drivingExperience,\r\n          driver._workingCar,\r\n        ));\r\n    });\r\n\r\n    return drivers;\r\n  }\r\n\r\n  setDrivers(drivers) {\r\n    localStorage.setItem('drivers', JSON.stringify(drivers));\r\n  }\r\n};\n\n//# sourceURL=webpack:///./modules/driversService.js?");

/***/ }),

/***/ "./modules/form.js":
/*!*************************!*\
  !*** ./modules/form.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _models_Programmer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/Programmer */ \"./models/Programmer.js\");\n/* harmony import */ var _models_Driver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/Driver */ \"./models/Driver.js\");\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render */ \"./modules/render.js\");\n\r\n\r\n\r\n\r\nconst form = () => {\r\n  const form = document.getElementById('workers-form');\r\n  const workersType = document.getElementById('workers-type');\r\n  const programmerInputs = document.querySelectorAll('.programmer-info');\r\n  const driverInputs = document.querySelectorAll('.driver-info');\r\n\r\n  const showInput = (input) => {\r\n    input.classList.remove('d-none');\r\n    input.disabled = false;\r\n  };\r\n\r\n  const hideInput = (input) => {\r\n    input.classList.add('d-none');\r\n    input.disabled = true;\r\n    input.value = '';\r\n  };\r\n\r\n  const toggleShowInputs = () => {\r\n    const worker = workersType.value;\r\n\r\n    if (worker === 'Programmer') {\r\n      programmerInputs.forEach(input => showInput(input));\r\n      driverInputs.forEach(input => hideInput(input));\r\n    } else if (worker === 'Driver') {\r\n      programmerInputs.forEach(input => hideInput(input));\r\n      driverInputs.forEach(input => showInput(input));\r\n    } else {\r\n      programmerInputs.forEach(input => hideInput(input));\r\n      driverInputs.forEach(input => hideInput(input));\r\n    }\r\n  };\r\n\r\n  workersType.addEventListener('input', toggleShowInputs);\r\n\r\n  form.addEventListener('submit', (e) => {\r\n    e.preventDefault();\r\n    const formData = new FormData(form);\r\n\r\n    let formValues = [];\r\n    for (let [, value] of formData) {\r\n      formValues.push(value);\r\n    }\r\n\r\n    if (workersType.value === 'Programmer') {\r\n      const programmers = programmersService.getProgrammers();\r\n      const nextId = programmers.length;\r\n      const programmer = new _models_Programmer__WEBPACK_IMPORTED_MODULE_0__.Programmer(nextId, ...formValues);\r\n\r\n      programmers.push(programmer);\r\n      (0,_render__WEBPACK_IMPORTED_MODULE_2__.render)('programmers', programmers);\r\n\r\n      programmersService.setProgrammers(programmers);\r\n      programmerInputs.forEach(input => hideInput(input));\r\n    } else if (workersType.value === 'Driver') {\r\n      const drivers = driversService.getDrivers();\r\n      const nextId = drivers.length;\r\n      const driver = new _models_Driver__WEBPACK_IMPORTED_MODULE_1__.Driver(nextId, ...formValues);\r\n\r\n      drivers.push(driver);\r\n      (0,_render__WEBPACK_IMPORTED_MODULE_2__.render)('drivers', drivers);\r\n\r\n      driversService.setDrivers(drivers);\r\n      driverInputs.forEach(input => hideInput(input));\r\n    }\r\n\r\n    form.reset();\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (form);\n\n//# sourceURL=webpack:///./modules/form.js?");

/***/ }),

/***/ "./modules/programmersService.js":
/*!***************************************!*\
  !*** ./modules/programmersService.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ProgrammersService\": () => (/* binding */ ProgrammersService)\n/* harmony export */ });\n/* harmony import */ var _models_Programmer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/Programmer */ \"./models/Programmer.js\");\n\r\n\r\nclass ProgrammersService {\r\n  getProgrammers() {\r\n    const json = localStorage.getItem('programmers');\r\n    const arr = JSON.parse(json);\r\n    let programmers = [];\r\n\r\n    if (!arr) { return programmers; }\r\n\r\n    arr.forEach(programmer => {\r\n      programmers.push(\r\n        new _models_Programmer__WEBPACK_IMPORTED_MODULE_0__.Programmer(\r\n          programmer._id,\r\n          programmer._lastname,\r\n          programmer._firstname,\r\n          programmer._age,\r\n          programmer._isMarried,\r\n          programmer._level,\r\n          programmer._experience,\r\n          programmer._salary\r\n        ));\r\n    });\r\n\r\n    return programmers;\r\n  }\r\n\r\n  setProgrammers(programmers) {\r\n    localStorage.setItem('programmers', JSON.stringify(programmers));\r\n  }\r\n};\n\n//# sourceURL=webpack:///./modules/programmersService.js?");

/***/ }),

/***/ "./modules/render.js":
/*!***************************!*\
  !*** ./modules/render.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* binding */ render)\n/* harmony export */ });\nconst render = (workersType, workers) => {\r\n  const tbody = document.getElementById(`${workersType}-table-body`);\r\n  tbody.innerHTML = '';\r\n\r\n  workers.forEach(worker => {\r\n    tbody.insertAdjacentHTML('beforeend', `\r\n      <tr data-key=${worker.id}>\r\n        <th scope=\"row\">${worker.id + 1}</th>\r\n        <td>${worker.lastname}</td>\r\n        <td>${worker.firstname}</td>\r\n        <td>${worker.age}</td>\r\n        <td>${worker.isMarried ? 'Да' : 'Нет'}</td>\r\n        <td>${workersType === 'drivers' ? worker.drivingExperience : worker.level}</td>\r\n        <td>${workersType === 'drivers' ? worker.workingCar : worker.experience}</td>\r\n        ${workersType === 'drivers' ? '' : `<td>${worker.salary}</td>`}\r\n        <td>\r\n          <button type=\"button\" class=\"btn btn-danger btn-remove\">\r\n            <i class=\"bi-person-x\"></i>\r\n          </button>\r\n        </td>\r\n      </tr>\r\n    `);\r\n  });\r\n};\n\n//# sourceURL=webpack:///./modules/render.js?");

/***/ }),

/***/ "./modules/table.js":
/*!**************************!*\
  !*** ./modules/table.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _models_Driver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/Driver */ \"./models/Driver.js\");\n/* harmony import */ var _models_Programmer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/Programmer */ \"./models/Programmer.js\");\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render */ \"./modules/render.js\");\n\r\n\r\n\r\n\r\nconst table = () => {\r\n  const programmers = programmersService.getProgrammers();\r\n  const drivers = driversService.getDrivers();\r\n  const programmersTbody = document.getElementById('programmers-table-body');\r\n  const driversTbody = document.getElementById('drivers-table-body');\r\n\r\n  (0,_render__WEBPACK_IMPORTED_MODULE_2__.render)('programmers', programmers);\r\n  (0,_render__WEBPACK_IMPORTED_MODULE_2__.render)('drivers', drivers);\r\n\r\n  programmersTbody.addEventListener('click', (e) => {\r\n    if (!e.target.closest('.btn-remove')) { return; }\r\n    const userId = e.target.closest('tr').dataset.key;\r\n    _models_Programmer__WEBPACK_IMPORTED_MODULE_1__.Programmer.remove(userId);\r\n  });\r\n\r\n  driversTbody.addEventListener('click', (e) => {\r\n    if (!e.target.closest('.btn-remove')) { return; }\r\n    const userId = e.target.closest('tr').dataset.key;\r\n    _models_Driver__WEBPACK_IMPORTED_MODULE_0__.Driver.remove(userId);\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (table);\n\n//# sourceURL=webpack:///./modules/table.js?");

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