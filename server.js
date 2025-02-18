const express = require('express');
const dotenv = require('dotenv');
const bootcamps = require('./routes/bootcamps');
const logger = require('./middleware/logger');
const connectedDB = require('./config/db');

dotenv.config({path: './config/config.env'});
const app = express();
app.use(express.json())
app.use(logger);
app.use('/api/v1/bootcamps', bootcamps);
connectedDB().then(data => console.log(`Connected to ${data.connection.host}`));

const PORT = process.env.PORT;
app.listen(PORT, () => {
    return console.log(`The server is running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});