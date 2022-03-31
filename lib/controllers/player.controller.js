"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updatePlayerById = exports.getPlayers = exports.getPlayerById = exports.deletePlayerById = exports.createPlayer = void 0;

var _Player = _interopRequireDefault(require("../models/Player.js"));

var _User = _interopRequireDefault(require("../models/User.js"));

var _Role = _interopRequireDefault(require("../models/Role.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var createPlayer = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var _req$body, imgUrl, name, lastName, gender, birthday, documentId, phone, address, position, height, weight, eps, _req$body2, username, email, password, roles, newUser, foundRoles, role, savedUser, user, newPlayer, playerSaved;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$body = req.body, imgUrl = _req$body.imgUrl, name = _req$body.name, lastName = _req$body.lastName, gender = _req$body.gender, birthday = _req$body.birthday, documentId = _req$body.documentId, phone = _req$body.phone, address = _req$body.address, position = _req$body.position, height = _req$body.height, weight = _req$body.weight, eps = _req$body.eps;
            req.body.username = name + documentId;
            req.body.password = documentId;
            _req$body2 = req.body, username = _req$body2.username, email = _req$body2.email, password = _req$body2.password, roles = _req$body2.roles;
            _context.t0 = _User["default"];
            _context.t1 = username;
            _context.t2 = email;
            _context.next = 10;
            return _User["default"].encryptPassword(password);

          case 10:
            _context.t3 = _context.sent;
            _context.t4 = {
              username: _context.t1,
              email: _context.t2,
              password: _context.t3
            };
            newUser = new _context.t0(_context.t4);

            if (!roles) {
              _context.next = 20;
              break;
            }

            _context.next = 16;
            return _Role["default"].find({
              name: {
                $in: roles
              }
            });

          case 16:
            foundRoles = _context.sent;
            newUser.roles = foundRoles.map(function (role) {
              return role._id;
            });
            _context.next = 24;
            break;

          case 20:
            _context.next = 22;
            return _Role["default"].find({
              name: "user"
            });

          case 22:
            role = _context.sent;
            newUser.roles = [role[0]._id];

          case 24:
            _context.next = 26;
            return newUser.save();

          case 26:
            savedUser = _context.sent;
            user = savedUser._id;
            newPlayer = new _Player["default"]({
              imgUrl: imgUrl,
              name: name,
              lastName: lastName,
              gender: gender,
              birthday: birthday,
              documentId: documentId,
              phone: phone,
              address: address,
              position: position,
              height: height,
              weight: weight,
              eps: eps,
              user: user
            });
            _context.next = 31;
            return newPlayer.save();

          case 31:
            playerSaved = _context.sent;
            next();
            _context.next = 38;
            break;

          case 35:
            _context.prev = 35;
            _context.t5 = _context["catch"](0);
            console.log(_context.t5);

          case 38:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 35]]);
  }));

  return function createPlayer(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.createPlayer = createPlayer;

var getPlayers = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var players, users;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _Player["default"].find();

          case 2:
            players = _context2.sent;
            _context2.next = 5;
            return _User["default"].populate(players, {
              path: 'user'
            });

          case 5:
            users = _context2.sent;
            res.json(users);

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getPlayers(_x4, _x5) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getPlayers = getPlayers;

var getPlayerById = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var players, user;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _Player["default"].findById(req.params.playerId);

          case 2:
            players = _context3.sent;
            _context3.next = 5;
            return _User["default"].populate(players, {
              path: 'user'
            });

          case 5:
            user = _context3.sent;
            console.log(user);
            res.status(200).json(user);

          case 8:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getPlayerById(_x6, _x7) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getPlayerById = getPlayerById;

var updatePlayerById = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var updatePlayer, updateUser;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _Player["default"].findByIdAndUpdate(req.params.playerId, req.body, {
              "new": true
            });

          case 2:
            updatePlayer = _context4.sent;
            _context4.next = 5;
            return _User["default"].findByIdAndUpdate(updatePlayer.user, req.body, {
              "new": true
            });

          case 5:
            updateUser = _context4.sent;
            res.status(200).json(updatePlayer);

          case 7:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function updatePlayerById(_x8, _x9) {
    return _ref4.apply(this, arguments);
  };
}();

exports.updatePlayerById = updatePlayerById;

var deletePlayerById = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var playerId;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            playerId = req.params.playerId;
            _context5.next = 3;
            return _Player["default"].findByIdAndDelete(playerId);

          case 3:
            res.status(204).json();

          case 4:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function deletePlayerById(_x10, _x11) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deletePlayerById = deletePlayerById;