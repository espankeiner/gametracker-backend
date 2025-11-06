const { Schema, model } = require("mongoose")

const reviewSchema = new Schema({
    juegoId: { type: String, required: true },
    puntuacion: { type: Number, required: true }, // 1-5 estrellas
    textoResena: { type: String, required: true },
    horasJugadas: { type: Number, required: true },
    dificultad: { type: String, required: true }, // Facil / Normal / Dificil
    recomendaria: { type: Boolean, default: false },
    fechaCreacion: { type: Date, default: Date.now },
    fechaActualizacion: { type: Date, default: Date.now }
})

module.exports = model("Review", reviewSchema)
