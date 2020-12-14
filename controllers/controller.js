/**
 * base controller class
 */
class Controller {
  _model;

  constructor(model) {
    this._model = model;
  }

  get model() {
    return this._model;
  }
}

module.exports = Controller;
