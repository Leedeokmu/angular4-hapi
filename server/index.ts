import * as Server from './server';
import * as Database from './database';
import * as Config from './configuration';

console.log(`Running on ${process.env.NODE_ENV || 'dev'}`);

process.on('uncaughtException', (error: Error) => {
  console.error('UnCaughtException ', error);
});

process.on('unhandledRejection', (reason: any, p: any) => {
  console.log('Unhandled Rejection at:', p, 'reason:', reason);
});

const dbConfig = Config.getDa
