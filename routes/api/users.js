const express = require('express');
const router = express.Router();

const User = require('../../models/User');

// @route GET api/users/test
router.get('/test', (req, res, next) => res.json({msg: "Users Works"}));

// @route GET api/users/register
router.post('/register', (req, res, next) => {
    User.findOne({ email: req.body.email });
});

module.exports = router;