const express = require('express');

const app = express();

app.get('/test', (req, res) => {
    res.send('TEST GET');
});
app.post('/test', (req, res) => {
    res.send('TEST POST');
});
app.delete('/test', (req, res) => {
    res.send('TEST DELETE');
});

app.listen(8001, () => {
    console.log('successfully logged in to the port 7776')
});
