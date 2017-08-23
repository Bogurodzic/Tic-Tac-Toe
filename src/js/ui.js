let ui = {
  nextFigure: "circle",
  turnInformation: document.getElementsByClassName("information__turn")[0],

  changeNextFigure: function(){
    this.nextFigure === "square" ? this.nextFigure = "circle" : this.nextFigure = "square";
  },

  changeTurnInformation: function(){
    this.turnInformation.innerText = this.nextFigure + " turn";
  }
}

module.exports = ui;
