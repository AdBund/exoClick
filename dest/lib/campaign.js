'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _request = require('../utils/request');

var _request2 = _interopRequireDefault(_request);

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var getCampagin = function (_Base) {
  _inherits(getCampagin, _Base);

  function getCampagin() {
    _classCallCheck(this, getCampagin);

    return _possibleConstructorReturn(this, (getCampagin.__proto__ || Object.getPrototypeOf(getCampagin)).apply(this, arguments));
  }

  _createClass(getCampagin, [{
    key: 'getAll',
    value: function getAll() {
      var path = this.baseUrl + '/campaigns';
      return this.getToken().then(function (token) {
        var p = _request2.default.get(path).set('Authorization', token).end();
        return p.then(function (res) {
          return res.body;
        });
      });
    }
  }, {
    key: 'getById',
    value: function getById(compaignId) {
      var path = this.baseUrl + '/campaigns/' + compaignId;
      return this.getToken().then(function (token) {
        var p = _request2.default.get(path).set('Authorization', token).end();
        return p.then(function (res) {
          return res.body;
        });
      });
    }
  }, {
    key: 'getGroups',
    value: function getGroups() {
      var path = this.baseUrl + '/campaigns/groups';
      return this.getToken().then(function (token) {
        var p = _request2.default.get(path).set('Authorization', token).end();
        return p.then(function (res) {
          return res.body;
        });
      });
    }
  }, {
    key: 'start',
    value: function start(_ref) {
      var campaign_id = _ref.campaign_id;

      var path = this.baseUrl + '/campaigns/' + campaign_id + '/play';
      return this.getToken().then(function (token) {
        var p = _request2.default.put(path).set({
          'Authorization': token
        }).send({}).end();
        return p.then(function (res) {
          return res.body;
        });
      });
    }
  }, {
    key: 'pause',
    value: function pause(_ref2) {
      var campaign_id = _ref2.campaign_id;

      var path = this.baseUrl + '/campaigns/' + campaign_id + '/pause';
      return this.getToken().then(function (token) {
        var p = _request2.default.put(path).set({
          'Authorization': token
        }).send({}).end();
        return p.then(function (res) {
          return res.body;
        });
      });
    }
  }]);

  return getCampagin;
}(_base2.default);

exports.default = getCampagin;