// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"script.js":[function(require,module,exports) {
/* Testkod
import result from './persondata';

var test = new result();
test.name.first = "Anders";
test.name.last = "Leander";

console.log(test.name.first);
*/
// Här hade jag velad skapat en generic list som i C# <personclass> minlista.
var myList1 = [];
var myList2 = [];
var myList3 = [];
var myList4 = [];
var myList5 = [];
var url = "https://javascript-grunder-2021.netlify.app/.netlify/functions/users";

function updateCards() {
  fetch(url).then(function (svar) {
    return svar.ok ? svar.json() : Promise.reject(svar.status);
  }).then(function (svar) {
    svar.results.forEach(function (element) {
      console.log(element);
      myList1.push(element.name.first + " " + element.name.last);
      myList2.push(element.picture.large);
      myList3.push(element.email);
      myList4.push(element.phone);
      myList5.push(element.login.username);
    }); // Här finns skulle man behöva göra en kompaktare metod som är generell alternativt lägga in i egen class.js.

    document.getElementById("name1").innerHTML = myList1[0];
    document.getElementById("pic1").src = myList2[0];
    var str = myList3[0];
    var result = str.link('mailto:' + myList3[0]);
    document.getElementById("mail1").innerHTML = "Telefon: " + myList4[0] + "<br>" + result;
    document.getElementById("git1").href = "https://github.com/" + myList1[0].replace(/ /g, '');
    document.getElementById("fac1").href = "https://facebook.com/" + myList1[0].replace(/ /g, '');
    document.getElementById("inst1").href = "https://www.instagram.com/" + myList1[0].replace(/ /g, '') + "/";
    document.getElementById("name2").innerHTML = myList1[1];
    document.getElementById("pic2").src = myList2[1];
    var str = myList3[1];
    var result = str.link('mailto:' + myList3[1]);
    document.getElementById("mail2").innerHTML = "Telefon: " + myList4[1] + "<br>" + result;
    document.getElementById("git2").href = "https://github.com/" + myList1[1].replace(/ /g, '');
    document.getElementById("fac2").href = "https://facebook.com/" + myList1[1].replace(/ /g, '');
    document.getElementById("inst2").href = "https://www.instagram.com/" + myList1[1].replace(/ /g, '') + "/";
    document.getElementById("name3").innerHTML = myList1[2];
    document.getElementById("pic3").src = myList2[2];
    var str = myList3[2];
    var result = str.link('mailto:' + myList3[2]);
    document.getElementById("mail3").innerHTML = "Telefon: " + myList4[2] + "<br>" + result + "<br>I´m Awesome!<br>Tested but try and add more text and see for yourself";
    document.getElementById("git3").href = "https://github.com/" + myList1[2].replace(/ /g, '');
    document.getElementById("fac3").href = "https://facebook.com/" + myList1[2].replace(/ /g, '');
    document.getElementById("inst3").href = "https://www.instagram.com/" + myList1[2].replace(/ /g, '') + "/";
    document.getElementById("name4").innerHTML = myList1[3];
    document.getElementById("pic4").src = myList2[3];
    var str = myList3[3];
    var result = str.link('mailto:' + myList3[3]);
    document.getElementById("mail4").innerHTML = "Telefon: " + myList4[3] + "<br>" + result;
    document.getElementById("git4").href = "https://github.com/" + myList1[3].replace(/ /g, '');
    document.getElementById("fac4").href = "https://facebook.com/" + myList1[3].replace(/ /g, '');
    document.getElementById("inst4").href = "https://www.instagram.com/" + myList1[3].replace(/ /g, '') + "/";
  });
}

;
updateCards();
document.addEventListener('DOMContentLoaded', function (e) {
  document.querySelectorAll('a').forEach(function (el, i) {
    el.setAttribute('target', '_blank');
  });
});
var epost = document.querySelector("#exampleInputEmail1");
var button = document.querySelector("button");

var valideraEpostadress = function valideraEpostadress(epost) {
  return epost.length > 6 && epost.includes('@');
};

button.disabled = false;
epost.addEventListener("input", function (tangent) {
  var nuvarandeVärde = tangent.target.value;

  if (valideraEpostadress(nuvarandeVärde)) {
    button.disabled = false;
    document.getElementById('emailform').action = "körscript.php.js.eller.vad.du.vill?";
    button.addEventListener("click", function (e) {
      alert("Success! You will now receive our newsletter.");
    });
  } else {
    button.disabled = true;
  }
}); //Lägga till en länk om man hade haft ? Evt selecta img taggen istället så inte sociala medieknapparna krockar isådantfall.

var card = document.querySelectorAll(".card");
card.forEach(function (box) {
  return box.addEventListener("mouseover", function () {
    return box.title = "Pointed target";
  });
});
},{}],"../../node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "57622" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../node_modules/parcel/src/builtins/hmr-runtime.js","script.js"], null)
//# sourceMappingURL=/script.75da7f30.js.map