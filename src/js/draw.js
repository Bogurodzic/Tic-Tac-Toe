let message = require("./message");

let nextFigure = "circle";

function Circle(){
  let circle = document.createElement('div');
  circle.className = "circle";
  return circle;
}

function Square(){
  let square = document.createElement('div');
  square.className = "square";
  return square;
}

function getAllSpots(){
  return document.getElementsByClassName("board__item");
}

function addDrawEvents(){
  [].forEach.call(getAllSpots(), function(value, index){
    value.addEventListener("click", handleClickEvent)
  })
}

function handleClickEvent(){
  if(!hasFigure(this)){
    doTurn(this);
  } else if(hasFigure(this)){
    //console.log("coś już jest")
    message.new("There is a figure already");
  }
}

function hasFigure(elem){
  return elem.hasChildNodes();
}

function doTurn(place){
  drawNewFigure(place);
  changeNextFigure();
}

function drawNewFigure(place){
  place.appendChild(checkNextFigure());
}

function checkNextFigure(){
  if (nextFigure === "square"){
    return new Square();
  } else if (nextFigure === "circle"){
    return new Circle();
  }
}

function changeNextFigure(){
  if (nextFigure === "square"){
    nextFigure = "circle";
  } else if (nextFigure === "circle"){
    nextFigure = "square";
  }
}

let draw = {
  initialize: function(){
    addDrawEvents();
  }
}

module.exports = draw;
