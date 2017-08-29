let logic = require("./logic");
let ui = require("./ui");
let draw = require("./draw");
let block = require("./block");
let win = require("./win");


let computer = {
  winPossibilities: [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]],
  computerFigure : ui.getComputerFigure(),

  doTurn: function(){
    this.checkPossibilities();
    ui.changeNextFigure();
    ui.changeTurnInformation();
    logic.check(this.getNextComputerFigureNumber());
    this.checkForDraw();
  },

  getNextComputerFigureNumber: () => ui.nextFigure === "circle" ? 2 : 1,

  checkPossibilities: function(){
    let allFiguresFromAllSpots = logic.getFiguresFromAllSpots();
    let that = this;
    let winnableSpots = 0;

    for (let winPossibilities of this.winPossibilities) {
      if (!logic.hasFigure(logic.getPlaceByIndex(4))) {
        this.placeFigure(4);
      } else if (checkSpot(winPossibilities[0]) && checkSpot(winPossibilities[1]) && checkSpot(winPossibilities[2])){
        placeFigureInFreeSpot(winPossibilities);
        //If there is no winnableSpots place a figure at random place
        winnableSpots++;
        break ;
      }
    }
    ifNoChanceToWin();

    function checkSpot(index){
      if(allFiguresFromAllSpots[index] === 0 || allFiguresFromAllSpots[index] === that.getNextComputerFigureNumber()){
        return true;
      } else {
        return false;
      }
    }

    function placeFigureInFreeSpot(spots){
      for (let spot of spots) {
        if(allFiguresFromAllSpots[spot] === 0){
          that.placeFigure(spot);
          break;
        }
      }
    }

    function ifNoChanceToWin(){
      if (winnableSpots === 0 ){
        placeFigureInFreeSpot([0,1,2,3,4,5,6,7,8])
      }
    }

  },

  checkForNumber: function(num){
    return logic.getFiguresFromAllSpots().indexOf(num) > -1
  },

  checkForDraw: function(){
    if(!this.checkForNumber(0)){
      win.draw();
    }
  },

  placeFigure: function(index){
    draw.drawNewFigure(logic.getPlaceByIndex(index));
  }

}

module.exports = computer;
