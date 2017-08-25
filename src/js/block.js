let block = {
  isBlocked: false,

  blockGame: function(){
    this.isBlocked = true;
  },

  unblockGame: function(){
    this.isBlocked = false;
  }
}

module.exports = block;
