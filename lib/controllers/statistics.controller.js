"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStatisticsByProof = exports.getStatisticsByCategory = void 0;

var _Proof = _interopRequireDefault(require("../models/Proof.js"));

var _ProofTypes = _interopRequireDefault(require("../models/ProofTypes.js"));

var _UnitMesuare = _interopRequireDefault(require("../models/UnitMesuare.js"));

var _Player = _interopRequireDefault(require("../models/Player.js"));

var _average = _interopRequireDefault(require("../statistics/average.js"));

var _best = _interopRequireDefault(require("../statistics/best.js"));

var _worst = _interopRequireDefault(require("../statistics/worst.js"));

var _total = _interopRequireDefault(require("../statistics/total.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var agility = [];
var speed = [];
var resistance = [];
var catching = [];
var strength = [];
var jump = [];
var power = [];
var other = [];

var getStatisticsByCategory = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var prueba, aux, aux2, response, i;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.t0 = populateProof;
            _context.next = 3;
            return _Proof["default"].find();

          case 3:
            _context.t1 = _context.sent;
            _context.next = 6;
            return (0, _context.t0)(_context.t1);

          case 6:
            prueba = _context.sent;
            _context.next = 9;
            return separateCategories(prueba);

          case 9:
            aux = [agility, speed, resistance, catching, strength, jump, power, other];
            aux2 = ["agility", "speed", "resistance", "catching", "strength", "jump", "power", "other"];
            response = ''; // for (let i = 0; i < aux.length; i++) {
            //         response += `"${aux2[i]}":{"averageAll": ${Average.getAverageAll(aux[i])},"averageMale" : ${Average.getAverageMale(aux[i])},"averageFemale" : ${Average.getAverageFemale(aux[i])},"best" : ${Best.getBestAll(aux[i])},"bestMale" : ${Best.getBestMale(aux[i])},"bestFemale" : ${Best.getBestFemale(aux[i])},"worst" : ${Worst.getWorstAll(aux[i])},"worstMale" : ${Worst.getWorstMale(aux[i])},"worstFemale" : ${Worst.getWorstFemale(aux[i])},"quantity": ${Total.getTotalAll(aux[i])},"quantityMale": ${Total.getTotalMale(aux[i])},"quantityFemale": ${Total.getTotalFemale(aux[i])},"underAverage": ${Average.getUnderAverageAll(aux[i])},"underAverageMale": ${Average.getUnderAverageMale(aux[i])},"underAverageFemale": ${Average.getUnderAverageFemale(aux[i])},"overAverage": ${Average.getOverAverageAll(aux[i])},"overAverageMale": ${Average.getOverAverageMale(aux[i])},"overAverageFemale": ${Average.getOverAverageFemale(aux[i])}},`
            // }

            i = 0;
            aux.forEach(function (e) {
              response += "\"".concat(aux2[i], "\":{\"averageAll\": ").concat(_average["default"].getAverageAll(e), ",\"averageMale\" : ").concat(_average["default"].getAverageMale(e), ",\"averageFemale\" : ").concat(_average["default"].getAverageFemale(e), ",\"best\" : ").concat(_best["default"].getBestAll(e), ",\"bestMale\" : ").concat(_best["default"].getBestMale(e), ",\"bestFemale\" : ").concat(_best["default"].getBestFemale(e), ",\"worst\" : ").concat(_worst["default"].getWorstAll(e), ",\"worstMale\" : ").concat(_worst["default"].getWorstMale(e), ",\"worstFemale\" : ").concat(_worst["default"].getWorstFemale(e), ",\"quantity\": ").concat(_total["default"].getTotalAll(e), ",\"quantityMale\": ").concat(_total["default"].getTotalMale(e), ",\"quantityFemale\": ").concat(_total["default"].getTotalFemale(e), ",\"underAverage\": ").concat(_average["default"].getUnderAverageAll(e), ",\"underAverageMale\": ").concat(_average["default"].getUnderAverageMale(e), ",\"underAverageFemale\": ").concat(_average["default"].getUnderAverageFemale(e), ",\"overAverage\": ").concat(_average["default"].getOverAverageAll(e), ",\"overAverageMale\": ").concat(_average["default"].getOverAverageMale(e), ",\"overAverageFemale\": ").concat(_average["default"].getOverAverageFemale(e), "},");
              i++;
            });
            response = response.slice(1, -1);
            return _context.abrupt("return", res.json(JSON.parse("{\"".concat(response, "}"))));

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getStatisticsByCategory(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.getStatisticsByCategory = getStatisticsByCategory;

var getStatisticsByProof = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res, next) {
    var typeProof, prueba, aux, aux2, i, response;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            typeProof = req.params.typeProof;
            _context2.t0 = populateProof;
            _context2.next = 4;
            return _Proof["default"].find();

          case 4:
            _context2.t1 = _context2.sent;
            _context2.next = 7;
            return (0, _context2.t0)(_context2.t1);

          case 7:
            prueba = _context2.sent;
            _context2.next = 10;
            return separateCategories(prueba);

          case 10:
            aux = [agility, speed, resistance, catching, strength, jump, power, other];
            aux2 = ["agility", "speed", "resistance", "catching", "strength", "jump", "power", "other"];
            i = aux2.findIndex(function (e) {
              return e == typeProof;
            });
            response = '';

            if (!(aux[i].length > 0)) {
              _context2.next = 20;
              break;
            }

            aux[i].forEach(function (e) {
              response += "\"".concat(e.name, "\":{\"averageProof\": ").concat(_average["default"].getAverageProof(e), ",\"averageMale\" : ").concat(_average["default"].getAverageProofMale(e), ",\"averageFemale\" : ").concat(_average["default"].getAverageProofFemale(e), ",\"best\" : ").concat(_best["default"].getBestProof(e), ",\"bestMale\" : ").concat(_best["default"].getBestProofMale(e), ",\"bestFemale\" : ").concat(_best["default"].getBestProofFemale(e), ",\"worst\" : ").concat(_worst["default"].getWorstProof(e), ",\"worstMale\" : ").concat(_worst["default"].getWorstProofMale(e), ",\"worstFemale\" : ").concat(_worst["default"].getWorstProofFemale(e), ",\"quantity\": ").concat(_total["default"].getTotalProof(e), ",\"quantityMale\": ").concat(_total["default"].getTotalProofMale(e), ",\"quantityFemale\": ").concat(_total["default"].getTotalProofFemale(e), ",\"underAverage\": ").concat(_average["default"].getUnderAverageProof(e), ",\"underAverageMale\": ").concat(_average["default"].getUnderAverageProofMale(e), ",\"underAverageFemale\": ").concat(_average["default"].getUnderAverageProofFemale(e), ",\"overAverage\": ").concat(_average["default"].getOverAverageProof(e), ",\"overAverageMale\": ").concat(_average["default"].getOverAverageProofMale(e), ",\"overAverageFemale\": ").concat(_average["default"].getOverAverageProofFemale(e), "},");
            });
            response = response.slice(1, -1);
            return _context2.abrupt("return", res.json(JSON.parse("{\"".concat(response, "}"))));

          case 20:
            return _context2.abrupt("return", res.json({
              message: "There is not proof in this category"
            }));

          case 21:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getStatisticsByProof(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getStatisticsByProof = getStatisticsByProof;

var separateCategories = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(prueba) {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            agility = [];
            speed = [];
            resistance = [];
            catching = [];
            strength = [];
            jump = [];
            power = [];
            other = [];
            _context3.next = 10;
            return prueba.forEach(function (e) {
              switch (e.proofType.name) {
                case 'agility':
                  agility.push(e);
                  break;

                case 'speed':
                  speed.push(e);
                  break;

                case 'resistance':
                  resistance.push(e);
                  break;

                case 'catching':
                  catching.push(e);
                  break;

                case 'strength':
                  strength.push(e);
                  break;

                case 'jump':
                  jump.push(e);
                  break;

                case 'power':
                  power.push(e);
                  break;

                case 'other':
                  other.push(e);
                  break;

                default:
                  break;
              }
            });

          case 10:
            return _context3.abrupt("return", _context3.sent);

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function separateCategories(_x7) {
    return _ref3.apply(this, arguments);
  };
}();

var populateProof = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(proof) {
    var unitMeasure, proofTypes, player;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _UnitMesuare["default"].populate(proof, {
              path: 'unitMeasure'
            });

          case 2:
            unitMeasure = _context4.sent;
            _context4.next = 5;
            return _ProofTypes["default"].populate(unitMeasure, {
              path: 'proofType'
            });

          case 5:
            proofTypes = _context4.sent;
            _context4.next = 8;
            return _Player["default"].populate(proofTypes, {
              path: 'listPlayers.playerId'
            });

          case 8:
            player = _context4.sent;
            return _context4.abrupt("return", player ? player : 'Proof doesnt exist');

          case 10:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function populateProof(_x8) {
    return _ref4.apply(this, arguments);
  };
}();