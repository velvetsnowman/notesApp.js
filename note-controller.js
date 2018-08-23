(function(exports) {

  var Update = function(){

  }

  Update.prototype.changeText = function(newText){
    document.getElementById('app').innerHTML = newText
  }

  exports.Update = Update
})(this)
