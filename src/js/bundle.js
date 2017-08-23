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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var logic = {
  //0 = nothing, 1 = circle, 2 = square
  allSpots: [],

  check: function check(figure) {
    this.clearAllSpots();
    this.checkAllSpots();
    this.checkIfWin(figure);
  },

  clearAllSpots: function clearAllSpots() {
    this.allSpots = [];
  },

  checkAllSpots: function checkAllSpots() {
    var _this = this;

    this.getAllSpots().forEach(function (place) {
      return _this.checkPlace(place);
    });
  },

  getAllSpots: function getAllSpots() {
    return document.querySelectorAll(".board__item");
  },

  getFiguresFromAllSpots: function getFiguresFromAllSpots() {
    return this.allSpots;
  },

  checkPlace: function checkPlace(place) {
    return place.hasChildNodes() ? this.allSpots.push(this.checkFigureType(place)) : this.allSpots.push(0);
  },

  checkFigureType: function checkFigureType(figure) {
    return figure.childNodes[0].className === "circle" ? 1 : 2;
  },

  checkIfWin: function checkIfWin(figure) {
    console.log("Sprawdzamy!");
    this.checkRightAcross(figure);
    this.checkLeftAcross(figure);
    this.checkAllHorizontally(figure);
    this.checkAllVertically(figure);
  },

  checkRightAcross: function checkRightAcross(figure) {
    if (this.allSpots[0] === figure && this.allSpots[4] === figure && this.allSpots[8] === figure) {
      console.log("win!");
    }
  },

  checkLeftAcross: function checkLeftAcross(figure) {
    if (this.allSpots[2] === figure && this.allSpots[4] === figure && this.allSpots[6] === figure) {
      console.log("win!");
    }
  },

  checkAllHorizontally: function checkAllHorizontally(figure) {
    this.checkHorizontally(figure, 0);
    this.checkHorizontally(figure, 1);
    this.checkHorizontally(figure, 2);
  },

  checkAllVertically: function checkAllVertically(figure) {
    this.checkVertically(figure, 0);
    this.checkVertically(figure, 1);
    this.checkVertically(figure, 2);
  },

  checkHorizontally: function checkHorizontally(figure, index) {
    if (this.allSpots[0 + index * 3] === figure && this.allSpots[1 + index * 3] === figure && this.allSpots[2 + index * 3] === figure) {
      console.log("win!");
    }
  },

  checkVertically: function checkVertically(figure, index) {
    if (this.allSpots[0 + index] === figure && this.allSpots[3 + index] === figure && this.allSpots[6 + index] === figure) {
      console.log("win!");
    }
  }
};

module.exports = logic;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var draw = __webpack_require__(2);

draw.initialize();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var figure = __webpack_require__(3);
var message = __webpack_require__(4);
var logic = __webpack_require__(0);
var computer = __webpack_require__(5);

var turnInformation = document.getElementsByClassName("information__turn")[0];
var nextFigure = "circle";

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
  checkWinCondition(nextFigure);
}

var drawNewFigure = function drawNewFigure(place) {
  return place.appendChild(checkNextFigure());
};

var checkNextFigure = function checkNextFigure() {
  return nextFigure === "square" ? new figure.Square() : new figure.Circle();
};

var changeNextFigure = function changeNextFigure() {
  return nextFigure === "square" ? nextFigure = "circle" : nextFigure = "square";
};

var changeTurnInformation = function changeTurnInformation() {
  return turnInformation.innerText = nextFigure + " turn";
};

var checkWinCondition = function checkWinCondition(nextFigure) {
  return nextFigure === "circle" ? logic.check(2) : logic.check(1);
};

var draw = {
  initialize: function initialize() {
    addDrawEvents();
    changeTurnInformation();
  }
};

module.exports = draw;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var figure = {
  Circle: function Circle() {
    var circle = document.createElement('div');
    circle.className = "circle";
    return circle;
  },

  Square: function Square() {
    var square = document.createElement('div');
    square.className = "square";
    return square;
  }
};

module.exports = figure;

/***/ }),
/* 4 */
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var logic = __webpack_require__(0);

var computer = {};

module.exports = computer;

/***/ })
/******/ ]);