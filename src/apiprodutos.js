const express = require('express');
const apiRoute = require('./routes/api');

const app = express();
app.use('/api', apiRoute);

app.listen('5000');