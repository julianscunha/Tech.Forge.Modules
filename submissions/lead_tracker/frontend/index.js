// Tech.Forge Module Host contract: this bundle's `export default` is the render() entry point.
var zi = { exports: {} }, jl = {}, Ri = { exports: {} }, M = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fr = Symbol.for("react.element"), Jc = Symbol.for("react.portal"), Zc = Symbol.for("react.fragment"), ed = Symbol.for("react.strict_mode"), td = Symbol.for("react.profiler"), nd = Symbol.for("react.provider"), rd = Symbol.for("react.context"), ld = Symbol.for("react.forward_ref"), ad = Symbol.for("react.suspense"), od = Symbol.for("react.memo"), sd = Symbol.for("react.lazy"), us = Symbol.iterator;
function id(e) {
  return e === null || typeof e != "object" ? null : (e = us && e[us] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Li = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Oi = Object.assign, Ii = {};
function _n(e, t, n) {
  this.props = e, this.context = t, this.refs = Ii, this.updater = n || Li;
}
_n.prototype.isReactComponent = {};
_n.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
_n.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Fi() {
}
Fi.prototype = _n.prototype;
function co(e, t, n) {
  this.props = e, this.context = t, this.refs = Ii, this.updater = n || Li;
}
var fo = co.prototype = new Fi();
fo.constructor = co;
Oi(fo, _n.prototype);
fo.isPureReactComponent = !0;
var cs = Array.isArray, bi = Object.prototype.hasOwnProperty, po = { current: null }, Di = { key: !0, ref: !0, __self: !0, __source: !0 };
function $i(e, t, n) {
  var r, l = {}, o = null, s = null;
  if (t != null) for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (o = "" + t.key), t) bi.call(t, r) && !Di.hasOwnProperty(r) && (l[r] = t[r]);
  var i = arguments.length - 2;
  if (i === 1) l.children = n;
  else if (1 < i) {
    for (var u = Array(i), d = 0; d < i; d++) u[d] = arguments[d + 2];
    l.children = u;
  }
  if (e && e.defaultProps) for (r in i = e.defaultProps, i) l[r] === void 0 && (l[r] = i[r]);
  return { $$typeof: fr, type: e, key: o, ref: s, props: l, _owner: po.current };
}
function ud(e, t) {
  return { $$typeof: fr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function ho(e) {
  return typeof e == "object" && e !== null && e.$$typeof === fr;
}
function cd(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var ds = /\/+/g;
function Dl(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? cd("" + e.key) : t.toString(36);
}
function Dr(e, t, n, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else switch (o) {
    case "string":
    case "number":
      s = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case fr:
        case Jc:
          s = !0;
      }
  }
  if (s) return s = e, l = l(s), e = r === "" ? "." + Dl(s, 0) : r, cs(l) ? (n = "", e != null && (n = e.replace(ds, "$&/") + "/"), Dr(l, t, n, "", function(d) {
    return d;
  })) : l != null && (ho(l) && (l = ud(l, n + (!l.key || s && s.key === l.key ? "" : ("" + l.key).replace(ds, "$&/") + "/") + e)), t.push(l)), 1;
  if (s = 0, r = r === "" ? "." : r + ":", cs(e)) for (var i = 0; i < e.length; i++) {
    o = e[i];
    var u = r + Dl(o, i);
    s += Dr(o, t, n, u, l);
  }
  else if (u = id(e), typeof u == "function") for (e = u.call(e), i = 0; !(o = e.next()).done; ) o = o.value, u = r + Dl(o, i++), s += Dr(o, t, n, u, l);
  else if (o === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return s;
}
function yr(e, t, n) {
  if (e == null) return e;
  var r = [], l = 0;
  return Dr(e, r, "", "", function(o) {
    return t.call(n, o, l++);
  }), r;
}
function dd(e) {
  if (e._status === -1) {
    var t = e._result;
    t = t(), t.then(function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n);
    }, function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n);
    }), e._status === -1 && (e._status = 0, e._result = t);
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ge = { current: null }, $r = { transition: null }, fd = { ReactCurrentDispatcher: ge, ReactCurrentBatchConfig: $r, ReactCurrentOwner: po };
function Mi() {
  throw Error("act(...) is not supported in production builds of React.");
}
M.Children = { map: yr, forEach: function(e, t, n) {
  yr(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return yr(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return yr(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!ho(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
M.Component = _n;
M.Fragment = Zc;
M.Profiler = td;
M.PureComponent = co;
M.StrictMode = ed;
M.Suspense = ad;
M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = fd;
M.act = Mi;
M.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Oi({}, e.props), l = e.key, o = e.ref, s = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (o = t.ref, s = po.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var i = e.type.defaultProps;
    for (u in t) bi.call(t, u) && !Di.hasOwnProperty(u) && (r[u] = t[u] === void 0 && i !== void 0 ? i[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    i = Array(u);
    for (var d = 0; d < u; d++) i[d] = arguments[d + 2];
    r.children = i;
  }
  return { $$typeof: fr, type: e.type, key: l, ref: o, props: r, _owner: s };
};
M.createContext = function(e) {
  return e = { $$typeof: rd, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: nd, _context: e }, e.Consumer = e;
};
M.createElement = $i;
M.createFactory = function(e) {
  var t = $i.bind(null, e);
  return t.type = e, t;
};
M.createRef = function() {
  return { current: null };
};
M.forwardRef = function(e) {
  return { $$typeof: ld, render: e };
};
M.isValidElement = ho;
M.lazy = function(e) {
  return { $$typeof: sd, _payload: { _status: -1, _result: e }, _init: dd };
};
M.memo = function(e, t) {
  return { $$typeof: od, type: e, compare: t === void 0 ? null : t };
};
M.startTransition = function(e) {
  var t = $r.transition;
  $r.transition = {};
  try {
    e();
  } finally {
    $r.transition = t;
  }
};
M.unstable_act = Mi;
M.useCallback = function(e, t) {
  return ge.current.useCallback(e, t);
};
M.useContext = function(e) {
  return ge.current.useContext(e);
};
M.useDebugValue = function() {
};
M.useDeferredValue = function(e) {
  return ge.current.useDeferredValue(e);
};
M.useEffect = function(e, t) {
  return ge.current.useEffect(e, t);
};
M.useId = function() {
  return ge.current.useId();
};
M.useImperativeHandle = function(e, t, n) {
  return ge.current.useImperativeHandle(e, t, n);
};
M.useInsertionEffect = function(e, t) {
  return ge.current.useInsertionEffect(e, t);
};
M.useLayoutEffect = function(e, t) {
  return ge.current.useLayoutEffect(e, t);
};
M.useMemo = function(e, t) {
  return ge.current.useMemo(e, t);
};
M.useReducer = function(e, t, n) {
  return ge.current.useReducer(e, t, n);
};
M.useRef = function(e) {
  return ge.current.useRef(e);
};
M.useState = function(e) {
  return ge.current.useState(e);
};
M.useSyncExternalStore = function(e, t, n) {
  return ge.current.useSyncExternalStore(e, t, n);
};
M.useTransition = function() {
  return ge.current.useTransition();
};
M.version = "18.3.1";
Ri.exports = M;
var g = Ri.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pd = g, hd = Symbol.for("react.element"), md = Symbol.for("react.fragment"), vd = Object.prototype.hasOwnProperty, gd = pd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, yd = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ai(e, t, n) {
  var r, l = {}, o = null, s = null;
  n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (s = t.ref);
  for (r in t) vd.call(t, r) && !yd.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: hd, type: e, key: o, ref: s, props: l, _owner: gd.current };
}
jl.Fragment = md;
jl.jsx = Ai;
jl.jsxs = Ai;
zi.exports = jl;
var a = zi.exports, Ui = { exports: {} }, Te = {}, Bi = { exports: {} }, Vi = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
  function t(z, O) {
    var E = z.length;
    z.push(O);
    e: for (; 0 < E; ) {
      var $ = E - 1 >>> 1, N = z[$];
      if (0 < l(N, O)) z[$] = O, z[E] = N, E = $;
      else break e;
    }
  }
  function n(z) {
    return z.length === 0 ? null : z[0];
  }
  function r(z) {
    if (z.length === 0) return null;
    var O = z[0], E = z.pop();
    if (E !== O) {
      z[0] = E;
      e: for (var $ = 0, N = z.length, ce = N >>> 1; $ < ce; ) {
        var Ne = 2 * ($ + 1) - 1, En = z[Ne], et = Ne + 1, Kt = z[et];
        if (0 > l(En, E)) et < N && 0 > l(Kt, En) ? (z[$] = Kt, z[et] = E, $ = et) : (z[$] = En, z[Ne] = E, $ = Ne);
        else if (et < N && 0 > l(Kt, E)) z[$] = Kt, z[et] = E, $ = et;
        else break e;
      }
    }
    return O;
  }
  function l(z, O) {
    var E = z.sortIndex - O.sortIndex;
    return E !== 0 ? E : z.id - O.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function() {
      return o.now();
    };
  } else {
    var s = Date, i = s.now();
    e.unstable_now = function() {
      return s.now() - i;
    };
  }
  var u = [], d = [], f = 1, v = null, h = 3, j = !1, y = !1, x = !1, _ = typeof setTimeout == "function" ? setTimeout : null, p = typeof clearTimeout == "function" ? clearTimeout : null, c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(z) {
    for (var O = n(d); O !== null; ) {
      if (O.callback === null) r(d);
      else if (O.startTime <= z) r(d), O.sortIndex = O.expirationTime, t(u, O);
      else break;
      O = n(d);
    }
  }
  function S(z) {
    if (x = !1, m(z), !y) if (n(u) !== null) y = !0, $e(w);
    else {
      var O = n(d);
      O !== null && Me(S, O.startTime - z);
    }
  }
  function w(z, O) {
    y = !1, x && (x = !1, p(C), C = -1), j = !0;
    var E = h;
    try {
      for (m(O), v = n(u); v !== null && (!(v.expirationTime > O) || z && !q()); ) {
        var $ = v.callback;
        if (typeof $ == "function") {
          v.callback = null, h = v.priorityLevel;
          var N = $(v.expirationTime <= O);
          O = e.unstable_now(), typeof N == "function" ? v.callback = N : v === n(u) && r(u), m(O);
        } else r(u);
        v = n(u);
      }
      if (v !== null) var ce = !0;
      else {
        var Ne = n(d);
        Ne !== null && Me(S, Ne.startTime - O), ce = !1;
      }
      return ce;
    } finally {
      v = null, h = E, j = !1;
    }
  }
  var P = !1, T = null, C = -1, A = 5, I = -1;
  function q() {
    return !(e.unstable_now() - I < A);
  }
  function F() {
    if (T !== null) {
      var z = e.unstable_now();
      I = z;
      var O = !0;
      try {
        O = T(!0, z);
      } finally {
        O ? Z() : (P = !1, T = null);
      }
    } else P = !1;
  }
  var Z;
  if (typeof c == "function") Z = function() {
    c(F);
  };
  else if (typeof MessageChannel < "u") {
    var ae = new MessageChannel(), oe = ae.port2;
    ae.port1.onmessage = F, Z = function() {
      oe.postMessage(null);
    };
  } else Z = function() {
    _(F, 0);
  };
  function $e(z) {
    T = z, P || (P = !0, Z());
  }
  function Me(z, O) {
    C = _(function() {
      z(e.unstable_now());
    }, O);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(z) {
    z.callback = null;
  }, e.unstable_continueExecution = function() {
    y || j || (y = !0, $e(w));
  }, e.unstable_forceFrameRate = function(z) {
    0 > z || 125 < z ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : A = 0 < z ? Math.floor(1e3 / z) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return h;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(u);
  }, e.unstable_next = function(z) {
    switch (h) {
      case 1:
      case 2:
      case 3:
        var O = 3;
        break;
      default:
        O = h;
    }
    var E = h;
    h = O;
    try {
      return z();
    } finally {
      h = E;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(z, O) {
    switch (z) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        z = 3;
    }
    var E = h;
    h = z;
    try {
      return O();
    } finally {
      h = E;
    }
  }, e.unstable_scheduleCallback = function(z, O, E) {
    var $ = e.unstable_now();
    switch (typeof E == "object" && E !== null ? (E = E.delay, E = typeof E == "number" && 0 < E ? $ + E : $) : E = $, z) {
      case 1:
        var N = -1;
        break;
      case 2:
        N = 250;
        break;
      case 5:
        N = 1073741823;
        break;
      case 4:
        N = 1e4;
        break;
      default:
        N = 5e3;
    }
    return N = E + N, z = { id: f++, callback: O, priorityLevel: z, startTime: E, expirationTime: N, sortIndex: -1 }, E > $ ? (z.sortIndex = E, t(d, z), n(u) === null && z === n(d) && (x ? (p(C), C = -1) : x = !0, Me(S, E - $))) : (z.sortIndex = N, t(u, z), y || j || (y = !0, $e(w))), z;
  }, e.unstable_shouldYield = q, e.unstable_wrapCallback = function(z) {
    var O = h;
    return function() {
      var E = h;
      h = O;
      try {
        return z.apply(this, arguments);
      } finally {
        h = E;
      }
    };
  };
})(Vi);
Bi.exports = Vi;
var xd = Bi.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jd = g, Pe = xd;
function k(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Hi = /* @__PURE__ */ new Set(), Gn = {};
function Wt(e, t) {
  vn(e, t), vn(e + "Capture", t);
}
function vn(e, t) {
  for (Gn[e] = t, e = 0; e < t.length; e++) Hi.add(t[e]);
}
var it = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), va = Object.prototype.hasOwnProperty, Sd = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, fs = {}, ps = {};
function wd(e) {
  return va.call(ps, e) ? !0 : va.call(fs, e) ? !1 : Sd.test(e) ? ps[e] = !0 : (fs[e] = !0, !1);
}
function _d(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Nd(e, t, n, r) {
  if (t === null || typeof t > "u" || _d(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null) switch (n.type) {
    case 3:
      return !t;
    case 4:
      return t === !1;
    case 5:
      return isNaN(t);
    case 6:
      return isNaN(t) || 1 > t;
  }
  return !1;
}
function ye(e, t, n, r, l, o, s) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = s;
}
var ue = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  ue[e] = new ye(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  ue[t] = new ye(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  ue[e] = new ye(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  ue[e] = new ye(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  ue[e] = new ye(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  ue[e] = new ye(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  ue[e] = new ye(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  ue[e] = new ye(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  ue[e] = new ye(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var mo = /[\-:]([a-z])/g;
function vo(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    mo,
    vo
  );
  ue[t] = new ye(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(mo, vo);
  ue[t] = new ye(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(mo, vo);
  ue[t] = new ye(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  ue[e] = new ye(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ue.xlinkHref = new ye("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  ue[e] = new ye(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function go(e, t, n, r) {
  var l = ue.hasOwnProperty(t) ? ue[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Nd(t, n, l, r) && (n = null), r || l === null ? wd(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var ft = jd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, xr = Symbol.for("react.element"), Xt = Symbol.for("react.portal"), Jt = Symbol.for("react.fragment"), yo = Symbol.for("react.strict_mode"), ga = Symbol.for("react.profiler"), Qi = Symbol.for("react.provider"), Wi = Symbol.for("react.context"), xo = Symbol.for("react.forward_ref"), ya = Symbol.for("react.suspense"), xa = Symbol.for("react.suspense_list"), jo = Symbol.for("react.memo"), ht = Symbol.for("react.lazy"), qi = Symbol.for("react.offscreen"), hs = Symbol.iterator;
function Cn(e) {
  return e === null || typeof e != "object" ? null : (e = hs && e[hs] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Y = Object.assign, $l;
function Fn(e) {
  if ($l === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    $l = t && t[1] || "";
  }
  return `
` + $l + e;
}
var Ml = !1;
function Al(e, t) {
  if (!e || Ml) return "";
  Ml = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t) if (t = function() {
      throw Error();
    }, Object.defineProperty(t.prototype, "props", { set: function() {
      throw Error();
    } }), typeof Reflect == "object" && Reflect.construct) {
      try {
        Reflect.construct(t, []);
      } catch (d) {
        var r = d;
      }
      Reflect.construct(e, [], t);
    } else {
      try {
        t.call();
      } catch (d) {
        r = d;
      }
      e.call(t.prototype);
    }
    else {
      try {
        throw Error();
      } catch (d) {
        r = d;
      }
      e();
    }
  } catch (d) {
    if (d && r && typeof d.stack == "string") {
      for (var l = d.stack.split(`
`), o = r.stack.split(`
`), s = l.length - 1, i = o.length - 1; 1 <= s && 0 <= i && l[s] !== o[i]; ) i--;
      for (; 1 <= s && 0 <= i; s--, i--) if (l[s] !== o[i]) {
        if (s !== 1 || i !== 1)
          do
            if (s--, i--, 0 > i || l[s] !== o[i]) {
              var u = `
` + l[s].replace(" at new ", " at ");
              return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)), u;
            }
          while (1 <= s && 0 <= i);
        break;
      }
    }
  } finally {
    Ml = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Fn(e) : "";
}
function kd(e) {
  switch (e.tag) {
    case 5:
      return Fn(e.type);
    case 16:
      return Fn("Lazy");
    case 13:
      return Fn("Suspense");
    case 19:
      return Fn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Al(e.type, !1), e;
    case 11:
      return e = Al(e.type.render, !1), e;
    case 1:
      return e = Al(e.type, !0), e;
    default:
      return "";
  }
}
function ja(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Jt:
      return "Fragment";
    case Xt:
      return "Portal";
    case ga:
      return "Profiler";
    case yo:
      return "StrictMode";
    case ya:
      return "Suspense";
    case xa:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case Wi:
      return (e.displayName || "Context") + ".Consumer";
    case Qi:
      return (e._context.displayName || "Context") + ".Provider";
    case xo:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case jo:
      return t = e.displayName || null, t !== null ? t : ja(e.type) || "Memo";
    case ht:
      t = e._payload, e = e._init;
      try {
        return ja(e(t));
      } catch {
      }
  }
  return null;
}
function Ed(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return ja(t);
    case 8:
      return t === yo ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Pt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Ki(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Cd(e) {
  var t = Ki(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var l = n.get, o = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return l.call(this);
    }, set: function(s) {
      r = "" + s, o.call(this, s);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(s) {
      r = "" + s;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function jr(e) {
  e._valueTracker || (e._valueTracker = Cd(e));
}
function Gi(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = Ki(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Gr(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Sa(e, t) {
  var n = t.checked;
  return Y({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function ms(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Pt(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Yi(e, t) {
  t = t.checked, t != null && go(e, "checked", t, !1);
}
function wa(e, t) {
  Yi(e, t);
  var n = Pt(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? _a(e, t.type, n) : t.hasOwnProperty("defaultValue") && _a(e, t.type, Pt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function vs(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function _a(e, t, n) {
  (t !== "number" || Gr(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var bn = Array.isArray;
function cn(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Pt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        e[l].selected = !0, r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function Na(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(k(91));
  return Y({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function gs(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(k(92));
      if (bn(n)) {
        if (1 < n.length) throw Error(k(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: Pt(n) };
}
function Xi(e, t) {
  var n = Pt(t.value), r = Pt(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function ys(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Ji(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ka(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Ji(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Sr, Zi = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, l);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (Sr = Sr || document.createElement("div"), Sr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Sr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function Yn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var An = {
  animationIterationCount: !0,
  aspectRatio: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridArea: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
}, Pd = ["Webkit", "ms", "Moz", "O"];
Object.keys(An).forEach(function(e) {
  Pd.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), An[t] = An[e];
  });
});
function eu(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || An.hasOwnProperty(e) && An[e] ? ("" + t).trim() : t + "px";
}
function tu(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, l = eu(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
  }
}
var Td = Y({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Ea(e, t) {
  if (t) {
    if (Td[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(k(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(k(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(k(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(k(62));
  }
}
function Ca(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Pa = null;
function So(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Ta = null, dn = null, fn = null;
function xs(e) {
  if (e = mr(e)) {
    if (typeof Ta != "function") throw Error(k(280));
    var t = e.stateNode;
    t && (t = kl(t), Ta(e.stateNode, e.type, t));
  }
}
function nu(e) {
  dn ? fn ? fn.push(e) : fn = [e] : dn = e;
}
function ru() {
  if (dn) {
    var e = dn, t = fn;
    if (fn = dn = null, xs(e), t) for (e = 0; e < t.length; e++) xs(t[e]);
  }
}
function lu(e, t) {
  return e(t);
}
function au() {
}
var Ul = !1;
function ou(e, t, n) {
  if (Ul) return e(t, n);
  Ul = !0;
  try {
    return lu(e, t, n);
  } finally {
    Ul = !1, (dn !== null || fn !== null) && (au(), ru());
  }
}
function Xn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = kl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(k(231, t, typeof n));
  return n;
}
var za = !1;
if (it) try {
  var Pn = {};
  Object.defineProperty(Pn, "passive", { get: function() {
    za = !0;
  } }), window.addEventListener("test", Pn, Pn), window.removeEventListener("test", Pn, Pn);
} catch {
  za = !1;
}
function zd(e, t, n, r, l, o, s, i, u) {
  var d = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, d);
  } catch (f) {
    this.onError(f);
  }
}
var Un = !1, Yr = null, Xr = !1, Ra = null, Rd = { onError: function(e) {
  Un = !0, Yr = e;
} };
function Ld(e, t, n, r, l, o, s, i, u) {
  Un = !1, Yr = null, zd.apply(Rd, arguments);
}
function Od(e, t, n, r, l, o, s, i, u) {
  if (Ld.apply(this, arguments), Un) {
    if (Un) {
      var d = Yr;
      Un = !1, Yr = null;
    } else throw Error(k(198));
    Xr || (Xr = !0, Ra = d);
  }
}
function qt(e) {
  var t = e, n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do
      t = e, t.flags & 4098 && (n = t.return), e = t.return;
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function su(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function js(e) {
  if (qt(e) !== e) throw Error(k(188));
}
function Id(e) {
  var t = e.alternate;
  if (!t) {
    if (t = qt(e), t === null) throw Error(k(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (r = l.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n) return js(l), e;
        if (o === r) return js(l), t;
        o = o.sibling;
      }
      throw Error(k(188));
    }
    if (n.return !== r.return) n = l, r = o;
    else {
      for (var s = !1, i = l.child; i; ) {
        if (i === n) {
          s = !0, n = l, r = o;
          break;
        }
        if (i === r) {
          s = !0, r = l, n = o;
          break;
        }
        i = i.sibling;
      }
      if (!s) {
        for (i = o.child; i; ) {
          if (i === n) {
            s = !0, n = o, r = l;
            break;
          }
          if (i === r) {
            s = !0, r = o, n = l;
            break;
          }
          i = i.sibling;
        }
        if (!s) throw Error(k(189));
      }
    }
    if (n.alternate !== r) throw Error(k(190));
  }
  if (n.tag !== 3) throw Error(k(188));
  return n.stateNode.current === n ? e : t;
}
function iu(e) {
  return e = Id(e), e !== null ? uu(e) : null;
}
function uu(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = uu(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var cu = Pe.unstable_scheduleCallback, Ss = Pe.unstable_cancelCallback, Fd = Pe.unstable_shouldYield, bd = Pe.unstable_requestPaint, J = Pe.unstable_now, Dd = Pe.unstable_getCurrentPriorityLevel, wo = Pe.unstable_ImmediatePriority, du = Pe.unstable_UserBlockingPriority, Jr = Pe.unstable_NormalPriority, $d = Pe.unstable_LowPriority, fu = Pe.unstable_IdlePriority, Sl = null, Je = null;
function Md(e) {
  if (Je && typeof Je.onCommitFiberRoot == "function") try {
    Je.onCommitFiberRoot(Sl, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var He = Math.clz32 ? Math.clz32 : Bd, Ad = Math.log, Ud = Math.LN2;
function Bd(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Ad(e) / Ud | 0) | 0;
}
var wr = 64, _r = 4194304;
function Dn(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Zr(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, l = e.suspendedLanes, o = e.pingedLanes, s = n & 268435455;
  if (s !== 0) {
    var i = s & ~l;
    i !== 0 ? r = Dn(i) : (o &= s, o !== 0 && (r = Dn(o)));
  } else s = n & ~l, s !== 0 ? r = Dn(s) : o !== 0 && (r = Dn(o));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & l) && (l = r & -r, o = t & -t, l >= o || l === 16 && (o & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - He(t), l = 1 << n, r |= e[n], t &= ~l;
  return r;
}
function Vd(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Hd(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var s = 31 - He(o), i = 1 << s, u = l[s];
    u === -1 ? (!(i & n) || i & r) && (l[s] = Vd(i, t)) : u <= t && (e.expiredLanes |= i), o &= ~i;
  }
}
function La(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function pu() {
  var e = wr;
  return wr <<= 1, !(wr & 4194240) && (wr = 64), e;
}
function Bl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function pr(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - He(t), e[t] = n;
}
function Qd(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - He(n), o = 1 << l;
    t[l] = 0, r[l] = -1, e[l] = -1, n &= ~o;
  }
}
function _o(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - He(n), l = 1 << r;
    l & t | e[r] & t && (e[r] |= t), n &= ~l;
  }
}
var B = 0;
function hu(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var mu, No, vu, gu, yu, Oa = !1, Nr = [], jt = null, St = null, wt = null, Jn = /* @__PURE__ */ new Map(), Zn = /* @__PURE__ */ new Map(), vt = [], Wd = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function ws(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      jt = null;
      break;
    case "dragenter":
    case "dragleave":
      St = null;
      break;
    case "mouseover":
    case "mouseout":
      wt = null;
      break;
    case "pointerover":
    case "pointerout":
      Jn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Zn.delete(t.pointerId);
  }
}
function Tn(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [l] }, t !== null && (t = mr(t), t !== null && No(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function qd(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return jt = Tn(jt, e, t, n, r, l), !0;
    case "dragenter":
      return St = Tn(St, e, t, n, r, l), !0;
    case "mouseover":
      return wt = Tn(wt, e, t, n, r, l), !0;
    case "pointerover":
      var o = l.pointerId;
      return Jn.set(o, Tn(Jn.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return o = l.pointerId, Zn.set(o, Tn(Zn.get(o) || null, e, t, n, r, l)), !0;
  }
  return !1;
}
function xu(e) {
  var t = bt(e.target);
  if (t !== null) {
    var n = qt(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = su(n), t !== null) {
          e.blockedOn = t, yu(e.priority, function() {
            vu(n);
          });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Mr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Ia(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Pa = r, n.target.dispatchEvent(r), Pa = null;
    } else return t = mr(n), t !== null && No(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function _s(e, t, n) {
  Mr(e) && n.delete(t);
}
function Kd() {
  Oa = !1, jt !== null && Mr(jt) && (jt = null), St !== null && Mr(St) && (St = null), wt !== null && Mr(wt) && (wt = null), Jn.forEach(_s), Zn.forEach(_s);
}
function zn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Oa || (Oa = !0, Pe.unstable_scheduleCallback(Pe.unstable_NormalPriority, Kd)));
}
function er(e) {
  function t(l) {
    return zn(l, e);
  }
  if (0 < Nr.length) {
    zn(Nr[0], e);
    for (var n = 1; n < Nr.length; n++) {
      var r = Nr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (jt !== null && zn(jt, e), St !== null && zn(St, e), wt !== null && zn(wt, e), Jn.forEach(t), Zn.forEach(t), n = 0; n < vt.length; n++) r = vt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < vt.length && (n = vt[0], n.blockedOn === null); ) xu(n), n.blockedOn === null && vt.shift();
}
var pn = ft.ReactCurrentBatchConfig, el = !0;
function Gd(e, t, n, r) {
  var l = B, o = pn.transition;
  pn.transition = null;
  try {
    B = 1, ko(e, t, n, r);
  } finally {
    B = l, pn.transition = o;
  }
}
function Yd(e, t, n, r) {
  var l = B, o = pn.transition;
  pn.transition = null;
  try {
    B = 4, ko(e, t, n, r);
  } finally {
    B = l, pn.transition = o;
  }
}
function ko(e, t, n, r) {
  if (el) {
    var l = Ia(e, t, n, r);
    if (l === null) Jl(e, t, r, tl, n), ws(e, r);
    else if (qd(l, e, t, n, r)) r.stopPropagation();
    else if (ws(e, r), t & 4 && -1 < Wd.indexOf(e)) {
      for (; l !== null; ) {
        var o = mr(l);
        if (o !== null && mu(o), o = Ia(e, t, n, r), o === null && Jl(e, t, r, tl, n), o === l) break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else Jl(e, t, r, null, n);
  }
}
var tl = null;
function Ia(e, t, n, r) {
  if (tl = null, e = So(r), e = bt(e), e !== null) if (t = qt(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = su(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return tl = e, null;
}
function ju(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Dd()) {
        case wo:
          return 1;
        case du:
          return 4;
        case Jr:
        case $d:
          return 16;
        case fu:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var yt = null, Eo = null, Ar = null;
function Su() {
  if (Ar) return Ar;
  var e, t = Eo, n = t.length, r, l = "value" in yt ? yt.value : yt.textContent, o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++) ;
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === l[o - r]; r++) ;
  return Ar = l.slice(e, 1 < r ? 1 - r : void 0);
}
function Ur(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function kr() {
  return !0;
}
function Ns() {
  return !1;
}
function ze(e) {
  function t(n, r, l, o, s) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = o, this.target = s, this.currentTarget = null;
    for (var i in e) e.hasOwnProperty(i) && (n = e[i], this[i] = n ? n(o) : o[i]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? kr : Ns, this.isPropagationStopped = Ns, this;
  }
  return Y(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = kr);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = kr);
  }, persist: function() {
  }, isPersistent: kr }), t;
}
var Nn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Co = ze(Nn), hr = Y({}, Nn, { view: 0, detail: 0 }), Xd = ze(hr), Vl, Hl, Rn, wl = Y({}, hr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Po, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Rn && (Rn && e.type === "mousemove" ? (Vl = e.screenX - Rn.screenX, Hl = e.screenY - Rn.screenY) : Hl = Vl = 0, Rn = e), Vl);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Hl;
} }), ks = ze(wl), Jd = Y({}, wl, { dataTransfer: 0 }), Zd = ze(Jd), ef = Y({}, hr, { relatedTarget: 0 }), Ql = ze(ef), tf = Y({}, Nn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), nf = ze(tf), rf = Y({}, Nn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), lf = ze(rf), af = Y({}, Nn, { data: 0 }), Es = ze(af), of = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, sf = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, uf = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function cf(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = uf[e]) ? !!t[e] : !1;
}
function Po() {
  return cf;
}
var df = Y({}, hr, { key: function(e) {
  if (e.key) {
    var t = of[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Ur(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? sf[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Po, charCode: function(e) {
  return e.type === "keypress" ? Ur(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Ur(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), ff = ze(df), pf = Y({}, wl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Cs = ze(pf), hf = Y({}, hr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Po }), mf = ze(hf), vf = Y({}, Nn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), gf = ze(vf), yf = Y({}, wl, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), xf = ze(yf), jf = [9, 13, 27, 32], To = it && "CompositionEvent" in window, Bn = null;
it && "documentMode" in document && (Bn = document.documentMode);
var Sf = it && "TextEvent" in window && !Bn, wu = it && (!To || Bn && 8 < Bn && 11 >= Bn), Ps = " ", Ts = !1;
function _u(e, t) {
  switch (e) {
    case "keyup":
      return jf.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Nu(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Zt = !1;
function wf(e, t) {
  switch (e) {
    case "compositionend":
      return Nu(t);
    case "keypress":
      return t.which !== 32 ? null : (Ts = !0, Ps);
    case "textInput":
      return e = t.data, e === Ps && Ts ? null : e;
    default:
      return null;
  }
}
function _f(e, t) {
  if (Zt) return e === "compositionend" || !To && _u(e, t) ? (e = Su(), Ar = Eo = yt = null, Zt = !1, e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return wu && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Nf = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function zs(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Nf[e.type] : t === "textarea";
}
function ku(e, t, n, r) {
  nu(r), t = nl(t, "onChange"), 0 < t.length && (n = new Co("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Vn = null, tr = null;
function kf(e) {
  bu(e, 0);
}
function _l(e) {
  var t = nn(e);
  if (Gi(t)) return e;
}
function Ef(e, t) {
  if (e === "change") return t;
}
var Eu = !1;
if (it) {
  var Wl;
  if (it) {
    var ql = "oninput" in document;
    if (!ql) {
      var Rs = document.createElement("div");
      Rs.setAttribute("oninput", "return;"), ql = typeof Rs.oninput == "function";
    }
    Wl = ql;
  } else Wl = !1;
  Eu = Wl && (!document.documentMode || 9 < document.documentMode);
}
function Ls() {
  Vn && (Vn.detachEvent("onpropertychange", Cu), tr = Vn = null);
}
function Cu(e) {
  if (e.propertyName === "value" && _l(tr)) {
    var t = [];
    ku(t, tr, e, So(e)), ou(kf, t);
  }
}
function Cf(e, t, n) {
  e === "focusin" ? (Ls(), Vn = t, tr = n, Vn.attachEvent("onpropertychange", Cu)) : e === "focusout" && Ls();
}
function Pf(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return _l(tr);
}
function Tf(e, t) {
  if (e === "click") return _l(t);
}
function zf(e, t) {
  if (e === "input" || e === "change") return _l(t);
}
function Rf(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var qe = typeof Object.is == "function" ? Object.is : Rf;
function nr(e, t) {
  if (qe(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!va.call(t, l) || !qe(e[l], t[l])) return !1;
  }
  return !0;
}
function Os(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Is(e, t) {
  var n = Os(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (r = e + n.textContent.length, e <= t && r >= t) return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Os(n);
  }
}
function Pu(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Pu(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Tu() {
  for (var e = window, t = Gr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Gr(e.document);
  }
  return t;
}
function zo(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Lf(e) {
  var t = Tu(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Pu(n.ownerDocument.documentElement, n)) {
    if (r !== null && zo(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = n.textContent.length, o = Math.min(r.start, l);
        r = r.end === void 0 ? o : Math.min(r.end, l), !e.extend && o > r && (l = r, r = o, o = l), l = Is(n, o);
        var s = Is(
          n,
          r
        );
        l && s && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var Of = it && "documentMode" in document && 11 >= document.documentMode, en = null, Fa = null, Hn = null, ba = !1;
function Fs(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ba || en == null || en !== Gr(r) || (r = en, "selectionStart" in r && zo(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Hn && nr(Hn, r) || (Hn = r, r = nl(Fa, "onSelect"), 0 < r.length && (t = new Co("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = en)));
}
function Er(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var tn = { animationend: Er("Animation", "AnimationEnd"), animationiteration: Er("Animation", "AnimationIteration"), animationstart: Er("Animation", "AnimationStart"), transitionend: Er("Transition", "TransitionEnd") }, Kl = {}, zu = {};
it && (zu = document.createElement("div").style, "AnimationEvent" in window || (delete tn.animationend.animation, delete tn.animationiteration.animation, delete tn.animationstart.animation), "TransitionEvent" in window || delete tn.transitionend.transition);
function Nl(e) {
  if (Kl[e]) return Kl[e];
  if (!tn[e]) return e;
  var t = tn[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in zu) return Kl[e] = t[n];
  return e;
}
var Ru = Nl("animationend"), Lu = Nl("animationiteration"), Ou = Nl("animationstart"), Iu = Nl("transitionend"), Fu = /* @__PURE__ */ new Map(), bs = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function zt(e, t) {
  Fu.set(e, t), Wt(t, [e]);
}
for (var Gl = 0; Gl < bs.length; Gl++) {
  var Yl = bs[Gl], If = Yl.toLowerCase(), Ff = Yl[0].toUpperCase() + Yl.slice(1);
  zt(If, "on" + Ff);
}
zt(Ru, "onAnimationEnd");
zt(Lu, "onAnimationIteration");
zt(Ou, "onAnimationStart");
zt("dblclick", "onDoubleClick");
zt("focusin", "onFocus");
zt("focusout", "onBlur");
zt(Iu, "onTransitionEnd");
vn("onMouseEnter", ["mouseout", "mouseover"]);
vn("onMouseLeave", ["mouseout", "mouseover"]);
vn("onPointerEnter", ["pointerout", "pointerover"]);
vn("onPointerLeave", ["pointerout", "pointerover"]);
Wt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Wt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Wt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Wt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Wt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Wt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var $n = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), bf = new Set("cancel close invalid load scroll toggle".split(" ").concat($n));
function Ds(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Od(r, t, void 0, e), e.currentTarget = null;
}
function bu(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t) for (var s = r.length - 1; 0 <= s; s--) {
        var i = r[s], u = i.instance, d = i.currentTarget;
        if (i = i.listener, u !== o && l.isPropagationStopped()) break e;
        Ds(l, i, d), o = u;
      }
      else for (s = 0; s < r.length; s++) {
        if (i = r[s], u = i.instance, d = i.currentTarget, i = i.listener, u !== o && l.isPropagationStopped()) break e;
        Ds(l, i, d), o = u;
      }
    }
  }
  if (Xr) throw e = Ra, Xr = !1, Ra = null, e;
}
function H(e, t) {
  var n = t[Ua];
  n === void 0 && (n = t[Ua] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (Du(t, e, 2, !1), n.add(r));
}
function Xl(e, t, n) {
  var r = 0;
  t && (r |= 4), Du(n, e, r, t);
}
var Cr = "_reactListening" + Math.random().toString(36).slice(2);
function rr(e) {
  if (!e[Cr]) {
    e[Cr] = !0, Hi.forEach(function(n) {
      n !== "selectionchange" && (bf.has(n) || Xl(n, !1, e), Xl(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Cr] || (t[Cr] = !0, Xl("selectionchange", !1, t));
  }
}
function Du(e, t, n, r) {
  switch (ju(t)) {
    case 1:
      var l = Gd;
      break;
    case 4:
      l = Yd;
      break;
    default:
      l = ko;
  }
  n = l.bind(null, t, n, e), l = void 0, !za || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
}
function Jl(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var s = r.tag;
    if (s === 3 || s === 4) {
      var i = r.stateNode.containerInfo;
      if (i === l || i.nodeType === 8 && i.parentNode === l) break;
      if (s === 4) for (s = r.return; s !== null; ) {
        var u = s.tag;
        if ((u === 3 || u === 4) && (u = s.stateNode.containerInfo, u === l || u.nodeType === 8 && u.parentNode === l)) return;
        s = s.return;
      }
      for (; i !== null; ) {
        if (s = bt(i), s === null) return;
        if (u = s.tag, u === 5 || u === 6) {
          r = o = s;
          continue e;
        }
        i = i.parentNode;
      }
    }
    r = r.return;
  }
  ou(function() {
    var d = o, f = So(n), v = [];
    e: {
      var h = Fu.get(e);
      if (h !== void 0) {
        var j = Co, y = e;
        switch (e) {
          case "keypress":
            if (Ur(n) === 0) break e;
          case "keydown":
          case "keyup":
            j = ff;
            break;
          case "focusin":
            y = "focus", j = Ql;
            break;
          case "focusout":
            y = "blur", j = Ql;
            break;
          case "beforeblur":
          case "afterblur":
            j = Ql;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            j = ks;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            j = Zd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            j = mf;
            break;
          case Ru:
          case Lu:
          case Ou:
            j = nf;
            break;
          case Iu:
            j = gf;
            break;
          case "scroll":
            j = Xd;
            break;
          case "wheel":
            j = xf;
            break;
          case "copy":
          case "cut":
          case "paste":
            j = lf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            j = Cs;
        }
        var x = (t & 4) !== 0, _ = !x && e === "scroll", p = x ? h !== null ? h + "Capture" : null : h;
        x = [];
        for (var c = d, m; c !== null; ) {
          m = c;
          var S = m.stateNode;
          if (m.tag === 5 && S !== null && (m = S, p !== null && (S = Xn(c, p), S != null && x.push(lr(c, S, m)))), _) break;
          c = c.return;
        }
        0 < x.length && (h = new j(h, y, null, n, f), v.push({ event: h, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (h = e === "mouseover" || e === "pointerover", j = e === "mouseout" || e === "pointerout", h && n !== Pa && (y = n.relatedTarget || n.fromElement) && (bt(y) || y[ut])) break e;
        if ((j || h) && (h = f.window === f ? f : (h = f.ownerDocument) ? h.defaultView || h.parentWindow : window, j ? (y = n.relatedTarget || n.toElement, j = d, y = y ? bt(y) : null, y !== null && (_ = qt(y), y !== _ || y.tag !== 5 && y.tag !== 6) && (y = null)) : (j = null, y = d), j !== y)) {
          if (x = ks, S = "onMouseLeave", p = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (x = Cs, S = "onPointerLeave", p = "onPointerEnter", c = "pointer"), _ = j == null ? h : nn(j), m = y == null ? h : nn(y), h = new x(S, c + "leave", j, n, f), h.target = _, h.relatedTarget = m, S = null, bt(f) === d && (x = new x(p, c + "enter", y, n, f), x.target = m, x.relatedTarget = _, S = x), _ = S, j && y) t: {
            for (x = j, p = y, c = 0, m = x; m; m = Gt(m)) c++;
            for (m = 0, S = p; S; S = Gt(S)) m++;
            for (; 0 < c - m; ) x = Gt(x), c--;
            for (; 0 < m - c; ) p = Gt(p), m--;
            for (; c--; ) {
              if (x === p || p !== null && x === p.alternate) break t;
              x = Gt(x), p = Gt(p);
            }
            x = null;
          }
          else x = null;
          j !== null && $s(v, h, j, x, !1), y !== null && _ !== null && $s(v, _, y, x, !0);
        }
      }
      e: {
        if (h = d ? nn(d) : window, j = h.nodeName && h.nodeName.toLowerCase(), j === "select" || j === "input" && h.type === "file") var w = Ef;
        else if (zs(h)) if (Eu) w = zf;
        else {
          w = Pf;
          var P = Cf;
        }
        else (j = h.nodeName) && j.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (w = Tf);
        if (w && (w = w(e, d))) {
          ku(v, w, n, f);
          break e;
        }
        P && P(e, h, d), e === "focusout" && (P = h._wrapperState) && P.controlled && h.type === "number" && _a(h, "number", h.value);
      }
      switch (P = d ? nn(d) : window, e) {
        case "focusin":
          (zs(P) || P.contentEditable === "true") && (en = P, Fa = d, Hn = null);
          break;
        case "focusout":
          Hn = Fa = en = null;
          break;
        case "mousedown":
          ba = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ba = !1, Fs(v, n, f);
          break;
        case "selectionchange":
          if (Of) break;
        case "keydown":
        case "keyup":
          Fs(v, n, f);
      }
      var T;
      if (To) e: {
        switch (e) {
          case "compositionstart":
            var C = "onCompositionStart";
            break e;
          case "compositionend":
            C = "onCompositionEnd";
            break e;
          case "compositionupdate":
            C = "onCompositionUpdate";
            break e;
        }
        C = void 0;
      }
      else Zt ? _u(e, n) && (C = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (C = "onCompositionStart");
      C && (wu && n.locale !== "ko" && (Zt || C !== "onCompositionStart" ? C === "onCompositionEnd" && Zt && (T = Su()) : (yt = f, Eo = "value" in yt ? yt.value : yt.textContent, Zt = !0)), P = nl(d, C), 0 < P.length && (C = new Es(C, e, null, n, f), v.push({ event: C, listeners: P }), T ? C.data = T : (T = Nu(n), T !== null && (C.data = T)))), (T = Sf ? wf(e, n) : _f(e, n)) && (d = nl(d, "onBeforeInput"), 0 < d.length && (f = new Es("onBeforeInput", "beforeinput", null, n, f), v.push({ event: f, listeners: d }), f.data = T));
    }
    bu(v, t);
  });
}
function lr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function nl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e, o = l.stateNode;
    l.tag === 5 && o !== null && (l = o, o = Xn(e, n), o != null && r.unshift(lr(e, o, l)), o = Xn(e, t), o != null && r.push(lr(e, o, l))), e = e.return;
  }
  return r;
}
function Gt(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function $s(e, t, n, r, l) {
  for (var o = t._reactName, s = []; n !== null && n !== r; ) {
    var i = n, u = i.alternate, d = i.stateNode;
    if (u !== null && u === r) break;
    i.tag === 5 && d !== null && (i = d, l ? (u = Xn(n, o), u != null && s.unshift(lr(n, u, i))) : l || (u = Xn(n, o), u != null && s.push(lr(n, u, i)))), n = n.return;
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var Df = /\r\n?/g, $f = /\u0000|\uFFFD/g;
function Ms(e) {
  return (typeof e == "string" ? e : "" + e).replace(Df, `
`).replace($f, "");
}
function Pr(e, t, n) {
  if (t = Ms(t), Ms(e) !== t && n) throw Error(k(425));
}
function rl() {
}
var Da = null, $a = null;
function Ma(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Aa = typeof setTimeout == "function" ? setTimeout : void 0, Mf = typeof clearTimeout == "function" ? clearTimeout : void 0, As = typeof Promise == "function" ? Promise : void 0, Af = typeof queueMicrotask == "function" ? queueMicrotask : typeof As < "u" ? function(e) {
  return As.resolve(null).then(e).catch(Uf);
} : Aa;
function Uf(e) {
  setTimeout(function() {
    throw e;
  });
}
function Zl(e, t) {
  var n = t, r = 0;
  do {
    var l = n.nextSibling;
    if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
      if (r === 0) {
        e.removeChild(l), er(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = l;
  } while (n);
  er(t);
}
function _t(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Us(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var kn = Math.random().toString(36).slice(2), Xe = "__reactFiber$" + kn, ar = "__reactProps$" + kn, ut = "__reactContainer$" + kn, Ua = "__reactEvents$" + kn, Bf = "__reactListeners$" + kn, Vf = "__reactHandles$" + kn;
function bt(e) {
  var t = e[Xe];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[ut] || n[Xe]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Us(e); e !== null; ) {
        if (n = e[Xe]) return n;
        e = Us(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function mr(e) {
  return e = e[Xe] || e[ut], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function nn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(k(33));
}
function kl(e) {
  return e[ar] || null;
}
var Ba = [], rn = -1;
function Rt(e) {
  return { current: e };
}
function Q(e) {
  0 > rn || (e.current = Ba[rn], Ba[rn] = null, rn--);
}
function V(e, t) {
  rn++, Ba[rn] = e.current, e.current = t;
}
var Tt = {}, he = Rt(Tt), Se = Rt(!1), Ut = Tt;
function gn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Tt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, o;
  for (o in n) l[o] = t[o];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function we(e) {
  return e = e.childContextTypes, e != null;
}
function ll() {
  Q(Se), Q(he);
}
function Bs(e, t, n) {
  if (he.current !== Tt) throw Error(k(168));
  V(he, t), V(Se, n);
}
function $u(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(k(108, Ed(e) || "Unknown", l));
  return Y({}, n, r);
}
function al(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Tt, Ut = he.current, V(he, e), V(Se, Se.current), !0;
}
function Vs(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(k(169));
  n ? (e = $u(e, t, Ut), r.__reactInternalMemoizedMergedChildContext = e, Q(Se), Q(he), V(he, e)) : Q(Se), V(Se, n);
}
var lt = null, El = !1, ea = !1;
function Mu(e) {
  lt === null ? lt = [e] : lt.push(e);
}
function Hf(e) {
  El = !0, Mu(e);
}
function Lt() {
  if (!ea && lt !== null) {
    ea = !0;
    var e = 0, t = B;
    try {
      var n = lt;
      for (B = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      lt = null, El = !1;
    } catch (l) {
      throw lt !== null && (lt = lt.slice(e + 1)), cu(wo, Lt), l;
    } finally {
      B = t, ea = !1;
    }
  }
  return null;
}
var ln = [], an = 0, ol = null, sl = 0, Le = [], Oe = 0, Bt = null, at = 1, ot = "";
function It(e, t) {
  ln[an++] = sl, ln[an++] = ol, ol = e, sl = t;
}
function Au(e, t, n) {
  Le[Oe++] = at, Le[Oe++] = ot, Le[Oe++] = Bt, Bt = e;
  var r = at;
  e = ot;
  var l = 32 - He(r) - 1;
  r &= ~(1 << l), n += 1;
  var o = 32 - He(t) + l;
  if (30 < o) {
    var s = l - l % 5;
    o = (r & (1 << s) - 1).toString(32), r >>= s, l -= s, at = 1 << 32 - He(t) + l | n << l | r, ot = o + e;
  } else at = 1 << o | n << l | r, ot = e;
}
function Ro(e) {
  e.return !== null && (It(e, 1), Au(e, 1, 0));
}
function Lo(e) {
  for (; e === ol; ) ol = ln[--an], ln[an] = null, sl = ln[--an], ln[an] = null;
  for (; e === Bt; ) Bt = Le[--Oe], Le[Oe] = null, ot = Le[--Oe], Le[Oe] = null, at = Le[--Oe], Le[Oe] = null;
}
var Ce = null, Ee = null, W = !1, Ve = null;
function Uu(e, t) {
  var n = Ie(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Hs(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ce = e, Ee = _t(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ce = e, Ee = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Bt !== null ? { id: at, overflow: ot } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Ie(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Ce = e, Ee = null, !0) : !1;
    default:
      return !1;
  }
}
function Va(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ha(e) {
  if (W) {
    var t = Ee;
    if (t) {
      var n = t;
      if (!Hs(e, t)) {
        if (Va(e)) throw Error(k(418));
        t = _t(n.nextSibling);
        var r = Ce;
        t && Hs(e, t) ? Uu(r, n) : (e.flags = e.flags & -4097 | 2, W = !1, Ce = e);
      }
    } else {
      if (Va(e)) throw Error(k(418));
      e.flags = e.flags & -4097 | 2, W = !1, Ce = e;
    }
  }
}
function Qs(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Ce = e;
}
function Tr(e) {
  if (e !== Ce) return !1;
  if (!W) return Qs(e), W = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Ma(e.type, e.memoizedProps)), t && (t = Ee)) {
    if (Va(e)) throw Bu(), Error(k(418));
    for (; t; ) Uu(e, t), t = _t(t.nextSibling);
  }
  if (Qs(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(k(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ee = _t(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Ee = null;
    }
  } else Ee = Ce ? _t(e.stateNode.nextSibling) : null;
  return !0;
}
function Bu() {
  for (var e = Ee; e; ) e = _t(e.nextSibling);
}
function yn() {
  Ee = Ce = null, W = !1;
}
function Oo(e) {
  Ve === null ? Ve = [e] : Ve.push(e);
}
var Qf = ft.ReactCurrentBatchConfig;
function Ln(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(k(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(k(147, e));
      var l = r, o = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(s) {
        var i = l.refs;
        s === null ? delete i[o] : i[o] = s;
      }, t._stringRef = o, t);
    }
    if (typeof e != "string") throw Error(k(284));
    if (!n._owner) throw Error(k(290, e));
  }
  return e;
}
function zr(e, t) {
  throw e = Object.prototype.toString.call(t), Error(k(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Ws(e) {
  var t = e._init;
  return t(e._payload);
}
function Vu(e) {
  function t(p, c) {
    if (e) {
      var m = p.deletions;
      m === null ? (p.deletions = [c], p.flags |= 16) : m.push(c);
    }
  }
  function n(p, c) {
    if (!e) return null;
    for (; c !== null; ) t(p, c), c = c.sibling;
    return null;
  }
  function r(p, c) {
    for (p = /* @__PURE__ */ new Map(); c !== null; ) c.key !== null ? p.set(c.key, c) : p.set(c.index, c), c = c.sibling;
    return p;
  }
  function l(p, c) {
    return p = Ct(p, c), p.index = 0, p.sibling = null, p;
  }
  function o(p, c, m) {
    return p.index = m, e ? (m = p.alternate, m !== null ? (m = m.index, m < c ? (p.flags |= 2, c) : m) : (p.flags |= 2, c)) : (p.flags |= 1048576, c);
  }
  function s(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function i(p, c, m, S) {
    return c === null || c.tag !== 6 ? (c = sa(m, p.mode, S), c.return = p, c) : (c = l(c, m), c.return = p, c);
  }
  function u(p, c, m, S) {
    var w = m.type;
    return w === Jt ? f(p, c, m.props.children, S, m.key) : c !== null && (c.elementType === w || typeof w == "object" && w !== null && w.$$typeof === ht && Ws(w) === c.type) ? (S = l(c, m.props), S.ref = Ln(p, c, m), S.return = p, S) : (S = Kr(m.type, m.key, m.props, null, p.mode, S), S.ref = Ln(p, c, m), S.return = p, S);
  }
  function d(p, c, m, S) {
    return c === null || c.tag !== 4 || c.stateNode.containerInfo !== m.containerInfo || c.stateNode.implementation !== m.implementation ? (c = ia(m, p.mode, S), c.return = p, c) : (c = l(c, m.children || []), c.return = p, c);
  }
  function f(p, c, m, S, w) {
    return c === null || c.tag !== 7 ? (c = At(m, p.mode, S, w), c.return = p, c) : (c = l(c, m), c.return = p, c);
  }
  function v(p, c, m) {
    if (typeof c == "string" && c !== "" || typeof c == "number") return c = sa("" + c, p.mode, m), c.return = p, c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case xr:
          return m = Kr(c.type, c.key, c.props, null, p.mode, m), m.ref = Ln(p, null, c), m.return = p, m;
        case Xt:
          return c = ia(c, p.mode, m), c.return = p, c;
        case ht:
          var S = c._init;
          return v(p, S(c._payload), m);
      }
      if (bn(c) || Cn(c)) return c = At(c, p.mode, m, null), c.return = p, c;
      zr(p, c);
    }
    return null;
  }
  function h(p, c, m, S) {
    var w = c !== null ? c.key : null;
    if (typeof m == "string" && m !== "" || typeof m == "number") return w !== null ? null : i(p, c, "" + m, S);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case xr:
          return m.key === w ? u(p, c, m, S) : null;
        case Xt:
          return m.key === w ? d(p, c, m, S) : null;
        case ht:
          return w = m._init, h(
            p,
            c,
            w(m._payload),
            S
          );
      }
      if (bn(m) || Cn(m)) return w !== null ? null : f(p, c, m, S, null);
      zr(p, m);
    }
    return null;
  }
  function j(p, c, m, S, w) {
    if (typeof S == "string" && S !== "" || typeof S == "number") return p = p.get(m) || null, i(c, p, "" + S, w);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case xr:
          return p = p.get(S.key === null ? m : S.key) || null, u(c, p, S, w);
        case Xt:
          return p = p.get(S.key === null ? m : S.key) || null, d(c, p, S, w);
        case ht:
          var P = S._init;
          return j(p, c, m, P(S._payload), w);
      }
      if (bn(S) || Cn(S)) return p = p.get(m) || null, f(c, p, S, w, null);
      zr(c, S);
    }
    return null;
  }
  function y(p, c, m, S) {
    for (var w = null, P = null, T = c, C = c = 0, A = null; T !== null && C < m.length; C++) {
      T.index > C ? (A = T, T = null) : A = T.sibling;
      var I = h(p, T, m[C], S);
      if (I === null) {
        T === null && (T = A);
        break;
      }
      e && T && I.alternate === null && t(p, T), c = o(I, c, C), P === null ? w = I : P.sibling = I, P = I, T = A;
    }
    if (C === m.length) return n(p, T), W && It(p, C), w;
    if (T === null) {
      for (; C < m.length; C++) T = v(p, m[C], S), T !== null && (c = o(T, c, C), P === null ? w = T : P.sibling = T, P = T);
      return W && It(p, C), w;
    }
    for (T = r(p, T); C < m.length; C++) A = j(T, p, C, m[C], S), A !== null && (e && A.alternate !== null && T.delete(A.key === null ? C : A.key), c = o(A, c, C), P === null ? w = A : P.sibling = A, P = A);
    return e && T.forEach(function(q) {
      return t(p, q);
    }), W && It(p, C), w;
  }
  function x(p, c, m, S) {
    var w = Cn(m);
    if (typeof w != "function") throw Error(k(150));
    if (m = w.call(m), m == null) throw Error(k(151));
    for (var P = w = null, T = c, C = c = 0, A = null, I = m.next(); T !== null && !I.done; C++, I = m.next()) {
      T.index > C ? (A = T, T = null) : A = T.sibling;
      var q = h(p, T, I.value, S);
      if (q === null) {
        T === null && (T = A);
        break;
      }
      e && T && q.alternate === null && t(p, T), c = o(q, c, C), P === null ? w = q : P.sibling = q, P = q, T = A;
    }
    if (I.done) return n(
      p,
      T
    ), W && It(p, C), w;
    if (T === null) {
      for (; !I.done; C++, I = m.next()) I = v(p, I.value, S), I !== null && (c = o(I, c, C), P === null ? w = I : P.sibling = I, P = I);
      return W && It(p, C), w;
    }
    for (T = r(p, T); !I.done; C++, I = m.next()) I = j(T, p, C, I.value, S), I !== null && (e && I.alternate !== null && T.delete(I.key === null ? C : I.key), c = o(I, c, C), P === null ? w = I : P.sibling = I, P = I);
    return e && T.forEach(function(F) {
      return t(p, F);
    }), W && It(p, C), w;
  }
  function _(p, c, m, S) {
    if (typeof m == "object" && m !== null && m.type === Jt && m.key === null && (m = m.props.children), typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case xr:
          e: {
            for (var w = m.key, P = c; P !== null; ) {
              if (P.key === w) {
                if (w = m.type, w === Jt) {
                  if (P.tag === 7) {
                    n(p, P.sibling), c = l(P, m.props.children), c.return = p, p = c;
                    break e;
                  }
                } else if (P.elementType === w || typeof w == "object" && w !== null && w.$$typeof === ht && Ws(w) === P.type) {
                  n(p, P.sibling), c = l(P, m.props), c.ref = Ln(p, P, m), c.return = p, p = c;
                  break e;
                }
                n(p, P);
                break;
              } else t(p, P);
              P = P.sibling;
            }
            m.type === Jt ? (c = At(m.props.children, p.mode, S, m.key), c.return = p, p = c) : (S = Kr(m.type, m.key, m.props, null, p.mode, S), S.ref = Ln(p, c, m), S.return = p, p = S);
          }
          return s(p);
        case Xt:
          e: {
            for (P = m.key; c !== null; ) {
              if (c.key === P) if (c.tag === 4 && c.stateNode.containerInfo === m.containerInfo && c.stateNode.implementation === m.implementation) {
                n(p, c.sibling), c = l(c, m.children || []), c.return = p, p = c;
                break e;
              } else {
                n(p, c);
                break;
              }
              else t(p, c);
              c = c.sibling;
            }
            c = ia(m, p.mode, S), c.return = p, p = c;
          }
          return s(p);
        case ht:
          return P = m._init, _(p, c, P(m._payload), S);
      }
      if (bn(m)) return y(p, c, m, S);
      if (Cn(m)) return x(p, c, m, S);
      zr(p, m);
    }
    return typeof m == "string" && m !== "" || typeof m == "number" ? (m = "" + m, c !== null && c.tag === 6 ? (n(p, c.sibling), c = l(c, m), c.return = p, p = c) : (n(p, c), c = sa(m, p.mode, S), c.return = p, p = c), s(p)) : n(p, c);
  }
  return _;
}
var xn = Vu(!0), Hu = Vu(!1), il = Rt(null), ul = null, on = null, Io = null;
function Fo() {
  Io = on = ul = null;
}
function bo(e) {
  var t = il.current;
  Q(il), e._currentValue = t;
}
function Qa(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function hn(e, t) {
  ul = e, Io = on = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (je = !0), e.firstContext = null);
}
function be(e) {
  var t = e._currentValue;
  if (Io !== e) if (e = { context: e, memoizedValue: t, next: null }, on === null) {
    if (ul === null) throw Error(k(308));
    on = e, ul.dependencies = { lanes: 0, firstContext: e };
  } else on = on.next = e;
  return t;
}
var Dt = null;
function Do(e) {
  Dt === null ? Dt = [e] : Dt.push(e);
}
function Qu(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? (n.next = n, Do(t)) : (n.next = l.next, l.next = n), t.interleaved = n, ct(e, r);
}
function ct(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var mt = !1;
function $o(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Wu(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function st(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Nt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, U & 2) {
    var l = r.pending;
    return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, ct(e, n);
  }
  return l = r.interleaved, l === null ? (t.next = t, Do(r)) : (t.next = l.next, l.next = t), r.interleaved = t, ct(e, n);
}
function Br(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, _o(e, n);
  }
}
function qs(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var l = null, o = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var s = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        o === null ? l = o = s : o = o.next = s, n = n.next;
      } while (n !== null);
      o === null ? l = o = t : o = o.next = t;
    } else l = o = t;
    n = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: o, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function cl(e, t, n, r) {
  var l = e.updateQueue;
  mt = !1;
  var o = l.firstBaseUpdate, s = l.lastBaseUpdate, i = l.shared.pending;
  if (i !== null) {
    l.shared.pending = null;
    var u = i, d = u.next;
    u.next = null, s === null ? o = d : s.next = d, s = u;
    var f = e.alternate;
    f !== null && (f = f.updateQueue, i = f.lastBaseUpdate, i !== s && (i === null ? f.firstBaseUpdate = d : i.next = d, f.lastBaseUpdate = u));
  }
  if (o !== null) {
    var v = l.baseState;
    s = 0, f = d = u = null, i = o;
    do {
      var h = i.lane, j = i.eventTime;
      if ((r & h) === h) {
        f !== null && (f = f.next = {
          eventTime: j,
          lane: 0,
          tag: i.tag,
          payload: i.payload,
          callback: i.callback,
          next: null
        });
        e: {
          var y = e, x = i;
          switch (h = t, j = n, x.tag) {
            case 1:
              if (y = x.payload, typeof y == "function") {
                v = y.call(j, v, h);
                break e;
              }
              v = y;
              break e;
            case 3:
              y.flags = y.flags & -65537 | 128;
            case 0:
              if (y = x.payload, h = typeof y == "function" ? y.call(j, v, h) : y, h == null) break e;
              v = Y({}, v, h);
              break e;
            case 2:
              mt = !0;
          }
        }
        i.callback !== null && i.lane !== 0 && (e.flags |= 64, h = l.effects, h === null ? l.effects = [i] : h.push(i));
      } else j = { eventTime: j, lane: h, tag: i.tag, payload: i.payload, callback: i.callback, next: null }, f === null ? (d = f = j, u = v) : f = f.next = j, s |= h;
      if (i = i.next, i === null) {
        if (i = l.shared.pending, i === null) break;
        h = i, i = h.next, h.next = null, l.lastBaseUpdate = h, l.shared.pending = null;
      }
    } while (!0);
    if (f === null && (u = v), l.baseState = u, l.firstBaseUpdate = d, l.lastBaseUpdate = f, t = l.shared.interleaved, t !== null) {
      l = t;
      do
        s |= l.lane, l = l.next;
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    Ht |= s, e.lanes = s, e.memoizedState = v;
  }
}
function Ks(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], l = r.callback;
    if (l !== null) {
      if (r.callback = null, r = n, typeof l != "function") throw Error(k(191, l));
      l.call(r);
    }
  }
}
var vr = {}, Ze = Rt(vr), or = Rt(vr), sr = Rt(vr);
function $t(e) {
  if (e === vr) throw Error(k(174));
  return e;
}
function Mo(e, t) {
  switch (V(sr, t), V(or, e), V(Ze, vr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ka(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = ka(t, e);
  }
  Q(Ze), V(Ze, t);
}
function jn() {
  Q(Ze), Q(or), Q(sr);
}
function qu(e) {
  $t(sr.current);
  var t = $t(Ze.current), n = ka(t, e.type);
  t !== n && (V(or, e), V(Ze, n));
}
function Ao(e) {
  or.current === e && (Q(Ze), Q(or));
}
var K = Rt(0);
function dl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      t.child.return = t, t = t.child;
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    t.sibling.return = t.return, t = t.sibling;
  }
  return null;
}
var ta = [];
function Uo() {
  for (var e = 0; e < ta.length; e++) ta[e]._workInProgressVersionPrimary = null;
  ta.length = 0;
}
var Vr = ft.ReactCurrentDispatcher, na = ft.ReactCurrentBatchConfig, Vt = 0, G = null, te = null, re = null, fl = !1, Qn = !1, ir = 0, Wf = 0;
function de() {
  throw Error(k(321));
}
function Bo(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!qe(e[n], t[n])) return !1;
  return !0;
}
function Vo(e, t, n, r, l, o) {
  if (Vt = o, G = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Vr.current = e === null || e.memoizedState === null ? Yf : Xf, e = n(r, l), Qn) {
    o = 0;
    do {
      if (Qn = !1, ir = 0, 25 <= o) throw Error(k(301));
      o += 1, re = te = null, t.updateQueue = null, Vr.current = Jf, e = n(r, l);
    } while (Qn);
  }
  if (Vr.current = pl, t = te !== null && te.next !== null, Vt = 0, re = te = G = null, fl = !1, t) throw Error(k(300));
  return e;
}
function Ho() {
  var e = ir !== 0;
  return ir = 0, e;
}
function Ye() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return re === null ? G.memoizedState = re = e : re = re.next = e, re;
}
function De() {
  if (te === null) {
    var e = G.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = te.next;
  var t = re === null ? G.memoizedState : re.next;
  if (t !== null) re = t, te = e;
  else {
    if (e === null) throw Error(k(310));
    te = e, e = { memoizedState: te.memoizedState, baseState: te.baseState, baseQueue: te.baseQueue, queue: te.queue, next: null }, re === null ? G.memoizedState = re = e : re = re.next = e;
  }
  return re;
}
function ur(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ra(e) {
  var t = De(), n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = te, l = r.baseQueue, o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var s = l.next;
      l.next = o.next, o.next = s;
    }
    r.baseQueue = l = o, n.pending = null;
  }
  if (l !== null) {
    o = l.next, r = r.baseState;
    var i = s = null, u = null, d = o;
    do {
      var f = d.lane;
      if ((Vt & f) === f) u !== null && (u = u.next = { lane: 0, action: d.action, hasEagerState: d.hasEagerState, eagerState: d.eagerState, next: null }), r = d.hasEagerState ? d.eagerState : e(r, d.action);
      else {
        var v = {
          lane: f,
          action: d.action,
          hasEagerState: d.hasEagerState,
          eagerState: d.eagerState,
          next: null
        };
        u === null ? (i = u = v, s = r) : u = u.next = v, G.lanes |= f, Ht |= f;
      }
      d = d.next;
    } while (d !== null && d !== o);
    u === null ? s = r : u.next = i, qe(r, t.memoizedState) || (je = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = u, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    l = e;
    do
      o = l.lane, G.lanes |= o, Ht |= o, l = l.next;
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function la(e) {
  var t = De(), n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, l = n.pending, o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var s = l = l.next;
    do
      o = e(o, s.action), s = s.next;
    while (s !== l);
    qe(o, t.memoizedState) || (je = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
  }
  return [o, r];
}
function Ku() {
}
function Gu(e, t) {
  var n = G, r = De(), l = t(), o = !qe(r.memoizedState, l);
  if (o && (r.memoizedState = l, je = !0), r = r.queue, Qo(Ju.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || re !== null && re.memoizedState.tag & 1) {
    if (n.flags |= 2048, cr(9, Xu.bind(null, n, r, l, t), void 0, null), le === null) throw Error(k(349));
    Vt & 30 || Yu(n, t, l);
  }
  return l;
}
function Yu(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = G.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, G.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Xu(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Zu(t) && ec(e);
}
function Ju(e, t, n) {
  return n(function() {
    Zu(t) && ec(e);
  });
}
function Zu(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !qe(e, n);
  } catch {
    return !0;
  }
}
function ec(e) {
  var t = ct(e, 1);
  t !== null && Qe(t, e, 1, -1);
}
function Gs(e) {
  var t = Ye();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ur, lastRenderedState: e }, t.queue = e, e = e.dispatch = Gf.bind(null, G, e), [t.memoizedState, e];
}
function cr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = G.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, G.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function tc() {
  return De().memoizedState;
}
function Hr(e, t, n, r) {
  var l = Ye();
  G.flags |= e, l.memoizedState = cr(1 | t, n, void 0, r === void 0 ? null : r);
}
function Cl(e, t, n, r) {
  var l = De();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (te !== null) {
    var s = te.memoizedState;
    if (o = s.destroy, r !== null && Bo(r, s.deps)) {
      l.memoizedState = cr(t, n, o, r);
      return;
    }
  }
  G.flags |= e, l.memoizedState = cr(1 | t, n, o, r);
}
function Ys(e, t) {
  return Hr(8390656, 8, e, t);
}
function Qo(e, t) {
  return Cl(2048, 8, e, t);
}
function nc(e, t) {
  return Cl(4, 2, e, t);
}
function rc(e, t) {
  return Cl(4, 4, e, t);
}
function lc(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function ac(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Cl(4, 4, lc.bind(null, t, e), n);
}
function Wo() {
}
function oc(e, t) {
  var n = De();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Bo(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function sc(e, t) {
  var n = De();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Bo(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function ic(e, t, n) {
  return Vt & 21 ? (qe(n, t) || (n = pu(), G.lanes |= n, Ht |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, je = !0), e.memoizedState = n);
}
function qf(e, t) {
  var n = B;
  B = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = na.transition;
  na.transition = {};
  try {
    e(!1), t();
  } finally {
    B = n, na.transition = r;
  }
}
function uc() {
  return De().memoizedState;
}
function Kf(e, t, n) {
  var r = Et(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, cc(e)) dc(t, n);
  else if (n = Qu(e, t, n, r), n !== null) {
    var l = ve();
    Qe(n, e, r, l), fc(n, t, r);
  }
}
function Gf(e, t, n) {
  var r = Et(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (cc(e)) dc(t, l);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
      var s = t.lastRenderedState, i = o(s, n);
      if (l.hasEagerState = !0, l.eagerState = i, qe(i, s)) {
        var u = t.interleaved;
        u === null ? (l.next = l, Do(t)) : (l.next = u.next, u.next = l), t.interleaved = l;
        return;
      }
    } catch {
    } finally {
    }
    n = Qu(e, t, l, r), n !== null && (l = ve(), Qe(n, e, r, l), fc(n, t, r));
  }
}
function cc(e) {
  var t = e.alternate;
  return e === G || t !== null && t === G;
}
function dc(e, t) {
  Qn = fl = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function fc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, _o(e, n);
  }
}
var pl = { readContext: be, useCallback: de, useContext: de, useEffect: de, useImperativeHandle: de, useInsertionEffect: de, useLayoutEffect: de, useMemo: de, useReducer: de, useRef: de, useState: de, useDebugValue: de, useDeferredValue: de, useTransition: de, useMutableSource: de, useSyncExternalStore: de, useId: de, unstable_isNewReconciler: !1 }, Yf = { readContext: be, useCallback: function(e, t) {
  return Ye().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: be, useEffect: Ys, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Hr(
    4194308,
    4,
    lc.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Hr(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Hr(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Ye();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Ye();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Kf.bind(null, G, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Ye();
  return e = { current: e }, t.memoizedState = e;
}, useState: Gs, useDebugValue: Wo, useDeferredValue: function(e) {
  return Ye().memoizedState = e;
}, useTransition: function() {
  var e = Gs(!1), t = e[0];
  return e = qf.bind(null, e[1]), Ye().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = G, l = Ye();
  if (W) {
    if (n === void 0) throw Error(k(407));
    n = n();
  } else {
    if (n = t(), le === null) throw Error(k(349));
    Vt & 30 || Yu(r, t, n);
  }
  l.memoizedState = n;
  var o = { value: n, getSnapshot: t };
  return l.queue = o, Ys(Ju.bind(
    null,
    r,
    o,
    e
  ), [e]), r.flags |= 2048, cr(9, Xu.bind(null, r, o, n, t), void 0, null), n;
}, useId: function() {
  var e = Ye(), t = le.identifierPrefix;
  if (W) {
    var n = ot, r = at;
    n = (r & ~(1 << 32 - He(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = ir++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = Wf++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, Xf = {
  readContext: be,
  useCallback: oc,
  useContext: be,
  useEffect: Qo,
  useImperativeHandle: ac,
  useInsertionEffect: nc,
  useLayoutEffect: rc,
  useMemo: sc,
  useReducer: ra,
  useRef: tc,
  useState: function() {
    return ra(ur);
  },
  useDebugValue: Wo,
  useDeferredValue: function(e) {
    var t = De();
    return ic(t, te.memoizedState, e);
  },
  useTransition: function() {
    var e = ra(ur)[0], t = De().memoizedState;
    return [e, t];
  },
  useMutableSource: Ku,
  useSyncExternalStore: Gu,
  useId: uc,
  unstable_isNewReconciler: !1
}, Jf = { readContext: be, useCallback: oc, useContext: be, useEffect: Qo, useImperativeHandle: ac, useInsertionEffect: nc, useLayoutEffect: rc, useMemo: sc, useReducer: la, useRef: tc, useState: function() {
  return la(ur);
}, useDebugValue: Wo, useDeferredValue: function(e) {
  var t = De();
  return te === null ? t.memoizedState = e : ic(t, te.memoizedState, e);
}, useTransition: function() {
  var e = la(ur)[0], t = De().memoizedState;
  return [e, t];
}, useMutableSource: Ku, useSyncExternalStore: Gu, useId: uc, unstable_isNewReconciler: !1 };
function Ue(e, t) {
  if (e && e.defaultProps) {
    t = Y({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Wa(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : Y({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Pl = { isMounted: function(e) {
  return (e = e._reactInternals) ? qt(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = ve(), l = Et(e), o = st(r, l);
  o.payload = t, n != null && (o.callback = n), t = Nt(e, o, l), t !== null && (Qe(t, e, l, r), Br(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = ve(), l = Et(e), o = st(r, l);
  o.tag = 1, o.payload = t, n != null && (o.callback = n), t = Nt(e, o, l), t !== null && (Qe(t, e, l, r), Br(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = ve(), r = Et(e), l = st(n, r);
  l.tag = 2, t != null && (l.callback = t), t = Nt(e, l, r), t !== null && (Qe(t, e, r, n), Br(t, e, r));
} };
function Xs(e, t, n, r, l, o, s) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, s) : t.prototype && t.prototype.isPureReactComponent ? !nr(n, r) || !nr(l, o) : !0;
}
function pc(e, t, n) {
  var r = !1, l = Tt, o = t.contextType;
  return typeof o == "object" && o !== null ? o = be(o) : (l = we(t) ? Ut : he.current, r = t.contextTypes, o = (r = r != null) ? gn(e, l) : Tt), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Pl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = o), t;
}
function Js(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Pl.enqueueReplaceState(t, t.state, null);
}
function qa(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = {}, $o(e);
  var o = t.contextType;
  typeof o == "object" && o !== null ? l.context = be(o) : (o = we(t) ? Ut : he.current, l.context = gn(e, o)), l.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (Wa(e, t, o, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && Pl.enqueueReplaceState(l, l.state, null), cl(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function Sn(e, t) {
  try {
    var n = "", r = t;
    do
      n += kd(r), r = r.return;
    while (r);
    var l = n;
  } catch (o) {
    l = `
Error generating stack: ` + o.message + `
` + o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function aa(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ka(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var Zf = typeof WeakMap == "function" ? WeakMap : Map;
function hc(e, t, n) {
  n = st(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    ml || (ml = !0, lo = r), Ka(e, t);
  }, n;
}
function mc(e, t, n) {
  n = st(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    n.payload = function() {
      return r(l);
    }, n.callback = function() {
      Ka(e, t);
    };
  }
  var o = e.stateNode;
  return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
    Ka(e, t), typeof r != "function" && (kt === null ? kt = /* @__PURE__ */ new Set([this]) : kt.add(this));
    var s = t.stack;
    this.componentDidCatch(t.value, { componentStack: s !== null ? s : "" });
  }), n;
}
function Zs(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Zf();
    var l = /* @__PURE__ */ new Set();
    r.set(t, l);
  } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
  l.has(n) || (l.add(n), e = pp.bind(null, e, t, n), t.then(e, e));
}
function ei(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function ti(e, t, n, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = st(-1, 1), t.tag = 2, Nt(n, t, 1))), n.lanes |= 1), e);
}
var ep = ft.ReactCurrentOwner, je = !1;
function me(e, t, n, r) {
  t.child = e === null ? Hu(t, null, n, r) : xn(t, e.child, n, r);
}
function ni(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return hn(t, l), r = Vo(e, t, n, r, o, l), n = Ho(), e !== null && !je ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, dt(e, t, l)) : (W && n && Ro(t), t.flags |= 1, me(e, t, r, l), t.child);
}
function ri(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" && !es(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, vc(e, t, o, r, l)) : (e = Kr(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (o = e.child, !(e.lanes & l)) {
    var s = o.memoizedProps;
    if (n = n.compare, n = n !== null ? n : nr, n(s, r) && e.ref === t.ref) return dt(e, t, l);
  }
  return t.flags |= 1, e = Ct(o, r), e.ref = t.ref, e.return = t, t.child = e;
}
function vc(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (nr(o, r) && e.ref === t.ref) if (je = !1, t.pendingProps = r = o, (e.lanes & l) !== 0) e.flags & 131072 && (je = !0);
    else return t.lanes = e.lanes, dt(e, t, l);
  }
  return Ga(e, t, n, r, l);
}
function gc(e, t, n) {
  var r = t.pendingProps, l = r.children, o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, V(un, ke), ke |= n;
  else {
    if (!(n & 1073741824)) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, V(un, ke), ke |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, V(un, ke), ke |= r;
  }
  else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, V(un, ke), ke |= r;
  return me(e, t, l, n), t.child;
}
function yc(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Ga(e, t, n, r, l) {
  var o = we(n) ? Ut : he.current;
  return o = gn(t, o), hn(t, l), n = Vo(e, t, n, r, o, l), r = Ho(), e !== null && !je ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, dt(e, t, l)) : (W && r && Ro(t), t.flags |= 1, me(e, t, n, l), t.child);
}
function li(e, t, n, r, l) {
  if (we(n)) {
    var o = !0;
    al(t);
  } else o = !1;
  if (hn(t, l), t.stateNode === null) Qr(e, t), pc(t, n, r), qa(t, n, r, l), r = !0;
  else if (e === null) {
    var s = t.stateNode, i = t.memoizedProps;
    s.props = i;
    var u = s.context, d = n.contextType;
    typeof d == "object" && d !== null ? d = be(d) : (d = we(n) ? Ut : he.current, d = gn(t, d));
    var f = n.getDerivedStateFromProps, v = typeof f == "function" || typeof s.getSnapshotBeforeUpdate == "function";
    v || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (i !== r || u !== d) && Js(t, s, r, d), mt = !1;
    var h = t.memoizedState;
    s.state = h, cl(t, r, s, l), u = t.memoizedState, i !== r || h !== u || Se.current || mt ? (typeof f == "function" && (Wa(t, n, f, r), u = t.memoizedState), (i = mt || Xs(t, n, i, r, h, u, d)) ? (v || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = u), s.props = r, s.state = u, s.context = d, r = i) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    s = t.stateNode, Wu(e, t), i = t.memoizedProps, d = t.type === t.elementType ? i : Ue(t.type, i), s.props = d, v = t.pendingProps, h = s.context, u = n.contextType, typeof u == "object" && u !== null ? u = be(u) : (u = we(n) ? Ut : he.current, u = gn(t, u));
    var j = n.getDerivedStateFromProps;
    (f = typeof j == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (i !== v || h !== u) && Js(t, s, r, u), mt = !1, h = t.memoizedState, s.state = h, cl(t, r, s, l);
    var y = t.memoizedState;
    i !== v || h !== y || Se.current || mt ? (typeof j == "function" && (Wa(t, n, j, r), y = t.memoizedState), (d = mt || Xs(t, n, d, r, h, y, u) || !1) ? (f || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, y, u), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, y, u)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || i === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = y), s.props = r, s.state = y, s.context = u, r = d) : (typeof s.componentDidUpdate != "function" || i === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Ya(e, t, n, r, o, l);
}
function Ya(e, t, n, r, l, o) {
  yc(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return l && Vs(t, n, !1), dt(e, t, o);
  r = t.stateNode, ep.current = t;
  var i = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && s ? (t.child = xn(t, e.child, null, o), t.child = xn(t, null, i, o)) : me(e, t, i, o), t.memoizedState = r.state, l && Vs(t, n, !0), t.child;
}
function xc(e) {
  var t = e.stateNode;
  t.pendingContext ? Bs(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Bs(e, t.context, !1), Mo(e, t.containerInfo);
}
function ai(e, t, n, r, l) {
  return yn(), Oo(l), t.flags |= 256, me(e, t, n, r), t.child;
}
var Xa = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ja(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function jc(e, t, n) {
  var r = t.pendingProps, l = K.current, o = !1, s = (t.flags & 128) !== 0, i;
  if ((i = s) || (i = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), i ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), V(K, l & 1), e === null)
    return Ha(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, s = { mode: "hidden", children: s }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = s) : o = Rl(s, r, 0, null), e = At(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = Ja(n), t.memoizedState = Xa, e) : qo(t, s));
  if (l = e.memoizedState, l !== null && (i = l.dehydrated, i !== null)) return tp(e, t, s, r, i, l, n);
  if (o) {
    o = r.fallback, s = t.mode, l = e.child, i = l.sibling;
    var u = { mode: "hidden", children: r.children };
    return !(s & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = u, t.deletions = null) : (r = Ct(l, u), r.subtreeFlags = l.subtreeFlags & 14680064), i !== null ? o = Ct(i, o) : (o = At(o, s, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, s = e.child.memoizedState, s = s === null ? Ja(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }, o.memoizedState = s, o.childLanes = e.childLanes & ~n, t.memoizedState = Xa, r;
  }
  return o = e.child, e = o.sibling, r = Ct(o, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function qo(e, t) {
  return t = Rl({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Rr(e, t, n, r) {
  return r !== null && Oo(r), xn(t, e.child, null, n), e = qo(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function tp(e, t, n, r, l, o, s) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = aa(Error(k(422))), Rr(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, l = t.mode, r = Rl({ mode: "visible", children: r.children }, l, 0, null), o = At(o, l, s, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && xn(t, e.child, null, s), t.child.memoizedState = Ja(s), t.memoizedState = Xa, o);
  if (!(t.mode & 1)) return Rr(e, t, s, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r) var i = r.dgst;
    return r = i, o = Error(k(419)), r = aa(o, r, void 0), Rr(e, t, s, r);
  }
  if (i = (s & e.childLanes) !== 0, je || i) {
    if (r = le, r !== null) {
      switch (s & -s) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      l = l & (r.suspendedLanes | s) ? 0 : l, l !== 0 && l !== o.retryLane && (o.retryLane = l, ct(e, l), Qe(r, e, l, -1));
    }
    return Zo(), r = aa(Error(k(421))), Rr(e, t, s, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = hp.bind(null, e), l._reactRetry = t, null) : (e = o.treeContext, Ee = _t(l.nextSibling), Ce = t, W = !0, Ve = null, e !== null && (Le[Oe++] = at, Le[Oe++] = ot, Le[Oe++] = Bt, at = e.id, ot = e.overflow, Bt = t), t = qo(t, r.children), t.flags |= 4096, t);
}
function oi(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Qa(e.return, t, n);
}
function oa(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = l);
}
function Sc(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, o = r.tail;
  if (me(e, t, r.children, n), r = K.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && oi(e, n, t);
      else if (e.tag === 19) oi(e, n, t);
      else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break e;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) break e;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    r &= 1;
  }
  if (V(K, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (l) {
    case "forwards":
      for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && dl(e) === null && (l = n), n = n.sibling;
      n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), oa(t, !1, l, n, o);
      break;
    case "backwards":
      for (n = null, l = t.child, t.child = null; l !== null; ) {
        if (e = l.alternate, e !== null && dl(e) === null) {
          t.child = l;
          break;
        }
        e = l.sibling, l.sibling = n, n = l, l = e;
      }
      oa(t, !0, n, null, o);
      break;
    case "together":
      oa(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Qr(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function dt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Ht |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(k(153));
  if (t.child !== null) {
    for (e = t.child, n = Ct(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Ct(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function np(e, t, n) {
  switch (t.tag) {
    case 3:
      xc(t), yn();
      break;
    case 5:
      qu(t);
      break;
    case 1:
      we(t.type) && al(t);
      break;
    case 4:
      Mo(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, l = t.memoizedProps.value;
      V(il, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (V(K, K.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? jc(e, t, n) : (V(K, K.current & 1), e = dt(e, t, n), e !== null ? e.sibling : null);
      V(K, K.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Sc(e, t, n);
        t.flags |= 128;
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), V(K, K.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, gc(e, t, n);
  }
  return dt(e, t, n);
}
var wc, Za, _c, Nc;
wc = function(e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      n.child.return = n, n = n.child;
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    n.sibling.return = n.return, n = n.sibling;
  }
};
Za = function() {
};
_c = function(e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = t.stateNode, $t(Ze.current);
    var o = null;
    switch (n) {
      case "input":
        l = Sa(e, l), r = Sa(e, r), o = [];
        break;
      case "select":
        l = Y({}, l, { value: void 0 }), r = Y({}, r, { value: void 0 }), o = [];
        break;
      case "textarea":
        l = Na(e, l), r = Na(e, r), o = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = rl);
    }
    Ea(n, r);
    var s;
    n = null;
    for (d in l) if (!r.hasOwnProperty(d) && l.hasOwnProperty(d) && l[d] != null) if (d === "style") {
      var i = l[d];
      for (s in i) i.hasOwnProperty(s) && (n || (n = {}), n[s] = "");
    } else d !== "dangerouslySetInnerHTML" && d !== "children" && d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (Gn.hasOwnProperty(d) ? o || (o = []) : (o = o || []).push(d, null));
    for (d in r) {
      var u = r[d];
      if (i = l != null ? l[d] : void 0, r.hasOwnProperty(d) && u !== i && (u != null || i != null)) if (d === "style") if (i) {
        for (s in i) !i.hasOwnProperty(s) || u && u.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
        for (s in u) u.hasOwnProperty(s) && i[s] !== u[s] && (n || (n = {}), n[s] = u[s]);
      } else n || (o || (o = []), o.push(
        d,
        n
      )), n = u;
      else d === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, i = i ? i.__html : void 0, u != null && i !== u && (o = o || []).push(d, u)) : d === "children" ? typeof u != "string" && typeof u != "number" || (o = o || []).push(d, "" + u) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && (Gn.hasOwnProperty(d) ? (u != null && d === "onScroll" && H("scroll", e), o || i === u || (o = [])) : (o = o || []).push(d, u));
    }
    n && (o = o || []).push("style", n);
    var d = o;
    (t.updateQueue = d) && (t.flags |= 4);
  }
};
Nc = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function On(e, t) {
  if (!W) switch (e.tailMode) {
    case "hidden":
      t = e.tail;
      for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
      n === null ? e.tail = null : n.sibling = null;
      break;
    case "collapsed":
      n = e.tail;
      for (var r = null; n !== null; ) n.alternate !== null && (r = n), n = n.sibling;
      r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
  }
}
function fe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
  else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function rp(e, t, n) {
  var r = t.pendingProps;
  switch (Lo(t), t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return fe(t), null;
    case 1:
      return we(t.type) && ll(), fe(t), null;
    case 3:
      return r = t.stateNode, jn(), Q(Se), Q(he), Uo(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Tr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Ve !== null && (so(Ve), Ve = null))), Za(e, t), fe(t), null;
    case 5:
      Ao(t);
      var l = $t(sr.current);
      if (n = t.type, e !== null && t.stateNode != null) _c(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(k(166));
          return fe(t), null;
        }
        if (e = $t(Ze.current), Tr(t)) {
          r = t.stateNode, n = t.type;
          var o = t.memoizedProps;
          switch (r[Xe] = t, r[ar] = o, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              H("cancel", r), H("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              H("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < $n.length; l++) H($n[l], r);
              break;
            case "source":
              H("error", r);
              break;
            case "img":
            case "image":
            case "link":
              H(
                "error",
                r
              ), H("load", r);
              break;
            case "details":
              H("toggle", r);
              break;
            case "input":
              ms(r, o), H("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!o.multiple }, H("invalid", r);
              break;
            case "textarea":
              gs(r, o), H("invalid", r);
          }
          Ea(n, o), l = null;
          for (var s in o) if (o.hasOwnProperty(s)) {
            var i = o[s];
            s === "children" ? typeof i == "string" ? r.textContent !== i && (o.suppressHydrationWarning !== !0 && Pr(r.textContent, i, e), l = ["children", i]) : typeof i == "number" && r.textContent !== "" + i && (o.suppressHydrationWarning !== !0 && Pr(
              r.textContent,
              i,
              e
            ), l = ["children", "" + i]) : Gn.hasOwnProperty(s) && i != null && s === "onScroll" && H("scroll", r);
          }
          switch (n) {
            case "input":
              jr(r), vs(r, o, !0);
              break;
            case "textarea":
              jr(r), ys(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = rl);
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          s = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Ji(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, { is: r.is }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[Xe] = t, e[ar] = r, wc(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (s = Ca(n, r), n) {
              case "dialog":
                H("cancel", e), H("close", e), l = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                H("load", e), l = r;
                break;
              case "video":
              case "audio":
                for (l = 0; l < $n.length; l++) H($n[l], e);
                l = r;
                break;
              case "source":
                H("error", e), l = r;
                break;
              case "img":
              case "image":
              case "link":
                H(
                  "error",
                  e
                ), H("load", e), l = r;
                break;
              case "details":
                H("toggle", e), l = r;
                break;
              case "input":
                ms(e, r), l = Sa(e, r), H("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = Y({}, r, { value: void 0 }), H("invalid", e);
                break;
              case "textarea":
                gs(e, r), l = Na(e, r), H("invalid", e);
                break;
              default:
                l = r;
            }
            Ea(n, l), i = l;
            for (o in i) if (i.hasOwnProperty(o)) {
              var u = i[o];
              o === "style" ? tu(e, u) : o === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, u != null && Zi(e, u)) : o === "children" ? typeof u == "string" ? (n !== "textarea" || u !== "") && Yn(e, u) : typeof u == "number" && Yn(e, "" + u) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Gn.hasOwnProperty(o) ? u != null && o === "onScroll" && H("scroll", e) : u != null && go(e, o, u, s));
            }
            switch (n) {
              case "input":
                jr(e), vs(e, r, !1);
                break;
              case "textarea":
                jr(e), ys(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Pt(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, o = r.value, o != null ? cn(e, !!r.multiple, o, !1) : r.defaultValue != null && cn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = rl);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
      }
      return fe(t), null;
    case 6:
      if (e && t.stateNode != null) Nc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(k(166));
        if (n = $t(sr.current), $t(Ze.current), Tr(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Xe] = t, (o = r.nodeValue !== n) && (e = Ce, e !== null)) switch (e.tag) {
            case 3:
              Pr(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && Pr(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          o && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Xe] = t, t.stateNode = r;
      }
      return fe(t), null;
    case 13:
      if (Q(K), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (W && Ee !== null && t.mode & 1 && !(t.flags & 128)) Bu(), yn(), t.flags |= 98560, o = !1;
        else if (o = Tr(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!o) throw Error(k(318));
            if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(k(317));
            o[Xe] = t;
          } else yn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          fe(t), o = !1;
        } else Ve !== null && (so(Ve), Ve = null), o = !0;
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || K.current & 1 ? ne === 0 && (ne = 3) : Zo())), t.updateQueue !== null && (t.flags |= 4), fe(t), null);
    case 4:
      return jn(), Za(e, t), e === null && rr(t.stateNode.containerInfo), fe(t), null;
    case 10:
      return bo(t.type._context), fe(t), null;
    case 17:
      return we(t.type) && ll(), fe(t), null;
    case 19:
      if (Q(K), o = t.memoizedState, o === null) return fe(t), null;
      if (r = (t.flags & 128) !== 0, s = o.rendering, s === null) if (r) On(o, !1);
      else {
        if (ne !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (s = dl(e), s !== null) {
            for (t.flags |= 128, On(o, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) o = n, e = r, o.flags &= 14680066, s = o.alternate, s === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = s.childLanes, o.lanes = s.lanes, o.child = s.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = s.memoizedProps, o.memoizedState = s.memoizedState, o.updateQueue = s.updateQueue, o.type = s.type, e = s.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return V(K, K.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        o.tail !== null && J() > wn && (t.flags |= 128, r = !0, On(o, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = dl(s), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), On(o, !0), o.tail === null && o.tailMode === "hidden" && !s.alternate && !W) return fe(t), null;
        } else 2 * J() - o.renderingStartTime > wn && n !== 1073741824 && (t.flags |= 128, r = !0, On(o, !1), t.lanes = 4194304);
        o.isBackwards ? (s.sibling = t.child, t.child = s) : (n = o.last, n !== null ? n.sibling = s : t.child = s, o.last = s);
      }
      return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = J(), t.sibling = null, n = K.current, V(K, r ? n & 1 | 2 : n & 1), t) : (fe(t), null);
    case 22:
    case 23:
      return Jo(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? ke & 1073741824 && (fe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : fe(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(k(156, t.tag));
}
function lp(e, t) {
  switch (Lo(t), t.tag) {
    case 1:
      return we(t.type) && ll(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return jn(), Q(Se), Q(he), Uo(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Ao(t), null;
    case 13:
      if (Q(K), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(k(340));
        yn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return Q(K), null;
    case 4:
      return jn(), null;
    case 10:
      return bo(t.type._context), null;
    case 22:
    case 23:
      return Jo(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Lr = !1, pe = !1, ap = typeof WeakSet == "function" ? WeakSet : Set, R = null;
function sn(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    X(e, t, r);
  }
  else n.current = null;
}
function eo(e, t, n) {
  try {
    n();
  } catch (r) {
    X(e, t, r);
  }
}
var si = !1;
function op(e, t) {
  if (Da = el, e = Tu(), zo(e)) {
    if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else e: {
      n = (n = e.ownerDocument) && n.defaultView || window;
      var r = n.getSelection && n.getSelection();
      if (r && r.rangeCount !== 0) {
        n = r.anchorNode;
        var l = r.anchorOffset, o = r.focusNode;
        r = r.focusOffset;
        try {
          n.nodeType, o.nodeType;
        } catch {
          n = null;
          break e;
        }
        var s = 0, i = -1, u = -1, d = 0, f = 0, v = e, h = null;
        t: for (; ; ) {
          for (var j; v !== n || l !== 0 && v.nodeType !== 3 || (i = s + l), v !== o || r !== 0 && v.nodeType !== 3 || (u = s + r), v.nodeType === 3 && (s += v.nodeValue.length), (j = v.firstChild) !== null; )
            h = v, v = j;
          for (; ; ) {
            if (v === e) break t;
            if (h === n && ++d === l && (i = s), h === o && ++f === r && (u = s), (j = v.nextSibling) !== null) break;
            v = h, h = v.parentNode;
          }
          v = j;
        }
        n = i === -1 || u === -1 ? null : { start: i, end: u };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for ($a = { focusedElem: e, selectionRange: n }, el = !1, R = t; R !== null; ) if (t = R, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, R = e;
  else for (; R !== null; ) {
    t = R;
    try {
      var y = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (y !== null) {
            var x = y.memoizedProps, _ = y.memoizedState, p = t.stateNode, c = p.getSnapshotBeforeUpdate(t.elementType === t.type ? x : Ue(t.type, x), _);
            p.__reactInternalSnapshotBeforeUpdate = c;
          }
          break;
        case 3:
          var m = t.stateNode.containerInfo;
          m.nodeType === 1 ? m.textContent = "" : m.nodeType === 9 && m.documentElement && m.removeChild(m.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(k(163));
      }
    } catch (S) {
      X(t, t.return, S);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, R = e;
      break;
    }
    R = t.return;
  }
  return y = si, si = !1, y;
}
function Wn(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        l.destroy = void 0, o !== void 0 && eo(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function Tl(e, t) {
  if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
    var n = t = t.next;
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function to(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : t.current = e;
  }
}
function kc(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, kc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Xe], delete t[ar], delete t[Ua], delete t[Bf], delete t[Vf])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Ec(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ii(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || Ec(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function no(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = rl));
  else if (r !== 4 && (e = e.child, e !== null)) for (no(e, t, n), e = e.sibling; e !== null; ) no(e, t, n), e = e.sibling;
}
function ro(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (ro(e, t, n), e = e.sibling; e !== null; ) ro(e, t, n), e = e.sibling;
}
var se = null, Be = !1;
function pt(e, t, n) {
  for (n = n.child; n !== null; ) Cc(e, t, n), n = n.sibling;
}
function Cc(e, t, n) {
  if (Je && typeof Je.onCommitFiberUnmount == "function") try {
    Je.onCommitFiberUnmount(Sl, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      pe || sn(n, t);
    case 6:
      var r = se, l = Be;
      se = null, pt(e, t, n), se = r, Be = l, se !== null && (Be ? (e = se, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : se.removeChild(n.stateNode));
      break;
    case 18:
      se !== null && (Be ? (e = se, n = n.stateNode, e.nodeType === 8 ? Zl(e.parentNode, n) : e.nodeType === 1 && Zl(e, n), er(e)) : Zl(se, n.stateNode));
      break;
    case 4:
      r = se, l = Be, se = n.stateNode.containerInfo, Be = !0, pt(e, t, n), se = r, Be = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!pe && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var o = l, s = o.destroy;
          o = o.tag, s !== void 0 && (o & 2 || o & 4) && eo(n, t, s), l = l.next;
        } while (l !== r);
      }
      pt(e, t, n);
      break;
    case 1:
      if (!pe && (sn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (i) {
        X(n, t, i);
      }
      pt(e, t, n);
      break;
    case 21:
      pt(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (pe = (r = pe) || n.memoizedState !== null, pt(e, t, n), pe = r) : pt(e, t, n);
      break;
    default:
      pt(e, t, n);
  }
}
function ui(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new ap()), t.forEach(function(r) {
      var l = mp.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(l, l));
    });
  }
}
function Ae(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var l = n[r];
    try {
      var o = e, s = t, i = s;
      e: for (; i !== null; ) {
        switch (i.tag) {
          case 5:
            se = i.stateNode, Be = !1;
            break e;
          case 3:
            se = i.stateNode.containerInfo, Be = !0;
            break e;
          case 4:
            se = i.stateNode.containerInfo, Be = !0;
            break e;
        }
        i = i.return;
      }
      if (se === null) throw Error(k(160));
      Cc(o, s, l), se = null, Be = !1;
      var u = l.alternate;
      u !== null && (u.return = null), l.return = null;
    } catch (d) {
      X(l, t, d);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Pc(t, e), t = t.sibling;
}
function Pc(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Ae(t, e), Ge(e), r & 4) {
        try {
          Wn(3, e, e.return), Tl(3, e);
        } catch (x) {
          X(e, e.return, x);
        }
        try {
          Wn(5, e, e.return);
        } catch (x) {
          X(e, e.return, x);
        }
      }
      break;
    case 1:
      Ae(t, e), Ge(e), r & 512 && n !== null && sn(n, n.return);
      break;
    case 5:
      if (Ae(t, e), Ge(e), r & 512 && n !== null && sn(n, n.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          Yn(l, "");
        } catch (x) {
          X(e, e.return, x);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var o = e.memoizedProps, s = n !== null ? n.memoizedProps : o, i = e.type, u = e.updateQueue;
        if (e.updateQueue = null, u !== null) try {
          i === "input" && o.type === "radio" && o.name != null && Yi(l, o), Ca(i, s);
          var d = Ca(i, o);
          for (s = 0; s < u.length; s += 2) {
            var f = u[s], v = u[s + 1];
            f === "style" ? tu(l, v) : f === "dangerouslySetInnerHTML" ? Zi(l, v) : f === "children" ? Yn(l, v) : go(l, f, v, d);
          }
          switch (i) {
            case "input":
              wa(l, o);
              break;
            case "textarea":
              Xi(l, o);
              break;
            case "select":
              var h = l._wrapperState.wasMultiple;
              l._wrapperState.wasMultiple = !!o.multiple;
              var j = o.value;
              j != null ? cn(l, !!o.multiple, j, !1) : h !== !!o.multiple && (o.defaultValue != null ? cn(
                l,
                !!o.multiple,
                o.defaultValue,
                !0
              ) : cn(l, !!o.multiple, o.multiple ? [] : "", !1));
          }
          l[ar] = o;
        } catch (x) {
          X(e, e.return, x);
        }
      }
      break;
    case 6:
      if (Ae(t, e), Ge(e), r & 4) {
        if (e.stateNode === null) throw Error(k(162));
        l = e.stateNode, o = e.memoizedProps;
        try {
          l.nodeValue = o;
        } catch (x) {
          X(e, e.return, x);
        }
      }
      break;
    case 3:
      if (Ae(t, e), Ge(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        er(t.containerInfo);
      } catch (x) {
        X(e, e.return, x);
      }
      break;
    case 4:
      Ae(t, e), Ge(e);
      break;
    case 13:
      Ae(t, e), Ge(e), l = e.child, l.flags & 8192 && (o = l.memoizedState !== null, l.stateNode.isHidden = o, !o || l.alternate !== null && l.alternate.memoizedState !== null || (Yo = J())), r & 4 && ui(e);
      break;
    case 22:
      if (f = n !== null && n.memoizedState !== null, e.mode & 1 ? (pe = (d = pe) || f, Ae(t, e), pe = d) : Ae(t, e), Ge(e), r & 8192) {
        if (d = e.memoizedState !== null, (e.stateNode.isHidden = d) && !f && e.mode & 1) for (R = e, f = e.child; f !== null; ) {
          for (v = R = f; R !== null; ) {
            switch (h = R, j = h.child, h.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Wn(4, h, h.return);
                break;
              case 1:
                sn(h, h.return);
                var y = h.stateNode;
                if (typeof y.componentWillUnmount == "function") {
                  r = h, n = h.return;
                  try {
                    t = r, y.props = t.memoizedProps, y.state = t.memoizedState, y.componentWillUnmount();
                  } catch (x) {
                    X(r, n, x);
                  }
                }
                break;
              case 5:
                sn(h, h.return);
                break;
              case 22:
                if (h.memoizedState !== null) {
                  di(v);
                  continue;
                }
            }
            j !== null ? (j.return = h, R = j) : di(v);
          }
          f = f.sibling;
        }
        e: for (f = null, v = e; ; ) {
          if (v.tag === 5) {
            if (f === null) {
              f = v;
              try {
                l = v.stateNode, d ? (o = l.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (i = v.stateNode, u = v.memoizedProps.style, s = u != null && u.hasOwnProperty("display") ? u.display : null, i.style.display = eu("display", s));
              } catch (x) {
                X(e, e.return, x);
              }
            }
          } else if (v.tag === 6) {
            if (f === null) try {
              v.stateNode.nodeValue = d ? "" : v.memoizedProps;
            } catch (x) {
              X(e, e.return, x);
            }
          } else if ((v.tag !== 22 && v.tag !== 23 || v.memoizedState === null || v === e) && v.child !== null) {
            v.child.return = v, v = v.child;
            continue;
          }
          if (v === e) break e;
          for (; v.sibling === null; ) {
            if (v.return === null || v.return === e) break e;
            f === v && (f = null), v = v.return;
          }
          f === v && (f = null), v.sibling.return = v.return, v = v.sibling;
        }
      }
      break;
    case 19:
      Ae(t, e), Ge(e), r & 4 && ui(e);
      break;
    case 21:
      break;
    default:
      Ae(
        t,
        e
      ), Ge(e);
  }
}
function Ge(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Ec(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(k(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Yn(l, ""), r.flags &= -33);
          var o = ii(e);
          ro(e, o, l);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo, i = ii(e);
          no(e, i, s);
          break;
        default:
          throw Error(k(161));
      }
    } catch (u) {
      X(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function sp(e, t, n) {
  R = e, Tc(e);
}
function Tc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; R !== null; ) {
    var l = R, o = l.child;
    if (l.tag === 22 && r) {
      var s = l.memoizedState !== null || Lr;
      if (!s) {
        var i = l.alternate, u = i !== null && i.memoizedState !== null || pe;
        i = Lr;
        var d = pe;
        if (Lr = s, (pe = u) && !d) for (R = l; R !== null; ) s = R, u = s.child, s.tag === 22 && s.memoizedState !== null ? fi(l) : u !== null ? (u.return = s, R = u) : fi(l);
        for (; o !== null; ) R = o, Tc(o), o = o.sibling;
        R = l, Lr = i, pe = d;
      }
      ci(e);
    } else l.subtreeFlags & 8772 && o !== null ? (o.return = l, R = o) : ci(e);
  }
}
function ci(e) {
  for (; R !== null; ) {
    var t = R;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            pe || Tl(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !pe) if (n === null) r.componentDidMount();
            else {
              var l = t.elementType === t.type ? n.memoizedProps : Ue(t.type, n.memoizedProps);
              r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var o = t.updateQueue;
            o !== null && Ks(t, o, r);
            break;
          case 3:
            var s = t.updateQueue;
            if (s !== null) {
              if (n = null, t.child !== null) switch (t.child.tag) {
                case 5:
                  n = t.child.stateNode;
                  break;
                case 1:
                  n = t.child.stateNode;
              }
              Ks(t, s, n);
            }
            break;
          case 5:
            var i = t.stateNode;
            if (n === null && t.flags & 4) {
              n = i;
              var u = t.memoizedProps;
              switch (t.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  u.autoFocus && n.focus();
                  break;
                case "img":
                  u.src && (n.src = u.src);
              }
            }
            break;
          case 6:
            break;
          case 4:
            break;
          case 12:
            break;
          case 13:
            if (t.memoizedState === null) {
              var d = t.alternate;
              if (d !== null) {
                var f = d.memoizedState;
                if (f !== null) {
                  var v = f.dehydrated;
                  v !== null && er(v);
                }
              }
            }
            break;
          case 19:
          case 17:
          case 21:
          case 22:
          case 23:
          case 25:
            break;
          default:
            throw Error(k(163));
        }
        pe || t.flags & 512 && to(t);
      } catch (h) {
        X(t, t.return, h);
      }
    }
    if (t === e) {
      R = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, R = n;
      break;
    }
    R = t.return;
  }
}
function di(e) {
  for (; R !== null; ) {
    var t = R;
    if (t === e) {
      R = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, R = n;
      break;
    }
    R = t.return;
  }
}
function fi(e) {
  for (; R !== null; ) {
    var t = R;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Tl(4, t);
          } catch (u) {
            X(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              X(t, l, u);
            }
          }
          var o = t.return;
          try {
            to(t);
          } catch (u) {
            X(t, o, u);
          }
          break;
        case 5:
          var s = t.return;
          try {
            to(t);
          } catch (u) {
            X(t, s, u);
          }
      }
    } catch (u) {
      X(t, t.return, u);
    }
    if (t === e) {
      R = null;
      break;
    }
    var i = t.sibling;
    if (i !== null) {
      i.return = t.return, R = i;
      break;
    }
    R = t.return;
  }
}
var ip = Math.ceil, hl = ft.ReactCurrentDispatcher, Ko = ft.ReactCurrentOwner, Fe = ft.ReactCurrentBatchConfig, U = 0, le = null, ee = null, ie = 0, ke = 0, un = Rt(0), ne = 0, dr = null, Ht = 0, zl = 0, Go = 0, qn = null, xe = null, Yo = 0, wn = 1 / 0, rt = null, ml = !1, lo = null, kt = null, Or = !1, xt = null, vl = 0, Kn = 0, ao = null, Wr = -1, qr = 0;
function ve() {
  return U & 6 ? J() : Wr !== -1 ? Wr : Wr = J();
}
function Et(e) {
  return e.mode & 1 ? U & 2 && ie !== 0 ? ie & -ie : Qf.transition !== null ? (qr === 0 && (qr = pu()), qr) : (e = B, e !== 0 || (e = window.event, e = e === void 0 ? 16 : ju(e.type)), e) : 1;
}
function Qe(e, t, n, r) {
  if (50 < Kn) throw Kn = 0, ao = null, Error(k(185));
  pr(e, n, r), (!(U & 2) || e !== le) && (e === le && (!(U & 2) && (zl |= n), ne === 4 && gt(e, ie)), _e(e, r), n === 1 && U === 0 && !(t.mode & 1) && (wn = J() + 500, El && Lt()));
}
function _e(e, t) {
  var n = e.callbackNode;
  Hd(e, t);
  var r = Zr(e, e === le ? ie : 0);
  if (r === 0) n !== null && Ss(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Ss(n), t === 1) e.tag === 0 ? Hf(pi.bind(null, e)) : Mu(pi.bind(null, e)), Af(function() {
      !(U & 6) && Lt();
    }), n = null;
    else {
      switch (hu(r)) {
        case 1:
          n = wo;
          break;
        case 4:
          n = du;
          break;
        case 16:
          n = Jr;
          break;
        case 536870912:
          n = fu;
          break;
        default:
          n = Jr;
      }
      n = Dc(n, zc.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function zc(e, t) {
  if (Wr = -1, qr = 0, U & 6) throw Error(k(327));
  var n = e.callbackNode;
  if (mn() && e.callbackNode !== n) return null;
  var r = Zr(e, e === le ? ie : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = gl(e, r);
  else {
    t = r;
    var l = U;
    U |= 2;
    var o = Lc();
    (le !== e || ie !== t) && (rt = null, wn = J() + 500, Mt(e, t));
    do
      try {
        dp();
        break;
      } catch (i) {
        Rc(e, i);
      }
    while (!0);
    Fo(), hl.current = o, U = l, ee !== null ? t = 0 : (le = null, ie = 0, t = ne);
  }
  if (t !== 0) {
    if (t === 2 && (l = La(e), l !== 0 && (r = l, t = oo(e, l))), t === 1) throw n = dr, Mt(e, 0), gt(e, r), _e(e, J()), n;
    if (t === 6) gt(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !up(l) && (t = gl(e, r), t === 2 && (o = La(e), o !== 0 && (r = o, t = oo(e, o))), t === 1)) throw n = dr, Mt(e, 0), gt(e, r), _e(e, J()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(k(345));
        case 2:
          Ft(e, xe, rt);
          break;
        case 3:
          if (gt(e, r), (r & 130023424) === r && (t = Yo + 500 - J(), 10 < t)) {
            if (Zr(e, 0) !== 0) break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              ve(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = Aa(Ft.bind(null, e, xe, rt), t);
            break;
          }
          Ft(e, xe, rt);
          break;
        case 4:
          if (gt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var s = 31 - He(r);
            o = 1 << s, s = t[s], s > l && (l = s), r &= ~o;
          }
          if (r = l, r = J() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * ip(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Aa(Ft.bind(null, e, xe, rt), r);
            break;
          }
          Ft(e, xe, rt);
          break;
        case 5:
          Ft(e, xe, rt);
          break;
        default:
          throw Error(k(329));
      }
    }
  }
  return _e(e, J()), e.callbackNode === n ? zc.bind(null, e) : null;
}
function oo(e, t) {
  var n = qn;
  return e.current.memoizedState.isDehydrated && (Mt(e, t).flags |= 256), e = gl(e, t), e !== 2 && (t = xe, xe = n, t !== null && so(t)), e;
}
function so(e) {
  xe === null ? xe = e : xe.push.apply(xe, e);
}
function up(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var l = n[r], o = l.getSnapshot;
        l = l.value;
        try {
          if (!qe(o(), l)) return !1;
        } catch {
          return !1;
        }
      }
    }
    if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
  }
  return !0;
}
function gt(e, t) {
  for (t &= ~Go, t &= ~zl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - He(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function pi(e) {
  if (U & 6) throw Error(k(327));
  mn();
  var t = Zr(e, 0);
  if (!(t & 1)) return _e(e, J()), null;
  var n = gl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = La(e);
    r !== 0 && (t = r, n = oo(e, r));
  }
  if (n === 1) throw n = dr, Mt(e, 0), gt(e, t), _e(e, J()), n;
  if (n === 6) throw Error(k(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Ft(e, xe, rt), _e(e, J()), null;
}
function Xo(e, t) {
  var n = U;
  U |= 1;
  try {
    return e(t);
  } finally {
    U = n, U === 0 && (wn = J() + 500, El && Lt());
  }
}
function Qt(e) {
  xt !== null && xt.tag === 0 && !(U & 6) && mn();
  var t = U;
  U |= 1;
  var n = Fe.transition, r = B;
  try {
    if (Fe.transition = null, B = 1, e) return e();
  } finally {
    B = r, Fe.transition = n, U = t, !(U & 6) && Lt();
  }
}
function Jo() {
  ke = un.current, Q(un);
}
function Mt(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Mf(n)), ee !== null) for (n = ee.return; n !== null; ) {
    var r = n;
    switch (Lo(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && ll();
        break;
      case 3:
        jn(), Q(Se), Q(he), Uo();
        break;
      case 5:
        Ao(r);
        break;
      case 4:
        jn();
        break;
      case 13:
        Q(K);
        break;
      case 19:
        Q(K);
        break;
      case 10:
        bo(r.type._context);
        break;
      case 22:
      case 23:
        Jo();
    }
    n = n.return;
  }
  if (le = e, ee = e = Ct(e.current, null), ie = ke = t, ne = 0, dr = null, Go = zl = Ht = 0, xe = qn = null, Dt !== null) {
    for (t = 0; t < Dt.length; t++) if (n = Dt[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var l = r.next, o = n.pending;
      if (o !== null) {
        var s = o.next;
        o.next = l, r.next = s;
      }
      n.pending = r;
    }
    Dt = null;
  }
  return e;
}
function Rc(e, t) {
  do {
    var n = ee;
    try {
      if (Fo(), Vr.current = pl, fl) {
        for (var r = G.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        fl = !1;
      }
      if (Vt = 0, re = te = G = null, Qn = !1, ir = 0, Ko.current = null, n === null || n.return === null) {
        ne = 1, dr = t, ee = null;
        break;
      }
      e: {
        var o = e, s = n.return, i = n, u = t;
        if (t = ie, i.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
          var d = u, f = i, v = f.tag;
          if (!(f.mode & 1) && (v === 0 || v === 11 || v === 15)) {
            var h = f.alternate;
            h ? (f.updateQueue = h.updateQueue, f.memoizedState = h.memoizedState, f.lanes = h.lanes) : (f.updateQueue = null, f.memoizedState = null);
          }
          var j = ei(s);
          if (j !== null) {
            j.flags &= -257, ti(j, s, i, o, t), j.mode & 1 && Zs(o, d, t), t = j, u = d;
            var y = t.updateQueue;
            if (y === null) {
              var x = /* @__PURE__ */ new Set();
              x.add(u), t.updateQueue = x;
            } else y.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              Zs(o, d, t), Zo();
              break e;
            }
            u = Error(k(426));
          }
        } else if (W && i.mode & 1) {
          var _ = ei(s);
          if (_ !== null) {
            !(_.flags & 65536) && (_.flags |= 256), ti(_, s, i, o, t), Oo(Sn(u, i));
            break e;
          }
        }
        o = u = Sn(u, i), ne !== 4 && (ne = 2), qn === null ? qn = [o] : qn.push(o), o = s;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, t &= -t, o.lanes |= t;
              var p = hc(o, u, t);
              qs(o, p);
              break e;
            case 1:
              i = u;
              var c = o.type, m = o.stateNode;
              if (!(o.flags & 128) && (typeof c.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (kt === null || !kt.has(m)))) {
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var S = mc(o, i, t);
                qs(o, S);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Ic(n);
    } catch (w) {
      t = w, ee === n && n !== null && (ee = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Lc() {
  var e = hl.current;
  return hl.current = pl, e === null ? pl : e;
}
function Zo() {
  (ne === 0 || ne === 3 || ne === 2) && (ne = 4), le === null || !(Ht & 268435455) && !(zl & 268435455) || gt(le, ie);
}
function gl(e, t) {
  var n = U;
  U |= 2;
  var r = Lc();
  (le !== e || ie !== t) && (rt = null, Mt(e, t));
  do
    try {
      cp();
      break;
    } catch (l) {
      Rc(e, l);
    }
  while (!0);
  if (Fo(), U = n, hl.current = r, ee !== null) throw Error(k(261));
  return le = null, ie = 0, ne;
}
function cp() {
  for (; ee !== null; ) Oc(ee);
}
function dp() {
  for (; ee !== null && !Fd(); ) Oc(ee);
}
function Oc(e) {
  var t = bc(e.alternate, e, ke);
  e.memoizedProps = e.pendingProps, t === null ? Ic(e) : ee = t, Ko.current = null;
}
function Ic(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = lp(n, t), n !== null) {
        n.flags &= 32767, ee = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        ne = 6, ee = null;
        return;
      }
    } else if (n = rp(n, t, ke), n !== null) {
      ee = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      ee = t;
      return;
    }
    ee = t = e;
  } while (t !== null);
  ne === 0 && (ne = 5);
}
function Ft(e, t, n) {
  var r = B, l = Fe.transition;
  try {
    Fe.transition = null, B = 1, fp(e, t, n, r);
  } finally {
    Fe.transition = l, B = r;
  }
  return null;
}
function fp(e, t, n, r) {
  do
    mn();
  while (xt !== null);
  if (U & 6) throw Error(k(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(k(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var o = n.lanes | n.childLanes;
  if (Qd(e, o), e === le && (ee = le = null, ie = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Or || (Or = !0, Dc(Jr, function() {
    return mn(), null;
  })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
    o = Fe.transition, Fe.transition = null;
    var s = B;
    B = 1;
    var i = U;
    U |= 4, Ko.current = null, op(e, n), Pc(n, e), Lf($a), el = !!Da, $a = Da = null, e.current = n, sp(n), bd(), U = i, B = s, Fe.transition = o;
  } else e.current = n;
  if (Or && (Or = !1, xt = e, vl = l), o = e.pendingLanes, o === 0 && (kt = null), Md(n.stateNode), _e(e, J()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (ml) throw ml = !1, e = lo, lo = null, e;
  return vl & 1 && e.tag !== 0 && mn(), o = e.pendingLanes, o & 1 ? e === ao ? Kn++ : (Kn = 0, ao = e) : Kn = 0, Lt(), null;
}
function mn() {
  if (xt !== null) {
    var e = hu(vl), t = Fe.transition, n = B;
    try {
      if (Fe.transition = null, B = 16 > e ? 16 : e, xt === null) var r = !1;
      else {
        if (e = xt, xt = null, vl = 0, U & 6) throw Error(k(331));
        var l = U;
        for (U |= 4, R = e.current; R !== null; ) {
          var o = R, s = o.child;
          if (R.flags & 16) {
            var i = o.deletions;
            if (i !== null) {
              for (var u = 0; u < i.length; u++) {
                var d = i[u];
                for (R = d; R !== null; ) {
                  var f = R;
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Wn(8, f, o);
                  }
                  var v = f.child;
                  if (v !== null) v.return = f, R = v;
                  else for (; R !== null; ) {
                    f = R;
                    var h = f.sibling, j = f.return;
                    if (kc(f), f === d) {
                      R = null;
                      break;
                    }
                    if (h !== null) {
                      h.return = j, R = h;
                      break;
                    }
                    R = j;
                  }
                }
              }
              var y = o.alternate;
              if (y !== null) {
                var x = y.child;
                if (x !== null) {
                  y.child = null;
                  do {
                    var _ = x.sibling;
                    x.sibling = null, x = _;
                  } while (x !== null);
                }
              }
              R = o;
            }
          }
          if (o.subtreeFlags & 2064 && s !== null) s.return = o, R = s;
          else e: for (; R !== null; ) {
            if (o = R, o.flags & 2048) switch (o.tag) {
              case 0:
              case 11:
              case 15:
                Wn(9, o, o.return);
            }
            var p = o.sibling;
            if (p !== null) {
              p.return = o.return, R = p;
              break e;
            }
            R = o.return;
          }
        }
        var c = e.current;
        for (R = c; R !== null; ) {
          s = R;
          var m = s.child;
          if (s.subtreeFlags & 2064 && m !== null) m.return = s, R = m;
          else e: for (s = c; R !== null; ) {
            if (i = R, i.flags & 2048) try {
              switch (i.tag) {
                case 0:
                case 11:
                case 15:
                  Tl(9, i);
              }
            } catch (w) {
              X(i, i.return, w);
            }
            if (i === s) {
              R = null;
              break e;
            }
            var S = i.sibling;
            if (S !== null) {
              S.return = i.return, R = S;
              break e;
            }
            R = i.return;
          }
        }
        if (U = l, Lt(), Je && typeof Je.onPostCommitFiberRoot == "function") try {
          Je.onPostCommitFiberRoot(Sl, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      B = n, Fe.transition = t;
    }
  }
  return !1;
}
function hi(e, t, n) {
  t = Sn(n, t), t = hc(e, t, 1), e = Nt(e, t, 1), t = ve(), e !== null && (pr(e, 1, t), _e(e, t));
}
function X(e, t, n) {
  if (e.tag === 3) hi(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      hi(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (kt === null || !kt.has(r))) {
        e = Sn(n, e), e = mc(t, e, 1), t = Nt(t, e, 1), e = ve(), t !== null && (pr(t, 1, e), _e(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function pp(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = ve(), e.pingedLanes |= e.suspendedLanes & n, le === e && (ie & n) === n && (ne === 4 || ne === 3 && (ie & 130023424) === ie && 500 > J() - Yo ? Mt(e, 0) : Go |= n), _e(e, t);
}
function Fc(e, t) {
  t === 0 && (e.mode & 1 ? (t = _r, _r <<= 1, !(_r & 130023424) && (_r = 4194304)) : t = 1);
  var n = ve();
  e = ct(e, t), e !== null && (pr(e, t, n), _e(e, n));
}
function hp(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Fc(e, n);
}
function mp(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode, l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(k(314));
  }
  r !== null && r.delete(t), Fc(e, n);
}
var bc;
bc = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Se.current) je = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return je = !1, np(e, t, n);
    je = !!(e.flags & 131072);
  }
  else je = !1, W && t.flags & 1048576 && Au(t, sl, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Qr(e, t), e = t.pendingProps;
      var l = gn(t, he.current);
      hn(t, n), l = Vo(null, t, r, e, l, n);
      var o = Ho();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, we(r) ? (o = !0, al(t)) : o = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, $o(t), l.updater = Pl, t.stateNode = l, l._reactInternals = t, qa(t, r, e, n), t = Ya(null, t, r, !0, o, n)) : (t.tag = 0, W && o && Ro(t), me(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Qr(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = gp(r), e = Ue(r, e), l) {
          case 0:
            t = Ga(null, t, r, e, n);
            break e;
          case 1:
            t = li(null, t, r, e, n);
            break e;
          case 11:
            t = ni(null, t, r, e, n);
            break e;
          case 14:
            t = ri(null, t, r, Ue(r.type, e), n);
            break e;
        }
        throw Error(k(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ue(r, l), Ga(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ue(r, l), li(e, t, r, l, n);
    case 3:
      e: {
        if (xc(t), e === null) throw Error(k(387));
        r = t.pendingProps, o = t.memoizedState, l = o.element, Wu(e, t), cl(t, r, null, n);
        var s = t.memoizedState;
        if (r = s.element, o.isDehydrated) if (o = { element: r, isDehydrated: !1, cache: s.cache, pendingSuspenseBoundaries: s.pendingSuspenseBoundaries, transitions: s.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
          l = Sn(Error(k(423)), t), t = ai(e, t, r, n, l);
          break e;
        } else if (r !== l) {
          l = Sn(Error(k(424)), t), t = ai(e, t, r, n, l);
          break e;
        } else for (Ee = _t(t.stateNode.containerInfo.firstChild), Ce = t, W = !0, Ve = null, n = Hu(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (yn(), r === l) {
            t = dt(e, t, n);
            break e;
          }
          me(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return qu(t), e === null && Ha(t), r = t.type, l = t.pendingProps, o = e !== null ? e.memoizedProps : null, s = l.children, Ma(r, l) ? s = null : o !== null && Ma(r, o) && (t.flags |= 32), yc(e, t), me(e, t, s, n), t.child;
    case 6:
      return e === null && Ha(t), null;
    case 13:
      return jc(e, t, n);
    case 4:
      return Mo(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = xn(t, null, r, n) : me(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ue(r, l), ni(e, t, r, l, n);
    case 7:
      return me(e, t, t.pendingProps, n), t.child;
    case 8:
      return me(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return me(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, o = t.memoizedProps, s = l.value, V(il, r._currentValue), r._currentValue = s, o !== null) if (qe(o.value, s)) {
          if (o.children === l.children && !Se.current) {
            t = dt(e, t, n);
            break e;
          }
        } else for (o = t.child, o !== null && (o.return = t); o !== null; ) {
          var i = o.dependencies;
          if (i !== null) {
            s = o.child;
            for (var u = i.firstContext; u !== null; ) {
              if (u.context === r) {
                if (o.tag === 1) {
                  u = st(-1, n & -n), u.tag = 2;
                  var d = o.updateQueue;
                  if (d !== null) {
                    d = d.shared;
                    var f = d.pending;
                    f === null ? u.next = u : (u.next = f.next, f.next = u), d.pending = u;
                  }
                }
                o.lanes |= n, u = o.alternate, u !== null && (u.lanes |= n), Qa(
                  o.return,
                  n,
                  t
                ), i.lanes |= n;
                break;
              }
              u = u.next;
            }
          } else if (o.tag === 10) s = o.type === t.type ? null : o.child;
          else if (o.tag === 18) {
            if (s = o.return, s === null) throw Error(k(341));
            s.lanes |= n, i = s.alternate, i !== null && (i.lanes |= n), Qa(s, n, t), s = o.sibling;
          } else s = o.child;
          if (s !== null) s.return = o;
          else for (s = o; s !== null; ) {
            if (s === t) {
              s = null;
              break;
            }
            if (o = s.sibling, o !== null) {
              o.return = s.return, s = o;
              break;
            }
            s = s.return;
          }
          o = s;
        }
        me(e, t, l.children, n), t = t.child;
      }
      return t;
    case 9:
      return l = t.type, r = t.pendingProps.children, hn(t, n), l = be(l), r = r(l), t.flags |= 1, me(e, t, r, n), t.child;
    case 14:
      return r = t.type, l = Ue(r, t.pendingProps), l = Ue(r.type, l), ri(e, t, r, l, n);
    case 15:
      return vc(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ue(r, l), Qr(e, t), t.tag = 1, we(r) ? (e = !0, al(t)) : e = !1, hn(t, n), pc(t, r, l), qa(t, r, l, n), Ya(null, t, r, !0, e, n);
    case 19:
      return Sc(e, t, n);
    case 22:
      return gc(e, t, n);
  }
  throw Error(k(156, t.tag));
};
function Dc(e, t) {
  return cu(e, t);
}
function vp(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Ie(e, t, n, r) {
  return new vp(e, t, n, r);
}
function es(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function gp(e) {
  if (typeof e == "function") return es(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === xo) return 11;
    if (e === jo) return 14;
  }
  return 2;
}
function Ct(e, t) {
  var n = e.alternate;
  return n === null ? (n = Ie(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Kr(e, t, n, r, l, o) {
  var s = 2;
  if (r = e, typeof e == "function") es(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else e: switch (e) {
    case Jt:
      return At(n.children, l, o, t);
    case yo:
      s = 8, l |= 8;
      break;
    case ga:
      return e = Ie(12, n, t, l | 2), e.elementType = ga, e.lanes = o, e;
    case ya:
      return e = Ie(13, n, t, l), e.elementType = ya, e.lanes = o, e;
    case xa:
      return e = Ie(19, n, t, l), e.elementType = xa, e.lanes = o, e;
    case qi:
      return Rl(n, l, o, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case Qi:
          s = 10;
          break e;
        case Wi:
          s = 9;
          break e;
        case xo:
          s = 11;
          break e;
        case jo:
          s = 14;
          break e;
        case ht:
          s = 16, r = null;
          break e;
      }
      throw Error(k(130, e == null ? e : typeof e, ""));
  }
  return t = Ie(s, n, t, l), t.elementType = e, t.type = r, t.lanes = o, t;
}
function At(e, t, n, r) {
  return e = Ie(7, e, r, t), e.lanes = n, e;
}
function Rl(e, t, n, r) {
  return e = Ie(22, e, r, t), e.elementType = qi, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function sa(e, t, n) {
  return e = Ie(6, e, null, t), e.lanes = n, e;
}
function ia(e, t, n) {
  return t = Ie(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function yp(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Bl(0), this.expirationTimes = Bl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Bl(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function ts(e, t, n, r, l, o, s, i, u) {
  return e = new yp(e, t, n, i, u), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = Ie(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, $o(o), e;
}
function xp(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Xt, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function $c(e) {
  if (!e) return Tt;
  e = e._reactInternals;
  e: {
    if (qt(e) !== e || e.tag !== 1) throw Error(k(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (we(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(k(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (we(n)) return $u(e, n, t);
  }
  return t;
}
function Mc(e, t, n, r, l, o, s, i, u) {
  return e = ts(n, r, !0, e, l, o, s, i, u), e.context = $c(null), n = e.current, r = ve(), l = Et(n), o = st(r, l), o.callback = t ?? null, Nt(n, o, l), e.current.lanes = l, pr(e, l, r), _e(e, r), e;
}
function Ll(e, t, n, r) {
  var l = t.current, o = ve(), s = Et(l);
  return n = $c(n), t.context === null ? t.context = n : t.pendingContext = n, t = st(o, s), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Nt(l, t, s), e !== null && (Qe(e, l, s, o), Br(e, l, s)), s;
}
function yl(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function mi(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function ns(e, t) {
  mi(e, t), (e = e.alternate) && mi(e, t);
}
function jp() {
  return null;
}
var Ac = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function rs(e) {
  this._internalRoot = e;
}
Ol.prototype.render = rs.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(k(409));
  Ll(e, t, null, null);
};
Ol.prototype.unmount = rs.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Qt(function() {
      Ll(null, e, null, null);
    }), t[ut] = null;
  }
};
function Ol(e) {
  this._internalRoot = e;
}
Ol.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = gu();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < vt.length && t !== 0 && t < vt[n].priority; n++) ;
    vt.splice(n, 0, e), n === 0 && xu(e);
  }
};
function ls(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Il(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function vi() {
}
function Sp(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function() {
        var d = yl(s);
        o.call(d);
      };
    }
    var s = Mc(t, r, e, 0, null, !1, !1, "", vi);
    return e._reactRootContainer = s, e[ut] = s.current, rr(e.nodeType === 8 ? e.parentNode : e), Qt(), s;
  }
  for (; l = e.lastChild; ) e.removeChild(l);
  if (typeof r == "function") {
    var i = r;
    r = function() {
      var d = yl(u);
      i.call(d);
    };
  }
  var u = ts(e, 0, !1, null, null, !1, !1, "", vi);
  return e._reactRootContainer = u, e[ut] = u.current, rr(e.nodeType === 8 ? e.parentNode : e), Qt(function() {
    Ll(t, u, n, r);
  }), u;
}
function Fl(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var s = o;
    if (typeof l == "function") {
      var i = l;
      l = function() {
        var u = yl(s);
        i.call(u);
      };
    }
    Ll(t, s, e, l);
  } else s = Sp(n, t, e, l, r);
  return yl(s);
}
mu = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Dn(t.pendingLanes);
        n !== 0 && (_o(t, n | 1), _e(t, J()), !(U & 6) && (wn = J() + 500, Lt()));
      }
      break;
    case 13:
      Qt(function() {
        var r = ct(e, 1);
        if (r !== null) {
          var l = ve();
          Qe(r, e, 1, l);
        }
      }), ns(e, 1);
  }
};
No = function(e) {
  if (e.tag === 13) {
    var t = ct(e, 134217728);
    if (t !== null) {
      var n = ve();
      Qe(t, e, 134217728, n);
    }
    ns(e, 134217728);
  }
};
vu = function(e) {
  if (e.tag === 13) {
    var t = Et(e), n = ct(e, t);
    if (n !== null) {
      var r = ve();
      Qe(n, e, t, r);
    }
    ns(e, t);
  }
};
gu = function() {
  return B;
};
yu = function(e, t) {
  var n = B;
  try {
    return B = e, t();
  } finally {
    B = n;
  }
};
Ta = function(e, t, n) {
  switch (t) {
    case "input":
      if (wa(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = kl(r);
            if (!l) throw Error(k(90));
            Gi(r), wa(r, l);
          }
        }
      }
      break;
    case "textarea":
      Xi(e, n);
      break;
    case "select":
      t = n.value, t != null && cn(e, !!n.multiple, t, !1);
  }
};
lu = Xo;
au = Qt;
var wp = { usingClientEntryPoint: !1, Events: [mr, nn, kl, nu, ru, Xo] }, In = { findFiberByHostInstance: bt, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, _p = { bundleType: In.bundleType, version: In.version, rendererPackageName: In.rendererPackageName, rendererConfig: In.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ft.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = iu(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: In.findFiberByHostInstance || jp, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ir = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ir.isDisabled && Ir.supportsFiber) try {
    Sl = Ir.inject(_p), Je = Ir;
  } catch {
  }
}
Te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = wp;
Te.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ls(t)) throw Error(k(200));
  return xp(e, t, null, n);
};
Te.createRoot = function(e, t) {
  if (!ls(e)) throw Error(k(299));
  var n = !1, r = "", l = Ac;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = ts(e, 1, !1, null, null, n, !1, r, l), e[ut] = t.current, rr(e.nodeType === 8 ? e.parentNode : e), new rs(t);
};
Te.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(k(188)) : (e = Object.keys(e).join(","), Error(k(268, e)));
  return e = iu(t), e = e === null ? null : e.stateNode, e;
};
Te.flushSync = function(e) {
  return Qt(e);
};
Te.hydrate = function(e, t, n) {
  if (!Il(t)) throw Error(k(200));
  return Fl(null, e, t, !0, n);
};
Te.hydrateRoot = function(e, t, n) {
  if (!ls(e)) throw Error(k(405));
  var r = n != null && n.hydratedSources || null, l = !1, o = "", s = Ac;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = Mc(t, null, e, 1, n ?? null, l, !1, o, s), e[ut] = t.current, rr(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
    n,
    l
  );
  return new Ol(t);
};
Te.render = function(e, t, n) {
  if (!Il(t)) throw Error(k(200));
  return Fl(null, e, t, !1, n);
};
Te.unmountComponentAtNode = function(e) {
  if (!Il(e)) throw Error(k(40));
  return e._reactRootContainer ? (Qt(function() {
    Fl(null, null, e, !1, function() {
      e._reactRootContainer = null, e[ut] = null;
    });
  }), !0) : !1;
};
Te.unstable_batchedUpdates = Xo;
Te.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Il(n)) throw Error(k(200));
  if (e == null || e._reactInternals === void 0) throw Error(k(38));
  return Fl(e, t, n, !1, r);
};
Te.version = "18.3.1-next-f1338f8080-20240426";
function Uc() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Uc);
    } catch (e) {
      console.error(e);
    }
}
Uc(), Ui.exports = Te;
var Np = Ui.exports, Bc, gi = Np;
Bc = gi.createRoot, gi.hydrateRoot;
const b = "/api/v1/modules/lead_tracker";
function Vc(e) {
  return {
    company_name: e.companyName,
    is_customer: e.isCustomer,
    opportunity_score: e.opportunityScore,
    financial_potential: e.financialPotential,
    product: e.product,
    service: e.service,
    priority: e.priority,
    sources: e.sources.map((t) => t.type)
  };
}
function bl(e, t) {
  const n = URL.createObjectURL(e), r = document.createElement("a");
  r.href = n, r.download = t, r.click(), URL.revokeObjectURL(n);
}
async function D(e) {
  try {
    return (await e.json()).detail ?? "Falha ao processar a solicitação.";
  } catch {
    return "Falha ao processar a solicitação.";
  }
}
async function kp(e, t) {
  const n = await fetch(`${b}/exports/pdf`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ rows: e.map(Vc), filters_summary: t })
  });
  if (!n.ok) throw new Error(await D(n));
  bl(await n.blob(), "oportunidades.pdf");
}
async function Ep(e) {
  const t = await fetch(`${b}/exports/excel`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ rows: e.map(Vc) })
  });
  if (!t.ok) throw new Error(await D(t));
  bl(await t.blob(), "oportunidades.xlsx");
}
async function Hc(e) {
  const t = await fetch(`${b}/email-draft`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      company_name: e.companyName,
      opportunity_type: e.type,
      evidence: e.evidence,
      justification: e.justification,
      portfolio: { produtos_atuais: e.currentProducts, produtos_recomendados: e.recommendedProducts }
    })
  });
  if (!t.ok) throw new Error(await D(t));
  return t.json();
}
async function Cp(e, t) {
  const n = await fetch(
    `${b}/opportunities/${e}/next-suggested-touch?rep_id=${encodeURIComponent(t)}`
  );
  if (!n.ok) throw new Error(await D(n));
  const r = await n.json();
  return {
    state: r.state,
    channel: r.channel,
    reasonCategory: r.reason_category,
    silenceReason: r.silence_reason,
    silenceDays: r.silence_days,
    threadingRiskReasons: r.threading_risk_reasons,
    activeContactCount: r.active_contact_count,
    hasActiveDecisor: r.has_active_decisor,
    lastContactId: r.last_contact_id
  };
}
async function Pp(e, t, n, r, l) {
  const o = await fetch(`${b}/opportunities/${e}/outreach-touches`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ rep_id: t, contact_id: l, channel: n, reason_label: r })
  });
  if (!o.ok) throw new Error(await D(o));
}
async function Tp(e) {
  const t = await fetch(`${b}/companies/${e}/contacts`);
  if (!t.ok) throw new Error(await D(t));
  return t.json();
}
async function zp() {
  const e = await fetch(`${b}/settings`);
  if (!e.ok) throw new Error(await D(e));
  return e.json();
}
async function yi(e, t, n) {
  const r = await fetch(`${b}/settings/${e}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ enabled: t, fields: n })
  });
  if (!r.ok) throw new Error(await D(r));
  return r.json();
}
async function Rp() {
  const e = await fetch(`${b}/settings/ai`);
  if (!e.ok) throw new Error(await D(e));
  return e.json();
}
async function Lp(e, t, n) {
  const r = await fetch(`${b}/settings/ai`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ provider: e, api_key: t, model: n })
  });
  if (!r.ok) throw new Error(await D(r));
  return r.json();
}
async function Op() {
  const e = await fetch(`${b}/settings/config/aging-sla-days`);
  if (!e.ok) throw new Error(await D(e));
  return e.json();
}
async function Ip(e) {
  const t = await fetch(`${b}/settings/config/aging-sla-days`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ days: e })
  });
  if (!t.ok) throw new Error(await D(t));
  return t.json();
}
async function Fp() {
  const e = await fetch(`${b}/settings/config/geo-promotion`);
  if (!e.ok) throw new Error(await D(e));
  return e.json();
}
async function bp(e, t) {
  const n = await fetch(`${b}/settings/config/geo-promotion`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ min_score: e, daily_cap: t })
  });
  if (!n.ok) throw new Error(await D(n));
  return n.json();
}
async function Dp(e) {
  const t = await fetch(`${b}/settings/${e}/test`, { method: "POST" });
  if (!t.ok) throw new Error(await D(t));
  return t.json();
}
function $p(e) {
  return e === null ? "baixa" : e >= 0.7 ? "alta" : e >= 0.4 ? "média" : "baixa";
}
function as(e) {
  return {
    id: e.id,
    companyId: e.company_id,
    companyName: e.company_name,
    isCustomer: e.is_customer,
    opportunityScore: e.opportunity_score,
    financialPotential: e.financial_potential,
    type: e.type,
    product: e.product_name,
    service: e.service_name,
    priority: $p(e.opportunity_score),
    sources: e.sources,
    status: e.status,
    evidence: e.evidence,
    justification: e.justification,
    confidenceScore: e.confidence_score,
    // Sem fonte real ainda de "o que a empresa já tem" (Fase B.1 não popula
    // portfólio por empresa — ver engineering/specs/fase-b1-ligacao-real.md).
    currentProducts: [],
    recommendedProducts: e.product_name ? [e.product_name] : [],
    recommendedServices: e.service_name ? [e.service_name] : [],
    scopeNote: e.scope_note,
    criticality: e.criticality,
    severityNote: e.severity_note,
    severityBand: e.severity_band,
    renewalDate: e.renewal_date,
    accountHealth: e.account_health,
    qbrSuggestedDays: e.qbr_suggested_days,
    qbrReason: e.qbr_reason,
    dismissalReason: e.dismissal_reason
  };
}
async function Mp() {
  const e = await fetch(`${b}/opportunities`);
  if (!e.ok) throw new Error(await D(e));
  return (await e.json()).map(as);
}
async function Ap(e, t) {
  const n = await fetch(`${b}/opportunities/${e}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      scope_note: t.scopeNote,
      criticality: t.criticality,
      severity_note: t.severityNote
    })
  });
  if (!n.ok) throw new Error(await D(n));
  const r = await n.json();
  return as(r);
}
async function Up(e, t, n, r = null) {
  const l = await fetch(`${b}/opportunities/${e}/status`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ new_status: t, note: n, dismissal_reason: r })
  });
  if (!l.ok) throw new Error(await D(l));
  const o = await l.json();
  return as(o);
}
async function Bp(e, t) {
  const n = await fetch(`${b}/companies/${e}/renewal-date`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ renewal_date: t })
  });
  if (!n.ok) throw new Error(await D(n));
}
async function Vp() {
  const e = await fetch(`${b}/sync`, { method: "POST" });
  if (!e.ok) throw new Error(await D(e));
  return (await e.json()).map((n) => ({
    sourceId: n.source_id,
    companiesSynced: n.companies_synced,
    contactsSynced: n.contacts_synced,
    errors: n.errors
  }));
}
async function Hp(e = "monthly") {
  const t = await fetch(`${b}/dashboard-metrics?period_type=${e}`);
  if (!t.ok) throw new Error(await D(t));
  const n = await t.json(), r = (l) => l.map(([o, s]) => ({ label: o, value: s }));
  return {
    kpis: {
      opportunitiesIdentified: n.kpis.opportunities_identified,
      customersAnalyzed: n.kpis.customers_analyzed,
      prospectsAnalyzed: n.kpis.prospects_analyzed,
      financialPotentialTotal: n.kpis.financial_potential_total,
      productOpportunities: n.kpis.product_opportunities,
      serviceOpportunities: n.kpis.service_opportunities,
      topVendor: n.kpis.top_vendor,
      topService: n.kpis.top_service
    },
    vendorDistribution: r(n.vendor_distribution),
    financialByVendor: r(n.financial_by_vendor),
    opportunitiesByService: r(n.opportunities_by_service),
    customerVsProspect: [
      { label: "Clientes", value: n.customer_vs_prospect.clientes },
      { label: "Prospects", value: n.customer_vs_prospect.prospects }
    ],
    funnelCounts: n.funnel_counts,
    funnelReach: n.funnel_reach.map((l) => ({
      stage: l.stage,
      reachCount: l.reach_count,
      reachRatioFromPrevious: l.reach_ratio_from_previous
    })),
    weightedPotential: {
      grossTotal: n.weighted_potential.gross_total,
      weightedEvaluatedTotal: n.weighted_potential.weighted_evaluated_total,
      weightedEstimatedTotal: n.weighted_potential.weighted_estimated_total
    },
    potentialByRep: r(n.potential_by_rep),
    potentialBySegment: r(n.potential_by_segment),
    potentialBySource: r(n.potential_by_source),
    zombieCount: n.zombie_count,
    agingCount: n.aging_count,
    agingSlaDays: n.aging_sla_days,
    repCoverage: n.rep_coverage.map((l) => ({
      repId: l.rep_id,
      actual: l.actual,
      target: l.target,
      coverageRatio: l.coverage_ratio
    })),
    coveragePeriodType: n.coverage_period_type,
    coveragePeriodKey: n.coverage_period_key
  };
}
function Qc(e) {
  return {
    referenceProductId: e.reference_product_id,
    placeCategory: e.place_category,
    companySizeHint: e.company_size_hint,
    radiusKm: e.radius_km,
    searchOriginAddress: e.search_origin_address
  };
}
async function Qp() {
  const e = await fetch(`${b}/icp-profile`);
  if (!e.ok) throw new Error(await D(e));
  return Qc(await e.json());
}
async function Wp(e) {
  const t = await fetch(`${b}/icp-profile`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      reference_product_id: e.referenceProductId,
      place_category: e.placeCategory,
      company_size_hint: e.companySizeHint,
      radius_km: e.radiusKm,
      search_origin_address: e.searchOriginAddress
    })
  });
  if (!t.ok) throw new Error(await D(t));
  return Qc(await t.json());
}
async function qp() {
  const e = await fetch(`${b}/icp-suggestion`);
  if (!e.ok) throw new Error(await D(e));
  const t = await e.json();
  return t === null ? null : {
    industryHint: t.industry_hint,
    industryHintShare: t.industry_hint_share,
    companySizeHint: t.company_size_hint,
    companySizeHintShare: t.company_size_hint_share,
    sampleSize: t.sample_size,
    confidence: t.confidence
  };
}
function ua(e) {
  return {
    placeId: e.place_id,
    name: e.name,
    category: e.category,
    categoryMatches: e.category_matches,
    rating: e.rating,
    reviewCount: e.review_count,
    formattedAddress: e.formatted_address,
    score: e.score,
    companyId: e.company_id,
    opportunityId: e.opportunity_id
  };
}
async function Kp(e) {
  const t = await fetch(`${b}/geo-discovery/run`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      rep_id: e.repId,
      reference_product_id: e.referenceProductId,
      search_origin_address: e.searchOriginAddress,
      radius_km: e.radiusKm,
      place_category: e.placeCategory,
      company_size_hint: e.companySizeHint
    })
  });
  if (!t.ok) throw new Error(await D(t));
  const n = await t.json();
  return {
    promoted: n.promoted.map(ua),
    deferred: n.deferred.map(ua),
    rejected: n.rejected.map(ua)
  };
}
function ca(e, t) {
  return {
    company_name: e.name,
    is_customer: !1,
    opportunity_score: e.score,
    financial_potential: null,
    product: null,
    service: e.category,
    priority: t,
    sources: ["google_maps"]
  };
}
function Wc(e) {
  return [
    ...e.promoted.map((t) => ca(t, "Pronto para contato")),
    ...e.deferred.map((t) => ca(t, "Fila para amanhã")),
    ...e.rejected.map((t) => ca(t, "Fora do critério"))
  ];
}
async function Gp(e, t) {
  const n = await fetch(`${b}/exports/pdf`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ rows: Wc(e), filters_summary: t })
  });
  if (!n.ok) throw new Error(await D(n));
  bl(await n.blob(), "prospeccao-geografica.pdf");
}
async function Yp(e) {
  const t = await fetch(`${b}/exports/excel`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ rows: Wc(e) })
  });
  if (!t.ok) throw new Error(await D(t));
  bl(await t.blob(), "prospeccao-geografica.xlsx");
}
async function Xp() {
  const e = await fetch(`${b}/vendors`);
  if (!e.ok) throw new Error(await D(e));
  return e.json();
}
async function Jp(e) {
  const t = await fetch(`${b}/vendors`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e })
  });
  if (!t.ok) throw new Error(await D(t));
  return t.json();
}
async function qc() {
  const e = await fetch(`${b}/products`);
  if (!e.ok) throw new Error(await D(e));
  return e.json();
}
async function Zp(e, t, n) {
  const r = await fetch(`${b}/products`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ vendor_id: e, name: t, category: n || null })
  });
  if (!r.ok) throw new Error(await D(r));
  return r.json();
}
async function eh(e) {
  const t = await fetch(`${b}/products/${e}`, { method: "DELETE" });
  if (!t.ok) throw new Error(await D(t));
}
async function th() {
  const e = await fetch(`${b}/services`);
  if (!e.ok) throw new Error(await D(e));
  return e.json();
}
async function nh(e, t) {
  const n = await fetch(`${b}/services`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e, category: t || null })
  });
  if (!n.ok) throw new Error(await D(n));
  return n.json();
}
async function rh(e) {
  const t = await fetch(`${b}/services/${e}`, { method: "DELETE" });
  if (!t.ok) throw new Error(await D(t));
}
async function lh() {
  const e = await fetch(`${b}/rules`);
  if (!e.ok) throw new Error(await D(e));
  return e.json();
}
async function ah(e) {
  const t = await fetch(`${b}/rules`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  if (!t.ok) throw new Error(await D(t));
  return t.json();
}
async function oh(e) {
  const t = await fetch(`${b}/rules/${e}`, { method: "DELETE" });
  if (!t.ok) throw new Error(await D(t));
}
async function sh(e, t) {
  const n = new FormData();
  n.append("file", e), n.append("mode", t);
  const r = await fetch(`${b}/csv-import`, { method: "POST", body: n });
  if (!r.ok) throw new Error(await D(r));
  return r.json();
}
async function ih(e, t) {
  const n = await fetch(`${b}/rep-targets?period_type=${e}&period_key=${encodeURIComponent(t)}`);
  if (!n.ok) throw new Error(await D(n));
  return n.json();
}
async function uh(e) {
  const t = await fetch(`${b}/rep-targets`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  if (!t.ok) throw new Error(await D(t));
  return t.json();
}
async function ch(e = !1) {
  const t = await fetch(`${b}/settings/salesforce/field-catalog?force_refresh=${e}`);
  if (!t.ok) throw new Error(await D(t));
  return (await t.json()).map((r) => ({
    sourceFieldApiName: r.source_field_api_name,
    sourceFieldLabel: r.source_field_label,
    fieldType: r.field_type,
    role: r.role,
    broken: r.broken,
    brokenMessage: r.broken_message
  }));
}
async function dh(e, t, n) {
  const r = await fetch(`${b}/settings/salesforce/field-mapping`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ source_field_api_name: e, source_field_label: t, role: n })
  });
  if (!r.ok) throw new Error(await D(r));
  const l = await r.json();
  return { reassignedFromApiName: l.reassigned_from_api_name, reassignedFromLabel: l.reassigned_from_label };
}
async function fh(e) {
  const t = await fetch(`${b}/settings/salesforce/field-mapping/${encodeURIComponent(e)}`, {
    method: "DELETE"
  });
  if (!t.ok) throw new Error(await D(t));
}
const ph = [
  "#2a78d6",
  // 1 blue
  "#eb6834",
  // 2 orange
  "#1baf7a",
  // 3 aqua
  "#eda100",
  // 4 yellow
  "#e87ba4",
  // 5 magenta
  "#008300",
  // 6 green
  "#4a3aa7",
  // 7 violet
  "#e34948"
  // 8 red
], hh = [
  "#3987e5",
  "#d95926",
  "#199e70",
  "#c98500",
  "#d55181",
  "#008300",
  "#9085e9",
  "#e66767"
], mh = "#2a78d6", vh = "#3987e5", gh = 8;
function yh(e, t, n = gh) {
  if (e.length <= n) return e.map((s) => ({ label: t(s), value: s.value }));
  const r = e.slice(0, n - 1), o = e.slice(n - 1).reduce((s, i) => s + i.value, 0);
  return [...r.map((s) => ({ label: t(s), value: s.value })), { label: "Outros", value: o }];
}
function os() {
  const [e, t] = g.useState(null);
  return { tooltip: e, setTooltip: t };
}
function ss({ tooltip: e }) {
  return e ? /* @__PURE__ */ a.jsxs(
    "div",
    {
      role: "tooltip",
      style: {
        position: "absolute",
        left: e.x + 8,
        top: e.y + 8,
        background: "hsl(var(--bg-elevated))",
        border: "1px solid hsl(var(--border))",
        borderRadius: 6,
        padding: "4px 8px",
        fontSize: 11,
        pointerEvents: "none",
        color: "hsl(var(--text))",
        zIndex: 10,
        whiteSpace: "nowrap"
      },
      children: [
        /* @__PURE__ */ a.jsx("strong", { children: e.label }),
        " ",
        e.value
      ]
    }
  ) : null;
}
function xi() {
  return document.documentElement.classList.contains("theme-dark") || document.body.classList.contains("theme-dark");
}
function is() {
  const [e, t] = g.useState(xi);
  return g.useEffect(() => {
    const n = new MutationObserver(() => t(xi()));
    return n.observe(document.documentElement, { attributes: !0, attributeFilter: ["class"] }), n.observe(document.body, { attributes: !0, attributeFilter: ["class"] }), () => n.disconnect();
  }, []), e;
}
function Yt({ data: e, formatValue: t, emptyMessage: n }) {
  const { tooltip: r, setTooltip: l } = os(), o = is() ? vh : mh;
  if (e.length === 0)
    return /* @__PURE__ */ a.jsx("p", { className: "lt-empty", role: "status", children: n });
  const s = Math.max(...e.map((i) => i.value), 1);
  return /* @__PURE__ */ a.jsxs(
    "div",
    {
      style: { position: "relative", display: "flex", flexDirection: "column", gap: 10 },
      role: "img",
      "aria-label": e.map((i) => `${i.label}: ${t(i.value)}`).join("; "),
      children: [
        e.map((i) => /* @__PURE__ */ a.jsxs("div", { children: [
          /* @__PURE__ */ a.jsxs("div", { style: { display: "flex", justifyContent: "space-between", fontSize: 11, color: "hsl(var(--text-muted))", marginBottom: 3 }, children: [
            /* @__PURE__ */ a.jsx("span", { children: i.label }),
            /* @__PURE__ */ a.jsx("span", { style: { fontVariantNumeric: "tabular-nums" }, children: t(i.value) })
          ] }),
          /* @__PURE__ */ a.jsx("div", { style: { height: 8, background: "hsl(var(--bg-subtle))", borderRadius: 4 }, children: /* @__PURE__ */ a.jsx(
            "div",
            {
              style: {
                height: 8,
                borderRadius: 4,
                background: o,
                width: `${i.value / s * 100}%`
              },
              onMouseEnter: (u) => l({ x: u.clientX, y: u.clientY, label: i.label, value: t(i.value) }),
              onMouseMove: (u) => l({ x: u.clientX, y: u.clientY, label: i.label, value: t(i.value) }),
              onMouseLeave: () => l(null)
            }
          ) })
        ] }, i.label)),
        /* @__PURE__ */ a.jsx(ss, { tooltip: r })
      ]
    }
  );
}
const io = 140, xl = 60, xh = 22, ji = io / 2;
function Si(e) {
  const t = (e - 90) * Math.PI / 180;
  return [ji + xl * Math.cos(t), ji + xl * Math.sin(t)];
}
function jh(e, t) {
  const [n, r] = Si(e), [l, o] = Si(t), s = t - e > 180 ? 1 : 0;
  return `M ${n} ${r} A ${xl} ${xl} 0 ${s} 1 ${l} ${o}`;
}
function Sh({ data: e, emptyMessage: t }) {
  const { tooltip: n, setTooltip: r } = os(), l = is() ? hh : ph;
  if (e.length === 0)
    return /* @__PURE__ */ a.jsx("p", { className: "lt-empty", role: "status", children: t });
  const o = yh(e, (d) => d.label), s = o.reduce((d, f) => d + f.value, 0) || 1;
  let i = 0;
  const u = o.map((d, f) => {
    const v = i, h = d.value / s * 360;
    return i += h, { ...d, startAngle: v, endAngle: i, color: l[f % l.length] };
  });
  return /* @__PURE__ */ a.jsxs("div", { style: { display: "flex", gap: 16, alignItems: "center", position: "relative" }, children: [
    /* @__PURE__ */ a.jsx("svg", { width: io, height: io, role: "img", "aria-label": o.map((d) => `${d.label}: ${d.value}`).join("; "), children: u.map((d) => /* @__PURE__ */ a.jsx(
      "path",
      {
        d: jh(d.startAngle, d.endAngle),
        fill: "none",
        stroke: d.color,
        strokeWidth: xh,
        onMouseEnter: (f) => r({ x: f.clientX, y: f.clientY, label: d.label, value: `${d.value} (${Math.round(d.value / s * 100)}%)` }),
        onMouseMove: (f) => r({ x: f.clientX, y: f.clientY, label: d.label, value: `${d.value} (${Math.round(d.value / s * 100)}%)` }),
        onMouseLeave: () => r(null)
      },
      d.label
    )) }),
    /* @__PURE__ */ a.jsx("ul", { style: { listStyle: "none", margin: 0, padding: 0, fontSize: 11, display: "flex", flexDirection: "column", gap: 6 }, children: u.map((d) => /* @__PURE__ */ a.jsxs("li", { style: { display: "flex", alignItems: "center", gap: 6 }, children: [
      /* @__PURE__ */ a.jsx("span", { style: { width: 8, height: 8, borderRadius: 2, background: d.color, display: "inline-block" }, "aria-hidden": "true" }),
      /* @__PURE__ */ a.jsx("span", { style: { color: "hsl(var(--text))" }, children: d.label }),
      /* @__PURE__ */ a.jsxs("span", { style: { color: "hsl(var(--text-muted))", fontVariantNumeric: "tabular-nums" }, children: [
        Math.round(d.value / s * 100),
        "%"
      ] })
    ] }, d.label)) }),
    /* @__PURE__ */ a.jsx(ss, { tooltip: n })
  ] });
}
const wh = ["#5598e7", "#2a78d6", "#1c5cab", "#104281"], _h = ["#7db8f0", "#5598e7", "#2a78d6", "#1c5cab"];
function wi({ stages: e, counts: t }) {
  const { tooltip: n, setTooltip: r } = os(), l = is() ? _h : wh, o = Math.max(...e.map((s) => t[s] ?? 0), 1);
  return /* @__PURE__ */ a.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 8, position: "relative" }, role: "img", "aria-label": e.map((s) => `${s}: ${t[s] ?? 0}`).join("; "), children: [
    e.map((s, i) => {
      const u = t[s] ?? 0, d = u / o * 100;
      return /* @__PURE__ */ a.jsxs("div", { children: [
        /* @__PURE__ */ a.jsxs("div", { style: { display: "flex", justifyContent: "space-between", fontSize: 11, color: "hsl(var(--text-muted))", marginBottom: 3 }, children: [
          /* @__PURE__ */ a.jsx("span", { children: s }),
          /* @__PURE__ */ a.jsx("span", { style: { fontVariantNumeric: "tabular-nums" }, children: u })
        ] }),
        /* @__PURE__ */ a.jsx(
          "div",
          {
            style: { height: 16, borderRadius: 4, background: l[i % l.length], width: `${d}%`, minWidth: 4 },
            onMouseEnter: (f) => r({ x: f.clientX, y: f.clientY, label: s, value: String(u) }),
            onMouseMove: (f) => r({ x: f.clientX, y: f.clientY, label: s, value: String(u) }),
            onMouseLeave: () => r(null)
          }
        )
      ] }, s);
    }),
    /* @__PURE__ */ a.jsx(ss, { tooltip: n })
  ] });
}
function We({ text: e }) {
  const [t, n] = g.useState(!1), r = g.useRef(null);
  return g.useEffect(() => {
    if (!t) return;
    const l = (s) => {
      r.current && !r.current.contains(s.target) && n(!1);
    }, o = (s) => {
      s.key === "Escape" && n(!1);
    };
    return document.addEventListener("mousedown", l), document.addEventListener("keydown", o), () => {
      document.removeEventListener("mousedown", l), document.removeEventListener("keydown", o);
    };
  }, [t]), /* @__PURE__ */ a.jsxs("div", { className: "lt-info-hint", ref: r, children: [
    /* @__PURE__ */ a.jsx(
      "button",
      {
        type: "button",
        className: "lt-info-hint__btn",
        "aria-label": "Mais informações",
        "aria-expanded": t,
        onClick: () => n((l) => !l),
        children: "i"
      }
    ),
    t && /* @__PURE__ */ a.jsx("div", { className: "lt-info-hint__popover", role: "tooltip", children: e })
  ] });
}
function Re({ label: e, value: t, hint: n }) {
  return /* @__PURE__ */ a.jsxs("div", { className: "lt-stat-tile", children: [
    /* @__PURE__ */ a.jsxs("div", { className: "lt-stat-tile__top", children: [
      /* @__PURE__ */ a.jsx("div", { className: "lt-stat-tile__value", style: { fontVariantNumeric: "tabular-nums" }, children: t }),
      n && /* @__PURE__ */ a.jsx(We, { text: n })
    ] }),
    /* @__PURE__ */ a.jsx("div", { className: "lt-stat-tile__label", children: e })
  ] });
}
const Nh = ["Detectadas", "Qualificadas", "Abordadas", "Em negociação"], _i = {
  detected: "Detectadas",
  qualified: "Qualificadas",
  reviewed: "Revisadas",
  contacted: "Abordadas",
  opportunity: "Em negociação"
};
function tt(e) {
  return e.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });
}
function nt(e) {
  return e.toLocaleString("pt-BR");
}
function kh(e) {
  return `${Math.round(e * 100)}%`;
}
function Eh() {
  const [e, t] = g.useState("monthly"), [n, r] = g.useState(null), [l, o] = g.useState(null);
  if (g.useEffect(() => {
    let d = !1;
    return o(null), Hp(e).then((f) => {
      d || r(f);
    }).catch((f) => {
      d || o(f instanceof Error ? f.message : "Não consegui carregar as métricas.");
    }), () => {
      d = !0;
    };
  }, [e]), l) return /* @__PURE__ */ a.jsx("p", { className: "lt-alert", role: "alert", children: l });
  if (!n) return /* @__PURE__ */ a.jsx("p", { className: "lt-hint", children: "Carregando…" });
  const { kpis: s } = n, i = {};
  n.funnelReach.forEach((d) => {
    i[_i[d.stage] ?? d.stage] = d.reachCount;
  });
  const u = n.funnelReach.map((d) => _i[d.stage] ?? d.stage);
  return /* @__PURE__ */ a.jsxs("div", { className: "lt-dashboard", children: [
    /* @__PURE__ */ a.jsxs("div", { className: "lt-header lt-header-row", children: [
      /* @__PURE__ */ a.jsx("h2", { children: "Dashboard Executivo" }),
      /* @__PURE__ */ a.jsx(We, { text: "Visão consolidada — dado real da sua instalação." })
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "lt-stat-grid", children: [
      /* @__PURE__ */ a.jsx(
        Re,
        {
          label: "Oportunidades identificadas",
          value: nt(s.opportunitiesIdentified),
          hint: "Total de oportunidades já detectadas pelo motor, em qualquer estágio."
        }
      ),
      /* @__PURE__ */ a.jsx(
        Re,
        {
          label: "Clientes analisados",
          value: nt(s.customersAnalyzed),
          hint: "Empresas marcadas como cliente atual em pelo menos uma fonte."
        }
      ),
      /* @__PURE__ */ a.jsx(
        Re,
        {
          label: "Prospects analisados",
          value: nt(s.prospectsAnalyzed),
          hint: "Empresas sem relação de cliente ainda, mas já mapeadas."
        }
      ),
      /* @__PURE__ */ a.jsx(
        Re,
        {
          label: "Potencial financeiro",
          value: tt(s.financialPotentialTotal),
          hint: "Soma bruta de todas as oportunidades com valor estimado — sem ponderar por confiança."
        }
      ),
      /* @__PURE__ */ a.jsx(
        Re,
        {
          label: "Oportunidades de produto",
          value: nt(s.productOpportunities),
          hint: "Oportunidades associadas a um produto específico do portfólio."
        }
      ),
      /* @__PURE__ */ a.jsx(
        Re,
        {
          label: "Oportunidades de serviço",
          value: nt(s.serviceOpportunities),
          hint: "Oportunidades associadas a um serviço específico do portfólio."
        }
      ),
      /* @__PURE__ */ a.jsx(
        Re,
        {
          label: "Fabricante principal",
          value: s.topVendor ?? "—",
          hint: "Fabricante com mais oportunidades identificadas."
        }
      ),
      /* @__PURE__ */ a.jsx(
        Re,
        {
          label: "Serviço principal",
          value: s.topService ?? "—",
          hint: "Serviço com mais oportunidades identificadas."
        }
      )
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "lt-stat-grid", children: [
      /* @__PURE__ */ a.jsx(
        Re,
        {
          label: "Potencial ponderado (avaliado)",
          value: tt(n.weightedPotential.weightedEvaluatedTotal),
          hint: "Só oportunidades com confiança real avaliada, multiplicada pelo potencial — nunca substitui o bruto, complementa."
        }
      ),
      /* @__PURE__ */ a.jsx(
        Re,
        {
          label: "Potencial ponderado (estimado)",
          value: tt(n.weightedPotential.weightedEstimatedTotal),
          hint: "Inclui também as sem confiança avaliada, usando uma estimativa conservadora — visão mais otimista que o avaliado."
        }
      ),
      /* @__PURE__ */ a.jsx(
        Re,
        {
          label: "Oportunidades zumbi",
          value: nt(n.zombieCount),
          hint: "Paradas há mais de 30 dias no mesmo estágio — excluídas do potencial ponderado e dos cortes por rep/segmento/fonte."
        }
      ),
      /* @__PURE__ */ a.jsx(
        Re,
        {
          label: "Triagem atrasada",
          value: nt(n.agingCount),
          hint: `Detectadas há mais de ${n.agingSlaDays} dia(s) sem virar qualificada nem descartada (SLA configurável em Configurações).`
        }
      )
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "lt-chart-grid", children: [
      /* @__PURE__ */ a.jsxs("section", { className: "lt-chart-card", children: [
        /* @__PURE__ */ a.jsx("h3", { children: "Distribuição por fabricante" }),
        /* @__PURE__ */ a.jsx(Sh, { data: n.vendorDistribution, emptyMessage: "Sem oportunidades com fabricante identificado." })
      ] }),
      /* @__PURE__ */ a.jsxs("section", { className: "lt-chart-card", children: [
        /* @__PURE__ */ a.jsx("h3", { children: "Potencial financeiro por fabricante" }),
        /* @__PURE__ */ a.jsx(Yt, { data: n.financialByVendor, formatValue: tt, emptyMessage: "Sem potencial financeiro registrado." })
      ] }),
      /* @__PURE__ */ a.jsxs("section", { className: "lt-chart-card", children: [
        /* @__PURE__ */ a.jsx("h3", { children: "Oportunidades por serviço" }),
        /* @__PURE__ */ a.jsx(Yt, { data: n.opportunitiesByService, formatValue: nt, emptyMessage: "Sem oportunidades de serviço." })
      ] }),
      /* @__PURE__ */ a.jsxs("section", { className: "lt-chart-card", children: [
        /* @__PURE__ */ a.jsx("h3", { children: "Clientes × Prospects" }),
        /* @__PURE__ */ a.jsx(Yt, { data: n.customerVsProspect, formatValue: nt, emptyMessage: "Sem empresas analisadas." })
      ] }),
      /* @__PURE__ */ a.jsxs("section", { className: "lt-chart-card lt-chart-card--wide", children: [
        /* @__PURE__ */ a.jsx("h3", { children: "Funil de oportunidades" }),
        /* @__PURE__ */ a.jsx(wi, { stages: Nh, counts: n.funnelCounts })
      ] }),
      /* @__PURE__ */ a.jsxs("section", { className: "lt-chart-card lt-chart-card--wide", children: [
        /* @__PURE__ */ a.jsxs("div", { className: "lt-header-row", children: [
          /* @__PURE__ */ a.jsx("h3", { children: "Alcance do funil" }),
          /* @__PURE__ */ a.jsx(We, { text: 'Quantas oportunidades já chegaram em cada etapa ou passaram dela, hoje — nunca "taxa de conversão" (o histórico completo de quando cada uma mudou de estágio ainda não é guardado, então não dá pra calcular uma taxa de coorte de verdade).' })
        ] }),
        /* @__PURE__ */ a.jsx(wi, { stages: u, counts: i })
      ] }),
      /* @__PURE__ */ a.jsxs("section", { className: "lt-chart-card", children: [
        /* @__PURE__ */ a.jsx("h3", { children: "Potencial por representante" }),
        /* @__PURE__ */ a.jsx(Yt, { data: n.potentialByRep, formatValue: tt, emptyMessage: "Sem oportunidade atribuída a representante ainda." })
      ] }),
      /* @__PURE__ */ a.jsxs("section", { className: "lt-chart-card", children: [
        /* @__PURE__ */ a.jsx("h3", { children: "Potencial por segmento" }),
        /* @__PURE__ */ a.jsx(Yt, { data: n.potentialBySegment, formatValue: tt, emptyMessage: "Sem oportunidade com segmento atribuído ainda." })
      ] }),
      /* @__PURE__ */ a.jsxs("section", { className: "lt-chart-card", children: [
        /* @__PURE__ */ a.jsx("h3", { children: "Potencial por fonte" }),
        /* @__PURE__ */ a.jsx(Yt, { data: n.potentialBySource, formatValue: tt, emptyMessage: "Sem oportunidade com fonte atribuída ainda." })
      ] })
    ] }),
    /* @__PURE__ */ a.jsxs("section", { className: "lt-chart-card", children: [
      /* @__PURE__ */ a.jsxs("div", { className: "lt-toolbar", children: [
        /* @__PURE__ */ a.jsxs("div", { className: "lt-header-row", children: [
          /* @__PURE__ */ a.jsx("h3", { children: "Cobertura de meta por representante" }),
          /* @__PURE__ */ a.jsx(We, { text: `Pipeline atual dividido pela meta cadastrada em Configurações pra ${n.coveragePeriodKey}. Sem meta definida pro representante, nunca mostra 0% — mostra "sem meta definida".` })
        ] }),
        /* @__PURE__ */ a.jsxs("label", { className: "lt-field", children: [
          /* @__PURE__ */ a.jsx("span", { children: "Período" }),
          /* @__PURE__ */ a.jsxs("select", { value: e, onChange: (d) => t(d.target.value), children: [
            /* @__PURE__ */ a.jsx("option", { value: "monthly", children: "Mensal" }),
            /* @__PURE__ */ a.jsx("option", { value: "quarterly", children: "Trimestral" })
          ] })
        ] })
      ] }),
      n.repCoverage.length === 0 ? /* @__PURE__ */ a.jsx("p", { className: "lt-empty", role: "status", children: "Nenhum representante com oportunidade atribuída ainda." }) : /* @__PURE__ */ a.jsxs("table", { className: "lt-table", children: [
        /* @__PURE__ */ a.jsx("thead", { children: /* @__PURE__ */ a.jsxs("tr", { children: [
          /* @__PURE__ */ a.jsx("th", { children: "Representante" }),
          /* @__PURE__ */ a.jsx("th", { children: "Pipeline atual" }),
          /* @__PURE__ */ a.jsx("th", { children: "Meta" }),
          /* @__PURE__ */ a.jsx("th", { children: "Cobertura" })
        ] }) }),
        /* @__PURE__ */ a.jsx("tbody", { children: n.repCoverage.map((d) => /* @__PURE__ */ a.jsxs("tr", { children: [
          /* @__PURE__ */ a.jsx("td", { children: d.repId }),
          /* @__PURE__ */ a.jsx("td", { children: tt(d.actual) }),
          /* @__PURE__ */ a.jsx("td", { children: d.target === null ? "—" : tt(d.target) }),
          /* @__PURE__ */ a.jsx("td", { children: d.coverageRatio === null ? "Sem meta definida" : kh(d.coverageRatio) })
        ] }, d.repId)) })
      ] })
    ] }),
    /* @__PURE__ */ a.jsx("p", { className: "lt-hint", children: "Segmentação por região ainda fica de fora — exige dado real de região vindo de uma fonte configurada (ex.: Google Maps). Tendência temporal (série histórica) também não está aqui: o snapshot diário guarda o estado de hoje, não a evolução dia a dia — ver engineering/specs/fase-d-dashboard-acionavel.md." })
  ] });
}
const Ch = {
  client: "todos",
  product: "todos",
  service: "todos",
  source: "todos",
  minScore: 0
};
function da(e) {
  return Array.from(new Set(e.filter((t) => !!t))).sort();
}
function Ph({
  rows: e,
  value: t,
  onChange: n
}) {
  const r = da(e.map((s) => s.product)), l = da(e.map((s) => s.service)), o = da(e.flatMap((s) => s.sources.map((i) => i.type)));
  return /* @__PURE__ */ a.jsxs("div", { className: "lt-filters", role: "group", "aria-label": "Filtros de oportunidades", children: [
    /* @__PURE__ */ a.jsxs("label", { htmlFor: "lt-filter-client", className: "lt-field", children: [
      /* @__PURE__ */ a.jsx("span", { children: "Cliente" }),
      /* @__PURE__ */ a.jsxs(
        "select",
        {
          id: "lt-filter-client",
          value: t.client,
          onChange: (s) => n({ ...t, client: s.target.value }),
          children: [
            /* @__PURE__ */ a.jsx("option", { value: "todos", children: "Todos" }),
            /* @__PURE__ */ a.jsx("option", { value: "clientes", children: "Clientes atuais" }),
            /* @__PURE__ */ a.jsx("option", { value: "prospects", children: "Prospects" })
          ]
        }
      ),
      /* @__PURE__ */ a.jsx("span", { className: "lt-hint", children: "Filtra pela relação da empresa: cliente atual ou prospect ainda sem venda." })
    ] }),
    /* @__PURE__ */ a.jsxs("label", { htmlFor: "lt-filter-product", className: "lt-field", children: [
      /* @__PURE__ */ a.jsx("span", { children: "Produto" }),
      /* @__PURE__ */ a.jsxs("select", { id: "lt-filter-product", value: t.product, onChange: (s) => n({ ...t, product: s.target.value }), children: [
        /* @__PURE__ */ a.jsx("option", { value: "todos", children: "Todos" }),
        r.map((s) => /* @__PURE__ */ a.jsx("option", { value: s, children: s }, s))
      ] }),
      /* @__PURE__ */ a.jsx("span", { className: "lt-hint", children: "Mostra só oportunidades associadas a esse produto do portfólio." })
    ] }),
    /* @__PURE__ */ a.jsxs("label", { htmlFor: "lt-filter-service", className: "lt-field", children: [
      /* @__PURE__ */ a.jsx("span", { children: "Serviço" }),
      /* @__PURE__ */ a.jsxs("select", { id: "lt-filter-service", value: t.service, onChange: (s) => n({ ...t, service: s.target.value }), children: [
        /* @__PURE__ */ a.jsx("option", { value: "todos", children: "Todos" }),
        l.map((s) => /* @__PURE__ */ a.jsx("option", { value: s, children: s }, s))
      ] }),
      /* @__PURE__ */ a.jsx("span", { className: "lt-hint", children: "Mostra só oportunidades associadas a esse serviço do portfólio." })
    ] }),
    /* @__PURE__ */ a.jsxs("label", { htmlFor: "lt-filter-source", className: "lt-field", children: [
      /* @__PURE__ */ a.jsx("span", { children: "Fonte" }),
      /* @__PURE__ */ a.jsxs("select", { id: "lt-filter-source", value: t.source, onChange: (s) => n({ ...t, source: s.target.value }), children: [
        /* @__PURE__ */ a.jsx("option", { value: "todos", children: "Todas" }),
        o.map((s) => /* @__PURE__ */ a.jsx("option", { value: s, children: s }, s))
      ] }),
      /* @__PURE__ */ a.jsx("span", { className: "lt-hint", children: "Mostra só oportunidades com evidência vinda dessa fonte de dados." })
    ] }),
    /* @__PURE__ */ a.jsxs("label", { htmlFor: "lt-filter-score", className: "lt-field", children: [
      /* @__PURE__ */ a.jsx("span", { children: "Score mínimo" }),
      /* @__PURE__ */ a.jsx(
        "input",
        {
          id: "lt-filter-score",
          type: "number",
          min: 0,
          max: 1,
          step: 0.1,
          value: t.minScore,
          onChange: (s) => n({ ...t, minScore: Number(s.target.value) })
        }
      ),
      /* @__PURE__ */ a.jsx("span", { className: "lt-hint", children: "De 0.0 a 1.0 — esconde oportunidades com aderência abaixo desse valor." })
    ] })
  ] });
}
function Th(e) {
  const t = [];
  return e.client !== "todos" && t.push(e.client === "clientes" ? "clientes atuais" : "prospects"), e.product !== "todos" && t.push(`produto: ${e.product}`), e.service !== "todos" && t.push(`serviço: ${e.service}`), e.source !== "todos" && t.push(`fonte: ${e.source}`), e.minScore > 0 && t.push(`score mínimo: ${e.minScore}`), t.length > 0 ? t.join(", ") : "sem filtro";
}
function zh(e, t) {
  return e.filter((n) => !(t.client === "clientes" && !n.isCustomer || t.client === "prospects" && n.isCustomer || t.product !== "todos" && n.product !== t.product || t.service !== "todos" && n.service !== t.service || t.source !== "todos" && !n.sources.some((r) => r.type === t.source) || (n.opportunityScore ?? 0) < t.minScore));
}
const Rh = {
  promoted: "Pronto para contato",
  deferred: "Fila para amanhã",
  rejected: "Fora do critério"
};
function fa({ item: e, group: t }) {
  return /* @__PURE__ */ a.jsxs("div", { className: "lt-source-card", children: [
    /* @__PURE__ */ a.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "baseline" }, children: [
      /* @__PURE__ */ a.jsx("strong", { children: e.name }),
      /* @__PURE__ */ a.jsx("span", { className: `lt-badge lt-badge--discovery-${t}`, children: Rh[t] })
    ] }),
    e.score !== null && /* @__PURE__ */ a.jsxs("div", { style: { margin: "8px 0" }, children: [
      /* @__PURE__ */ a.jsxs("div", { style: { display: "flex", justifyContent: "space-between", fontSize: 11, color: "hsl(var(--text-muted))" }, children: [
        /* @__PURE__ */ a.jsx("span", { children: "Compatibilidade" }),
        /* @__PURE__ */ a.jsxs("span", { children: [
          Math.round(e.score * 100),
          "%"
        ] })
      ] }),
      /* @__PURE__ */ a.jsx("div", { style: { height: 6, background: "hsl(var(--bg-subtle))", borderRadius: 3 }, children: /* @__PURE__ */ a.jsx("div", { style: { height: 6, borderRadius: 3, background: "hsl(var(--accent))", width: `${e.score * 100}%` } }) })
    ] }),
    /* @__PURE__ */ a.jsxs("p", { className: "lt-hint", children: [
      e.category ?? "Categoria desconhecida",
      " ",
      e.categoryMatches ? "✓ bate com o critério" : "— fora do critério buscado"
    ] }),
    e.formattedAddress && /* @__PURE__ */ a.jsx("p", { className: "lt-hint", children: e.formattedAddress }),
    e.rating !== null && /* @__PURE__ */ a.jsxs("p", { className: "lt-hint", children: [
      "★ ",
      e.rating.toFixed(1),
      " (",
      e.reviewCount,
      " avaliações)"
    ] })
  ] });
}
function Lh() {
  const [e, t] = g.useState(1), [n, r] = g.useState([]), [l, o] = g.useState(void 0), [s, i] = g.useState(null), [u, d] = g.useState(""), [f, v] = g.useState(""), [h, j] = g.useState(""), [y, x] = g.useState(15), [_, p] = g.useState(""), [c, m] = g.useState(""), [S, w] = g.useState(!1), [P, T] = g.useState(null), [C, A] = g.useState(null), [I, q] = g.useState(!1), [F, Z] = g.useState(null), [ae, oe] = g.useState(null);
  g.useEffect(() => {
    Promise.all([qc(), Qp()]).then(([E, $]) => {
      r(E), $.searchOriginAddress && j($.searchOriginAddress), $.radiusKm && x($.radiusKm), $.referenceProductId && v($.referenceProductId);
    }).catch((E) => i(E instanceof Error ? E.message : "Não consegui carregar os dados iniciais."));
  }, []);
  const $e = () => {
    t(3), l === void 0 && qp().then((E) => {
      o(E), E && (p(($) => $ || E.industryHint || ""), m(($) => $ || E.companySizeHint || ""));
    }).catch(() => o(null));
  }, Me = async () => {
    w(!0), T(null);
    try {
      await Wp({
        referenceProductId: f || null,
        placeCategory: _ || null,
        companySizeHint: c || null,
        radiusKm: y,
        searchOriginAddress: h
      });
      const E = await Kp({
        repId: u,
        referenceProductId: f || null,
        searchOriginAddress: h,
        radiusKm: y,
        placeCategory: _ || null,
        companySizeHint: c || null
      });
      A(E);
    } catch (E) {
      T(E instanceof Error ? E.message : "Não conseguimos completar a busca agora.");
    } finally {
      w(!1);
    }
  }, z = () => {
    A(null), T(null), q(!1), oe(null), t(1);
  }, O = async (E) => {
    if (!C) return;
    Z(E), oe(null);
    const $ = `Prospecção geográfica — raio ${y}km, ${_ || "sem categoria"}`;
    try {
      E === "pdf" ? await Gp(C, $) : await Yp(C);
    } catch (N) {
      oe(N instanceof Error ? N.message : "Falha ao exportar.");
    } finally {
      Z(null);
    }
  };
  return s ? /* @__PURE__ */ a.jsx("p", { className: "lt-alert", role: "alert", children: s }) : C ? /* @__PURE__ */ a.jsxs("div", { className: "lt-dashboard", children: [
    /* @__PURE__ */ a.jsx("div", { className: "lt-header", children: /* @__PURE__ */ a.jsx("h2", { children: "Resultado da busca" }) }),
    /* @__PURE__ */ a.jsxs("div", { className: "lt-toolbar", children: [
      /* @__PURE__ */ a.jsx("button", { type: "button", className: "lt-btn", onClick: () => O("pdf"), disabled: F !== null, "aria-busy": F === "pdf", children: F === "pdf" ? "Gerando PDF…" : "PDF" }),
      /* @__PURE__ */ a.jsx("button", { type: "button", className: "lt-btn", onClick: () => O("excel"), disabled: F !== null, "aria-busy": F === "excel", children: F === "excel" ? "Gerando Excel…" : "Excel" })
    ] }),
    ae && /* @__PURE__ */ a.jsx("p", { className: "lt-alert", role: "alert", children: ae }),
    /* @__PURE__ */ a.jsxs("div", { className: "lt-stat-grid", children: [
      /* @__PURE__ */ a.jsxs("div", { className: "lt-stat-tile", children: [
        /* @__PURE__ */ a.jsx("div", { className: "lt-stat-tile__value", children: C.promoted.length }),
        /* @__PURE__ */ a.jsx("div", { className: "lt-stat-tile__label", children: "Prontos para contato" }),
        /* @__PURE__ */ a.jsx("div", { className: "lt-stat-tile__hint", children: "Passaram no critério e já estão na sua lista de oportunidades." })
      ] }),
      C.deferred.length > 0 && /* @__PURE__ */ a.jsxs("div", { className: "lt-stat-tile", children: [
        /* @__PURE__ */ a.jsx("div", { className: "lt-stat-tile__value", children: C.deferred.length }),
        /* @__PURE__ */ a.jsx("div", { className: "lt-stat-tile__label", children: "Na fila para amanhã" }),
        /* @__PURE__ */ a.jsx("div", { className: "lt-stat-tile__hint", children: "Encontramos mais oportunidades boas do que a cota diária de hoje. Elas entram automaticamente na lista amanhã, sem precisar buscar de novo." })
      ] })
    ] }),
    C.promoted.length > 0 && /* @__PURE__ */ a.jsx("div", { className: "lt-source-grid", children: C.promoted.map((E) => /* @__PURE__ */ a.jsx(fa, { item: E, group: "promoted" }, E.placeId)) }),
    C.deferred.length > 0 && /* @__PURE__ */ a.jsx("div", { className: "lt-source-grid", children: C.deferred.map((E) => /* @__PURE__ */ a.jsx(fa, { item: E, group: "deferred" }, E.placeId)) }),
    C.rejected.length > 0 && /* @__PURE__ */ a.jsx("div", { className: "lt-detail-actions", children: /* @__PURE__ */ a.jsxs("button", { type: "button", className: "lt-btn", onClick: () => q((E) => !E), children: [
      I ? "Ocultar" : "Ver",
      " todos os resultados da busca (",
      C.rejected.length,
      " fora do critério)"
    ] }) }),
    I && C.rejected.length > 0 && /* @__PURE__ */ a.jsx("div", { className: "lt-source-grid", children: C.rejected.map((E) => /* @__PURE__ */ a.jsx(fa, { item: E, group: "rejected" }, E.placeId)) }),
    /* @__PURE__ */ a.jsx("div", { className: "lt-detail-actions", children: /* @__PURE__ */ a.jsx("button", { type: "button", className: "lt-btn", onClick: z, children: "Nova busca" }) })
  ] }) : /* @__PURE__ */ a.jsxs("div", { children: [
    /* @__PURE__ */ a.jsxs("div", { className: "lt-header", children: [
      /* @__PURE__ */ a.jsx("h2", { children: "Prospecção geográfica" }),
      /* @__PURE__ */ a.jsxs("p", { children: [
        "Passo ",
        e,
        " de 4"
      ] })
    ] }),
    e === 1 && /* @__PURE__ */ a.jsxs("div", { className: "lt-source-card__form", children: [
      /* @__PURE__ */ a.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ a.jsx("span", { children: "Buscar prospecção para (representante)" }),
        /* @__PURE__ */ a.jsx("input", { value: u, onChange: (E) => d(E.target.value), placeholder: "Id ou nome do representante" }),
        /* @__PURE__ */ a.jsx("span", { className: "lt-hint", children: "Quem vai receber as oportunidades descobertas nessa busca." })
      ] }),
      /* @__PURE__ */ a.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ a.jsx("span", { children: "A partir de qual produto ou serviço?" }),
        /* @__PURE__ */ a.jsxs("select", { value: f, onChange: (E) => v(E.target.value), children: [
          /* @__PURE__ */ a.jsx("option", { value: "", children: "Nenhum em particular" }),
          n.map((E) => /* @__PURE__ */ a.jsx("option", { value: E.id, children: E.name }, E.id))
        ] }),
        /* @__PURE__ */ a.jsx("span", { className: "lt-hint", children: "Usa clientes satisfeitos com esse item pra sugerir categoria e porte no passo 3." })
      ] }),
      /* @__PURE__ */ a.jsx("div", { className: "lt-detail-actions", children: /* @__PURE__ */ a.jsx("button", { type: "button", className: "lt-btn", onClick: () => t(2), disabled: !u.trim(), children: "Avançar" }) })
    ] }),
    e === 2 && /* @__PURE__ */ a.jsxs("div", { className: "lt-source-card__form", children: [
      /* @__PURE__ */ a.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ a.jsx("span", { children: "Endereço de origem da busca" }),
        /* @__PURE__ */ a.jsx(
          "input",
          {
            value: h,
            onChange: (E) => j(E.target.value),
            placeholder: "Rua, número, cidade"
          }
        ),
        /* @__PURE__ */ a.jsx("span", { className: "lt-hint", children: "Ponto central da busca geográfica." })
      ] }),
      /* @__PURE__ */ a.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ a.jsxs("span", { children: [
          "Raio de busca: ",
          y,
          " km"
        ] }),
        /* @__PURE__ */ a.jsx("input", { type: "range", min: 1, max: 50, value: y, onChange: (E) => x(Number(E.target.value)) }),
        /* @__PURE__ */ a.jsx("span", { className: "lt-hint", children: "Distância máxima do endereço de origem pra considerar uma empresa candidata." })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: "lt-detail-actions", children: [
        /* @__PURE__ */ a.jsx("button", { type: "button", className: "lt-btn", onClick: () => t(1), children: "Voltar" }),
        /* @__PURE__ */ a.jsx("button", { type: "button", className: "lt-btn", onClick: $e, disabled: !h.trim(), children: "Avançar" })
      ] })
    ] }),
    e === 3 && /* @__PURE__ */ a.jsxs("div", { className: "lt-source-card__form", children: [
      l === void 0 && /* @__PURE__ */ a.jsx("p", { className: "lt-hint", children: "Calculando sugestão…" }),
      l === null && /* @__PURE__ */ a.jsx("p", { className: "lt-hint", children: "Ainda não temos clientes satisfeitos suficientes pra sugerir automaticamente. Escolha a categoria e o porte manualmente." }),
      l && l.confidence === "high" && /* @__PURE__ */ a.jsxs("p", { className: "lt-hint", children: [
        "Com base nos seus clientes satisfeitos, sugerimos buscar ",
        /* @__PURE__ */ a.jsx("strong", { children: l.industryHint ?? "—" }),
        ", porte ",
        /* @__PURE__ */ a.jsx("strong", { children: l.companySizeHint ?? "—" }),
        "."
      ] }),
      l && l.confidence === "low" && /* @__PURE__ */ a.jsxs("p", { className: "lt-hint", children: [
        "Encontramos poucos clientes de referência ainda (",
        l.sampleSize,
        "), então esta é uma sugestão inicial — vale revisar antes de confirmar."
      ] }),
      /* @__PURE__ */ a.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ a.jsx("span", { children: "Categoria (Google Places)" }),
        /* @__PURE__ */ a.jsx("input", { value: _, onChange: (E) => p(E.target.value), placeholder: "ex.: car_dealer" }),
        /* @__PURE__ */ a.jsx("span", { className: "lt-hint", children: "Tipo de estabelecimento no Google Places usado como filtro da busca." })
      ] }),
      /* @__PURE__ */ a.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ a.jsx("span", { children: "Porte-alvo" }),
        /* @__PURE__ */ a.jsx("input", { value: c, onChange: (E) => m(E.target.value), placeholder: "ex.: média" }),
        /* @__PURE__ */ a.jsx("span", { className: "lt-hint", children: "Descrição livre do porte de empresa procurado — só orienta a triagem, não filtra sozinho." })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: "lt-detail-actions", children: [
        /* @__PURE__ */ a.jsx("button", { type: "button", className: "lt-btn", onClick: () => t(2), children: "Voltar" }),
        /* @__PURE__ */ a.jsx("button", { type: "button", className: "lt-btn", onClick: () => t(4), children: "Avançar" })
      ] })
    ] }),
    e === 4 && /* @__PURE__ */ a.jsxs("div", { className: "lt-source-card__form", children: [
      /* @__PURE__ */ a.jsxs("p", { className: "lt-hint", children: [
        "Vamos buscar ",
        _ || "empresas",
        " ",
        c ? `de porte ${c} ` : "",
        "num raio de ",
        y,
        'km a partir de "',
        h,
        '", para ',
        u,
        "."
      ] }),
      P && /* @__PURE__ */ a.jsxs("p", { className: "lt-alert", role: "alert", children: [
        "Não conseguimos completar a busca agora. Isso não é um problema com os seus critérios — pode ser uma instabilidade temporária. ",
        P
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: "lt-detail-actions", children: [
        /* @__PURE__ */ a.jsx("button", { type: "button", className: "lt-btn", onClick: () => t(3), disabled: S, children: "Voltar" }),
        /* @__PURE__ */ a.jsx("button", { type: "button", className: "lt-btn", onClick: Me, disabled: S, "aria-busy": S, children: S ? "Buscando…" : "Buscar agora" })
      ] })
    ] })
  ] });
}
const Oh = [
  { value: "isolado", label: "Isolado (poucas licenças/sistemas)" },
  { value: "parcial", label: "Parcial (parte relevante do parque)" },
  { value: "generalizado", label: "Generalizado (maior parte do parque)" }
], Ih = [
  { value: "nao_critico", label: "Não crítico (impacto operacional baixo)" },
  { value: "critico_interno", label: "Crítico interno (grave, não visível ao cliente)" },
  { value: "critico_exposto", label: "Crítico e exposto (produção/cliente-facing)" }
], Fh = {
  baixo: "Baixo",
  medio: "Médio",
  alto: "Alto",
  critico: "Crítico",
  nao_avaliado: "Não avaliado"
}, bh = {
  verde: "Saudável",
  amarela: "Atenção",
  vermelha: "Crítica",
  dados_insuficientes: "Dados insuficientes"
}, Dh = {
  imediata: "revisão imediata — saúde da conta em estado crítico",
  revisao_de_risco: "saúde comprometida, sem renovação próxima o bastante pra justificar revisão imediata",
  revisao_antes_da_renovacao: "renovação próxima e a saúde não está em verde — vale revisar antes de decidir",
  revisao_de_acompanhamento: "acompanhamento de rotina, saúde em atenção",
  revisao_de_rotina: "nenhum sinal de urgência — cadência de rotina",
  alinhada_a_renovacao: "conta saudável — revisão alinhada à data de renovação"
};
function $h(e) {
  return e ? e.slice(0, 10) : "";
}
const Ni = [
  { value: "no_evidence", label: "Sem evidência suficiente" },
  { value: "not_fit", label: "Sem fit técnico/comercial" },
  { value: "not_qualified", label: "Cliente não qualificado" },
  { value: "false_positive", label: "Falso positivo da regra" },
  { value: "other", label: "Outro (detalhar na observação)" }
], Mh = [
  { value: "detected", label: "Detectada" },
  { value: "qualified", label: "Qualificada" },
  { value: "reviewed", label: "Revisada" },
  { value: "contacted", label: "Contatada" },
  { value: "opportunity", label: "Oportunidade" },
  { value: "dismissed", label: "Descartada" }
], ki = ["detected", "qualified", "reviewed", "contacted", "opportunity"];
function Ei(e, t) {
  if (e === t) return !1;
  if (e === "dismissed") return t !== "dismissed";
  const n = ki.indexOf(e), r = ki.indexOf(t);
  return n === -1 || r === -1 ? !1 : r - n >= 2;
}
function Ah({ row: e, onUpdated: t }) {
  var p;
  const [n, r] = g.useState(null), [l, o] = g.useState(""), [s, i] = g.useState(""), [u, d] = g.useState(!1), [f, v] = g.useState(null), h = n !== null && Ei(e.status, n), j = n === "dismissed", y = h || j, x = async (c, m, S) => {
    d(!0), v(null);
    try {
      const w = await Up(e.id, c, m, S);
      t(w), r(null), o(""), i("");
    } catch (w) {
      v(w instanceof Error ? w.message : "Falha ao mudar o status.");
    } finally {
      d(!1);
    }
  }, _ = (c) => {
    if (v(null), c === e.status) {
      r(null);
      return;
    }
    r(c), c !== "dismissed" && !Ei(e.status, c) && x(c, null, null);
  };
  return /* @__PURE__ */ a.jsxs("div", { className: "lt-severity", children: [
    /* @__PURE__ */ a.jsxs("label", { className: "lt-field", children: [
      /* @__PURE__ */ a.jsx("span", { children: "Status" }),
      /* @__PURE__ */ a.jsx("select", { value: n ?? e.status, onChange: (c) => _(c.target.value), disabled: u, children: Mh.map((c) => /* @__PURE__ */ a.jsx("option", { value: c.value, children: c.label }, c.value)) }),
      /* @__PURE__ */ a.jsx("span", { className: "lt-hint", children: "Etapa atual no funil — detectada → qualificada → revisada → contatada → oportunidade." })
    ] }),
    e.status === "dismissed" && n === null && e.dismissalReason && /* @__PURE__ */ a.jsxs("p", { className: "lt-hint", children: [
      "Motivo do descarte: ",
      ((p = Ni.find((c) => c.value === e.dismissalReason)) == null ? void 0 : p.label) ?? e.dismissalReason
    ] }),
    j && /* @__PURE__ */ a.jsxs("label", { className: "lt-field", children: [
      /* @__PURE__ */ a.jsx("span", { children: "Motivo do descarte" }),
      /* @__PURE__ */ a.jsxs("select", { value: s, onChange: (c) => i(c.target.value), children: [
        /* @__PURE__ */ a.jsx("option", { value: "", children: "Selecione um motivo" }),
        Ni.map((c) => /* @__PURE__ */ a.jsx("option", { value: c.value, children: c.label }, c.value))
      ] }),
      /* @__PURE__ */ a.jsx("span", { className: "lt-hint", children: "Obrigatório pra descartar — fica registrado no histórico da oportunidade." })
    ] }),
    h && /* @__PURE__ */ a.jsxs("label", { className: "lt-field", children: [
      /* @__PURE__ */ a.jsx("span", { children: "Justificativa (pulou etapas ou reabriu uma oportunidade descartada)" }),
      /* @__PURE__ */ a.jsx("textarea", { value: l, onChange: (c) => o(c.target.value) }),
      /* @__PURE__ */ a.jsx("span", { className: "lt-hint", children: "Explica por que a mudança fugiu do fluxo normal — fica registrada no histórico." })
    ] }),
    y && /* @__PURE__ */ a.jsx(
      "button",
      {
        type: "button",
        className: "lt-btn",
        onClick: () => x(n, l || null, s || null),
        disabled: u || h && !l.trim() || j && !s,
        children: "Confirmar mudança"
      }
    ),
    f && /* @__PURE__ */ a.jsx("p", { className: "lt-alert", role: "alert", children: f })
  ] });
}
const Uh = { alta: 3, média: 2, baixa: 1 };
function Bh(e, t, n) {
  const r = n === "asc" ? 1 : -1, l = (o) => {
    switch (t) {
      case "score":
        return o.opportunityScore ?? -1;
      case "potencial":
        return o.financialPotential ?? -1;
      case "prioridade":
        return Uh[o.priority];
      case "confianca":
        return o.confidenceScore ?? -1;
    }
  };
  return [...e].sort((o, s) => (l(o) - l(s)) * r);
}
function uo(e) {
  return e === null ? "—" : e.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });
}
function Mn(e) {
  return e === null ? "—" : e.toFixed(2);
}
function pa({ label: e, sortKey: t, current: n, direction: r, onSort: l }) {
  const o = n === t;
  return /* @__PURE__ */ a.jsx("th", { "aria-sort": o ? r === "asc" ? "ascending" : "descending" : "none", children: /* @__PURE__ */ a.jsxs("button", { type: "button", onClick: () => l(t), children: [
    e,
    o ? r === "asc" ? " ▲" : " ▼" : ""
  ] }) });
}
function Vh({ row: e, onUpdated: t }) {
  const [n, r] = g.useState(e.scopeNote), [l, o] = g.useState(e.criticality), [s, i] = g.useState(e.severityNote ?? ""), [u, d] = g.useState(null), f = g.useRef(0), v = async (h) => {
    d(null);
    const j = ++f.current;
    try {
      const y = await Ap(e.id, {
        scopeNote: h.scopeNote,
        criticality: h.criticality,
        severityNote: h.severityNote || null
      });
      if (j !== f.current) return;
      t(y);
    } catch (y) {
      if (j !== f.current) return;
      d(y instanceof Error ? y.message : "Falha ao salvar a qualificação.");
    }
  };
  return /* @__PURE__ */ a.jsxs("div", { className: "lt-severity", children: [
    /* @__PURE__ */ a.jsxs("label", { className: "lt-field", children: [
      /* @__PURE__ */ a.jsx("span", { children: "Alcance do gap" }),
      /* @__PURE__ */ a.jsxs(
        "select",
        {
          value: n ?? "",
          onChange: (h) => {
            const j = h.target.value || null;
            r(j), v({ scopeNote: j, criticality: l, severityNote: s });
          },
          children: [
            /* @__PURE__ */ a.jsx("option", { value: "", children: "Não avaliado" }),
            Oh.map((h) => /* @__PURE__ */ a.jsx("option", { value: h.value, children: h.label }, h.value))
          ]
        }
      ),
      /* @__PURE__ */ a.jsx("span", { className: "lt-hint", children: "Quão abrangente é o gap identificado — usado no cálculo de severidade." })
    ] }),
    /* @__PURE__ */ a.jsxs("label", { className: "lt-field", children: [
      /* @__PURE__ */ a.jsx("span", { children: "Criticidade" }),
      /* @__PURE__ */ a.jsxs(
        "select",
        {
          value: l ?? "",
          onChange: (h) => {
            const j = h.target.value || null;
            o(j), v({ scopeNote: n, criticality: j, severityNote: s });
          },
          children: [
            /* @__PURE__ */ a.jsx("option", { value: "", children: "Não avaliado" }),
            Ih.map((h) => /* @__PURE__ */ a.jsx("option", { value: h.value, children: h.label }, h.value))
          ]
        }
      ),
      /* @__PURE__ */ a.jsx("span", { className: "lt-hint", children: "Quão urgente é o risco pro cliente — usado no cálculo de severidade." })
    ] }),
    /* @__PURE__ */ a.jsxs("label", { className: "lt-field", children: [
      /* @__PURE__ */ a.jsx("span", { children: "Observação (opcional)" }),
      /* @__PURE__ */ a.jsx(
        "textarea",
        {
          value: s,
          onChange: (h) => i(h.target.value),
          onBlur: () => v({ scopeNote: n, criticality: l, severityNote: s })
        }
      ),
      /* @__PURE__ */ a.jsx("span", { className: "lt-hint", children: "Contexto livre sobre o gap — não entra no cálculo de severidade." })
    ] }),
    /* @__PURE__ */ a.jsxs("span", { className: `lt-badge lt-badge--severity-${e.severityBand}`, children: [
      "Severidade: ",
      Fh[e.severityBand]
    ] }),
    u && /* @__PURE__ */ a.jsx("p", { className: "lt-alert", role: "alert", children: u })
  ] });
}
function Hh({ row: e, onRenewalDateUpdated: t }) {
  const [n, r] = g.useState($h(e.renewalDate)), [l, o] = g.useState(null), s = g.useRef(0), i = async (u) => {
    o(null);
    const d = ++s.current;
    try {
      if (await Bp(e.companyId, u || null), d !== s.current) return;
      t();
    } catch (f) {
      if (d !== s.current) return;
      o(f instanceof Error ? f.message : "Falha ao salvar a data de renovação.");
    }
  };
  return /* @__PURE__ */ a.jsxs("div", { className: "lt-panel", children: [
    /* @__PURE__ */ a.jsxs("div", { className: "lt-panel-row", children: [
      /* @__PURE__ */ a.jsxs("span", { className: `lt-badge lt-badge--health-${e.accountHealth}`, children: [
        "Saúde da conta: ",
        bh[e.accountHealth]
      ] }),
      /* @__PURE__ */ a.jsxs("span", { className: "lt-hint", children: [
        "Próxima revisão sugerida: ",
        e.qbrSuggestedDays === 0 ? "imediata" : `em ${e.qbrSuggestedDays} dias`,
        " ",
        "(",
        Dh[e.qbrReason] ?? e.qbrReason,
        ")"
      ] })
    ] }),
    /* @__PURE__ */ a.jsxs("label", { className: "lt-field", children: [
      /* @__PURE__ */ a.jsx("span", { children: "Data de renovação do contrato" }),
      /* @__PURE__ */ a.jsx(
        "input",
        {
          type: "date",
          value: n,
          onChange: (u) => r(u.target.value),
          onBlur: () => i(n)
        }
      ),
      /* @__PURE__ */ a.jsx("span", { className: "lt-hint", children: "Alimenta a cadência de revisão de conta (QBR) sugerida acima." })
    ] }),
    l && /* @__PURE__ */ a.jsx("p", { className: "lt-alert", role: "alert", children: l })
  ] });
}
const ha = {
  continuidade_uso_atual: (e) => `Enviar e-mail perguntando como está o uso de ${e.product ?? e.service ?? "seus produtos atuais"} — é hora de reforçar o relacionamento.`,
  gap_portfolio: (e) => `Ligar apresentando ${e.product ?? e.service ?? "a solução recomendada"} — cliente já usa produtos relacionados mas não tem isso.`,
  prova_social_urgencia: () => "Mandar mensagem no LinkedIn com um caso parecido — bom momento pra criar urgência.",
  abertura_sinal: () => "Primeiro contato por e-mail — sinal identificado aponta interesse.",
  reforco_angulo_novo: () => "Ligar com um ângulo diferente — a primeira abordagem não avançou, vale tentar outro gancho."
};
function Qh(e) {
  const t = e.includes("single_threaded_risk"), n = e.includes("no_economic_buyer_contact");
  return t && n ? "Os toques recentes chegaram a uma pessoa só, e não a um decisor. Bom momento pra ampliar quem participa da conversa." : t ? "Só um contato ativo tem recebido seus toques recentes. Vale envolver mais uma pessoa da conta." : "Nenhum decisor apareceu nos toques recentes. Vale trazer quem decide pra conversa.";
}
function Wh({ row: e, repId: t, suggestionCache: n, contactsCache: r }) {
  var q;
  const [l, o] = g.useState(null), [s, i] = g.useState(null), [u, d] = g.useState("idle"), [f, v] = g.useState(!1), [h, j] = g.useState(!1), [y, x] = g.useState([]), [_, p] = g.useState(null), c = `${e.id}:${t}`, m = (F) => {
    o(F), d("idle"), p(F.lastContactId);
  }, S = (F = !1) => {
    var Z;
    return !F && ((Z = n.current) != null && Z.has(c)) ? (m(n.current.get(c)), Promise.resolve()) : Cp(e.id, t).then((ae) => {
      var oe;
      (oe = n.current) == null || oe.set(c, ae), m(ae);
    });
  };
  if (g.useEffect(() => {
    i(null), S().catch((F) => i(F instanceof Error ? F.message : "Falha ao calcular a próxima ação."));
  }, [e.id, t]), g.useEffect(() => {
    var Z;
    const F = (Z = r.current) == null ? void 0 : Z.get(e.companyId);
    if (F) {
      x(F);
      return;
    }
    Tp(e.companyId).then((ae) => {
      var oe;
      (oe = r.current) == null || oe.set(e.companyId, ae), x(ae);
    }).catch(() => x([]));
  }, [e.companyId]), !t.trim())
    return /* @__PURE__ */ a.jsx("p", { className: "lt-hint", children: "Informe seu id de representante acima para ver a próxima ação sugerida." });
  if (s) return /* @__PURE__ */ a.jsx("p", { className: "lt-alert", role: "alert", children: s });
  if (!l) return /* @__PURE__ */ a.jsx("p", { className: "lt-hint", children: "Calculando próxima ação…" });
  const w = l.silenceReason && /* @__PURE__ */ a.jsx("p", { className: "lt-advisory", role: "alert", children: l.silenceReason === "nunca_contatado" ? `Esta oportunidade está em qualificação há ${l.silenceDays} dias sem nenhum contato registrado. Ainda faz sentido priorizá-la agora?` : `A cadência sugerida terminou há ${l.silenceDays} dias sem retorno do lead. Bom momento pra decidir: tentar outro ângulo, escalar, ou dispensar.` }), P = l.threadingRiskReasons.length > 0 && /* @__PURE__ */ a.jsxs("div", { className: "lt-panel", children: [
    /* @__PURE__ */ a.jsx("strong", { children: "Vale ampliar os contatos aqui" }),
    /* @__PURE__ */ a.jsx("p", { className: "lt-advisory", children: Qh(l.threadingRiskReasons) })
  ] });
  if (l.state === "aguardando_intervalo")
    return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      w,
      P,
      /* @__PURE__ */ a.jsx("p", { className: "lt-hint", children: "Sem ação sugerida agora — dentro do intervalo da cadência." })
    ] });
  if (l.state === "cadencia_esgotada")
    return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      w,
      P,
      /* @__PURE__ */ a.jsx("p", { className: "lt-hint", children: "Sem retorno até agora — decida o próximo passo no status acima (encerrar ou continuar manualmente)." })
    ] });
  if (l.state === "cap_diario_atingido")
    return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      w,
      P,
      /* @__PURE__ */ a.jsx("p", { className: "lt-hint", children: "Você atingiu o limite de contatos de hoje. Essa sugestão volta amanhã." })
    ] });
  const T = ((q = ha[l.reasonCategory ?? ""]) == null ? void 0 : q.call(ha, e)) ?? "Próxima ação sugerida.", C = l.channel ?? "email", A = async () => {
    i(null), v(!0);
    try {
      if (C === "email") {
        const F = await Hc(e);
        await navigator.clipboard.writeText(`${F.subject}

${F.greeting}

${F.body}

${F.cta}`);
      } else
        await navigator.clipboard.writeText(T);
    } catch (F) {
      i(F instanceof Error ? F.message : "Falha ao copiar o conteúdo do contato."), v(!1);
      return;
    }
    v(!1), d("copied"), setTimeout(() => d("ready"), 1200);
  }, I = async () => {
    j(!0);
    try {
      await Pp(e.id, t, C, T, _);
    } catch (F) {
      i(F instanceof Error ? F.message : "Falha ao registrar o contato."), j(!1);
      return;
    }
    try {
      await S(!0);
    } catch {
      i("Contato registrado, mas não consegui atualizar a sugestão — recarregue a página.");
    } finally {
      j(!1);
    }
  };
  return /* @__PURE__ */ a.jsxs("div", { className: "lt-panel", children: [
    w,
    P,
    /* @__PURE__ */ a.jsx("p", { className: "lt-panel-text", children: T }),
    /* @__PURE__ */ a.jsxs("div", { className: "lt-panel-row", children: [
      /* @__PURE__ */ a.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ a.jsx("span", { children: "Contato (opcional)" }),
        /* @__PURE__ */ a.jsxs("select", { value: _ ?? "", onChange: (F) => p(F.target.value || null), children: [
          /* @__PURE__ */ a.jsx("option", { value: "", children: "Não atribuído" }),
          y.map((F) => /* @__PURE__ */ a.jsx("option", { value: F.id, children: F.name }, F.id))
        ] }),
        /* @__PURE__ */ a.jsx("span", { className: "lt-hint", children: "Pra quem o rascunho de e-mail abaixo é endereçado." })
      ] }),
      u === "idle" && /* @__PURE__ */ a.jsx("button", { type: "button", className: "lt-btn", onClick: A, disabled: f, children: f ? "Copiando…" : C === "email" ? "Copiar rascunho" : "Copiar sugestão" }),
      u === "copied" && /* @__PURE__ */ a.jsx("span", { className: "lt-hint", children: "Copiado ✓" }),
      u === "ready" && /* @__PURE__ */ a.jsx("button", { type: "button", className: "lt-btn", onClick: I, disabled: h, children: h ? "Registrando…" : "Marcar como enviado" })
    ] })
  ] });
}
function qh({ row: e, repId: t, onRowUpdated: n, onRenewalDateUpdated: r, suggestionCache: l, contactsCache: o }) {
  const [s, i] = g.useState("idle"), [u, d] = g.useState(null), [f, v] = g.useState(null), h = async () => {
    i("loading"), d(null);
    try {
      const x = await Hc(e);
      v(x), i("idle");
    } catch (x) {
      d(x instanceof Error ? x.message : "Falha ao gerar rascunho."), i("error");
    }
  }, j = async () => {
    f && await navigator.clipboard.writeText(`${f.subject}

${f.greeting}

${f.body}

${f.cta}`);
  }, y = async () => {
    const x = [
      e.companyName,
      e.isCustomer ? "Cliente" : "Prospect",
      `Score: ${Mn(e.opportunityScore)}`,
      `Potencial: ${uo(e.financialPotential)}`,
      e.justification ?? ""
    ].filter(Boolean).join(" — ");
    await navigator.clipboard.writeText(x);
  };
  return /* @__PURE__ */ a.jsx("tr", { children: /* @__PURE__ */ a.jsxs("td", { colSpan: 8, className: "lt-detail", children: [
    /* @__PURE__ */ a.jsxs("dl", { children: [
      /* @__PURE__ */ a.jsx("dt", { children: "Status de cliente" }),
      /* @__PURE__ */ a.jsx("dd", { children: e.isCustomer ? "Cliente" : "Prospect" }),
      /* @__PURE__ */ a.jsx("dt", { children: "Fontes" }),
      /* @__PURE__ */ a.jsx("dd", { children: e.sources.map((x) => `${x.type} (${Math.round(x.confidence * 100)}%)`).join(", ") || "—" }),
      /* @__PURE__ */ a.jsx("dt", { children: "Produtos atuais" }),
      /* @__PURE__ */ a.jsx("dd", { children: e.currentProducts.join(", ") || "—" }),
      /* @__PURE__ */ a.jsx("dt", { children: "Produtos recomendados" }),
      /* @__PURE__ */ a.jsx("dd", { children: e.recommendedProducts.join(", ") || "—" }),
      /* @__PURE__ */ a.jsx("dt", { children: "Serviços recomendados" }),
      /* @__PURE__ */ a.jsx("dd", { children: e.recommendedServices.join(", ") || "—" }),
      /* @__PURE__ */ a.jsx("dt", { children: "Potencial financeiro" }),
      /* @__PURE__ */ a.jsx("dd", { children: uo(e.financialPotential) }),
      /* @__PURE__ */ a.jsx("dt", { children: "Scores" }),
      /* @__PURE__ */ a.jsxs("dd", { children: [
        "oportunidade ",
        Mn(e.opportunityScore),
        " · estratégico ",
        Mn(null),
        " · confiança ",
        Mn(e.confidenceScore)
      ] }),
      /* @__PURE__ */ a.jsx("dt", { children: "Evidências" }),
      /* @__PURE__ */ a.jsx("dd", { children: e.evidence.join(", ") || "—" }),
      /* @__PURE__ */ a.jsx("dt", { children: "Insight" }),
      /* @__PURE__ */ a.jsx("dd", { children: e.justification ?? "Sem justificativa registrada." })
    ] }),
    /* @__PURE__ */ a.jsx(Ah, { row: e, onUpdated: n }),
    /* @__PURE__ */ a.jsx(Hh, { row: e, onRenewalDateUpdated: r }),
    /* @__PURE__ */ a.jsx(Vh, { row: e, onUpdated: n }),
    /* @__PURE__ */ a.jsxs("div", { className: "lt-panel", children: [
      /* @__PURE__ */ a.jsx("strong", { children: "Próxima ação sugerida" }),
      /* @__PURE__ */ a.jsx(Wh, { row: e, repId: t, suggestionCache: l, contactsCache: o })
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "lt-detail-actions", children: [
      /* @__PURE__ */ a.jsx("button", { type: "button", className: "lt-btn", onClick: y, children: "Copiar resumo" }),
      /* @__PURE__ */ a.jsx("button", { type: "button", className: "lt-btn", onClick: h, disabled: s === "loading", children: s === "loading" ? "Gerando…" : "Gerar rascunho" })
    ] }),
    s === "error" && /* @__PURE__ */ a.jsx("p", { className: "lt-alert", role: "alert", children: u }),
    f && /* @__PURE__ */ a.jsxs("div", { className: "lt-draft", role: "status", children: [
      /* @__PURE__ */ a.jsxs("p", { children: [
        /* @__PURE__ */ a.jsx("strong", { children: "Assunto:" }),
        " ",
        f.subject
      ] }),
      /* @__PURE__ */ a.jsx("p", { children: f.greeting }),
      /* @__PURE__ */ a.jsx("p", { children: f.body }),
      /* @__PURE__ */ a.jsx("p", { children: f.cta }),
      /* @__PURE__ */ a.jsx("button", { type: "button", className: "lt-btn", onClick: j, children: "Copiar rascunho" }),
      /* @__PURE__ */ a.jsx("p", { className: "lt-hint", children: "Revise antes de enviar — o rascunho nunca é enviado automaticamente." })
    ] })
  ] }) });
}
function Kh({ rows: e, repId: t, onRowUpdated: n, onRenewalDateUpdated: r }) {
  const [l, o] = g.useState("score"), [s, i] = g.useState("desc"), [u, d] = g.useState(null), f = g.useRef(/* @__PURE__ */ new Map()), v = g.useRef(/* @__PURE__ */ new Map()), h = (y) => {
    y === l ? i((x) => x === "asc" ? "desc" : "asc") : (o(y), i("desc"));
  }, j = g.useMemo(() => Bh(e, l, s), [e, l, s]);
  return e.length === 0 ? /* @__PURE__ */ a.jsx("p", { className: "lt-empty", role: "status", children: "Nenhuma oportunidade encontrada com os filtros atuais." }) : /* @__PURE__ */ a.jsxs("table", { className: "lt-table", children: [
    /* @__PURE__ */ a.jsx("thead", { children: /* @__PURE__ */ a.jsxs("tr", { children: [
      /* @__PURE__ */ a.jsx("th", { children: "Empresa" }),
      /* @__PURE__ */ a.jsx("th", { children: "Cliente" }),
      /* @__PURE__ */ a.jsx(pa, { label: "Score", sortKey: "score", current: l, direction: s, onSort: h }),
      /* @__PURE__ */ a.jsx(pa, { label: "Potencial $", sortKey: "potencial", current: l, direction: s, onSort: h }),
      /* @__PURE__ */ a.jsx("th", { children: "Produto" }),
      /* @__PURE__ */ a.jsx("th", { children: "Serviço" }),
      /* @__PURE__ */ a.jsx(pa, { label: "Prioridade", sortKey: "prioridade", current: l, direction: s, onSort: h }),
      /* @__PURE__ */ a.jsx("th", { children: "Fontes" })
    ] }) }),
    /* @__PURE__ */ a.jsx("tbody", { children: j.map((y) => /* @__PURE__ */ a.jsxs(g.Fragment, { children: [
      /* @__PURE__ */ a.jsxs("tr", { children: [
        /* @__PURE__ */ a.jsx("td", { children: /* @__PURE__ */ a.jsxs(
          "button",
          {
            type: "button",
            className: "lt-expand-btn",
            "aria-expanded": u === y.id,
            "aria-label": `${u === y.id ? "Recolher" : "Expandir"} detalhes de ${y.companyName}`,
            onClick: () => d(u === y.id ? null : y.id),
            children: [
              u === y.id ? "▾" : "▸",
              " ",
              y.companyName
            ]
          }
        ) }),
        /* @__PURE__ */ a.jsx("td", { children: /* @__PURE__ */ a.jsx("span", { className: `lt-badge ${y.isCustomer ? "lt-badge--customer" : "lt-badge--prospect"}`, children: y.isCustomer ? "Cliente" : "Prospect" }) }),
        /* @__PURE__ */ a.jsx("td", { children: Mn(y.opportunityScore) }),
        /* @__PURE__ */ a.jsx("td", { children: uo(y.financialPotential) }),
        /* @__PURE__ */ a.jsx("td", { children: y.product ?? "—" }),
        /* @__PURE__ */ a.jsx("td", { children: y.service ?? "—" }),
        /* @__PURE__ */ a.jsx("td", { children: y.priority }),
        /* @__PURE__ */ a.jsx("td", { children: y.sources.map((x) => x.type).join(", ") })
      ] }),
      u === y.id && /* @__PURE__ */ a.jsx(
        qh,
        {
          row: y,
          repId: t,
          onRowUpdated: n,
          onRenewalDateUpdated: r,
          suggestionCache: f,
          contactsCache: v
        }
      )
    ] }, y.id)) })
  ] });
}
const ma = "__custom__", Gh = {
  openai: [
    { value: "gpt-5-mini", label: "Barato (gpt-5-mini)" },
    { value: "gpt-5", label: "Equilibrado (gpt-5)" },
    { value: "gpt-5-pro", label: "Caro (gpt-5-pro)" }
  ],
  gemini: [
    { value: "gemini-2.5-flash-lite", label: "Barato (gemini-2.5-flash-lite)" },
    { value: "gemini-2.5-flash", label: "Equilibrado (gemini-2.5-flash)" },
    { value: "gemini-2.5-pro", label: "Caro (gemini-2.5-pro)" }
  ],
  claude: [
    { value: "claude-haiku-4-5", label: "Barato (claude-haiku-4-5)" },
    { value: "claude-sonnet-5", label: "Equilibrado (claude-sonnet-5)" },
    { value: "claude-opus-5", label: "Caro (claude-opus-5)" }
  ]
};
function Yh() {
  const [e, t] = g.useState(null), [n, r] = g.useState(""), [l, o] = g.useState(""), [s, i] = g.useState(""), [u, d] = g.useState(null), [f, v] = g.useState(null), [h, j] = g.useState(!1);
  g.useEffect(() => {
    Rp().then((c) => {
      t(c), r(c.provider), i(c.model);
    }).catch((c) => d(c instanceof Error ? c.message : "Não consegui carregar a configuração de IA."));
  }, []);
  const y = async () => {
    j(!0), d(null), v(null);
    try {
      const c = await Lp(n, l, s);
      t(c), i(c.model), o(""), v("Configuração de IA salva.");
    } catch (c) {
      d(c instanceof Error ? c.message : "Falha ao salvar a configuração de IA.");
    } finally {
      j(!1);
    }
  };
  if (u && !e) return /* @__PURE__ */ a.jsx("p", { className: "lt-alert", role: "alert", children: u });
  if (!e) return /* @__PURE__ */ a.jsx("p", { className: "lt-hint", children: "Carregando…" });
  const x = n === e.provider ? e.model_options : Gh[n] ?? [], _ = x.length === 0, p = _ || s !== "" && !x.some((c) => c.value === s);
  return /* @__PURE__ */ a.jsxs("div", { className: "lt-source-card", children: [
    /* @__PURE__ */ a.jsx("div", { className: "lt-source-card__header", children: /* @__PURE__ */ a.jsxs("div", { className: "lt-header-row", children: [
      /* @__PURE__ */ a.jsx("p", { className: "lt-source-card__title", children: "Inteligência Artificial" }),
      /* @__PURE__ */ a.jsx(We, { text: "Opcional — usada só pra gerar rascunho de e-mail. O Lead.Tracker funciona normalmente sem isso." })
    ] }) }),
    /* @__PURE__ */ a.jsxs("div", { className: "lt-source-card__form", children: [
      /* @__PURE__ */ a.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ a.jsx("span", { children: "Provedor de IA" }),
        /* @__PURE__ */ a.jsxs(
          "select",
          {
            value: n,
            onChange: (c) => {
              r(c.target.value), i("");
            },
            children: [
              /* @__PURE__ */ a.jsx("option", { value: "", children: "Não configurado" }),
              e.options.map((c) => /* @__PURE__ */ a.jsx("option", { value: c.value, children: c.label }, c.value))
            ]
          }
        ),
        /* @__PURE__ */ a.jsx("span", { className: "lt-hint", children: "Escolha o provedor de IA que vai gerar os rascunhos de e-mail." })
      ] }),
      n && (_ ? /* @__PURE__ */ a.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ a.jsx("span", { children: "Modelo" }),
        /* @__PURE__ */ a.jsx(
          "input",
          {
            value: s,
            onChange: (c) => i(c.target.value),
            placeholder: "ex.: openai/gpt-4o-mini"
          }
        ),
        /* @__PURE__ */ a.jsx("span", { className: "lt-hint", children: "OpenRouter dá acesso a qualquer modelo pelo nome exato — deixe em branco pra usar o padrão do OpenRouter." })
      ] }) : /* @__PURE__ */ a.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ a.jsx("span", { children: "Modelo" }),
        /* @__PURE__ */ a.jsxs(
          "select",
          {
            value: p ? ma : s,
            onChange: (c) => i(c.target.value === ma ? "" : c.target.value),
            children: [
              /* @__PURE__ */ a.jsx("option", { value: ma, children: "Padrão do provedor" }),
              x.map((c) => /* @__PURE__ */ a.jsx("option", { value: c.value, children: c.label }, c.value))
            ]
          }
        ),
        /* @__PURE__ */ a.jsx("span", { className: "lt-hint", children: "Barato/equilibrado/caro reflete custo e capacidade do modelo — padrão do provedor usa a opção equilibrada." })
      ] })),
      /* @__PURE__ */ a.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ a.jsx("span", { children: "Chave de acesso do provedor" }),
        /* @__PURE__ */ a.jsx(
          "input",
          {
            type: "password",
            value: l,
            onChange: (c) => o(c.target.value),
            placeholder: e.has_key ? "••••••••" : ""
          }
        ),
        /* @__PURE__ */ a.jsx("span", { className: "lt-hint", children: "Cole aqui a chave fornecida pelo provedor escolhido. Deixe em branco pra manter a chave já salva." })
      ] }),
      /* @__PURE__ */ a.jsx("div", { className: "lt-detail-actions", children: /* @__PURE__ */ a.jsx("button", { type: "button", className: "lt-btn", onClick: y, disabled: h, children: h ? "Salvando…" : "Salvar" }) }),
      u && /* @__PURE__ */ a.jsx("p", { className: "lt-alert", role: "alert", children: u }),
      f && /* @__PURE__ */ a.jsx("p", { className: "lt-hint", role: "status", children: f })
    ] })
  ] });
}
function Xh() {
  const [e, t] = g.useState(null), [n, r] = g.useState("merge"), [l, o] = g.useState(!1), [s, i] = g.useState(null), [u, d] = g.useState(null), f = async () => {
    if (e) {
      o(!0), d(null), i(null);
      try {
        const v = await sh(e, n);
        i(v);
      } catch (v) {
        d(v instanceof Error ? v.message : "Falha ao importar o CSV.");
      } finally {
        o(!1);
      }
    }
  };
  return /* @__PURE__ */ a.jsxs("div", { className: "lt-source-card", children: [
    /* @__PURE__ */ a.jsx("div", { className: "lt-source-card__header", children: /* @__PURE__ */ a.jsxs("div", { className: "lt-header-row", children: [
      /* @__PURE__ */ a.jsx("p", { className: "lt-source-card__title", children: "Importar CSV" }),
      /* @__PURE__ */ a.jsx(We, { text: "Cadastra empresa + portfólio (o que ela já tem do seu catálogo) em lote, sem precisar de Salesforce ou Google Maps configurados. Fabricante/produto/serviço citados no arquivo precisam já existir em Portfólio — o import nunca inventa item novo no catálogo." })
    ] }) }),
    /* @__PURE__ */ a.jsxs("div", { className: "lt-source-card__form", children: [
      /* @__PURE__ */ a.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ a.jsx("span", { children: "Arquivo CSV" }),
        /* @__PURE__ */ a.jsx(
          "input",
          {
            type: "file",
            accept: ".csv,text/csv",
            onChange: (v) => {
              var h;
              return t(((h = v.target.files) == null ? void 0 : h[0]) ?? null);
            }
          }
        ),
        /* @__PURE__ */ a.jsx("span", { className: "lt-hint", children: "Colunas: company_name (obrigatória), is_customer, segment, region, rep_id, vendor, product, service. Uma linha por empresa + item de portfólio — repita a empresa numa linha por produto/serviço." })
      ] }),
      /* @__PURE__ */ a.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ a.jsx("span", { children: "Empresa já cadastrada: o que fazer com o portfólio" }),
        /* @__PURE__ */ a.jsxs("select", { value: n, onChange: (v) => r(v.target.value), children: [
          /* @__PURE__ */ a.jsx("option", { value: "merge", children: "Adicionar aos itens já cadastrados" }),
          /* @__PURE__ */ a.jsx("option", { value: "replace", children: "Substituir pelos itens deste arquivo" })
        ] }),
        /* @__PURE__ */ a.jsx("span", { className: "lt-hint", children: "Adicionar preserva o que já foi cadastrado antes; Substituir descarta o portfólio anterior da empresa e usa só o que está neste arquivo." })
      ] }),
      /* @__PURE__ */ a.jsx("div", { className: "lt-detail-actions", children: /* @__PURE__ */ a.jsx("button", { type: "button", className: "lt-btn", onClick: f, disabled: l || !e, children: l ? "Importando…" : "Importar" }) }),
      u && /* @__PURE__ */ a.jsx("p", { className: "lt-alert", role: "alert", children: u }),
      s && /* @__PURE__ */ a.jsxs("div", { className: "lt-panel", children: [
        /* @__PURE__ */ a.jsxs("p", { className: "lt-panel-text", children: [
          s.companies_imported,
          " empresa(s) importada(s), ",
          s.portfolios_updated,
          " portfólio(s) atualizado(s), ",
          s.opportunities_generated,
          " oportunidade(s) gerada(s)."
        ] }),
        s.errors.length > 0 && /* @__PURE__ */ a.jsx("ul", { children: s.errors.map((v, h) => /* @__PURE__ */ a.jsx("li", { className: "lt-alert", children: v }, h)) })
      ] })
    ] })
  ] });
}
const Fr = {
  industry_hint: "Setor / segmento do cliente",
  deal_size_hint: "Porte estimado do negócio",
  renewal_date: "Data de renovação do contrato"
};
function Jh() {
  const [e, t] = g.useState(null), [n, r] = g.useState(null), [l, o] = g.useState(null), [s, i] = g.useState(null);
  g.useEffect(() => {
    ch().then(t).catch((f) => r(f instanceof Error ? f.message : "Não consegui carregar os campos do Salesforce."));
  }, []);
  const u = async (f, v) => {
    i(f.sourceFieldApiName), o(null);
    try {
      if (v === "")
        await fh(f.sourceFieldApiName), t((h) => f.broken ? h.filter((j) => j.sourceFieldApiName !== f.sourceFieldApiName) : h.map((j) => j.sourceFieldApiName === f.sourceFieldApiName ? { ...j, role: null } : j));
      else {
        const { reassignedFromApiName: h, reassignedFromLabel: j } = await dh(
          f.sourceFieldApiName,
          f.sourceFieldLabel,
          v
        );
        t((y) => y.map((x) => x.sourceFieldApiName === f.sourceFieldApiName ? { ...x, role: v } : h && x.sourceFieldApiName === h ? { ...x, role: null } : x)), o(
          j ? `${Fr[v]} agora é preenchido por ${f.sourceFieldLabel} em vez de ${j}.` : `A partir de agora, o valor de ${f.sourceFieldLabel} será a fonte de verdade para ${Fr[v]} — ele substitui qualquer valor que o sistema já tenha.`
        );
      }
    } catch (h) {
      o(h instanceof Error ? h.message : "Falha ao atualizar o mapeamento.");
    } finally {
      i(null);
    }
  };
  if (n) return /* @__PURE__ */ a.jsx("p", { className: "lt-alert", role: "alert", children: n });
  if (!e) return /* @__PURE__ */ a.jsx("p", { className: "lt-hint", children: "Carregando campos do Salesforce…" });
  const d = [...e].sort((f, v) => f.role === v.role ? 0 : f.role ? -1 : 1);
  return /* @__PURE__ */ a.jsxs("div", { children: [
    /* @__PURE__ */ a.jsxs("div", { className: "lt-header", children: [
      /* @__PURE__ */ a.jsx("h2", { children: "Mapeamento de campos do Salesforce" }),
      /* @__PURE__ */ a.jsx("p", { children: "Alguns campos personalizados do Salesforce podem preencher automaticamente informações do sistema. Campos que você não mapear continuam sendo considerados pela IA normalmente." })
    ] }),
    l && /* @__PURE__ */ a.jsx("p", { className: "lt-hint", role: "status", children: l }),
    d.length === 0 ? /* @__PURE__ */ a.jsx("p", { className: "lt-empty", role: "status", children: "Nenhum campo personalizado encontrado no Salesforce." }) : /* @__PURE__ */ a.jsxs("table", { className: "lt-table", children: [
      /* @__PURE__ */ a.jsx("thead", { children: /* @__PURE__ */ a.jsxs("tr", { children: [
        /* @__PURE__ */ a.jsx("th", { children: "Campo do Salesforce" }),
        /* @__PURE__ */ a.jsx("th", { children: "Preenche este dado do sistema" })
      ] }) }),
      /* @__PURE__ */ a.jsx("tbody", { children: d.map((f) => /* @__PURE__ */ a.jsxs(g.Fragment, { children: [
        /* @__PURE__ */ a.jsxs("tr", { children: [
          /* @__PURE__ */ a.jsxs("td", { children: [
            f.broken && /* @__PURE__ */ a.jsx("span", { className: "lt-badge lt-badge--severity-critico", children: "Campo removido" }),
            " ",
            f.sourceFieldLabel
          ] }),
          /* @__PURE__ */ a.jsx("td", { children: /* @__PURE__ */ a.jsxs(
            "select",
            {
              value: f.role ?? "",
              disabled: s === f.sourceFieldApiName,
              onChange: (v) => u(f, v.target.value),
              children: [
                /* @__PURE__ */ a.jsx("option", { value: "", children: "—" }),
                !f.broken && Object.keys(Fr).map((v) => /* @__PURE__ */ a.jsx("option", { value: v, children: Fr[v] }, v))
              ]
            }
          ) })
        ] }),
        f.broken && /* @__PURE__ */ a.jsx("tr", { children: /* @__PURE__ */ a.jsx("td", { colSpan: 2, children: /* @__PURE__ */ a.jsx("p", { className: "lt-alert", role: "alert", children: f.brokenMessage }) }) })
      ] }, f.sourceFieldApiName)) })
    ] })
  ] });
}
const br = "__new__";
function Zh({
  products: e,
  services: t,
  loadError: n,
  onProductCreated: r,
  onServiceCreated: l,
  onProductDeleted: o,
  onServiceDeleted: s
}) {
  const [i, u] = g.useState([]), [d, f] = g.useState(!1), [v, h] = g.useState(""), [j, y] = g.useState(""), [x, _] = g.useState(""), [p, c] = g.useState(""), [m, S] = g.useState(!1), [w, P] = g.useState(null), [T, C] = g.useState(!1), [A, I] = g.useState(""), [q, F] = g.useState(""), [Z, ae] = g.useState(!1), [oe, $e] = g.useState(null), [Me, z] = g.useState(null), [O, E] = g.useState(null), [$, N] = g.useState(null);
  g.useEffect(() => {
    Xp().then(u).catch((L) => z(L instanceof Error ? L.message : "Não consegui carregar os fabricantes."));
  }, []);
  const ce = (L) => {
    var Ke;
    return ((Ke = i.find((gr) => gr.id === L)) == null ? void 0 : Ke.name) ?? L;
  }, Ne = () => {
    h(""), y(""), _(""), c("");
  }, En = async () => {
    S(!0), P(null);
    try {
      let L = v;
      if (v === br) {
        const gr = await Jp(j);
        u((Xc) => [...Xc, gr]), L = gr.id;
      }
      const Ke = await Zp(L, x, p);
      r(Ke), f(!1), Ne();
    } catch (L) {
      P(L instanceof Error ? L.message : "Falha ao salvar produto.");
    } finally {
      S(!1);
    }
  }, et = async () => {
    ae(!0), $e(null);
    try {
      const L = await nh(A, q);
      l(L), C(!1), I(""), F("");
    } catch (L) {
      $e(L instanceof Error ? L.message : "Falha ao salvar serviço.");
    } finally {
      ae(!1);
    }
  }, Kt = async (L) => {
    if (window.confirm(`Remover o produto "${L.name}"? Essa ação não pode ser desfeita.`)) {
      E(L.id), N(null);
      try {
        await eh(L.id), o(L.id);
      } catch (Ke) {
        N(Ke instanceof Error ? Ke.message : "Falha ao remover produto.");
      } finally {
        E(null);
      }
    }
  }, Kc = async (L) => {
    if (window.confirm(`Remover o serviço "${L.name}"? Essa ação não pode ser desfeita.`)) {
      E(L.id), N(null);
      try {
        await rh(L.id), s(L.id);
      } catch (Ke) {
        N(Ke instanceof Error ? Ke.message : "Falha ao remover serviço.");
      } finally {
        E(null);
      }
    }
  };
  if (n || Me) return /* @__PURE__ */ a.jsx("p", { className: "lt-alert", role: "alert", children: n ?? Me });
  if (!e || !t) return /* @__PURE__ */ a.jsx("p", { className: "lt-hint", children: "Carregando portfólio…" });
  const Gc = x.trim() !== "" && (v === br ? j.trim() !== "" : v !== ""), Yc = A.trim() !== "";
  return /* @__PURE__ */ a.jsxs("div", { children: [
    /* @__PURE__ */ a.jsxs("div", { className: "lt-header lt-header-row", children: [
      /* @__PURE__ */ a.jsx("h2", { children: "Portfólio" }),
      /* @__PURE__ */ a.jsx(We, { text: "Produtos e serviços que sua empresa vende — é o catálogo que as Regras usam pra detectar oportunidade." })
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "lt-toolbar", children: [
      /* @__PURE__ */ a.jsx("button", { type: "button", className: "lt-btn", onClick: () => f((L) => !L), children: d ? "Cancelar" : "Novo produto" }),
      /* @__PURE__ */ a.jsx("button", { type: "button", className: "lt-btn", onClick: () => C((L) => !L), children: T ? "Cancelar" : "Novo serviço" })
    ] }),
    d && /* @__PURE__ */ a.jsxs("div", { className: "lt-source-card__form", children: [
      /* @__PURE__ */ a.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ a.jsx("span", { children: "Fabricante" }),
        /* @__PURE__ */ a.jsxs("select", { value: v, onChange: (L) => h(L.target.value), children: [
          /* @__PURE__ */ a.jsx("option", { value: "", children: "Selecione…" }),
          i.map((L) => /* @__PURE__ */ a.jsx("option", { value: L.id, children: L.name }, L.id)),
          /* @__PURE__ */ a.jsx("option", { value: br, children: "+ Cadastrar novo fabricante" })
        ] }),
        /* @__PURE__ */ a.jsx("span", { className: "lt-hint", children: "Quem fabrica esse produto — escolha um já cadastrado ou crie um novo." })
      ] }),
      v === br && /* @__PURE__ */ a.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ a.jsx("span", { children: "Nome do novo fabricante" }),
        /* @__PURE__ */ a.jsx("input", { value: j, onChange: (L) => y(L.target.value) }),
        /* @__PURE__ */ a.jsx("span", { className: "lt-hint", children: "Nome do fabricante como deve aparecer nas telas do sistema." })
      ] }),
      /* @__PURE__ */ a.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ a.jsx("span", { children: "Nome do produto" }),
        /* @__PURE__ */ a.jsx("input", { value: x, onChange: (L) => _(L.target.value) }),
        /* @__PURE__ */ a.jsx("span", { className: "lt-hint", children: "Nome comercial do produto, como aparece pro cliente." })
      ] }),
      /* @__PURE__ */ a.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ a.jsx("span", { children: "Categoria (ex.: backup, monitoramento — usada pelas Regras)" }),
        /* @__PURE__ */ a.jsx("input", { value: p, onChange: (L) => c(L.target.value) })
      ] }),
      w && /* @__PURE__ */ a.jsx("p", { className: "lt-alert", role: "alert", children: w }),
      /* @__PURE__ */ a.jsx("div", { className: "lt-detail-actions", children: /* @__PURE__ */ a.jsx("button", { type: "button", className: "lt-btn", onClick: En, disabled: m || !Gc, children: m ? "Salvando…" : "Criar produto" }) })
    ] }),
    T && /* @__PURE__ */ a.jsxs("div", { className: "lt-source-card__form", children: [
      /* @__PURE__ */ a.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ a.jsx("span", { children: "Nome do serviço" }),
        /* @__PURE__ */ a.jsx("input", { value: A, onChange: (L) => I(L.target.value) }),
        /* @__PURE__ */ a.jsx("span", { className: "lt-hint", children: "Nome comercial do serviço, como aparece pro cliente." })
      ] }),
      /* @__PURE__ */ a.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ a.jsx("span", { children: "Categoria (ex.: backup, monitoramento — usada pelas Regras)" }),
        /* @__PURE__ */ a.jsx("input", { value: q, onChange: (L) => F(L.target.value) })
      ] }),
      oe && /* @__PURE__ */ a.jsx("p", { className: "lt-alert", role: "alert", children: oe }),
      /* @__PURE__ */ a.jsx("div", { className: "lt-detail-actions", children: /* @__PURE__ */ a.jsx("button", { type: "button", className: "lt-btn", onClick: et, disabled: Z || !Yc, children: Z ? "Salvando…" : "Criar serviço" }) })
    ] }),
    $ && /* @__PURE__ */ a.jsx("p", { className: "lt-alert", role: "alert", children: $ }),
    e.length === 0 ? /* @__PURE__ */ a.jsx("p", { className: "lt-empty", role: "status", children: "Nenhum produto cadastrado ainda." }) : /* @__PURE__ */ a.jsxs("table", { className: "lt-table", children: [
      /* @__PURE__ */ a.jsx("thead", { children: /* @__PURE__ */ a.jsxs("tr", { children: [
        /* @__PURE__ */ a.jsx("th", { children: "Fabricante" }),
        /* @__PURE__ */ a.jsx("th", { children: "Produto" }),
        /* @__PURE__ */ a.jsx("th", { children: "Categoria" }),
        /* @__PURE__ */ a.jsx("th", {})
      ] }) }),
      /* @__PURE__ */ a.jsx("tbody", { children: e.map((L) => /* @__PURE__ */ a.jsxs("tr", { children: [
        /* @__PURE__ */ a.jsx("td", { children: ce(L.vendor_id) }),
        /* @__PURE__ */ a.jsx("td", { children: L.name }),
        /* @__PURE__ */ a.jsx("td", { children: L.category ?? "—" }),
        /* @__PURE__ */ a.jsx("td", { children: /* @__PURE__ */ a.jsx("button", { type: "button", className: "lt-btn", onClick: () => Kt(L), disabled: O === L.id, children: O === L.id ? "Removendo…" : "Remover" }) })
      ] }, L.id)) })
    ] }),
    t.length === 0 ? /* @__PURE__ */ a.jsx("p", { className: "lt-empty", role: "status", children: "Nenhum serviço cadastrado ainda." }) : /* @__PURE__ */ a.jsxs("table", { className: "lt-table", children: [
      /* @__PURE__ */ a.jsx("thead", { children: /* @__PURE__ */ a.jsxs("tr", { children: [
        /* @__PURE__ */ a.jsx("th", { children: "Serviço" }),
        /* @__PURE__ */ a.jsx("th", { children: "Categoria" }),
        /* @__PURE__ */ a.jsx("th", {})
      ] }) }),
      /* @__PURE__ */ a.jsx("tbody", { children: t.map((L) => /* @__PURE__ */ a.jsxs("tr", { children: [
        /* @__PURE__ */ a.jsx("td", { children: L.name }),
        /* @__PURE__ */ a.jsx("td", { children: L.category ?? "—" }),
        /* @__PURE__ */ a.jsx("td", { children: /* @__PURE__ */ a.jsx("button", { type: "button", className: "lt-btn", onClick: () => Kc(L), disabled: O === L.id, children: O === L.id ? "Removendo…" : "Remover" }) })
      ] }, L.id)) })
    ] })
  ] });
}
function Ci(e, t) {
  const n = t.getFullYear();
  if (e === "quarterly") {
    const l = Math.floor(t.getMonth() / 3) + 1;
    return `${n}-Q${l}`;
  }
  const r = String(t.getMonth() + 1).padStart(2, "0");
  return `${n}-${r}`;
}
function em(e) {
  const t = e.getFullYear();
  return [t, t + 1].flatMap((n) => [1, 2, 3, 4].map((r) => `${n}-Q${r}`));
}
function tm() {
  const [e, t] = g.useState("monthly"), [n, r] = g.useState(Ci("monthly", /* @__PURE__ */ new Date())), [l, o] = g.useState(null), [s, i] = g.useState(null), [u, d] = g.useState(!1), [f, v] = g.useState(""), [h, j] = g.useState(""), [y, x] = g.useState(!1), [_, p] = g.useState(null);
  g.useEffect(() => {
    o(null), ih(e, n).then(o).catch((w) => i(w instanceof Error ? w.message : "Não consegui carregar as metas."));
  }, [e, n]);
  const c = (w) => {
    t(w), r(Ci(w, /* @__PURE__ */ new Date()));
  }, m = async () => {
    x(!0), p(null);
    try {
      const w = await uh({ rep_id: f, period_type: e, period_key: n, target_amount: Number(h) });
      o((P) => [...(P ?? []).filter((T) => T.rep_id !== w.rep_id), w]), d(!1), v(""), j("");
    } catch (w) {
      p(w instanceof Error ? w.message : "Falha ao salvar meta.");
    } finally {
      x(!1);
    }
  }, S = f.trim() !== "" && Number(h) > 0;
  return /* @__PURE__ */ a.jsxs("div", { children: [
    /* @__PURE__ */ a.jsxs("div", { className: "lt-header lt-header-row", children: [
      /* @__PURE__ */ a.jsx("h2", { children: "Metas por representante" }),
      /* @__PURE__ */ a.jsx(We, { text: "Cadastro manual — sem meta definida, potencial financeiro é um número sem contexto pro dashboard." })
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "lt-toolbar", children: [
      /* @__PURE__ */ a.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ a.jsx("span", { children: "Período" }),
        /* @__PURE__ */ a.jsxs("select", { value: e, onChange: (w) => c(w.target.value), children: [
          /* @__PURE__ */ a.jsx("option", { value: "monthly", children: "Mensal" }),
          /* @__PURE__ */ a.jsx("option", { value: "quarterly", children: "Trimestral" })
        ] })
      ] }),
      e === "monthly" ? /* @__PURE__ */ a.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ a.jsx("span", { children: "Mês" }),
        /* @__PURE__ */ a.jsx("input", { type: "month", value: n, onChange: (w) => r(w.target.value) })
      ] }) : /* @__PURE__ */ a.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ a.jsx("span", { children: "Trimestre" }),
        /* @__PURE__ */ a.jsx("select", { value: n, onChange: (w) => r(w.target.value), children: em(/* @__PURE__ */ new Date()).map((w) => /* @__PURE__ */ a.jsx("option", { value: w, children: w }, w)) })
      ] }),
      /* @__PURE__ */ a.jsx("button", { type: "button", className: "lt-btn", onClick: () => d((w) => !w), children: u ? "Cancelar" : "Nova meta" })
    ] }),
    u && /* @__PURE__ */ a.jsxs("div", { className: "lt-source-card__form", children: [
      /* @__PURE__ */ a.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ a.jsx("span", { children: "Id do representante" }),
        /* @__PURE__ */ a.jsx("input", { value: f, onChange: (w) => v(w.target.value) }),
        /* @__PURE__ */ a.jsx("span", { className: "lt-hint", children: "Identificador usado nas oportunidades pra atribuir o pipeline a esse representante." })
      ] }),
      /* @__PURE__ */ a.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ a.jsx("span", { children: "Meta financeira (R$) pro período selecionado acima" }),
        /* @__PURE__ */ a.jsx("input", { type: "number", min: "0", value: h, onChange: (w) => j(w.target.value) })
      ] }),
      _ && /* @__PURE__ */ a.jsx("p", { className: "lt-alert", role: "alert", children: _ }),
      /* @__PURE__ */ a.jsx("div", { className: "lt-detail-actions", children: /* @__PURE__ */ a.jsx("button", { type: "button", className: "lt-btn", onClick: m, disabled: y || !S, children: y ? "Salvando…" : "Salvar meta" }) })
    ] }),
    s && /* @__PURE__ */ a.jsx("p", { className: "lt-alert", role: "alert", children: s }),
    !s && !l && /* @__PURE__ */ a.jsx("p", { className: "lt-hint", children: "Carregando metas…" }),
    !s && l && l.length === 0 && /* @__PURE__ */ a.jsxs("p", { className: "lt-empty", role: "status", children: [
      "Nenhuma meta cadastrada pra ",
      n,
      " ainda."
    ] }),
    !s && l && l.length > 0 && /* @__PURE__ */ a.jsxs("table", { className: "lt-table", children: [
      /* @__PURE__ */ a.jsx("thead", { children: /* @__PURE__ */ a.jsxs("tr", { children: [
        /* @__PURE__ */ a.jsx("th", { children: "Representante" }),
        /* @__PURE__ */ a.jsx("th", { children: "Meta (R$)" })
      ] }) }),
      /* @__PURE__ */ a.jsx("tbody", { children: l.map((w) => /* @__PURE__ */ a.jsxs("tr", { children: [
        /* @__PURE__ */ a.jsx("td", { children: w.rep_id }),
        /* @__PURE__ */ a.jsx("td", { children: w.target_amount.toLocaleString("pt-BR") })
      ] }, w.rep_id)) })
    ] })
  ] });
}
function nm(e) {
  if (e.relation_type) return `Relação: ${e.relation_type}`;
  if (e.requires_category.length) {
    const n = e.absent_category.length ? ` sem categoria ${e.absent_category.join(", ")}` : "";
    return `Categoria ${e.requires_category.join(", ")}${n}`;
  }
  const t = e.absent.length ? ` sem ${e.absent.join(", ")}` : "";
  return `Item ${e.requires.join(", ")}${t}`;
}
function rm({ products: e, services: t }) {
  const [n, r] = g.useState(null), [l, o] = g.useState(null), [s, i] = g.useState(!1), [u, d] = g.useState("category"), [f, v] = g.useState("cross-sell"), [h, j] = g.useState(""), [y, x] = g.useState(""), [_, p] = g.useState(""), [c, m] = g.useState(""), [S, w] = g.useState(""), [P, T] = g.useState("prerequisite"), [C, A] = g.useState(!1), [I, q] = g.useState(null), [F, Z] = g.useState(null), [ae, oe] = g.useState(null);
  g.useEffect(() => {
    lh().then(r).catch((N) => o(N instanceof Error ? N.message : "Não consegui carregar as regras."));
  }, []);
  const $e = Array.from(new Set([...e, ...t].map((N) => N.category).filter((N) => !!N))), Me = [...e.map((N) => ({ id: N.id, label: N.name })), ...t.map((N) => ({ id: N.id, label: N.name }))], z = () => {
    j(""), x(""), p(""), m(""), w("");
  }, O = async () => {
    A(!0), q(null);
    const N = { opportunity_type: f, justification: h };
    u === "presence" ? (N.requires = y ? [y] : [], N.absent = _ ? [_] : []) : u === "category" ? (N.requires_category = c ? [c] : [], N.absent_category = S ? [S] : []) : N.relation_type = P;
    try {
      const ce = await ah(N);
      r((Ne) => [...Ne ?? [], ce]), i(!1), z();
    } catch (ce) {
      q(ce instanceof Error ? ce.message : "Falha ao salvar regra.");
    } finally {
      A(!1);
    }
  }, E = async (N) => {
    if (window.confirm(`Remover a regra "${N.opportunity_type}"? Essa ação não pode ser desfeita.`)) {
      Z(N.id), oe(null);
      try {
        await oh(N.id), r((ce) => (ce ?? []).filter((Ne) => Ne.id !== N.id));
      } catch (ce) {
        oe(ce instanceof Error ? ce.message : "Falha ao remover regra.");
      } finally {
        Z(null);
      }
    }
  };
  if (l) return /* @__PURE__ */ a.jsx("p", { className: "lt-alert", role: "alert", children: l });
  if (!n) return /* @__PURE__ */ a.jsx("p", { className: "lt-hint", children: "Carregando regras…" });
  const $ = h.trim() !== "" && (u === "relation" || (u === "presence" ? y !== "" : c !== ""));
  return /* @__PURE__ */ a.jsxs("div", { children: [
    /* @__PURE__ */ a.jsxs("div", { className: "lt-header lt-header-row", children: [
      /* @__PURE__ */ a.jsx("h2", { children: "Regras" }),
      /* @__PURE__ */ a.jsx(We, { text: "Regras determinísticas que detectam oportunidade — sempre por categoria/item real do catálogo, nunca texto livre." })
    ] }),
    /* @__PURE__ */ a.jsx("div", { className: "lt-toolbar", children: /* @__PURE__ */ a.jsx("button", { type: "button", className: "lt-btn", onClick: () => i((N) => !N), children: s ? "Cancelar" : "Nova regra" }) }),
    s && /* @__PURE__ */ a.jsxs("div", { className: "lt-source-card__form", children: [
      /* @__PURE__ */ a.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ a.jsx("span", { children: "Tipo de regra" }),
        /* @__PURE__ */ a.jsxs("select", { value: u, onChange: (N) => d(N.target.value), children: [
          /* @__PURE__ */ a.jsx("option", { value: "category", children: "Categoria (tenho X, não tenho Y)" }),
          /* @__PURE__ */ a.jsx("option", { value: "presence", children: "Item específico" }),
          /* @__PURE__ */ a.jsx("option", { value: "relation", children: "Relação já cadastrada no catálogo" })
        ] }),
        /* @__PURE__ */ a.jsx("span", { className: "lt-hint", children: "Categoria compara grupos de itens; item específico compara um produto/serviço só; relação reaproveita um vínculo já existente no catálogo." })
      ] }),
      u === "category" && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        /* @__PURE__ */ a.jsxs("label", { className: "lt-field", children: [
          /* @__PURE__ */ a.jsx("span", { children: "Categoria que a empresa precisa ter" }),
          /* @__PURE__ */ a.jsxs("select", { value: c, onChange: (N) => m(N.target.value), children: [
            /* @__PURE__ */ a.jsx("option", { value: "", children: "Selecione…" }),
            $e.map((N) => /* @__PURE__ */ a.jsx("option", { value: N, children: N }, N))
          ] })
        ] }),
        /* @__PURE__ */ a.jsxs("label", { className: "lt-field", children: [
          /* @__PURE__ */ a.jsx("span", { children: "Categoria que NÃO deve ter (opcional)" }),
          /* @__PURE__ */ a.jsxs("select", { value: S, onChange: (N) => w(N.target.value), children: [
            /* @__PURE__ */ a.jsx("option", { value: "", children: "Nenhuma" }),
            $e.map((N) => /* @__PURE__ */ a.jsx("option", { value: N, children: N }, N))
          ] })
        ] })
      ] }),
      u === "presence" && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        /* @__PURE__ */ a.jsxs("label", { className: "lt-field", children: [
          /* @__PURE__ */ a.jsx("span", { children: "Item que a empresa precisa ter" }),
          /* @__PURE__ */ a.jsxs("select", { value: y, onChange: (N) => x(N.target.value), children: [
            /* @__PURE__ */ a.jsx("option", { value: "", children: "Selecione…" }),
            Me.map((N) => /* @__PURE__ */ a.jsx("option", { value: N.id, children: N.label }, N.id))
          ] })
        ] }),
        /* @__PURE__ */ a.jsxs("label", { className: "lt-field", children: [
          /* @__PURE__ */ a.jsx("span", { children: "Item que NÃO deve ter (opcional)" }),
          /* @__PURE__ */ a.jsxs("select", { value: _, onChange: (N) => p(N.target.value), children: [
            /* @__PURE__ */ a.jsx("option", { value: "", children: "Nenhum" }),
            Me.map((N) => /* @__PURE__ */ a.jsx("option", { value: N.id, children: N.label }, N.id))
          ] })
        ] })
      ] }),
      u === "relation" && /* @__PURE__ */ a.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ a.jsx("span", { children: "Tipo de relação" }),
        /* @__PURE__ */ a.jsxs("select", { value: P, onChange: (N) => T(N.target.value), children: [
          /* @__PURE__ */ a.jsx("option", { value: "prerequisite", children: "Pré-requisito — gera alerta de risco técnico" }),
          /* @__PURE__ */ a.jsx("option", { value: "substitute", children: "Substituto — gera oportunidade de consolidação" })
        ] }),
        /* @__PURE__ */ a.jsx("span", { className: "lt-hint", children: "Reaproveita a relação entre itens já definida no catálogo de portfólio." })
      ] }),
      /* @__PURE__ */ a.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ a.jsx("span", { children: "Rótulo da oportunidade (ex.: cross-sell, consolidation, risk)" }),
        /* @__PURE__ */ a.jsx("input", { value: f, onChange: (N) => v(N.target.value) })
      ] }),
      /* @__PURE__ */ a.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ a.jsx("span", { children: "Justificativa (aparece na oportunidade gerada)" }),
        /* @__PURE__ */ a.jsx("input", { value: h, onChange: (N) => j(N.target.value) })
      ] }),
      I && /* @__PURE__ */ a.jsx("p", { className: "lt-alert", role: "alert", children: I }),
      /* @__PURE__ */ a.jsx("div", { className: "lt-detail-actions", children: /* @__PURE__ */ a.jsx("button", { type: "button", className: "lt-btn", onClick: O, disabled: C || !$, children: C ? "Salvando…" : "Criar regra" }) })
    ] }),
    ae && /* @__PURE__ */ a.jsx("p", { className: "lt-alert", role: "alert", children: ae }),
    n.length === 0 ? /* @__PURE__ */ a.jsx("p", { className: "lt-empty", role: "status", children: "Nenhuma regra cadastrada ainda." }) : /* @__PURE__ */ a.jsxs("table", { className: "lt-table", children: [
      /* @__PURE__ */ a.jsx("thead", { children: /* @__PURE__ */ a.jsxs("tr", { children: [
        /* @__PURE__ */ a.jsx("th", { children: "Rótulo" }),
        /* @__PURE__ */ a.jsx("th", { children: "Condição" }),
        /* @__PURE__ */ a.jsx("th", { children: "Justificativa" }),
        /* @__PURE__ */ a.jsx("th", { children: "Ativa" }),
        /* @__PURE__ */ a.jsx("th", {})
      ] }) }),
      /* @__PURE__ */ a.jsx("tbody", { children: n.map((N) => /* @__PURE__ */ a.jsxs("tr", { children: [
        /* @__PURE__ */ a.jsx("td", { children: N.opportunity_type }),
        /* @__PURE__ */ a.jsx("td", { children: nm(N) }),
        /* @__PURE__ */ a.jsx("td", { children: N.justification }),
        /* @__PURE__ */ a.jsx("td", { children: N.active ? "Sim" : "Não" }),
        /* @__PURE__ */ a.jsx("td", { children: /* @__PURE__ */ a.jsx("button", { type: "button", className: "lt-btn", onClick: () => E(N), disabled: F === N.id, children: F === N.id ? "Removendo…" : "Remover" }) })
      ] }, N.id)) })
    ] })
  ] });
}
const lm = { connected: "🟢", failed: "🔴", unknown: "🔴" }, Pi = {
  connected: "Conectado",
  failed: "Desconectado",
  unknown: "Desconectado"
};
function am({ source: e, onChange: t }) {
  const [n, r] = g.useState(e.enabled === !0), [l, o] = g.useState({}), [s, i] = g.useState(e.last_check), [u, d] = g.useState(!1), [f, v] = g.useState(null), h = async (x) => {
    d(!0);
    try {
      const _ = await Dp(x);
      i(_);
    } catch (_) {
      i({ status: "failed", message: _ instanceof Error ? _.message : "Falha ao testar conexão." });
    } finally {
      d(!1);
    }
  }, j = async () => {
    if (!e.implemented) return;
    const x = !n;
    if (r(x), !x) {
      d(!0), v(null);
      try {
        const _ = await yi(e.id, !1, {});
        t(_), i({ status: "unknown", message: "" });
      } catch (_) {
        v(_ instanceof Error ? _.message : "Falha ao salvar.");
      } finally {
        d(!1);
      }
    }
  }, y = async () => {
    d(!0), v(null);
    try {
      const x = await yi(e.id, !0, l);
      t(x), o({}), await h(e.id);
    } catch (x) {
      v(x instanceof Error ? x.message : "Falha ao salvar.");
    } finally {
      d(!1);
    }
  };
  return /* @__PURE__ */ a.jsxs("div", { className: "lt-source-card", children: [
    /* @__PURE__ */ a.jsxs("div", { className: "lt-source-card__header", children: [
      /* @__PURE__ */ a.jsxs("div", { children: [
        /* @__PURE__ */ a.jsx("p", { className: "lt-source-card__title", children: e.label }),
        !e.implemented && /* @__PURE__ */ a.jsx("p", { className: "lt-hint", children: "Em breve" })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: "lt-source-card__status", children: [
        e.enabled !== null && e.implemented && /* @__PURE__ */ a.jsxs("span", { className: "lt-conn-indicator", "aria-label": Pi[s.status], children: [
          lm[s.status],
          " ",
          Pi[s.status]
        ] }),
        e.enabled === null ? /* @__PURE__ */ a.jsx("span", { className: "lt-hint", children: "Sempre disponível" }) : /* @__PURE__ */ a.jsxs("label", { className: "lt-toggle", children: [
          /* @__PURE__ */ a.jsx(
            "input",
            {
              type: "checkbox",
              className: "lt-toggle__input",
              checked: n,
              disabled: u || !e.implemented,
              onChange: j,
              "aria-label": `Fonte ${e.label}`
            }
          ),
          /* @__PURE__ */ a.jsx("span", { className: "lt-toggle__track", children: /* @__PURE__ */ a.jsx("span", { className: "lt-toggle__knob" }) }),
          /* @__PURE__ */ a.jsx("span", { children: n ? "Ligado" : "Desligado" })
        ] })
      ] })
    ] }),
    s.status === "failed" && e.enabled && /* @__PURE__ */ a.jsx("p", { className: "lt-alert", role: "alert", children: s.message }),
    f && /* @__PURE__ */ a.jsx("p", { className: "lt-alert", role: "alert", children: f }),
    e.enabled !== null && /* @__PURE__ */ a.jsxs("div", { className: "lt-source-card__form", children: [
      e.fields.map((x) => /* @__PURE__ */ a.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ a.jsx("span", { children: x.label }),
        /* @__PURE__ */ a.jsx(
          "input",
          {
            type: x.secret ? "password" : "text",
            placeholder: x.has_value ? "••••••••" : "",
            disabled: !n,
            onChange: (_) => o((p) => ({ ...p, [x.key]: _.target.value }))
          }
        ),
        /* @__PURE__ */ a.jsx("span", { className: "lt-hint", children: x.help_text })
      ] }, x.key)),
      /* @__PURE__ */ a.jsx("div", { className: "lt-detail-actions", children: /* @__PURE__ */ a.jsx("button", { type: "button", className: "lt-btn", onClick: y, disabled: u || !n, children: "Salvar e conectar" }) })
    ] })
  ] });
}
function om() {
  const [e, t] = g.useState(""), [n, r] = g.useState(""), [l, o] = g.useState(""), [s, i] = g.useState(!1), [u, d] = g.useState(null), [f, v] = g.useState(null), [h, j] = g.useState(null);
  g.useEffect(() => {
    Promise.all([Op(), Fp()]).then(([_, p]) => {
      t(String(_.days)), r(String(p.min_score)), o(String(p.daily_cap)), i(!0);
    }).catch((_) => d(_ instanceof Error ? _.message : "Não consegui carregar os limites configurados."));
  }, []);
  const y = async () => {
    j("sla"), d(null), v(null);
    try {
      const _ = await Ip(Number(e));
      t(String(_.days)), v("Prazo de triagem salvo.");
    } catch (_) {
      d(_ instanceof Error ? _.message : "Falha ao salvar o prazo de triagem.");
    } finally {
      j(null);
    }
  }, x = async () => {
    j("geo"), d(null), v(null);
    try {
      const _ = await bp(Number(n), Number(l));
      r(String(_.min_score)), o(String(_.daily_cap)), v("Limites de promoção geográfica salvos.");
    } catch (_) {
      d(_ instanceof Error ? _.message : "Falha ao salvar os limites de promoção geográfica.");
    } finally {
      j(null);
    }
  };
  return u && !s ? /* @__PURE__ */ a.jsx("p", { className: "lt-alert", role: "alert", children: u }) : s ? /* @__PURE__ */ a.jsxs("div", { className: "lt-source-card", children: [
    /* @__PURE__ */ a.jsx("div", { className: "lt-source-card__header", children: /* @__PURE__ */ a.jsxs("div", { className: "lt-header-row", children: [
      /* @__PURE__ */ a.jsx("p", { className: "lt-source-card__title", children: "Limites e prazos" }),
      /* @__PURE__ */ a.jsx(We, { text: "Controla quando uma oportunidade conta como atrasada na triagem e quantas descobertas de geolocalização entram automaticamente por dia." })
    ] }) }),
    /* @__PURE__ */ a.jsxs("div", { className: "lt-source-card__form", children: [
      /* @__PURE__ */ a.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ a.jsx("span", { children: "Prazo de triagem (dias)" }),
        /* @__PURE__ */ a.jsx(
          "input",
          {
            type: "number",
            min: 1,
            value: e,
            onChange: (_) => t(_.target.value)
          }
        ),
        /* @__PURE__ */ a.jsx("span", { className: "lt-hint", children: 'Detectada sem virar qualificada nem descartada depois desse prazo conta como "triagem atrasada" no dashboard.' })
      ] }),
      /* @__PURE__ */ a.jsx("div", { className: "lt-detail-actions", children: /* @__PURE__ */ a.jsx("button", { type: "button", className: "lt-btn", onClick: y, disabled: h === "sla", children: h === "sla" ? "Salvando…" : "Salvar prazo de triagem" }) }),
      /* @__PURE__ */ a.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ a.jsx("span", { children: "Score mínimo pra promoção automática" }),
        /* @__PURE__ */ a.jsx(
          "input",
          {
            type: "number",
            min: 0,
            max: 1,
            step: 0.01,
            value: n,
            onChange: (_) => r(_.target.value)
          }
        ),
        /* @__PURE__ */ a.jsx("span", { className: "lt-hint", children: "De 0.0 a 1.0 — quanto maior, mais seletiva a promoção automática." })
      ] }),
      /* @__PURE__ */ a.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ a.jsx("span", { children: "Limite diário de promoções automáticas" }),
        /* @__PURE__ */ a.jsx(
          "input",
          {
            type: "number",
            min: 1,
            value: l,
            onChange: (_) => o(_.target.value)
          }
        ),
        /* @__PURE__ */ a.jsx("span", { className: "lt-hint", children: "Teto de descobertas geográficas promovidas automaticamente por dia." })
      ] }),
      /* @__PURE__ */ a.jsx("div", { className: "lt-detail-actions", children: /* @__PURE__ */ a.jsx("button", { type: "button", className: "lt-btn", onClick: x, disabled: h === "geo", children: h === "geo" ? "Salvando…" : "Salvar limites de promoção geográfica" }) }),
      u && /* @__PURE__ */ a.jsx("p", { className: "lt-alert", role: "alert", children: u }),
      f && /* @__PURE__ */ a.jsx("p", { className: "lt-hint", role: "status", children: f })
    ] })
  ] }) : /* @__PURE__ */ a.jsx("p", { className: "lt-hint", children: "Carregando…" });
}
function sm(e) {
  if (e.length === 0) return "Nenhuma fonte habilitada — ligue uma fonte acima antes de sincronizar.";
  const t = e.reduce((o, s) => o + s.companiesSynced, 0), n = e.reduce((o, s) => o + s.contactsSynced, 0), r = e.flatMap((o) => o.errors), l = `${t} empresa(s) e ${n} contato(s) sincronizados.`;
  return r.length > 0 ? `${l} Alguns erros: ${r.join("; ")}` : l;
}
function im() {
  var x;
  const [e, t] = g.useState(null), [n, r] = g.useState(null), [l, o] = g.useState(!1), [s, i] = g.useState(null), [u, d] = g.useState(null), [f, v] = g.useState(null), [h, j] = g.useState(null);
  g.useEffect(() => {
    zp().then(t).catch((_) => r(_ instanceof Error ? _.message : "Não consegui carregar as configurações.")), Promise.all([qc(), th()]).then(([_, p]) => {
      d(_), v(p);
    }).catch((_) => j(_ instanceof Error ? _.message : "Não consegui carregar o portfólio."));
  }, []);
  const y = async () => {
    o(!0), i(null);
    try {
      const _ = await Vp();
      i(sm(_));
    } catch (_) {
      i(_ instanceof Error ? _.message : "Falha ao sincronizar.");
    } finally {
      o(!1);
    }
  };
  return n ? /* @__PURE__ */ a.jsx("p", { className: "lt-alert", role: "alert", children: n }) : e ? /* @__PURE__ */ a.jsxs("div", { children: [
    /* @__PURE__ */ a.jsxs("div", { className: "lt-header lt-header-row", children: [
      /* @__PURE__ */ a.jsx("h2", { children: "Configurações de Fontes" }),
      /* @__PURE__ */ a.jsx(We, { text: "Ligue as fontes de dados que o Lead.Tracker deve usar para encontrar oportunidades." })
    ] }),
    /* @__PURE__ */ a.jsx("div", { className: "lt-toolbar", children: /* @__PURE__ */ a.jsx("button", { type: "button", className: "lt-btn", onClick: y, disabled: l, "aria-busy": l, children: l ? "Sincronizando…" : "Atualizar dados" }) }),
    s && /* @__PURE__ */ a.jsx("p", { className: "lt-hint", role: "status", children: s }),
    /* @__PURE__ */ a.jsxs("div", { className: "lt-source-grid", children: [
      /* @__PURE__ */ a.jsx(Xh, {}),
      e.map((_) => /* @__PURE__ */ a.jsx(
        am,
        {
          source: _,
          onChange: (p) => t((c) => c.map((m) => m.id === p.id ? p : m))
        },
        _.id
      ))
    ] }),
    ((x = e.find((_) => _.id === "salesforce")) == null ? void 0 : x.enabled) && /* @__PURE__ */ a.jsx(Jh, {}),
    /* @__PURE__ */ a.jsx(Yh, {}),
    /* @__PURE__ */ a.jsx(om, {}),
    /* @__PURE__ */ a.jsx(
      Zh,
      {
        products: u,
        services: f,
        loadError: h,
        onProductCreated: (_) => d((p) => [...p ?? [], _]),
        onServiceCreated: (_) => v((p) => [...p ?? [], _]),
        onProductDeleted: (_) => d((p) => (p ?? []).filter((c) => c.id !== _)),
        onServiceDeleted: (_) => v((p) => (p ?? []).filter((c) => c.id !== _))
      }
    ),
    /* @__PURE__ */ a.jsx(rm, { products: u ?? [], services: f ?? [] }),
    /* @__PURE__ */ a.jsx(tm, {})
  ] }) : /* @__PURE__ */ a.jsx("p", { className: "lt-hint", children: "Carregando..." });
}
const um = `
/* Base 12px: qualquer texto sem classe própria (ex.: <strong>/<p> soltos
   dentro de um card) cai nesse tamanho em vez do padrão do navegador
   (~16px) — antes disso, elementos sem regra explícita destoavam do
   resto da escala (10/11/12/13/15/18px) por herdarem o default do
   navegador. Achado de auditoria de UX. */
.lt-root { padding: 24px; font-family: inherit; font-size: 12px; color: hsl(var(--text)); color-scheme: light; }
.theme-dark .lt-root { color-scheme: dark; }
.lt-header { margin-bottom: 16px; }
.lt-header h2 { font-size: 15px; font-weight: 600; margin: 0 0 4px; }
.lt-header p { font-size: 11px; color: hsl(var(--text-muted)); margin: 0; }
.lt-header-row { display: flex; align-items: center; gap: 6px; }
.lt-header-row h2, .lt-header-row h3 { margin: 0; }

/* Achado do usuário: card com explicação sempre visível vira um botão
   "(i)" no canto — clicável (funciona por teclado/toque, não só hover). */
.lt-info-hint { position: relative; display: inline-flex; flex: none; }
.lt-info-hint__btn {
  all: unset; cursor: pointer; width: 15px; height: 15px; border-radius: 999px;
  border: 1px solid hsl(var(--border)); color: hsl(var(--text-muted)); font-size: 9px;
  font-weight: 700; font-style: italic; display: inline-flex; align-items: center;
  justify-content: center; line-height: 1;
}
.lt-info-hint__btn:hover { background: hsl(var(--bg-subtle)); color: hsl(var(--text)); }
.lt-info-hint__btn:focus-visible { outline: 2px solid hsl(var(--accent)); outline-offset: 2px; }
.lt-info-hint__popover {
  position: absolute; top: 100%; left: 0; margin-top: 4px; z-index: 20;
  width: 220px; padding: 8px 10px; border-radius: 6px; font-size: 11px; font-weight: 400;
  font-style: normal; text-align: left; background: hsl(var(--bg-elevated));
  border: 1px solid hsl(var(--border)); color: hsl(var(--text));
  box-shadow: 0 4px 12px hsl(0 0% 0% / 0.15);
}
/* StatTile fica na borda direita de uma grade estreita — abrir pra
   esquerda evita invadir a coluna seguinte (a maioria dos outros usos de
   InfoHint fica perto da borda esquerda da página, onde abrir pra
   esquerda invadiria o menu lateral fixo do Core). */
.lt-stat-tile__top .lt-info-hint__popover { left: auto; right: 0; }

.lt-filters { display: flex; flex-wrap: wrap; gap: 12px; margin-bottom: 16px; }

.lt-table { width: 100%; border-collapse: collapse; font-size: 12px; }
.lt-table th { text-align: left; padding: 8px; border-bottom: 1px solid hsl(var(--border)); color: hsl(var(--text-muted)); font-weight: 500; }
.lt-table th button {
  all: unset; cursor: pointer; display: inline-flex; align-items: center; gap: 4px;
}
.lt-table th button:focus-visible { outline: 2px solid hsl(var(--accent)); outline-offset: 2px; }
.lt-table td { padding: 8px; border-bottom: 1px solid hsl(var(--border-subtle)); vertical-align: top; }
.lt-table tbody tr:hover { background: hsl(var(--bg-subtle)); }

.lt-badge { display: inline-flex; align-items: center; gap: 4px; padding: 2px 8px; border-radius: 999px; font-size: 10px; font-weight: 600; }
.lt-badge--customer { background: hsl(var(--success) / 0.15); color: hsl(var(--success)); }
.lt-badge--prospect { background: hsl(var(--bg-subtle)); color: hsl(var(--text-muted)); border: 1px solid hsl(var(--border)); }
.lt-badge--severity-baixo { background: hsl(var(--success) / 0.15); color: hsl(var(--success)); }
.lt-badge--severity-medio { background: hsl(var(--warning) / 0.15); color: hsl(var(--warning)); }
.lt-badge--severity-alto { background: hsl(var(--warning) / 0.25); color: hsl(var(--warning)); }
.lt-badge--severity-critico { background: hsl(var(--danger) / 0.15); color: hsl(var(--danger)); }
.lt-badge--severity-nao_avaliado { background: hsl(var(--bg-subtle)); color: hsl(var(--text-muted)); border: 1px solid hsl(var(--border)); }
.lt-badge--health-verde { background: hsl(var(--success) / 0.15); color: hsl(var(--success)); }
.lt-badge--health-amarela { background: hsl(var(--warning) / 0.15); color: hsl(var(--warning)); }
.lt-badge--health-vermelha { background: hsl(var(--danger) / 0.15); color: hsl(var(--danger)); }
.lt-badge--health-dados_insuficientes { background: hsl(var(--bg-subtle)); color: hsl(var(--text-muted)); border: 1px solid hsl(var(--border)); }
.lt-badge--discovery-promoted { background: hsl(var(--success) / 0.15); color: hsl(var(--success)); }
.lt-badge--discovery-deferred { background: hsl(var(--warning) / 0.15); color: hsl(var(--warning)); }
.lt-badge--discovery-rejected { background: hsl(var(--bg-subtle)); color: hsl(var(--text-muted)); border: 1px solid hsl(var(--border)); }

.lt-severity { display: flex; flex-wrap: wrap; align-items: flex-end; gap: 12px; margin-bottom: 12px; }

/* Achado da auditoria de UI: bloco de conteúdo empilhado (título/texto +,
   opcionalmente, uma linha curta de controles) — nunca uma linha de campos
   de formulário como .lt-severity acima, que tem flex-direction:row e
   quebrava alinhamento quando misturado com texto de largura variável. */
.lt-panel { display: flex; flex-direction: column; gap: 8px; margin-bottom: 12px; }
.lt-panel > strong { font-size: 11px; font-weight: 600; color: hsl(var(--text)); }
.lt-panel-text { margin: 0; font-size: 11px; }
.lt-panel-row { display: flex; flex-wrap: wrap; align-items: center; gap: 12px; }

.lt-expand-btn { all: unset; cursor: pointer; padding: 4px; border-radius: 4px; }
.lt-expand-btn:focus-visible { outline: 2px solid hsl(var(--accent)); outline-offset: 2px; }

.lt-detail { background: hsl(var(--bg-elevated)); padding: 12px 16px; }
.lt-detail dl { display: grid; grid-template-columns: max-content 1fr; gap: 4px 12px; margin: 0 0 12px; }
.lt-detail dt { color: hsl(var(--text-muted)); }
.lt-detail dd { margin: 0; }
.lt-detail-actions { display: flex; gap: 8px; }
.lt-btn {
  font-size: 11px; padding: 6px 10px; border-radius: 6px; cursor: pointer;
  border: 1px solid hsl(var(--border)); background: hsl(var(--bg)); color: hsl(var(--text));
}
.lt-btn:hover { background: hsl(var(--bg-subtle)); }
.lt-btn:focus-visible { outline: 2px solid hsl(var(--accent)); outline-offset: 2px; }
.lt-btn:disabled { opacity: 0.6; cursor: not-allowed; }
.lt-hint { font-size: 11px; color: hsl(var(--text-muted)); margin-top: 6px; }
.lt-alert { font-size: 11px; font-weight: 600; color: hsl(var(--danger)); margin-top: 6px; }
.lt-advisory { font-size: 11px; font-weight: 600; color: hsl(var(--warning)); margin: 0; }

.lt-draft { margin-top: 12px; padding: 12px; border-radius: 6px; background: hsl(var(--bg)); border: 1px solid hsl(var(--border)); font-size: 11px; }
.lt-draft p { margin: 0 0 8px; }

.lt-toolbar { display: flex; align-items: center; justify-content: flex-end; gap: 8px; margin-bottom: 12px; }

.lt-empty { text-align: center; padding: 48px 16px; color: hsl(var(--text-muted)); font-size: 12px; }

.lt-tabs { display: flex; gap: 4px; margin-bottom: 16px; border-bottom: 1px solid hsl(var(--border)); }
.lt-tab {
  all: unset; cursor: pointer; padding: 8px 12px; font-size: 12px; color: hsl(var(--text-muted));
  border-bottom: 2px solid transparent;
}
.lt-tab[aria-selected="true"] { color: hsl(var(--text)); border-bottom-color: hsl(var(--accent)); font-weight: 600; }
.lt-tab:focus-visible { outline: 2px solid hsl(var(--accent)); outline-offset: 2px; }

.lt-stat-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 12px; margin-bottom: 20px; }
.lt-stat-tile { border: 1px solid hsl(var(--border-subtle)); border-radius: 8px; padding: 12px; background: hsl(var(--bg-elevated)); }
.lt-stat-tile__top { display: flex; align-items: flex-start; justify-content: space-between; gap: 6px; }
.lt-stat-tile__value { font-size: 18px; font-weight: 600; color: hsl(var(--text)); }
.lt-stat-tile__label { font-size: 10px; color: hsl(var(--text-muted)); margin-top: 2px; }

.lt-chart-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; }
.lt-chart-card { border: 1px solid hsl(var(--border-subtle)); border-radius: 8px; padding: 16px; background: hsl(var(--bg-elevated)); }
.lt-chart-card h3 { font-size: 12px; font-weight: 600; margin: 0 0 12px; color: hsl(var(--text)); }
.lt-chart-card--wide { grid-column: 1 / -1; }

.lt-source-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 12px; }
.lt-source-card { border: 1px solid hsl(var(--border-subtle)); border-radius: 8px; padding: 16px; background: hsl(var(--bg-elevated)); }
.lt-source-card__header { display: flex; justify-content: space-between; align-items: flex-start; gap: 12px; }
.lt-source-card__title { font-size: 13px; font-weight: 600; margin: 0; color: hsl(var(--text)); }
.lt-source-card__status { display: flex; flex-direction: column; align-items: flex-end; gap: 6px; }
.lt-conn-indicator { font-size: 11px; color: hsl(var(--text-muted)); white-space: nowrap; }
.lt-toggle { display: flex; align-items: center; gap: 6px; font-size: 11px; cursor: pointer; }
.lt-toggle__input { position: absolute; width: 1px; height: 1px; opacity: 0; pointer-events: none; }
.lt-toggle__track {
  position: relative; flex: none; width: 32px; height: 18px; border-radius: 999px;
  background: hsl(var(--border)); transition: background 0.15s;
}
.lt-toggle__knob {
  position: absolute; top: 2px; left: 2px; width: 14px; height: 14px; border-radius: 50%;
  background: hsl(var(--bg)); box-shadow: 0 1px 2px hsl(0 0% 0% / 0.3); transition: transform 0.15s;
}
.lt-toggle__input:checked + .lt-toggle__track { background: hsl(var(--success)); }
.lt-toggle__input:checked + .lt-toggle__track .lt-toggle__knob { transform: translateX(14px); }
.lt-toggle__input:disabled + .lt-toggle__track { opacity: 0.5; cursor: not-allowed; }
.lt-toggle__input:focus-visible + .lt-toggle__track { outline: 2px solid hsl(var(--accent)); outline-offset: 2px; }
.lt-source-card__form { margin-top: 12px; display: flex; flex-direction: column; gap: 10px; }
/* Definição canônica de "campo com rótulo": única fonte de estilo pra
   label+input/select/textarea em todo o módulo. Containers de layout
   (.lt-filters, .lt-severity, .lt-panel, .lt-toolbar) nunca estilizam o
   label/controle filho — só .lt-field faz isso, aplicado ao label inteiro
   pra cobrir tanto texto solto (label>texto+controle, ex. Filters.tsx, que
   usa htmlFor/id em vez de aninhar) quanto o padrão <span>Rótulo</span>. */
.lt-field { display: flex; flex-direction: column; gap: 4px; font-size: 11px; font-weight: 600; color: hsl(var(--text-muted)); }
.lt-field input, .lt-field select, .lt-field textarea {
  font-size: 12px; font-weight: 400; padding: 6px 8px; border-radius: 6px;
  border: 1px solid hsl(var(--border)); background: hsl(var(--bg)); color: hsl(var(--text));
}
.lt-field textarea { min-height: 60px; resize: vertical; font-family: inherit; }
`;
function cm() {
  const [e, t] = g.useState(null), [n, r] = g.useState(null), [l, o] = g.useState(Ch), [s, i] = g.useState(null), [u, d] = g.useState(null), [f, v] = g.useState(() => localStorage.getItem("lt_rep_id") ?? ""), h = (c) => {
    v(c), localStorage.setItem("lt_rep_id", c);
  }, j = () => {
    Mp().then(t).catch((c) => r(c instanceof Error ? c.message : "Não consegui carregar as oportunidades."));
  };
  g.useEffect(j, []);
  const y = e ? zh(e, l) : [], x = (c) => {
    t((m) => m && m.map((S) => S.id === c.id ? c : S));
  }, _ = () => j(), p = async (c) => {
    i(null), d(c);
    try {
      const m = Th(l);
      c === "pdf" ? await kp(y, m) : await Ep(y);
    } catch (m) {
      i(m instanceof Error ? m.message : "Falha ao exportar.");
    } finally {
      d(null);
    }
  };
  return n ? /* @__PURE__ */ a.jsx("p", { className: "lt-alert", role: "alert", children: n }) : e ? /* @__PURE__ */ a.jsxs("div", { children: [
    /* @__PURE__ */ a.jsxs("div", { className: "lt-header", children: [
      /* @__PURE__ */ a.jsx("h2", { children: "Oportunidades" }),
      /* @__PURE__ */ a.jsxs("p", { children: [
        "Lead.Tracker · ",
        y.length,
        " de ",
        e.length,
        " oportunidades"
      ] })
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "lt-toolbar", children: [
      /* @__PURE__ */ a.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ a.jsx("span", { children: "Seu id de representante" }),
        /* @__PURE__ */ a.jsx("input", { value: f, onChange: (c) => h(c.target.value), placeholder: "Id ou nome do representante" })
      ] }),
      /* @__PURE__ */ a.jsx("button", { type: "button", className: "lt-btn", onClick: () => p("pdf"), disabled: u !== null, "aria-busy": u === "pdf", children: u === "pdf" ? "Gerando PDF…" : "PDF" }),
      /* @__PURE__ */ a.jsx("button", { type: "button", className: "lt-btn", onClick: () => p("excel"), disabled: u !== null, "aria-busy": u === "excel", children: u === "excel" ? "Gerando Excel…" : "Excel" })
    ] }),
    s && /* @__PURE__ */ a.jsx("p", { className: "lt-alert", role: "alert", children: s }),
    /* @__PURE__ */ a.jsx(Ph, { rows: e, value: l, onChange: o }),
    e.length === 0 ? /* @__PURE__ */ a.jsx("p", { className: "lt-empty", role: "status", children: "Nenhuma oportunidade ainda — rode uma sincronização em Configurações." }) : /* @__PURE__ */ a.jsx(
      Kh,
      {
        rows: y,
        repId: f,
        onRowUpdated: x,
        onRenewalDateUpdated: _
      }
    )
  ] }) : /* @__PURE__ */ a.jsx("p", { className: "lt-hint", children: "Carregando oportunidades…" });
}
const Ot = [
  { id: "dashboard", label: "Dashboard" },
  { id: "oportunidades", label: "Oportunidades" },
  { id: "prospeccao", label: "Prospecção" },
  { id: "configuracoes", label: "Configurações" }
];
function dm() {
  const [e, t] = g.useState("dashboard"), n = (r, l) => {
    var i;
    let o = null;
    if (r.key === "ArrowRight" ? o = (l + 1) % Ot.length : r.key === "ArrowLeft" ? o = (l - 1 + Ot.length) % Ot.length : r.key === "Home" ? o = 0 : r.key === "End" && (o = Ot.length - 1), o === null) return;
    r.preventDefault(), t(Ot[o].id);
    const s = (i = r.currentTarget.parentElement) == null ? void 0 : i.children[o];
    s == null || s.focus();
  };
  return /* @__PURE__ */ a.jsxs("div", { className: "lt-root", children: [
    /* @__PURE__ */ a.jsx("style", { children: um }),
    /* @__PURE__ */ a.jsx("div", { className: "lt-tabs", role: "tablist", "aria-label": "Navegação Lead.Tracker", children: Ot.map((r, l) => /* @__PURE__ */ a.jsx(
      "button",
      {
        type: "button",
        role: "tab",
        id: `lt-tab-${r.id}`,
        "aria-selected": e === r.id,
        "aria-controls": `lt-tabpanel-${r.id}`,
        tabIndex: e === r.id ? 0 : -1,
        className: "lt-tab",
        onClick: () => t(r.id),
        onKeyDown: (o) => n(o, l),
        children: r.label
      },
      r.id
    )) }),
    Ot.map((r) => /* @__PURE__ */ a.jsx(
      "div",
      {
        role: "tabpanel",
        id: `lt-tabpanel-${r.id}`,
        "aria-labelledby": `lt-tab-${r.id}`,
        hidden: e !== r.id,
        children: e === r.id && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
          r.id === "dashboard" && /* @__PURE__ */ a.jsx(Eh, {}),
          r.id === "oportunidades" && /* @__PURE__ */ a.jsx(cm, {}),
          r.id === "prospeccao" && /* @__PURE__ */ a.jsx(Lh, {}),
          r.id === "configuracoes" && /* @__PURE__ */ a.jsx(im, {})
        ] })
      },
      r.id
    ))
  ] });
}
const fm = {
  moduleId: "lead_tracker",
  title: "Lead.Tracker",
  icon: "target",
  category: "Sales",
  vendor: "TechForge",
  route: "/modules/lead_tracker",
  description: "Opportunity Intelligence — tela de oportunidades."
};
let Ti = null;
function pm(e) {
  Ti = Bc(e), Ti.render(/* @__PURE__ */ a.jsx(dm, {}));
}
const hm = { render: pm, moduleConfig: fm };
export {
  hm as default
};
