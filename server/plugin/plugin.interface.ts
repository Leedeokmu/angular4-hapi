import * as Hapi from "hapi";
import { IDatabase } from "../database";
import { IServerConfiguration } from "../configuration";

export interface IPluginOption {
  database: IDatabase;
  serverConfig: IServerConfiguration;
}

export interface IPlugin {
  register(server: Hapi.Server, option?: IPluginOption): Promise<void>;
  info(): IPluginInfo;
}

export interface IPluginInfo{
  name: string;
  version: string;
}
