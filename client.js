const net = require('net');

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

  process.stdin.on('data', message => conn.write("Name: [ ]"));
  // process.stdin.on('data', (key) => {
  //   if (key === 'w') {
  //   }
  //   console.log(key)
  //   process.stdout.write('.');
  // });

  return conn;
};
// console.log(connect);
module.exports = { connect };