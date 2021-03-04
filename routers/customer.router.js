const router = require("express").Router();
const customerController = require("../controllers/customer.controller");
//const appointmentRouter = require("./appointment.router");



// CUSTOMER NESTED RESOURCES
//router.use("/:id/appointments", appointmentRouter);

// CUSTOMER ENDPOINTS
router.get("/", async (req, res) => {
  try {
    res.json(await customerController.indexAll());
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "error",
      message: "error",
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    res.json(await customerController.findById(req.params.id));
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "error",
      message: "error",
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const customer = await customerController.store(req.body);
    const status = "success";
    res.json({ status, customer });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;
