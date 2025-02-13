exports.getBootcamps = (req, res, next) => {
    res.status(200).json({success: true, msg: 'Show all bootcamps'});
};

exports.getBootcamp = (req, res, next) => {
    res.status(200).json({success: true, msg: `get bootcamp id: ${req.params.id}`});
};

exports.createBootcamps = (req, res, next) => {
    res.status(200).json({success: true, msg: 'Create new bootcamp'});
};

exports.updateBootcamps = (req, res, next) => {
    res.status(200).json({success: true, msg: `Update bootcamp id: ${req.params.id}`});
};

exports.deleteBootcamps = (req, res, next) => {
    res.status(200).json({success: true, msg: `Delete bootcamp id: ${req.params.id}`});
};