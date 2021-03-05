const {Customer} = require("../models");
class CustomerController {
  constructor() {}

  async indexAll() {
    return Customer.findAll();
  }

  async findById(id){
    return Customer.findOne({where:{id}});
}

  async store(customer) {
    return Customer.create(customer);
  }

  async update(id, customer) {
    return Customer.findByIdAndUpdate(id, customer);
  }

  async destroy(id) {
    return Customer.findByIdAndRemove(id);
  }
}

let customerController = new CustomerController();
module.exports = customerController;