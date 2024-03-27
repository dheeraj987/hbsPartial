const path = require("path");
const express = require("express");
const hbs = require("hbs");

const app = express();
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialPath = path.join(__dirname, "../templates/partials");

app.set("view engine", "hbs");
app.set("views", viewsPath);
app.use(express.static(publicDirectoryPath));
hbs.registerPartials(partialPath);

app.use(express.static(publicDirectoryPath));

app.get("/", (req, res) => {
  res.render("index", {
    title: "Express App",
    name: "Dheeraj Singh",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Me",
    name: "Dheeraj Singh",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    helpText: "This is some help text",
    title: "Help",
    name: "Dheeraj Singh",
  });
});

app.listen(3000, () => {
  console.log("listening on http://localhost:3000");
});

app.get("/ExpressApp", (req, res) => {
  res.send({
    forecast: "It is  raining",
    location: "Jammu",
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "Jammu Singh",
    errorMessage: "Page not found",
  });
});
