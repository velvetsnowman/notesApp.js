(function(exports) {

  function NoteListViewer(notelist = new NoteList()){
    this.listOfNotes = notelist;
  }

  NoteListViewer.prototype.viewEachNote = function() {
    var list = this.listOfNotes.array
    var htmlArray = []
    list.forEach(function(i) {
      htmlArray.push(`<li><div id='${list.indexOf(i)}'><a href='#notes/${list.indexOf(i)+1}'>` + i.text.substring(0, 20) +  "</a></div></li>")
    });
    return "<ul>" + htmlArray.join("") + "</ul>";
  }

  exports.NoteListViewer = NoteListViewer;

})(this);
