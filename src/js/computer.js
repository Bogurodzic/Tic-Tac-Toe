let logic = require("./logic");
let ui = require("./ui");
let draw = require("./draw");
let block = require("./block");
let win = require("./win");


let computer = {
  winPossibilities: [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]],
  computerFigure : ui.getComputerFigure(),

  doTurn: function(){
    ui.changeActualTurn();
    this.checkPossibilities();
    ui.changeNextFigure();
    ui.changeTurnInformation();
    //ui.computerFigure = this.getNextComputerFigureNumber();
    logic.check(this.getNextComputerFigureNumber());
    logic.checkForDraw();
    ui.changeActualTurn();
  },

  getNextComputerFigureNumber: () => ui.nextFigure === "circle" ? 1 : 2,

  checkPossibilities: function(){
    let allFiguresFromAllSpots = logic.getFiguresFromAllSpots();
    let that = this;
    let winnableSpots = 0;
    let placedFigureInFreeSpot = false


    lookForBestPlace(1);

    function lookForBestPlace(requiredFreeSpots){
      for (let winPossibilities of computer.winPossibilities) {
        if (!logic.hasFigure(logic.getPlaceByIndex(4))) {
          computer.placeFigure(4);
          placedFigureInFreeSpot=true;
          winnableSpots++;
        } else if (checkSpot(winPossibilities[0]) && checkSpot(winPossibilities[1]) && checkSpot(winPossibilities[2])){
          if(freeSpotsForWin(winPossibilities)===requiredFreeSpots && !placedFigureInFreeSpot){
            placeFigureInFreeSpot(winPossibilities);
            placedFigureInFreeSpot=true;
            winnableSpots++;
            break ;
          }
        }
      }

      if(requiredFreeSpots<=3 && !placedFigureInFreeSpot ){
        lookForBestPlace(requiredFreeSpots+1);
      }
    }
    ifNoChanceToWin();

    function freeSpotsForWin(winPossibilities){
      let freeSpots = 3;
      for(let winPossibility of winPossibilities){
        allFiguresFromAllSpots[winPossibility] === 0 ? false : freeSpots--;
      }
      return freeSpots;
    }

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

  placeFigure: function(index){
    draw.drawNewFigure(logic.getPlaceByIndex(index));
  }

}

module.exports = computer;
