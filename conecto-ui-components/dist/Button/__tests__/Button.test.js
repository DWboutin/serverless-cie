"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _gatsby = require("gatsby");

var _Button = _interopRequireDefault(require("../../Button"));

var _Icon = _interopRequireDefault(require("../../Icon"));

global.console = {
  error: jest.fn()
};
describe('Button', () => {
  describe('Primary', () => {
    it('should match snapshot', () => {
      const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Button.default, null, "Test"));
      expect(wrapper).toMatchSnapshot();
    });
    it('should have the prefix class', () => {
      const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Button.default, null, "Test"));
      expect(wrapper.instance().classesPrefix).toEqual('to-btn');
      expect(wrapper.hasClass(wrapper.instance().classesPrefix)).toEqual(true);
    });
    it('should contain added classes', () => {
      const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Button.default, {
        className: "test-class-1 test-class-2"
      }, "Test"));
      expect(wrapper.hasClass('test-class-1')).toEqual(true);
      expect(wrapper.hasClass('test-class-2')).toEqual(true);
    });
    it('should render an Html button with good props', () => {
      const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Button.default, null, "Test"));
      expect(wrapper.text()).toEqual('Test');
      expect(wrapper.find('button').length).toEqual(1);
      expect(wrapper.find('button').props().type).toEqual('button');
      expect(wrapper.find('button').props().className).toEqual('to-btn to-btn-primary');
    });
    it('should match snapshot with an Icon', () => {
      const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Button.default, {
        comp: _gatsby.Link
      }, _react.default.createElement(_Icon.default, null), "Test"));
      expect(wrapper).toMatchSnapshot();
    });
    it('should render an Icon correctly', () => {
      const wrapper = (0, _enzyme.mount)(_react.default.createElement(_Button.default, {
        comp: _gatsby.Link
      }, _react.default.createElement(_Icon.default, null), "Test"));
      expect(wrapper.find(_Icon.default).length).toEqual(1);
      wrapper.unmount();
    });
  });
  describe('Bordered', () => {
    it('should match snapshot', () => {
      const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Button.default, {
        type: "bordered"
      }, "Test"));
      expect(wrapper).toMatchSnapshot();
    });
    it('should have the prefix class', () => {
      const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Button.default, {
        type: "bordered"
      }, "Test"));
      expect(wrapper.instance().classesPrefix).toEqual('to-btn');
      expect(wrapper.hasClass(wrapper.instance().classesPrefix)).toEqual(true);
    });
    it('should render an Html button with good props', () => {
      const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Button.default, {
        type: "bordered"
      }, "Test"));
      expect(wrapper.text()).toEqual('Test');
      expect(wrapper.find('button').length).toEqual(1);
      expect(wrapper.find('button').props().type).toEqual('button');
      expect(wrapper.find('button').props().className).toEqual('to-btn to-btn-bordered');
    });
  });
  describe('Ghost', () => {
    it('should match snapshot', () => {
      const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Button.default, {
        type: "ghost"
      }, "Test"));
      expect(wrapper).toMatchSnapshot();
    });
    it('should have the prefix class', () => {
      const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Button.default, {
        type: "ghost"
      }, "Test"));
      expect(wrapper.instance().classesPrefix).toEqual('to-btn');
      expect(wrapper.hasClass(wrapper.instance().classesPrefix)).toEqual(true);
    });
    it('should render an Html button with good props', () => {
      const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Button.default, {
        type: "ghost"
      }, "Test"));
      expect(wrapper.text()).toEqual('Test');
      expect(wrapper.find('button').length).toEqual(1);
      expect(wrapper.find('button').props().type).toEqual('button');
      expect(wrapper.find('button').props().className).toEqual('to-btn to-btn-ghost');
    });
  });
  describe('Underlined', () => {
    it('should match snapshot', () => {
      const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Button.default, {
        type: "underlined"
      }, "Test"));
      expect(wrapper).toMatchSnapshot();
    });
    it('should have the prefix class', () => {
      const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Button.default, {
        type: "underlined"
      }, "Test"));
      expect(wrapper.instance().classesPrefix).toEqual('to-btn');
      expect(wrapper.hasClass(wrapper.instance().classesPrefix)).toEqual(true);
    });
    it('should render an Html button with good props', () => {
      const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Button.default, {
        type: "underlined"
      }, "Test"));
      expect(wrapper.text()).toEqual('Test');
      expect(wrapper.find('button').length).toEqual(1);
      expect(wrapper.find('button').props().type).toEqual('button');
      expect(wrapper.find('button').props().className).toEqual('to-btn to-btn-underlined');
    });
  });
  describe('Switch', () => {
    it('should match snapshot', () => {
      const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Button.default, {
        type: "switch"
      }, "Test"));
      expect(wrapper).toMatchSnapshot();
    });
    it('should have the prefix class', () => {
      const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Button.default, {
        type: "switch"
      }, "Test"));
      expect(wrapper.instance().classesPrefix).toEqual('to-btn');
      expect(wrapper.hasClass(wrapper.instance().classesPrefix)).toEqual(true);
    });
    it('should render an Html button with good props', () => {
      const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Button.default, {
        type: "switch"
      }, "Test"));
      expect(wrapper.text()).toEqual('Test');
      expect(wrapper.find('button').length).toEqual(1);
      expect(wrapper.find('button').props().type).toEqual('button');
      expect(wrapper.find('button').props().className).toEqual('to-btn to-btn-switch');
    });
  });
  describe('Filter', () => {
    it('should match snapshot', () => {
      const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Button.default, {
        type: "filter"
      }, "Test"));
      expect(wrapper).toMatchSnapshot();
    });
    it('should have the prefix class', () => {
      const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Button.default, {
        type: "filter"
      }, "Test"));
      expect(wrapper.instance().classesPrefix).toEqual('to-btn');
      expect(wrapper.hasClass(wrapper.instance().classesPrefix)).toEqual(true);
    });
    it('should render an Html button with good props', () => {
      const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Button.default, {
        type: "filter"
      }, "Test"));
      expect(wrapper.text()).toEqual('Test');
      expect(wrapper.find('button').length).toEqual(1);
      expect(wrapper.find('button').props().type).toEqual('button');
      expect(wrapper.find('button').props().className).toEqual('to-btn to-btn-filter');
    });
  });
  describe('Menu', () => {
    it('should match snapshot', () => {
      const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Button.default, {
        type: "menu"
      }, "Test"));
      expect(wrapper).toMatchSnapshot();
    });
    it('should match snapshot with the menu icon', () => {
      const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Button.default, {
        type: "menu"
      }, "test", _react.default.createElement(_Icon.default, {
        type: "menu"
      })));
      expect(wrapper).toMatchSnapshot();
    });
    it('should have the prefix class', () => {
      const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Button.default, {
        type: "menu"
      }, "Test"));
      expect(wrapper.instance().classesPrefix).toEqual('to-btn');
      expect(wrapper.hasClass(wrapper.instance().classesPrefix)).toEqual(true);
    });
    it('should render an Html button with good props', () => {
      const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Button.default, {
        type: "menu"
      }, "Test"));
      expect(wrapper.text()).toEqual('Test');
      expect(wrapper.find('button').length).toEqual(1);
      expect(wrapper.find('button').props().type).toEqual('button');
      expect(wrapper.find('button').props().className).toEqual('to-btn to-btn-menu');
    });
  });
  describe("With Gatsby's Link component", () => {
    it('should match snapshot', () => {
      const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Button.default, {
        comp: _gatsby.Link
      }, "Test"));
      expect(wrapper).toMatchSnapshot();
    });
    it('should render a Link component correctly', () => {
      const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Button.default, {
        comp: _gatsby.Link
      }, "Test"));
      expect(wrapper.find(_gatsby.Link).length).toEqual(1);
    });
    it('should render a Link tag with good props', () => {
      const wrapper = (0, _enzyme.mount)(_react.default.createElement(_Button.default, {
        comp: _gatsby.Link
      }, "Test"));
      expect(wrapper.find('button').length).toEqual(0);
      expect(wrapper.find('a').length).toEqual(1);
      expect(wrapper.find('a').hasClass('to-btn to-btn-primary')).toEqual(true);
      wrapper.unmount();
    });
  });
  it('should console.error when not passing a string or a React component to comp prop', () => {
    (0, _enzyme.shallow)(_react.default.createElement(_Button.default, {
      comp: 123
    }, "Test"));
    expect(global.console.error).toBeCalled();
  });
  it('should console.error when not passing a string to type prop', () => {
    (0, _enzyme.shallow)(_react.default.createElement(_Button.default, {
      type: 123
    }, "Test"));
    expect(global.console.error).toBeCalled();
  });
  it('should console.error when not passing a string to htmlType prop', () => {
    (0, _enzyme.shallow)(_react.default.createElement(_Button.default, {
      htmlType: 123
    }, "Test"));
    expect(global.console.error).toBeCalled();
  });
  it('should console.error when not passing a function to handleClick prop', () => {
    (0, _enzyme.shallow)(_react.default.createElement(_Button.default, {
      handleClick: 123
    }, "Test"));
    expect(global.console.error).toBeCalled();
  });
});