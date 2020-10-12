const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost/jobsdb', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.json());
app.use(cors());

const jobs = require('./routes/api/jobs');

app.use('/api/jobs', jobs);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Serve sterted on port ${port}`));