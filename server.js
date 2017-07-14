/**
 * Created by freefly3557 on 2017-07-14.
 */
'use strict';
exports.__esModule = true;
var hapi = require("hapi");
var inert = require("inert");
var server = new hapi.Server();
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
server.register(inert, function (err) {
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
        handler: function (requset, reply) {
            reply.file(('dist/index.html'));
        }
    });
    server.route({
        method: 'GET',
        path: '/list',
        handler: function (requset, reply) {
            reply('hello world');
        }
    });
    server.route({
        method: 'GET',
        path: '/li',
        handler: function (requset, reply) {
            reply('hello');
        }
    });
    server.start(function (err) {
        if (err) {
            throw err;
        }
        console.log('Server running at : ', server.info.uri);
    });
});
