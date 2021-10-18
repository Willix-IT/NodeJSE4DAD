const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DriverSchema = new Schema({
  nom: { type: String, default: null },
  prenom: { type: String, default: null, required: true },
  voiture: {
    modele: { type: String, default: null },
    immatriculation: { type: String, default: null, required: true },
    marque: { type:String, default: null }
  },
}, { timestamps: true });

module.exports = mongoose.model('Driver', DriverSchema);