const express = require("express");
const app = express();

const Port = 3000;
app.use(express.json());
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(Port, () => {
  console.log(`server is currently listening at port ${Port}`);
});
