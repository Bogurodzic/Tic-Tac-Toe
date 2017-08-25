let block = require("./block");
let ui = require("./ui");

let win = {
  init: function(figure){
    this.showFigure(figure);
    this.showInfo();
    ui.hideTurnInformation();
    block.blockGame();
  },

  showFigure: function(figure){
    document.getElementById("win-info-figure").innerHTML = figure === 1 ? "Circle" : "Square";
  },

  showInfo: function(){
    document.getElementById('win-info').classList.add("win-info--visible");
  }
}

module.exports = win;
