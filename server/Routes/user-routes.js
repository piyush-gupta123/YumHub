import express from "express";
import { login, signup } from "../Controllers/user-controller";

const userRouter = express.Router();

userRouter.post('/signup',signup);
userRouter.post('/login',login);

export default userRouter;