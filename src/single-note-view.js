(function(exports) {

 var SingleNoteView = function(note){
   this.note = note;
 }

 SingleNoteView.prototype.singleNoteHTML = function(){
   return "<div>" + this.note.getText() + "</div>"
 }

 exports.SingleNoteView = SingleNoteView;

})(this)
