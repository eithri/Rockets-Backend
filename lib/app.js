"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _package = _interopRequireDefault(require("../package.json"));

var _initialSetup = require("./libs/initialSetup.js");

var _playerRoutes = _interopRequireDefault(require("./routes/player.routes.js"));

var _authRoutes = _interopRequireDefault(require("./routes/auth.routes.js"));

var _userRoutes = _interopRequireDefault(require("./routes/user.routes.js"));

var _proofRoutes = _interopRequireDefault(require("./routes/proof.routes.js"));

var _playbookRoutes = _interopRequireDefault(require("./routes/playbook.routes.js"));

var _playRoutes = _interopRequireDefault(require("./routes/play.routes.js"));

var _statisticRoutes = _interopRequireDefault(require("./routes/statistic.routes.js"));

var _cors = _interopRequireDefault(require("cors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
(0, _initialSetup.createRoles)();
(0, _initialSetup.createProofTypes)();
(0, _initialSetup.createUnitMeasures)();
app.set('pkg', _package["default"]);
app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].json());
app.use((0, _cors["default"])());
app.get('/', function (req, res) {
  res.json({
    name: app.get('pkg').name,
    author: app.get('pkg').author,
    description: app.get('pkg').description,
    version: app.get('pkg').version
  });
});
app.use('/api/players', _playerRoutes["default"]);
app.use('/api/auth', _authRoutes["default"]);
app.use('/api/users', _userRoutes["default"]);
app.use('/api/proofs', _proofRoutes["default"]);
app.use('/api/playbook', _playbookRoutes["default"]);
app.use('/api/play', _playRoutes["default"]);
app.use('/api/statistic', _statisticRoutes["default"]);
var _default = app;
exports["default"] = _default;