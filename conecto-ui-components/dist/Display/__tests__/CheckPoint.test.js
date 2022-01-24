"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Display = _interopRequireDefault(require("../../Display"));

global.console = {
  error: jest.fn()
};
describe('CheckPoint', () => {
  it('should match snapshot with the icon by default', () => {
    const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Display.default, null, "Test text here"));
    expect(wrapper).toMatchSnapshot();
  });
  it('should match snapshot with the conecto icon', () => {
    const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Display.default, {
      iconType: "conecto"
    }, "Test text here"));
    expect(wrapper).toMatchSnapshot();
  });
  it('should render the text correctly', () => {
    const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Display.default, {
      iconType: "conecto"
    }, "Test text here"));
    expect(wrapper.find('.text').text()).toEqual('Test text here');
  });
  it('should console.error when not passing a good value to iconType prop', () => {
    (0, _enzyme.shallow)(_react.default.createElement(_Display.default, {
      iconType: "notGood"
    }, "Test text here"));
    expect(global.console.error).toBeCalled();
  });
  it('should console.error when not passing a string to children', () => {
    (0, _enzyme.shallow)(_react.default.createElement(_Display.default, {
      iconType: "notGood"
    }, _react.default.createElement("span", null, "123")));
    expect(global.console.error).toBeCalled();
  });
});