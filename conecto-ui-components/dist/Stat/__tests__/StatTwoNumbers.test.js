"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Stat = require("../../Stat");

var _Icon = _interopRequireDefault(require("../../Icon"));

describe('StatTwoNumbers', () => {
  it('should match snapshot', () => {
    const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Stat.StatTwoNumbers, {
      icon: _react.default.createElement(_Icon.default, {
        type: "notification"
      }),
      title: "Taux d'accceptation",
      notice: "+ 6.5% / mois pr\xE9c\xE9dent",
      number1: 45,
      suffix1: "%",
      disabled1: true,
      notice1: "Courriel",
      number2: 66,
      suffix2: "h",
      notice2: "T\xE9l\xE9phone"
    }));
    expect(wrapper).toMatchSnapshot();
  });
  it('should have the prefix class', () => {
    const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Stat.StatTwoNumbers, {
      icon: _react.default.createElement(_Icon.default, {
        type: "notification"
      }),
      title: "Taux d'accceptation",
      notice: "+ 6.5% / mois pr\xE9c\xE9dent",
      number1: 45,
      suffix1: "%",
      disabled1: true,
      notice1: "Courriel",
      number2: 66,
      suffix2: "h",
      notice2: "T\xE9l\xE9phone"
    }));
    expect(wrapper.hasClass('to-stat-two-numbers')).toEqual(true);
  });
});