(function(exports) {

  function NoteList(){
    this.array = [new Note("hi"), new Note("hello"), new Note("Goodbye")]
  }

  NoteList.prototype.getNotes = function(){
    return this.array;
  }

  NoteList.prototype.createNote = function(text){
    this.array.push(new Note(text));
  }

  exports.NoteList = NoteList;
})(this);
