require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log("MongoDB conectado");
})
.catch((error) => {
  console.log(error);
});

app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/sitios", require("./routes/sitioRoutes"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Servidor corriendo en puerto " + PORT);
});