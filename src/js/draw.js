let figure = require("./figure");
let message = require("./message");
let logic = require("./logic");
let computer = require("./computer");

let turnInformation = document.getElementsByClassName("information__turn")[0];
let nextFigure = "circle";

let getAllSpots = () => document.querySelectorAll(".board__item");

function addDrawEvents(){
  getAllSpots().forEach(spot => addHandleClickEvent(spot));
}

let addHandleClickEvent = (spot) => spot.addEventListener("click", handleClickEvent);

function handleClickEvent(){
  if(!hasFigure(this)){
    doTurn(this);
  } else if(hasFigure(this)){
    message.new("There is a figure already");
  }
}

let hasFigure = elem => elem.hasChildNodes();

function doTurn(place){
  drawNewFigure(place);
  changeNextFigure();
  changeTurnInformation();
  checkWinCondition(nextFigure);
}

let drawNewFigure = place => place.appendChild(checkNextFigure());

let checkNextFigure = () => nextFigure === "square" ? new figure.Square() : new figure.Circle();

let changeNextFigure = () => nextFigure === "square" ? nextFigure = "circle" : nextFigure = "square";

let changeTurnInformation = () => turnInformation.innerText = nextFigure + " turn";

let checkWinCondition = (nextFigure) => nextFigure === "circle" ? logic.check(2) : logic.check(1);


let draw = {
  initialize: function(){
    addDrawEvents();
    changeTurnInformation();
  }
}

module.exports = draw;
