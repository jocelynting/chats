const uuid = require('crypto').randomUUID;
const { formatDate } = require('./utilities');

const dms = {};

function addDirectMessage(sender, receiver, message) {
  const id = uuid();
  const timestamp = formatDate(new Date());
  const newMessage = {
    id,
    sender,
    message,
    timestamp,
  };

  if (!dms[sender]) {
    dms[sender] = {};
  }
  if (!dms[sender][receiver]) {
    dms[sender][receiver] = [];
  }

  if (!dms[receiver]) {
    dms[receiver] = {};
  }
  if (!dms[receiver][sender]) {
    dms[receiver][sender] = [];
  }

  dms[sender][receiver].push(newMessage);
  dms[receiver][sender].push(newMessage);

  return newMessage;
}

function getDirectMessages(sender, receiver) {
  return dms[sender]?.[receiver] || [];
}

function getAllDirectMessage(username) {
  return dms[username] || {};
}

const dm = {
  addDirectMessage,
  getDirectMessages,
  getAllDirectMessage,
};

module.exports = dm;
