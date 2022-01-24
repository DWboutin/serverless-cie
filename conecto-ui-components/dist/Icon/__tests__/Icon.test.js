"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Icon = _interopRequireDefault(require("../../Icon"));

var _Facebook = _interopRequireDefault(require("../../Icon/Icons/Facebook"));

var _Menu = _interopRequireDefault(require("../../Icon/Icons/Menu"));

global.console = {
  error: jest.fn()
};
describe('Icon', () => {
  describe('SVG components', () => {
    it('Facebook SVG component should match snapshot', () => {
      const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Facebook.default, null));
      expect(wrapper).toMatchSnapshot();
    });
    it('Menu icon component should match snapshot', () => {
      const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Menu.default, null));
      expect(wrapper).toMatchSnapshot();
    });
  });
  describe('Default', () => {
    it('should match snapshot', () => {
      const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Icon.default, null));
      expect(wrapper).toMatchSnapshot();
    });
    it('should have the prefix class', () => {
      const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Icon.default, null));
      expect(wrapper.instance().classesPrefix).toEqual('to-icon');
      expect(wrapper.hasClass(wrapper.instance().classesPrefix)).toEqual(true);
    });
    it('should contain the added classes', () => {
      const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Icon.default, {
        className: "test-class-1 test-class-2"
      }));
      expect(wrapper.hasClass('test-class-1')).toEqual(true);
      expect(wrapper.hasClass('test-class-2')).toEqual(true);
    });
    it('should render the short logo is default icon', () => {
      const wrapper = (0, _enzyme.mount)(_react.default.createElement(_Icon.default, null));
      expect(wrapper.find('svg').length).toEqual(1);
      expect(wrapper.find('svg').hasClass('to-logo-to')).toEqual(true);
      wrapper.unmount();
    });
  });
  describe('type="alert"', () => {
    it('should match snapshot', () => {
      const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Icon.default, {
        type: "alert"
      }));
      expect(wrapper).toMatchSnapshot();
    });
    it('should have the prefix class', () => {
      const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Icon.default, {
        type: "alert"
      }));
      expect(wrapper.instance().classesPrefix).toEqual('to-icon');
      expect(wrapper.hasClass(wrapper.instance().classesPrefix)).toEqual(true);
    });
    it('should render the Alert icon', () => {
      const wrapper = (0, _enzyme.mount)(_react.default.createElement(_Icon.default, {
        type: "alert"
      }));
      expect(wrapper.find('svg').length).toEqual(1);
      expect(wrapper.find('svg').hasClass('to-icon-alert')).toEqual(true);
      wrapper.unmount();
    });
  });
  describe('type="arrow-down"', () => {
    it('should match snapshot', () => {
      const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Icon.default, {
        type: "arrow-down"
      }));
      expect(wrapper).toMatchSnapshot();
    });
    it('should have the prefix class', () => {
      const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Icon.default, {
        type: "arrow-down"
      }));
      expect(wrapper.instance().classesPrefix).toEqual('to-icon');
      expect(wrapper.hasClass(wrapper.instance().classesPrefix)).toEqual(true);
    });
    it('should render the Arrow Down icon', () => {
      const wrapper = (0, _enzyme.mount)(_react.default.createElement(_Icon.default, {
        type: "arrow-down"
      }));
      expect(wrapper.find('svg').length).toEqual(1);
      expect(wrapper.find('svg').hasClass('to-icon-arrow-down')).toEqual(true);
      wrapper.unmount();
    });
  });
  describe('type="bookmark"', () => {
    it('should match snapshot', () => {
      const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Icon.default, {
        type: "bookmark"
      }));
      expect(wrapper).toMatchSnapshot();
    });
    it('should have the prefix class', () => {
      const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Icon.default, {
        type: "bookmark"
      }));
      expect(wrapper.instance().classesPrefix).toEqual('to-icon');
      expect(wrapper.hasClass(wrapper.instance().classesPrefix)).toEqual(true);
    });
    it('should render the Bookmark icon', () => {
      const wrapper = (0, _enzyme.mount)(_react.default.createElement(_Icon.default, {
        type: "bookmark"
      }));
      expect(wrapper.find('svg').length).toEqual(1);
      expect(wrapper.find('svg').hasClass('to-icon-bookmark')).toEqual(true);
      wrapper.unmount();
    });
  });
  describe('type="check"', () => {
    it('should match snapshot', () => {
      const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Icon.default, {
        type: "check"
      }));
      expect(wrapper).toMatchSnapshot();
    });
    it('should have the prefix class', () => {
      const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Icon.default, {
        type: "check"
      }));
      expect(wrapper.instance().classesPrefix).toEqual('to-icon');
      expect(wrapper.hasClass(wrapper.instance().classesPrefix)).toEqual(true);
    });
    it('should render the Check icon', () => {
      const wrapper = (0, _enzyme.mount)(_react.default.createElement(_Icon.default, {
        type: "check"
      }));
      expect(wrapper.find('svg').length).toEqual(1);
      expect(wrapper.find('svg').hasClass('to-icon-check')).toEqual(true);
      wrapper.unmount();
    });
  });
  describe('type="close"', () => {
    it('should match snapshot', () => {
      const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Icon.default, {
        type: "close"
      }));
      expect(wrapper).toMatchSnapshot();
    });
    it('should have the prefix class', () => {
      const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Icon.default, {
        type: "close"
      }));
      expect(wrapper.instance().classesPrefix).toEqual('to-icon');
      expect(wrapper.hasClass(wrapper.instance().classesPrefix)).toEqual(true);
    });
    it('should render the Close icon', () => {
      const wrapper = (0, _enzyme.mount)(_react.default.createElement(_Icon.default, {
        type: "close"
      }));
      expect(wrapper.find('svg').length).toEqual(1);
      expect(wrapper.find('svg').hasClass('to-icon-close')).toEqual(true);
      wrapper.unmount();
    });
  });
  describe('type="cog"', () => {
    it('should match snapshot', () => {
      const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Icon.default, {
        type: "cog"
      }));
      expect(wrapper).toMatchSnapshot();
    });
    it('should have the prefix class', () => {
      const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Icon.default, {
        type: "cog"
      }));
      expect(wrapper.instance().classesPrefix).toEqual('to-icon');
      expect(wrapper.hasClass(wrapper.instance().classesPrefix)).toEqual(true);
    });
    it('should render the Cog icon', () => {
      const wrapper = (0, _enzyme.mount)(_react.default.createElement(_Icon.default, {
        type: "cog"
      }));
      expect(wrapper.find('svg').length).toEqual(1);
      expect(wrapper.find('svg').hasClass('to-icon-cog')).toEqual(true);
      wrapper.unmount();
    });
  });
  describe('type="concurrents"', () => {
    it('should match snapshot', () => {
      const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Icon.default, {
        type: "concurrents"
      }));
      expect(wrapper).toMatchSnapshot();
    });
    it('should have the prefix class', () => {
      const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Icon.default, {
        type: "concurrents"
      }));
      expect(wrapper.instance().classesPrefix).toEqual('to-icon');
      expect(wrapper.hasClass(wrapper.instance().classesPrefix)).toEqual(true);
    });
    it('should render the Concurrents icon', () => {
      const wrapper = (0, _enzyme.mount)(_react.default.createElement(_Icon.default, {
        type: "concurrents"
      }));
      expect(wrapper.find('svg').length).toEqual(1);
      expect(wrapper.find('svg').hasClass('to-icon-concurrents')).toEqual(true);
      wrapper.unmount();
    });
  });
  describe('type="email"', () => {
    it('should match snapshot', () => {
      const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Icon.default, {
        type: "email"
      }));
      expect(wrapper).toMatchSnapshot();
    });
    it('should have the prefix class', () => {
      const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Icon.default, {
        type: "email"
      }));
      expect(wrapper.instance().classesPrefix).toEqual('to-icon');
      expect(wrapper.hasClass(wrapper.instance().classesPrefix)).toEqual(true);
    });
    it('should render the Email icon', () => {
      const wrapper = (0, _enzyme.mount)(_react.default.createElement(_Icon.default, {
        type: "email"
      }));
      expect(wrapper.find('svg').length).toEqual(1);
      expect(wrapper.find('svg').hasClass('to-icon-email')).toEqual(true);
      wrapper.unmount();
    });
  });
  describe('type="facebook"', () => {
    it('should match snapshot', () => {
      const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Icon.default, {
        type: "facebook"
      }));
      expect(wrapper).toMatchSnapshot();
    });
    it('should have the prefix class', () => {
      const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Icon.default, {
        type: "facebook"
      }));
      expect(wrapper.instance().classesPrefix).toEqual('to-icon');
      expect(wrapper.hasClass(wrapper.instance().classesPrefix)).toEqual(true);
    });
    it('should render the Facebook icon', () => {
      const wrapper = (0, _enzyme.mount)(_react.default.createElement(_Icon.default, {
        type: "facebook"
      }));
      expect(wrapper.find('svg').length).toEqual(1);
      expect(wrapper.find('svg').hasClass('to-icon-facebook')).toEqual(true);
      wrapper.unmount();
    });
  });
  describe('type="flag"', () => {
    it('should match snapshot', () => {
      const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Icon.default, {
        type: "flag"
      }));
      expect(wrapper).toMatchSnapshot();
    });
    it('should have the prefix class', () => {
      const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Icon.default, {
        type: "flag"
      }));
      expect(wrapper.instance().classesPrefix).toEqual('to-icon');
      expect(wrapper.hasClass(wrapper.instance().classesPrefix)).toEqual(true);
    });
    it('should render the Flag icon', () => {
      const wrapper = (0, _enzyme.mount)(_react.default.createElement(_Icon.default, {
        type: "flag"
      }));
      expect(wrapper.find('svg').length).toEqual(1);
      expect(wrapper.find('svg').hasClass('to-icon-flag')).toEqual(true);
      wrapper.unmount();
    });
  });
  describe('type="colored-flag"', () => {
    it('should match snapshot', () => {
      const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Icon.default, {
        type: "colored-flag"
      }));
      expect(wrapper).toMatchSnapshot();
    });
    it('should have the prefix class', () => {
      const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Icon.default, {
        type: "colored-flag"
      }));
      expect(wrapper.instance().classesPrefix).toEqual('to-icon');
      expect(wrapper.hasClass(wrapper.instance().classesPrefix)).toEqual(true);
    });
    it('should render the Colored Flag icon', () => {
      const wrapper = (0, _enzyme.mount)(_react.default.createElement(_Icon.default, {
        type: "colored-flag"
      }));
      expect(wrapper.find('svg').length).toEqual(1);
      expect(wrapper.find('svg').hasClass('to-icon-colored-flag')).toEqual(true);
      wrapper.unmount();
    });
  });
  describe('type="marker"', () => {
    it('should match snapshot', () => {
      const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Icon.default, {
        type: "marker"
      }));
      expect(wrapper).toMatchSnapshot();
    });
    it('should have the prefix class', () => {
      const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Icon.default, {
        type: "marker"
      }));
      expect(wrapper.instance().classesPrefix).toEqual('to-icon');
      expect(wrapper.hasClass(wrapper.instance().classesPrefix)).toEqual(true);
    });
    it('should render the Flag icon', () => {
      const wrapper = (0, _enzyme.mount)(_react.default.createElement(_Icon.default, {
        type: "marker"
      }));
      expect(wrapper.find('svg').length).toEqual(1);
      expect(wrapper.find('svg').hasClass('to-icon-marker')).toEqual(true);
      wrapper.unmount();
    });
  });
  describe('type="menu"', () => {
    it('should match snapshot', () => {
      const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Icon.default, {
        type: "menu"
      }));
      expect(wrapper).toMatchSnapshot();
    });
    it('should have the prefix class', () => {
      const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Icon.default, {
        type: "menu"
      }));
      expect(wrapper.instance().classesPrefix).toEqual('to-icon');
      expect(wrapper.hasClass(wrapper.instance().classesPrefix)).toEqual(true);
    });
    it('should render the Menu icon', () => {
      const wrapper = (0, _enzyme.mount)(_react.default.createElement(_Icon.default, {
        type: "menu"
      }));
      expect(wrapper.find('div').length).toEqual(1);
      expect(wrapper.find('div').hasClass('to-icon-menu')).toEqual(true);
      expect(wrapper.find('span').length).toEqual(2);
      wrapper.unmount();
    });
  });
  describe('type="notification"', () => {
    it('should match snapshot', () => {
      const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Icon.default, {
        type: "notification"
      }));
      expect(wrapper).toMatchSnapshot();
    });
    it('should have the prefix class', () => {
      const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Icon.default, {
        type: "notification"
      }));
      expect(wrapper.instance().classesPrefix).toEqual('to-icon');
      expect(wrapper.hasClass(wrapper.instance().classesPrefix)).toEqual(true);
    });
    it('should render the Notification icon', () => {
      const wrapper = (0, _enzyme.mount)(_react.default.createElement(_Icon.default, {
        type: "notification"
      }));
      expect(wrapper.find('svg').length).toEqual(1);
      expect(wrapper.find('svg').hasClass('to-icon-notification')).toEqual(true);
      wrapper.unmount();
    });
  });
  describe('type="phone"', () => {
    it('should match snapshot', () => {
      const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Icon.default, {
        type: "phone"
      }));
      expect(wrapper).toMatchSnapshot();
    });
    it('should have the prefix class', () => {
      const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Icon.default, {
        type: "phone"
      }));
      expect(wrapper.instance().classesPrefix).toEqual('to-icon');
      expect(wrapper.hasClass(wrapper.instance().classesPrefix)).toEqual(true);
    });
    it('should render the Phone icon', () => {
      const wrapper = (0, _enzyme.mount)(_react.default.createElement(_Icon.default, {
        type: "phone"
      }));
      expect(wrapper.find('svg').length).toEqual(1);
      expect(wrapper.find('svg').hasClass('to-icon-phone')).toEqual(true);
      wrapper.unmount();
    });
  });
  describe('type="search"', () => {
    it('should match snapshot', () => {
      const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Icon.default, {
        type: "search"
      }));
      expect(wrapper).toMatchSnapshot();
    });
    it('should have the prefix class', () => {
      const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Icon.default, {
        type: "search"
      }));
      expect(wrapper.instance().classesPrefix).toEqual('to-icon');
      expect(wrapper.hasClass(wrapper.instance().classesPrefix)).toEqual(true);
    });
    it('should render the Search icon', () => {
      const wrapper = (0, _enzyme.mount)(_react.default.createElement(_Icon.default, {
        type: "search"
      }));
      expect(wrapper.find('svg').length).toEqual(1);
      expect(wrapper.find('svg').hasClass('to-icon-search')).toEqual(true);
      wrapper.unmount();
    });
  });
  describe('type="sms"', () => {
    it('should match snapshot', () => {
      const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Icon.default, {
        type: "sms"
      }));
      expect(wrapper).toMatchSnapshot();
    });
    it('should have the prefix class', () => {
      const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Icon.default, {
        type: "sms"
      }));
      expect(wrapper.instance().classesPrefix).toEqual('to-icon');
      expect(wrapper.hasClass(wrapper.instance().classesPrefix)).toEqual(true);
    });
    it('should render the SMS icon', () => {
      const wrapper = (0, _enzyme.mount)(_react.default.createElement(_Icon.default, {
        type: "sms"
      }));
      expect(wrapper.find('svg').length).toEqual(1);
      expect(wrapper.find('svg').hasClass('to-icon-sms')).toEqual(true);
      wrapper.unmount();
    });
  });
  describe('type="thumb-up"', () => {
    it('should match snapshot', () => {
      const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Icon.default, {
        type: "thumb-up"
      }));
      expect(wrapper).toMatchSnapshot();
    });
    it('should have the prefix class', () => {
      const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Icon.default, {
        type: "thumb-up"
      }));
      expect(wrapper.instance().classesPrefix).toEqual('to-icon');
      expect(wrapper.hasClass(wrapper.instance().classesPrefix)).toEqual(true);
    });
    it('should render the Thumb Up icon', () => {
      const wrapper = (0, _enzyme.mount)(_react.default.createElement(_Icon.default, {
        type: "thumb-up"
      }));
      expect(wrapper.find('svg').length).toEqual(1);
      expect(wrapper.find('svg').hasClass('to-icon-thumb-up')).toEqual(true);
      wrapper.unmount();
    });
  });
  describe('type="user"', () => {
    it('should match snapshot', () => {
      const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Icon.default, {
        type: "user"
      }));
      expect(wrapper).toMatchSnapshot();
    });
    it('should have the prefix class', () => {
      const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Icon.default, {
        type: "user"
      }));
      expect(wrapper.instance().classesPrefix).toEqual('to-icon');
      expect(wrapper.hasClass(wrapper.instance().classesPrefix)).toEqual(true);
    });
    it('should render the User icon', () => {
      const wrapper = (0, _enzyme.mount)(_react.default.createElement(_Icon.default, {
        type: "user"
      }));
      expect(wrapper.find('svg').length).toEqual(1);
      expect(wrapper.find('svg').hasClass('to-icon-user')).toEqual(true);
      wrapper.unmount();
    });
  });
  describe('type="cc-amex"', () => {
    it('should match snapshot', () => {
      const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Icon.default, {
        type: "cc-amex"
      }));
      expect(wrapper).toMatchSnapshot();
    });
    it('should have the prefix class', () => {
      const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Icon.default, {
        type: "cc-amex"
      }));
      expect(wrapper.instance().classesPrefix).toEqual('to-icon');
      expect(wrapper.hasClass(wrapper.instance().classesPrefix)).toEqual(true);
    });
    it('should render the CC-Amex icon', () => {
      const wrapper = (0, _enzyme.mount)(_react.default.createElement(_Icon.default, {
        type: "cc-amex"
      }));
      expect(wrapper.find('svg').length).toEqual(1);
      expect(wrapper.find('svg').hasClass('to-icon-cc-amex')).toEqual(true);
      wrapper.unmount();
    });
  });
  describe('type="cc-default"', () => {
    it('should match snapshot', () => {
      const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Icon.default, {
        type: "cc-default"
      }));
      expect(wrapper).toMatchSnapshot();
    });
    it('should have the prefix class', () => {
      const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Icon.default, {
        type: "cc-default"
      }));
      expect(wrapper.instance().classesPrefix).toEqual('to-icon');
      expect(wrapper.hasClass(wrapper.instance().classesPrefix)).toEqual(true);
    });
    it('should render the CC-Default icon', () => {
      const wrapper = (0, _enzyme.mount)(_react.default.createElement(_Icon.default, {
        type: "cc-default"
      }));
      expect(wrapper.find('svg').length).toEqual(1);
      expect(wrapper.find('svg').hasClass('to-icon-cc-default')).toEqual(true);
      wrapper.unmount();
    });
  });
  describe('type="cc-dinersclub"', () => {
    it('should match snapshot', () => {
      const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Icon.default, {
        type: "cc-dinersclub"
      }));
      expect(wrapper).toMatchSnapshot();
    });
    it('should have the prefix class', () => {
      const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Icon.default, {
        type: "cc-dinersclub"
      }));
      expect(wrapper.instance().classesPrefix).toEqual('to-icon');
      expect(wrapper.hasClass(wrapper.instance().classesPrefix)).toEqual(true);
    });
    it('should render the CC-DinersClub icon', () => {
      const wrapper = (0, _enzyme.mount)(_react.default.createElement(_Icon.default, {
        type: "cc-dinersclub"
      }));
      expect(wrapper.find('svg').length).toEqual(1);
      expect(wrapper.find('svg').hasClass('to-icon-cc-dinersclub')).toEqual(true);
      wrapper.unmount();
    });
  });
  describe('type="cc-discover"', () => {
    it('should match snapshot', () => {
      const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Icon.default, {
        type: "cc-discover"
      }));
      expect(wrapper).toMatchSnapshot();
    });
    it('should have the prefix class', () => {
      const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Icon.default, {
        type: "cc-discover"
      }));
      expect(wrapper.instance().classesPrefix).toEqual('to-icon');
      expect(wrapper.hasClass(wrapper.instance().classesPrefix)).toEqual(true);
    });
    it('should render the CC-Discover icon', () => {
      const wrapper = (0, _enzyme.mount)(_react.default.createElement(_Icon.default, {
        type: "cc-discover"
      }));
      expect(wrapper.find('svg').length).toEqual(1);
      expect(wrapper.find('svg').hasClass('to-icon-cc-discover')).toEqual(true);
      wrapper.unmount();
    });
  });
  describe('type="cc-jcb"', () => {
    it('should match snapshot', () => {
      const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Icon.default, {
        type: "cc-jcb"
      }));
      expect(wrapper).toMatchSnapshot();
    });
    it('should have the prefix class', () => {
      const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Icon.default, {
        type: "cc-jcb"
      }));
      expect(wrapper.instance().classesPrefix).toEqual('to-icon');
      expect(wrapper.hasClass(wrapper.instance().classesPrefix)).toEqual(true);
    });
    it('should render the CC-JCB icon', () => {
      const wrapper = (0, _enzyme.mount)(_react.default.createElement(_Icon.default, {
        type: "cc-jcb"
      }));
      expect(wrapper.find('svg').length).toEqual(1);
      expect(wrapper.find('svg').hasClass('to-icon-cc-jcb')).toEqual(true);
      wrapper.unmount();
    });
  });
  describe('type="cc-mastercard"', () => {
    it('should match snapshot', () => {
      const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Icon.default, {
        type: "cc-mastercard"
      }));
      expect(wrapper).toMatchSnapshot();
    });
    it('should have the prefix class', () => {
      const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Icon.default, {
        type: "cc-mastercard"
      }));
      expect(wrapper.instance().classesPrefix).toEqual('to-icon');
      expect(wrapper.hasClass(wrapper.instance().classesPrefix)).toEqual(true);
    });
    it('should render the CC-Mastercard icon', () => {
      const wrapper = (0, _enzyme.mount)(_react.default.createElement(_Icon.default, {
        type: "cc-mastercard"
      }));
      expect(wrapper.find('svg').length).toEqual(1);
      expect(wrapper.find('svg').hasClass('to-icon-cc-mastercard')).toEqual(true);
      wrapper.unmount();
    });
  });
  describe('type="cc-visa"', () => {
    it('should match snapshot', () => {
      const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Icon.default, {
        type: "cc-visa"
      }));
      expect(wrapper).toMatchSnapshot();
    });
    it('should have the prefix class', () => {
      const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Icon.default, {
        type: "cc-visa"
      }));
      expect(wrapper.instance().classesPrefix).toEqual('to-icon');
      expect(wrapper.hasClass(wrapper.instance().classesPrefix)).toEqual(true);
    });
    it('should render the CC-Visa icon', () => {
      const wrapper = (0, _enzyme.mount)(_react.default.createElement(_Icon.default, {
        type: "cc-visa"
      }));
      expect(wrapper.find('svg').length).toEqual(1);
      expect(wrapper.find('svg').hasClass('to-icon-cc-visa')).toEqual(true);
      wrapper.unmount();
    });
  });
  describe('type="conecto"', () => {
    it('should match snapshot', () => {
      const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Icon.default, {
        type: "conecto"
      }));
      expect(wrapper).toMatchSnapshot();
    });
    it('should have the prefix class', () => {
      const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Icon.default, {
        type: "conecto"
      }));
      expect(wrapper.instance().classesPrefix).toEqual('to-icon');
      expect(wrapper.hasClass(wrapper.instance().classesPrefix)).toEqual(true);
    });
    it('should render the Conecto icon', () => {
      const wrapper = (0, _enzyme.mount)(_react.default.createElement(_Icon.default, {
        type: "conecto"
      }));
      expect(wrapper.find('svg').length).toEqual(1);
      expect(wrapper.find('svg').hasClass('to-logo-to')).toEqual(true);
      wrapper.unmount();
    });
  });
  describe('no type', () => {
    it('should match snapshot', () => {
      const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Icon.default, null));
      expect(wrapper).toMatchSnapshot();
    });
    it('should have the prefix class', () => {
      const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Icon.default, null));
      expect(wrapper.instance().classesPrefix).toEqual('to-icon');
      expect(wrapper.hasClass(wrapper.instance().classesPrefix)).toEqual(true);
    });
    it('should render the Conecto icon by default', () => {
      const wrapper = (0, _enzyme.mount)(_react.default.createElement(_Icon.default, null));
      expect(wrapper.find('svg').length).toEqual(1);
      expect(wrapper.find('svg').hasClass('to-logo-to')).toEqual(true);
      wrapper.unmount();
    });
  });
  it('should console.error when passing a number to type prop', () => {
    (0, _enzyme.shallow)(_react.default.createElement(_Icon.default, {
      type: 123
    }, "Test"));
    expect(global.console.error).toBeCalled();
  });
  it('should console.error when not passing a good value to type prop', () => {
    (0, _enzyme.shallow)(_react.default.createElement(_Icon.default, {
      type: "test"
    }, "Test"));
    expect(global.console.error).toBeCalled();
  });
});