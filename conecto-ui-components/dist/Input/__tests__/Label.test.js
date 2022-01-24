"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Input = require("../../Input");

describe('Label', () => {
  it('should match snapshot', () => {
    const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Input.Label, {
      htmlFor: "test-input",
      className: "to-input-label"
    }, "Test Label"));
    expect(wrapper).toMatchSnapshot();
  });
});