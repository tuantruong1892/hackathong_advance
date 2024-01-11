import { Express } from "express";
import userController from "./user.controller";
const Router = (app: Express) => {
  app.use("/users", userController);
};
export default Router;
