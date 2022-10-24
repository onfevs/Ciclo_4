const express = require("express");
const router = express.Router();
const empleadosController = require("../controllers/empleados.controller");

// Crear un nuevo usuario
router.post("/", empleadosController.create)
// Obtener todos los usuarios
router.get("/", empleadosController.find)
// Obtener por ID
router.get("/:id", empleadosController.findOne)
// Actualizar usuarios
router.put("/:id", empleadosController.update)
// Eliminar usuarios
router.delete("/:id", empleadosController.remove)

module.exports = router