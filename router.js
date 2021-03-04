const router = require("express").Router();

//const authController = require("./controllers/auth.controller");

const customerRouter = require("./routers/customer.router");
router.use('/customers', customerRouter);

// Controllers
const authController = require("./controllers/auth.controller");
//const customerController = require("./controllers/customer.controller");

// const filmRouter = require("./routers/filmRouter");
// const orderRouter = require("./routers/orderRouter");
// const userRouter = require("./routers/userRouter");

//const customerRouter = require("./routes/customer.router");
//const appointmentRouter = require("./routes/appointment.router");

// REST RESOURCES
//router.use("/customers", customerRouter);
//router.use("/appointments", appointmentRouter);

//Dos rutas: login y registro
// /singin & /singup
router.post("/signin", authController.signIn);
router.post("/signup", authController.signUp);

module.exports = router;