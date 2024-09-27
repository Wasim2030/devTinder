const express = require("express");

const app = express();

/*
 * here the call back is called request handler
 * not given any path. if we hit any thing let say http://localhost:7777 or http://localhost:7777/hello or any thing in the browser url then it will send the same response on any path related to port:7777
 */
// app.use((req, res) => {
//   res.send("This is response from the server");
// });

app.use("/", (req, res) => {
  res.send("Hello from the dashboard");
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
