"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _omit = _interopRequireDefault(require("omit.js"));

var _Icon = _interopRequireDefault(require("../Icon"));

const CardLead = ({
  className,
  logo,
  buttons,
  checkboxes,
  requester,
  img,
  latitude,
  longitude,
  opportunityId,
  opportunityDate,
  opportunityRemainingPlace,
  labelCity,
  labelJobType,
  labelJobTypeSpecific,
  labelRequester,
  labelContactPreference,
  valueCity,
  valueJobType,
  valueJobTypeSpecific,
  valueMoreInfosAccordion,
  ...props
}) => {
  const classes = (0, _classnames.default)({
    'to-card to-card-lead': true,
    'has-accordion': valueMoreInfosAccordion,
    [`${className}`]: className
  });
  const componentProps = (0, _omit.default)(props, ['className', 'logo', 'buttons', 'checkboxes', 'requester', 'img', 'latitude', 'longitude', 'opportunityId', 'opportunityDate', 'labelCity', 'labelJobType', 'labelJobTypeSpecific', 'labelRequester', 'labelContactPreference', 'valueCity', 'valueJobType', 'valueJobTypeSpecific', 'valueMoreInfosAccordion']);
  return _react.default.createElement("div", Object.assign({
    className: classes
  }, componentProps), _react.default.createElement("header", {
    className: "card-lead-header"
  }, _react.default.createElement("div", {
    className: "logo"
  }, logo), _react.default.createElement("div", {
    className: "header-info"
  }, _react.default.createElement("div", {
    className: "opportunity-id"
  }, opportunityId), _react.default.createElement("div", {
    className: "opportunity-time"
  }, opportunityDate))), _react.default.createElement("div", {
    className: "to-card-wrap"
  }, _react.default.createElement("div", {
    className: "to-card-map"
  }, _react.default.createElement("a", {
    href: `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`,
    target: "_blank"
  }, img)), _react.default.createElement("div", {
    className: "to-card-content"
  }, _react.default.createElement("div", {
    className: "opportunity-city"
  }, _react.default.createElement("div", {
    className: "label"
  }, labelCity), _react.default.createElement("div", {
    className: "value"
  }, _react.default.createElement(_Icon.default, {
    type: "marker"
  }), _react.default.createElement("span", null, valueCity))), _react.default.createElement("div", {
    className: "job-type"
  }, _react.default.createElement("div", {
    className: "label"
  }, labelJobType), _react.default.createElement("div", {
    className: "value"
  }, _react.default.createElement("span", null, valueJobType))), _react.default.createElement("div", {
    className: "job-type-specific"
  }, _react.default.createElement("div", {
    className: "label"
  }, labelJobTypeSpecific), _react.default.createElement("div", {
    className: "value"
  }, _react.default.createElement("span", null, valueJobTypeSpecific)))), valueMoreInfosAccordion), _react.default.createElement("footer", {
    className: "card-lead-footer"
  }, _react.default.createElement("div", {
    className: "contact-infos"
  }, _react.default.createElement("div", {
    className: "info"
  }, _react.default.createElement("div", {
    className: "label"
  }, labelRequester), _react.default.createElement("div", {
    className: "value"
  }, _react.default.createElement("span", null, requester))), _react.default.createElement("div", {
    className: "info"
  }, _react.default.createElement("div", {
    className: "label"
  }, labelContactPreference), _react.default.createElement("div", {
    className: "value"
  }, checkboxes))), _react.default.createElement("div", {
    className: "contact-actions"
  }, buttons)));
};

CardLead.defaultProps = {
  valueMoreInfosAccordion: null
};
CardLead.propTypes = {
  logo: _propTypes.default.node.isRequired,
  buttons: _propTypes.default.node.isRequired,
  checkboxes: _propTypes.default.node.isRequired,
  img: _propTypes.default.node.isRequired,
  requester: _propTypes.default.string.isRequired,
  opportunityId: _propTypes.default.string.isRequired,
  opportunityDate: _propTypes.default.string.isRequired,
  labelCity: _propTypes.default.string.isRequired,
  labelJobType: _propTypes.default.string.isRequired,
  labelJobTypeSpecific: _propTypes.default.string.isRequired,
  labelRequester: _propTypes.default.string.isRequired,
  labelContactPreference: _propTypes.default.string.isRequired,
  valueCity: _propTypes.default.string.isRequired,
  valueJobType: _propTypes.default.string.isRequired,
  valueJobTypeSpecific: _propTypes.default.string.isRequired,
  valueMoreInfosAccordion: _propTypes.default.any,
  latitude: _propTypes.default.any.isRequired,
  longitude: _propTypes.default.any.isRequired
};
var _default = CardLead;
exports.default = _default;