const express = require("express");
const router = express.Router();

const Sitio = require("../models/Sitio");

router.post("/", async (req, res) => {

  try {

    const sitio = new Sitio(req.body);

    await sitio.save();

    res.json(sitio);

  } catch (error) {

    res.status(500).json(error);

  }

});

router.get("/", async (req, res) => {

  try {

    const sitios = await Sitio.find();

    res.json(sitios);

  } catch (error) {

    res.status(500).json(error);

  }

});

router.get("/:id", async (req, res) => {

  try {

    const sitio = await Sitio.findById(req.params.id);

    res.json(sitio);

  } catch (error) {

    res.status(500).json(error);

  }

});

router.put("/:id", async (req, res) => {

  try {

    const sitio = await Sitio.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(sitio);

  } catch (error) {

    res.status(500).json(error);

  }

});

router.delete("/:id", async (req, res) => {

  try {

    await Sitio.findByIdAndDelete(req.params.id);

    res.json({
      mensaje: "Sitio eliminado"
    });

  } catch (error) {

    res.status(500).json(error);

  }

});

module.exports = router;