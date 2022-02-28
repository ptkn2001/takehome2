const router = require('express').Router();
const { Physician } = require('../models');

router.get('/', async(req, res) => {
    try {
            let physicians = await Physician.find();      
            res.status(200).json(physicians);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;