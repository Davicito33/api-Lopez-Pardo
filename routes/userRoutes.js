const express = require("express");
const router = express.Router();

const User = require("../models/User");

router.post("/register", async (req, res) => {

  try {

    const user = new User(req.body);

    await user.save();

    res.json({
      mensaje: "Usuario registrado"
    });

  } catch (error) {

    res.status(500).json(error);

  }

});

router.post("/login", async (req, res) => {

  try {

    const { correo, clave } = req.body;

    const user = await User.findOne({
      correo,
      clave
    });

    if(!user){

      return res.status(400).json({
        mensaje: "Credenciales incorrectas"
      });

    }

    res.json(user);

  } catch (error) {

    res.status(500).json(error);

  }

});

module.exports = router;