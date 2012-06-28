/*!
 * app.js is the server component of slippery
 *
 */

/*
 * Modules
 */
var Express = require('express');
var WebSocket = require('faye-websocket');

var PORT = 8080;

/*
 * set up the application
 */
var app = module.exports = Express.createServer();

app.configure(function () {
    app.use(Express.static(__dirname + '/public'));
    app.use(app.router);
  });

//TODO: What about the connections erm...?

function broadcast(event) {
  /*
  TODO: Broadcasting....
  */
}

app.addListener('upgrade', function(request, socket, head) {
    console.log('upgrade');

    var ws = new WebSocket(request, socket, head);
    //Tell the Clients some stuff....

    ws.onmessage = function (event) {
      broadcast(event);
    };

    ws.onclose = function (event) {
      console.log('close', event.code, event.reason);
      connections = connections.splice(connections.indexOf(ws));
      ws = null;
    };
  });

app.listen(PORT, function () {
    console.log('Server listening on port: http://localhost:' + PORT);
  });
