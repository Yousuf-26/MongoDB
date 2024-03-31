const express = require("express");
const mongoose = require("mongoose");
const app = express();

function middleWareFunction(req, res) {
  res.send("<h1>Hello this is the first middleware</h1>");
}

app.get("/", middleWareFunction);

/*
app.listen(3000, () => {
  console.log("This app is listening to 3000, localhost:3000/");
});
*/
mongoose
  .connect(
    "mongodb+srv://yousufpractice:Ur0rqUxzAJLw8mqC@newone.l1eytth.mongodb.net/{newOne}?retryWrites=true&w=majority&appName=newOne"
  )
  .then(() => {
    console.log("Connected to database");
    app.listen(3000, () => {
      console.log("This app is listening to 3000, localhost:3000/");
    });
  })
  .catch(() => {
    console.log("Connection failed !");
  });
