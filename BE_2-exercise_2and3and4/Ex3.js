const readline = require('readline');

const predefinedResponses = {
  'What is your name?': 'My name is Chatbot.',
  'How are you today?': 'I am just a computer program, so I don\'t have feelings.',
  'How tall is the Eiffel Tower?': '330 meters (1,083 ft).',
  'exit': 'Goodbye! Have a great day!'
};

function chat() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('You: ', (userInput) => {
    if (userInput.toLowerCase() === 'exit' || userInput.toLowerCase() === 'quit') {
      console.log('Chatbot: Have a great day <3');
      rl.close();
    } else {
      const response = predefinedResponses[userInput] || 'Chatbot: I do not understand. Can you please ask another question?';
      console.log(`Chatbot: ${response}`);
      rl.close();
      chat();
    }
  });
}

console.log('Chatbot: Hello, I am Chatbot you ask my anything and I will answer it. else,You can type "exit" or "quit" to end.');

chat();
