(function(exports) {

  var noteController = function(newNoteList = new NoteList()){
    this.x = newNoteList
    this.x.createNote("FAV drink: Coffee")
    this.x.createNote("FAV food: salads")
    this.x.createNote("FAV color: brown")
    this.y = new NoteListViewer(newNoteList)

  }

  noteController.prototype.changeText = function(){
    document.getElementById('app').innerHTML = this.y.viewEachNote()
  }

  exports.noteController = noteController
})(this)
