(function(exports) {

  var NoteController = function(newNoteList = new NoteList()){
    this.newNoteList = newNoteList
    this.noteListViewer = new NoteListViewer(newNoteList)
    this.element = document.getElementById('app')

  }

  NoteController.prototype.changeText = function(){
    this.element.innerHTML = this.noteListViewer.viewEachNote()
  }

  makeUrlChangeShowAnimalForCurrentPage();

  function makeUrlChangeShowAnimalForCurrentPage() {
    window.addEventListener("hashchange", showAnimalForCurrentPage);
  };

  function showAnimalForCurrentPage() {
    showAnimal(getAnimalFromUrl(document.location));
  };

  function getAnimalFromUrl(location) {
    var position = location.hash.split("#notes/")[1]; //gets back a number
    var x = new SingleNoteView((this.newNoteList).array[position - 1])
    return x.singleNoteHTML();
  };

  function showAnimal(animal) {
    document
      .getElementById("app")
      .innerHTML = animal;
  };

  exports.NoteController = NoteController
})(this)
