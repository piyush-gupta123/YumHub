import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRouter from "./Routes/user-routes.js";
// import bodyParser from "body-parser";
mongoose.set("strictQuery", true);

const app = express();
dotenv.config();

// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())
app.use("/user", userRouter);



const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => app.listen(PORT))
  .then(() => console.log(`Server is connected at ${PORT}`))
  .catch((err) => console.log(err));
