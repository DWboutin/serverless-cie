"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Input = require("../../Input");

global.console = {
  error: jest.fn()
};
describe('CheckboxGroup', () => {
  beforeEach(() => {
    global.console.error.mockClear();
  });
  it('should match snapshot', () => {
    const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Input.CheckboxGroup, {
      label: "Checkbox group",
      error: "Group error"
    }, _react.default.createElement(_Input.Checkbox, {
      id: "testField",
      name: "testField",
      label: "Test field",
      checked: true
    }), _react.default.createElement(_Input.Checkbox, {
      id: "testField2",
      name: "testField2",
      label: "Test field 2"
    })));
    expect(wrapper).toMatchSnapshot();
  });
  it('should console.error when no label is set', () => {
    (0, _enzyme.shallow)(_react.default.createElement(_Input.CheckboxGroup, {
      error: "Group error"
    }, _react.default.createElement(_Input.Checkbox, {
      id: "testField",
      name: "testField",
      label: "Test field",
      checked: true
    }), _react.default.createElement(_Input.Checkbox, {
      id: "testField2",
      name: "testField2",
      label: "Test field 2"
    })));
    expect(global.console.error).toBeCalled();
  });
  it('should console.error when no children are set', () => {
    (0, _enzyme.shallow)(_react.default.createElement(_Input.CheckboxGroup, {
      label: "Checkbox group",
      error: "Group error"
    }));
    expect(global.console.error).toBeCalled();
  });
});