"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _ContractorSimple = _interopRequireDefault(require("./ContractorSimple"));

exports.ContractorSimple = _ContractorSimple.default;

var _PhoneShape = _interopRequireDefault(require("./PhoneShape"));

exports.PhoneShape = _PhoneShape.default;

var _RoofingCTA = _interopRequireDefault(require("./RoofingCTA"));

exports.RoofingCTA = _RoofingCTA.default;

var _RoofingPhoneBg = _interopRequireDefault(require("./RoofingPhoneBg"));

exports.RoofingPhoneBg = _RoofingPhoneBg.default;
const SVG = {
  ContractorSimple: _ContractorSimple.default,
  PhoneShape: _PhoneShape.default,
  RoofingCTA: _RoofingCTA.default,
  RoofingPhoneBg: _RoofingPhoneBg.default
};
exports.default = SVG;