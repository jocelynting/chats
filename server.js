const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = 3000;

const sessions = require('./sessions');
const users = require('./users');
const channels = require('./channels');
const dms = require('./directMessages');

app.use(cookieParser());
app.use(express.static('./public'));
app.use(express.json());

app.get('/api/v1/session', (req, res) => {
  const sid = req.cookies.sid;
  const username = sid ? sessions.getSessionUser(sid) : '';

  if (!sid || !users.isValidUsername(username)) {
    res.status(401).json({ error: 'auth-missing' });
    return;
  }

  res.json({ username });
});

app.post('/api/v1/session', (req, res) => {
  const { username } = req.body;

  if (!users.isValidUsername(username)) {
    res.status(401).json({ error: 'required-username' });
    return;
  }

  if (!users.isPermitted(username)) {
    res.status(403).json({ error: 'auth-insufficient' });
    return;
  }

  const sid = sessions.addSession(username);
  users.addSessionToUser(username, sid);

  const onlineUsers = users.getOnlineUsers();
  const allChannels = channels.getChannels();
  const defaultChannelMessages = channels.getDefaultChannelMessage();
  const dmMessages = dms.getAllDirectMessage(username);

  res.cookie('sid', sid);
  res.json({
    users: onlineUsers,
    channels: allChannels,
    messages: defaultChannelMessages,
    dms: dmMessages,
  });
});

app.delete('/api/v1/session', (req, res) => {
  const sid = req.cookies.sid;
  const username = sid ? sessions.getSessionUser(sid) : '';

  if (sid) {
    res.clearCookie('sid');
  }

  if (username) {
    sessions.deleteSession(sid);
    users.removeSessionFromUser(username, sid);
  }

  res.json({ username });
});

app.get('/api/v1/users', (req, res) => {
  const username = getValidateUser(req);

  if (!username) {
    res.status(401).json({ error: 'auth-missing' });
    return;
  }

  const onlineUsers = users.getOnlineUsers();

  res.json({ users: onlineUsers });
});

app.get('/api/v1/channels', (req, res) => {
  const username = getValidateUser(req);

  if (!username) {
    res.status(401).json({ error: 'auth-missing' });
    return;
  }

  const allChannels = channels.getChannels();

  res.json({ channels: allChannels });
});

app.get('/api/v1/channels/:channel', (req, res) => {
  const { channel } = req.params;

  if (!channels.hasChannel(channel)) {
    res.status(404).json({ error: 'channel-not-found' });
    return;
  }

  const messages = channels.getMessages(channel);

  res.json({ messages });
});

app.post('/api/v1/channels/:channel', (req, res) => {
  const username = getValidateUser(req);

  if (!username) {
    res.status(401).json({ error: 'auth-missing' });
    return;
  }

  const { channel } = req.params;
  const { message } = req.body;

  if (!channels.hasChannel(channel)) {
    res.status(404).json({ error: 'channel-not-found' });
    return;
  }

  if (!message) {
    res.status(400).json({ error: 'required-message' });
    return;
  }

  const newMessage = channels.addMessage(channel, username, message);

  res.json({ newMessage });
});

app.get('/api/v1/dms', (req, res) => {
  const username = getValidateUser(req);

  if (!username) {
    res.status(401).json({ error: 'auth-missing' });
    return;
  }

  const dmMessages = dms.getAllDirectMessage(username);

  res.json({ dms: dmMessages });
});

app.get('/api/v1/dms/:username', (req, res) => {
  const username = getValidateUser(req);

  if (!username) {
    res.status(401).json({ error: 'auth-missing' });
    return;
  }

  const { username: recipient } = req.params;

  if (!users.isValidUsername(recipient)) {
    res.status(404).json({ error: 'recipient-not-found' });
    return;
  }

  const messages = dms.getDirectMessages(username, recipient);

  res.json({ messages });
});

app.post('/api/v1/dms/:username', (req, res) => {
  const username = getValidateUser(req);

  if (!username) {
    res.status(401).json({ error: 'auth-missing' });
    return;
  }

  const { username: recipient } = req.params;
  const { message } = req.body;

  if (!users.isValidUsername(recipient)) {
    res.status(404).json({ error: 'recipient-not-found' });
    return;
  }

  if (!message) {
    res.status(400).json({ error: 'required-message' });
    return;
  }

  const newMessage = dms.addDirectMessage(username, recipient, message);

  res.json({ newMessage });
});

function getValidateUser(req) {
  const sid = req.cookies.sid;
  const username = sid ? sessions.getSessionUser(sid) : '';

  if (!users.isValidUsername(username) || !users.isPermitted(username)) {
    return null;
  }

  return username;
}

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
