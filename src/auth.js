const auth = (req, res, next) => {
    const token = 'aditi'
    const authorisation = token === 'aditi';
    if (authorisation) {
        res.send('Hi kanchi');
    } else {
        next();
    }
}

module.exports = {
    auth
};