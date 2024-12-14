const uuid = require('crypto').randomUUID;

const sessions = {};

function addSession(username) {
  const sid = uuid();
  sessions[sid] = {
    username,
  };
  return sid;
}

function getSessionUser(sid) {
  return sessions[sid]?.username;
}

function deleteSession(sid) {
  delete sessions[sid];
}

const session = {
  addSession,
  deleteSession,
  getSessionUser,
};

module.exports = session;
