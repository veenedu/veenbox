'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HeaderStyle = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Base = require('../Base.web');

var _Base2 = _interopRequireDefault(_Base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HeaderStyle = exports.HeaderStyle = {
  height: 50,
  display: null,
  flex: null
};

var ColumnHeader = function ColumnHeader(props) {
  return _react2.default.createElement(_Base2.default, (0, _Base.combineStyles)(props, HeaderStyle));
};

exports.default = ColumnHeader;