import {
  fetchSession,
  fetchLogin,
  fetchLogout,
  fetchChannel,
  fetchAddChannelMessage,
  fetchUserDirectMessages,
  fetchDmWith,
  fetchAddDmMessage,
  fetchChannelMessages,
  fetchUsers,
} from './services';
import {
  login,
  logout,
  setOnlineUsers,
  setChannels,
  setChannelMessages,
  setCurrentChannel,
  setAllDmMessages,
  setDmMessages,
  setError,
  addChannelMessage,
  addDmMessage,
  setLoading,
  setRefreshing,
  setSending,
} from './state';
import render from './render';
import { CHAT_TYPES } from './constants';

export function addAbilityToLogin({ state, appEl }) {
  appEl.addEventListener('submit', (e) => {
    if (!e.target.classList.contains('login')) {
      return;
    }
    e.preventDefault();

    const username = appEl.querySelector('.login__input').value;
    setLoading(true);
    render({ state, appEl });
    fetchLogin(username)
      .then((data) => {
        const { users, channels, messages, dms } = data;
        login(username);
        setOnlineUsers(users);
        setChannels(channels);
        setChannelMessages(messages);
        setAllDmMessages(dms);
        setError('');
        setLoading(false);
        render({ state, appEl });

        setTimeout(() => pollingUsersAndMessages({ state, appEl }), 5000);
      })
      .catch((err) => {
        setError(err?.error || 'ERROR');
        render({ state, appEl });
      });
  });
}

export function addAbilityToLogout({ state, appEl }) {
  appEl.addEventListener('click', (e) => {
    if (!e.target.classList.contains('logout__button')) {
      return;
    }
    e.preventDefault();
    setLoading(true);
    render({ state, appEl });
    fetchLogout()
      .then(() => {
        logout();
        render({ state, appEl });
      })
      .catch((err) => {
        setError(err?.error || 'ERROR');
        render({ state, appEl });
      });
  });
}

export function addAbilityToChangeChannel({ state, appEl }) {
  appEl.addEventListener('click', (e) => {
    if (!e.target.classList.contains('channel__button')) {
      return;
    }
    const channel = e.target.dataset.channel;
    fetchChannelMessages(channel)
      .then((data) => {
        const { messages } = data;
        setCurrentChannel(channel);
        setChannelMessages(messages);
        setError('');
        render({ state, appEl });
      })
      .catch((err) => {
        setError(err?.error || 'ERROR');
        render({ state, appEl });
      });
  });
}

export function addAbilityToSendChannelMessage({ state, appEl }) {
  appEl.addEventListener('submit', (e) => {
    if (!e.target.classList.contains('channel__send')) {
      return;
    }
    e.preventDefault();

    const message = appEl.querySelector('.send__input').value;
    setSending(true);
    render({ state, appEl });
    fetchAddChannelMessage(state.currentChannel, message)
      .then((data) => {
        const { newMessage } = data;
        addChannelMessage(newMessage);
        setSending(false);
        setError('');
        render({ state, appEl });
      })
      .catch((err) => {
        setError(err?.error || 'ERROR');
        render({ state, appEl });
      });
  });
}

export function addAbilityToDM({ state, appEl }) {
  appEl.addEventListener('click', (e) => {
    if (!e.target.classList.contains('dm__button')) {
      return;
    }

    const username = e.target.dataset.username;
    fetchDmWith(username)
      .then((data) => {
        const { messages } = data;
        setDmMessages(username, messages);
        setError('');
        render({ state, appEl });
      })
      .catch((err) => {
        setError(err?.error || 'ERROR');
        render({ state, appEl });
      });
  });
}

export function addAbilityToSendDMMessage({ state, appEl }) {
  appEl.addEventListener('submit', (e) => {
    if (!e.target.classList.contains('dm__send')) {
      return;
    }
    e.preventDefault();

    const message = appEl.querySelector('.send__input').value;
    setSending(true);
    render({ state, appEl });
    fetchAddDmMessage(state.currentDm, message)
      .then((data) => {
        const { newMessage } = data;
        addDmMessage(newMessage);
        setSending(false);
        setError('');
        render({ state, appEl });
      })
      .catch((err) => {
        setError(err?.error || 'ERROR');
        render({ state, appEl });
      });
  });
}

export function pollingUsersAndMessages({ state, appEl }) {
  if (!state.isLoggedIn) {
    return;
  }

  refreshUsersAndMessages({ state, appEl }).then(() => {
    setTimeout(() => {
      pollingUsersAndMessages({ state, appEl });
    }, 5000);
  });
}

function refreshUsersAndMessages({ state, appEl }) {
  return Promise.all([
    fetchUsers(),
    fetchUserDirectMessages(),
    state.chatType === CHAT_TYPES.CHANNEL
      ? fetchChannelMessages(state.currentChannel)
      : fetchDmWith(state.currentDm),
  ])
    .then(([{ users }, { dms }, { messages }]) => {
      setOnlineUsers(users);
      setAllDmMessages(dms);
      state.chatType === CHAT_TYPES.CHANNEL
        ? setChannelMessages(messages)
        : setDmMessages(state.currentDm, messages);
      setRefreshing(true);
      render({ state, appEl });
      setRefreshing(false);
    })
    .catch((err) => {
      setError(err?.error || 'ERROR');
      setRefreshing(false);
      render({ state, appEl });
    });
}
