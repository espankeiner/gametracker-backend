const { Schema, model } = require('mongoose')

const reviewSchema = new Schema({
    juegoId: { type: Types.ObjectId, ref: "Game", required: true },
    puntuacion: { type: Number, required: true },
    textoResena: { type: String, required: true },
    horasJugadas: { type: Number, required: true },
    dificultad: { type: String, required: true },
    recomendaria: { type: Boolean, default: false },
    fechaCreacion: { type: Date, default: Date.now },
    fechaActualizacion: { type: Date, default: Date.now }
})

module.exports = model("Review", reviewSchema)
