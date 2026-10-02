// Tech.Forge Module Host contract: this bundle's `export default` is the render() entry point.
var Mi = { exports: {} }, Na = {}, Ai = { exports: {} }, U = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mr = Symbol.for("react.element"), fd = Symbol.for("react.portal"), hd = Symbol.for("react.fragment"), md = Symbol.for("react.strict_mode"), gd = Symbol.for("react.profiler"), vd = Symbol.for("react.provider"), yd = Symbol.for("react.context"), xd = Symbol.for("react.forward_ref"), jd = Symbol.for("react.suspense"), Sd = Symbol.for("react.memo"), wd = Symbol.for("react.lazy"), ms = Symbol.iterator;
function _d(e) {
  return e === null || typeof e != "object" ? null : (e = ms && e[ms] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Ui = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Bi = Object.assign, Vi = {};
function Cn(e, t, n) {
  this.props = e, this.context = t, this.refs = Vi, this.updater = n || Ui;
}
Cn.prototype.isReactComponent = {};
Cn.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Cn.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Hi() {
}
Hi.prototype = Cn.prototype;
function xo(e, t, n) {
  this.props = e, this.context = t, this.refs = Vi, this.updater = n || Ui;
}
var jo = xo.prototype = new Hi();
jo.constructor = xo;
Bi(jo, Cn.prototype);
jo.isPureReactComponent = !0;
var gs = Array.isArray, Qi = Object.prototype.hasOwnProperty, So = { current: null }, qi = { key: !0, ref: !0, __self: !0, __source: !0 };
function Wi(e, t, n) {
  var r, a = {}, o = null, s = null;
  if (t != null) for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (o = "" + t.key), t) Qi.call(t, r) && !qi.hasOwnProperty(r) && (a[r] = t[r]);
  var i = arguments.length - 2;
  if (i === 1) a.children = n;
  else if (1 < i) {
    for (var u = Array(i), d = 0; d < i; d++) u[d] = arguments[d + 2];
    a.children = u;
  }
  if (e && e.defaultProps) for (r in i = e.defaultProps, i) a[r] === void 0 && (a[r] = i[r]);
  return { $$typeof: mr, type: e, key: o, ref: s, props: a, _owner: So.current };
}
function Nd(e, t) {
  return { $$typeof: mr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function wo(e) {
  return typeof e == "object" && e !== null && e.$$typeof === mr;
}
function kd(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var vs = /\/+/g;
function Ba(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? kd("" + e.key) : t.toString(36);
}
function Ur(e, t, n, r, a) {
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
        case mr:
        case fd:
          s = !0;
      }
  }
  if (s) return s = e, a = a(s), e = r === "" ? "." + Ba(s, 0) : r, gs(a) ? (n = "", e != null && (n = e.replace(vs, "$&/") + "/"), Ur(a, t, n, "", function(d) {
    return d;
  })) : a != null && (wo(a) && (a = Nd(a, n + (!a.key || s && s.key === a.key ? "" : ("" + a.key).replace(vs, "$&/") + "/") + e)), t.push(a)), 1;
  if (s = 0, r = r === "" ? "." : r + ":", gs(e)) for (var i = 0; i < e.length; i++) {
    o = e[i];
    var u = r + Ba(o, i);
    s += Ur(o, t, n, u, a);
  }
  else if (u = _d(e), typeof u == "function") for (e = u.call(e), i = 0; !(o = e.next()).done; ) o = o.value, u = r + Ba(o, i++), s += Ur(o, t, n, u, a);
  else if (o === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return s;
}
function wr(e, t, n) {
  if (e == null) return e;
  var r = [], a = 0;
  return Ur(e, r, "", "", function(o) {
    return t.call(n, o, a++);
  }), r;
}
function Cd(e) {
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
var ye = { current: null }, Br = { transition: null }, Ed = { ReactCurrentDispatcher: ye, ReactCurrentBatchConfig: Br, ReactCurrentOwner: So };
function Ki() {
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
  if (!wo(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
U.Component = Cn;
U.Fragment = hd;
U.Profiler = gd;
U.PureComponent = xo;
U.StrictMode = md;
U.Suspense = jd;
U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ed;
U.act = Ki;
U.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Bi({}, e.props), a = e.key, o = e.ref, s = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (o = t.ref, s = So.current), t.key !== void 0 && (a = "" + t.key), e.type && e.type.defaultProps) var i = e.type.defaultProps;
    for (u in t) Qi.call(t, u) && !qi.hasOwnProperty(u) && (r[u] = t[u] === void 0 && i !== void 0 ? i[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    i = Array(u);
    for (var d = 0; d < u; d++) i[d] = arguments[d + 2];
    r.children = i;
  }
  return { $$typeof: mr, type: e.type, key: a, ref: o, props: r, _owner: s };
};
U.createContext = function(e) {
  return e = { $$typeof: yd, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: vd, _context: e }, e.Consumer = e;
};
U.createElement = Wi;
U.createFactory = function(e) {
  var t = Wi.bind(null, e);
  return t.type = e, t;
};
U.createRef = function() {
  return { current: null };
};
U.forwardRef = function(e) {
  return { $$typeof: xd, render: e };
};
U.isValidElement = wo;
U.lazy = function(e) {
  return { $$typeof: wd, _payload: { _status: -1, _result: e }, _init: Cd };
};
U.memo = function(e, t) {
  return { $$typeof: Sd, type: e, compare: t === void 0 ? null : t };
};
U.startTransition = function(e) {
  var t = Br.transition;
  Br.transition = {};
  try {
    e();
  } finally {
    Br.transition = t;
  }
};
U.unstable_act = Ki;
U.useCallback = function(e, t) {
  return ye.current.useCallback(e, t);
};
U.useContext = function(e) {
  return ye.current.useContext(e);
};
U.useDebugValue = function() {
};
U.useDeferredValue = function(e) {
  return ye.current.useDeferredValue(e);
};
U.useEffect = function(e, t) {
  return ye.current.useEffect(e, t);
};
U.useId = function() {
  return ye.current.useId();
};
U.useImperativeHandle = function(e, t, n) {
  return ye.current.useImperativeHandle(e, t, n);
};
U.useInsertionEffect = function(e, t) {
  return ye.current.useInsertionEffect(e, t);
};
U.useLayoutEffect = function(e, t) {
  return ye.current.useLayoutEffect(e, t);
};
U.useMemo = function(e, t) {
  return ye.current.useMemo(e, t);
};
U.useReducer = function(e, t, n) {
  return ye.current.useReducer(e, t, n);
};
U.useRef = function(e) {
  return ye.current.useRef(e);
};
U.useState = function(e) {
  return ye.current.useState(e);
};
U.useSyncExternalStore = function(e, t, n) {
  return ye.current.useSyncExternalStore(e, t, n);
};
U.useTransition = function() {
  return ye.current.useTransition();
};
U.version = "18.3.1";
Ai.exports = U;
var v = Ai.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bd = v, Pd = Symbol.for("react.element"), Td = Symbol.for("react.fragment"), Rd = Object.prototype.hasOwnProperty, zd = bd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, $d = { key: !0, ref: !0, __self: !0, __source: !0 };
function Gi(e, t, n) {
  var r, a = {}, o = null, s = null;
  n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (s = t.ref);
  for (r in t) Rd.call(t, r) && !$d.hasOwnProperty(r) && (a[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) a[r] === void 0 && (a[r] = t[r]);
  return { $$typeof: Pd, type: e, key: o, ref: s, props: a, _owner: zd.current };
}
Na.Fragment = Td;
Na.jsx = Gi;
Na.jsxs = Gi;
Mi.exports = Na;
var l = Mi.exports, Yi = { exports: {} }, ze = {}, Xi = { exports: {} }, Ji = {};
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
  function t(T, O) {
    var C = T.length;
    T.push(O);
    e: for (; 0 < C; ) {
      var M = C - 1 >>> 1, N = T[M];
      if (0 < a(N, O)) T[M] = O, T[C] = N, C = M;
      else break e;
    }
  }
  function n(T) {
    return T.length === 0 ? null : T[0];
  }
  function r(T) {
    if (T.length === 0) return null;
    var O = T[0], C = T.pop();
    if (C !== O) {
      T[0] = C;
      e: for (var M = 0, N = T.length, ce = N >>> 1; M < ce; ) {
        var Ee = 2 * (M + 1) - 1, Pn = T[Ee], et = Ee + 1, Kt = T[et];
        if (0 > a(Pn, C)) et < N && 0 > a(Kt, Pn) ? (T[M] = Kt, T[et] = C, M = et) : (T[M] = Pn, T[Ee] = C, M = Ee);
        else if (et < N && 0 > a(Kt, C)) T[M] = Kt, T[et] = C, M = et;
        else break e;
      }
    }
    return O;
  }
  function a(T, O) {
    var C = T.sortIndex - O.sortIndex;
    return C !== 0 ? C : T.id - O.id;
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
  var u = [], d = [], m = 1, h = null, g = 3, y = !1, S = !1, j = !1, _ = typeof setTimeout == "function" ? setTimeout : null, f = typeof clearTimeout == "function" ? clearTimeout : null, c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(T) {
    for (var O = n(d); O !== null; ) {
      if (O.callback === null) r(d);
      else if (O.startTime <= T) r(d), O.sortIndex = O.expirationTime, t(u, O);
      else break;
      O = n(d);
    }
  }
  function w(T) {
    if (j = !1, p(T), !S) if (n(u) !== null) S = !0, Ce(x);
    else {
      var O = n(d);
      O !== null && me(w, O.startTime - T);
    }
  }
  function x(T, O) {
    S = !1, j && (j = !1, f(E), E = -1), y = !0;
    var C = g;
    try {
      for (p(O), h = n(u); h !== null && (!(h.expirationTime > O) || T && !V()); ) {
        var M = h.callback;
        if (typeof M == "function") {
          h.callback = null, g = h.priorityLevel;
          var N = M(h.expirationTime <= O);
          O = e.unstable_now(), typeof N == "function" ? h.callback = N : h === n(u) && r(u), p(O);
        } else r(u);
        h = n(u);
      }
      if (h !== null) var ce = !0;
      else {
        var Ee = n(d);
        Ee !== null && me(w, Ee.startTime - O), ce = !1;
      }
      return ce;
    } finally {
      h = null, g = C, y = !1;
    }
  }
  var b = !1, P = null, E = -1, A = 5, R = -1;
  function V() {
    return !(e.unstable_now() - R < A);
  }
  function I() {
    if (P !== null) {
      var T = e.unstable_now();
      R = T;
      var O = !0;
      try {
        O = P(!0, T);
      } finally {
        O ? $() : (b = !1, P = null);
      }
    } else b = !1;
  }
  var $;
  if (typeof c == "function") $ = function() {
    c(I);
  };
  else if (typeof MessageChannel < "u") {
    var q = new MessageChannel(), H = q.port2;
    q.port1.onmessage = I, $ = function() {
      H.postMessage(null);
    };
  } else $ = function() {
    _(I, 0);
  };
  function Ce(T) {
    P = T, b || (b = !0, $());
  }
  function me(T, O) {
    E = _(function() {
      T(e.unstable_now());
    }, O);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(T) {
    T.callback = null;
  }, e.unstable_continueExecution = function() {
    S || y || (S = !0, Ce(x));
  }, e.unstable_forceFrameRate = function(T) {
    0 > T || 125 < T ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : A = 0 < T ? Math.floor(1e3 / T) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return g;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(u);
  }, e.unstable_next = function(T) {
    switch (g) {
      case 1:
      case 2:
      case 3:
        var O = 3;
        break;
      default:
        O = g;
    }
    var C = g;
    g = O;
    try {
      return T();
    } finally {
      g = C;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(T, O) {
    switch (T) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        T = 3;
    }
    var C = g;
    g = T;
    try {
      return O();
    } finally {
      g = C;
    }
  }, e.unstable_scheduleCallback = function(T, O, C) {
    var M = e.unstable_now();
    switch (typeof C == "object" && C !== null ? (C = C.delay, C = typeof C == "number" && 0 < C ? M + C : M) : C = M, T) {
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
    return N = C + N, T = { id: m++, callback: O, priorityLevel: T, startTime: C, expirationTime: N, sortIndex: -1 }, C > M ? (T.sortIndex = C, t(d, T), n(u) === null && T === n(d) && (j ? (f(E), E = -1) : j = !0, me(w, C - M))) : (T.sortIndex = N, t(u, T), S || y || (S = !0, Ce(x))), T;
  }, e.unstable_shouldYield = V, e.unstable_wrapCallback = function(T) {
    var O = g;
    return function() {
      var C = g;
      g = O;
      try {
        return T.apply(this, arguments);
      } finally {
        g = C;
      }
    };
  };
})(Ji);
Xi.exports = Ji;
var Ld = Xi.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Od = v, Re = Ld;
function k(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Zi = /* @__PURE__ */ new Set(), Jn = {};
function qt(e, t) {
  xn(e, t), xn(e + "Capture", t);
}
function xn(e, t) {
  for (Jn[e] = t, e = 0; e < t.length; e++) Zi.add(t[e]);
}
var it = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Nl = Object.prototype.hasOwnProperty, Id = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, ys = {}, xs = {};
function Dd(e) {
  return Nl.call(xs, e) ? !0 : Nl.call(ys, e) ? !1 : Id.test(e) ? xs[e] = !0 : (ys[e] = !0, !1);
}
function Fd(e, t, n, r) {
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
function Md(e, t, n, r) {
  if (t === null || typeof t > "u" || Fd(e, t, n, r)) return !0;
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
function xe(e, t, n, r, a, o, s) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = a, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = s;
}
var ue = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  ue[e] = new xe(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  ue[t] = new xe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  ue[e] = new xe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  ue[e] = new xe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  ue[e] = new xe(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  ue[e] = new xe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  ue[e] = new xe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  ue[e] = new xe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  ue[e] = new xe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var _o = /[\-:]([a-z])/g;
function No(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    _o,
    No
  );
  ue[t] = new xe(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(_o, No);
  ue[t] = new xe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(_o, No);
  ue[t] = new xe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  ue[e] = new xe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ue.xlinkHref = new xe("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  ue[e] = new xe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ko(e, t, n, r) {
  var a = ue.hasOwnProperty(t) ? ue[t] : null;
  (a !== null ? a.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Md(t, n, a, r) && (n = null), r || a === null ? Dd(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : a.mustUseProperty ? e[a.propertyName] = n === null ? a.type === 3 ? !1 : "" : n : (t = a.attributeName, r = a.attributeNamespace, n === null ? e.removeAttribute(t) : (a = a.type, n = a === 3 || a === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var pt = Od.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, _r = Symbol.for("react.element"), Jt = Symbol.for("react.portal"), Zt = Symbol.for("react.fragment"), Co = Symbol.for("react.strict_mode"), kl = Symbol.for("react.profiler"), eu = Symbol.for("react.provider"), tu = Symbol.for("react.context"), Eo = Symbol.for("react.forward_ref"), Cl = Symbol.for("react.suspense"), El = Symbol.for("react.suspense_list"), bo = Symbol.for("react.memo"), ht = Symbol.for("react.lazy"), nu = Symbol.for("react.offscreen"), js = Symbol.iterator;
function Tn(e) {
  return e === null || typeof e != "object" ? null : (e = js && e[js] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Z = Object.assign, Va;
function Fn(e) {
  if (Va === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Va = t && t[1] || "";
  }
  return `
` + Va + e;
}
var Ha = !1;
function Qa(e, t) {
  if (!e || Ha) return "";
  Ha = !0;
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
      for (var a = d.stack.split(`
`), o = r.stack.split(`
`), s = a.length - 1, i = o.length - 1; 1 <= s && 0 <= i && a[s] !== o[i]; ) i--;
      for (; 1 <= s && 0 <= i; s--, i--) if (a[s] !== o[i]) {
        if (s !== 1 || i !== 1)
          do
            if (s--, i--, 0 > i || a[s] !== o[i]) {
              var u = `
` + a[s].replace(" at new ", " at ");
              return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)), u;
            }
          while (1 <= s && 0 <= i);
        break;
      }
    }
  } finally {
    Ha = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Fn(e) : "";
}
function Ad(e) {
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
      return e = Qa(e.type, !1), e;
    case 11:
      return e = Qa(e.type.render, !1), e;
    case 1:
      return e = Qa(e.type, !0), e;
    default:
      return "";
  }
}
function bl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Zt:
      return "Fragment";
    case Jt:
      return "Portal";
    case kl:
      return "Profiler";
    case Co:
      return "StrictMode";
    case Cl:
      return "Suspense";
    case El:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case tu:
      return (e.displayName || "Context") + ".Consumer";
    case eu:
      return (e._context.displayName || "Context") + ".Provider";
    case Eo:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case bo:
      return t = e.displayName || null, t !== null ? t : bl(e.type) || "Memo";
    case ht:
      t = e._payload, e = e._init;
      try {
        return bl(e(t));
      } catch {
      }
  }
  return null;
}
function Ud(e) {
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
      return bl(t);
    case 8:
      return t === Co ? "StrictMode" : "Mode";
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
function bt(e) {
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
function ru(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Bd(e) {
  var t = ru(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var a = n.get, o = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return a.call(this);
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
function Nr(e) {
  e._valueTracker || (e._valueTracker = Bd(e));
}
function au(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = ru(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Zr(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Pl(e, t) {
  var n = t.checked;
  return Z({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Ss(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = bt(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function lu(e, t) {
  t = t.checked, t != null && ko(e, "checked", t, !1);
}
function Tl(e, t) {
  lu(e, t);
  var n = bt(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Rl(e, t.type, n) : t.hasOwnProperty("defaultValue") && Rl(e, t.type, bt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function ws(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Rl(e, t, n) {
  (t !== "number" || Zr(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Mn = Array.isArray;
function pn(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
    for (n = 0; n < e.length; n++) a = t.hasOwnProperty("$" + e[n].value), e[n].selected !== a && (e[n].selected = a), a && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + bt(n), t = null, a = 0; a < e.length; a++) {
      if (e[a].value === n) {
        e[a].selected = !0, r && (e[a].defaultSelected = !0);
        return;
      }
      t !== null || e[a].disabled || (t = e[a]);
    }
    t !== null && (t.selected = !0);
  }
}
function zl(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(k(91));
  return Z({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function _s(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(k(92));
      if (Mn(n)) {
        if (1 < n.length) throw Error(k(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: bt(n) };
}
function ou(e, t) {
  var n = bt(t.value), r = bt(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Ns(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function su(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function $l(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? su(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var kr, iu = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, a) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, a);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (kr = kr || document.createElement("div"), kr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = kr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function Zn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Vn = {
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
}, Vd = ["Webkit", "ms", "Moz", "O"];
Object.keys(Vn).forEach(function(e) {
  Vd.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Vn[t] = Vn[e];
  });
});
function uu(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Vn.hasOwnProperty(e) && Vn[e] ? ("" + t).trim() : t + "px";
}
function cu(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, a = uu(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, a) : e[n] = a;
  }
}
var Hd = Z({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Ll(e, t) {
  if (t) {
    if (Hd[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(k(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(k(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(k(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(k(62));
  }
}
function Ol(e, t) {
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
var Il = null;
function Po(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Dl = null, fn = null, hn = null;
function ks(e) {
  if (e = yr(e)) {
    if (typeof Dl != "function") throw Error(k(280));
    var t = e.stateNode;
    t && (t = Pa(t), Dl(e.stateNode, e.type, t));
  }
}
function du(e) {
  fn ? hn ? hn.push(e) : hn = [e] : fn = e;
}
function pu() {
  if (fn) {
    var e = fn, t = hn;
    if (hn = fn = null, ks(e), t) for (e = 0; e < t.length; e++) ks(t[e]);
  }
}
function fu(e, t) {
  return e(t);
}
function hu() {
}
var qa = !1;
function mu(e, t, n) {
  if (qa) return e(t, n);
  qa = !0;
  try {
    return fu(e, t, n);
  } finally {
    qa = !1, (fn !== null || hn !== null) && (hu(), pu());
  }
}
function er(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Pa(n);
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
var Fl = !1;
if (it) try {
  var Rn = {};
  Object.defineProperty(Rn, "passive", { get: function() {
    Fl = !0;
  } }), window.addEventListener("test", Rn, Rn), window.removeEventListener("test", Rn, Rn);
} catch {
  Fl = !1;
}
function Qd(e, t, n, r, a, o, s, i, u) {
  var d = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, d);
  } catch (m) {
    this.onError(m);
  }
}
var Hn = !1, ea = null, ta = !1, Ml = null, qd = { onError: function(e) {
  Hn = !0, ea = e;
} };
function Wd(e, t, n, r, a, o, s, i, u) {
  Hn = !1, ea = null, Qd.apply(qd, arguments);
}
function Kd(e, t, n, r, a, o, s, i, u) {
  if (Wd.apply(this, arguments), Hn) {
    if (Hn) {
      var d = ea;
      Hn = !1, ea = null;
    } else throw Error(k(198));
    ta || (ta = !0, Ml = d);
  }
}
function Wt(e) {
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
function gu(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function Cs(e) {
  if (Wt(e) !== e) throw Error(k(188));
}
function Gd(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Wt(e), t === null) throw Error(k(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var a = n.return;
    if (a === null) break;
    var o = a.alternate;
    if (o === null) {
      if (r = a.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (a.child === o.child) {
      for (o = a.child; o; ) {
        if (o === n) return Cs(a), e;
        if (o === r) return Cs(a), t;
        o = o.sibling;
      }
      throw Error(k(188));
    }
    if (n.return !== r.return) n = a, r = o;
    else {
      for (var s = !1, i = a.child; i; ) {
        if (i === n) {
          s = !0, n = a, r = o;
          break;
        }
        if (i === r) {
          s = !0, r = a, n = o;
          break;
        }
        i = i.sibling;
      }
      if (!s) {
        for (i = o.child; i; ) {
          if (i === n) {
            s = !0, n = o, r = a;
            break;
          }
          if (i === r) {
            s = !0, r = o, n = a;
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
function vu(e) {
  return e = Gd(e), e !== null ? yu(e) : null;
}
function yu(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = yu(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var xu = Re.unstable_scheduleCallback, Es = Re.unstable_cancelCallback, Yd = Re.unstable_shouldYield, Xd = Re.unstable_requestPaint, te = Re.unstable_now, Jd = Re.unstable_getCurrentPriorityLevel, To = Re.unstable_ImmediatePriority, ju = Re.unstable_UserBlockingPriority, na = Re.unstable_NormalPriority, Zd = Re.unstable_LowPriority, Su = Re.unstable_IdlePriority, ka = null, Je = null;
function ep(e) {
  if (Je && typeof Je.onCommitFiberRoot == "function") try {
    Je.onCommitFiberRoot(ka, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var He = Math.clz32 ? Math.clz32 : rp, tp = Math.log, np = Math.LN2;
function rp(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (tp(e) / np | 0) | 0;
}
var Cr = 64, Er = 4194304;
function An(e) {
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
function ra(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, a = e.suspendedLanes, o = e.pingedLanes, s = n & 268435455;
  if (s !== 0) {
    var i = s & ~a;
    i !== 0 ? r = An(i) : (o &= s, o !== 0 && (r = An(o)));
  } else s = n & ~a, s !== 0 ? r = An(s) : o !== 0 && (r = An(o));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & a) && (a = r & -r, o = t & -t, a >= o || a === 16 && (o & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - He(t), a = 1 << n, r |= e[n], t &= ~a;
  return r;
}
function ap(e, t) {
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
function lp(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, a = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var s = 31 - He(o), i = 1 << s, u = a[s];
    u === -1 ? (!(i & n) || i & r) && (a[s] = ap(i, t)) : u <= t && (e.expiredLanes |= i), o &= ~i;
  }
}
function Al(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function wu() {
  var e = Cr;
  return Cr <<= 1, !(Cr & 4194240) && (Cr = 64), e;
}
function Wa(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function gr(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - He(t), e[t] = n;
}
function op(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var a = 31 - He(n), o = 1 << a;
    t[a] = 0, r[a] = -1, e[a] = -1, n &= ~o;
  }
}
function Ro(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - He(n), a = 1 << r;
    a & t | e[r] & t && (e[r] |= t), n &= ~a;
  }
}
var Q = 0;
function _u(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Nu, zo, ku, Cu, Eu, Ul = !1, br = [], jt = null, St = null, wt = null, tr = /* @__PURE__ */ new Map(), nr = /* @__PURE__ */ new Map(), gt = [], sp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function bs(e, t) {
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
      tr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      nr.delete(t.pointerId);
  }
}
function zn(e, t, n, r, a, o) {
  return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [a] }, t !== null && (t = yr(t), t !== null && zo(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, a !== null && t.indexOf(a) === -1 && t.push(a), e);
}
function ip(e, t, n, r, a) {
  switch (t) {
    case "focusin":
      return jt = zn(jt, e, t, n, r, a), !0;
    case "dragenter":
      return St = zn(St, e, t, n, r, a), !0;
    case "mouseover":
      return wt = zn(wt, e, t, n, r, a), !0;
    case "pointerover":
      var o = a.pointerId;
      return tr.set(o, zn(tr.get(o) || null, e, t, n, r, a)), !0;
    case "gotpointercapture":
      return o = a.pointerId, nr.set(o, zn(nr.get(o) || null, e, t, n, r, a)), !0;
  }
  return !1;
}
function bu(e) {
  var t = It(e.target);
  if (t !== null) {
    var n = Wt(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = gu(n), t !== null) {
          e.blockedOn = t, Eu(e.priority, function() {
            ku(n);
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
function Vr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Bl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Il = r, n.target.dispatchEvent(r), Il = null;
    } else return t = yr(n), t !== null && zo(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Ps(e, t, n) {
  Vr(e) && n.delete(t);
}
function up() {
  Ul = !1, jt !== null && Vr(jt) && (jt = null), St !== null && Vr(St) && (St = null), wt !== null && Vr(wt) && (wt = null), tr.forEach(Ps), nr.forEach(Ps);
}
function $n(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Ul || (Ul = !0, Re.unstable_scheduleCallback(Re.unstable_NormalPriority, up)));
}
function rr(e) {
  function t(a) {
    return $n(a, e);
  }
  if (0 < br.length) {
    $n(br[0], e);
    for (var n = 1; n < br.length; n++) {
      var r = br[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (jt !== null && $n(jt, e), St !== null && $n(St, e), wt !== null && $n(wt, e), tr.forEach(t), nr.forEach(t), n = 0; n < gt.length; n++) r = gt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < gt.length && (n = gt[0], n.blockedOn === null); ) bu(n), n.blockedOn === null && gt.shift();
}
var mn = pt.ReactCurrentBatchConfig, aa = !0;
function cp(e, t, n, r) {
  var a = Q, o = mn.transition;
  mn.transition = null;
  try {
    Q = 1, $o(e, t, n, r);
  } finally {
    Q = a, mn.transition = o;
  }
}
function dp(e, t, n, r) {
  var a = Q, o = mn.transition;
  mn.transition = null;
  try {
    Q = 4, $o(e, t, n, r);
  } finally {
    Q = a, mn.transition = o;
  }
}
function $o(e, t, n, r) {
  if (aa) {
    var a = Bl(e, t, n, r);
    if (a === null) rl(e, t, r, la, n), bs(e, r);
    else if (ip(a, e, t, n, r)) r.stopPropagation();
    else if (bs(e, r), t & 4 && -1 < sp.indexOf(e)) {
      for (; a !== null; ) {
        var o = yr(a);
        if (o !== null && Nu(o), o = Bl(e, t, n, r), o === null && rl(e, t, r, la, n), o === a) break;
        a = o;
      }
      a !== null && r.stopPropagation();
    } else rl(e, t, r, null, n);
  }
}
var la = null;
function Bl(e, t, n, r) {
  if (la = null, e = Po(r), e = It(e), e !== null) if (t = Wt(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = gu(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return la = e, null;
}
function Pu(e) {
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
      switch (Jd()) {
        case To:
          return 1;
        case ju:
          return 4;
        case na:
        case Zd:
          return 16;
        case Su:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var yt = null, Lo = null, Hr = null;
function Tu() {
  if (Hr) return Hr;
  var e, t = Lo, n = t.length, r, a = "value" in yt ? yt.value : yt.textContent, o = a.length;
  for (e = 0; e < n && t[e] === a[e]; e++) ;
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === a[o - r]; r++) ;
  return Hr = a.slice(e, 1 < r ? 1 - r : void 0);
}
function Qr(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Pr() {
  return !0;
}
function Ts() {
  return !1;
}
function $e(e) {
  function t(n, r, a, o, s) {
    this._reactName = n, this._targetInst = a, this.type = r, this.nativeEvent = o, this.target = s, this.currentTarget = null;
    for (var i in e) e.hasOwnProperty(i) && (n = e[i], this[i] = n ? n(o) : o[i]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Pr : Ts, this.isPropagationStopped = Ts, this;
  }
  return Z(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Pr);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Pr);
  }, persist: function() {
  }, isPersistent: Pr }), t;
}
var En = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Oo = $e(En), vr = Z({}, En, { view: 0, detail: 0 }), pp = $e(vr), Ka, Ga, Ln, Ca = Z({}, vr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Io, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Ln && (Ln && e.type === "mousemove" ? (Ka = e.screenX - Ln.screenX, Ga = e.screenY - Ln.screenY) : Ga = Ka = 0, Ln = e), Ka);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Ga;
} }), Rs = $e(Ca), fp = Z({}, Ca, { dataTransfer: 0 }), hp = $e(fp), mp = Z({}, vr, { relatedTarget: 0 }), Ya = $e(mp), gp = Z({}, En, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), vp = $e(gp), yp = Z({}, En, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), xp = $e(yp), jp = Z({}, En, { data: 0 }), zs = $e(jp), Sp = {
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
}, wp = {
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
}, _p = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Np(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = _p[e]) ? !!t[e] : !1;
}
function Io() {
  return Np;
}
var kp = Z({}, vr, { key: function(e) {
  if (e.key) {
    var t = Sp[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Qr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? wp[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Io, charCode: function(e) {
  return e.type === "keypress" ? Qr(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Qr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Cp = $e(kp), Ep = Z({}, Ca, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), $s = $e(Ep), bp = Z({}, vr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Io }), Pp = $e(bp), Tp = Z({}, En, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Rp = $e(Tp), zp = Z({}, Ca, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), $p = $e(zp), Lp = [9, 13, 27, 32], Do = it && "CompositionEvent" in window, Qn = null;
it && "documentMode" in document && (Qn = document.documentMode);
var Op = it && "TextEvent" in window && !Qn, Ru = it && (!Do || Qn && 8 < Qn && 11 >= Qn), Ls = " ", Os = !1;
function zu(e, t) {
  switch (e) {
    case "keyup":
      return Lp.indexOf(t.keyCode) !== -1;
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
function $u(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var en = !1;
function Ip(e, t) {
  switch (e) {
    case "compositionend":
      return $u(t);
    case "keypress":
      return t.which !== 32 ? null : (Os = !0, Ls);
    case "textInput":
      return e = t.data, e === Ls && Os ? null : e;
    default:
      return null;
  }
}
function Dp(e, t) {
  if (en) return e === "compositionend" || !Do && zu(e, t) ? (e = Tu(), Hr = Lo = yt = null, en = !1, e) : null;
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
      return Ru && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Fp = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Is(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Fp[e.type] : t === "textarea";
}
function Lu(e, t, n, r) {
  du(r), t = oa(t, "onChange"), 0 < t.length && (n = new Oo("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var qn = null, ar = null;
function Mp(e) {
  Qu(e, 0);
}
function Ea(e) {
  var t = rn(e);
  if (au(t)) return e;
}
function Ap(e, t) {
  if (e === "change") return t;
}
var Ou = !1;
if (it) {
  var Xa;
  if (it) {
    var Ja = "oninput" in document;
    if (!Ja) {
      var Ds = document.createElement("div");
      Ds.setAttribute("oninput", "return;"), Ja = typeof Ds.oninput == "function";
    }
    Xa = Ja;
  } else Xa = !1;
  Ou = Xa && (!document.documentMode || 9 < document.documentMode);
}
function Fs() {
  qn && (qn.detachEvent("onpropertychange", Iu), ar = qn = null);
}
function Iu(e) {
  if (e.propertyName === "value" && Ea(ar)) {
    var t = [];
    Lu(t, ar, e, Po(e)), mu(Mp, t);
  }
}
function Up(e, t, n) {
  e === "focusin" ? (Fs(), qn = t, ar = n, qn.attachEvent("onpropertychange", Iu)) : e === "focusout" && Fs();
}
function Bp(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ea(ar);
}
function Vp(e, t) {
  if (e === "click") return Ea(t);
}
function Hp(e, t) {
  if (e === "input" || e === "change") return Ea(t);
}
function Qp(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var qe = typeof Object.is == "function" ? Object.is : Qp;
function lr(e, t) {
  if (qe(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var a = n[r];
    if (!Nl.call(t, a) || !qe(e[a], t[a])) return !1;
  }
  return !0;
}
function Ms(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function As(e, t) {
  var n = Ms(e);
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
    n = Ms(n);
  }
}
function Du(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Du(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Fu() {
  for (var e = window, t = Zr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Zr(e.document);
  }
  return t;
}
function Fo(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function qp(e) {
  var t = Fu(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Du(n.ownerDocument.documentElement, n)) {
    if (r !== null && Fo(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var a = n.textContent.length, o = Math.min(r.start, a);
        r = r.end === void 0 ? o : Math.min(r.end, a), !e.extend && o > r && (a = r, r = o, o = a), a = As(n, o);
        var s = As(
          n,
          r
        );
        a && s && (e.rangeCount !== 1 || e.anchorNode !== a.node || e.anchorOffset !== a.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(), t.setStart(a.node, a.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var Wp = it && "documentMode" in document && 11 >= document.documentMode, tn = null, Vl = null, Wn = null, Hl = !1;
function Us(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Hl || tn == null || tn !== Zr(r) || (r = tn, "selectionStart" in r && Fo(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Wn && lr(Wn, r) || (Wn = r, r = oa(Vl, "onSelect"), 0 < r.length && (t = new Oo("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = tn)));
}
function Tr(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var nn = { animationend: Tr("Animation", "AnimationEnd"), animationiteration: Tr("Animation", "AnimationIteration"), animationstart: Tr("Animation", "AnimationStart"), transitionend: Tr("Transition", "TransitionEnd") }, Za = {}, Mu = {};
it && (Mu = document.createElement("div").style, "AnimationEvent" in window || (delete nn.animationend.animation, delete nn.animationiteration.animation, delete nn.animationstart.animation), "TransitionEvent" in window || delete nn.transitionend.transition);
function ba(e) {
  if (Za[e]) return Za[e];
  if (!nn[e]) return e;
  var t = nn[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in Mu) return Za[e] = t[n];
  return e;
}
var Au = ba("animationend"), Uu = ba("animationiteration"), Bu = ba("animationstart"), Vu = ba("transitionend"), Hu = /* @__PURE__ */ new Map(), Bs = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Tt(e, t) {
  Hu.set(e, t), qt(t, [e]);
}
for (var el = 0; el < Bs.length; el++) {
  var tl = Bs[el], Kp = tl.toLowerCase(), Gp = tl[0].toUpperCase() + tl.slice(1);
  Tt(Kp, "on" + Gp);
}
Tt(Au, "onAnimationEnd");
Tt(Uu, "onAnimationIteration");
Tt(Bu, "onAnimationStart");
Tt("dblclick", "onDoubleClick");
Tt("focusin", "onFocus");
Tt("focusout", "onBlur");
Tt(Vu, "onTransitionEnd");
xn("onMouseEnter", ["mouseout", "mouseover"]);
xn("onMouseLeave", ["mouseout", "mouseover"]);
xn("onPointerEnter", ["pointerout", "pointerover"]);
xn("onPointerLeave", ["pointerout", "pointerover"]);
qt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
qt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
qt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
qt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
qt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
qt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Un = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Yp = new Set("cancel close invalid load scroll toggle".split(" ").concat(Un));
function Vs(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Kd(r, t, void 0, e), e.currentTarget = null;
}
function Qu(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], a = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t) for (var s = r.length - 1; 0 <= s; s--) {
        var i = r[s], u = i.instance, d = i.currentTarget;
        if (i = i.listener, u !== o && a.isPropagationStopped()) break e;
        Vs(a, i, d), o = u;
      }
      else for (s = 0; s < r.length; s++) {
        if (i = r[s], u = i.instance, d = i.currentTarget, i = i.listener, u !== o && a.isPropagationStopped()) break e;
        Vs(a, i, d), o = u;
      }
    }
  }
  if (ta) throw e = Ml, ta = !1, Ml = null, e;
}
function K(e, t) {
  var n = t[Gl];
  n === void 0 && (n = t[Gl] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (qu(t, e, 2, !1), n.add(r));
}
function nl(e, t, n) {
  var r = 0;
  t && (r |= 4), qu(n, e, r, t);
}
var Rr = "_reactListening" + Math.random().toString(36).slice(2);
function or(e) {
  if (!e[Rr]) {
    e[Rr] = !0, Zi.forEach(function(n) {
      n !== "selectionchange" && (Yp.has(n) || nl(n, !1, e), nl(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Rr] || (t[Rr] = !0, nl("selectionchange", !1, t));
  }
}
function qu(e, t, n, r) {
  switch (Pu(t)) {
    case 1:
      var a = cp;
      break;
    case 4:
      a = dp;
      break;
    default:
      a = $o;
  }
  n = a.bind(null, t, n, e), a = void 0, !Fl || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (a = !0), r ? a !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: a }) : e.addEventListener(t, n, !0) : a !== void 0 ? e.addEventListener(t, n, { passive: a }) : e.addEventListener(t, n, !1);
}
function rl(e, t, n, r, a) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var s = r.tag;
    if (s === 3 || s === 4) {
      var i = r.stateNode.containerInfo;
      if (i === a || i.nodeType === 8 && i.parentNode === a) break;
      if (s === 4) for (s = r.return; s !== null; ) {
        var u = s.tag;
        if ((u === 3 || u === 4) && (u = s.stateNode.containerInfo, u === a || u.nodeType === 8 && u.parentNode === a)) return;
        s = s.return;
      }
      for (; i !== null; ) {
        if (s = It(i), s === null) return;
        if (u = s.tag, u === 5 || u === 6) {
          r = o = s;
          continue e;
        }
        i = i.parentNode;
      }
    }
    r = r.return;
  }
  mu(function() {
    var d = o, m = Po(n), h = [];
    e: {
      var g = Hu.get(e);
      if (g !== void 0) {
        var y = Oo, S = e;
        switch (e) {
          case "keypress":
            if (Qr(n) === 0) break e;
          case "keydown":
          case "keyup":
            y = Cp;
            break;
          case "focusin":
            S = "focus", y = Ya;
            break;
          case "focusout":
            S = "blur", y = Ya;
            break;
          case "beforeblur":
          case "afterblur":
            y = Ya;
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
            y = Rs;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = hp;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = Pp;
            break;
          case Au:
          case Uu:
          case Bu:
            y = vp;
            break;
          case Vu:
            y = Rp;
            break;
          case "scroll":
            y = pp;
            break;
          case "wheel":
            y = $p;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = xp;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = $s;
        }
        var j = (t & 4) !== 0, _ = !j && e === "scroll", f = j ? g !== null ? g + "Capture" : null : g;
        j = [];
        for (var c = d, p; c !== null; ) {
          p = c;
          var w = p.stateNode;
          if (p.tag === 5 && w !== null && (p = w, f !== null && (w = er(c, f), w != null && j.push(sr(c, w, p)))), _) break;
          c = c.return;
        }
        0 < j.length && (g = new y(g, S, null, n, m), h.push({ event: g, listeners: j }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (g = e === "mouseover" || e === "pointerover", y = e === "mouseout" || e === "pointerout", g && n !== Il && (S = n.relatedTarget || n.fromElement) && (It(S) || S[ut])) break e;
        if ((y || g) && (g = m.window === m ? m : (g = m.ownerDocument) ? g.defaultView || g.parentWindow : window, y ? (S = n.relatedTarget || n.toElement, y = d, S = S ? It(S) : null, S !== null && (_ = Wt(S), S !== _ || S.tag !== 5 && S.tag !== 6) && (S = null)) : (y = null, S = d), y !== S)) {
          if (j = Rs, w = "onMouseLeave", f = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (j = $s, w = "onPointerLeave", f = "onPointerEnter", c = "pointer"), _ = y == null ? g : rn(y), p = S == null ? g : rn(S), g = new j(w, c + "leave", y, n, m), g.target = _, g.relatedTarget = p, w = null, It(m) === d && (j = new j(f, c + "enter", S, n, m), j.target = p, j.relatedTarget = _, w = j), _ = w, y && S) t: {
            for (j = y, f = S, c = 0, p = j; p; p = Gt(p)) c++;
            for (p = 0, w = f; w; w = Gt(w)) p++;
            for (; 0 < c - p; ) j = Gt(j), c--;
            for (; 0 < p - c; ) f = Gt(f), p--;
            for (; c--; ) {
              if (j === f || f !== null && j === f.alternate) break t;
              j = Gt(j), f = Gt(f);
            }
            j = null;
          }
          else j = null;
          y !== null && Hs(h, g, y, j, !1), S !== null && _ !== null && Hs(h, _, S, j, !0);
        }
      }
      e: {
        if (g = d ? rn(d) : window, y = g.nodeName && g.nodeName.toLowerCase(), y === "select" || y === "input" && g.type === "file") var x = Ap;
        else if (Is(g)) if (Ou) x = Hp;
        else {
          x = Bp;
          var b = Up;
        }
        else (y = g.nodeName) && y.toLowerCase() === "input" && (g.type === "checkbox" || g.type === "radio") && (x = Vp);
        if (x && (x = x(e, d))) {
          Lu(h, x, n, m);
          break e;
        }
        b && b(e, g, d), e === "focusout" && (b = g._wrapperState) && b.controlled && g.type === "number" && Rl(g, "number", g.value);
      }
      switch (b = d ? rn(d) : window, e) {
        case "focusin":
          (Is(b) || b.contentEditable === "true") && (tn = b, Vl = d, Wn = null);
          break;
        case "focusout":
          Wn = Vl = tn = null;
          break;
        case "mousedown":
          Hl = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Hl = !1, Us(h, n, m);
          break;
        case "selectionchange":
          if (Wp) break;
        case "keydown":
        case "keyup":
          Us(h, n, m);
      }
      var P;
      if (Do) e: {
        switch (e) {
          case "compositionstart":
            var E = "onCompositionStart";
            break e;
          case "compositionend":
            E = "onCompositionEnd";
            break e;
          case "compositionupdate":
            E = "onCompositionUpdate";
            break e;
        }
        E = void 0;
      }
      else en ? zu(e, n) && (E = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (E = "onCompositionStart");
      E && (Ru && n.locale !== "ko" && (en || E !== "onCompositionStart" ? E === "onCompositionEnd" && en && (P = Tu()) : (yt = m, Lo = "value" in yt ? yt.value : yt.textContent, en = !0)), b = oa(d, E), 0 < b.length && (E = new zs(E, e, null, n, m), h.push({ event: E, listeners: b }), P ? E.data = P : (P = $u(n), P !== null && (E.data = P)))), (P = Op ? Ip(e, n) : Dp(e, n)) && (d = oa(d, "onBeforeInput"), 0 < d.length && (m = new zs("onBeforeInput", "beforeinput", null, n, m), h.push({ event: m, listeners: d }), m.data = P));
    }
    Qu(h, t);
  });
}
function sr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function oa(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var a = e, o = a.stateNode;
    a.tag === 5 && o !== null && (a = o, o = er(e, n), o != null && r.unshift(sr(e, o, a)), o = er(e, t), o != null && r.push(sr(e, o, a))), e = e.return;
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
function Hs(e, t, n, r, a) {
  for (var o = t._reactName, s = []; n !== null && n !== r; ) {
    var i = n, u = i.alternate, d = i.stateNode;
    if (u !== null && u === r) break;
    i.tag === 5 && d !== null && (i = d, a ? (u = er(n, o), u != null && s.unshift(sr(n, u, i))) : a || (u = er(n, o), u != null && s.push(sr(n, u, i)))), n = n.return;
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var Xp = /\r\n?/g, Jp = /\u0000|\uFFFD/g;
function Qs(e) {
  return (typeof e == "string" ? e : "" + e).replace(Xp, `
`).replace(Jp, "");
}
function zr(e, t, n) {
  if (t = Qs(t), Qs(e) !== t && n) throw Error(k(425));
}
function sa() {
}
var Ql = null, ql = null;
function Wl(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Kl = typeof setTimeout == "function" ? setTimeout : void 0, Zp = typeof clearTimeout == "function" ? clearTimeout : void 0, qs = typeof Promise == "function" ? Promise : void 0, ef = typeof queueMicrotask == "function" ? queueMicrotask : typeof qs < "u" ? function(e) {
  return qs.resolve(null).then(e).catch(tf);
} : Kl;
function tf(e) {
  setTimeout(function() {
    throw e;
  });
}
function al(e, t) {
  var n = t, r = 0;
  do {
    var a = n.nextSibling;
    if (e.removeChild(n), a && a.nodeType === 8) if (n = a.data, n === "/$") {
      if (r === 0) {
        e.removeChild(a), rr(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = a;
  } while (n);
  rr(t);
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
function Ws(e) {
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
var bn = Math.random().toString(36).slice(2), Xe = "__reactFiber$" + bn, ir = "__reactProps$" + bn, ut = "__reactContainer$" + bn, Gl = "__reactEvents$" + bn, nf = "__reactListeners$" + bn, rf = "__reactHandles$" + bn;
function It(e) {
  var t = e[Xe];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[ut] || n[Xe]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Ws(e); e !== null; ) {
        if (n = e[Xe]) return n;
        e = Ws(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function yr(e) {
  return e = e[Xe] || e[ut], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function rn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(k(33));
}
function Pa(e) {
  return e[ir] || null;
}
var Yl = [], an = -1;
function Rt(e) {
  return { current: e };
}
function G(e) {
  0 > an || (e.current = Yl[an], Yl[an] = null, an--);
}
function W(e, t) {
  an++, Yl[an] = e.current, e.current = t;
}
var Pt = {}, he = Rt(Pt), _e = Rt(!1), Ut = Pt;
function jn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Pt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var a = {}, o;
  for (o in n) a[o] = t[o];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = a), a;
}
function Ne(e) {
  return e = e.childContextTypes, e != null;
}
function ia() {
  G(_e), G(he);
}
function Ks(e, t, n) {
  if (he.current !== Pt) throw Error(k(168));
  W(he, t), W(_e, n);
}
function Wu(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var a in r) if (!(a in t)) throw Error(k(108, Ud(e) || "Unknown", a));
  return Z({}, n, r);
}
function ua(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Pt, Ut = he.current, W(he, e), W(_e, _e.current), !0;
}
function Gs(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(k(169));
  n ? (e = Wu(e, t, Ut), r.__reactInternalMemoizedMergedChildContext = e, G(_e), G(he), W(he, e)) : G(_e), W(_e, n);
}
var at = null, Ta = !1, ll = !1;
function Ku(e) {
  at === null ? at = [e] : at.push(e);
}
function af(e) {
  Ta = !0, Ku(e);
}
function zt() {
  if (!ll && at !== null) {
    ll = !0;
    var e = 0, t = Q;
    try {
      var n = at;
      for (Q = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      at = null, Ta = !1;
    } catch (a) {
      throw at !== null && (at = at.slice(e + 1)), xu(To, zt), a;
    } finally {
      Q = t, ll = !1;
    }
  }
  return null;
}
var ln = [], on = 0, ca = null, da = 0, Le = [], Oe = 0, Bt = null, lt = 1, ot = "";
function Lt(e, t) {
  ln[on++] = da, ln[on++] = ca, ca = e, da = t;
}
function Gu(e, t, n) {
  Le[Oe++] = lt, Le[Oe++] = ot, Le[Oe++] = Bt, Bt = e;
  var r = lt;
  e = ot;
  var a = 32 - He(r) - 1;
  r &= ~(1 << a), n += 1;
  var o = 32 - He(t) + a;
  if (30 < o) {
    var s = a - a % 5;
    o = (r & (1 << s) - 1).toString(32), r >>= s, a -= s, lt = 1 << 32 - He(t) + a | n << a | r, ot = o + e;
  } else lt = 1 << o | n << a | r, ot = e;
}
function Mo(e) {
  e.return !== null && (Lt(e, 1), Gu(e, 1, 0));
}
function Ao(e) {
  for (; e === ca; ) ca = ln[--on], ln[on] = null, da = ln[--on], ln[on] = null;
  for (; e === Bt; ) Bt = Le[--Oe], Le[Oe] = null, ot = Le[--Oe], Le[Oe] = null, lt = Le[--Oe], Le[Oe] = null;
}
var Te = null, Pe = null, Y = !1, Ve = null;
function Yu(e, t) {
  var n = Ie(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Ys(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Te = e, Pe = _t(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Te = e, Pe = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Bt !== null ? { id: lt, overflow: ot } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Ie(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Te = e, Pe = null, !0) : !1;
    default:
      return !1;
  }
}
function Xl(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Jl(e) {
  if (Y) {
    var t = Pe;
    if (t) {
      var n = t;
      if (!Ys(e, t)) {
        if (Xl(e)) throw Error(k(418));
        t = _t(n.nextSibling);
        var r = Te;
        t && Ys(e, t) ? Yu(r, n) : (e.flags = e.flags & -4097 | 2, Y = !1, Te = e);
      }
    } else {
      if (Xl(e)) throw Error(k(418));
      e.flags = e.flags & -4097 | 2, Y = !1, Te = e;
    }
  }
}
function Xs(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Te = e;
}
function $r(e) {
  if (e !== Te) return !1;
  if (!Y) return Xs(e), Y = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Wl(e.type, e.memoizedProps)), t && (t = Pe)) {
    if (Xl(e)) throw Xu(), Error(k(418));
    for (; t; ) Yu(e, t), t = _t(t.nextSibling);
  }
  if (Xs(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(k(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Pe = _t(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Pe = null;
    }
  } else Pe = Te ? _t(e.stateNode.nextSibling) : null;
  return !0;
}
function Xu() {
  for (var e = Pe; e; ) e = _t(e.nextSibling);
}
function Sn() {
  Pe = Te = null, Y = !1;
}
function Uo(e) {
  Ve === null ? Ve = [e] : Ve.push(e);
}
var lf = pt.ReactCurrentBatchConfig;
function On(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(k(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(k(147, e));
      var a = r, o = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(s) {
        var i = a.refs;
        s === null ? delete i[o] : i[o] = s;
      }, t._stringRef = o, t);
    }
    if (typeof e != "string") throw Error(k(284));
    if (!n._owner) throw Error(k(290, e));
  }
  return e;
}
function Lr(e, t) {
  throw e = Object.prototype.toString.call(t), Error(k(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Js(e) {
  var t = e._init;
  return t(e._payload);
}
function Ju(e) {
  function t(f, c) {
    if (e) {
      var p = f.deletions;
      p === null ? (f.deletions = [c], f.flags |= 16) : p.push(c);
    }
  }
  function n(f, c) {
    if (!e) return null;
    for (; c !== null; ) t(f, c), c = c.sibling;
    return null;
  }
  function r(f, c) {
    for (f = /* @__PURE__ */ new Map(); c !== null; ) c.key !== null ? f.set(c.key, c) : f.set(c.index, c), c = c.sibling;
    return f;
  }
  function a(f, c) {
    return f = Et(f, c), f.index = 0, f.sibling = null, f;
  }
  function o(f, c, p) {
    return f.index = p, e ? (p = f.alternate, p !== null ? (p = p.index, p < c ? (f.flags |= 2, c) : p) : (f.flags |= 2, c)) : (f.flags |= 1048576, c);
  }
  function s(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function i(f, c, p, w) {
    return c === null || c.tag !== 6 ? (c = pl(p, f.mode, w), c.return = f, c) : (c = a(c, p), c.return = f, c);
  }
  function u(f, c, p, w) {
    var x = p.type;
    return x === Zt ? m(f, c, p.props.children, w, p.key) : c !== null && (c.elementType === x || typeof x == "object" && x !== null && x.$$typeof === ht && Js(x) === c.type) ? (w = a(c, p.props), w.ref = On(f, c, p), w.return = f, w) : (w = Jr(p.type, p.key, p.props, null, f.mode, w), w.ref = On(f, c, p), w.return = f, w);
  }
  function d(f, c, p, w) {
    return c === null || c.tag !== 4 || c.stateNode.containerInfo !== p.containerInfo || c.stateNode.implementation !== p.implementation ? (c = fl(p, f.mode, w), c.return = f, c) : (c = a(c, p.children || []), c.return = f, c);
  }
  function m(f, c, p, w, x) {
    return c === null || c.tag !== 7 ? (c = At(p, f.mode, w, x), c.return = f, c) : (c = a(c, p), c.return = f, c);
  }
  function h(f, c, p) {
    if (typeof c == "string" && c !== "" || typeof c == "number") return c = pl("" + c, f.mode, p), c.return = f, c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case _r:
          return p = Jr(c.type, c.key, c.props, null, f.mode, p), p.ref = On(f, null, c), p.return = f, p;
        case Jt:
          return c = fl(c, f.mode, p), c.return = f, c;
        case ht:
          var w = c._init;
          return h(f, w(c._payload), p);
      }
      if (Mn(c) || Tn(c)) return c = At(c, f.mode, p, null), c.return = f, c;
      Lr(f, c);
    }
    return null;
  }
  function g(f, c, p, w) {
    var x = c !== null ? c.key : null;
    if (typeof p == "string" && p !== "" || typeof p == "number") return x !== null ? null : i(f, c, "" + p, w);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case _r:
          return p.key === x ? u(f, c, p, w) : null;
        case Jt:
          return p.key === x ? d(f, c, p, w) : null;
        case ht:
          return x = p._init, g(
            f,
            c,
            x(p._payload),
            w
          );
      }
      if (Mn(p) || Tn(p)) return x !== null ? null : m(f, c, p, w, null);
      Lr(f, p);
    }
    return null;
  }
  function y(f, c, p, w, x) {
    if (typeof w == "string" && w !== "" || typeof w == "number") return f = f.get(p) || null, i(c, f, "" + w, x);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case _r:
          return f = f.get(w.key === null ? p : w.key) || null, u(c, f, w, x);
        case Jt:
          return f = f.get(w.key === null ? p : w.key) || null, d(c, f, w, x);
        case ht:
          var b = w._init;
          return y(f, c, p, b(w._payload), x);
      }
      if (Mn(w) || Tn(w)) return f = f.get(p) || null, m(c, f, w, x, null);
      Lr(c, w);
    }
    return null;
  }
  function S(f, c, p, w) {
    for (var x = null, b = null, P = c, E = c = 0, A = null; P !== null && E < p.length; E++) {
      P.index > E ? (A = P, P = null) : A = P.sibling;
      var R = g(f, P, p[E], w);
      if (R === null) {
        P === null && (P = A);
        break;
      }
      e && P && R.alternate === null && t(f, P), c = o(R, c, E), b === null ? x = R : b.sibling = R, b = R, P = A;
    }
    if (E === p.length) return n(f, P), Y && Lt(f, E), x;
    if (P === null) {
      for (; E < p.length; E++) P = h(f, p[E], w), P !== null && (c = o(P, c, E), b === null ? x = P : b.sibling = P, b = P);
      return Y && Lt(f, E), x;
    }
    for (P = r(f, P); E < p.length; E++) A = y(P, f, E, p[E], w), A !== null && (e && A.alternate !== null && P.delete(A.key === null ? E : A.key), c = o(A, c, E), b === null ? x = A : b.sibling = A, b = A);
    return e && P.forEach(function(V) {
      return t(f, V);
    }), Y && Lt(f, E), x;
  }
  function j(f, c, p, w) {
    var x = Tn(p);
    if (typeof x != "function") throw Error(k(150));
    if (p = x.call(p), p == null) throw Error(k(151));
    for (var b = x = null, P = c, E = c = 0, A = null, R = p.next(); P !== null && !R.done; E++, R = p.next()) {
      P.index > E ? (A = P, P = null) : A = P.sibling;
      var V = g(f, P, R.value, w);
      if (V === null) {
        P === null && (P = A);
        break;
      }
      e && P && V.alternate === null && t(f, P), c = o(V, c, E), b === null ? x = V : b.sibling = V, b = V, P = A;
    }
    if (R.done) return n(
      f,
      P
    ), Y && Lt(f, E), x;
    if (P === null) {
      for (; !R.done; E++, R = p.next()) R = h(f, R.value, w), R !== null && (c = o(R, c, E), b === null ? x = R : b.sibling = R, b = R);
      return Y && Lt(f, E), x;
    }
    for (P = r(f, P); !R.done; E++, R = p.next()) R = y(P, f, E, R.value, w), R !== null && (e && R.alternate !== null && P.delete(R.key === null ? E : R.key), c = o(R, c, E), b === null ? x = R : b.sibling = R, b = R);
    return e && P.forEach(function(I) {
      return t(f, I);
    }), Y && Lt(f, E), x;
  }
  function _(f, c, p, w) {
    if (typeof p == "object" && p !== null && p.type === Zt && p.key === null && (p = p.props.children), typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case _r:
          e: {
            for (var x = p.key, b = c; b !== null; ) {
              if (b.key === x) {
                if (x = p.type, x === Zt) {
                  if (b.tag === 7) {
                    n(f, b.sibling), c = a(b, p.props.children), c.return = f, f = c;
                    break e;
                  }
                } else if (b.elementType === x || typeof x == "object" && x !== null && x.$$typeof === ht && Js(x) === b.type) {
                  n(f, b.sibling), c = a(b, p.props), c.ref = On(f, b, p), c.return = f, f = c;
                  break e;
                }
                n(f, b);
                break;
              } else t(f, b);
              b = b.sibling;
            }
            p.type === Zt ? (c = At(p.props.children, f.mode, w, p.key), c.return = f, f = c) : (w = Jr(p.type, p.key, p.props, null, f.mode, w), w.ref = On(f, c, p), w.return = f, f = w);
          }
          return s(f);
        case Jt:
          e: {
            for (b = p.key; c !== null; ) {
              if (c.key === b) if (c.tag === 4 && c.stateNode.containerInfo === p.containerInfo && c.stateNode.implementation === p.implementation) {
                n(f, c.sibling), c = a(c, p.children || []), c.return = f, f = c;
                break e;
              } else {
                n(f, c);
                break;
              }
              else t(f, c);
              c = c.sibling;
            }
            c = fl(p, f.mode, w), c.return = f, f = c;
          }
          return s(f);
        case ht:
          return b = p._init, _(f, c, b(p._payload), w);
      }
      if (Mn(p)) return S(f, c, p, w);
      if (Tn(p)) return j(f, c, p, w);
      Lr(f, p);
    }
    return typeof p == "string" && p !== "" || typeof p == "number" ? (p = "" + p, c !== null && c.tag === 6 ? (n(f, c.sibling), c = a(c, p), c.return = f, f = c) : (n(f, c), c = pl(p, f.mode, w), c.return = f, f = c), s(f)) : n(f, c);
  }
  return _;
}
var wn = Ju(!0), Zu = Ju(!1), pa = Rt(null), fa = null, sn = null, Bo = null;
function Vo() {
  Bo = sn = fa = null;
}
function Ho(e) {
  var t = pa.current;
  G(pa), e._currentValue = t;
}
function Zl(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function gn(e, t) {
  fa = e, Bo = sn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Se = !0), e.firstContext = null);
}
function Fe(e) {
  var t = e._currentValue;
  if (Bo !== e) if (e = { context: e, memoizedValue: t, next: null }, sn === null) {
    if (fa === null) throw Error(k(308));
    sn = e, fa.dependencies = { lanes: 0, firstContext: e };
  } else sn = sn.next = e;
  return t;
}
var Dt = null;
function Qo(e) {
  Dt === null ? Dt = [e] : Dt.push(e);
}
function ec(e, t, n, r) {
  var a = t.interleaved;
  return a === null ? (n.next = n, Qo(t)) : (n.next = a.next, a.next = n), t.interleaved = n, ct(e, r);
}
function ct(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var mt = !1;
function qo(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function tc(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function st(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Nt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, B & 2) {
    var a = r.pending;
    return a === null ? t.next = t : (t.next = a.next, a.next = t), r.pending = t, ct(e, n);
  }
  return a = r.interleaved, a === null ? (t.next = t, Qo(r)) : (t.next = a.next, a.next = t), r.interleaved = t, ct(e, n);
}
function qr(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Ro(e, n);
  }
}
function Zs(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var a = null, o = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var s = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        o === null ? a = o = s : o = o.next = s, n = n.next;
      } while (n !== null);
      o === null ? a = o = t : o = o.next = t;
    } else a = o = t;
    n = { baseState: r.baseState, firstBaseUpdate: a, lastBaseUpdate: o, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function ha(e, t, n, r) {
  var a = e.updateQueue;
  mt = !1;
  var o = a.firstBaseUpdate, s = a.lastBaseUpdate, i = a.shared.pending;
  if (i !== null) {
    a.shared.pending = null;
    var u = i, d = u.next;
    u.next = null, s === null ? o = d : s.next = d, s = u;
    var m = e.alternate;
    m !== null && (m = m.updateQueue, i = m.lastBaseUpdate, i !== s && (i === null ? m.firstBaseUpdate = d : i.next = d, m.lastBaseUpdate = u));
  }
  if (o !== null) {
    var h = a.baseState;
    s = 0, m = d = u = null, i = o;
    do {
      var g = i.lane, y = i.eventTime;
      if ((r & g) === g) {
        m !== null && (m = m.next = {
          eventTime: y,
          lane: 0,
          tag: i.tag,
          payload: i.payload,
          callback: i.callback,
          next: null
        });
        e: {
          var S = e, j = i;
          switch (g = t, y = n, j.tag) {
            case 1:
              if (S = j.payload, typeof S == "function") {
                h = S.call(y, h, g);
                break e;
              }
              h = S;
              break e;
            case 3:
              S.flags = S.flags & -65537 | 128;
            case 0:
              if (S = j.payload, g = typeof S == "function" ? S.call(y, h, g) : S, g == null) break e;
              h = Z({}, h, g);
              break e;
            case 2:
              mt = !0;
          }
        }
        i.callback !== null && i.lane !== 0 && (e.flags |= 64, g = a.effects, g === null ? a.effects = [i] : g.push(i));
      } else y = { eventTime: y, lane: g, tag: i.tag, payload: i.payload, callback: i.callback, next: null }, m === null ? (d = m = y, u = h) : m = m.next = y, s |= g;
      if (i = i.next, i === null) {
        if (i = a.shared.pending, i === null) break;
        g = i, i = g.next, g.next = null, a.lastBaseUpdate = g, a.shared.pending = null;
      }
    } while (!0);
    if (m === null && (u = h), a.baseState = u, a.firstBaseUpdate = d, a.lastBaseUpdate = m, t = a.shared.interleaved, t !== null) {
      a = t;
      do
        s |= a.lane, a = a.next;
      while (a !== t);
    } else o === null && (a.shared.lanes = 0);
    Ht |= s, e.lanes = s, e.memoizedState = h;
  }
}
function ei(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], a = r.callback;
    if (a !== null) {
      if (r.callback = null, r = n, typeof a != "function") throw Error(k(191, a));
      a.call(r);
    }
  }
}
var xr = {}, Ze = Rt(xr), ur = Rt(xr), cr = Rt(xr);
function Ft(e) {
  if (e === xr) throw Error(k(174));
  return e;
}
function Wo(e, t) {
  switch (W(cr, t), W(ur, e), W(Ze, xr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : $l(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = $l(t, e);
  }
  G(Ze), W(Ze, t);
}
function _n() {
  G(Ze), G(ur), G(cr);
}
function nc(e) {
  Ft(cr.current);
  var t = Ft(Ze.current), n = $l(t, e.type);
  t !== n && (W(ur, e), W(Ze, n));
}
function Ko(e) {
  ur.current === e && (G(Ze), G(ur));
}
var X = Rt(0);
function ma(e) {
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
var ol = [];
function Go() {
  for (var e = 0; e < ol.length; e++) ol[e]._workInProgressVersionPrimary = null;
  ol.length = 0;
}
var Wr = pt.ReactCurrentDispatcher, sl = pt.ReactCurrentBatchConfig, Vt = 0, J = null, re = null, le = null, ga = !1, Kn = !1, dr = 0, of = 0;
function de() {
  throw Error(k(321));
}
function Yo(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!qe(e[n], t[n])) return !1;
  return !0;
}
function Xo(e, t, n, r, a, o) {
  if (Vt = o, J = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Wr.current = e === null || e.memoizedState === null ? df : pf, e = n(r, a), Kn) {
    o = 0;
    do {
      if (Kn = !1, dr = 0, 25 <= o) throw Error(k(301));
      o += 1, le = re = null, t.updateQueue = null, Wr.current = ff, e = n(r, a);
    } while (Kn);
  }
  if (Wr.current = va, t = re !== null && re.next !== null, Vt = 0, le = re = J = null, ga = !1, t) throw Error(k(300));
  return e;
}
function Jo() {
  var e = dr !== 0;
  return dr = 0, e;
}
function Ye() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return le === null ? J.memoizedState = le = e : le = le.next = e, le;
}
function Me() {
  if (re === null) {
    var e = J.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = re.next;
  var t = le === null ? J.memoizedState : le.next;
  if (t !== null) le = t, re = e;
  else {
    if (e === null) throw Error(k(310));
    re = e, e = { memoizedState: re.memoizedState, baseState: re.baseState, baseQueue: re.baseQueue, queue: re.queue, next: null }, le === null ? J.memoizedState = le = e : le = le.next = e;
  }
  return le;
}
function pr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function il(e) {
  var t = Me(), n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = re, a = r.baseQueue, o = n.pending;
  if (o !== null) {
    if (a !== null) {
      var s = a.next;
      a.next = o.next, o.next = s;
    }
    r.baseQueue = a = o, n.pending = null;
  }
  if (a !== null) {
    o = a.next, r = r.baseState;
    var i = s = null, u = null, d = o;
    do {
      var m = d.lane;
      if ((Vt & m) === m) u !== null && (u = u.next = { lane: 0, action: d.action, hasEagerState: d.hasEagerState, eagerState: d.eagerState, next: null }), r = d.hasEagerState ? d.eagerState : e(r, d.action);
      else {
        var h = {
          lane: m,
          action: d.action,
          hasEagerState: d.hasEagerState,
          eagerState: d.eagerState,
          next: null
        };
        u === null ? (i = u = h, s = r) : u = u.next = h, J.lanes |= m, Ht |= m;
      }
      d = d.next;
    } while (d !== null && d !== o);
    u === null ? s = r : u.next = i, qe(r, t.memoizedState) || (Se = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = u, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    a = e;
    do
      o = a.lane, J.lanes |= o, Ht |= o, a = a.next;
    while (a !== e);
  } else a === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ul(e) {
  var t = Me(), n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, a = n.pending, o = t.memoizedState;
  if (a !== null) {
    n.pending = null;
    var s = a = a.next;
    do
      o = e(o, s.action), s = s.next;
    while (s !== a);
    qe(o, t.memoizedState) || (Se = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
  }
  return [o, r];
}
function rc() {
}
function ac(e, t) {
  var n = J, r = Me(), a = t(), o = !qe(r.memoizedState, a);
  if (o && (r.memoizedState = a, Se = !0), r = r.queue, Zo(sc.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || le !== null && le.memoizedState.tag & 1) {
    if (n.flags |= 2048, fr(9, oc.bind(null, n, r, a, t), void 0, null), oe === null) throw Error(k(349));
    Vt & 30 || lc(n, t, a);
  }
  return a;
}
function lc(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = J.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, J.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function oc(e, t, n, r) {
  t.value = n, t.getSnapshot = r, ic(t) && uc(e);
}
function sc(e, t, n) {
  return n(function() {
    ic(t) && uc(e);
  });
}
function ic(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !qe(e, n);
  } catch {
    return !0;
  }
}
function uc(e) {
  var t = ct(e, 1);
  t !== null && Qe(t, e, 1, -1);
}
function ti(e) {
  var t = Ye();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: pr, lastRenderedState: e }, t.queue = e, e = e.dispatch = cf.bind(null, J, e), [t.memoizedState, e];
}
function fr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = J.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, J.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function cc() {
  return Me().memoizedState;
}
function Kr(e, t, n, r) {
  var a = Ye();
  J.flags |= e, a.memoizedState = fr(1 | t, n, void 0, r === void 0 ? null : r);
}
function Ra(e, t, n, r) {
  var a = Me();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (re !== null) {
    var s = re.memoizedState;
    if (o = s.destroy, r !== null && Yo(r, s.deps)) {
      a.memoizedState = fr(t, n, o, r);
      return;
    }
  }
  J.flags |= e, a.memoizedState = fr(1 | t, n, o, r);
}
function ni(e, t) {
  return Kr(8390656, 8, e, t);
}
function Zo(e, t) {
  return Ra(2048, 8, e, t);
}
function dc(e, t) {
  return Ra(4, 2, e, t);
}
function pc(e, t) {
  return Ra(4, 4, e, t);
}
function fc(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function hc(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Ra(4, 4, fc.bind(null, t, e), n);
}
function es() {
}
function mc(e, t) {
  var n = Me();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Yo(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function gc(e, t) {
  var n = Me();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Yo(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function vc(e, t, n) {
  return Vt & 21 ? (qe(n, t) || (n = wu(), J.lanes |= n, Ht |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Se = !0), e.memoizedState = n);
}
function sf(e, t) {
  var n = Q;
  Q = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = sl.transition;
  sl.transition = {};
  try {
    e(!1), t();
  } finally {
    Q = n, sl.transition = r;
  }
}
function yc() {
  return Me().memoizedState;
}
function uf(e, t, n) {
  var r = Ct(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, xc(e)) jc(t, n);
  else if (n = ec(e, t, n, r), n !== null) {
    var a = ve();
    Qe(n, e, r, a), Sc(n, t, r);
  }
}
function cf(e, t, n) {
  var r = Ct(e), a = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (xc(e)) jc(t, a);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
      var s = t.lastRenderedState, i = o(s, n);
      if (a.hasEagerState = !0, a.eagerState = i, qe(i, s)) {
        var u = t.interleaved;
        u === null ? (a.next = a, Qo(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
        return;
      }
    } catch {
    } finally {
    }
    n = ec(e, t, a, r), n !== null && (a = ve(), Qe(n, e, r, a), Sc(n, t, r));
  }
}
function xc(e) {
  var t = e.alternate;
  return e === J || t !== null && t === J;
}
function jc(e, t) {
  Kn = ga = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Sc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Ro(e, n);
  }
}
var va = { readContext: Fe, useCallback: de, useContext: de, useEffect: de, useImperativeHandle: de, useInsertionEffect: de, useLayoutEffect: de, useMemo: de, useReducer: de, useRef: de, useState: de, useDebugValue: de, useDeferredValue: de, useTransition: de, useMutableSource: de, useSyncExternalStore: de, useId: de, unstable_isNewReconciler: !1 }, df = { readContext: Fe, useCallback: function(e, t) {
  return Ye().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Fe, useEffect: ni, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Kr(
    4194308,
    4,
    fc.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Kr(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Kr(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Ye();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Ye();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = uf.bind(null, J, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Ye();
  return e = { current: e }, t.memoizedState = e;
}, useState: ti, useDebugValue: es, useDeferredValue: function(e) {
  return Ye().memoizedState = e;
}, useTransition: function() {
  var e = ti(!1), t = e[0];
  return e = sf.bind(null, e[1]), Ye().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = J, a = Ye();
  if (Y) {
    if (n === void 0) throw Error(k(407));
    n = n();
  } else {
    if (n = t(), oe === null) throw Error(k(349));
    Vt & 30 || lc(r, t, n);
  }
  a.memoizedState = n;
  var o = { value: n, getSnapshot: t };
  return a.queue = o, ni(sc.bind(
    null,
    r,
    o,
    e
  ), [e]), r.flags |= 2048, fr(9, oc.bind(null, r, o, n, t), void 0, null), n;
}, useId: function() {
  var e = Ye(), t = oe.identifierPrefix;
  if (Y) {
    var n = ot, r = lt;
    n = (r & ~(1 << 32 - He(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = dr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = of++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, pf = {
  readContext: Fe,
  useCallback: mc,
  useContext: Fe,
  useEffect: Zo,
  useImperativeHandle: hc,
  useInsertionEffect: dc,
  useLayoutEffect: pc,
  useMemo: gc,
  useReducer: il,
  useRef: cc,
  useState: function() {
    return il(pr);
  },
  useDebugValue: es,
  useDeferredValue: function(e) {
    var t = Me();
    return vc(t, re.memoizedState, e);
  },
  useTransition: function() {
    var e = il(pr)[0], t = Me().memoizedState;
    return [e, t];
  },
  useMutableSource: rc,
  useSyncExternalStore: ac,
  useId: yc,
  unstable_isNewReconciler: !1
}, ff = { readContext: Fe, useCallback: mc, useContext: Fe, useEffect: Zo, useImperativeHandle: hc, useInsertionEffect: dc, useLayoutEffect: pc, useMemo: gc, useReducer: ul, useRef: cc, useState: function() {
  return ul(pr);
}, useDebugValue: es, useDeferredValue: function(e) {
  var t = Me();
  return re === null ? t.memoizedState = e : vc(t, re.memoizedState, e);
}, useTransition: function() {
  var e = ul(pr)[0], t = Me().memoizedState;
  return [e, t];
}, useMutableSource: rc, useSyncExternalStore: ac, useId: yc, unstable_isNewReconciler: !1 };
function Ue(e, t) {
  if (e && e.defaultProps) {
    t = Z({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function eo(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : Z({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var za = { isMounted: function(e) {
  return (e = e._reactInternals) ? Wt(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = ve(), a = Ct(e), o = st(r, a);
  o.payload = t, n != null && (o.callback = n), t = Nt(e, o, a), t !== null && (Qe(t, e, a, r), qr(t, e, a));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = ve(), a = Ct(e), o = st(r, a);
  o.tag = 1, o.payload = t, n != null && (o.callback = n), t = Nt(e, o, a), t !== null && (Qe(t, e, a, r), qr(t, e, a));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = ve(), r = Ct(e), a = st(n, r);
  a.tag = 2, t != null && (a.callback = t), t = Nt(e, a, r), t !== null && (Qe(t, e, r, n), qr(t, e, r));
} };
function ri(e, t, n, r, a, o, s) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, s) : t.prototype && t.prototype.isPureReactComponent ? !lr(n, r) || !lr(a, o) : !0;
}
function wc(e, t, n) {
  var r = !1, a = Pt, o = t.contextType;
  return typeof o == "object" && o !== null ? o = Fe(o) : (a = Ne(t) ? Ut : he.current, r = t.contextTypes, o = (r = r != null) ? jn(e, a) : Pt), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = za, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = a, e.__reactInternalMemoizedMaskedChildContext = o), t;
}
function ai(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && za.enqueueReplaceState(t, t.state, null);
}
function to(e, t, n, r) {
  var a = e.stateNode;
  a.props = n, a.state = e.memoizedState, a.refs = {}, qo(e);
  var o = t.contextType;
  typeof o == "object" && o !== null ? a.context = Fe(o) : (o = Ne(t) ? Ut : he.current, a.context = jn(e, o)), a.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (eo(e, t, o, n), a.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof a.getSnapshotBeforeUpdate == "function" || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (t = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), t !== a.state && za.enqueueReplaceState(a, a.state, null), ha(e, n, a, r), a.state = e.memoizedState), typeof a.componentDidMount == "function" && (e.flags |= 4194308);
}
function Nn(e, t) {
  try {
    var n = "", r = t;
    do
      n += Ad(r), r = r.return;
    while (r);
    var a = n;
  } catch (o) {
    a = `
Error generating stack: ` + o.message + `
` + o.stack;
  }
  return { value: e, source: t, stack: a, digest: null };
}
function cl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function no(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var hf = typeof WeakMap == "function" ? WeakMap : Map;
function _c(e, t, n) {
  n = st(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    xa || (xa = !0, fo = r), no(e, t);
  }, n;
}
function Nc(e, t, n) {
  n = st(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var a = t.value;
    n.payload = function() {
      return r(a);
    }, n.callback = function() {
      no(e, t);
    };
  }
  var o = e.stateNode;
  return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
    no(e, t), typeof r != "function" && (kt === null ? kt = /* @__PURE__ */ new Set([this]) : kt.add(this));
    var s = t.stack;
    this.componentDidCatch(t.value, { componentStack: s !== null ? s : "" });
  }), n;
}
function li(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new hf();
    var a = /* @__PURE__ */ new Set();
    r.set(t, a);
  } else a = r.get(t), a === void 0 && (a = /* @__PURE__ */ new Set(), r.set(t, a));
  a.has(n) || (a.add(n), e = bf.bind(null, e, t, n), t.then(e, e));
}
function oi(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function si(e, t, n, r, a) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = a, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = st(-1, 1), t.tag = 2, Nt(n, t, 1))), n.lanes |= 1), e);
}
var mf = pt.ReactCurrentOwner, Se = !1;
function ge(e, t, n, r) {
  t.child = e === null ? Zu(t, null, n, r) : wn(t, e.child, n, r);
}
function ii(e, t, n, r, a) {
  n = n.render;
  var o = t.ref;
  return gn(t, a), r = Xo(e, t, n, r, o, a), n = Jo(), e !== null && !Se ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, dt(e, t, a)) : (Y && n && Mo(t), t.flags |= 1, ge(e, t, r, a), t.child);
}
function ui(e, t, n, r, a) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" && !is(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, kc(e, t, o, r, a)) : (e = Jr(n.type, null, r, t, t.mode, a), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (o = e.child, !(e.lanes & a)) {
    var s = o.memoizedProps;
    if (n = n.compare, n = n !== null ? n : lr, n(s, r) && e.ref === t.ref) return dt(e, t, a);
  }
  return t.flags |= 1, e = Et(o, r), e.ref = t.ref, e.return = t, t.child = e;
}
function kc(e, t, n, r, a) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (lr(o, r) && e.ref === t.ref) if (Se = !1, t.pendingProps = r = o, (e.lanes & a) !== 0) e.flags & 131072 && (Se = !0);
    else return t.lanes = e.lanes, dt(e, t, a);
  }
  return ro(e, t, n, r, a);
}
function Cc(e, t, n) {
  var r = t.pendingProps, a = r.children, o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, W(cn, be), be |= n;
  else {
    if (!(n & 1073741824)) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, W(cn, be), be |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, W(cn, be), be |= r;
  }
  else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, W(cn, be), be |= r;
  return ge(e, t, a, n), t.child;
}
function Ec(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function ro(e, t, n, r, a) {
  var o = Ne(n) ? Ut : he.current;
  return o = jn(t, o), gn(t, a), n = Xo(e, t, n, r, o, a), r = Jo(), e !== null && !Se ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, dt(e, t, a)) : (Y && r && Mo(t), t.flags |= 1, ge(e, t, n, a), t.child);
}
function ci(e, t, n, r, a) {
  if (Ne(n)) {
    var o = !0;
    ua(t);
  } else o = !1;
  if (gn(t, a), t.stateNode === null) Gr(e, t), wc(t, n, r), to(t, n, r, a), r = !0;
  else if (e === null) {
    var s = t.stateNode, i = t.memoizedProps;
    s.props = i;
    var u = s.context, d = n.contextType;
    typeof d == "object" && d !== null ? d = Fe(d) : (d = Ne(n) ? Ut : he.current, d = jn(t, d));
    var m = n.getDerivedStateFromProps, h = typeof m == "function" || typeof s.getSnapshotBeforeUpdate == "function";
    h || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (i !== r || u !== d) && ai(t, s, r, d), mt = !1;
    var g = t.memoizedState;
    s.state = g, ha(t, r, s, a), u = t.memoizedState, i !== r || g !== u || _e.current || mt ? (typeof m == "function" && (eo(t, n, m, r), u = t.memoizedState), (i = mt || ri(t, n, i, r, g, u, d)) ? (h || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = u), s.props = r, s.state = u, s.context = d, r = i) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    s = t.stateNode, tc(e, t), i = t.memoizedProps, d = t.type === t.elementType ? i : Ue(t.type, i), s.props = d, h = t.pendingProps, g = s.context, u = n.contextType, typeof u == "object" && u !== null ? u = Fe(u) : (u = Ne(n) ? Ut : he.current, u = jn(t, u));
    var y = n.getDerivedStateFromProps;
    (m = typeof y == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (i !== h || g !== u) && ai(t, s, r, u), mt = !1, g = t.memoizedState, s.state = g, ha(t, r, s, a);
    var S = t.memoizedState;
    i !== h || g !== S || _e.current || mt ? (typeof y == "function" && (eo(t, n, y, r), S = t.memoizedState), (d = mt || ri(t, n, d, r, g, S, u) || !1) ? (m || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, S, u), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, S, u)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || i === e.memoizedProps && g === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && g === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = S), s.props = r, s.state = S, s.context = u, r = d) : (typeof s.componentDidUpdate != "function" || i === e.memoizedProps && g === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && g === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return ao(e, t, n, r, o, a);
}
function ao(e, t, n, r, a, o) {
  Ec(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return a && Gs(t, n, !1), dt(e, t, o);
  r = t.stateNode, mf.current = t;
  var i = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && s ? (t.child = wn(t, e.child, null, o), t.child = wn(t, null, i, o)) : ge(e, t, i, o), t.memoizedState = r.state, a && Gs(t, n, !0), t.child;
}
function bc(e) {
  var t = e.stateNode;
  t.pendingContext ? Ks(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Ks(e, t.context, !1), Wo(e, t.containerInfo);
}
function di(e, t, n, r, a) {
  return Sn(), Uo(a), t.flags |= 256, ge(e, t, n, r), t.child;
}
var lo = { dehydrated: null, treeContext: null, retryLane: 0 };
function oo(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Pc(e, t, n) {
  var r = t.pendingProps, a = X.current, o = !1, s = (t.flags & 128) !== 0, i;
  if ((i = s) || (i = e !== null && e.memoizedState === null ? !1 : (a & 2) !== 0), i ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (a |= 1), W(X, a & 1), e === null)
    return Jl(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, s = { mode: "hidden", children: s }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = s) : o = Oa(s, r, 0, null), e = At(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = oo(n), t.memoizedState = lo, e) : ts(t, s));
  if (a = e.memoizedState, a !== null && (i = a.dehydrated, i !== null)) return gf(e, t, s, r, i, a, n);
  if (o) {
    o = r.fallback, s = t.mode, a = e.child, i = a.sibling;
    var u = { mode: "hidden", children: r.children };
    return !(s & 1) && t.child !== a ? (r = t.child, r.childLanes = 0, r.pendingProps = u, t.deletions = null) : (r = Et(a, u), r.subtreeFlags = a.subtreeFlags & 14680064), i !== null ? o = Et(i, o) : (o = At(o, s, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, s = e.child.memoizedState, s = s === null ? oo(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }, o.memoizedState = s, o.childLanes = e.childLanes & ~n, t.memoizedState = lo, r;
  }
  return o = e.child, e = o.sibling, r = Et(o, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function ts(e, t) {
  return t = Oa({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Or(e, t, n, r) {
  return r !== null && Uo(r), wn(t, e.child, null, n), e = ts(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function gf(e, t, n, r, a, o, s) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = cl(Error(k(422))), Or(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, a = t.mode, r = Oa({ mode: "visible", children: r.children }, a, 0, null), o = At(o, a, s, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && wn(t, e.child, null, s), t.child.memoizedState = oo(s), t.memoizedState = lo, o);
  if (!(t.mode & 1)) return Or(e, t, s, null);
  if (a.data === "$!") {
    if (r = a.nextSibling && a.nextSibling.dataset, r) var i = r.dgst;
    return r = i, o = Error(k(419)), r = cl(o, r, void 0), Or(e, t, s, r);
  }
  if (i = (s & e.childLanes) !== 0, Se || i) {
    if (r = oe, r !== null) {
      switch (s & -s) {
        case 4:
          a = 2;
          break;
        case 16:
          a = 8;
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
          a = 32;
          break;
        case 536870912:
          a = 268435456;
          break;
        default:
          a = 0;
      }
      a = a & (r.suspendedLanes | s) ? 0 : a, a !== 0 && a !== o.retryLane && (o.retryLane = a, ct(e, a), Qe(r, e, a, -1));
    }
    return ss(), r = cl(Error(k(421))), Or(e, t, s, r);
  }
  return a.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Pf.bind(null, e), a._reactRetry = t, null) : (e = o.treeContext, Pe = _t(a.nextSibling), Te = t, Y = !0, Ve = null, e !== null && (Le[Oe++] = lt, Le[Oe++] = ot, Le[Oe++] = Bt, lt = e.id, ot = e.overflow, Bt = t), t = ts(t, r.children), t.flags |= 4096, t);
}
function pi(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Zl(e.return, t, n);
}
function dl(e, t, n, r, a) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: a } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = a);
}
function Tc(e, t, n) {
  var r = t.pendingProps, a = r.revealOrder, o = r.tail;
  if (ge(e, t, r.children, n), r = X.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && pi(e, n, t);
      else if (e.tag === 19) pi(e, n, t);
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
  if (W(X, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (a) {
    case "forwards":
      for (n = t.child, a = null; n !== null; ) e = n.alternate, e !== null && ma(e) === null && (a = n), n = n.sibling;
      n = a, n === null ? (a = t.child, t.child = null) : (a = n.sibling, n.sibling = null), dl(t, !1, a, n, o);
      break;
    case "backwards":
      for (n = null, a = t.child, t.child = null; a !== null; ) {
        if (e = a.alternate, e !== null && ma(e) === null) {
          t.child = a;
          break;
        }
        e = a.sibling, a.sibling = n, n = a, a = e;
      }
      dl(t, !0, n, null, o);
      break;
    case "together":
      dl(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Gr(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function dt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Ht |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(k(153));
  if (t.child !== null) {
    for (e = t.child, n = Et(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Et(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function vf(e, t, n) {
  switch (t.tag) {
    case 3:
      bc(t), Sn();
      break;
    case 5:
      nc(t);
      break;
    case 1:
      Ne(t.type) && ua(t);
      break;
    case 4:
      Wo(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, a = t.memoizedProps.value;
      W(pa, r._currentValue), r._currentValue = a;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (W(X, X.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Pc(e, t, n) : (W(X, X.current & 1), e = dt(e, t, n), e !== null ? e.sibling : null);
      W(X, X.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Tc(e, t, n);
        t.flags |= 128;
      }
      if (a = t.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), W(X, X.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Cc(e, t, n);
  }
  return dt(e, t, n);
}
var Rc, so, zc, $c;
Rc = function(e, t) {
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
so = function() {
};
zc = function(e, t, n, r) {
  var a = e.memoizedProps;
  if (a !== r) {
    e = t.stateNode, Ft(Ze.current);
    var o = null;
    switch (n) {
      case "input":
        a = Pl(e, a), r = Pl(e, r), o = [];
        break;
      case "select":
        a = Z({}, a, { value: void 0 }), r = Z({}, r, { value: void 0 }), o = [];
        break;
      case "textarea":
        a = zl(e, a), r = zl(e, r), o = [];
        break;
      default:
        typeof a.onClick != "function" && typeof r.onClick == "function" && (e.onclick = sa);
    }
    Ll(n, r);
    var s;
    n = null;
    for (d in a) if (!r.hasOwnProperty(d) && a.hasOwnProperty(d) && a[d] != null) if (d === "style") {
      var i = a[d];
      for (s in i) i.hasOwnProperty(s) && (n || (n = {}), n[s] = "");
    } else d !== "dangerouslySetInnerHTML" && d !== "children" && d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (Jn.hasOwnProperty(d) ? o || (o = []) : (o = o || []).push(d, null));
    for (d in r) {
      var u = r[d];
      if (i = a != null ? a[d] : void 0, r.hasOwnProperty(d) && u !== i && (u != null || i != null)) if (d === "style") if (i) {
        for (s in i) !i.hasOwnProperty(s) || u && u.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
        for (s in u) u.hasOwnProperty(s) && i[s] !== u[s] && (n || (n = {}), n[s] = u[s]);
      } else n || (o || (o = []), o.push(
        d,
        n
      )), n = u;
      else d === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, i = i ? i.__html : void 0, u != null && i !== u && (o = o || []).push(d, u)) : d === "children" ? typeof u != "string" && typeof u != "number" || (o = o || []).push(d, "" + u) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && (Jn.hasOwnProperty(d) ? (u != null && d === "onScroll" && K("scroll", e), o || i === u || (o = [])) : (o = o || []).push(d, u));
    }
    n && (o = o || []).push("style", n);
    var d = o;
    (t.updateQueue = d) && (t.flags |= 4);
  }
};
$c = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function In(e, t) {
  if (!Y) switch (e.tailMode) {
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
function pe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var a = e.child; a !== null; ) n |= a.lanes | a.childLanes, r |= a.subtreeFlags & 14680064, r |= a.flags & 14680064, a.return = e, a = a.sibling;
  else for (a = e.child; a !== null; ) n |= a.lanes | a.childLanes, r |= a.subtreeFlags, r |= a.flags, a.return = e, a = a.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function yf(e, t, n) {
  var r = t.pendingProps;
  switch (Ao(t), t.tag) {
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
      return pe(t), null;
    case 1:
      return Ne(t.type) && ia(), pe(t), null;
    case 3:
      return r = t.stateNode, _n(), G(_e), G(he), Go(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && ($r(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Ve !== null && (go(Ve), Ve = null))), so(e, t), pe(t), null;
    case 5:
      Ko(t);
      var a = Ft(cr.current);
      if (n = t.type, e !== null && t.stateNode != null) zc(e, t, n, r, a), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(k(166));
          return pe(t), null;
        }
        if (e = Ft(Ze.current), $r(t)) {
          r = t.stateNode, n = t.type;
          var o = t.memoizedProps;
          switch (r[Xe] = t, r[ir] = o, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              K("cancel", r), K("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              K("load", r);
              break;
            case "video":
            case "audio":
              for (a = 0; a < Un.length; a++) K(Un[a], r);
              break;
            case "source":
              K("error", r);
              break;
            case "img":
            case "image":
            case "link":
              K(
                "error",
                r
              ), K("load", r);
              break;
            case "details":
              K("toggle", r);
              break;
            case "input":
              Ss(r, o), K("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!o.multiple }, K("invalid", r);
              break;
            case "textarea":
              _s(r, o), K("invalid", r);
          }
          Ll(n, o), a = null;
          for (var s in o) if (o.hasOwnProperty(s)) {
            var i = o[s];
            s === "children" ? typeof i == "string" ? r.textContent !== i && (o.suppressHydrationWarning !== !0 && zr(r.textContent, i, e), a = ["children", i]) : typeof i == "number" && r.textContent !== "" + i && (o.suppressHydrationWarning !== !0 && zr(
              r.textContent,
              i,
              e
            ), a = ["children", "" + i]) : Jn.hasOwnProperty(s) && i != null && s === "onScroll" && K("scroll", r);
          }
          switch (n) {
            case "input":
              Nr(r), ws(r, o, !0);
              break;
            case "textarea":
              Nr(r), Ns(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = sa);
          }
          r = a, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          s = a.nodeType === 9 ? a : a.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = su(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, { is: r.is }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[Xe] = t, e[ir] = r, Rc(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (s = Ol(n, r), n) {
              case "dialog":
                K("cancel", e), K("close", e), a = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                K("load", e), a = r;
                break;
              case "video":
              case "audio":
                for (a = 0; a < Un.length; a++) K(Un[a], e);
                a = r;
                break;
              case "source":
                K("error", e), a = r;
                break;
              case "img":
              case "image":
              case "link":
                K(
                  "error",
                  e
                ), K("load", e), a = r;
                break;
              case "details":
                K("toggle", e), a = r;
                break;
              case "input":
                Ss(e, r), a = Pl(e, r), K("invalid", e);
                break;
              case "option":
                a = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, a = Z({}, r, { value: void 0 }), K("invalid", e);
                break;
              case "textarea":
                _s(e, r), a = zl(e, r), K("invalid", e);
                break;
              default:
                a = r;
            }
            Ll(n, a), i = a;
            for (o in i) if (i.hasOwnProperty(o)) {
              var u = i[o];
              o === "style" ? cu(e, u) : o === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, u != null && iu(e, u)) : o === "children" ? typeof u == "string" ? (n !== "textarea" || u !== "") && Zn(e, u) : typeof u == "number" && Zn(e, "" + u) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Jn.hasOwnProperty(o) ? u != null && o === "onScroll" && K("scroll", e) : u != null && ko(e, o, u, s));
            }
            switch (n) {
              case "input":
                Nr(e), ws(e, r, !1);
                break;
              case "textarea":
                Nr(e), Ns(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + bt(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, o = r.value, o != null ? pn(e, !!r.multiple, o, !1) : r.defaultValue != null && pn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof a.onClick == "function" && (e.onclick = sa);
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
      return pe(t), null;
    case 6:
      if (e && t.stateNode != null) $c(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(k(166));
        if (n = Ft(cr.current), Ft(Ze.current), $r(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Xe] = t, (o = r.nodeValue !== n) && (e = Te, e !== null)) switch (e.tag) {
            case 3:
              zr(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && zr(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          o && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Xe] = t, t.stateNode = r;
      }
      return pe(t), null;
    case 13:
      if (G(X), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (Y && Pe !== null && t.mode & 1 && !(t.flags & 128)) Xu(), Sn(), t.flags |= 98560, o = !1;
        else if (o = $r(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!o) throw Error(k(318));
            if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(k(317));
            o[Xe] = t;
          } else Sn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          pe(t), o = !1;
        } else Ve !== null && (go(Ve), Ve = null), o = !0;
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || X.current & 1 ? ae === 0 && (ae = 3) : ss())), t.updateQueue !== null && (t.flags |= 4), pe(t), null);
    case 4:
      return _n(), so(e, t), e === null && or(t.stateNode.containerInfo), pe(t), null;
    case 10:
      return Ho(t.type._context), pe(t), null;
    case 17:
      return Ne(t.type) && ia(), pe(t), null;
    case 19:
      if (G(X), o = t.memoizedState, o === null) return pe(t), null;
      if (r = (t.flags & 128) !== 0, s = o.rendering, s === null) if (r) In(o, !1);
      else {
        if (ae !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (s = ma(e), s !== null) {
            for (t.flags |= 128, In(o, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) o = n, e = r, o.flags &= 14680066, s = o.alternate, s === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = s.childLanes, o.lanes = s.lanes, o.child = s.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = s.memoizedProps, o.memoizedState = s.memoizedState, o.updateQueue = s.updateQueue, o.type = s.type, e = s.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return W(X, X.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        o.tail !== null && te() > kn && (t.flags |= 128, r = !0, In(o, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = ma(s), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), In(o, !0), o.tail === null && o.tailMode === "hidden" && !s.alternate && !Y) return pe(t), null;
        } else 2 * te() - o.renderingStartTime > kn && n !== 1073741824 && (t.flags |= 128, r = !0, In(o, !1), t.lanes = 4194304);
        o.isBackwards ? (s.sibling = t.child, t.child = s) : (n = o.last, n !== null ? n.sibling = s : t.child = s, o.last = s);
      }
      return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = te(), t.sibling = null, n = X.current, W(X, r ? n & 1 | 2 : n & 1), t) : (pe(t), null);
    case 22:
    case 23:
      return os(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? be & 1073741824 && (pe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : pe(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(k(156, t.tag));
}
function xf(e, t) {
  switch (Ao(t), t.tag) {
    case 1:
      return Ne(t.type) && ia(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return _n(), G(_e), G(he), Go(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Ko(t), null;
    case 13:
      if (G(X), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(k(340));
        Sn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return G(X), null;
    case 4:
      return _n(), null;
    case 10:
      return Ho(t.type._context), null;
    case 22:
    case 23:
      return os(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Ir = !1, fe = !1, jf = typeof WeakSet == "function" ? WeakSet : Set, z = null;
function un(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    ee(e, t, r);
  }
  else n.current = null;
}
function io(e, t, n) {
  try {
    n();
  } catch (r) {
    ee(e, t, r);
  }
}
var fi = !1;
function Sf(e, t) {
  if (Ql = aa, e = Fu(), Fo(e)) {
    if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else e: {
      n = (n = e.ownerDocument) && n.defaultView || window;
      var r = n.getSelection && n.getSelection();
      if (r && r.rangeCount !== 0) {
        n = r.anchorNode;
        var a = r.anchorOffset, o = r.focusNode;
        r = r.focusOffset;
        try {
          n.nodeType, o.nodeType;
        } catch {
          n = null;
          break e;
        }
        var s = 0, i = -1, u = -1, d = 0, m = 0, h = e, g = null;
        t: for (; ; ) {
          for (var y; h !== n || a !== 0 && h.nodeType !== 3 || (i = s + a), h !== o || r !== 0 && h.nodeType !== 3 || (u = s + r), h.nodeType === 3 && (s += h.nodeValue.length), (y = h.firstChild) !== null; )
            g = h, h = y;
          for (; ; ) {
            if (h === e) break t;
            if (g === n && ++d === a && (i = s), g === o && ++m === r && (u = s), (y = h.nextSibling) !== null) break;
            h = g, g = h.parentNode;
          }
          h = y;
        }
        n = i === -1 || u === -1 ? null : { start: i, end: u };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (ql = { focusedElem: e, selectionRange: n }, aa = !1, z = t; z !== null; ) if (t = z, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, z = e;
  else for (; z !== null; ) {
    t = z;
    try {
      var S = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (S !== null) {
            var j = S.memoizedProps, _ = S.memoizedState, f = t.stateNode, c = f.getSnapshotBeforeUpdate(t.elementType === t.type ? j : Ue(t.type, j), _);
            f.__reactInternalSnapshotBeforeUpdate = c;
          }
          break;
        case 3:
          var p = t.stateNode.containerInfo;
          p.nodeType === 1 ? p.textContent = "" : p.nodeType === 9 && p.documentElement && p.removeChild(p.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(k(163));
      }
    } catch (w) {
      ee(t, t.return, w);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, z = e;
      break;
    }
    z = t.return;
  }
  return S = fi, fi = !1, S;
}
function Gn(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var a = r = r.next;
    do {
      if ((a.tag & e) === e) {
        var o = a.destroy;
        a.destroy = void 0, o !== void 0 && io(t, n, o);
      }
      a = a.next;
    } while (a !== r);
  }
}
function $a(e, t) {
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
function uo(e) {
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
function Lc(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Lc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Xe], delete t[ir], delete t[Gl], delete t[nf], delete t[rf])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Oc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function hi(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || Oc(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function co(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = sa));
  else if (r !== 4 && (e = e.child, e !== null)) for (co(e, t, n), e = e.sibling; e !== null; ) co(e, t, n), e = e.sibling;
}
function po(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (po(e, t, n), e = e.sibling; e !== null; ) po(e, t, n), e = e.sibling;
}
var se = null, Be = !1;
function ft(e, t, n) {
  for (n = n.child; n !== null; ) Ic(e, t, n), n = n.sibling;
}
function Ic(e, t, n) {
  if (Je && typeof Je.onCommitFiberUnmount == "function") try {
    Je.onCommitFiberUnmount(ka, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      fe || un(n, t);
    case 6:
      var r = se, a = Be;
      se = null, ft(e, t, n), se = r, Be = a, se !== null && (Be ? (e = se, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : se.removeChild(n.stateNode));
      break;
    case 18:
      se !== null && (Be ? (e = se, n = n.stateNode, e.nodeType === 8 ? al(e.parentNode, n) : e.nodeType === 1 && al(e, n), rr(e)) : al(se, n.stateNode));
      break;
    case 4:
      r = se, a = Be, se = n.stateNode.containerInfo, Be = !0, ft(e, t, n), se = r, Be = a;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!fe && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        a = r = r.next;
        do {
          var o = a, s = o.destroy;
          o = o.tag, s !== void 0 && (o & 2 || o & 4) && io(n, t, s), a = a.next;
        } while (a !== r);
      }
      ft(e, t, n);
      break;
    case 1:
      if (!fe && (un(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (i) {
        ee(n, t, i);
      }
      ft(e, t, n);
      break;
    case 21:
      ft(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (fe = (r = fe) || n.memoizedState !== null, ft(e, t, n), fe = r) : ft(e, t, n);
      break;
    default:
      ft(e, t, n);
  }
}
function mi(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new jf()), t.forEach(function(r) {
      var a = Tf.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(a, a));
    });
  }
}
function Ae(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var a = n[r];
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
      Ic(o, s, a), se = null, Be = !1;
      var u = a.alternate;
      u !== null && (u.return = null), a.return = null;
    } catch (d) {
      ee(a, t, d);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Dc(t, e), t = t.sibling;
}
function Dc(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Ae(t, e), Ke(e), r & 4) {
        try {
          Gn(3, e, e.return), $a(3, e);
        } catch (j) {
          ee(e, e.return, j);
        }
        try {
          Gn(5, e, e.return);
        } catch (j) {
          ee(e, e.return, j);
        }
      }
      break;
    case 1:
      Ae(t, e), Ke(e), r & 512 && n !== null && un(n, n.return);
      break;
    case 5:
      if (Ae(t, e), Ke(e), r & 512 && n !== null && un(n, n.return), e.flags & 32) {
        var a = e.stateNode;
        try {
          Zn(a, "");
        } catch (j) {
          ee(e, e.return, j);
        }
      }
      if (r & 4 && (a = e.stateNode, a != null)) {
        var o = e.memoizedProps, s = n !== null ? n.memoizedProps : o, i = e.type, u = e.updateQueue;
        if (e.updateQueue = null, u !== null) try {
          i === "input" && o.type === "radio" && o.name != null && lu(a, o), Ol(i, s);
          var d = Ol(i, o);
          for (s = 0; s < u.length; s += 2) {
            var m = u[s], h = u[s + 1];
            m === "style" ? cu(a, h) : m === "dangerouslySetInnerHTML" ? iu(a, h) : m === "children" ? Zn(a, h) : ko(a, m, h, d);
          }
          switch (i) {
            case "input":
              Tl(a, o);
              break;
            case "textarea":
              ou(a, o);
              break;
            case "select":
              var g = a._wrapperState.wasMultiple;
              a._wrapperState.wasMultiple = !!o.multiple;
              var y = o.value;
              y != null ? pn(a, !!o.multiple, y, !1) : g !== !!o.multiple && (o.defaultValue != null ? pn(
                a,
                !!o.multiple,
                o.defaultValue,
                !0
              ) : pn(a, !!o.multiple, o.multiple ? [] : "", !1));
          }
          a[ir] = o;
        } catch (j) {
          ee(e, e.return, j);
        }
      }
      break;
    case 6:
      if (Ae(t, e), Ke(e), r & 4) {
        if (e.stateNode === null) throw Error(k(162));
        a = e.stateNode, o = e.memoizedProps;
        try {
          a.nodeValue = o;
        } catch (j) {
          ee(e, e.return, j);
        }
      }
      break;
    case 3:
      if (Ae(t, e), Ke(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        rr(t.containerInfo);
      } catch (j) {
        ee(e, e.return, j);
      }
      break;
    case 4:
      Ae(t, e), Ke(e);
      break;
    case 13:
      Ae(t, e), Ke(e), a = e.child, a.flags & 8192 && (o = a.memoizedState !== null, a.stateNode.isHidden = o, !o || a.alternate !== null && a.alternate.memoizedState !== null || (as = te())), r & 4 && mi(e);
      break;
    case 22:
      if (m = n !== null && n.memoizedState !== null, e.mode & 1 ? (fe = (d = fe) || m, Ae(t, e), fe = d) : Ae(t, e), Ke(e), r & 8192) {
        if (d = e.memoizedState !== null, (e.stateNode.isHidden = d) && !m && e.mode & 1) for (z = e, m = e.child; m !== null; ) {
          for (h = z = m; z !== null; ) {
            switch (g = z, y = g.child, g.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Gn(4, g, g.return);
                break;
              case 1:
                un(g, g.return);
                var S = g.stateNode;
                if (typeof S.componentWillUnmount == "function") {
                  r = g, n = g.return;
                  try {
                    t = r, S.props = t.memoizedProps, S.state = t.memoizedState, S.componentWillUnmount();
                  } catch (j) {
                    ee(r, n, j);
                  }
                }
                break;
              case 5:
                un(g, g.return);
                break;
              case 22:
                if (g.memoizedState !== null) {
                  vi(h);
                  continue;
                }
            }
            y !== null ? (y.return = g, z = y) : vi(h);
          }
          m = m.sibling;
        }
        e: for (m = null, h = e; ; ) {
          if (h.tag === 5) {
            if (m === null) {
              m = h;
              try {
                a = h.stateNode, d ? (o = a.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (i = h.stateNode, u = h.memoizedProps.style, s = u != null && u.hasOwnProperty("display") ? u.display : null, i.style.display = uu("display", s));
              } catch (j) {
                ee(e, e.return, j);
              }
            }
          } else if (h.tag === 6) {
            if (m === null) try {
              h.stateNode.nodeValue = d ? "" : h.memoizedProps;
            } catch (j) {
              ee(e, e.return, j);
            }
          } else if ((h.tag !== 22 && h.tag !== 23 || h.memoizedState === null || h === e) && h.child !== null) {
            h.child.return = h, h = h.child;
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            m === h && (m = null), h = h.return;
          }
          m === h && (m = null), h.sibling.return = h.return, h = h.sibling;
        }
      }
      break;
    case 19:
      Ae(t, e), Ke(e), r & 4 && mi(e);
      break;
    case 21:
      break;
    default:
      Ae(
        t,
        e
      ), Ke(e);
  }
}
function Ke(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Oc(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(k(160));
      }
      switch (r.tag) {
        case 5:
          var a = r.stateNode;
          r.flags & 32 && (Zn(a, ""), r.flags &= -33);
          var o = hi(e);
          po(e, o, a);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo, i = hi(e);
          co(e, i, s);
          break;
        default:
          throw Error(k(161));
      }
    } catch (u) {
      ee(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function wf(e, t, n) {
  z = e, Fc(e);
}
function Fc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; z !== null; ) {
    var a = z, o = a.child;
    if (a.tag === 22 && r) {
      var s = a.memoizedState !== null || Ir;
      if (!s) {
        var i = a.alternate, u = i !== null && i.memoizedState !== null || fe;
        i = Ir;
        var d = fe;
        if (Ir = s, (fe = u) && !d) for (z = a; z !== null; ) s = z, u = s.child, s.tag === 22 && s.memoizedState !== null ? yi(a) : u !== null ? (u.return = s, z = u) : yi(a);
        for (; o !== null; ) z = o, Fc(o), o = o.sibling;
        z = a, Ir = i, fe = d;
      }
      gi(e);
    } else a.subtreeFlags & 8772 && o !== null ? (o.return = a, z = o) : gi(e);
  }
}
function gi(e) {
  for (; z !== null; ) {
    var t = z;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            fe || $a(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !fe) if (n === null) r.componentDidMount();
            else {
              var a = t.elementType === t.type ? n.memoizedProps : Ue(t.type, n.memoizedProps);
              r.componentDidUpdate(a, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var o = t.updateQueue;
            o !== null && ei(t, o, r);
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
              ei(t, s, n);
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
                var m = d.memoizedState;
                if (m !== null) {
                  var h = m.dehydrated;
                  h !== null && rr(h);
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
        fe || t.flags & 512 && uo(t);
      } catch (g) {
        ee(t, t.return, g);
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
function vi(e) {
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
function yi(e) {
  for (; z !== null; ) {
    var t = z;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            $a(4, t);
          } catch (u) {
            ee(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var a = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              ee(t, a, u);
            }
          }
          var o = t.return;
          try {
            uo(t);
          } catch (u) {
            ee(t, o, u);
          }
          break;
        case 5:
          var s = t.return;
          try {
            uo(t);
          } catch (u) {
            ee(t, s, u);
          }
      }
    } catch (u) {
      ee(t, t.return, u);
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
var _f = Math.ceil, ya = pt.ReactCurrentDispatcher, ns = pt.ReactCurrentOwner, De = pt.ReactCurrentBatchConfig, B = 0, oe = null, ne = null, ie = 0, be = 0, cn = Rt(0), ae = 0, hr = null, Ht = 0, La = 0, rs = 0, Yn = null, je = null, as = 0, kn = 1 / 0, rt = null, xa = !1, fo = null, kt = null, Dr = !1, xt = null, ja = 0, Xn = 0, ho = null, Yr = -1, Xr = 0;
function ve() {
  return B & 6 ? te() : Yr !== -1 ? Yr : Yr = te();
}
function Ct(e) {
  return e.mode & 1 ? B & 2 && ie !== 0 ? ie & -ie : lf.transition !== null ? (Xr === 0 && (Xr = wu()), Xr) : (e = Q, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Pu(e.type)), e) : 1;
}
function Qe(e, t, n, r) {
  if (50 < Xn) throw Xn = 0, ho = null, Error(k(185));
  gr(e, n, r), (!(B & 2) || e !== oe) && (e === oe && (!(B & 2) && (La |= n), ae === 4 && vt(e, ie)), ke(e, r), n === 1 && B === 0 && !(t.mode & 1) && (kn = te() + 500, Ta && zt()));
}
function ke(e, t) {
  var n = e.callbackNode;
  lp(e, t);
  var r = ra(e, e === oe ? ie : 0);
  if (r === 0) n !== null && Es(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Es(n), t === 1) e.tag === 0 ? af(xi.bind(null, e)) : Ku(xi.bind(null, e)), ef(function() {
      !(B & 6) && zt();
    }), n = null;
    else {
      switch (_u(r)) {
        case 1:
          n = To;
          break;
        case 4:
          n = ju;
          break;
        case 16:
          n = na;
          break;
        case 536870912:
          n = Su;
          break;
        default:
          n = na;
      }
      n = qc(n, Mc.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Mc(e, t) {
  if (Yr = -1, Xr = 0, B & 6) throw Error(k(327));
  var n = e.callbackNode;
  if (vn() && e.callbackNode !== n) return null;
  var r = ra(e, e === oe ? ie : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Sa(e, r);
  else {
    t = r;
    var a = B;
    B |= 2;
    var o = Uc();
    (oe !== e || ie !== t) && (rt = null, kn = te() + 500, Mt(e, t));
    do
      try {
        Cf();
        break;
      } catch (i) {
        Ac(e, i);
      }
    while (!0);
    Vo(), ya.current = o, B = a, ne !== null ? t = 0 : (oe = null, ie = 0, t = ae);
  }
  if (t !== 0) {
    if (t === 2 && (a = Al(e), a !== 0 && (r = a, t = mo(e, a))), t === 1) throw n = hr, Mt(e, 0), vt(e, r), ke(e, te()), n;
    if (t === 6) vt(e, r);
    else {
      if (a = e.current.alternate, !(r & 30) && !Nf(a) && (t = Sa(e, r), t === 2 && (o = Al(e), o !== 0 && (r = o, t = mo(e, o))), t === 1)) throw n = hr, Mt(e, 0), vt(e, r), ke(e, te()), n;
      switch (e.finishedWork = a, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(k(345));
        case 2:
          Ot(e, je, rt);
          break;
        case 3:
          if (vt(e, r), (r & 130023424) === r && (t = as + 500 - te(), 10 < t)) {
            if (ra(e, 0) !== 0) break;
            if (a = e.suspendedLanes, (a & r) !== r) {
              ve(), e.pingedLanes |= e.suspendedLanes & a;
              break;
            }
            e.timeoutHandle = Kl(Ot.bind(null, e, je, rt), t);
            break;
          }
          Ot(e, je, rt);
          break;
        case 4:
          if (vt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, a = -1; 0 < r; ) {
            var s = 31 - He(r);
            o = 1 << s, s = t[s], s > a && (a = s), r &= ~o;
          }
          if (r = a, r = te() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * _f(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Kl(Ot.bind(null, e, je, rt), r);
            break;
          }
          Ot(e, je, rt);
          break;
        case 5:
          Ot(e, je, rt);
          break;
        default:
          throw Error(k(329));
      }
    }
  }
  return ke(e, te()), e.callbackNode === n ? Mc.bind(null, e) : null;
}
function mo(e, t) {
  var n = Yn;
  return e.current.memoizedState.isDehydrated && (Mt(e, t).flags |= 256), e = Sa(e, t), e !== 2 && (t = je, je = n, t !== null && go(t)), e;
}
function go(e) {
  je === null ? je = e : je.push.apply(je, e);
}
function Nf(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var a = n[r], o = a.getSnapshot;
        a = a.value;
        try {
          if (!qe(o(), a)) return !1;
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
function vt(e, t) {
  for (t &= ~rs, t &= ~La, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - He(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function xi(e) {
  if (B & 6) throw Error(k(327));
  vn();
  var t = ra(e, 0);
  if (!(t & 1)) return ke(e, te()), null;
  var n = Sa(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Al(e);
    r !== 0 && (t = r, n = mo(e, r));
  }
  if (n === 1) throw n = hr, Mt(e, 0), vt(e, t), ke(e, te()), n;
  if (n === 6) throw Error(k(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Ot(e, je, rt), ke(e, te()), null;
}
function ls(e, t) {
  var n = B;
  B |= 1;
  try {
    return e(t);
  } finally {
    B = n, B === 0 && (kn = te() + 500, Ta && zt());
  }
}
function Qt(e) {
  xt !== null && xt.tag === 0 && !(B & 6) && vn();
  var t = B;
  B |= 1;
  var n = De.transition, r = Q;
  try {
    if (De.transition = null, Q = 1, e) return e();
  } finally {
    Q = r, De.transition = n, B = t, !(B & 6) && zt();
  }
}
function os() {
  be = cn.current, G(cn);
}
function Mt(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Zp(n)), ne !== null) for (n = ne.return; n !== null; ) {
    var r = n;
    switch (Ao(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && ia();
        break;
      case 3:
        _n(), G(_e), G(he), Go();
        break;
      case 5:
        Ko(r);
        break;
      case 4:
        _n();
        break;
      case 13:
        G(X);
        break;
      case 19:
        G(X);
        break;
      case 10:
        Ho(r.type._context);
        break;
      case 22:
      case 23:
        os();
    }
    n = n.return;
  }
  if (oe = e, ne = e = Et(e.current, null), ie = be = t, ae = 0, hr = null, rs = La = Ht = 0, je = Yn = null, Dt !== null) {
    for (t = 0; t < Dt.length; t++) if (n = Dt[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var a = r.next, o = n.pending;
      if (o !== null) {
        var s = o.next;
        o.next = a, r.next = s;
      }
      n.pending = r;
    }
    Dt = null;
  }
  return e;
}
function Ac(e, t) {
  do {
    var n = ne;
    try {
      if (Vo(), Wr.current = va, ga) {
        for (var r = J.memoizedState; r !== null; ) {
          var a = r.queue;
          a !== null && (a.pending = null), r = r.next;
        }
        ga = !1;
      }
      if (Vt = 0, le = re = J = null, Kn = !1, dr = 0, ns.current = null, n === null || n.return === null) {
        ae = 1, hr = t, ne = null;
        break;
      }
      e: {
        var o = e, s = n.return, i = n, u = t;
        if (t = ie, i.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
          var d = u, m = i, h = m.tag;
          if (!(m.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var g = m.alternate;
            g ? (m.updateQueue = g.updateQueue, m.memoizedState = g.memoizedState, m.lanes = g.lanes) : (m.updateQueue = null, m.memoizedState = null);
          }
          var y = oi(s);
          if (y !== null) {
            y.flags &= -257, si(y, s, i, o, t), y.mode & 1 && li(o, d, t), t = y, u = d;
            var S = t.updateQueue;
            if (S === null) {
              var j = /* @__PURE__ */ new Set();
              j.add(u), t.updateQueue = j;
            } else S.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              li(o, d, t), ss();
              break e;
            }
            u = Error(k(426));
          }
        } else if (Y && i.mode & 1) {
          var _ = oi(s);
          if (_ !== null) {
            !(_.flags & 65536) && (_.flags |= 256), si(_, s, i, o, t), Uo(Nn(u, i));
            break e;
          }
        }
        o = u = Nn(u, i), ae !== 4 && (ae = 2), Yn === null ? Yn = [o] : Yn.push(o), o = s;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, t &= -t, o.lanes |= t;
              var f = _c(o, u, t);
              Zs(o, f);
              break e;
            case 1:
              i = u;
              var c = o.type, p = o.stateNode;
              if (!(o.flags & 128) && (typeof c.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (kt === null || !kt.has(p)))) {
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var w = Nc(o, i, t);
                Zs(o, w);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Vc(n);
    } catch (x) {
      t = x, ne === n && n !== null && (ne = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Uc() {
  var e = ya.current;
  return ya.current = va, e === null ? va : e;
}
function ss() {
  (ae === 0 || ae === 3 || ae === 2) && (ae = 4), oe === null || !(Ht & 268435455) && !(La & 268435455) || vt(oe, ie);
}
function Sa(e, t) {
  var n = B;
  B |= 2;
  var r = Uc();
  (oe !== e || ie !== t) && (rt = null, Mt(e, t));
  do
    try {
      kf();
      break;
    } catch (a) {
      Ac(e, a);
    }
  while (!0);
  if (Vo(), B = n, ya.current = r, ne !== null) throw Error(k(261));
  return oe = null, ie = 0, ae;
}
function kf() {
  for (; ne !== null; ) Bc(ne);
}
function Cf() {
  for (; ne !== null && !Yd(); ) Bc(ne);
}
function Bc(e) {
  var t = Qc(e.alternate, e, be);
  e.memoizedProps = e.pendingProps, t === null ? Vc(e) : ne = t, ns.current = null;
}
function Vc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = xf(n, t), n !== null) {
        n.flags &= 32767, ne = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        ae = 6, ne = null;
        return;
      }
    } else if (n = yf(n, t, be), n !== null) {
      ne = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      ne = t;
      return;
    }
    ne = t = e;
  } while (t !== null);
  ae === 0 && (ae = 5);
}
function Ot(e, t, n) {
  var r = Q, a = De.transition;
  try {
    De.transition = null, Q = 1, Ef(e, t, n, r);
  } finally {
    De.transition = a, Q = r;
  }
  return null;
}
function Ef(e, t, n, r) {
  do
    vn();
  while (xt !== null);
  if (B & 6) throw Error(k(327));
  n = e.finishedWork;
  var a = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(k(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var o = n.lanes | n.childLanes;
  if (op(e, o), e === oe && (ne = oe = null, ie = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Dr || (Dr = !0, qc(na, function() {
    return vn(), null;
  })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
    o = De.transition, De.transition = null;
    var s = Q;
    Q = 1;
    var i = B;
    B |= 4, ns.current = null, Sf(e, n), Dc(n, e), qp(ql), aa = !!Ql, ql = Ql = null, e.current = n, wf(n), Xd(), B = i, Q = s, De.transition = o;
  } else e.current = n;
  if (Dr && (Dr = !1, xt = e, ja = a), o = e.pendingLanes, o === 0 && (kt = null), ep(n.stateNode), ke(e, te()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) a = t[n], r(a.value, { componentStack: a.stack, digest: a.digest });
  if (xa) throw xa = !1, e = fo, fo = null, e;
  return ja & 1 && e.tag !== 0 && vn(), o = e.pendingLanes, o & 1 ? e === ho ? Xn++ : (Xn = 0, ho = e) : Xn = 0, zt(), null;
}
function vn() {
  if (xt !== null) {
    var e = _u(ja), t = De.transition, n = Q;
    try {
      if (De.transition = null, Q = 16 > e ? 16 : e, xt === null) var r = !1;
      else {
        if (e = xt, xt = null, ja = 0, B & 6) throw Error(k(331));
        var a = B;
        for (B |= 4, z = e.current; z !== null; ) {
          var o = z, s = o.child;
          if (z.flags & 16) {
            var i = o.deletions;
            if (i !== null) {
              for (var u = 0; u < i.length; u++) {
                var d = i[u];
                for (z = d; z !== null; ) {
                  var m = z;
                  switch (m.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Gn(8, m, o);
                  }
                  var h = m.child;
                  if (h !== null) h.return = m, z = h;
                  else for (; z !== null; ) {
                    m = z;
                    var g = m.sibling, y = m.return;
                    if (Lc(m), m === d) {
                      z = null;
                      break;
                    }
                    if (g !== null) {
                      g.return = y, z = g;
                      break;
                    }
                    z = y;
                  }
                }
              }
              var S = o.alternate;
              if (S !== null) {
                var j = S.child;
                if (j !== null) {
                  S.child = null;
                  do {
                    var _ = j.sibling;
                    j.sibling = null, j = _;
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
                Gn(9, o, o.return);
            }
            var f = o.sibling;
            if (f !== null) {
              f.return = o.return, z = f;
              break e;
            }
            z = o.return;
          }
        }
        var c = e.current;
        for (z = c; z !== null; ) {
          s = z;
          var p = s.child;
          if (s.subtreeFlags & 2064 && p !== null) p.return = s, z = p;
          else e: for (s = c; z !== null; ) {
            if (i = z, i.flags & 2048) try {
              switch (i.tag) {
                case 0:
                case 11:
                case 15:
                  $a(9, i);
              }
            } catch (x) {
              ee(i, i.return, x);
            }
            if (i === s) {
              z = null;
              break e;
            }
            var w = i.sibling;
            if (w !== null) {
              w.return = i.return, z = w;
              break e;
            }
            z = i.return;
          }
        }
        if (B = a, zt(), Je && typeof Je.onPostCommitFiberRoot == "function") try {
          Je.onPostCommitFiberRoot(ka, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      Q = n, De.transition = t;
    }
  }
  return !1;
}
function ji(e, t, n) {
  t = Nn(n, t), t = _c(e, t, 1), e = Nt(e, t, 1), t = ve(), e !== null && (gr(e, 1, t), ke(e, t));
}
function ee(e, t, n) {
  if (e.tag === 3) ji(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      ji(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (kt === null || !kt.has(r))) {
        e = Nn(n, e), e = Nc(t, e, 1), t = Nt(t, e, 1), e = ve(), t !== null && (gr(t, 1, e), ke(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function bf(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = ve(), e.pingedLanes |= e.suspendedLanes & n, oe === e && (ie & n) === n && (ae === 4 || ae === 3 && (ie & 130023424) === ie && 500 > te() - as ? Mt(e, 0) : rs |= n), ke(e, t);
}
function Hc(e, t) {
  t === 0 && (e.mode & 1 ? (t = Er, Er <<= 1, !(Er & 130023424) && (Er = 4194304)) : t = 1);
  var n = ve();
  e = ct(e, t), e !== null && (gr(e, t, n), ke(e, n));
}
function Pf(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Hc(e, n);
}
function Tf(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode, a = e.memoizedState;
      a !== null && (n = a.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(k(314));
  }
  r !== null && r.delete(t), Hc(e, n);
}
var Qc;
Qc = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || _e.current) Se = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Se = !1, vf(e, t, n);
    Se = !!(e.flags & 131072);
  }
  else Se = !1, Y && t.flags & 1048576 && Gu(t, da, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Gr(e, t), e = t.pendingProps;
      var a = jn(t, he.current);
      gn(t, n), a = Xo(null, t, r, e, a, n);
      var o = Jo();
      return t.flags |= 1, typeof a == "object" && a !== null && typeof a.render == "function" && a.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ne(r) ? (o = !0, ua(t)) : o = !1, t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null, qo(t), a.updater = za, t.stateNode = a, a._reactInternals = t, to(t, r, e, n), t = ao(null, t, r, !0, o, n)) : (t.tag = 0, Y && o && Mo(t), ge(null, t, a, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Gr(e, t), e = t.pendingProps, a = r._init, r = a(r._payload), t.type = r, a = t.tag = zf(r), e = Ue(r, e), a) {
          case 0:
            t = ro(null, t, r, e, n);
            break e;
          case 1:
            t = ci(null, t, r, e, n);
            break e;
          case 11:
            t = ii(null, t, r, e, n);
            break e;
          case 14:
            t = ui(null, t, r, Ue(r.type, e), n);
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
      return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : Ue(r, a), ro(e, t, r, a, n);
    case 1:
      return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : Ue(r, a), ci(e, t, r, a, n);
    case 3:
      e: {
        if (bc(t), e === null) throw Error(k(387));
        r = t.pendingProps, o = t.memoizedState, a = o.element, tc(e, t), ha(t, r, null, n);
        var s = t.memoizedState;
        if (r = s.element, o.isDehydrated) if (o = { element: r, isDehydrated: !1, cache: s.cache, pendingSuspenseBoundaries: s.pendingSuspenseBoundaries, transitions: s.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
          a = Nn(Error(k(423)), t), t = di(e, t, r, n, a);
          break e;
        } else if (r !== a) {
          a = Nn(Error(k(424)), t), t = di(e, t, r, n, a);
          break e;
        } else for (Pe = _t(t.stateNode.containerInfo.firstChild), Te = t, Y = !0, Ve = null, n = Zu(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (Sn(), r === a) {
            t = dt(e, t, n);
            break e;
          }
          ge(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return nc(t), e === null && Jl(t), r = t.type, a = t.pendingProps, o = e !== null ? e.memoizedProps : null, s = a.children, Wl(r, a) ? s = null : o !== null && Wl(r, o) && (t.flags |= 32), Ec(e, t), ge(e, t, s, n), t.child;
    case 6:
      return e === null && Jl(t), null;
    case 13:
      return Pc(e, t, n);
    case 4:
      return Wo(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = wn(t, null, r, n) : ge(e, t, r, n), t.child;
    case 11:
      return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : Ue(r, a), ii(e, t, r, a, n);
    case 7:
      return ge(e, t, t.pendingProps, n), t.child;
    case 8:
      return ge(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ge(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, a = t.pendingProps, o = t.memoizedProps, s = a.value, W(pa, r._currentValue), r._currentValue = s, o !== null) if (qe(o.value, s)) {
          if (o.children === a.children && !_e.current) {
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
                    var m = d.pending;
                    m === null ? u.next = u : (u.next = m.next, m.next = u), d.pending = u;
                  }
                }
                o.lanes |= n, u = o.alternate, u !== null && (u.lanes |= n), Zl(
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
            s.lanes |= n, i = s.alternate, i !== null && (i.lanes |= n), Zl(s, n, t), s = o.sibling;
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
        ge(e, t, a.children, n), t = t.child;
      }
      return t;
    case 9:
      return a = t.type, r = t.pendingProps.children, gn(t, n), a = Fe(a), r = r(a), t.flags |= 1, ge(e, t, r, n), t.child;
    case 14:
      return r = t.type, a = Ue(r, t.pendingProps), a = Ue(r.type, a), ui(e, t, r, a, n);
    case 15:
      return kc(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : Ue(r, a), Gr(e, t), t.tag = 1, Ne(r) ? (e = !0, ua(t)) : e = !1, gn(t, n), wc(t, r, a), to(t, r, a, n), ao(null, t, r, !0, e, n);
    case 19:
      return Tc(e, t, n);
    case 22:
      return Cc(e, t, n);
  }
  throw Error(k(156, t.tag));
};
function qc(e, t) {
  return xu(e, t);
}
function Rf(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Ie(e, t, n, r) {
  return new Rf(e, t, n, r);
}
function is(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function zf(e) {
  if (typeof e == "function") return is(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Eo) return 11;
    if (e === bo) return 14;
  }
  return 2;
}
function Et(e, t) {
  var n = e.alternate;
  return n === null ? (n = Ie(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Jr(e, t, n, r, a, o) {
  var s = 2;
  if (r = e, typeof e == "function") is(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else e: switch (e) {
    case Zt:
      return At(n.children, a, o, t);
    case Co:
      s = 8, a |= 8;
      break;
    case kl:
      return e = Ie(12, n, t, a | 2), e.elementType = kl, e.lanes = o, e;
    case Cl:
      return e = Ie(13, n, t, a), e.elementType = Cl, e.lanes = o, e;
    case El:
      return e = Ie(19, n, t, a), e.elementType = El, e.lanes = o, e;
    case nu:
      return Oa(n, a, o, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case eu:
          s = 10;
          break e;
        case tu:
          s = 9;
          break e;
        case Eo:
          s = 11;
          break e;
        case bo:
          s = 14;
          break e;
        case ht:
          s = 16, r = null;
          break e;
      }
      throw Error(k(130, e == null ? e : typeof e, ""));
  }
  return t = Ie(s, n, t, a), t.elementType = e, t.type = r, t.lanes = o, t;
}
function At(e, t, n, r) {
  return e = Ie(7, e, r, t), e.lanes = n, e;
}
function Oa(e, t, n, r) {
  return e = Ie(22, e, r, t), e.elementType = nu, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function pl(e, t, n) {
  return e = Ie(6, e, null, t), e.lanes = n, e;
}
function fl(e, t, n) {
  return t = Ie(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function $f(e, t, n, r, a) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Wa(0), this.expirationTimes = Wa(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Wa(0), this.identifierPrefix = r, this.onRecoverableError = a, this.mutableSourceEagerHydrationData = null;
}
function us(e, t, n, r, a, o, s, i, u) {
  return e = new $f(e, t, n, i, u), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = Ie(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, qo(o), e;
}
function Lf(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Jt, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Wc(e) {
  if (!e) return Pt;
  e = e._reactInternals;
  e: {
    if (Wt(e) !== e || e.tag !== 1) throw Error(k(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ne(t.type)) {
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
    if (Ne(n)) return Wu(e, n, t);
  }
  return t;
}
function Kc(e, t, n, r, a, o, s, i, u) {
  return e = us(n, r, !0, e, a, o, s, i, u), e.context = Wc(null), n = e.current, r = ve(), a = Ct(n), o = st(r, a), o.callback = t ?? null, Nt(n, o, a), e.current.lanes = a, gr(e, a, r), ke(e, r), e;
}
function Ia(e, t, n, r) {
  var a = t.current, o = ve(), s = Ct(a);
  return n = Wc(n), t.context === null ? t.context = n : t.pendingContext = n, t = st(o, s), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Nt(a, t, s), e !== null && (Qe(e, a, s, o), qr(e, a, s)), s;
}
function wa(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Si(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function cs(e, t) {
  Si(e, t), (e = e.alternate) && Si(e, t);
}
function Of() {
  return null;
}
var Gc = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function ds(e) {
  this._internalRoot = e;
}
Da.prototype.render = ds.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(k(409));
  Ia(e, t, null, null);
};
Da.prototype.unmount = ds.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Qt(function() {
      Ia(null, e, null, null);
    }), t[ut] = null;
  }
};
function Da(e) {
  this._internalRoot = e;
}
Da.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Cu();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < gt.length && t !== 0 && t < gt[n].priority; n++) ;
    gt.splice(n, 0, e), n === 0 && bu(e);
  }
};
function ps(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Fa(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function wi() {
}
function If(e, t, n, r, a) {
  if (a) {
    if (typeof r == "function") {
      var o = r;
      r = function() {
        var d = wa(s);
        o.call(d);
      };
    }
    var s = Kc(t, r, e, 0, null, !1, !1, "", wi);
    return e._reactRootContainer = s, e[ut] = s.current, or(e.nodeType === 8 ? e.parentNode : e), Qt(), s;
  }
  for (; a = e.lastChild; ) e.removeChild(a);
  if (typeof r == "function") {
    var i = r;
    r = function() {
      var d = wa(u);
      i.call(d);
    };
  }
  var u = us(e, 0, !1, null, null, !1, !1, "", wi);
  return e._reactRootContainer = u, e[ut] = u.current, or(e.nodeType === 8 ? e.parentNode : e), Qt(function() {
    Ia(t, u, n, r);
  }), u;
}
function Ma(e, t, n, r, a) {
  var o = n._reactRootContainer;
  if (o) {
    var s = o;
    if (typeof a == "function") {
      var i = a;
      a = function() {
        var u = wa(s);
        i.call(u);
      };
    }
    Ia(t, s, e, a);
  } else s = If(n, t, e, a, r);
  return wa(s);
}
Nu = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = An(t.pendingLanes);
        n !== 0 && (Ro(t, n | 1), ke(t, te()), !(B & 6) && (kn = te() + 500, zt()));
      }
      break;
    case 13:
      Qt(function() {
        var r = ct(e, 1);
        if (r !== null) {
          var a = ve();
          Qe(r, e, 1, a);
        }
      }), cs(e, 1);
  }
};
zo = function(e) {
  if (e.tag === 13) {
    var t = ct(e, 134217728);
    if (t !== null) {
      var n = ve();
      Qe(t, e, 134217728, n);
    }
    cs(e, 134217728);
  }
};
ku = function(e) {
  if (e.tag === 13) {
    var t = Ct(e), n = ct(e, t);
    if (n !== null) {
      var r = ve();
      Qe(n, e, t, r);
    }
    cs(e, t);
  }
};
Cu = function() {
  return Q;
};
Eu = function(e, t) {
  var n = Q;
  try {
    return Q = e, t();
  } finally {
    Q = n;
  }
};
Dl = function(e, t, n) {
  switch (t) {
    case "input":
      if (Tl(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var a = Pa(r);
            if (!a) throw Error(k(90));
            au(r), Tl(r, a);
          }
        }
      }
      break;
    case "textarea":
      ou(e, n);
      break;
    case "select":
      t = n.value, t != null && pn(e, !!n.multiple, t, !1);
  }
};
fu = ls;
hu = Qt;
var Df = { usingClientEntryPoint: !1, Events: [yr, rn, Pa, du, pu, ls] }, Dn = { findFiberByHostInstance: It, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Ff = { bundleType: Dn.bundleType, version: Dn.version, rendererPackageName: Dn.rendererPackageName, rendererConfig: Dn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: pt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = vu(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Dn.findFiberByHostInstance || Of, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Fr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Fr.isDisabled && Fr.supportsFiber) try {
    ka = Fr.inject(Ff), Je = Fr;
  } catch {
  }
}
ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Df;
ze.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ps(t)) throw Error(k(200));
  return Lf(e, t, null, n);
};
ze.createRoot = function(e, t) {
  if (!ps(e)) throw Error(k(299));
  var n = !1, r = "", a = Gc;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (a = t.onRecoverableError)), t = us(e, 1, !1, null, null, n, !1, r, a), e[ut] = t.current, or(e.nodeType === 8 ? e.parentNode : e), new ds(t);
};
ze.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(k(188)) : (e = Object.keys(e).join(","), Error(k(268, e)));
  return e = vu(t), e = e === null ? null : e.stateNode, e;
};
ze.flushSync = function(e) {
  return Qt(e);
};
ze.hydrate = function(e, t, n) {
  if (!Fa(t)) throw Error(k(200));
  return Ma(null, e, t, !0, n);
};
ze.hydrateRoot = function(e, t, n) {
  if (!ps(e)) throw Error(k(405));
  var r = n != null && n.hydratedSources || null, a = !1, o = "", s = Gc;
  if (n != null && (n.unstable_strictMode === !0 && (a = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = Kc(t, null, e, 1, n ?? null, a, !1, o, s), e[ut] = t.current, or(e), r) for (e = 0; e < r.length; e++) n = r[e], a = n._getVersion, a = a(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, a] : t.mutableSourceEagerHydrationData.push(
    n,
    a
  );
  return new Da(t);
};
ze.render = function(e, t, n) {
  if (!Fa(t)) throw Error(k(200));
  return Ma(null, e, t, !1, n);
};
ze.unmountComponentAtNode = function(e) {
  if (!Fa(e)) throw Error(k(40));
  return e._reactRootContainer ? (Qt(function() {
    Ma(null, null, e, !1, function() {
      e._reactRootContainer = null, e[ut] = null;
    });
  }), !0) : !1;
};
ze.unstable_batchedUpdates = ls;
ze.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Fa(n)) throw Error(k(200));
  if (e == null || e._reactInternals === void 0) throw Error(k(38));
  return Ma(e, t, n, !1, r);
};
ze.version = "18.3.1-next-f1338f8080-20240426";
function Yc() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Yc);
    } catch (e) {
      console.error(e);
    }
}
Yc(), Yi.exports = ze;
var Mf = Yi.exports, Xc, _i = Mf;
Xc = _i.createRoot, _i.hydrateRoot;
function Af(e) {
  return !e.product && !e.service ? {
    enabled: !1,
    reason: "Esta oportunidade ainda não está ligada a um produto ou serviço do portfólio; sem isso não é possível montar o business case."
  } : e.evidence.length === 0 ? {
    enabled: !1,
    reason: "Esta oportunidade ainda não tem evidências registradas; sem elas não é possível montar o business case."
  } : { enabled: !0, reason: null };
}
function Uf(e, t) {
  const n = e.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 40).replace(/-+$/, "") || "oportunidade", r = (a) => String(a).padStart(2, "0");
  return `business-case-${n}-${t.getFullYear()}-${r(t.getMonth() + 1)}-${r(t.getDate())}.pdf`;
}
function Bf(e) {
  return e === "ia" || e === "mista" || e === "deterministica" ? e : "desconhecida";
}
const Yt = "Rascunho para revisão do vendedor.";
function Vf(e, t) {
  return e === "ia" ? `Texto melhorado por IA. ${Yt}` : e === "mista" ? `Texto parcialmente melhorado por IA; o restante usa o texto padrão. ${Yt}` : e === "desconhecida" ? t ? `Business case baixado. Não foi possível confirmar se a IA foi usada. ${Yt}` : `Business case baixado. ${Yt}` : t ? `Texto padrão usado (IA indisponível). ${Yt}` : `Business case baixado. ${Yt}`;
}
const D = "/api/v1/modules/lead_tracker";
function Jc(e) {
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
function jr(e, t) {
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
async function Hf(e, t) {
  const n = await fetch(`${D}/exports/pdf`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ rows: e.map(Jc), filters_summary: t })
  });
  if (!n.ok) throw new Error(await F(n));
  jr(await n.blob(), "oportunidades.pdf");
}
async function Qf(e) {
  const t = await fetch(`${D}/exports/excel`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ rows: e.map(Jc) })
  });
  if (!t.ok) throw new Error(await F(t));
  jr(await t.blob(), "oportunidades.xlsx");
}
async function qf(e, t, n) {
  let r;
  try {
    r = await fetch(`${D}/exports/business-case`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ opportunity_id: e, usar_ia: t })
    });
  } catch (a) {
    throw a instanceof TypeError ? new Error("Não foi possível conectar ao módulo. Tente novamente.") : a;
  }
  if (!r.ok) throw new Error(await F(r));
  return jr(await r.blob(), Uf(n, /* @__PURE__ */ new Date())), { fonte: Bf(r.headers.get("X-Prosa-Fonte")) };
}
async function Zc(e) {
  const t = await fetch(`${D}/email-draft`, {
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
  if (!t.ok) throw new Error(await F(t));
  return t.json();
}
async function Wf(e, t) {
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
    lastContactId: r.last_contact_id
  };
}
async function Kf(e, t, n, r, a) {
  const o = await fetch(`${D}/opportunities/${e}/outreach-touches`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ rep_id: t, contact_id: a, channel: n, reason_label: r })
  });
  if (!o.ok) throw new Error(await F(o));
}
async function Gf(e) {
  const t = await fetch(`${D}/companies/${e}/contacts`);
  if (!t.ok) throw new Error(await F(t));
  return t.json();
}
async function Yf() {
  const e = await fetch(`${D}/settings`);
  if (!e.ok) throw new Error(await F(e));
  return e.json();
}
async function Ni(e, t, n) {
  const r = await fetch(`${D}/settings/${e}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ enabled: t, fields: n })
  });
  if (!r.ok) throw new Error(await F(r));
  return r.json();
}
async function ed() {
  const e = await fetch(`${D}/settings/ai`);
  if (!e.ok) throw new Error(await F(e));
  return e.json();
}
async function Xf(e, t, n) {
  const r = await fetch(`${D}/settings/ai`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ provider: e, api_key: t, model: n })
  });
  if (!r.ok) throw new Error(await F(r));
  return r.json();
}
async function Jf() {
  const e = await fetch(`${D}/settings/config/aging-sla-days`);
  if (!e.ok) throw new Error(await F(e));
  return e.json();
}
async function Zf(e) {
  const t = await fetch(`${D}/settings/config/aging-sla-days`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ days: e })
  });
  if (!t.ok) throw new Error(await F(t));
  return t.json();
}
async function eh() {
  const e = await fetch(`${D}/settings/config/rep-category-min-sample`);
  if (!e.ok) throw new Error(await F(e));
  return e.json();
}
async function th(e) {
  const t = await fetch(`${D}/settings/config/rep-category-min-sample`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ min_sample: e })
  });
  if (!t.ok) throw new Error(await F(t));
  return t.json();
}
async function nh() {
  const e = await fetch(`${D}/settings/config/geo-promotion`);
  if (!e.ok) throw new Error(await F(e));
  return e.json();
}
async function rh(e, t) {
  const n = await fetch(`${D}/settings/config/geo-promotion`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ min_score: e, daily_cap: t })
  });
  if (!n.ok) throw new Error(await F(n));
  return n.json();
}
async function ah(e) {
  const t = await fetch(`${D}/settings/${e}/test`, { method: "POST" });
  if (!t.ok) throw new Error(await F(t));
  return t.json();
}
function lh(e) {
  return e === null ? "baixa" : e >= 0.7 ? "alta" : e >= 0.4 ? "média" : "baixa";
}
function Aa(e) {
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
    priority: lh(e.opportunity_score),
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
    dismissalReason: e.dismissal_reason,
    discoveryPrompt: e.discovery_prompt ?? null,
    rootCauseStated: e.root_cause_stated ?? null,
    triggerEvent: e.trigger_event ?? null,
    championStake: e.champion_stake ?? null,
    discoverySkipped: e.discovery_skipped ?? !1,
    discoverySkipReason: e.discovery_skip_reason ?? null,
    discoveryPending: e.discovery_pending ?? !1
  };
}
async function td() {
  const e = await fetch(`${D}/opportunities`);
  if (!e.ok) throw new Error(await F(e));
  return (await e.json()).map(Aa);
}
async function oh(e, t) {
  const n = await fetch(`${D}/opportunities/${e}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      scope_note: t.scopeNote,
      criticality: t.criticality,
      severity_note: t.severityNote
    })
  });
  if (!n.ok) throw new Error(await F(n));
  const r = await n.json();
  return Aa(r);
}
async function sh(e, t, n, r = null, a = null) {
  const o = await fetch(`${D}/opportunities/${e}/status`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ new_status: t, note: n, dismissal_reason: r, skip_discovery_reason: a })
  });
  if (!o.ok) throw new Error(await F(o));
  const s = await o.json();
  return Aa(s);
}
async function ih(e, t) {
  const n = await fetch(`${D}/opportunities/${e}/discovery`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      root_cause_stated: t.rootCauseStated,
      trigger_event: t.triggerEvent,
      champion_stake: t.championStake
    })
  });
  if (!n.ok) throw new Error(await F(n));
  const r = await n.json();
  return Aa(r);
}
async function uh(e, t) {
  const n = await fetch(`${D}/companies/${e}/renewal-date`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ renewal_date: t })
  });
  if (!n.ok) throw new Error(await F(n));
}
async function ch() {
  const e = await fetch(`${D}/sync`, { method: "POST" });
  if (!e.ok) throw new Error(await F(e));
  return (await e.json()).map((n) => ({
    sourceId: n.source_id,
    companiesSynced: n.companies_synced,
    contactsSynced: n.contacts_synced,
    errors: n.errors
  }));
}
async function dh(e = "monthly") {
  const t = await fetch(`${D}/dashboard-metrics?period_type=${e}`);
  if (!t.ok) throw new Error(await F(t));
  const n = await t.json(), r = (a) => a.map(([o, s]) => ({ label: o, value: s }));
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
    funnelReach: n.funnel_reach.map((a) => ({
      stage: a.stage,
      reachCount: a.reach_count,
      reachRatioFromPrevious: a.reach_ratio_from_previous
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
    repCoverage: n.rep_coverage.map((a) => ({
      repId: a.rep_id,
      actual: a.actual,
      target: a.target,
      coverageRatio: a.coverage_ratio
    })),
    coveragePeriodType: n.coverage_period_type,
    coveragePeriodKey: n.coverage_period_key
  };
}
async function ph() {
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
function nd(e) {
  return {
    referenceProductId: e.reference_product_id,
    placeCategory: e.place_category,
    companySizeHint: e.company_size_hint,
    radiusKm: e.radius_km,
    searchOriginAddress: e.search_origin_address
  };
}
async function fh() {
  const e = await fetch(`${D}/icp-profile`);
  if (!e.ok) throw new Error(await F(e));
  return nd(await e.json());
}
async function hh(e) {
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
  return nd(await t.json());
}
async function mh() {
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
function hl(e) {
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
async function gh(e) {
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
    promoted: n.promoted.map(hl),
    deferred: n.deferred.map(hl),
    rejected: n.rejected.map(hl)
  };
}
function ml(e, t) {
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
function rd(e) {
  return [
    ...e.promoted.map((t) => ml(t, "Pronto para contato")),
    ...e.deferred.map((t) => ml(t, "Fila para amanhã")),
    ...e.rejected.map((t) => ml(t, "Fora do critério"))
  ];
}
async function vh(e, t) {
  const n = await fetch(`${D}/exports/pdf`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ rows: rd(e), filters_summary: t })
  });
  if (!n.ok) throw new Error(await F(n));
  jr(await n.blob(), "prospeccao-geografica.pdf");
}
async function yh(e) {
  const t = await fetch(`${D}/exports/excel`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ rows: rd(e) })
  });
  if (!t.ok) throw new Error(await F(t));
  jr(await t.blob(), "prospeccao-geografica.xlsx");
}
async function xh() {
  const e = await fetch(`${D}/vendors`);
  if (!e.ok) throw new Error(await F(e));
  return e.json();
}
async function jh(e) {
  const t = await fetch(`${D}/vendors`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e })
  });
  if (!t.ok) throw new Error(await F(t));
  return t.json();
}
async function ad() {
  const e = await fetch(`${D}/products`);
  if (!e.ok) throw new Error(await F(e));
  return e.json();
}
async function Sh(e, t, n) {
  const r = await fetch(`${D}/products`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ vendor_id: e, name: t, category: n || null })
  });
  if (!r.ok) throw new Error(await F(r));
  return r.json();
}
async function wh(e) {
  const t = await fetch(`${D}/products/${e}`, { method: "DELETE" });
  if (!t.ok) throw new Error(await F(t));
}
async function _h() {
  const e = await fetch(`${D}/services`);
  if (!e.ok) throw new Error(await F(e));
  return e.json();
}
async function Nh(e, t) {
  const n = await fetch(`${D}/services`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e, category: t || null })
  });
  if (!n.ok) throw new Error(await F(n));
  return n.json();
}
async function kh(e) {
  const t = await fetch(`${D}/services/${e}`, { method: "DELETE" });
  if (!t.ok) throw new Error(await F(t));
}
async function Ch() {
  const e = await fetch(`${D}/rules`);
  if (!e.ok) throw new Error(await F(e));
  return e.json();
}
async function Eh(e) {
  const t = await fetch(`${D}/rules`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  if (!t.ok) throw new Error(await F(t));
  return t.json();
}
async function bh(e) {
  const t = await fetch(`${D}/rules/${e}`, { method: "DELETE" });
  if (!t.ok) throw new Error(await F(t));
}
async function Ph(e, t) {
  const n = new FormData();
  n.append("file", e), n.append("mode", t);
  const r = await fetch(`${D}/csv-import`, { method: "POST", body: n });
  if (!r.ok) throw new Error(await F(r));
  return r.json();
}
async function Th(e, t) {
  const n = await fetch(`${D}/rep-targets?period_type=${e}&period_key=${encodeURIComponent(t)}`);
  if (!n.ok) throw new Error(await F(n));
  return n.json();
}
async function Rh(e) {
  const t = await fetch(`${D}/rep-targets`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  if (!t.ok) throw new Error(await F(t));
  return t.json();
}
async function zh(e = !1) {
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
async function $h(e, t, n) {
  const r = await fetch(`${D}/settings/salesforce/field-mapping`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ source_field_api_name: e, source_field_label: t, role: n })
  });
  if (!r.ok) throw new Error(await F(r));
  const a = await r.json();
  return { reassignedFromApiName: a.reassigned_from_api_name, reassignedFromLabel: a.reassigned_from_label };
}
async function Lh(e) {
  const t = await fetch(`${D}/settings/salesforce/field-mapping/${encodeURIComponent(e)}`, {
    method: "DELETE"
  });
  if (!t.ok) throw new Error(await F(t));
}
const Oh = [
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
], Ih = [
  "#3987e5",
  "#d95926",
  "#199e70",
  "#c98500",
  "#d55181",
  "#008300",
  "#9085e9",
  "#e66767"
], Dh = "#2a78d6", Fh = "#3987e5", Mh = 8;
function Ah(e, t, n = Mh) {
  if (e.length <= n) return e.map((s) => ({ label: t(s), value: s.value }));
  const r = e.slice(0, n - 1), o = e.slice(n - 1).reduce((s, i) => s + i.value, 0);
  return [...r.map((s) => ({ label: t(s), value: s.value })), { label: "Outros", value: o }];
}
function fs() {
  const [e, t] = v.useState(null);
  return { tooltip: e, setTooltip: t };
}
function hs({ tooltip: e }) {
  return e ? /* @__PURE__ */ l.jsxs(
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
        /* @__PURE__ */ l.jsx("strong", { children: e.label }),
        " ",
        e.value
      ]
    }
  ) : null;
}
function ki() {
  return document.documentElement.classList.contains("theme-dark") || document.body.classList.contains("theme-dark");
}
function Ua() {
  const [e, t] = v.useState(ki);
  return v.useEffect(() => {
    const n = new MutationObserver(() => t(ki()));
    return n.observe(document.documentElement, { attributes: !0, attributeFilter: ["class"] }), n.observe(document.body, { attributes: !0, attributeFilter: ["class"] }), () => n.disconnect();
  }, []), e;
}
function Xt({ data: e, formatValue: t, emptyMessage: n }) {
  const { tooltip: r, setTooltip: a } = fs(), o = Ua() ? Fh : Dh;
  if (e.length === 0)
    return /* @__PURE__ */ l.jsx("p", { className: "lt-empty", role: "status", children: n });
  const s = Math.max(...e.map((i) => i.value), 1);
  return /* @__PURE__ */ l.jsxs(
    "div",
    {
      style: { position: "relative", display: "flex", flexDirection: "column", gap: 10 },
      role: "img",
      "aria-label": e.map((i) => `${i.label}: ${t(i.value)}`).join("; "),
      children: [
        e.map((i) => /* @__PURE__ */ l.jsxs("div", { children: [
          /* @__PURE__ */ l.jsxs("div", { style: { display: "flex", justifyContent: "space-between", fontSize: 11, color: "hsl(var(--text-muted))", marginBottom: 3 }, children: [
            /* @__PURE__ */ l.jsx("span", { children: i.label }),
            /* @__PURE__ */ l.jsx("span", { style: { fontVariantNumeric: "tabular-nums" }, children: t(i.value) })
          ] }),
          /* @__PURE__ */ l.jsx("div", { style: { height: 8, background: "hsl(var(--bg-subtle))", borderRadius: 4 }, children: /* @__PURE__ */ l.jsx(
            "div",
            {
              style: {
                height: 8,
                borderRadius: 4,
                background: o,
                width: `${i.value / s * 100}%`
              },
              onMouseEnter: (u) => a({ x: u.clientX, y: u.clientY, label: i.label, value: t(i.value) }),
              onMouseMove: (u) => a({ x: u.clientX, y: u.clientY, label: i.label, value: t(i.value) }),
              onMouseLeave: () => a(null)
            }
          ) })
        ] }, i.label)),
        /* @__PURE__ */ l.jsx(hs, { tooltip: r })
      ]
    }
  );
}
function gl({ id: e, title: t, description: n, actions: r, children: a }) {
  return /* @__PURE__ */ l.jsxs("section", { className: "lt-dash-section", "aria-labelledby": `${e}-title`, children: [
    /* @__PURE__ */ l.jsxs("div", { className: "lt-dash-section__header", children: [
      /* @__PURE__ */ l.jsxs("div", { children: [
        /* @__PURE__ */ l.jsx("h3", { id: `${e}-title`, children: t }),
        n && /* @__PURE__ */ l.jsx("p", { className: "lt-hint", children: n })
      ] }),
      r
    ] }),
    a
  ] });
}
const vo = 140, _a = 60, Uh = 22, Ci = vo / 2;
function Ei(e) {
  const t = (e - 90) * Math.PI / 180;
  return [Ci + _a * Math.cos(t), Ci + _a * Math.sin(t)];
}
function Bh(e, t) {
  const [n, r] = Ei(e), [a, o] = Ei(t), s = t - e > 180 ? 1 : 0;
  return `M ${n} ${r} A ${_a} ${_a} 0 ${s} 1 ${a} ${o}`;
}
function Vh({ data: e, emptyMessage: t }) {
  const { tooltip: n, setTooltip: r } = fs(), a = Ua() ? Ih : Oh;
  if (e.length === 0)
    return /* @__PURE__ */ l.jsx("p", { className: "lt-empty", role: "status", children: t });
  const o = Ah(e, (d) => d.label), s = o.reduce((d, m) => d + m.value, 0) || 1;
  let i = 0;
  const u = o.map((d, m) => {
    const h = i, g = d.value / s * 360;
    return i += g, { ...d, startAngle: h, endAngle: i, color: a[m % a.length] };
  });
  return /* @__PURE__ */ l.jsxs("div", { style: { display: "flex", gap: 16, alignItems: "center", position: "relative" }, children: [
    /* @__PURE__ */ l.jsx("svg", { width: vo, height: vo, role: "img", "aria-label": o.map((d) => `${d.label}: ${d.value}`).join("; "), children: u.map((d) => /* @__PURE__ */ l.jsx(
      "path",
      {
        d: Bh(d.startAngle, d.endAngle),
        fill: "none",
        stroke: d.color,
        strokeWidth: Uh,
        onMouseEnter: (m) => r({ x: m.clientX, y: m.clientY, label: d.label, value: `${d.value} (${Math.round(d.value / s * 100)}%)` }),
        onMouseMove: (m) => r({ x: m.clientX, y: m.clientY, label: d.label, value: `${d.value} (${Math.round(d.value / s * 100)}%)` }),
        onMouseLeave: () => r(null)
      },
      d.label
    )) }),
    /* @__PURE__ */ l.jsx("ul", { style: { listStyle: "none", margin: 0, padding: 0, fontSize: 11, display: "flex", flexDirection: "column", gap: 6 }, children: u.map((d) => /* @__PURE__ */ l.jsxs("li", { style: { display: "flex", alignItems: "center", gap: 6 }, children: [
      /* @__PURE__ */ l.jsx("span", { style: { width: 8, height: 8, borderRadius: 2, background: d.color, display: "inline-block" }, "aria-hidden": "true" }),
      /* @__PURE__ */ l.jsx("span", { style: { color: "hsl(var(--text))" }, children: d.label }),
      /* @__PURE__ */ l.jsxs("span", { style: { color: "hsl(var(--text-muted))", fontVariantNumeric: "tabular-nums" }, children: [
        Math.round(d.value / s * 100),
        "%"
      ] })
    ] }, d.label)) }),
    /* @__PURE__ */ l.jsx(hs, { tooltip: n })
  ] });
}
function tt(e) {
  return e.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });
}
function nt(e) {
  return e.toLocaleString("pt-BR");
}
function dn(e) {
  return e > 0 && e < 5e-3 ? "<1%" : e < 1 && e >= 0.995 ? ">99%" : `${Math.round(e * 100)}%`;
}
const Hh = ["#5598e7", "#2a78d6", "#1c5cab", "#104281"], Qh = ["#7db8f0", "#5598e7", "#2a78d6", "#1c5cab"];
function bi({ stages: e, counts: t }) {
  const { tooltip: n, setTooltip: r } = fs(), a = Ua() ? Qh : Hh, o = Math.max(...e.map((s) => t[s] ?? 0), 1);
  return /* @__PURE__ */ l.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 8, position: "relative" }, role: "img", "aria-label": e.map((s) => `${s}: ${t[s] ?? 0}`).join("; "), children: [
    e.map((s, i) => {
      const u = t[s] ?? 0, d = u / o * 100;
      return /* @__PURE__ */ l.jsxs("div", { children: [
        /* @__PURE__ */ l.jsxs("div", { style: { display: "flex", justifyContent: "space-between", fontSize: 11, color: "hsl(var(--text-muted))", marginBottom: 3 }, children: [
          /* @__PURE__ */ l.jsx("span", { children: s }),
          /* @__PURE__ */ l.jsx("span", { style: { fontVariantNumeric: "tabular-nums" }, children: u })
        ] }),
        /* @__PURE__ */ l.jsx(
          "div",
          {
            style: { height: 16, borderRadius: 4, background: a[i % a.length], width: `${d}%`, minWidth: 4 },
            onMouseEnter: (m) => r({ x: m.clientX, y: m.clientY, label: s, value: String(u) }),
            onMouseMove: (m) => r({ x: m.clientX, y: m.clientY, label: s, value: String(u) }),
            onMouseLeave: () => r(null)
          }
        )
      ] }, s);
    }),
    /* @__PURE__ */ l.jsx(hs, { tooltip: n })
  ] });
}
function we({ text: e }) {
  const [t, n] = v.useState(!1), r = v.useRef(null);
  return v.useEffect(() => {
    if (!t) return;
    const a = (s) => {
      r.current && !r.current.contains(s.target) && n(!1);
    }, o = (s) => {
      s.key === "Escape" && n(!1);
    };
    return document.addEventListener("mousedown", a), document.addEventListener("keydown", o), () => {
      document.removeEventListener("mousedown", a), document.removeEventListener("keydown", o);
    };
  }, [t]), /* @__PURE__ */ l.jsxs("div", { className: "lt-info-hint", ref: r, children: [
    /* @__PURE__ */ l.jsx(
      "button",
      {
        type: "button",
        className: "lt-info-hint__btn",
        "aria-label": "Mais informações",
        "aria-expanded": t,
        onClick: () => n((a) => !a),
        children: "i"
      }
    ),
    t && /* @__PURE__ */ l.jsx("div", { className: "lt-info-hint__popover", role: "tooltip", children: e })
  ] });
}
const qh = ["Detectadas", "Qualificadas", "Abordadas", "Em negociação"], yn = {
  detected: "Detectadas",
  qualified: "Qualificadas",
  reviewed: "Revisadas",
  contacted: "Abordadas",
  opportunity: "Em negociação"
}, ld = ["detected", "qualified", "reviewed", "contacted", "opportunity"], Wh = "contacted", vl = (e) => yn[e] ?? e, yl = (e, t, n) => e === 1 ? t : n;
function Kh(e, t, n, r, a, o) {
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
  const i = ld.map((g) => `${vl(g)}: ${e.reachCounts[g] ?? 0}`).join(" · "), u = e.reachRatios[r];
  if (e.insufficient || u === null || u === void 0)
    return {
      kind: "insufficient",
      text: `n=${e.n}`,
      intensity: null,
      fragile: !1,
      ariaLabel: `n=${e.n}: ${s}, dado insuficiente, ${e.n} de ${a} oportunidades necessárias`,
      tooltip: `Dado insuficiente: ${e.n} de ${a} necessárias. Nenhuma leitura é segura — acompanhe o volume ou olhe os deals um a um.
${i}`,
      opportunityIds: e.opportunityIds
    };
  const d = e.reachCounts[r] ?? 0, m = e.n < a * 2, h = o === null ? "" : `Mediana do time nesta categoria: ${dn(o)}.`;
  return {
    kind: "value",
    text: dn(u),
    intensity: u,
    fragile: m,
    // Nome acessível começa pelo texto visível (SC 2.5.3 "label in name") e carrega o que o
    // tooltip diria — `title` sozinho não chega a teclado/toque.
    ariaLabel: `${dn(u)}: ${s}, ${d} de ${e.n} chegaram a ${vl(r)}${o === null ? "" : `, mediana do time ${dn(o)}`}${m ? ", amostra pequena" : ""}`,
    tooltip: [
      `${d} de ${e.n} chegaram a ${vl(r)} ou além.`,
      i,
      h,
      m ? "Amostra pequena: percentuais com n baixo oscilam muito." : ""
    ].filter(Boolean).join(`
`),
    opportunityIds: e.opportunityIds
  };
}
const od = (e, t) => e.localeCompare(t, "pt-BR"), sd = (e) => [...new Set(e.cells.map((t) => t.repId))].sort(od), id = (e) => [...new Set(e.cells.map((t) => t.category))].sort(od);
function Gh(e, t, n, r) {
  const a = sd(e).filter((h) => !n.has(h)), o = id(e).filter((h) => !r.has(h)), s = new Map(e.cells.map((h) => [`${h.repId}\0${h.category}`, h])), i = o.map((h) => {
    var g;
    return ((g = e.teamMedian[h]) == null ? void 0 : g[t]) ?? null;
  }), u = a.map((h) => o.map((g, y) => Kh(s.get(`${h}\0${g}`), h, g, t, e.minSample, i[y]))), d = u.flat().filter((h) => h.kind === "insufficient").length, m = `${a.length} ${yl(a.length, "representante", "representantes")}, ${o.length} ${yl(o.length, "categoria", "categorias")}, ${d} ${yl(d, "par sem dado suficiente", "pares sem dado suficiente")}`;
  return { reps: a, categories: o, rows: u, reference: i, summary: m };
}
const Yh = [[236, 242, 251], [11, 61, 130]], Xh = [[38, 50, 66], [122, 182, 255]], Jh = (e, t, n) => [0, 1, 2].map((r) => Math.round(e[r] + (t[r] - e[r]) * n));
function Pi([e, t, n]) {
  const r = (a) => {
    const o = a / 255;
    return o <= 0.03928 ? o / 12.92 : ((o + 0.055) / 1.055) ** 2.4;
  };
  return 0.2126 * r(e) + 0.7152 * r(t) + 0.0722 * r(n);
}
function Ti(e, t) {
  const [n, r] = [Pi(e), Pi(t)].sort((a, o) => o - a);
  return (n + 0.05) / (r + 0.05);
}
function Zh(e, t) {
  const [n, r] = t ? Xh : Yh, a = Jh(n, r, Math.min(1, Math.max(0, e))), o = Ti(a, [0, 0, 0]) >= Ti(a, [255, 255, 255]) ? [0, 0, 0] : [255, 255, 255];
  return { background: `rgb(${a.join(",")})`, color: `rgb(${o.join(",")})`, rgb: a };
}
const em = "Retrato do momento, não taxa de conversão: mostra quantas oportunidades já chegaram a cada estágio, sem histórico de transição. Use para decidir o que perguntar ao rep, não para avaliá-lo.";
function Ri(e, t) {
  const n = new Set(e);
  return n.has(t) ? n.delete(t) : n.add(t), n;
}
function tm() {
  const e = Ua(), [t, n] = v.useState(null), [r, a] = v.useState(null), [o, s] = v.useState(Wh), [i, u] = v.useState(/* @__PURE__ */ new Set()), [d, m] = v.useState(/* @__PURE__ */ new Set()), [h, g] = v.useState(null), [y, S] = v.useState(null), [j, _] = v.useState(null), f = v.useRef(null), c = v.useRef(null), p = v.useRef(null), w = v.useCallback(() => {
    a(null), ph().then(n).catch(($) => a($ instanceof Error ? $.message : "Não consegui carregar o alcance por representante e categoria."));
  }, []);
  v.useEffect(w, [w]), v.useEffect(() => {
    var $;
    h && (($ = c.current) == null || $.focus());
  }, [h]);
  const x = v.useMemo(() => t ? Gh(t, o, i, d) : null, [t, o, i, d]), b = v.useCallback(() => {
    _(null), f.current || (f.current = td()), f.current.then(S).catch(($) => {
      f.current = null, _($ instanceof Error ? $.message : "Não consegui carregar as oportunidades.");
    });
  }, []), P = ($, q) => {
    p.current = q, g($), y || b();
  }, E = () => {
    var $;
    g(null), ($ = p.current) == null || $.focus();
  };
  if (r)
    return /* @__PURE__ */ l.jsxs("div", { children: [
      /* @__PURE__ */ l.jsx("p", { className: "lt-alert", role: "alert", children: r }),
      /* @__PURE__ */ l.jsx("button", { type: "button", className: "lt-btn", onClick: w, children: "Tentar de novo" })
    ] });
  if (!t || !x) return /* @__PURE__ */ l.jsx("p", { className: "lt-empty", role: "status", children: "Carregando…" });
  if (t.cells.length === 0)
    return /* @__PURE__ */ l.jsx("p", { className: "lt-empty", role: "status", children: "Nenhuma oportunidade com representante atribuído ainda." });
  const A = yn[o] ?? o, R = h && !i.has(h.rep) && !d.has(h.category) ? h : null, V = R ? new Set(R.ids) : null, I = V && y ? y.filter(($) => V.has($.id)) : [];
  return /* @__PURE__ */ l.jsxs("div", { className: "lt-matrix", children: [
    /* @__PURE__ */ l.jsx("p", { className: "lt-hint lt-matrix__warning", children: em }),
    /* @__PURE__ */ l.jsxs("div", { className: "lt-toolbar lt-matrix__toolbar", children: [
      /* @__PURE__ */ l.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ l.jsx("span", { children: "Chegou a" }),
        /* @__PURE__ */ l.jsx("select", { value: o, onChange: ($) => s($.target.value), children: ld.map(($) => /* @__PURE__ */ l.jsxs("option", { value: $, children: [
          yn[$] ?? $,
          " ou além"
        ] }, $)) })
      ] }),
      /* @__PURE__ */ l.jsx(zi, { label: "Representantes", options: sd(t), hidden: i, onToggle: ($) => u((q) => Ri(q, $)) }),
      /* @__PURE__ */ l.jsx(zi, { label: "Categorias", options: id(t), hidden: d, onToggle: ($) => m((q) => Ri(q, $)) })
    ] }),
    /* @__PURE__ */ l.jsxs("p", { className: "lt-hint", role: "status", children: [
      x.summary,
      ". Mínimo de ",
      t.minSample,
      " oportunidades por par (configurável em Configurações)."
    ] }),
    /* @__PURE__ */ l.jsx("div", { className: "lt-matrix__scroll", role: "region", "aria-label": "Alcance do funil por representante e categoria", tabIndex: 0, children: /* @__PURE__ */ l.jsxs("table", { className: "lt-table lt-matrix__table", children: [
      /* @__PURE__ */ l.jsxs("caption", { className: "lt-matrix__caption", children: [
        "Onde as oportunidades estão hoje, por rep e categoria — percentual que já chegou a ",
        A,
        " ou além"
      ] }),
      /* @__PURE__ */ l.jsx("thead", { children: /* @__PURE__ */ l.jsxs("tr", { children: [
        /* @__PURE__ */ l.jsx("th", { scope: "col", children: "Representante" }),
        x.categories.map(($) => /* @__PURE__ */ l.jsx("th", { scope: "col", children: $ }, $))
      ] }) }),
      /* @__PURE__ */ l.jsx("tbody", { children: x.reps.map(($, q) => /* @__PURE__ */ l.jsxs("tr", { children: [
        /* @__PURE__ */ l.jsx("th", { scope: "row", children: $ }),
        x.rows[q].map((H, Ce) => {
          const me = x.categories[Ce];
          if (H.kind === "none")
            return /* @__PURE__ */ l.jsxs("td", { className: "lt-matrix__cell lt-matrix__cell--none", children: [
              "—",
              /* @__PURE__ */ l.jsx("span", { className: "lt-sr-only", children: " sem oportunidades neste par" })
            ] }, me);
          const T = H.intensity === null ? void 0 : Zh(H.intensity, e);
          return /* @__PURE__ */ l.jsx("td", { className: "lt-matrix__cell", children: /* @__PURE__ */ l.jsxs(
            "button",
            {
              type: "button",
              className: `lt-matrix__btn${H.kind === "insufficient" ? " lt-matrix__btn--insufficient" : ""}${H.kind === "value" && H.intensity === 0 ? " lt-matrix__btn--zero" : ""}`,
              style: T ? { background: T.background, color: T.color } : void 0,
              title: H.tooltip,
              "aria-label": H.ariaLabel,
              onClick: (O) => P({ rep: $, category: me, ids: H.opportunityIds, detail: H.tooltip }, O.currentTarget),
              children: [
                H.text,
                H.fragile && /* @__PURE__ */ l.jsx("span", { "aria-hidden": "true", className: "lt-matrix__mark", children: "*" })
              ]
            }
          ) }, me);
        })
      ] }, $)) }),
      /* @__PURE__ */ l.jsx("tfoot", { children: /* @__PURE__ */ l.jsxs("tr", { children: [
        /* @__PURE__ */ l.jsx("th", { scope: "row", children: "Mediana do time" }),
        x.reference.map(($, q) => /* @__PURE__ */ l.jsx("td", { className: "lt-matrix__ref", children: $ === null ? "sem referência" : dn($) }, x.categories[q]))
      ] }) })
    ] }) }),
    /* @__PURE__ */ l.jsxs("ul", { className: "lt-matrix__legend", "aria-label": "Legenda", children: [
      /* @__PURE__ */ l.jsxs("li", { children: [
        /* @__PURE__ */ l.jsx("span", { className: "lt-matrix__swatch lt-matrix__swatch--ramp", "aria-hidden": "true" }),
        "0% a 100% (escala fixa)"
      ] }),
      /* @__PURE__ */ l.jsxs("li", { children: [
        /* @__PURE__ */ l.jsx("span", { className: "lt-matrix__swatch lt-matrix__swatch--zero", "aria-hidden": "true" }),
        "0% real, com amostra suficiente"
      ] }),
      /* @__PURE__ */ l.jsxs("li", { children: [
        /* @__PURE__ */ l.jsx("span", { className: "lt-matrix__swatch lt-matrix__swatch--insufficient", "aria-hidden": "true" }),
        "Dado insuficiente (n abaixo de ",
        t.minSample,
        ")"
      ] }),
      /* @__PURE__ */ l.jsxs("li", { children: [
        /* @__PURE__ */ l.jsx("span", { className: "lt-matrix__mark", "aria-hidden": "true", children: "*" }),
        "Amostra pequena (menos de ",
        t.minSample * 2,
        "): oscila muito"
      ] })
    ] }),
    /* @__PURE__ */ l.jsxs("p", { className: "lt-hint", children: [
      "Alcance acumulado: oportunidade que chegou ao estágio escolhido ou além. Sem ranking — compare dentro do contexto da categoria.",
      t.unassignedCount > 0 && ` ${t.unassignedCount} oportunidade(s) sem representante atribuído ficam fora da matriz.`
    ] }),
    R && /* @__PURE__ */ l.jsxs("div", { className: "lt-matrix__deals", children: [
      /* @__PURE__ */ l.jsxs("div", { className: "lt-header-row", children: [
        /* @__PURE__ */ l.jsxs("h5", { ref: c, tabIndex: -1, children: [
          "Oportunidades de ",
          R.rep,
          " em ",
          R.category
        ] }),
        /* @__PURE__ */ l.jsx(we, { text: "Os deals por trás da célula: vale olhá-los um a um antes de tirar qualquer conclusão." }),
        /* @__PURE__ */ l.jsx("button", { type: "button", className: "lt-btn", onClick: E, children: "Fechar" })
      ] }),
      R.detail.split(`
`).map(($) => /* @__PURE__ */ l.jsx("p", { className: "lt-hint", children: $ }, $)),
      j ? /* @__PURE__ */ l.jsxs("div", { children: [
        /* @__PURE__ */ l.jsx("p", { className: "lt-alert", role: "alert", children: j }),
        /* @__PURE__ */ l.jsx("button", { type: "button", className: "lt-btn", onClick: b, children: "Tentar de novo" })
      ] }) : y ? /* @__PURE__ */ l.jsxs("table", { className: "lt-table", "aria-label": `Oportunidades de ${R.rep} em ${R.category}`, children: [
        /* @__PURE__ */ l.jsx("thead", { children: /* @__PURE__ */ l.jsxs("tr", { children: [
          /* @__PURE__ */ l.jsx("th", { scope: "col", children: "Empresa" }),
          /* @__PURE__ */ l.jsx("th", { scope: "col", children: "Estágio" })
        ] }) }),
        /* @__PURE__ */ l.jsxs("tbody", { children: [
          I.map(($) => /* @__PURE__ */ l.jsxs("tr", { children: [
            /* @__PURE__ */ l.jsx("td", { children: $.companyName }),
            /* @__PURE__ */ l.jsx("td", { children: yn[$.status] ?? $.status })
          ] }, $.id)),
          I.length === 0 && /* @__PURE__ */ l.jsx("tr", { children: /* @__PURE__ */ l.jsx("td", { colSpan: 2, children: "Nenhuma oportunidade viva neste par agora." }) })
        ] })
      ] }) : /* @__PURE__ */ l.jsx("p", { className: "lt-hint", role: "status", children: "Carregando…" })
    ] })
  ] });
}
function zi({ label: e, options: t, hidden: n, onToggle: r }) {
  return /* @__PURE__ */ l.jsxs("details", { className: "lt-matrix__filter", children: [
    /* @__PURE__ */ l.jsxs("summary", { children: [
      e,
      n.size > 0 ? ` (${t.length - n.size} de ${t.length})` : ""
    ] }),
    /* @__PURE__ */ l.jsx("ul", { children: t.map((a) => /* @__PURE__ */ l.jsx("li", { children: /* @__PURE__ */ l.jsxs("label", { children: [
      /* @__PURE__ */ l.jsx("input", { type: "checkbox", checked: !n.has(a), onChange: () => r(a) }),
      /* @__PURE__ */ l.jsx("span", { children: a })
    ] }) }, a)) })
  ] });
}
function Ge({ label: e, value: t, hint: n, tone: r, action: a }) {
  return /* @__PURE__ */ l.jsxs("div", { className: `lt-stat-tile${r === "attention" ? " lt-stat-tile--attention" : ""}`, children: [
    /* @__PURE__ */ l.jsxs("div", { className: "lt-stat-tile__top", children: [
      /* @__PURE__ */ l.jsx("div", { className: "lt-stat-tile__value", style: { fontVariantNumeric: "tabular-nums" }, children: t }),
      n && /* @__PURE__ */ l.jsx(we, { text: n })
    ] }),
    /* @__PURE__ */ l.jsx("div", { className: "lt-stat-tile__label", children: e }),
    r === "attention" && a && /* @__PURE__ */ l.jsx("div", { className: "lt-stat-tile__action", children: a })
  ] });
}
function nm() {
  const [e, t] = v.useState("monthly"), [n, r] = v.useState(null), [a, o] = v.useState(null), [s, i] = v.useState(!0), [u, d] = v.useState(0);
  if (v.useEffect(() => {
    let y = !1;
    return o(null), i(!0), dh(e).then((S) => {
      y || r(S);
    }).catch((S) => {
      y || o(S instanceof Error ? S.message : "Não consegui carregar as métricas.");
    }).finally(() => {
      y || i(!1);
    }), () => {
      y = !0;
    };
  }, [e, u]), a && !n)
    return /* @__PURE__ */ l.jsxs("div", { role: "alert", children: [
      /* @__PURE__ */ l.jsx("p", { className: "lt-alert", children: a }),
      /* @__PURE__ */ l.jsx("button", { type: "button", className: "lt-btn", onClick: () => d((y) => y + 1), children: "Tentar de novo" })
    ] });
  if (!n) return /* @__PURE__ */ l.jsx("p", { className: "lt-empty", role: "status", children: "Carregando…" });
  const { kpis: m } = n, h = {};
  n.funnelReach.forEach((y) => {
    h[yn[y.stage] ?? y.stage] = y.reachCount;
  });
  const g = n.funnelReach.map((y) => yn[y.stage] ?? y.stage);
  return /* @__PURE__ */ l.jsxs("section", { className: "lt-dashboard", "aria-labelledby": "lt-dash-title", "aria-busy": s, children: [
    /* @__PURE__ */ l.jsxs("div", { className: "lt-header lt-header-row", children: [
      /* @__PURE__ */ l.jsx("h2", { id: "lt-dash-title", children: "Dashboard Executivo" }),
      /* @__PURE__ */ l.jsx(we, { text: "Visão consolidada — dado real da sua instalação." })
    ] }),
    /* @__PURE__ */ l.jsx(gl, { id: "lt-dash-today", title: "Hoje: o que fazer?", description: "O que pede uma decisão agora.", children: /* @__PURE__ */ l.jsxs("div", { className: "lt-stat-grid", children: [
      /* @__PURE__ */ l.jsx(
        Ge,
        {
          label: "Triagem atrasada",
          value: nt(n.agingCount),
          tone: n.agingCount > 0 ? "attention" : void 0,
          action: `Vale qualificar ou descartar as detectadas há mais de ${n.agingSlaDays} dia(s).`,
          hint: `Detectadas há mais de ${n.agingSlaDays} dia(s) sem virar qualificada nem descartada (SLA configurável em Configurações).`
        }
      ),
      /* @__PURE__ */ l.jsx(
        Ge,
        {
          label: "Oportunidades zumbi",
          value: nt(n.zombieCount),
          tone: n.zombieCount > 0 ? "attention" : void 0,
          action: "Vale decidir: retomar o contato ou descartar.",
          hint: "Paradas há mais de 30 dias no mesmo estágio — excluídas do potencial ponderado e dos cortes por rep/segmento/fonte."
        }
      ),
      /* @__PURE__ */ l.jsx(
        Ge,
        {
          label: "Oportunidades identificadas",
          value: nt(m.opportunitiesIdentified),
          hint: "Total de oportunidades já detectadas pelo motor, em qualquer estágio."
        }
      )
    ] }) }),
    /* @__PURE__ */ l.jsxs(gl, { id: "lt-dash-pipeline", title: "Pipeline: como está?", description: "Volume, valor e andamento das oportunidades.", children: [
      /* @__PURE__ */ l.jsxs("div", { className: "lt-stat-grid", children: [
        /* @__PURE__ */ l.jsx(
          Ge,
          {
            label: "Potencial financeiro",
            value: tt(m.financialPotentialTotal),
            hint: "Soma bruta de todas as oportunidades com valor estimado — sem ponderar por confiança."
          }
        ),
        /* @__PURE__ */ l.jsx(
          Ge,
          {
            label: "Potencial ponderado (avaliado)",
            value: tt(n.weightedPotential.weightedEvaluatedTotal),
            hint: "Só oportunidades com confiança real avaliada, multiplicada pelo potencial — nunca substitui o bruto, complementa."
          }
        ),
        /* @__PURE__ */ l.jsx(
          Ge,
          {
            label: "Potencial ponderado (estimado)",
            value: tt(n.weightedPotential.weightedEstimatedTotal),
            hint: "Inclui também as sem confiança avaliada, usando uma estimativa conservadora — visão mais otimista que o avaliado."
          }
        ),
        /* @__PURE__ */ l.jsx(
          Ge,
          {
            label: "Clientes analisados",
            value: nt(m.customersAnalyzed),
            hint: "Empresas marcadas como cliente atual em pelo menos uma fonte."
          }
        ),
        /* @__PURE__ */ l.jsx(
          Ge,
          {
            label: "Prospects analisados",
            value: nt(m.prospectsAnalyzed),
            hint: "Empresas sem relação de cliente ainda, mas já mapeadas."
          }
        ),
        /* @__PURE__ */ l.jsx(
          Ge,
          {
            label: "Oportunidades de produto",
            value: nt(m.productOpportunities),
            hint: "Oportunidades associadas a um produto específico do portfólio."
          }
        ),
        /* @__PURE__ */ l.jsx(
          Ge,
          {
            label: "Oportunidades de serviço",
            value: nt(m.serviceOpportunities),
            hint: "Oportunidades associadas a um serviço específico do portfólio."
          }
        )
      ] }),
      /* @__PURE__ */ l.jsxs("div", { className: "lt-chart-grid", children: [
        /* @__PURE__ */ l.jsxs("div", { role: "group", className: "lt-chart-card lt-chart-card--wide", "aria-labelledby": "lt-chart-funnel", children: [
          /* @__PURE__ */ l.jsx("h4", { id: "lt-chart-funnel", children: "Funil de oportunidades" }),
          /* @__PURE__ */ l.jsx(bi, { stages: qh, counts: n.funnelCounts })
        ] }),
        /* @__PURE__ */ l.jsxs("div", { role: "group", className: "lt-chart-card lt-chart-card--wide", "aria-labelledby": "lt-chart-reach", children: [
          /* @__PURE__ */ l.jsxs("div", { className: "lt-header-row", children: [
            /* @__PURE__ */ l.jsx("h4", { id: "lt-chart-reach", children: "Alcance do funil" }),
            /* @__PURE__ */ l.jsx(we, { text: 'Quantas oportunidades já chegaram em cada etapa ou passaram dela, hoje — nunca "taxa de conversão" (o histórico completo de quando cada uma mudou de estágio ainda não é guardado, então não dá pra calcular uma taxa de coorte de verdade).' })
          ] }),
          /* @__PURE__ */ l.jsx(bi, { stages: g, counts: h })
        ] }),
        /* @__PURE__ */ l.jsxs("div", { role: "group", className: "lt-chart-card", "aria-labelledby": "lt-chart-vendor-money", children: [
          /* @__PURE__ */ l.jsx("h4", { id: "lt-chart-vendor-money", children: "Potencial financeiro por fabricante" }),
          /* @__PURE__ */ l.jsx(Xt, { data: n.financialByVendor, formatValue: tt, emptyMessage: "Sem potencial financeiro registrado." })
        ] }),
        /* @__PURE__ */ l.jsxs("div", { role: "group", className: "lt-chart-card", "aria-labelledby": "lt-chart-service", children: [
          /* @__PURE__ */ l.jsx("h4", { id: "lt-chart-service", children: "Oportunidades por serviço" }),
          /* @__PURE__ */ l.jsx(Xt, { data: n.opportunitiesByService, formatValue: nt, emptyMessage: "Sem oportunidades de serviço." })
        ] }),
        /* @__PURE__ */ l.jsxs("div", { role: "group", className: "lt-chart-card", "aria-labelledby": "lt-chart-segment", children: [
          /* @__PURE__ */ l.jsx("h4", { id: "lt-chart-segment", children: "Potencial por segmento" }),
          /* @__PURE__ */ l.jsx(Xt, { data: n.potentialBySegment, formatValue: tt, emptyMessage: "Sem oportunidade com segmento atribuído ainda." })
        ] }),
        /* @__PURE__ */ l.jsxs("div", { role: "group", className: "lt-chart-card", "aria-labelledby": "lt-chart-source", children: [
          /* @__PURE__ */ l.jsx("h4", { id: "lt-chart-source", children: "Potencial por fonte" }),
          /* @__PURE__ */ l.jsx(Xt, { data: n.potentialBySource, formatValue: tt, emptyMessage: "Sem oportunidade com fonte atribuída ainda." })
        ] }),
        /* @__PURE__ */ l.jsxs("div", { role: "group", className: "lt-chart-card", "aria-labelledby": "lt-chart-customer", children: [
          /* @__PURE__ */ l.jsx("h4", { id: "lt-chart-customer", children: "Clientes × Prospects" }),
          /* @__PURE__ */ l.jsx(Xt, { data: n.customerVsProspect, formatValue: nt, emptyMessage: "Sem empresas analisadas." })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ l.jsxs(
      gl,
      {
        id: "lt-dash-reps",
        title: "Representantes: como está cada um?",
        description: "Cobertura de meta no período escolhido e onde as oportunidades de cada rep estão hoje.",
        actions: /* @__PURE__ */ l.jsxs("label", { className: "lt-field lt-dash-section__period", children: [
          /* @__PURE__ */ l.jsx("span", { children: "Período" }),
          /* @__PURE__ */ l.jsxs("select", { value: e, onChange: (y) => t(y.target.value), children: [
            /* @__PURE__ */ l.jsx("option", { value: "monthly", children: "Mensal" }),
            /* @__PURE__ */ l.jsx("option", { value: "quarterly", children: "Trimestral" })
          ] })
        ] }),
        children: [
          a && /* @__PURE__ */ l.jsxs("div", { children: [
            /* @__PURE__ */ l.jsxs("p", { className: "lt-alert", role: "alert", children: [
              a,
              " Os dados abaixo ainda são de ",
              n.coveragePeriodKey,
              "."
            ] }),
            /* @__PURE__ */ l.jsx("button", { type: "button", className: "lt-btn", onClick: () => d((y) => y + 1), children: "Tentar de novo" })
          ] }),
          s && /* @__PURE__ */ l.jsx("p", { className: "lt-hint", role: "status", children: "Atualizando…" }),
          /* @__PURE__ */ l.jsxs("div", { className: "lt-chart-grid", children: [
            /* @__PURE__ */ l.jsxs("div", { role: "group", className: "lt-chart-card lt-chart-card--wide", "aria-labelledby": "lt-chart-coverage", children: [
              /* @__PURE__ */ l.jsxs("div", { className: "lt-header-row", children: [
                /* @__PURE__ */ l.jsxs("h4", { id: "lt-chart-coverage", children: [
                  "Cobertura de meta (",
                  n.coveragePeriodKey,
                  ")"
                ] }),
                /* @__PURE__ */ l.jsx(we, { text: `Pipeline atual dividido pela meta cadastrada em Configurações pra ${n.coveragePeriodKey}. Sem meta definida pro representante, nunca mostra 0% — mostra "sem meta definida".` })
              ] }),
              n.repCoverage.length === 0 ? /* @__PURE__ */ l.jsx("p", { className: "lt-empty", role: "status", children: "Nenhum representante com oportunidade atribuída ainda." }) : /* @__PURE__ */ l.jsxs("table", { className: "lt-table", children: [
                /* @__PURE__ */ l.jsx("thead", { children: /* @__PURE__ */ l.jsxs("tr", { children: [
                  /* @__PURE__ */ l.jsx("th", { scope: "col", children: "Representante" }),
                  /* @__PURE__ */ l.jsx("th", { scope: "col", children: "Pipeline atual" }),
                  /* @__PURE__ */ l.jsx("th", { scope: "col", children: "Meta" }),
                  /* @__PURE__ */ l.jsx("th", { scope: "col", children: "Cobertura" })
                ] }) }),
                /* @__PURE__ */ l.jsx("tbody", { children: n.repCoverage.map((y) => /* @__PURE__ */ l.jsxs("tr", { children: [
                  /* @__PURE__ */ l.jsx("th", { scope: "row", children: y.repId }),
                  /* @__PURE__ */ l.jsx("td", { children: tt(y.actual) }),
                  /* @__PURE__ */ l.jsx("td", { children: y.target === null ? "—" : tt(y.target) }),
                  /* @__PURE__ */ l.jsx("td", { children: y.coverageRatio === null ? "Sem meta definida" : dn(y.coverageRatio) })
                ] }, y.repId)) })
              ] })
            ] }),
            /* @__PURE__ */ l.jsxs("div", { role: "group", className: "lt-chart-card", "aria-labelledby": "lt-chart-rep-money", children: [
              /* @__PURE__ */ l.jsx("h4", { id: "lt-chart-rep-money", children: "Potencial por representante" }),
              /* @__PURE__ */ l.jsx(Xt, { data: n.potentialByRep, formatValue: tt, emptyMessage: "Sem oportunidade atribuída a representante ainda." })
            ] }),
            /* @__PURE__ */ l.jsxs("div", { role: "group", className: "lt-chart-card lt-chart-card--wide", "aria-labelledby": "lt-chart-matrix", children: [
              /* @__PURE__ */ l.jsxs("div", { className: "lt-header-row", children: [
                /* @__PURE__ */ l.jsx("h4", { id: "lt-chart-matrix", children: "Onde as oportunidades estão hoje, por rep e categoria" }),
                /* @__PURE__ */ l.jsx(we, { text: "Quantas oportunidades de cada representante, em cada categoria do portfólio, já chegaram a cada estágio. É uma foto de hoje, sem histórico de transição." })
              ] }),
              /* @__PURE__ */ l.jsx(tm, {})
            ] })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ l.jsxs("details", { className: "lt-dash-more", children: [
      /* @__PURE__ */ l.jsx("summary", { children: "Mais detalhes e limitações" }),
      /* @__PURE__ */ l.jsx("div", { className: "lt-chart-grid", children: /* @__PURE__ */ l.jsxs("div", { role: "group", className: "lt-chart-card", "aria-labelledby": "lt-chart-vendor-donut", children: [
        /* @__PURE__ */ l.jsx("h4", { id: "lt-chart-vendor-donut", children: "Distribuição por fabricante" }),
        /* @__PURE__ */ l.jsx(Vh, { data: n.vendorDistribution, emptyMessage: "Sem oportunidades com fabricante identificado." })
      ] }) }),
      /* @__PURE__ */ l.jsxs("p", { className: "lt-hint", children: [
        "Fabricante principal: ",
        m.topVendor ?? "—",
        ". Serviço principal: ",
        m.topService ?? "—",
        "."
      ] }),
      /* @__PURE__ */ l.jsx("p", { className: "lt-hint", children: "Segmentação por região ainda fica de fora: exige dado de região vindo de uma fonte configurada (ex.: Google Maps). Tendência ao longo do tempo também não aparece: a tela mostra o estado de hoje, porque a evolução dia a dia ainda não é guardada." })
    ] })
  ] });
}
const rm = {
  client: "todos",
  product: "todos",
  service: "todos",
  source: "todos",
  minScore: 0
};
function xl(e) {
  return Array.from(new Set(e.filter((t) => !!t))).sort();
}
function am({
  rows: e,
  value: t,
  onChange: n
}) {
  const r = xl(e.map((s) => s.product)), a = xl(e.map((s) => s.service)), o = xl(e.flatMap((s) => s.sources.map((i) => i.type)));
  return /* @__PURE__ */ l.jsxs("div", { className: "lt-filters", role: "group", "aria-label": "Filtros de oportunidades", children: [
    /* @__PURE__ */ l.jsxs("label", { htmlFor: "lt-filter-client", className: "lt-field", children: [
      /* @__PURE__ */ l.jsx("span", { children: "Cliente" }),
      /* @__PURE__ */ l.jsxs(
        "select",
        {
          id: "lt-filter-client",
          value: t.client,
          onChange: (s) => n({ ...t, client: s.target.value }),
          children: [
            /* @__PURE__ */ l.jsx("option", { value: "todos", children: "Todos" }),
            /* @__PURE__ */ l.jsx("option", { value: "clientes", children: "Clientes atuais" }),
            /* @__PURE__ */ l.jsx("option", { value: "prospects", children: "Prospects" })
          ]
        }
      ),
      /* @__PURE__ */ l.jsx("span", { className: "lt-hint", children: "Filtra pela relação da empresa: cliente atual ou prospect ainda sem venda." })
    ] }),
    /* @__PURE__ */ l.jsxs("label", { htmlFor: "lt-filter-product", className: "lt-field", children: [
      /* @__PURE__ */ l.jsx("span", { children: "Produto" }),
      /* @__PURE__ */ l.jsxs("select", { id: "lt-filter-product", value: t.product, onChange: (s) => n({ ...t, product: s.target.value }), children: [
        /* @__PURE__ */ l.jsx("option", { value: "todos", children: "Todos" }),
        r.map((s) => /* @__PURE__ */ l.jsx("option", { value: s, children: s }, s))
      ] }),
      /* @__PURE__ */ l.jsx("span", { className: "lt-hint", children: "Mostra só oportunidades associadas a esse produto do portfólio." })
    ] }),
    /* @__PURE__ */ l.jsxs("label", { htmlFor: "lt-filter-service", className: "lt-field", children: [
      /* @__PURE__ */ l.jsx("span", { children: "Serviço" }),
      /* @__PURE__ */ l.jsxs("select", { id: "lt-filter-service", value: t.service, onChange: (s) => n({ ...t, service: s.target.value }), children: [
        /* @__PURE__ */ l.jsx("option", { value: "todos", children: "Todos" }),
        a.map((s) => /* @__PURE__ */ l.jsx("option", { value: s, children: s }, s))
      ] }),
      /* @__PURE__ */ l.jsx("span", { className: "lt-hint", children: "Mostra só oportunidades associadas a esse serviço do portfólio." })
    ] }),
    /* @__PURE__ */ l.jsxs("label", { htmlFor: "lt-filter-source", className: "lt-field", children: [
      /* @__PURE__ */ l.jsx("span", { children: "Fonte" }),
      /* @__PURE__ */ l.jsxs("select", { id: "lt-filter-source", value: t.source, onChange: (s) => n({ ...t, source: s.target.value }), children: [
        /* @__PURE__ */ l.jsx("option", { value: "todos", children: "Todas" }),
        o.map((s) => /* @__PURE__ */ l.jsx("option", { value: s, children: s }, s))
      ] }),
      /* @__PURE__ */ l.jsx("span", { className: "lt-hint", children: "Mostra só oportunidades com evidência vinda dessa fonte de dados." })
    ] }),
    /* @__PURE__ */ l.jsxs("label", { htmlFor: "lt-filter-score", className: "lt-field", children: [
      /* @__PURE__ */ l.jsx("span", { children: "Score mínimo" }),
      /* @__PURE__ */ l.jsx(
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
      /* @__PURE__ */ l.jsx("span", { className: "lt-hint", children: "De 0.0 a 1.0 — esconde oportunidades com aderência abaixo desse valor." })
    ] })
  ] });
}
function lm(e) {
  const t = [];
  return e.client !== "todos" && t.push(e.client === "clientes" ? "clientes atuais" : "prospects"), e.product !== "todos" && t.push(`produto: ${e.product}`), e.service !== "todos" && t.push(`serviço: ${e.service}`), e.source !== "todos" && t.push(`fonte: ${e.source}`), e.minScore > 0 && t.push(`score mínimo: ${e.minScore}`), t.length > 0 ? t.join(", ") : "sem filtro";
}
function om(e, t) {
  return e.filter((n) => !(t.client === "clientes" && !n.isCustomer || t.client === "prospects" && n.isCustomer || t.product !== "todos" && n.product !== t.product || t.service !== "todos" && n.service !== t.service || t.source !== "todos" && !n.sources.some((r) => r.type === t.source) || (n.opportunityScore ?? 0) < t.minScore));
}
const sm = {
  promoted: "Pronto para contato",
  deferred: "Fila para amanhã",
  rejected: "Fora do critério"
};
function jl({ item: e, group: t }) {
  return /* @__PURE__ */ l.jsxs("div", { className: "lt-source-card", children: [
    /* @__PURE__ */ l.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "baseline" }, children: [
      /* @__PURE__ */ l.jsx("strong", { children: e.name }),
      /* @__PURE__ */ l.jsx("span", { className: `lt-badge lt-badge--discovery-${t}`, children: sm[t] })
    ] }),
    e.score !== null && /* @__PURE__ */ l.jsxs("div", { style: { margin: "8px 0" }, children: [
      /* @__PURE__ */ l.jsxs("div", { style: { display: "flex", justifyContent: "space-between", fontSize: 11, color: "hsl(var(--text-muted))" }, children: [
        /* @__PURE__ */ l.jsx("span", { children: "Compatibilidade" }),
        /* @__PURE__ */ l.jsxs("span", { children: [
          Math.round(e.score * 100),
          "%"
        ] })
      ] }),
      /* @__PURE__ */ l.jsx("div", { style: { height: 6, background: "hsl(var(--bg-subtle))", borderRadius: 3 }, children: /* @__PURE__ */ l.jsx("div", { style: { height: 6, borderRadius: 3, background: "hsl(var(--accent))", width: `${e.score * 100}%` } }) })
    ] }),
    /* @__PURE__ */ l.jsxs("p", { className: "lt-hint", children: [
      e.category ?? "Categoria desconhecida",
      " ",
      e.categoryMatches ? "✓ bate com o critério" : "— fora do critério buscado"
    ] }),
    e.formattedAddress && /* @__PURE__ */ l.jsx("p", { className: "lt-hint", children: e.formattedAddress }),
    e.rating !== null && /* @__PURE__ */ l.jsxs("p", { className: "lt-hint", children: [
      "★ ",
      e.rating.toFixed(1),
      " (",
      e.reviewCount,
      " avaliações)"
    ] })
  ] });
}
function im() {
  const [e, t] = v.useState(1), [n, r] = v.useState([]), [a, o] = v.useState(void 0), [s, i] = v.useState(null), [u, d] = v.useState(""), [m, h] = v.useState(""), [g, y] = v.useState(""), [S, j] = v.useState(15), [_, f] = v.useState(""), [c, p] = v.useState(""), [w, x] = v.useState(!1), [b, P] = v.useState(null), [E, A] = v.useState(null), [R, V] = v.useState(!1), [I, $] = v.useState(null), [q, H] = v.useState(null);
  v.useEffect(() => {
    Promise.all([ad(), fh()]).then(([C, M]) => {
      r(C), M.searchOriginAddress && y(M.searchOriginAddress), M.radiusKm && j(M.radiusKm), M.referenceProductId && h(M.referenceProductId);
    }).catch((C) => i(C instanceof Error ? C.message : "Não consegui carregar os dados iniciais."));
  }, []);
  const Ce = () => {
    t(3), a === void 0 && mh().then((C) => {
      o(C), C && (f((M) => M || C.industryHint || ""), p((M) => M || C.companySizeHint || ""));
    }).catch(() => o(null));
  }, me = async () => {
    x(!0), P(null);
    try {
      await hh({
        referenceProductId: m || null,
        placeCategory: _ || null,
        companySizeHint: c || null,
        radiusKm: S,
        searchOriginAddress: g
      });
      const C = await gh({
        repId: u,
        referenceProductId: m || null,
        searchOriginAddress: g,
        radiusKm: S,
        placeCategory: _ || null,
        companySizeHint: c || null
      });
      A(C);
    } catch (C) {
      P(C instanceof Error ? C.message : "Não conseguimos completar a busca agora.");
    } finally {
      x(!1);
    }
  }, T = () => {
    A(null), P(null), V(!1), H(null), t(1);
  }, O = async (C) => {
    if (!E) return;
    $(C), H(null);
    const M = `Prospecção geográfica — raio ${S}km, ${_ || "sem categoria"}`;
    try {
      C === "pdf" ? await vh(E, M) : await yh(E);
    } catch (N) {
      H(N instanceof Error ? N.message : "Falha ao exportar.");
    } finally {
      $(null);
    }
  };
  return s ? /* @__PURE__ */ l.jsx("p", { className: "lt-alert", role: "alert", children: s }) : E ? /* @__PURE__ */ l.jsxs("div", { className: "lt-dashboard", children: [
    /* @__PURE__ */ l.jsx("div", { className: "lt-header", children: /* @__PURE__ */ l.jsx("h2", { children: "Resultado da busca" }) }),
    /* @__PURE__ */ l.jsxs("div", { className: "lt-toolbar", children: [
      /* @__PURE__ */ l.jsx("button", { type: "button", className: "lt-btn", onClick: () => O("pdf"), disabled: I !== null, "aria-busy": I === "pdf", children: I === "pdf" ? "Gerando PDF…" : "PDF" }),
      /* @__PURE__ */ l.jsx("button", { type: "button", className: "lt-btn", onClick: () => O("excel"), disabled: I !== null, "aria-busy": I === "excel", children: I === "excel" ? "Gerando Excel…" : "Excel" })
    ] }),
    q && /* @__PURE__ */ l.jsx("p", { className: "lt-alert", role: "alert", children: q }),
    /* @__PURE__ */ l.jsxs("div", { className: "lt-stat-grid", children: [
      /* @__PURE__ */ l.jsxs("div", { className: "lt-stat-tile", children: [
        /* @__PURE__ */ l.jsx("div", { className: "lt-stat-tile__value", children: E.promoted.length }),
        /* @__PURE__ */ l.jsx("div", { className: "lt-stat-tile__label", children: "Prontos para contato" }),
        /* @__PURE__ */ l.jsx("div", { className: "lt-stat-tile__hint", children: "Passaram no critério e já estão na sua lista de oportunidades." })
      ] }),
      E.deferred.length > 0 && /* @__PURE__ */ l.jsxs("div", { className: "lt-stat-tile", children: [
        /* @__PURE__ */ l.jsx("div", { className: "lt-stat-tile__value", children: E.deferred.length }),
        /* @__PURE__ */ l.jsx("div", { className: "lt-stat-tile__label", children: "Na fila para amanhã" }),
        /* @__PURE__ */ l.jsx("div", { className: "lt-stat-tile__hint", children: "Encontramos mais oportunidades boas do que a cota diária de hoje. Elas entram automaticamente na lista amanhã, sem precisar buscar de novo." })
      ] })
    ] }),
    E.promoted.length > 0 && /* @__PURE__ */ l.jsx("div", { className: "lt-source-grid", children: E.promoted.map((C) => /* @__PURE__ */ l.jsx(jl, { item: C, group: "promoted" }, C.placeId)) }),
    E.deferred.length > 0 && /* @__PURE__ */ l.jsx("div", { className: "lt-source-grid", children: E.deferred.map((C) => /* @__PURE__ */ l.jsx(jl, { item: C, group: "deferred" }, C.placeId)) }),
    E.rejected.length > 0 && /* @__PURE__ */ l.jsx("div", { className: "lt-detail-actions", children: /* @__PURE__ */ l.jsxs("button", { type: "button", className: "lt-btn", onClick: () => V((C) => !C), children: [
      R ? "Ocultar" : "Ver",
      " todos os resultados da busca (",
      E.rejected.length,
      " fora do critério)"
    ] }) }),
    R && E.rejected.length > 0 && /* @__PURE__ */ l.jsx("div", { className: "lt-source-grid", children: E.rejected.map((C) => /* @__PURE__ */ l.jsx(jl, { item: C, group: "rejected" }, C.placeId)) }),
    /* @__PURE__ */ l.jsx("div", { className: "lt-detail-actions", children: /* @__PURE__ */ l.jsx("button", { type: "button", className: "lt-btn", onClick: T, children: "Nova busca" }) })
  ] }) : /* @__PURE__ */ l.jsxs("div", { children: [
    /* @__PURE__ */ l.jsxs("div", { className: "lt-header", children: [
      /* @__PURE__ */ l.jsx("h2", { children: "Prospecção geográfica" }),
      /* @__PURE__ */ l.jsxs("p", { children: [
        "Passo ",
        e,
        " de 4"
      ] })
    ] }),
    e === 1 && /* @__PURE__ */ l.jsxs("div", { className: "lt-source-card__form", children: [
      /* @__PURE__ */ l.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ l.jsx("span", { children: "Buscar prospecção para (representante)" }),
        /* @__PURE__ */ l.jsx("input", { value: u, onChange: (C) => d(C.target.value), placeholder: "Id ou nome do representante" }),
        /* @__PURE__ */ l.jsx("span", { className: "lt-hint", children: "Quem vai receber as oportunidades descobertas nessa busca." })
      ] }),
      /* @__PURE__ */ l.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ l.jsx("span", { children: "A partir de qual produto ou serviço?" }),
        /* @__PURE__ */ l.jsxs("select", { value: m, onChange: (C) => h(C.target.value), children: [
          /* @__PURE__ */ l.jsx("option", { value: "", children: "Nenhum em particular" }),
          n.map((C) => /* @__PURE__ */ l.jsx("option", { value: C.id, children: C.name }, C.id))
        ] }),
        /* @__PURE__ */ l.jsx("span", { className: "lt-hint", children: "Usa clientes satisfeitos com esse item pra sugerir categoria e porte no passo 3." })
      ] }),
      /* @__PURE__ */ l.jsx("div", { className: "lt-detail-actions", children: /* @__PURE__ */ l.jsx("button", { type: "button", className: "lt-btn", onClick: () => t(2), disabled: !u.trim(), children: "Avançar" }) })
    ] }),
    e === 2 && /* @__PURE__ */ l.jsxs("div", { className: "lt-source-card__form", children: [
      /* @__PURE__ */ l.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ l.jsx("span", { children: "Endereço de origem da busca" }),
        /* @__PURE__ */ l.jsx(
          "input",
          {
            value: g,
            onChange: (C) => y(C.target.value),
            placeholder: "Rua, número, cidade"
          }
        ),
        /* @__PURE__ */ l.jsx("span", { className: "lt-hint", children: "Ponto central da busca geográfica." })
      ] }),
      /* @__PURE__ */ l.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ l.jsxs("span", { children: [
          "Raio de busca: ",
          S,
          " km"
        ] }),
        /* @__PURE__ */ l.jsx("input", { type: "range", min: 1, max: 50, value: S, onChange: (C) => j(Number(C.target.value)) }),
        /* @__PURE__ */ l.jsx("span", { className: "lt-hint", children: "Distância máxima do endereço de origem pra considerar uma empresa candidata." })
      ] }),
      /* @__PURE__ */ l.jsxs("div", { className: "lt-detail-actions", children: [
        /* @__PURE__ */ l.jsx("button", { type: "button", className: "lt-btn", onClick: () => t(1), children: "Voltar" }),
        /* @__PURE__ */ l.jsx("button", { type: "button", className: "lt-btn", onClick: Ce, disabled: !g.trim(), children: "Avançar" })
      ] })
    ] }),
    e === 3 && /* @__PURE__ */ l.jsxs("div", { className: "lt-source-card__form", children: [
      a === void 0 && /* @__PURE__ */ l.jsx("p", { className: "lt-hint", children: "Calculando sugestão…" }),
      a === null && /* @__PURE__ */ l.jsx("p", { className: "lt-hint", children: "Ainda não temos clientes satisfeitos suficientes pra sugerir automaticamente. Escolha a categoria e o porte manualmente." }),
      a && a.confidence === "high" && /* @__PURE__ */ l.jsxs("p", { className: "lt-hint", children: [
        "Com base nos seus clientes satisfeitos, sugerimos buscar ",
        /* @__PURE__ */ l.jsx("strong", { children: a.industryHint ?? "—" }),
        ", porte ",
        /* @__PURE__ */ l.jsx("strong", { children: a.companySizeHint ?? "—" }),
        "."
      ] }),
      a && a.confidence === "low" && /* @__PURE__ */ l.jsxs("p", { className: "lt-hint", children: [
        "Encontramos poucos clientes de referência ainda (",
        a.sampleSize,
        "), então esta é uma sugestão inicial — vale revisar antes de confirmar."
      ] }),
      /* @__PURE__ */ l.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ l.jsx("span", { children: "Categoria (Google Places)" }),
        /* @__PURE__ */ l.jsx("input", { value: _, onChange: (C) => f(C.target.value), placeholder: "ex.: car_dealer" }),
        /* @__PURE__ */ l.jsxs("span", { className: "lt-hint", children: [
          "Tipo de estabelecimento no Google Places usado como filtro da busca — precisa ser exatamente um dos valores da",
          " ",
          /* @__PURE__ */ l.jsx(
            "a",
            {
              href: "https://developers.google.com/maps/documentation/places/web-service/place-types",
              target: "_blank",
              rel: "noopener noreferrer",
              children: "tabela oficial de tipos da Places API"
            }
          ),
          " ",
          "(em inglês, ex.: accounting, lawyer, real_estate_agency)."
        ] })
      ] }),
      /* @__PURE__ */ l.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ l.jsx("span", { children: "Porte-alvo" }),
        /* @__PURE__ */ l.jsx("input", { value: c, onChange: (C) => p(C.target.value), placeholder: "ex.: média" }),
        /* @__PURE__ */ l.jsx("span", { className: "lt-hint", children: "Descrição livre do porte de empresa procurado — só orienta a triagem, não filtra sozinho." })
      ] }),
      /* @__PURE__ */ l.jsxs("div", { className: "lt-detail-actions", children: [
        /* @__PURE__ */ l.jsx("button", { type: "button", className: "lt-btn", onClick: () => t(2), children: "Voltar" }),
        /* @__PURE__ */ l.jsx("button", { type: "button", className: "lt-btn", onClick: () => t(4), children: "Avançar" })
      ] })
    ] }),
    e === 4 && /* @__PURE__ */ l.jsxs("div", { className: "lt-source-card__form", children: [
      /* @__PURE__ */ l.jsxs("p", { className: "lt-hint", children: [
        "Vamos buscar ",
        _ || "empresas",
        " ",
        c ? `de porte ${c} ` : "",
        "num raio de ",
        S,
        'km a partir de "',
        g,
        '", para ',
        u,
        "."
      ] }),
      b && /* @__PURE__ */ l.jsxs("p", { className: "lt-alert", role: "alert", children: [
        "Não conseguimos completar a busca agora. Isso não é um problema com os seus critérios — pode ser uma instabilidade temporária. ",
        b
      ] }),
      /* @__PURE__ */ l.jsxs("div", { className: "lt-detail-actions", children: [
        /* @__PURE__ */ l.jsx("button", { type: "button", className: "lt-btn", onClick: () => t(3), disabled: w, children: "Voltar" }),
        /* @__PURE__ */ l.jsx("button", { type: "button", className: "lt-btn", onClick: me, disabled: w, "aria-busy": w, children: w ? "Buscando…" : "Buscar agora" })
      ] })
    ] })
  ] });
}
const um = [
  { value: "isolado", label: "Isolado (poucas licenças/sistemas)" },
  { value: "parcial", label: "Parcial (parte relevante do parque)" },
  { value: "generalizado", label: "Generalizado (maior parte do parque)" }
], cm = [
  { value: "nao_critico", label: "Não crítico (impacto operacional baixo)" },
  { value: "critico_interno", label: "Crítico interno (grave, não visível ao cliente)" },
  { value: "critico_exposto", label: "Crítico e exposto (produção/cliente-facing)" }
], dm = {
  baixo: "Baixo",
  medio: "Médio",
  alto: "Alto",
  critico: "Crítico",
  nao_avaliado: "Não avaliado"
}, pm = {
  verde: "Saudável",
  amarela: "Atenção",
  vermelha: "Crítica",
  dados_insuficientes: "Dados insuficientes"
}, fm = {
  imediata: "revisão imediata — saúde da conta em estado crítico",
  revisao_de_risco: "saúde comprometida, sem renovação próxima o bastante pra justificar revisão imediata",
  revisao_antes_da_renovacao: "renovação próxima e a saúde não está em verde — vale revisar antes de decidir",
  revisao_de_acompanhamento: "acompanhamento de rotina, saúde em atenção",
  revisao_de_rotina: "nenhum sinal de urgência — cadência de rotina",
  alinhada_a_renovacao: "conta saudável — revisão alinhada à data de renovação"
};
function hm(e) {
  return e ? e.slice(0, 10) : "";
}
const $i = [
  { value: "no_evidence", label: "Sem evidência suficiente" },
  { value: "not_fit", label: "Sem fit técnico/comercial" },
  { value: "not_qualified", label: "Cliente não qualificado" },
  { value: "false_positive", label: "Falso positivo da regra" },
  { value: "other", label: "Outro (detalhar na observação)" }
], mm = [
  { value: "detected", label: "Detectada" },
  { value: "qualified", label: "Qualificada" },
  { value: "reviewed", label: "Revisada" },
  { value: "contacted", label: "Contatada" },
  { value: "opportunity", label: "Oportunidade" },
  { value: "dismissed", label: "Descartada" }
], Li = ["detected", "qualified", "reviewed", "contacted", "opportunity"];
function Oi(e, t) {
  if (e === t) return !1;
  if (e === "dismissed") return t !== "dismissed";
  const n = Li.indexOf(e), r = Li.indexOf(t);
  return n === -1 || r === -1 ? !1 : r - n >= 2;
}
function gm({ row: e, onUpdated: t }) {
  var w;
  const [n, r] = v.useState(null), [a, o] = v.useState(""), [s, i] = v.useState(""), [u, d] = v.useState(""), [m, h] = v.useState(!1), [g, y] = v.useState(null), S = e.status === "detected" && n !== null && n !== "dismissed", j = n !== null && Oi(e.status, n), _ = n === "dismissed", f = j || _ || S, c = async (x, b, P) => {
    h(!0), y(null);
    try {
      const E = await sh(e.id, x, b, P, u.trim() || null);
      t(E), r(null), o(""), i(""), d("");
    } catch (E) {
      y(E instanceof Error ? E.message : "Falha ao mudar o status.");
    } finally {
      h(!1);
    }
  }, p = (x) => {
    if (y(null), x === e.status) {
      r(null);
      return;
    }
    r(x), x !== "dismissed" && e.status !== "detected" && !Oi(e.status, x) && c(x, null, null);
  };
  return /* @__PURE__ */ l.jsxs("div", { className: "lt-severity", children: [
    /* @__PURE__ */ l.jsxs("label", { className: "lt-field", children: [
      /* @__PURE__ */ l.jsx("span", { children: "Status" }),
      /* @__PURE__ */ l.jsx("select", { value: n ?? e.status, onChange: (x) => p(x.target.value), disabled: m, children: mm.map((x) => /* @__PURE__ */ l.jsx("option", { value: x.value, children: x.label }, x.value)) }),
      /* @__PURE__ */ l.jsx("span", { className: "lt-hint", children: "Etapa atual no funil — detectada → qualificada → revisada → contatada → oportunidade." })
    ] }),
    e.status === "dismissed" && n === null && e.dismissalReason && /* @__PURE__ */ l.jsxs("p", { className: "lt-hint", children: [
      "Motivo do descarte: ",
      ((w = $i.find((x) => x.value === e.dismissalReason)) == null ? void 0 : w.label) ?? e.dismissalReason
    ] }),
    _ && /* @__PURE__ */ l.jsxs("label", { className: "lt-field", children: [
      /* @__PURE__ */ l.jsx("span", { children: "Motivo do descarte" }),
      /* @__PURE__ */ l.jsxs("select", { value: s, onChange: (x) => i(x.target.value), children: [
        /* @__PURE__ */ l.jsx("option", { value: "", children: "Selecione um motivo" }),
        $i.map((x) => /* @__PURE__ */ l.jsx("option", { value: x.value, children: x.label }, x.value))
      ] }),
      /* @__PURE__ */ l.jsx("span", { className: "lt-hint", children: "Obrigatório pra descartar — fica registrado no histórico da oportunidade." })
    ] }),
    j && /* @__PURE__ */ l.jsxs("label", { className: "lt-field", children: [
      /* @__PURE__ */ l.jsx("span", { children: "Justificativa (pulou etapas ou reabriu uma oportunidade descartada)" }),
      /* @__PURE__ */ l.jsx("textarea", { value: a, onChange: (x) => o(x.target.value) }),
      /* @__PURE__ */ l.jsx("span", { className: "lt-hint", children: "Explica por que a mudança fugiu do fluxo normal — fica registrada no histórico." })
    ] }),
    S && /* @__PURE__ */ l.jsxs("label", { className: "lt-field", children: [
      /* @__PURE__ */ l.jsx("span", { children: "Qualificar sem discovery (opcional)" }),
      /* @__PURE__ */ l.jsx("textarea", { value: u, onChange: (x) => d(x.target.value) }),
      /* @__PURE__ */ l.jsx("span", { className: "lt-hint", children: 'Só se não der pra preencher a discovery acima — a justificativa fica registrada e a oportunidade aparece como "sem discovery".' })
    ] }),
    f && /* @__PURE__ */ l.jsx(
      "button",
      {
        type: "button",
        className: "lt-btn",
        onClick: () => c(n, a || null, s || null),
        disabled: m || j && !a.trim() || _ && !s,
        children: "Confirmar mudança"
      }
    ),
    g && /* @__PURE__ */ l.jsx("p", { className: "lt-alert", role: "alert", children: g })
  ] });
}
const vm = { alta: 3, média: 2, baixa: 1 };
function ym(e, t, n) {
  const r = n === "asc" ? 1 : -1, a = (o) => {
    switch (t) {
      case "score":
        return o.opportunityScore ?? -1;
      case "potencial":
        return o.financialPotential ?? -1;
      case "prioridade":
        return vm[o.priority];
      case "confianca":
        return o.confidenceScore ?? -1;
    }
  };
  return [...e].sort((o, s) => (a(o) - a(s)) * r);
}
function yo(e) {
  return e === null ? "—" : e.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });
}
function Bn(e) {
  return e === null ? "—" : e.toFixed(2);
}
function Sl({ label: e, sortKey: t, current: n, direction: r, onSort: a }) {
  const o = n === t;
  return /* @__PURE__ */ l.jsx("th", { "aria-sort": o ? r === "asc" ? "ascending" : "descending" : "none", children: /* @__PURE__ */ l.jsxs("button", { type: "button", onClick: () => a(t), children: [
    e,
    o ? r === "asc" ? " ▲" : " ▼" : ""
  ] }) });
}
const xm = [
  { key: "rootCauseStated", label: "Por que isso acontece hoje?", help: "Com as palavras do cliente. Não o sintoma ('é lento'), mas a causa ('a plataforma não escala')." },
  { key: "triggerEvent", label: "Por que agora?", help: "O que mudou que torna isto prioridade neste trimestre? Auditoria, contrato vencendo, incidente, crescimento." },
  { key: "championStake", label: "O que o seu contato ganha ou perde com isso?", help: "O que está em jogo para essa pessoa: uma meta, uma apresentação, a reputação dela?" }
];
function jm({ row: e, onUpdated: t }) {
  const [n, r] = v.useState({
    rootCauseStated: e.rootCauseStated ?? "",
    triggerEvent: e.triggerEvent ?? "",
    championStake: e.championStake ?? ""
  }), [a, o] = v.useState(null), s = async () => {
    o(null);
    try {
      t(await ih(e.id, n));
    } catch (i) {
      o(i instanceof Error ? i.message : "Falha ao salvar a discovery.");
    }
  };
  return /* @__PURE__ */ l.jsxs("div", { className: "lt-severity", children: [
    e.discoveryPending && /* @__PURE__ */ l.jsx("p", { className: "lt-hint", children: "Discovery pendente — esta oportunidade avançou sem os 3 campos abaixo." }),
    e.discoverySkipped && /* @__PURE__ */ l.jsxs("p", { className: "lt-hint", children: [
      "Qualificada sem discovery: ",
      e.discoverySkipReason
    ] }),
    xm.map((i) => /* @__PURE__ */ l.jsxs("label", { className: "lt-field", children: [
      /* @__PURE__ */ l.jsx("span", { children: i.label }),
      /* @__PURE__ */ l.jsx(
        "textarea",
        {
          value: n[i.key],
          onChange: (u) => r((d) => ({ ...d, [i.key]: u.target.value })),
          onBlur: s
        }
      ),
      /* @__PURE__ */ l.jsx("span", { className: "lt-hint", children: i.help })
    ] }, i.key)),
    a && /* @__PURE__ */ l.jsx("p", { className: "lt-alert", role: "alert", children: a })
  ] });
}
function Sm({ row: e, onUpdated: t }) {
  const [n, r] = v.useState(e.scopeNote), [a, o] = v.useState(e.criticality), [s, i] = v.useState(e.severityNote ?? ""), [u, d] = v.useState(null), m = v.useRef(0), h = async (g) => {
    d(null);
    const y = ++m.current;
    try {
      const S = await oh(e.id, {
        scopeNote: g.scopeNote,
        criticality: g.criticality,
        severityNote: g.severityNote || null
      });
      if (y !== m.current) return;
      t(S);
    } catch (S) {
      if (y !== m.current) return;
      d(S instanceof Error ? S.message : "Falha ao salvar a qualificação.");
    }
  };
  return /* @__PURE__ */ l.jsxs("div", { className: "lt-severity", children: [
    /* @__PURE__ */ l.jsxs("label", { className: "lt-field", children: [
      /* @__PURE__ */ l.jsx("span", { children: "Alcance do gap" }),
      /* @__PURE__ */ l.jsxs(
        "select",
        {
          value: n ?? "",
          onChange: (g) => {
            const y = g.target.value || null;
            r(y), h({ scopeNote: y, criticality: a, severityNote: s });
          },
          children: [
            /* @__PURE__ */ l.jsx("option", { value: "", children: "Não avaliado" }),
            um.map((g) => /* @__PURE__ */ l.jsx("option", { value: g.value, children: g.label }, g.value))
          ]
        }
      ),
      /* @__PURE__ */ l.jsx("span", { className: "lt-hint", children: "Quão abrangente é o gap identificado — usado no cálculo de severidade." })
    ] }),
    /* @__PURE__ */ l.jsxs("label", { className: "lt-field", children: [
      /* @__PURE__ */ l.jsx("span", { children: "Criticidade" }),
      /* @__PURE__ */ l.jsxs(
        "select",
        {
          value: a ?? "",
          onChange: (g) => {
            const y = g.target.value || null;
            o(y), h({ scopeNote: n, criticality: y, severityNote: s });
          },
          children: [
            /* @__PURE__ */ l.jsx("option", { value: "", children: "Não avaliado" }),
            cm.map((g) => /* @__PURE__ */ l.jsx("option", { value: g.value, children: g.label }, g.value))
          ]
        }
      ),
      /* @__PURE__ */ l.jsx("span", { className: "lt-hint", children: "Quão urgente é o risco pro cliente — usado no cálculo de severidade." })
    ] }),
    /* @__PURE__ */ l.jsxs("label", { className: "lt-field", children: [
      /* @__PURE__ */ l.jsx("span", { children: "Observação (opcional)" }),
      /* @__PURE__ */ l.jsx(
        "textarea",
        {
          value: s,
          onChange: (g) => i(g.target.value),
          onBlur: () => h({ scopeNote: n, criticality: a, severityNote: s })
        }
      ),
      /* @__PURE__ */ l.jsx("span", { className: "lt-hint", children: "Contexto livre sobre o gap — não entra no cálculo de severidade." })
    ] }),
    /* @__PURE__ */ l.jsxs("span", { className: `lt-badge lt-badge--severity-${e.severityBand}`, children: [
      "Severidade: ",
      dm[e.severityBand]
    ] }),
    u && /* @__PURE__ */ l.jsx("p", { className: "lt-alert", role: "alert", children: u })
  ] });
}
function wm({ row: e, onRenewalDateUpdated: t }) {
  const [n, r] = v.useState(hm(e.renewalDate)), [a, o] = v.useState(null), s = v.useRef(0), i = async (u) => {
    o(null);
    const d = ++s.current;
    try {
      if (await uh(e.companyId, u || null), d !== s.current) return;
      t();
    } catch (m) {
      if (d !== s.current) return;
      o(m instanceof Error ? m.message : "Falha ao salvar a data de renovação.");
    }
  };
  return /* @__PURE__ */ l.jsxs("div", { className: "lt-panel", children: [
    /* @__PURE__ */ l.jsxs("div", { className: "lt-panel-row", children: [
      /* @__PURE__ */ l.jsxs("span", { className: `lt-badge lt-badge--health-${e.accountHealth}`, children: [
        "Saúde da conta: ",
        pm[e.accountHealth]
      ] }),
      /* @__PURE__ */ l.jsxs("span", { className: "lt-hint", children: [
        "Próxima revisão sugerida: ",
        e.qbrSuggestedDays === 0 ? "imediata" : `em ${e.qbrSuggestedDays} dias`,
        " ",
        "(",
        fm[e.qbrReason] ?? e.qbrReason,
        ")"
      ] })
    ] }),
    /* @__PURE__ */ l.jsxs("label", { className: "lt-field", children: [
      /* @__PURE__ */ l.jsx("span", { children: "Data de renovação do contrato" }),
      /* @__PURE__ */ l.jsx(
        "input",
        {
          type: "date",
          value: n,
          onChange: (u) => r(u.target.value),
          onBlur: () => i(n)
        }
      ),
      /* @__PURE__ */ l.jsx("span", { className: "lt-hint", children: "Alimenta a cadência de revisão de conta (QBR) sugerida acima." })
    ] }),
    a && /* @__PURE__ */ l.jsx("p", { className: "lt-alert", role: "alert", children: a })
  ] });
}
const wl = {
  continuidade_uso_atual: (e) => `Enviar e-mail perguntando como está o uso de ${e.product ?? e.service ?? "seus produtos atuais"} — é hora de reforçar o relacionamento.`,
  gap_portfolio: (e) => `Ligar apresentando ${e.product ?? e.service ?? "a solução recomendada"} — cliente já usa produtos relacionados mas não tem isso.`,
  prova_social_urgencia: () => "Mandar mensagem no LinkedIn com um caso parecido — bom momento pra criar urgência.",
  abertura_sinal: () => "Primeiro contato por e-mail — sinal identificado aponta interesse.",
  reforco_angulo_novo: () => "Ligar com um ângulo diferente — a primeira abordagem não avançou, vale tentar outro gancho."
};
function _m(e) {
  const t = e.includes("single_threaded_risk"), n = e.includes("no_economic_buyer_contact");
  return t && n ? "Os toques recentes chegaram a uma pessoa só, e não a um decisor. Bom momento pra ampliar quem participa da conversa." : t ? "Só um contato ativo tem recebido seus toques recentes. Vale envolver mais uma pessoa da conta." : "Nenhum decisor apareceu nos toques recentes. Vale trazer quem decide pra conversa.";
}
function Nm({ row: e, repId: t, suggestionCache: n, contactsCache: r }) {
  var V;
  const [a, o] = v.useState(null), [s, i] = v.useState(null), [u, d] = v.useState("idle"), [m, h] = v.useState(!1), [g, y] = v.useState(!1), [S, j] = v.useState([]), [_, f] = v.useState(null), c = `${e.id}:${t}`, p = (I) => {
    o(I), d("idle"), f(I.lastContactId);
  }, w = (I = !1) => {
    var $;
    return !I && (($ = n.current) != null && $.has(c)) ? (p(n.current.get(c)), Promise.resolve()) : Wf(e.id, t).then((q) => {
      var H;
      (H = n.current) == null || H.set(c, q), p(q);
    });
  };
  if (v.useEffect(() => {
    i(null), w().catch((I) => i(I instanceof Error ? I.message : "Falha ao calcular a próxima ação."));
  }, [e.id, t]), v.useEffect(() => {
    var $;
    const I = ($ = r.current) == null ? void 0 : $.get(e.companyId);
    if (I) {
      j(I);
      return;
    }
    Gf(e.companyId).then((q) => {
      var H;
      (H = r.current) == null || H.set(e.companyId, q), j(q);
    }).catch(() => j([]));
  }, [e.companyId]), !t.trim())
    return /* @__PURE__ */ l.jsx("p", { className: "lt-hint", children: "Informe seu id de representante acima para ver a próxima ação sugerida." });
  if (s) return /* @__PURE__ */ l.jsx("p", { className: "lt-alert", role: "alert", children: s });
  if (!a) return /* @__PURE__ */ l.jsx("p", { className: "lt-hint", children: "Calculando próxima ação…" });
  const x = a.silenceReason && /* @__PURE__ */ l.jsx("p", { className: "lt-advisory", role: "alert", children: a.silenceReason === "nunca_contatado" ? `Esta oportunidade está em qualificação há ${a.silenceDays} dias sem nenhum contato registrado. Ainda faz sentido priorizá-la agora?` : `A cadência sugerida terminou há ${a.silenceDays} dias sem retorno do lead. Bom momento pra decidir: tentar outro ângulo, escalar, ou dispensar.` }), b = a.threadingRiskReasons.length > 0 && /* @__PURE__ */ l.jsxs("div", { className: "lt-panel", children: [
    /* @__PURE__ */ l.jsx("strong", { children: "Vale ampliar os contatos aqui" }),
    /* @__PURE__ */ l.jsx("p", { className: "lt-advisory", children: _m(a.threadingRiskReasons) })
  ] });
  if (a.state === "aguardando_intervalo")
    return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      x,
      b,
      /* @__PURE__ */ l.jsx("p", { className: "lt-hint", children: "Sem ação sugerida agora — dentro do intervalo da cadência." })
    ] });
  if (a.state === "cadencia_esgotada")
    return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      x,
      b,
      /* @__PURE__ */ l.jsx("p", { className: "lt-hint", children: "Sem retorno até agora — decida o próximo passo no status acima (encerrar ou continuar manualmente)." })
    ] });
  if (a.state === "cap_diario_atingido")
    return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      x,
      b,
      /* @__PURE__ */ l.jsx("p", { className: "lt-hint", children: "Você atingiu o limite de contatos de hoje. Essa sugestão volta amanhã." })
    ] });
  const P = ((V = wl[a.reasonCategory ?? ""]) == null ? void 0 : V.call(wl, e)) ?? "Próxima ação sugerida.", E = a.channel ?? "email", A = async () => {
    i(null), h(!0);
    try {
      if (E === "email") {
        const I = await Zc(e);
        await navigator.clipboard.writeText(`${I.subject}

${I.greeting}

${I.body}

${I.cta}`);
      } else
        await navigator.clipboard.writeText(P);
    } catch (I) {
      i(I instanceof Error ? I.message : "Falha ao copiar o conteúdo do contato."), h(!1);
      return;
    }
    h(!1), d("copied"), setTimeout(() => d("ready"), 1200);
  }, R = async () => {
    y(!0);
    try {
      await Kf(e.id, t, E, P, _);
    } catch (I) {
      i(I instanceof Error ? I.message : "Falha ao registrar o contato."), y(!1);
      return;
    }
    try {
      await w(!0);
    } catch {
      i("Contato registrado, mas não consegui atualizar a sugestão — recarregue a página.");
    } finally {
      y(!1);
    }
  };
  return /* @__PURE__ */ l.jsxs("div", { className: "lt-panel", children: [
    x,
    b,
    /* @__PURE__ */ l.jsx("p", { className: "lt-panel-text", children: P }),
    /* @__PURE__ */ l.jsxs("div", { className: "lt-panel-row", children: [
      /* @__PURE__ */ l.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ l.jsx("span", { children: "Contato (opcional)" }),
        /* @__PURE__ */ l.jsxs("select", { value: _ ?? "", onChange: (I) => f(I.target.value || null), children: [
          /* @__PURE__ */ l.jsx("option", { value: "", children: "Não atribuído" }),
          S.map((I) => /* @__PURE__ */ l.jsx("option", { value: I.id, children: I.name }, I.id))
        ] }),
        /* @__PURE__ */ l.jsx("span", { className: "lt-hint", children: "Pra quem o rascunho de e-mail abaixo é endereçado." })
      ] }),
      u === "idle" && /* @__PURE__ */ l.jsx("button", { type: "button", className: "lt-btn", onClick: A, disabled: m, children: m ? "Copiando…" : E === "email" ? "Copiar rascunho" : "Copiar sugestão" }),
      u === "copied" && /* @__PURE__ */ l.jsx("span", { className: "lt-hint", children: "Copiado ✓" }),
      u === "ready" && /* @__PURE__ */ l.jsx("button", { type: "button", className: "lt-btn", onClick: R, disabled: g, children: g ? "Registrando…" : "Marcar como enviado" })
    ] })
  ] });
}
function km({ row: e, repId: t, onRowUpdated: n, onRenewalDateUpdated: r, suggestionCache: a, contactsCache: o, aiHasKey: s }) {
  const [i, u] = v.useState("idle"), [d, m] = v.useState(null), [h, g] = v.useState(null), [y, S] = v.useState(!1), j = Af(e), [_, f] = v.useState("idle"), [c, p] = v.useState(null), [w, x] = v.useState(null), b = async () => {
    f("loading"), p(null);
    try {
      const R = await Zc(e);
      x(R), f("idle");
    } catch (R) {
      p(R instanceof Error ? R.message : "Falha ao gerar rascunho."), f("error");
    }
  }, P = async () => {
    if (!j.enabled || i === "loading") return;
    const R = s && y;
    u("loading"), m(null), g(null);
    try {
      const { fonte: V } = await qf(e.id, R, e.companyName);
      g(Vf(V, R)), u("idle");
    } catch (V) {
      m(V instanceof Error ? V.message : "Falha ao gerar o business case."), u("error");
    }
  }, E = async () => {
    w && await navigator.clipboard.writeText(`${w.subject}

${w.greeting}

${w.body}

${w.cta}`);
  }, A = async () => {
    const R = [
      e.companyName,
      e.isCustomer ? "Cliente" : "Prospect",
      `Score: ${Bn(e.opportunityScore)}`,
      `Potencial: ${yo(e.financialPotential)}`,
      e.justification ?? ""
    ].filter(Boolean).join(" — ");
    await navigator.clipboard.writeText(R);
  };
  return /* @__PURE__ */ l.jsx("tr", { children: /* @__PURE__ */ l.jsxs("td", { colSpan: 8, className: "lt-detail", children: [
    /* @__PURE__ */ l.jsxs("dl", { children: [
      /* @__PURE__ */ l.jsx("dt", { children: "Status de cliente" }),
      /* @__PURE__ */ l.jsx("dd", { children: e.isCustomer ? "Cliente" : "Prospect" }),
      /* @__PURE__ */ l.jsx("dt", { children: "Fontes" }),
      /* @__PURE__ */ l.jsx("dd", { children: e.sources.map((R) => `${R.type} (${Math.round(R.confidence * 100)}%)`).join(", ") || "—" }),
      /* @__PURE__ */ l.jsx("dt", { children: "Produtos atuais" }),
      /* @__PURE__ */ l.jsx("dd", { children: e.currentProducts.join(", ") || "—" }),
      /* @__PURE__ */ l.jsx("dt", { children: "Produtos recomendados" }),
      /* @__PURE__ */ l.jsx("dd", { children: e.recommendedProducts.join(", ") || "—" }),
      /* @__PURE__ */ l.jsx("dt", { children: "Serviços recomendados" }),
      /* @__PURE__ */ l.jsx("dd", { children: e.recommendedServices.join(", ") || "—" }),
      /* @__PURE__ */ l.jsx("dt", { children: "Potencial financeiro" }),
      /* @__PURE__ */ l.jsx("dd", { children: yo(e.financialPotential) }),
      /* @__PURE__ */ l.jsx("dt", { children: "Scores" }),
      /* @__PURE__ */ l.jsxs("dd", { children: [
        "oportunidade ",
        Bn(e.opportunityScore),
        " · estratégico ",
        Bn(null),
        " · confiança ",
        Bn(e.confidenceScore)
      ] }),
      /* @__PURE__ */ l.jsx("dt", { children: "Evidências" }),
      /* @__PURE__ */ l.jsx("dd", { children: e.evidence.join(", ") || "—" }),
      /* @__PURE__ */ l.jsx("dt", { children: "Insight" }),
      /* @__PURE__ */ l.jsx("dd", { children: e.justification ?? "Sem justificativa registrada." }),
      e.discoveryPrompt && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
        /* @__PURE__ */ l.jsx("dt", { children: "Pergunta para o cliente" }),
        /* @__PURE__ */ l.jsx("dd", { children: e.discoveryPrompt })
      ] })
    ] }),
    /* @__PURE__ */ l.jsx(jm, { row: e, onUpdated: n }),
    /* @__PURE__ */ l.jsx(gm, { row: e, onUpdated: n }),
    /* @__PURE__ */ l.jsx(wm, { row: e, onRenewalDateUpdated: r }),
    /* @__PURE__ */ l.jsx(Sm, { row: e, onUpdated: n }),
    /* @__PURE__ */ l.jsxs("div", { className: "lt-panel", children: [
      /* @__PURE__ */ l.jsx("strong", { children: "Próxima ação sugerida" }),
      /* @__PURE__ */ l.jsx(Nm, { row: e, repId: t, suggestionCache: a, contactsCache: o })
    ] }),
    /* @__PURE__ */ l.jsxs("div", { className: "lt-detail-actions", children: [
      /* @__PURE__ */ l.jsx("button", { type: "button", className: "lt-btn", onClick: A, children: "Copiar resumo" }),
      /* @__PURE__ */ l.jsx("button", { type: "button", className: "lt-btn", onClick: b, disabled: _ === "loading", children: _ === "loading" ? "Gerando…" : "Gerar rascunho" }),
      /* @__PURE__ */ l.jsx(
        "button",
        {
          type: "button",
          className: "lt-btn",
          onClick: P,
          "aria-disabled": !j.enabled || i === "loading",
          "aria-busy": i === "loading",
          "aria-describedby": j.enabled ? void 0 : `bc-reason-${e.id}`,
          children: i === "loading" ? "Gerando business case…" : "Exportar business case"
        }
      ),
      /* @__PURE__ */ l.jsxs("label", { children: [
        /* @__PURE__ */ l.jsx(
          "input",
          {
            type: "checkbox",
            checked: s && y,
            disabled: !s,
            onChange: (R) => {
              S(R.target.checked), g(null), m(null), u("idle");
            }
          }
        ),
        " ",
        "Melhorar o texto com IA"
      ] }),
      /* @__PURE__ */ l.jsx(we, { text: "Envia os dados desta oportunidade (empresa, evidências, produto) ao provedor de IA configurado para reescrever o texto. Sem isso, usamos o texto padrão. Os números nunca são alterados." })
    ] }),
    !j.enabled && /* @__PURE__ */ l.jsx("p", { className: "lt-hint", id: `bc-reason-${e.id}`, children: j.reason }),
    !s && /* @__PURE__ */ l.jsx("p", { className: "lt-hint", children: "Configure a IA em Configurações" }),
    i === "error" && /* @__PURE__ */ l.jsx("p", { className: "lt-alert", role: "alert", children: d }),
    _ === "error" && /* @__PURE__ */ l.jsx("p", { className: "lt-alert", role: "alert", children: c }),
    /* @__PURE__ */ l.jsxs("div", { role: "status", children: [
      h && /* @__PURE__ */ l.jsx("p", { className: "lt-hint", children: h }),
      w && /* @__PURE__ */ l.jsxs("div", { className: "lt-draft", children: [
        /* @__PURE__ */ l.jsxs("p", { children: [
          /* @__PURE__ */ l.jsx("strong", { children: "Assunto:" }),
          " ",
          w.subject
        ] }),
        /* @__PURE__ */ l.jsx("p", { children: w.greeting }),
        /* @__PURE__ */ l.jsx("p", { children: w.body }),
        /* @__PURE__ */ l.jsx("p", { children: w.cta }),
        /* @__PURE__ */ l.jsx("button", { type: "button", className: "lt-btn", onClick: E, children: "Copiar rascunho" }),
        /* @__PURE__ */ l.jsx("p", { className: "lt-hint", children: "Revise antes de enviar — o rascunho nunca é enviado automaticamente." })
      ] })
    ] })
  ] }) });
}
function Cm({ rows: e, repId: t, onRowUpdated: n, onRenewalDateUpdated: r }) {
  const [a, o] = v.useState("score"), [s, i] = v.useState("desc"), [u, d] = v.useState(null), m = v.useRef(/* @__PURE__ */ new Map()), h = v.useRef(/* @__PURE__ */ new Map()), [g, y] = v.useState(!1);
  v.useEffect(() => {
    ed().then((_) => y(_.has_key)).catch(() => y(!1));
  }, []);
  const S = (_) => {
    _ === a ? i((f) => f === "asc" ? "desc" : "asc") : (o(_), i("desc"));
  }, j = v.useMemo(() => ym(e, a, s), [e, a, s]);
  return e.length === 0 ? /* @__PURE__ */ l.jsx("p", { className: "lt-empty", role: "status", children: "Nenhuma oportunidade encontrada com os filtros atuais." }) : /* @__PURE__ */ l.jsxs("table", { className: "lt-table", children: [
    /* @__PURE__ */ l.jsx("thead", { children: /* @__PURE__ */ l.jsxs("tr", { children: [
      /* @__PURE__ */ l.jsx("th", { children: "Empresa" }),
      /* @__PURE__ */ l.jsx("th", { children: "Cliente" }),
      /* @__PURE__ */ l.jsx(Sl, { label: "Score", sortKey: "score", current: a, direction: s, onSort: S }),
      /* @__PURE__ */ l.jsx(Sl, { label: "Potencial $", sortKey: "potencial", current: a, direction: s, onSort: S }),
      /* @__PURE__ */ l.jsx("th", { children: "Produto" }),
      /* @__PURE__ */ l.jsx("th", { children: "Serviço" }),
      /* @__PURE__ */ l.jsx(Sl, { label: "Prioridade", sortKey: "prioridade", current: a, direction: s, onSort: S }),
      /* @__PURE__ */ l.jsx("th", { children: "Fontes" })
    ] }) }),
    /* @__PURE__ */ l.jsx("tbody", { children: j.map((_) => /* @__PURE__ */ l.jsxs(v.Fragment, { children: [
      /* @__PURE__ */ l.jsxs("tr", { children: [
        /* @__PURE__ */ l.jsx("td", { children: /* @__PURE__ */ l.jsxs(
          "button",
          {
            type: "button",
            className: "lt-expand-btn",
            "aria-expanded": u === _.id,
            "aria-label": `${u === _.id ? "Recolher" : "Expandir"} detalhes de ${_.companyName}`,
            onClick: () => d(u === _.id ? null : _.id),
            children: [
              u === _.id ? "▾" : "▸",
              " ",
              _.companyName
            ]
          }
        ) }),
        /* @__PURE__ */ l.jsx("td", { children: /* @__PURE__ */ l.jsx("span", { className: `lt-badge ${_.isCustomer ? "lt-badge--customer" : "lt-badge--prospect"}`, children: _.isCustomer ? "Cliente" : "Prospect" }) }),
        /* @__PURE__ */ l.jsx("td", { children: Bn(_.opportunityScore) }),
        /* @__PURE__ */ l.jsx("td", { children: yo(_.financialPotential) }),
        /* @__PURE__ */ l.jsx("td", { children: _.product ?? "—" }),
        /* @__PURE__ */ l.jsx("td", { children: _.service ?? "—" }),
        /* @__PURE__ */ l.jsx("td", { children: _.priority }),
        /* @__PURE__ */ l.jsx("td", { children: _.sources.map((f) => f.type).join(", ") })
      ] }),
      u === _.id && /* @__PURE__ */ l.jsx(
        km,
        {
          row: _,
          repId: t,
          onRowUpdated: n,
          onRenewalDateUpdated: r,
          suggestionCache: m,
          contactsCache: h,
          aiHasKey: g
        }
      )
    ] }, _.id)) })
  ] });
}
const _l = "__custom__", Em = {
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
function bm() {
  const [e, t] = v.useState(null), [n, r] = v.useState(""), [a, o] = v.useState(""), [s, i] = v.useState(""), [u, d] = v.useState(null), [m, h] = v.useState(null), [g, y] = v.useState(!1);
  v.useEffect(() => {
    ed().then((c) => {
      t(c), r(c.provider), i(c.model);
    }).catch((c) => d(c instanceof Error ? c.message : "Não consegui carregar a configuração de IA."));
  }, []);
  const S = async () => {
    y(!0), d(null), h(null);
    try {
      const c = await Xf(n, a, s);
      t(c), i(c.model), o(""), h("Configuração de IA salva.");
    } catch (c) {
      d(c instanceof Error ? c.message : "Falha ao salvar a configuração de IA.");
    } finally {
      y(!1);
    }
  };
  if (u && !e) return /* @__PURE__ */ l.jsx("p", { className: "lt-alert", role: "alert", children: u });
  if (!e) return /* @__PURE__ */ l.jsx("p", { className: "lt-hint", children: "Carregando…" });
  const j = n === e.provider ? e.model_options : Em[n] ?? [], _ = j.length === 0, f = _ || s !== "" && !j.some((c) => c.value === s);
  return /* @__PURE__ */ l.jsxs("div", { className: "lt-source-card", children: [
    /* @__PURE__ */ l.jsx("div", { className: "lt-source-card__header", children: /* @__PURE__ */ l.jsxs("div", { className: "lt-header-row", children: [
      /* @__PURE__ */ l.jsx("p", { className: "lt-source-card__title", children: "Inteligência Artificial" }),
      /* @__PURE__ */ l.jsx(we, { text: "Opcional — usada só pra gerar rascunho de e-mail. O Lead.Tracker funciona normalmente sem isso." })
    ] }) }),
    /* @__PURE__ */ l.jsxs("div", { className: "lt-source-card__form", children: [
      /* @__PURE__ */ l.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ l.jsx("span", { children: "Provedor de IA" }),
        /* @__PURE__ */ l.jsxs(
          "select",
          {
            value: n,
            onChange: (c) => {
              r(c.target.value), i("");
            },
            children: [
              /* @__PURE__ */ l.jsx("option", { value: "", children: "Não configurado" }),
              e.options.map((c) => /* @__PURE__ */ l.jsx("option", { value: c.value, children: c.label }, c.value))
            ]
          }
        ),
        /* @__PURE__ */ l.jsx("span", { className: "lt-hint", children: "Escolha o provedor de IA que vai gerar os rascunhos de e-mail." })
      ] }),
      n && (_ ? /* @__PURE__ */ l.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ l.jsx("span", { children: "Modelo" }),
        /* @__PURE__ */ l.jsx(
          "input",
          {
            value: s,
            onChange: (c) => i(c.target.value),
            placeholder: "ex.: openai/gpt-4o-mini"
          }
        ),
        /* @__PURE__ */ l.jsx("span", { className: "lt-hint", children: "OpenRouter dá acesso a qualquer modelo pelo nome exato — deixe em branco pra usar o padrão do OpenRouter." })
      ] }) : /* @__PURE__ */ l.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ l.jsx("span", { children: "Modelo" }),
        /* @__PURE__ */ l.jsxs(
          "select",
          {
            value: f ? _l : s,
            onChange: (c) => i(c.target.value === _l ? "" : c.target.value),
            children: [
              /* @__PURE__ */ l.jsx("option", { value: _l, children: "Padrão do provedor" }),
              j.map((c) => /* @__PURE__ */ l.jsx("option", { value: c.value, children: c.label }, c.value))
            ]
          }
        ),
        /* @__PURE__ */ l.jsx("span", { className: "lt-hint", children: "Barato/equilibrado/caro reflete custo e capacidade do modelo — padrão do provedor usa a opção equilibrada." })
      ] })),
      /* @__PURE__ */ l.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ l.jsx("span", { children: "Chave de acesso do provedor" }),
        /* @__PURE__ */ l.jsx(
          "input",
          {
            type: "password",
            value: a,
            onChange: (c) => o(c.target.value),
            placeholder: e.has_key ? "••••••••" : ""
          }
        ),
        /* @__PURE__ */ l.jsx("span", { className: "lt-hint", children: "Cole aqui a chave fornecida pelo provedor escolhido. Deixe em branco pra manter a chave já salva." })
      ] }),
      /* @__PURE__ */ l.jsx("div", { className: "lt-detail-actions", children: /* @__PURE__ */ l.jsx("button", { type: "button", className: "lt-btn", onClick: S, disabled: g, children: g ? "Salvando…" : "Salvar" }) }),
      u && /* @__PURE__ */ l.jsx("p", { className: "lt-alert", role: "alert", children: u }),
      m && /* @__PURE__ */ l.jsx("p", { className: "lt-hint", role: "status", children: m })
    ] })
  ] });
}
function Pm() {
  const [e, t] = v.useState(null), [n, r] = v.useState("merge"), [a, o] = v.useState(!1), [s, i] = v.useState(null), [u, d] = v.useState(null), m = async () => {
    if (e) {
      o(!0), d(null), i(null);
      try {
        const h = await Ph(e, n);
        i(h);
      } catch (h) {
        d(h instanceof Error ? h.message : "Falha ao importar o CSV.");
      } finally {
        o(!1);
      }
    }
  };
  return /* @__PURE__ */ l.jsxs("div", { className: "lt-source-card", children: [
    /* @__PURE__ */ l.jsx("div", { className: "lt-source-card__header", children: /* @__PURE__ */ l.jsxs("div", { className: "lt-header-row", children: [
      /* @__PURE__ */ l.jsx("p", { className: "lt-source-card__title", children: "Importar CSV" }),
      /* @__PURE__ */ l.jsx(we, { text: "Cadastra empresa + portfólio (o que ela já tem do seu catálogo) em lote, sem precisar de Salesforce ou Google Maps configurados. Fabricante/produto/serviço citados no arquivo precisam já existir em Portfólio — o import nunca inventa item novo no catálogo." })
    ] }) }),
    /* @__PURE__ */ l.jsxs("div", { className: "lt-source-card__form", children: [
      /* @__PURE__ */ l.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ l.jsx("span", { children: "Arquivo CSV" }),
        /* @__PURE__ */ l.jsx(
          "input",
          {
            type: "file",
            accept: ".csv,text/csv",
            onChange: (h) => {
              var g;
              return t(((g = h.target.files) == null ? void 0 : g[0]) ?? null);
            }
          }
        ),
        /* @__PURE__ */ l.jsx("span", { className: "lt-hint", children: "Colunas: company_name (obrigatória), is_customer, segment, region, rep_id, vendor, product, service. Uma linha por empresa + item de portfólio — repita a empresa numa linha por produto/serviço." })
      ] }),
      /* @__PURE__ */ l.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ l.jsx("span", { children: "Empresa já cadastrada: o que fazer com o portfólio" }),
        /* @__PURE__ */ l.jsxs("select", { value: n, onChange: (h) => r(h.target.value), children: [
          /* @__PURE__ */ l.jsx("option", { value: "merge", children: "Adicionar aos itens já cadastrados" }),
          /* @__PURE__ */ l.jsx("option", { value: "replace", children: "Substituir pelos itens deste arquivo" })
        ] }),
        /* @__PURE__ */ l.jsx("span", { className: "lt-hint", children: "Adicionar preserva o que já foi cadastrado antes; Substituir descarta o portfólio anterior da empresa e usa só o que está neste arquivo." })
      ] }),
      /* @__PURE__ */ l.jsx("div", { className: "lt-detail-actions", children: /* @__PURE__ */ l.jsx("button", { type: "button", className: "lt-btn", onClick: m, disabled: a || !e, children: a ? "Importando…" : "Importar" }) }),
      u && /* @__PURE__ */ l.jsx("p", { className: "lt-alert", role: "alert", children: u }),
      s && /* @__PURE__ */ l.jsxs("div", { className: "lt-panel", children: [
        /* @__PURE__ */ l.jsxs("p", { className: "lt-panel-text", children: [
          s.companies_imported,
          " empresa(s) importada(s), ",
          s.portfolios_updated,
          " portfólio(s) atualizado(s), ",
          s.opportunities_generated,
          " oportunidade(s) gerada(s)."
        ] }),
        s.errors.length > 0 && /* @__PURE__ */ l.jsx("ul", { children: s.errors.map((h, g) => /* @__PURE__ */ l.jsx("li", { className: "lt-alert", children: h }, g)) })
      ] })
    ] })
  ] });
}
const Mr = {
  industry_hint: "Setor / segmento do cliente",
  deal_size_hint: "Porte estimado do negócio",
  renewal_date: "Data de renovação do contrato"
};
function Tm() {
  const [e, t] = v.useState(null), [n, r] = v.useState(null), [a, o] = v.useState(null), [s, i] = v.useState(null);
  v.useEffect(() => {
    zh().then(t).catch((m) => r(m instanceof Error ? m.message : "Não consegui carregar os campos do Salesforce."));
  }, []);
  const u = async (m, h) => {
    i(m.sourceFieldApiName), o(null);
    try {
      if (h === "")
        await Lh(m.sourceFieldApiName), t((g) => m.broken ? g.filter((y) => y.sourceFieldApiName !== m.sourceFieldApiName) : g.map((y) => y.sourceFieldApiName === m.sourceFieldApiName ? { ...y, role: null } : y));
      else {
        const { reassignedFromApiName: g, reassignedFromLabel: y } = await $h(
          m.sourceFieldApiName,
          m.sourceFieldLabel,
          h
        );
        t((S) => S.map((j) => j.sourceFieldApiName === m.sourceFieldApiName ? { ...j, role: h } : g && j.sourceFieldApiName === g ? { ...j, role: null } : j)), o(
          y ? `${Mr[h]} agora é preenchido por ${m.sourceFieldLabel} em vez de ${y}.` : `A partir de agora, o valor de ${m.sourceFieldLabel} será a fonte de verdade para ${Mr[h]} — ele substitui qualquer valor que o sistema já tenha.`
        );
      }
    } catch (g) {
      o(g instanceof Error ? g.message : "Falha ao atualizar o mapeamento.");
    } finally {
      i(null);
    }
  };
  if (n) return /* @__PURE__ */ l.jsx("p", { className: "lt-alert", role: "alert", children: n });
  if (!e) return /* @__PURE__ */ l.jsx("p", { className: "lt-hint", children: "Carregando campos do Salesforce…" });
  const d = [...e].sort((m, h) => m.role === h.role ? 0 : m.role ? -1 : 1);
  return /* @__PURE__ */ l.jsxs("div", { children: [
    /* @__PURE__ */ l.jsxs("div", { className: "lt-header", children: [
      /* @__PURE__ */ l.jsx("h2", { children: "Mapeamento de campos do Salesforce" }),
      /* @__PURE__ */ l.jsx("p", { children: "Alguns campos personalizados do Salesforce podem preencher automaticamente informações do sistema. Campos que você não mapear continuam sendo considerados pela IA normalmente." })
    ] }),
    a && /* @__PURE__ */ l.jsx("p", { className: "lt-hint", role: "status", children: a }),
    d.length === 0 ? /* @__PURE__ */ l.jsx("p", { className: "lt-empty", role: "status", children: "Nenhum campo personalizado encontrado no Salesforce." }) : /* @__PURE__ */ l.jsxs("table", { className: "lt-table", children: [
      /* @__PURE__ */ l.jsx("thead", { children: /* @__PURE__ */ l.jsxs("tr", { children: [
        /* @__PURE__ */ l.jsx("th", { children: "Campo do Salesforce" }),
        /* @__PURE__ */ l.jsx("th", { children: "Preenche este dado do sistema" })
      ] }) }),
      /* @__PURE__ */ l.jsx("tbody", { children: d.map((m) => /* @__PURE__ */ l.jsxs(v.Fragment, { children: [
        /* @__PURE__ */ l.jsxs("tr", { children: [
          /* @__PURE__ */ l.jsxs("td", { children: [
            m.broken && /* @__PURE__ */ l.jsx("span", { className: "lt-badge lt-badge--severity-critico", children: "Campo removido" }),
            " ",
            m.sourceFieldLabel
          ] }),
          /* @__PURE__ */ l.jsx("td", { children: /* @__PURE__ */ l.jsxs(
            "select",
            {
              value: m.role ?? "",
              disabled: s === m.sourceFieldApiName,
              onChange: (h) => u(m, h.target.value),
              children: [
                /* @__PURE__ */ l.jsx("option", { value: "", children: "—" }),
                !m.broken && Object.keys(Mr).map((h) => /* @__PURE__ */ l.jsx("option", { value: h, children: Mr[h] }, h))
              ]
            }
          ) })
        ] }),
        m.broken && /* @__PURE__ */ l.jsx("tr", { children: /* @__PURE__ */ l.jsx("td", { colSpan: 2, children: /* @__PURE__ */ l.jsx("p", { className: "lt-alert", role: "alert", children: m.brokenMessage }) }) })
      ] }, m.sourceFieldApiName)) })
    ] })
  ] });
}
const Ar = "__new__";
function Rm({
  products: e,
  services: t,
  loadError: n,
  onProductCreated: r,
  onServiceCreated: a,
  onProductDeleted: o,
  onServiceDeleted: s
}) {
  const [i, u] = v.useState([]), [d, m] = v.useState(!1), [h, g] = v.useState(""), [y, S] = v.useState(""), [j, _] = v.useState(""), [f, c] = v.useState(""), [p, w] = v.useState(!1), [x, b] = v.useState(null), [P, E] = v.useState(!1), [A, R] = v.useState(""), [V, I] = v.useState(""), [$, q] = v.useState(!1), [H, Ce] = v.useState(null), [me, T] = v.useState(null), [O, C] = v.useState(null), [M, N] = v.useState(null);
  v.useEffect(() => {
    xh().then(u).catch((L) => T(L instanceof Error ? L.message : "Não consegui carregar os fabricantes."));
  }, []);
  const ce = (L) => {
    var We;
    return ((We = i.find((Sr) => Sr.id === L)) == null ? void 0 : We.name) ?? L;
  }, Ee = () => {
    g(""), S(""), _(""), c("");
  }, Pn = async () => {
    w(!0), b(null);
    try {
      let L = h;
      if (h === Ar) {
        const Sr = await jh(y);
        u((pd) => [...pd, Sr]), L = Sr.id;
      }
      const We = await Sh(L, j, f);
      r(We), m(!1), Ee();
    } catch (L) {
      b(L instanceof Error ? L.message : "Falha ao salvar produto.");
    } finally {
      w(!1);
    }
  }, et = async () => {
    q(!0), Ce(null);
    try {
      const L = await Nh(A, V);
      a(L), E(!1), R(""), I("");
    } catch (L) {
      Ce(L instanceof Error ? L.message : "Falha ao salvar serviço.");
    } finally {
      q(!1);
    }
  }, Kt = async (L) => {
    if (window.confirm(`Remover o produto "${L.name}"? Essa ação não pode ser desfeita.`)) {
      C(L.id), N(null);
      try {
        await wh(L.id), o(L.id);
      } catch (We) {
        N(We instanceof Error ? We.message : "Falha ao remover produto.");
      } finally {
        C(null);
      }
    }
  }, ud = async (L) => {
    if (window.confirm(`Remover o serviço "${L.name}"? Essa ação não pode ser desfeita.`)) {
      C(L.id), N(null);
      try {
        await kh(L.id), s(L.id);
      } catch (We) {
        N(We instanceof Error ? We.message : "Falha ao remover serviço.");
      } finally {
        C(null);
      }
    }
  };
  if (n || me) return /* @__PURE__ */ l.jsx("p", { className: "lt-alert", role: "alert", children: n ?? me });
  if (!e || !t) return /* @__PURE__ */ l.jsx("p", { className: "lt-hint", children: "Carregando portfólio…" });
  const cd = j.trim() !== "" && (h === Ar ? y.trim() !== "" : h !== ""), dd = A.trim() !== "";
  return /* @__PURE__ */ l.jsxs("div", { children: [
    /* @__PURE__ */ l.jsxs("div", { className: "lt-header lt-header-row", children: [
      /* @__PURE__ */ l.jsx("h2", { children: "Portfólio" }),
      /* @__PURE__ */ l.jsx(we, { text: "Produtos e serviços que sua empresa vende — é o catálogo que as Regras usam pra detectar oportunidade." })
    ] }),
    /* @__PURE__ */ l.jsxs("div", { className: "lt-toolbar", children: [
      /* @__PURE__ */ l.jsx("button", { type: "button", className: "lt-btn", onClick: () => m((L) => !L), children: d ? "Cancelar" : "Novo produto" }),
      /* @__PURE__ */ l.jsx("button", { type: "button", className: "lt-btn", onClick: () => E((L) => !L), children: P ? "Cancelar" : "Novo serviço" })
    ] }),
    d && /* @__PURE__ */ l.jsxs("div", { className: "lt-source-card__form", children: [
      /* @__PURE__ */ l.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ l.jsx("span", { children: "Fabricante" }),
        /* @__PURE__ */ l.jsxs("select", { value: h, onChange: (L) => g(L.target.value), children: [
          /* @__PURE__ */ l.jsx("option", { value: "", children: "Selecione…" }),
          i.map((L) => /* @__PURE__ */ l.jsx("option", { value: L.id, children: L.name }, L.id)),
          /* @__PURE__ */ l.jsx("option", { value: Ar, children: "+ Cadastrar novo fabricante" })
        ] }),
        /* @__PURE__ */ l.jsx("span", { className: "lt-hint", children: "Quem fabrica esse produto — escolha um já cadastrado ou crie um novo." })
      ] }),
      h === Ar && /* @__PURE__ */ l.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ l.jsx("span", { children: "Nome do novo fabricante" }),
        /* @__PURE__ */ l.jsx("input", { value: y, onChange: (L) => S(L.target.value) }),
        /* @__PURE__ */ l.jsx("span", { className: "lt-hint", children: "Nome do fabricante como deve aparecer nas telas do sistema." })
      ] }),
      /* @__PURE__ */ l.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ l.jsx("span", { children: "Nome do produto" }),
        /* @__PURE__ */ l.jsx("input", { value: j, onChange: (L) => _(L.target.value) }),
        /* @__PURE__ */ l.jsx("span", { className: "lt-hint", children: "Nome comercial do produto, como aparece pro cliente." })
      ] }),
      /* @__PURE__ */ l.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ l.jsx("span", { children: "Categoria (ex.: backup, monitoramento — usada pelas Regras)" }),
        /* @__PURE__ */ l.jsx("input", { value: f, onChange: (L) => c(L.target.value) })
      ] }),
      x && /* @__PURE__ */ l.jsx("p", { className: "lt-alert", role: "alert", children: x }),
      /* @__PURE__ */ l.jsx("div", { className: "lt-detail-actions", children: /* @__PURE__ */ l.jsx("button", { type: "button", className: "lt-btn", onClick: Pn, disabled: p || !cd, children: p ? "Salvando…" : "Criar produto" }) })
    ] }),
    P && /* @__PURE__ */ l.jsxs("div", { className: "lt-source-card__form", children: [
      /* @__PURE__ */ l.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ l.jsx("span", { children: "Nome do serviço" }),
        /* @__PURE__ */ l.jsx("input", { value: A, onChange: (L) => R(L.target.value) }),
        /* @__PURE__ */ l.jsx("span", { className: "lt-hint", children: "Nome comercial do serviço, como aparece pro cliente." })
      ] }),
      /* @__PURE__ */ l.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ l.jsx("span", { children: "Categoria (ex.: backup, monitoramento — usada pelas Regras)" }),
        /* @__PURE__ */ l.jsx("input", { value: V, onChange: (L) => I(L.target.value) })
      ] }),
      H && /* @__PURE__ */ l.jsx("p", { className: "lt-alert", role: "alert", children: H }),
      /* @__PURE__ */ l.jsx("div", { className: "lt-detail-actions", children: /* @__PURE__ */ l.jsx("button", { type: "button", className: "lt-btn", onClick: et, disabled: $ || !dd, children: $ ? "Salvando…" : "Criar serviço" }) })
    ] }),
    M && /* @__PURE__ */ l.jsx("p", { className: "lt-alert", role: "alert", children: M }),
    e.length === 0 ? /* @__PURE__ */ l.jsx("p", { className: "lt-empty", role: "status", children: "Nenhum produto cadastrado ainda." }) : /* @__PURE__ */ l.jsxs("table", { className: "lt-table", children: [
      /* @__PURE__ */ l.jsx("thead", { children: /* @__PURE__ */ l.jsxs("tr", { children: [
        /* @__PURE__ */ l.jsx("th", { children: "Fabricante" }),
        /* @__PURE__ */ l.jsx("th", { children: "Produto" }),
        /* @__PURE__ */ l.jsx("th", { children: "Categoria" }),
        /* @__PURE__ */ l.jsx("th", {})
      ] }) }),
      /* @__PURE__ */ l.jsx("tbody", { children: e.map((L) => /* @__PURE__ */ l.jsxs("tr", { children: [
        /* @__PURE__ */ l.jsx("td", { children: ce(L.vendor_id) }),
        /* @__PURE__ */ l.jsx("td", { children: L.name }),
        /* @__PURE__ */ l.jsx("td", { children: L.category ?? "—" }),
        /* @__PURE__ */ l.jsx("td", { children: /* @__PURE__ */ l.jsx("button", { type: "button", className: "lt-btn", onClick: () => Kt(L), disabled: O === L.id, children: O === L.id ? "Removendo…" : "Remover" }) })
      ] }, L.id)) })
    ] }),
    t.length === 0 ? /* @__PURE__ */ l.jsx("p", { className: "lt-empty", role: "status", children: "Nenhum serviço cadastrado ainda." }) : /* @__PURE__ */ l.jsxs("table", { className: "lt-table", children: [
      /* @__PURE__ */ l.jsx("thead", { children: /* @__PURE__ */ l.jsxs("tr", { children: [
        /* @__PURE__ */ l.jsx("th", { children: "Serviço" }),
        /* @__PURE__ */ l.jsx("th", { children: "Categoria" }),
        /* @__PURE__ */ l.jsx("th", {})
      ] }) }),
      /* @__PURE__ */ l.jsx("tbody", { children: t.map((L) => /* @__PURE__ */ l.jsxs("tr", { children: [
        /* @__PURE__ */ l.jsx("td", { children: L.name }),
        /* @__PURE__ */ l.jsx("td", { children: L.category ?? "—" }),
        /* @__PURE__ */ l.jsx("td", { children: /* @__PURE__ */ l.jsx("button", { type: "button", className: "lt-btn", onClick: () => ud(L), disabled: O === L.id, children: O === L.id ? "Removendo…" : "Remover" }) })
      ] }, L.id)) })
    ] })
  ] });
}
function Ii(e, t) {
  const n = t.getFullYear();
  if (e === "quarterly") {
    const a = Math.floor(t.getMonth() / 3) + 1;
    return `${n}-Q${a}`;
  }
  const r = String(t.getMonth() + 1).padStart(2, "0");
  return `${n}-${r}`;
}
function zm(e) {
  const t = e.getFullYear();
  return [t, t + 1].flatMap((n) => [1, 2, 3, 4].map((r) => `${n}-Q${r}`));
}
function $m() {
  const [e, t] = v.useState("monthly"), [n, r] = v.useState(Ii("monthly", /* @__PURE__ */ new Date())), [a, o] = v.useState(null), [s, i] = v.useState(null), [u, d] = v.useState(!1), [m, h] = v.useState(""), [g, y] = v.useState(""), [S, j] = v.useState(!1), [_, f] = v.useState(null);
  v.useEffect(() => {
    o(null), Th(e, n).then(o).catch((x) => i(x instanceof Error ? x.message : "Não consegui carregar as metas."));
  }, [e, n]);
  const c = (x) => {
    t(x), r(Ii(x, /* @__PURE__ */ new Date()));
  }, p = async () => {
    j(!0), f(null);
    try {
      const x = await Rh({ rep_id: m, period_type: e, period_key: n, target_amount: Number(g) });
      o((b) => [...(b ?? []).filter((P) => P.rep_id !== x.rep_id), x]), d(!1), h(""), y("");
    } catch (x) {
      f(x instanceof Error ? x.message : "Falha ao salvar meta.");
    } finally {
      j(!1);
    }
  }, w = m.trim() !== "" && Number(g) > 0;
  return /* @__PURE__ */ l.jsxs("div", { children: [
    /* @__PURE__ */ l.jsxs("div", { className: "lt-header lt-header-row", children: [
      /* @__PURE__ */ l.jsx("h2", { children: "Metas por representante" }),
      /* @__PURE__ */ l.jsx(we, { text: "Cadastro manual — sem meta definida, potencial financeiro é um número sem contexto pro dashboard." })
    ] }),
    /* @__PURE__ */ l.jsxs("div", { className: "lt-toolbar", children: [
      /* @__PURE__ */ l.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ l.jsx("span", { children: "Período" }),
        /* @__PURE__ */ l.jsxs("select", { value: e, onChange: (x) => c(x.target.value), children: [
          /* @__PURE__ */ l.jsx("option", { value: "monthly", children: "Mensal" }),
          /* @__PURE__ */ l.jsx("option", { value: "quarterly", children: "Trimestral" })
        ] })
      ] }),
      e === "monthly" ? /* @__PURE__ */ l.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ l.jsx("span", { children: "Mês" }),
        /* @__PURE__ */ l.jsx("input", { type: "month", value: n, onChange: (x) => r(x.target.value) })
      ] }) : /* @__PURE__ */ l.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ l.jsx("span", { children: "Trimestre" }),
        /* @__PURE__ */ l.jsx("select", { value: n, onChange: (x) => r(x.target.value), children: zm(/* @__PURE__ */ new Date()).map((x) => /* @__PURE__ */ l.jsx("option", { value: x, children: x }, x)) })
      ] }),
      /* @__PURE__ */ l.jsx("button", { type: "button", className: "lt-btn", onClick: () => d((x) => !x), children: u ? "Cancelar" : "Nova meta" })
    ] }),
    u && /* @__PURE__ */ l.jsxs("div", { className: "lt-source-card__form", children: [
      /* @__PURE__ */ l.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ l.jsx("span", { children: "Id do representante" }),
        /* @__PURE__ */ l.jsx("input", { value: m, onChange: (x) => h(x.target.value) }),
        /* @__PURE__ */ l.jsx("span", { className: "lt-hint", children: "Identificador usado nas oportunidades pra atribuir o pipeline a esse representante." })
      ] }),
      /* @__PURE__ */ l.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ l.jsx("span", { children: "Meta financeira (R$) pro período selecionado acima" }),
        /* @__PURE__ */ l.jsx("input", { type: "number", min: "0", value: g, onChange: (x) => y(x.target.value) })
      ] }),
      _ && /* @__PURE__ */ l.jsx("p", { className: "lt-alert", role: "alert", children: _ }),
      /* @__PURE__ */ l.jsx("div", { className: "lt-detail-actions", children: /* @__PURE__ */ l.jsx("button", { type: "button", className: "lt-btn", onClick: p, disabled: S || !w, children: S ? "Salvando…" : "Salvar meta" }) })
    ] }),
    s && /* @__PURE__ */ l.jsx("p", { className: "lt-alert", role: "alert", children: s }),
    !s && !a && /* @__PURE__ */ l.jsx("p", { className: "lt-hint", children: "Carregando metas…" }),
    !s && a && a.length === 0 && /* @__PURE__ */ l.jsxs("p", { className: "lt-empty", role: "status", children: [
      "Nenhuma meta cadastrada pra ",
      n,
      " ainda."
    ] }),
    !s && a && a.length > 0 && /* @__PURE__ */ l.jsxs("table", { className: "lt-table", children: [
      /* @__PURE__ */ l.jsx("thead", { children: /* @__PURE__ */ l.jsxs("tr", { children: [
        /* @__PURE__ */ l.jsx("th", { children: "Representante" }),
        /* @__PURE__ */ l.jsx("th", { children: "Meta (R$)" })
      ] }) }),
      /* @__PURE__ */ l.jsx("tbody", { children: a.map((x) => /* @__PURE__ */ l.jsxs("tr", { children: [
        /* @__PURE__ */ l.jsx("td", { children: x.rep_id }),
        /* @__PURE__ */ l.jsx("td", { children: x.target_amount.toLocaleString("pt-BR") })
      ] }, x.rep_id)) })
    ] })
  ] });
}
function Lm(e) {
  if (e.relation_type) return `Relação: ${e.relation_type}`;
  if (e.requires_category.length) {
    const n = e.absent_category.length ? ` sem categoria ${e.absent_category.join(", ")}` : "";
    return `Categoria ${e.requires_category.join(", ")}${n}`;
  }
  const t = e.absent.length ? ` sem ${e.absent.join(", ")}` : "";
  return `Item ${e.requires.join(", ")}${t}`;
}
function Om({ products: e, services: t }) {
  const [n, r] = v.useState(null), [a, o] = v.useState(null), [s, i] = v.useState(!1), [u, d] = v.useState("category"), [m, h] = v.useState("cross-sell"), [g, y] = v.useState(""), [S, j] = v.useState(""), [_, f] = v.useState(""), [c, p] = v.useState(""), [w, x] = v.useState(""), [b, P] = v.useState("prerequisite"), [E, A] = v.useState(!1), [R, V] = v.useState(null), [I, $] = v.useState(null), [q, H] = v.useState(null);
  v.useEffect(() => {
    Ch().then(r).catch((N) => o(N instanceof Error ? N.message : "Não consegui carregar as regras."));
  }, []);
  const Ce = Array.from(new Set([...e, ...t].map((N) => N.category).filter((N) => !!N))), me = [...e.map((N) => ({ id: N.id, label: N.name })), ...t.map((N) => ({ id: N.id, label: N.name }))], T = () => {
    y(""), j(""), f(""), p(""), x("");
  }, O = async () => {
    A(!0), V(null);
    const N = { opportunity_type: m, justification: g };
    u === "presence" ? (N.requires = S ? [S] : [], N.absent = _ ? [_] : []) : u === "category" ? (N.requires_category = c ? [c] : [], N.absent_category = w ? [w] : []) : N.relation_type = b;
    try {
      const ce = await Eh(N);
      r((Ee) => [...Ee ?? [], ce]), i(!1), T();
    } catch (ce) {
      V(ce instanceof Error ? ce.message : "Falha ao salvar regra.");
    } finally {
      A(!1);
    }
  }, C = async (N) => {
    if (window.confirm(`Remover a regra "${N.opportunity_type}"? Essa ação não pode ser desfeita.`)) {
      $(N.id), H(null);
      try {
        await bh(N.id), r((ce) => (ce ?? []).filter((Ee) => Ee.id !== N.id));
      } catch (ce) {
        H(ce instanceof Error ? ce.message : "Falha ao remover regra.");
      } finally {
        $(null);
      }
    }
  };
  if (a) return /* @__PURE__ */ l.jsx("p", { className: "lt-alert", role: "alert", children: a });
  if (!n) return /* @__PURE__ */ l.jsx("p", { className: "lt-hint", children: "Carregando regras…" });
  const M = g.trim() !== "" && (u === "relation" || (u === "presence" ? S !== "" : c !== ""));
  return /* @__PURE__ */ l.jsxs("div", { children: [
    /* @__PURE__ */ l.jsxs("div", { className: "lt-header lt-header-row", children: [
      /* @__PURE__ */ l.jsx("h2", { children: "Regras" }),
      /* @__PURE__ */ l.jsx(we, { text: "Regras determinísticas que detectam oportunidade — sempre por categoria/item real do catálogo, nunca texto livre." })
    ] }),
    /* @__PURE__ */ l.jsx("div", { className: "lt-toolbar", children: /* @__PURE__ */ l.jsx("button", { type: "button", className: "lt-btn", onClick: () => i((N) => !N), children: s ? "Cancelar" : "Nova regra" }) }),
    s && /* @__PURE__ */ l.jsxs("div", { className: "lt-source-card__form", children: [
      /* @__PURE__ */ l.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ l.jsx("span", { children: "Tipo de regra" }),
        /* @__PURE__ */ l.jsxs("select", { value: u, onChange: (N) => d(N.target.value), children: [
          /* @__PURE__ */ l.jsx("option", { value: "category", children: "Categoria (tenho X, não tenho Y)" }),
          /* @__PURE__ */ l.jsx("option", { value: "presence", children: "Item específico" }),
          /* @__PURE__ */ l.jsx("option", { value: "relation", children: "Relação já cadastrada no catálogo" })
        ] }),
        /* @__PURE__ */ l.jsx("span", { className: "lt-hint", children: "Categoria compara grupos de itens; item específico compara um produto/serviço só; relação reaproveita um vínculo já existente no catálogo." })
      ] }),
      u === "category" && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
        /* @__PURE__ */ l.jsxs("label", { className: "lt-field", children: [
          /* @__PURE__ */ l.jsx("span", { children: "Categoria que a empresa precisa ter" }),
          /* @__PURE__ */ l.jsxs("select", { value: c, onChange: (N) => p(N.target.value), children: [
            /* @__PURE__ */ l.jsx("option", { value: "", children: "Selecione…" }),
            Ce.map((N) => /* @__PURE__ */ l.jsx("option", { value: N, children: N }, N))
          ] })
        ] }),
        /* @__PURE__ */ l.jsxs("label", { className: "lt-field", children: [
          /* @__PURE__ */ l.jsx("span", { children: "Categoria que NÃO deve ter (opcional)" }),
          /* @__PURE__ */ l.jsxs("select", { value: w, onChange: (N) => x(N.target.value), children: [
            /* @__PURE__ */ l.jsx("option", { value: "", children: "Nenhuma" }),
            Ce.map((N) => /* @__PURE__ */ l.jsx("option", { value: N, children: N }, N))
          ] })
        ] })
      ] }),
      u === "presence" && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
        /* @__PURE__ */ l.jsxs("label", { className: "lt-field", children: [
          /* @__PURE__ */ l.jsx("span", { children: "Item que a empresa precisa ter" }),
          /* @__PURE__ */ l.jsxs("select", { value: S, onChange: (N) => j(N.target.value), children: [
            /* @__PURE__ */ l.jsx("option", { value: "", children: "Selecione…" }),
            me.map((N) => /* @__PURE__ */ l.jsx("option", { value: N.id, children: N.label }, N.id))
          ] })
        ] }),
        /* @__PURE__ */ l.jsxs("label", { className: "lt-field", children: [
          /* @__PURE__ */ l.jsx("span", { children: "Item que NÃO deve ter (opcional)" }),
          /* @__PURE__ */ l.jsxs("select", { value: _, onChange: (N) => f(N.target.value), children: [
            /* @__PURE__ */ l.jsx("option", { value: "", children: "Nenhum" }),
            me.map((N) => /* @__PURE__ */ l.jsx("option", { value: N.id, children: N.label }, N.id))
          ] })
        ] })
      ] }),
      u === "relation" && /* @__PURE__ */ l.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ l.jsx("span", { children: "Tipo de relação" }),
        /* @__PURE__ */ l.jsxs("select", { value: b, onChange: (N) => P(N.target.value), children: [
          /* @__PURE__ */ l.jsx("option", { value: "prerequisite", children: "Pré-requisito — gera alerta de risco técnico" }),
          /* @__PURE__ */ l.jsx("option", { value: "substitute", children: "Substituto — gera oportunidade de consolidação" })
        ] }),
        /* @__PURE__ */ l.jsx("span", { className: "lt-hint", children: "Reaproveita a relação entre itens já definida no catálogo de portfólio." })
      ] }),
      /* @__PURE__ */ l.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ l.jsx("span", { children: "Rótulo da oportunidade (ex.: cross-sell, consolidation, risk)" }),
        /* @__PURE__ */ l.jsx("input", { value: m, onChange: (N) => h(N.target.value) })
      ] }),
      /* @__PURE__ */ l.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ l.jsx("span", { children: "Justificativa (aparece na oportunidade gerada)" }),
        /* @__PURE__ */ l.jsx("input", { value: g, onChange: (N) => y(N.target.value) })
      ] }),
      R && /* @__PURE__ */ l.jsx("p", { className: "lt-alert", role: "alert", children: R }),
      /* @__PURE__ */ l.jsx("div", { className: "lt-detail-actions", children: /* @__PURE__ */ l.jsx("button", { type: "button", className: "lt-btn", onClick: O, disabled: E || !M, children: E ? "Salvando…" : "Criar regra" }) })
    ] }),
    q && /* @__PURE__ */ l.jsx("p", { className: "lt-alert", role: "alert", children: q }),
    n.length === 0 ? /* @__PURE__ */ l.jsx("p", { className: "lt-empty", role: "status", children: "Nenhuma regra cadastrada ainda." }) : /* @__PURE__ */ l.jsxs("table", { className: "lt-table", children: [
      /* @__PURE__ */ l.jsx("thead", { children: /* @__PURE__ */ l.jsxs("tr", { children: [
        /* @__PURE__ */ l.jsx("th", { children: "Rótulo" }),
        /* @__PURE__ */ l.jsx("th", { children: "Condição" }),
        /* @__PURE__ */ l.jsx("th", { children: "Justificativa" }),
        /* @__PURE__ */ l.jsx("th", { children: "Ativa" }),
        /* @__PURE__ */ l.jsx("th", {})
      ] }) }),
      /* @__PURE__ */ l.jsx("tbody", { children: n.map((N) => /* @__PURE__ */ l.jsxs("tr", { children: [
        /* @__PURE__ */ l.jsx("td", { children: N.opportunity_type }),
        /* @__PURE__ */ l.jsx("td", { children: Lm(N) }),
        /* @__PURE__ */ l.jsx("td", { children: N.justification }),
        /* @__PURE__ */ l.jsx("td", { children: N.active ? "Sim" : "Não" }),
        /* @__PURE__ */ l.jsx("td", { children: /* @__PURE__ */ l.jsx("button", { type: "button", className: "lt-btn", onClick: () => C(N), disabled: I === N.id, children: I === N.id ? "Removendo…" : "Remover" }) })
      ] }, N.id)) })
    ] })
  ] });
}
const Im = { connected: "🟢", failed: "🔴", unknown: "🔴" }, Di = {
  connected: "Conectado",
  failed: "Desconectado",
  unknown: "Desconectado"
};
function Dm({ source: e, onChange: t }) {
  const [n, r] = v.useState(e.enabled === !0), [a, o] = v.useState({}), [s, i] = v.useState(e.last_check), [u, d] = v.useState(!1), [m, h] = v.useState(null), g = async (j) => {
    d(!0);
    try {
      const _ = await ah(j);
      i(_);
    } catch (_) {
      i({ status: "failed", message: _ instanceof Error ? _.message : "Falha ao testar conexão." });
    } finally {
      d(!1);
    }
  }, y = async () => {
    if (!e.implemented) return;
    const j = !n;
    if (r(j), !j) {
      d(!0), h(null);
      try {
        const _ = await Ni(e.id, !1, {});
        t(_), i({ status: "unknown", message: "" });
      } catch (_) {
        h(_ instanceof Error ? _.message : "Falha ao salvar.");
      } finally {
        d(!1);
      }
    }
  }, S = async () => {
    d(!0), h(null);
    try {
      const j = await Ni(e.id, !0, a);
      t(j), o({}), await g(e.id);
    } catch (j) {
      h(j instanceof Error ? j.message : "Falha ao salvar.");
    } finally {
      d(!1);
    }
  };
  return /* @__PURE__ */ l.jsxs("div", { className: "lt-source-card", children: [
    /* @__PURE__ */ l.jsxs("div", { className: "lt-source-card__header", children: [
      /* @__PURE__ */ l.jsxs("div", { children: [
        /* @__PURE__ */ l.jsx("p", { className: "lt-source-card__title", children: e.label }),
        !e.implemented && /* @__PURE__ */ l.jsx("p", { className: "lt-hint", children: "Em breve" })
      ] }),
      /* @__PURE__ */ l.jsxs("div", { className: "lt-source-card__status", children: [
        e.enabled !== null && e.implemented && /* @__PURE__ */ l.jsxs("span", { className: "lt-conn-indicator", "aria-label": Di[s.status], children: [
          Im[s.status],
          " ",
          Di[s.status]
        ] }),
        e.enabled === null ? /* @__PURE__ */ l.jsx("span", { className: "lt-hint", children: "Sempre disponível" }) : /* @__PURE__ */ l.jsxs("label", { className: "lt-toggle", children: [
          /* @__PURE__ */ l.jsx(
            "input",
            {
              type: "checkbox",
              className: "lt-toggle__input",
              checked: n,
              disabled: u || !e.implemented,
              onChange: y,
              "aria-label": `Fonte ${e.label}`
            }
          ),
          /* @__PURE__ */ l.jsx("span", { className: "lt-toggle__track", children: /* @__PURE__ */ l.jsx("span", { className: "lt-toggle__knob" }) }),
          /* @__PURE__ */ l.jsx("span", { children: n ? "Ligado" : "Desligado" })
        ] })
      ] })
    ] }),
    s.status === "failed" && e.enabled && /* @__PURE__ */ l.jsx("p", { className: "lt-alert", role: "alert", children: s.message }),
    m && /* @__PURE__ */ l.jsx("p", { className: "lt-alert", role: "alert", children: m }),
    e.enabled !== null && /* @__PURE__ */ l.jsxs("div", { className: "lt-source-card__form", children: [
      e.fields.map((j) => /* @__PURE__ */ l.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ l.jsx("span", { children: j.label }),
        /* @__PURE__ */ l.jsx(
          "input",
          {
            type: j.secret ? "password" : "text",
            placeholder: j.has_value ? "••••••••" : "",
            disabled: !n,
            onChange: (_) => o((f) => ({ ...f, [j.key]: _.target.value }))
          }
        ),
        /* @__PURE__ */ l.jsx("span", { className: "lt-hint", children: j.help_text })
      ] }, j.key)),
      /* @__PURE__ */ l.jsx("div", { className: "lt-detail-actions", children: /* @__PURE__ */ l.jsx("button", { type: "button", className: "lt-btn", onClick: S, disabled: u || !n, children: "Salvar e conectar" }) })
    ] })
  ] });
}
function Fm() {
  const [e, t] = v.useState(""), [n, r] = v.useState(""), [a, o] = v.useState(""), [s, i] = v.useState(""), [u, d] = v.useState(!1), [m, h] = v.useState(null), [g, y] = v.useState(null), [S, j] = v.useState(null);
  v.useEffect(() => {
    Promise.all([Jf(), eh(), nh()]).then(([p, w, x]) => {
      t(String(p.days)), r(String(w.min_sample)), o(String(x.min_score)), i(String(x.daily_cap)), d(!0);
    }).catch((p) => h(p instanceof Error ? p.message : "Não consegui carregar os limites configurados."));
  }, []);
  const _ = async () => {
    j("sla"), h(null), y(null);
    try {
      const p = await Zf(Number(e));
      t(String(p.days)), y("Prazo de triagem salvo.");
    } catch (p) {
      h(p instanceof Error ? p.message : "Falha ao salvar o prazo de triagem.");
    } finally {
      j(null);
    }
  }, f = async () => {
    j("sample"), h(null), y(null);
    try {
      const p = await th(Number(n));
      r(String(p.min_sample)), y("Mínimo de oportunidades por par salvo.");
    } catch (p) {
      h(p instanceof Error ? p.message : "Falha ao salvar o mínimo de oportunidades por par.");
    } finally {
      j(null);
    }
  }, c = async () => {
    j("geo"), h(null), y(null);
    try {
      const p = await rh(Number(a), Number(s));
      o(String(p.min_score)), i(String(p.daily_cap)), y("Limites de promoção geográfica salvos.");
    } catch (p) {
      h(p instanceof Error ? p.message : "Falha ao salvar os limites de promoção geográfica.");
    } finally {
      j(null);
    }
  };
  return m && !u ? /* @__PURE__ */ l.jsx("p", { className: "lt-alert", role: "alert", children: m }) : u ? /* @__PURE__ */ l.jsxs("div", { className: "lt-source-card", children: [
    /* @__PURE__ */ l.jsx("div", { className: "lt-source-card__header", children: /* @__PURE__ */ l.jsxs("div", { className: "lt-header-row", children: [
      /* @__PURE__ */ l.jsx("p", { className: "lt-source-card__title", children: "Limites e prazos" }),
      /* @__PURE__ */ l.jsx(we, { text: "Controla quando uma oportunidade conta como atrasada na triagem e quantas descobertas de geolocalização entram automaticamente por dia." })
    ] }) }),
    /* @__PURE__ */ l.jsxs("div", { className: "lt-source-card__form", children: [
      /* @__PURE__ */ l.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ l.jsx("span", { children: "Prazo de triagem (dias)" }),
        /* @__PURE__ */ l.jsx(
          "input",
          {
            type: "number",
            min: 1,
            value: e,
            onChange: (p) => t(p.target.value)
          }
        ),
        /* @__PURE__ */ l.jsx("span", { className: "lt-hint", children: 'Detectada sem virar qualificada nem descartada depois desse prazo conta como "triagem atrasada" no dashboard.' })
      ] }),
      /* @__PURE__ */ l.jsx("div", { className: "lt-detail-actions", children: /* @__PURE__ */ l.jsx("button", { type: "button", className: "lt-btn", onClick: _, disabled: S === "sla", children: S === "sla" ? "Salvando…" : "Salvar prazo de triagem" }) }),
      /* @__PURE__ */ l.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ l.jsx("span", { children: "Mínimo de oportunidades por representante e categoria" }),
        /* @__PURE__ */ l.jsx(
          "input",
          {
            type: "number",
            min: 1,
            value: n,
            onChange: (p) => r(p.target.value)
          }
        ),
        /* @__PURE__ */ l.jsx("span", { className: "lt-hint", children: 'Abaixo disso, o par aparece como "dado insuficiente" no dashboard — nunca como 0%.' })
      ] }),
      /* @__PURE__ */ l.jsx("div", { className: "lt-detail-actions", children: /* @__PURE__ */ l.jsx("button", { type: "button", className: "lt-btn", onClick: f, disabled: S === "sample", children: S === "sample" ? "Salvando…" : "Salvar mínimo por par" }) }),
      /* @__PURE__ */ l.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ l.jsx("span", { children: "Score mínimo pra promoção automática" }),
        /* @__PURE__ */ l.jsx(
          "input",
          {
            type: "number",
            min: 0,
            max: 1,
            step: 0.01,
            value: a,
            onChange: (p) => o(p.target.value)
          }
        ),
        /* @__PURE__ */ l.jsx("span", { className: "lt-hint", children: "De 0.0 a 1.0 — quanto maior, mais seletiva a promoção automática." })
      ] }),
      /* @__PURE__ */ l.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ l.jsx("span", { children: "Limite diário de promoções automáticas" }),
        /* @__PURE__ */ l.jsx(
          "input",
          {
            type: "number",
            min: 1,
            value: s,
            onChange: (p) => i(p.target.value)
          }
        ),
        /* @__PURE__ */ l.jsx("span", { className: "lt-hint", children: "Teto de descobertas geográficas promovidas automaticamente por dia." })
      ] }),
      /* @__PURE__ */ l.jsx("div", { className: "lt-detail-actions", children: /* @__PURE__ */ l.jsx("button", { type: "button", className: "lt-btn", onClick: c, disabled: S === "geo", children: S === "geo" ? "Salvando…" : "Salvar limites de promoção geográfica" }) }),
      m && /* @__PURE__ */ l.jsx("p", { className: "lt-alert", role: "alert", children: m }),
      g && /* @__PURE__ */ l.jsx("p", { className: "lt-hint", role: "status", children: g })
    ] })
  ] }) : /* @__PURE__ */ l.jsx("p", { className: "lt-hint", children: "Carregando…" });
}
function Mm(e) {
  if (e.length === 0) return "Nenhuma fonte habilitada — ligue uma fonte acima antes de sincronizar.";
  const t = e.reduce((o, s) => o + s.companiesSynced, 0), n = e.reduce((o, s) => o + s.contactsSynced, 0), r = e.flatMap((o) => o.errors), a = `${t} empresa(s) e ${n} contato(s) sincronizados.`;
  return r.length > 0 ? `${a} Alguns erros: ${r.join("; ")}` : a;
}
function Am() {
  var j;
  const [e, t] = v.useState(null), [n, r] = v.useState(null), [a, o] = v.useState(!1), [s, i] = v.useState(null), [u, d] = v.useState(null), [m, h] = v.useState(null), [g, y] = v.useState(null);
  v.useEffect(() => {
    Yf().then(t).catch((_) => r(_ instanceof Error ? _.message : "Não consegui carregar as configurações.")), Promise.all([ad(), _h()]).then(([_, f]) => {
      d(_), h(f);
    }).catch((_) => y(_ instanceof Error ? _.message : "Não consegui carregar o portfólio."));
  }, []);
  const S = async () => {
    o(!0), i(null);
    try {
      const _ = await ch();
      i(Mm(_));
    } catch (_) {
      i(_ instanceof Error ? _.message : "Falha ao sincronizar.");
    } finally {
      o(!1);
    }
  };
  return n ? /* @__PURE__ */ l.jsx("p", { className: "lt-alert", role: "alert", children: n }) : e ? /* @__PURE__ */ l.jsxs("div", { children: [
    /* @__PURE__ */ l.jsxs("div", { className: "lt-header lt-header-row", children: [
      /* @__PURE__ */ l.jsx("h2", { children: "Configurações de Fontes" }),
      /* @__PURE__ */ l.jsx(we, { text: "Ligue as fontes de dados que o Lead.Tracker deve usar para encontrar oportunidades." })
    ] }),
    /* @__PURE__ */ l.jsx("div", { className: "lt-toolbar", children: /* @__PURE__ */ l.jsx("button", { type: "button", className: "lt-btn", onClick: S, disabled: a, "aria-busy": a, children: a ? "Sincronizando…" : "Atualizar dados" }) }),
    s && /* @__PURE__ */ l.jsx("p", { className: "lt-hint", role: "status", children: s }),
    /* @__PURE__ */ l.jsxs("div", { className: "lt-source-grid", children: [
      /* @__PURE__ */ l.jsx(Pm, {}),
      e.map((_) => /* @__PURE__ */ l.jsx(
        Dm,
        {
          source: _,
          onChange: (f) => t((c) => c.map((p) => p.id === f.id ? f : p))
        },
        _.id
      ))
    ] }),
    ((j = e.find((_) => _.id === "salesforce")) == null ? void 0 : j.enabled) && /* @__PURE__ */ l.jsx(Tm, {}),
    /* @__PURE__ */ l.jsx(bm, {}),
    /* @__PURE__ */ l.jsx(Fm, {}),
    /* @__PURE__ */ l.jsx(
      Rm,
      {
        products: u,
        services: m,
        loadError: g,
        onProductCreated: (_) => d((f) => [...f ?? [], _]),
        onServiceCreated: (_) => h((f) => [...f ?? [], _]),
        onProductDeleted: (_) => d((f) => (f ?? []).filter((c) => c.id !== _)),
        onServiceDeleted: (_) => h((f) => (f ?? []).filter((c) => c.id !== _))
      }
    ),
    /* @__PURE__ */ l.jsx(Om, { products: u ?? [], services: m ?? [] }),
    /* @__PURE__ */ l.jsx($m, {})
  ] }) : /* @__PURE__ */ l.jsx("p", { className: "lt-hint", children: "Carregando..." });
}
const Um = `
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
`;
function Bm() {
  const [e, t] = v.useState(null), [n, r] = v.useState(null), [a, o] = v.useState(rm), [s, i] = v.useState(null), [u, d] = v.useState(null), [m, h] = v.useState(() => localStorage.getItem("lt_rep_id") ?? ""), g = (c) => {
    h(c), localStorage.setItem("lt_rep_id", c);
  }, y = () => {
    td().then(t).catch((c) => r(c instanceof Error ? c.message : "Não consegui carregar as oportunidades."));
  };
  v.useEffect(y, []);
  const S = e ? om(e, a) : [], j = (c) => {
    t((p) => p && p.map((w) => w.id === c.id ? c : w));
  }, _ = () => y(), f = async (c) => {
    i(null), d(c);
    try {
      const p = lm(a);
      c === "pdf" ? await Hf(S, p) : await Qf(S);
    } catch (p) {
      i(p instanceof Error ? p.message : "Falha ao exportar.");
    } finally {
      d(null);
    }
  };
  return n ? /* @__PURE__ */ l.jsx("p", { className: "lt-alert", role: "alert", children: n }) : e ? /* @__PURE__ */ l.jsxs("div", { children: [
    /* @__PURE__ */ l.jsxs("div", { className: "lt-header", children: [
      /* @__PURE__ */ l.jsx("h2", { children: "Oportunidades" }),
      /* @__PURE__ */ l.jsxs("p", { children: [
        "Lead.Tracker · ",
        S.length,
        " de ",
        e.length,
        " oportunidades"
      ] })
    ] }),
    /* @__PURE__ */ l.jsxs("div", { className: "lt-toolbar", children: [
      /* @__PURE__ */ l.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ l.jsx("span", { children: "Seu id de representante" }),
        /* @__PURE__ */ l.jsx("input", { value: m, onChange: (c) => g(c.target.value), placeholder: "Id ou nome do representante" })
      ] }),
      /* @__PURE__ */ l.jsx("button", { type: "button", className: "lt-btn", onClick: () => f("pdf"), disabled: u !== null, "aria-busy": u === "pdf", children: u === "pdf" ? "Gerando PDF…" : "PDF" }),
      /* @__PURE__ */ l.jsx("button", { type: "button", className: "lt-btn", onClick: () => f("excel"), disabled: u !== null, "aria-busy": u === "excel", children: u === "excel" ? "Gerando Excel…" : "Excel" })
    ] }),
    s && /* @__PURE__ */ l.jsx("p", { className: "lt-alert", role: "alert", children: s }),
    /* @__PURE__ */ l.jsx(am, { rows: e, value: a, onChange: o }),
    e.length === 0 ? /* @__PURE__ */ l.jsx("p", { className: "lt-empty", role: "status", children: "Nenhuma oportunidade ainda — rode uma sincronização em Configurações." }) : /* @__PURE__ */ l.jsx(
      Cm,
      {
        rows: S,
        repId: m,
        onRowUpdated: j,
        onRenewalDateUpdated: _
      }
    )
  ] }) : /* @__PURE__ */ l.jsx("p", { className: "lt-hint", children: "Carregando oportunidades…" });
}
const $t = [
  { id: "dashboard", label: "Dashboard" },
  { id: "oportunidades", label: "Oportunidades" },
  { id: "prospeccao", label: "Prospecção" },
  { id: "configuracoes", label: "Configurações" }
];
function Vm() {
  const [e, t] = v.useState("dashboard"), n = (r, a) => {
    var i;
    let o = null;
    if (r.key === "ArrowRight" ? o = (a + 1) % $t.length : r.key === "ArrowLeft" ? o = (a - 1 + $t.length) % $t.length : r.key === "Home" ? o = 0 : r.key === "End" && (o = $t.length - 1), o === null) return;
    r.preventDefault(), t($t[o].id);
    const s = (i = r.currentTarget.parentElement) == null ? void 0 : i.children[o];
    s == null || s.focus();
  };
  return /* @__PURE__ */ l.jsxs("div", { className: "lt-root", children: [
    /* @__PURE__ */ l.jsx("style", { children: Um }),
    /* @__PURE__ */ l.jsx("div", { className: "lt-tabs", role: "tablist", "aria-label": "Navegação Lead.Tracker", children: $t.map((r, a) => /* @__PURE__ */ l.jsx(
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
        onKeyDown: (o) => n(o, a),
        children: r.label
      },
      r.id
    )) }),
    $t.map((r) => /* @__PURE__ */ l.jsx(
      "div",
      {
        role: "tabpanel",
        id: `lt-tabpanel-${r.id}`,
        "aria-labelledby": `lt-tab-${r.id}`,
        hidden: e !== r.id,
        children: e === r.id && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
          r.id === "dashboard" && /* @__PURE__ */ l.jsx(nm, {}),
          r.id === "oportunidades" && /* @__PURE__ */ l.jsx(Bm, {}),
          r.id === "prospeccao" && /* @__PURE__ */ l.jsx(im, {}),
          r.id === "configuracoes" && /* @__PURE__ */ l.jsx(Am, {})
        ] })
      },
      r.id
    ))
  ] });
}
const Hm = {
  moduleId: "lead_tracker",
  title: "Lead.Tracker",
  icon: "target",
  category: "Sales",
  vendor: "TechForge",
  route: "/modules/lead_tracker",
  description: "Opportunity Intelligence — tela de oportunidades."
};
let Fi = null;
function Qm(e) {
  Fi = Xc(e), Fi.render(/* @__PURE__ */ l.jsx(Vm, {}));
}
const qm = { render: Qm, moduleConfig: Hm };
export {
  qm as default
};
