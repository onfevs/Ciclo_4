var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// Variable de la base de datos
var database = require('./config/database');
// Se agregan las variables
var auth = require('./auth/main_auth');
var cors = require('cors');

var empleadosRouter = require('./routes/empleados.router');
var noviosRouter = require('./routes/novios.router');
var usuarioRouter = require('./routes/usuarios.router');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

// Mongo Connection
database.mongoConnect();
app.use('/usuarios', usuarioRouter);// Se pone aca porque primero se mete a la base de datos y luego se verifica
app.use(auth);// Se coloca aca para que autentique

// Router
// Se crean los routes 
app.use('/empleados', empleadosRouter);//Aca son las credenciales creadas que se pueden ver
app.use('/novios', noviosRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
