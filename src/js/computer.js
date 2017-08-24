let logic = require("./logic");
let ui = require("./ui");
let draw = require("./draw");


let computer = {
  winPossibilities: [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]],
  computerFigure : ui.getComputerFigure(),

  doTurn: function(){
    this.checkPossibilities();
    ui.changeNextFigure();
  },

  checkPossibilities: function(){
    let allFiguresFromAllSpots = logic.getFiguresFromAllSpots();

    for (let winPossibilities of this.winPossibilities) {
      if(checkSpot(winPossibilities[0]) && checkSpot(winPossibilities[1]) && checkSpot(winPossibilities[2])){
        console.log(winPossibilities);
        break;
      }
    }

    function checkSpot(index){
      if(allFiguresFromAllSpots[index] === 0 && allFiguresFromAllSpots[index] === 0){
        return true;
      } else {
        return false;
      }
    }

  },

  placeFigure: function(index){
    draw.drawNewFigure(logic.getPlaceByIndex(index));
  }

}

module.exports = computer;
