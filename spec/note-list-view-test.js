var noteListViewer = new NoteListViewer();

if (noteListViewer.viewEachNote() !== ("<ul><li><div>hi</div></li>,<ul><li><div>hello</div></li>,<ul><li><div>Goodbye</div></li>")) {
  throw new Error ("Error: Each text should have been printed with HTML tags")
}
else {console.log(". passed")};
