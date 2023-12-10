const express = require('express');
const app = express();
const port = 3000; // You can choose any port you like

// Middleware to serve static files like CSS and images
app.use(express.static('public'));

// Set the view engine to render HTML
app.set('view engine', 'html');

// Routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/home-ar.html');
});

app.get('/home-ar.html', (req, res) => {
    res.sendFile(__dirname + '/home-ar.html');
});

app.get('/About-me-ar.html', (req, res) => {
    res.sendFile(__dirname + '/About-me-ar.html');
});

app.get('/Skills-ar.html', (req, res) => {
    res.sendFile(__dirname + '/Skills-ar.html');
});

app.get('/Contact-us-ar.html', (req, res) => {
    res.sendFile(__dirname + '/Contact-us-ar.html');
});
// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});