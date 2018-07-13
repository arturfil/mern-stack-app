const express = require('express');
const router = express.Router();

// @route GET api/register/test
router.post('/test', (req, res, next) => res.json({ msg: "Users Works" }));

module.exports = router;