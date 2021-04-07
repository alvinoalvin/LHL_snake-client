const { keyMap } = require('./constants');

// Stores the active TCP connection object.
let connection;

// "Move: up" - move up one square(unless facing down)
// "Move: down" - move down one square(unless facing up)
// "Move: left" - move left one square(unless facing right)
// "Move: right" - move left one square(unless facing left)
const handleUserInput = (conn, key) => {
  if (key === '\u0003') {
    process.exit();
  }
  // emotes
  if (key === keyMap.SMILE_KEY) {
    conn.write(`Say: :)`);
  }
  if (key === keyMap.SAD_KEY) {
    conn.write(`Say: :(`);
  }
  if (key === keyMap.TIRED_KEY) {
    conn.write(`Say: -_-`);
  }
  if (key === keyMap.SWEAR_KEY) {
    conn.write(`Say: :\*`);
  }
  if (key === keyMap.QUESTION_KEY) {
    conn.write(`Say: ?`);
  }

  //move
  if (key === keyMap.MOVE_UP_KEY) {
    conn.write('Move: up');
  }
  if (key === keyMap.MOVE_LEFT_KEY) {
    conn.write('Move: left');
  }
  if (key === keyMap.MOVE_DOWN_KEY) {
    conn.write('Move: down');
  }
  if (key === keyMap.MOVE_RIGHT_KEY) {
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
    handleUserInput(connection, key)
  })

  return stdin;
};

module.exports = { setupInput };