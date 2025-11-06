const express = require('express');
const router = express.Router();
const Game = require('../models/Game');

// GET todos los juegos
router.get("/", async (req,res)=>{
    const games = await Game.find()
    res.json(games)
})

// GET un solo juego
router.get("/:id", async (req,res)=>{
    const game = await Game.findById(req.params.id)
    res.json(game)
})

// POST agregar juego
router.post("/", async (req,res)=>{
    const game = new Game(req.body)
    await game.save()
    res.json({ mensaje: "Juego agregado", game })
})

// DELETE eliminar un juego
router.delete("/:id", async (req,res)=>{
    await Game.findByIdAndDelete(req.params.id)
    res.json({ mensaje: "Juego eliminado" })
})

// PUT actualizar juego
router.put("/:id", async (req,res)=>{
    const game = await Game.findByIdAndUpdate(req.params.id, req.body, { new:true })
    res.json({ mensaje: "Juego actualizado", game })
})

module.exports = router