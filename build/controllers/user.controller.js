"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPlayerByUserId = exports.getUserById = exports.getUsers = exports.createUser = void 0;

var _Player = _interopRequireDefault(require("../models/Player.js"));

var _User = _interopRequireDefault(require("../models/User.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var createUser = function createUser(req, res) {
  res.status(200).json('In Progess');
};

exports.createUser = createUser;

var getUsers = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var users;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _User["default"].find();

          case 2:
            users = _context.sent;
            res.status(200).json(users);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getUsers(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getUsers = getUsers;

var getUserById = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var user, roles;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _User["default"].findById(req.params.userId);

          case 2:
            user = _context2.sent;
            _context2.next = 5;
            return _User["default"].populate(user, {
              path: 'roles'
            });

          case 5:
            roles = _context2.sent;
            res.status(200).json(roles);

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getUserById(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getUserById = getUserById;

var getPlayerByUserId = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var player;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _Player["default"].findOne({
              user: req.params.userId
            });

          case 2:
            player = _context3.sent;
            res.status(200).json(player);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getPlayerByUserId(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getPlayerByUserId = getPlayerByUserId;