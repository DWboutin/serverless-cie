"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _SVG = require("../../SVG");

describe('ContractorSimple', () => {
  it('should match snapshot', () => {
    const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_SVG.ContractorSimple, null));
    expect(wrapper).toMatchSnapshot();
  });
});