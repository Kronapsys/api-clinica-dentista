const {Customer} = require("../models");
const bcrypt = require("bcrypt");
class CustomerController {
  constructor() {}

  async indexAll() {
    return Customer.find().limit(10);
  }

  async index(id) {
    return Customer.findById(id);
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