const express = require("express");

const app = express();

app.get("/user", (req, res) => {
  res.send({ firstNmae: "Wasim", lastName: "Akhter" });
});

app.listen(7777, () => {
  console.log("Server is listening on port: 7777");
});
