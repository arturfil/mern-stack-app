const express = require('express');
const router = express.Router();

// @route GET api/posts/test
router.get('/test', (req, res, next) => res.json({ msg: "Posts Works" }));

module.exports = router;