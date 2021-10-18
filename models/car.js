const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CarSchema = new Schema({
  modele: { type: String, default: null },
  immatriculation: { type: String, default: null },
  marque: { type:String, default: null },
}, { timestamps: true });

module.exports = mongoose.model('Car', CarSchema);