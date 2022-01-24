"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Card = require("../../Card");

var _Logo = _interopRequireDefault(require("../../Logo"));

var _Button = _interopRequireDefault(require("../../Button"));

var _Accordion = _interopRequireWildcard(require("../../Accordion"));

describe('CardOpportunity', () => {
  it('should match snapshot', () => {
    const onAcceptation = jest.fn();
    const onReject = jest.fn();
    const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Card.CardOpportunity, {
      img: _react.default.createElement("img", {
        src: "https://s3.amazonaws.com/dev-static-maps/R-VP6YPN7PTN.png",
        alt: "test"
      }),
      logo: _react.default.createElement(_Logo.default, {
        type: "roofing",
        suffix: "roofing"
      }),
      accepted: true,
      buttons: _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Button.default, {
        type: "bordered",
        handleClick: onReject
      }, "Reject"), _react.default.createElement(_Button.default, {
        handleClick: onAcceptation
      }, "Accept")),
      opportunityId: "T-19-8KQ209Q1",
      opportunityDate: "Soumise il y a 2 heures",
      opportunityRemainingPlace: "2 places restantes",
      labelCity: "Lieu du chantier",
      labelJobType: "Type de toiture",
      labelJobTypeSpecific: "Type de pente",
      valueCity: "Quebec",
      valueJobType: "Bardeau Asphalt",
      valueJobTypeSpecific: "Open Gable"
    }));
    expect(wrapper).toMatchSnapshot();
  });
  it('should match snapshot with an accordion', () => {
    const onAcceptation = jest.fn();
    const onReject = jest.fn();
    const wrapper = (0, _enzyme.render)(_react.default.createElement(_Card.CardOpportunity, {
      img: _react.default.createElement("img", {
        src: "https://s3.amazonaws.com/dev-static-maps/R-VP6YPN7PTN.png",
        alt: "test"
      }),
      logo: _react.default.createElement(_Logo.default, {
        type: "roofing",
        suffix: "roofing"
      }),
      accepted: true,
      buttons: _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Button.default, {
        type: "bordered",
        handleClick: onReject
      }, "Reject"), _react.default.createElement(_Button.default, {
        handleClick: onAcceptation
      }, "Accept")),
      opportunityId: "T-19-8KQ209Q1",
      opportunityDate: "Soumise il y a 2 heures",
      opportunityRemainingPlace: "2 places restantes",
      labelCity: "Lieu du chantier",
      labelJobType: "Type de toiture",
      labelJobTypeSpecific: "Type de pente",
      valueCity: "Quebec",
      valueJobType: "Bardeau Asphalt",
      valueJobTypeSpecific: "Open Gable",
      valueMoreInfosAccordion: _react.default.createElement(_Accordion.default, {
        closed: true
      }, _react.default.createElement(_Accordion.AccordionPanel, {
        title: "Test"
      }, "Content"))
    }));
    expect(wrapper).toMatchSnapshot();
  });
});