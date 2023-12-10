const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
    // Use 'path.join' to construct the correct file path
    const filePath = path.join(__dirname, '..', 'home-ar.html');
    res.sendFile(filePath);
});

module.exports = router;
