const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const renderFile = require('ejs').renderFile;

class Server {
  //_app;
 // _port = process.env.PORT || 8080;
  //_ip = process.env.IP;

  constructor() {
    this._app = express();
    this._app.engine('html', renderFile);
    this._app.set('view engine', 'ejs');
    this._app.use(express.static('public'));
    this._app.use(bodyParser.json());
    this._app.use(bodyParser.urlencoded({ extended: true, }));
    this._app.use(session({
      secret: 'top secret!',
      resave: true,
      saveUninitialized: true
    }));
  }

  get app() {
    return this._app;
  }

  start() {
    this._app.listen(process.env.PORT || 8080, process.env.IP, () => {
      console.log(`server is listening on ${this._port}`);
    });
  }
}

module.exports = Server;
