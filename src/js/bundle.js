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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ui = {
  nextFigure: "circle",
  turnInformation: document.getElementsByClassName("information__turn")[0],
  computerFigure: "square",
  playerFigure: "circle",
  actualTurn: "player1",
  player1Points: 0,
  player2Points: 0,

  changeActualTurn: function changeActualTurn() {
    this.actualTurn === "player1" ? this.actualTurn = "player2" : this.actualTurn = "player1";
  },

  addPointForWinner: function addPointForWinner() {
    this.actualTurn === "player1" ? this.player1Points++ : this.player2Points++;
  },

  getPlayer1Points: function getPlayer1Points() {
    return this.player1Points;
  },

  getPlayer2Points: function getPlayer2Points() {
    return this.player2Points;
  },

  changePointsInfo: function changePointsInfo() {
    document.getElementById('points-player1').innerText = "Player1 :" + this.getPlayer1Points();
    document.getElementById('points-player2').innerText = "Player2 :" + this.getPlayer2Points();
  },

  showPointsInfo: function showPointsInfo() {
    document.getElementById('points-info').classList.add("points-info--visible");
  },

  hidePointsInfo: function hidePointsInfo() {
    document.getElementById('points-info').classList.remove("points-info--visible");
  },

  getPlayerFigure: function getPlayerFigure() {
    return this.playerFigure;
  },

  getComputerFigure: function getComputerFigure() {
    return this.computerFigure;
  },

  changeNextFigure: function changeNextFigure() {
    this.nextFigure === "square" ? this.nextFigure = "circle" : this.nextFigure = "square";
  },

  changeTurnInformation: function changeTurnInformation() {
    this.turnInformation.innerText = this.capitalize(this.nextFigure) + " Turn";
    this.turnInformation.classList.toggle("information__turn--other-color");
  },

  hideTurnInformation: function hideTurnInformation() {
    this.turnInformation.style.display = "none";
  },

  showTurnInformation: function showTurnInformation() {
    this.turnInformation.style.display = "block";
  },

  capitalize: function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  },

  showWinInfo: function showWinInfo() {
    document.getElementById('win-info').classList.add("win-info--visible");
  },

  hideWinInfo: function hideWinInfo() {
    document.getElementById('win-info').classList.remove("win-info--visible");
  },

  showDrawInfo: function showDrawInfo() {
    document.getElementById('draw-info').classList.add("draw-info--visible");
  },

  hideDrawInfo: function hideDrawInfo() {
    document.getElementById('draw-info').classList.remove("draw-info--visible");
  }
};

module.exports = ui;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var block = {
  isBlocked: false,

  blockGame: function blockGame() {
    this.isBlocked = true;
  },

  unblockGame: function unblockGame() {
    this.isBlocked = false;
  }
};

module.exports = block;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ui = __webpack_require__(0);

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
  },

  drawNewFigure: function drawNewFigure(place) {
    place.appendChild(this.checkNextFigure());
  },

  checkNextFigure: function checkNextFigure() {
    return ui.nextFigure === "square" ? new this.Square() : new this.Circle();
  }
};

module.exports = figure;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var win = __webpack_require__(5);
var block = __webpack_require__(1);
var ui = __webpack_require__(0);

var logic = {
  //0 = nothing, 1 = circle, 2 = square
  allSpots: [],

  check: function check(figure) {
    this.clearAllSpots();
    this.checkAllSpots();
    this.checkIfWin(figure);
  },

  hasFigure: function hasFigure(spot) {
    return spot.hasChildNodes();
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

  getPlaceByIndex: function getPlaceByIndex(index) {
    return this.getAllSpots()[index];
  },

  getFiguresFromAllSpots: function getFiguresFromAllSpots() {
    this.clearAllSpots();
    this.checkAllSpots();
    return this.allSpots;
  },

  checkPlace: function checkPlace(place) {
    return place.hasChildNodes() ? this.allSpots.push(this.checkFigureType(place)) : this.allSpots.push(0);
  },

  checkFigureType: function checkFigureType(figure) {
    return figure.childNodes[0].className === "circle" ? 1 : 2;
  },

  checkIfWin: function checkIfWin(figure) {
    this.checkRightAcross(figure);
    this.checkLeftAcross(figure);
    this.checkAllHorizontally(figure);
    this.checkAllVertically(figure);
  },

  checkRightAcross: function checkRightAcross(figure) {
    if (this.allSpots[0] === figure && this.allSpots[4] === figure && this.allSpots[8] === figure) {
      win.init(figure);
    }
  },

  checkLeftAcross: function checkLeftAcross(figure) {
    if (this.allSpots[2] === figure && this.allSpots[4] === figure && this.allSpots[6] === figure) {
      win.init(figure);
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
      win.init(figure);
    }
  },

  checkVertically: function checkVertically(figure, index) {
    if (this.allSpots[0 + index] === figure && this.allSpots[3 + index] === figure && this.allSpots[6 + index] === figure) {
      win.init(figure);
    }
  },

  resetAll: function resetAll() {
    this.clearAllSpots();
    this.clearBoard();
    block.unblockGame();
    ui.showTurnInformation();
    ui.hideWinInfo();
    ui.changeTurnInformation();
    ui.hideDrawInfo();
  },

  clearBoard: function clearBoard() {
    var _this2 = this;

    this.getAllSpots().forEach(function (spot) {
      return _this2.clearSpot(spot);
    });
  },

  clearSpot: function clearSpot(spot) {
    this.hasFigure(spot) ? spot.removeChild(spot.childNodes[0]) : false;
  },

  checkForNumber: function checkForNumber(num) {
    return logic.getFiguresFromAllSpots().indexOf(num) > -1;
  },

  checkForDraw: function checkForDraw() {
    if (!this.checkForNumber(0)) {
      win.draw();
    }
  }
};

module.exports = logic;

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


var block = __webpack_require__(1);
var ui = __webpack_require__(0);
var message = __webpack_require__(4);

var win = {
  init: function init(figure) {
    this.showFigure(figure);
    ui.showWinInfo();
    ui.hideTurnInformation();
    ui.changeNextFigure();
    ui.addPointForWinner();
    ui.changePointsInfo();
    block.blockGame();
  },

  showFigure: function showFigure(figure) {
    document.getElementById("win-info-figure").innerHTML = figure === 1 ? "Circle" : "Square";
  },

  draw: function draw() {
    block.blockGame();
    ui.showDrawInfo();
  }
};

module.exports = win;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var logic = __webpack_require__(3);
var ui = __webpack_require__(0);
var draw = __webpack_require__(2);
var block = __webpack_require__(1);
var win = __webpack_require__(5);

var computer = {
  winPossibilities: [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]],
  computerFigure: ui.getComputerFigure(),

  doTurn: function doTurn() {
    ui.changeActualTurn();
    this.checkPossibilities();
    ui.changeNextFigure();
    ui.changeTurnInformation();
    //ui.computerFigure = this.getNextComputerFigureNumber();
    logic.check(this.getNextComputerFigureNumber());
    logic.checkForDraw();
    ui.changeActualTurn();
  },

  getNextComputerFigureNumber: function getNextComputerFigureNumber() {
    return ui.nextFigure === "circle" ? 1 : 2;
  },

  checkPossibilities: function checkPossibilities() {
    var allFiguresFromAllSpots = logic.getFiguresFromAllSpots();
    var that = this;
    var winnableSpots = 0;
    var placedFigureInFreeSpot = false;

    lookForBestPlace(1);

    function lookForBestPlace(requiredFreeSpots) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = computer.winPossibilities[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var winPossibilities = _step.value;

          if (!logic.hasFigure(logic.getPlaceByIndex(4))) {
            computer.placeFigure(4);
            placedFigureInFreeSpot = true;
            winnableSpots++;
          } else if (checkSpot(winPossibilities[0]) && checkSpot(winPossibilities[1]) && checkSpot(winPossibilities[2])) {
            if (freeSpotsForWin(winPossibilities) === requiredFreeSpots && !placedFigureInFreeSpot) {
              placeFigureInFreeSpot(winPossibilities);
              placedFigureInFreeSpot = true;
              winnableSpots++;
              break;
            }
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      if (requiredFreeSpots <= 3 && !placedFigureInFreeSpot) {
        lookForBestPlace(requiredFreeSpots + 1);
      }
    }
    ifNoChanceToWin();

    function freeSpotsForWin(winPossibilities) {
      var freeSpots = 3;
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = winPossibilities[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var winPossibility = _step2.value;

          allFiguresFromAllSpots[winPossibility] === 0 ? false : freeSpots--;
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      return freeSpots;
    }

    function checkSpot(index) {
      if (allFiguresFromAllSpots[index] === 0 || allFiguresFromAllSpots[index] === that.getNextComputerFigureNumber()) {
        return true;
      } else {
        return false;
      }
    }

    function placeFigureInFreeSpot(spots) {
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = spots[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var spot = _step3.value;

          if (allFiguresFromAllSpots[spot] === 0) {
            that.placeFigure(spot);
            break;
          }
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }
    }

    function ifNoChanceToWin() {
      if (winnableSpots === 0) {
        placeFigureInFreeSpot([0, 1, 2, 3, 4, 5, 6, 7, 8]);
      }
    }
  },

  placeFigure: function placeFigure(index) {
    draw.drawNewFigure(logic.getPlaceByIndex(index));
  }

};

module.exports = computer;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var vsComputer = __webpack_require__(8);
var vsHuman = __webpack_require__(9);

var getGameStart = function getGameStart() {
  return document.getElementById('game-start');
};
var hideGameStart = function hideGameStart(gameStart) {
  return gameStart.style.display = "none";
};
var getHumanButton = function getHumanButton() {
  return document.getElementById('human');
};
var getComputerButton = function getComputerButton() {
  return document.getElementById('computer');
};

getHumanButton().addEventListener("click", function () {
  return vsHuman.start();
});
getComputerButton().addEventListener("click", function () {
  return vsComputer.start();
});
getGameStart().addEventListener("click", function () {
  return hideGameStart(getGameStart());
});

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var draw = __webpack_require__(2);
var ui = __webpack_require__(0);
var logic = __webpack_require__(3);
var message = __webpack_require__(4);
var computer = __webpack_require__(6);
var block = __webpack_require__(1);

function addEvents() {
  logic.getAllSpots().forEach(function (spot) {
    return addHandleClickEvent(spot);
  });
  addResetEvent();
}

var addHandleClickEvent = function addHandleClickEvent(spot) {
  return spot.addEventListener("click", handleClickEvent);
};
var addResetEvent = function addResetEvent() {
  document.getElementById("reset").addEventListener("click", function () {
    logic.resetAll();
    computer.doTurn();
  });
};

function handleClickEvent() {
  if (!logic.hasFigure(this)) {
    doTurn(this);
  } else if (logic.hasFigure(this)) {
    message.new("There is a figure already");
  }
}

function doTurn(place) {
  if (!block.isBlocked) {
    draw.drawNewFigure(place);
    ui.changeNextFigure();
    ui.changeTurnInformation();
    computer.doTurn();
    checkWinCondition(ui.nextFigure);
  }
}

var checkWinCondition = function checkWinCondition(nextFigure) {
  return nextFigure === "circle" ? logic.check(2) : logic.check(1);
};

var vsComputer = {
  start: function start() {
    ui.showPointsInfo();
    computer.doTurn();
    addEvents();
    ui.changeTurnInformation();
  }
};

module.exports = vsComputer;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var draw = __webpack_require__(2);
var ui = __webpack_require__(0);
var logic = __webpack_require__(3);
var message = __webpack_require__(4);
var computer = __webpack_require__(6);
var block = __webpack_require__(1);

function addEvents() {
  logic.getAllSpots().forEach(function (spot) {
    return addHandleClickEvent(spot);
  });
  addResetEvent();
}

var addHandleClickEvent = function addHandleClickEvent(spot) {
  return spot.addEventListener("click", handleClickEvent);
};
var addResetEvent = function addResetEvent() {
  document.getElementById("reset").addEventListener("click", function () {
    return logic.resetAll();
  });
};

function handleClickEvent() {
  if (!logic.hasFigure(this)) {
    doTurn(this);
  } else if (logic.hasFigure(this)) {
    message.new("There is a figure already");
  }
}

function doTurn(place) {
  if (!block.isBlocked) {
    draw.drawNewFigure(place);
    ui.changeNextFigure();
    ui.changeTurnInformation();
    checkWinCondition(ui.nextFigure);
    logic.checkForDraw();
  }
}

var checkWinCondition = function checkWinCondition(nextFigure) {
  return nextFigure === "circle" ? logic.check(2) : logic.check(1);
};

var vsHuman = {
  start: function start() {
    addEvents();
    ui.changeTurnInformation();
    ui.showPointsInfo();
  }
};

module.exports = vsHuman;

/***/ })
/******/ ]);