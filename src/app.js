const express = require("express");

const app = express();

// b is optional here
// PM => will work for /abc or /ac
// app.get("/ab?c", (req, res) => {
//   res.send({ firstNmae: "Wasim", lastName: "Akhter" });
// });

// a and c are last and can write any no of b here
// works on /abc, /abbc, /abbbbbbbc
// app.get("/ab+c", (req, res) => {
//   res.send({ firstNmae: "Wasim", lastName: "Akhter" });
// });

// starts with ab, ends with cd. And can put anything between
// e.g /abcd, /abwasimcd
// app.get("/ab*cd", (req, res) => {
//   res.send({ firstNmae: "Wasim", lastName: "Akhter" });
// });

// bc is optional here => works on /ad , /abcd
// app.get("/a(bc)?d", (req, res) => {
//   res.send({ firstNmae: "Wasim", lastName: "Akhter" });
// });

// works on /abcbcbcd
// app.get("/a(bc)+d", (req, res) => {
//   res.send({ firstNmae: "Wasim", lastName: "Akhter" });
// });

// can write regx alsom
// if in the path, the letter "a" is their it will work => works on /a, /cab
// app.get(/a/, (req, res) => {
//   res.send({ firstNmae: "Wasim", lastName: "Akhter" });
// });

// this will work on /fly, /butterfly, /butterflyflybutter
// app.get(/.*fly/, (req, res) => {
//   res.send({ firstNmae: "Wasim", lastName: "Akhter" });
// });

// this regex means if the route starts with anything at starting (e.g *) and then ends with fly, it will work.
// PMan => works on => /fly, /butterfly, /dragonfly
app.get(/.*fly$/, (req, res) => {
  res.send({ firstNmae: "Wasim", lastName: "Akhter" });
});

// app.get("/user", (req, res) => {
//   res.send({ firstNmae: "Wasim", lastName: "Akhter" });
// });

// how to get this userId (e.g query params) in my controller/route handler
// /user?userId=10"

// to read query params
// In PMan => http://localhost:7777/user?userId=10 and see console => { userId: '10' }
// http://localhost:7777/user?userId=10&password=test1234 => { userId: '10', password: 'test1234' }
// app.get("/user", (req, res) => {
//   // to read query parameters
//   // req.query => this will give information about this query parameter e.g userId = 10
//   console.log(req.query);
//   res.send({ firstNmae: "Wasim", lastName: "Akhter" });
// });

// to handle dynamic apis e.g. /user/101
// check console
// : => it is a dynamic route
// app.get("/user/:userId", (req, res) => {
//   // to handle it => PM => /user/101
//   console.log(req.params); // to get 101 => we have req.params
//   res.send({ firstNmae: "Wasim", lastName: "Akhter" });
// });

// hit this url (http://localhost:7777/user/101/xyx/test111) in pm and check console
app.get("/user/:userId/:name/:password", (req, res) => {
  console.log(req.params); // to get 101 => we have req.params
  res.send({ firstNmae: "Wasim", lastName: "Akhter" });
});

// req.query => for query
// req.params => for parameters

app.listen(7777, () => {
  console.log("Server is listening on port: 7777");
});
