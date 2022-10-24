const mongoose = require("mongoose");

const host = "127.0.0.1";// Se cambia de localhost 0.0.0.0 por esto para poder que acepte
const port = "27017";
const db = "hr";// Aca el nombre de su base de datos

exports.mongoConnect = () => {
    const mongoStringConnecton = `mongodb://${host}:${port}/${db}`;
    mongoose.connect(mongoStringConnecton);
    mongoose.Promise = global.Promise;
    const dbConnection = mongoose.connection;
    dbConnection.on("Error", console.error.bind(console, "Mongodb connection error"))
}