const Bootcamp = require('../models/Bootcamp');

exports.getBootcamps = async (req, res, next) => {
    try {
        const bootcamps = await Bootcamp.find();

        res.status(200).json({
            success: true,
            data: bootcamps
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
};

exports.getBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findById(req.params.id);

        if (!bootcamp){
            return res.status(404).json({
                success: false,
                message: 'Bootcamp not found'
            })
        }

        res.status(200).json({
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