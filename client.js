const net = require('net');
const { setupInput } = require('./input');
const { IP, PORT } = require('./constants');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  console.log('Connecting ...');

  conn.on('connect', () => {
    console.log("Successfully connected to game server");
  });

  conn.write("Move: up");

  process.stdin.on('data', message => conn.write("Name: [ ]"));

  conn.on('end', () =>
    console.log('client disconnected from server')
  );

  return conn;
};

module.exports = { connect };