const router = require("express").Router();
const appointmentController = require("../controllers/appointment.controller");

// APPOINTMENT ENDPOINTS

router.get('/', async (req, res) => {
  try {
    res.json(await appointmentController.indexAll());
  } catch(error){
    res.status(500).json({
      error: "error",
      message: "error",
    });
  }
});

router.get('/pending', async (req, res) => {
  try {
    res.json(await appointmentController.pendingAppointments());
  } catch(error){
    res.status(500).json({
      error: "error",
      message: "error",
    });
  }
});




router.get('/:id', async (req, res) => {
  try {
      let id = req.params.id;
      res.json(await appointmentController.findById(id));
  }catch(error){
      res.status(500).json({
          error: "error",
          message: "error",
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