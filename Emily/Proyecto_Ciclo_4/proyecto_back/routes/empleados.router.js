// Se crea un enrutador con el controller con el mismo nombre

const express = require('express');
const router = express.Router()
// Traer todo lo que tiene empleados controller
const empleadosController = require('../controllers/empleados.controller')

router.post("/", empleadosController.create)
module.exports = router