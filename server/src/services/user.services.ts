import { Request, Response } from "express";
import * as fs from "fs";
import * as path from "path";
class userService {
  //   readonly usersFilePath: string;

  constructor() {
    // this.usersFilePath = path.join(__dirname, "..", "public", "users.json");
  }
  async getAllUsers(req: Request, res: Response) {
    let userdata = fs.readFileSync(path.join("public/users.json"), "utf-8");
    res.status(200).send(JSON.parse(userdata));
  }
  async postUser(req: Request, res: Response) {
    const readDataUser = fs.readFileSync("public/users.json", "utf-8");
    const parseData = JSON.parse(readDataUser);
    const addNewUser = {
      id: parseData[parseData.length - 1].id + 1,
      ...req.body,
    };
    parseData.push(addNewUser);
    fs.writeFileSync(path.join("public/users.json"), JSON.stringify(parseData));
  }
}
export default userService;
