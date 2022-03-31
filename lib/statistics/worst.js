"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var worst = {
  getWorstAll: new Function(),
  getWorstMale: new Function(),
  getWorstFemale: new Function(),
  getWorstProof: new Function(),
  getWorstProofMale: new Function(),
  getWorstProofFemale: new Function()
};

worst.getWorstAll = function (array) {
  var worst = 9876;
  array.forEach(function (e) {
    if (e.listPlayers.length > 0) {
      e.listPlayers.forEach(function (el) {
        if (el.result <= worst) {
          worst = el.result;
        }
      });
    }
  });

  if (worst == 9876) {
    return 0;
  }

  return worst;
};

worst.getWorstMale = function (array) {
  var worst = 9876;
  array.forEach(function (e) {
    if (e.listPlayers.length > 0) {
      e.listPlayers.forEach(function (el) {
        if (el.playerId.gender == 'Male') {
          if (el.result <= worst) {
            worst = el.result;
          }
        }
      });
    }
  });

  if (worst == 9876) {
    return 0;
  }

  return worst;
};

worst.getWorstFemale = function (array) {
  var worst = 9876;
  array.forEach(function (e) {
    if (e.listPlayers.length > 0) {
      e.listPlayers.forEach(function (el) {
        if (el.playerId.gender == 'Female') {
          if (el.result <= worst) {
            worst = el.result;
          }
        }
      });
    }
  });

  if (worst == 9876) {
    return 0;
  }

  return worst;
};

worst.getWorstProof = function (proof) {
  var worst = 9876;

  if (proof.listPlayers.length > 0) {
    proof.listPlayers.forEach(function (el) {
      if (el.result <= worst) {
        worst = el.result;
      }
    });
  }

  if (worst == 9876) {
    return 0;
  }

  return worst;
};

worst.getWorstProofMale = function (proof) {
  var worst = 9876;

  if (proof.listPlayers.length > 0) {
    proof.listPlayers.forEach(function (el) {
      if (el.playerId.gender == 'Male') {
        if (el.result <= worst) {
          worst = el.result;
        }
      }
    });
  }

  if (worst == 9876) {
    return 0;
  }

  return worst;
};

worst.getWorstProofFemale = function (proof) {
  var worst = 9876;

  if (proof.listPlayers.length > 0) {
    proof.listPlayers.forEach(function (el) {
      if (el.playerId.gender == 'Female') {
        if (el.result <= worst) {
          worst = el.result;
        }
      }
    });
  }

  if (worst == 9876) {
    return 0;
  }

  return worst;
};

var _default = worst;
exports["default"] = _default;