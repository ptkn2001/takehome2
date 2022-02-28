const router = require('express').Router();
const { Schedule } = require('../models');

router.get('/', async(req, res) => {
    try {
            let schedules = await Schedule.find();      
            res.status(200).json(schedules);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.get('/:id', async(req, res) => {
    try {
            let schedules = await Schedule.find({physician: req.params.id});      
            res.status(200).json(schedules);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;