const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
    const filePath = path.join(__dirname, '..', 'About-me-ar.html');
    res.sendFile(filePath);
});

module.exports = router;
