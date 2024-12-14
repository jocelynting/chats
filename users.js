const uuid = require('crypto').randomUUID;

const sid1 = uuid();
const sid2 = uuid();

const users = {
  amit: {
    sessions: {
      [sid1]: true,
    },
  },
  bao: {
    sessions: {
      [sid2]: true,
    },
  },
};

function isValidUsername(username) {
  let isValid = true;
  isValid = !!username && username.trim();
  isValid = isValid && username.match(/^[A-Za-z0-9_]+$/);
  return isValid;
}

function isPermitted(username) {
  return username !== 'dog';
}

function addSessionToUser(username, sid) {
  if (!users[username]) {
    users[username] = { sessions: {} };
  }
  users[username].sessions[sid] = true;
}

function removeSessionFromUser(username, sid) {
  const user = users[username];
  if (user) {
    delete user.sessions[sid];
    if (Object.keys(user.sessions).length === 0) {
      delete users[username];
    }
  }
}

function getOnlineUsers() {
  return Object.keys(users);
}

const user = {
  isValidUsername,
  isPermitted,
  addSessionToUser,
  removeSessionFromUser,
  getOnlineUsers,
};

module.exports = user;
