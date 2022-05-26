import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
dotenv.config();

//mongo DB connection
mongoose
  .connect(process.env.DB_CONNECTION_URL)
  .then(() => console.log("Database connected..."))
  .then(() =>
    app.listen(process.env.PORT, () =>
      console.log(`Sever up and runing on PORT: ${process.env.PORT}`)
    )
  )
  .catch((error) => console.log(error));
