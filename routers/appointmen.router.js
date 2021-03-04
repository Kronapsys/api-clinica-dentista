const router = require("express").Router();
const appointmentController = require("../controllers/appointment.controller");

// APPOINTMENT ENDPOINTS

router.get("/", async (req, res) => {
  try {
    const id = req.params.id;
    if (id) {
      res.json(await appointmentController.findAllById(req.params.id));
    } else {
      res.json(await appointmentController.indexAll());
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "error",
      message: "error",
    });
  }
});

router.get("/:appointmentId", async (req, res) => {
  try {
    console.log(req.params);
    res.json({});
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "error",
      message: "error",
    });
  }
});

module.exports = router;
