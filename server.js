const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express()
app.use(cors())
app.use(express.json())

const gamesRoutes = require("./routes/games")
app.use("/api/games", gamesRoutes)

const reviewsRoutes = require("./routes/reviews")
app.use("/api/reviews", reviewsRoutes)


const MONGO_URL = "mongodb+srv://keinerespana_db_user:Keiner2025*@databasekeiner.jlxr1si.mongodb.net/?appName=databasekeiner";
const port = 5000;

// conexión a Mongo
mongoose.connect(MONGO_URL)
.then(() => console.log("MongoDB conectado"))
.catch(err => console.log("Error Mongo:", err))

// ruta de prueba
app.get("/", (req,res)=>{
    res.send("GameTracker API en funcionamiento ✅")
})

app.listen(port, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${port}`)
})
