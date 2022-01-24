"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Card = require("../../Card");

var _Logo = _interopRequireDefault(require("../../Logo"));

var _Button = _interopRequireDefault(require("../../Button"));

var _Input = require("../../Input");

var _Accordion = _interopRequireWildcard(require("../../Accordion"));

describe('CardOpportunity', () => {
  it('should match snapshot', () => {
    const onAcceptation = jest.fn();
    const onReject = jest.fn();
    const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Card.CardLead, {
      logo: _react.default.createElement(_Logo.default, {
        type: "roofing",
        suffix: "roofing"
      }),
      buttons: _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", null, _react.default.createElement(_Button.default, {
        type: "bordered",
        handleClick: () => {}
      }, "Reject")), _react.default.createElement("div", null, _react.default.createElement(_Button.default, {
        handleClick: () => {}
      }, "Accept"))),
      checkboxes: _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Input.Checkbox, {
        id: "test1",
        name: "test1",
        label: "test1",
        disabled: true
      }), _react.default.createElement(_Input.Checkbox, {
        id: "test2",
        name: "test2",
        label: "test2",
        value: true,
        checked: true,
        disabled: true
      }), _react.default.createElement(_Input.Checkbox, {
        id: "test3",
        name: "test3",
        label: "test3",
        disabled: true
      })),
      img: _react.default.createElement("img", {
        src: "https://s3.amazonaws.com/dev-static-maps/T-md81q84fk2.png",
        alt: "test"
      }),
      requester: "Mike Bout",
      opportunityId: "T-19-8KQ209Q1",
      opportunityDate: "Soumise il y a 2 heures",
      opportunityRemainingPlace: "2 places restantes",
      labelCity: "Lieu du chantier",
      labelJobType: "Type de toiture",
      labelJobTypeSpecific: "Type de pente",
      labelRequester: "Demandeur",
      labelContactPreference: "Pr\xE9f\xE9rence de contact",
      valueCity: "Quebec",
      valueJobType: "Bardeau Asphalt",
      valueJobTypeSpecific: "Open Gable",
      latitude: 10.12345,
      longitude: -54.32101
    }));
    expect(wrapper).toMatchSnapshot();
  });
  it('should match snapshot with an accordion', () => {
    const onAcceptation = jest.fn();
    const onReject = jest.fn();
    const wrapper = (0, _enzyme.render)(_react.default.createElement(_Card.CardLead, {
      logo: _react.default.createElement(_Logo.default, {
        type: "roofing",
        suffix: "roofing"
      }),
      buttons: _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", null, _react.default.createElement(_Button.default, {
        type: "bordered",
        handleClick: () => {}
      }, "Reject")), _react.default.createElement("div", null, _react.default.createElement(_Button.default, {
        handleClick: () => {}
      }, "Accept"))),
      checkboxes: _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Input.Checkbox, {
        id: "test1",
        name: "test1",
        label: "test1",
        disabled: true
      }), _react.default.createElement(_Input.Checkbox, {
        id: "test2",
        name: "test2",
        label: "test2",
        value: true,
        checked: true,
        disabled: true
      }), _react.default.createElement(_Input.Checkbox, {
        id: "test3",
        name: "test3",
        label: "test3",
        disabled: true
      })),
      img: _react.default.createElement("img", {
        src: "https://s3.amazonaws.com/dev-static-maps/R-VP6YPN7PTN.png",
        alt: "test"
      }),
      requester: "Mike Bout",
      opportunityId: "T-19-8KQ209Q1",
      opportunityDate: "Soumise il y a 2 heures",
      opportunityRemainingPlace: "2 places restantes",
      labelCity: "Lieu du chantier",
      labelJobType: "Type de toiture",
      labelJobTypeSpecific: "Type de pente",
      labelRequester: "Demandeur",
      labelContactPreference: "Pr\xE9f\xE9rence de contact",
      valueCity: "Quebec",
      valueJobType: "Bardeau Asphalt",
      valueJobTypeSpecific: "Open Gable",
      latitude: 10.12345,
      longitude: -54.32101,
      valueMoreInfosAccordion: _react.default.createElement(_Accordion.default, {
        closed: true
      }, _react.default.createElement(_Accordion.AccordionPanel, {
        title: "Test"
      }, "Content"))
    }));
    expect(wrapper).toMatchSnapshot();
  });
});