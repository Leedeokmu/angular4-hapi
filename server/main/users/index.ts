import * as Hapi from "hapi";
import * as Route from "./user.route";
import { IServerConfiguration } from "../../configuration/index";
import { IDatabase } from "../../database";

export function init(server: Hapi.Server, config: IServerConfiguration, database: IDatabase){
  return Route(server, config, database);
}
