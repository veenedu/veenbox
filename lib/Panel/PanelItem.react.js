'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Container = require('../Container.react');

var _Container2 = _interopRequireDefault(_Container);

var _Base = require('../Base.react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PanelItem = function PanelItem(props) {
  var addStyle = {};

  //this code is ignored as we are handling this from Base, if Base is modified we need to modify this
  // var {style,width}= props;
  // if((style && style.width) || width) {
  //   addStyle['flex']= undefined
  // }
  //

  return _react2.default.createElement(_Container2.default, _extends({
    dir: 'row',
    halign: 'flex-start',
    valign: 'flex-start'
  }, (0, _Base.combineStyles)(props, addStyle)));
};

exports.default = PanelItem;