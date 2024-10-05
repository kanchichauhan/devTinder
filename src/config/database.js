const mongoose = require('mongoose');

var url = "mongodb+srv://kanchiChauhan:Kanchi123@namastenode.pkyks.mongodb.net/devTinder";
console.log('itssssss runnninnnggg')
const connectDb = async () => {
    await mongoose.connect(url);
}

module.exports = connectDb