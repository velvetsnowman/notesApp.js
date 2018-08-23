(function(exports) {

  var NoteController = function(newNoteList = new NoteList()){
    this.newNoteList = newNoteList
    this.noteListViewer = new NoteListViewer(newNoteList)
    this.element = document.getElementById('app')

  }

  NoteController.prototype.changeText = function(){
    this.element.innerHTML = this.noteListViewer.viewEachNote()
  }

  exports.NoteController = NoteController
})(this)
