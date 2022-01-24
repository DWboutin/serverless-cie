"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Stat = _interopRequireDefault(require("../../Stat"));

var _Icon = _interopRequireDefault(require("../../Icon"));

describe('StatCircle', () => {
  it('should match snapshot', () => {
    const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Stat.default, {
      icon: _react.default.createElement(_Icon.default, {
        type: "notification"
      }),
      title: "Taux d'accceptation",
      notice: "+ 6.5% / mois pr\xE9c\xE9dent",
      number: 66
    }));
    expect(wrapper).toMatchSnapshot();
  });
  it('should have the prefix class', () => {
    const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Stat.default, {
      icon: _react.default.createElement(_Icon.default, {
        type: "notification"
      }),
      title: "Taux d'accceptation",
      notice: "+ 6.5% / mois pr\xE9c\xE9dent",
      number: 66
    }));
    expect(wrapper.hasClass('to-stat-circle')).toEqual(true);
  });
});