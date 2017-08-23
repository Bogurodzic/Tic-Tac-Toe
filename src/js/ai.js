let ai = {
  that: this,
  allPlaces: [],

  makeTurn: function(){
    this.checkAllPlaces();
  },

  checkAllPlaces: function(){
    this.getAllPlaces().forEach(place => this.checkPlace(place));
  },

  getAllPlaces: function(){
    return document.querySelectorAll(".board__item");
  },

  checkPlace: function(place, index){
    place.hasChildNodes() ? this.checkFigureType(place) : console.log("nie ma");
  },

  checkFigureType: function(figure){
    console.log(figure.childNodes[0].className);
  }
}



module.exports = ai;
