/*let message = function(message){
  let modal = document.createElement('div');
  modal.className = "modal";
  modal.innerHTML = message;
  document.body.appendChild(modal);
}*/

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
    //message.classList.add('modal--visible');
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
