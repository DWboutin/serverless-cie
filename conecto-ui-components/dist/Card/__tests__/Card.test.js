"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Card = _interopRequireDefault(require("../../Card"));

var _Icon = _interopRequireDefault(require("../../Icon"));

describe('Card', () => {
  it('should match snapshot', () => {
    const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Card.default, null, "Test 1"));
    expect(wrapper).toMatchSnapshot();
  });
  it('should match snapshot with an icon', () => {
    const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Card.default, {
      withIcon: true,
      icon: _react.default.createElement(_Icon.default, {
        type: "colored-flag"
      })
    }, "Test 1"));
    expect(wrapper).toMatchSnapshot();
  });
  it('should have the prefix class', () => {
    const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Card.default, null, "Test 1"));
    expect(wrapper.hasClass('to-card')).toEqual(true);
  });
});