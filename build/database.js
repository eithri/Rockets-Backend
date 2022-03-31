"use strict";

require("dotenv/config");

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var MONGO_DB_URI = process.env.MONGO_DB_URI;
var connection = MONGO_DB_URI;

_mongoose["default"].connect(connection, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
}).then(function (db) {
  return console.log('Db is connected');
})["catch"](function (error) {
  return console.log(error);
});