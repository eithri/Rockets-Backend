"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Schema = _mongoose["default"].Schema,
    model = _mongoose["default"].model;
var playBookSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  imgUrl: {
    type: String,
    unique: true
  },
  description: {
    type: String
  },
  plays: [{
    ref: "Play",
    type: Schema.Types.ObjectId
  }]
}, {
  timestamps: true,
  versionKey: false
});

var _default = model('PlayBook', playBookSchema);

exports["default"] = _default;