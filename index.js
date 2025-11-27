const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

//
// 
// 
// 
// 
// 
//
//  

// mongoose
//   .connect(
//     `mongodb+srv://mongoode:1sWIDkCwhM6VOd8Q@cluster0.zchez.mongodb.net/?appName=Cluster0`
//   )
//   .then(() => {
//     console.log("MongoDB connection successful");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

mongoose
  .connect("mongodb://localhost:27017/todo")
  .then(() => {
    console.log("MongoDB connection successful");
  })
  .catch((err) => {
    console.log(err);
  });

// error handler
function errorHandler(err, req, res, next) {
  if (res.headerSent) {
    return next(err);
  }
  res.status(500).json({ error: err });
}

app.listen(5000, () => {
  console.log("app listening at port 5000");
});
