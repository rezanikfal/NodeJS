const Bootcamp = require('../models/Bootcamp');

exports.getBootcamps = async (req, res, next) => {
    try {
        const bootcamps = await Bootcamp.find();

        res.status(200).json({
            success: true,
            count: bootcamps.length,
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

        if (!bootcamp) {
            return res.status(404).json({
                success: false,
                message: 'Bootcamp not found'
            });
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

exports.updateBootcamps = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body,
            {
                new: true, //Returns the updated document.
                runValidators: true
            });

        if (!bootcamp) {
            return res.status(404).json({
                success: false,
                message: 'Bootcamp not found'
            });
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

exports.deleteBootcamps = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);

        if (!bootcamp) {
            return res.status(404).json({
                success: false,
                message: 'Bootcamp not found'
            });
        }

        res.status(200).json({
            success: true,
            data: {}
        });

    } catch (err) {
        res.status(400).json({
            success: false,
            message: err.message
        });
    }
};