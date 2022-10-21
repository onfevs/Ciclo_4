const Empleado = require("../models/empleados.model");

let response = {
    msg: "",
    exito: false
}
// Metodo para crear
exports.create = function (req, res) {
    let empleado = new Empleado({
        nombre: req.body.nombre,
        apellido_p: req.body.apellido_p,
        apellido_m: req.body.apellido_m,
        telefono: req.body.telefono,
        mail: req.body.mail,
        direccion: req.body.direccion
    })

    empleado.save(function (err) {
        if (err) {
            console.error(err),
                response.exito = false,
                response.msg = "Error al guardar el empleado"
            res.json(response)
            return;
        }

        response.exito = true,
            response.msg = "El empleado se guardó correctamente"
        res.json(response)
    })
}
// Metodo para buscar
exports.find = function (req, res) {
    Empleado.find(function (err, empleados) {
        res.json(empleados)
    })
}
// Metodo para buscar por ID
exports.findOne = function (req, res) {
    Empleado.findOne({ _id: req.params.id }, function (err, empleado) {
        res.json(empleado)
    })
}
// Metodo para Actualizar
exports.update = function (req, res) {
    let empleado = ({
        nombre: req.body.nombre,
        apellido_p: req.body.apellido_p,
        apellido_m: req.body.apellido_m,
        telefono: req.body.telefono,
        mail: req.body.mail,
        direccion: req.body.direccion
    })

    Empleado.findByIdAndUpdate(req.params.id, { $set: empleado }, function (err) {
        if (err) {
            console.error(err),
                response.exito = false,
                response.msg = "Error al actualizar el empleado"
            res.json(response)
            return;
        }

        response.exito = true,
            response.msg = "El empleado se actualizó correctamente"
        res.json(response)
    })
}

// Metodo para Borrar
exports.remove = function (req, res) {
    Empleado.findByIdAndRemove({ _id: req.params.id }, function (err) {
        if (err) {
            console.error(err),
                response.exito = false,
                response.msg = "Error al eliminar el empleado"
            res.json(response)
            return;
        }

        response.exito = true,
            response.msg = "El empleado se ha eliminado correctamente"
        res.json(response)
    })
}