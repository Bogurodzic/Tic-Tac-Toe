let block = require("./block");
let ui = require("./ui");
let message = require("./message");


let win = {
  init: function(figure){
    this.showFigure(figure);
    ui.showWinInfo();
    ui.hideTurnInformation();
    ui.changeNextFigure();
    ui.addPointForWinner();
    ui.changePointsInfo();
    ui.resetActualTurn();
    block.blockGame();
  },

  showFigure: function(figure){
    document.getElementById("win-info-figure").innerHTML = figure === 1 ? "Circle" : "Square";
  },

  draw: function(){
    block.blockGame();
    ui.showDrawInfo();
  }
}

module.exports = win;
