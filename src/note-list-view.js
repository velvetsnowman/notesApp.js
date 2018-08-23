(function(exports) {

  function NoteListViewer(notelist = new NoteList()){
    this.listOfNotes = notelist;
  }

  NoteListViewer.prototype.viewEachNote = function() {
    var list = this.listOfNotes.array
    var htmlArray = []
    list.forEach(function(i) {
      htmlArray.push("<ul><li><div>" + i.text +  "</div></li></ul>")
    });
    return htmlArray.join("");
  }

  exports.NoteListViewer = NoteListViewer;

})(this);
