"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Card = require("../../Card");

var _Button = _interopRequireDefault(require("../../Button"));

var _SVG = require("../../SVG");

describe('Card', () => {
  it('should match snapshot', () => {
    const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Card.CTACard, {
      button: _react.default.createElement(_Button.default, null, "My button here"),
      image: _react.default.createElement(_SVG.ContractorSimple, null),
      withOverlap: true
    }, "Test content"));
    expect(wrapper).toMatchSnapshot();
  });
});