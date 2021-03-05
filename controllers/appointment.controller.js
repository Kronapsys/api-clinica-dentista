const {Appointment} = require("../models");

class AppointmentController {

  constructor() {

  }

  async indexAll() {
    return Appointment.findAll();
  }

  async findById(id){
    return Appointment.findOne({where:{id}});
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