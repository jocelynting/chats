import { CHAT_TYPES } from './constants.js';

function render({ state, appEl }) {
  if (state.isLoggedIn && state.isRefreshing) {
    renderUsersAndMessages(state, appEl);
  } else {
    const html = `
      ${generateHeaderHtml(state)}
      <main class="main">
        ${state.isLoggedIn ? generateChatHtml(state) : generateLoginHtml(state)}
      </main>
      ${generateFooterHtml()}
    `;
    appEl.innerHTML = html;

    if (state.isLoggedIn) {
      scrollToBottom(appEl);
    }
  }
}

function renderUsersAndMessages(state, appEl) {
  const usersHtml = generateOnlineUsersHtml(state);
  const dmHtml = generateDmsHtml(state);
  const messagesListHtml = generateMessageListHtml(state);

  const usersEl = appEl.querySelector('.users');
  const dmsEl = appEl.querySelector('.dms');
  const messagesListEl = appEl.querySelector('.messages__list');

  usersEl.innerHTML = usersHtml;
  dmsEl.innerHTML = dmHtml;
  messagesListEl.innerHTML = messagesListHtml;

  scrollToBottom(appEl);
}

function generateSpinnerHtml() {
  return `
    <div class="login__spinner">
      <div class="spinner"></div>
      <p class="spinner__title">Loading...</p>
    </div>
  `;
}

function generateLoginHtml(state) {
  if (state.isLoading) {
    return generateSpinnerHtml();
  }

  return `
    <form class="login">
      <div class="login__username">
        <label for="username" class="login__label">Enter your name: </label>
        <input class="login__input" type="text" name="username" id="username" placeholder="username"/>
        ${
          state.error !== ''
            ? `<div class="status__error">${state.error}</div>`
            : ''
        }
      </div>
      <button class="login__submit" type="submit">Login</button>
    </form>
  `;
}

function generateChatHtml(state) {
  if (state.isLoading) {
    return generateSpinnerHtml();
  }

  const title =
    state.chatType === CHAT_TYPES.CHANNEL
      ? '💭 # ' + state.currentChannel
      : '🍻 ' + state.currentDm;

  return `
    <div class="chat">
      <div class="chat__lists">
        <div class="users">
          ${generateOnlineUsersHtml(state)}
        </div>
        <div class="channels">
          ${generateChannelsHtml(state)}
        </div>
        <div class="dms">
          ${generateDmsHtml(state)}
        </div>
      </div>
      <div class="chat__messages">
      <div class="messages">
        <p class="messages__title">${title}</p>
        <div class="messages__detail">
          ${generateMessageListHtml(state)}
        </div>
      </div>
        ${generateSendMessagesHtml(state)} 
      </div>
    </div>
  `;
}

function generateOnlineUsersHtml(state) {
  return `
      <p class="users__title">Online Users</p>
      <ul class="users__list">
        ${state.onlineUsers
          .map(
            (username, index) => `
          <li class="users__user">
            <button class="dm__button" data-username="${username}">
              ${index === 0 ? '👑 ' + username : username}
            </button>
          </li>
        `
          )
          .join('')}
      </ul>
  `;
}

function generateChannelsHtml(state) {
  return `
    <p class="channels__title">Channels</p>
    <ul class="channels__list">
      ${state.channels
        .map(
          (channel) => `
          <li class="channels__channel">
            <button class="channel__button" data-channel="${channel}"># ${channel}</button>
          </li>
          `
        )
        .join('')}
    </ul>
  `;
}

function generateMessageListHtml(state) {
  const messages =
    state.chatType === CHAT_TYPES.CHANNEL
      ? state.channelMessages[state.currentChannel] || []
      : state.dms[state.currentDm] || [];

  const tipHtml =
    messages.length === 0
      ? state.chatType === CHAT_TYPES.CHANNEL
        ? `<p class="messages__tip">🤣 No messages yet. Start the conversation!</p>`
        : ''
      : '';

  return `
      <div class="messages__list">
        ${tipHtml}
        ${messages
          .map(
            (message) => `
            <div class="message">
              <div class="message__info">
                <p class="message__sender">${message.sender}</p>
                <p class="message__timestamp">${message.timestamp}</p>
              </div>
              <p class="message__content">${message.message}</p>
            </div>
            `
          )
          .join('')}
      </div>
  `;
}

function generateSendMessagesHtml(state) {
  const placeholder =
    state.chatType === CHAT_TYPES.CHANNEL
      ? '#' + state.currentChannel
      : state.currentDm;

  const formClass =
    state.chatType === CHAT_TYPES.CHANNEL ? 'channel__send' : 'dm__send';

  return `
    <form class=${formClass}>
      <div class="send__message">
        <input class="send__input" type="text" name="message" id="message" placeholder="Message ${placeholder}"/>
        <button class="send__button" type="submit" ${
          state.isSending ? 'disabled' : ''
        }>
        ${
          state.isSending
            ? `<span class="send__spinner"></span> Sending...`
            : 'Send'
        }
        </button>
      </div>
      ${
        state.error !== ''
          ? `<div class="send__error">${state.error}</div>`
          : ''
      }
    </form>
  `;
}

function generateDmsHtml(state) {
  const tipHtml =
    Object.keys(state.dms).length === 0
      ? '<p class=dms__tip>Select a user from the online list above to start a conversation.</p>'
      : '';

  return `
      <p class="dms__title">Direct Messages</p>
      ${tipHtml}
      <ul class="dms__list">
        ${Object.keys(state.dms)
          .map(
            (username) => `
          <li class="dms__dm">
            <button class="dm__button" data-username="${username}">${username}</button>
          </li>
        `
          )
          .join('')}
      </ul>
  `;
}

function generateHeaderHtml(state) {
  const title = state.isLoggedIn ? 'Chat App' : 'Login';
  const logoutHtml = state.isLoggedIn
    ? ` <button class="logout__button" type="submit">Logout</button>`
    : '';

  return `
    <header class="header">
      <h1 class="header__title">${title}</h1>
      ${logoutHtml}
    </header>
  `;
}

function generateFooterHtml() {
  return `
    <footer class="footer">
      <p class="footer__copyright">
        Copyright © 2024 J, Inc. All rights reserved.
      </p>
    </footer>
  `;
}

function scrollToBottom(appEl) {
  const messagesDetailEl = appEl.querySelector('.messages__detail');
  if (!messagesDetailEl) {
    return;
  }
  messagesDetailEl.scrollTo({ top: messagesDetailEl.scrollHeight });
}

export default render;
