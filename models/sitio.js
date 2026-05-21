const mongoose = require("mongoose");

const sitioSchema = new mongoose.Schema({

  nombreSitio: {
    type: String,
    required: true
  },

  descripcion: String,

  colorTema: String,

  logo: String,

  banner: String,

  plantilla: String,

  usuarioId: String

}, {
  timestamps: true
});

module.exports = mongoose.model("Sitio", sitioSchema);