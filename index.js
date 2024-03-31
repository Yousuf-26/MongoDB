const express = require("express");
const app = express();

function middleWareFunction(req, res) {
  res.send("<h1>Hello this is the first middleware</h1>");
}

app.get("/", middleWareFunction);

app.listen(3000, () => {
  console.log("This app is listening to 3000, localhost:3000/");
});
