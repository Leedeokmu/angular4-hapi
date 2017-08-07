import * as Config from "./config.dev";

const config = Config.config;

export interface IServerConfiguration{
  port: number;
  plugins: Array<string>;
  jwtSecret: string;
  jwtExpiration: string;
  routePrefix: string;
}

export interface IDatabaseConfiguration {
  connectionString: string;
}

export function getDatabaseConfig(): IDatabaseConfiguration{
  return config["database"];
}

export function getServerConfig(): IServerConfiguration{
  return config["server"];
}

