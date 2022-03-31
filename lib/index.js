"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("dotenv/config");

var _app = _interopRequireDefault(require("./app.js"));

require("./database.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var port = process.env.PORT || 4000;

var server = _app["default"].listen(port, function () {
  console.log("Server on port", port);
});

var _default = {
  app: _app["default"],
  server: server
};
exports["default"] = _default;