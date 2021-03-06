let draw = require("./draw");
let ui = require("./ui");
let logic = require("./logic");
let message = require("./message");
let computer = require("./computer");
let block = require("./block");


function addEvents(){
  logic.getAllSpots().forEach(spot => addHandleClickEvent(spot));
  addResetEvent();
}

let addHandleClickEvent = (spot) => spot.addEventListener("click", handleClickEvent);
let addResetEvent = () => {
  document.getElementById("reset").addEventListener("click", () => {
    logic.resetAll()
    computer.doTurn();
  });
}

function handleClickEvent(){
  if(!logic.hasFigure(this)){
    doTurn(this);
  } else if(logic.hasFigure(this)){
    message.new("There is a figure already");
  }
}

function doTurn(place){
  if(!block.isBlocked){
    draw.drawNewFigure(place);
    ui.changeNextFigure();
    ui.changeTurnInformation();
    computer.doTurn();
    checkWinCondition(ui.nextFigure);
  }
}

let checkWinCondition = (nextFigure) => nextFigure === "circle" ? logic.check(2) : logic.check(1);



let vsComputer = {
  start: function(){
    ui.showPointsInfo();
    computer.doTurn();
    addEvents();
    ui.changeTurnInformation();
  }
}

module.exports = vsComputer;
