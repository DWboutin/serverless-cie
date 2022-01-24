"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Card = require("../../Card");

var _Icon = _interopRequireDefault(require("../../Icon"));

describe('CardStat', () => {
  it('should match snapshot', () => {
    const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Card.CardStat, {
      icon: _react.default.createElement(_Icon.default, null),
      title: "Test title card"
    }, "Test 1"));
    expect(wrapper).toMatchSnapshot();
  });
  it('should match snapshot with shadow', () => {
    const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Card.CardStat, {
      icon: _react.default.createElement(_Icon.default, null),
      title: "Test title card",
      type: "shadowed"
    }, "Test 1"));
    expect(wrapper).toMatchSnapshot();
  });
  it('should have the prefix class', () => {
    const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Card.CardStat, {
      icon: _react.default.createElement(_Icon.default, null),
      title: "Test title card"
    }, "Test 1"));
    expect(wrapper.hasClass('to-card-stat')).toEqual(true);
  });
});