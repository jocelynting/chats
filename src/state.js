import { MESSAGES, SERVER, CHAT_TYPES } from './constants';

const state = {
  isLoggedIn: false,
  username: '',

  onlineUsers: [],

  channels: [],
  currentChannel: 'general',
  channelMessages: {},

  dms: {},
  dmUsers: {},
  currentDm: '',

  chatType: CHAT_TYPES.CHANNEL,

  isLoading: false,
  isRefreshing: false,
  isSending: false,

  error: '',
};

export function login(username) {
  state.isLoggedIn = true;
  state.username = username;
  state.isLoading = false;
}

export function setOnlineUsers(users) {
  const otherUsers = users.filter((user) => user !== state.username);
  state.onlineUsers = [state.username, ...otherUsers];
}

export function setChannels(channels) {
  state.channels = channels;
}

export function setCurrentChannel(channel) {
  state.currentChannel = channel;
}

export function setChannelMessages(messages) {
  state.chatType = CHAT_TYPES.CHANNEL;
  state.channelMessages[state.currentChannel] = messages;
}

export function addChannelMessage(message) {
  state.chatType = CHAT_TYPES.CHANNEL;
  state.channelMessages[state.currentChannel].push(message);
}

export function setDmUsers(users) {
  state.dmUsers = users;
}

export function setAllDmMessages(messages) {
  state.dms = messages;
}

export function setDmMessages(username, messages) {
  state.chatType = CHAT_TYPES.DM;
  state.currentDm = username;
  state.dms[username] = messages;
}

export function addDmMessage(message) {
  state.chatType = CHAT_TYPES.DM;
  state.dms[state.currentDm].push(message);
}

export function setLoading(isLoading) {
  state.isLoading = isLoading;
}

export function setRefreshing(isRefreshing) {
  state.isRefreshing = isRefreshing;
}

export function setSending(isSending) {
  state.isSending = isSending;
}

export function logout() {
  state.isLoggedIn = false;
  state.username = '';
  state.onlineUsers = [];
  state.channels = [];
  state.currentChannel = 'general';
  state.channelMessages = {};
  state.dms = {};
  state.dmUsers = {};
  state.currentDm = '';
  state.chatType = CHAT_TYPES.CHANNEL;
  state.isLoading = false;
  state.isRefreshing = false;
  state.isSending = false;
  state.error = '';
}

export function setError(error) {
  if (!error) {
    state.error = '';
    return;
  }

  state.isLoading = false;
  state.isSending = false;

  if (error === SERVER.AUTH_MISSING) {
    state.isLoggedIn = false;
    state.currentChannel = 'general';
  }

  state.error = MESSAGES[error] || MESSAGES.default;
}

export default state;
