const express = require('express');

const app = express();

app.use('/hello', (req, res) => {
    res.send('hello hello hello!')
})
app.use('/test', (req, res) => {
    res.send('NAMASTE');
});

app.listen(7777, () => {
    console.log('successfully logged in to the port 7777')
});
