const express = require("express");

const app = express();

app.use("/hello/2", (req, res) => {
  res.send("sequence of code matters");
});

app.use("/hello", (req, res) => {
  res.send("Hello ello llo");
});

app.use("/test", (req, res) => {
  res.send("Hello from the server");
});

app.listen(7777, () => {
  console.log("Server is listening on port: 7777");
});
