"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updatePlayById = exports.getPlays = exports.getPlayById = exports.deletePlayById = void 0;

var _Play = _interopRequireDefault(require("../models/Play.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// export const createPlay = async (req, res, next) => {
//     const { name, imgUrl, description } = req.body;
//     const newPlay = new Play({ name, imgUrl, description })
//     const playSaved = await newPlay.save()
//     return res.status(200).json(playSaved)
// }
var getPlays = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var plays;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _Play["default"].find();

          case 2:
            plays = _context.sent;
            res.json(plays);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getPlays(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getPlays = getPlays;

var getPlayById = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var play;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _Play["default"].findById(req.params.playId);

          case 2:
            play = _context2.sent;
            res.status(200).json(play);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getPlayById(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getPlayById = getPlayById;

var updatePlayById = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var updatePlay;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _Play["default"].findByIdAndUpdate(req.params.playId, req.body, {
              "new": true
            });

          case 2:
            updatePlay = _context3.sent;
            res.status(200).json(updatePlay);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function updatePlayById(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.updatePlayById = updatePlayById;

var deletePlayById = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var playId;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            playId = req.params.playId;
            _context4.next = 3;
            return _Play["default"].findByIdAndDelete(playId);

          case 3:
            res.status(204).json();

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function deletePlayById(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.deletePlayById = deletePlayById;