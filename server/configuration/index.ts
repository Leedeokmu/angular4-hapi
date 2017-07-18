import * as nconf from 'nconf';
import * as path from 'path';

const config = new nconf.Provider({
  env: true,
  argv: true,
  store: {
    type: 'file',
    file: path.join(__dirname, `./config.${process.env.NODE_ENV || 'dev'}.json`)
  }
});

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
  return config.get('database');
}

export function getServerConfig(): IServerConfiguration{
  return config.get('server');
}
