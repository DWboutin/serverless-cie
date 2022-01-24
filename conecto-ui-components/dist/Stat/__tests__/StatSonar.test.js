"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Stat = require("../../Stat");

var _Icon = _interopRequireDefault(require("../../Icon"));

describe('StatTwoNumbers', () => {
  it('should match snapshot', () => {
    const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Stat.StatSonar, {
      icon: _react.default.createElement(_Icon.default, {
        type: "notification"
      }),
      title: "Taux d'accceptation",
      notice: "+ 6.5% / mois pr\xE9c\xE9dent",
      number: 60,
      suffix: "h"
    }));
    expect(wrapper).toMatchSnapshot();
  });
  it('should have the prefix class', () => {
    const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Stat.StatSonar, {
      icon: _react.default.createElement(_Icon.default, {
        type: "notification"
      }),
      title: "Taux d'accceptation",
      notice: "+ 6.5% / mois pr\xE9c\xE9dent",
      number: 60,
      suffix: "h"
    }));
    expect(wrapper.hasClass('to-stat-sonar')).toEqual(true);
  });
});