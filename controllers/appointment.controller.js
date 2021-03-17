const { Appointment } = require("../models");
const { Op } = require('sequelize');

class AppointmentController {
  constructor() {

  }


  async indexAll() {
    return Appointment.findAll();
  };
  // Citas de un customer
  async indexAllByCustomerId(customerId) {
    return Appointment.findAll({ where: { customerId  } })
  }

  async indexOne(id) {
    return Appointment.findOne({ where: { id } });
  };
  async indexOneByCustomer(customerId, id) {
    const appointment = await Appointment.findOne({ where: { id } });
    if (appointment.customerId == customerId) {
      return appointment;
    } else {
      return {};
    }
  };

  //Crear una cita
  async createOne(appointment) {
    return Appointment.create(appointment);
  };

  //Eliminar una cita
  async deleteAppointment(id) {
    return Appointment.destroy({ where: { id } });
  };

};

let appointmentController = new AppointmentController();

module.exports = appointmentController;