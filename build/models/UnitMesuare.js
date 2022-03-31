"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.unitMeasures = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Schema = _mongoose["default"].Schema,
    model = _mongoose["default"].model;
var unitMeasures = ['seconds', 'meters', 'reps', 'other'];
exports.unitMeasures = unitMeasures;
var unitMeasureSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  }
}, {
  versionKey: false
});

var _default = model('UnitMeasure', unitMeasureSchema);

exports["default"] = _default;