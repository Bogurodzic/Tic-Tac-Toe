let figure = {
  Circle: function(){
      let circle = document.createElement('div');
      circle.className = "circle";
      return circle;
  },

  Square: function(){
    let square = document.createElement('div');
    square.className = "square";
    return square;
  }
}

module.exports = figure;
