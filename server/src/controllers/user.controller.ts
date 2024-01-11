import express, { Request, Response } from "express";
import userService from "../services/user.services";

const userController = express.Router();
const UserService = new userService();
userController.get("/", UserService.getAllUsers);
userController.post("/", UserService.postUser);
// userController.get("/:id", UserService.deleteUser);

export default userController;
