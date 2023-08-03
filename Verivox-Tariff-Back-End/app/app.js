const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();

app.use(cors());
app.use(express.json())

// Init client-api routes
const tariffRouter = require('./client_api/tariff/router');

// Custom Middlewares
const notFoundHandler = require('./common/middlewares/not-found-handler');
const errorHandler = require('./common/middlewares/error-handler');

// Logging
morgan.format('logformat', '[:date[web]] ":method :url" :status :res[content-length] - :response-time ms');
app.use(morgan('logformat'));


// client-api routes
app.use('/client-api/tariffs', tariffRouter);


app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;