
const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');

const TariffController = require('./controller');
const { validateSchema, schemas } = require('./validator');

router.get('/',
  validateSchema(schemas),
  asyncHandler(TariffController.getTariffs())
);

module.exports = router;