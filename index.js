const http = require ('http');
const handlerRequest = require('./requestHandler');
const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

eventEmitter.on('requestReceived', () => {
    console.log('Request received by server');
});

const server = http.createServer((req, res) => {
    eventEmitter.emit('requestReceived');
    handlerRequest(req, res);
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log('Server running at http://127.0.0.1: ${PORT}/');
});