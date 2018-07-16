const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Load profile & user model
const Profile = require('../../models/Profile');
const User = require('../../models/User');

// @route GET api/profile
router.get('/', passport.authenticate('jwt', {session: false}), (req, res, next) => {
    const errors = {};

    Profile.findOne({ user: req.user.id })
        .then(profile => {
            if(!profile) {
                errors.noprofile = 'There is no prfile for this user';
                return res.status(404).json(errors);
            }
            res.json(profile);
        })
        .catch(err => res.status(404).json(err));
});


module.exports = router;