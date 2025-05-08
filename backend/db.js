const mongoose = require('mongoose');
require('dotenv').config()
const dbUrl = process.env.DB_URL || 'mongodb://127.0.0.1:27017/classroom';

const connectToMongo = () => {
    mongoose.set("strictQuery", false);
    mongoose.connect(dbUrl)
        .then(() => {
            console.log("DATABASE CONNECTED", mongoose.connection.host)
        })
        .catch(err => {
            console.log("OH NO ERROR!!!!")
            console.log(err)
        })
}

module.exports = connectToMongo;