/**
 * Created by freefly3557 on 2017-07-14.
 */
'use strict';
import * as hapi from 'hapi';
import * as inert from 'inert';
import * as path from 'path';

const server: hapi.Server = new hapi.Server();
server.connection({
  host: 'localhost',
  port: 3000
  // routes: {
  //   handler: {
  //     directory: {
  //       path: './',
  //       listing: true
  //     }
  //   }
  // }
});


server.register(inert, (err) => {
  if (err) {
    throw err;
  }

  server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: {
        path: './dist',
        listing: false,
        index: true
      }
    }
  });

  server.route({
    method: 'GET',
    path: '/index',
    handler: (requset: hapi.Request, reply: hapi.IReply) => {
      reply.file(('dist/index.html'));
    }
  });

  server.route({
    method: 'GET',
    path: '/list',
    handler: (requset: hapi.Request, reply: hapi.IReply) => {
      reply('hello world');
    }
  });

  server.route({
    method: 'GET',
    path: '/li',
    handler: (requset: hapi.Request, reply: hapi.IReply) => {
      reply('hello');
    }
  });

  server.start( ( err ) => {
    if (err) {
      throw err;
    }
    console.log('Server running at : ', server.info.uri);
  });
});
