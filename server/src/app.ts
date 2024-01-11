import express, { NextFunction, Request, Response, urlencoded } from "express";
import * as fs from "fs";
import * as path from "path";
import cors from "cors";
import Router from "./controllers";
const bodyParser = require("body-parser");
const server = express();
const PORT = 8000;

//middleware
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(cors());
const users = [];

Router(server);
server.listen(PORT, () => {
  console.log(`server listen on port 8000, http://localhost:${PORT}`);
});
