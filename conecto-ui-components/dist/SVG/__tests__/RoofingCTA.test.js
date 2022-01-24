"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _SVG = require("../../SVG");

describe('RoofingCTA', () => {
  it('should match snapshot', () => {
    const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_SVG.RoofingCTA, null));
    expect(wrapper).toMatchSnapshot();
  });
});