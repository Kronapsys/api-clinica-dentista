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

router.delete('/pending/:id', async (req, res) => {
  try {
    let id = req.params.id;
    const status = "Cita pendiente eliminada correctamente";
    const appointment = (await appointmentController.destroyPendingAppointments(id));
    res.json({ status, appointment});

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
  } catch(error){
      res.status(500).json({
          error: "error",
          message: "error",
      });
  }
});

router.delete('/:id', async (req, res) => {
  try {
      let id = req.params.id;
      const status = "Cita eliminada"
      const appointment = await appointmentController.destroy(id);

      res.json({ status, appointment});

  } catch(error){
      res.status(500).json({
          error: "error",
          message: "error",
      });
  }
});



router.get("/:id/appointments", async (req, res) => {
  try {
    res.json(await appointmentController.findAllById(req.params.id));
  } catch (error) {
    res.status(500).json({
      error: "error",
      message: "error",
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const appointment = await appointmentController.store(req.body);
    const status = "Cita creada correctamente";
    res.json({ status, appointment });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;