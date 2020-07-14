const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const AWS = require('aws-sdk');
var fs = require('fs');
const path = require('path');
const app = express();
const cors = require('cors');
const cookieSession = require('cookie-session');
const axios = require('axios');
const seedDB = require("./seed");
const router = express.Router;
const PORT = process.env.PORT || 5000;
const passport = require('passport');
const session = require("express-session");
require('dotenv').config();
require('./passport-setup');

// connect mongo atlas db
mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log(`DB connected!`);
}).catch((err) => {
    console.error(err);
});

// to tell app that our data will be exchanged in the form of json
// app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());
app.use(cors());
// app.use(cookieSession({
//     name: 'seekh-react-backend-app',
//     keys: ['key1', 'key2']
// }))

app.use(session({
    secret: 'mySecret',
    resave: false,
    saveUninitialized: false
}));
// API routes
const mcqRoutes = require('./routes/mcqs');
app.use('/mcqs', mcqRoutes);

const chapterRoutes = require('./routes/chapters');
app.use('/chapters', chapterRoutes);

const userRoutes = require('./routes/users');
app.use('/users', userRoutes);

// 404 errors
// app.use((req, res, next) => {
//     const error = new Error('URL not found');
//     error.status = 404;
//     next(error);
// });

// error handling
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.send({
        message: `Error: ${error.message}`,
        error: error
    });
});

seedDB();

// trying google auth here

// middleware to check if the user is logged in or no
const isLoggedIn = (req, res, next) => {
    if (req.session.user) {
        next();
    } else {
        console.log(`no user`);
        res.sendStatus(401);
    }
}

app.get('/failed', (req, res) => {
    res.send(`You failed to login`)
});

app.get('/good', isLoggedIn, (req, res) => {
    res.send(`You logged in! MR. ${req.session.user.userDisplayName}`)
})

app.get('/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}));

app.get('/google/callback', passport.authenticate('google', {
    failureRedirect: '/failed'
}), function (req, res) {
    // Successful authentication, redirect home.
    req.session.user = req.user;
    // console.log(req.user);
    res.redirect('/good');
});

app.get('logout', (req, res) => {
    req.session = null;
    req.logout();
    res.redirect('/');
})
// ending google auth here

// trying
app.get('/', (req, res) => {
    res.send(`HI!`);
});

// start server
app.listen(PORT, () => {
    console.log(`Netflix server running on: ${PORT}`);
});