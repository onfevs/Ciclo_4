const mongoose = require("mongoose");

const host = "0.0.0.0";// Se cambia de localhost por esto para poder que acepte
const port = "27017";
const db = "hr";// Aca el nombre de su base de datos

exports.mongoConnect = () => {
    const mongoStringConnecton = `mongodb://${host}:${port}/${db}`;
    mongoose.connect(mongoStringConnecton);
    mongoose.Promise = global.Promise;
    const dbConnection = mongoose.connection;
    dbConnection.on("Error", console.error.bind(console, "Mongodb connection error"))
}