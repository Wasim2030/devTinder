const express = require("express");

const app = express();

// Order matters
// app.use("/user", (req, res) => {
//   res.send("Order matters");
// });

// this will only handle Get call to /user
app.get("/user", (req, res) => {
  res.send({ firstNmae: "Wasim", lastName: "Akhter" });
});

app.post("/user", (req, res) => {
  //saving data to database
  res.send("Data successfully saved to the database");
});

// making delete call
app.delete("/user", (req, res) => {
  //saving data to database
  res.send("deleted successfully");
});

// This will match all the HTTP method api calls to /test
app.use("/test", (req, res) => {
  res.send("Hello from the server");
});

app.listen(7777, () => {
  console.log("Server is listening on port: 7777");
});
