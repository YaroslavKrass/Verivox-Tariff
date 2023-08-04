const Joi = require('joi');

module.exports = {
  schemas: Joi.object({
    consumption: Joi.number().required()
  })
};
