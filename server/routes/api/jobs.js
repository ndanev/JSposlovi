const express = require('express');
const mongodb = require('mongodb');
const router = express.Router();

router.get('/', async (req, res) => {
    res.send('sdasd');
});

module.exports = router;