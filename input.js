const { keyMap } = require('./constants');

// Stores the active TCP connection object.
let connection;
let timoutObj = {};

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

  // ******** MOVE FUNCTIONS ******** 
  // "Move: up" - move up one square(unless facing down)
  // "Move: down" - move down one square(unless facing up)
  // "Move: left" - move left one square(unless facing right)
  // "Move: right" - move left one square(unless facing left)

  if (key === keyMap.MOVE_UP_KEY) {
    clearInterval(timoutObj);

    timoutObj = (timoutObj = setInterval(() => {
      conn.write('Move: up');
    }, 100));

  }
  if (key === keyMap.MOVE_LEFT_KEY) {
    clearInterval(timoutObj);

    timoutObj = setInterval(() => {
      conn.write('Move: left');
    }, 100);
  }
  if (key === keyMap.MOVE_DOWN_KEY) {
    clearInterval(timoutObj);

    timoutObj = setInterval(() => {
      conn.write('Move: down');
    }, 100);
  }
  if (key === keyMap.MOVE_RIGHT_KEY) {
    clearInterval(timoutObj);

    timoutObj = setInterval(() => {
      conn.write('Move: right');
    }, 100);
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