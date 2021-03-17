const router = require("express").Router({ mergeParams: true });
const appointmentController = require("../controllers/appointment.controller");

// APPOINTMENT ENDPOINTS

router.get("/", async (req, res) => {
  try {
    const customerId = req.params.id;
    if (!customerId) {
      res.json(await appointmentController.indexAll());
    } else {
      res.json(await appointmentController.indexAllByCustomerId(customerId));
    }

  } catch (error) {
    res.status(500).json({
      message: "Server error"
    });
  };
});

//Recuperar una cita por id
router.get("/:aid", async (req, res) => {
  try {
    const customerId = req.params.id;
    if (!customerId) {
      res.json(await appointmentController.indexOne(req.params.aid));
    } else {
      res.json(await appointmentController.indexOneByCustomer(customerId, req.params.aid));
    }

  } catch (error) {
    res.status(500).json({
      message: "Server error"
    });
  };
});


//Crear una cita nueva
router.post("/", async (req, res) => {
  try {
    const { date, description, customerId } = req.body;
    const appointment = await appointmentController.createOne({ date, description, customerId });
    res.json(appointment);
  } catch (error) {
    return res.status(500).json({
      message: "Server error"
    });
  };
});

//Eliminar una cita
router.delete("/:aid", async (req, res) => {
  try {
    res.json(await appointmentController.deleteAppointment(req.params.aid));
  } catch (error) {
    return res.status(500).json({
      message: "Server error"
    });
  };

});



module.exports = router;