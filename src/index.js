const express = require("express");
const middlewares = require("./routes");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("¡Hola, mundo!");
});

app.use(express.json());

middlewares(app);

app.listen(port, () => {
  console.log(`La aplicación está funcionando en http://localhost:${port}`);
});
