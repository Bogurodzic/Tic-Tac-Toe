let block = require("./block");
let ui = require("./ui");
let message = require("./message");


let win = {
  init: function(figure){
    this.showFigure(figure);
    ui.showWinInfo();
    ui.hideTurnInformation();
    ui.changeNextFigure();
    block.blockGame();
  },

  showFigure: function(figure){
    document.getElementById("win-info-figure").innerHTML = figure === 1 ? "Circle" : "Square";
  },

  draw: function(){
    block.blockGame();
    message.new("It is a draw!");
  }
}

module.exports = win;
