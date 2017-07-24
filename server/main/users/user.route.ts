import * as Hapi from "hapi";
import { IServerConfiguration } from "../../configuration";
import { IDatabase } from "../../database";
import { UserController } from "./user.controller";
import construct = Reflect.construct;

export function Route (server: Hapi, config: IServerConfiguration, database: IDatabase){
  const userController = new UserController();

}
