var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
  name:  String, // String is shorthand for {type: String}
  description: String,
  body:   String,
});
module.exports=mongoose.model('Product','ProductSchema');