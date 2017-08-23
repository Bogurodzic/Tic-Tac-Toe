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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var draw = __webpack_require__(1);

draw.initialize();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var message = __webpack_require__(2);
var ai = __webpack_require__(3);

var turnInformation = document.getElementsByClassName("information__turn")[0];
var nextFigure = "circle";

function Circle() {
  var circle = document.createElement('div');
  circle.className = "circle";
  return circle;
}

function Square() {
  var square = document.createElement('div');
  square.className = "square";
  return square;
}

var getAllSpots = function getAllSpots() {
  return document.querySelectorAll(".board__item");
};

function addDrawEvents() {
  getAllSpots().forEach(function (spot) {
    return addHandleClickEvent(spot);
  });
}

var addHandleClickEvent = function addHandleClickEvent(spot) {
  return spot.addEventListener("click", handleClickEvent);
};

function handleClickEvent() {
  if (!hasFigure(this)) {
    doTurn(this);
  } else if (hasFigure(this)) {
    message.new("There is a figure already");
  }
}

var hasFigure = function hasFigure(elem) {
  return elem.hasChildNodes();
};

function doTurn(place) {
  drawNewFigure(place);
  changeNextFigure();
  changeTurnInformation();
  ai.makeTurn();
}

var drawNewFigure = function drawNewFigure(place) {
  return place.appendChild(checkNextFigure());
};

var checkNextFigure = function checkNextFigure() {
  return nextFigure === "square" ? new Square() : new Circle();
};

var changeNextFigure = function changeNextFigure() {
  return nextFigure === "square" ? nextFigure = "circle" : nextFigure = "square";
};

var changeTurnInformation = function changeTurnInformation() {
  return turnInformation.innerText = nextFigure + " turn";
};

var draw = {
  initialize: function initialize() {
    addDrawEvents();
    changeTurnInformation();
  }
};

module.exports = draw;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var message = {
  new: function _new(content) {
    var message = this.create(content);
    this.show(message);
    this.addEvents(message);
  },

  create: function create(content) {
    var modal = document.createElement('div');
    modal.className = "modal";
    modal.innerHTML = content;
    return modal;
  },

  show: function show(message) {
    document.body.appendChild(message);
  },

  addEvents: function addEvents(message) {
    this.removeMessage(message);
  },

  removeMessage: function removeMessage(message) {
    setTimeout(function () {
      message.remove();
    }, 1000);
  }

};

module.exports = message;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ai = {
  that: undefined,
  allPlaces: [],

  makeTurn: function makeTurn() {
    this.checkAllPlaces();
  },

  checkAllPlaces: function checkAllPlaces() {
    var _this = this;

    this.getAllPlaces().forEach(function (place) {
      return _this.checkPlace(place);
    });
  },

  getAllPlaces: function getAllPlaces() {
    return document.querySelectorAll(".board__item");
  },

  checkPlace: function checkPlace(place, index) {
    place.hasChildNodes() ? this.checkFigureType(place) : console.log("nie ma");
  },

  checkFigureType: function checkFigureType(figure) {
    console.log(figure.childNodes[0].className);
  }
};

module.exports = ai;

/***/ })
/******/ ]);