<<<<<<< HEAD
const authController = require("./controllers/auth.controller");

const router = require("express").Router();

// Controllers
const authController = require('./controllers/auth.controller');

// const filmRouter = require("./routers/filmRouter");
// const orderRouter = require("./routers/orderRouter");
// const userRouter = require("./routers/userRouter");
=======
const router = require('express').Router();
const customerRouter = require('./routes/customer.router');
const appointmentRouter = require('./routes/appointment.router');

>>>>>>> f70dabb1cef4b18f85d8e6c759a6c83060c061d1

// REST RESOURCES
router.use('/customers',customerRouter);
router.use('/appointments',appointmentRouter);

//Dos rutas: login y registro
// /singin & /singup
router.post('/signin', authController.signIn);
router.post('/signup', authController.signUp);


module.exports = router;