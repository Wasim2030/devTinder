const express = require("express");

const app = express();

/*
 * here the call back is called request handler
 * not given any path. if we hit any thing let say http://localhost:7777 or http://localhost:7777/hello or any thing in the browser url then it will send the same response on any path related to port:7777
 */
// app.use((req, res) => {
//   res.send("This is response from the server");
// });

// if i put this code on top then even we put sth like //// or /hello or /test it will always show the given below result e.g. Hello from the dashboard
// app.use("/", (req, res) => {
//   res.send("Hello from the dashboard");
// });

// as soon as request comes from the browser. it will first check this route then afterwards route
app.use("/hello/2", (req, res) => {
  res.send("sequence of code matters");
});

// note - /hello will work and also /hello/xyz or /hello/abc/xyz  will also give the same result.
app.use("/hello", (req, res) => {
  res.send("Hello ello llo");
});

// this route will not work boz sequence of code matters.
// if put on above the above "/hello" route then it will work fine
// app.use("/hello/2", (req, res) => {
//   res.send("sequence of code matters");
// });

app.use("/test", (req, res) => {
  res.send("Hello from the server");
});

// sequence or order of code matters
// app.use("/", (req, res) => {
//   res.send("Hello from the dashboard");
// });

app.listen(7777, () => {
  console.log("Server is listening on port: 7777");
});
