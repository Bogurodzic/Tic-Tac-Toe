let message = {
  new: function(content){
    let message = this.create(content);
    this.show(message);
    this.addEvents(message);
  },

  create: function(content){
    let modal = document.createElement('div');
    modal.className = "modal";
    modal.innerHTML = content;
    return modal;
  },

  show: function(message){
    document.body.appendChild(message);
  },

  addEvents: function(message){
    this.removeMessage(message);
  },

  removeMessage: function(message){
    setTimeout(function(){
      message.remove();
    }, 1000);
  }

}



module.exports = message;
