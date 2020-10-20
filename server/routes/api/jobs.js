const express = require('express');
const router = express.Router();
const Job = require('../../models/Job');

router.post('/create-job', async (req, res) => {
    try {
        const job = await Job.create(req.body);
        res.send(job);
    } catch (err) {
        console.log(err);
        res.status(500).send({
            error: "An error has occured trying create a new job."
        })
    }
});

router.get('/single-job/:jobId', async (req, res) => {
    try {
        const job = await Job.findById(req.params.jobId);
        res.send(job);
    } catch (err) {
        console.log(err);
        res.status(500).send({
            error: "An error has occured trying to get a job."
        })
    }
});

router.get('/get-jobs', async (req, res) => {
    try {
        const jobs = await Job.find();
        res.send(jobs);
    } catch (err) {
        console.log(err);
        res.status(500).send({
            error: "An error has occured trying to get a jobs."
        })
    }
});

module.exports = router;