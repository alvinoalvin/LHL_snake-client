
// Stores the active TCP connection object.
let connection;

// "Move: up" - move up one square(unless facing down)
// "Move: down" - move down one square(unless facing up)
// "Move: left" - move left one square(unless facing right)
// "Move: right" - move left one square(unless facing left)
const handleUserInput = (conn,key) => {
  if (key === '\u0003') {
    process.exit();
  }
  if (key === 'w') {
    conn.write('Move: up');
  }
  if (key === 'a') {
    conn.write('Move: left');
  }
  if (key === 's') {
    conn.write('Move: down');
  }
  if (key === 'd') {
    conn.write('Move: right');
  }
};

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  stdin.on('data', key => {
    handleUserInput(connection,key)
  })

  return stdin;
};

module.exports = { setupInput };