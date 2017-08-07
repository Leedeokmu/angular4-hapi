import * as Hapi from "hapi";
import { IServerConfiguration } from "../../configuration";
import { IDatabase } from "../../database";
import UserController from "./user.controller";

export function Route (server: Hapi, config: IServerConfiguration, database: IDatabase){
  const userController = new UserController();

}
