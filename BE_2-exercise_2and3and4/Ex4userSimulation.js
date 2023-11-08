const customEmitter = require('./Ex4eventEmitter');

function simulateUserLogin() {
  const userId = Math.floor(Math.random() * 1000) + 1;
  const timestamp = new Date().toISOString();
  console.log(`${timestamp}: USER_${userId} logged in`);
  customEmitter.emit('userLoggedIn', { userId, timestamp });
}

function simulateUserLogout() {
  const userId = Math.floor(Math.random() * 1000) + 1;
  const timestamp = new Date().toISOString();
  console.log(`${timestamp}: USER_${userId} logged out`);
  customEmitter.emit('userLoggedOut', { userId, timestamp });
}

function simulateUserEvents() {
  const randomInterval = Math.random() * (2 - 0.1) + 0.1;
  setTimeout(() => {
    simulateUserLogin();
    simulateUserLogout();
    simulateUserEvents();
  }, randomInterval * 1000);
}

module.exports = { simulateUserEvents };