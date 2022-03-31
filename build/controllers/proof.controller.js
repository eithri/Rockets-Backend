"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteProofResult = exports.editProofResult = exports.addProofResult = exports.deleteProofById = exports.updateProofById = exports.getProofById = exports.getProofs = exports.createProof = void 0;

var _Proof = _interopRequireDefault(require("../models/Proof.js"));

var _ProofTypes = _interopRequireDefault(require("../models/ProofTypes.js"));

var _UnitMesuare = _interopRequireDefault(require("../models/UnitMesuare.js"));

var _Player = _interopRequireDefault(require("../models/Player.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var createProof = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, name, unitMeasure, proofType, description, rateMale, rateFemale, newProof, _unitMeasure, _proofType, savedProof;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, name = _req$body.name, unitMeasure = _req$body.unitMeasure, proofType = _req$body.proofType, description = _req$body.description, rateMale = _req$body.rateMale, rateFemale = _req$body.rateFemale;
            newProof = (0, _Proof["default"])({
              name: name,
              description: description,
              rateMale: rateMale,
              rateFemale: rateFemale
            });

            if (!unitMeasure) {
              _context.next = 8;
              break;
            }

            _context.next = 5;
            return verifyUnitMeasure(unitMeasure);

          case 5:
            newProof.unitMeasure = _context.sent;
            _context.next = 12;
            break;

          case 8:
            _context.next = 10;
            return _UnitMesuare["default"].find({
              name: "other"
            });

          case 10:
            _unitMeasure = _context.sent;
            newProof.unitMeasure = [_unitMeasure[0]._id];

          case 12:
            if (!proofType) {
              _context.next = 18;
              break;
            }

            _context.next = 15;
            return verifyProofType(proofType);

          case 15:
            newProof.proofType = _context.sent;
            _context.next = 22;
            break;

          case 18:
            _context.next = 20;
            return _ProofTypes["default"].find({
              name: "other"
            });

          case 20:
            _proofType = _context.sent;
            newProof.proofType = [_proofType[0]._id];

          case 22:
            console.log(newProof);
            _context.next = 25;
            return newProof.save();

          case 25:
            savedProof = _context.sent;
            res.json(savedProof);

          case 27:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function createProof(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createProof = createProof;

var getProofs = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.t0 = res.status(200);
            _context2.t1 = populateProof;
            _context2.next = 4;
            return _Proof["default"].find();

          case 4:
            _context2.t2 = _context2.sent;
            _context2.next = 7;
            return (0, _context2.t1)(_context2.t2);

          case 7:
            _context2.t3 = _context2.sent;

            _context2.t0.json.call(_context2.t0, _context2.t3);

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getProofs(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getProofs = getProofs;

var getProofById = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            console.log(req.params);
            _context3.t0 = res.status(200);
            _context3.t1 = populateProof;
            _context3.next = 5;
            return _Proof["default"].findById(req.params.proofId);

          case 5:
            _context3.t2 = _context3.sent;
            _context3.next = 8;
            return (0, _context3.t1)(_context3.t2);

          case 8:
            _context3.t3 = _context3.sent;

            _context3.t0.json.call(_context3.t0, _context3.t3);

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getProofById(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getProofById = getProofById;

var updateProofById = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var _req$body2, unitMeasure, proofType, updateProof;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _req$body2 = req.body, unitMeasure = _req$body2.unitMeasure, proofType = _req$body2.proofType;

            if (!unitMeasure) {
              _context4.next = 5;
              break;
            }

            _context4.next = 4;
            return verifyUnitMeasure(unitMeasure);

          case 4:
            req.body.unitMeasure = _context4.sent;

          case 5:
            if (!proofType) {
              _context4.next = 9;
              break;
            }

            _context4.next = 8;
            return verifyProofType(proofType);

          case 8:
            req.body.proofType = _context4.sent;

          case 9:
            _context4.next = 11;
            return _Proof["default"].findByIdAndUpdate(req.params.proofId, req.body, {
              "new": true
            });

          case 11:
            updateProof = _context4.sent;
            _context4.t0 = res.status(200);
            _context4.next = 15;
            return populateProof(updateProof);

          case 15:
            _context4.t1 = _context4.sent;

            _context4.t0.json.call(_context4.t0, _context4.t1);

          case 17:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function updateProofById(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.updateProofById = updateProofById;

var deleteProofById = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var proofId, del;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            proofId = req.params.proofId;
            _context5.next = 3;
            return _Proof["default"].findByIdAndDelete(proofId);

          case 3:
            del = _context5.sent;
            res.status(200).json(del ? 'Proof Eliminated' : 'Proof doesnt exist');

          case 5:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function deleteProofById(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deleteProofById = deleteProofById;

var addProofResult = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var proof, proofArray, exist, updateProof;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return _Proof["default"].findById(req.params.proofId);

          case 2:
            proof = _context6.sent;

            if (!proof) {
              _context6.next = 19;
              break;
            }

            proofArray = Array.from(proof.listPlayers);
            exist = proofArray.find(function (e) {
              return e.playerId == req.body.playerId;
            });

            if (!exist) {
              _context6.next = 8;
              break;
            }

            return _context6.abrupt("return", res.status(200).json({
              message: 'This player already has a result in this proof'
            }));

          case 8:
            proofArray.push(req.body);
            _context6.next = 11;
            return _Proof["default"].findByIdAndUpdate(req.params.proofId, {
              listPlayers: proofArray
            }, {
              "new": true
            });

          case 11:
            updateProof = _context6.sent;
            _context6.t0 = res.status(200);
            _context6.next = 15;
            return populateProof(updateProof);

          case 15:
            _context6.t1 = _context6.sent;

            _context6.t0.json.call(_context6.t0, _context6.t1);

            _context6.next = 20;
            break;

          case 19:
            return _context6.abrupt("return", res.json({
              message: 'Proof doesnt exist'
            }));

          case 20:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function addProofResult(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.addProofResult = addProofResult;

var editProofResult = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res) {
    var proof, proofArray, edit, updateProof;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return _Proof["default"].findById(req.params.proofId);

          case 2:
            proof = _context7.sent;

            if (!proof) {
              _context7.next = 18;
              break;
            }

            proofArray = Array.from(proof.listPlayers);
            edit = proofArray.find(function (e) {
              return e.playerId == req.body.playerId;
            });

            if (!edit) {
              _context7.next = 16;
              break;
            }

            edit.result = req.body.result;
            _context7.next = 10;
            return _Proof["default"].findByIdAndUpdate(req.params.proofId, {
              listPlayers: proofArray
            }, {
              "new": true
            });

          case 10:
            updateProof = _context7.sent;
            _context7.t0 = res.status(200);
            _context7.next = 14;
            return populateProof(updateProof);

          case 14:
            _context7.t1 = _context7.sent;
            return _context7.abrupt("return", _context7.t0.json.call(_context7.t0, _context7.t1));

          case 16:
            _context7.next = 19;
            break;

          case 18:
            return _context7.abrupt("return", res.json({
              message: 'The result doesnt have edit'
            }));

          case 19:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function editProofResult(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();

exports.editProofResult = editProofResult;

var deleteProofResult = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(req, res) {
    var proof, proofArray, edit, updateProof;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.next = 2;
            return _Proof["default"].findById(req.params.proofId);

          case 2:
            proof = _context8.sent;

            if (!proof) {
              _context8.next = 18;
              break;
            }

            proofArray = Array.from(proof.listPlayers);
            edit = proofArray.filter(function (e) {
              if (e.playerId != req.body.playerId) {
                return e;
              }
            });
            console.log(edit);

            if (!edit) {
              _context8.next = 16;
              break;
            }

            _context8.next = 10;
            return _Proof["default"].findByIdAndUpdate(req.params.proofId, {
              listPlayers: edit
            }, {
              "new": true
            });

          case 10:
            updateProof = _context8.sent;
            _context8.t0 = res.status(200);
            _context8.next = 14;
            return populateProof(updateProof);

          case 14:
            _context8.t1 = _context8.sent;
            return _context8.abrupt("return", _context8.t0.json.call(_context8.t0, _context8.t1));

          case 16:
            _context8.next = 19;
            break;

          case 18:
            return _context8.abrupt("return", res.json({
              message: 'The result doesnt exist'
            }));

          case 19:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));

  return function deleteProofResult(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();

exports.deleteProofResult = deleteProofResult;

var populateProof = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(proof) {
    var unitMeasure, proofTypes, player;
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.next = 2;
            return _UnitMesuare["default"].populate(proof, {
              path: 'unitMeasure'
            });

          case 2:
            unitMeasure = _context9.sent;
            _context9.next = 5;
            return _ProofTypes["default"].populate(unitMeasure, {
              path: 'proofType'
            });

          case 5:
            proofTypes = _context9.sent;
            _context9.next = 8;
            return _Player["default"].populate(proofTypes, {
              path: 'listPlayers.playerId'
            });

          case 8:
            player = _context9.sent;
            return _context9.abrupt("return", player ? player : 'Proof doesnt exist');

          case 10:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  }));

  return function populateProof(_x17) {
    return _ref9.apply(this, arguments);
  };
}();

var verifyProofType = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(proofType) {
    var foundproofType;
    return regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _context10.next = 2;
            return _ProofTypes["default"].find({
              name: {
                $in: proofType
              }
            });

          case 2:
            foundproofType = _context10.sent;
            return _context10.abrupt("return", foundproofType.map(function (proofType) {
              return proofType._id;
            }));

          case 4:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10);
  }));

  return function verifyProofType(_x18) {
    return _ref10.apply(this, arguments);
  };
}();

var verifyUnitMeasure = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(unitMeasure) {
    var foundUnitMeasure;
    return regeneratorRuntime.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _context11.next = 2;
            return _UnitMesuare["default"].find({
              name: {
                $in: unitMeasure
              }
            });

          case 2:
            foundUnitMeasure = _context11.sent;
            return _context11.abrupt("return", foundUnitMeasure.map(function (unitMeasure) {
              return unitMeasure._id;
            }));

          case 4:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11);
  }));

  return function verifyUnitMeasure(_x19) {
    return _ref11.apply(this, arguments);
  };
}();