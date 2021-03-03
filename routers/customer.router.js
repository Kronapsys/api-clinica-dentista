const router = require('express').Router();
const appointmentRouter = require('./appointment.router');

const customerController = require('../controllers/customer.controller');

// CUSTOMER NESTED RESOURCES
router.use('/:id/appointments', appointmentRouter);

// CUSTOMER ENDPOINTS
router.get('/',async (req,res) => {
    try{
        res.json(await customerController.indexAll());
    }catch(error){
        console.log(error);
        res.status(500).json({
            error: 'error',
            message: 'error'
        })
    }
});

router.get('/:id',async (req,res) => {
    try{
        res.json(await customerController.findById(req.params.id));
    }catch(error){
        console.log(error);
        res.status(500).json({
            error: 'error',
            message: 'error'
        })
    }
})



module.exports = router;