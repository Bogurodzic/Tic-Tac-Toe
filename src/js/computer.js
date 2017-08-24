let logic = require("./logic");
let ui = require("./ui");
let draw = require("./draw");


let computer = {
  computerFigure : ui.getComputerFigure(),

  doTurn: function(){
    this.checkPossibilities();
    this.placeFigure();
    ui.changeNextFigure();
  },

  checkPossibilities: function(){
    let allFiguresFromAllSpots = logic.getFiguresFromAllSpots();
    console.log(allFiguresFromAllSpots);
  },

  placeFigure: function(){
    draw.drawNewFigure(logic.getPlaceByIndex(5));
  }

}

module.exports = computer;
