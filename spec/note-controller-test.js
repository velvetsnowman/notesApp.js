var noteList = new NoteList();
var noteController = new NoteController(noteList)
noteList.createNote("FAV drink: Coffee")
mockElement = {
  innerHTML: ""
}
noteController.element = mockElement


if ( typeof noteController !== "object" ) {
  throw new Error ("Error: Should have allowed NoteController to be instantiated")
}
else {console.log(". passed")}

noteController.changeText();
if ( noteController.element.innerHTML !== "<ul><li><div id='0'><a href='#notes/1'>FAV drink: Coffee</a></div></li></ul>") {
  throw new Error ("Error: Should have shown favourite drink")
}
else {console.log(". passed")}
