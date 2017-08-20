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

//let createCircle = document.createTextNode(circle);

function getAllSpots(){
  return document.getElementsByClassName("board__item");
}

function addDrawEvents(){
  [].forEach.call(getAllSpots(), function(value, index){
    value.addEventListener("click", drawElement)
  })
}

function drawElement(){
  this.appendChild(new Square());
}

let draw = {
  initialize: function(){
    addDrawEvents();
  }
}

module.exports = draw;
