const Joi = require('joi');
const { errorMessages } = require("../../../common/constants/errors.const");

module.exports = {
  validateSchema: (schema) => {
    return (req, res, next) => {
      try {
        const result = schema.validate(req.query, { abortEarly: false });

        if (result.error) {
          throw new Error(errorMessages.VALIDATION_ERROR);
        }
    
        next();
      } catch (error) {
        next(error);
      }
    }
  }
};
