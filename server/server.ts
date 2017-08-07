/**
 * Created by freefly3557 on 2017-07-14.
 */

"use strict";
import * as Hapi from "hapi";
import * as Boom from "boom";
import {IPlugin, IPluginOption} from "./plugin/plugin.interface";
import { IServerConfiguration } from "./configuration";
import { IDatabase } from "./database";

export function init(serverConfig: IServerConfiguration, database: IDatabase): Promise<Hapi.Server> {
  return new Promise<Hapi.Server>(resolve => {
    const port = process.env.PORT || serverConfig.port;
    const server = new Hapi.Server();

    server.connection({
      port: port,
      routes: {
        cors: true
      }
    });

    // if (serverConfig.routePrefix) {
    //   server.realm.modifiers.route.prefix = serverConfig.routePrefix;
    // }

    const plugins: Array<string> = serverConfig.plugins;
    const pluginOptions: IPluginOption = {
      database: database,
      serverConfig: serverConfig
    };

    let pluginPromises = [];

    plugins.forEach((pluginName: string) => {
      let plugin: IPlugin = (require("./plugin/" + pluginName)).default();
      console.log(`Register Plugin ${plugin.info().name} v${plugin.info().version}`);
      pluginPromises.push(plugin.register(server, pluginOptions));
    });

    Promise.all(pluginPromises).then(() => {
      console.log("All plugins registered successfully");
      console.log("Register Routes");

      console.log("Routes registered sucessfully");

      resolve(server);
    });
  });
}
