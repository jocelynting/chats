/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CHAT_TYPES: () => (/* binding */ CHAT_TYPES),
/* harmony export */   CLIENT: () => (/* binding */ CLIENT),
/* harmony export */   MESSAGES: () => (/* binding */ MESSAGES),
/* harmony export */   SERVER: () => (/* binding */ SERVER)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var SERVER = {
  AUTH_MISSING: 'auth-missing',
  AUTH_INSUFFICIENT: 'auth-insufficient',
  REQUIRED_USERNAME: 'required-username',
  CHANNEL_NOT_FOUND: 'channel-not-found',
  RECIPIENT_NOT_FOUND: 'recipient-not-found',
  REQUIRED_MESSAGE: 'required-message'
};
var CLIENT = {
  NETWORK_ERROR: 'network-error',
  NO_SESSION: 'no-session'
};
var MESSAGES = _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, CLIENT.NETWORK_ERROR, 'Trouble connecting to the network. Please try again.'), SERVER.AUTH_MISSING, 'Authentication is missing. Please log in again.'), SERVER.AUTH_INSUFFICIENT, 'Your username/password combination does not match any records, please try again.'), SERVER.REQUIRED_USERNAME, 'Please enter a valid (letters and/or numbers) username.'), SERVER.CHANNEL_NOT_FOUND, 'Please post a message to a valid channel.'), SERVER.RECIPIENT_NOT_FOUND, 'Please post a message to a valid recipient.'), SERVER.REQUIRED_MESSAGE, 'Please enter a message.'), "default", 'Something went wrong. Please try again');
var CHAT_TYPES = {
  CHANNEL: 'channel',
  DM: 'dm'
};

/***/ }),

/***/ "./src/listeners.js":
/*!**************************!*\
  !*** ./src/listeners.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addAbilityToChangeChannel: () => (/* binding */ addAbilityToChangeChannel),
/* harmony export */   addAbilityToDM: () => (/* binding */ addAbilityToDM),
/* harmony export */   addAbilityToLogin: () => (/* binding */ addAbilityToLogin),
/* harmony export */   addAbilityToLogout: () => (/* binding */ addAbilityToLogout),
/* harmony export */   addAbilityToSendChannelMessage: () => (/* binding */ addAbilityToSendChannelMessage),
/* harmony export */   addAbilityToSendDMMessage: () => (/* binding */ addAbilityToSendDMMessage),
/* harmony export */   pollingUsersAndMessages: () => (/* binding */ pollingUsersAndMessages)
/* harmony export */ });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services */ "./src/services.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state */ "./src/state.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render */ "./src/render.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./src/constants.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }




function addAbilityToLogin(_ref) {
  var state = _ref.state,
    appEl = _ref.appEl;
  appEl.addEventListener('submit', function (e) {
    if (!e.target.classList.contains('login')) {
      return;
    }
    e.preventDefault();
    var username = appEl.querySelector('.login__input').value;
    (0,_state__WEBPACK_IMPORTED_MODULE_1__.setLoading)(true);
    (0,_render__WEBPACK_IMPORTED_MODULE_2__["default"])({
      state: state,
      appEl: appEl
    });
    (0,_services__WEBPACK_IMPORTED_MODULE_0__.fetchLogin)(username).then(function (data) {
      var users = data.users,
        channels = data.channels,
        messages = data.messages,
        dms = data.dms;
      (0,_state__WEBPACK_IMPORTED_MODULE_1__.login)(username);
      (0,_state__WEBPACK_IMPORTED_MODULE_1__.setOnlineUsers)(users);
      (0,_state__WEBPACK_IMPORTED_MODULE_1__.setChannels)(channels);
      (0,_state__WEBPACK_IMPORTED_MODULE_1__.setChannelMessages)(messages);
      (0,_state__WEBPACK_IMPORTED_MODULE_1__.setAllDmMessages)(dms);
      (0,_state__WEBPACK_IMPORTED_MODULE_1__.setError)('');
      (0,_state__WEBPACK_IMPORTED_MODULE_1__.setLoading)(false);
      (0,_render__WEBPACK_IMPORTED_MODULE_2__["default"])({
        state: state,
        appEl: appEl
      });
      setTimeout(function () {
        return pollingUsersAndMessages({
          state: state,
          appEl: appEl
        });
      }, 5000);
    })["catch"](function (err) {
      (0,_state__WEBPACK_IMPORTED_MODULE_1__.setError)((err === null || err === void 0 ? void 0 : err.error) || 'ERROR');
      (0,_render__WEBPACK_IMPORTED_MODULE_2__["default"])({
        state: state,
        appEl: appEl
      });
    });
  });
}
function addAbilityToLogout(_ref2) {
  var state = _ref2.state,
    appEl = _ref2.appEl;
  appEl.addEventListener('click', function (e) {
    if (!e.target.classList.contains('logout__button')) {
      return;
    }
    e.preventDefault();
    (0,_state__WEBPACK_IMPORTED_MODULE_1__.setLoading)(true);
    (0,_render__WEBPACK_IMPORTED_MODULE_2__["default"])({
      state: state,
      appEl: appEl
    });
    (0,_services__WEBPACK_IMPORTED_MODULE_0__.fetchLogout)().then(function () {
      (0,_state__WEBPACK_IMPORTED_MODULE_1__.logout)();
      (0,_render__WEBPACK_IMPORTED_MODULE_2__["default"])({
        state: state,
        appEl: appEl
      });
    })["catch"](function (err) {
      (0,_state__WEBPACK_IMPORTED_MODULE_1__.setError)((err === null || err === void 0 ? void 0 : err.error) || 'ERROR');
      (0,_render__WEBPACK_IMPORTED_MODULE_2__["default"])({
        state: state,
        appEl: appEl
      });
    });
  });
}
function addAbilityToChangeChannel(_ref3) {
  var state = _ref3.state,
    appEl = _ref3.appEl;
  appEl.addEventListener('click', function (e) {
    if (!e.target.classList.contains('channel__button')) {
      return;
    }
    var channel = e.target.dataset.channel;
    (0,_services__WEBPACK_IMPORTED_MODULE_0__.fetchChannelMessages)(channel).then(function (data) {
      var messages = data.messages;
      (0,_state__WEBPACK_IMPORTED_MODULE_1__.setCurrentChannel)(channel);
      (0,_state__WEBPACK_IMPORTED_MODULE_1__.setChannelMessages)(messages);
      (0,_state__WEBPACK_IMPORTED_MODULE_1__.setError)('');
      (0,_render__WEBPACK_IMPORTED_MODULE_2__["default"])({
        state: state,
        appEl: appEl
      });
    })["catch"](function (err) {
      (0,_state__WEBPACK_IMPORTED_MODULE_1__.setError)((err === null || err === void 0 ? void 0 : err.error) || 'ERROR');
      (0,_render__WEBPACK_IMPORTED_MODULE_2__["default"])({
        state: state,
        appEl: appEl
      });
    });
  });
}
function addAbilityToSendChannelMessage(_ref4) {
  var state = _ref4.state,
    appEl = _ref4.appEl;
  appEl.addEventListener('submit', function (e) {
    if (!e.target.classList.contains('channel__send')) {
      return;
    }
    e.preventDefault();
    var message = appEl.querySelector('.send__input').value;
    (0,_state__WEBPACK_IMPORTED_MODULE_1__.setSending)(true);
    (0,_render__WEBPACK_IMPORTED_MODULE_2__["default"])({
      state: state,
      appEl: appEl
    });
    (0,_services__WEBPACK_IMPORTED_MODULE_0__.fetchAddChannelMessage)(state.currentChannel, message).then(function (data) {
      var newMessage = data.newMessage;
      (0,_state__WEBPACK_IMPORTED_MODULE_1__.addChannelMessage)(newMessage);
      (0,_state__WEBPACK_IMPORTED_MODULE_1__.setSending)(false);
      (0,_state__WEBPACK_IMPORTED_MODULE_1__.setError)('');
      (0,_render__WEBPACK_IMPORTED_MODULE_2__["default"])({
        state: state,
        appEl: appEl
      });
    })["catch"](function (err) {
      (0,_state__WEBPACK_IMPORTED_MODULE_1__.setError)((err === null || err === void 0 ? void 0 : err.error) || 'ERROR');
      (0,_render__WEBPACK_IMPORTED_MODULE_2__["default"])({
        state: state,
        appEl: appEl
      });
    });
  });
}
function addAbilityToDM(_ref5) {
  var state = _ref5.state,
    appEl = _ref5.appEl;
  appEl.addEventListener('click', function (e) {
    if (!e.target.classList.contains('dm__button')) {
      return;
    }
    var username = e.target.dataset.username;
    (0,_services__WEBPACK_IMPORTED_MODULE_0__.fetchDmWith)(username).then(function (data) {
      var messages = data.messages;
      (0,_state__WEBPACK_IMPORTED_MODULE_1__.setDmMessages)(username, messages);
      (0,_state__WEBPACK_IMPORTED_MODULE_1__.setError)('');
      (0,_render__WEBPACK_IMPORTED_MODULE_2__["default"])({
        state: state,
        appEl: appEl
      });
    })["catch"](function (err) {
      (0,_state__WEBPACK_IMPORTED_MODULE_1__.setError)((err === null || err === void 0 ? void 0 : err.error) || 'ERROR');
      (0,_render__WEBPACK_IMPORTED_MODULE_2__["default"])({
        state: state,
        appEl: appEl
      });
    });
  });
}
function addAbilityToSendDMMessage(_ref6) {
  var state = _ref6.state,
    appEl = _ref6.appEl;
  appEl.addEventListener('submit', function (e) {
    if (!e.target.classList.contains('dm__send')) {
      return;
    }
    e.preventDefault();
    var message = appEl.querySelector('.send__input').value;
    (0,_state__WEBPACK_IMPORTED_MODULE_1__.setSending)(true);
    (0,_render__WEBPACK_IMPORTED_MODULE_2__["default"])({
      state: state,
      appEl: appEl
    });
    (0,_services__WEBPACK_IMPORTED_MODULE_0__.fetchAddDmMessage)(state.currentDm, message).then(function (data) {
      var newMessage = data.newMessage;
      (0,_state__WEBPACK_IMPORTED_MODULE_1__.addDmMessage)(newMessage);
      (0,_state__WEBPACK_IMPORTED_MODULE_1__.setSending)(false);
      (0,_state__WEBPACK_IMPORTED_MODULE_1__.setError)('');
      (0,_render__WEBPACK_IMPORTED_MODULE_2__["default"])({
        state: state,
        appEl: appEl
      });
    })["catch"](function (err) {
      (0,_state__WEBPACK_IMPORTED_MODULE_1__.setError)((err === null || err === void 0 ? void 0 : err.error) || 'ERROR');
      (0,_render__WEBPACK_IMPORTED_MODULE_2__["default"])({
        state: state,
        appEl: appEl
      });
    });
  });
}
function pollingUsersAndMessages(_ref7) {
  var state = _ref7.state,
    appEl = _ref7.appEl;
  if (!state.isLoggedIn) {
    return;
  }
  refreshUsersAndMessages({
    state: state,
    appEl: appEl
  }).then(function () {
    setTimeout(function () {
      pollingUsersAndMessages({
        state: state,
        appEl: appEl
      });
    }, 5000);
  });
}
function refreshUsersAndMessages(_ref8) {
  var state = _ref8.state,
    appEl = _ref8.appEl;
  return Promise.all([(0,_services__WEBPACK_IMPORTED_MODULE_0__.fetchUsers)(), (0,_services__WEBPACK_IMPORTED_MODULE_0__.fetchUserDirectMessages)(), state.chatType === _constants__WEBPACK_IMPORTED_MODULE_3__.CHAT_TYPES.CHANNEL ? (0,_services__WEBPACK_IMPORTED_MODULE_0__.fetchChannelMessages)(state.currentChannel) : (0,_services__WEBPACK_IMPORTED_MODULE_0__.fetchDmWith)(state.currentDm)]).then(function (_ref9) {
    var _ref10 = _slicedToArray(_ref9, 3),
      users = _ref10[0].users,
      dms = _ref10[1].dms,
      messages = _ref10[2].messages;
    (0,_state__WEBPACK_IMPORTED_MODULE_1__.setOnlineUsers)(users);
    (0,_state__WEBPACK_IMPORTED_MODULE_1__.setAllDmMessages)(dms);
    state.chatType === _constants__WEBPACK_IMPORTED_MODULE_3__.CHAT_TYPES.CHANNEL ? (0,_state__WEBPACK_IMPORTED_MODULE_1__.setChannelMessages)(messages) : (0,_state__WEBPACK_IMPORTED_MODULE_1__.setDmMessages)(state.currentDm, messages);
    (0,_state__WEBPACK_IMPORTED_MODULE_1__.setRefreshing)(true);
    (0,_render__WEBPACK_IMPORTED_MODULE_2__["default"])({
      state: state,
      appEl: appEl
    });
    (0,_state__WEBPACK_IMPORTED_MODULE_1__.setRefreshing)(false);
  })["catch"](function (err) {
    (0,_state__WEBPACK_IMPORTED_MODULE_1__.setError)((err === null || err === void 0 ? void 0 : err.error) || 'ERROR');
    (0,_state__WEBPACK_IMPORTED_MODULE_1__.setRefreshing)(false);
    (0,_render__WEBPACK_IMPORTED_MODULE_2__["default"])({
      state: state,
      appEl: appEl
    });
  });
}

/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.js */ "./src/constants.js");

function render(_ref) {
  var state = _ref.state,
    appEl = _ref.appEl;
  if (state.isLoggedIn && state.isRefreshing) {
    renderUsersAndMessages(state, appEl);
  } else {
    var html = "\n      ".concat(generateHeaderHtml(state), "\n      <main class=\"main\">\n        ").concat(state.isLoggedIn ? generateChatHtml(state) : generateLoginHtml(state), "\n      </main>\n      ").concat(generateFooterHtml(), "\n    ");
    appEl.innerHTML = html;
    if (state.isLoggedIn) {
      scrollToBottom(appEl);
    }
  }
}
function renderUsersAndMessages(state, appEl) {
  var usersHtml = generateOnlineUsersHtml(state);
  var dmHtml = generateDmsHtml(state);
  var messagesListHtml = generateMessageListHtml(state);
  var usersEl = appEl.querySelector('.users');
  var dmsEl = appEl.querySelector('.dms');
  var messagesListEl = appEl.querySelector('.messages__list');
  usersEl.innerHTML = usersHtml;
  dmsEl.innerHTML = dmHtml;
  messagesListEl.innerHTML = messagesListHtml;
  scrollToBottom(appEl);
}
function generateSpinnerHtml() {
  return "\n    <div class=\"login__spinner\">\n      <div class=\"spinner\"></div>\n      <p class=\"spinner__title\">Loading...</p>\n    </div>\n  ";
}
function generateLoginHtml(state) {
  if (state.isLoading) {
    return generateSpinnerHtml();
  }
  return "\n    <form class=\"login\">\n      <div class=\"login__username\">\n        <label for=\"username\" class=\"login__label\">Enter your name: </label>\n        <input class=\"login__input\" type=\"text\" name=\"username\" id=\"username\" placeholder=\"username\"/>\n        ".concat(state.error !== '' ? "<div class=\"status__error\">".concat(state.error, "</div>") : '', "\n      </div>\n      <button class=\"login__submit\" type=\"submit\">Login</button>\n    </form>\n  ");
}
function generateChatHtml(state) {
  if (state.isLoading) {
    return generateSpinnerHtml();
  }
  var title = state.chatType === _constants_js__WEBPACK_IMPORTED_MODULE_0__.CHAT_TYPES.CHANNEL ? '💭 # ' + state.currentChannel : '🍻 ' + state.currentDm;
  return "\n    <div class=\"chat\">\n      <div class=\"chat__lists\">\n        <div class=\"users\">\n          ".concat(generateOnlineUsersHtml(state), "\n        </div>\n        <div class=\"channels\">\n          ").concat(generateChannelsHtml(state), "\n        </div>\n        <div class=\"dms\">\n          ").concat(generateDmsHtml(state), "\n        </div>\n      </div>\n      <div class=\"chat__messages\">\n      <div class=\"messages\">\n        <p class=\"messages__title\">").concat(title, "</p>\n        <div class=\"messages__detail\">\n          ").concat(generateMessageListHtml(state), "\n        </div>\n      </div>\n        ").concat(generateSendMessagesHtml(state), " \n      </div>\n    </div>\n  ");
}
function generateOnlineUsersHtml(state) {
  return "\n      <p class=\"users__title\">Online Users</p>\n      <ul class=\"users__list\">\n        ".concat(state.onlineUsers.map(function (username, index) {
    return "\n          <li class=\"users__user\">\n            <button class=\"dm__button\" data-username=\"".concat(username, "\">\n              ").concat(index === 0 ? '👑 ' + username : username, "\n            </button>\n          </li>\n        ");
  }).join(''), "\n      </ul>\n  ");
}
function generateChannelsHtml(state) {
  return "\n    <p class=\"channels__title\">Channels</p>\n    <ul class=\"channels__list\">\n      ".concat(state.channels.map(function (channel) {
    return "\n          <li class=\"channels__channel\">\n            <button class=\"channel__button\" data-channel=\"".concat(channel, "\"># ").concat(channel, "</button>\n          </li>\n          ");
  }).join(''), "\n    </ul>\n  ");
}
function generateMessageListHtml(state) {
  var messages = state.chatType === _constants_js__WEBPACK_IMPORTED_MODULE_0__.CHAT_TYPES.CHANNEL ? state.channelMessages[state.currentChannel] || [] : state.dms[state.currentDm] || [];
  var tipHtml = messages.length === 0 ? state.chatType === _constants_js__WEBPACK_IMPORTED_MODULE_0__.CHAT_TYPES.CHANNEL ? "<p class=\"messages__tip\">\uD83E\uDD23 No messages yet. Start the conversation!</p>" : '' : '';
  return "\n      <div class=\"messages__list\">\n        ".concat(tipHtml, "\n        ").concat(messages.map(function (message) {
    return "\n            <div class=\"message\">\n              <div class=\"message__info\">\n                <p class=\"message__sender\">".concat(message.sender, "</p>\n                <p class=\"message__timestamp\">").concat(message.timestamp, "</p>\n              </div>\n              <p class=\"message__content\">").concat(message.message, "</p>\n            </div>\n            ");
  }).join(''), "\n      </div>\n  ");
}
function generateSendMessagesHtml(state) {
  var placeholder = state.chatType === _constants_js__WEBPACK_IMPORTED_MODULE_0__.CHAT_TYPES.CHANNEL ? '#' + state.currentChannel : state.currentDm;
  var formClass = state.chatType === _constants_js__WEBPACK_IMPORTED_MODULE_0__.CHAT_TYPES.CHANNEL ? 'channel__send' : 'dm__send';
  return "\n    <form class=".concat(formClass, ">\n      <div class=\"send__message\">\n        <input class=\"send__input\" type=\"text\" name=\"message\" id=\"message\" placeholder=\"Message ").concat(placeholder, "\"/>\n        <button class=\"send__button\" type=\"submit\" ").concat(state.isSending ? 'disabled' : '', ">\n        ").concat(state.isSending ? "<span class=\"send__spinner\"></span> Sending..." : 'Send', "\n        </button>\n      </div>\n      ").concat(state.error !== '' ? "<div class=\"send__error\">".concat(state.error, "</div>") : '', "\n    </form>\n  ");
}
function generateDmsHtml(state) {
  var tipHtml = Object.keys(state.dms).length === 0 ? '<p class=dms__tip>Select a user from the online list above to start a conversation.</p>' : '';
  return "\n      <p class=\"dms__title\">Direct Messages</p>\n      ".concat(tipHtml, "\n      <ul class=\"dms__list\">\n        ").concat(Object.keys(state.dms).map(function (username) {
    return "\n          <li class=\"dms__dm\">\n            <button class=\"dm__button\" data-username=\"".concat(username, "\">").concat(username, "</button>\n          </li>\n        ");
  }).join(''), "\n      </ul>\n  ");
}
function generateHeaderHtml(state) {
  var title = state.isLoggedIn ? 'Chat App' : 'Login';
  var logoutHtml = state.isLoggedIn ? " <button class=\"logout__button\" type=\"submit\">Logout</button>" : '';
  return "\n    <header class=\"header\">\n      <h1 class=\"header__title\">".concat(title, "</h1>\n      ").concat(logoutHtml, "\n    </header>\n  ");
}
function generateFooterHtml() {
  return "\n    <footer class=\"footer\">\n      <p class=\"footer__copyright\">\n        Copyright \xA9 2024 J, Inc. All rights reserved.\n      </p>\n    </footer>\n  ";
}
function scrollToBottom(appEl) {
  var messagesDetailEl = appEl.querySelector('.messages__detail');
  if (!messagesDetailEl) {
    return;
  }
  messagesDetailEl.scrollTo({
    top: messagesDetailEl.scrollHeight
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (render);

/***/ }),

/***/ "./src/services.js":
/*!*************************!*\
  !*** ./src/services.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchAddChannelMessage: () => (/* binding */ fetchAddChannelMessage),
/* harmony export */   fetchAddDmMessage: () => (/* binding */ fetchAddDmMessage),
/* harmony export */   fetchChannelMessages: () => (/* binding */ fetchChannelMessages),
/* harmony export */   fetchChannels: () => (/* binding */ fetchChannels),
/* harmony export */   fetchDefaultChannelMessages: () => (/* binding */ fetchDefaultChannelMessages),
/* harmony export */   fetchDmWith: () => (/* binding */ fetchDmWith),
/* harmony export */   fetchLogin: () => (/* binding */ fetchLogin),
/* harmony export */   fetchLogout: () => (/* binding */ fetchLogout),
/* harmony export */   fetchSession: () => (/* binding */ fetchSession),
/* harmony export */   fetchUserDirectMessages: () => (/* binding */ fetchUserDirectMessages),
/* harmony export */   fetchUsers: () => (/* binding */ fetchUsers)
/* harmony export */ });
function fetchSession() {
  return fetchData('/api/v1/session', {
    method: 'GET'
  });
}
function fetchLogin(username) {
  return fetchData('/api/v1/session', {
    method: 'POST',
    headers: new Headers({
      'content-type': 'application/json'
    }),
    body: JSON.stringify({
      username: username
    })
  });
}
function fetchLogout() {
  return fetchData('/api/v1/session', {
    method: 'DELETE'
  });
}
function fetchUsers() {
  return fetchData('/api/v1/users', {
    method: 'GET'
  });
}
function fetchChannels() {
  return fetchData('/api/v1/channels', {
    method: 'GET'
  });
}
function fetchDefaultChannelMessages() {
  return fetchChannelMessages('general');
}
function fetchChannelMessages(channel) {
  return fetchData("/api/v1/channels/".concat(channel), {
    method: 'GET'
  });
}
function fetchAddChannelMessage(channel, message) {
  return fetchData("/api/v1/channels/".concat(channel), {
    method: 'POST',
    headers: new Headers({
      'content-type': 'application/json'
    }),
    body: JSON.stringify({
      message: message
    })
  });
}
function fetchUserDirectMessages() {
  return fetchData("/api/v1/dms/", {
    method: 'GET'
  });
}
function fetchDmWith(username) {
  return fetchData("/api/v1/dms/".concat(username), {
    method: 'GET'
  });
}
function fetchAddDmMessage(username, message) {
  return fetchData("/api/v1/dms/".concat(username), {
    method: 'POST',
    headers: new Headers({
      'content-type': 'application/json'
    }),
    body: JSON.stringify({
      message: message
    })
  });
}
function fetchData(url) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return fetch(url, options)["catch"](function () {
    return Promise.reject({
      error: 'network-error'
    });
  }).then(function (response) {
    if (response.ok) {
      return response.json();
    }
    return response.json()["catch"](function (error) {
      return Promise.reject({
        error: error
      });
    }).then(function (err) {
      return Promise.reject(err);
    });
  });
}

/***/ }),

/***/ "./src/state.js":
/*!**********************!*\
  !*** ./src/state.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addChannelMessage: () => (/* binding */ addChannelMessage),
/* harmony export */   addDmMessage: () => (/* binding */ addDmMessage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   login: () => (/* binding */ login),
/* harmony export */   logout: () => (/* binding */ logout),
/* harmony export */   setAllDmMessages: () => (/* binding */ setAllDmMessages),
/* harmony export */   setChannelMessages: () => (/* binding */ setChannelMessages),
/* harmony export */   setChannels: () => (/* binding */ setChannels),
/* harmony export */   setCurrentChannel: () => (/* binding */ setCurrentChannel),
/* harmony export */   setDmMessages: () => (/* binding */ setDmMessages),
/* harmony export */   setDmUsers: () => (/* binding */ setDmUsers),
/* harmony export */   setError: () => (/* binding */ setError),
/* harmony export */   setLoading: () => (/* binding */ setLoading),
/* harmony export */   setOnlineUsers: () => (/* binding */ setOnlineUsers),
/* harmony export */   setRefreshing: () => (/* binding */ setRefreshing),
/* harmony export */   setSending: () => (/* binding */ setSending)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/constants.js");
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

var state = {
  isLoggedIn: false,
  username: '',
  onlineUsers: [],
  channels: [],
  currentChannel: 'general',
  channelMessages: {},
  dms: {},
  dmUsers: {},
  currentDm: '',
  chatType: _constants__WEBPACK_IMPORTED_MODULE_0__.CHAT_TYPES.CHANNEL,
  isLoading: false,
  isRefreshing: false,
  isSending: false,
  error: ''
};
function login(username) {
  state.isLoggedIn = true;
  state.username = username;
  state.isLoading = false;
}
function setOnlineUsers(users) {
  var otherUsers = users.filter(function (user) {
    return user !== state.username;
  });
  state.onlineUsers = [state.username].concat(_toConsumableArray(otherUsers));
}
function setChannels(channels) {
  state.channels = channels;
}
function setCurrentChannel(channel) {
  state.currentChannel = channel;
}
function setChannelMessages(messages) {
  state.chatType = _constants__WEBPACK_IMPORTED_MODULE_0__.CHAT_TYPES.CHANNEL;
  state.channelMessages[state.currentChannel] = messages;
}
function addChannelMessage(message) {
  state.chatType = _constants__WEBPACK_IMPORTED_MODULE_0__.CHAT_TYPES.CHANNEL;
  state.channelMessages[state.currentChannel].push(message);
}
function setDmUsers(users) {
  state.dmUsers = users;
}
function setAllDmMessages(messages) {
  state.dms = messages;
}
function setDmMessages(username, messages) {
  state.chatType = _constants__WEBPACK_IMPORTED_MODULE_0__.CHAT_TYPES.DM;
  state.currentDm = username;
  state.dms[username] = messages;
}
function addDmMessage(message) {
  state.chatType = _constants__WEBPACK_IMPORTED_MODULE_0__.CHAT_TYPES.DM;
  state.dms[state.currentDm].push(message);
}
function setLoading(isLoading) {
  state.isLoading = isLoading;
}
function setRefreshing(isRefreshing) {
  state.isRefreshing = isRefreshing;
}
function setSending(isSending) {
  state.isSending = isSending;
}
function logout() {
  state.isLoggedIn = false;
  state.username = '';
  state.onlineUsers = [];
  state.channels = [];
  state.currentChannel = 'general';
  state.channelMessages = {};
  state.dms = {};
  state.dmUsers = {};
  state.currentDm = '';
  state.chatType = _constants__WEBPACK_IMPORTED_MODULE_0__.CHAT_TYPES.CHANNEL;
  state.isLoading = false;
  state.isRefreshing = false;
  state.isSending = false;
  state.error = '';
}
function setError(error) {
  if (!error) {
    state.error = '';
    return;
  }
  state.isLoading = false;
  state.isSending = false;
  if (error === _constants__WEBPACK_IMPORTED_MODULE_0__.SERVER.AUTH_MISSING) {
    state.isLoggedIn = false;
    state.currentChannel = 'general';
  }
  state.error = _constants__WEBPACK_IMPORTED_MODULE_0__.MESSAGES[error] || _constants__WEBPACK_IMPORTED_MODULE_0__.MESSAGES["default"];
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (state);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/chats.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/constants.js");
/* harmony import */ var _listeners__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listeners */ "./src/listeners.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services */ "./src/services.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./render */ "./src/render.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./state */ "./src/state.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }





var appEl = document.querySelector('#app');
(0,_render__WEBPACK_IMPORTED_MODULE_3__["default"])({
  state: _state__WEBPACK_IMPORTED_MODULE_4__["default"],
  appEl: appEl
});
(0,_listeners__WEBPACK_IMPORTED_MODULE_1__.addAbilityToLogin)({
  state: _state__WEBPACK_IMPORTED_MODULE_4__["default"],
  appEl: appEl
});
(0,_listeners__WEBPACK_IMPORTED_MODULE_1__.addAbilityToLogout)({
  state: _state__WEBPACK_IMPORTED_MODULE_4__["default"],
  appEl: appEl
});
(0,_listeners__WEBPACK_IMPORTED_MODULE_1__.addAbilityToChangeChannel)({
  state: _state__WEBPACK_IMPORTED_MODULE_4__["default"],
  appEl: appEl
});
(0,_listeners__WEBPACK_IMPORTED_MODULE_1__.addAbilityToSendChannelMessage)({
  state: _state__WEBPACK_IMPORTED_MODULE_4__["default"],
  appEl: appEl
});
(0,_listeners__WEBPACK_IMPORTED_MODULE_1__.addAbilityToDM)({
  state: _state__WEBPACK_IMPORTED_MODULE_4__["default"],
  appEl: appEl
});
(0,_listeners__WEBPACK_IMPORTED_MODULE_1__.addAbilityToSendDMMessage)({
  state: _state__WEBPACK_IMPORTED_MODULE_4__["default"],
  appEl: appEl
});
checkForSession();
function checkForSession() {
  (0,_services__WEBPACK_IMPORTED_MODULE_2__.fetchSession)().then(function (session) {
    (0,_state__WEBPACK_IMPORTED_MODULE_4__.login)(session.username);
    (0,_render__WEBPACK_IMPORTED_MODULE_3__["default"])({
      state: _state__WEBPACK_IMPORTED_MODULE_4__["default"],
      appEl: appEl
    });
    return Promise.all([(0,_services__WEBPACK_IMPORTED_MODULE_2__.fetchUsers)(), (0,_services__WEBPACK_IMPORTED_MODULE_2__.fetchChannels)(), (0,_services__WEBPACK_IMPORTED_MODULE_2__.fetchChannelMessages)(_state__WEBPACK_IMPORTED_MODULE_4__["default"].currentChannel), (0,_services__WEBPACK_IMPORTED_MODULE_2__.fetchUserDirectMessages)()]);
  })["catch"](function (err) {
    if ((err === null || err === void 0 ? void 0 : err.error) === _constants__WEBPACK_IMPORTED_MODULE_0__.SERVER.AUTH_MISSING) {
      return Promise.reject({
        error: _constants__WEBPACK_IMPORTED_MODULE_0__.CLIENT.NO_SESSION
      });
    }
    return Promise.reject(err);
  }).then(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 4),
      users = _ref2[0].users,
      channels = _ref2[1].channels,
      messages = _ref2[2].messages,
      dms = _ref2[3].dms;
    (0,_state__WEBPACK_IMPORTED_MODULE_4__.setOnlineUsers)(users);
    (0,_state__WEBPACK_IMPORTED_MODULE_4__.setChannels)(channels);
    (0,_state__WEBPACK_IMPORTED_MODULE_4__.setChannelMessages)(messages);
    (0,_state__WEBPACK_IMPORTED_MODULE_4__.setAllDmMessages)(dms);
    (0,_render__WEBPACK_IMPORTED_MODULE_3__["default"])({
      state: _state__WEBPACK_IMPORTED_MODULE_4__["default"],
      appEl: appEl
    });
    setTimeout(function () {
      (0,_listeners__WEBPACK_IMPORTED_MODULE_1__.pollingUsersAndMessages)({
        state: _state__WEBPACK_IMPORTED_MODULE_4__["default"],
        appEl: appEl
      });
    }, 5000);
  })["catch"](function (err) {
    if ((err === null || err === void 0 ? void 0 : err.error) === _constants__WEBPACK_IMPORTED_MODULE_0__.CLIENT.NO_SESSION) {
      (0,_state__WEBPACK_IMPORTED_MODULE_4__.logout)();
      (0,_render__WEBPACK_IMPORTED_MODULE_3__["default"])({
        state: _state__WEBPACK_IMPORTED_MODULE_4__["default"],
        appEl: appEl
      });
      return;
    }
    (0,_state__WEBPACK_IMPORTED_MODULE_4__.setError)((err === null || err === void 0 ? void 0 : err.error) || 'ERROR');
    (0,_render__WEBPACK_IMPORTED_MODULE_3__["default"])({
      state: _state__WEBPACK_IMPORTED_MODULE_4__["default"],
      appEl: appEl
    });
  });
}
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map