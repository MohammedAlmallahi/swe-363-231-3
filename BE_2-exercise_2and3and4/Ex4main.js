const customEmitter = require('./Ex4eventEmitter');
const { simulateUserEvents } = require('./Ex4userSimulation');

customEmitter.on('userLoggedIn', (data) => {
  console.log(`User ${data.userId} logged in at ${data.timestamp}`);
});

customEmitter.on('userLoggedOut', (data) => {
  console.log(`User ${data.userId} logged out at ${data.timestamp}`);
});

simulateUserEvents();