const router = require("express").Router();
const appointmentController = require("../controllers/appointment.controller");

// APPOINTMENT ENDPOINTS

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    res.json(await appointmentController.index(id));
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
});

router.get("/:id/appointments", async (req, res) => {
  try {
    console.log(req.params);
    res.json(await appointmentController.findAllById(req.params.id));
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
    const appointment = await appointmentController.store(req.body);
    const status = "success";
    res.json({ status, appointment });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;