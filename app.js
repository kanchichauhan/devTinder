const express = require('express');
const connectDb = require('./src/config/database')
const { auth } = require('./src/auth');
const User = require('./src/models/user');

const app = express();

app.use(express.json())

app.post('/signup', async (req, res) => {
    // creating a new instance of the user model
    const user = new User(req.body);

    try {
        await user.save();
        res.send('user added successfully');
    } catch (err) {
        res.status(400).send('data not saved');
    }
    
})

connectDb().then(() => {
    console.log('database connected successfully');
    app.listen(9991, () => {
        console.log('successfully logged in to the port 7776')
    });    
}).catch((err) => {
    console.log('database not connecting');
});
