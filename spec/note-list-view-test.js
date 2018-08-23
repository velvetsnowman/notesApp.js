var noteList = new NoteList();
noteList.createNote("Daniel")
var noteListViewer = new NoteListViewer(noteList);



if (noteListViewer.viewEachNote() !== ("<ul><li><div>Daniel</div></li></ul>")) {

  throw new Error ("Error: Each text should have been printed with HTML tags")
}
else {console.log(". passed")};
