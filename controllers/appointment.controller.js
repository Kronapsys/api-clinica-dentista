const {Appointment} = require("../models");

class AppointmentController {
  constructor() {}

  async indexAll(id) {
    return Appointment.findAllById({where:{id}});
  }

  async index(id) {
    return Appointment.findById(id);
  }

  async store(appointment) {
    return Appointment.create(appointment);
  }

  async update(id, appointment) {
    return Appointment.findByIdAndUpdate(id, appointment);
  }

  async destroy(id) {
    return Appointment.findByIdAndRemove(id);
  }


}

let appointmentController = new AppointmentController();
module.exports = appointmentController;