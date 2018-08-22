(function(exports) {

  function NoteListViewer(){
    this.listOfNotes = new NoteList();
  }

  NoteListViewer.prototype.viewEachNote = function() {
    var list = this.listOfNotes.array
    var htmlArray = []
    list.forEach(function(i) {
      htmlArray.push("<ul><li><div>" + i.text +  "</div></li>")
    });
    return htmlArray.join();
  }

  exports.NoteListViewer = NoteListViewer;

})(this);
