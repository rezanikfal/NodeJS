const mongoose = require('mongoose');

const connectedDB = () => mongoose.connect(process.env.MONGO_URI);
module.exports = connectedDB;