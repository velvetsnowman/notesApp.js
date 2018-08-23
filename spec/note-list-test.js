var noteList = new NoteList();

if (noteList.getNotes() !== noteList.array) {throw new Error("Error: Shourld have returned the list of Note objects.");}
else {console.log(". passed")};

noteList.createNote("Daniel")
if((noteList.array).length !== 1) {throw new Error("Error: Should have created and stored a new note.");}
else {console.log(". passed");}
