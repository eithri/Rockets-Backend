"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var best = {
  getBestAll: new Function(),
  getBestMale: new Function(),
  getBestFemale: new Function(),
  getBestProof: new Function(),
  getBestProofMale: new Function(),
  getBestProofFemale: new Function()
};

best.getBestAll = function (array) {
  var best = 0;
  array.forEach(function (e) {
    if (e.listPlayers.length > 0) {
      e.listPlayers.forEach(function (el) {
        if (el.result >= best) {
          best = el.result;
        }
      });
    }
  });
  return best;
};

best.getBestMale = function (array) {
  var best = 0;
  array.forEach(function (e) {
    if (e.listPlayers.length > 0) {
      e.listPlayers.forEach(function (el) {
        if (el.playerId.gender == 'Male') {
          if (el.result >= best) {
            best = el.result;
          }
        }
      });
    }
  });
  return best;
};

best.getBestFemale = function (array) {
  var best = 0;
  array.forEach(function (e) {
    if (e.listPlayers.length > 0) {
      e.listPlayers.forEach(function (el) {
        if (el.playerId.gender == 'Female') {
          if (el.result >= best) {
            best = el.result;
          }
        }
      });
    }
  });
  return best;
};

best.getBestProof = function (proof) {
  var best = 0;

  if (proof.listPlayers.length > 0) {
    proof.listPlayers.forEach(function (el) {
      if (el.result >= best) {
        best = el.result;
      }
    });
  }

  return best;
};

best.getBestProofMale = function (proof) {
  var best = 0;

  if (proof.listPlayers.length > 0) {
    proof.listPlayers.forEach(function (el) {
      if (el.playerId.gender == 'Male') {
        if (el.result >= best) {
          best = el.result;
        }
      }
    });
  }

  return best;
};

best.getBestProofFemale = function (proof) {
  var best = 0;

  if (proof.listPlayers.length > 0) {
    proof.listPlayers.forEach(function (el) {
      if (el.playerId.gender == 'Female') {
        if (el.result >= best) {
          best = el.result;
        }
      }
    });
  }

  return best;
};

var _default = best;
exports["default"] = _default;