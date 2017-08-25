let draw = require("./draw");
let ui = require("./ui");
let logic = require("./logic");
let message = require("./message");
let computer = require("./computer");
let block = require("./block");


function addDrawEvents(){
  logic.getAllSpots().forEach(spot => addHandleClickEvent(spot));
}

let addHandleClickEvent = (spot) => spot.addEventListener("click", handleClickEvent);

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
    checkWinCondition(ui.nextFigure);
    computer.doTurn();
  } else if (block.isBlocked) {
    logic.resetAll();
  }
}

let checkWinCondition = (nextFigure) => nextFigure === "circle" ? logic.check(2) : logic.check(1);

addDrawEvents();
ui.changeTurnInformation();
