const authController = require("./controllers/auth.controller");

const router = require("express").Router();

// Controllers
const authController = require('./controllers/auth.controller');

// const filmRouter = require("./routers/filmRouter");
// const orderRouter = require("./routers/orderRouter");
// const userRouter = require("./routers/userRouter");

// router.use("/films", filmRouter);
// router.use("/orders", orderRouter);
// router.use("/users", userRouter);

//Dos rutas: login y registro
// /singin & /singup
router.post('/signin', authController.signIn);
router.post('/signup', authController.signUp);


module.exports = router;