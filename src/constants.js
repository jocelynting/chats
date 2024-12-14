export const SERVER = {
  AUTH_MISSING: 'auth-missing',
  AUTH_INSUFFICIENT: 'auth-insufficient',
  REQUIRED_USERNAME: 'required-username',
  CHANNEL_NOT_FOUND: 'channel-not-found',
  RECIPIENT_NOT_FOUND: 'recipient-not-found',
  REQUIRED_MESSAGE: 'required-message',
};

export const CLIENT = {
  NETWORK_ERROR: 'network-error',
  NO_SESSION: 'no-session',
};

export const MESSAGES = {
  [CLIENT.NETWORK_ERROR]:
    'Trouble connecting to the network. Please try again.',
  [SERVER.AUTH_MISSING]: 'Authentication is missing. Please log in again.',
  [SERVER.AUTH_INSUFFICIENT]:
    'Your username/password combination does not match any records, please try again.',
  [SERVER.REQUIRED_USERNAME]:
    'Please enter a valid (letters and/or numbers) username.',
  [SERVER.CHANNEL_NOT_FOUND]: 'Please post a message to a valid channel.',
  [SERVER.RECIPIENT_NOT_FOUND]: 'Please post a message to a valid recipient.',
  [SERVER.REQUIRED_MESSAGE]: 'Please enter a message.',
  default: 'Something went wrong. Please try again',
};

export const CHAT_TYPES = {
  CHANNEL: 'channel',
  DM: 'dm',
};
