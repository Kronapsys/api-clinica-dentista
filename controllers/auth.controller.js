const { Customer } = require('../models/index');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


module.exports = {

    // Login
    signIn(req, res) {

        // Hacemos login con el email y el password
        let { email, password } = req.body;

        // Buscar Customer
        Customer.findOne({
            where: {
                email: email
            }
        }).then(customer => {

            if(!customer) {
                res.status(404).json({ mesg: "Usuario con este email no encontrado" });
            } else {

                if(bcrypt.compareSync(password, customer.password)) {

                    // Creamos token
                    let token = jwt.sign({customer: customer}, "geekhubs", {
                        expiresIn: "24h"
                    });

                    res.json({
                        customer: customer,
                        token: token
                    })

                    // Devolvemos token
                } else {

                    // Acceso no autorizado
                    res.status(401).json({ msg: "Contraseña incorrecta"});
                }
            }
        }).catch(err => {
            res.status(500).json(err);
        })

    },

    // Registro
    signUp(req, res) {

        //Encriptamos la contraseña
        let password = bcrypt.hashSync(req.body.password, 10);

        // Crear un usuario
        Customer.create({
            name: req.body.name,
            surname: req.body.surname,
            address: req.body.address,
            telephone: req.body.telephone,
            email: req.body.email,
            password: password
        }).then(customer => {

            // Cuando creamos el usuario creamos el token
            let token = jwt.sign({customer: customer}, "geekhubs", {
                expiresIn: "24h"
            });

            res.json({
                customer: customer,
                token: token
            });

        }).catch(err => {
            res.status(500).json(err);
        });
    }
};