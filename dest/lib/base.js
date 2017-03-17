'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _request = require('../utils/request');

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by song on 2017/1/21.
 */
var token = '';
var type = '';

var Base = function () {
  function Base(apiKey) {
    _classCallCheck(this, Base);

    this.apiKey = apiKey;
    this.baseUrl = 'https://api.exoclick.com/v1';
  }

  _createClass(Base, [{
    key: 'getToken',
    value: function getToken() {
      var _this = this;

      return new _bluebird2.default(function (resolve) {
        if (token.length > 0) {
          resolve(type + ' ' + token);
        } else {
          var url = _this.baseUrl + '/login';
          var p = _request2.default.post(url).send({ api_token: _this.apiKey }).end();
          p.then(function (res) {
            var body = res.body;

            token = body.token;
            type = body.type;
            var expires_in = body.expires_in;


            setTimeout(function () {
              token = '';
              type = '';
            }, expires_in / 2 * 1000);

            resolve(type + ' ' + token);
          });
        }
      });
    }
  }]);

  return Base;
}();

exports.default = Base;