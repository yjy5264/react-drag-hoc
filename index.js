'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DragHOC = function DragHOC() {
    var customDrag = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    return function (WrappedComponent) {
        return function (_React$Component) {
            _inherits(_class2, _React$Component);

            function _class2(props) {
                _classCallCheck(this, _class2);

                var _this = _possibleConstructorReturn(this, (_class2.__proto__ || Object.getPrototypeOf(_class2)).call(this, props));

                _this.render = function () {
                    return _react2.default.createElement(
                        'div',
                        {
                            onMouseDown: function onMouseDown(e) {
                                return customDrag ? null : _this.onMouseDown(e);
                            },
                            style: { transform: 'translateX(' + _this.state.translateX + 'px)translateY(' + _this.state.translateY + 'px)' }
                        },
                        _react2.default.createElement(WrappedComponent, _extends({}, _this.props, {
                            ref: function ref(_ref) {
                                return _this.instanceComponent = _ref;
                            },
                            onMouseDown: function onMouseDown(e) {
                                return customDrag ? _this.onMouseDown(e) : null;
                            }
                        }))
                    );
                };

                _this.state = {
                    translateX: 0,
                    translateY: 0
                };
                _this.moving = false;
                _this.lastX = null;
                _this.lastY = null;
                window.onmouseup = function (e) {
                    return _this.onMouseUp(e);
                };
                window.onmousemove = function (e) {
                    return _this.onMouseMove(e);
                };
                return _this;
            }

            _createClass(_class2, [{
                key: 'onMouseDown',
                value: function onMouseDown(e) {
                    e.stopPropagation();
                    this.moving = true;
                }
            }, {
                key: 'onMouseUp',
                value: function onMouseUp() {
                    this.moving = false;
                    this.lastX = null;
                    this.lastY = null;
                }
            }, {
                key: 'onMouseMove',
                value: function onMouseMove(e) {
                    this.moving && this.onMove(e);
                }
            }, {
                key: 'onMove',
                value: function onMove(e) {
                    if (this.lastX && this.lastY) {
                        var dx = e.clientX - this.lastX;
                        var dy = e.clientY - this.lastY;
                        this.setState({ translateX: this.state.translateX + dx, translateY: this.state.translateY + dy });
                    }
                    this.lastX = e.clientX;
                    this.lastY = e.clientY;
                }
            }]);

            return _class2;
        }(_react2.default.Component);
    };
};

exports.default = DragHOC;