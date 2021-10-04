const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GameSchema = new Schema({
  name: { type: String, default: null },
  editor: { type: String, default: null },
  publishedYear: { type:String, default: null },
  picture: { type: String, default: null},
  type: { type: String, default: null},
}, { timestamps: true });

module.exports = mongoose.model('Game', GameSchema);