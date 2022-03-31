"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Schema = _mongoose["default"].Schema,
    model = _mongoose["default"].model;
var playSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  imgUrl: {
    type: String,
    unique: true,
    required: true
  },
  description: {
    type: String
  }
}, {
  timestamps: true,
  versionKey: false
});

var _default = model('Play', playSchema);

exports["default"] = _default;