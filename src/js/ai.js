let ai = {
  that: this,
  allPlaces: [],

  makeTurn: function(){
    this.checkAllPlaces();
  },

  checkAllPlaces: function(){
    let allPlaces = this.getAllPlaces();
    for(let i = 0; i < allPlaces.length; i++){
      this.checkPlace(allPlaces[i]);
    }
  },

  getAllPlaces: function(){
    return document.getElementsByClassName("board__item");
  },

  checkPlace: function(place, index){
    place.hasChildNodes() ? this.checkFigureType(place) : console.log("nie ma");
  },

  checkFigureType: function(figure){
    console.log(figure.childNodes[0].className);
  }
}



module.exports = ai;
