"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var playBookCtrl = _interopRequireWildcard(require("../controllers/playbook.controller.js"));

var _index = require("../middlewares/index.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var router = (0, _express.Router)();
router.get('/', [_index.authJwt.verifyToken], playBookCtrl.getPlayBooks);
router.post('/', [_index.authJwt.verifyToken, _index.authJwt.isModerator], playBookCtrl.createPlayBook);
router.get('/:playBookId', [_index.authJwt.verifyToken], playBookCtrl.getPlayBookById);
router.put('/:playBookId', [_index.authJwt.verifyToken, _index.authJwt.isAdmin], playBookCtrl.updatePlayerById);
router["delete"]('/:playBookId', [_index.authJwt.verifyToken, _index.authJwt.isAdmin], playBookCtrl.deletePlayBookById);
router.put('/addPlay/:playBookId', [_index.authJwt.verifyToken, _index.authJwt.isAdmin], playBookCtrl.addPlay);
var _default = router;
exports["default"] = _default;