// Dependencies
const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const skillsRouter = require('./routes/skills');

// Create App Object
const app = express();

// Middleware
app.use(cors());
app.use(logger('dev'));
app.use(express.json());

// Route
app.use('/api/skills', skillsRouter);

module.exports = app;
