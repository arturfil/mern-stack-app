const express = require('express');
const router = express.Router();

// @route GET api/profile/test
router.get('/test', (req, res, next) => res.json({ msg: "Profile Works" }));

module.exports = router;