"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Input = require("../../Input");

global.console = {
  error: jest.fn()
};
const onChange = jest.fn();
const onBlur = jest.fn();
describe('DropdownList', () => {
  beforeEach(() => {
    onChange.mockClear();
    onBlur.mockClear();
  });
  it('should match snapshot', () => {
    const wrapper = (0, _enzyme.mount)(_react.default.createElement(_Input.DropdownList, {
      id: "test-dropdown",
      name: "test-dropdown",
      label: "test"
    }, _react.default.createElement(_Input.DropdownChoice, {
      value: "value 1"
    }, "Value"), _react.default.createElement(_Input.DropdownChoice, {
      value: "value 2",
      selected: true
    }, "Value 2"), _react.default.createElement(_Input.DropdownChoice, {
      value: "value 3"
    }, "Value 3")));
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });
  it('should have the prefix class', () => {
    const wrapper = (0, _enzyme.mount)(_react.default.createElement(_Input.DropdownList, {
      id: "test-dropdown",
      name: "test-dropdown",
      label: "test"
    }, _react.default.createElement(_Input.DropdownChoice, {
      value: "value 1"
    }, "Value"), _react.default.createElement(_Input.DropdownChoice, {
      value: "value 2",
      selected: true
    }, "Value 2"), _react.default.createElement(_Input.DropdownChoice, {
      value: "value 3"
    }, "Value 3")));
    expect(wrapper.instance().classesPrefix).toEqual('to-dropdown-list');
    expect(wrapper.render().hasClass(wrapper.instance().classesPrefix)).toEqual(true);
    wrapper.unmount();
  });
  it('should have the state.value equal to the selected choice value and selectedIndex to the good index', () => {
    const wrapper = (0, _enzyme.mount)(_react.default.createElement(_Input.DropdownList, {
      id: "test-dropdown",
      name: "test-dropdown",
      label: "test"
    }, _react.default.createElement(_Input.DropdownChoice, {
      value: "value 1"
    }, "Value"), _react.default.createElement(_Input.DropdownChoice, {
      value: "value 2",
      selected: true
    }, "Value 2"), _react.default.createElement(_Input.DropdownChoice, {
      value: "value 3"
    }, "Value 3")));
    expect(wrapper.state('value')).toEqual('value 2');
    expect(wrapper.state('selectedIndex')).toEqual(1);
    wrapper.unmount();
  });
  it('should have the "focused" class when focus on select', () => {
    const wrapper = (0, _enzyme.mount)(_react.default.createElement(_Input.DropdownList, {
      id: "test-dropdown",
      name: "test-dropdown",
      label: "test"
    }, _react.default.createElement(_Input.DropdownChoice, {
      value: "value 1"
    }, "Value"), _react.default.createElement(_Input.DropdownChoice, {
      value: "value 2",
      selected: true
    }, "Value 2"), _react.default.createElement(_Input.DropdownChoice, {
      value: "value 3"
    }, "Value 3")));
    wrapper.find('select').last().simulate('focus');
    expect(wrapper.render().hasClass('focused')).toEqual(true);
    wrapper.unmount();
  });
  it('should have the "active" class when user focus on select and press enter', () => {
    const wrapper = (0, _enzyme.mount)(_react.default.createElement(_Input.DropdownList, {
      id: "test-dropdown",
      name: "test-dropdown",
      label: "test"
    }, _react.default.createElement(_Input.DropdownChoice, {
      value: "value 1"
    }, "Value"), _react.default.createElement(_Input.DropdownChoice, {
      value: "value 2",
      selected: true
    }, "Value 2"), _react.default.createElement(_Input.DropdownChoice, {
      value: "value 3"
    }, "Value 3")));
    wrapper.find('select').last().simulate('focus');
    wrapper.find('select').last().simulate('keyDown', {
      keyCode: 13
    });
    expect(wrapper.render().hasClass('active')).toEqual(true);
    wrapper.unmount();
  });
  it("should add eventListener to window and create an object with it's id as key", () => {
    const wrapper = (0, _enzyme.mount)(_react.default.createElement(_Input.DropdownList, {
      id: "test-dropdown",
      name: "test-dropdown",
      label: "test"
    }, _react.default.createElement(_Input.DropdownChoice, {
      value: "value 1"
    }, "Value"), _react.default.createElement(_Input.DropdownChoice, {
      value: "value 2",
      selected: true
    }, "Value 2"), _react.default.createElement(_Input.DropdownChoice, {
      value: "value 3"
    }, "Value 3")));
    expect(window.TO_DROPDOWN_LISTENER).toEqual(true);
    expect(Object.keys(window.TO_DROPDOWN_IDS).indexOf('to-dropdown-test-dropdown') >= 0).toEqual(true);
    wrapper.unmount();
  });
  it("should remove eventListener on unmount to window and remove it's id as key in the object", () => {
    global.document.removeEventListener = jest.fn();
    const wrapper = (0, _enzyme.mount)(_react.default.createElement(_Input.DropdownList, {
      id: "test-dropdown",
      name: "test-dropdown",
      label: "test"
    }, _react.default.createElement(_Input.DropdownChoice, {
      value: "value 1"
    }, "Value"), _react.default.createElement(_Input.DropdownChoice, {
      value: "value 2",
      selected: true
    }, "Value 2"), _react.default.createElement(_Input.DropdownChoice, {
      value: "value 3"
    }, "Value 3")));
    wrapper.unmount();
    expect(window.TO_DROPDOWN_LISTENER).toEqual(undefined);
    expect(Object.keys(window.TO_DROPDOWN_IDS).indexOf('to-dropdown-test-dropdown') === -1).toEqual(true);
    expect(global.document.removeEventListener).toBeCalled();
    global.document.removeEventListener.mockClear();
  });
  it('should call onChange when changing value', () => {
    const wrapper = (0, _enzyme.mount)(_react.default.createElement(_Input.DropdownList, {
      id: "test-dropdown",
      name: "test-dropdown",
      label: "test",
      onChange: onChange
    }, _react.default.createElement(_Input.DropdownChoice, {
      value: "value 1"
    }, "Value"), _react.default.createElement(_Input.DropdownChoice, {
      value: "value 2",
      selected: true
    }, "Value 2"), _react.default.createElement(_Input.DropdownChoice, {
      value: "value 3"
    }, "Value 3")));
    wrapper.instance().select.current.dispatchEvent = jest.fn();
    wrapper.find('select').last().simulate('focus').simulate('keyDown', {
      keyCode: 13
    }).simulate('keyDown', {
      keyCode: 40
    }).simulate('keyDown', {
      keyCode: 13
    }).simulate('change');
    expect(wrapper.state('value')).toEqual('value 3');
    expect(wrapper.instance().select.current.dispatchEvent).toBeCalled();
    expect(onChange).toBeCalled();
    wrapper.instance().select.current.dispatchEvent.mockClear();
    wrapper.unmount();
  });
  it('should not call onChange when changing value and not providing it', () => {
    const wrapper = (0, _enzyme.mount)(_react.default.createElement(_Input.DropdownList, {
      id: "test-dropdown",
      name: "test-dropdown",
      label: "test"
    }, _react.default.createElement(_Input.DropdownChoice, {
      value: "value 1"
    }, "Value"), _react.default.createElement(_Input.DropdownChoice, {
      value: "value 2",
      selected: true
    }, "Value 2"), _react.default.createElement(_Input.DropdownChoice, {
      value: "value 3"
    }, "Value 3")));
    wrapper.instance().select.current.dispatchEvent = jest.fn();
    wrapper.find('select').last().simulate('focus').simulate('keyDown', {
      keyCode: 13
    }).simulate('keyDown', {
      keyCode: 40
    }).simulate('keyDown', {
      keyCode: 13
    }).simulate('change');
    expect(wrapper.state('value')).toEqual('value 3');
    expect(wrapper.instance().select.current.dispatchEvent).toBeCalled();
    expect(onChange).not.toBeCalled();
    wrapper.instance().select.current.dispatchEvent.mockClear();
    wrapper.unmount();
  });
  it('should handleDropdownClose remove the active class and trigger onBlur', () => {
    const wrapper = (0, _enzyme.mount)(_react.default.createElement(_Input.DropdownList, {
      id: "test-dropdown",
      name: "test-dropdown",
      label: "test",
      onBlur: onBlur
    }, _react.default.createElement(_Input.DropdownChoice, {
      value: "value 1"
    }, "Value"), _react.default.createElement(_Input.DropdownChoice, {
      value: "value 2",
      selected: true
    }, "Value 2"), _react.default.createElement(_Input.DropdownChoice, {
      value: "value 3"
    }, "Value 3")));
    wrapper.instance().select.current.blur = jest.fn();
    wrapper.find('select').last().simulate('focus').simulate('keyDown', {
      keyCode: 13
    });
    expect(wrapper.render().hasClass('active')).toEqual(true);
    wrapper.instance().handleDropdownClose();
    expect(wrapper.render().hasClass('active')).toEqual(false);
    expect(wrapper.instance().select.current.blur).toBeCalled();
    wrapper.find('select').last().simulate('blur');
    expect(onBlur).toBeCalled();
    wrapper.instance().select.current.blur.mockClear();
    wrapper.unmount();
  });
  it('should handleDropdownClose remove the active class and not trigger onBlur when not providing it', () => {
    const wrapper = (0, _enzyme.mount)(_react.default.createElement(_Input.DropdownList, {
      id: "test-dropdown",
      name: "test-dropdown",
      label: "test"
    }, _react.default.createElement(_Input.DropdownChoice, {
      value: "value 1"
    }, "Value"), _react.default.createElement(_Input.DropdownChoice, {
      value: "value 2",
      selected: true
    }, "Value 2"), _react.default.createElement(_Input.DropdownChoice, {
      value: "value 3"
    }, "Value 3")));
    wrapper.instance().select.current.blur = jest.fn();
    wrapper.find('select').last().simulate('focus').simulate('keyDown', {
      keyCode: 13
    });
    expect(wrapper.render().hasClass('active')).toEqual(true);
    wrapper.instance().handleDropdownClose();
    expect(wrapper.render().hasClass('active')).toEqual(false);
    expect(wrapper.instance().select.current.blur).toBeCalled();
    wrapper.find('select').last().simulate('blur');
    expect(onBlur).not.toBeCalled();
    wrapper.instance().select.current.blur.mockClear();
    wrapper.unmount();
  });
  it('should handleKeyDown return false on other keys than [ENTER, UP, DOWN]', () => {
    const wrapper = (0, _enzyme.mount)(_react.default.createElement(_Input.DropdownList, {
      id: "test-dropdown",
      name: "test-dropdown",
      label: "test"
    }, _react.default.createElement(_Input.DropdownChoice, {
      value: "value 1"
    }, "Value"), _react.default.createElement(_Input.DropdownChoice, {
      value: "value 2",
      selected: true
    }, "Value 2"), _react.default.createElement(_Input.DropdownChoice, {
      value: "value 3"
    }, "Value 3")));
    const goodKeys = [13, 38, 40];

    for (let i = 0; i < 50; i++) {
      if (goodKeys.indexOf(i) === -1) {
        expect(wrapper.instance().handleKeyDown({
          keyCode: i
        })).toEqual(false);
      }
    }

    wrapper.unmount();
  });
  it('should handleKeyDown on UP key (38) decrement selectedIndex state', () => {
    const wrapper = (0, _enzyme.mount)(_react.default.createElement(_Input.DropdownList, {
      id: "test-dropdown",
      name: "test-dropdown",
      label: "test"
    }, _react.default.createElement(_Input.DropdownChoice, {
      value: "value 1"
    }, "Value"), _react.default.createElement(_Input.DropdownChoice, {
      value: "value 2",
      selected: true
    }, "Value 2"), _react.default.createElement(_Input.DropdownChoice, {
      value: "value 3"
    }, "Value 3")));
    expect(wrapper.state('selectedIndex')).toEqual(1);
    wrapper.find('select').last().simulate('focus').simulate('keyDown', {
      keyCode: 13
    }).simulate('keyDown', {
      keyCode: 38
    });
    expect(wrapper.state('selectedIndex')).toEqual(0);
    wrapper.unmount();
  });
  it('should a click on the component toggle active class with handleDropdownActivation', () => {
    const wrapper = (0, _enzyme.mount)(_react.default.createElement(_Input.DropdownList, {
      id: "test-dropdown",
      name: "test-dropdown",
      label: "test"
    }, _react.default.createElement(_Input.DropdownChoice, {
      value: "value 1"
    }, "Value"), _react.default.createElement(_Input.DropdownChoice, {
      value: "value 2",
      selected: true
    }, "Value 2"), _react.default.createElement(_Input.DropdownChoice, {
      value: "value 3"
    }, "Value 3")));
    expect(wrapper.render().hasClass('active')).toEqual(false);
    wrapper.find('.to-dropdown-list-wrap').simulate('click');
    expect(wrapper.render().hasClass('active')).toEqual(true);
    wrapper.find('.to-dropdown-list-wrap').simulate('click');
    expect(wrapper.render().hasClass('active')).toEqual(false);
    wrapper.unmount();
  });
  it('should a click on a choice LI tag call handleValueSelection with the correct value', () => {
    const wrapper = (0, _enzyme.mount)(_react.default.createElement(_Input.DropdownList, {
      id: "test-dropdown",
      name: "test-dropdown",
      label: "test"
    }, _react.default.createElement(_Input.DropdownChoice, {
      value: "value 1"
    }, "Value"), _react.default.createElement(_Input.DropdownChoice, {
      value: "value 2",
      selected: true
    }, "Value 2"), _react.default.createElement(_Input.DropdownChoice, {
      value: "value 3"
    }, "Value 3")));
    wrapper.instance().handleValueSelection = jest.fn();
    wrapper.find('.to-dropdown-list-choices li').last().simulate('click');
    expect(wrapper.instance().handleValueSelection).toBeCalled();
    expect(wrapper.instance().handleValueSelection).toBeCalledWith('value 3');
    wrapper.instance().handleValueSelection.mockClear();
    wrapper.unmount();
  });
  it('should not set a selected value when none is provided', () => {
    const wrapper = (0, _enzyme.mount)(_react.default.createElement(_Input.DropdownList, {
      id: "test-dropdown",
      name: "test-dropdown",
      label: "test"
    }, _react.default.createElement(_Input.DropdownChoice, {
      value: "value 1"
    }, "Value"), _react.default.createElement(_Input.DropdownChoice, {
      value: "value 2"
    }, "Value 2"), _react.default.createElement(_Input.DropdownChoice, {
      value: "value 3"
    }, "Value 3")));
    wrapper.instance().handleValueSelection = jest.fn();
    expect(wrapper.instance().handleValueSelection).not.toBeCalled();
    wrapper.instance().handleValueSelection.mockClear();
    wrapper.unmount();
  });
  it('should not call document.removeEventListener when window.TO_DROPDOWN_IDS has IDs left', () => {
    global.document.removeEventListener = jest.fn();
    const wrapper = (0, _enzyme.mount)(_react.default.createElement(_Input.DropdownList, {
      id: "test-dropdown",
      name: "test-dropdown",
      label: "test"
    }, _react.default.createElement(_Input.DropdownChoice, {
      value: "value 1"
    }, "Value"), _react.default.createElement(_Input.DropdownChoice, {
      value: "value 2"
    }, "Value 2"), _react.default.createElement(_Input.DropdownChoice, {
      value: "value 3"
    }, "Value 3")));

    window.TO_DROPDOWN_IDS.test = () => {};

    expect(Object.keys(window.TO_DROPDOWN_IDS).length).toEqual(2);
    wrapper.unmount();
    expect(Object.keys(window.TO_DROPDOWN_IDS).length).toEqual(1);
    expect(global.document.removeEventListener).not.toBeCalled();
    global.document.removeEventListener.mockClear();
  });
  it('should not render an error by default', () => {
    const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Input.DropdownList, {
      id: "test-dropdown",
      name: "test-dropdown",
      label: "test"
    }, _react.default.createElement(_Input.DropdownChoice, {
      value: "value 1"
    }, "Value"), _react.default.createElement(_Input.DropdownChoice, {
      value: "value 2"
    }, "Value 2"), _react.default.createElement(_Input.DropdownChoice, {
      value: "value 3"
    }, "Value 3")));
    expect(wrapper.find('InputError').length).toEqual(0);
  });
  it('should render a string error correctly', () => {
    const wrapper = (0, _enzyme.mount)(_react.default.createElement(_Input.DropdownList, {
      id: "test-dropdown",
      name: "test-dropdown",
      label: "test",
      error: "Test error"
    }, _react.default.createElement(_Input.DropdownChoice, {
      value: "value 1"
    }, "Value"), _react.default.createElement(_Input.DropdownChoice, {
      value: "value 2"
    }, "Value 2"), _react.default.createElement(_Input.DropdownChoice, {
      value: "value 3"
    }, "Value 3")));
    expect(wrapper.find('InputError').length).toEqual(1);
    expect(wrapper.find('InputError').text()).toEqual('Test error');
    wrapper.unmount();
  });
  it('should render a component error correctly', () => {
    const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Input.DropdownList, {
      id: "test-dropdown",
      name: "test-dropdown",
      label: "test",
      error: _react.default.createElement("span", null, "Test")
    }, _react.default.createElement(_Input.DropdownChoice, {
      value: "value 1"
    }, "Value"), _react.default.createElement(_Input.DropdownChoice, {
      value: "value 2"
    }, "Value 2"), _react.default.createElement(_Input.DropdownChoice, {
      value: "value 3"
    }, "Value 3")));
    expect(wrapper.find('InputError').length).toEqual(1);
    expect(wrapper.find('InputError').find('span').length).toEqual(1);
    expect(wrapper.find('InputError').find('span').text()).toEqual('Test');
  });
});