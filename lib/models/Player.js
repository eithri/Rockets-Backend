"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Schema = _mongoose["default"].Schema,
    model = _mongoose["default"].model;
var playerSchema = new Schema({
  imgUrl: {
    type: String
  },
  name: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  birthday: {
    type: String,
    required: true
  },
  documentId: {
    type: String,
    unique: true
  },
  phone: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  position: {
    type: String
  },
  height: {
    type: String,
    required: true
  },
  weight: {
    type: String,
    required: true
  },
  eps: {
    type: String,
    required: true
  },
  user: {
    ref: "User",
    type: Schema.Types.ObjectId,
    required: true
  }
}, {
  timestamps: true,
  versionKey: false
});

var _default = model('Player', playerSchema);

exports["default"] = _default;