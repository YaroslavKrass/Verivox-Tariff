const { logger } = require("../logger/logger");

module.exports = (req, res, next) => {
    logger.error('Not Found');
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
};