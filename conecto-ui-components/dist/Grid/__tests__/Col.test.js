"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Grid = require("../../Grid");

var _Grid2 = _interopRequireDefault(require("./Grid.test"));

global.console = {
  log: console.log,
  error: jest.fn()
};
describe('Col', () => {
  it('should match snapshot', () => {
    const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, null, "Test"));
    expect(wrapper).toMatchSnapshot();
  });
  it('should match mounted snapshot', () => {
    const wrapper = (0, _enzyme.mount)(_react.default.createElement(_Grid.Col, null, "Test"));
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });
  it('should have the good default class "col-xs"', () => {
    const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, null, "Test"));
    expect(wrapper.hasClass('col-xs')).toEqual(true);
  });
  it('should have the good class with fullHeight prop', () => {
    const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
      fullHeight: true
    }, "Test"));
    expect(wrapper.hasClass('full-height')).toEqual(true);
  });
  describe('Span', () => {
    describe('XS', () => {
      it('should render correct class on span value', () => {
        const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          xs: {
            span: 3
          }
        }, "Test"));
        expect(wrapper.hasClass('col-xs-3')).toEqual(true);
      });
      it('should console.error on bad span value', () => {
        (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          xs: {
            span: []
          }
        }, "Test"));
        expect(global.console.error).toBeCalled();
      });
    });
    describe('SM', () => {
      it('should render correct class on span value', () => {
        const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          sm: {
            span: 3
          }
        }, "Test"));
        expect(wrapper.hasClass('col-sm-3')).toEqual(true);
      });
      it('should console.error on bad span value', () => {
        (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          sm: {
            span: []
          }
        }, "Test"));
        expect(global.console.error).toBeCalled();
      });
    });
    describe('MD', () => {
      it('should render correct class on span value', () => {
        const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          md: {
            span: 3
          }
        }, "Test"));
        expect(wrapper.hasClass('col-md-3')).toEqual(true);
      });
      it('should console.error on bad span value', () => {
        (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          md: {
            span: []
          }
        }, "Test"));
        expect(global.console.error).toBeCalled();
      });
    });
    describe('LG', () => {
      it('should render correct class on span value', () => {
        const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          lg: {
            span: 3
          }
        }, "Test"));
        expect(wrapper.hasClass('col-lg-3')).toEqual(true);
      });
      it('should console.error on bad span value', () => {
        (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          lg: {
            span: []
          }
        }, "Test"));
        expect(global.console.error).toBeCalled();
      });
    });
    describe('XL', () => {
      it('should render correct class on span value', () => {
        const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          xl: {
            span: 3
          }
        }, "Test"));
        expect(wrapper.hasClass('col-xl-3')).toEqual(true);
      });
      it('should console.error on bad span value', () => {
        (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          xl: {
            span: []
          }
        }, "Test"));
        expect(global.console.error).toBeCalled();
      });
    });
  });
  describe('Offset', () => {
    describe('XS', () => {
      it('should render correct class on offset value', () => {
        const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          xs: {
            offset: 3
          }
        }, "Test"));
        expect(wrapper.hasClass('col-xs-offset-3')).toEqual(true);
      });
      it('should console.error on bad offset value', () => {
        (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          xs: {
            offset: []
          }
        }, "Test"));
        expect(global.console.error).toBeCalled();
      });
    });
    describe('SM', () => {
      it('should render correct class on span value', () => {
        const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          sm: {
            offset: 3
          }
        }, "Test"));
        expect(wrapper.hasClass('col-sm-offset-3')).toEqual(true);
      });
      it('should console.error on bad offset value', () => {
        (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          sm: {
            offset: []
          }
        }, "Test"));
        expect(global.console.error).toBeCalled();
      });
    });
    describe('MD', () => {
      it('should render correct class on span value', () => {
        const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          md: {
            offset: 3
          }
        }, "Test"));
        expect(wrapper.hasClass('col-md-offset-3')).toEqual(true);
      });
      it('should console.error on bad offset value', () => {
        (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          md: {
            offset: []
          }
        }, "Test"));
        expect(global.console.error).toBeCalled();
      });
    });
    describe('LG', () => {
      it('should render correct class on span value', () => {
        const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          lg: {
            offset: 3
          }
        }, "Test"));
        expect(wrapper.hasClass('col-lg-offset-3')).toEqual(true);
      });
      it('should console.error on bad offset value', () => {
        (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          lg: {
            offset: []
          }
        }, "Test"));
        expect(global.console.error).toBeCalled();
      });
    });
    describe('XL', () => {
      it('should render correct class on span value', () => {
        const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          xl: {
            offset: 3
          }
        }, "Test"));
        expect(wrapper.hasClass('col-xl-offset-3')).toEqual(true);
      });
      it('should console.error on bad offset value', () => {
        (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          xl: {
            offset: []
          }
        }, "Test"));
        expect(global.console.error).toBeCalled();
      });
    });
  });
  describe('First', () => {
    describe('XS', () => {
      it('should render correct class on offset value', () => {
        const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          xs: {
            first: true
          }
        }, "Test"));
        expect(wrapper.hasClass('first-xs')).toEqual(true);
      });
      it('should console.error on bad first value', () => {
        (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          xs: {
            first: 123
          }
        }, "Test"));
        expect(global.console.error).toBeCalled();
      });
    });
    describe('SM', () => {
      it('should render correct class on offset value', () => {
        const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          sm: {
            first: true
          }
        }, "Test"));
        expect(wrapper.hasClass('first-sm')).toEqual(true);
      });
      it('should console.error on bad first value', () => {
        (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          sm: {
            first: 123
          }
        }, "Test"));
        expect(global.console.error).toBeCalled();
      });
    });
    describe('MD', () => {
      it('should render correct class on offset value', () => {
        const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          md: {
            first: true
          }
        }, "Test"));
        expect(wrapper.hasClass('first-md')).toEqual(true);
      });
      it('should console.error on bad first value', () => {
        (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          md: {
            first: 123
          }
        }, "Test"));
        expect(global.console.error).toBeCalled();
      });
    });
    describe('LG', () => {
      it('should render correct class on offset value', () => {
        const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          lg: {
            first: true
          }
        }, "Test"));
        expect(wrapper.hasClass('first-lg')).toEqual(true);
      });
      it('should console.error on bad first value', () => {
        (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          lg: {
            first: 123
          }
        }, "Test"));
        expect(global.console.error).toBeCalled();
      });
    });
    describe('XL', () => {
      it('should render correct class on offset value', () => {
        const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          xl: {
            first: true
          }
        }, "Test"));
        expect(wrapper.hasClass('first-xl')).toEqual(true);
      });
      it('should console.error on bad first value', () => {
        (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          xl: {
            first: 123
          }
        }, "Test"));
        expect(global.console.error).toBeCalled();
      });
    });
  });
  describe('Last', () => {
    describe('XS', () => {
      it('should render correct class on last value', () => {
        const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          xs: {
            last: true
          }
        }, "Test"));
        expect(wrapper.hasClass('last-xs')).toEqual(true);
      });
      it('should console.error on bad last value', () => {
        (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          xs: {
            last: 123
          }
        }, "Test"));
        expect(global.console.error).toBeCalled();
      });
    });
    describe('SM', () => {
      it('should render correct class on last value', () => {
        const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          sm: {
            last: true
          }
        }, "Test"));
        expect(wrapper.hasClass('last-sm')).toEqual(true);
      });
      it('should console.error on bad last value', () => {
        (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          sm: {
            last: 123
          }
        }, "Test"));
        expect(global.console.error).toBeCalled();
      });
    });
    describe('MD', () => {
      it('should render correct class on last value', () => {
        const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          md: {
            last: true
          }
        }, "Test"));
        expect(wrapper.hasClass('last-md')).toEqual(true);
      });
      it('should console.error on bad last value', () => {
        (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          md: {
            last: 123
          }
        }, "Test"));
        expect(global.console.error).toBeCalled();
      });
    });
    describe('LG', () => {
      it('should render correct class on last value', () => {
        const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          lg: {
            last: true
          }
        }, "Test"));
        expect(wrapper.hasClass('last-lg')).toEqual(true);
      });
      it('should console.error on bad last value', () => {
        (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          lg: {
            last: 123
          }
        }, "Test"));
        expect(global.console.error).toBeCalled();
      });
    });
    describe('XL', () => {
      it('should render correct class on last value', () => {
        const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          xl: {
            last: true
          }
        }, "Test"));
        expect(wrapper.hasClass('last-xl')).toEqual(true);
      });
      it('should console.error on bad last value', () => {
        (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          xl: {
            last: 123
          }
        }, "Test"));
        expect(global.console.error).toBeCalled();
      });
    });
  });
  describe('Start', () => {
    describe('XS', () => {
      it('should render correct class on last value', () => {
        const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          xs: {
            start: true
          }
        }, "Test"));
        expect(wrapper.hasClass('start-xs')).toEqual(true);
      });
      it('should console.error on bad last value', () => {
        (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          xs: {
            start: 123
          }
        }, "Test"));
        expect(global.console.error).toBeCalled();
      });
    });
    describe('SM', () => {
      it('should render correct class on last value', () => {
        const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          sm: {
            start: true
          }
        }, "Test"));
        expect(wrapper.hasClass('start-sm')).toEqual(true);
      });
      it('should console.error on bad last value', () => {
        (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          sm: {
            start: 123
          }
        }, "Test"));
        expect(global.console.error).toBeCalled();
      });
    });
    describe('MD', () => {
      it('should render correct class on last value', () => {
        const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          md: {
            start: true
          }
        }, "Test"));
        expect(wrapper.hasClass('start-md')).toEqual(true);
      });
      it('should console.error on bad last value', () => {
        (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          md: {
            start: 123
          }
        }, "Test"));
        expect(global.console.error).toBeCalled();
      });
    });
    describe('LG', () => {
      it('should render correct class on last value', () => {
        const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          lg: {
            start: true
          }
        }, "Test"));
        expect(wrapper.hasClass('start-lg')).toEqual(true);
      });
      it('should console.error on bad last value', () => {
        (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          lg: {
            start: 123
          }
        }, "Test"));
        expect(global.console.error).toBeCalled();
      });
    });
    describe('XL', () => {
      it('should render correct class on last value', () => {
        const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          xl: {
            start: true
          }
        }, "Test"));
        expect(wrapper.hasClass('start-xl')).toEqual(true);
      });
      it('should console.error on bad last value', () => {
        (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          xl: {
            start: 123
          }
        }, "Test"));
        expect(global.console.error).toBeCalled();
      });
    });
  });
  describe('Center', () => {
    describe('XS', () => {
      it('should render correct class on last value', () => {
        const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          xs: {
            center: true
          }
        }, "Test"));
        expect(wrapper.hasClass('center-xs')).toEqual(true);
      });
      it('should console.error on bad last value', () => {
        (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          xs: {
            center: 123
          }
        }, "Test"));
        expect(global.console.error).toBeCalled();
      });
    });
    describe('SM', () => {
      it('should render correct class on last value', () => {
        const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          sm: {
            center: true
          }
        }, "Test"));
        expect(wrapper.hasClass('center-sm')).toEqual(true);
      });
      it('should console.error on bad last value', () => {
        (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          sm: {
            center: 123
          }
        }, "Test"));
        expect(global.console.error).toBeCalled();
      });
    });
    describe('MD', () => {
      it('should render correct class on last value', () => {
        const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          md: {
            center: true
          }
        }, "Test"));
        expect(wrapper.hasClass('center-md')).toEqual(true);
      });
      it('should console.error on bad last value', () => {
        (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          md: {
            center: 123
          }
        }, "Test"));
        expect(global.console.error).toBeCalled();
      });
    });
    describe('LG', () => {
      it('should render correct class on last value', () => {
        const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          lg: {
            center: true
          }
        }, "Test"));
        expect(wrapper.hasClass('center-lg')).toEqual(true);
      });
      it('should console.error on bad last value', () => {
        (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          lg: {
            center: 123
          }
        }, "Test"));
        expect(global.console.error).toBeCalled();
      });
    });
    describe('XL', () => {
      it('should render correct class on last value', () => {
        const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          xl: {
            center: true
          }
        }, "Test"));
        expect(wrapper.hasClass('center-xl')).toEqual(true);
      });
      it('should console.error on bad last value', () => {
        (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          xl: {
            center: 123
          }
        }, "Test"));
        expect(global.console.error).toBeCalled();
      });
    });
  });
  describe('End', () => {
    describe('XS', () => {
      it('should render correct class on last value', () => {
        const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          xs: {
            end: true
          }
        }, "Test"));
        expect(wrapper.hasClass('end-xs')).toEqual(true);
      });
      it('should console.error on bad last value', () => {
        (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          xs: {
            end: 123
          }
        }, "Test"));
        expect(global.console.error).toBeCalled();
      });
    });
    describe('SM', () => {
      it('should render correct class on last value', () => {
        const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          sm: {
            end: true
          }
        }, "Test"));
        expect(wrapper.hasClass('end-sm')).toEqual(true);
      });
      it('should console.error on bad last value', () => {
        (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          sm: {
            end: 123
          }
        }, "Test"));
        expect(global.console.error).toBeCalled();
      });
    });
    describe('MD', () => {
      it('should render correct class on last value', () => {
        const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          md: {
            end: true
          }
        }, "Test"));
        expect(wrapper.hasClass('end-md')).toEqual(true);
      });
      it('should console.error on bad last value', () => {
        (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          md: {
            end: 123
          }
        }, "Test"));
        expect(global.console.error).toBeCalled();
      });
    });
    describe('LG', () => {
      it('should render correct class on last value', () => {
        const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          lg: {
            end: true
          }
        }, "Test"));
        expect(wrapper.hasClass('end-lg')).toEqual(true);
      });
      it('should console.error on bad last value', () => {
        (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          lg: {
            end: 123
          }
        }, "Test"));
        expect(global.console.error).toBeCalled();
      });
    });
    describe('XL', () => {
      it('should render correct class on last value', () => {
        const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          xl: {
            end: true
          }
        }, "Test"));
        expect(wrapper.hasClass('end-xl')).toEqual(true);
      });
      it('should console.error on bad last value', () => {
        (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          xl: {
            end: 123
          }
        }, "Test"));
        expect(global.console.error).toBeCalled();
      });
    });
  });
  describe('Top', () => {
    describe('XS', () => {
      it('should render correct class on last value', () => {
        const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          xs: {
            top: true
          }
        }, "Test"));
        expect(wrapper.hasClass('top-xs')).toEqual(true);
      });
      it('should console.error on bad last value', () => {
        (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          xs: {
            top: 123
          }
        }, "Test"));
        expect(global.console.error).toBeCalled();
      });
    });
    describe('SM', () => {
      it('should render correct class on last value', () => {
        const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          sm: {
            top: true
          }
        }, "Test"));
        expect(wrapper.hasClass('top-sm')).toEqual(true);
      });
      it('should console.error on bad last value', () => {
        (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          sm: {
            top: 123
          }
        }, "Test"));
        expect(global.console.error).toBeCalled();
      });
    });
    describe('MD', () => {
      it('should render correct class on last value', () => {
        const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          md: {
            top: true
          }
        }, "Test"));
        expect(wrapper.hasClass('top-md')).toEqual(true);
      });
      it('should console.error on bad last value', () => {
        (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          md: {
            top: 123
          }
        }, "Test"));
        expect(global.console.error).toBeCalled();
      });
    });
    describe('LG', () => {
      it('should render correct class on last value', () => {
        const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          lg: {
            top: true
          }
        }, "Test"));
        expect(wrapper.hasClass('top-lg')).toEqual(true);
      });
      it('should console.error on bad last value', () => {
        (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          lg: {
            top: 123
          }
        }, "Test"));
        expect(global.console.error).toBeCalled();
      });
    });
    describe('XL', () => {
      it('should render correct class on last value', () => {
        const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          xl: {
            top: true
          }
        }, "Test"));
        expect(wrapper.hasClass('top-xl')).toEqual(true);
      });
      it('should console.error on bad last value', () => {
        (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          xl: {
            top: 123
          }
        }, "Test"));
        expect(global.console.error).toBeCalled();
      });
    });
  });
  describe('Middle', () => {
    describe('XS', () => {
      it('should render correct class on last value', () => {
        const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          xs: {
            middle: true
          }
        }, "Test"));
        expect(wrapper.hasClass('middle-xs')).toEqual(true);
      });
      it('should console.error on bad last value', () => {
        (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          xs: {
            middle: 123
          }
        }, "Test"));
        expect(global.console.error).toBeCalled();
      });
    });
    describe('SM', () => {
      it('should render correct class on last value', () => {
        const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          sm: {
            middle: true
          }
        }, "Test"));
        expect(wrapper.hasClass('middle-sm')).toEqual(true);
      });
      it('should console.error on bad last value', () => {
        (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          sm: {
            middle: 123
          }
        }, "Test"));
        expect(global.console.error).toBeCalled();
      });
    });
    describe('MD', () => {
      it('should render correct class on last value', () => {
        const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          md: {
            middle: true
          }
        }, "Test"));
        expect(wrapper.hasClass('middle-md')).toEqual(true);
      });
      it('should console.error on bad last value', () => {
        (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          md: {
            middle: 123
          }
        }, "Test"));
        expect(global.console.error).toBeCalled();
      });
    });
    describe('LG', () => {
      it('should render correct class on last value', () => {
        const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          lg: {
            middle: true
          }
        }, "Test"));
        expect(wrapper.hasClass('middle-lg')).toEqual(true);
      });
      it('should console.error on bad last value', () => {
        (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          lg: {
            middle: 123
          }
        }, "Test"));
        expect(global.console.error).toBeCalled();
      });
    });
    describe('XL', () => {
      it('should render correct class on last value', () => {
        const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          xl: {
            middle: true
          }
        }, "Test"));
        expect(wrapper.hasClass('middle-xl')).toEqual(true);
      });
      it('should console.error on bad last value', () => {
        (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          xl: {
            middle: 123
          }
        }, "Test"));
        expect(global.console.error).toBeCalled();
      });
    });
  });
  describe('Bottom', () => {
    describe('XS', () => {
      it('should render correct class on last value', () => {
        const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          xs: {
            bottom: true
          }
        }, "Test"));
        expect(wrapper.hasClass('bottom-xs')).toEqual(true);
      });
      it('should console.error on bad last value', () => {
        (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          xs: {
            bottom: 123
          }
        }, "Test"));
        expect(global.console.error).toBeCalled();
      });
    });
    describe('SM', () => {
      it('should render correct class on last value', () => {
        const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          sm: {
            bottom: true
          }
        }, "Test"));
        expect(wrapper.hasClass('bottom-sm')).toEqual(true);
      });
      it('should console.error on bad last value', () => {
        (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          sm: {
            bottom: 123
          }
        }, "Test"));
        expect(global.console.error).toBeCalled();
      });
    });
    describe('MD', () => {
      it('should render correct class on last value', () => {
        const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          md: {
            bottom: true
          }
        }, "Test"));
        expect(wrapper.hasClass('bottom-md')).toEqual(true);
      });
      it('should console.error on bad last value', () => {
        (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          md: {
            bottom: 123
          }
        }, "Test"));
        expect(global.console.error).toBeCalled();
      });
    });
    describe('LG', () => {
      it('should render correct class on last value', () => {
        const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          lg: {
            bottom: true
          }
        }, "Test"));
        expect(wrapper.hasClass('bottom-lg')).toEqual(true);
      });
      it('should console.error on bad last value', () => {
        (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          lg: {
            bottom: 123
          }
        }, "Test"));
        expect(global.console.error).toBeCalled();
      });
    });
    describe('XL', () => {
      it('should render correct class on last value', () => {
        const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          xl: {
            bottom: true
          }
        }, "Test"));
        expect(wrapper.hasClass('bottom-xl')).toEqual(true);
      });
      it('should console.error on bad last value', () => {
        (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          xl: {
            bottom: 123
          }
        }, "Test"));
        expect(global.console.error).toBeCalled();
      });
    });
  });
  describe('Around', () => {
    describe('XS', () => {
      it('should render correct class on last value', () => {
        const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          xs: {
            around: true
          }
        }, "Test"));
        expect(wrapper.hasClass('around-xs')).toEqual(true);
      });
      it('should console.error on bad last value', () => {
        (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          xs: {
            around: 123
          }
        }, "Test"));
        expect(global.console.error).toBeCalled();
      });
    });
    describe('SM', () => {
      it('should render correct class on last value', () => {
        const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          sm: {
            around: true
          }
        }, "Test"));
        expect(wrapper.hasClass('around-sm')).toEqual(true);
      });
      it('should console.error on bad last value', () => {
        (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          sm: {
            around: 123
          }
        }, "Test"));
        expect(global.console.error).toBeCalled();
      });
    });
    describe('MD', () => {
      it('should render correct class on last value', () => {
        const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          md: {
            around: true
          }
        }, "Test"));
        expect(wrapper.hasClass('around-md')).toEqual(true);
      });
      it('should console.error on bad last value', () => {
        (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          md: {
            around: 123
          }
        }, "Test"));
        expect(global.console.error).toBeCalled();
      });
    });
    describe('LG', () => {
      it('should render correct class on last value', () => {
        const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          lg: {
            around: true
          }
        }, "Test"));
        expect(wrapper.hasClass('around-lg')).toEqual(true);
      });
      it('should console.error on bad last value', () => {
        (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          lg: {
            around: 123
          }
        }, "Test"));
        expect(global.console.error).toBeCalled();
      });
    });
    describe('XL', () => {
      it('should render correct class on last value', () => {
        const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          xl: {
            around: true
          }
        }, "Test"));
        expect(wrapper.hasClass('around-xl')).toEqual(true);
      });
      it('should console.error on bad last value', () => {
        (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          xl: {
            around: 123
          }
        }, "Test"));
        expect(global.console.error).toBeCalled();
      });
    });
  });
  describe('Between', () => {
    describe('XS', () => {
      it('should render correct class on last value', () => {
        const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          xs: {
            between: true
          }
        }, "Test"));
        expect(wrapper.hasClass('between-xs')).toEqual(true);
      });
      it('should console.error on bad last value', () => {
        (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          xs: {
            between: 123
          }
        }, "Test"));
        expect(global.console.error).toBeCalled();
      });
    });
    describe('SM', () => {
      it('should render correct class on last value', () => {
        const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          sm: {
            between: true
          }
        }, "Test"));
        expect(wrapper.hasClass('between-sm')).toEqual(true);
      });
      it('should console.error on bad last value', () => {
        (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          sm: {
            between: 123
          }
        }, "Test"));
        expect(global.console.error).toBeCalled();
      });
    });
    describe('MD', () => {
      it('should render correct class on last value', () => {
        const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          md: {
            between: true
          }
        }, "Test"));
        expect(wrapper.hasClass('between-md')).toEqual(true);
      });
      it('should console.error on bad last value', () => {
        (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          md: {
            between: 123
          }
        }, "Test"));
        expect(global.console.error).toBeCalled();
      });
    });
    describe('LG', () => {
      it('should render correct class on last value', () => {
        const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          lg: {
            between: true
          }
        }, "Test"));
        expect(wrapper.hasClass('between-lg')).toEqual(true);
      });
      it('should console.error on bad last value', () => {
        (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          lg: {
            between: 123
          }
        }, "Test"));
        expect(global.console.error).toBeCalled();
      });
    });
    describe('XL', () => {
      it('should render correct class on last value', () => {
        const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          xl: {
            between: true
          }
        }, "Test"));
        expect(wrapper.hasClass('between-xl')).toEqual(true);
      });
      it('should console.error on bad last value', () => {
        (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          xl: {
            between: 123
          }
        }, "Test"));
        expect(global.console.error).toBeCalled();
      });
    });
  });
  describe('Hidden', () => {
    describe('XS', () => {
      it('should render correct class on last value', () => {
        const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          xs: {
            hidden: true
          }
        }, "Test"));
        expect(wrapper.hasClass('hidden-xs')).toEqual(true);
      });
      it('should console.error on bad last value', () => {
        (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          xs: {
            hidden: 123
          }
        }, "Test"));
        expect(global.console.error).toBeCalled();
      });
    });
    describe('SM', () => {
      it('should render correct class on last value', () => {
        const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          sm: {
            hidden: true
          }
        }, "Test"));
        expect(wrapper.hasClass('hidden-sm')).toEqual(true);
      });
      it('should console.error on bad last value', () => {
        (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          sm: {
            hidden: 123
          }
        }, "Test"));
        expect(global.console.error).toBeCalled();
      });
    });
    describe('MD', () => {
      it('should render correct class on last value', () => {
        const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          md: {
            hidden: true
          }
        }, "Test"));
        expect(wrapper.hasClass('hidden-md')).toEqual(true);
      });
      it('should console.error on bad last value', () => {
        (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          md: {
            hidden: 123
          }
        }, "Test"));
        expect(global.console.error).toBeCalled();
      });
    });
    describe('LG', () => {
      it('should render correct class on last value', () => {
        const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          lg: {
            hidden: true
          }
        }, "Test"));
        expect(wrapper.hasClass('hidden-lg')).toEqual(true);
      });
      it('should console.error on bad last value', () => {
        (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          lg: {
            hidden: 123
          }
        }, "Test"));
        expect(global.console.error).toBeCalled();
      });
    });
    describe('XL', () => {
      it('should render correct class on last value', () => {
        const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          xl: {
            hidden: true
          }
        }, "Test"));
        expect(wrapper.hasClass('hidden-xl')).toEqual(true);
      });
      it('should console.error on bad last value', () => {
        (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
          xl: {
            hidden: 123
          }
        }, "Test"));
        expect(global.console.error).toBeCalled();
      });
    });
  });
  it('should contain added classes', () => {
    const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
      className: "testClass1 testClass2"
    }, "Test"));
    expect(wrapper.hasClass('testClass1')).toEqual(true);
    expect(wrapper.hasClass('testClass2')).toEqual(true);
  });
  it('should contain added styles', () => {
    const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
      style: {
        test: 123
      }
    }, "Test"));
    expect(wrapper.prop('style').test).toEqual(123);
  });
  it('should console.error when missing children', () => {
    (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, null));
    expect(global.console.error).toBeCalled();
  });
  it('should console.error when not passing a boolean to fullHeight prop', () => {
    (0, _enzyme.shallow)(_react.default.createElement(_Grid.Col, {
      fullHeight: 123
    }));
    expect(global.console.error).toBeCalled();
  });
});