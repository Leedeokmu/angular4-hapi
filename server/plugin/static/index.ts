import {IPlugin} from "../plugin.interface";
import * as Hapi from "hapi";

export default(): IPlugin => {
  return {
    register: (server: Hapi.Server): Promise<void> => {
      return new Promise<void> ((resolve) => {
        server.register(
          require("inert"),
          (err) => {
            if (err) {
              throw err;
            }

            server.route({
              method: "GET",
              path: "/{path*}",
              handler: {
                directory: "./dist",
                index: true,
                listing: true
              }
            });
            resolve();
        });
      });
    },
    info: () => {
      return {
        name: "static route importing",
        version: "1.0.0"
      };
    }
  };
};
