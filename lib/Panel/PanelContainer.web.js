'use strict';

Object.defineProperty(exports, "__esModule", {
            value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Base = require('../Base.web');

var _Base2 = _interopRequireDefault(_Base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PanelContainer = function PanelContainer(props) {
            return _react2.default.createElement(_Base2.default, _extends({
                        dir: 'row',
                        halign: 'flex-start',
                        valign: 'flex-start'
            }, props));
};

exports.default = PanelContainer;