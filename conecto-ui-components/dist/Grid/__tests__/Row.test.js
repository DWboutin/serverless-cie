"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Grid = require("../../Grid");

global.console = {
  error: jest.fn()
};
describe('Row', () => {
  it('should match snapshot', () => {
    const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.Row, null, "Test"));
    expect(wrapper).toMatchSnapshot();
  });
  it('should match snapshot with a Col', () => {
    const wrapper = (0, _enzyme.mount)(_react.default.createElement(_Grid.Row, null, _react.default.createElement(_Grid.Col, null, "Test")));
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });
  it('should have the good prefix class and default', () => {
    const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.Row, null, "Test"));
    expect(wrapper.instance().classesPrefix).toEqual('row');
    expect(wrapper.hasClass(wrapper.instance().classesPrefix)).toEqual(true);
  });
  describe('Alignement', () => {
    describe('XS', () => {
      it('should render correct class on alignement "start"', () => {
        const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.Row, {
          xs: {
            alignement: 'start'
          }
        }, "Test"));
        expect(wrapper.hasClass('start-xs')).toEqual(true);
      });
      it('should render correct class on alignement "center"', () => {
        const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.Row, {
          xs: {
            alignement: 'center'
          }
        }, "Test"));
        expect(wrapper.hasClass('center-xs')).toEqual(true);
      });
      it('should render correct class on alignement "end"', () => {
        const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.Row, {
          xs: {
            alignement: 'end'
          }
        }, "Test"));
        expect(wrapper.hasClass('end-xs')).toEqual(true);
      });
      it('should render correct class on alignement "top"', () => {
        const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.Row, {
          xs: {
            alignement: 'top'
          }
        }, "Test"));
        expect(wrapper.hasClass('top-xs')).toEqual(true);
      });
      it('should render correct class on alignement "middle"', () => {
        const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.Row, {
          xs: {
            alignement: 'middle'
          }
        }, "Test"));
        expect(wrapper.hasClass('middle-xs')).toEqual(true);
      });
      it('should render correct class on alignement "bottom"', () => {
        const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.Row, {
          xs: {
            alignement: 'bottom'
          }
        }, "Test"));
        expect(wrapper.hasClass('bottom-xs')).toEqual(true);
      });
    });
    describe('SM', () => {
      it('should render correct class on alignement "start"', () => {
        const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.Row, {
          sm: {
            alignement: 'start'
          }
        }, "Test"));
        expect(wrapper.hasClass('start-sm')).toEqual(true);
      });
      it('should render correct class on alignement "center"', () => {
        const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.Row, {
          sm: {
            alignement: 'center'
          }
        }, "Test"));
        expect(wrapper.hasClass('center-sm')).toEqual(true);
      });
      it('should render correct class on alignement "end"', () => {
        const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.Row, {
          sm: {
            alignement: 'end'
          }
        }, "Test"));
        expect(wrapper.hasClass('end-sm')).toEqual(true);
      });
      it('should render correct class on alignement "top"', () => {
        const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.Row, {
          sm: {
            alignement: 'top'
          }
        }, "Test"));
        expect(wrapper.hasClass('top-sm')).toEqual(true);
      });
      it('should render correct class on alignement "middle"', () => {
        const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.Row, {
          sm: {
            alignement: 'middle'
          }
        }, "Test"));
        expect(wrapper.hasClass('middle-sm')).toEqual(true);
      });
      it('should render correct class on alignement "bottom"', () => {
        const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.Row, {
          sm: {
            alignement: 'bottom'
          }
        }, "Test"));
        expect(wrapper.hasClass('bottom-sm')).toEqual(true);
      });
    });
    describe('MD', () => {
      it('should render correct class on alignement "start"', () => {
        const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.Row, {
          md: {
            alignement: 'start'
          }
        }, "Test"));
        expect(wrapper.hasClass('start-md')).toEqual(true);
      });
      it('should render correct class on alignement "center"', () => {
        const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.Row, {
          md: {
            alignement: 'center'
          }
        }, "Test"));
        expect(wrapper.hasClass('center-md')).toEqual(true);
      });
      it('should render correct class on alignement "end"', () => {
        const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.Row, {
          md: {
            alignement: 'end'
          }
        }, "Test"));
        expect(wrapper.hasClass('end-md')).toEqual(true);
      });
      it('should render correct class on alignement "top"', () => {
        const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.Row, {
          md: {
            alignement: 'top'
          }
        }, "Test"));
        expect(wrapper.hasClass('top-md')).toEqual(true);
      });
      it('should render correct class on alignement "middle"', () => {
        const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.Row, {
          md: {
            alignement: 'middle'
          }
        }, "Test"));
        expect(wrapper.hasClass('middle-md')).toEqual(true);
      });
      it('should render correct class on alignement "bottom"', () => {
        const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.Row, {
          md: {
            alignement: 'bottom'
          }
        }, "Test"));
        expect(wrapper.hasClass('bottom-md')).toEqual(true);
      });
    });
    describe('LG', () => {
      it('should render correct class on alignement "start"', () => {
        const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.Row, {
          lg: {
            alignement: 'start'
          }
        }, "Test"));
        expect(wrapper.hasClass('start-lg')).toEqual(true);
      });
      it('should render correct class on alignement "center"', () => {
        const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.Row, {
          lg: {
            alignement: 'center'
          }
        }, "Test"));
        expect(wrapper.hasClass('center-lg')).toEqual(true);
      });
      it('should render correct class on alignement "end"', () => {
        const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.Row, {
          lg: {
            alignement: 'end'
          }
        }, "Test"));
        expect(wrapper.hasClass('end-lg')).toEqual(true);
      });
      it('should render correct class on alignement "top"', () => {
        const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.Row, {
          lg: {
            alignement: 'top'
          }
        }, "Test"));
        expect(wrapper.hasClass('top-lg')).toEqual(true);
      });
      it('should render correct class on alignement "middle"', () => {
        const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.Row, {
          lg: {
            alignement: 'middle'
          }
        }, "Test"));
        expect(wrapper.hasClass('middle-lg')).toEqual(true);
      });
      it('should render correct class on alignement "bottom"', () => {
        const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.Row, {
          lg: {
            alignement: 'bottom'
          }
        }, "Test"));
        expect(wrapper.hasClass('bottom-lg')).toEqual(true);
      });
    });
    describe('XL', () => {
      it('should render correct class on alignement "start"', () => {
        const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.Row, {
          xl: {
            alignement: 'start'
          }
        }, "Test"));
        expect(wrapper.hasClass('start-xl')).toEqual(true);
      });
      it('should render correct class on alignement "center"', () => {
        const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.Row, {
          xl: {
            alignement: 'center'
          }
        }, "Test"));
        expect(wrapper.hasClass('center-xl')).toEqual(true);
      });
      it('should render correct class on alignement "end"', () => {
        const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.Row, {
          xl: {
            alignement: 'end'
          }
        }, "Test"));
        expect(wrapper.hasClass('end-xl')).toEqual(true);
      });
      it('should render correct class on alignement "top"', () => {
        const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.Row, {
          xl: {
            alignement: 'top'
          }
        }, "Test"));
        expect(wrapper.hasClass('top-xl')).toEqual(true);
      });
      it('should render correct class on alignement "middle"', () => {
        const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.Row, {
          xl: {
            alignement: 'middle'
          }
        }, "Test"));
        expect(wrapper.hasClass('middle-xl')).toEqual(true);
      });
      it('should render correct class on alignement "bottom"', () => {
        const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.Row, {
          xl: {
            alignement: 'bottom'
          }
        }, "Test"));
        expect(wrapper.hasClass('bottom-xl')).toEqual(true);
      });
    });
  });
  describe('Distribution', () => {
    describe('XS', () => {
      it('should render correct class on distribution "around"', () => {
        const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.Row, {
          xs: {
            distribution: 'around'
          }
        }, "Test"));
        expect(wrapper.hasClass('around-xs')).toEqual(true);
      });
      it('should render correct class on distribution "between"', () => {
        const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.Row, {
          xs: {
            distribution: 'between'
          }
        }, "Test"));
        expect(wrapper.hasClass('between-xs')).toEqual(true);
      });
    });
    describe('SM', () => {
      it('should render correct class on distribution "around"', () => {
        const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.Row, {
          sm: {
            distribution: 'around'
          }
        }, "Test"));
        expect(wrapper.hasClass('around-sm')).toEqual(true);
      });
      it('should render correct class on distribution "between"', () => {
        const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.Row, {
          sm: {
            distribution: 'between'
          }
        }, "Test"));
        expect(wrapper.hasClass('between-sm')).toEqual(true);
      });
    });
    describe('MD', () => {
      it('should render correct class on distribution "around"', () => {
        const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.Row, {
          md: {
            distribution: 'around'
          }
        }, "Test"));
        expect(wrapper.hasClass('around-md')).toEqual(true);
      });
      it('should render correct class on distribution "between"', () => {
        const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.Row, {
          md: {
            distribution: 'between'
          }
        }, "Test"));
        expect(wrapper.hasClass('between-md')).toEqual(true);
      });
    });
    describe('LG', () => {
      it('should render correct class on distribution "around"', () => {
        const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.Row, {
          lg: {
            distribution: 'around'
          }
        }, "Test"));
        expect(wrapper.hasClass('around-lg')).toEqual(true);
      });
      it('should render correct class on distribution "between"', () => {
        const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.Row, {
          lg: {
            distribution: 'between'
          }
        }, "Test"));
        expect(wrapper.hasClass('between-lg')).toEqual(true);
      });
    });
    describe('XL', () => {
      it('should render correct class on distribution "around"', () => {
        const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.Row, {
          xl: {
            distribution: 'around'
          }
        }, "Test"));
        expect(wrapper.hasClass('around-xl')).toEqual(true);
      });
      it('should render correct class on distribution "between"', () => {
        const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.Row, {
          xl: {
            distribution: 'between'
          }
        }, "Test"));
        expect(wrapper.hasClass('between-xl')).toEqual(true);
      });
    });
  });
  it('should render correct class on reverse', () => {
    const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.Row, {
      reverse: true
    }, "Test"));
    expect(wrapper.hasClass('reverse')).toEqual(true);
  });
  it('should contain added classes', () => {
    const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.Row, {
      className: "testClass1 testClass2"
    }, "Test"));
    expect(wrapper.hasClass('testClass1')).toEqual(true);
    expect(wrapper.hasClass('testClass2')).toEqual(true);
  });
  it('should contain added styles', () => {
    const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.Row, {
      style: {
        test: 123
      }
    }, "Test"));
    expect(wrapper.prop('style').test).toEqual(123);
  });
  it('should console.error when missing children', () => {
    (0, _enzyme.shallow)(_react.default.createElement(_Grid.Row, null));
    expect(global.console.error).toBeCalled();
  });
  it('should console.error when not passing a boolean to "reverse" prop', () => {
    (0, _enzyme.shallow)(_react.default.createElement(_Grid.Row, {
      reverse: 123
    }, "Test"));
    expect(global.console.error).toBeCalled();
  });
  it('should console.error when not passing a good value to alignement prop', () => {
    (0, _enzyme.shallow)(_react.default.createElement(_Grid.Row, {
      xs: {
        alignement: 1234
      }
    }, "Test"));
    expect(global.console.error).toBeCalled();
  });
  it('should console.error when not passing a good value to distribution prop', () => {
    (0, _enzyme.shallow)(_react.default.createElement(_Grid.Row, {
      xs: {
        distribution: 1234
      }
    }, "Test"));
    expect(global.console.error).toBeCalled();
  });
});