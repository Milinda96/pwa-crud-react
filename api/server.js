const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4000;
const cors = require('cors');

const mongoose = require('mongoose');
const config = require('./db');
const studentRoute = require('./student.route');

mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
    () => {
        console.log('DB Connected');
    }, err => {
        console.log('DB Error: ', err);
    });
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/student', studentRoute);

app.listen(PORT, () => {
    console.log('Server is running on port: ', PORT);
});