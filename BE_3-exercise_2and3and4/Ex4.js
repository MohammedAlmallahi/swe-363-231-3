const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'));
app.set('view engine', 'html');

// Import routers
const homeArRouter = require('./routes/home-ar');
const aboutRouter = require('./routes/about');
const skillsRouter = require('./routes/skills');
const contactRouter = require('./routes/contact');

// Use routers
// Ex3.js
app.use('/', homeArRouter);
app.use('/home-ar.html', homeArRouter);
app.use('/About-me-ar.html', aboutRouter);
app.use('/Skills-ar.html', skillsRouter);
app.use('/Contact-us-ar.html', contactRouter);
// Middleware to process form submissions
app.post('/submit-form', (req, res) => {
    // Access form data using req.body
    const formData = req.body;

    // Process the form data (for now, just log it)
    console.log('Form Data:', formData);

    // Respond to the user
    res.send('Form submission processed successfully!');
});

app.listen(port, () => console.log(`Server is running on port ${port}`));