const express = require("express")
const router = express.Router()
const Review = require("../models/Review")

// obtener todas las reseñas
router.get("/", async (req,res)=>{
    const data = await Review.find()
    res.json(data)
})

// obtener reseñas de un juego específico
router.get("/juego/:idJuego", async (req,res)=>{
    const data = await Review.find({ juegoId: req.params.idJuego })
    res.json(data)
})

// agregar reseña
router.post("/", async (req,res)=>{
    const data = new Review(req.body)
    await data.save()
    res.json({ mensaje:"Reseña agregada", data })
})

// actualizar reseña
router.put("/:id", async (req,res)=>{
    const data = await Review.findByIdAndUpdate(req.params.id, req.body, { new:true })
    res.json({ mensaje:"Reseña actualizada", data })
})

// borrar reseña
router.delete("/:id", async (req,res)=>{
    await Review.findByIdAndDelete(req.params.id)
    res.json({ mensaje:"Reseña eliminada" })
})

module.exports = router
