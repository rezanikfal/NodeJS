const Bootcamp = require('../models/Bootcamp');

exports.getBootcamps = (req, res, next) => {
    res.status(200).json({success: true, msg: 'Show all bootcamps'});
};

exports.getBootcamp = (req, res, next) => {
    res.status(200).json({success: true, msg: `get bootcamp id: ${req.params.id}`});
};

exports.createBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.create(req.body);

        res.status(201).json({
            success: true,
            data: bootcamp
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            message: err.message
        });
    }
};

exports.updateBootcamps = (req, res, next) => {
    res.status(200).json({success: true, msg: `Update bootcamp id: ${req.params.id}`});
};

exports.deleteBootcamps = (req, res, next) => {
    res.status(200).json({success: true, msg: `Delete bootcamp id: ${req.params.id}`});
};