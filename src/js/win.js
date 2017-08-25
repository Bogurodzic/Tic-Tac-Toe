let block = require("./block");

let win = {
  init: function(figure){
    this.showFigure(figure);
    block.blockGame();
  },

  showFigure: function(figure){
    document.getElementById("win-info-figure").innerHTML = figure === 1 ? "circle" : "square";
  }
}

module.exports = win;
