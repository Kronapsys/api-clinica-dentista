const {Appointment} = require("../models");
const { Op } = require('sequelize');

class AppointmentController {

  constructor() {

  }

  async indexAll() {
    return Appointment.findAll();
  }

  async findById(id){
    return Appointment.findOne({where:{id}});
}
  async indexByCustomer(customerId){
    return Appointment.findAll({
      where: {
        customerId,
        date: {
          [Op.gt]: new Date
        }
      }
    });
}

  async pendingAppointments() {
    return Appointment.findAll({
      where: {
        date: {
          [Op.gt]: new Date
        }
      }
    });
  }

  async store(appointment) {
    return Appointment.create(appointment);
  }

  // async destroy(id) {
  //   return Appointment.destroy({ where: {id}});
  // }

  async destroyPendingAppointments(id) {
    return Appointment.destroy({
      where: {
        id:id,
        date: {
          [Op.gt]: new Date
        }
      }
    });
  }

};


let appointmentController = new AppointmentController();
module.exports = appointmentController;