"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addPlay = exports.deletePlayBookById = exports.updatePlayerById = exports.getPlayBookById = exports.getPlayBooks = exports.createPlayBook = void 0;

var _Play = _interopRequireDefault(require("../models/Play.js"));

var _PlayBook = _interopRequireDefault(require("../models/PlayBook.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var createPlayBook = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var _req$body, name, imgUrl, description, newPlayBook, playBookSaved;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$body = req.body, name = _req$body.name, imgUrl = _req$body.imgUrl, description = _req$body.description;
            newPlayBook = new _PlayBook["default"]({
              name: name,
              imgUrl: imgUrl,
              description: description
            });
            _context.next = 5;
            return newPlayBook.save();

          case 5:
            playBookSaved = _context.sent;
            return _context.abrupt("return", res.status(200).json(playBookSaved));

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](0);

            if (!(_context.t0.message.includes('E11000') && _context.t0.message.includes('name'))) {
              _context.next = 15;
              break;
            }

            return _context.abrupt("return", res.json({
              message: 'name playbook already exist'
            }));

          case 15:
            if (!(_context.t0.message.includes('E11000') && _context.t0.message.includes('imgUrl'))) {
              _context.next = 17;
              break;
            }

            return _context.abrupt("return", res.json({
              message: 'image playbook already exist'
            }));

          case 17:
            console.log(_context.t0);

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 9]]);
  }));

  return function createPlayBook(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.createPlayBook = createPlayBook;

var getPlayBooks = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var playBooks, plays;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _PlayBook["default"].find();

          case 2:
            playBooks = _context2.sent;
            _context2.next = 5;
            return _Play["default"].populate(playBooks, {
              path: 'plays'
            });

          case 5:
            plays = _context2.sent;
            res.json(plays);

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getPlayBooks(_x4, _x5) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getPlayBooks = getPlayBooks;

var getPlayBookById = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var playBook, plays;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _PlayBook["default"].findById(req.params.playBookId);

          case 2:
            playBook = _context3.sent;
            _context3.next = 5;
            return _Play["default"].populate(playBook, {
              path: 'plays'
            });

          case 5:
            plays = _context3.sent;
            res.status(200).json(plays);

          case 7:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getPlayBookById(_x6, _x7) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getPlayBookById = getPlayBookById;

var updatePlayerById = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var updatePlayBook;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _PlayBook["default"].findByIdAndUpdate(req.params.playBookId, req.body, {
              "new": true
            });

          case 2:
            updatePlayBook = _context4.sent;
            res.status(200).json(updatePlayBook);

          case 4:
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

var deletePlayBookById = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var playBookId;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            playBookId = req.params.playBookId;
            _context5.next = 3;
            return _PlayBook["default"].findByIdAndDelete(playBookId);

          case 3:
            res.status(200).json({
              message: 'Playbook Deleted'
            });

          case 4:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function deletePlayBookById(_x10, _x11) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deletePlayBookById = deletePlayBookById;

var addPlay = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var _req$body2, name, imgUrl, description, playBook, playsArray, newPlay, playSaved, updateplayBook, plays;

    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _req$body2 = req.body, name = _req$body2.name, imgUrl = _req$body2.imgUrl, description = _req$body2.description;
            _context6.next = 4;
            return _PlayBook["default"].findById(req.params.playBookId);

          case 4:
            playBook = _context6.sent;
            playsArray = Array.from(playBook.plays);
            newPlay = new _Play["default"]({
              name: name,
              imgUrl: imgUrl,
              description: description
            });
            _context6.next = 9;
            return newPlay.save();

          case 9:
            playSaved = _context6.sent;
            console.log(playsArray);
            playsArray.push(playSaved._id);
            console.log(playsArray);
            _context6.next = 15;
            return _PlayBook["default"].findByIdAndUpdate(req.params.playBookId, {
              plays: playsArray
            }, {
              "new": true
            });

          case 15:
            updateplayBook = _context6.sent;
            _context6.next = 18;
            return _Play["default"].populate(updateplayBook, {
              path: 'plays'
            });

          case 18:
            plays = _context6.sent;
            return _context6.abrupt("return", res.status(200).json(plays));

          case 22:
            _context6.prev = 22;
            _context6.t0 = _context6["catch"](0);

            if (!(_context6.t0.message.includes('E11000') && _context6.t0.message.includes('name'))) {
              _context6.next = 28;
              break;
            }

            return _context6.abrupt("return", res.json({
              message: 'name play already exist'
            }));

          case 28:
            if (!(_context6.t0.message.includes('E11000') && _context6.t0.message.includes('imgUrl'))) {
              _context6.next = 30;
              break;
            }

            return _context6.abrupt("return", res.json({
              message: 'image play already exist'
            }));

          case 30:
            console.log(_context6.t0);

          case 31:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 22]]);
  }));

  return function addPlay(_x12, _x13) {
    return _ref6.apply(this, arguments);
  };
}();

exports.addPlay = addPlay;