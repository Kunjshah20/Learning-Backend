import express from "express";
import connectDB from "./db/index.js";
import dotenv from "dotenv";
// import {app} from './app.js'
dotenv.config({
  path: "./.env",
});

const app = express(); 

connectDB()
  .then(() => {
    try {
      app.listen(process.env.PORT || 8000, () => {
        console.log(`⚙️  Server is running at port : ${process.env.PORT}`);
      });
    //   app.on("error", (error) => {
    //     console.log("err: ", error);
    //     throw error;
    //   })
    } catch (error) {
      console.log("Error at server !!", error);
    }
  })
  .catch((err) => {
    console.log("MongoDB connection failed !!", err);
  });


// ;(async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     app.on("error", (error) => {
//       console.log("ERRR: ", error);
//       throw error;
//     });

//     app.listen(process.env.PORT, () => {
//       console.log(`App is listening on port ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.log("Error : ", error);
//     throw error;
//   }
// })();
