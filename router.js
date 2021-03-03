const authController = require("./controllers/auth.controller");

const router = require("express").Router();

// Controllers
const authController = require('./controllers/auth.controller');

// const filmRouter = require("./routers/filmRouter");
// const orderRouter = require("./routers/orderRouter");
// const userRouter = require("./routers/userRouter");

const router = require('express').Router();
const customerRouter = require('./routes/customer.router');
const appointmentRouter = require('./routes/appointment.router');



// REST RESOURCES
router.use('/customers',customerRouter);
router.use('/appointments',appointmentRouter);

//Dos rutas: login y registro
// /singin & /singup
router.post('/signin', authController.signIn);
router.post('/signup', authController.signUp);


module.exports = router;