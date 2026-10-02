// Tech.Forge Module Host contract: this bundle's `export default` is the render() entry point.
var Yi = { exports: {} }, ba = {}, Ji = { exports: {} }, U = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gr = Symbol.for("react.element"), Pd = Symbol.for("react.portal"), Td = Symbol.for("react.fragment"), Rd = Symbol.for("react.strict_mode"), zd = Symbol.for("react.profiler"), $d = Symbol.for("react.provider"), Ld = Symbol.for("react.context"), Od = Symbol.for("react.forward_ref"), Id = Symbol.for("react.suspense"), Dd = Symbol.for("react.memo"), Fd = Symbol.for("react.lazy"), xs = Symbol.iterator;
function Md(e) {
  return e === null || typeof e != "object" ? null : (e = xs && e[xs] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Xi = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Zi = Object.assign, eu = {};
function bn(e, t, n) {
  this.props = e, this.context = t, this.refs = eu, this.updater = n || Xi;
}
bn.prototype.isReactComponent = {};
bn.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
bn.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function tu() {
}
tu.prototype = bn.prototype;
function _o(e, t, n) {
  this.props = e, this.context = t, this.refs = eu, this.updater = n || Xi;
}
var wo = _o.prototype = new tu();
wo.constructor = _o;
Zi(wo, bn.prototype);
wo.isPureReactComponent = !0;
var ys = Array.isArray, nu = Object.prototype.hasOwnProperty, No = { current: null }, ru = { key: !0, ref: !0, __self: !0, __source: !0 };
function au(e, t, n) {
  var r, l = {}, o = null, s = null;
  if (t != null) for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (o = "" + t.key), t) nu.call(t, r) && !ru.hasOwnProperty(r) && (l[r] = t[r]);
  var i = arguments.length - 2;
  if (i === 1) l.children = n;
  else if (1 < i) {
    for (var u = Array(i), c = 0; c < i; c++) u[c] = arguments[c + 2];
    l.children = u;
  }
  if (e && e.defaultProps) for (r in i = e.defaultProps, i) l[r] === void 0 && (l[r] = i[r]);
  return { $$typeof: gr, type: e, key: o, ref: s, props: l, _owner: No.current };
}
function Ad(e, t) {
  return { $$typeof: gr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function ko(e) {
  return typeof e == "object" && e !== null && e.$$typeof === gr;
}
function Vd(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var js = /\/+/g;
function Wa(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Vd("" + e.key) : t.toString(36);
}
function Ur(e, t, n, r, l) {
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
        case gr:
        case Pd:
          s = !0;
      }
  }
  if (s) return s = e, l = l(s), e = r === "" ? "." + Wa(s, 0) : r, ys(l) ? (n = "", e != null && (n = e.replace(js, "$&/") + "/"), Ur(l, t, n, "", function(c) {
    return c;
  })) : l != null && (ko(l) && (l = Ad(l, n + (!l.key || s && s.key === l.key ? "" : ("" + l.key).replace(js, "$&/") + "/") + e)), t.push(l)), 1;
  if (s = 0, r = r === "" ? "." : r + ":", ys(e)) for (var i = 0; i < e.length; i++) {
    o = e[i];
    var u = r + Wa(o, i);
    s += Ur(o, t, n, u, l);
  }
  else if (u = Md(e), typeof u == "function") for (e = u.call(e), i = 0; !(o = e.next()).done; ) o = o.value, u = r + Wa(o, i++), s += Ur(o, t, n, u, l);
  else if (o === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return s;
}
function wr(e, t, n) {
  if (e == null) return e;
  var r = [], l = 0;
  return Ur(e, r, "", "", function(o) {
    return t.call(n, o, l++);
  }), r;
}
function Bd(e) {
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
var we = { current: null }, qr = { transition: null }, Ud = { ReactCurrentDispatcher: we, ReactCurrentBatchConfig: qr, ReactCurrentOwner: No };
function lu() {
  throw Error("act(...) is not supported in production builds of React.");
}
U.Children = { map: wr, forEach: function(e, t, n) {
  wr(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return wr(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return wr(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!ko(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
U.Component = bn;
U.Fragment = Td;
U.Profiler = zd;
U.PureComponent = _o;
U.StrictMode = Rd;
U.Suspense = Id;
U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ud;
U.act = lu;
U.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Zi({}, e.props), l = e.key, o = e.ref, s = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (o = t.ref, s = No.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var i = e.type.defaultProps;
    for (u in t) nu.call(t, u) && !ru.hasOwnProperty(u) && (r[u] = t[u] === void 0 && i !== void 0 ? i[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    i = Array(u);
    for (var c = 0; c < u; c++) i[c] = arguments[c + 2];
    r.children = i;
  }
  return { $$typeof: gr, type: e.type, key: l, ref: o, props: r, _owner: s };
};
U.createContext = function(e) {
  return e = { $$typeof: Ld, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: $d, _context: e }, e.Consumer = e;
};
U.createElement = au;
U.createFactory = function(e) {
  var t = au.bind(null, e);
  return t.type = e, t;
};
U.createRef = function() {
  return { current: null };
};
U.forwardRef = function(e) {
  return { $$typeof: Od, render: e };
};
U.isValidElement = ko;
U.lazy = function(e) {
  return { $$typeof: Fd, _payload: { _status: -1, _result: e }, _init: Bd };
};
U.memo = function(e, t) {
  return { $$typeof: Dd, type: e, compare: t === void 0 ? null : t };
};
U.startTransition = function(e) {
  var t = qr.transition;
  qr.transition = {};
  try {
    e();
  } finally {
    qr.transition = t;
  }
};
U.unstable_act = lu;
U.useCallback = function(e, t) {
  return we.current.useCallback(e, t);
};
U.useContext = function(e) {
  return we.current.useContext(e);
};
U.useDebugValue = function() {
};
U.useDeferredValue = function(e) {
  return we.current.useDeferredValue(e);
};
U.useEffect = function(e, t) {
  return we.current.useEffect(e, t);
};
U.useId = function() {
  return we.current.useId();
};
U.useImperativeHandle = function(e, t, n) {
  return we.current.useImperativeHandle(e, t, n);
};
U.useInsertionEffect = function(e, t) {
  return we.current.useInsertionEffect(e, t);
};
U.useLayoutEffect = function(e, t) {
  return we.current.useLayoutEffect(e, t);
};
U.useMemo = function(e, t) {
  return we.current.useMemo(e, t);
};
U.useReducer = function(e, t, n) {
  return we.current.useReducer(e, t, n);
};
U.useRef = function(e) {
  return we.current.useRef(e);
};
U.useState = function(e) {
  return we.current.useState(e);
};
U.useSyncExternalStore = function(e, t, n) {
  return we.current.useSyncExternalStore(e, t, n);
};
U.useTransition = function() {
  return we.current.useTransition();
};
U.version = "18.3.1";
Ji.exports = U;
var v = Ji.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qd = v, Hd = Symbol.for("react.element"), Qd = Symbol.for("react.fragment"), Wd = Object.prototype.hasOwnProperty, Kd = qd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Gd = { key: !0, ref: !0, __self: !0, __source: !0 };
function ou(e, t, n) {
  var r, l = {}, o = null, s = null;
  n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (s = t.ref);
  for (r in t) Wd.call(t, r) && !Gd.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: Hd, type: e, key: o, ref: s, props: l, _owner: Kd.current };
}
ba.Fragment = Qd;
ba.jsx = ou;
ba.jsxs = ou;
Yi.exports = ba;
var a = Yi.exports, su = { exports: {} }, Oe = {}, iu = { exports: {} }, uu = {};
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
  function t(E, A) {
    var V = E.length;
    E.push(A);
    e: for (; 0 < V; ) {
      var Q = V - 1 >>> 1, G = E[Q];
      if (0 < l(G, A)) E[Q] = A, E[V] = G, V = Q;
      else break e;
    }
  }
  function n(E) {
    return E.length === 0 ? null : E[0];
  }
  function r(E) {
    if (E.length === 0) return null;
    var A = E[0], V = E.pop();
    if (V !== A) {
      E[0] = V;
      e: for (var Q = 0, G = E.length, I = G >>> 1; Q < I; ) {
        var Z = 2 * (Q + 1) - 1, T = E[Z], fe = Z + 1, Te = E[fe];
        if (0 > l(T, V)) fe < G && 0 > l(Te, T) ? (E[Q] = Te, E[fe] = V, Q = fe) : (E[Q] = T, E[Z] = V, Q = Z);
        else if (fe < G && 0 > l(Te, V)) E[Q] = Te, E[fe] = V, Q = fe;
        else break e;
      }
    }
    return A;
  }
  function l(E, A) {
    var V = E.sortIndex - A.sortIndex;
    return V !== 0 ? V : E.id - A.id;
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
  var u = [], c = [], f = 1, p = null, x = 3, g = !1, _ = !1, j = !1, w = typeof setTimeout == "function" ? setTimeout : null, m = typeof clearTimeout == "function" ? clearTimeout : null, d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(E) {
    for (var A = n(c); A !== null; ) {
      if (A.callback === null) r(c);
      else if (A.startTime <= E) r(c), A.sortIndex = A.expirationTime, t(u, A);
      else break;
      A = n(c);
    }
  }
  function y(E) {
    if (j = !1, h(E), !_) if (n(u) !== null) _ = !0, B(S);
    else {
      var A = n(c);
      A !== null && K(y, A.startTime - E);
    }
  }
  function S(E, A) {
    _ = !1, j && (j = !1, m(P), P = -1), g = !0;
    var V = x;
    try {
      for (h(A), p = n(u); p !== null && (!(p.expirationTime > A) || E && !M()); ) {
        var Q = p.callback;
        if (typeof Q == "function") {
          p.callback = null, x = p.priorityLevel;
          var G = Q(p.expirationTime <= A);
          A = e.unstable_now(), typeof G == "function" ? p.callback = G : p === n(u) && r(u), h(A);
        } else r(u);
        p = n(u);
      }
      if (p !== null) var I = !0;
      else {
        var Z = n(c);
        Z !== null && K(y, Z.startTime - A), I = !1;
      }
      return I;
    } finally {
      p = null, x = V, g = !1;
    }
  }
  var N = !1, b = null, P = -1, R = 5, C = -1;
  function M() {
    return !(e.unstable_now() - C < R);
  }
  function oe() {
    if (b !== null) {
      var E = e.unstable_now();
      C = E;
      var A = !0;
      try {
        A = b(!0, E);
      } finally {
        A ? L() : (N = !1, b = null);
      }
    } else N = !1;
  }
  var L;
  if (typeof d == "function") L = function() {
    d(oe);
  };
  else if (typeof MessageChannel < "u") {
    var te = new MessageChannel(), H = te.port2;
    te.port1.onmessage = oe, L = function() {
      H.postMessage(null);
    };
  } else L = function() {
    w(oe, 0);
  };
  function B(E) {
    b = E, N || (N = !0, L());
  }
  function K(E, A) {
    P = w(function() {
      E(e.unstable_now());
    }, A);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(E) {
    E.callback = null;
  }, e.unstable_continueExecution = function() {
    _ || g || (_ = !0, B(S));
  }, e.unstable_forceFrameRate = function(E) {
    0 > E || 125 < E ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : R = 0 < E ? Math.floor(1e3 / E) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return x;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(u);
  }, e.unstable_next = function(E) {
    switch (x) {
      case 1:
      case 2:
      case 3:
        var A = 3;
        break;
      default:
        A = x;
    }
    var V = x;
    x = A;
    try {
      return E();
    } finally {
      x = V;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(E, A) {
    switch (E) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        E = 3;
    }
    var V = x;
    x = E;
    try {
      return A();
    } finally {
      x = V;
    }
  }, e.unstable_scheduleCallback = function(E, A, V) {
    var Q = e.unstable_now();
    switch (typeof V == "object" && V !== null ? (V = V.delay, V = typeof V == "number" && 0 < V ? Q + V : Q) : V = Q, E) {
      case 1:
        var G = -1;
        break;
      case 2:
        G = 250;
        break;
      case 5:
        G = 1073741823;
        break;
      case 4:
        G = 1e4;
        break;
      default:
        G = 5e3;
    }
    return G = V + G, E = { id: f++, callback: A, priorityLevel: E, startTime: V, expirationTime: G, sortIndex: -1 }, V > Q ? (E.sortIndex = V, t(c, E), n(u) === null && E === n(c) && (j ? (m(P), P = -1) : j = !0, K(y, V - Q))) : (E.sortIndex = G, t(u, E), _ || g || (_ = !0, B(S))), E;
  }, e.unstable_shouldYield = M, e.unstable_wrapCallback = function(E) {
    var A = x;
    return function() {
      var V = x;
      x = A;
      try {
        return E.apply(this, arguments);
      } finally {
        x = V;
      }
    };
  };
})(uu);
iu.exports = uu;
var Yd = iu.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jd = v, Le = Yd;
function k(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var cu = /* @__PURE__ */ new Set(), Zn = {};
function Kt(e, t) {
  Sn(e, t), Sn(e + "Capture", t);
}
function Sn(e, t) {
  for (Zn[e] = t, e = 0; e < t.length; e++) cu.add(t[e]);
}
var ct = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), El = Object.prototype.hasOwnProperty, Xd = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Ss = {}, _s = {};
function Zd(e) {
  return El.call(_s, e) ? !0 : El.call(Ss, e) ? !1 : Xd.test(e) ? _s[e] = !0 : (Ss[e] = !0, !1);
}
function ep(e, t, n, r) {
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
function tp(e, t, n, r) {
  if (t === null || typeof t > "u" || ep(e, t, n, r)) return !0;
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
function Ne(e, t, n, r, l, o, s) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = s;
}
var ge = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  ge[e] = new Ne(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  ge[t] = new Ne(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  ge[e] = new Ne(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  ge[e] = new Ne(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  ge[e] = new Ne(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  ge[e] = new Ne(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  ge[e] = new Ne(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  ge[e] = new Ne(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  ge[e] = new Ne(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Co = /[\-:]([a-z])/g;
function Eo(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Co,
    Eo
  );
  ge[t] = new Ne(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Co, Eo);
  ge[t] = new Ne(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Co, Eo);
  ge[t] = new Ne(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  ge[e] = new Ne(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ge.xlinkHref = new Ne("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  ge[e] = new Ne(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function bo(e, t, n, r) {
  var l = ge.hasOwnProperty(t) ? ge[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (tp(t, n, l, r) && (n = null), r || l === null ? Zd(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var ht = Jd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Nr = Symbol.for("react.element"), en = Symbol.for("react.portal"), tn = Symbol.for("react.fragment"), Po = Symbol.for("react.strict_mode"), bl = Symbol.for("react.profiler"), du = Symbol.for("react.provider"), pu = Symbol.for("react.context"), To = Symbol.for("react.forward_ref"), Pl = Symbol.for("react.suspense"), Tl = Symbol.for("react.suspense_list"), Ro = Symbol.for("react.memo"), gt = Symbol.for("react.lazy"), fu = Symbol.for("react.offscreen"), ws = Symbol.iterator;
function Rn(e) {
  return e === null || typeof e != "object" ? null : (e = ws && e[ws] || e["@@iterator"], typeof e == "function" ? e : null);
}
var ae = Object.assign, Ka;
function Mn(e) {
  if (Ka === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Ka = t && t[1] || "";
  }
  return `
` + Ka + e;
}
var Ga = !1;
function Ya(e, t) {
  if (!e || Ga) return "";
  Ga = !0;
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
      } catch (c) {
        var r = c;
      }
      Reflect.construct(e, [], t);
    } else {
      try {
        t.call();
      } catch (c) {
        r = c;
      }
      e.call(t.prototype);
    }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (var l = c.stack.split(`
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
    Ga = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Mn(e) : "";
}
function np(e) {
  switch (e.tag) {
    case 5:
      return Mn(e.type);
    case 16:
      return Mn("Lazy");
    case 13:
      return Mn("Suspense");
    case 19:
      return Mn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Ya(e.type, !1), e;
    case 11:
      return e = Ya(e.type.render, !1), e;
    case 1:
      return e = Ya(e.type, !0), e;
    default:
      return "";
  }
}
function Rl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case tn:
      return "Fragment";
    case en:
      return "Portal";
    case bl:
      return "Profiler";
    case Po:
      return "StrictMode";
    case Pl:
      return "Suspense";
    case Tl:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case pu:
      return (e.displayName || "Context") + ".Consumer";
    case du:
      return (e._context.displayName || "Context") + ".Provider";
    case To:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case Ro:
      return t = e.displayName || null, t !== null ? t : Rl(e.type) || "Memo";
    case gt:
      t = e._payload, e = e._init;
      try {
        return Rl(e(t));
      } catch {
      }
  }
  return null;
}
function rp(e) {
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
      return Rl(t);
    case 8:
      return t === Po ? "StrictMode" : "Mode";
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
function Tt(e) {
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
function hu(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function ap(e) {
  var t = hu(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function kr(e) {
  e._valueTracker || (e._valueTracker = ap(e));
}
function mu(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = hu(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function ta(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function zl(e, t) {
  var n = t.checked;
  return ae({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Ns(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Tt(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function gu(e, t) {
  t = t.checked, t != null && bo(e, "checked", t, !1);
}
function $l(e, t) {
  gu(e, t);
  var n = Tt(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Ll(e, t.type, n) : t.hasOwnProperty("defaultValue") && Ll(e, t.type, Tt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function ks(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Ll(e, t, n) {
  (t !== "number" || ta(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var An = Array.isArray;
function hn(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Tt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        e[l].selected = !0, r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ol(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(k(91));
  return ae({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Cs(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(k(92));
      if (An(n)) {
        if (1 < n.length) throw Error(k(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: Tt(n) };
}
function vu(e, t) {
  var n = Tt(t.value), r = Tt(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Es(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function xu(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Il(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? xu(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Cr, yu = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, l);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (Cr = Cr || document.createElement("div"), Cr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Cr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function er(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var qn = {
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
}, lp = ["Webkit", "ms", "Moz", "O"];
Object.keys(qn).forEach(function(e) {
  lp.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), qn[t] = qn[e];
  });
});
function ju(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || qn.hasOwnProperty(e) && qn[e] ? ("" + t).trim() : t + "px";
}
function Su(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, l = ju(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
  }
}
var op = ae({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Dl(e, t) {
  if (t) {
    if (op[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(k(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(k(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(k(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(k(62));
  }
}
function Fl(e, t) {
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
var Ml = null;
function zo(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Al = null, mn = null, gn = null;
function bs(e) {
  if (e = yr(e)) {
    if (typeof Al != "function") throw Error(k(280));
    var t = e.stateNode;
    t && (t = $a(t), Al(e.stateNode, e.type, t));
  }
}
function _u(e) {
  mn ? gn ? gn.push(e) : gn = [e] : mn = e;
}
function wu() {
  if (mn) {
    var e = mn, t = gn;
    if (gn = mn = null, bs(e), t) for (e = 0; e < t.length; e++) bs(t[e]);
  }
}
function Nu(e, t) {
  return e(t);
}
function ku() {
}
var Ja = !1;
function Cu(e, t, n) {
  if (Ja) return e(t, n);
  Ja = !0;
  try {
    return Nu(e, t, n);
  } finally {
    Ja = !1, (mn !== null || gn !== null) && (ku(), wu());
  }
}
function tr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = $a(n);
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
var Vl = !1;
if (ct) try {
  var zn = {};
  Object.defineProperty(zn, "passive", { get: function() {
    Vl = !0;
  } }), window.addEventListener("test", zn, zn), window.removeEventListener("test", zn, zn);
} catch {
  Vl = !1;
}
function sp(e, t, n, r, l, o, s, i, u) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (f) {
    this.onError(f);
  }
}
var Hn = !1, na = null, ra = !1, Bl = null, ip = { onError: function(e) {
  Hn = !0, na = e;
} };
function up(e, t, n, r, l, o, s, i, u) {
  Hn = !1, na = null, sp.apply(ip, arguments);
}
function cp(e, t, n, r, l, o, s, i, u) {
  if (up.apply(this, arguments), Hn) {
    if (Hn) {
      var c = na;
      Hn = !1, na = null;
    } else throw Error(k(198));
    ra || (ra = !0, Bl = c);
  }
}
function Gt(e) {
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
function Eu(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function Ps(e) {
  if (Gt(e) !== e) throw Error(k(188));
}
function dp(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Gt(e), t === null) throw Error(k(188));
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
        if (o === n) return Ps(l), e;
        if (o === r) return Ps(l), t;
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
function bu(e) {
  return e = dp(e), e !== null ? Pu(e) : null;
}
function Pu(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Pu(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Tu = Le.unstable_scheduleCallback, Ts = Le.unstable_cancelCallback, pp = Le.unstable_shouldYield, fp = Le.unstable_requestPaint, se = Le.unstable_now, hp = Le.unstable_getCurrentPriorityLevel, $o = Le.unstable_ImmediatePriority, Ru = Le.unstable_UserBlockingPriority, aa = Le.unstable_NormalPriority, mp = Le.unstable_LowPriority, zu = Le.unstable_IdlePriority, Pa = null, tt = null;
function gp(e) {
  if (tt && typeof tt.onCommitFiberRoot == "function") try {
    tt.onCommitFiberRoot(Pa, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var We = Math.clz32 ? Math.clz32 : yp, vp = Math.log, xp = Math.LN2;
function yp(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (vp(e) / xp | 0) | 0;
}
var Er = 64, br = 4194304;
function Vn(e) {
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
function la(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, l = e.suspendedLanes, o = e.pingedLanes, s = n & 268435455;
  if (s !== 0) {
    var i = s & ~l;
    i !== 0 ? r = Vn(i) : (o &= s, o !== 0 && (r = Vn(o)));
  } else s = n & ~l, s !== 0 ? r = Vn(s) : o !== 0 && (r = Vn(o));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & l) && (l = r & -r, o = t & -t, l >= o || l === 16 && (o & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - We(t), l = 1 << n, r |= e[n], t &= ~l;
  return r;
}
function jp(e, t) {
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
function Sp(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var s = 31 - We(o), i = 1 << s, u = l[s];
    u === -1 ? (!(i & n) || i & r) && (l[s] = jp(i, t)) : u <= t && (e.expiredLanes |= i), o &= ~i;
  }
}
function Ul(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function $u() {
  var e = Er;
  return Er <<= 1, !(Er & 4194240) && (Er = 64), e;
}
function Xa(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function vr(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - We(t), e[t] = n;
}
function _p(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - We(n), o = 1 << l;
    t[l] = 0, r[l] = -1, e[l] = -1, n &= ~o;
  }
}
function Lo(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - We(n), l = 1 << r;
    l & t | e[r] & t && (e[r] |= t), n &= ~l;
  }
}
var W = 0;
function Lu(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Ou, Oo, Iu, Du, Fu, ql = !1, Pr = [], _t = null, wt = null, Nt = null, nr = /* @__PURE__ */ new Map(), rr = /* @__PURE__ */ new Map(), xt = [], wp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Rs(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      _t = null;
      break;
    case "dragenter":
    case "dragleave":
      wt = null;
      break;
    case "mouseover":
    case "mouseout":
      Nt = null;
      break;
    case "pointerover":
    case "pointerout":
      nr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      rr.delete(t.pointerId);
  }
}
function $n(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [l] }, t !== null && (t = yr(t), t !== null && Oo(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function Np(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return _t = $n(_t, e, t, n, r, l), !0;
    case "dragenter":
      return wt = $n(wt, e, t, n, r, l), !0;
    case "mouseover":
      return Nt = $n(Nt, e, t, n, r, l), !0;
    case "pointerover":
      var o = l.pointerId;
      return nr.set(o, $n(nr.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return o = l.pointerId, rr.set(o, $n(rr.get(o) || null, e, t, n, r, l)), !0;
  }
  return !1;
}
function Mu(e) {
  var t = Ft(e.target);
  if (t !== null) {
    var n = Gt(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Eu(n), t !== null) {
          e.blockedOn = t, Fu(e.priority, function() {
            Iu(n);
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
function Hr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Hl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Ml = r, n.target.dispatchEvent(r), Ml = null;
    } else return t = yr(n), t !== null && Oo(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function zs(e, t, n) {
  Hr(e) && n.delete(t);
}
function kp() {
  ql = !1, _t !== null && Hr(_t) && (_t = null), wt !== null && Hr(wt) && (wt = null), Nt !== null && Hr(Nt) && (Nt = null), nr.forEach(zs), rr.forEach(zs);
}
function Ln(e, t) {
  e.blockedOn === t && (e.blockedOn = null, ql || (ql = !0, Le.unstable_scheduleCallback(Le.unstable_NormalPriority, kp)));
}
function ar(e) {
  function t(l) {
    return Ln(l, e);
  }
  if (0 < Pr.length) {
    Ln(Pr[0], e);
    for (var n = 1; n < Pr.length; n++) {
      var r = Pr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (_t !== null && Ln(_t, e), wt !== null && Ln(wt, e), Nt !== null && Ln(Nt, e), nr.forEach(t), rr.forEach(t), n = 0; n < xt.length; n++) r = xt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < xt.length && (n = xt[0], n.blockedOn === null); ) Mu(n), n.blockedOn === null && xt.shift();
}
var vn = ht.ReactCurrentBatchConfig, oa = !0;
function Cp(e, t, n, r) {
  var l = W, o = vn.transition;
  vn.transition = null;
  try {
    W = 1, Io(e, t, n, r);
  } finally {
    W = l, vn.transition = o;
  }
}
function Ep(e, t, n, r) {
  var l = W, o = vn.transition;
  vn.transition = null;
  try {
    W = 4, Io(e, t, n, r);
  } finally {
    W = l, vn.transition = o;
  }
}
function Io(e, t, n, r) {
  if (oa) {
    var l = Hl(e, t, n, r);
    if (l === null) il(e, t, r, sa, n), Rs(e, r);
    else if (Np(l, e, t, n, r)) r.stopPropagation();
    else if (Rs(e, r), t & 4 && -1 < wp.indexOf(e)) {
      for (; l !== null; ) {
        var o = yr(l);
        if (o !== null && Ou(o), o = Hl(e, t, n, r), o === null && il(e, t, r, sa, n), o === l) break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else il(e, t, r, null, n);
  }
}
var sa = null;
function Hl(e, t, n, r) {
  if (sa = null, e = zo(r), e = Ft(e), e !== null) if (t = Gt(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Eu(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return sa = e, null;
}
function Au(e) {
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
      switch (hp()) {
        case $o:
          return 1;
        case Ru:
          return 4;
        case aa:
        case mp:
          return 16;
        case zu:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var jt = null, Do = null, Qr = null;
function Vu() {
  if (Qr) return Qr;
  var e, t = Do, n = t.length, r, l = "value" in jt ? jt.value : jt.textContent, o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++) ;
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === l[o - r]; r++) ;
  return Qr = l.slice(e, 1 < r ? 1 - r : void 0);
}
function Wr(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Tr() {
  return !0;
}
function $s() {
  return !1;
}
function Ie(e) {
  function t(n, r, l, o, s) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = o, this.target = s, this.currentTarget = null;
    for (var i in e) e.hasOwnProperty(i) && (n = e[i], this[i] = n ? n(o) : o[i]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Tr : $s, this.isPropagationStopped = $s, this;
  }
  return ae(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Tr);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Tr);
  }, persist: function() {
  }, isPersistent: Tr }), t;
}
var Pn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Fo = Ie(Pn), xr = ae({}, Pn, { view: 0, detail: 0 }), bp = Ie(xr), Za, el, On, Ta = ae({}, xr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Mo, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== On && (On && e.type === "mousemove" ? (Za = e.screenX - On.screenX, el = e.screenY - On.screenY) : el = Za = 0, On = e), Za);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : el;
} }), Ls = Ie(Ta), Pp = ae({}, Ta, { dataTransfer: 0 }), Tp = Ie(Pp), Rp = ae({}, xr, { relatedTarget: 0 }), tl = Ie(Rp), zp = ae({}, Pn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), $p = Ie(zp), Lp = ae({}, Pn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Op = Ie(Lp), Ip = ae({}, Pn, { data: 0 }), Os = Ie(Ip), Dp = {
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
}, Fp = {
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
}, Mp = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Ap(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Mp[e]) ? !!t[e] : !1;
}
function Mo() {
  return Ap;
}
var Vp = ae({}, xr, { key: function(e) {
  if (e.key) {
    var t = Dp[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Wr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Fp[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Mo, charCode: function(e) {
  return e.type === "keypress" ? Wr(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Wr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Bp = Ie(Vp), Up = ae({}, Ta, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Is = Ie(Up), qp = ae({}, xr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Mo }), Hp = Ie(qp), Qp = ae({}, Pn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Wp = Ie(Qp), Kp = ae({}, Ta, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Gp = Ie(Kp), Yp = [9, 13, 27, 32], Ao = ct && "CompositionEvent" in window, Qn = null;
ct && "documentMode" in document && (Qn = document.documentMode);
var Jp = ct && "TextEvent" in window && !Qn, Bu = ct && (!Ao || Qn && 8 < Qn && 11 >= Qn), Ds = " ", Fs = !1;
function Uu(e, t) {
  switch (e) {
    case "keyup":
      return Yp.indexOf(t.keyCode) !== -1;
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
function qu(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var nn = !1;
function Xp(e, t) {
  switch (e) {
    case "compositionend":
      return qu(t);
    case "keypress":
      return t.which !== 32 ? null : (Fs = !0, Ds);
    case "textInput":
      return e = t.data, e === Ds && Fs ? null : e;
    default:
      return null;
  }
}
function Zp(e, t) {
  if (nn) return e === "compositionend" || !Ao && Uu(e, t) ? (e = Vu(), Qr = Do = jt = null, nn = !1, e) : null;
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
      return Bu && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var ef = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Ms(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!ef[e.type] : t === "textarea";
}
function Hu(e, t, n, r) {
  _u(r), t = ia(t, "onChange"), 0 < t.length && (n = new Fo("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Wn = null, lr = null;
function tf(e) {
  nc(e, 0);
}
function Ra(e) {
  var t = ln(e);
  if (mu(t)) return e;
}
function nf(e, t) {
  if (e === "change") return t;
}
var Qu = !1;
if (ct) {
  var nl;
  if (ct) {
    var rl = "oninput" in document;
    if (!rl) {
      var As = document.createElement("div");
      As.setAttribute("oninput", "return;"), rl = typeof As.oninput == "function";
    }
    nl = rl;
  } else nl = !1;
  Qu = nl && (!document.documentMode || 9 < document.documentMode);
}
function Vs() {
  Wn && (Wn.detachEvent("onpropertychange", Wu), lr = Wn = null);
}
function Wu(e) {
  if (e.propertyName === "value" && Ra(lr)) {
    var t = [];
    Hu(t, lr, e, zo(e)), Cu(tf, t);
  }
}
function rf(e, t, n) {
  e === "focusin" ? (Vs(), Wn = t, lr = n, Wn.attachEvent("onpropertychange", Wu)) : e === "focusout" && Vs();
}
function af(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ra(lr);
}
function lf(e, t) {
  if (e === "click") return Ra(t);
}
function of(e, t) {
  if (e === "input" || e === "change") return Ra(t);
}
function sf(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Ge = typeof Object.is == "function" ? Object.is : sf;
function or(e, t) {
  if (Ge(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!El.call(t, l) || !Ge(e[l], t[l])) return !1;
  }
  return !0;
}
function Bs(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Us(e, t) {
  var n = Bs(e);
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
    n = Bs(n);
  }
}
function Ku(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Ku(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Gu() {
  for (var e = window, t = ta(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = ta(e.document);
  }
  return t;
}
function Vo(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function uf(e) {
  var t = Gu(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Ku(n.ownerDocument.documentElement, n)) {
    if (r !== null && Vo(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = n.textContent.length, o = Math.min(r.start, l);
        r = r.end === void 0 ? o : Math.min(r.end, l), !e.extend && o > r && (l = r, r = o, o = l), l = Us(n, o);
        var s = Us(
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
var cf = ct && "documentMode" in document && 11 >= document.documentMode, rn = null, Ql = null, Kn = null, Wl = !1;
function qs(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Wl || rn == null || rn !== ta(r) || (r = rn, "selectionStart" in r && Vo(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Kn && or(Kn, r) || (Kn = r, r = ia(Ql, "onSelect"), 0 < r.length && (t = new Fo("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = rn)));
}
function Rr(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var an = { animationend: Rr("Animation", "AnimationEnd"), animationiteration: Rr("Animation", "AnimationIteration"), animationstart: Rr("Animation", "AnimationStart"), transitionend: Rr("Transition", "TransitionEnd") }, al = {}, Yu = {};
ct && (Yu = document.createElement("div").style, "AnimationEvent" in window || (delete an.animationend.animation, delete an.animationiteration.animation, delete an.animationstart.animation), "TransitionEvent" in window || delete an.transitionend.transition);
function za(e) {
  if (al[e]) return al[e];
  if (!an[e]) return e;
  var t = an[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in Yu) return al[e] = t[n];
  return e;
}
var Ju = za("animationend"), Xu = za("animationiteration"), Zu = za("animationstart"), ec = za("transitionend"), tc = /* @__PURE__ */ new Map(), Hs = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function zt(e, t) {
  tc.set(e, t), Kt(t, [e]);
}
for (var ll = 0; ll < Hs.length; ll++) {
  var ol = Hs[ll], df = ol.toLowerCase(), pf = ol[0].toUpperCase() + ol.slice(1);
  zt(df, "on" + pf);
}
zt(Ju, "onAnimationEnd");
zt(Xu, "onAnimationIteration");
zt(Zu, "onAnimationStart");
zt("dblclick", "onDoubleClick");
zt("focusin", "onFocus");
zt("focusout", "onBlur");
zt(ec, "onTransitionEnd");
Sn("onMouseEnter", ["mouseout", "mouseover"]);
Sn("onMouseLeave", ["mouseout", "mouseover"]);
Sn("onPointerEnter", ["pointerout", "pointerover"]);
Sn("onPointerLeave", ["pointerout", "pointerover"]);
Kt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Kt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Kt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Kt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Kt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Kt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Bn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), ff = new Set("cancel close invalid load scroll toggle".split(" ").concat(Bn));
function Qs(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, cp(r, t, void 0, e), e.currentTarget = null;
}
function nc(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t) for (var s = r.length - 1; 0 <= s; s--) {
        var i = r[s], u = i.instance, c = i.currentTarget;
        if (i = i.listener, u !== o && l.isPropagationStopped()) break e;
        Qs(l, i, c), o = u;
      }
      else for (s = 0; s < r.length; s++) {
        if (i = r[s], u = i.instance, c = i.currentTarget, i = i.listener, u !== o && l.isPropagationStopped()) break e;
        Qs(l, i, c), o = u;
      }
    }
  }
  if (ra) throw e = Bl, ra = !1, Bl = null, e;
}
function J(e, t) {
  var n = t[Xl];
  n === void 0 && (n = t[Xl] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (rc(t, e, 2, !1), n.add(r));
}
function sl(e, t, n) {
  var r = 0;
  t && (r |= 4), rc(n, e, r, t);
}
var zr = "_reactListening" + Math.random().toString(36).slice(2);
function sr(e) {
  if (!e[zr]) {
    e[zr] = !0, cu.forEach(function(n) {
      n !== "selectionchange" && (ff.has(n) || sl(n, !1, e), sl(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[zr] || (t[zr] = !0, sl("selectionchange", !1, t));
  }
}
function rc(e, t, n, r) {
  switch (Au(t)) {
    case 1:
      var l = Cp;
      break;
    case 4:
      l = Ep;
      break;
    default:
      l = Io;
  }
  n = l.bind(null, t, n, e), l = void 0, !Vl || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
}
function il(e, t, n, r, l) {
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
        if (s = Ft(i), s === null) return;
        if (u = s.tag, u === 5 || u === 6) {
          r = o = s;
          continue e;
        }
        i = i.parentNode;
      }
    }
    r = r.return;
  }
  Cu(function() {
    var c = o, f = zo(n), p = [];
    e: {
      var x = tc.get(e);
      if (x !== void 0) {
        var g = Fo, _ = e;
        switch (e) {
          case "keypress":
            if (Wr(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = Bp;
            break;
          case "focusin":
            _ = "focus", g = tl;
            break;
          case "focusout":
            _ = "blur", g = tl;
            break;
          case "beforeblur":
          case "afterblur":
            g = tl;
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
            g = Ls;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = Tp;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = Hp;
            break;
          case Ju:
          case Xu:
          case Zu:
            g = $p;
            break;
          case ec:
            g = Wp;
            break;
          case "scroll":
            g = bp;
            break;
          case "wheel":
            g = Gp;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = Op;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = Is;
        }
        var j = (t & 4) !== 0, w = !j && e === "scroll", m = j ? x !== null ? x + "Capture" : null : x;
        j = [];
        for (var d = c, h; d !== null; ) {
          h = d;
          var y = h.stateNode;
          if (h.tag === 5 && y !== null && (h = y, m !== null && (y = tr(d, m), y != null && j.push(ir(d, y, h)))), w) break;
          d = d.return;
        }
        0 < j.length && (x = new g(x, _, null, n, f), p.push({ event: x, listeners: j }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (x = e === "mouseover" || e === "pointerover", g = e === "mouseout" || e === "pointerout", x && n !== Ml && (_ = n.relatedTarget || n.fromElement) && (Ft(_) || _[dt])) break e;
        if ((g || x) && (x = f.window === f ? f : (x = f.ownerDocument) ? x.defaultView || x.parentWindow : window, g ? (_ = n.relatedTarget || n.toElement, g = c, _ = _ ? Ft(_) : null, _ !== null && (w = Gt(_), _ !== w || _.tag !== 5 && _.tag !== 6) && (_ = null)) : (g = null, _ = c), g !== _)) {
          if (j = Ls, y = "onMouseLeave", m = "onMouseEnter", d = "mouse", (e === "pointerout" || e === "pointerover") && (j = Is, y = "onPointerLeave", m = "onPointerEnter", d = "pointer"), w = g == null ? x : ln(g), h = _ == null ? x : ln(_), x = new j(y, d + "leave", g, n, f), x.target = w, x.relatedTarget = h, y = null, Ft(f) === c && (j = new j(m, d + "enter", _, n, f), j.target = h, j.relatedTarget = w, y = j), w = y, g && _) t: {
            for (j = g, m = _, d = 0, h = j; h; h = Yt(h)) d++;
            for (h = 0, y = m; y; y = Yt(y)) h++;
            for (; 0 < d - h; ) j = Yt(j), d--;
            for (; 0 < h - d; ) m = Yt(m), h--;
            for (; d--; ) {
              if (j === m || m !== null && j === m.alternate) break t;
              j = Yt(j), m = Yt(m);
            }
            j = null;
          }
          else j = null;
          g !== null && Ws(p, x, g, j, !1), _ !== null && w !== null && Ws(p, w, _, j, !0);
        }
      }
      e: {
        if (x = c ? ln(c) : window, g = x.nodeName && x.nodeName.toLowerCase(), g === "select" || g === "input" && x.type === "file") var S = nf;
        else if (Ms(x)) if (Qu) S = of;
        else {
          S = af;
          var N = rf;
        }
        else (g = x.nodeName) && g.toLowerCase() === "input" && (x.type === "checkbox" || x.type === "radio") && (S = lf);
        if (S && (S = S(e, c))) {
          Hu(p, S, n, f);
          break e;
        }
        N && N(e, x, c), e === "focusout" && (N = x._wrapperState) && N.controlled && x.type === "number" && Ll(x, "number", x.value);
      }
      switch (N = c ? ln(c) : window, e) {
        case "focusin":
          (Ms(N) || N.contentEditable === "true") && (rn = N, Ql = c, Kn = null);
          break;
        case "focusout":
          Kn = Ql = rn = null;
          break;
        case "mousedown":
          Wl = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Wl = !1, qs(p, n, f);
          break;
        case "selectionchange":
          if (cf) break;
        case "keydown":
        case "keyup":
          qs(p, n, f);
      }
      var b;
      if (Ao) e: {
        switch (e) {
          case "compositionstart":
            var P = "onCompositionStart";
            break e;
          case "compositionend":
            P = "onCompositionEnd";
            break e;
          case "compositionupdate":
            P = "onCompositionUpdate";
            break e;
        }
        P = void 0;
      }
      else nn ? Uu(e, n) && (P = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
      P && (Bu && n.locale !== "ko" && (nn || P !== "onCompositionStart" ? P === "onCompositionEnd" && nn && (b = Vu()) : (jt = f, Do = "value" in jt ? jt.value : jt.textContent, nn = !0)), N = ia(c, P), 0 < N.length && (P = new Os(P, e, null, n, f), p.push({ event: P, listeners: N }), b ? P.data = b : (b = qu(n), b !== null && (P.data = b)))), (b = Jp ? Xp(e, n) : Zp(e, n)) && (c = ia(c, "onBeforeInput"), 0 < c.length && (f = new Os("onBeforeInput", "beforeinput", null, n, f), p.push({ event: f, listeners: c }), f.data = b));
    }
    nc(p, t);
  });
}
function ir(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ia(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e, o = l.stateNode;
    l.tag === 5 && o !== null && (l = o, o = tr(e, n), o != null && r.unshift(ir(e, o, l)), o = tr(e, t), o != null && r.push(ir(e, o, l))), e = e.return;
  }
  return r;
}
function Yt(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Ws(e, t, n, r, l) {
  for (var o = t._reactName, s = []; n !== null && n !== r; ) {
    var i = n, u = i.alternate, c = i.stateNode;
    if (u !== null && u === r) break;
    i.tag === 5 && c !== null && (i = c, l ? (u = tr(n, o), u != null && s.unshift(ir(n, u, i))) : l || (u = tr(n, o), u != null && s.push(ir(n, u, i)))), n = n.return;
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var hf = /\r\n?/g, mf = /\u0000|\uFFFD/g;
function Ks(e) {
  return (typeof e == "string" ? e : "" + e).replace(hf, `
`).replace(mf, "");
}
function $r(e, t, n) {
  if (t = Ks(t), Ks(e) !== t && n) throw Error(k(425));
}
function ua() {
}
var Kl = null, Gl = null;
function Yl(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Jl = typeof setTimeout == "function" ? setTimeout : void 0, gf = typeof clearTimeout == "function" ? clearTimeout : void 0, Gs = typeof Promise == "function" ? Promise : void 0, vf = typeof queueMicrotask == "function" ? queueMicrotask : typeof Gs < "u" ? function(e) {
  return Gs.resolve(null).then(e).catch(xf);
} : Jl;
function xf(e) {
  setTimeout(function() {
    throw e;
  });
}
function ul(e, t) {
  var n = t, r = 0;
  do {
    var l = n.nextSibling;
    if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
      if (r === 0) {
        e.removeChild(l), ar(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = l;
  } while (n);
  ar(t);
}
function kt(e) {
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
function Ys(e) {
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
var Tn = Math.random().toString(36).slice(2), et = "__reactFiber$" + Tn, ur = "__reactProps$" + Tn, dt = "__reactContainer$" + Tn, Xl = "__reactEvents$" + Tn, yf = "__reactListeners$" + Tn, jf = "__reactHandles$" + Tn;
function Ft(e) {
  var t = e[et];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[dt] || n[et]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Ys(e); e !== null; ) {
        if (n = e[et]) return n;
        e = Ys(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function yr(e) {
  return e = e[et] || e[dt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function ln(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(k(33));
}
function $a(e) {
  return e[ur] || null;
}
var Zl = [], on = -1;
function $t(e) {
  return { current: e };
}
function X(e) {
  0 > on || (e.current = Zl[on], Zl[on] = null, on--);
}
function Y(e, t) {
  on++, Zl[on] = e.current, e.current = t;
}
var Rt = {}, je = $t(Rt), Ee = $t(!1), Ut = Rt;
function _n(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Rt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, o;
  for (o in n) l[o] = t[o];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function be(e) {
  return e = e.childContextTypes, e != null;
}
function ca() {
  X(Ee), X(je);
}
function Js(e, t, n) {
  if (je.current !== Rt) throw Error(k(168));
  Y(je, t), Y(Ee, n);
}
function ac(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(k(108, rp(e) || "Unknown", l));
  return ae({}, n, r);
}
function da(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Rt, Ut = je.current, Y(je, e), Y(Ee, Ee.current), !0;
}
function Xs(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(k(169));
  n ? (e = ac(e, t, Ut), r.__reactInternalMemoizedMergedChildContext = e, X(Ee), X(je), Y(je, e)) : X(Ee), Y(Ee, n);
}
var ot = null, La = !1, cl = !1;
function lc(e) {
  ot === null ? ot = [e] : ot.push(e);
}
function Sf(e) {
  La = !0, lc(e);
}
function Lt() {
  if (!cl && ot !== null) {
    cl = !0;
    var e = 0, t = W;
    try {
      var n = ot;
      for (W = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      ot = null, La = !1;
    } catch (l) {
      throw ot !== null && (ot = ot.slice(e + 1)), Tu($o, Lt), l;
    } finally {
      W = t, cl = !1;
    }
  }
  return null;
}
var sn = [], un = 0, pa = null, fa = 0, De = [], Fe = 0, qt = null, st = 1, it = "";
function It(e, t) {
  sn[un++] = fa, sn[un++] = pa, pa = e, fa = t;
}
function oc(e, t, n) {
  De[Fe++] = st, De[Fe++] = it, De[Fe++] = qt, qt = e;
  var r = st;
  e = it;
  var l = 32 - We(r) - 1;
  r &= ~(1 << l), n += 1;
  var o = 32 - We(t) + l;
  if (30 < o) {
    var s = l - l % 5;
    o = (r & (1 << s) - 1).toString(32), r >>= s, l -= s, st = 1 << 32 - We(t) + l | n << l | r, it = o + e;
  } else st = 1 << o | n << l | r, it = e;
}
function Bo(e) {
  e.return !== null && (It(e, 1), oc(e, 1, 0));
}
function Uo(e) {
  for (; e === pa; ) pa = sn[--un], sn[un] = null, fa = sn[--un], sn[un] = null;
  for (; e === qt; ) qt = De[--Fe], De[Fe] = null, it = De[--Fe], De[Fe] = null, st = De[--Fe], De[Fe] = null;
}
var $e = null, ze = null, ee = !1, Qe = null;
function sc(e, t) {
  var n = Me(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Zs(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, $e = e, ze = kt(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, $e = e, ze = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = qt !== null ? { id: st, overflow: it } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Me(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, $e = e, ze = null, !0) : !1;
    default:
      return !1;
  }
}
function eo(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function to(e) {
  if (ee) {
    var t = ze;
    if (t) {
      var n = t;
      if (!Zs(e, t)) {
        if (eo(e)) throw Error(k(418));
        t = kt(n.nextSibling);
        var r = $e;
        t && Zs(e, t) ? sc(r, n) : (e.flags = e.flags & -4097 | 2, ee = !1, $e = e);
      }
    } else {
      if (eo(e)) throw Error(k(418));
      e.flags = e.flags & -4097 | 2, ee = !1, $e = e;
    }
  }
}
function ei(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  $e = e;
}
function Lr(e) {
  if (e !== $e) return !1;
  if (!ee) return ei(e), ee = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Yl(e.type, e.memoizedProps)), t && (t = ze)) {
    if (eo(e)) throw ic(), Error(k(418));
    for (; t; ) sc(e, t), t = kt(t.nextSibling);
  }
  if (ei(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(k(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              ze = kt(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      ze = null;
    }
  } else ze = $e ? kt(e.stateNode.nextSibling) : null;
  return !0;
}
function ic() {
  for (var e = ze; e; ) e = kt(e.nextSibling);
}
function wn() {
  ze = $e = null, ee = !1;
}
function qo(e) {
  Qe === null ? Qe = [e] : Qe.push(e);
}
var _f = ht.ReactCurrentBatchConfig;
function In(e, t, n) {
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
function Or(e, t) {
  throw e = Object.prototype.toString.call(t), Error(k(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function ti(e) {
  var t = e._init;
  return t(e._payload);
}
function uc(e) {
  function t(m, d) {
    if (e) {
      var h = m.deletions;
      h === null ? (m.deletions = [d], m.flags |= 16) : h.push(d);
    }
  }
  function n(m, d) {
    if (!e) return null;
    for (; d !== null; ) t(m, d), d = d.sibling;
    return null;
  }
  function r(m, d) {
    for (m = /* @__PURE__ */ new Map(); d !== null; ) d.key !== null ? m.set(d.key, d) : m.set(d.index, d), d = d.sibling;
    return m;
  }
  function l(m, d) {
    return m = Pt(m, d), m.index = 0, m.sibling = null, m;
  }
  function o(m, d, h) {
    return m.index = h, e ? (h = m.alternate, h !== null ? (h = h.index, h < d ? (m.flags |= 2, d) : h) : (m.flags |= 2, d)) : (m.flags |= 1048576, d);
  }
  function s(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function i(m, d, h, y) {
    return d === null || d.tag !== 6 ? (d = vl(h, m.mode, y), d.return = m, d) : (d = l(d, h), d.return = m, d);
  }
  function u(m, d, h, y) {
    var S = h.type;
    return S === tn ? f(m, d, h.props.children, y, h.key) : d !== null && (d.elementType === S || typeof S == "object" && S !== null && S.$$typeof === gt && ti(S) === d.type) ? (y = l(d, h.props), y.ref = In(m, d, h), y.return = m, y) : (y = ea(h.type, h.key, h.props, null, m.mode, y), y.ref = In(m, d, h), y.return = m, y);
  }
  function c(m, d, h, y) {
    return d === null || d.tag !== 4 || d.stateNode.containerInfo !== h.containerInfo || d.stateNode.implementation !== h.implementation ? (d = xl(h, m.mode, y), d.return = m, d) : (d = l(d, h.children || []), d.return = m, d);
  }
  function f(m, d, h, y, S) {
    return d === null || d.tag !== 7 ? (d = Bt(h, m.mode, y, S), d.return = m, d) : (d = l(d, h), d.return = m, d);
  }
  function p(m, d, h) {
    if (typeof d == "string" && d !== "" || typeof d == "number") return d = vl("" + d, m.mode, h), d.return = m, d;
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case Nr:
          return h = ea(d.type, d.key, d.props, null, m.mode, h), h.ref = In(m, null, d), h.return = m, h;
        case en:
          return d = xl(d, m.mode, h), d.return = m, d;
        case gt:
          var y = d._init;
          return p(m, y(d._payload), h);
      }
      if (An(d) || Rn(d)) return d = Bt(d, m.mode, h, null), d.return = m, d;
      Or(m, d);
    }
    return null;
  }
  function x(m, d, h, y) {
    var S = d !== null ? d.key : null;
    if (typeof h == "string" && h !== "" || typeof h == "number") return S !== null ? null : i(m, d, "" + h, y);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Nr:
          return h.key === S ? u(m, d, h, y) : null;
        case en:
          return h.key === S ? c(m, d, h, y) : null;
        case gt:
          return S = h._init, x(
            m,
            d,
            S(h._payload),
            y
          );
      }
      if (An(h) || Rn(h)) return S !== null ? null : f(m, d, h, y, null);
      Or(m, h);
    }
    return null;
  }
  function g(m, d, h, y, S) {
    if (typeof y == "string" && y !== "" || typeof y == "number") return m = m.get(h) || null, i(d, m, "" + y, S);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case Nr:
          return m = m.get(y.key === null ? h : y.key) || null, u(d, m, y, S);
        case en:
          return m = m.get(y.key === null ? h : y.key) || null, c(d, m, y, S);
        case gt:
          var N = y._init;
          return g(m, d, h, N(y._payload), S);
      }
      if (An(y) || Rn(y)) return m = m.get(h) || null, f(d, m, y, S, null);
      Or(d, y);
    }
    return null;
  }
  function _(m, d, h, y) {
    for (var S = null, N = null, b = d, P = d = 0, R = null; b !== null && P < h.length; P++) {
      b.index > P ? (R = b, b = null) : R = b.sibling;
      var C = x(m, b, h[P], y);
      if (C === null) {
        b === null && (b = R);
        break;
      }
      e && b && C.alternate === null && t(m, b), d = o(C, d, P), N === null ? S = C : N.sibling = C, N = C, b = R;
    }
    if (P === h.length) return n(m, b), ee && It(m, P), S;
    if (b === null) {
      for (; P < h.length; P++) b = p(m, h[P], y), b !== null && (d = o(b, d, P), N === null ? S = b : N.sibling = b, N = b);
      return ee && It(m, P), S;
    }
    for (b = r(m, b); P < h.length; P++) R = g(b, m, P, h[P], y), R !== null && (e && R.alternate !== null && b.delete(R.key === null ? P : R.key), d = o(R, d, P), N === null ? S = R : N.sibling = R, N = R);
    return e && b.forEach(function(M) {
      return t(m, M);
    }), ee && It(m, P), S;
  }
  function j(m, d, h, y) {
    var S = Rn(h);
    if (typeof S != "function") throw Error(k(150));
    if (h = S.call(h), h == null) throw Error(k(151));
    for (var N = S = null, b = d, P = d = 0, R = null, C = h.next(); b !== null && !C.done; P++, C = h.next()) {
      b.index > P ? (R = b, b = null) : R = b.sibling;
      var M = x(m, b, C.value, y);
      if (M === null) {
        b === null && (b = R);
        break;
      }
      e && b && M.alternate === null && t(m, b), d = o(M, d, P), N === null ? S = M : N.sibling = M, N = M, b = R;
    }
    if (C.done) return n(
      m,
      b
    ), ee && It(m, P), S;
    if (b === null) {
      for (; !C.done; P++, C = h.next()) C = p(m, C.value, y), C !== null && (d = o(C, d, P), N === null ? S = C : N.sibling = C, N = C);
      return ee && It(m, P), S;
    }
    for (b = r(m, b); !C.done; P++, C = h.next()) C = g(b, m, P, C.value, y), C !== null && (e && C.alternate !== null && b.delete(C.key === null ? P : C.key), d = o(C, d, P), N === null ? S = C : N.sibling = C, N = C);
    return e && b.forEach(function(oe) {
      return t(m, oe);
    }), ee && It(m, P), S;
  }
  function w(m, d, h, y) {
    if (typeof h == "object" && h !== null && h.type === tn && h.key === null && (h = h.props.children), typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Nr:
          e: {
            for (var S = h.key, N = d; N !== null; ) {
              if (N.key === S) {
                if (S = h.type, S === tn) {
                  if (N.tag === 7) {
                    n(m, N.sibling), d = l(N, h.props.children), d.return = m, m = d;
                    break e;
                  }
                } else if (N.elementType === S || typeof S == "object" && S !== null && S.$$typeof === gt && ti(S) === N.type) {
                  n(m, N.sibling), d = l(N, h.props), d.ref = In(m, N, h), d.return = m, m = d;
                  break e;
                }
                n(m, N);
                break;
              } else t(m, N);
              N = N.sibling;
            }
            h.type === tn ? (d = Bt(h.props.children, m.mode, y, h.key), d.return = m, m = d) : (y = ea(h.type, h.key, h.props, null, m.mode, y), y.ref = In(m, d, h), y.return = m, m = y);
          }
          return s(m);
        case en:
          e: {
            for (N = h.key; d !== null; ) {
              if (d.key === N) if (d.tag === 4 && d.stateNode.containerInfo === h.containerInfo && d.stateNode.implementation === h.implementation) {
                n(m, d.sibling), d = l(d, h.children || []), d.return = m, m = d;
                break e;
              } else {
                n(m, d);
                break;
              }
              else t(m, d);
              d = d.sibling;
            }
            d = xl(h, m.mode, y), d.return = m, m = d;
          }
          return s(m);
        case gt:
          return N = h._init, w(m, d, N(h._payload), y);
      }
      if (An(h)) return _(m, d, h, y);
      if (Rn(h)) return j(m, d, h, y);
      Or(m, h);
    }
    return typeof h == "string" && h !== "" || typeof h == "number" ? (h = "" + h, d !== null && d.tag === 6 ? (n(m, d.sibling), d = l(d, h), d.return = m, m = d) : (n(m, d), d = vl(h, m.mode, y), d.return = m, m = d), s(m)) : n(m, d);
  }
  return w;
}
var Nn = uc(!0), cc = uc(!1), ha = $t(null), ma = null, cn = null, Ho = null;
function Qo() {
  Ho = cn = ma = null;
}
function Wo(e) {
  var t = ha.current;
  X(ha), e._currentValue = t;
}
function no(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function xn(e, t) {
  ma = e, Ho = cn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Ce = !0), e.firstContext = null);
}
function Ve(e) {
  var t = e._currentValue;
  if (Ho !== e) if (e = { context: e, memoizedValue: t, next: null }, cn === null) {
    if (ma === null) throw Error(k(308));
    cn = e, ma.dependencies = { lanes: 0, firstContext: e };
  } else cn = cn.next = e;
  return t;
}
var Mt = null;
function Ko(e) {
  Mt === null ? Mt = [e] : Mt.push(e);
}
function dc(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? (n.next = n, Ko(t)) : (n.next = l.next, l.next = n), t.interleaved = n, pt(e, r);
}
function pt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var vt = !1;
function Go(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function pc(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function ut(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Ct(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, q & 2) {
    var l = r.pending;
    return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, pt(e, n);
  }
  return l = r.interleaved, l === null ? (t.next = t, Ko(r)) : (t.next = l.next, l.next = t), r.interleaved = t, pt(e, n);
}
function Kr(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Lo(e, n);
  }
}
function ni(e, t) {
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
function ga(e, t, n, r) {
  var l = e.updateQueue;
  vt = !1;
  var o = l.firstBaseUpdate, s = l.lastBaseUpdate, i = l.shared.pending;
  if (i !== null) {
    l.shared.pending = null;
    var u = i, c = u.next;
    u.next = null, s === null ? o = c : s.next = c, s = u;
    var f = e.alternate;
    f !== null && (f = f.updateQueue, i = f.lastBaseUpdate, i !== s && (i === null ? f.firstBaseUpdate = c : i.next = c, f.lastBaseUpdate = u));
  }
  if (o !== null) {
    var p = l.baseState;
    s = 0, f = c = u = null, i = o;
    do {
      var x = i.lane, g = i.eventTime;
      if ((r & x) === x) {
        f !== null && (f = f.next = {
          eventTime: g,
          lane: 0,
          tag: i.tag,
          payload: i.payload,
          callback: i.callback,
          next: null
        });
        e: {
          var _ = e, j = i;
          switch (x = t, g = n, j.tag) {
            case 1:
              if (_ = j.payload, typeof _ == "function") {
                p = _.call(g, p, x);
                break e;
              }
              p = _;
              break e;
            case 3:
              _.flags = _.flags & -65537 | 128;
            case 0:
              if (_ = j.payload, x = typeof _ == "function" ? _.call(g, p, x) : _, x == null) break e;
              p = ae({}, p, x);
              break e;
            case 2:
              vt = !0;
          }
        }
        i.callback !== null && i.lane !== 0 && (e.flags |= 64, x = l.effects, x === null ? l.effects = [i] : x.push(i));
      } else g = { eventTime: g, lane: x, tag: i.tag, payload: i.payload, callback: i.callback, next: null }, f === null ? (c = f = g, u = p) : f = f.next = g, s |= x;
      if (i = i.next, i === null) {
        if (i = l.shared.pending, i === null) break;
        x = i, i = x.next, x.next = null, l.lastBaseUpdate = x, l.shared.pending = null;
      }
    } while (!0);
    if (f === null && (u = p), l.baseState = u, l.firstBaseUpdate = c, l.lastBaseUpdate = f, t = l.shared.interleaved, t !== null) {
      l = t;
      do
        s |= l.lane, l = l.next;
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    Qt |= s, e.lanes = s, e.memoizedState = p;
  }
}
function ri(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], l = r.callback;
    if (l !== null) {
      if (r.callback = null, r = n, typeof l != "function") throw Error(k(191, l));
      l.call(r);
    }
  }
}
var jr = {}, nt = $t(jr), cr = $t(jr), dr = $t(jr);
function At(e) {
  if (e === jr) throw Error(k(174));
  return e;
}
function Yo(e, t) {
  switch (Y(dr, t), Y(cr, e), Y(nt, jr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Il(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Il(t, e);
  }
  X(nt), Y(nt, t);
}
function kn() {
  X(nt), X(cr), X(dr);
}
function fc(e) {
  At(dr.current);
  var t = At(nt.current), n = Il(t, e.type);
  t !== n && (Y(cr, e), Y(nt, n));
}
function Jo(e) {
  cr.current === e && (X(nt), X(cr));
}
var ne = $t(0);
function va(e) {
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
var dl = [];
function Xo() {
  for (var e = 0; e < dl.length; e++) dl[e]._workInProgressVersionPrimary = null;
  dl.length = 0;
}
var Gr = ht.ReactCurrentDispatcher, pl = ht.ReactCurrentBatchConfig, Ht = 0, re = null, ue = null, de = null, xa = !1, Gn = !1, pr = 0, wf = 0;
function ve() {
  throw Error(k(321));
}
function Zo(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Ge(e[n], t[n])) return !1;
  return !0;
}
function es(e, t, n, r, l, o) {
  if (Ht = o, re = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Gr.current = e === null || e.memoizedState === null ? Ef : bf, e = n(r, l), Gn) {
    o = 0;
    do {
      if (Gn = !1, pr = 0, 25 <= o) throw Error(k(301));
      o += 1, de = ue = null, t.updateQueue = null, Gr.current = Pf, e = n(r, l);
    } while (Gn);
  }
  if (Gr.current = ya, t = ue !== null && ue.next !== null, Ht = 0, de = ue = re = null, xa = !1, t) throw Error(k(300));
  return e;
}
function ts() {
  var e = pr !== 0;
  return pr = 0, e;
}
function Ze() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return de === null ? re.memoizedState = de = e : de = de.next = e, de;
}
function Be() {
  if (ue === null) {
    var e = re.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ue.next;
  var t = de === null ? re.memoizedState : de.next;
  if (t !== null) de = t, ue = e;
  else {
    if (e === null) throw Error(k(310));
    ue = e, e = { memoizedState: ue.memoizedState, baseState: ue.baseState, baseQueue: ue.baseQueue, queue: ue.queue, next: null }, de === null ? re.memoizedState = de = e : de = de.next = e;
  }
  return de;
}
function fr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function fl(e) {
  var t = Be(), n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = ue, l = r.baseQueue, o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var s = l.next;
      l.next = o.next, o.next = s;
    }
    r.baseQueue = l = o, n.pending = null;
  }
  if (l !== null) {
    o = l.next, r = r.baseState;
    var i = s = null, u = null, c = o;
    do {
      var f = c.lane;
      if ((Ht & f) === f) u !== null && (u = u.next = { lane: 0, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }), r = c.hasEagerState ? c.eagerState : e(r, c.action);
      else {
        var p = {
          lane: f,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null
        };
        u === null ? (i = u = p, s = r) : u = u.next = p, re.lanes |= f, Qt |= f;
      }
      c = c.next;
    } while (c !== null && c !== o);
    u === null ? s = r : u.next = i, Ge(r, t.memoizedState) || (Ce = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = u, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    l = e;
    do
      o = l.lane, re.lanes |= o, Qt |= o, l = l.next;
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function hl(e) {
  var t = Be(), n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, l = n.pending, o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var s = l = l.next;
    do
      o = e(o, s.action), s = s.next;
    while (s !== l);
    Ge(o, t.memoizedState) || (Ce = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
  }
  return [o, r];
}
function hc() {
}
function mc(e, t) {
  var n = re, r = Be(), l = t(), o = !Ge(r.memoizedState, l);
  if (o && (r.memoizedState = l, Ce = !0), r = r.queue, ns(xc.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || de !== null && de.memoizedState.tag & 1) {
    if (n.flags |= 2048, hr(9, vc.bind(null, n, r, l, t), void 0, null), pe === null) throw Error(k(349));
    Ht & 30 || gc(n, t, l);
  }
  return l;
}
function gc(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = re.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, re.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function vc(e, t, n, r) {
  t.value = n, t.getSnapshot = r, yc(t) && jc(e);
}
function xc(e, t, n) {
  return n(function() {
    yc(t) && jc(e);
  });
}
function yc(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ge(e, n);
  } catch {
    return !0;
  }
}
function jc(e) {
  var t = pt(e, 1);
  t !== null && Ke(t, e, 1, -1);
}
function ai(e) {
  var t = Ze();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: fr, lastRenderedState: e }, t.queue = e, e = e.dispatch = Cf.bind(null, re, e), [t.memoizedState, e];
}
function hr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = re.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, re.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Sc() {
  return Be().memoizedState;
}
function Yr(e, t, n, r) {
  var l = Ze();
  re.flags |= e, l.memoizedState = hr(1 | t, n, void 0, r === void 0 ? null : r);
}
function Oa(e, t, n, r) {
  var l = Be();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (ue !== null) {
    var s = ue.memoizedState;
    if (o = s.destroy, r !== null && Zo(r, s.deps)) {
      l.memoizedState = hr(t, n, o, r);
      return;
    }
  }
  re.flags |= e, l.memoizedState = hr(1 | t, n, o, r);
}
function li(e, t) {
  return Yr(8390656, 8, e, t);
}
function ns(e, t) {
  return Oa(2048, 8, e, t);
}
function _c(e, t) {
  return Oa(4, 2, e, t);
}
function wc(e, t) {
  return Oa(4, 4, e, t);
}
function Nc(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function kc(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Oa(4, 4, Nc.bind(null, t, e), n);
}
function rs() {
}
function Cc(e, t) {
  var n = Be();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Zo(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Ec(e, t) {
  var n = Be();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Zo(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function bc(e, t, n) {
  return Ht & 21 ? (Ge(n, t) || (n = $u(), re.lanes |= n, Qt |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Ce = !0), e.memoizedState = n);
}
function Nf(e, t) {
  var n = W;
  W = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = pl.transition;
  pl.transition = {};
  try {
    e(!1), t();
  } finally {
    W = n, pl.transition = r;
  }
}
function Pc() {
  return Be().memoizedState;
}
function kf(e, t, n) {
  var r = bt(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Tc(e)) Rc(t, n);
  else if (n = dc(e, t, n, r), n !== null) {
    var l = _e();
    Ke(n, e, r, l), zc(n, t, r);
  }
}
function Cf(e, t, n) {
  var r = bt(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Tc(e)) Rc(t, l);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
      var s = t.lastRenderedState, i = o(s, n);
      if (l.hasEagerState = !0, l.eagerState = i, Ge(i, s)) {
        var u = t.interleaved;
        u === null ? (l.next = l, Ko(t)) : (l.next = u.next, u.next = l), t.interleaved = l;
        return;
      }
    } catch {
    } finally {
    }
    n = dc(e, t, l, r), n !== null && (l = _e(), Ke(n, e, r, l), zc(n, t, r));
  }
}
function Tc(e) {
  var t = e.alternate;
  return e === re || t !== null && t === re;
}
function Rc(e, t) {
  Gn = xa = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function zc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Lo(e, n);
  }
}
var ya = { readContext: Ve, useCallback: ve, useContext: ve, useEffect: ve, useImperativeHandle: ve, useInsertionEffect: ve, useLayoutEffect: ve, useMemo: ve, useReducer: ve, useRef: ve, useState: ve, useDebugValue: ve, useDeferredValue: ve, useTransition: ve, useMutableSource: ve, useSyncExternalStore: ve, useId: ve, unstable_isNewReconciler: !1 }, Ef = { readContext: Ve, useCallback: function(e, t) {
  return Ze().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Ve, useEffect: li, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Yr(
    4194308,
    4,
    Nc.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Yr(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Yr(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Ze();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Ze();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = kf.bind(null, re, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Ze();
  return e = { current: e }, t.memoizedState = e;
}, useState: ai, useDebugValue: rs, useDeferredValue: function(e) {
  return Ze().memoizedState = e;
}, useTransition: function() {
  var e = ai(!1), t = e[0];
  return e = Nf.bind(null, e[1]), Ze().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = re, l = Ze();
  if (ee) {
    if (n === void 0) throw Error(k(407));
    n = n();
  } else {
    if (n = t(), pe === null) throw Error(k(349));
    Ht & 30 || gc(r, t, n);
  }
  l.memoizedState = n;
  var o = { value: n, getSnapshot: t };
  return l.queue = o, li(xc.bind(
    null,
    r,
    o,
    e
  ), [e]), r.flags |= 2048, hr(9, vc.bind(null, r, o, n, t), void 0, null), n;
}, useId: function() {
  var e = Ze(), t = pe.identifierPrefix;
  if (ee) {
    var n = it, r = st;
    n = (r & ~(1 << 32 - We(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = pr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = wf++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, bf = {
  readContext: Ve,
  useCallback: Cc,
  useContext: Ve,
  useEffect: ns,
  useImperativeHandle: kc,
  useInsertionEffect: _c,
  useLayoutEffect: wc,
  useMemo: Ec,
  useReducer: fl,
  useRef: Sc,
  useState: function() {
    return fl(fr);
  },
  useDebugValue: rs,
  useDeferredValue: function(e) {
    var t = Be();
    return bc(t, ue.memoizedState, e);
  },
  useTransition: function() {
    var e = fl(fr)[0], t = Be().memoizedState;
    return [e, t];
  },
  useMutableSource: hc,
  useSyncExternalStore: mc,
  useId: Pc,
  unstable_isNewReconciler: !1
}, Pf = { readContext: Ve, useCallback: Cc, useContext: Ve, useEffect: ns, useImperativeHandle: kc, useInsertionEffect: _c, useLayoutEffect: wc, useMemo: Ec, useReducer: hl, useRef: Sc, useState: function() {
  return hl(fr);
}, useDebugValue: rs, useDeferredValue: function(e) {
  var t = Be();
  return ue === null ? t.memoizedState = e : bc(t, ue.memoizedState, e);
}, useTransition: function() {
  var e = hl(fr)[0], t = Be().memoizedState;
  return [e, t];
}, useMutableSource: hc, useSyncExternalStore: mc, useId: Pc, unstable_isNewReconciler: !1 };
function qe(e, t) {
  if (e && e.defaultProps) {
    t = ae({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function ro(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : ae({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ia = { isMounted: function(e) {
  return (e = e._reactInternals) ? Gt(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = _e(), l = bt(e), o = ut(r, l);
  o.payload = t, n != null && (o.callback = n), t = Ct(e, o, l), t !== null && (Ke(t, e, l, r), Kr(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = _e(), l = bt(e), o = ut(r, l);
  o.tag = 1, o.payload = t, n != null && (o.callback = n), t = Ct(e, o, l), t !== null && (Ke(t, e, l, r), Kr(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = _e(), r = bt(e), l = ut(n, r);
  l.tag = 2, t != null && (l.callback = t), t = Ct(e, l, r), t !== null && (Ke(t, e, r, n), Kr(t, e, r));
} };
function oi(e, t, n, r, l, o, s) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, s) : t.prototype && t.prototype.isPureReactComponent ? !or(n, r) || !or(l, o) : !0;
}
function $c(e, t, n) {
  var r = !1, l = Rt, o = t.contextType;
  return typeof o == "object" && o !== null ? o = Ve(o) : (l = be(t) ? Ut : je.current, r = t.contextTypes, o = (r = r != null) ? _n(e, l) : Rt), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Ia, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = o), t;
}
function si(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Ia.enqueueReplaceState(t, t.state, null);
}
function ao(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = {}, Go(e);
  var o = t.contextType;
  typeof o == "object" && o !== null ? l.context = Ve(o) : (o = be(t) ? Ut : je.current, l.context = _n(e, o)), l.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (ro(e, t, o, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && Ia.enqueueReplaceState(l, l.state, null), ga(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function Cn(e, t) {
  try {
    var n = "", r = t;
    do
      n += np(r), r = r.return;
    while (r);
    var l = n;
  } catch (o) {
    l = `
Error generating stack: ` + o.message + `
` + o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function ml(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function lo(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var Tf = typeof WeakMap == "function" ? WeakMap : Map;
function Lc(e, t, n) {
  n = ut(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Sa || (Sa = !0, go = r), lo(e, t);
  }, n;
}
function Oc(e, t, n) {
  n = ut(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    n.payload = function() {
      return r(l);
    }, n.callback = function() {
      lo(e, t);
    };
  }
  var o = e.stateNode;
  return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
    lo(e, t), typeof r != "function" && (Et === null ? Et = /* @__PURE__ */ new Set([this]) : Et.add(this));
    var s = t.stack;
    this.componentDidCatch(t.value, { componentStack: s !== null ? s : "" });
  }), n;
}
function ii(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Tf();
    var l = /* @__PURE__ */ new Set();
    r.set(t, l);
  } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
  l.has(n) || (l.add(n), e = qf.bind(null, e, t, n), t.then(e, e));
}
function ui(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function ci(e, t, n, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = ut(-1, 1), t.tag = 2, Ct(n, t, 1))), n.lanes |= 1), e);
}
var Rf = ht.ReactCurrentOwner, Ce = !1;
function Se(e, t, n, r) {
  t.child = e === null ? cc(t, null, n, r) : Nn(t, e.child, n, r);
}
function di(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return xn(t, l), r = es(e, t, n, r, o, l), n = ts(), e !== null && !Ce ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, ft(e, t, l)) : (ee && n && Bo(t), t.flags |= 1, Se(e, t, r, l), t.child);
}
function pi(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" && !ds(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, Ic(e, t, o, r, l)) : (e = ea(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (o = e.child, !(e.lanes & l)) {
    var s = o.memoizedProps;
    if (n = n.compare, n = n !== null ? n : or, n(s, r) && e.ref === t.ref) return ft(e, t, l);
  }
  return t.flags |= 1, e = Pt(o, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Ic(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (or(o, r) && e.ref === t.ref) if (Ce = !1, t.pendingProps = r = o, (e.lanes & l) !== 0) e.flags & 131072 && (Ce = !0);
    else return t.lanes = e.lanes, ft(e, t, l);
  }
  return oo(e, t, n, r, l);
}
function Dc(e, t, n) {
  var r = t.pendingProps, l = r.children, o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Y(pn, Re), Re |= n;
  else {
    if (!(n & 1073741824)) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Y(pn, Re), Re |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, Y(pn, Re), Re |= r;
  }
  else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, Y(pn, Re), Re |= r;
  return Se(e, t, l, n), t.child;
}
function Fc(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function oo(e, t, n, r, l) {
  var o = be(n) ? Ut : je.current;
  return o = _n(t, o), xn(t, l), n = es(e, t, n, r, o, l), r = ts(), e !== null && !Ce ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, ft(e, t, l)) : (ee && r && Bo(t), t.flags |= 1, Se(e, t, n, l), t.child);
}
function fi(e, t, n, r, l) {
  if (be(n)) {
    var o = !0;
    da(t);
  } else o = !1;
  if (xn(t, l), t.stateNode === null) Jr(e, t), $c(t, n, r), ao(t, n, r, l), r = !0;
  else if (e === null) {
    var s = t.stateNode, i = t.memoizedProps;
    s.props = i;
    var u = s.context, c = n.contextType;
    typeof c == "object" && c !== null ? c = Ve(c) : (c = be(n) ? Ut : je.current, c = _n(t, c));
    var f = n.getDerivedStateFromProps, p = typeof f == "function" || typeof s.getSnapshotBeforeUpdate == "function";
    p || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (i !== r || u !== c) && si(t, s, r, c), vt = !1;
    var x = t.memoizedState;
    s.state = x, ga(t, r, s, l), u = t.memoizedState, i !== r || x !== u || Ee.current || vt ? (typeof f == "function" && (ro(t, n, f, r), u = t.memoizedState), (i = vt || oi(t, n, i, r, x, u, c)) ? (p || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = u), s.props = r, s.state = u, s.context = c, r = i) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    s = t.stateNode, pc(e, t), i = t.memoizedProps, c = t.type === t.elementType ? i : qe(t.type, i), s.props = c, p = t.pendingProps, x = s.context, u = n.contextType, typeof u == "object" && u !== null ? u = Ve(u) : (u = be(n) ? Ut : je.current, u = _n(t, u));
    var g = n.getDerivedStateFromProps;
    (f = typeof g == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (i !== p || x !== u) && si(t, s, r, u), vt = !1, x = t.memoizedState, s.state = x, ga(t, r, s, l);
    var _ = t.memoizedState;
    i !== p || x !== _ || Ee.current || vt ? (typeof g == "function" && (ro(t, n, g, r), _ = t.memoizedState), (c = vt || oi(t, n, c, r, x, _, u) || !1) ? (f || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, _, u), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, _, u)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || i === e.memoizedProps && x === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && x === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = _), s.props = r, s.state = _, s.context = u, r = c) : (typeof s.componentDidUpdate != "function" || i === e.memoizedProps && x === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && x === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return so(e, t, n, r, o, l);
}
function so(e, t, n, r, l, o) {
  Fc(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return l && Xs(t, n, !1), ft(e, t, o);
  r = t.stateNode, Rf.current = t;
  var i = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && s ? (t.child = Nn(t, e.child, null, o), t.child = Nn(t, null, i, o)) : Se(e, t, i, o), t.memoizedState = r.state, l && Xs(t, n, !0), t.child;
}
function Mc(e) {
  var t = e.stateNode;
  t.pendingContext ? Js(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Js(e, t.context, !1), Yo(e, t.containerInfo);
}
function hi(e, t, n, r, l) {
  return wn(), qo(l), t.flags |= 256, Se(e, t, n, r), t.child;
}
var io = { dehydrated: null, treeContext: null, retryLane: 0 };
function uo(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Ac(e, t, n) {
  var r = t.pendingProps, l = ne.current, o = !1, s = (t.flags & 128) !== 0, i;
  if ((i = s) || (i = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), i ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), Y(ne, l & 1), e === null)
    return to(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, s = { mode: "hidden", children: s }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = s) : o = Ma(s, r, 0, null), e = Bt(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = uo(n), t.memoizedState = io, e) : as(t, s));
  if (l = e.memoizedState, l !== null && (i = l.dehydrated, i !== null)) return zf(e, t, s, r, i, l, n);
  if (o) {
    o = r.fallback, s = t.mode, l = e.child, i = l.sibling;
    var u = { mode: "hidden", children: r.children };
    return !(s & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = u, t.deletions = null) : (r = Pt(l, u), r.subtreeFlags = l.subtreeFlags & 14680064), i !== null ? o = Pt(i, o) : (o = Bt(o, s, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, s = e.child.memoizedState, s = s === null ? uo(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }, o.memoizedState = s, o.childLanes = e.childLanes & ~n, t.memoizedState = io, r;
  }
  return o = e.child, e = o.sibling, r = Pt(o, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function as(e, t) {
  return t = Ma({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Ir(e, t, n, r) {
  return r !== null && qo(r), Nn(t, e.child, null, n), e = as(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function zf(e, t, n, r, l, o, s) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = ml(Error(k(422))), Ir(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, l = t.mode, r = Ma({ mode: "visible", children: r.children }, l, 0, null), o = Bt(o, l, s, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && Nn(t, e.child, null, s), t.child.memoizedState = uo(s), t.memoizedState = io, o);
  if (!(t.mode & 1)) return Ir(e, t, s, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r) var i = r.dgst;
    return r = i, o = Error(k(419)), r = ml(o, r, void 0), Ir(e, t, s, r);
  }
  if (i = (s & e.childLanes) !== 0, Ce || i) {
    if (r = pe, r !== null) {
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
      l = l & (r.suspendedLanes | s) ? 0 : l, l !== 0 && l !== o.retryLane && (o.retryLane = l, pt(e, l), Ke(r, e, l, -1));
    }
    return cs(), r = ml(Error(k(421))), Ir(e, t, s, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Hf.bind(null, e), l._reactRetry = t, null) : (e = o.treeContext, ze = kt(l.nextSibling), $e = t, ee = !0, Qe = null, e !== null && (De[Fe++] = st, De[Fe++] = it, De[Fe++] = qt, st = e.id, it = e.overflow, qt = t), t = as(t, r.children), t.flags |= 4096, t);
}
function mi(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), no(e.return, t, n);
}
function gl(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = l);
}
function Vc(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, o = r.tail;
  if (Se(e, t, r.children, n), r = ne.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && mi(e, n, t);
      else if (e.tag === 19) mi(e, n, t);
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
  if (Y(ne, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (l) {
    case "forwards":
      for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && va(e) === null && (l = n), n = n.sibling;
      n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), gl(t, !1, l, n, o);
      break;
    case "backwards":
      for (n = null, l = t.child, t.child = null; l !== null; ) {
        if (e = l.alternate, e !== null && va(e) === null) {
          t.child = l;
          break;
        }
        e = l.sibling, l.sibling = n, n = l, l = e;
      }
      gl(t, !0, n, null, o);
      break;
    case "together":
      gl(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Jr(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function ft(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Qt |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(k(153));
  if (t.child !== null) {
    for (e = t.child, n = Pt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Pt(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function $f(e, t, n) {
  switch (t.tag) {
    case 3:
      Mc(t), wn();
      break;
    case 5:
      fc(t);
      break;
    case 1:
      be(t.type) && da(t);
      break;
    case 4:
      Yo(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, l = t.memoizedProps.value;
      Y(ha, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (Y(ne, ne.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Ac(e, t, n) : (Y(ne, ne.current & 1), e = ft(e, t, n), e !== null ? e.sibling : null);
      Y(ne, ne.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Vc(e, t, n);
        t.flags |= 128;
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), Y(ne, ne.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Dc(e, t, n);
  }
  return ft(e, t, n);
}
var Bc, co, Uc, qc;
Bc = function(e, t) {
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
co = function() {
};
Uc = function(e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = t.stateNode, At(nt.current);
    var o = null;
    switch (n) {
      case "input":
        l = zl(e, l), r = zl(e, r), o = [];
        break;
      case "select":
        l = ae({}, l, { value: void 0 }), r = ae({}, r, { value: void 0 }), o = [];
        break;
      case "textarea":
        l = Ol(e, l), r = Ol(e, r), o = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = ua);
    }
    Dl(n, r);
    var s;
    n = null;
    for (c in l) if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null) if (c === "style") {
      var i = l[c];
      for (s in i) i.hasOwnProperty(s) && (n || (n = {}), n[s] = "");
    } else c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (Zn.hasOwnProperty(c) ? o || (o = []) : (o = o || []).push(c, null));
    for (c in r) {
      var u = r[c];
      if (i = l != null ? l[c] : void 0, r.hasOwnProperty(c) && u !== i && (u != null || i != null)) if (c === "style") if (i) {
        for (s in i) !i.hasOwnProperty(s) || u && u.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
        for (s in u) u.hasOwnProperty(s) && i[s] !== u[s] && (n || (n = {}), n[s] = u[s]);
      } else n || (o || (o = []), o.push(
        c,
        n
      )), n = u;
      else c === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, i = i ? i.__html : void 0, u != null && i !== u && (o = o || []).push(c, u)) : c === "children" ? typeof u != "string" && typeof u != "number" || (o = o || []).push(c, "" + u) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (Zn.hasOwnProperty(c) ? (u != null && c === "onScroll" && J("scroll", e), o || i === u || (o = [])) : (o = o || []).push(c, u));
    }
    n && (o = o || []).push("style", n);
    var c = o;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
qc = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Dn(e, t) {
  if (!ee) switch (e.tailMode) {
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
function xe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
  else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function Lf(e, t, n) {
  var r = t.pendingProps;
  switch (Uo(t), t.tag) {
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
      return xe(t), null;
    case 1:
      return be(t.type) && ca(), xe(t), null;
    case 3:
      return r = t.stateNode, kn(), X(Ee), X(je), Xo(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Lr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Qe !== null && (yo(Qe), Qe = null))), co(e, t), xe(t), null;
    case 5:
      Jo(t);
      var l = At(dr.current);
      if (n = t.type, e !== null && t.stateNode != null) Uc(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(k(166));
          return xe(t), null;
        }
        if (e = At(nt.current), Lr(t)) {
          r = t.stateNode, n = t.type;
          var o = t.memoizedProps;
          switch (r[et] = t, r[ur] = o, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              J("cancel", r), J("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              J("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Bn.length; l++) J(Bn[l], r);
              break;
            case "source":
              J("error", r);
              break;
            case "img":
            case "image":
            case "link":
              J(
                "error",
                r
              ), J("load", r);
              break;
            case "details":
              J("toggle", r);
              break;
            case "input":
              Ns(r, o), J("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!o.multiple }, J("invalid", r);
              break;
            case "textarea":
              Cs(r, o), J("invalid", r);
          }
          Dl(n, o), l = null;
          for (var s in o) if (o.hasOwnProperty(s)) {
            var i = o[s];
            s === "children" ? typeof i == "string" ? r.textContent !== i && (o.suppressHydrationWarning !== !0 && $r(r.textContent, i, e), l = ["children", i]) : typeof i == "number" && r.textContent !== "" + i && (o.suppressHydrationWarning !== !0 && $r(
              r.textContent,
              i,
              e
            ), l = ["children", "" + i]) : Zn.hasOwnProperty(s) && i != null && s === "onScroll" && J("scroll", r);
          }
          switch (n) {
            case "input":
              kr(r), ks(r, o, !0);
              break;
            case "textarea":
              kr(r), Es(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = ua);
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          s = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = xu(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, { is: r.is }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[et] = t, e[ur] = r, Bc(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (s = Fl(n, r), n) {
              case "dialog":
                J("cancel", e), J("close", e), l = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                J("load", e), l = r;
                break;
              case "video":
              case "audio":
                for (l = 0; l < Bn.length; l++) J(Bn[l], e);
                l = r;
                break;
              case "source":
                J("error", e), l = r;
                break;
              case "img":
              case "image":
              case "link":
                J(
                  "error",
                  e
                ), J("load", e), l = r;
                break;
              case "details":
                J("toggle", e), l = r;
                break;
              case "input":
                Ns(e, r), l = zl(e, r), J("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = ae({}, r, { value: void 0 }), J("invalid", e);
                break;
              case "textarea":
                Cs(e, r), l = Ol(e, r), J("invalid", e);
                break;
              default:
                l = r;
            }
            Dl(n, l), i = l;
            for (o in i) if (i.hasOwnProperty(o)) {
              var u = i[o];
              o === "style" ? Su(e, u) : o === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, u != null && yu(e, u)) : o === "children" ? typeof u == "string" ? (n !== "textarea" || u !== "") && er(e, u) : typeof u == "number" && er(e, "" + u) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Zn.hasOwnProperty(o) ? u != null && o === "onScroll" && J("scroll", e) : u != null && bo(e, o, u, s));
            }
            switch (n) {
              case "input":
                kr(e), ks(e, r, !1);
                break;
              case "textarea":
                kr(e), Es(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Tt(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, o = r.value, o != null ? hn(e, !!r.multiple, o, !1) : r.defaultValue != null && hn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = ua);
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
      return xe(t), null;
    case 6:
      if (e && t.stateNode != null) qc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(k(166));
        if (n = At(dr.current), At(nt.current), Lr(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[et] = t, (o = r.nodeValue !== n) && (e = $e, e !== null)) switch (e.tag) {
            case 3:
              $r(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && $r(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          o && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[et] = t, t.stateNode = r;
      }
      return xe(t), null;
    case 13:
      if (X(ne), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (ee && ze !== null && t.mode & 1 && !(t.flags & 128)) ic(), wn(), t.flags |= 98560, o = !1;
        else if (o = Lr(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!o) throw Error(k(318));
            if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(k(317));
            o[et] = t;
          } else wn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          xe(t), o = !1;
        } else Qe !== null && (yo(Qe), Qe = null), o = !0;
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || ne.current & 1 ? ce === 0 && (ce = 3) : cs())), t.updateQueue !== null && (t.flags |= 4), xe(t), null);
    case 4:
      return kn(), co(e, t), e === null && sr(t.stateNode.containerInfo), xe(t), null;
    case 10:
      return Wo(t.type._context), xe(t), null;
    case 17:
      return be(t.type) && ca(), xe(t), null;
    case 19:
      if (X(ne), o = t.memoizedState, o === null) return xe(t), null;
      if (r = (t.flags & 128) !== 0, s = o.rendering, s === null) if (r) Dn(o, !1);
      else {
        if (ce !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (s = va(e), s !== null) {
            for (t.flags |= 128, Dn(o, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) o = n, e = r, o.flags &= 14680066, s = o.alternate, s === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = s.childLanes, o.lanes = s.lanes, o.child = s.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = s.memoizedProps, o.memoizedState = s.memoizedState, o.updateQueue = s.updateQueue, o.type = s.type, e = s.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return Y(ne, ne.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        o.tail !== null && se() > En && (t.flags |= 128, r = !0, Dn(o, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = va(s), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Dn(o, !0), o.tail === null && o.tailMode === "hidden" && !s.alternate && !ee) return xe(t), null;
        } else 2 * se() - o.renderingStartTime > En && n !== 1073741824 && (t.flags |= 128, r = !0, Dn(o, !1), t.lanes = 4194304);
        o.isBackwards ? (s.sibling = t.child, t.child = s) : (n = o.last, n !== null ? n.sibling = s : t.child = s, o.last = s);
      }
      return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = se(), t.sibling = null, n = ne.current, Y(ne, r ? n & 1 | 2 : n & 1), t) : (xe(t), null);
    case 22:
    case 23:
      return us(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Re & 1073741824 && (xe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : xe(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(k(156, t.tag));
}
function Of(e, t) {
  switch (Uo(t), t.tag) {
    case 1:
      return be(t.type) && ca(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return kn(), X(Ee), X(je), Xo(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Jo(t), null;
    case 13:
      if (X(ne), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(k(340));
        wn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return X(ne), null;
    case 4:
      return kn(), null;
    case 10:
      return Wo(t.type._context), null;
    case 22:
    case 23:
      return us(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Dr = !1, ye = !1, If = typeof WeakSet == "function" ? WeakSet : Set, z = null;
function dn(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    le(e, t, r);
  }
  else n.current = null;
}
function po(e, t, n) {
  try {
    n();
  } catch (r) {
    le(e, t, r);
  }
}
var gi = !1;
function Df(e, t) {
  if (Kl = oa, e = Gu(), Vo(e)) {
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
        var s = 0, i = -1, u = -1, c = 0, f = 0, p = e, x = null;
        t: for (; ; ) {
          for (var g; p !== n || l !== 0 && p.nodeType !== 3 || (i = s + l), p !== o || r !== 0 && p.nodeType !== 3 || (u = s + r), p.nodeType === 3 && (s += p.nodeValue.length), (g = p.firstChild) !== null; )
            x = p, p = g;
          for (; ; ) {
            if (p === e) break t;
            if (x === n && ++c === l && (i = s), x === o && ++f === r && (u = s), (g = p.nextSibling) !== null) break;
            p = x, x = p.parentNode;
          }
          p = g;
        }
        n = i === -1 || u === -1 ? null : { start: i, end: u };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Gl = { focusedElem: e, selectionRange: n }, oa = !1, z = t; z !== null; ) if (t = z, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, z = e;
  else for (; z !== null; ) {
    t = z;
    try {
      var _ = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (_ !== null) {
            var j = _.memoizedProps, w = _.memoizedState, m = t.stateNode, d = m.getSnapshotBeforeUpdate(t.elementType === t.type ? j : qe(t.type, j), w);
            m.__reactInternalSnapshotBeforeUpdate = d;
          }
          break;
        case 3:
          var h = t.stateNode.containerInfo;
          h.nodeType === 1 ? h.textContent = "" : h.nodeType === 9 && h.documentElement && h.removeChild(h.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(k(163));
      }
    } catch (y) {
      le(t, t.return, y);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, z = e;
      break;
    }
    z = t.return;
  }
  return _ = gi, gi = !1, _;
}
function Yn(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        l.destroy = void 0, o !== void 0 && po(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function Da(e, t) {
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
function fo(e) {
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
function Hc(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Hc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[et], delete t[ur], delete t[Xl], delete t[yf], delete t[jf])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Qc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function vi(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || Qc(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function ho(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = ua));
  else if (r !== 4 && (e = e.child, e !== null)) for (ho(e, t, n), e = e.sibling; e !== null; ) ho(e, t, n), e = e.sibling;
}
function mo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (mo(e, t, n), e = e.sibling; e !== null; ) mo(e, t, n), e = e.sibling;
}
var he = null, He = !1;
function mt(e, t, n) {
  for (n = n.child; n !== null; ) Wc(e, t, n), n = n.sibling;
}
function Wc(e, t, n) {
  if (tt && typeof tt.onCommitFiberUnmount == "function") try {
    tt.onCommitFiberUnmount(Pa, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      ye || dn(n, t);
    case 6:
      var r = he, l = He;
      he = null, mt(e, t, n), he = r, He = l, he !== null && (He ? (e = he, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : he.removeChild(n.stateNode));
      break;
    case 18:
      he !== null && (He ? (e = he, n = n.stateNode, e.nodeType === 8 ? ul(e.parentNode, n) : e.nodeType === 1 && ul(e, n), ar(e)) : ul(he, n.stateNode));
      break;
    case 4:
      r = he, l = He, he = n.stateNode.containerInfo, He = !0, mt(e, t, n), he = r, He = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!ye && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var o = l, s = o.destroy;
          o = o.tag, s !== void 0 && (o & 2 || o & 4) && po(n, t, s), l = l.next;
        } while (l !== r);
      }
      mt(e, t, n);
      break;
    case 1:
      if (!ye && (dn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (i) {
        le(n, t, i);
      }
      mt(e, t, n);
      break;
    case 21:
      mt(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (ye = (r = ye) || n.memoizedState !== null, mt(e, t, n), ye = r) : mt(e, t, n);
      break;
    default:
      mt(e, t, n);
  }
}
function xi(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new If()), t.forEach(function(r) {
      var l = Qf.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(l, l));
    });
  }
}
function Ue(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var l = n[r];
    try {
      var o = e, s = t, i = s;
      e: for (; i !== null; ) {
        switch (i.tag) {
          case 5:
            he = i.stateNode, He = !1;
            break e;
          case 3:
            he = i.stateNode.containerInfo, He = !0;
            break e;
          case 4:
            he = i.stateNode.containerInfo, He = !0;
            break e;
        }
        i = i.return;
      }
      if (he === null) throw Error(k(160));
      Wc(o, s, l), he = null, He = !1;
      var u = l.alternate;
      u !== null && (u.return = null), l.return = null;
    } catch (c) {
      le(l, t, c);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Kc(t, e), t = t.sibling;
}
function Kc(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Ue(t, e), Je(e), r & 4) {
        try {
          Yn(3, e, e.return), Da(3, e);
        } catch (j) {
          le(e, e.return, j);
        }
        try {
          Yn(5, e, e.return);
        } catch (j) {
          le(e, e.return, j);
        }
      }
      break;
    case 1:
      Ue(t, e), Je(e), r & 512 && n !== null && dn(n, n.return);
      break;
    case 5:
      if (Ue(t, e), Je(e), r & 512 && n !== null && dn(n, n.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          er(l, "");
        } catch (j) {
          le(e, e.return, j);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var o = e.memoizedProps, s = n !== null ? n.memoizedProps : o, i = e.type, u = e.updateQueue;
        if (e.updateQueue = null, u !== null) try {
          i === "input" && o.type === "radio" && o.name != null && gu(l, o), Fl(i, s);
          var c = Fl(i, o);
          for (s = 0; s < u.length; s += 2) {
            var f = u[s], p = u[s + 1];
            f === "style" ? Su(l, p) : f === "dangerouslySetInnerHTML" ? yu(l, p) : f === "children" ? er(l, p) : bo(l, f, p, c);
          }
          switch (i) {
            case "input":
              $l(l, o);
              break;
            case "textarea":
              vu(l, o);
              break;
            case "select":
              var x = l._wrapperState.wasMultiple;
              l._wrapperState.wasMultiple = !!o.multiple;
              var g = o.value;
              g != null ? hn(l, !!o.multiple, g, !1) : x !== !!o.multiple && (o.defaultValue != null ? hn(
                l,
                !!o.multiple,
                o.defaultValue,
                !0
              ) : hn(l, !!o.multiple, o.multiple ? [] : "", !1));
          }
          l[ur] = o;
        } catch (j) {
          le(e, e.return, j);
        }
      }
      break;
    case 6:
      if (Ue(t, e), Je(e), r & 4) {
        if (e.stateNode === null) throw Error(k(162));
        l = e.stateNode, o = e.memoizedProps;
        try {
          l.nodeValue = o;
        } catch (j) {
          le(e, e.return, j);
        }
      }
      break;
    case 3:
      if (Ue(t, e), Je(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        ar(t.containerInfo);
      } catch (j) {
        le(e, e.return, j);
      }
      break;
    case 4:
      Ue(t, e), Je(e);
      break;
    case 13:
      Ue(t, e), Je(e), l = e.child, l.flags & 8192 && (o = l.memoizedState !== null, l.stateNode.isHidden = o, !o || l.alternate !== null && l.alternate.memoizedState !== null || (ss = se())), r & 4 && xi(e);
      break;
    case 22:
      if (f = n !== null && n.memoizedState !== null, e.mode & 1 ? (ye = (c = ye) || f, Ue(t, e), ye = c) : Ue(t, e), Je(e), r & 8192) {
        if (c = e.memoizedState !== null, (e.stateNode.isHidden = c) && !f && e.mode & 1) for (z = e, f = e.child; f !== null; ) {
          for (p = z = f; z !== null; ) {
            switch (x = z, g = x.child, x.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Yn(4, x, x.return);
                break;
              case 1:
                dn(x, x.return);
                var _ = x.stateNode;
                if (typeof _.componentWillUnmount == "function") {
                  r = x, n = x.return;
                  try {
                    t = r, _.props = t.memoizedProps, _.state = t.memoizedState, _.componentWillUnmount();
                  } catch (j) {
                    le(r, n, j);
                  }
                }
                break;
              case 5:
                dn(x, x.return);
                break;
              case 22:
                if (x.memoizedState !== null) {
                  ji(p);
                  continue;
                }
            }
            g !== null ? (g.return = x, z = g) : ji(p);
          }
          f = f.sibling;
        }
        e: for (f = null, p = e; ; ) {
          if (p.tag === 5) {
            if (f === null) {
              f = p;
              try {
                l = p.stateNode, c ? (o = l.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (i = p.stateNode, u = p.memoizedProps.style, s = u != null && u.hasOwnProperty("display") ? u.display : null, i.style.display = ju("display", s));
              } catch (j) {
                le(e, e.return, j);
              }
            }
          } else if (p.tag === 6) {
            if (f === null) try {
              p.stateNode.nodeValue = c ? "" : p.memoizedProps;
            } catch (j) {
              le(e, e.return, j);
            }
          } else if ((p.tag !== 22 && p.tag !== 23 || p.memoizedState === null || p === e) && p.child !== null) {
            p.child.return = p, p = p.child;
            continue;
          }
          if (p === e) break e;
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === e) break e;
            f === p && (f = null), p = p.return;
          }
          f === p && (f = null), p.sibling.return = p.return, p = p.sibling;
        }
      }
      break;
    case 19:
      Ue(t, e), Je(e), r & 4 && xi(e);
      break;
    case 21:
      break;
    default:
      Ue(
        t,
        e
      ), Je(e);
  }
}
function Je(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Qc(n)) {
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
          r.flags & 32 && (er(l, ""), r.flags &= -33);
          var o = vi(e);
          mo(e, o, l);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo, i = vi(e);
          ho(e, i, s);
          break;
        default:
          throw Error(k(161));
      }
    } catch (u) {
      le(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Ff(e, t, n) {
  z = e, Gc(e);
}
function Gc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; z !== null; ) {
    var l = z, o = l.child;
    if (l.tag === 22 && r) {
      var s = l.memoizedState !== null || Dr;
      if (!s) {
        var i = l.alternate, u = i !== null && i.memoizedState !== null || ye;
        i = Dr;
        var c = ye;
        if (Dr = s, (ye = u) && !c) for (z = l; z !== null; ) s = z, u = s.child, s.tag === 22 && s.memoizedState !== null ? Si(l) : u !== null ? (u.return = s, z = u) : Si(l);
        for (; o !== null; ) z = o, Gc(o), o = o.sibling;
        z = l, Dr = i, ye = c;
      }
      yi(e);
    } else l.subtreeFlags & 8772 && o !== null ? (o.return = l, z = o) : yi(e);
  }
}
function yi(e) {
  for (; z !== null; ) {
    var t = z;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            ye || Da(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !ye) if (n === null) r.componentDidMount();
            else {
              var l = t.elementType === t.type ? n.memoizedProps : qe(t.type, n.memoizedProps);
              r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var o = t.updateQueue;
            o !== null && ri(t, o, r);
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
              ri(t, s, n);
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
              var c = t.alternate;
              if (c !== null) {
                var f = c.memoizedState;
                if (f !== null) {
                  var p = f.dehydrated;
                  p !== null && ar(p);
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
        ye || t.flags & 512 && fo(t);
      } catch (x) {
        le(t, t.return, x);
      }
    }
    if (t === e) {
      z = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, z = n;
      break;
    }
    z = t.return;
  }
}
function ji(e) {
  for (; z !== null; ) {
    var t = z;
    if (t === e) {
      z = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, z = n;
      break;
    }
    z = t.return;
  }
}
function Si(e) {
  for (; z !== null; ) {
    var t = z;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Da(4, t);
          } catch (u) {
            le(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              le(t, l, u);
            }
          }
          var o = t.return;
          try {
            fo(t);
          } catch (u) {
            le(t, o, u);
          }
          break;
        case 5:
          var s = t.return;
          try {
            fo(t);
          } catch (u) {
            le(t, s, u);
          }
      }
    } catch (u) {
      le(t, t.return, u);
    }
    if (t === e) {
      z = null;
      break;
    }
    var i = t.sibling;
    if (i !== null) {
      i.return = t.return, z = i;
      break;
    }
    z = t.return;
  }
}
var Mf = Math.ceil, ja = ht.ReactCurrentDispatcher, ls = ht.ReactCurrentOwner, Ae = ht.ReactCurrentBatchConfig, q = 0, pe = null, ie = null, me = 0, Re = 0, pn = $t(0), ce = 0, mr = null, Qt = 0, Fa = 0, os = 0, Jn = null, ke = null, ss = 0, En = 1 / 0, lt = null, Sa = !1, go = null, Et = null, Fr = !1, St = null, _a = 0, Xn = 0, vo = null, Xr = -1, Zr = 0;
function _e() {
  return q & 6 ? se() : Xr !== -1 ? Xr : Xr = se();
}
function bt(e) {
  return e.mode & 1 ? q & 2 && me !== 0 ? me & -me : _f.transition !== null ? (Zr === 0 && (Zr = $u()), Zr) : (e = W, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Au(e.type)), e) : 1;
}
function Ke(e, t, n, r) {
  if (50 < Xn) throw Xn = 0, vo = null, Error(k(185));
  vr(e, n, r), (!(q & 2) || e !== pe) && (e === pe && (!(q & 2) && (Fa |= n), ce === 4 && yt(e, me)), Pe(e, r), n === 1 && q === 0 && !(t.mode & 1) && (En = se() + 500, La && Lt()));
}
function Pe(e, t) {
  var n = e.callbackNode;
  Sp(e, t);
  var r = la(e, e === pe ? me : 0);
  if (r === 0) n !== null && Ts(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Ts(n), t === 1) e.tag === 0 ? Sf(_i.bind(null, e)) : lc(_i.bind(null, e)), vf(function() {
      !(q & 6) && Lt();
    }), n = null;
    else {
      switch (Lu(r)) {
        case 1:
          n = $o;
          break;
        case 4:
          n = Ru;
          break;
        case 16:
          n = aa;
          break;
        case 536870912:
          n = zu;
          break;
        default:
          n = aa;
      }
      n = rd(n, Yc.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Yc(e, t) {
  if (Xr = -1, Zr = 0, q & 6) throw Error(k(327));
  var n = e.callbackNode;
  if (yn() && e.callbackNode !== n) return null;
  var r = la(e, e === pe ? me : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = wa(e, r);
  else {
    t = r;
    var l = q;
    q |= 2;
    var o = Xc();
    (pe !== e || me !== t) && (lt = null, En = se() + 500, Vt(e, t));
    do
      try {
        Bf();
        break;
      } catch (i) {
        Jc(e, i);
      }
    while (!0);
    Qo(), ja.current = o, q = l, ie !== null ? t = 0 : (pe = null, me = 0, t = ce);
  }
  if (t !== 0) {
    if (t === 2 && (l = Ul(e), l !== 0 && (r = l, t = xo(e, l))), t === 1) throw n = mr, Vt(e, 0), yt(e, r), Pe(e, se()), n;
    if (t === 6) yt(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !Af(l) && (t = wa(e, r), t === 2 && (o = Ul(e), o !== 0 && (r = o, t = xo(e, o))), t === 1)) throw n = mr, Vt(e, 0), yt(e, r), Pe(e, se()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(k(345));
        case 2:
          Dt(e, ke, lt);
          break;
        case 3:
          if (yt(e, r), (r & 130023424) === r && (t = ss + 500 - se(), 10 < t)) {
            if (la(e, 0) !== 0) break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              _e(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = Jl(Dt.bind(null, e, ke, lt), t);
            break;
          }
          Dt(e, ke, lt);
          break;
        case 4:
          if (yt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var s = 31 - We(r);
            o = 1 << s, s = t[s], s > l && (l = s), r &= ~o;
          }
          if (r = l, r = se() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Mf(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Jl(Dt.bind(null, e, ke, lt), r);
            break;
          }
          Dt(e, ke, lt);
          break;
        case 5:
          Dt(e, ke, lt);
          break;
        default:
          throw Error(k(329));
      }
    }
  }
  return Pe(e, se()), e.callbackNode === n ? Yc.bind(null, e) : null;
}
function xo(e, t) {
  var n = Jn;
  return e.current.memoizedState.isDehydrated && (Vt(e, t).flags |= 256), e = wa(e, t), e !== 2 && (t = ke, ke = n, t !== null && yo(t)), e;
}
function yo(e) {
  ke === null ? ke = e : ke.push.apply(ke, e);
}
function Af(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var l = n[r], o = l.getSnapshot;
        l = l.value;
        try {
          if (!Ge(o(), l)) return !1;
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
function yt(e, t) {
  for (t &= ~os, t &= ~Fa, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - We(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function _i(e) {
  if (q & 6) throw Error(k(327));
  yn();
  var t = la(e, 0);
  if (!(t & 1)) return Pe(e, se()), null;
  var n = wa(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Ul(e);
    r !== 0 && (t = r, n = xo(e, r));
  }
  if (n === 1) throw n = mr, Vt(e, 0), yt(e, t), Pe(e, se()), n;
  if (n === 6) throw Error(k(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Dt(e, ke, lt), Pe(e, se()), null;
}
function is(e, t) {
  var n = q;
  q |= 1;
  try {
    return e(t);
  } finally {
    q = n, q === 0 && (En = se() + 500, La && Lt());
  }
}
function Wt(e) {
  St !== null && St.tag === 0 && !(q & 6) && yn();
  var t = q;
  q |= 1;
  var n = Ae.transition, r = W;
  try {
    if (Ae.transition = null, W = 1, e) return e();
  } finally {
    W = r, Ae.transition = n, q = t, !(q & 6) && Lt();
  }
}
function us() {
  Re = pn.current, X(pn);
}
function Vt(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, gf(n)), ie !== null) for (n = ie.return; n !== null; ) {
    var r = n;
    switch (Uo(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && ca();
        break;
      case 3:
        kn(), X(Ee), X(je), Xo();
        break;
      case 5:
        Jo(r);
        break;
      case 4:
        kn();
        break;
      case 13:
        X(ne);
        break;
      case 19:
        X(ne);
        break;
      case 10:
        Wo(r.type._context);
        break;
      case 22:
      case 23:
        us();
    }
    n = n.return;
  }
  if (pe = e, ie = e = Pt(e.current, null), me = Re = t, ce = 0, mr = null, os = Fa = Qt = 0, ke = Jn = null, Mt !== null) {
    for (t = 0; t < Mt.length; t++) if (n = Mt[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var l = r.next, o = n.pending;
      if (o !== null) {
        var s = o.next;
        o.next = l, r.next = s;
      }
      n.pending = r;
    }
    Mt = null;
  }
  return e;
}
function Jc(e, t) {
  do {
    var n = ie;
    try {
      if (Qo(), Gr.current = ya, xa) {
        for (var r = re.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        xa = !1;
      }
      if (Ht = 0, de = ue = re = null, Gn = !1, pr = 0, ls.current = null, n === null || n.return === null) {
        ce = 1, mr = t, ie = null;
        break;
      }
      e: {
        var o = e, s = n.return, i = n, u = t;
        if (t = me, i.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
          var c = u, f = i, p = f.tag;
          if (!(f.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var x = f.alternate;
            x ? (f.updateQueue = x.updateQueue, f.memoizedState = x.memoizedState, f.lanes = x.lanes) : (f.updateQueue = null, f.memoizedState = null);
          }
          var g = ui(s);
          if (g !== null) {
            g.flags &= -257, ci(g, s, i, o, t), g.mode & 1 && ii(o, c, t), t = g, u = c;
            var _ = t.updateQueue;
            if (_ === null) {
              var j = /* @__PURE__ */ new Set();
              j.add(u), t.updateQueue = j;
            } else _.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              ii(o, c, t), cs();
              break e;
            }
            u = Error(k(426));
          }
        } else if (ee && i.mode & 1) {
          var w = ui(s);
          if (w !== null) {
            !(w.flags & 65536) && (w.flags |= 256), ci(w, s, i, o, t), qo(Cn(u, i));
            break e;
          }
        }
        o = u = Cn(u, i), ce !== 4 && (ce = 2), Jn === null ? Jn = [o] : Jn.push(o), o = s;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, t &= -t, o.lanes |= t;
              var m = Lc(o, u, t);
              ni(o, m);
              break e;
            case 1:
              i = u;
              var d = o.type, h = o.stateNode;
              if (!(o.flags & 128) && (typeof d.getDerivedStateFromError == "function" || h !== null && typeof h.componentDidCatch == "function" && (Et === null || !Et.has(h)))) {
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var y = Oc(o, i, t);
                ni(o, y);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      ed(n);
    } catch (S) {
      t = S, ie === n && n !== null && (ie = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Xc() {
  var e = ja.current;
  return ja.current = ya, e === null ? ya : e;
}
function cs() {
  (ce === 0 || ce === 3 || ce === 2) && (ce = 4), pe === null || !(Qt & 268435455) && !(Fa & 268435455) || yt(pe, me);
}
function wa(e, t) {
  var n = q;
  q |= 2;
  var r = Xc();
  (pe !== e || me !== t) && (lt = null, Vt(e, t));
  do
    try {
      Vf();
      break;
    } catch (l) {
      Jc(e, l);
    }
  while (!0);
  if (Qo(), q = n, ja.current = r, ie !== null) throw Error(k(261));
  return pe = null, me = 0, ce;
}
function Vf() {
  for (; ie !== null; ) Zc(ie);
}
function Bf() {
  for (; ie !== null && !pp(); ) Zc(ie);
}
function Zc(e) {
  var t = nd(e.alternate, e, Re);
  e.memoizedProps = e.pendingProps, t === null ? ed(e) : ie = t, ls.current = null;
}
function ed(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = Of(n, t), n !== null) {
        n.flags &= 32767, ie = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        ce = 6, ie = null;
        return;
      }
    } else if (n = Lf(n, t, Re), n !== null) {
      ie = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      ie = t;
      return;
    }
    ie = t = e;
  } while (t !== null);
  ce === 0 && (ce = 5);
}
function Dt(e, t, n) {
  var r = W, l = Ae.transition;
  try {
    Ae.transition = null, W = 1, Uf(e, t, n, r);
  } finally {
    Ae.transition = l, W = r;
  }
  return null;
}
function Uf(e, t, n, r) {
  do
    yn();
  while (St !== null);
  if (q & 6) throw Error(k(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(k(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var o = n.lanes | n.childLanes;
  if (_p(e, o), e === pe && (ie = pe = null, me = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Fr || (Fr = !0, rd(aa, function() {
    return yn(), null;
  })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
    o = Ae.transition, Ae.transition = null;
    var s = W;
    W = 1;
    var i = q;
    q |= 4, ls.current = null, Df(e, n), Kc(n, e), uf(Gl), oa = !!Kl, Gl = Kl = null, e.current = n, Ff(n), fp(), q = i, W = s, Ae.transition = o;
  } else e.current = n;
  if (Fr && (Fr = !1, St = e, _a = l), o = e.pendingLanes, o === 0 && (Et = null), gp(n.stateNode), Pe(e, se()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (Sa) throw Sa = !1, e = go, go = null, e;
  return _a & 1 && e.tag !== 0 && yn(), o = e.pendingLanes, o & 1 ? e === vo ? Xn++ : (Xn = 0, vo = e) : Xn = 0, Lt(), null;
}
function yn() {
  if (St !== null) {
    var e = Lu(_a), t = Ae.transition, n = W;
    try {
      if (Ae.transition = null, W = 16 > e ? 16 : e, St === null) var r = !1;
      else {
        if (e = St, St = null, _a = 0, q & 6) throw Error(k(331));
        var l = q;
        for (q |= 4, z = e.current; z !== null; ) {
          var o = z, s = o.child;
          if (z.flags & 16) {
            var i = o.deletions;
            if (i !== null) {
              for (var u = 0; u < i.length; u++) {
                var c = i[u];
                for (z = c; z !== null; ) {
                  var f = z;
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Yn(8, f, o);
                  }
                  var p = f.child;
                  if (p !== null) p.return = f, z = p;
                  else for (; z !== null; ) {
                    f = z;
                    var x = f.sibling, g = f.return;
                    if (Hc(f), f === c) {
                      z = null;
                      break;
                    }
                    if (x !== null) {
                      x.return = g, z = x;
                      break;
                    }
                    z = g;
                  }
                }
              }
              var _ = o.alternate;
              if (_ !== null) {
                var j = _.child;
                if (j !== null) {
                  _.child = null;
                  do {
                    var w = j.sibling;
                    j.sibling = null, j = w;
                  } while (j !== null);
                }
              }
              z = o;
            }
          }
          if (o.subtreeFlags & 2064 && s !== null) s.return = o, z = s;
          else e: for (; z !== null; ) {
            if (o = z, o.flags & 2048) switch (o.tag) {
              case 0:
              case 11:
              case 15:
                Yn(9, o, o.return);
            }
            var m = o.sibling;
            if (m !== null) {
              m.return = o.return, z = m;
              break e;
            }
            z = o.return;
          }
        }
        var d = e.current;
        for (z = d; z !== null; ) {
          s = z;
          var h = s.child;
          if (s.subtreeFlags & 2064 && h !== null) h.return = s, z = h;
          else e: for (s = d; z !== null; ) {
            if (i = z, i.flags & 2048) try {
              switch (i.tag) {
                case 0:
                case 11:
                case 15:
                  Da(9, i);
              }
            } catch (S) {
              le(i, i.return, S);
            }
            if (i === s) {
              z = null;
              break e;
            }
            var y = i.sibling;
            if (y !== null) {
              y.return = i.return, z = y;
              break e;
            }
            z = i.return;
          }
        }
        if (q = l, Lt(), tt && typeof tt.onPostCommitFiberRoot == "function") try {
          tt.onPostCommitFiberRoot(Pa, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      W = n, Ae.transition = t;
    }
  }
  return !1;
}
function wi(e, t, n) {
  t = Cn(n, t), t = Lc(e, t, 1), e = Ct(e, t, 1), t = _e(), e !== null && (vr(e, 1, t), Pe(e, t));
}
function le(e, t, n) {
  if (e.tag === 3) wi(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      wi(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Et === null || !Et.has(r))) {
        e = Cn(n, e), e = Oc(t, e, 1), t = Ct(t, e, 1), e = _e(), t !== null && (vr(t, 1, e), Pe(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function qf(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = _e(), e.pingedLanes |= e.suspendedLanes & n, pe === e && (me & n) === n && (ce === 4 || ce === 3 && (me & 130023424) === me && 500 > se() - ss ? Vt(e, 0) : os |= n), Pe(e, t);
}
function td(e, t) {
  t === 0 && (e.mode & 1 ? (t = br, br <<= 1, !(br & 130023424) && (br = 4194304)) : t = 1);
  var n = _e();
  e = pt(e, t), e !== null && (vr(e, t, n), Pe(e, n));
}
function Hf(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), td(e, n);
}
function Qf(e, t) {
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
  r !== null && r.delete(t), td(e, n);
}
var nd;
nd = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Ee.current) Ce = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Ce = !1, $f(e, t, n);
    Ce = !!(e.flags & 131072);
  }
  else Ce = !1, ee && t.flags & 1048576 && oc(t, fa, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Jr(e, t), e = t.pendingProps;
      var l = _n(t, je.current);
      xn(t, n), l = es(null, t, r, e, l, n);
      var o = ts();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, be(r) ? (o = !0, da(t)) : o = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Go(t), l.updater = Ia, t.stateNode = l, l._reactInternals = t, ao(t, r, e, n), t = so(null, t, r, !0, o, n)) : (t.tag = 0, ee && o && Bo(t), Se(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Jr(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = Kf(r), e = qe(r, e), l) {
          case 0:
            t = oo(null, t, r, e, n);
            break e;
          case 1:
            t = fi(null, t, r, e, n);
            break e;
          case 11:
            t = di(null, t, r, e, n);
            break e;
          case 14:
            t = pi(null, t, r, qe(r.type, e), n);
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
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : qe(r, l), oo(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : qe(r, l), fi(e, t, r, l, n);
    case 3:
      e: {
        if (Mc(t), e === null) throw Error(k(387));
        r = t.pendingProps, o = t.memoizedState, l = o.element, pc(e, t), ga(t, r, null, n);
        var s = t.memoizedState;
        if (r = s.element, o.isDehydrated) if (o = { element: r, isDehydrated: !1, cache: s.cache, pendingSuspenseBoundaries: s.pendingSuspenseBoundaries, transitions: s.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
          l = Cn(Error(k(423)), t), t = hi(e, t, r, n, l);
          break e;
        } else if (r !== l) {
          l = Cn(Error(k(424)), t), t = hi(e, t, r, n, l);
          break e;
        } else for (ze = kt(t.stateNode.containerInfo.firstChild), $e = t, ee = !0, Qe = null, n = cc(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (wn(), r === l) {
            t = ft(e, t, n);
            break e;
          }
          Se(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return fc(t), e === null && to(t), r = t.type, l = t.pendingProps, o = e !== null ? e.memoizedProps : null, s = l.children, Yl(r, l) ? s = null : o !== null && Yl(r, o) && (t.flags |= 32), Fc(e, t), Se(e, t, s, n), t.child;
    case 6:
      return e === null && to(t), null;
    case 13:
      return Ac(e, t, n);
    case 4:
      return Yo(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Nn(t, null, r, n) : Se(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : qe(r, l), di(e, t, r, l, n);
    case 7:
      return Se(e, t, t.pendingProps, n), t.child;
    case 8:
      return Se(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Se(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, o = t.memoizedProps, s = l.value, Y(ha, r._currentValue), r._currentValue = s, o !== null) if (Ge(o.value, s)) {
          if (o.children === l.children && !Ee.current) {
            t = ft(e, t, n);
            break e;
          }
        } else for (o = t.child, o !== null && (o.return = t); o !== null; ) {
          var i = o.dependencies;
          if (i !== null) {
            s = o.child;
            for (var u = i.firstContext; u !== null; ) {
              if (u.context === r) {
                if (o.tag === 1) {
                  u = ut(-1, n & -n), u.tag = 2;
                  var c = o.updateQueue;
                  if (c !== null) {
                    c = c.shared;
                    var f = c.pending;
                    f === null ? u.next = u : (u.next = f.next, f.next = u), c.pending = u;
                  }
                }
                o.lanes |= n, u = o.alternate, u !== null && (u.lanes |= n), no(
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
            s.lanes |= n, i = s.alternate, i !== null && (i.lanes |= n), no(s, n, t), s = o.sibling;
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
        Se(e, t, l.children, n), t = t.child;
      }
      return t;
    case 9:
      return l = t.type, r = t.pendingProps.children, xn(t, n), l = Ve(l), r = r(l), t.flags |= 1, Se(e, t, r, n), t.child;
    case 14:
      return r = t.type, l = qe(r, t.pendingProps), l = qe(r.type, l), pi(e, t, r, l, n);
    case 15:
      return Ic(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : qe(r, l), Jr(e, t), t.tag = 1, be(r) ? (e = !0, da(t)) : e = !1, xn(t, n), $c(t, r, l), ao(t, r, l, n), so(null, t, r, !0, e, n);
    case 19:
      return Vc(e, t, n);
    case 22:
      return Dc(e, t, n);
  }
  throw Error(k(156, t.tag));
};
function rd(e, t) {
  return Tu(e, t);
}
function Wf(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Me(e, t, n, r) {
  return new Wf(e, t, n, r);
}
function ds(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Kf(e) {
  if (typeof e == "function") return ds(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === To) return 11;
    if (e === Ro) return 14;
  }
  return 2;
}
function Pt(e, t) {
  var n = e.alternate;
  return n === null ? (n = Me(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function ea(e, t, n, r, l, o) {
  var s = 2;
  if (r = e, typeof e == "function") ds(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else e: switch (e) {
    case tn:
      return Bt(n.children, l, o, t);
    case Po:
      s = 8, l |= 8;
      break;
    case bl:
      return e = Me(12, n, t, l | 2), e.elementType = bl, e.lanes = o, e;
    case Pl:
      return e = Me(13, n, t, l), e.elementType = Pl, e.lanes = o, e;
    case Tl:
      return e = Me(19, n, t, l), e.elementType = Tl, e.lanes = o, e;
    case fu:
      return Ma(n, l, o, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case du:
          s = 10;
          break e;
        case pu:
          s = 9;
          break e;
        case To:
          s = 11;
          break e;
        case Ro:
          s = 14;
          break e;
        case gt:
          s = 16, r = null;
          break e;
      }
      throw Error(k(130, e == null ? e : typeof e, ""));
  }
  return t = Me(s, n, t, l), t.elementType = e, t.type = r, t.lanes = o, t;
}
function Bt(e, t, n, r) {
  return e = Me(7, e, r, t), e.lanes = n, e;
}
function Ma(e, t, n, r) {
  return e = Me(22, e, r, t), e.elementType = fu, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function vl(e, t, n) {
  return e = Me(6, e, null, t), e.lanes = n, e;
}
function xl(e, t, n) {
  return t = Me(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Gf(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Xa(0), this.expirationTimes = Xa(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Xa(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function ps(e, t, n, r, l, o, s, i, u) {
  return e = new Gf(e, t, n, i, u), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = Me(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Go(o), e;
}
function Yf(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: en, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function ad(e) {
  if (!e) return Rt;
  e = e._reactInternals;
  e: {
    if (Gt(e) !== e || e.tag !== 1) throw Error(k(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (be(t.type)) {
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
    if (be(n)) return ac(e, n, t);
  }
  return t;
}
function ld(e, t, n, r, l, o, s, i, u) {
  return e = ps(n, r, !0, e, l, o, s, i, u), e.context = ad(null), n = e.current, r = _e(), l = bt(n), o = ut(r, l), o.callback = t ?? null, Ct(n, o, l), e.current.lanes = l, vr(e, l, r), Pe(e, r), e;
}
function Aa(e, t, n, r) {
  var l = t.current, o = _e(), s = bt(l);
  return n = ad(n), t.context === null ? t.context = n : t.pendingContext = n, t = ut(o, s), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Ct(l, t, s), e !== null && (Ke(e, l, s, o), Kr(e, l, s)), s;
}
function Na(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Ni(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function fs(e, t) {
  Ni(e, t), (e = e.alternate) && Ni(e, t);
}
function Jf() {
  return null;
}
var od = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function hs(e) {
  this._internalRoot = e;
}
Va.prototype.render = hs.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(k(409));
  Aa(e, t, null, null);
};
Va.prototype.unmount = hs.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Wt(function() {
      Aa(null, e, null, null);
    }), t[dt] = null;
  }
};
function Va(e) {
  this._internalRoot = e;
}
Va.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Du();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < xt.length && t !== 0 && t < xt[n].priority; n++) ;
    xt.splice(n, 0, e), n === 0 && Mu(e);
  }
};
function ms(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Ba(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function ki() {
}
function Xf(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function() {
        var c = Na(s);
        o.call(c);
      };
    }
    var s = ld(t, r, e, 0, null, !1, !1, "", ki);
    return e._reactRootContainer = s, e[dt] = s.current, sr(e.nodeType === 8 ? e.parentNode : e), Wt(), s;
  }
  for (; l = e.lastChild; ) e.removeChild(l);
  if (typeof r == "function") {
    var i = r;
    r = function() {
      var c = Na(u);
      i.call(c);
    };
  }
  var u = ps(e, 0, !1, null, null, !1, !1, "", ki);
  return e._reactRootContainer = u, e[dt] = u.current, sr(e.nodeType === 8 ? e.parentNode : e), Wt(function() {
    Aa(t, u, n, r);
  }), u;
}
function Ua(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var s = o;
    if (typeof l == "function") {
      var i = l;
      l = function() {
        var u = Na(s);
        i.call(u);
      };
    }
    Aa(t, s, e, l);
  } else s = Xf(n, t, e, l, r);
  return Na(s);
}
Ou = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Vn(t.pendingLanes);
        n !== 0 && (Lo(t, n | 1), Pe(t, se()), !(q & 6) && (En = se() + 500, Lt()));
      }
      break;
    case 13:
      Wt(function() {
        var r = pt(e, 1);
        if (r !== null) {
          var l = _e();
          Ke(r, e, 1, l);
        }
      }), fs(e, 1);
  }
};
Oo = function(e) {
  if (e.tag === 13) {
    var t = pt(e, 134217728);
    if (t !== null) {
      var n = _e();
      Ke(t, e, 134217728, n);
    }
    fs(e, 134217728);
  }
};
Iu = function(e) {
  if (e.tag === 13) {
    var t = bt(e), n = pt(e, t);
    if (n !== null) {
      var r = _e();
      Ke(n, e, t, r);
    }
    fs(e, t);
  }
};
Du = function() {
  return W;
};
Fu = function(e, t) {
  var n = W;
  try {
    return W = e, t();
  } finally {
    W = n;
  }
};
Al = function(e, t, n) {
  switch (t) {
    case "input":
      if ($l(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = $a(r);
            if (!l) throw Error(k(90));
            mu(r), $l(r, l);
          }
        }
      }
      break;
    case "textarea":
      vu(e, n);
      break;
    case "select":
      t = n.value, t != null && hn(e, !!n.multiple, t, !1);
  }
};
Nu = is;
ku = Wt;
var Zf = { usingClientEntryPoint: !1, Events: [yr, ln, $a, _u, wu, is] }, Fn = { findFiberByHostInstance: Ft, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, eh = { bundleType: Fn.bundleType, version: Fn.version, rendererPackageName: Fn.rendererPackageName, rendererConfig: Fn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ht.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = bu(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Fn.findFiberByHostInstance || Jf, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Mr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Mr.isDisabled && Mr.supportsFiber) try {
    Pa = Mr.inject(eh), tt = Mr;
  } catch {
  }
}
Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Zf;
Oe.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ms(t)) throw Error(k(200));
  return Yf(e, t, null, n);
};
Oe.createRoot = function(e, t) {
  if (!ms(e)) throw Error(k(299));
  var n = !1, r = "", l = od;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = ps(e, 1, !1, null, null, n, !1, r, l), e[dt] = t.current, sr(e.nodeType === 8 ? e.parentNode : e), new hs(t);
};
Oe.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(k(188)) : (e = Object.keys(e).join(","), Error(k(268, e)));
  return e = bu(t), e = e === null ? null : e.stateNode, e;
};
Oe.flushSync = function(e) {
  return Wt(e);
};
Oe.hydrate = function(e, t, n) {
  if (!Ba(t)) throw Error(k(200));
  return Ua(null, e, t, !0, n);
};
Oe.hydrateRoot = function(e, t, n) {
  if (!ms(e)) throw Error(k(405));
  var r = n != null && n.hydratedSources || null, l = !1, o = "", s = od;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = ld(t, null, e, 1, n ?? null, l, !1, o, s), e[dt] = t.current, sr(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
    n,
    l
  );
  return new Va(t);
};
Oe.render = function(e, t, n) {
  if (!Ba(t)) throw Error(k(200));
  return Ua(null, e, t, !1, n);
};
Oe.unmountComponentAtNode = function(e) {
  if (!Ba(e)) throw Error(k(40));
  return e._reactRootContainer ? (Wt(function() {
    Ua(null, null, e, !1, function() {
      e._reactRootContainer = null, e[dt] = null;
    });
  }), !0) : !1;
};
Oe.unstable_batchedUpdates = is;
Oe.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Ba(n)) throw Error(k(200));
  if (e == null || e._reactInternals === void 0) throw Error(k(38));
  return Ua(e, t, n, !1, r);
};
Oe.version = "18.3.1-next-f1338f8080-20240426";
function sd() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(sd);
    } catch (e) {
      console.error(e);
    }
}
sd(), su.exports = Oe;
var th = su.exports, id, Ci = th;
id = Ci.createRoot, Ci.hydrateRoot;
function nh(e) {
  return !e.product && !e.service ? {
    enabled: !1,
    reason: "Esta oportunidade ainda não está ligada a um produto ou serviço do portfólio; sem isso não é possível montar o business case."
  } : e.evidence.length === 0 ? {
    enabled: !1,
    reason: "Esta oportunidade ainda não tem evidências registradas; sem elas não é possível montar o business case."
  } : { enabled: !0, reason: null };
}
function rh(e, t) {
  const n = e.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 40).replace(/-+$/, "") || "oportunidade", r = (l) => String(l).padStart(2, "0");
  return `business-case-${n}-${t.getFullYear()}-${r(t.getMonth() + 1)}-${r(t.getDate())}.pdf`;
}
function ah(e) {
  return e === "ia" || e === "mista" || e === "deterministica" ? e : "desconhecida";
}
const Jt = "Rascunho para revisão do vendedor.";
function lh(e, t) {
  return e === "ia" ? `Texto melhorado por IA. ${Jt}` : e === "mista" ? `Texto parcialmente melhorado por IA; o restante usa o texto padrão. ${Jt}` : e === "desconhecida" ? t ? `Business case baixado. Não foi possível confirmar se a IA foi usada. ${Jt}` : `Business case baixado. ${Jt}` : t ? `Texto padrão usado (IA indisponível). ${Jt}` : `Business case baixado. ${Jt}`;
}
const D = "/api/v1/modules/lead_tracker";
function ud(e) {
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
function Sr(e, t) {
  const n = URL.createObjectURL(e), r = document.createElement("a");
  r.href = n, r.download = t, r.click(), URL.revokeObjectURL(n);
}
async function F(e) {
  try {
    return (await e.json()).detail ?? "Falha ao processar a solicitação.";
  } catch {
    return "Falha ao processar a solicitação.";
  }
}
async function oh(e, t) {
  const n = await fetch(`${D}/exports/pdf`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ rows: e.map(ud), filters_summary: t })
  });
  if (!n.ok) throw new Error(await F(n));
  Sr(await n.blob(), "oportunidades.pdf");
}
async function sh(e) {
  const t = await fetch(`${D}/exports/excel`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ rows: e.map(ud) })
  });
  if (!t.ok) throw new Error(await F(t));
  Sr(await t.blob(), "oportunidades.xlsx");
}
async function ih(e, t, n) {
  let r;
  try {
    r = await fetch(`${D}/exports/business-case`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ opportunity_id: e, usar_ia: t })
    });
  } catch (l) {
    throw l instanceof TypeError ? new Error("Não foi possível conectar ao módulo. Tente novamente.") : l;
  }
  if (!r.ok) throw new Error(await F(r));
  return Sr(await r.blob(), rh(n, /* @__PURE__ */ new Date())), { fonte: ah(r.headers.get("X-Prosa-Fonte")) };
}
async function cd(e, t = null) {
  const n = await fetch(`${D}/email-draft`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      opportunity_id: e.id,
      contact_id: t,
      company_name: e.companyName,
      opportunity_type: e.type,
      evidence: e.evidence,
      justification: e.justification,
      portfolio: { produtos_atuais: e.currentProducts, produtos_recomendados: e.recommendedProducts }
    })
  });
  if (!n.ok) throw new Error(await F(n));
  return n.json();
}
async function uh(e, t) {
  const n = await fetch(
    `${D}/opportunities/${e}/next-suggested-touch?rep_id=${encodeURIComponent(t)}`
  );
  if (!n.ok) throw new Error(await F(n));
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
    lastContactId: r.last_contact_id,
    blockReason: r.block_reason ?? null,
    lastContactBlocked: r.last_contact_blocked ?? !1
  };
}
async function ch(e, t, n, r, l, o = !1) {
  const s = await fetch(`${D}/opportunities/${e}/outreach-touches`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ rep_id: t, contact_id: l, channel: n, reason_label: r, acknowledge_block: o })
  });
  if (!s.ok) throw new Error(await F(s));
}
async function dh(e) {
  const t = await fetch(`${D}/companies/${e}/do-not-contact`);
  if (!t.ok) throw new Error(await F(t));
  return t.json();
}
async function ph(e, t) {
  const n = await fetch(`${D}/companies/${e}/do-not-contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      rep_id: t.repId,
      contact_id: t.contactId,
      channel: t.channel,
      reason: t.reason,
      comment: t.comment.trim() || null
    })
  });
  if (!n.ok) throw new Error(await F(n));
  return n.json();
}
async function fh(e, t, n) {
  const r = await fetch(`${D}/do-not-contact/${e}/lift`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ rep_id: t, lift_reason: n.trim() || null })
  });
  if (!r.ok) throw new Error(await F(r));
  return r.json();
}
async function dd(e) {
  const t = await fetch(`${D}/companies/${e}/contacts`);
  if (!t.ok) throw new Error(await F(t));
  return t.json();
}
async function pd() {
  const e = await fetch(`${D}/settings`);
  if (!e.ok) throw new Error(await F(e));
  return e.json();
}
async function Ei(e, t, n) {
  const r = await fetch(`${D}/settings/${e}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ enabled: t, fields: n })
  });
  if (!r.ok) throw new Error(await F(r));
  return r.json();
}
async function fd() {
  const e = await fetch(`${D}/settings/ai`);
  if (!e.ok) throw new Error(await F(e));
  return e.json();
}
async function hh(e, t, n) {
  const r = await fetch(`${D}/settings/ai`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ provider: e, api_key: t, model: n })
  });
  if (!r.ok) throw new Error(await F(r));
  return r.json();
}
async function mh() {
  const e = await fetch(`${D}/settings/config/aging-sla-days`);
  if (!e.ok) throw new Error(await F(e));
  return e.json();
}
async function gh(e) {
  const t = await fetch(`${D}/settings/config/aging-sla-days`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ days: e })
  });
  if (!t.ok) throw new Error(await F(t));
  return t.json();
}
async function vh() {
  const e = await fetch(`${D}/settings/config/rep-category-min-sample`);
  if (!e.ok) throw new Error(await F(e));
  return e.json();
}
async function xh(e) {
  const t = await fetch(`${D}/settings/config/rep-category-min-sample`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ min_sample: e })
  });
  if (!t.ok) throw new Error(await F(t));
  return t.json();
}
async function yh() {
  const e = await fetch(`${D}/settings/config/geo-promotion`);
  if (!e.ok) throw new Error(await F(e));
  return e.json();
}
async function jh(e, t) {
  const n = await fetch(`${D}/settings/config/geo-promotion`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ min_score: e, daily_cap: t })
  });
  if (!n.ok) throw new Error(await F(n));
  return n.json();
}
async function Sh(e) {
  const t = await fetch(`${D}/settings/${e}/test`, { method: "POST" });
  if (!t.ok) throw new Error(await F(t));
  return t.json();
}
function _h(e) {
  return e === null ? "baixa" : e >= 0.7 ? "alta" : e >= 0.4 ? "média" : "baixa";
}
function qa(e) {
  return {
    id: e.id,
    companyId: e.company_id,
    companyName: e.company_name,
    isCustomer: e.is_customer,
    opportunityScore: e.opportunity_score,
    financialPotential: e.financial_potential,
    financialPotentialBasis: e.financial_potential_basis ?? null,
    type: e.type,
    product: e.product_name,
    service: e.service_name,
    priority: _h(e.opportunity_score),
    sources: e.sources,
    status: e.status,
    evidence: e.evidence,
    justification: e.justification,
    confidenceScore: e.confidence_score,
    // Sem fonte real ainda de "o que a empresa já tem" (Fase B.1 não popula
    // portfólio por empresa — ver docs/implementacao/specs/fase-b1-ligacao-real.md).
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
    dismissalReason: e.dismissal_reason,
    discoveryPrompt: e.discovery_prompt ?? null,
    rootCauseStated: e.root_cause_stated ?? null,
    triggerEvent: e.trigger_event ?? null,
    championStake: e.champion_stake ?? null,
    discoverySkipped: e.discovery_skipped ?? !1,
    discoverySkipReason: e.discovery_skip_reason ?? null,
    discoveryPending: e.discovery_pending ?? !1,
    companyWebsite: e.company_website ?? null,
    isAging: e.is_aging ?? !1
  };
}
async function hd() {
  const e = await fetch(`${D}/opportunities`);
  if (!e.ok) throw new Error(await F(e));
  return (await e.json()).map(qa);
}
async function wh(e, t, n = null) {
  const r = await fetch(`${D}/opportunities/${e}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      scope_note: t.scopeNote,
      criticality: t.criticality,
      severity_note: t.severityNote,
      rep_id: n || null
    })
  });
  if (!r.ok) throw new Error(await F(r));
  const l = await r.json();
  return qa(l);
}
async function Nh(e, t, n, r = null, l = null) {
  const o = await fetch(`${D}/opportunities/${e}/status`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ new_status: t, note: n, dismissal_reason: r, skip_discovery_reason: l })
  });
  if (!o.ok) throw new Error(await F(o));
  const s = await o.json();
  return qa(s);
}
async function kh(e, t, n = null) {
  const r = await fetch(`${D}/opportunities/${e}/discovery`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      root_cause_stated: t.rootCauseStated,
      trigger_event: t.triggerEvent,
      champion_stake: t.championStake,
      rep_id: n || null
    })
  });
  if (!r.ok) throw new Error(await F(r));
  const l = await r.json();
  return qa(l);
}
async function Ch() {
  const e = await fetch(`${D}/portfolio-suggestions`, { method: "POST" });
  if (!e.ok) throw new Error(await F(e));
  return e.json();
}
async function Eh(e) {
  const t = await fetch(`${D}/portfolio-suggestions/apply`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ items: e })
  });
  if (!t.ok) throw new Error(await F(t));
  return t.json();
}
async function bh() {
  const e = await fetch(`${D}/field-conflicts`);
  if (!e.ok) throw new Error(await F(e));
  return e.json();
}
async function Ph(e, t, n) {
  const r = await fetch(`${D}/field-conflicts/${e}/resolve`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chosen_source: t, rep_id: n || null })
  });
  if (!r.ok) throw new Error(await F(r));
}
async function Th(e) {
  const t = await fetch(`${D}/opportunities/${e}/audit`);
  if (!t.ok) throw new Error(await F(t));
  return t.json();
}
async function Rh(e, t, n = null) {
  const r = await fetch(`${D}/companies/${e}/renewal-date`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ renewal_date: t, rep_id: n || null })
  });
  if (!r.ok) throw new Error(await F(r));
}
async function zh() {
  const e = await fetch(`${D}/sync`, { method: "POST" });
  if (!e.ok) throw new Error(await F(e));
  return (await e.json()).map((n) => ({
    sourceId: n.source_id,
    companiesSynced: n.companies_synced,
    contactsSynced: n.contacts_synced,
    errors: n.errors
  }));
}
async function $h(e = "monthly") {
  const t = await fetch(`${D}/dashboard-metrics?period_type=${e}`);
  if (!t.ok) throw new Error(await F(t));
  const n = await t.json(), r = (l) => l.map(([o, s]) => ({ label: o, value: s }));
  return {
    kpis: {
      opportunitiesIdentified: n.kpis.opportunities_identified,
      customersAnalyzed: n.kpis.customers_analyzed,
      prospectsAnalyzed: n.kpis.prospects_analyzed,
      financialPotentialTotal: n.kpis.financial_potential_total,
      opportunitiesWithoutValue: n.kpis.opportunities_without_value ?? 0,
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
async function Lh() {
  const e = await fetch(`${D}/dashboard-metrics/rep-category-reach`);
  if (!e.ok) throw new Error(await F(e));
  const t = await e.json();
  return {
    minSample: t.min_sample,
    unassignedCount: t.unassigned_count,
    cells: t.cells.map((n) => ({
      repId: n.rep_id,
      category: n.category,
      n: n.n,
      insufficient: n.insufficient,
      reachCounts: n.reach_counts,
      reachRatios: n.reach_ratios,
      opportunityIds: n.opportunity_ids
    })),
    teamMedian: t.team_median
  };
}
function md(e) {
  return {
    referenceProductId: e.reference_product_id,
    placeCategory: e.place_category,
    companySizeHint: e.company_size_hint,
    radiusKm: e.radius_km,
    searchOriginAddress: e.search_origin_address
  };
}
async function Oh() {
  const e = await fetch(`${D}/icp-profile`);
  if (!e.ok) throw new Error(await F(e));
  return md(await e.json());
}
async function Ih(e) {
  const t = await fetch(`${D}/icp-profile`, {
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
  if (!t.ok) throw new Error(await F(t));
  return md(await t.json());
}
async function Dh() {
  const e = await fetch(`${D}/icp-suggestion`);
  if (!e.ok) throw new Error(await F(e));
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
function Ar(e) {
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
async function Fh(e) {
  const t = await fetch(`${D}/geo-discovery/run`, {
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
  if (!t.ok) throw new Error(await F(t));
  const n = await t.json();
  return {
    promoted: n.promoted.map(Ar),
    deferred: n.deferred.map(Ar),
    rejected: n.rejected.map(Ar),
    alreadyKnown: (n.already_known ?? []).map(Ar)
  };
}
function yl(e, t) {
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
function gd(e) {
  return [
    ...e.promoted.map((t) => yl(t, "Pronto para contato")),
    ...e.deferred.map((t) => yl(t, "Fila para amanhã")),
    ...e.rejected.map((t) => yl(t, "Fora do critério"))
  ];
}
async function Mh(e, t) {
  const n = await fetch(`${D}/exports/pdf`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ rows: gd(e), filters_summary: t })
  });
  if (!n.ok) throw new Error(await F(n));
  Sr(await n.blob(), "prospeccao-geografica.pdf");
}
async function Ah(e) {
  const t = await fetch(`${D}/exports/excel`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ rows: gd(e) })
  });
  if (!t.ok) throw new Error(await F(t));
  Sr(await t.blob(), "prospeccao-geografica.xlsx");
}
async function bi() {
  const e = await fetch(`${D}/vendors`);
  if (!e.ok) throw new Error(await F(e));
  return e.json();
}
async function Vh(e) {
  const t = await fetch(`${D}/vendors`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e })
  });
  if (!t.ok) throw new Error(await F(t));
  return t.json();
}
async function vd() {
  const e = await fetch(`${D}/products`);
  if (!e.ok) throw new Error(await F(e));
  return e.json();
}
async function Bh(e, t, n) {
  const r = await fetch(`${D}/products`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ vendor_id: e, name: t, category: n || null })
  });
  if (!r.ok) throw new Error(await F(r));
  return r.json();
}
async function Uh(e) {
  const t = await fetch(`${D}/products/${e}`, { method: "DELETE" });
  if (!t.ok) throw new Error(await F(t));
}
async function qh() {
  const e = await fetch(`${D}/services`);
  if (!e.ok) throw new Error(await F(e));
  return e.json();
}
async function Hh(e, t) {
  const n = await fetch(`${D}/services`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e, category: t || null })
  });
  if (!n.ok) throw new Error(await F(n));
  return n.json();
}
async function Qh(e) {
  const t = await fetch(`${D}/services/${e}`, { method: "DELETE" });
  if (!t.ok) throw new Error(await F(t));
}
async function Wh() {
  const e = await fetch(`${D}/rules`);
  if (!e.ok) throw new Error(await F(e));
  return e.json();
}
async function Kh(e) {
  const t = await fetch(`${D}/rules`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  if (!t.ok) throw new Error(await F(t));
  return t.json();
}
async function Gh(e) {
  const t = await fetch(`${D}/rules/${e}`, { method: "DELETE" });
  if (!t.ok) throw new Error(await F(t));
}
async function Yh(e, t) {
  const n = new FormData();
  n.append("file", e), n.append("mode", t);
  const r = await fetch(`${D}/csv-import`, { method: "POST", body: n });
  if (!r.ok) throw new Error(await F(r));
  return r.json();
}
async function Jh(e, t) {
  const n = await fetch(`${D}/rep-targets?period_type=${e}&period_key=${encodeURIComponent(t)}`);
  if (!n.ok) throw new Error(await F(n));
  return n.json();
}
async function Xh(e) {
  const t = await fetch(`${D}/rep-targets`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  if (!t.ok) throw new Error(await F(t));
  return t.json();
}
async function Zh(e = !1) {
  const t = await fetch(`${D}/settings/salesforce/field-catalog?force_refresh=${e}`);
  if (!t.ok) throw new Error(await F(t));
  return (await t.json()).map((r) => ({
    sourceFieldApiName: r.source_field_api_name,
    sourceFieldLabel: r.source_field_label,
    fieldType: r.field_type,
    role: r.role,
    broken: r.broken,
    brokenMessage: r.broken_message
  }));
}
async function em(e, t, n) {
  const r = await fetch(`${D}/settings/salesforce/field-mapping`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ source_field_api_name: e, source_field_label: t, role: n })
  });
  if (!r.ok) throw new Error(await F(r));
  const l = await r.json();
  return { reassignedFromApiName: l.reassigned_from_api_name, reassignedFromLabel: l.reassigned_from_label };
}
async function tm(e) {
  const t = await fetch(`${D}/settings/salesforce/field-mapping/${encodeURIComponent(e)}`, {
    method: "DELETE"
  });
  if (!t.ok) throw new Error(await F(t));
}
const nm = [
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
], rm = [
  "#3987e5",
  "#d95926",
  "#199e70",
  "#c98500",
  "#d55181",
  "#008300",
  "#9085e9",
  "#e66767"
], am = "#2a78d6", lm = "#3987e5", om = 8;
function sm(e, t, n = om) {
  if (e.length <= n) return e.map((s) => ({ label: t(s), value: s.value }));
  const r = e.slice(0, n - 1), o = e.slice(n - 1).reduce((s, i) => s + i.value, 0);
  return [...r.map((s) => ({ label: t(s), value: s.value })), { label: "Outros", value: o }];
}
function gs() {
  const [e, t] = v.useState(null);
  return { tooltip: e, setTooltip: t };
}
function vs({ tooltip: e }) {
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
function Pi() {
  return document.documentElement.classList.contains("theme-dark") || document.body.classList.contains("theme-dark");
}
function Ha() {
  const [e, t] = v.useState(Pi);
  return v.useEffect(() => {
    const n = new MutationObserver(() => t(Pi()));
    return n.observe(document.documentElement, { attributes: !0, attributeFilter: ["class"] }), n.observe(document.body, { attributes: !0, attributeFilter: ["class"] }), () => n.disconnect();
  }, []), e;
}
function Xt({ data: e, formatValue: t, emptyMessage: n }) {
  const { tooltip: r, setTooltip: l } = gs(), o = Ha() ? lm : am;
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
        /* @__PURE__ */ a.jsx(vs, { tooltip: r })
      ]
    }
  );
}
function jl({ id: e, title: t, description: n, actions: r, children: l }) {
  return /* @__PURE__ */ a.jsxs("section", { className: "lt-dash-section", "aria-labelledby": `${e}-title`, children: [
    /* @__PURE__ */ a.jsxs("div", { className: "lt-dash-section__header", children: [
      /* @__PURE__ */ a.jsxs("div", { children: [
        /* @__PURE__ */ a.jsx("h3", { id: `${e}-title`, children: t }),
        n && /* @__PURE__ */ a.jsx("p", { className: "lt-hint", children: n })
      ] }),
      r
    ] }),
    l
  ] });
}
const jo = 140, ka = 60, im = 22, Ti = jo / 2;
function Ri(e) {
  const t = (e - 90) * Math.PI / 180;
  return [Ti + ka * Math.cos(t), Ti + ka * Math.sin(t)];
}
function um(e, t) {
  const [n, r] = Ri(e), [l, o] = Ri(t), s = t - e > 180 ? 1 : 0;
  return `M ${n} ${r} A ${ka} ${ka} 0 ${s} 1 ${l} ${o}`;
}
function cm({ data: e, emptyMessage: t }) {
  const { tooltip: n, setTooltip: r } = gs(), l = Ha() ? rm : nm;
  if (e.length === 0)
    return /* @__PURE__ */ a.jsx("p", { className: "lt-empty", role: "status", children: t });
  const o = sm(e, (c) => c.label), s = o.reduce((c, f) => c + f.value, 0) || 1;
  let i = 0;
  const u = o.map((c, f) => {
    const p = i, x = c.value / s * 360;
    return i += x, { ...c, startAngle: p, endAngle: i, color: l[f % l.length] };
  });
  return /* @__PURE__ */ a.jsxs("div", { style: { display: "flex", gap: 16, alignItems: "center", position: "relative" }, children: [
    /* @__PURE__ */ a.jsx("svg", { width: jo, height: jo, role: "img", "aria-label": o.map((c) => `${c.label}: ${c.value}`).join("; "), children: u.map((c) => /* @__PURE__ */ a.jsx(
      "path",
      {
        d: um(c.startAngle, c.endAngle),
        fill: "none",
        stroke: c.color,
        strokeWidth: im,
        onMouseEnter: (f) => r({ x: f.clientX, y: f.clientY, label: c.label, value: `${c.value} (${Math.round(c.value / s * 100)}%)` }),
        onMouseMove: (f) => r({ x: f.clientX, y: f.clientY, label: c.label, value: `${c.value} (${Math.round(c.value / s * 100)}%)` }),
        onMouseLeave: () => r(null)
      },
      c.label
    )) }),
    /* @__PURE__ */ a.jsx("ul", { style: { listStyle: "none", margin: 0, padding: 0, fontSize: 11, display: "flex", flexDirection: "column", gap: 6 }, children: u.map((c) => /* @__PURE__ */ a.jsxs("li", { style: { display: "flex", alignItems: "center", gap: 6 }, children: [
      /* @__PURE__ */ a.jsx("span", { style: { width: 8, height: 8, borderRadius: 2, background: c.color, display: "inline-block" }, "aria-hidden": "true" }),
      /* @__PURE__ */ a.jsx("span", { style: { color: "hsl(var(--text))" }, children: c.label }),
      /* @__PURE__ */ a.jsxs("span", { style: { color: "hsl(var(--text-muted))", fontVariantNumeric: "tabular-nums" }, children: [
        Math.round(c.value / s * 100),
        "%"
      ] })
    ] }, c.label)) }),
    /* @__PURE__ */ a.jsx(vs, { tooltip: n })
  ] });
}
function rt(e) {
  return e.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });
}
function at(e) {
  return e.toLocaleString("pt-BR");
}
function fn(e) {
  return e > 0 && e < 5e-3 ? "<1%" : e < 1 && e >= 0.995 ? ">99%" : `${Math.round(e * 100)}%`;
}
const dm = ["#5598e7", "#2a78d6", "#1c5cab", "#104281"], pm = ["#7db8f0", "#5598e7", "#2a78d6", "#1c5cab"];
function zi({ stages: e, counts: t }) {
  const { tooltip: n, setTooltip: r } = gs(), l = Ha() ? pm : dm, o = Math.max(...e.map((s) => t[s] ?? 0), 1);
  return /* @__PURE__ */ a.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 8, position: "relative" }, role: "img", "aria-label": e.map((s) => `${s}: ${t[s] ?? 0}`).join("; "), children: [
    e.map((s, i) => {
      const u = t[s] ?? 0, c = u / o * 100;
      return /* @__PURE__ */ a.jsxs("div", { children: [
        /* @__PURE__ */ a.jsxs("div", { style: { display: "flex", justifyContent: "space-between", fontSize: 11, color: "hsl(var(--text-muted))", marginBottom: 3 }, children: [
          /* @__PURE__ */ a.jsx("span", { children: s }),
          /* @__PURE__ */ a.jsx("span", { style: { fontVariantNumeric: "tabular-nums" }, children: u })
        ] }),
        /* @__PURE__ */ a.jsx(
          "div",
          {
            style: { height: 16, borderRadius: 4, background: l[i % l.length], width: `${c}%`, minWidth: 4 },
            onMouseEnter: (f) => r({ x: f.clientX, y: f.clientY, label: s, value: String(u) }),
            onMouseMove: (f) => r({ x: f.clientX, y: f.clientY, label: s, value: String(u) }),
            onMouseLeave: () => r(null)
          }
        )
      ] }, s);
    }),
    /* @__PURE__ */ a.jsx(vs, { tooltip: n })
  ] });
}
function $({ text: e }) {
  const [t, n] = v.useState(!1), r = v.useRef(null);
  return v.useEffect(() => {
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
const fm = ["Detectadas", "Qualificadas", "Abordadas", "Em negociação"], jn = {
  detected: "Detectadas",
  qualified: "Qualificadas",
  reviewed: "Revisadas",
  contacted: "Abordadas",
  opportunity: "Em negociação"
}, xd = ["detected", "qualified", "reviewed", "contacted", "opportunity"], hm = "contacted", Sl = (e) => jn[e] ?? e, _l = (e, t, n) => e === 1 ? t : n;
function mm(e, t, n, r, l, o) {
  const s = `Representante ${t}, categoria ${n}`;
  if (!e)
    return {
      kind: "none",
      text: "—",
      intensity: null,
      fragile: !1,
      ariaLabel: `${s}: sem oportunidades`,
      tooltip: "Sem oportunidades neste par.",
      opportunityIds: []
    };
  const i = xd.map((x) => `${Sl(x)}: ${e.reachCounts[x] ?? 0}`).join(" · "), u = e.reachRatios[r];
  if (e.insufficient || u === null || u === void 0)
    return {
      kind: "insufficient",
      text: `n=${e.n}`,
      intensity: null,
      fragile: !1,
      ariaLabel: `n=${e.n}: ${s}, dado insuficiente, ${e.n} de ${l} oportunidades necessárias`,
      tooltip: `Dado insuficiente: ${e.n} de ${l} necessárias. Nenhuma leitura é segura — acompanhe o volume ou olhe os deals um a um.
${i}`,
      opportunityIds: e.opportunityIds
    };
  const c = e.reachCounts[r] ?? 0, f = e.n < l * 2, p = o === null ? "" : `Mediana do time nesta categoria: ${fn(o)}.`;
  return {
    kind: "value",
    text: fn(u),
    intensity: u,
    fragile: f,
    // Nome acessível começa pelo texto visível (SC 2.5.3 "label in name") e carrega o que o
    // tooltip diria — `title` sozinho não chega a teclado/toque.
    ariaLabel: `${fn(u)}: ${s}, ${c} de ${e.n} chegaram a ${Sl(r)}${o === null ? "" : `, mediana do time ${fn(o)}`}${f ? ", amostra pequena" : ""}`,
    tooltip: [
      `${c} de ${e.n} chegaram a ${Sl(r)} ou além.`,
      i,
      p,
      f ? "Amostra pequena: percentuais com n baixo oscilam muito." : ""
    ].filter(Boolean).join(`
`),
    opportunityIds: e.opportunityIds
  };
}
const yd = (e, t) => e.localeCompare(t, "pt-BR"), jd = (e) => [...new Set(e.cells.map((t) => t.repId))].sort(yd), Sd = (e) => [...new Set(e.cells.map((t) => t.category))].sort(yd);
function gm(e, t, n, r) {
  const l = jd(e).filter((p) => !n.has(p)), o = Sd(e).filter((p) => !r.has(p)), s = new Map(e.cells.map((p) => [`${p.repId}\0${p.category}`, p])), i = o.map((p) => {
    var x;
    return ((x = e.teamMedian[p]) == null ? void 0 : x[t]) ?? null;
  }), u = l.map((p) => o.map((x, g) => mm(s.get(`${p}\0${x}`), p, x, t, e.minSample, i[g]))), c = u.flat().filter((p) => p.kind === "insufficient").length, f = `${l.length} ${_l(l.length, "representante", "representantes")}, ${o.length} ${_l(o.length, "categoria", "categorias")}, ${c} ${_l(c, "par sem dado suficiente", "pares sem dado suficiente")}`;
  return { reps: l, categories: o, rows: u, reference: i, summary: f };
}
const vm = [[236, 242, 251], [11, 61, 130]], xm = [[38, 50, 66], [122, 182, 255]], ym = (e, t, n) => [0, 1, 2].map((r) => Math.round(e[r] + (t[r] - e[r]) * n));
function $i([e, t, n]) {
  const r = (l) => {
    const o = l / 255;
    return o <= 0.03928 ? o / 12.92 : ((o + 0.055) / 1.055) ** 2.4;
  };
  return 0.2126 * r(e) + 0.7152 * r(t) + 0.0722 * r(n);
}
function Li(e, t) {
  const [n, r] = [$i(e), $i(t)].sort((l, o) => o - l);
  return (n + 0.05) / (r + 0.05);
}
function jm(e, t) {
  const [n, r] = t ? xm : vm, l = ym(n, r, Math.min(1, Math.max(0, e))), o = Li(l, [0, 0, 0]) >= Li(l, [255, 255, 255]) ? [0, 0, 0] : [255, 255, 255];
  return { background: `rgb(${l.join(",")})`, color: `rgb(${o.join(",")})`, rgb: l };
}
const Sm = "Retrato do momento, não taxa de conversão: mostra quantas oportunidades já chegaram a cada estágio, sem histórico de transição. Use para decidir o que perguntar ao rep, não para avaliá-lo.";
function Oi(e, t) {
  const n = new Set(e);
  return n.has(t) ? n.delete(t) : n.add(t), n;
}
function _m() {
  const e = Ha(), [t, n] = v.useState(null), [r, l] = v.useState(null), [o, s] = v.useState(hm), [i, u] = v.useState(/* @__PURE__ */ new Set()), [c, f] = v.useState(/* @__PURE__ */ new Set()), [p, x] = v.useState(null), [g, _] = v.useState(null), [j, w] = v.useState(null), m = v.useRef(null), d = v.useRef(null), h = v.useRef(null), y = v.useCallback(() => {
    l(null), Lh().then(n).catch((L) => l(L instanceof Error ? L.message : "Não consegui carregar o alcance por representante e categoria."));
  }, []);
  v.useEffect(y, [y]), v.useEffect(() => {
    var L;
    p && ((L = d.current) == null || L.focus());
  }, [p]);
  const S = v.useMemo(() => t ? gm(t, o, i, c) : null, [t, o, i, c]), N = v.useCallback(() => {
    w(null), m.current || (m.current = hd()), m.current.then(_).catch((L) => {
      m.current = null, w(L instanceof Error ? L.message : "Não consegui carregar as oportunidades.");
    });
  }, []), b = (L, te) => {
    h.current = te, x(L), g || N();
  }, P = () => {
    var L;
    x(null), (L = h.current) == null || L.focus();
  };
  if (r)
    return /* @__PURE__ */ a.jsxs("div", { children: [
      /* @__PURE__ */ a.jsx("p", { className: "lt-alert", role: "alert", children: r }),
      /* @__PURE__ */ a.jsx("button", { type: "button", className: "lt-btn", onClick: y, children: "Tentar de novo" })
    ] });
  if (!t || !S) return /* @__PURE__ */ a.jsx("p", { className: "lt-empty", role: "status", children: "Carregando…" });
  if (t.cells.length === 0)
    return /* @__PURE__ */ a.jsx("p", { className: "lt-empty", role: "status", children: "Nenhuma oportunidade com representante atribuído ainda." });
  const R = jn[o] ?? o, C = p && !i.has(p.rep) && !c.has(p.category) ? p : null, M = C ? new Set(C.ids) : null, oe = M && g ? g.filter((L) => M.has(L.id)) : [];
  return /* @__PURE__ */ a.jsxs("div", { className: "lt-matrix", children: [
    /* @__PURE__ */ a.jsx("p", { className: "lt-hint lt-matrix__warning", children: Sm }),
    /* @__PURE__ */ a.jsxs("div", { className: "lt-toolbar lt-matrix__toolbar", children: [
      /* @__PURE__ */ a.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ a.jsx("span", { children: "Chegou a" }),
        /* @__PURE__ */ a.jsx("select", { value: o, onChange: (L) => s(L.target.value), children: xd.map((L) => /* @__PURE__ */ a.jsxs("option", { value: L, children: [
          jn[L] ?? L,
          " ou além"
        ] }, L)) })
      ] }),
      /* @__PURE__ */ a.jsx(Ii, { label: "Representantes", options: jd(t), hidden: i, onToggle: (L) => u((te) => Oi(te, L)) }),
      /* @__PURE__ */ a.jsx(Ii, { label: "Categorias", options: Sd(t), hidden: c, onToggle: (L) => f((te) => Oi(te, L)) })
    ] }),
    /* @__PURE__ */ a.jsxs("p", { className: "lt-hint", role: "status", children: [
      S.summary,
      ". Mínimo de ",
      t.minSample,
      " oportunidades por par (configurável em Configurações)."
    ] }),
    /* @__PURE__ */ a.jsx("div", { className: "lt-matrix__scroll", role: "region", "aria-label": "Alcance do funil por representante e categoria", tabIndex: 0, children: /* @__PURE__ */ a.jsxs("table", { className: "lt-table lt-matrix__table", children: [
      /* @__PURE__ */ a.jsxs("caption", { className: "lt-matrix__caption", children: [
        "Onde as oportunidades estão hoje, por rep e categoria — percentual que já chegou a ",
        R,
        " ou além"
      ] }),
      /* @__PURE__ */ a.jsx("thead", { children: /* @__PURE__ */ a.jsxs("tr", { children: [
        /* @__PURE__ */ a.jsx("th", { scope: "col", children: "Representante" }),
        S.categories.map((L) => /* @__PURE__ */ a.jsx("th", { scope: "col", children: L }, L))
      ] }) }),
      /* @__PURE__ */ a.jsx("tbody", { children: S.reps.map((L, te) => /* @__PURE__ */ a.jsxs("tr", { children: [
        /* @__PURE__ */ a.jsx("th", { scope: "row", children: L }),
        S.rows[te].map((H, B) => {
          const K = S.categories[B];
          if (H.kind === "none")
            return /* @__PURE__ */ a.jsxs("td", { className: "lt-matrix__cell lt-matrix__cell--none", children: [
              "—",
              /* @__PURE__ */ a.jsx("span", { className: "lt-sr-only", children: " sem oportunidades neste par" })
            ] }, K);
          const E = H.intensity === null ? void 0 : jm(H.intensity, e);
          return /* @__PURE__ */ a.jsx("td", { className: "lt-matrix__cell", children: /* @__PURE__ */ a.jsxs(
            "button",
            {
              type: "button",
              className: `lt-matrix__btn${H.kind === "insufficient" ? " lt-matrix__btn--insufficient" : ""}${H.kind === "value" && H.intensity === 0 ? " lt-matrix__btn--zero" : ""}`,
              style: E ? { background: E.background, color: E.color } : void 0,
              title: H.tooltip,
              "aria-label": H.ariaLabel,
              onClick: (A) => b({ rep: L, category: K, ids: H.opportunityIds, detail: H.tooltip }, A.currentTarget),
              children: [
                H.text,
                H.fragile && /* @__PURE__ */ a.jsx("span", { "aria-hidden": "true", className: "lt-matrix__mark", children: "*" })
              ]
            }
          ) }, K);
        })
      ] }, L)) }),
      /* @__PURE__ */ a.jsx("tfoot", { children: /* @__PURE__ */ a.jsxs("tr", { children: [
        /* @__PURE__ */ a.jsx("th", { scope: "row", children: "Mediana do time" }),
        S.reference.map((L, te) => /* @__PURE__ */ a.jsx("td", { className: "lt-matrix__ref", children: L === null ? "sem referência" : fn(L) }, S.categories[te]))
      ] }) })
    ] }) }),
    /* @__PURE__ */ a.jsxs("ul", { className: "lt-matrix__legend", "aria-label": "Legenda", children: [
      /* @__PURE__ */ a.jsxs("li", { children: [
        /* @__PURE__ */ a.jsx("span", { className: "lt-matrix__swatch lt-matrix__swatch--ramp", "aria-hidden": "true" }),
        "0% a 100% (escala fixa)"
      ] }),
      /* @__PURE__ */ a.jsxs("li", { children: [
        /* @__PURE__ */ a.jsx("span", { className: "lt-matrix__swatch lt-matrix__swatch--zero", "aria-hidden": "true" }),
        "0% real, com amostra suficiente"
      ] }),
      /* @__PURE__ */ a.jsxs("li", { children: [
        /* @__PURE__ */ a.jsx("span", { className: "lt-matrix__swatch lt-matrix__swatch--insufficient", "aria-hidden": "true" }),
        "Dado insuficiente (n abaixo de ",
        t.minSample,
        ")"
      ] }),
      /* @__PURE__ */ a.jsxs("li", { children: [
        /* @__PURE__ */ a.jsx("span", { className: "lt-matrix__mark", "aria-hidden": "true", children: "*" }),
        "Amostra pequena (menos de ",
        t.minSample * 2,
        "): oscila muito"
      ] })
    ] }),
    /* @__PURE__ */ a.jsxs("p", { className: "lt-hint", children: [
      "Alcance acumulado: oportunidade que chegou ao estágio escolhido ou além. Sem ranking — compare dentro do contexto da categoria.",
      t.unassignedCount > 0 && ` ${t.unassignedCount} oportunidade(s) sem representante atribuído ficam fora da matriz.`
    ] }),
    C && /* @__PURE__ */ a.jsxs("div", { className: "lt-matrix__deals", children: [
      /* @__PURE__ */ a.jsxs("div", { className: "lt-header-row", children: [
        /* @__PURE__ */ a.jsxs("h5", { ref: d, tabIndex: -1, children: [
          "Oportunidades de ",
          C.rep,
          " em ",
          C.category
        ] }),
        /* @__PURE__ */ a.jsx($, { text: "Os deals por trás da célula: vale olhá-los um a um antes de tirar qualquer conclusão." }),
        /* @__PURE__ */ a.jsx("button", { type: "button", className: "lt-btn", onClick: P, children: "Fechar" })
      ] }),
      C.detail.split(`
`).map((L) => /* @__PURE__ */ a.jsx("p", { className: "lt-hint", children: L }, L)),
      j ? /* @__PURE__ */ a.jsxs("div", { children: [
        /* @__PURE__ */ a.jsx("p", { className: "lt-alert", role: "alert", children: j }),
        /* @__PURE__ */ a.jsx("button", { type: "button", className: "lt-btn", onClick: N, children: "Tentar de novo" })
      ] }) : g ? /* @__PURE__ */ a.jsxs("table", { className: "lt-table", "aria-label": `Oportunidades de ${C.rep} em ${C.category}`, children: [
        /* @__PURE__ */ a.jsx("thead", { children: /* @__PURE__ */ a.jsxs("tr", { children: [
          /* @__PURE__ */ a.jsx("th", { scope: "col", children: "Empresa" }),
          /* @__PURE__ */ a.jsx("th", { scope: "col", children: "Estágio" })
        ] }) }),
        /* @__PURE__ */ a.jsxs("tbody", { children: [
          oe.map((L) => /* @__PURE__ */ a.jsxs("tr", { children: [
            /* @__PURE__ */ a.jsx("td", { children: L.companyName }),
            /* @__PURE__ */ a.jsx("td", { children: jn[L.status] ?? L.status })
          ] }, L.id)),
          oe.length === 0 && /* @__PURE__ */ a.jsx("tr", { children: /* @__PURE__ */ a.jsx("td", { colSpan: 2, children: "Nenhuma oportunidade viva neste par agora." }) })
        ] })
      ] }) : /* @__PURE__ */ a.jsx("p", { className: "lt-hint", role: "status", children: "Carregando…" })
    ] })
  ] });
}
function Ii({ label: e, options: t, hidden: n, onToggle: r }) {
  return /* @__PURE__ */ a.jsxs("details", { className: "lt-matrix__filter", children: [
    /* @__PURE__ */ a.jsxs("summary", { children: [
      e,
      n.size > 0 ? ` (${t.length - n.size} de ${t.length})` : ""
    ] }),
    /* @__PURE__ */ a.jsx("ul", { children: t.map((l) => /* @__PURE__ */ a.jsx("li", { children: /* @__PURE__ */ a.jsxs("label", { children: [
      /* @__PURE__ */ a.jsx("input", { type: "checkbox", checked: !n.has(l), onChange: () => r(l) }),
      /* @__PURE__ */ a.jsx("span", { children: l })
    ] }) }, l)) })
  ] });
}
function Xe({ label: e, value: t, hint: n, tone: r, action: l, onClick: o, linkLabel: s }) {
  return /* @__PURE__ */ a.jsxs("div", { className: `lt-stat-tile${r === "attention" ? " lt-stat-tile--attention" : ""}${o ? " lt-stat-tile--link" : ""}`, children: [
    /* @__PURE__ */ a.jsxs("div", { className: "lt-stat-tile__top", children: [
      /* @__PURE__ */ a.jsx("div", { className: "lt-stat-tile__value", style: { fontVariantNumeric: "tabular-nums" }, children: t }),
      n && /* @__PURE__ */ a.jsx($, { text: n })
    ] }),
    /* @__PURE__ */ a.jsx("div", { className: "lt-stat-tile__label", children: e }),
    o && /* @__PURE__ */ a.jsx("button", { type: "button", className: "lt-stat-tile__go", onClick: o, children: s ?? "Ver na lista →" }),
    r === "attention" && l && /* @__PURE__ */ a.jsx("div", { className: "lt-stat-tile__action", children: l })
  ] });
}
function wm({ onNavigate: e, active: t = !0 } = {}) {
  const [n, r] = v.useState("monthly"), [l, o] = v.useState(null), [s, i] = v.useState(null), [u, c] = v.useState(!0), [f, p] = v.useState(0), x = v.useRef(t);
  if (v.useEffect(() => {
    t && !x.current && p((w) => w + 1), x.current = t;
  }, [t]), v.useEffect(() => {
    let w = !1;
    return i(null), c(!0), $h(n).then((m) => {
      w || o(m);
    }).catch((m) => {
      w || i(m instanceof Error ? m.message : "Não consegui carregar as métricas.");
    }).finally(() => {
      w || c(!1);
    }), () => {
      w = !0;
    };
  }, [n, f]), s && !l)
    return /* @__PURE__ */ a.jsxs("div", { role: "alert", children: [
      /* @__PURE__ */ a.jsx("p", { className: "lt-alert", children: s }),
      /* @__PURE__ */ a.jsx("button", { type: "button", className: "lt-btn", onClick: () => p((w) => w + 1), children: "Tentar de novo" })
    ] });
  if (!l) return /* @__PURE__ */ a.jsx("p", { className: "lt-empty", role: "status", children: "Carregando…" });
  const { kpis: g } = l, _ = {};
  l.funnelReach.forEach((w) => {
    _[jn[w.stage] ?? w.stage] = w.reachCount;
  });
  const j = l.funnelReach.map((w) => jn[w.stage] ?? w.stage);
  return /* @__PURE__ */ a.jsxs("section", { className: "lt-dashboard", "aria-labelledby": "lt-dash-title", "aria-busy": u, children: [
    /* @__PURE__ */ a.jsxs("div", { className: "lt-header lt-header-row", children: [
      /* @__PURE__ */ a.jsx("h2", { id: "lt-dash-title", children: "Dashboard Executivo" }),
      /* @__PURE__ */ a.jsx($, { text: "Visão consolidada — dado real da sua instalação." })
    ] }),
    /* @__PURE__ */ a.jsx(jl, { id: "lt-dash-today", title: "Hoje: o que fazer?", description: "O que pede uma decisão agora.", children: /* @__PURE__ */ a.jsxs("div", { className: "lt-stat-grid", children: [
      /* @__PURE__ */ a.jsx(
        Xe,
        {
          label: "Triagem atrasada",
          value: at(l.agingCount),
          tone: l.agingCount > 0 ? "attention" : void 0,
          onClick: e ? () => e("oportunidades", { status: "detected", onlyAging: !0 }) : void 0,
          linkLabel: "Ver as detectadas →",
          action: `Vale qualificar ou descartar as detectadas há mais de ${l.agingSlaDays} dia(s).`,
          hint: `Detectadas há mais de ${l.agingSlaDays} dia(s) sem virar qualificada nem descartada (SLA configurável em Configurações).`
        }
      ),
      /* @__PURE__ */ a.jsx(
        Xe,
        {
          label: "Oportunidades zumbi",
          value: at(l.zombieCount),
          tone: l.zombieCount > 0 ? "attention" : void 0,
          action: "Vale decidir: retomar o contato ou descartar.",
          hint: "Paradas há mais de 30 dias no mesmo estágio — excluídas do potencial ponderado e dos cortes por rep/segmento/fonte."
        }
      ),
      /* @__PURE__ */ a.jsx(
        Xe,
        {
          label: "Oportunidades identificadas",
          value: at(g.opportunitiesIdentified),
          onClick: e ? () => e("oportunidades", {}) : void 0,
          hint: "Total de oportunidades já detectadas pelo motor, em qualquer estágio."
        }
      )
    ] }) }),
    /* @__PURE__ */ a.jsxs(jl, { id: "lt-dash-pipeline", title: "Pipeline: como está?", description: "Volume, valor e andamento das oportunidades.", children: [
      /* @__PURE__ */ a.jsxs("div", { className: "lt-stat-grid", children: [
        /* @__PURE__ */ a.jsx(
          Xe,
          {
            label: "Valor típico informado",
            value: rt(g.financialPotentialTotal),
            hint: `Soma dos valores típicos que você informou nas regras. Não é previsão de receita e pode se sobrepor (várias regras na mesma conta somam). ${g.opportunitiesWithoutValue} oportunidade(s) sem valor informado não entram na soma.`
          }
        ),
        /* @__PURE__ */ a.jsx(
          Xe,
          {
            label: "Valor ponderado (avaliado)",
            value: rt(l.weightedPotential.weightedEvaluatedTotal),
            hint: "Só oportunidades com confiança real avaliada, multiplicada pelo potencial — nunca substitui o bruto, complementa."
          }
        ),
        /* @__PURE__ */ a.jsx(
          Xe,
          {
            label: "Valor ponderado (estimado)",
            value: rt(l.weightedPotential.weightedEstimatedTotal),
            hint: "Inclui também as sem confiança avaliada, usando uma estimativa conservadora — visão mais otimista que o avaliado."
          }
        )
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: "lt-chart-grid", children: [
        /* @__PURE__ */ a.jsxs("div", { role: "group", className: "lt-chart-card lt-chart-card--wide", "aria-labelledby": "lt-chart-funnel", children: [
          /* @__PURE__ */ a.jsx("h4", { id: "lt-chart-funnel", children: "Funil de oportunidades" }),
          /* @__PURE__ */ a.jsx(zi, { stages: fm, counts: l.funnelCounts })
        ] }),
        /* @__PURE__ */ a.jsxs("div", { role: "group", className: "lt-chart-card lt-chart-card--wide", "aria-labelledby": "lt-chart-reach", children: [
          /* @__PURE__ */ a.jsxs("div", { className: "lt-header-row", children: [
            /* @__PURE__ */ a.jsx("h4", { id: "lt-chart-reach", children: "Alcance do funil" }),
            /* @__PURE__ */ a.jsx($, { text: 'Quantas oportunidades já chegaram em cada etapa ou passaram dela, hoje — nunca "taxa de conversão" (o histórico completo de quando cada uma mudou de estágio ainda não é guardado, então não dá pra calcular uma taxa de coorte de verdade).' })
          ] }),
          /* @__PURE__ */ a.jsx(zi, { stages: j, counts: _ })
        ] })
      ] }),
      /* @__PURE__ */ a.jsxs("details", { className: "lt-dash-more", children: [
        /* @__PURE__ */ a.jsx("summary", { children: "Mais indicadores do pipeline (clientes, prospects, produto, serviço, por fabricante, segmento e fonte)" }),
        /* @__PURE__ */ a.jsxs("div", { className: "lt-stat-grid", children: [
          /* @__PURE__ */ a.jsx(
            Xe,
            {
              label: "Clientes analisados",
              value: at(g.customersAnalyzed),
              hint: "Empresas marcadas como cliente atual em pelo menos uma fonte."
            }
          ),
          /* @__PURE__ */ a.jsx(
            Xe,
            {
              label: "Prospects analisados",
              value: at(g.prospectsAnalyzed),
              hint: "Empresas sem relação de cliente ainda, mas já mapeadas."
            }
          ),
          /* @__PURE__ */ a.jsx(
            Xe,
            {
              label: "Oportunidades de produto",
              value: at(g.productOpportunities),
              hint: "Oportunidades associadas a um produto específico do portfólio."
            }
          ),
          /* @__PURE__ */ a.jsx(
            Xe,
            {
              label: "Oportunidades de serviço",
              value: at(g.serviceOpportunities),
              hint: "Oportunidades associadas a um serviço específico do portfólio."
            }
          )
        ] }),
        /* @__PURE__ */ a.jsxs("div", { className: "lt-chart-grid", children: [
          /* @__PURE__ */ a.jsxs("div", { role: "group", className: "lt-chart-card", "aria-labelledby": "lt-chart-vendor-money", children: [
            /* @__PURE__ */ a.jsx("h4", { id: "lt-chart-vendor-money", children: "Valor típico por fabricante" }),
            /* @__PURE__ */ a.jsx(Xt, { data: l.financialByVendor, formatValue: rt, emptyMessage: "Sem valor típico informado nas regras." })
          ] }),
          /* @__PURE__ */ a.jsxs("div", { role: "group", className: "lt-chart-card", "aria-labelledby": "lt-chart-service", children: [
            /* @__PURE__ */ a.jsx("h4", { id: "lt-chart-service", children: "Oportunidades por serviço" }),
            /* @__PURE__ */ a.jsx(Xt, { data: l.opportunitiesByService, formatValue: at, emptyMessage: "Sem oportunidades de serviço." })
          ] }),
          /* @__PURE__ */ a.jsxs("div", { role: "group", className: "lt-chart-card", "aria-labelledby": "lt-chart-segment", children: [
            /* @__PURE__ */ a.jsx("h4", { id: "lt-chart-segment", children: "Valor típico por segmento" }),
            /* @__PURE__ */ a.jsx(Xt, { data: l.potentialBySegment, formatValue: rt, emptyMessage: "Sem oportunidade com segmento atribuído ainda." })
          ] }),
          /* @__PURE__ */ a.jsxs("div", { role: "group", className: "lt-chart-card", "aria-labelledby": "lt-chart-source", children: [
            /* @__PURE__ */ a.jsx("h4", { id: "lt-chart-source", children: "Valor típico por fonte" }),
            /* @__PURE__ */ a.jsx(Xt, { data: l.potentialBySource, formatValue: rt, emptyMessage: "Sem oportunidade com fonte atribuída ainda." })
          ] }),
          /* @__PURE__ */ a.jsxs("div", { role: "group", className: "lt-chart-card", "aria-labelledby": "lt-chart-customer", children: [
            /* @__PURE__ */ a.jsx("h4", { id: "lt-chart-customer", children: "Clientes × Prospects" }),
            /* @__PURE__ */ a.jsx(Xt, { data: l.customerVsProspect, formatValue: at, emptyMessage: "Sem empresas analisadas." })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ a.jsxs(
      jl,
      {
        id: "lt-dash-reps",
        title: "Representantes: como está cada um?",
        description: "Cobertura de meta no período escolhido e onde as oportunidades de cada rep estão hoje.",
        actions: /* @__PURE__ */ a.jsxs("label", { className: "lt-field lt-dash-section__period", children: [
          /* @__PURE__ */ a.jsx("span", { children: "Período" }),
          /* @__PURE__ */ a.jsxs("select", { value: n, onChange: (w) => r(w.target.value), children: [
            /* @__PURE__ */ a.jsx("option", { value: "monthly", children: "Mensal" }),
            /* @__PURE__ */ a.jsx("option", { value: "quarterly", children: "Trimestral" })
          ] })
        ] }),
        children: [
          s && /* @__PURE__ */ a.jsxs("div", { children: [
            /* @__PURE__ */ a.jsxs("p", { className: "lt-alert", role: "alert", children: [
              s,
              " Os dados abaixo ainda são de ",
              l.coveragePeriodKey,
              "."
            ] }),
            /* @__PURE__ */ a.jsx("button", { type: "button", className: "lt-btn", onClick: () => p((w) => w + 1), children: "Tentar de novo" })
          ] }),
          u && /* @__PURE__ */ a.jsx("p", { className: "lt-hint", role: "status", children: "Atualizando…" }),
          /* @__PURE__ */ a.jsxs("div", { className: "lt-chart-grid", children: [
            /* @__PURE__ */ a.jsxs("div", { role: "group", className: "lt-chart-card lt-chart-card--wide", "aria-labelledby": "lt-chart-coverage", children: [
              /* @__PURE__ */ a.jsxs("div", { className: "lt-header-row", children: [
                /* @__PURE__ */ a.jsxs("h4", { id: "lt-chart-coverage", children: [
                  "Cobertura de meta (",
                  l.coveragePeriodKey,
                  ")"
                ] }),
                /* @__PURE__ */ a.jsx($, { text: `Pipeline atual dividido pela meta cadastrada em Configurações pra ${l.coveragePeriodKey}. Sem meta definida pro representante, nunca mostra 0% — mostra "sem meta definida".` })
              ] }),
              l.repCoverage.length === 0 ? /* @__PURE__ */ a.jsx("p", { className: "lt-empty", role: "status", children: "Nenhum representante com oportunidade atribuída ainda." }) : /* @__PURE__ */ a.jsxs("table", { className: "lt-table", children: [
                /* @__PURE__ */ a.jsx("thead", { children: /* @__PURE__ */ a.jsxs("tr", { children: [
                  /* @__PURE__ */ a.jsx("th", { scope: "col", children: "Representante" }),
                  /* @__PURE__ */ a.jsx("th", { scope: "col", children: "Pipeline atual" }),
                  /* @__PURE__ */ a.jsx("th", { scope: "col", children: "Meta" }),
                  /* @__PURE__ */ a.jsx("th", { scope: "col", children: "Cobertura" })
                ] }) }),
                /* @__PURE__ */ a.jsx("tbody", { children: l.repCoverage.map((w) => /* @__PURE__ */ a.jsxs("tr", { children: [
                  /* @__PURE__ */ a.jsx("th", { scope: "row", children: w.repId }),
                  /* @__PURE__ */ a.jsx("td", { children: rt(w.actual) }),
                  /* @__PURE__ */ a.jsx("td", { children: w.target === null ? "—" : rt(w.target) }),
                  /* @__PURE__ */ a.jsx("td", { children: w.coverageRatio === null ? "Sem meta definida" : fn(w.coverageRatio) })
                ] }, w.repId)) })
              ] })
            ] }),
            /* @__PURE__ */ a.jsxs("div", { role: "group", className: "lt-chart-card", "aria-labelledby": "lt-chart-rep-money", children: [
              /* @__PURE__ */ a.jsx("h4", { id: "lt-chart-rep-money", children: "Valor típico por representante" }),
              /* @__PURE__ */ a.jsx(Xt, { data: l.potentialByRep, formatValue: rt, emptyMessage: "Sem oportunidade atribuída a representante ainda." })
            ] }),
            /* @__PURE__ */ a.jsxs("div", { role: "group", className: "lt-chart-card lt-chart-card--wide", "aria-labelledby": "lt-chart-matrix", children: [
              /* @__PURE__ */ a.jsxs("div", { className: "lt-header-row", children: [
                /* @__PURE__ */ a.jsx("h4", { id: "lt-chart-matrix", children: "Onde as oportunidades estão hoje, por rep e categoria" }),
                /* @__PURE__ */ a.jsx($, { text: "Quantas oportunidades de cada representante, em cada categoria do portfólio, já chegaram a cada estágio. É uma foto de hoje, sem histórico de transição." })
              ] }),
              /* @__PURE__ */ a.jsx(_m, {})
            ] })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ a.jsxs("details", { className: "lt-dash-more", children: [
      /* @__PURE__ */ a.jsx("summary", { children: "Mais detalhes e limitações" }),
      /* @__PURE__ */ a.jsx("div", { className: "lt-chart-grid", children: /* @__PURE__ */ a.jsxs("div", { role: "group", className: "lt-chart-card", "aria-labelledby": "lt-chart-vendor-donut", children: [
        /* @__PURE__ */ a.jsx("h4", { id: "lt-chart-vendor-donut", children: "Distribuição por fabricante" }),
        /* @__PURE__ */ a.jsx(cm, { data: l.vendorDistribution, emptyMessage: "Sem oportunidades com fabricante identificado." })
      ] }) }),
      /* @__PURE__ */ a.jsxs("p", { className: "lt-hint", children: [
        "Fabricante principal: ",
        g.topVendor ?? "—",
        ". Serviço principal: ",
        g.topService ?? "—",
        "."
      ] }),
      /* @__PURE__ */ a.jsx("p", { className: "lt-hint", children: "Segmentação por região ainda fica de fora: exige dado de região vindo de uma fonte configurada (ex.: Google Maps). Tendência ao longo do tempo também não aparece: a tela mostra o estado de hoje, porque a evolução dia a dia ainda não é guardada." })
    ] })
  ] });
}
const Di = {
  client: "todos",
  product: "todos",
  service: "todos",
  source: "todos",
  minScore: 0,
  status: "todos",
  health: "todos",
  onlyAging: !1
}, Ca = {
  detected: "Detectada",
  qualified: "Qualificada",
  reviewed: "Revisada",
  contacted: "Contatada",
  opportunity: "Oportunidade",
  dismissed: "Descartada"
}, Ea = {
  verde: "Saudável",
  amarela: "Atenção",
  vermelha: "Crítica",
  dados_insuficientes: "Dados insuficientes"
};
function wl(e) {
  return Array.from(new Set(e.filter((t) => !!t))).sort();
}
function Nm({
  rows: e,
  value: t,
  onChange: n
}) {
  const r = wl(e.map((s) => s.product)), l = wl(e.map((s) => s.service)), o = wl(e.flatMap((s) => s.sources.map((i) => i.type)));
  return /* @__PURE__ */ a.jsxs("div", { className: "lt-filters", role: "group", "aria-label": "Filtros de oportunidades", children: [
    /* @__PURE__ */ a.jsxs("label", { htmlFor: "lt-filter-status", className: "lt-field", children: [
      /* @__PURE__ */ a.jsxs("span", { children: [
        "Status ",
        /* @__PURE__ */ a.jsx($, { text: "Etapa do funil: detectada, qualificada, revisada, contatada, oportunidade ou descartada." })
      ] }),
      /* @__PURE__ */ a.jsxs("select", { id: "lt-filter-status", value: t.status, onChange: (s) => n({ ...t, status: s.target.value }), children: [
        /* @__PURE__ */ a.jsx("option", { value: "todos", children: "Todos" }),
        Object.keys(Ca).map((s) => /* @__PURE__ */ a.jsx("option", { value: s, children: Ca[s] }, s))
      ] })
    ] }),
    /* @__PURE__ */ a.jsxs("label", { htmlFor: "lt-filter-health", className: "lt-field", children: [
      /* @__PURE__ */ a.jsxs("span", { children: [
        "Saúde da conta ",
        /* @__PURE__ */ a.jsx($, { text: "Situação da conta (renovação e atividade): saudável, atenção, crítica ou sem dados suficientes." })
      ] }),
      /* @__PURE__ */ a.jsxs("select", { id: "lt-filter-health", value: t.health, onChange: (s) => n({ ...t, health: s.target.value }), children: [
        /* @__PURE__ */ a.jsx("option", { value: "todos", children: "Todas" }),
        Object.keys(Ea).map((s) => /* @__PURE__ */ a.jsx("option", { value: s, children: Ea[s] }, s))
      ] })
    ] }),
    /* @__PURE__ */ a.jsxs("label", { htmlFor: "lt-filter-client", className: "lt-field", children: [
      /* @__PURE__ */ a.jsxs("span", { children: [
        "Cliente ",
        /* @__PURE__ */ a.jsx($, { text: "Filtra pela relação da empresa: cliente atual ou prospect ainda sem venda." })
      ] }),
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
      )
    ] }),
    /* @__PURE__ */ a.jsxs("label", { htmlFor: "lt-filter-product", className: "lt-field", children: [
      /* @__PURE__ */ a.jsxs("span", { children: [
        "Produto ",
        /* @__PURE__ */ a.jsx($, { text: "Mostra só oportunidades associadas a esse produto do portfólio." })
      ] }),
      /* @__PURE__ */ a.jsxs("select", { id: "lt-filter-product", value: t.product, onChange: (s) => n({ ...t, product: s.target.value }), children: [
        /* @__PURE__ */ a.jsx("option", { value: "todos", children: "Todos" }),
        r.map((s) => /* @__PURE__ */ a.jsx("option", { value: s, children: s }, s))
      ] })
    ] }),
    /* @__PURE__ */ a.jsxs("label", { htmlFor: "lt-filter-service", className: "lt-field", children: [
      /* @__PURE__ */ a.jsxs("span", { children: [
        "Serviço ",
        /* @__PURE__ */ a.jsx($, { text: "Mostra só oportunidades associadas a esse serviço do portfólio." })
      ] }),
      /* @__PURE__ */ a.jsxs("select", { id: "lt-filter-service", value: t.service, onChange: (s) => n({ ...t, service: s.target.value }), children: [
        /* @__PURE__ */ a.jsx("option", { value: "todos", children: "Todos" }),
        l.map((s) => /* @__PURE__ */ a.jsx("option", { value: s, children: s }, s))
      ] })
    ] }),
    /* @__PURE__ */ a.jsxs("label", { htmlFor: "lt-filter-source", className: "lt-field", children: [
      /* @__PURE__ */ a.jsxs("span", { children: [
        "Fonte ",
        /* @__PURE__ */ a.jsx($, { text: "Mostra só oportunidades com evidência vinda dessa fonte de dados." })
      ] }),
      /* @__PURE__ */ a.jsxs("select", { id: "lt-filter-source", value: t.source, onChange: (s) => n({ ...t, source: s.target.value }), children: [
        /* @__PURE__ */ a.jsx("option", { value: "todos", children: "Todas" }),
        o.map((s) => /* @__PURE__ */ a.jsx("option", { value: s, children: s }, s))
      ] })
    ] }),
    /* @__PURE__ */ a.jsxs("label", { htmlFor: "lt-filter-score", className: "lt-field", children: [
      /* @__PURE__ */ a.jsxs("span", { children: [
        "Score mínimo ",
        /* @__PURE__ */ a.jsx($, { text: "De 0.0 a 1.0 — esconde oportunidades com aderência abaixo desse valor." })
      ] }),
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
      )
    ] }),
    t.onlyAging && /* @__PURE__ */ a.jsx(
      "button",
      {
        type: "button",
        className: "lt-btn",
        onClick: () => n({ ...t, onlyAging: !1 }),
        "aria-label": "Remover o filtro de triagem atrasada",
        children: "Triagem atrasada ✕"
      }
    )
  ] });
}
function km(e) {
  const t = [];
  return e.client !== "todos" && t.push(e.client === "clientes" ? "clientes atuais" : "prospects"), e.product !== "todos" && t.push(`produto: ${e.product}`), e.service !== "todos" && t.push(`serviço: ${e.service}`), e.source !== "todos" && t.push(`fonte: ${e.source}`), e.minScore > 0 && t.push(`score mínimo: ${e.minScore}`), e.status !== "todos" && t.push(`status: ${Ca[e.status].toLowerCase()}`), e.health !== "todos" && t.push(`saúde da conta: ${Ea[e.health].toLowerCase()}`), e.onlyAging && t.push("triagem atrasada"), t.length > 0 ? t.join(", ") : "sem filtro";
}
function Cm(e, t) {
  return e.filter((n) => !(t.client === "clientes" && !n.isCustomer || t.client === "prospects" && n.isCustomer || t.product !== "todos" && n.product !== t.product || t.service !== "todos" && n.service !== t.service || t.source !== "todos" && !n.sources.some((r) => r.type === t.source) || (n.opportunityScore ?? 0) < t.minScore || t.status !== "todos" && n.status !== t.status || t.health !== "todos" && n.accountHealth !== t.health || t.onlyAging && !n.isAging));
}
const _d = [
  { value: "isolado", label: "Isolado (poucas licenças/sistemas)" },
  { value: "parcial", label: "Parcial (parte relevante do parque)" },
  { value: "generalizado", label: "Generalizado (maior parte do parque)" }
], wd = [
  { value: "nao_critico", label: "Não crítico (impacto operacional baixo)" },
  { value: "critico_interno", label: "Crítico interno (grave, não visível ao cliente)" },
  { value: "critico_exposto", label: "Crítico e exposto (produção/cliente-facing)" }
], Em = {
  baixo: "Baixo",
  medio: "Médio",
  alto: "Alto",
  critico: "Crítico",
  nao_avaliado: "Não avaliado"
}, bm = {
  verde: "Saudável",
  amarela: "Atenção",
  vermelha: "Crítica",
  dados_insuficientes: "Dados insuficientes"
}, Pm = {
  imediata: "revisão imediata — saúde da conta em estado crítico",
  revisao_de_risco: "saúde comprometida, sem renovação próxima o bastante pra justificar revisão imediata",
  revisao_antes_da_renovacao: "renovação próxima e a saúde não está em verde — vale revisar antes de decidir",
  revisao_de_acompanhamento: "acompanhamento de rotina, saúde em atenção",
  revisao_de_rotina: "nenhum sinal de urgência — cadência de rotina",
  alinhada_a_renovacao: "conta saudável — revisão alinhada à data de renovação"
};
function Fi(e) {
  return e && /^https?:\/\//i.test(e) ? e : null;
}
function Tm(e) {
  return e.replace(/^https?:\/\//i, "").replace(/^www\./i, "").replace(/\/$/, "");
}
function Rm(e) {
  return e ? e.slice(0, 10) : "";
}
const Mi = [
  { value: "no_evidence", label: "Sem evidência suficiente" },
  { value: "not_fit", label: "Sem fit técnico/comercial" },
  { value: "not_qualified", label: "Cliente não qualificado" },
  { value: "false_positive", label: "Falso positivo da regra" },
  { value: "other", label: "Outro (detalhar na observação)" }
], zm = [
  { value: "detected", label: "Detectada" },
  { value: "qualified", label: "Qualificada" },
  { value: "reviewed", label: "Revisada" },
  { value: "contacted", label: "Contatada" },
  { value: "opportunity", label: "Oportunidade" },
  { value: "dismissed", label: "Descartada" }
], Ai = ["detected", "qualified", "reviewed", "contacted", "opportunity"];
function Vi(e, t) {
  if (e === t) return !1;
  if (e === "dismissed") return t !== "dismissed";
  const n = Ai.indexOf(e), r = Ai.indexOf(t);
  return n === -1 || r === -1 ? !1 : r - n >= 2;
}
function $m({ row: e, onUpdated: t }) {
  var y;
  const [n, r] = v.useState(null), [l, o] = v.useState(""), [s, i] = v.useState(""), [u, c] = v.useState(""), [f, p] = v.useState(!1), [x, g] = v.useState(null), _ = e.status === "detected" && n !== null && n !== "dismissed", j = n !== null && Vi(e.status, n), w = n === "dismissed", m = j || w || _, d = async (S, N, b) => {
    p(!0), g(null);
    try {
      const P = await Nh(e.id, S, N, b, u.trim() || null);
      t(P), r(null), o(""), i(""), c("");
    } catch (P) {
      g(P instanceof Error ? P.message : "Falha ao mudar o status.");
    } finally {
      p(!1);
    }
  }, h = (S) => {
    if (g(null), S === e.status) {
      r(null);
      return;
    }
    r(S), S !== "dismissed" && e.status !== "detected" && !Vi(e.status, S) && d(S, null, null);
  };
  return /* @__PURE__ */ a.jsxs("div", { className: "lt-severity", children: [
    /* @__PURE__ */ a.jsxs("label", { className: "lt-field", children: [
      /* @__PURE__ */ a.jsxs("span", { children: [
        "Status ",
        /* @__PURE__ */ a.jsx($, { text: "Etapa atual no funil — detectada → qualificada → revisada → contatada → oportunidade." })
      ] }),
      /* @__PURE__ */ a.jsx("select", { value: n ?? e.status, onChange: (S) => h(S.target.value), disabled: f, children: zm.map((S) => /* @__PURE__ */ a.jsx("option", { value: S.value, children: S.label }, S.value)) })
    ] }),
    e.status === "dismissed" && n === null && e.dismissalReason && /* @__PURE__ */ a.jsxs("p", { className: "lt-hint", children: [
      "Motivo do descarte: ",
      ((y = Mi.find((S) => S.value === e.dismissalReason)) == null ? void 0 : y.label) ?? e.dismissalReason
    ] }),
    w && /* @__PURE__ */ a.jsxs("label", { className: "lt-field", children: [
      /* @__PURE__ */ a.jsxs("span", { children: [
        "Motivo do descarte ",
        /* @__PURE__ */ a.jsx($, { text: "Obrigatório pra descartar — fica registrado no histórico da oportunidade." })
      ] }),
      /* @__PURE__ */ a.jsxs("select", { value: s, onChange: (S) => i(S.target.value), children: [
        /* @__PURE__ */ a.jsx("option", { value: "", children: "Selecione um motivo" }),
        Mi.map((S) => /* @__PURE__ */ a.jsx("option", { value: S.value, children: S.label }, S.value))
      ] })
    ] }),
    j && /* @__PURE__ */ a.jsxs("label", { className: "lt-field", children: [
      /* @__PURE__ */ a.jsxs("span", { children: [
        "Justificativa (pulou etapas ou reabriu uma oportunidade descartada) ",
        /* @__PURE__ */ a.jsx($, { text: "Explica por que a mudança fugiu do fluxo normal — fica registrada no histórico." })
      ] }),
      /* @__PURE__ */ a.jsx("textarea", { value: l, onChange: (S) => o(S.target.value) })
    ] }),
    _ && /* @__PURE__ */ a.jsxs("label", { className: "lt-field", children: [
      /* @__PURE__ */ a.jsxs("span", { children: [
        "Qualificar sem discovery (opcional) ",
        /* @__PURE__ */ a.jsx($, { text: 'Só se não der pra preencher a discovery acima — a justificativa fica registrada e a oportunidade aparece como "sem discovery".' })
      ] }),
      /* @__PURE__ */ a.jsx("textarea", { value: u, onChange: (S) => c(S.target.value) })
    ] }),
    m && /* @__PURE__ */ a.jsx(
      "button",
      {
        type: "button",
        className: "lt-btn",
        onClick: () => d(n, l || null, s || null),
        disabled: f || j && !l.trim() || w && !s,
        children: "Confirmar mudança"
      }
    ),
    x && /* @__PURE__ */ a.jsx("p", { className: "lt-alert", role: "alert", children: x })
  ] });
}
const Lm = { alta: 3, média: 2, baixa: 1 };
function Om(e, t, n) {
  const r = n === "asc" ? 1 : -1, l = (o) => {
    switch (t) {
      case "score":
        return o.opportunityScore ?? -1;
      case "potencial":
        return o.financialPotential ?? -1;
      case "prioridade":
        return Lm[o.priority];
      case "confianca":
        return o.confidenceScore ?? -1;
    }
  };
  return [...e].sort((o, s) => (l(o) - l(s)) * r);
}
function So(e) {
  return e === null ? "—" : e.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });
}
function Un(e) {
  return e === null ? "—" : e.toFixed(2);
}
function Bi({ label: e, sortKey: t, current: n, direction: r, onSort: l }) {
  const o = n === t;
  return /* @__PURE__ */ a.jsx("th", { "aria-sort": o ? r === "asc" ? "ascending" : "descending" : "none", children: /* @__PURE__ */ a.jsxs("button", { type: "button", onClick: () => l(t), children: [
    e,
    o ? r === "asc" ? " ▲" : " ▼" : ""
  ] }) });
}
const Im = [
  { key: "rootCauseStated", label: "Por que isso acontece hoje?", help: "Com as palavras do cliente. Não o sintoma ('é lento'), mas a causa ('a plataforma não escala')." },
  { key: "triggerEvent", label: "Por que agora?", help: "O que mudou que torna isto prioridade neste trimestre? Auditoria, contrato vencendo, incidente, crescimento." },
  { key: "championStake", label: "O que o seu contato ganha ou perde com isso?", help: "O que está em jogo para essa pessoa: uma meta, uma apresentação, a reputação dela?" }
];
function Dm({ row: e, repId: t, onUpdated: n }) {
  const [r, l] = v.useState({
    rootCauseStated: e.rootCauseStated ?? "",
    triggerEvent: e.triggerEvent ?? "",
    championStake: e.championStake ?? ""
  }), [o, s] = v.useState(null), i = async () => {
    s(null);
    try {
      n(await kh(e.id, r, t.trim() || null));
    } catch (u) {
      s(u instanceof Error ? u.message : "Falha ao salvar a discovery.");
    }
  };
  return /* @__PURE__ */ a.jsxs("div", { className: "lt-severity", children: [
    e.discoveryPending && /* @__PURE__ */ a.jsx("p", { className: "lt-hint", children: "Discovery pendente — esta oportunidade avançou sem os 3 campos abaixo." }),
    e.discoverySkipped && /* @__PURE__ */ a.jsxs("p", { className: "lt-hint", children: [
      "Qualificada sem discovery: ",
      e.discoverySkipReason
    ] }),
    Im.map((u) => /* @__PURE__ */ a.jsxs("label", { className: "lt-field", children: [
      /* @__PURE__ */ a.jsxs("span", { children: [
        u.label,
        " ",
        /* @__PURE__ */ a.jsx($, { text: u.help })
      ] }),
      /* @__PURE__ */ a.jsx(
        "textarea",
        {
          value: r[u.key],
          onChange: (c) => l((f) => ({ ...f, [u.key]: c.target.value })),
          onBlur: i
        }
      )
    ] }, u.key)),
    o && /* @__PURE__ */ a.jsx("p", { className: "lt-alert", role: "alert", children: o })
  ] });
}
function Fm({ row: e, repId: t, onUpdated: n }) {
  const [r, l] = v.useState(e.scopeNote), [o, s] = v.useState(e.criticality), [i, u] = v.useState(e.severityNote ?? ""), [c, f] = v.useState(null), p = v.useRef(0), x = async (g) => {
    f(null);
    const _ = ++p.current;
    try {
      const j = await wh(e.id, {
        scopeNote: g.scopeNote,
        criticality: g.criticality,
        severityNote: g.severityNote || null
      }, t.trim() || null);
      if (_ !== p.current) return;
      n(j);
    } catch (j) {
      if (_ !== p.current) return;
      f(j instanceof Error ? j.message : "Falha ao salvar a qualificação.");
    }
  };
  return /* @__PURE__ */ a.jsxs("div", { className: "lt-severity", children: [
    /* @__PURE__ */ a.jsxs("label", { className: "lt-field", children: [
      /* @__PURE__ */ a.jsxs("span", { children: [
        "Alcance do gap ",
        /* @__PURE__ */ a.jsx($, { text: "Quão abrangente é o gap identificado — usado no cálculo de severidade." })
      ] }),
      /* @__PURE__ */ a.jsxs(
        "select",
        {
          value: r ?? "",
          onChange: (g) => {
            const _ = g.target.value || null;
            l(_), x({ scopeNote: _, criticality: o, severityNote: i });
          },
          children: [
            /* @__PURE__ */ a.jsx("option", { value: "", children: "Não avaliado" }),
            _d.map((g) => /* @__PURE__ */ a.jsx("option", { value: g.value, children: g.label }, g.value))
          ]
        }
      )
    ] }),
    /* @__PURE__ */ a.jsxs("label", { className: "lt-field", children: [
      /* @__PURE__ */ a.jsxs("span", { children: [
        "Criticidade ",
        /* @__PURE__ */ a.jsx($, { text: "Quão urgente é o risco pro cliente — usado no cálculo de severidade." })
      ] }),
      /* @__PURE__ */ a.jsxs(
        "select",
        {
          value: o ?? "",
          onChange: (g) => {
            const _ = g.target.value || null;
            s(_), x({ scopeNote: r, criticality: _, severityNote: i });
          },
          children: [
            /* @__PURE__ */ a.jsx("option", { value: "", children: "Não avaliado" }),
            wd.map((g) => /* @__PURE__ */ a.jsx("option", { value: g.value, children: g.label }, g.value))
          ]
        }
      )
    ] }),
    /* @__PURE__ */ a.jsxs("label", { className: "lt-field", children: [
      /* @__PURE__ */ a.jsxs("span", { children: [
        "Observação (opcional) ",
        /* @__PURE__ */ a.jsx($, { text: "Contexto livre sobre o gap — não entra no cálculo de severidade." })
      ] }),
      /* @__PURE__ */ a.jsx(
        "textarea",
        {
          value: i,
          onChange: (g) => u(g.target.value),
          onBlur: () => x({ scopeNote: r, criticality: o, severityNote: i })
        }
      )
    ] }),
    /* @__PURE__ */ a.jsxs("span", { className: `lt-badge lt-badge--severity-${e.severityBand}`, children: [
      "Severidade: ",
      Em[e.severityBand]
    ] }),
    c && /* @__PURE__ */ a.jsx("p", { className: "lt-alert", role: "alert", children: c })
  ] });
}
function Mm({ row: e, repId: t, onRenewalDateUpdated: n }) {
  const [r, l] = v.useState(Rm(e.renewalDate)), [o, s] = v.useState(null), i = v.useRef(0), u = async (c) => {
    s(null);
    const f = ++i.current;
    try {
      if (await Rh(e.companyId, c || null, t.trim() || null), f !== i.current) return;
      n();
    } catch (p) {
      if (f !== i.current) return;
      s(p instanceof Error ? p.message : "Falha ao salvar a data de renovação.");
    }
  };
  return /* @__PURE__ */ a.jsxs("div", { className: "lt-panel", children: [
    /* @__PURE__ */ a.jsxs("div", { className: "lt-panel-row", children: [
      /* @__PURE__ */ a.jsxs("span", { className: `lt-badge lt-badge--health-${e.accountHealth}`, children: [
        "Saúde da conta: ",
        bm[e.accountHealth]
      ] }),
      /* @__PURE__ */ a.jsxs("span", { className: "lt-hint", children: [
        "Próxima revisão sugerida: ",
        e.qbrSuggestedDays === 0 ? "imediata" : `em ${e.qbrSuggestedDays} dias`,
        " ",
        "(",
        Pm[e.qbrReason] ?? e.qbrReason,
        ")"
      ] })
    ] }),
    /* @__PURE__ */ a.jsxs("label", { className: "lt-field", children: [
      /* @__PURE__ */ a.jsxs("span", { children: [
        "Data de renovação do contrato ",
        /* @__PURE__ */ a.jsx($, { text: "Alimenta a cadência de revisão de conta (QBR) sugerida acima." })
      ] }),
      /* @__PURE__ */ a.jsx(
        "input",
        {
          type: "date",
          value: r,
          onChange: (c) => l(c.target.value),
          onBlur: () => u(r)
        }
      )
    ] }),
    o && /* @__PURE__ */ a.jsx("p", { className: "lt-alert", role: "alert", children: o })
  ] });
}
const Nl = {
  continuidade_uso_atual: (e) => `Enviar e-mail perguntando como está o uso de ${e.product ?? e.service ?? "seus produtos atuais"} — é hora de reforçar o relacionamento.`,
  gap_portfolio: (e) => `Ligar apresentando ${e.product ?? e.service ?? "a solução recomendada"} — cliente já usa produtos relacionados mas não tem isso.`,
  prova_social_urgencia: () => "Mandar mensagem no LinkedIn com um caso parecido — bom momento pra criar urgência.",
  abertura_sinal: () => "Primeiro contato por e-mail — sinal identificado aponta interesse.",
  reforco_angulo_novo: () => "Ligar com um ângulo diferente — a primeira abordagem não avançou, vale tentar outro gancho."
};
function Am(e) {
  const t = e.includes("single_threaded_risk"), n = e.includes("no_economic_buyer_contact");
  return t && n ? "Os toques recentes chegaram a uma pessoa só, e não a um decisor. Bom momento pra ampliar quem participa da conversa." : t ? "Só um contato ativo tem recebido seus toques recentes. Vale envolver mais uma pessoa da conta." : "Nenhum decisor apareceu nos toques recentes. Vale trazer quem decide pra conversa.";
}
function Vm({ row: e, repId: t, suggestionCache: n, contactsCache: r }) {
  var H;
  const [l, o] = v.useState(null), [s, i] = v.useState(null), [u, c] = v.useState("idle"), [f, p] = v.useState(!1), [x, g] = v.useState(!1), [_, j] = v.useState([]), [w, m] = v.useState(null), [d, h] = v.useState(!1), [y, S] = v.useState(null), N = `${e.id}:${t}`, b = (B) => {
    o(B), c("idle"), m(B.lastContactId);
  }, P = (B = !1) => {
    var K;
    return !B && ((K = n.current) != null && K.has(N)) ? (b(n.current.get(N)), Promise.resolve()) : uh(e.id, t).then((E) => {
      var A;
      (A = n.current) == null || A.set(N, E), b(E);
    });
  };
  if (v.useEffect(() => {
    i(null), P().catch((B) => i(B instanceof Error ? B.message : "Falha ao calcular a próxima ação."));
  }, [e.id, t]), v.useEffect(() => {
    var K;
    const B = (K = r.current) == null ? void 0 : K.get(e.companyId);
    if (B) {
      j(B);
      return;
    }
    dd(e.companyId).then((E) => {
      var A;
      (A = r.current) == null || A.set(e.companyId, E), j(E);
    }).catch(() => j([]));
  }, [e.companyId]), !t.trim())
    return /* @__PURE__ */ a.jsx("p", { className: "lt-hint", children: "Informe seu nome em “Você é”, no topo, para ver a próxima ação sugerida." });
  if (s) return /* @__PURE__ */ a.jsx("p", { className: "lt-alert", role: "alert", children: s });
  if (!l) return /* @__PURE__ */ a.jsx("p", { className: "lt-hint", children: "Calculando próxima ação…" });
  const R = l.silenceReason && /* @__PURE__ */ a.jsx("p", { className: "lt-advisory", role: "alert", children: l.silenceReason === "nunca_contatado" ? `Esta oportunidade está em qualificação há ${l.silenceDays} dias sem nenhum contato registrado. Ainda faz sentido priorizá-la agora?` : `A cadência sugerida terminou há ${l.silenceDays} dias sem retorno do lead. Bom momento pra decidir: tentar outro ângulo, escalar, ou dispensar.` }), C = l.threadingRiskReasons.length > 0 && /* @__PURE__ */ a.jsxs("div", { className: "lt-panel", children: [
    /* @__PURE__ */ a.jsx("strong", { children: "Vale ampliar os contatos aqui" }),
    /* @__PURE__ */ a.jsx("p", { className: "lt-advisory", children: Am(l.threadingRiskReasons) })
  ] });
  if (l.state === "bloqueado")
    return /* @__PURE__ */ a.jsxs("p", { className: "lt-advisory", role: "alert", children: [
      'Esta empresa está marcada como "não contatar" (',
      l.blockReason ?? "sem motivo informado",
      '), então não há próxima ação sugerida. Se a situação mudou, reative na seção "Não contatar" abaixo.'
    ] });
  if (l.state === "aguardando_intervalo")
    return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      R,
      C,
      /* @__PURE__ */ a.jsx("p", { className: "lt-hint", children: "Sem ação sugerida agora — dentro do intervalo da cadência." })
    ] });
  if (l.state === "cadencia_esgotada")
    return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      R,
      C,
      /* @__PURE__ */ a.jsx("p", { className: "lt-hint", children: "Sem retorno até agora — decida o próximo passo no status acima (encerrar ou continuar manualmente)." })
    ] });
  if (l.state === "cap_diario_atingido")
    return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      R,
      C,
      /* @__PURE__ */ a.jsx("p", { className: "lt-hint", children: "Você atingiu o limite de contatos de hoje. Essa sugestão volta amanhã." })
    ] });
  const M = ((H = Nl[l.reasonCategory ?? ""]) == null ? void 0 : H.call(Nl, e)) ?? "Próxima ação sugerida.", oe = l.channel ?? "email", L = async () => {
    i(null), p(!0);
    try {
      if (oe === "email") {
        const B = await cd(e, w);
        await navigator.clipboard.writeText(`${B.subject}

${B.greeting}

${B.body}

${B.cta}`);
      } else
        await navigator.clipboard.writeText(M);
    } catch (B) {
      i(B instanceof Error ? B.message : "Falha ao copiar o conteúdo do contato."), p(!1);
      return;
    }
    p(!1), c("copied"), setTimeout(() => c("ready"), 1200);
  }, te = async () => {
    g(!0);
    try {
      await ch(e.id, t, oe, M, w, d);
    } catch (B) {
      const K = B instanceof Error ? B.message : "Falha ao registrar o contato.";
      K.includes("não contatar") ? (S(K), h(!0)) : i(K), g(!1);
      return;
    }
    S(null), h(!1);
    try {
      await P(!0);
    } catch {
      i("Contato registrado, mas não consegui atualizar a sugestão — recarregue a página.");
    } finally {
      g(!1);
    }
  };
  return /* @__PURE__ */ a.jsxs("div", { className: "lt-panel", children: [
    R,
    C,
    l.lastContactBlocked && /* @__PURE__ */ a.jsx("p", { className: "lt-advisory", role: "alert", children: 'O último contato registrado está marcado como "não contatar". Escolha outro contato antes de seguir.' }),
    y && /* @__PURE__ */ a.jsxs("p", { className: "lt-alert", role: "alert", children: [
      y,
      ' Clique em "Registrar mesmo assim" só se o contato realmente aconteceu.'
    ] }),
    /* @__PURE__ */ a.jsx("p", { className: "lt-panel-text", children: M }),
    /* @__PURE__ */ a.jsxs("div", { className: "lt-panel-row", children: [
      /* @__PURE__ */ a.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ a.jsxs("span", { children: [
          "Contato (opcional) ",
          /* @__PURE__ */ a.jsx($, { text: "Pra quem o rascunho de e-mail abaixo é endereçado." })
        ] }),
        /* @__PURE__ */ a.jsxs("select", { value: w ?? "", onChange: (B) => m(B.target.value || null), children: [
          /* @__PURE__ */ a.jsx("option", { value: "", children: "Não atribuído" }),
          _.map((B) => /* @__PURE__ */ a.jsxs("option", { value: B.id, children: [
            B.name,
            B.do_not_contact ? " (não contatar)" : ""
          ] }, B.id))
        ] })
      ] }),
      u === "idle" && /* @__PURE__ */ a.jsx("button", { type: "button", className: "lt-btn", onClick: L, disabled: f, children: f ? "Copiando…" : oe === "email" ? "Copiar rascunho" : "Copiar sugestão" }),
      u === "copied" && /* @__PURE__ */ a.jsx("span", { className: "lt-hint", children: "Copiado ✓" }),
      u === "ready" && /* @__PURE__ */ a.jsx("button", { type: "button", className: "lt-btn", onClick: te, disabled: x, children: x ? "Registrando…" : d ? "Registrar mesmo assim" : "Marcar como enviado" })
    ] })
  ] });
}
const Bm = {
  scope_note: "Alcance do gap",
  criticality: "Criticidade",
  severity_note: "Observação de severidade",
  root_cause_stated: "Por que isso acontece hoje?",
  trigger_event: "Por que agora?",
  champion_stake: "O que o contato ganha ou perde",
  discovery_skipped: "Qualificada sem discovery",
  discovery_skip_reason: "Justificativa para qualificar sem discovery",
  renewal_date: "Data de renovação",
  industry: "Setor",
  deal_size_hint: "Porte estimado",
  stance: "Postura do contato",
  segment: "Segmento",
  region: "Região",
  rep_id: "Representante",
  website: "Site",
  address: "Endereço",
  legal_name: "Razão social",
  annual_revenue: "Receita anual",
  employee_count: "Nº de funcionários",
  customer_status: "Status do cliente"
};
function Ui(e, t) {
  var n, r;
  return t === null ? "vazio" : e === "renewal_date" ? new Date(t).toLocaleDateString("pt-BR", { timeZone: "UTC" }) : e === "scope_note" ? ((n = _d.find((l) => l.value === t)) == null ? void 0 : n.label.split(" (")[0]) ?? t : e === "criticality" ? ((r = wd.find((l) => l.value === t)) == null ? void 0 : r.label.split(" (")[0]) ?? t : e === "discovery_skipped" ? t === "True" ? "sim" : "não" : t;
}
function Um({ row: e }) {
  const [t, n] = v.useState(null), [r, l] = v.useState(null), [o, s] = v.useState(!1);
  return v.useEffect(() => {
    o && Th(e.id).then(n).catch((i) => l(i instanceof Error ? i.message : "Falha ao carregar o histórico."));
  }, [o, e.id]), /* @__PURE__ */ a.jsxs("div", { className: "lt-panel", children: [
    /* @__PURE__ */ a.jsxs("button", { type: "button", className: "lt-btn", onClick: () => s((i) => !i), "aria-expanded": o, children: [
      o ? "Ocultar" : "Ver",
      " histórico de alterações"
    ] }),
    o && r && /* @__PURE__ */ a.jsx("p", { className: "lt-alert", role: "alert", children: r }),
    o && t !== null && t.length === 0 && /* @__PURE__ */ a.jsx("p", { className: "lt-hint", children: "Nenhuma alteração registrada ainda." }),
    o && t !== null && t.length > 0 && /* @__PURE__ */ a.jsx("ul", { className: "lt-hint", children: t.map((i) => /* @__PURE__ */ a.jsxs("li", { children: [
      new Date(i.changed_at).toLocaleString("pt-BR"),
      " — ",
      Bm[i.field] ?? i.field,
      ": ",
      Ui(i.field, i.old_value),
      " → ",
      Ui(i.field, i.new_value),
      " ",
      "(",
      i.actor === "sync" ? "sincronização automática" : i.actor ?? "não identificado",
      ")"
    ] }, i.id)) })
  ] });
}
const qi = [
  { value: "requested_by_contact", label: "O contato pediu para não ser contatado" },
  { value: "invalid_contact_data", label: "Dados de contato inválidos" },
  { value: "rep_decision", label: "Decisão do representante" },
  { value: "other", label: "Outro motivo" }
];
function qm({ row: e, repId: t }) {
  const [n, r] = v.useState([]), [l, o] = v.useState([]), [s, i] = v.useState(""), [u, c] = v.useState(""), [f, p] = v.useState("requested_by_contact"), [x, g] = v.useState(""), [_, j] = v.useState(null), [w, m] = v.useState(""), [d, h] = v.useState(null), y = () => dh(e.companyId).then(r);
  v.useEffect(() => {
    y().catch((R) => h(R instanceof Error ? R.message : "Falha ao carregar a lista de não contatar.")), dd(e.companyId).then(o).catch(() => o([]));
  }, [e.companyId]);
  const S = async () => {
    h(null);
    try {
      await ph(e.companyId, {
        repId: t,
        contactId: s || null,
        channel: u || null,
        reason: f,
        comment: x
      }), g(""), await y();
    } catch (R) {
      h(R instanceof Error ? R.message : "Falha ao marcar como não contatar.");
    }
  }, N = async (R) => {
    h(null);
    try {
      await fh(R, t, w), j(null), m(""), await y();
    } catch (C) {
      h(C instanceof Error ? C.message : "Falha ao reativar.");
    }
  }, b = (R) => {
    var C;
    return R ? ((C = l.find((M) => M.id === R)) == null ? void 0 : C.name) ?? "Contato" : "Empresa inteira";
  }, P = n.filter((R) => !R.lifted_at);
  return /* @__PURE__ */ a.jsxs("div", { className: "lt-panel", children: [
    /* @__PURE__ */ a.jsx("strong", { children: "Não contatar" }),
    !t.trim() && /* @__PURE__ */ a.jsx("p", { className: "lt-hint", children: "Informe seu nome em “Você é”, no topo, para marcar ou reativar." }),
    P.length === 0 && /* @__PURE__ */ a.jsx("p", { className: "lt-hint", children: "Nenhum bloqueio ativo nesta empresa." }),
    P.map((R) => {
      var C;
      return /* @__PURE__ */ a.jsxs("div", { className: "lt-panel-row", children: [
        /* @__PURE__ */ a.jsxs("span", { className: "lt-panel-text", children: [
          b(R.contact_id),
          " · ",
          R.channel ?? "todos os canais",
          " · ",
          (C = qi.find((M) => M.value === R.reason)) == null ? void 0 : C.label,
          R.comment ? ` — ${R.comment}` : ""
        ] }),
        _ === R.id ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
          /* @__PURE__ */ a.jsxs("label", { className: "lt-field", children: [
            /* @__PURE__ */ a.jsx("span", { children: "Por que reativar? (opcional)" }),
            /* @__PURE__ */ a.jsx("input", { value: w, onChange: (M) => m(M.target.value), maxLength: 500 })
          ] }),
          /* @__PURE__ */ a.jsx("button", { type: "button", className: "lt-btn", onClick: () => N(R.id), disabled: !t.trim(), children: "Confirmar reativação" })
        ] }) : /* @__PURE__ */ a.jsx("button", { type: "button", className: "lt-btn", onClick: () => j(R.id), children: "Reativar" })
      ] }, R.id);
    }),
    /* @__PURE__ */ a.jsxs("div", { className: "lt-panel-row", children: [
      /* @__PURE__ */ a.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ a.jsx("span", { children: "Quem" }),
        /* @__PURE__ */ a.jsxs("select", { value: s, onChange: (R) => i(R.target.value), children: [
          /* @__PURE__ */ a.jsx("option", { value: "", children: "Empresa inteira" }),
          l.map((R) => /* @__PURE__ */ a.jsx("option", { value: R.id, children: R.name }, R.id))
        ] })
      ] }),
      /* @__PURE__ */ a.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ a.jsx("span", { children: "Canal" }),
        /* @__PURE__ */ a.jsxs("select", { value: u, onChange: (R) => c(R.target.value), children: [
          /* @__PURE__ */ a.jsx("option", { value: "", children: "Todos os canais" }),
          /* @__PURE__ */ a.jsx("option", { value: "email", children: "E-mail" }),
          /* @__PURE__ */ a.jsx("option", { value: "ligação", children: "Ligação" }),
          /* @__PURE__ */ a.jsx("option", { value: "linkedin", children: "LinkedIn" })
        ] })
      ] }),
      /* @__PURE__ */ a.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ a.jsx("span", { children: "Motivo" }),
        /* @__PURE__ */ a.jsx("select", { value: f, onChange: (R) => p(R.target.value), children: qi.map((R) => /* @__PURE__ */ a.jsx("option", { value: R.value, children: R.label }, R.value)) })
      ] }),
      /* @__PURE__ */ a.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ a.jsxs("span", { children: [
          "Observação (opcional) ",
          /* @__PURE__ */ a.jsx($, { text: "Fica só aqui: não vai para exportações nem para a IA." })
        ] }),
        /* @__PURE__ */ a.jsx("input", { value: x, onChange: (R) => g(R.target.value), maxLength: 500 })
      ] }),
      /* @__PURE__ */ a.jsx("button", { type: "button", className: "lt-btn", onClick: S, disabled: !t.trim(), children: "Marcar como não contatar" })
    ] }),
    d && /* @__PURE__ */ a.jsx("p", { className: "lt-alert", role: "alert", children: d })
  ] });
}
function Hm({ row: e, repId: t, onRowUpdated: n, onRenewalDateUpdated: r, suggestionCache: l, contactsCache: o, aiHasKey: s }) {
  const [i, u] = v.useState("idle"), [c, f] = v.useState(null), [p, x] = v.useState(null), [g, _] = v.useState(!1), j = nh(e), [w, m] = v.useState("idle"), [d, h] = v.useState(null), [y, S] = v.useState(null), N = async () => {
    m("loading"), h(null);
    try {
      const C = await cd(e);
      S(C), m("idle");
    } catch (C) {
      h(C instanceof Error ? C.message : "Falha ao gerar rascunho."), m("error");
    }
  }, b = async () => {
    if (!j.enabled || i === "loading") return;
    const C = s && g;
    u("loading"), f(null), x(null);
    try {
      const { fonte: M } = await ih(e.id, C, e.companyName);
      x(lh(M, C)), u("idle");
    } catch (M) {
      f(M instanceof Error ? M.message : "Falha ao gerar o business case."), u("error");
    }
  }, P = async () => {
    y && await navigator.clipboard.writeText(`${y.subject}

${y.greeting}

${y.body}

${y.cta}`);
  }, R = async () => {
    const C = [
      e.companyName,
      e.isCustomer ? "Cliente" : "Prospect",
      `Score: ${Un(e.opportunityScore)}`,
      `Valor típico informado: ${So(e.financialPotential)}`,
      e.justification ?? ""
    ].filter(Boolean).join(" — ");
    await navigator.clipboard.writeText(C);
  };
  return /* @__PURE__ */ a.jsx("tr", { children: /* @__PURE__ */ a.jsxs("td", { colSpan: 7, className: "lt-detail", children: [
    /* @__PURE__ */ a.jsx($m, { row: e, onUpdated: n }),
    /* @__PURE__ */ a.jsxs("div", { className: "lt-panel", children: [
      /* @__PURE__ */ a.jsx("strong", { children: "Próxima ação sugerida" }),
      /* @__PURE__ */ a.jsx(Vm, { row: e, repId: t, suggestionCache: l, contactsCache: o })
    ] }),
    /* @__PURE__ */ a.jsx(qm, { row: e, repId: t }),
    /* @__PURE__ */ a.jsxs("div", { className: "lt-detail-actions", children: [
      /* @__PURE__ */ a.jsx("button", { type: "button", className: "lt-btn", onClick: R, children: "Copiar resumo" }),
      /* @__PURE__ */ a.jsx("button", { type: "button", className: "lt-btn", onClick: N, disabled: w === "loading", children: w === "loading" ? "Gerando…" : "Gerar rascunho" }),
      /* @__PURE__ */ a.jsx(
        "button",
        {
          type: "button",
          className: "lt-btn",
          onClick: b,
          "aria-disabled": !j.enabled || i === "loading",
          "aria-busy": i === "loading",
          "aria-describedby": j.enabled ? void 0 : `bc-reason-${e.id}`,
          children: i === "loading" ? "Gerando business case…" : "Exportar business case"
        }
      ),
      /* @__PURE__ */ a.jsxs("label", { children: [
        /* @__PURE__ */ a.jsx(
          "input",
          {
            type: "checkbox",
            checked: s && g,
            disabled: !s,
            onChange: (C) => {
              _(C.target.checked), x(null), f(null), u("idle");
            }
          }
        ),
        " ",
        "Melhorar o texto com IA"
      ] }),
      /* @__PURE__ */ a.jsx($, { text: "Envia os dados desta oportunidade (empresa, evidências, produto) ao provedor de IA configurado para reescrever o texto. Sem isso, usamos o texto padrão. Os números nunca são alterados." })
    ] }),
    !j.enabled && /* @__PURE__ */ a.jsx("p", { className: "lt-hint", id: `bc-reason-${e.id}`, children: j.reason }),
    !s && /* @__PURE__ */ a.jsx("p", { className: "lt-hint", children: "Configure a IA em Configurações" }),
    i === "error" && /* @__PURE__ */ a.jsx("p", { className: "lt-alert", role: "alert", children: c }),
    w === "error" && /* @__PURE__ */ a.jsx("p", { className: "lt-alert", role: "alert", children: d }),
    /* @__PURE__ */ a.jsxs("div", { role: "status", children: [
      p && /* @__PURE__ */ a.jsx("p", { className: "lt-hint", children: p }),
      y && /* @__PURE__ */ a.jsxs("div", { className: "lt-draft", children: [
        /* @__PURE__ */ a.jsxs("p", { children: [
          /* @__PURE__ */ a.jsx("strong", { children: "Assunto:" }),
          " ",
          y.subject
        ] }),
        /* @__PURE__ */ a.jsx("p", { children: y.greeting }),
        /* @__PURE__ */ a.jsx("p", { children: y.body }),
        /* @__PURE__ */ a.jsx("p", { children: y.cta }),
        /* @__PURE__ */ a.jsx("button", { type: "button", className: "lt-btn", onClick: P, children: "Copiar rascunho" }),
        /* @__PURE__ */ a.jsx("p", { className: "lt-hint", children: "Revise antes de enviar — o rascunho nunca é enviado automaticamente." })
      ] })
    ] }),
    /* @__PURE__ */ a.jsxs("details", { className: "lt-dash-more", children: [
      /* @__PURE__ */ a.jsx("summary", { children: "Por que esta oportunidade apareceu (evidências, scores e fontes)" }),
      /* @__PURE__ */ a.jsxs("dl", { children: [
        /* @__PURE__ */ a.jsx("dt", { children: "Status de cliente" }),
        /* @__PURE__ */ a.jsx("dd", { children: e.isCustomer ? "Cliente" : "Prospect" }),
        /* @__PURE__ */ a.jsx("dt", { children: "Fontes" }),
        /* @__PURE__ */ a.jsx("dd", { children: e.sources.map((C) => `${C.type} (${Math.round(C.confidence * 100)}%)`).join(", ") || "—" }),
        /* @__PURE__ */ a.jsx("dt", { children: "Produtos atuais" }),
        /* @__PURE__ */ a.jsx("dd", { children: e.currentProducts.join(", ") || "—" }),
        /* @__PURE__ */ a.jsx("dt", { children: "Produtos recomendados" }),
        /* @__PURE__ */ a.jsx("dd", { children: e.recommendedProducts.join(", ") || "—" }),
        /* @__PURE__ */ a.jsx("dt", { children: "Serviços recomendados" }),
        /* @__PURE__ */ a.jsx("dd", { children: e.recommendedServices.join(", ") || "—" }),
        /* @__PURE__ */ a.jsx("dt", { children: "Valor típico informado" }),
        /* @__PURE__ */ a.jsxs("dd", { children: [
          So(e.financialPotential),
          e.financialPotentialBasis ? ` — ${e.financialPotentialBasis}` : ""
        ] }),
        /* @__PURE__ */ a.jsx("dt", { children: "Scores" }),
        /* @__PURE__ */ a.jsxs("dd", { children: [
          "oportunidade ",
          Un(e.opportunityScore),
          " · estratégico ",
          Un(null),
          " · confiança ",
          Un(e.confidenceScore)
        ] }),
        /* @__PURE__ */ a.jsx("dt", { children: "Evidências" }),
        /* @__PURE__ */ a.jsx("dd", { children: e.evidence.join(", ") || "—" }),
        /* @__PURE__ */ a.jsx("dt", { children: "Insight" }),
        /* @__PURE__ */ a.jsx("dd", { children: e.justification ?? "Sem justificativa registrada." }),
        Fi(e.companyWebsite) && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
          /* @__PURE__ */ a.jsx("dt", { children: "Site" }),
          /* @__PURE__ */ a.jsx("dd", { children: /* @__PURE__ */ a.jsx("a", { href: Fi(e.companyWebsite), target: "_blank", rel: "noopener noreferrer", children: Tm(e.companyWebsite) }) })
        ] }),
        e.discoveryPrompt && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
          /* @__PURE__ */ a.jsx("dt", { children: "Pergunta para o cliente" }),
          /* @__PURE__ */ a.jsx("dd", { children: e.discoveryPrompt })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ a.jsxs("details", { className: "lt-dash-more", open: e.status === "detected", children: [
      /* @__PURE__ */ a.jsxs("summary", { children: [
        "Discovery",
        e.discoveryPending ? " (pendente)" : "",
        " — perguntas para o cliente antes de qualificar"
      ] }),
      /* @__PURE__ */ a.jsx(Dm, { row: e, repId: t, onUpdated: n })
    ] }),
    /* @__PURE__ */ a.jsxs("details", { className: "lt-dash-more", children: [
      /* @__PURE__ */ a.jsx("summary", { children: "Qualificação do gap e saúde da conta" }),
      /* @__PURE__ */ a.jsx(Mm, { row: e, repId: t, onRenewalDateUpdated: r }),
      /* @__PURE__ */ a.jsx(Fm, { row: e, repId: t, onUpdated: n })
    ] }),
    /* @__PURE__ */ a.jsx(Um, { row: e })
  ] }) });
}
function Qm({ rows: e, repId: t, onRowUpdated: n, onRenewalDateUpdated: r }) {
  const [l, o] = v.useState("score"), [s, i] = v.useState("desc"), [u, c] = v.useState(null), f = v.useRef(/* @__PURE__ */ new Map()), p = v.useRef(/* @__PURE__ */ new Map()), [x, g] = v.useState(!1);
  v.useEffect(() => {
    fd().then((w) => g(w.has_key)).catch(() => g(!1));
  }, []);
  const _ = (w) => {
    w === l ? i((m) => m === "asc" ? "desc" : "asc") : (o(w), i("desc"));
  }, j = v.useMemo(() => Om(e, l, s), [e, l, s]);
  return e.length === 0 ? /* @__PURE__ */ a.jsx("p", { className: "lt-empty", role: "status", children: "Nenhuma oportunidade encontrada com os filtros atuais." }) : /* @__PURE__ */ a.jsxs("table", { className: "lt-table", children: [
    /* @__PURE__ */ a.jsx("thead", { children: /* @__PURE__ */ a.jsxs("tr", { children: [
      /* @__PURE__ */ a.jsx("th", { children: "Empresa" }),
      /* @__PURE__ */ a.jsx("th", { children: "Cliente" }),
      /* @__PURE__ */ a.jsx("th", { children: "Status" }),
      /* @__PURE__ */ a.jsx(Bi, { label: "Score", sortKey: "score", current: l, direction: s, onSort: _ }),
      /* @__PURE__ */ a.jsx(Bi, { label: "Valor típico", sortKey: "potencial", current: l, direction: s, onSort: _ }),
      /* @__PURE__ */ a.jsx("th", { children: "Produto / Serviço" }),
      /* @__PURE__ */ a.jsx("th", { children: "Saúde da conta" })
    ] }) }),
    /* @__PURE__ */ a.jsx("tbody", { children: j.map((w) => /* @__PURE__ */ a.jsxs(v.Fragment, { children: [
      /* @__PURE__ */ a.jsxs("tr", { children: [
        /* @__PURE__ */ a.jsxs("td", { children: [
          /* @__PURE__ */ a.jsxs(
            "button",
            {
              type: "button",
              className: "lt-expand-btn",
              "aria-expanded": u === w.id,
              "aria-label": `${u === w.id ? "Recolher" : "Expandir"} detalhes de ${w.companyName}`,
              onClick: () => c(u === w.id ? null : w.id),
              children: [
                u === w.id ? "▾" : "▸",
                " ",
                w.companyName
              ]
            }
          ),
          w.isAging && /* @__PURE__ */ a.jsx("span", { className: "lt-badge lt-badge--attention", title: "Detectada há mais tempo que o prazo de triagem", children: "triagem atrasada" }),
          w.discoveryPending && /* @__PURE__ */ a.jsx("span", { className: "lt-badge", title: "Avançou sem preencher a discovery", children: "discovery pendente" })
        ] }),
        /* @__PURE__ */ a.jsx("td", { children: /* @__PURE__ */ a.jsx("span", { className: `lt-badge ${w.isCustomer ? "lt-badge--customer" : "lt-badge--prospect"}`, children: w.isCustomer ? "Cliente" : "Prospect" }) }),
        /* @__PURE__ */ a.jsx("td", { children: Ca[w.status] }),
        /* @__PURE__ */ a.jsx("td", { children: Un(w.opportunityScore) }),
        /* @__PURE__ */ a.jsx("td", { children: So(w.financialPotential) }),
        /* @__PURE__ */ a.jsx("td", { children: [w.product, w.service].filter(Boolean).join(" · ") || "—" }),
        /* @__PURE__ */ a.jsx("td", { children: /* @__PURE__ */ a.jsx("span", { className: `lt-badge lt-badge--health-${w.accountHealth}`, children: Ea[w.accountHealth] }) })
      ] }),
      u === w.id && /* @__PURE__ */ a.jsx(
        Hm,
        {
          row: w,
          repId: t,
          onRowUpdated: n,
          onRenewalDateUpdated: r,
          suggestionCache: f,
          contactsCache: p,
          aiHasKey: x
        }
      )
    ] }, w.id)) })
  ] });
}
const Nd = "lt_rep_id";
function Wm() {
  try {
    return localStorage.getItem(Nd) ?? "";
  } catch {
    return "";
  }
}
function Km() {
  const [e, t] = v.useState(Wm);
  return [e, (r) => {
    t(r);
    try {
      localStorage.setItem(Nd, r);
    } catch {
    }
  }];
}
const Gm = {
  legal_name: "Razão social",
  website: "Site",
  industry: "Setor",
  address: "Endereço",
  annual_revenue: "Receita anual",
  employee_count: "Nº de funcionários",
  customer_status: "Status do cliente",
  segment: "Segmento",
  region: "Região",
  rep_id: "Representante"
}, Ym = {
  salesforce: "Salesforce",
  google_maps: "Google Maps",
  csv: "Planilha (CSV)",
  manual: "Edição manual",
  mapping: "Mapeamento de campo",
  legacy: "Dado anterior"
};
function Jm(e) {
  return e == null || e === "" ? "vazio" : typeof e == "object" ? Object.values(e).filter((t) => t).join(", ") || "vazio" : String(e);
}
function Xm({ repId: e, onResolved: t }) {
  const [n, r] = v.useState(null), [l, o] = v.useState(null), [s, i] = v.useState(null), u = () => bh().then(r);
  v.useEffect(() => {
    u().catch((f) => o(f instanceof Error ? f.message : "Não consegui carregar os conflitos de dados."));
  }, []);
  const c = async (f, p) => {
    i(f), o(null);
    try {
      await Ph(f, p, e.trim() || null), await u(), t == null || t();
    } catch (x) {
      o(x instanceof Error ? x.message : "Falha ao resolver o conflito.");
    } finally {
      i(null);
    }
  };
  return l ? /* @__PURE__ */ a.jsx("p", { className: "lt-alert", role: "alert", children: l }) : !n || n.length === 0 ? null : /* @__PURE__ */ a.jsxs("details", { className: "lt-fold lt-fold--attention", open: !0, children: [
    /* @__PURE__ */ a.jsxs("summary", { children: [
      "Conflitos de dados (",
      n.length,
      ") — fontes que discordam, escolha qual manter"
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "lt-fold__body", children: [
      /* @__PURE__ */ a.jsxs("p", { className: "lt-hint", children: [
        "O valor atual continua valendo até você escolher. A escolha fica no histórico de alterações e não é perguntada de novo.",
        e.trim() ? "" : ' Dica: informe seu nome em "Você é" no topo para ele aparecer no histórico.'
      ] }),
      n.map((f) => /* @__PURE__ */ a.jsxs("div", { className: "lt-panel", children: [
        /* @__PURE__ */ a.jsxs("strong", { children: [
          f.company_name,
          " — ",
          Gm[f.field] ?? f.field
        ] }),
        /* @__PURE__ */ a.jsx("div", { className: "lt-panel-row", children: f.candidates.map((p) => /* @__PURE__ */ a.jsxs(
          "button",
          {
            type: "button",
            className: "lt-btn",
            disabled: s === f.id,
            onClick: () => c(f.id, p.source),
            children: [
              'Manter "',
              Jm(p.value),
              '" (',
              Ym[p.source] ?? p.source,
              ")"
            ]
          },
          p.source
        )) })
      ] }, f.id))
    ] })
  ] });
}
const Zm = {
  promoted: "Pronto para contato",
  deferred: "Fila para amanhã",
  rejected: "Fora do critério"
};
function kl({ item: e, group: t }) {
  return /* @__PURE__ */ a.jsxs("div", { className: "lt-source-card", children: [
    /* @__PURE__ */ a.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "baseline" }, children: [
      /* @__PURE__ */ a.jsx("strong", { children: e.name }),
      /* @__PURE__ */ a.jsx("span", { className: `lt-badge lt-badge--discovery-${t}`, children: Zm[t] })
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
function eg({ repId: e = "" }) {
  const [t, n] = v.useState(1), [r, l] = v.useState([]), [o, s] = v.useState(void 0), [i, u] = v.useState(null), [c, f] = v.useState(null), p = c ?? e, x = (I) => f(I), [g, _] = v.useState(""), [j, w] = v.useState(""), [m, d] = v.useState(15), [h, y] = v.useState(""), [S, N] = v.useState(""), [b, P] = v.useState(!1), [R, C] = v.useState(null), [M, oe] = v.useState(null), [L, te] = v.useState(!1), [H, B] = v.useState(null), [K, E] = v.useState(null);
  v.useEffect(() => {
    Promise.all([vd(), Oh()]).then(([I, Z]) => {
      l(I), Z.searchOriginAddress && w(Z.searchOriginAddress), Z.radiusKm && d(Z.radiusKm), Z.referenceProductId && _(Z.referenceProductId);
    }).catch((I) => u(I instanceof Error ? I.message : "Não consegui carregar os dados iniciais."));
  }, []);
  const A = () => {
    n(3), o === void 0 && Dh().then((I) => {
      s(I), I && (y((Z) => Z || I.industryHint || ""), N((Z) => Z || I.companySizeHint || ""));
    }).catch(() => s(null));
  }, V = async () => {
    P(!0), C(null);
    try {
      await Ih({
        referenceProductId: g || null,
        placeCategory: h || null,
        companySizeHint: S || null,
        radiusKm: m,
        searchOriginAddress: j
      });
      const I = await Fh({
        repId: p,
        referenceProductId: g || null,
        searchOriginAddress: j,
        radiusKm: m,
        placeCategory: h || null,
        companySizeHint: S || null
      });
      oe(I);
    } catch (I) {
      C(I instanceof Error ? I.message : "Não conseguimos completar a busca agora.");
    } finally {
      P(!1);
    }
  }, Q = () => {
    oe(null), C(null), te(!1), E(null), n(1);
  }, G = async (I) => {
    if (!M) return;
    B(I), E(null);
    const Z = `Prospecção geográfica — raio ${m}km, ${h || "sem categoria"}`;
    try {
      I === "pdf" ? await Mh(M, Z) : await Ah(M);
    } catch (T) {
      E(T instanceof Error ? T.message : "Falha ao exportar.");
    } finally {
      B(null);
    }
  };
  return i ? /* @__PURE__ */ a.jsx("p", { className: "lt-alert", role: "alert", children: i }) : M ? /* @__PURE__ */ a.jsxs("div", { className: "lt-dashboard", children: [
    /* @__PURE__ */ a.jsx("div", { className: "lt-header", children: /* @__PURE__ */ a.jsx("h2", { children: "Resultado da busca" }) }),
    /* @__PURE__ */ a.jsxs("div", { className: "lt-toolbar", children: [
      /* @__PURE__ */ a.jsx("button", { type: "button", className: "lt-btn", onClick: () => G("pdf"), disabled: H !== null, "aria-busy": H === "pdf", children: H === "pdf" ? "Gerando PDF…" : "PDF" }),
      /* @__PURE__ */ a.jsx("button", { type: "button", className: "lt-btn", onClick: () => G("excel"), disabled: H !== null, "aria-busy": H === "excel", children: H === "excel" ? "Gerando Excel…" : "Excel" })
    ] }),
    K && /* @__PURE__ */ a.jsx("p", { className: "lt-alert", role: "alert", children: K }),
    /* @__PURE__ */ a.jsxs("div", { className: "lt-stat-grid", children: [
      /* @__PURE__ */ a.jsxs("div", { className: "lt-stat-tile", children: [
        /* @__PURE__ */ a.jsx("div", { className: "lt-stat-tile__value", children: M.promoted.length }),
        /* @__PURE__ */ a.jsx("div", { className: "lt-stat-tile__label", children: "Prontos para contato" }),
        /* @__PURE__ */ a.jsx("div", { className: "lt-stat-tile__hint", children: "Passaram no critério e já estão na sua lista de oportunidades." })
      ] }),
      M.deferred.length > 0 && /* @__PURE__ */ a.jsxs("div", { className: "lt-stat-tile", children: [
        /* @__PURE__ */ a.jsx("div", { className: "lt-stat-tile__value", children: M.deferred.length }),
        /* @__PURE__ */ a.jsx("div", { className: "lt-stat-tile__label", children: "Na fila para amanhã" }),
        /* @__PURE__ */ a.jsx("div", { className: "lt-stat-tile__hint", children: "Encontramos mais oportunidades boas do que a cota diária de hoje. Elas entram automaticamente na lista amanhã, sem precisar buscar de novo." })
      ] })
    ] }),
    M.alreadyKnown.length > 0 && /* @__PURE__ */ a.jsxs("p", { className: "lt-hint", children: [
      M.alreadyKnown.length,
      " ",
      M.alreadyKnown.length === 1 ? "lugar já estava" : "lugares já estavam",
      " na sua base e não ",
      M.alreadyKnown.length === 1 ? "foi" : "foram",
      " duplicado",
      M.alreadyKnown.length === 1 ? "" : "s",
      "."
    ] }),
    M.promoted.length > 0 && /* @__PURE__ */ a.jsx("div", { className: "lt-source-grid", children: M.promoted.map((I) => /* @__PURE__ */ a.jsx(kl, { item: I, group: "promoted" }, I.placeId)) }),
    M.deferred.length > 0 && /* @__PURE__ */ a.jsx("div", { className: "lt-source-grid", children: M.deferred.map((I) => /* @__PURE__ */ a.jsx(kl, { item: I, group: "deferred" }, I.placeId)) }),
    M.rejected.length > 0 && /* @__PURE__ */ a.jsx("div", { className: "lt-detail-actions", children: /* @__PURE__ */ a.jsxs("button", { type: "button", className: "lt-btn", onClick: () => te((I) => !I), children: [
      L ? "Ocultar" : "Ver",
      " todos os resultados da busca (",
      M.rejected.length,
      " fora do critério)"
    ] }) }),
    L && M.rejected.length > 0 && /* @__PURE__ */ a.jsx("div", { className: "lt-source-grid", children: M.rejected.map((I) => /* @__PURE__ */ a.jsx(kl, { item: I, group: "rejected" }, I.placeId)) }),
    /* @__PURE__ */ a.jsx("div", { className: "lt-detail-actions", children: /* @__PURE__ */ a.jsx("button", { type: "button", className: "lt-btn", onClick: Q, children: "Nova busca" }) })
  ] }) : /* @__PURE__ */ a.jsxs("div", { children: [
    /* @__PURE__ */ a.jsxs("div", { className: "lt-header", children: [
      /* @__PURE__ */ a.jsx("h2", { children: "Prospecção geográfica" }),
      /* @__PURE__ */ a.jsxs("p", { children: [
        "Passo ",
        t,
        " de 4"
      ] })
    ] }),
    t === 1 && /* @__PURE__ */ a.jsxs("div", { className: "lt-source-card__form", children: [
      /* @__PURE__ */ a.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ a.jsxs("span", { children: [
          "Buscar prospecção para (representante) ",
          /* @__PURE__ */ a.jsx($, { text: "Quem vai receber as oportunidades descobertas nessa busca." })
        ] }),
        /* @__PURE__ */ a.jsx("input", { value: p, onChange: (I) => x(I.target.value), placeholder: "Id ou nome do representante" })
      ] }),
      /* @__PURE__ */ a.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ a.jsxs("span", { children: [
          "A partir de qual produto ou serviço? ",
          /* @__PURE__ */ a.jsx($, { text: "Usa clientes satisfeitos com esse item pra sugerir categoria e porte no passo 3." })
        ] }),
        /* @__PURE__ */ a.jsxs("select", { value: g, onChange: (I) => _(I.target.value), children: [
          /* @__PURE__ */ a.jsx("option", { value: "", children: "Nenhum em particular" }),
          r.map((I) => /* @__PURE__ */ a.jsx("option", { value: I.id, children: I.name }, I.id))
        ] })
      ] }),
      /* @__PURE__ */ a.jsx("div", { className: "lt-detail-actions", children: /* @__PURE__ */ a.jsx("button", { type: "button", className: "lt-btn", onClick: () => n(2), disabled: !p.trim(), children: "Avançar" }) })
    ] }),
    t === 2 && /* @__PURE__ */ a.jsxs("div", { className: "lt-source-card__form", children: [
      /* @__PURE__ */ a.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ a.jsxs("span", { children: [
          "Endereço de origem da busca ",
          /* @__PURE__ */ a.jsx($, { text: "Ponto central da busca geográfica." })
        ] }),
        /* @__PURE__ */ a.jsx(
          "input",
          {
            value: j,
            onChange: (I) => w(I.target.value),
            placeholder: "Rua, número, cidade"
          }
        )
      ] }),
      /* @__PURE__ */ a.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ a.jsxs("span", { children: [
          "Raio de busca: ",
          m,
          " km ",
          /* @__PURE__ */ a.jsx($, { text: "Distância máxima do endereço de origem pra considerar uma empresa candidata." })
        ] }),
        /* @__PURE__ */ a.jsx("input", { type: "range", min: 1, max: 50, value: m, onChange: (I) => d(Number(I.target.value)) })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: "lt-detail-actions", children: [
        /* @__PURE__ */ a.jsx("button", { type: "button", className: "lt-btn", onClick: () => n(1), children: "Voltar" }),
        /* @__PURE__ */ a.jsx("button", { type: "button", className: "lt-btn", onClick: A, disabled: !j.trim(), children: "Avançar" })
      ] })
    ] }),
    t === 3 && /* @__PURE__ */ a.jsxs("div", { className: "lt-source-card__form", children: [
      o === void 0 && /* @__PURE__ */ a.jsx("p", { className: "lt-hint", children: "Calculando sugestão…" }),
      o === null && /* @__PURE__ */ a.jsx("p", { className: "lt-hint", children: "Ainda não temos clientes satisfeitos suficientes pra sugerir automaticamente. Escolha a categoria e o porte manualmente." }),
      o && o.confidence === "high" && /* @__PURE__ */ a.jsxs("p", { className: "lt-hint", children: [
        "Com base nos seus clientes satisfeitos, sugerimos buscar ",
        /* @__PURE__ */ a.jsx("strong", { children: o.industryHint ?? "—" }),
        ", porte ",
        /* @__PURE__ */ a.jsx("strong", { children: o.companySizeHint ?? "—" }),
        "."
      ] }),
      o && o.confidence === "low" && /* @__PURE__ */ a.jsxs("p", { className: "lt-hint", children: [
        "Encontramos poucos clientes de referência ainda (",
        o.sampleSize,
        "), então esta é uma sugestão inicial — vale revisar antes de confirmar."
      ] }),
      /* @__PURE__ */ a.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ a.jsxs("span", { children: [
          "Categoria (Google Places) ",
          /* @__PURE__ */ a.jsx($, { text: "Tipo de estabelecimento no Google Places usado como filtro da busca — precisa ser exatamente um dos valores da tabela oficial de tipos da Places API (em inglês, ex.: accounting, lawyer, real_estate_agency)." })
        ] }),
        /* @__PURE__ */ a.jsx("input", { value: h, onChange: (I) => y(I.target.value), placeholder: "ex.: car_dealer" }),
        /* @__PURE__ */ a.jsx(
          "a",
          {
            href: "https://developers.google.com/maps/documentation/places/web-service/place-types",
            target: "_blank",
            rel: "noopener noreferrer",
            children: "Ver tabela oficial de tipos"
          }
        )
      ] }),
      /* @__PURE__ */ a.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ a.jsxs("span", { children: [
          "Porte-alvo ",
          /* @__PURE__ */ a.jsx($, { text: "Descrição livre do porte de empresa procurado — só orienta a triagem, não filtra sozinho." })
        ] }),
        /* @__PURE__ */ a.jsx("input", { value: S, onChange: (I) => N(I.target.value), placeholder: "ex.: média" })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: "lt-detail-actions", children: [
        /* @__PURE__ */ a.jsx("button", { type: "button", className: "lt-btn", onClick: () => n(2), children: "Voltar" }),
        /* @__PURE__ */ a.jsx("button", { type: "button", className: "lt-btn", onClick: () => n(4), children: "Avançar" })
      ] })
    ] }),
    t === 4 && /* @__PURE__ */ a.jsxs("div", { className: "lt-source-card__form", children: [
      /* @__PURE__ */ a.jsxs("p", { className: "lt-hint", children: [
        "Vamos buscar ",
        h || "empresas",
        " ",
        S ? `de porte ${S} ` : "",
        "num raio de ",
        m,
        'km a partir de "',
        j,
        '", para ',
        p,
        "."
      ] }),
      R && /* @__PURE__ */ a.jsxs("p", { className: "lt-alert", role: "alert", children: [
        "Não conseguimos completar a busca agora. Isso não é um problema com os seus critérios — pode ser uma instabilidade temporária. ",
        R
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: "lt-detail-actions", children: [
        /* @__PURE__ */ a.jsx("button", { type: "button", className: "lt-btn", onClick: () => n(3), disabled: b, children: "Voltar" }),
        /* @__PURE__ */ a.jsx("button", { type: "button", className: "lt-btn", onClick: V, disabled: b, "aria-busy": b, children: b ? "Buscando…" : "Buscar agora" })
      ] })
    ] })
  ] });
}
function tg() {
  const [e, t] = v.useState(null), [n, r] = v.useState("merge"), [l, o] = v.useState(!1), [s, i] = v.useState(null), [u, c] = v.useState(null), f = async () => {
    if (e) {
      o(!0), c(null), i(null);
      try {
        const p = await Yh(e, n);
        i(p);
      } catch (p) {
        c(p instanceof Error ? p.message : "Falha ao importar o CSV.");
      } finally {
        o(!1);
      }
    }
  };
  return /* @__PURE__ */ a.jsxs("div", { className: "lt-source-card", children: [
    /* @__PURE__ */ a.jsx("div", { className: "lt-source-card__header", children: /* @__PURE__ */ a.jsxs("div", { className: "lt-header-row", children: [
      /* @__PURE__ */ a.jsx("p", { className: "lt-source-card__title", children: "Importar CSV" }),
      /* @__PURE__ */ a.jsx($, { text: "Cadastra empresa + portfólio (o que ela já tem do seu catálogo) em lote, sem precisar de Salesforce ou Google Maps configurados. Fabricante/produto/serviço citados no arquivo precisam já existir em Portfólio — o import nunca inventa item novo no catálogo." })
    ] }) }),
    /* @__PURE__ */ a.jsxs("div", { className: "lt-source-card__form", children: [
      /* @__PURE__ */ a.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ a.jsxs("span", { children: [
          "Arquivo CSV ",
          /* @__PURE__ */ a.jsx($, { text: "Colunas: company_name (obrigatória), is_customer, segment, region, rep_id, vendor, product, service. Uma linha por empresa + item de portfólio — repita a empresa numa linha por produto/serviço." })
        ] }),
        /* @__PURE__ */ a.jsx(
          "input",
          {
            type: "file",
            accept: ".csv,text/csv",
            onChange: (p) => {
              var x;
              return t(((x = p.target.files) == null ? void 0 : x[0]) ?? null);
            }
          }
        )
      ] }),
      /* @__PURE__ */ a.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ a.jsxs("span", { children: [
          "Empresa já cadastrada: o que fazer com o portfólio ",
          /* @__PURE__ */ a.jsx($, { text: "Adicionar preserva o que já foi cadastrado antes; Substituir descarta o portfólio anterior da empresa e usa só o que está neste arquivo." })
        ] }),
        /* @__PURE__ */ a.jsxs("select", { value: n, onChange: (p) => r(p.target.value), children: [
          /* @__PURE__ */ a.jsx("option", { value: "merge", children: "Adicionar aos itens já cadastrados" }),
          /* @__PURE__ */ a.jsx("option", { value: "replace", children: "Substituir pelos itens deste arquivo" })
        ] })
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
        (s.conflicts_opened ?? 0) > 0 && /* @__PURE__ */ a.jsxs("p", { className: "lt-advisory", role: "status", children: [
          s.conflicts_opened,
          ' valor(es) da planilha diferem do que já estava na base e não foram alterados. Escolha qual manter na seção "Conflitos de dados", mais abaixo.'
        ] }),
        s.errors.length > 0 && /* @__PURE__ */ a.jsx("ul", { children: s.errors.map((p, x) => /* @__PURE__ */ a.jsx("li", { className: "lt-alert", children: p }, x)) })
      ] })
    ] })
  ] });
}
const ng = { connected: "🟢", failed: "🔴", unknown: "🔴" }, Hi = {
  connected: "Conectado",
  failed: "Desconectado",
  unknown: "Desconectado"
};
function rg({ source: e, onChange: t }) {
  const [n, r] = v.useState(e.enabled === !0), [l, o] = v.useState({}), [s, i] = v.useState(e.last_check), [u, c] = v.useState(!1), [f, p] = v.useState(null), x = async (j) => {
    c(!0);
    try {
      const w = await Sh(j);
      i(w);
    } catch (w) {
      i({ status: "failed", message: w instanceof Error ? w.message : "Falha ao testar conexão." });
    } finally {
      c(!1);
    }
  }, g = async () => {
    if (!e.implemented) return;
    const j = !n;
    if (r(j), !j) {
      c(!0), p(null);
      try {
        const w = await Ei(e.id, !1, {});
        t(w), i({ status: "unknown", message: "" });
      } catch (w) {
        p(w instanceof Error ? w.message : "Falha ao salvar.");
      } finally {
        c(!1);
      }
    }
  }, _ = async () => {
    c(!0), p(null);
    try {
      const j = await Ei(e.id, !0, l);
      t(j), o({}), await x(e.id);
    } catch (j) {
      p(j instanceof Error ? j.message : "Falha ao salvar.");
    } finally {
      c(!1);
    }
  };
  return /* @__PURE__ */ a.jsxs("div", { className: "lt-source-card", children: [
    /* @__PURE__ */ a.jsxs("div", { className: "lt-source-card__header", children: [
      /* @__PURE__ */ a.jsxs("div", { children: [
        /* @__PURE__ */ a.jsx("p", { className: "lt-source-card__title", children: e.label }),
        !e.implemented && /* @__PURE__ */ a.jsx("p", { className: "lt-hint", children: "Em breve" })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: "lt-source-card__status", children: [
        e.enabled !== null && e.implemented && /* @__PURE__ */ a.jsxs("span", { className: "lt-conn-indicator", "aria-label": Hi[s.status], children: [
          ng[s.status],
          " ",
          Hi[s.status]
        ] }),
        e.enabled === null ? /* @__PURE__ */ a.jsx("span", { className: "lt-hint", children: "Sempre disponível" }) : /* @__PURE__ */ a.jsxs("label", { className: "lt-toggle", children: [
          /* @__PURE__ */ a.jsx(
            "input",
            {
              type: "checkbox",
              className: "lt-toggle__input",
              checked: n,
              disabled: u || !e.implemented,
              onChange: g,
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
      e.fields.map((j) => /* @__PURE__ */ a.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ a.jsxs("span", { children: [
          j.label,
          " ",
          /* @__PURE__ */ a.jsx($, { text: j.help_text })
        ] }),
        /* @__PURE__ */ a.jsx(
          "input",
          {
            type: j.secret ? "password" : "text",
            placeholder: j.has_value ? "••••••••" : "",
            disabled: !n,
            onChange: (w) => o((m) => ({ ...m, [j.key]: w.target.value }))
          }
        )
      ] }, j.key)),
      /* @__PURE__ */ a.jsx("div", { className: "lt-detail-actions", children: /* @__PURE__ */ a.jsx("button", { type: "button", className: "lt-btn", onClick: _, disabled: u || !n, children: "Salvar e conectar" }) })
    ] })
  ] });
}
function ag(e) {
  if (e.length === 0) return "Nenhuma fonte habilitada — ligue uma fonte acima antes de sincronizar.";
  const t = e.reduce((o, s) => o + s.companiesSynced, 0), n = e.reduce((o, s) => o + s.contactsSynced, 0), r = e.flatMap((o) => o.errors), l = `${t} empresa(s) e ${n} contato(s) sincronizados.`;
  return r.length > 0 ? `${l} Alguns erros: ${r.join("; ")}` : l;
}
function lg({ repId: e, onNavigate: t }) {
  const [n, r] = v.useState(null), [l, o] = v.useState(null), [s, i] = v.useState(!1), [u, c] = v.useState(null);
  v.useEffect(() => {
    pd().then(r).catch((p) => o(p instanceof Error ? p.message : "Não consegui carregar as fontes de dados."));
  }, []);
  const f = async () => {
    i(!0), c(null);
    try {
      c(ag(await zh()));
    } catch (p) {
      c(p instanceof Error ? p.message : "Falha ao sincronizar.");
    } finally {
      i(!1);
    }
  };
  return l ? /* @__PURE__ */ a.jsx("p", { className: "lt-alert", role: "alert", children: l }) : n ? /* @__PURE__ */ a.jsxs("div", { children: [
    /* @__PURE__ */ a.jsxs("div", { className: "lt-header lt-header-row", children: [
      /* @__PURE__ */ a.jsx("h2", { children: "Entrada de dados" }),
      /* @__PURE__ */ a.jsx($, { text: "Aqui entra tudo que alimenta o Lead.Tracker: conecte suas fontes (Salesforce, site, Google Maps), importe uma planilha, atualize os dados e faça prospecção geográfica. Depois, trabalhe as oportunidades na aba Oportunidades." })
    ] }),
    /* @__PURE__ */ a.jsxs("section", { className: "lt-panel", "aria-labelledby": "lt-input-sync", children: [
      /* @__PURE__ */ a.jsxs("div", { className: "lt-header lt-header-row", children: [
        /* @__PURE__ */ a.jsx("h3", { id: "lt-input-sync", children: "1. Atualizar dados das fontes" }),
        /* @__PURE__ */ a.jsx($, { text: "Busca de novo as empresas e contatos das fontes ligadas e roda as regras para detectar oportunidades. Valores que mudaram na própria fonte atualizam; valores que outras fontes contestam viram conflitos para você resolver em Oportunidades." })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: "lt-toolbar", children: [
        /* @__PURE__ */ a.jsx("button", { type: "button", className: "lt-btn", onClick: f, disabled: s, "aria-busy": s, children: s ? "Sincronizando…" : "Atualizar dados" }),
        t && /* @__PURE__ */ a.jsx("button", { type: "button", className: "lt-btn", onClick: () => t("oportunidades"), children: "Ver oportunidades" })
      ] }),
      u && /* @__PURE__ */ a.jsx("p", { className: "lt-hint", role: "status", children: u })
    ] }),
    /* @__PURE__ */ a.jsxs("section", { "aria-labelledby": "lt-input-sources", children: [
      /* @__PURE__ */ a.jsxs("div", { className: "lt-header lt-header-row", children: [
        /* @__PURE__ */ a.jsx("h3", { id: "lt-input-sources", children: "2. Fontes de dados" }),
        /* @__PURE__ */ a.jsx($, { text: "Ligue as fontes que o Lead.Tracker deve usar. A planilha CSV importa empresas e portfólio em lote, sem precisar de nenhum CRM." })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: "lt-source-grid", children: [
        /* @__PURE__ */ a.jsx(tg, {}),
        n.map((p) => /* @__PURE__ */ a.jsx(
          rg,
          {
            source: p,
            onChange: (x) => r((g) => g.map((_) => _.id === x.id ? x : _))
          },
          p.id
        ))
      ] })
    ] }),
    /* @__PURE__ */ a.jsxs("section", { "aria-labelledby": "lt-input-geo", children: [
      /* @__PURE__ */ a.jsxs("div", { className: "lt-header lt-header-row", children: [
        /* @__PURE__ */ a.jsx("h3", { id: "lt-input-geo", children: "3. Prospecção geográfica" }),
        /* @__PURE__ */ a.jsx($, { text: "Encontra empresas parecidas com os seus melhores clientes em um raio, pelo Google Maps. Requer a chave do Google Maps ligada acima." })
      ] }),
      /* @__PURE__ */ a.jsx(eg, { repId: e })
    ] })
  ] }) : /* @__PURE__ */ a.jsx("p", { className: "lt-hint", children: "Carregando…" });
}
const Cl = "__custom__", og = {
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
function sg() {
  const [e, t] = v.useState(null), [n, r] = v.useState(""), [l, o] = v.useState(""), [s, i] = v.useState(""), [u, c] = v.useState(null), [f, p] = v.useState(null), [x, g] = v.useState(!1);
  v.useEffect(() => {
    fd().then((d) => {
      t(d), r(d.provider), i(d.model);
    }).catch((d) => c(d instanceof Error ? d.message : "Não consegui carregar a configuração de IA."));
  }, []);
  const _ = async () => {
    g(!0), c(null), p(null);
    try {
      const d = await hh(n, l, s);
      t(d), i(d.model), o(""), p("Configuração de IA salva.");
    } catch (d) {
      c(d instanceof Error ? d.message : "Falha ao salvar a configuração de IA.");
    } finally {
      g(!1);
    }
  };
  if (u && !e) return /* @__PURE__ */ a.jsx("p", { className: "lt-alert", role: "alert", children: u });
  if (!e) return /* @__PURE__ */ a.jsx("p", { className: "lt-hint", children: "Carregando…" });
  const j = n === e.provider ? e.model_options : og[n] ?? [], w = j.length === 0, m = w || s !== "" && !j.some((d) => d.value === s);
  return /* @__PURE__ */ a.jsxs("div", { className: "lt-source-card", children: [
    /* @__PURE__ */ a.jsx("div", { className: "lt-source-card__header", children: /* @__PURE__ */ a.jsxs("div", { className: "lt-header-row", children: [
      /* @__PURE__ */ a.jsx("p", { className: "lt-source-card__title", children: "Inteligência Artificial" }),
      /* @__PURE__ */ a.jsx($, { text: "Opcional — usada só pra gerar rascunho de e-mail. O Lead.Tracker funciona normalmente sem isso." })
    ] }) }),
    /* @__PURE__ */ a.jsxs("div", { className: "lt-source-card__form", children: [
      /* @__PURE__ */ a.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ a.jsxs("span", { children: [
          "Provedor de IA ",
          /* @__PURE__ */ a.jsx($, { text: "Escolha o provedor de IA que vai gerar os rascunhos de e-mail." })
        ] }),
        /* @__PURE__ */ a.jsxs(
          "select",
          {
            value: n,
            onChange: (d) => {
              r(d.target.value), i("");
            },
            children: [
              /* @__PURE__ */ a.jsx("option", { value: "", children: "Não configurado" }),
              e.options.map((d) => /* @__PURE__ */ a.jsx("option", { value: d.value, children: d.label }, d.value))
            ]
          }
        )
      ] }),
      n && (w ? /* @__PURE__ */ a.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ a.jsxs("span", { children: [
          "Modelo ",
          /* @__PURE__ */ a.jsx($, { text: "OpenRouter dá acesso a qualquer modelo pelo nome exato — deixe em branco pra usar o padrão do OpenRouter." })
        ] }),
        /* @__PURE__ */ a.jsx(
          "input",
          {
            value: s,
            onChange: (d) => i(d.target.value),
            placeholder: "ex.: openai/gpt-4o-mini"
          }
        )
      ] }) : /* @__PURE__ */ a.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ a.jsxs("span", { children: [
          "Modelo ",
          /* @__PURE__ */ a.jsx($, { text: "Barato/equilibrado/caro reflete custo e capacidade do modelo — padrão do provedor usa a opção equilibrada." })
        ] }),
        /* @__PURE__ */ a.jsxs(
          "select",
          {
            value: m ? Cl : s,
            onChange: (d) => i(d.target.value === Cl ? "" : d.target.value),
            children: [
              /* @__PURE__ */ a.jsx("option", { value: Cl, children: "Padrão do provedor" }),
              j.map((d) => /* @__PURE__ */ a.jsx("option", { value: d.value, children: d.label }, d.value))
            ]
          }
        )
      ] })),
      /* @__PURE__ */ a.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ a.jsxs("span", { children: [
          "Chave de acesso do provedor ",
          /* @__PURE__ */ a.jsx($, { text: "Cole aqui a chave fornecida pelo provedor escolhido. Deixe em branco pra manter a chave já salva." })
        ] }),
        /* @__PURE__ */ a.jsx(
          "input",
          {
            type: "password",
            value: l,
            onChange: (d) => o(d.target.value),
            placeholder: e.has_key ? "••••••••" : ""
          }
        )
      ] }),
      /* @__PURE__ */ a.jsx("div", { className: "lt-detail-actions", children: /* @__PURE__ */ a.jsx("button", { type: "button", className: "lt-btn", onClick: _, disabled: x, children: x ? "Salvando…" : "Salvar" }) }),
      u && /* @__PURE__ */ a.jsx("p", { className: "lt-alert", role: "alert", children: u }),
      f && /* @__PURE__ */ a.jsx("p", { className: "lt-hint", role: "status", children: f })
    ] })
  ] });
}
const Vr = {
  industry_hint: "Setor / segmento do cliente",
  deal_size_hint: "Porte estimado do negócio",
  renewal_date: "Data de renovação do contrato"
};
function ig() {
  const [e, t] = v.useState(null), [n, r] = v.useState(null), [l, o] = v.useState(null), [s, i] = v.useState(null);
  v.useEffect(() => {
    Zh().then(t).catch((f) => r(f instanceof Error ? f.message : "Não consegui carregar os campos do Salesforce."));
  }, []);
  const u = async (f, p) => {
    i(f.sourceFieldApiName), o(null);
    try {
      if (p === "")
        await tm(f.sourceFieldApiName), t((x) => f.broken ? x.filter((g) => g.sourceFieldApiName !== f.sourceFieldApiName) : x.map((g) => g.sourceFieldApiName === f.sourceFieldApiName ? { ...g, role: null } : g));
      else {
        const { reassignedFromApiName: x, reassignedFromLabel: g } = await em(
          f.sourceFieldApiName,
          f.sourceFieldLabel,
          p
        );
        t((_) => _.map((j) => j.sourceFieldApiName === f.sourceFieldApiName ? { ...j, role: p } : x && j.sourceFieldApiName === x ? { ...j, role: null } : j)), o(
          g ? `${Vr[p]} agora é preenchido por ${f.sourceFieldLabel} em vez de ${g}.` : `A partir de agora, o valor de ${f.sourceFieldLabel} será a fonte de verdade para ${Vr[p]} — ele substitui qualquer valor que o sistema já tenha.`
        );
      }
    } catch (x) {
      o(x instanceof Error ? x.message : "Falha ao atualizar o mapeamento.");
    } finally {
      i(null);
    }
  };
  if (n) return /* @__PURE__ */ a.jsx("p", { className: "lt-alert", role: "alert", children: n });
  if (!e) return /* @__PURE__ */ a.jsx("p", { className: "lt-hint", children: "Carregando campos do Salesforce…" });
  const c = [...e].sort((f, p) => f.role === p.role ? 0 : f.role ? -1 : 1);
  return /* @__PURE__ */ a.jsxs("div", { children: [
    /* @__PURE__ */ a.jsxs("div", { className: "lt-header", children: [
      /* @__PURE__ */ a.jsx("h2", { children: "Mapeamento de campos do Salesforce" }),
      /* @__PURE__ */ a.jsx("p", { children: "Alguns campos personalizados do Salesforce podem preencher automaticamente informações do sistema. Campos que você não mapear continuam sendo considerados pela IA normalmente." })
    ] }),
    l && /* @__PURE__ */ a.jsx("p", { className: "lt-hint", role: "status", children: l }),
    c.length === 0 ? /* @__PURE__ */ a.jsx("p", { className: "lt-empty", role: "status", children: "Nenhum campo personalizado encontrado no Salesforce." }) : /* @__PURE__ */ a.jsxs("table", { className: "lt-table", children: [
      /* @__PURE__ */ a.jsx("thead", { children: /* @__PURE__ */ a.jsxs("tr", { children: [
        /* @__PURE__ */ a.jsx("th", { children: "Campo do Salesforce" }),
        /* @__PURE__ */ a.jsx("th", { children: "Preenche este dado do sistema" })
      ] }) }),
      /* @__PURE__ */ a.jsx("tbody", { children: c.map((f) => /* @__PURE__ */ a.jsxs(v.Fragment, { children: [
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
              onChange: (p) => u(f, p.target.value),
              children: [
                /* @__PURE__ */ a.jsx("option", { value: "", children: "—" }),
                !f.broken && Object.keys(Vr).map((p) => /* @__PURE__ */ a.jsx("option", { value: p, children: Vr[p] }, p))
              ]
            }
          ) })
        ] }),
        f.broken && /* @__PURE__ */ a.jsx("tr", { children: /* @__PURE__ */ a.jsx("td", { colSpan: 2, children: /* @__PURE__ */ a.jsx("p", { className: "lt-alert", role: "alert", children: f.brokenMessage }) }) })
      ] }, f.sourceFieldApiName)) })
    ] })
  ] });
}
const Qi = { vendor: "Fabricante", product: "Produto", service: "Serviço" };
function ug({ onApplied: e }) {
  const [t, n] = v.useState(null), [r, l] = v.useState(0), [o, s] = v.useState(0), [i, u] = v.useState(!1), [c, f] = v.useState(!1), [p, x] = v.useState(null), [g, _] = v.useState(null), j = async () => {
    u(!0), x(null), _(null);
    try {
      const y = await Ch();
      n(y.suggestions.map((S) => ({ ...S, selected: !S.already_in_catalog }))), l(y.discarded), s(y.pages_read);
    } catch (y) {
      n(null), x(y instanceof Error ? y.message : "Não foi possível ler o site informado.");
    } finally {
      u(!1);
    }
  }, w = (y, S) => n((N) => (N ?? []).map((b, P) => P === y ? { ...b, ...S } : b)), m = (t ?? []).filter((y) => y.selected && !y.already_in_catalog), d = m.some((y) => y.kind === "product" && !(y.vendor_name ?? "").trim()), h = async () => {
    f(!0), x(null);
    try {
      const y = await Eh(m.map((N) => ({ kind: N.kind, name: N.name, vendor_name: N.vendor_name }))), S = y.created.vendor + y.created.product + y.created.service;
      _(`${S} item(ns) adicionado(s) ao portfólio.`), n(null), e();
    } catch (y) {
      x(y instanceof Error ? y.message : "Falha ao adicionar os itens.");
    } finally {
      f(!1);
    }
  };
  return /* @__PURE__ */ a.jsxs("div", { className: "lt-panel", children: [
    /* @__PURE__ */ a.jsxs("div", { className: "lt-header lt-header-row", children: [
      /* @__PURE__ */ a.jsx("h3", { children: "Sugerir pelo meu site" }),
      /* @__PURE__ */ a.jsx($, { text: "Lê o site da sua empresa (endereço em Entrada de dados > Website da empresa) e a IA sugere fabricantes, produtos e serviços. Só entram sugestões cujo nome aparece no texto do site, e nada vai para o portfólio sem você marcar e adicionar. Requer IA configurada." })
    ] }),
    /* @__PURE__ */ a.jsx("div", { className: "lt-toolbar", children: /* @__PURE__ */ a.jsx("button", { type: "button", className: "lt-btn", onClick: j, disabled: i, "aria-busy": i, children: i ? "Lendo o site…" : "Ler meu site" }) }),
    p && /* @__PURE__ */ a.jsx("p", { className: "lt-alert", role: "alert", children: p }),
    g && /* @__PURE__ */ a.jsx("p", { className: "lt-hint", role: "status", children: g }),
    t !== null && t.length === 0 && /* @__PURE__ */ a.jsxs("p", { className: "lt-hint", children: [
      "Não encontrei itens com evidência no texto do site (",
      o,
      " página(s) lida(s)). Cadastre manualmente."
    ] }),
    t !== null && t.length > 0 && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsxs("p", { className: "lt-hint", children: [
        t.length,
        " sugestão(ões) a partir de ",
        o,
        " página(s). Revise: nada é adicionado sem você marcar.",
        r > 0 ? ` ${r} sugestão(ões) da IA foram descartadas por não terem evidência no texto.` : ""
      ] }),
      /* @__PURE__ */ a.jsx("ul", { children: t.map((y, S) => /* @__PURE__ */ a.jsxs("li", { className: "lt-panel-row", children: [
        /* @__PURE__ */ a.jsxs("label", { className: "lt-toggle", children: [
          /* @__PURE__ */ a.jsx(
            "input",
            {
              type: "checkbox",
              checked: y.selected,
              disabled: y.already_in_catalog,
              onChange: (N) => w(S, { selected: N.target.checked }),
              "aria-label": `Adicionar ${y.name}`
            }
          ),
          /* @__PURE__ */ a.jsx("span", { children: y.name })
        ] }),
        /* @__PURE__ */ a.jsxs("label", { className: "lt-field", children: [
          /* @__PURE__ */ a.jsx("span", { children: "Tipo" }),
          /* @__PURE__ */ a.jsx("select", { value: y.kind, disabled: y.already_in_catalog, onChange: (N) => w(S, { kind: N.target.value }), children: Object.keys(Qi).map((N) => /* @__PURE__ */ a.jsx("option", { value: N, children: Qi[N] }, N)) })
        ] }),
        y.kind === "product" && /* @__PURE__ */ a.jsxs("label", { className: "lt-field", children: [
          /* @__PURE__ */ a.jsx("span", { children: "Fabricante" }),
          /* @__PURE__ */ a.jsx(
            "input",
            {
              value: y.vendor_name ?? "",
              maxLength: 100,
              disabled: y.already_in_catalog,
              onChange: (N) => w(S, { vendor_name: N.target.value })
            }
          )
        ] }),
        y.already_in_catalog ? /* @__PURE__ */ a.jsx("span", { className: "lt-badge", children: "já no portfólio" }) : /* @__PURE__ */ a.jsxs("span", { className: "lt-hint", children: [
          "“",
          y.evidence,
          "” — ",
          y.page_url
        ] })
      ] }, `${S}:${y.name}`)) }),
      d && /* @__PURE__ */ a.jsx("p", { className: "lt-advisory", role: "alert", children: "Todo produto precisa de um fabricante: preencha ou troque o tipo para Serviço." }),
      /* @__PURE__ */ a.jsxs("div", { className: "lt-toolbar", children: [
        /* @__PURE__ */ a.jsx("button", { type: "button", className: "lt-btn", onClick: h, disabled: c || m.length === 0 || d, children: c ? "Adicionando…" : `Adicionar ${m.length} selecionado(s)` }),
        /* @__PURE__ */ a.jsx("button", { type: "button", className: "lt-btn", onClick: () => n(null), disabled: c, children: "Descartar" })
      ] })
    ] })
  ] });
}
const Br = "__new__";
function cg({
  products: e,
  services: t,
  loadError: n,
  onProductCreated: r,
  onServiceCreated: l,
  onProductDeleted: o,
  onServiceDeleted: s,
  onCatalogChanged: i
}) {
  const [u, c] = v.useState([]), [f, p] = v.useState(!1), [x, g] = v.useState(""), [_, j] = v.useState(""), [w, m] = v.useState(""), [d, h] = v.useState(""), [y, S] = v.useState(!1), [N, b] = v.useState(null), [P, R] = v.useState(!1), [C, M] = v.useState(""), [oe, L] = v.useState(""), [te, H] = v.useState(!1), [B, K] = v.useState(null), [E, A] = v.useState(null), [V, Q] = v.useState(null), [G, I] = v.useState(null);
  v.useEffect(() => {
    bi().then(c).catch((O) => A(O instanceof Error ? O.message : "Não consegui carregar os fabricantes."));
  }, []);
  const Z = (O) => {
    var Ye;
    return ((Ye = u.find((_r) => _r.id === O)) == null ? void 0 : Ye.name) ?? O;
  }, T = () => {
    g(""), j(""), m(""), h("");
  }, fe = async () => {
    S(!0), b(null);
    try {
      let O = x;
      if (x === Br) {
        const _r = await Vh(_);
        c((bd) => [...bd, _r]), O = _r.id;
      }
      const Ye = await Bh(O, w, d);
      r(Ye), p(!1), T();
    } catch (O) {
      b(O instanceof Error ? O.message : "Falha ao salvar produto.");
    } finally {
      S(!1);
    }
  }, Te = async () => {
    H(!0), K(null);
    try {
      const O = await Hh(C, oe);
      l(O), R(!1), M(""), L("");
    } catch (O) {
      K(O instanceof Error ? O.message : "Falha ao salvar serviço.");
    } finally {
      H(!1);
    }
  }, Qa = async (O) => {
    if (window.confirm(`Remover o produto "${O.name}"? Essa ação não pode ser desfeita.`)) {
      Q(O.id), I(null);
      try {
        await Uh(O.id), o(O.id);
      } catch (Ye) {
        I(Ye instanceof Error ? Ye.message : "Falha ao remover produto.");
      } finally {
        Q(null);
      }
    }
  }, kd = async (O) => {
    if (window.confirm(`Remover o serviço "${O.name}"? Essa ação não pode ser desfeita.`)) {
      Q(O.id), I(null);
      try {
        await Qh(O.id), s(O.id);
      } catch (Ye) {
        I(Ye instanceof Error ? Ye.message : "Falha ao remover serviço.");
      } finally {
        Q(null);
      }
    }
  };
  if (n || E) return /* @__PURE__ */ a.jsx("p", { className: "lt-alert", role: "alert", children: n ?? E });
  if (!e || !t) return /* @__PURE__ */ a.jsx("p", { className: "lt-hint", children: "Carregando portfólio…" });
  const Cd = w.trim() !== "" && (x === Br ? _.trim() !== "" : x !== ""), Ed = C.trim() !== "";
  return /* @__PURE__ */ a.jsxs("div", { children: [
    /* @__PURE__ */ a.jsxs("div", { className: "lt-header lt-header-row", children: [
      /* @__PURE__ */ a.jsx("h2", { children: "Portfólio" }),
      /* @__PURE__ */ a.jsx($, { text: "Produtos e serviços que sua empresa vende — é o catálogo que as Regras usam pra detectar oportunidade." })
    ] }),
    /* @__PURE__ */ a.jsx(ug, { onApplied: () => {
      bi().then(c).catch(() => {
      }), i();
    } }),
    /* @__PURE__ */ a.jsxs("div", { className: "lt-toolbar", children: [
      /* @__PURE__ */ a.jsx("button", { type: "button", className: "lt-btn", onClick: () => p((O) => !O), children: f ? "Cancelar" : "Novo produto" }),
      /* @__PURE__ */ a.jsx("button", { type: "button", className: "lt-btn", onClick: () => R((O) => !O), children: P ? "Cancelar" : "Novo serviço" })
    ] }),
    f && /* @__PURE__ */ a.jsxs("div", { className: "lt-source-card__form", children: [
      /* @__PURE__ */ a.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ a.jsxs("span", { children: [
          "Fabricante ",
          /* @__PURE__ */ a.jsx($, { text: "Quem fabrica esse produto — escolha um já cadastrado ou crie um novo." })
        ] }),
        /* @__PURE__ */ a.jsxs("select", { value: x, onChange: (O) => g(O.target.value), children: [
          /* @__PURE__ */ a.jsx("option", { value: "", children: "Selecione…" }),
          u.map((O) => /* @__PURE__ */ a.jsx("option", { value: O.id, children: O.name }, O.id)),
          /* @__PURE__ */ a.jsx("option", { value: Br, children: "+ Cadastrar novo fabricante" })
        ] })
      ] }),
      x === Br && /* @__PURE__ */ a.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ a.jsxs("span", { children: [
          "Nome do novo fabricante ",
          /* @__PURE__ */ a.jsx($, { text: "Nome do fabricante como deve aparecer nas telas do sistema." })
        ] }),
        /* @__PURE__ */ a.jsx("input", { value: _, onChange: (O) => j(O.target.value) })
      ] }),
      /* @__PURE__ */ a.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ a.jsxs("span", { children: [
          "Nome do produto ",
          /* @__PURE__ */ a.jsx($, { text: "Nome comercial do produto, como aparece pro cliente." })
        ] }),
        /* @__PURE__ */ a.jsx("input", { value: w, onChange: (O) => m(O.target.value) })
      ] }),
      /* @__PURE__ */ a.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ a.jsx("span", { children: "Categoria (ex.: backup, monitoramento — usada pelas Regras)" }),
        /* @__PURE__ */ a.jsx("input", { value: d, onChange: (O) => h(O.target.value) })
      ] }),
      N && /* @__PURE__ */ a.jsx("p", { className: "lt-alert", role: "alert", children: N }),
      /* @__PURE__ */ a.jsx("div", { className: "lt-detail-actions", children: /* @__PURE__ */ a.jsx("button", { type: "button", className: "lt-btn", onClick: fe, disabled: y || !Cd, children: y ? "Salvando…" : "Criar produto" }) })
    ] }),
    P && /* @__PURE__ */ a.jsxs("div", { className: "lt-source-card__form", children: [
      /* @__PURE__ */ a.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ a.jsxs("span", { children: [
          "Nome do serviço ",
          /* @__PURE__ */ a.jsx($, { text: "Nome comercial do serviço, como aparece pro cliente." })
        ] }),
        /* @__PURE__ */ a.jsx("input", { value: C, onChange: (O) => M(O.target.value) })
      ] }),
      /* @__PURE__ */ a.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ a.jsx("span", { children: "Categoria (ex.: backup, monitoramento — usada pelas Regras)" }),
        /* @__PURE__ */ a.jsx("input", { value: oe, onChange: (O) => L(O.target.value) })
      ] }),
      B && /* @__PURE__ */ a.jsx("p", { className: "lt-alert", role: "alert", children: B }),
      /* @__PURE__ */ a.jsx("div", { className: "lt-detail-actions", children: /* @__PURE__ */ a.jsx("button", { type: "button", className: "lt-btn", onClick: Te, disabled: te || !Ed, children: te ? "Salvando…" : "Criar serviço" }) })
    ] }),
    G && /* @__PURE__ */ a.jsx("p", { className: "lt-alert", role: "alert", children: G }),
    e.length === 0 ? /* @__PURE__ */ a.jsx("p", { className: "lt-empty", role: "status", children: "Nenhum produto cadastrado ainda." }) : /* @__PURE__ */ a.jsxs("table", { className: "lt-table", children: [
      /* @__PURE__ */ a.jsx("thead", { children: /* @__PURE__ */ a.jsxs("tr", { children: [
        /* @__PURE__ */ a.jsx("th", { children: "Fabricante" }),
        /* @__PURE__ */ a.jsx("th", { children: "Produto" }),
        /* @__PURE__ */ a.jsx("th", { children: "Categoria" }),
        /* @__PURE__ */ a.jsx("th", {})
      ] }) }),
      /* @__PURE__ */ a.jsx("tbody", { children: e.map((O) => /* @__PURE__ */ a.jsxs("tr", { children: [
        /* @__PURE__ */ a.jsx("td", { children: Z(O.vendor_id) }),
        /* @__PURE__ */ a.jsx("td", { children: O.name }),
        /* @__PURE__ */ a.jsx("td", { children: O.category ?? "—" }),
        /* @__PURE__ */ a.jsx("td", { children: /* @__PURE__ */ a.jsx("button", { type: "button", className: "lt-btn", onClick: () => Qa(O), disabled: V === O.id, children: V === O.id ? "Removendo…" : "Remover" }) })
      ] }, O.id)) })
    ] }),
    t.length === 0 ? /* @__PURE__ */ a.jsx("p", { className: "lt-empty", role: "status", children: "Nenhum serviço cadastrado ainda." }) : /* @__PURE__ */ a.jsxs("table", { className: "lt-table", children: [
      /* @__PURE__ */ a.jsx("thead", { children: /* @__PURE__ */ a.jsxs("tr", { children: [
        /* @__PURE__ */ a.jsx("th", { children: "Serviço" }),
        /* @__PURE__ */ a.jsx("th", { children: "Categoria" }),
        /* @__PURE__ */ a.jsx("th", {})
      ] }) }),
      /* @__PURE__ */ a.jsx("tbody", { children: t.map((O) => /* @__PURE__ */ a.jsxs("tr", { children: [
        /* @__PURE__ */ a.jsx("td", { children: O.name }),
        /* @__PURE__ */ a.jsx("td", { children: O.category ?? "—" }),
        /* @__PURE__ */ a.jsx("td", { children: /* @__PURE__ */ a.jsx("button", { type: "button", className: "lt-btn", onClick: () => kd(O), disabled: V === O.id, children: V === O.id ? "Removendo…" : "Remover" }) })
      ] }, O.id)) })
    ] })
  ] });
}
function Wi(e, t) {
  const n = t.getFullYear();
  if (e === "quarterly") {
    const l = Math.floor(t.getMonth() / 3) + 1;
    return `${n}-Q${l}`;
  }
  const r = String(t.getMonth() + 1).padStart(2, "0");
  return `${n}-${r}`;
}
function dg(e) {
  const t = e.getFullYear();
  return [t, t + 1].flatMap((n) => [1, 2, 3, 4].map((r) => `${n}-Q${r}`));
}
function pg() {
  const [e, t] = v.useState("monthly"), [n, r] = v.useState(Wi("monthly", /* @__PURE__ */ new Date())), [l, o] = v.useState(null), [s, i] = v.useState(null), [u, c] = v.useState(!1), [f, p] = v.useState(""), [x, g] = v.useState(""), [_, j] = v.useState(!1), [w, m] = v.useState(null);
  v.useEffect(() => {
    o(null), Jh(e, n).then(o).catch((S) => i(S instanceof Error ? S.message : "Não consegui carregar as metas."));
  }, [e, n]);
  const d = (S) => {
    t(S), r(Wi(S, /* @__PURE__ */ new Date()));
  }, h = async () => {
    j(!0), m(null);
    try {
      const S = await Xh({ rep_id: f, period_type: e, period_key: n, target_amount: Number(x) });
      o((N) => [...(N ?? []).filter((b) => b.rep_id !== S.rep_id), S]), c(!1), p(""), g("");
    } catch (S) {
      m(S instanceof Error ? S.message : "Falha ao salvar meta.");
    } finally {
      j(!1);
    }
  }, y = f.trim() !== "" && Number(x) > 0;
  return /* @__PURE__ */ a.jsxs("div", { children: [
    /* @__PURE__ */ a.jsxs("div", { className: "lt-header lt-header-row", children: [
      /* @__PURE__ */ a.jsx("h2", { children: "Metas por representante" }),
      /* @__PURE__ */ a.jsx($, { text: "Cadastro manual — sem meta definida, potencial financeiro é um número sem contexto pro dashboard." })
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "lt-toolbar", children: [
      /* @__PURE__ */ a.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ a.jsx("span", { children: "Período" }),
        /* @__PURE__ */ a.jsxs("select", { value: e, onChange: (S) => d(S.target.value), children: [
          /* @__PURE__ */ a.jsx("option", { value: "monthly", children: "Mensal" }),
          /* @__PURE__ */ a.jsx("option", { value: "quarterly", children: "Trimestral" })
        ] })
      ] }),
      e === "monthly" ? /* @__PURE__ */ a.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ a.jsx("span", { children: "Mês" }),
        /* @__PURE__ */ a.jsx("input", { type: "month", value: n, onChange: (S) => r(S.target.value) })
      ] }) : /* @__PURE__ */ a.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ a.jsx("span", { children: "Trimestre" }),
        /* @__PURE__ */ a.jsx("select", { value: n, onChange: (S) => r(S.target.value), children: dg(/* @__PURE__ */ new Date()).map((S) => /* @__PURE__ */ a.jsx("option", { value: S, children: S }, S)) })
      ] }),
      /* @__PURE__ */ a.jsx("button", { type: "button", className: "lt-btn", onClick: () => c((S) => !S), children: u ? "Cancelar" : "Nova meta" })
    ] }),
    u && /* @__PURE__ */ a.jsxs("div", { className: "lt-source-card__form", children: [
      /* @__PURE__ */ a.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ a.jsxs("span", { children: [
          "Id do representante ",
          /* @__PURE__ */ a.jsx($, { text: "Identificador usado nas oportunidades pra atribuir o pipeline a esse representante." })
        ] }),
        /* @__PURE__ */ a.jsx("input", { value: f, onChange: (S) => p(S.target.value) })
      ] }),
      /* @__PURE__ */ a.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ a.jsx("span", { children: "Meta financeira (R$) pro período selecionado acima" }),
        /* @__PURE__ */ a.jsx("input", { type: "number", min: "0", value: x, onChange: (S) => g(S.target.value) })
      ] }),
      w && /* @__PURE__ */ a.jsx("p", { className: "lt-alert", role: "alert", children: w }),
      /* @__PURE__ */ a.jsx("div", { className: "lt-detail-actions", children: /* @__PURE__ */ a.jsx("button", { type: "button", className: "lt-btn", onClick: h, disabled: _ || !y, children: _ ? "Salvando…" : "Salvar meta" }) })
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
      /* @__PURE__ */ a.jsx("tbody", { children: l.map((S) => /* @__PURE__ */ a.jsxs("tr", { children: [
        /* @__PURE__ */ a.jsx("td", { children: S.rep_id }),
        /* @__PURE__ */ a.jsx("td", { children: S.target_amount.toLocaleString("pt-BR") })
      ] }, S.rep_id)) })
    ] })
  ] });
}
const Ki = (e) => {
  const t = e.trim(), n = Number(/^\d{1,3}(\.\d{3})+(,\d+)?$/.test(t) ? t.replace(/\./g, "").replace(",", ".") : t.replace(",", "."));
  return Number.isFinite(n) ? n : NaN;
};
function fg(e) {
  if (e.relation_type) return `Relação: ${e.relation_type}`;
  if (e.requires_category.length) {
    const n = e.absent_category.length ? ` sem categoria ${e.absent_category.join(", ")}` : "";
    return `Categoria ${e.requires_category.join(", ")}${n}`;
  }
  const t = e.absent.length ? ` sem ${e.absent.join(", ")}` : "";
  return `Item ${e.requires.join(", ")}${t}`;
}
function hg({ products: e, services: t }) {
  const [n, r] = v.useState(null), [l, o] = v.useState(null), [s, i] = v.useState(!1), [u, c] = v.useState("category"), [f, p] = v.useState("cross-sell"), [x, g] = v.useState(""), [_, j] = v.useState(""), [w, m] = v.useState(""), [d, h] = v.useState(""), [y, S] = v.useState(""), [N, b] = v.useState("prerequisite"), [P, R] = v.useState(""), [C, M] = v.useState(!1), [oe, L] = v.useState(null), [te, H] = v.useState(null), [B, K] = v.useState(null);
  v.useEffect(() => {
    Wh().then(r).catch((T) => o(T instanceof Error ? T.message : "Não consegui carregar as regras."));
  }, []);
  const E = Array.from(new Set([...e, ...t].map((T) => T.category).filter((T) => !!T))), A = [...e.map((T) => ({ id: T.id, label: T.name })), ...t.map((T) => ({ id: T.id, label: T.name }))], V = () => {
    g(""), R(""), j(""), m(""), h(""), S("");
  }, Q = async () => {
    M(!0), L(null);
    const T = { opportunity_type: f, justification: x }, fe = Ki(P);
    P.trim() !== "" && fe > 0 && (T.estimated_deal_value = fe), u === "presence" ? (T.requires = _ ? [_] : [], T.absent = w ? [w] : []) : u === "category" ? (T.requires_category = d ? [d] : [], T.absent_category = y ? [y] : []) : T.relation_type = N;
    try {
      const Te = await Kh(T);
      r((Qa) => [...Qa ?? [], Te]), i(!1), V();
    } catch (Te) {
      L(Te instanceof Error ? Te.message : "Falha ao salvar regra.");
    } finally {
      M(!1);
    }
  }, G = async (T) => {
    if (window.confirm(`Remover a regra "${T.opportunity_type}"? Essa ação não pode ser desfeita.`)) {
      H(T.id), K(null);
      try {
        await Gh(T.id), r((fe) => (fe ?? []).filter((Te) => Te.id !== T.id));
      } catch (fe) {
        K(fe instanceof Error ? fe.message : "Falha ao remover regra.");
      } finally {
        H(null);
      }
    }
  };
  if (l) return /* @__PURE__ */ a.jsx("p", { className: "lt-alert", role: "alert", children: l });
  if (!n) return /* @__PURE__ */ a.jsx("p", { className: "lt-hint", children: "Carregando regras…" });
  const Z = (P.trim() === "" || Ki(P) > 0) && x.trim() !== "" && (u === "relation" || (u === "presence" ? _ !== "" : d !== ""));
  return /* @__PURE__ */ a.jsxs("div", { children: [
    /* @__PURE__ */ a.jsxs("div", { className: "lt-header lt-header-row", children: [
      /* @__PURE__ */ a.jsx("h2", { children: "Regras" }),
      /* @__PURE__ */ a.jsx($, { text: "Regras determinísticas que detectam oportunidade — sempre por categoria/item real do catálogo, nunca texto livre." })
    ] }),
    /* @__PURE__ */ a.jsx("div", { className: "lt-toolbar", children: /* @__PURE__ */ a.jsx("button", { type: "button", className: "lt-btn", onClick: () => i((T) => !T), children: s ? "Cancelar" : "Nova regra" }) }),
    s && /* @__PURE__ */ a.jsxs("div", { className: "lt-source-card__form", children: [
      /* @__PURE__ */ a.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ a.jsxs("span", { children: [
          "Tipo de regra ",
          /* @__PURE__ */ a.jsx($, { text: "Categoria compara grupos de itens; item específico compara um produto/serviço só; relação reaproveita um vínculo já existente no catálogo." })
        ] }),
        /* @__PURE__ */ a.jsxs("select", { value: u, onChange: (T) => c(T.target.value), children: [
          /* @__PURE__ */ a.jsx("option", { value: "category", children: "Categoria (tenho X, não tenho Y)" }),
          /* @__PURE__ */ a.jsx("option", { value: "presence", children: "Item específico" }),
          /* @__PURE__ */ a.jsx("option", { value: "relation", children: "Relação já cadastrada no catálogo" })
        ] })
      ] }),
      u === "category" && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        /* @__PURE__ */ a.jsxs("label", { className: "lt-field", children: [
          /* @__PURE__ */ a.jsx("span", { children: "Categoria que a empresa precisa ter" }),
          /* @__PURE__ */ a.jsxs("select", { value: d, onChange: (T) => h(T.target.value), children: [
            /* @__PURE__ */ a.jsx("option", { value: "", children: "Selecione…" }),
            E.map((T) => /* @__PURE__ */ a.jsx("option", { value: T, children: T }, T))
          ] })
        ] }),
        /* @__PURE__ */ a.jsxs("label", { className: "lt-field", children: [
          /* @__PURE__ */ a.jsx("span", { children: "Categoria que NÃO deve ter (opcional)" }),
          /* @__PURE__ */ a.jsxs("select", { value: y, onChange: (T) => S(T.target.value), children: [
            /* @__PURE__ */ a.jsx("option", { value: "", children: "Nenhuma" }),
            E.map((T) => /* @__PURE__ */ a.jsx("option", { value: T, children: T }, T))
          ] })
        ] })
      ] }),
      u === "presence" && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        /* @__PURE__ */ a.jsxs("label", { className: "lt-field", children: [
          /* @__PURE__ */ a.jsx("span", { children: "Item que a empresa precisa ter" }),
          /* @__PURE__ */ a.jsxs("select", { value: _, onChange: (T) => j(T.target.value), children: [
            /* @__PURE__ */ a.jsx("option", { value: "", children: "Selecione…" }),
            A.map((T) => /* @__PURE__ */ a.jsx("option", { value: T.id, children: T.label }, T.id))
          ] })
        ] }),
        /* @__PURE__ */ a.jsxs("label", { className: "lt-field", children: [
          /* @__PURE__ */ a.jsx("span", { children: "Item que NÃO deve ter (opcional)" }),
          /* @__PURE__ */ a.jsxs("select", { value: w, onChange: (T) => m(T.target.value), children: [
            /* @__PURE__ */ a.jsx("option", { value: "", children: "Nenhum" }),
            A.map((T) => /* @__PURE__ */ a.jsx("option", { value: T.id, children: T.label }, T.id))
          ] })
        ] })
      ] }),
      u === "relation" && /* @__PURE__ */ a.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ a.jsxs("span", { children: [
          "Tipo de relação ",
          /* @__PURE__ */ a.jsx($, { text: "Reaproveita a relação entre itens já definida no catálogo de portfólio." })
        ] }),
        /* @__PURE__ */ a.jsxs("select", { value: N, onChange: (T) => b(T.target.value), children: [
          /* @__PURE__ */ a.jsx("option", { value: "prerequisite", children: "Pré-requisito — gera alerta de risco técnico" }),
          /* @__PURE__ */ a.jsx("option", { value: "substitute", children: "Substituto — gera oportunidade de consolidação" })
        ] })
      ] }),
      /* @__PURE__ */ a.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ a.jsx("span", { children: "Rótulo da oportunidade (ex.: cross-sell, consolidation, risk)" }),
        /* @__PURE__ */ a.jsx("input", { value: f, onChange: (T) => p(T.target.value) })
      ] }),
      /* @__PURE__ */ a.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ a.jsx("span", { children: "Justificativa (aparece na oportunidade gerada)" }),
        /* @__PURE__ */ a.jsx("input", { value: x, onChange: (T) => g(T.target.value) })
      ] }),
      /* @__PURE__ */ a.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ a.jsxs("span", { children: [
          "Valor típico da oportunidade, em R$ (opcional) ",
          /* @__PURE__ */ a.jsx($, { text: "Quanto costuma valer um negócio deste tipo, segundo você. O sistema só copia este número para cada oportunidade da regra: não calcula nem prevê nada. Em branco, a oportunidade fica sem valor (aparece como “—”)." })
        ] }),
        /* @__PURE__ */ a.jsx("input", { inputMode: "decimal", value: P, onChange: (T) => R(T.target.value), placeholder: "ex.: 40000" })
      ] }),
      oe && /* @__PURE__ */ a.jsx("p", { className: "lt-alert", role: "alert", children: oe }),
      /* @__PURE__ */ a.jsx("div", { className: "lt-detail-actions", children: /* @__PURE__ */ a.jsx("button", { type: "button", className: "lt-btn", onClick: Q, disabled: C || !Z, children: C ? "Salvando…" : "Criar regra" }) })
    ] }),
    B && /* @__PURE__ */ a.jsx("p", { className: "lt-alert", role: "alert", children: B }),
    n.length === 0 ? /* @__PURE__ */ a.jsx("p", { className: "lt-empty", role: "status", children: "Nenhuma regra cadastrada ainda." }) : /* @__PURE__ */ a.jsxs("table", { className: "lt-table", children: [
      /* @__PURE__ */ a.jsx("thead", { children: /* @__PURE__ */ a.jsxs("tr", { children: [
        /* @__PURE__ */ a.jsx("th", { children: "Rótulo" }),
        /* @__PURE__ */ a.jsx("th", { children: "Condição" }),
        /* @__PURE__ */ a.jsx("th", { children: "Justificativa" }),
        /* @__PURE__ */ a.jsx("th", { children: "Valor típico" }),
        /* @__PURE__ */ a.jsx("th", { children: "Ativa" }),
        /* @__PURE__ */ a.jsx("th", {})
      ] }) }),
      /* @__PURE__ */ a.jsx("tbody", { children: n.map((T) => /* @__PURE__ */ a.jsxs("tr", { children: [
        /* @__PURE__ */ a.jsx("td", { children: T.opportunity_type }),
        /* @__PURE__ */ a.jsx("td", { children: fg(T) }),
        /* @__PURE__ */ a.jsx("td", { children: T.justification }),
        /* @__PURE__ */ a.jsx("td", { children: T.estimated_deal_value ? T.estimated_deal_value.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 }) : "—" }),
        /* @__PURE__ */ a.jsx("td", { children: T.active ? "Sim" : "Não" }),
        /* @__PURE__ */ a.jsx("td", { children: /* @__PURE__ */ a.jsx("button", { type: "button", className: "lt-btn", onClick: () => G(T), disabled: te === T.id, children: te === T.id ? "Removendo…" : "Remover" }) })
      ] }, T.id)) })
    ] })
  ] });
}
function mg() {
  const [e, t] = v.useState(""), [n, r] = v.useState(""), [l, o] = v.useState(""), [s, i] = v.useState(""), [u, c] = v.useState(!1), [f, p] = v.useState(null), [x, g] = v.useState(null), [_, j] = v.useState(null);
  v.useEffect(() => {
    Promise.all([mh(), vh(), yh()]).then(([h, y, S]) => {
      t(String(h.days)), r(String(y.min_sample)), o(String(S.min_score)), i(String(S.daily_cap)), c(!0);
    }).catch((h) => p(h instanceof Error ? h.message : "Não consegui carregar os limites configurados."));
  }, []);
  const w = async () => {
    j("sla"), p(null), g(null);
    try {
      const h = await gh(Number(e));
      t(String(h.days)), g("Prazo de triagem salvo.");
    } catch (h) {
      p(h instanceof Error ? h.message : "Falha ao salvar o prazo de triagem.");
    } finally {
      j(null);
    }
  }, m = async () => {
    j("sample"), p(null), g(null);
    try {
      const h = await xh(Number(n));
      r(String(h.min_sample)), g("Mínimo de oportunidades por par salvo.");
    } catch (h) {
      p(h instanceof Error ? h.message : "Falha ao salvar o mínimo de oportunidades por par.");
    } finally {
      j(null);
    }
  }, d = async () => {
    j("geo"), p(null), g(null);
    try {
      const h = await jh(Number(l), Number(s));
      o(String(h.min_score)), i(String(h.daily_cap)), g("Limites de promoção geográfica salvos.");
    } catch (h) {
      p(h instanceof Error ? h.message : "Falha ao salvar os limites de promoção geográfica.");
    } finally {
      j(null);
    }
  };
  return f && !u ? /* @__PURE__ */ a.jsx("p", { className: "lt-alert", role: "alert", children: f }) : u ? /* @__PURE__ */ a.jsxs("div", { className: "lt-source-card", children: [
    /* @__PURE__ */ a.jsx("div", { className: "lt-source-card__header", children: /* @__PURE__ */ a.jsxs("div", { className: "lt-header-row", children: [
      /* @__PURE__ */ a.jsx("p", { className: "lt-source-card__title", children: "Limites e prazos" }),
      /* @__PURE__ */ a.jsx($, { text: "Controla quando uma oportunidade conta como atrasada na triagem e quantas descobertas de geolocalização entram automaticamente por dia." })
    ] }) }),
    /* @__PURE__ */ a.jsxs("div", { className: "lt-source-card__form", children: [
      /* @__PURE__ */ a.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ a.jsxs("span", { children: [
          "Prazo de triagem (dias) ",
          /* @__PURE__ */ a.jsx($, { text: 'Detectada sem virar qualificada nem descartada depois desse prazo conta como "triagem atrasada" no dashboard.' })
        ] }),
        /* @__PURE__ */ a.jsx(
          "input",
          {
            type: "number",
            min: 1,
            value: e,
            onChange: (h) => t(h.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ a.jsx("div", { className: "lt-detail-actions", children: /* @__PURE__ */ a.jsx("button", { type: "button", className: "lt-btn", onClick: w, disabled: _ === "sla", children: _ === "sla" ? "Salvando…" : "Salvar prazo de triagem" }) }),
      /* @__PURE__ */ a.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ a.jsxs("span", { children: [
          "Mínimo de oportunidades por representante e categoria ",
          /* @__PURE__ */ a.jsx($, { text: 'Abaixo disso, o par aparece como "dado insuficiente" no dashboard — nunca como 0%.' })
        ] }),
        /* @__PURE__ */ a.jsx(
          "input",
          {
            type: "number",
            min: 1,
            value: n,
            onChange: (h) => r(h.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ a.jsx("div", { className: "lt-detail-actions", children: /* @__PURE__ */ a.jsx("button", { type: "button", className: "lt-btn", onClick: m, disabled: _ === "sample", children: _ === "sample" ? "Salvando…" : "Salvar mínimo por par" }) }),
      /* @__PURE__ */ a.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ a.jsxs("span", { children: [
          "Score mínimo pra promoção automática ",
          /* @__PURE__ */ a.jsx($, { text: "De 0.0 a 1.0 — quanto maior, mais seletiva a promoção automática." })
        ] }),
        /* @__PURE__ */ a.jsx(
          "input",
          {
            type: "number",
            min: 0,
            max: 1,
            step: 0.01,
            value: l,
            onChange: (h) => o(h.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ a.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ a.jsxs("span", { children: [
          "Limite diário de promoções automáticas ",
          /* @__PURE__ */ a.jsx($, { text: "Teto de descobertas geográficas promovidas automaticamente por dia." })
        ] }),
        /* @__PURE__ */ a.jsx(
          "input",
          {
            type: "number",
            min: 1,
            value: s,
            onChange: (h) => i(h.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ a.jsx("div", { className: "lt-detail-actions", children: /* @__PURE__ */ a.jsx("button", { type: "button", className: "lt-btn", onClick: d, disabled: _ === "geo", children: _ === "geo" ? "Salvando…" : "Salvar limites de promoção geográfica" }) }),
      f && /* @__PURE__ */ a.jsx("p", { className: "lt-alert", role: "alert", children: f }),
      x && /* @__PURE__ */ a.jsx("p", { className: "lt-hint", role: "status", children: x })
    ] })
  ] }) : /* @__PURE__ */ a.jsx("p", { className: "lt-hint", children: "Carregando…" });
}
function Zt({ title: e, open: t, children: n }) {
  return /* @__PURE__ */ a.jsxs("details", { className: "lt-fold", open: t, children: [
    /* @__PURE__ */ a.jsx("summary", { children: e }),
    /* @__PURE__ */ a.jsx("div", { className: "lt-fold__body", children: n })
  ] });
}
function gg() {
  var x;
  const [e, t] = v.useState(null), [n, r] = v.useState(null), [l, o] = v.useState(null), [s, i] = v.useState(null), [u, c] = v.useState(null), f = () => {
    Promise.all([vd(), qh()]).then(([g, _]) => {
      o(g), i(_);
    }).catch((g) => c(g instanceof Error ? g.message : "Não consegui carregar o portfólio."));
  };
  if (v.useEffect(() => {
    pd().then(t).catch((g) => r(g instanceof Error ? g.message : "Não consegui carregar as configurações.")), f();
  }, []), n) return /* @__PURE__ */ a.jsx("p", { className: "lt-alert", role: "alert", children: n });
  if (!e) return /* @__PURE__ */ a.jsx("p", { className: "lt-hint", children: "Carregando..." });
  const p = (x = e.find((g) => g.id === "salesforce")) == null ? void 0 : x.enabled;
  return /* @__PURE__ */ a.jsxs("div", { children: [
    /* @__PURE__ */ a.jsxs("div", { className: "lt-header lt-header-row", children: [
      /* @__PURE__ */ a.jsx("h2", { children: "Configurações" }),
      /* @__PURE__ */ a.jsx($, { text: "Calibragem do sistema, de uso mais raro: o que você vende (portfólio), as regras que detectam oportunidades, a IA e os limites. Conectar fontes e atualizar dados fica em Entrada de dados." })
    ] }),
    /* @__PURE__ */ a.jsx(Zt, { title: "Portfólio — o que você vende", open: !0, children: /* @__PURE__ */ a.jsx(
      cg,
      {
        products: l,
        services: s,
        loadError: u,
        onProductCreated: (g) => o((_) => [..._ ?? [], g]),
        onServiceCreated: (g) => i((_) => [..._ ?? [], g]),
        onProductDeleted: (g) => o((_) => (_ ?? []).filter((j) => j.id !== g)),
        onServiceDeleted: (g) => i((_) => (_ ?? []).filter((j) => j.id !== g)),
        onCatalogChanged: f
      }
    ) }),
    /* @__PURE__ */ a.jsx(Zt, { title: "Regras de correlação — quando há uma oportunidade", children: /* @__PURE__ */ a.jsx(hg, { products: l ?? [], services: s ?? [] }) }),
    p && /* @__PURE__ */ a.jsx(Zt, { title: "Mapeamento de campos do Salesforce", children: /* @__PURE__ */ a.jsx(ig, {}) }),
    /* @__PURE__ */ a.jsx(Zt, { title: "Inteligência artificial", children: /* @__PURE__ */ a.jsx(sg, {}) }),
    /* @__PURE__ */ a.jsx(Zt, { title: "Limites e prazos (triagem, cota diária, promoção)", children: /* @__PURE__ */ a.jsx(mg, {}) }),
    /* @__PURE__ */ a.jsx(Zt, { title: "Metas por representante", children: /* @__PURE__ */ a.jsx(pg, {}) })
  ] });
}
const vg = `
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
.lt-header h3 { font-size: 13px; font-weight: 600; margin: 12px 0 6px; }
.lt-header-row h2, .lt-header-row h3, .lt-header-row h4 { margin: 0; }

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
.lt-btn:disabled, .lt-btn[aria-disabled="true"] { opacity: 0.6; cursor: not-allowed; }
.lt-hint { font-size: 11px; color: hsl(var(--text-muted)); margin-top: 6px; }
.lt-hint a { color: hsl(var(--accent)); }
.lt-alert { font-size: 11px; font-weight: 600; color: hsl(var(--danger)); margin-top: 6px; }
.lt-advisory { font-size: 11px; font-weight: 600; color: hsl(var(--warning)); margin: 0; }

.lt-draft { margin-top: 12px; padding: 12px; border-radius: 6px; background: hsl(var(--bg)); border: 1px solid hsl(var(--border)); font-size: 11px; }
.lt-draft p { margin: 0 0 8px; }

.lt-toolbar { display: flex; align-items: center; justify-content: flex-end; gap: 8px; margin-bottom: 12px; }

.lt-empty { text-align: center; padding: 48px 16px; color: hsl(var(--text-muted)); font-size: 12px; }

.lt-topbar { display: flex; align-items: flex-end; justify-content: space-between; gap: 16px; flex-wrap: wrap; margin-bottom: 16px; border-bottom: 1px solid hsl(var(--border)); }
.lt-topbar .lt-tabs { margin-bottom: 0; border-bottom: none; }
.lt-who { display: flex; align-items: center; gap: 6px; padding-bottom: 6px; font-size: 11px; font-weight: 600; color: hsl(var(--text-muted)); }
.lt-who input { width: 170px; font-size: 12px; font-weight: 400; padding: 6px 8px; border-radius: 6px; border: 1px solid hsl(var(--border)); background: hsl(var(--bg)); color: hsl(var(--text)); }
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
.lt-stat-tile__label { font-size: 12px; color: hsl(var(--text-muted)); margin-top: 2px; }
.lt-stat-tile--attention { border-left: 3px solid hsl(var(--warning)); }
.lt-stat-tile__action { font-size: 11px; color: hsl(var(--text)); margin-top: 6px; }

.lt-chart-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; }
.lt-chart-card { border: 1px solid hsl(var(--border-subtle)); border-radius: 8px; padding: 16px; background: hsl(var(--bg-elevated)); }
.lt-chart-card h3, .lt-chart-card h4 { font-size: 14px; font-weight: 600; margin: 0 0 12px; color: hsl(var(--text)); }
.lt-chart-card--wide { grid-column: 1 / -1; }

/* Dashboard por pergunta: blocos nomeados, ação em destaque, resto colapsado. */
.lt-dash-section { margin-bottom: 32px; }
.lt-dash-section__header { display: flex; justify-content: space-between; align-items: flex-end; gap: 12px; flex-wrap: wrap; margin-bottom: 12px; }
.lt-dash-section__header h3 { font-size: 14px; font-weight: 600; margin: 0; }
.lt-dash-section__header .lt-hint { margin-top: 2px; }
.lt-dash-section__period { min-width: 140px; }
.lt-dash-more summary { cursor: pointer; padding: 8px 0; font-size: 12px; font-weight: 600; color: hsl(var(--text-muted)); }
.lt-dash-more summary:focus-visible, .lt-matrix__filter summary:focus-visible { outline: 2px solid hsl(var(--accent)); outline-offset: 2px; }

/* Matriz rep×categoria: luminosidade é o único canal de cor (cor vem inline,
   calculada em repCategory.ts); "dado insuficiente" é hachura neutra + texto,
   nunca a rampa; 0% real tem borda; amostra pequena tem borda tracejada. */
.lt-matrix__toolbar { justify-content: flex-start; flex-wrap: wrap; align-items: flex-end; }
.lt-sr-only { position: absolute; width: 1px; height: 1px; margin: -1px; padding: 0; overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap; border: 0; }
.lt-matrix__filter summary { cursor: pointer; font-size: 12px; font-weight: 600; color: hsl(var(--text-muted)); min-height: 24px; line-height: 24px; }
.lt-matrix__filter ul { list-style: none; margin: 4px 0 0; padding: 0; max-height: 160px; overflow: auto; font-size: 12px; }
.lt-matrix__filter label { display: flex; align-items: center; gap: 6px; min-height: 24px; }
.lt-matrix__scroll { overflow-x: auto; max-width: 100%; scroll-padding-left: 160px; }
.lt-matrix__scroll:focus-visible { outline: 2px solid hsl(var(--accent)); outline-offset: 2px; }
.lt-matrix__table { width: auto; min-width: 100%; }
.lt-matrix__table tbody th[scope="row"], .lt-matrix__table tfoot th[scope="row"] {
  position: sticky; left: 0; z-index: 1; background: hsl(var(--bg-elevated)); text-align: left; white-space: nowrap;
}
.lt-matrix__caption { text-align: left; font-size: 11px; color: hsl(var(--text-muted)); padding: 0 0 8px; }
.lt-matrix__cell { padding: 2px; text-align: center; min-width: 52px; }
.lt-matrix__cell--none, .lt-matrix__ref { text-align: center; color: hsl(var(--text)); }
.lt-matrix__mark { margin-left: 2px; font-weight: 700; }
.lt-matrix__btn {
  all: unset; box-sizing: border-box; display: block; width: 100%; min-width: 44px; min-height: 32px; line-height: 30px;
  text-align: center; border-radius: 4px; cursor: pointer; font-size: 12px; font-weight: 600;
  font-variant-numeric: tabular-nums; border: 1px solid transparent;
}
.lt-matrix__btn:focus-visible { outline: 2px solid hsl(var(--accent)); outline-offset: 2px; }
.lt-matrix__btn--zero { border-color: hsl(var(--border)); }
.lt-matrix__btn--insufficient, .lt-matrix__swatch--insufficient {
  background: repeating-linear-gradient(135deg, hsl(var(--bg-subtle)) 0 5px, hsl(var(--border-subtle)) 5px 6px);
  color: hsl(var(--text)); border: 1px solid hsl(var(--border)); font-weight: 500;
}
.lt-matrix__legend { display: flex; flex-wrap: wrap; gap: 12px; list-style: none; padding: 0; margin: 8px 0; font-size: 11px; color: hsl(var(--text-muted)); }
.lt-matrix__legend li { display: flex; align-items: center; gap: 6px; }
.lt-matrix__swatch { display: inline-block; width: 22px; height: 14px; border-radius: 3px; box-sizing: border-box; }
.lt-matrix__swatch--ramp { background: linear-gradient(90deg, rgb(236,242,251), rgb(11,61,130)); }
.lt-matrix__swatch--zero { background: rgb(236,242,251); border: 1px solid hsl(var(--border)); }
.theme-dark .lt-matrix__swatch--ramp { background: linear-gradient(90deg, rgb(38,50,66), rgb(122,182,255)); }
.theme-dark .lt-matrix__swatch--zero { background: rgb(38,50,66); }
.lt-matrix__deals { margin-top: 12px; padding: 12px; border: 1px solid hsl(var(--border-subtle)); border-radius: 6px; background: hsl(var(--bg)); }
.lt-chart-card .lt-matrix__deals h5 { font-size: 12px; font-weight: 600; margin: 0; }
.lt-matrix__deals h5:focus-visible { outline: 2px solid hsl(var(--accent)); outline-offset: 2px; }
.lt-matrix__deals .lt-header-row .lt-btn { margin-left: auto; }

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

/* Seções recolhíveis (Configurações, conflitos, detalhe da oportunidade): <details> nativo, acessível. */
.lt-fold { border: 1px solid hsl(var(--border-subtle)); border-radius: 8px; margin-bottom: 12px; background: hsl(var(--bg-elevated)); }
.lt-fold > summary { cursor: pointer; padding: 10px 14px; font-size: 13px; font-weight: 600; list-style-position: inside; }
.lt-fold > summary:focus-visible { outline: 2px solid hsl(var(--accent)); outline-offset: 2px; }
.lt-fold__body { padding: 4px 14px 14px; }
.lt-fold--attention { border-left: 3px solid hsl(var(--warning)); }
.lt-badge--attention { background: hsl(var(--warning) / 0.2); color: hsl(var(--text)); border: 1px solid hsl(var(--warning)); margin-left: 6px; }
.lt-stat-tile--link { position: relative; cursor: pointer; }
.lt-stat-tile--link:hover { border-color: hsl(var(--accent)); }
.lt-stat-tile--link:focus-within { outline: 2px solid hsl(var(--accent)); outline-offset: 2px; }
.lt-stat-tile--link .lt-info-hint { position: relative; z-index: 1; }
/* "stretched link": o cartão inteiro clica pelo botão, sem aninhar interativo dentro de interativo */
.lt-stat-tile__go { all: unset; cursor: pointer; margin-top: 6px; font-size: 11px; color: hsl(var(--accent)); }
.lt-stat-tile__go::after { content: ''; position: absolute; inset: 0; }
.lt-stat-tile__go:focus-visible { text-decoration: underline; }
`, Ot = [
  { id: "dashboard", label: "Dashboard" },
  { id: "entrada", label: "Entrada de dados" },
  { id: "oportunidades", label: "Oportunidades" },
  { id: "configuracoes", label: "Configurações" }
];
function xg({ repId: e, initialFilters: t, onNavigate: n, active: r }) {
  const [l, o] = v.useState(null), [s, i] = v.useState(null), [u, c] = v.useState(t), [f, p] = v.useState(null), [x, g] = v.useState(null), _ = () => {
    hd().then(o).catch((y) => i(y instanceof Error ? y.message : "Não consegui carregar as oportunidades."));
  };
  v.useEffect(_, []);
  const j = v.useRef(r);
  v.useEffect(() => {
    r && !j.current && _(), j.current = r;
  }, [r]);
  const w = l ? Cm(l, u) : [], m = (y) => {
    o((S) => S && S.map((N) => N.id === y.id ? y : N));
  }, d = () => _(), h = async (y) => {
    p(null), g(y);
    try {
      const S = km(u);
      y === "pdf" ? await oh(w, S) : await sh(w);
    } catch (S) {
      p(S instanceof Error ? S.message : "Falha ao exportar.");
    } finally {
      g(null);
    }
  };
  return s ? /* @__PURE__ */ a.jsx("p", { className: "lt-alert", role: "alert", children: s }) : l ? /* @__PURE__ */ a.jsxs("div", { children: [
    /* @__PURE__ */ a.jsxs("div", { className: "lt-header lt-header-row", children: [
      /* @__PURE__ */ a.jsxs("div", { children: [
        /* @__PURE__ */ a.jsx("h2", { children: "Oportunidades" }),
        /* @__PURE__ */ a.jsxs("p", { children: [
          w.length,
          " de ",
          l.length,
          " oportunidades"
        ] })
      ] }),
      /* @__PURE__ */ a.jsx($, { text: "Aqui você lapida e age: qualifica, preenche a discovery, resolve conflitos de dados, decide o próximo passo, gera rascunho ou business case e exporta o que está na tela." })
    ] }),
    /* @__PURE__ */ a.jsx(Xm, { repId: e, onResolved: _ }),
    /* @__PURE__ */ a.jsxs("div", { className: "lt-toolbar", children: [
      /* @__PURE__ */ a.jsx("button", { type: "button", className: "lt-btn", onClick: () => h("pdf"), disabled: x !== null, "aria-busy": x === "pdf", children: x === "pdf" ? "Gerando PDF…" : "Exportar PDF" }),
      /* @__PURE__ */ a.jsx("button", { type: "button", className: "lt-btn", onClick: () => h("excel"), disabled: x !== null, "aria-busy": x === "excel", children: x === "excel" ? "Gerando Excel…" : "Exportar Excel" })
    ] }),
    f && /* @__PURE__ */ a.jsx("p", { className: "lt-alert", role: "alert", children: f }),
    /* @__PURE__ */ a.jsx(Nm, { rows: l, value: u, onChange: c }),
    l.length === 0 ? /* @__PURE__ */ a.jsxs("div", { className: "lt-empty", role: "status", children: [
      /* @__PURE__ */ a.jsx("p", { children: "Nenhuma oportunidade ainda." }),
      /* @__PURE__ */ a.jsx("button", { type: "button", className: "lt-btn", onClick: () => n("entrada"), children: "Trazer dados em Entrada de dados" })
    ] }) : /* @__PURE__ */ a.jsx(
      Qm,
      {
        rows: w,
        repId: e,
        onRowUpdated: m,
        onRenewalDateUpdated: d
      }
    )
  ] }) : /* @__PURE__ */ a.jsx("p", { className: "lt-hint", children: "Carregando oportunidades…" });
}
function yg() {
  const [e, t] = v.useState("dashboard"), [n, r] = v.useState(() => /* @__PURE__ */ new Set(["dashboard"])), [l, o] = Km(), s = v.useRef(null), [i, u] = v.useState(Di), [c, f] = v.useState(0), p = (g, _) => {
    g === "oportunidades" && _ !== void 0 && (u({ ...Di, ..._ ?? {} }), f((j) => j + 1)), t(g), r((j) => j.has(g) ? j : new Set(j).add(g)), requestAnimationFrame(() => {
      var j, w;
      return (w = (j = s.current) == null ? void 0 : j.querySelector(`#lt-tab-${g}`)) == null ? void 0 : w.focus();
    });
  }, x = (g, _) => {
    var m;
    let j = null;
    if (g.key === "ArrowRight" ? j = (_ + 1) % Ot.length : g.key === "ArrowLeft" ? j = (_ - 1 + Ot.length) % Ot.length : g.key === "Home" ? j = 0 : g.key === "End" && (j = Ot.length - 1), j === null) return;
    g.preventDefault(), p(Ot[j].id);
    const w = (m = g.currentTarget.parentElement) == null ? void 0 : m.children[j];
    w == null || w.focus();
  };
  return /* @__PURE__ */ a.jsxs("div", { className: "lt-root", ref: s, children: [
    /* @__PURE__ */ a.jsx("style", { children: vg }),
    /* @__PURE__ */ a.jsxs("div", { className: "lt-topbar", children: [
      /* @__PURE__ */ a.jsx("div", { className: "lt-tabs", role: "tablist", "aria-label": "Navegação Lead.Tracker", children: Ot.map((g, _) => /* @__PURE__ */ a.jsx(
        "button",
        {
          type: "button",
          role: "tab",
          id: `lt-tab-${g.id}`,
          "aria-selected": e === g.id,
          "aria-controls": `lt-tabpanel-${g.id}`,
          tabIndex: e === g.id ? 0 : -1,
          className: "lt-tab",
          onClick: () => p(g.id),
          onKeyDown: (j) => x(j, _),
          children: g.label
        },
        g.id
      )) }),
      /* @__PURE__ */ a.jsxs("div", { className: "lt-who", children: [
        /* @__PURE__ */ a.jsx("label", { htmlFor: "lt-rep-id", children: "Você é" }),
        /* @__PURE__ */ a.jsx($, { text: "Seu id ou nome de representante. Vale para todo o módulo: cota de contatos e próxima ação, prospecção, escolhas em conflitos de dados e o histórico de alterações. O produto ainda não tem login, então este nome não é verificado." }),
        /* @__PURE__ */ a.jsx("input", { id: "lt-rep-id", value: l, onChange: (g) => o(g.target.value), placeholder: "Id ou nome", maxLength: 64 })
      ] })
    ] }),
    Ot.map((g) => /* @__PURE__ */ a.jsx(
      "div",
      {
        role: "tabpanel",
        id: `lt-tabpanel-${g.id}`,
        "aria-labelledby": `lt-tab-${g.id}`,
        hidden: e !== g.id,
        children: n.has(g.id) && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
          g.id === "dashboard" && /* @__PURE__ */ a.jsx(wm, { onNavigate: p, active: e === "dashboard" }),
          g.id === "entrada" && /* @__PURE__ */ a.jsx(lg, { repId: l, onNavigate: p }),
          g.id === "oportunidades" && /* @__PURE__ */ a.jsx(
            xg,
            {
              repId: l,
              initialFilters: i,
              onNavigate: p,
              active: e === "oportunidades"
            },
            c
          ),
          g.id === "configuracoes" && /* @__PURE__ */ a.jsx(gg, {})
        ] })
      },
      g.id
    ))
  ] });
}
const jg = {
  moduleId: "lead_tracker",
  title: "Lead.Tracker",
  icon: "target",
  category: "Sales",
  vendor: "TechForge",
  route: "/modules/lead_tracker",
  description: "Opportunity Intelligence — tela de oportunidades."
};
let Gi = null;
function Sg(e) {
  Gi = id(e), Gi.render(/* @__PURE__ */ a.jsx(yg, {}));
}
const _g = { render: Sg, moduleConfig: jg };
export {
  _g as default
};
