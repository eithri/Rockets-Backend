"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.proofTypes = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Schema = _mongoose["default"].Schema,
    model = _mongoose["default"].model;
var proofTypes = ['agility', 'speed', 'resistance', 'catching', 'strength', 'jump', 'power', 'other'];
exports.proofTypes = proofTypes;
var proofTypeSchema = new Schema({
  name: {
    type: String,
    required: true
  }
}, {
  versionKey: false
});

var _default = model('ProofType', proofTypeSchema);

exports["default"] = _default;