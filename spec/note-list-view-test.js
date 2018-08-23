var noteList = new NoteList();
var noteListViewer = new NoteListViewer(noteList);

noteList.createNote("Daniel den Hartog is 27")
noteList.createNote("Danielle Booysen is next to me")
if (noteListViewer.viewEachNote() !== ("<ul><li><div id='0'><a href='#notes/1'>Daniel den Hartog is</a></div></li><li><div id='1'><a href='#notes/2'>Danielle Booysen is </a></div></li></ul>")) {
  throw new Error ("Error: Each text should have been printed with HTML tags")
}
else {console.log(". passed")};
