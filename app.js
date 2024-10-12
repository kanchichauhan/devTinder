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
});

app.get('/user', async (req, res) => {
    const userName = req.body.firstName;
    try {
        const user = await User.find({ firstName: userName });
        if (user.length === 0) {
            res.status(404).send('User not found');
        } else {
            res.send(user);
        }
    } catch {
        res.status(404).send('something went wrong');
    }
});

app.get('/feed', async (req, res) => {
    const userName = req.body.firstName;
    try {
        const user = await User.findOne({ firstName: userName});
        res.send(user);
    } catch {
        res.status(404).send('something went wrong');
    }
});

connectDb().then(() => {
    console.log('database connected successfully');
    app.listen(9991, () => {
        console.log('successfully logged in to the port 7776')
    });    
}).catch((err) => {
    console.log('database not connecting');
});
