"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _omit = _interopRequireDefault(require("omit.js"));

var _Icon = _interopRequireDefault(require("../Icon"));

const CardOpportunity = ({
  className,
  img,
  logo,
  buttons,
  accepted,
  opportunityId,
  opportunityDate,
  opportunityRemainingPlace,
  labelCity,
  labelJobType,
  labelJobTypeSpecific,
  valueCity,
  valueJobType,
  valueJobTypeSpecific,
  valueMoreInfosAccordion,
  ...props
}) => {
  const classes = (0, _classnames.default)({
    'to-card to-card-opportunity': true,
    'has-accordion': valueMoreInfosAccordion,
    [`${className}`]: className
  });
  const componentProps = (0, _omit.default)(props, ['className', 'img', 'logo', 'buttons', 'accepted', 'opportunityId', 'opportunityDate', 'opportunityRemainingPlace', 'labelCity', 'labelJobType', 'labelJobTypeSpecific', 'valueCity', 'valueJobType', 'valueJobTypeSpecific', 'valueMoreInfosAccordion', 'onAcceptation', 'onReject']);
  return _react.default.createElement("div", Object.assign({
    className: classes
  }, componentProps), _react.default.createElement("header", {
    className: "card-opporunity-header"
  }, _react.default.createElement("div", {
    className: "logo"
  }, logo), _react.default.createElement("div", {
    className: "header-info"
  }, _react.default.createElement("div", {
    className: "opportunity-id"
  }, opportunityId), _react.default.createElement("div", {
    className: "opportunity-time"
  }, opportunityDate)), opportunityRemainingPlace && !accepted && _react.default.createElement("span", {
    className: "remaining-places"
  }, opportunityRemainingPlace)), _react.default.createElement("div", {
    className: "to-card-wrap"
  }, img && _react.default.createElement("div", {
    className: "to-card-map"
  }, img), _react.default.createElement("div", {
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
    className: "opportunity-job"
  }, _react.default.createElement("div", {
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
  }, _react.default.createElement("span", null, valueJobTypeSpecific))))), valueMoreInfosAccordion), _react.default.createElement("footer", {
    className: "card-opporunity-footer"
  }, buttons));
};

CardOpportunity.defaultProps = {
  valueMoreInfosAccordion: null
};
CardOpportunity.propTypes = {
  img: _propTypes.default.node.isRequired,
  logo: _propTypes.default.node.isRequired,
  accepted: _propTypes.default.bool.isRequired,
  buttons: _propTypes.default.node.isRequired,
  opportunityId: _propTypes.default.string.isRequired,
  opportunityDate: _propTypes.default.string.isRequired,
  opportunityRemainingPlace: _propTypes.default.string.isRequired,
  labelCity: _propTypes.default.string.isRequired,
  labelJobType: _propTypes.default.string.isRequired,
  labelJobTypeSpecific: _propTypes.default.string.isRequired,
  valueCity: _propTypes.default.string.isRequired,
  valueJobType: _propTypes.default.string.isRequired,
  valueJobTypeSpecific: _propTypes.default.string.isRequired,
  valueMoreInfosAccordion: _propTypes.default.any
};
var _default = CardOpportunity;
exports.default = _default;