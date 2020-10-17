const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const key = require('../../config/keys').secret;
const User = require('../../models/User');


/* @route /api/users/register */
router.post('/register', (req, res) => {
    let { name, username, email, password, confirm_password } = req.body;

    if (password !== confirm_password) {
        res.status(400).json({
            msg: "Password does not matched.",

        });
    }

    /* Check for username */
    User.findOne({ username: username }).then(user => {
        if (user) {
            res.status(400).json({
                msg: "User is already taken."
            });
        }
    });

    /* Check for email */
    User.findOne({ email: email }).then(user => {
        if (user) {
            res.status(400).json({
                msg: "Email is already registerd."
            });
        }
    });

    /* Register a new user */
    let newUser = new User({
        name,
        username,
        password,
        email
    });

    /* Hash the password */
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.save().then(user => {
                return res.status(201).json({
                    success: true,
                    msg: "User is now registerd."
                })
            });
        });
    });
});

/* @route /api/users/login */
router.post('/login', (req, res) => {
    User.findOne({ username: req.body.username }).then(user => {
        if (!user) {
            res.status(404).json({
                msg: "User is not found.",
                success: false
            });
        }

        /* If there is a user go to compare a passowrds */
        bcrypt.compare(req.body.password, user.password).then(isMatch => {
            if (isMatch) {
                const payload = {
                    _id: user._id,
                    username: user.username,
                    name: user.name,
                    email: user.email
                }

                /* Add a token to the user using jwt */
                jwt.sign(payload, key, { expiresIn: "604800" }, (err, token) => {
                    res.status(200).json({
                        success: true,
                        user: user,
                        token: `Bearer ${token}`,
                        msg: "You are logged in."
                    })
                });

            } else {
                res.status(404).json({
                    msg: "Incorrect password.",
                    success: false
                });
            }
        });
    });
});

/* @route /api/users/profile */
router.get('/profile', passport.authenticate('jwt', { session: false }), (req, res) => {
    return res.json({
        user: req.user
    });
});


module.exports = router;