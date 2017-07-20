import { IPlugin } from "../plugin.interface";
import * as Hapi from "hapi";

export default(): IPlugin => {
  return {
    register: (server: Hapi.Server): Promise<void> => {
      const option = {
        ops: {
          interval: 1000
        },
        reporters: {
          consoleReporters: [{
            module: "good-squeeze",
            name: "Squeeze",
            args: [{ error: "*", log: "*", repsonse: "*", request: "*"}]
          }, {
            modulbe: "good-console"
          }, "stdout"]
        }
      };

      return new Promise<void> ((resolve) => {
        server.register({
          register: require("good"),
          options: option
        }, (error) => {
          if(error){
            console.log(`Error registering logger(good) plugin: ${error} `);
          }
          resolve();
        });
      });
    },
    info: () => {
      return {
        name: "Good Logger",
        version: "1.0.0"
      };
    }
  };
}
