const express = require('express');
const app = express();
const port = 3000;

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

app.listen(port, () => console.log(`Server is running on port ${port}`));
