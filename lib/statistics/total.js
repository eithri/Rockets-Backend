"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var total = {
  getTotalAll: new Function(),
  getTotalMale: new Function(),
  getTotalFemale: new Function(),
  getTotalProof: new Function(),
  getTotalProofMale: new Function(),
  getTotalProofFemale: new Function()
};

total.getTotalAll = function (array) {
  var cont = 0;
  array.forEach(function (e) {
    if (e.listPlayers.length > 0) {
      e.listPlayers.forEach(function (el) {
        cont++;
      });
    }
  });
  return cont;
};

total.getTotalMale = function (array) {
  var cont = 0;
  array.forEach(function (e) {
    if (e.listPlayers.length > 0) {
      e.listPlayers.forEach(function (el) {
        if (el.playerId.gender == 'Male') {
          cont++;
        }
      });
    }
  });
  return cont;
};

total.getTotalFemale = function (array) {
  var cont = 0;
  array.forEach(function (e) {
    if (e.listPlayers.length > 0) {
      e.listPlayers.forEach(function (el) {
        if (el.playerId.gender == 'Female') {
          cont++;
        }
      });
    }
  });
  return cont;
};

total.getTotalProof = function (proof) {
  var cont = 0;

  if (proof.listPlayers.length > 0) {
    proof.listPlayers.forEach(function (el) {
      cont++;
    });
  }

  return cont;
};

total.getTotalProofMale = function (proof) {
  var cont = 0;

  if (proof.listPlayers.length > 0) {
    proof.listPlayers.forEach(function (el) {
      if (el.playerId.gender == 'Male') {
        cont++;
      }
    });
  }

  return cont;
};

total.getTotalProofFemale = function (proof) {
  var cont = 0;

  if (proof.listPlayers.length > 0) {
    proof.listPlayers.forEach(function (el) {
      if (el.playerId.gender == 'Female') {
        cont++;
      }
    });
  }

  return cont;
};

var _default = total;
exports["default"] = _default;