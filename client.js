const net = require('net');
const {setupInput} = require('./input');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });

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

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */

// let conn = connect()
// conn.on('data', (key) => {
//   if (key === 'w') {
//     connect.write("Move: up");
//   }
//   if (key === 'w') {
//     connect.write("Move: down");
//   }
//   if (key === 'w') {
//     connect.write("Move: left");
//   }
//   if (key === 'w') {
//     connect.write("Move: right");
//   }
// }
// );
// console.log(connect);
module.exports = { connect };