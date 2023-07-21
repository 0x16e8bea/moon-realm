/*!
 * Copyright (c) 2023 by Vectary. All rights reserved.
 * Rev cfc95f9326dd61836cc095fa97e151d31a3df32c
 * @copyright
 */
var Vectary =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/viewer-api/scripts/vctr-api.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/_common_/types.ts":
/*!*******************************!*\
  !*** ./src/_common_/types.ts ***!
  \*******************************/
/*! exports provided: ApiMethods, ApiEvents, OrbitControlsStates, Language */
/*! exports used: ApiEvents, ApiMethods, Language, OrbitControlsStates */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ApiMethods; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return OrbitControlsStates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Language; });
var ApiMethods;
(function (ApiMethods) {
    ApiMethods[ApiMethods["ERROR"] = 0] = "ERROR";
    ApiMethods[ApiMethods["READY"] = 1] = "READY";
    ApiMethods[ApiMethods["GET_OBJECTS"] = 2] = "GET_OBJECTS";
    ApiMethods[ApiMethods["GET_OBJECT_BY_NAME"] = 3] = "GET_OBJECT_BY_NAME";
    ApiMethods[ApiMethods["GET_OBJECTS_BY_NAME"] = 4] = "GET_OBJECTS_BY_NAME";
    ApiMethods[ApiMethods["GET_MESHES"] = 5] = "GET_MESHES";
    ApiMethods[ApiMethods["GET_MESH_BY_NAME"] = 6] = "GET_MESH_BY_NAME";
    ApiMethods[ApiMethods["GET_MESHES_BY_NAME"] = 7] = "GET_MESHES_BY_NAME";
    ApiMethods[ApiMethods["GET_HIT_OBJECTS"] = 8] = "GET_HIT_OBJECTS";
    ApiMethods[ApiMethods["GET_VISIBILITY"] = 9] = "GET_VISIBILITY";
    ApiMethods[ApiMethods["SET_VISIBILITY"] = 10] = "SET_VISIBILITY";
    ApiMethods[ApiMethods["GET_POSITION"] = 11] = "GET_POSITION";
    ApiMethods[ApiMethods["SET_POSITION_REL"] = 12] = "SET_POSITION_REL";
    ApiMethods[ApiMethods["SET_POSITION_ABS"] = 13] = "SET_POSITION_ABS";
    ApiMethods[ApiMethods["GET_ROTATION"] = 14] = "GET_ROTATION";
    ApiMethods[ApiMethods["SET_ROTATION_REL"] = 15] = "SET_ROTATION_REL";
    ApiMethods[ApiMethods["SET_ROTATION_ABS"] = 16] = "SET_ROTATION_ABS";
    ApiMethods[ApiMethods["GET_SCALE"] = 17] = "GET_SCALE";
    ApiMethods[ApiMethods["SET_SCALE_REL"] = 18] = "SET_SCALE_REL";
    ApiMethods[ApiMethods["SET_SCALE_ABS"] = 19] = "SET_SCALE_ABS";
    ApiMethods[ApiMethods["GET_MATERIALS"] = 20] = "GET_MATERIALS";
    ApiMethods[ApiMethods["SET_MATERIAL"] = 21] = "SET_MATERIAL";
    ApiMethods[ApiMethods["GET_MATERIALS_BY_NAME"] = 22] = "GET_MATERIALS_BY_NAME";
    ApiMethods[ApiMethods["GET_MATERIAL_BY_NAME"] = 23] = "GET_MATERIAL_BY_NAME";
    ApiMethods[ApiMethods["GET_MATERIAL_PROPS"] = 24] = "GET_MATERIAL_PROPS";
    ApiMethods[ApiMethods["CREATE_MATERIAL"] = 25] = "CREATE_MATERIAL";
    ApiMethods[ApiMethods["UPDATE_MATERIAL"] = 26] = "UPDATE_MATERIAL";
    ApiMethods[ApiMethods["GET_BACKGROUND"] = 27] = "GET_BACKGROUND";
    ApiMethods[ApiMethods["SET_BACKGROUND"] = 28] = "SET_BACKGROUND";
    ApiMethods[ApiMethods["GET_EXPOSURE"] = 29] = "GET_EXPOSURE";
    ApiMethods[ApiMethods["SET_EXPOSURE"] = 30] = "SET_EXPOSURE";
    ApiMethods[ApiMethods["GET_ENVIRONMENT_MAP"] = 31] = "GET_ENVIRONMENT_MAP";
    ApiMethods[ApiMethods["SET_ENVIRONMENT_MAP"] = 32] = "SET_ENVIRONMENT_MAP";
    ApiMethods[ApiMethods["ROTATE_ENVIRONMENT_MAP"] = 33] = "ROTATE_ENVIRONMENT_MAP";
    ApiMethods[ApiMethods["GET_CAMERAS"] = 34] = "GET_CAMERAS";
    ApiMethods[ApiMethods["GET_CAMERAS_BY_NAME"] = 35] = "GET_CAMERAS_BY_NAME";
    ApiMethods[ApiMethods["GET_CAMERA_BY_NAME"] = 36] = "GET_CAMERA_BY_NAME";
    ApiMethods[ApiMethods["SWITCH_VIEW"] = 37] = "SWITCH_VIEW";
    ApiMethods[ApiMethods["SWITCH_VIEW_ASYNC"] = 38] = "SWITCH_VIEW_ASYNC";
    ApiMethods[ApiMethods["MOVE_VIEW"] = 39] = "MOVE_VIEW";
    ApiMethods[ApiMethods["ROTATE_VIEW"] = 40] = "ROTATE_VIEW";
    ApiMethods[ApiMethods["ZOOM_VIEW"] = 41] = "ZOOM_VIEW";
    ApiMethods[ApiMethods["GET_FOV"] = 42] = "GET_FOV";
    ApiMethods[ApiMethods["SET_FOV"] = 43] = "SET_FOV";
    ApiMethods[ApiMethods["TAKE_SCREENSHOT"] = 44] = "TAKE_SCREENSHOT";
    ApiMethods[ApiMethods["ENABLE_ANNOTATIONS"] = 45] = "ENABLE_ANNOTATIONS";
    ApiMethods[ApiMethods["GET_ANNOTATIONS"] = 46] = "GET_ANNOTATIONS";
    ApiMethods[ApiMethods["GET_ANNOTATION_BY_ID"] = 47] = "GET_ANNOTATION_BY_ID";
    ApiMethods[ApiMethods["ADD_ANNOTATION"] = 48] = "ADD_ANNOTATION";
    ApiMethods[ApiMethods["REMOVE_ANNOTATION_BY_ID"] = 49] = "REMOVE_ANNOTATION_BY_ID";
    ApiMethods[ApiMethods["EXPAND_ANNOTATIONS_BY_ID"] = 50] = "EXPAND_ANNOTATIONS_BY_ID";
    ApiMethods[ApiMethods["HIGHLIGHT_MESHES_BY_NAME"] = 51] = "HIGHLIGHT_MESHES_BY_NAME";
    ApiMethods[ApiMethods["UNHIGHLIGHT_MESHES_BY_NAME"] = 52] = "UNHIGHLIGHT_MESHES_BY_NAME";
    ApiMethods[ApiMethods["SET_CANVAS_STATE"] = 53] = "SET_CANVAS_STATE";
    ApiMethods[ApiMethods["GET_VIEW_STATE"] = 54] = "GET_VIEW_STATE";
    ApiMethods[ApiMethods["APPLY_VIEW_STATE"] = 55] = "APPLY_VIEW_STATE";
    ApiMethods[ApiMethods["SEND_EVENT"] = 56] = "SEND_EVENT";
    ApiMethods[ApiMethods["PLAY"] = 57] = "PLAY";
    ApiMethods[ApiMethods["LOAD"] = 58] = "LOAD";
    ApiMethods[ApiMethods["SET_UUID_AR"] = 59] = "SET_UUID_AR";
    ApiMethods[ApiMethods["TRIGGER_AR_CLICK"] = 60] = "TRIGGER_AR_CLICK";
    ApiMethods[ApiMethods["GET_2D_COORDINATES"] = 61] = "GET_2D_COORDINATES";
    ApiMethods[ApiMethods["GET_CURRENT_USER"] = 62] = "GET_CURRENT_USER";
    ApiMethods[ApiMethods["DID_RENDER_LAST_FRAME"] = 63] = "DID_RENDER_LAST_FRAME";
    ApiMethods[ApiMethods["ADD_EVENT_LISTENER"] = 64] = "ADD_EVENT_LISTENER";
    ApiMethods[ApiMethods["REMOVE_EVENT_LISTENER"] = 65] = "REMOVE_EVENT_LISTENER";
    ApiMethods[ApiMethods["UPDATE_EVENT"] = 66] = "UPDATE_EVENT";
    ApiMethods[ApiMethods["TAKE_FIXED_SIZE_SCREENSHOT"] = 67] = "TAKE_FIXED_SIZE_SCREENSHOT";
    ApiMethods[ApiMethods["ADD_COMPLEX_ANNOTATION"] = 68] = "ADD_COMPLEX_ANNOTATION";
    ApiMethods[ApiMethods["SET_ANNOTATION_VISIBILITY"] = 69] = "SET_ANNOTATION_VISIBILITY";
})(ApiMethods || (ApiMethods = {}));
var ApiEvents;
(function (ApiEvents) {
    ApiEvents["ORBIT_CONTROLS_STATE_CHANGE"] = "ORBIT_CONTROLS_STATE_CHANGE";
    ApiEvents["MOUSE_MOVE"] = "MOUSE_MOVE";
    ApiEvents["MOUSE_CLICK"] = "MOUSE_CLICK";
    ApiEvents["MOUSE_DOWN"] = "MOUSE_DOWN";
})(ApiEvents || (ApiEvents = {}));
var OrbitControlsStates;
(function (OrbitControlsStates) {
    OrbitControlsStates["NONE"] = "NONE";
    OrbitControlsStates["ROTATE"] = "ROTATE";
    OrbitControlsStates["DOLLY"] = "DOLLY";
    OrbitControlsStates["PAN"] = "PAN";
    OrbitControlsStates["TOUCH_ROTATE"] = "TOUCH_ROTATE";
    OrbitControlsStates["TOUCH_PAN"] = "TOUCH_PAN";
    OrbitControlsStates["TOUCH_DOLLY_PAN"] = "TOUCH_DOLLY_PAN";
    OrbitControlsStates["TOUCH_DOLLY_ROTATE"] = "TOUCH_DOLLY_ROTATE";
})(OrbitControlsStates || (OrbitControlsStates = {}));
var Language;
(function (Language) {
    Language["AUTO"] = "auto";
    Language["ENGLISH"] = "en";
    Language["SPANISH"] = "es";
    Language["GERMAN"] = "de";
    Language["FRENCH"] = "fr";
    Language["ITALIAN"] = "it";
    Language["RUSSIAN"] = "ru";
})(Language || (Language = {}));


/***/ }),

/***/ "./src/viewer-api/scripts/vctr-api.ts":
/*!********************************************!*\
  !*** ./src/viewer-api/scripts/vctr-api.ts ***!
  \********************************************/
/*! exports provided: VctrApi */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is an entry point */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VctrApi", function() { return VctrApi; });
/* harmony import */ var _common_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_common_/types */ "./src/_common_/types.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            }
        }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

class VctrApi {
    constructor(id, err) {
        this.isReady = false;
        this.iframeMsgMap = new Map();
        this.eventsCallbackMap = new Map();
        this.id = id;
        this.globalErrCb = err;
        VctrApi.Utils = new Utils(this);
    }
    init() {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            this.elem = document.getElementById(this.id);
            if (!this.elem) {
                const errMsg = `Element with id "${this.id}" does not exist`;
                this.globalErrCb ? this.globalErrCb(errMsg) : reject(errMsg);
                return resolve();
            }
            else {
                this.type = this.elem.nodeName === "IFRAME" ? "iframe" : this.elem.nodeName === "VCTR-VIEWER" ? "webcomponent" : null;
                if (!this.type) {
                    const errMsg = `Element with id "${this.id}" is not of an appropriate type`;
                    this.globalErrCb ? this.globalErrCb(errMsg) : reject(errMsg);
                    return resolve();
                }
            }
            switch (this.type) {
                case "iframe":
                    this.initIframeMessenger();
                default:
                    yield this.getReady();
                    resolve();
            }
        }));
    }
    getReady() {
        return new Promise((resolve, _reject) => {
            const msgId = this.getRandomNum();
            const intervalId = self.setInterval(() => {
                if (this.type === "iframe") {
                    this.iframeMsgMap.set(msgId, { err: null, succ: null });
                    this.elem.contentWindow.postMessage({
                        id: this.id,
                        msgId: msgId,
                        method: _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].READY,
                    }, "*");
                }
                else {
                    const result = this.elem.isReady ? this.elem.isReady() : false;
                    if (result) {
                        this.isReady = true;
                    }
                }
                if (this.isReady) {
                    self.clearInterval(intervalId);
                    resolve();
                }
            }, 500);
        });
    }
    getObjects() {
        return this.apiCallInternal(_common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].GET_OBJECTS);
    }
    getMeshes() {
        return this.apiCallInternal(_common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].GET_MESHES);
    }
    getObjectsByName(name) {
        return this.apiCallInternal(_common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].GET_OBJECTS_BY_NAME, { name: name });
    }
    getObjectByName(name) {
        return this.apiCallInternal(_common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].GET_OBJECT_BY_NAME, { name: name });
    }
    getMeshesByName(name) {
        return this.apiCallInternal(_common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].GET_MESHES_BY_NAME, { name: name });
    }
    getMeshByName(name) {
        return this.apiCallInternal(_common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].GET_MESH_BY_NAME, { name: name });
    }
    getHitObjects(firstHitOnly = false) {
        return this.apiCallInternal(_common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].GET_HIT_OBJECTS, { firstHitOnly: firstHitOnly });
    }
    get2DCoordinates(name) {
        return this.apiCallInternal(_common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].GET_2D_COORDINATES, { name: name });
    }
    getCameras() {
        return this.apiCallInternal(_common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].GET_CAMERAS);
    }
    getCamerasByName(name) {
        return this.apiCallInternal(_common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].GET_CAMERAS_BY_NAME, { name: name });
    }
    getCameraByName(name) {
        return this.apiCallInternal(_common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].GET_CAMERA_BY_NAME, { name: name });
    }
    switchView(name) {
        return this.apiCallInternal(_common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].SWITCH_VIEW, { name: name });
    }
    switchViewAsync(name) {
        return this.apiCallInternal(_common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].SWITCH_VIEW_ASYNC, { name: name });
    }
    moveView(position) {
        return this.apiCallInternal(_common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].MOVE_VIEW, { position: position });
    }
    rotateView(rotation) {
        return this.apiCallInternal(_common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].ROTATE_VIEW, { rotation: rotation });
    }
    zoomView(zoom) {
        return this.apiCallInternal(_common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].ZOOM_VIEW, { zoom: zoom });
    }
    getVisibility(name) {
        return this.apiCallInternal(_common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].GET_VISIBILITY, { name: name });
    }
    setVisibility(names, visible = true, isExclusive = false) {
        return this.apiCallInternal(_common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].SET_VISIBILITY, { names: names, visible: visible, isExclusive: isExclusive });
    }
    getMaterials() {
        return this.apiCallInternal(_common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].GET_MATERIALS);
    }
    createMaterial(material, cloneFromMatName) {
        return this.apiCallInternal(_common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].CREATE_MATERIAL, { material: material, cloneFromMatName: cloneFromMatName });
    }
    updateMaterial(name, props, withPrefetch = true) {
        return this.apiCallInternal(_common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].UPDATE_MATERIAL, { name: name, props: props, withPrefetch: withPrefetch });
    }
    setMaterial(objectName, materialName) {
        return this.apiCallInternal(_common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].SET_MATERIAL, { objectName: objectName, materialName: materialName });
    }
    getMaterialsByName(name) {
        return this.apiCallInternal(_common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].GET_MATERIALS_BY_NAME, { name: name });
    }
    getMaterialByName(name) {
        return this.apiCallInternal(_common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].GET_MATERIAL_BY_NAME, { name: name });
    }
    getMaterialProperties(name) {
        return this.apiCallInternal(_common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].GET_MATERIAL_PROPS, { name: name });
    }
    getBackground() {
        return this.apiCallInternal(_common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].GET_BACKGROUND);
    }
    setBackground(background) {
        return this.apiCallInternal(_common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].SET_BACKGROUND, { background: background });
    }
    enableAnnotations(enable = true) {
        return this.apiCallInternal(_common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].ENABLE_ANNOTATIONS, { enable: enable });
    }
    getAnnotations() {
        return this.apiCallInternal(_common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].GET_ANNOTATIONS);
    }
    getAnnotationById(id) {
        return this.apiCallInternal(_common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].GET_ANNOTATION_BY_ID, { id: id });
    }
    addAnnotation(annotationConf) {
        return this.apiCallInternal(_common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].ADD_ANNOTATION, { annotationConf: annotationConf });
    }
    addComplexAnnotation(annotationConf) {
        return this.apiCallInternal(_common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].ADD_COMPLEX_ANNOTATION, { annotationConf: annotationConf });
    }
    removeAnnotationById(id) {
        return this.apiCallInternal(_common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].REMOVE_ANNOTATION_BY_ID, { id: id });
    }
    setAnnotationVisibility(id, visibility) {
        return this.apiCallInternal(_common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].SET_ANNOTATION_VISIBILITY, { id: id, visibility: visibility });
    }
    expandAnnotationsById(ids, expand, isExclusive = true) {
        return this.apiCallInternal(_common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].EXPAND_ANNOTATIONS_BY_ID, { ids: ids, expand: expand, isExclusive: isExclusive });
    }
    getPosition(name) {
        return this.apiCallInternal(_common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].GET_POSITION, { name: name });
    }
    setPositionRelative(name, position) {
        return this.apiCallInternal(_common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].SET_POSITION_REL, { name: name, position: position });
    }
    setPositionAbsolute(name, position) {
        return this.apiCallInternal(_common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].SET_POSITION_ABS, { name: name, position: position });
    }
    getRotation(name) {
        return this.apiCallInternal(_common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].GET_ROTATION, { name: name });
    }
    setRotationRelative(name, rotation, order = "XYZ") {
        return this.apiCallInternal(_common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].SET_ROTATION_REL, { name: name, rotation: rotation, order: order });
    }
    setRotationAbsolute(name, rotation, order = "XYZ") {
        return this.apiCallInternal(_common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].SET_ROTATION_ABS, { name: name, rotation: rotation, order: order });
    }
    getScale(name) {
        return this.apiCallInternal(_common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].GET_SCALE, { name: name });
    }
    setScaleRelative(name, scale) {
        return this.apiCallInternal(_common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].SET_SCALE_REL, { name: name, scale: scale });
    }
    setScaleAbsolute(name, scale) {
        return this.apiCallInternal(_common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].SET_SCALE_ABS, { name: name, scale: scale });
    }
    highlightMeshesByName(names, color = "#ffff00", intensity = 1.0, isExclusive = false) {
        return this.apiCallInternal(_common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].HIGHLIGHT_MESHES_BY_NAME, { names: names, color: color, intensity: intensity, isExclusive: isExclusive });
    }
    unhighlightMeshesByName(names) {
        return this.apiCallInternal(_common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].UNHIGHLIGHT_MESHES_BY_NAME, { names: names });
    }
    takeScreenshot(scale = 1, scissor) {
        return this.apiCallInternal(_common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].TAKE_SCREENSHOT, { scale: scale, scissor: scissor });
    }
    takeFixedSizedScreenshot(dimension) {
        return this.apiCallInternal(_common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].TAKE_FIXED_SIZE_SCREENSHOT, { dimension: dimension });
    }
    getViewState() {
        return this.apiCallInternal(_common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].GET_VIEW_STATE);
    }
    applyViewState(state) {
        return this.apiCallInternal(_common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].APPLY_VIEW_STATE, { state: state });
    }
    getExposure() {
        return this.apiCallInternal(_common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].GET_EXPOSURE);
    }
    setExposure(exposure) {
        return this.apiCallInternal(_common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].SET_EXPOSURE, { exposure: exposure });
    }
    getEnvironmentMap() {
        return this.apiCallInternal(_common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].GET_ENVIRONMENT_MAP);
    }
    setEnvironmentMap(envMap) {
        return this.apiCallInternal(_common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].SET_ENVIRONMENT_MAP, { envMap: envMap });
    }
    rotateEnvironmentMap(rotationDeg) {
        return this.apiCallInternal(_common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].ROTATE_ENVIRONMENT_MAP, { rotation: rotationDeg });
    }
    getFOV() {
        return this.apiCallInternal(_common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].GET_FOV);
    }
    setFOV(fov) {
        return this.apiCallInternal(_common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].SET_FOV, { fov: fov });
    }
    sendEvent(event, x, y, maxX, maxY) {
        return this.apiCallInternal(_common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].SEND_EVENT, { event: event, x: x, y: y, maxX: maxX, maxY: maxY });
    }
    play(animIdx, timeScale) {
        return this.apiCallInternal(_common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].PLAY, { animIdx, timeScale });
    }
    load() {
        return this.apiCallInternal(_common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].LOAD);
    }
    setUUIDAr(uuid) {
        return this.apiCallInternal(_common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].SET_UUID_AR, { uuid });
    }
    triggerARClick() {
        return this.apiCallInternal(_common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].TRIGGER_AR_CLICK);
    }
    setCanvasState(className, state) {
        return this.apiCallInternal(_common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].SET_CANVAS_STATE, { className, state });
    }
    getCurrentUser() {
        return this.apiCallInternal(_common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].GET_CURRENT_USER);
    }
    didRenderLastFrame() {
        return this.apiCallInternal(_common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].DID_RENDER_LAST_FRAME);
    }
    addEventListener(eventType, callback) {
        this.eventsCallbackMap.set(eventType, callback);
        return this.apiCallInternal(_common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].ADD_EVENT_LISTENER, { eventType });
    }
    removeEventListener(eventType) {
        this.eventsCallbackMap.delete(eventType);
        return this.apiCallInternal(_common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].REMOVE_EVENT_LISTENER, { eventType });
    }
    apiCallInternal(methodType, params) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                if (this.type === "iframe") {
                    const msgId = this.getRandomNum();
                    this.iframeMsgMap.set(msgId, { err: this.globalErrCb ? this.globalErrCb : reject, succ: resolve });
                    this.elem.contentWindow.postMessage({
                        id: this.id,
                        msgId: msgId,
                        method: methodType,
                        data: params ? JSON.stringify(params) : undefined,
                    }, "*");
                }
                else {
                    let result;
                    switch (methodType) {
                        case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].GET_OBJECTS:
                            result = this.elem.getObjects();
                            break;
                        case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].GET_MESHES:
                            result = this.elem.getMeshes();
                            break;
                        case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].GET_OBJECTS_BY_NAME:
                            result = this.elem.getObjectsByName(params.name);
                            break;
                        case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].GET_OBJECT_BY_NAME:
                            result = this.elem.getObjectByName(params.name);
                            break;
                        case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].GET_MESHES_BY_NAME:
                            result = this.elem.getMeshesByName(params.name);
                            break;
                        case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].GET_MESH_BY_NAME:
                            result = this.elem.getMeshByName(params.name);
                            break;
                        case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].GET_MATERIALS:
                            result = this.elem.getMaterials();
                            break;
                        case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].CREATE_MATERIAL:
                            result = this.elem.createMaterial(params.material, params.cloneFromMatName);
                            break;
                        case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].UPDATE_MATERIAL:
                            result = this.elem.updateMaterial(params.name, params.props, params.withPrefetch);
                            break;
                        case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].SET_MATERIAL:
                            result = this.elem.setMaterial(params.objectName, params.materialName);
                            break;
                        case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].GET_MATERIALS_BY_NAME:
                            result = this.elem.getMaterialsByName(params.name);
                            break;
                        case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].GET_MATERIAL_BY_NAME:
                            result = this.elem.getMaterialByName(params.name);
                            break;
                        case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].GET_MATERIAL_PROPS:
                            result = this.elem.getMaterialProperties(params.name);
                            break;
                        case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].GET_HIT_OBJECTS:
                            result = this.elem.getHitObjects(params.firstHitOnly);
                            break;
                        case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].GET_2D_COORDINATES:
                            result = this.elem.get2DCoordinates(params.name);
                            break;
                        case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].GET_CAMERAS:
                            result = this.elem.getCameras();
                            break;
                        case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].GET_CAMERAS_BY_NAME:
                            result = this.elem.getCamerasByName(params.name);
                            break;
                        case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].GET_CAMERA_BY_NAME:
                            result = this.elem.getCameraByName(params.name);
                            break;
                        case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].SWITCH_VIEW:
                            result = this.elem.switchView(params.name);
                            break;
                        case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].SWITCH_VIEW_ASYNC:
                            result = this.elem.switchViewAsync(params.name);
                            break;
                        case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].MOVE_VIEW:
                            result = this.elem.moveView(params.position);
                            break;
                        case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].ROTATE_VIEW:
                            result = this.elem.rotateView(params.rotation);
                            break;
                        case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].ZOOM_VIEW:
                            result = this.elem.zoomView(params.zoom);
                            break;
                        case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].GET_VISIBILITY:
                            result = this.elem.getVisibility(params.name);
                            break;
                        case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].SET_VISIBILITY:
                            result = this.elem.setVisibility(params.names, params.visible, params.isExclusive);
                            break;
                        case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].GET_BACKGROUND:
                            result = this.elem.getBackground();
                            break;
                        case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].SET_BACKGROUND:
                            result = yield this.elem.setBackground(params.background);
                            break;
                        case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].ENABLE_ANNOTATIONS:
                            result = yield this.elem.enableAnnotations(params.enable);
                            break;
                        case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].GET_ANNOTATIONS:
                            result = yield this.elem.getAnnotations();
                            break;
                        case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].GET_ANNOTATION_BY_ID:
                            result = yield this.elem.getAnnotationById(params.id);
                            break;
                        case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].ADD_ANNOTATION:
                            result = yield this.elem.addAnnotation(params.annotationConf);
                            break;
                        case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].ADD_COMPLEX_ANNOTATION:
                            result = yield this.elem.addComplexAnnotation(params.annotationConf);
                            break;
                        case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].SET_ANNOTATION_VISIBILITY:
                            result = yield this.elem.setAnnotationVisibility(params.id, params.visibility);
                            break;
                        case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].REMOVE_ANNOTATION_BY_ID:
                            result = yield this.elem.removeAnnotationById(params.id);
                            break;
                        case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].EXPAND_ANNOTATIONS_BY_ID:
                            result = yield this.elem.expandAnnotationsById(params.ids, params.expand, params.isExclusive);
                            break;
                        case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].GET_POSITION:
                            result = this.elem.getPosition(params.name);
                            break;
                        case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].SET_POSITION_REL:
                            result = yield this.elem.setPositionRelative(params.name, params.position);
                            break;
                        case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].SET_POSITION_ABS:
                            result = yield this.elem.setPositionAbsolute(params.name, params.position);
                            break;
                        case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].GET_ROTATION:
                            result = this.elem.getRotation(params.name);
                            break;
                        case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].SET_ROTATION_REL:
                            result = yield this.elem.setRotationRelative(params.name, params.rotation, params.order);
                            break;
                        case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].SET_ROTATION_ABS:
                            result = yield this.elem.setRotationAbsolute(params.name, params.rotation, params.order);
                            break;
                        case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].GET_SCALE:
                            result = this.elem.getScale(params.name);
                            break;
                        case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].SET_SCALE_REL:
                            result = yield this.elem.setScaleRelative(params.name, params.scale);
                            break;
                        case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].SET_SCALE_ABS:
                            result = yield this.elem.setScaleAbsolute(params.name, params.scale);
                            break;
                        case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].HIGHLIGHT_MESHES_BY_NAME:
                            result = yield this.elem.highlightMeshesByName(params.names, params.color, params.intensity, params.isExclusive);
                            break;
                        case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].UNHIGHLIGHT_MESHES_BY_NAME:
                            result = yield this.elem.unhighlightMeshesByName(params.names);
                            break;
                        case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].TAKE_SCREENSHOT:
                            result = yield this.elem.takeScreenshot(params.scale, params.scissor);
                            break;
                        case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].TAKE_FIXED_SIZE_SCREENSHOT:
                            result = yield this.elem.takeFixedSizedScreenshot(params.dimension);
                            break;
                        case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].GET_VIEW_STATE:
                            result = yield this.elem.getViewState();
                            break;
                        case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].APPLY_VIEW_STATE:
                            result = yield this.elem.applyViewState(params.state);
                            break;
                        case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].GET_EXPOSURE:
                            result = yield this.elem.getExposure();
                            break;
                        case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].SET_EXPOSURE:
                            result = yield this.elem.setExposure(params.exposure);
                            break;
                        case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].GET_ENVIRONMENT_MAP:
                            result = yield this.elem.getEnvironmentMap();
                            break;
                        case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].SET_ENVIRONMENT_MAP:
                            result = yield this.elem.setEnvironmentMap(params.envMap);
                            break;
                        case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].ROTATE_ENVIRONMENT_MAP:
                            result = yield this.elem.setEnvironmentMap(params.rotation);
                            break;
                        case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].GET_FOV:
                            result = yield this.elem.getFOV();
                            break;
                        case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].SET_FOV:
                            result = yield this.elem.setFOV(params.fov);
                            break;
                        case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].SEND_EVENT:
                            result = yield this.elem.sendEvent(params.event, params.x, params.y, params.maxX, params.maxY);
                            break;
                        case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].PLAY:
                            result = yield this.elem.play(params.animIdx, params.timeScale);
                            break;
                        case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].LOAD:
                            result = yield this.elem.load();
                            break;
                        case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].SET_UUID_AR:
                            result = yield this.elem.setUUIDAr(params.uuid);
                            break;
                        case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].TRIGGER_AR_CLICK:
                            result = yield this.elem.triggerARClick();
                            break;
                        case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].SET_CANVAS_STATE:
                            result = yield this.elem.setCanvasState(params.className, params.state);
                            break;
                        case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].GET_CURRENT_USER:
                            result = this.elem.getCurrentUser();
                            break;
                        case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].DID_RENDER_LAST_FRAME:
                            result = this.elem.didRenderLastFrame();
                            break;
                        case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].ADD_EVENT_LISTENER:
                            result = this.elem.addApiEventListner(params.eventType, this.eventsCallbackMap.get(params.eventType));
                            break;
                        case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].REMOVE_EVENT_LISTENER:
                            result = this.elem.removeApiEventListener(params.eventType);
                            break;
                    }
                    resolve(result);
                }
            }
            catch (e) {
                this.globalErrCb ? this.globalErrCb(e) : reject(e);
                resolve();
            }
        }));
    }
    initIframeMessenger() {
        self.addEventListener("message", (event) => {
            const postMsg = event.data;
            const cbs = this.iframeMsgMap.get(postMsg.msgId);
            if (cbs) {
                switch (postMsg.method) {
                    case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].READY:
                        if (postMsg.data === "true") {
                            this.isReady = true;
                        }
                        break;
                    case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].ERROR:
                        cbs.err(postMsg.data);
                        break;
                    case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].GET_OBJECTS_BY_NAME:
                    case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].GET_OBJECT_BY_NAME:
                    case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].GET_CAMERAS_BY_NAME:
                    case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].GET_CAMERA_BY_NAME:
                    case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].GET_MESHES_BY_NAME:
                    case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].GET_MESH_BY_NAME:
                    case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].GET_MATERIALS_BY_NAME:
                    case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].GET_MATERIAL_BY_NAME:
                    case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].GET_MATERIAL_PROPS:
                    case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].CREATE_MATERIAL:
                    case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].UPDATE_MATERIAL:
                    case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].GET_VIEW_STATE:
                    case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].APPLY_VIEW_STATE:
                    case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].GET_ANNOTATIONS:
                    case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].GET_ANNOTATION_BY_ID:
                    case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].ADD_ANNOTATION:
                    case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].ADD_COMPLEX_ANNOTATION:
                    case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].SET_ANNOTATION_VISIBILITY:
                    case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].GET_CURRENT_USER:
                    case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].DID_RENDER_LAST_FRAME:
                        try {
                            const obj = JSON.parse(postMsg.data);
                            cbs.succ(obj);
                        }
                        catch (e) {
                            cbs.err(e);
                        }
                        break;
                    case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].SET_BACKGROUND:
                        cbs.succ(true);
                        break;
                    case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].SWITCH_VIEW:
                    case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].SWITCH_VIEW_ASYNC:
                    case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].MOVE_VIEW:
                    case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].ROTATE_VIEW:
                    case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].ZOOM_VIEW:
                    case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].ENABLE_ANNOTATIONS:
                    case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].REMOVE_ANNOTATION_BY_ID:
                    case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].EXPAND_ANNOTATIONS_BY_ID:
                    case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].SET_EXPOSURE:
                    case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].SET_ENVIRONMENT_MAP:
                    case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].ROTATE_ENVIRONMENT_MAP:
                    case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].SEND_EVENT:
                    case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].PLAY:
                    case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].SET_UUID_AR:
                    case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].TRIGGER_AR_CLICK:
                    case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].SET_CANVAS_STATE:
                    case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].ADD_EVENT_LISTENER:
                    case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].REMOVE_EVENT_LISTENER:
                        if (postMsg.data === "true") {
                            cbs.succ(true);
                        }
                        else {
                            cbs.err("Something went wrong. API call result is false");
                        }
                        break;
                    case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].HIGHLIGHT_MESHES_BY_NAME:
                    case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].UNHIGHLIGHT_MESHES_BY_NAME:
                    case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].GET_VISIBILITY:
                    case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].SET_VISIBILITY:
                    case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].SET_POSITION_ABS:
                    case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].SET_POSITION_REL:
                    case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].SET_ROTATION_ABS:
                    case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].SET_ROTATION_REL:
                    case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].SET_SCALE_ABS:
                    case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].SET_SCALE_REL:
                    case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].SET_FOV:
                        if (postMsg.data === "true") {
                            cbs.succ(true);
                        }
                        else {
                            cbs.succ(false);
                        }
                        break;
                    case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].GET_BACKGROUND:
                    case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].GET_POSITION:
                    case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].GET_ROTATION:
                    case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].GET_SCALE:
                    case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].GET_MATERIALS:
                    case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].GET_EXPOSURE:
                    case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].GET_FOV:
                    case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].GET_OBJECTS:
                    case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].GET_MESHES:
                    case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].GET_HIT_OBJECTS:
                    case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].GET_2D_COORDINATES:
                    case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].GET_CAMERAS:
                        try {
                            const parsedArr = JSON.parse(postMsg.data);
                            cbs.succ(parsedArr);
                        }
                        catch (e) {
                            cbs.err(e);
                        }
                        break;
                    case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].TAKE_SCREENSHOT:
                    case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].TAKE_FIXED_SIZE_SCREENSHOT:
                    case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].GET_ENVIRONMENT_MAP:
                    case _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].LOAD:
                        try {
                            cbs.succ(postMsg.data);
                        }
                        catch (e) {
                            cbs.err(e);
                        }
                        break;
                    default:
                        const msg = `Unknown API event "${postMsg.method}"`;
                        this.globalErrCb ? this.globalErrCb(msg) : console.warn(msg);
                        break;
                }
                this.iframeMsgMap.delete(postMsg.msgId);
            }
            else if (postMsg.method == _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiMethods */ "b"].UPDATE_EVENT) {
                let msgData = JSON.parse(postMsg.data);
                if (this.eventsCallbackMap.has(msgData.eventType)) {
                    this.eventsCallbackMap.get(msgData.eventType)(msgData.eventData);
                }
                else {
                    const msg = `Missing callback for event: "${msgData.eventType}"`;
                    this.globalErrCb ? this.globalErrCb(msg) : console.warn(msg);
                }
            }
        });
    }
    getRandomNum() {
        const buf = new Uint8Array(4);
        self.crypto.getRandomValues(buf);
        return `${buf[0]}-${buf[1]}-${buf[2]}-${buf[3]}`;
    }
}
VctrApi.ApiEvents = _common_types__WEBPACK_IMPORTED_MODULE_0__[/* ApiEvents */ "a"];
class Utils {
    constructor(api) {
        this.api = api;
    }
    animate(duration, timing, draw, onFinish = () => { }) {
        const start = performance.now();
        let delta = 0;
        let timingFunction;
        if (typeof timing === "string") {
            switch (timing) {
                case "linear":
                    timingFunction = this.linear;
                    break;
                case "easeInQuad":
                    timingFunction = this.easeInQuad;
                    break;
                case "easeOutQuad":
                    timingFunction = this.easeOutQuad;
                    break;
                case "easeInOutQuad":
                    timingFunction = this.easeInOutQuad;
                    break;
                case "easeInCubic":
                    timingFunction = this.easeInCubic;
                    break;
                case "easeOutCubic":
                    timingFunction = this.easeOutCubic;
                    break;
                case "easeInOutCubic":
                    timingFunction = this.easeInOutCubic;
                    break;
                case "easeInQuart":
                    timingFunction = this.easeInQuart;
                    break;
                case "easeOutQuart":
                    timingFunction = this.easeOutQuart;
                    break;
                case "easeInOutQuart":
                    timingFunction = this.easeInOutQuart;
                    break;
                case "easeInOutExpo":
                    timingFunction = this.easeInOutExpo;
                    break;
                default:
                    timingFunction = this.linear;
                    break;
            }
        }
        else {
            timingFunction = timing;
        }
        function animationLoop() {
            delta = performance.now() - start;
            if (delta >= duration) {
                draw(timingFunction(1));
                onFinish();
                return;
            }
            let timeFraction = delta / duration;
            const progress = timingFunction(timeFraction);
            draw(progress);
            requestAnimationFrame(animationLoop);
        }
        animationLoop();
    }
    lerp(v1, v2, alpha) {
        let v = v1.slice();
        v[0] += (v2[0] - v1[0]) * alpha;
        v[1] += (v2[1] - v1[1]) * alpha;
        v[2] += (v2[2] - v1[2]) * alpha;
        return v;
    }
    linear(t) {
        return t;
    }
    easeInQuad(t) {
        return t * t;
    }
    easeOutQuad(t) {
        return t * (2 - t);
    }
    easeInOutQuad(t) {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }
    easeInCubic(t) {
        return t * t * t;
    }
    easeOutCubic(t) {
        return --t * t * t + 1;
    }
    easeInOutCubic(t) {
        return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    }
    easeInQuart(t) {
        return t * t * t * t;
    }
    easeOutQuart(t) {
        return 1 - --t * t * t * t;
    }
    easeInOutQuart(t) {
        return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
    }
    easeInOutExpo(t) {
        return t < 0.5 ? Math.pow(2, 20 * t - 10) / 2 : (2 - Math.pow(2, -20 * t + 10)) / 2;
    }
    fadeOut(objectName, time) {
        return __awaiter(this, void 0, void 0, function* () {
            const object = yield this.api.getMeshByName(objectName);
            this.animate(time, this.easeOutQuad, (timeFraction) => {
                const opacity = this.lerp([1.0, 0.0, 0.0], [0.0, 0.0, 0.0], timeFraction);
                const materialProp = { opacity: `${opacity[0]}` };
                this.api.updateMaterial(object.material, materialProp);
            }, () => {
                this.api.setVisibility([object.name], false);
            });
        });
    }
    fadeIn(objectName, time) {
        return __awaiter(this, void 0, void 0, function* () {
            const object = yield this.api.getMeshByName(objectName);
            this.api.updateMaterial(object.material, { opacity: "0.0" });
            this.api.setVisibility([object.name], true);
            this.animate(time, "easeInQuad", (timeFraction) => {
                const opacity = this.lerp([0.0, 0.0, 0.0], [1.0, 0.0, 0.0], timeFraction);
                const materialProp = { opacity: `${opacity[0]}` };
                this.api.updateMaterial(object.material, materialProp);
            });
        });
    }
    moveObjectsIncrementally(objects, position, time) {
        return __awaiter(this, void 0, void 0, function* () {
            for (let i = 0; i < objects.length; i++) {
                const currentObject = objects[i];
                const currentPosition = yield this.api.getPosition(currentObject);
                setTimeout(() => {
                    this.animate(time, "easeOutQuad", (timeFraction) => {
                        const newPosition = this.lerp(currentPosition, [currentPosition[0] + position[0], currentPosition[1] + position[1], currentPosition[2] + position[2]], timeFraction);
                        this.api.setPositionAbsolute(currentObject, newPosition);
                    });
                }, i * time);
            }
        });
    }
    swipeObject(objectName, position, time, fade) {
        return __awaiter(this, void 0, void 0, function* () {
            const object = yield this.api.getMeshByName(objectName);
            const currentPosition = yield this.api.getPosition(object.name);
            if (fade === "in") {
                this.fadeIn(object.name, time);
                setTimeout(() => {
                    this.animate(time, "easeOutQuad", (timeFraction) => {
                        const newPosition = this.lerp(currentPosition, [currentPosition[0] + position[0], currentPosition[1] + position[1], currentPosition[2] + position[2]], timeFraction);
                        this.api.setPositionAbsolute(object.name, newPosition);
                    });
                }, time / 2);
            }
            else {
                this.animate(time, "easeInQuad", (timeFraction) => {
                    const newPosition = this.lerp(currentPosition, [currentPosition[0] + position[0], currentPosition[1] + position[1], currentPosition[2] + position[2]], timeFraction);
                    this.api.setPositionAbsolute(object.name, newPosition);
                });
                setTimeout(() => {
                    this.fadeOut(object.name, time);
                }, time / 2);
            }
        });
    }
    animateRotation(objectName, finalDegreesDelta, animationDuration) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                const origRotation = yield this.api.getRotation(objectName);
                if (origRotation === null) {
                    resolve();
                }
                this.animate(animationDuration, "linear", (animationDelta) => {
                    const newRotation = [
                        origRotation[0] + finalDegreesDelta[0] * animationDelta,
                        origRotation[1] + finalDegreesDelta[1] * animationDelta,
                        origRotation[2] + finalDegreesDelta[2] * animationDelta,
                    ];
                    this.api.setRotationAbsolute(objectName, newRotation);
                }, () => {
                    this.api.setRotationAbsolute(objectName, [origRotation[0], origRotation[1], origRotation[2]]);
                    resolve();
                });
            }
            catch (e) {
                reject(e);
            }
        }));
    }
    getElementVisible(rect, viewportHeight) {
        const topOnScreen = rect.top >= 0 && viewportHeight - rect.top > 0;
        const bottomOnScreen = rect.bottom >= 0 && viewportHeight - rect.bottom > 0;
        if (!topOnScreen && !bottomOnScreen) {
            return [0, 0];
        }
        const elemCenter = rect.top + rect.height / 2;
        const posOfCenter = viewportHeight - elemCenter;
        const center = posOfCenter < 0 ? 0 : posOfCenter > viewportHeight ? 0 : Math.round((elemCenter / viewportHeight) * 100);
        if (topOnScreen && bottomOnScreen) {
            return [100, center];
        }
        else if (topOnScreen) {
            return [Math.round(((viewportHeight - rect.top) / rect.height) * 100), center];
        }
        else {
            return [Math.round(((rect.height - rect.top * -1) / rect.height) * 100), center];
        }
    }
}


/***/ })

/******/ });


Vectary === undefined && console.error('esm-webpack-plugin: nothing exported!');
const _Vectary$VctrApi = Vectary['VctrApi'];

export {
    _Vectary$VctrApi as VctrApi
}
//# sourceMappingURL=api.js.map