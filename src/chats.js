import { SERVER, CLIENT } from './constants';
import {
  addAbilityToLogin,
  addAbilityToLogout,
  addAbilityToChangeChannel,
  addAbilityToSendChannelMessage,
  addAbilityToDM,
  addAbilityToSendDMMessage,
  pollingUsersAndMessages,
} from './listeners';
import {
  fetchSession,
  fetchUsers,
  fetchChannels,
  fetchChannelMessages,
  fetchDmUsers,
  fetchUserDirectMessages,
} from './services';
import render from './render';
import state, {
  login,
  logout,
  setOnlineUsers,
  setChannels,
  setChannelMessages,
  setDmUsers,
  setError,
  setAllDmMessages,
} from './state';

const appEl = document.querySelector('#app');
render({ state, appEl });
addAbilityToLogin({ state, appEl });
addAbilityToLogout({ state, appEl });
addAbilityToChangeChannel({ state, appEl });
addAbilityToSendChannelMessage({ state, appEl });
addAbilityToDM({ state, appEl });
addAbilityToSendDMMessage({ state, appEl });
checkForSession();

function checkForSession() {
  fetchSession()
    .then((session) => {
      login(session.username);
      render({ state, appEl });
      return Promise.all([
        fetchUsers(),
        fetchChannels(),
        fetchChannelMessages(state.currentChannel),
        fetchUserDirectMessages(),
      ]);
    })
    .catch((err) => {
      if (err?.error === SERVER.AUTH_MISSING) {
        return Promise.reject({ error: CLIENT.NO_SESSION });
      }
      return Promise.reject(err);
    })
    .then(([{ users }, { channels }, { messages }, { dms }]) => {
      setOnlineUsers(users);
      setChannels(channels);
      setChannelMessages(messages);
      setAllDmMessages(dms);
      render({ state, appEl });

      setTimeout(() => {
        pollingUsersAndMessages({ state, appEl });
      }, 5000);
    })
    .catch((err) => {
      if (err?.error === CLIENT.NO_SESSION) {
        logout();
        render({ state, appEl });
        return;
      }

      setError(err?.error || 'ERROR');
      render({ state, appEl });
    });
}
