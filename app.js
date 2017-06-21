/* eslint no-underscore-dangle: ["error", { "allow": ["__express"] }] */
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const hbs = require('hbs');
const path = require('path');
const helpers = require('./app/util/handlebars_helpers.js');
const routes = require('./app/routes.js');
const config = require('./app/config');

const app = express();

function SetupHandlebars() {
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'html');
  app.engine('html', hbs.__express);

  helpers.setup();
}

function SetupLoggingParsingPublic() {
  if (process.env.NODE_ENV !== 'test') {
    app.use(logger('dev'));
  }
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, 'public')));
}

function SetupServer() {
  SetupHandlebars();
  SetupLoggingParsingPublic();
}

function SetupRoutes() {
  routes.setup(app);
}

function RunServer() {
  app.listen(config.port, config.ip, () => {
    console.log(`WebServer is listening on [${config.ip}][${config.port}] in [${process.env.NODE_ENV}] mode`);
  });
}

SetupServer();
SetupRoutes();
RunServer();
