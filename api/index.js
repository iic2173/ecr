const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(bodyParser.json());

// GET endpoint
app.get("/", (req, res) => {
  res.send("GET request received at / v2");
});

// GET endpoint
app.get("/healthcheck", (req, res) => {
  res.send(JSON.stringify({ message: true }));
});

// POST endpoint
app.post("/", (req, res) => {
  res.send(
    `POST request received at / with message: ${JSON.stringify(req.body)}`
  );
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
