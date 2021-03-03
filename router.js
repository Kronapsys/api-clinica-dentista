const router = require('express').Router();
const customerRouter = require('./routes/customer.router');
const appointmentRouter = require('./routes/appointment.router');


// REST RESOURCES
router.use('/customers',customerRouter);
router.use('/appointments',appointmentRouter);

module.exports = router;