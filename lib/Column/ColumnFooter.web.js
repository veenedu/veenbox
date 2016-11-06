'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ColumnHeader = require('./ColumnHeader.react');

var _Base = require('../Base.react');

var _Base2 = _interopRequireDefault(_Base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ColumnFooter = function ColumnFooter(props) {
  return _react2.default.createElement(_Base2.default, (0, _Base.combineStyles)(props, _ColumnHeader.HeaderStyle));
};

exports.default = ColumnFooter;