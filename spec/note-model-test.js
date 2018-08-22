var note = new Note("hello");

if (note.getText() !== "hello") {
  throw new Error("Error: Should have returned the text of the note.");
} else {
  console.log('. passed');
}
