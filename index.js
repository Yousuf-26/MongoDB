const express = require("express");
const mongoose = require("mongoose");

//IMPORTING THE MODEL THAT WE HAVE CREATED
const Product = require("./models/product.model");
const app = express();

function middleWareFunction(req, res) {
  res.send("<h1>Hello this is the first middleware</h1>");
}

//use to sen body in post
app.use(express.json());

app.get("/", middleWareFunction);

//FOR GETTING ALL RECORDS FROM MONGODB
app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//FOR GETTING INSERTING RECORDS IN MONGODB
app.post("/api/products", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

//FOR FINDING A PARTICULAR RECORD IN MONGODB
app.get("/api/products/:id", async (req, res) => {
  try {
    //HOW TO GET THE PARAMETERS FROM THE URL
    const { id } = req.params;
    const products = await Product.findById(id);
    res.status(200).json(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

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
