var x = new Note("hello Danielle")
var y = new SingleNoteView(x)

if (y.singleNoteHTML() !== "<div>hello Danielle</div>") {
  throw new Error ("Error: Could not print HTML string with note's text")
}
else {
  console.log(". passed")
}
