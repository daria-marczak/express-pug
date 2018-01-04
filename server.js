var express = require("express");
var app = express();

app.set("view engine", "pug");
app.set("views", "./views");

app.get("/store", function(req, res, next) {
  console.log("Hi there, I'm the intermediary between the request and the response of /store command");
  next();
});

app.get("/", function(req, res) {
  res.send("Hello there");
});

// app.get("/store", function(req, res) {
//   res.send("That's the shop")
// });

app.get("/first-template", function(req, res) {
  res.render("first-template");
});

app.get("/content", function(req, res) {
  res.render("content", {
    name: "Authentification",
    url: "http://www.google.com/auth/google",
    page: "/first-template"
  });
});

app.get("/dynamic", function(req, res) {
  res.render("dynamic", {
    user: 
    {
      name: "Johnny",
      age: "20"
    }
  });
});

app.listen(3000);
app.use(function(req, res, next) {
  res.status(404).send("Sorry, couldn't find what you were looking for");
});