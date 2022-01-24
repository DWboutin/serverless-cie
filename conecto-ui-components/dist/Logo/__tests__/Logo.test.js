"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Logo = _interopRequireDefault(require("../../Logo"));

var _Conecto = _interopRequireDefault(require("../Logos/Conecto"));

var _To = _interopRequireDefault(require("../Logos/To"));

describe('Logo', () => {
  describe('SVG components', () => {
    it('Conecto component should match snapshot', () => {
      const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Conecto.default, null));
      expect(wrapper).toMatchSnapshot();
    });
    it('Short Conecto component should match snapshot', () => {
      const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_To.default, null));
      expect(wrapper).toMatchSnapshot();
    });
  });
  describe('Default', () => {
    it('should match snapshot', () => {
      const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Logo.default, null));
      expect(wrapper).toMatchSnapshot();
    });
    it('should have the prefix class', () => {
      const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Logo.default, null));
      expect(wrapper.instance().classesPrefix).toEqual('to-logo');
      expect(wrapper.hasClass(wrapper.instance().classesPrefix)).toEqual(true);
    });
    it('should contain added classes', () => {
      const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Logo.default, {
        className: "test-class-1 test-class-2"
      }));
      expect(wrapper.hasClass('test-class-1')).toEqual(true);
      expect(wrapper.hasClass('test-class-2')).toEqual(true);
    });
    it('should render the SVG component of Conecto', () => {
      const wrapper = (0, _enzyme.mount)(_react.default.createElement(_Logo.default, null));
      expect(wrapper.find(_Conecto.default).length).toEqual(1);
    });
  });
  describe('Short', () => {
    it('should match snapshot', () => {
      const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Logo.default, {
        size: "short"
      }));
      expect(wrapper).toMatchSnapshot();
    });
    it('should have the prefix classes', () => {
      const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Logo.default, {
        size: "short"
      }));
      expect(wrapper.instance().classesPrefix).toEqual('to-logo');
      expect(wrapper.hasClass(wrapper.instance().classesPrefix)).toEqual(true);
      expect(wrapper.hasClass('to-logo-short')).toEqual(true);
    });
    it('should render the SVG component of the short version of Conecto', () => {
      const wrapper = (0, _enzyme.mount)(_react.default.createElement(_Logo.default, {
        size: "short"
      }));
      expect(wrapper.find(_To.default).length).toEqual(1);
      wrapper.unmount();
    });
  });
  describe('With Suffix', () => {
    it('should match snapshot', () => {
      const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Logo.default, {
        suffix: "Contractor"
      }));
      expect(wrapper).toMatchSnapshot();
    });
    it('should have the prefix classes', () => {
      const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Logo.default, {
        suffix: "Contractor"
      }));
      expect(wrapper.instance().classesPrefix).toEqual('to-logo');
      expect(wrapper.hasClass(wrapper.instance().classesPrefix)).toEqual(true);
      expect(wrapper.hasClass('to-logo-contractor')).toEqual(true);
      expect(wrapper.hasClass('to-logo-with-suffix')).toEqual(true);
    });
    it('should render correctly the text suffix', () => {
      const wrapper = (0, _enzyme.mount)(_react.default.createElement(_Logo.default, {
        suffix: "Contractor"
      }));
      expect(wrapper.text()).toEqual('Contractor');
      wrapper.unmount();
    });
    it('should render correctly a tag suffix', () => {
      const wrapper = (0, _enzyme.mount)(_react.default.createElement(_Logo.default, {
        suffix: _react.default.createElement("strong", null, "ABcdEF123")
      }));
      expect(wrapper.find('strong').length).toEqual(1);
      expect(wrapper.text()).toEqual('ABcdEF123');
      wrapper.unmount();
    });
  });
  describe('With Type', () => {
    it('should match snapshot', () => {
      const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Logo.default, {
        type: "roofing",
        suffix: "Roofing"
      }));
      expect(wrapper).toMatchSnapshot();
    });
    it('should have the prefix classes', () => {
      const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Logo.default, {
        type: "roofing",
        suffix: "Roofing"
      }));
      expect(wrapper.instance().classesPrefix).toEqual('to-logo');
      expect(wrapper.hasClass(wrapper.instance().classesPrefix)).toEqual(true);
      expect(wrapper.hasClass('to-logo-roofing')).toEqual(true);
      expect(wrapper.hasClass('to-logo-with-suffix')).toEqual(true);
    });
    it('should render correctly the text suffix', () => {
      const wrapper = (0, _enzyme.mount)(_react.default.createElement(_Logo.default, {
        type: "roofing",
        suffix: "Roofing"
      }));
      expect(wrapper.text()).toEqual('Roofing');
      wrapper.unmount();
    });
  });
});