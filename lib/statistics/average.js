"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var average = {
  getAverageAll: new Function(),
  getAverageMale: new Function(),
  getAverageFemale: new Function(),
  getUnderAverageAll: new Function(),
  getUnderAverageMale: new Function(),
  getUnderAverageFemale: new Function(),
  getOverAverageAll: new Function(),
  getOverAverageMale: new Function(),
  getOverAverageFemale: new Function(),
  getAverageProof: new Function(),
  getAverageProofMale: new Function(),
  getAverageProofFemale: new Function(),
  getUnderAverageProof: new Function(),
  getUnderAverageProofMale: new Function(),
  getUnderAverageProofFemale: new Function(),
  getOverAverageProof: new Function(),
  getOverAverageProofMale: new Function(),
  getOverAverageProofFemale: new Function()
};

function getAverageAll(array) {
  var average = 0;
  var cont = 0;
  array.forEach(function (e) {
    if (e.listPlayers.length > 0) {
      e.listPlayers.forEach(function (el) {
        average += el.result;
        cont++;
      });
    }
  });

  if (average == 0 && cont == 0) {
    return 0;
  }

  average = average / cont;
  return average;
}

function getAverageMale(array) {
  var average = 0;
  var cont = 0;
  array.forEach(function (e) {
    if (e.listPlayers.length > 0) {
      e.listPlayers.forEach(function (el) {
        if (el.playerId.gender == 'Male') {
          average += el.result;
          cont++;
        }
      });
    }
  });

  if (average == 0 && cont == 0) {
    return 0;
  }

  average = average / cont;
  return average;
}

function getAverageFemale(array) {
  var average = 0;
  var cont = 0;
  array.forEach(function (e) {
    if (e.listPlayers.length > 0) {
      e.listPlayers.forEach(function (el) {
        if (el.playerId.gender == 'Female') {
          average += el.result;
          cont++;
        }
      });
    }
  });

  if (average == 0 && cont == 0) {
    return 0;
  }

  average = average / cont;
  return average;
}

function getAverageProof(proof) {
  var average = 0;
  var cont = 0;

  if (proof.listPlayers.length > 0) {
    proof.listPlayers.forEach(function (el) {
      average += el.result;
      cont++;
    });
  }

  if (average == 0 && cont == 0) {
    return 0;
  }

  average = average / cont;
  return average;
}

function getAverageProofMale(proof) {
  var average = 0;
  var cont = 0;

  if (proof.listPlayers.length > 0) {
    proof.listPlayers.forEach(function (el) {
      if (el.playerId.gender == 'Male') {
        average += el.result;
        cont++;
      }
    });
  }

  if (average == 0 && cont == 0) {
    return 0;
  }

  average = average / cont;
  return average;
}

function getAverageProofFemale(proof) {
  var average = 0;
  var cont = 0;

  if (proof.listPlayers.length > 0) {
    proof.listPlayers.forEach(function (el) {
      if (el.playerId.gender == 'Female') {
        average += el.result;
        cont++;
      }
    });
  }

  if (average == 0 && cont == 0) {
    return 0;
  }

  average = average / cont;
  return average;
}

average.getAverageAll = function (array) {
  return getAverageAll(array);
};

average.getAverageMale = function (array) {
  return getAverageMale(array);
};

average.getAverageFemale = function (array) {
  return getAverageFemale(array);
};

average.getAverageProof = function (proof) {
  return getAverageProof(proof);
};

average.getAverageProofMale = function (proof) {
  return getAverageProofMale(proof);
};

average.getAverageProofFemale = function (proof) {
  return getAverageProofFemale(proof);
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

average.getUnderAverageProof = function (proof) {
  var average = getAverageProof(proof);
  var cont = 0;

  if (proof.listPlayers.length > 0) {
    proof.listPlayers.forEach(function (el) {
      if (average > el.result) {
        cont++;
      }
    });
  }

  return cont;
};

average.getUnderAverageProofMale = function (proof) {
  var average = getAverageProof(proof);
  var cont = 0;

  if (proof.listPlayers.length > 0) {
    proof.listPlayers.forEach(function (el) {
      if (average > el.result) {
        if (el.playerId.gender == 'Male') {
          cont++;
        }
      }
    });
  }

  return cont;
};

average.getUnderAverageProofFemale = function (proof) {
  var average = getAverageProof(proof);
  var cont = 0;

  if (proof.listPlayers.length > 0) {
    proof.listPlayers.forEach(function (el) {
      if (average > el.result) {
        if (el.playerId.gender == 'Female') {
          cont++;
        }
      }
    });
  }

  return cont;
};

average.getOverAverageProof = function (proof) {
  var average = getAverageProof(proof);
  var cont = 0;

  if (proof.listPlayers.length > 0) {
    proof.listPlayers.forEach(function (el) {
      if (average <= el.result) {
        cont++;
      }
    });
  }

  return cont;
};

average.getOverAverageProofMale = function (proof) {
  var average = getAverageProof(proof);
  var cont = 0;

  if (proof.listPlayers.length > 0) {
    proof.listPlayers.forEach(function (el) {
      if (average <= el.result) {
        if (el.playerId.gender == 'Male') {
          cont++;
        }
      }
    });
  }

  return cont;
};

average.getOverAverageProofFemale = function (proof) {
  var average = getAverageProof(proof);
  var cont = 0;

  if (proof.listPlayers.length > 0) {
    proof.listPlayers.forEach(function (el) {
      if (average <= el.result) {
        if (el.playerId.gender == 'Female') {
          cont++;
        }
      }
    });
  }

  return cont;
};

var _default = average;
exports["default"] = _default;