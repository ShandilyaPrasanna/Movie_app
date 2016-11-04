var mongoose= require("mongoose");

var Schema = mongoose.Schema;var movieDetailsSchema = new Schema({
  Title:String,
	Year:String,
	imdbID:String,
	Type:String,
  Poster:String
});
module.exports = mongoose.model('MovieDetails',movieDetailsSchema);
