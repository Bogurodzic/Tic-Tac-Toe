let ui = require("./ui");

let figure = {
  Circle: function(){
      let circle = document.createElement('div');
      circle.className = "circle";
      return circle;
  },

  Square: function(){
    let square = document.createElement('div');
    square.className = "square";
    return square;
  },

  drawNewFigure: function(place){
    place.appendChild(this.checkNextFigure())
  },

  checkNextFigure: function(){
    return ui.nextFigure === "square" ? new this.Square() : new this.Circle();
  }
}

module.exports = figure;
