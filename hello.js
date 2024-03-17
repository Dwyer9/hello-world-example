const express = require("express");
const app = express();

const showEnglishView = (req, res) => {
  res.render("hello-world-english");
};

app.set("views", "./views");
app.set("view engine", "pug");

app.use(express.static("public"));

app.get("/", showEnglishView);
app.get("/english", showEnglishView);

app.get("/french", (req, res) => {
  res.render("hello-world-french");
});

app.get("/serbian", (req, res) => {
  res.render("hello-world-serbian");
});

app.listen(3000, "localhost", () => {
  console.log("Listening to port 3000.");
});
