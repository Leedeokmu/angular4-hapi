import * as Hapi from "hapi";
import { Route } from "./user.route";
import { IServerConfiguration } from "../../configuration";
import { IDatabase } from "../../database";

export function init(server: Hapi.Server, config: IServerConfiguration, database: IDatabase) {
  Route(server, config, database);
}
