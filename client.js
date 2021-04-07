const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  process.stdin.on('data', (key) => {
    if (key === 'w') {
    }
    console.log(key)
    process.stdout.write('.');
  });

  return conn;
};
// console.log(connect);
module.exports = {connect};