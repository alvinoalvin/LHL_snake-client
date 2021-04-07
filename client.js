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
const handleUserInput = (key) => {
  if (key === '\u0003') {
    process.exit();
  }
}
const setupInput = function() {

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  stdin.on('data', key => {
    handleUserInput(key)
  })

  return stdin;
}
setupInput();

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