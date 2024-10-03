const express = require('express');
const { auth } = require('./src/auth');

const app = express();

app.use('/user', auth, (req, res) => {
    res.send('please enter correct token')
});

app.listen(7001, () => {
    console.log('successfully logged in to the port 7776')
});
