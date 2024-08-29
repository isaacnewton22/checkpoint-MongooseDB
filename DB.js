const mongoose = require('mongoose');

require("dotenv").config()

const server = '127.0.0.1:27017'; // REPLACE WITH YOUR DB SERVER

const database = 'myDB';      // REPLACE WITH YOUR DB NAME

const MONGOURI = process.env.MONGO_URI

console.log("MONGOURI : ",MONGOURI)

class Database {
    constructor() {
    this._connect()
    }
_connect() {
        mongoose.connect(MONGOURI)
        .then(() => {
            console.log('Database connection successful')
        })
        .catch(err => {
            console.error('Database connection error : ', err)
        })
    }
}
module.exports = new Database()


