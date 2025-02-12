const express = require('express');
const dotenv = require('dotenv')

dotenv.config({path: './config/config.env'})
const app = express();

const PORT = process.env.PORT

app.get('/api/v1/bootcamps', (req, res) => {
    res.status(200).json({success: true, msg: 'Show all bootcamps'})
})

app.get('/api/v1/bootcamps/:id', (req, res) => {
    res.status(200).json({success: true, msg: `get bootcamp id: ${req.params.id}`})
})

app.post('/api/v1/bootcamps', (req, res) => {
    res.status(200).json({success: true, msg: 'Create new bootcamp'})
})

app.put('/api/v1/bootcamps/:id', (req, res) => {
    res.status(200).json({success: true, msg: `Update bootcamp id: ${req.params.id}`})
})

app.delete('/api/v1/bootcamps/:id', (req, res) => {
    res.status(200).json({success: true, msg: `Delete bootcamp id: ${req.params.id}`})
})


app.listen(PORT, () => {
    return console.log(`The server is running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});