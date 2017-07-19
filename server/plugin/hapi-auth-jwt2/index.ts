import { IPlugin, IPluginOption } from "../plugin.interface";
import * as Hapi from "hapi";

export default (): IPlugin => {
  return {
    register: (server: Hapi.Server, option: IPluginOption): Promise<void> => {
      const database = option.database;
      const serverConfig = option.serverConfig;

      const validateUser = (decoded, request, cb) => {

      };
      return new Promise<void>((resolve) => {
        server.register({
          register: require("hapi-auth-jwt2")
        }, (error) => {
          if (error) {
            console.log(`Error registering jwt plugin: ${error}`);
          } else {
            server.auth.strategy("jwt", "jwt", false,
              {
                key: serverConfig.jwtSecret,
                validationFunc: validateUser,
                verifyOptions: {algorithms: ["HS256"]}
              });
          }
          resolve();
        });
      });
    },
    info: () => {
      return {
        name: "JWT Authentication",
        version: "1.0.0"
      };
    }
  }
}
