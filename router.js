const router = require("express").Router();

const customerRouter = require("./routers/customer.router");
const appointmentRouter = require("./routers/appointment.router");

// REST RESOURCES
router.use('/customers', customerRouter);
router.use('/appointments', appointmentRouter);

// Controllers
const authController = require("./controllers/auth.controller");

//Dos rutas: login y registro
// /singin & /singup
router.post("/signin", authController.signIn);
router.post("/signup", authController.signUp);


module.exports = router;