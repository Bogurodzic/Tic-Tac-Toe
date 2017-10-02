let ui = {
  nextFigure: "circle",
  turnInformation: document.getElementsByClassName("information__turn")[0],
  computerFigure: "square",
  playerFigure: "circle",
  player1Points: 0,
  player2Points: 0,

  getPlyer1Points: function(){
    return this.player1Points;
  },

  getPlyer2Points: function(){
    return this.player2Points;
  },

  getPlayerFigure: function(){
    return this.playerFigure;
  },

  getComputerFigure: function(){
    return this.computerFigure;
  },

  changeNextFigure: function(){
    this.nextFigure === "square" ? this.nextFigure = "circle" : this.nextFigure = "square";
  },

  changeTurnInformation: function(){
    this.turnInformation.innerText = this.capitalize(this.nextFigure) + " Turn";
    this.turnInformation.classList.toggle("information__turn--other-color");
  },

  hideTurnInformation: function(){
    this.turnInformation.style.display = "none";
  },

  showTurnInformation: function(){
    this.turnInformation.style.display = "block";
  },

  capitalize: function(text){
    return text.charAt(0).toUpperCase() + text.slice(1);
  },

  showWinInfo: function(){
    document.getElementById('win-info').classList.add("win-info--visible");
  },

  hideWinInfo: function(){
    document.getElementById('win-info').classList.remove("win-info--visible");
  },

  showDrawInfo: function(){
    document.getElementById('draw-info').classList.add("draw-info--visible");
  },

  hideDrawInfo: function(){
    document.getElementById('draw-info').classList.remove("draw-info--visible");
  }
}

module.exports = ui;
