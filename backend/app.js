import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import catRouter from "./routes/catRoutes.js";

const app = express();
app.use(express.json());
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

//   linking the routes
app.use("/api/category/", catRouter);
