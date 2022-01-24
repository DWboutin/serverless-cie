"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Button = _interopRequireWildcard(require("../../Button"));

global.console = {
  error: jest.fn()
};
describe('ButtonGroup', () => {
  it('should match snapshot', () => {
    const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Button.ButtonGroup, null, _react.default.createElement(_Button.default, null, "Test1"), _react.default.createElement(_Button.default, null, "Test2")));
    expect(wrapper).toMatchSnapshot();
  });
  it('should have the prefix class', () => {
    const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Button.ButtonGroup, null, _react.default.createElement(_Button.default, null, "Test1"), _react.default.createElement(_Button.default, null, "Test2")));
    expect(wrapper.instance().classesPrefix).toEqual('to-btn-group');
    expect(wrapper.hasClass(wrapper.instance().classesPrefix)).toEqual(true);
  });
  it('should console.error when not passing children', () => {
    (0, _enzyme.shallow)(_react.default.createElement(_Button.ButtonGroup, null));
    expect(global.console.error).toBeCalled();
  });
});