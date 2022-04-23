const express = require("express");
const app = express();
const morgan = require("morgan");

const itemRoutes = require("./routes/itemRoutes");

// Middlewares
if (process.env.NODE_ENV == "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

// Routes
app.use("/", itemRoutes);

module.exports = app;
