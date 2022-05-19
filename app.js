const express = require('express');
const logger = require('morgan');

const skillsRouter = require('./routes/skills');

const app = express();

app.use(logger('dev'));
app.use(express.json());

app.use('/api/skills', skillsRouter);

module.exports = app;
