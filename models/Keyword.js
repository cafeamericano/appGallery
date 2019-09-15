var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var KeywordSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  }
});

// Create model using defined schema
var Keyword = mongoose.model("Keyword", KeywordSchema);

module.exports = Keyword;
