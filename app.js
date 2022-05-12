 const express = require('express');
 const path = require('path');
 const cookieParser = require('cookie-parser');
 const logger = require('morgan');

 const indexRouter = require('./src/router/index');
 const usersRouter = require('./src/router/users');
 const servicosRouter = require('./src/router/servicos')

 const app = express();

 app.use(logger('dev'));
 app.use(express.json());
 app.use(express.urlencoded({
     extended: false
 }));


 app.use(cookieParser());
 // app.use(express.static(path.join(__dirname, 'public')));

 app.use('/', indexRouter);
 app.use('/users', usersRouter);
 app.use('/servicos', servicosRouter)

 module.exports = app;