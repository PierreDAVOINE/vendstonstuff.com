require("dotenv").config();

const express = require("express");
const router = require("./app/router");
const path = require("path");
const port = process.env.PORT || 3000;

const app = express();

// Settings pour EjS
app.set("view engine", "ejs");
app.set("views", "./app/views");

// Définit "public" comme dossier static contenant css, img, etc..
app.use(express.static(path.join(__dirname, "./public")));

app.use(router);

app.listen(port, (_) => {
  console.log(`🚀 Serveur start on http://localhost:${port}`);
});
