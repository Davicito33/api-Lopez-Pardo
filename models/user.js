const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

  usuario: {
    type: String,
    required: true
  },

  correo: {
    type: String,
    required: true
  },

  clave: {
    type: String,
    required: true
  }

});

module.exports = mongoose.model("User", userSchema);