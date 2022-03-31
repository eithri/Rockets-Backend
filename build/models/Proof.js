"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Schema = _mongoose["default"].Schema,
    model = _mongoose["default"].model;
var proofSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  unitMeasure: {
    ref: "UnitMeasure",
    type: Schema.Types.ObjectId,
    required: true
  },
  proofType: {
    ref: "ProofType",
    type: Schema.Types.ObjectId,
    required: true
  },
  description: {
    type: String
  },
  rateMale: {
    type: Number,
    required: true
  },
  rateFemale: {
    type: Number,
    required: true
  },
  listPlayers: [{
    playerId: {
      ref: "Player",
      type: Schema.Types.ObjectId,
      unique: false
    },
    result: {
      type: Number,
      required: true,
      unique: false
    },
    unique: false,
    _id: false
  }]
}, {
  timestamps: true,
  versionKey: false
});

var _default = model('Proof', proofSchema);

exports["default"] = _default;