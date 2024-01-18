const express = require("express");
const path = require("path");
const hsts = require("hsts");

const app = express();
const port = 8080;

console.log("coucou");

const cors = require('cors');

// CORS Configuration
const corsOptions = {
  origin: 'http://localhost:8082',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204
};

app.use(cors(corsOptions));
// app.use(hsts({ maxAge: 31536000, includeSubDomains: true, preload: true }));
app.use(express.static(path.join(__dirname, "../build")));

app.route("*").all((req, res) => {
  res.status(200).sendFile(path.join(__dirname, "/../build/index.html"));
});

app.listen(port, () => {
  console.log(`App listening at port:${port}`);
});
