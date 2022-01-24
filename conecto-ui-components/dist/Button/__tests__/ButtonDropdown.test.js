"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _gatsby = require("gatsby");

var _Button = _interopRequireWildcard(require("../../Button"));

var _Icon = _interopRequireDefault(require("../../Icon"));

global.console = {
  error: jest.fn(),
  log: console.log
};
describe('ButtonDropdown', () => {
  it('should match snapshot', () => {
    const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Button.ButtonDropdown, {
      links: [_react.default.createElement(_gatsby.Link, {
        to: "/test"
      }, "Test 1"), _react.default.createElement(_gatsby.Link, {
        to: "/test"
      }, "Test 2")]
    }, "Test 1234"));
    expect(wrapper).toMatchSnapshot();
  });
  it('should match snapshot without links', () => {
    const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Button.ButtonDropdown, {
      links: []
    }, "Test 1234"));
    expect(wrapper).toMatchSnapshot();
  });
});