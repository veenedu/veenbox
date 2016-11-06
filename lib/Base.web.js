'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.combineStyles = combineStyles;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//use this method to create a combined styles,
//prom styles you receive from props, and your extra style
function combineStyles(props, addStyle) {
  var p = _extends({}, props);
  p.style = _extends({}, addStyle, p.style);
  return p;
}

var base = function base(props) {
  var addStyle = {
    display: 'flex',
    flex: props.height || props.style && props.style.height || props.width || props.style && props.style.width ? null : 1,
    // flex:props.height? null: 1, if above codes causes issue, exchnage  it with this one and you then need to, modify pannelItem
    height: '100%',
    width: '100%',
    flexDirection: 'column',
    overflowY: 'hidden',
    overflowX: 'hidden',
    justifyContent: 'center',
    alignItems: 'center'
  };

  var children = props.children,
      style = props.style;

  var combinedStyle = _extends({}, addStyle, style);

  var stylePairs = [['justifyContent', 'valign'], ['alignItems', 'halign'], ['flexDirection', 'dir'], ['width', 'width'], ['height', 'height']];

  var styleFromProps = stylePairs.reduce(function (acc, val) {
    var s = {};
    s[val[0]] = props[val[1]] || combinedStyle[val[0]];
    return _extends({}, acc, s);
  }, {});

  var newProps = _extends({}, props);
  stylePairs.map(function (pair) {
    delete newProps[pair[1]];
  });

  return _react2.default.createElement(
    'div',
    _extends({}, newProps, { style: _extends({}, combinedStyle, styleFromProps) }),
    children
  );
};

exports.default = base;