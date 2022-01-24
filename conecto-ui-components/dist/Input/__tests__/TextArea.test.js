"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Input = require("../../Input");

global.Element = {};
global.console = {
  error: jest.fn()
};
const onPressEnter = jest.fn();
const onKeyDown = jest.fn();
const onChange = jest.fn();
const onBlur = jest.fn();
describe('TextArea', () => {
  beforeEach(() => {
    global.console.error.mockClear();
    onPressEnter.mockClear();
    onKeyDown.mockClear();
    onChange.mockClear();
    onBlur.mockClear();
  });
  it('should match snapshot', () => {
    const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Input.TextArea, {
      id: "test-textarea",
      name: "test-textarea"
    }));
    expect(wrapper).toMatchSnapshot();
  });
  it('should match snapshot with an injected value in props', () => {
    const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Input.TextArea, {
      id: "test-textarea",
      name: "test-textarea",
      value: "hello"
    }));
    expect(wrapper).toMatchSnapshot();
  });
  it('should have the prefix class', () => {
    const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Input.TextArea, {
      id: "test-textarea",
      name: "test-textarea"
    }));
    expect(wrapper.instance().classesPrefix).toEqual('to-textarea');
    expect(wrapper.hasClass(wrapper.instance().classesPrefix)).toEqual(true);
  });
  it('should contain the added classes', () => {
    const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Input.TextArea, {
      id: "test-textarea",
      name: "test-textarea",
      className: "test-class-1 test-class-2"
    }));
    expect(wrapper.hasClass('test-class-1')).toEqual(true);
    expect(wrapper.hasClass('test-class-2')).toEqual(true);
  });
  it('should have the "focused" class when focus on input', () => {
    const wrapper = (0, _enzyme.mount)(_react.default.createElement(_Input.TextArea, {
      id: "test-textarea",
      name: "test-textarea",
      className: "test-class-1 test-class-2",
      onPressEnter: onPressEnter
    }));
    wrapper.find('textarea').last().simulate('focus');
    expect(wrapper.render().hasClass('focused')).toEqual(true);
    wrapper.unmount();
  });
  it('should handle Enter key press correctly', () => {
    const wrapper = (0, _enzyme.mount)(_react.default.createElement(_Input.TextArea, {
      id: "test-textarea",
      name: "test-textarea",
      className: "test-class-1 test-class-2",
      onPressEnter: onPressEnter
    }));
    wrapper.find('textarea').last().simulate('keyDown', {
      keyCode: 13
    });
    expect(onPressEnter).toBeCalled();
    wrapper.unmount();
  });
  it('should handle Key Down correctly', () => {
    const wrapper = (0, _enzyme.mount)(_react.default.createElement(_Input.TextArea, {
      id: "test-textarea",
      name: "test-textarea",
      className: "test-class-1 test-class-2",
      onKeyDown: onKeyDown
    }));
    wrapper.find('textarea').last().simulate('keyDown', {
      keyCode: 1
    });
    expect(onKeyDown).toBeCalled();
    wrapper.unmount();
  });
  it('should handle onChange correctly', () => {
    const wrapper = (0, _enzyme.mount)(_react.default.createElement(_Input.TextArea, {
      id: "test-textarea",
      name: "test-textarea",
      className: "test-class-1 test-class-2",
      onChange: onChange
    }));
    const event = {
      target: {
        name: 'keyUp',
        value: 'test'
      }
    };
    wrapper.find('textarea').last().simulate('change', event);
    expect(onChange).toBeCalled();
    wrapper.unmount();
  });
  it('should handle onChange correctly when no function is passed', () => {
    const wrapper = (0, _enzyme.mount)(_react.default.createElement(_Input.TextArea, {
      id: "test-textarea",
      name: "test-textarea"
    }));
    const event = {
      target: {
        name: 'keyUp',
        value: 'test'
      }
    };
    wrapper.find('textarea').last().simulate('change', event);
    expect(onChange).not.toBeCalled();
    wrapper.unmount();
  });
  it('should handle onBlur correctly', () => {
    const wrapper = (0, _enzyme.mount)(_react.default.createElement(_Input.TextArea, {
      id: "test-textarea",
      name: "test-textarea",
      onBlur: onBlur
    }));
    wrapper.find('textarea').last().simulate('blur');
    expect(onBlur).toBeCalled();
    wrapper.unmount();
  });
  it('should handle onBlur correctly when no function is passed', () => {
    const wrapper = (0, _enzyme.mount)(_react.default.createElement(_Input.TextArea, {
      id: "test-textarea",
      name: "test-textarea"
    }));
    wrapper.find('textarea').last().instance().value = 'Test';
    wrapper.find('textarea').last().simulate('blur');
    expect(onBlur).not.toBeCalled();
    expect(wrapper.state().value).toBe('Test');
    wrapper.unmount();
  });
  it('should console.error when no id is set', () => {
    (0, _enzyme.shallow)(_react.default.createElement(_Input.TextArea, {
      name: "test-textarea"
    }));
    expect(global.console.error).toBeCalled();
  });
  it('should console.error when no name is set', () => {
    (0, _enzyme.shallow)(_react.default.createElement(_Input.TextArea, {
      id: "test-textarea"
    }));
    expect(global.console.error).toBeCalled();
  });
  it('should not render a label by default', () => {
    const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Input.TextArea, {
      id: "test-textarea",
      name: "test-textarea"
    }));
    expect(wrapper.find('.to-textarea-label').length).toEqual(0);
  });
  it('should render a string label correctly', () => {
    const wrapper = (0, _enzyme.mount)(_react.default.createElement(_Input.TextArea, {
      id: "test-textarea",
      name: "test-textarea",
      label: "Test label"
    }));
    expect(wrapper.find('Label').length).toEqual(1);
    expect(wrapper.find('Label').text()).toEqual('Test label');
    expect(wrapper.find('Label').getElement().props.htmlFor).toEqual('test-textarea');
    wrapper.unmount();
  });
  it('should render a component label correctly', () => {
    const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Input.TextArea, {
      id: "test-textarea",
      name: "test-textarea",
      label: _react.default.createElement("span", null, "Test")
    }));
    expect(wrapper.find('.to-textarea-label').length).toEqual(1);
    expect(wrapper.find('.to-textarea-label').find('span').length).toEqual(1);
    expect(wrapper.find('.to-textarea-label').find('span').text()).toEqual('Test');
    expect(wrapper.find('.to-textarea-label').getElement().props.htmlFor).toEqual('test-textarea');
  });
  it('should not render an error by default', () => {
    const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Input.TextArea, {
      id: "test-textarea",
      name: "test-textarea"
    }));
    expect(wrapper.find('InputError').length).toEqual(0);
  });
  it('should render a string error correctly', () => {
    const wrapper = (0, _enzyme.mount)(_react.default.createElement(_Input.TextArea, {
      id: "test-textarea",
      name: "test-textarea",
      error: "Test error"
    }));
    expect(wrapper.find('InputError').length).toEqual(1);
    expect(wrapper.find('InputError').text()).toEqual('Test error');
    wrapper.unmount();
  });
  it('should render a component error correctly', () => {
    const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Input.TextArea, {
      id: "test-textarea",
      name: "test-textarea",
      error: _react.default.createElement("span", null, "Test")
    }));
    expect(wrapper.find('InputError').length).toEqual(1);
    expect(wrapper.find('InputError').find('span').length).toEqual(1);
    expect(wrapper.find('InputError').find('span').text()).toEqual('Test');
  });
});