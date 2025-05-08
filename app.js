const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("¡Hola desde la API REST!");
});

app.get("/saludo/:nombre", (req, res) => {
  const nombre = req.params.nombre;
  res.json({ mensaje: `Hola, ${nombre}!` });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
