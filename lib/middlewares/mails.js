"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendCredentialsMail = exports.recoverPasswordMail = void 0;

var _User = _interopRequireDefault(require("../models/User.js"));

var _nodemailer = _interopRequireDefault(require("nodemailer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var sendCredentialsMail = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var transporter, info;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log(req.body);
            transporter = _nodemailer["default"].createTransport({
              host: "smtp.gmail.com",
              port: 465,
              secure: true,
              // true for 465, false for other ports
              auth: {
                user: 'rockets.duitama@gmail.com',
                // generated ethereal user
                pass: 'ceausfhunocsfozh' // generated ethereal password

              }
            });
            _context.next = 4;
            return transporter.sendMail({
              from: '"Bienvenido Rocket 🚀" <rockets.duitama@gmail.com>',
              // sender address
              to: "felipeesantii@gmail.com",
              // list of receivers
              subject: "Rockets AthMan",
              // Subject line
              html: "\n    <p>Hola ".concat(req.body.name, ",</p>\n    <p>Bienvenido a Rockets \uD83D\uDE80.</p>\n    <p>Acabas de dar el paso inicial para convertirte en un \uD83D\uDE80 y llevar\n     tu rendimiento fisico al otro nivel.</p>\n    <p>Estas son tus credenciales de acceso:</p>\n    <b>Username:</b> ").concat(req.body.username, "\n    <b>Password:</b> ").concat(req.body.password) // html body

            });

          case 4:
            info = _context.sent;
            return _context.abrupt("return", res.json({
              message: 'Player registered successfully'
            }));

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function sendCredentialsMail(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.sendCredentialsMail = sendCredentialsMail;

var recoverPasswordMail = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res, next) {
    var i, newPassword, updateUser, transporter, info;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            req.body.password = '';

            for (i = 0; i < 20; i++) {
              req.body.password += String.fromCharCode(Math.floor(Math.random() * 100) % 27 + 64);
            }

            newPassword = req.body.password;
            _context2.next = 5;
            return _User["default"].encryptPassword(req.body.password);

          case 5:
            req.body.password = _context2.sent;
            _context2.next = 8;
            return _User["default"].findOneAndUpdate({
              email: req.body.email
            }, req.body, {
              "new": true
            });

          case 8:
            updateUser = _context2.sent;
            console.log(updateUser);
            transporter = _nodemailer["default"].createTransport({
              host: "smtp.gmail.com",
              port: 465,
              secure: true,
              // true for 465, false for other ports
              auth: {
                user: 'rockets.duitama@gmail.com',
                // generated ethereal user
                pass: 'ceausfhunocsfozh' // generated ethereal password

              }
            });
            _context2.next = 13;
            return transporter.sendMail({
              from: 'Nueva Contraseña Rocket 🚀" <rockets.duitama@gmail.com>',
              // sender address
              to: "felipeesantii@gmail.com",
              // list of receivers
              subject: "Rockets AthMan",
              // Subject line
              html: "\n  <p>Tu nueva contrase\xF1a de acceso a Rockets \uD83D\uDE80 es:.</p>\n  <b>Password:</b> ".concat(newPassword) // html body

            });

          case 13:
            info = _context2.sent;
            return _context2.abrupt("return", res.json({
              message: 'Your password has been restored, please check your email'
            }));

          case 15:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function recoverPasswordMail(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

exports.recoverPasswordMail = recoverPasswordMail;