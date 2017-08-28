let block = require("./block");
let ui = require("./ui");

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
  }
}

module.exports = win;
