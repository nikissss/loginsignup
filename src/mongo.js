const express = require("express")
const mongoose = require ("mongoose")
const dotenv = require("dotenv")

const app = express();
const port = process.env.PORT || 3000;
dotenv.config();

mongoose.connect(process.env.MONGO)
.then(() => {
    console.log("mongodb connected");
})
.catch(() => {
    console.log("failed");
})
// const connect = async () => {
// try {
//     await mongoose.connect(process.env.MONGO);
//     console.log("Connected to mongoDB.")
//   } catch (error) {
//     throw error;
//   }
// };

// mongoose.connection.on("disconnection", () => {
//     console.log("mongoDB disconnected!")
// })

// mongoose.connection.on("connected", () => {
//     console.log("mongoDB connected!")
// })

// app.listen(port, () => {
//   connect();
//   console.log(`connected to backend! ${port}`);
// })

const newSchema = new mongoose.Schema({
  email:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  }
})

const collection = mongoose.model("collection", newSchema)

module.exports=collection