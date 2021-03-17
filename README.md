# DENTAL CLINIC API 🦷
This API tries to emulate in a simplified form a dental clinic and it's appointments.

## start
Write the following commands line: </br>
- npm i -> Install all dependencies needed from package.json. You can take a look <a href="#dependencies"> here </a> </br>
- docker-compose up -> We have here mysql and phpMyAdmin services.
- docker rm -f $(docker ps -aq) -> If you want to delete those services once installed </br>
- npm start -> Server up on port 3001.

## DB design 🗃️
![db_model_1](https://i.imgur.com/QW4bFMr.png) </br>
We wanted to start with a basic example (KISS), with a clean design for in a future continue adding more specifications.

## CRUD with postman
Here you can check CRUD methods we have implemented:</br>
[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/6811309086d48fd811da)

## endpoints
POST: </br>
-Customer register: http://localhost:3001/signup </br>
Customer login: http://localhost:3001/signin </br>
Customer appointment: http://localhost:3001/appointments </br>
GET: </br>
All customers registered: http://localhost:3001/customers/ </br>
Get a customer by ID: http://localhost:3001/customers/:id </br>
Show all appointments (pending and not): http://localhost:3001/appointments </br>
Show only pending appointments: http://localhost:3001/appointments/pending </br>
Show only pending appointments from an specific customer: http://localhost:3001/appointments/customers/:customerId </br>
DELETE: </br>
Delete a customer by ID: http://localhost:3001/customers/:id </br>
Delete only pending appointments: http://localhost:3001/appointments/pending/:id </br>





## technologies used 🛠️
![JS](https://i.imgur.com/lDoNwKn.png)
![nodejs](https://i.imgur.com/JsJ02dB.png)
![sequelize](https://i.imgur.com/iHrvOYd.png)
![postman](https://i.imgur.com/cXur21z.png)
![docker](https://i.imgur.com/QuJ9kSb.png)
![phpmyadmin](https://i.imgur.com/UR7pSGr.png)
![mysql](https://i.imgur.com/RNewBCi.png)


## dependencies

- bcrypt </br>
- express </br>
- install </br>
- jsonwebtoken </br>
- mysql2 </br>
- nodemon </br>
- sequelize </br>

## authors 🧐
<a href="https://github.com/vicGeo">@vicGeo</a> </br>
<a href="https://github.com/Kronapsys">@Kronapsys</a> </br>

<p align="center">
🔝 <a href="#start"> TO THE TOP </a> 🔝
</p>