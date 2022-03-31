"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createUnitMeasures = exports.createProofTypes = exports.createRoles = void 0;

var _Role = _interopRequireDefault(require("../models/Role.js"));

var _ProofTypes = _interopRequireDefault(require("../models/ProofTypes.js"));

var _UnitMesuare = _interopRequireDefault(require("../models/UnitMesuare.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var createRoles = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var count, values;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Role["default"].estimatedDocumentCount();

          case 3:
            count = _context.sent;

            if (!(count > 0)) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return");

          case 6:
            _context.next = 8;
            return Promise.all([new _Role["default"]({
              name: "user"
            }).save(), new _Role["default"]({
              name: "moderator"
            }).save(), new _Role["default"]({
              name: "admin"
            }).save()]);

          case 8:
            values = _context.sent;
            console.log(values);
            _context.next = 15;
            break;

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 12]]);
  }));

  return function createRoles() {
    return _ref.apply(this, arguments);
  };
}();

exports.createRoles = createRoles;

var createProofTypes = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var count, values;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _ProofTypes["default"].estimatedDocumentCount();

          case 3:
            count = _context2.sent;

            if (!(count > 0)) {
              _context2.next = 6;
              break;
            }

            return _context2.abrupt("return");

          case 6:
            _context2.next = 8;
            return Promise.all([new _ProofTypes["default"]({
              name: "agility"
            }).save(), new _ProofTypes["default"]({
              name: "speed"
            }).save(), new _ProofTypes["default"]({
              name: "resistance"
            }).save(), new _ProofTypes["default"]({
              name: "catching"
            }).save(), new _ProofTypes["default"]({
              name: "strength"
            }).save(), new _ProofTypes["default"]({
              name: "jump"
            }).save(), new _ProofTypes["default"]({
              name: "power"
            }).save(), new _ProofTypes["default"]({
              name: "other"
            }).save()]);

          case 8:
            values = _context2.sent;
            console.log(values);
            _context2.next = 15;
            break;

          case 12:
            _context2.prev = 12;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);

          case 15:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 12]]);
  }));

  return function createProofTypes() {
    return _ref2.apply(this, arguments);
  };
}();

exports.createProofTypes = createProofTypes;

var createUnitMeasures = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var count, values;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _UnitMesuare["default"].estimatedDocumentCount();

          case 3:
            count = _context3.sent;

            if (!(count > 0)) {
              _context3.next = 6;
              break;
            }

            return _context3.abrupt("return");

          case 6:
            _context3.next = 8;
            return Promise.all([new _UnitMesuare["default"]({
              name: "seconds"
            }).save(), new _UnitMesuare["default"]({
              name: "meters"
            }).save(), new _UnitMesuare["default"]({
              name: "reps"
            }).save(), new _UnitMesuare["default"]({
              name: "other"
            }).save()]);

          case 8:
            values = _context3.sent;
            console.log(values);
            _context3.next = 15;
            break;

          case 12:
            _context3.prev = 12;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0);

          case 15:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 12]]);
  }));

  return function createUnitMeasures() {
    return _ref3.apply(this, arguments);
  };
}();

exports.createUnitMeasures = createUnitMeasures;