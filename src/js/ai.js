let ai = {
  that: this,
  allPlaces: [],

  makeTurn: function(){
    this.checkAllPlaces();
  },

  checkAllPlaces: function(){
    let allPlaces = this.getAllPlaces();
    //check every place
    [].forEach.call(allPlaces, this.checkPlace);
  },

  getAllPlaces: function(){
    return document.getElementsByClassName("board__item");
  },

  checkPlace: function(place, index){
    place.hasChildNodes() ? console.log(this) : console.log("ni ma");
    /*if(place.hasChildNodes()){

    } else if(!place.hasChildNodes()){
      console.log("ni ma");
    }*/
  },

  checkFigureType: function(figure){
    console.log(figure);
  }
}

module.exports = ai;
