let win = require("./win");
let block = require("./block");
let ui = require("./ui");

let logic = {
  //0 = nothing, 1 = circle, 2 = square
  allSpots: [],

  check: function(figure){
    this.clearAllSpots();
    this.checkAllSpots();
    this.checkIfWin(figure);
  },

  hasFigure: function(spot){
    return spot.hasChildNodes();
  },

  clearAllSpots: function(){
    this.allSpots = [];
  },

  checkAllSpots: function(){
    this.getAllSpots().forEach(place => this.checkPlace(place));
  },

  getAllSpots: function(){
    return document.querySelectorAll(".board__item");
  },

  getPlaceByIndex: function(index){
    return this.getAllSpots()[index]
  },

  getFiguresFromAllSpots: function(){
    return this.allSpots;
  },

  checkPlace: function(place){
    return place.hasChildNodes() ? this.allSpots.push(this.checkFigureType(place)) : this.allSpots.push(0);
  },

  checkFigureType: function(figure){
    return figure.childNodes[0].className === "circle" ? 1 : 2;
  },

  checkIfWin: function(figure){
    console.log("Sprawdzamy!")
    this.checkRightAcross(figure);
    this.checkLeftAcross(figure);
    this.checkAllHorizontally(figure);
    this.checkAllVertically(figure);
  },

  checkRightAcross: function(figure){
    if(this.allSpots[0] === figure && this.allSpots[4] === figure && this.allSpots[8] === figure){
      console.log(figure + "win!");
      win.init(figure);
    }
  },

  checkLeftAcross: function(figure){
    if(this.allSpots[2] === figure && this.allSpots[4] === figure && this.allSpots[6] === figure){
      console.log(figure + "win!");
      win.init(figure);
    }
  },

  checkAllHorizontally: function(figure){
    this.checkHorizontally(figure, 0);
    this.checkHorizontally(figure, 1);
    this.checkHorizontally(figure, 2);
  },

  checkAllVertically: function(figure){
    this.checkVertically(figure, 0);
    this.checkVertically(figure, 1);
    this.checkVertically(figure, 2);
  },

  checkHorizontally: function(figure, index){
    if(this.allSpots[0 + index*3] === figure && this.allSpots[1 + index*3] === figure && this.allSpots[2 + index*3] === figure){
      console.log(figure + "win!");
      win.init(figure);
    }
  },

  checkVertically: function(figure, index){
    if(this.allSpots[0 + index] === figure && this.allSpots[3 + index] === figure && this.allSpots[6 + index] === figure){
      console.log(figure + "win!");
      win.init(figure);
    }
  },

  resetAll: function(){
    this.clearAllSpots();
    this.clearBoard();
    block.unblockGame();
    ui.showTurnInformation();
    win.hideInfo();
  },

  clearBoard: function(){
    this.getAllSpots().forEach(spot => this.clearSpot(spot));
  },

  clearSpot: function(spot){
    this.hasFigure(spot) ? spot.removeChild(spot.childNodes[0]) : false ;
  }
}

module.exports = logic;
