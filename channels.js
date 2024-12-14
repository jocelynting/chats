const uuid = require('crypto').randomUUID;
const { formatDate } = require('./utilities');

const id1 = uuid();
const id2 = uuid();

const channels = {
  general: {
    messages: [
      {
        id: id1,
        sender: 'Amit',
        message: 'You up?',
        timestamp: '2024-11-07 12:00:00',
      },
      {
        id: id2,
        sender: 'Bao',
        message:
          'Yeah, still working on this INFO6250 work, but I keep getting distracted by cat videos',
        timestamp: '2024-11-07 12:01:00',
      },
    ],
  },
  questions: {
    messages: [],
  },
  support: {
    messages: [],
  },
};

function getChannels() {
  return Object.keys(channels);
}

function hasChannel(channel) {
  return channels[channel] !== undefined;
}

function addMessage(channel, sender, message) {
  const id = uuid();
  const timestamp = formatDate(new Date());
  const newMessage = {
    id,
    sender,
    message,
    timestamp,
  };
  channels[channel].messages.push(newMessage);
  return newMessage;
}

function getDefaultChannelMessage() {
  return channels.general.messages;
}

function getMessages(channel) {
  return channels[channel]?.messages || [];
}

const channel = {
  getChannels,
  hasChannel,
  addMessage,
  getDefaultChannelMessage,
  getMessages,
};

module.exports = channel;
