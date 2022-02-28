const router = require('express').Router();
const physicianRoutes = require('./physicianRoutes');
const scheduleRoutes = require('./ScheduleRoutes');


router.use('/api/physicians', physicianRoutes);
router.use('/api/schedules', scheduleRoutes);

module.exports = router;