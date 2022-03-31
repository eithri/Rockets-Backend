"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var average = {
  getUnderAverageAll: new Function(),
  getUnderAverageMale: new Function(),
  getUnderAverageFemale: new Function(),
  getOverAverageAll: new Function(),
  getOverAverageMale: new Function(),
  getOverAverageFemale: new Function()
};

average.getUnderAverageAll = function (array) {
  var average = getAverageAll(array);
  var cont = 0;
  array.forEach(function (e) {
    if (e.listPlayers.length > 0) {
      e.listPlayers.forEach(function (el) {
        if (average > el.result) {
          cont++;
        }
      });
    }
  });
  return cont;
};

average.getUnderAverageMale = function (array) {
  var average = getAverageMale(array);
  var cont = 0;
  array.forEach(function (e) {
    if (e.listPlayers.length > 0) {
      e.listPlayers.forEach(function (el) {
        if (average > el.result) {
          if (el.playerId.gender == 'Male') {
            cont++;
          }
        }
      });
    }
  });
  return cont;
};

average.getUnderAverageFemale = function (array) {
  var average = getAverageFemale(array);
  var cont = 0;
  array.forEach(function (e) {
    if (e.listPlayers.length > 0) {
      e.listPlayers.forEach(function (el) {
        if (average > el.result) {
          if (el.playerId.gender == 'Female') {
            cont++;
          }
        }
      });
    }
  });
  return cont;
};

average.getOverAverageAll = function (array) {
  var average = getAverageAll(array);
  var cont = 0;
  array.forEach(function (e) {
    if (e.listPlayers.length > 0) {
      e.listPlayers.forEach(function (el) {
        if (average <= el.result) {
          cont++;
        }
      });
    }
  });
  return cont;
};

average.getOverAverageMale = function (array) {
  var average = getAverageMale(array);
  var cont = 0;
  array.forEach(function (e) {
    if (e.listPlayers.length > 0) {
      e.listPlayers.forEach(function (el) {
        if (average <= el.result) {
          if (el.playerId.gender == 'Male') {
            cont++;
          }
        }
      });
    }
  });
  return cont;
};

average.getOverAverageFemale = function (array) {
  var average = getAverageFemale(array);
  var cont = 0;
  array.forEach(function (e) {
    if (e.listPlayers.length > 0) {
      e.listPlayers.forEach(function (el) {
        if (average <= el.result) {
          if (el.playerId.gender == 'Female') {
            cont++;
          }
        }
      });
    }
  });
  return cont;
};

var _default = average;
exports["default"] = _default;