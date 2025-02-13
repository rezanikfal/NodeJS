const logger = (req, res, next) => {
    console.log(`${req.method} ${req.protocol}://${req.hostname}${req.url} ${res.statusCode }`);
    next();
};

module.exports = logger;