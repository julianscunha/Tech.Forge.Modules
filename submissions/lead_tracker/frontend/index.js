// Tech.Forge Module Host contract: this bundle's `export default` is the render() entry point.
var Bi = { exports: {} }, ka = {}, Vi = { exports: {} }, V = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mr = Symbol.for("react.element"), xd = Symbol.for("react.portal"), jd = Symbol.for("react.fragment"), Sd = Symbol.for("react.strict_mode"), wd = Symbol.for("react.profiler"), _d = Symbol.for("react.provider"), Nd = Symbol.for("react.context"), kd = Symbol.for("react.forward_ref"), Cd = Symbol.for("react.suspense"), Ed = Symbol.for("react.memo"), bd = Symbol.for("react.lazy"), ms = Symbol.iterator;
function Pd(e) {
  return e === null || typeof e != "object" ? null : (e = ms && e[ms] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Hi = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, qi = Object.assign, Qi = {};
function Cn(e, t, n) {
  this.props = e, this.context = t, this.refs = Qi, this.updater = n || Hi;
}
Cn.prototype.isReactComponent = {};
Cn.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Cn.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Wi() {
}
Wi.prototype = Cn.prototype;
function xo(e, t, n) {
  this.props = e, this.context = t, this.refs = Qi, this.updater = n || Hi;
}
var jo = xo.prototype = new Wi();
jo.constructor = xo;
qi(jo, Cn.prototype);
jo.isPureReactComponent = !0;
var gs = Array.isArray, Ki = Object.prototype.hasOwnProperty, So = { current: null }, Gi = { key: !0, ref: !0, __self: !0, __source: !0 };
function Yi(e, t, n) {
  var r, a = {}, o = null, s = null;
  if (t != null) for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (o = "" + t.key), t) Ki.call(t, r) && !Gi.hasOwnProperty(r) && (a[r] = t[r]);
  var i = arguments.length - 2;
  if (i === 1) a.children = n;
  else if (1 < i) {
    for (var u = Array(i), d = 0; d < i; d++) u[d] = arguments[d + 2];
    a.children = u;
  }
  if (e && e.defaultProps) for (r in i = e.defaultProps, i) a[r] === void 0 && (a[r] = i[r]);
  return { $$typeof: mr, type: e, key: o, ref: s, props: a, _owner: So.current };
}
function Td(e, t) {
  return { $$typeof: mr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function wo(e) {
  return typeof e == "object" && e !== null && e.$$typeof === mr;
}
function Rd(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var vs = /\/+/g;
function Va(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Rd("" + e.key) : t.toString(36);
}
function Br(e, t, n, r, a) {
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
        case xd:
          s = !0;
      }
  }
  if (s) return s = e, a = a(s), e = r === "" ? "." + Va(s, 0) : r, gs(a) ? (n = "", e != null && (n = e.replace(vs, "$&/") + "/"), Br(a, t, n, "", function(d) {
    return d;
  })) : a != null && (wo(a) && (a = Td(a, n + (!a.key || s && s.key === a.key ? "" : ("" + a.key).replace(vs, "$&/") + "/") + e)), t.push(a)), 1;
  if (s = 0, r = r === "" ? "." : r + ":", gs(e)) for (var i = 0; i < e.length; i++) {
    o = e[i];
    var u = r + Va(o, i);
    s += Br(o, t, n, u, a);
  }
  else if (u = Pd(e), typeof u == "function") for (e = u.call(e), i = 0; !(o = e.next()).done; ) o = o.value, u = r + Va(o, i++), s += Br(o, t, n, u, a);
  else if (o === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return s;
}
function wr(e, t, n) {
  if (e == null) return e;
  var r = [], a = 0;
  return Br(e, r, "", "", function(o) {
    return t.call(n, o, a++);
  }), r;
}
function zd(e) {
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
var je = { current: null }, Vr = { transition: null }, $d = { ReactCurrentDispatcher: je, ReactCurrentBatchConfig: Vr, ReactCurrentOwner: So };
function Xi() {
  throw Error("act(...) is not supported in production builds of React.");
}
V.Children = { map: wr, forEach: function(e, t, n) {
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
V.Component = Cn;
V.Fragment = jd;
V.Profiler = wd;
V.PureComponent = xo;
V.StrictMode = Sd;
V.Suspense = Cd;
V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $d;
V.act = Xi;
V.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = qi({}, e.props), a = e.key, o = e.ref, s = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (o = t.ref, s = So.current), t.key !== void 0 && (a = "" + t.key), e.type && e.type.defaultProps) var i = e.type.defaultProps;
    for (u in t) Ki.call(t, u) && !Gi.hasOwnProperty(u) && (r[u] = t[u] === void 0 && i !== void 0 ? i[u] : t[u]);
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
V.createContext = function(e) {
  return e = { $$typeof: Nd, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: _d, _context: e }, e.Consumer = e;
};
V.createElement = Yi;
V.createFactory = function(e) {
  var t = Yi.bind(null, e);
  return t.type = e, t;
};
V.createRef = function() {
  return { current: null };
};
V.forwardRef = function(e) {
  return { $$typeof: kd, render: e };
};
V.isValidElement = wo;
V.lazy = function(e) {
  return { $$typeof: bd, _payload: { _status: -1, _result: e }, _init: zd };
};
V.memo = function(e, t) {
  return { $$typeof: Ed, type: e, compare: t === void 0 ? null : t };
};
V.startTransition = function(e) {
  var t = Vr.transition;
  Vr.transition = {};
  try {
    e();
  } finally {
    Vr.transition = t;
  }
};
V.unstable_act = Xi;
V.useCallback = function(e, t) {
  return je.current.useCallback(e, t);
};
V.useContext = function(e) {
  return je.current.useContext(e);
};
V.useDebugValue = function() {
};
V.useDeferredValue = function(e) {
  return je.current.useDeferredValue(e);
};
V.useEffect = function(e, t) {
  return je.current.useEffect(e, t);
};
V.useId = function() {
  return je.current.useId();
};
V.useImperativeHandle = function(e, t, n) {
  return je.current.useImperativeHandle(e, t, n);
};
V.useInsertionEffect = function(e, t) {
  return je.current.useInsertionEffect(e, t);
};
V.useLayoutEffect = function(e, t) {
  return je.current.useLayoutEffect(e, t);
};
V.useMemo = function(e, t) {
  return je.current.useMemo(e, t);
};
V.useReducer = function(e, t, n) {
  return je.current.useReducer(e, t, n);
};
V.useRef = function(e) {
  return je.current.useRef(e);
};
V.useState = function(e) {
  return je.current.useState(e);
};
V.useSyncExternalStore = function(e, t, n) {
  return je.current.useSyncExternalStore(e, t, n);
};
V.useTransition = function() {
  return je.current.useTransition();
};
V.version = "18.3.1";
Vi.exports = V;
var v = Vi.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ld = v, Od = Symbol.for("react.element"), Id = Symbol.for("react.fragment"), Dd = Object.prototype.hasOwnProperty, Fd = Ld.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Md = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ji(e, t, n) {
  var r, a = {}, o = null, s = null;
  n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (s = t.ref);
  for (r in t) Dd.call(t, r) && !Md.hasOwnProperty(r) && (a[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) a[r] === void 0 && (a[r] = t[r]);
  return { $$typeof: Od, type: e, key: o, ref: s, props: a, _owner: Fd.current };
}
ka.Fragment = Id;
ka.jsx = Ji;
ka.jsxs = Ji;
Bi.exports = ka;
var l = Bi.exports, Zi = { exports: {} }, ze = {}, eu = { exports: {} }, tu = {};
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
  function t(T, I) {
    var E = T.length;
    T.push(I);
    e: for (; 0 < E; ) {
      var U = E - 1 >>> 1, k = T[U];
      if (0 < a(k, I)) T[U] = I, T[E] = k, E = U;
      else break e;
    }
  }
  function n(T) {
    return T.length === 0 ? null : T[0];
  }
  function r(T) {
    if (T.length === 0) return null;
    var I = T[0], E = T.pop();
    if (E !== I) {
      T[0] = E;
      e: for (var U = 0, k = T.length, fe = k >>> 1; U < fe; ) {
        var Ee = 2 * (U + 1) - 1, Pn = T[Ee], et = Ee + 1, Kt = T[et];
        if (0 > a(Pn, E)) et < k && 0 > a(Kt, Pn) ? (T[U] = Kt, T[et] = E, U = et) : (T[U] = Pn, T[Ee] = E, U = Ee);
        else if (et < k && 0 > a(Kt, E)) T[U] = Kt, T[et] = E, U = et;
        else break e;
      }
    }
    return I;
  }
  function a(T, I) {
    var E = T.sortIndex - I.sortIndex;
    return E !== 0 ? E : T.id - I.id;
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
  var u = [], d = [], p = 1, f = null, g = 3, y = !1, S = !1, j = !1, _ = typeof setTimeout == "function" ? setTimeout : null, m = typeof clearTimeout == "function" ? clearTimeout : null, c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(T) {
    for (var I = n(d); I !== null; ) {
      if (I.callback === null) r(d);
      else if (I.startTime <= T) r(d), I.sortIndex = I.expirationTime, t(u, I);
      else break;
      I = n(d);
    }
  }
  function w(T) {
    if (j = !1, h(T), !S) if (n(u) !== null) S = !0, A(x);
    else {
      var I = n(d);
      I !== null && G(w, I.startTime - T);
    }
  }
  function x(T, I) {
    S = !1, j && (j = !1, m(N), N = -1), y = !0;
    var E = g;
    try {
      for (h(I), f = n(u); f !== null && (!(f.expirationTime > I) || T && !B()); ) {
        var U = f.callback;
        if (typeof U == "function") {
          f.callback = null, g = f.priorityLevel;
          var k = U(f.expirationTime <= I);
          I = e.unstable_now(), typeof k == "function" ? f.callback = k : f === n(u) && r(u), h(I);
        } else r(u);
        f = n(u);
      }
      if (f !== null) var fe = !0;
      else {
        var Ee = n(d);
        Ee !== null && G(w, Ee.startTime - I), fe = !1;
      }
      return fe;
    } finally {
      f = null, g = E, y = !1;
    }
  }
  var P = !1, R = null, N = -1, z = 5, b = -1;
  function B() {
    return !(e.unstable_now() - b < z);
  }
  function K() {
    if (R !== null) {
      var T = e.unstable_now();
      b = T;
      var I = !0;
      try {
        I = R(!0, T);
      } finally {
        I ? L() : (P = !1, R = null);
      }
    } else P = !1;
  }
  var L;
  if (typeof c == "function") L = function() {
    c(K);
  };
  else if (typeof MessageChannel < "u") {
    var Z = new MessageChannel(), Q = Z.port2;
    Z.port1.onmessage = K, L = function() {
      Q.postMessage(null);
    };
  } else L = function() {
    _(K, 0);
  };
  function A(T) {
    R = T, P || (P = !0, L());
  }
  function G(T, I) {
    N = _(function() {
      T(e.unstable_now());
    }, I);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(T) {
    T.callback = null;
  }, e.unstable_continueExecution = function() {
    S || y || (S = !0, A(x));
  }, e.unstable_forceFrameRate = function(T) {
    0 > T || 125 < T ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : z = 0 < T ? Math.floor(1e3 / T) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return g;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(u);
  }, e.unstable_next = function(T) {
    switch (g) {
      case 1:
      case 2:
      case 3:
        var I = 3;
        break;
      default:
        I = g;
    }
    var E = g;
    g = I;
    try {
      return T();
    } finally {
      g = E;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(T, I) {
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
    var E = g;
    g = T;
    try {
      return I();
    } finally {
      g = E;
    }
  }, e.unstable_scheduleCallback = function(T, I, E) {
    var U = e.unstable_now();
    switch (typeof E == "object" && E !== null ? (E = E.delay, E = typeof E == "number" && 0 < E ? U + E : U) : E = U, T) {
      case 1:
        var k = -1;
        break;
      case 2:
        k = 250;
        break;
      case 5:
        k = 1073741823;
        break;
      case 4:
        k = 1e4;
        break;
      default:
        k = 5e3;
    }
    return k = E + k, T = { id: p++, callback: I, priorityLevel: T, startTime: E, expirationTime: k, sortIndex: -1 }, E > U ? (T.sortIndex = E, t(d, T), n(u) === null && T === n(d) && (j ? (m(N), N = -1) : j = !0, G(w, E - U))) : (T.sortIndex = k, t(u, T), S || y || (S = !0, A(x))), T;
  }, e.unstable_shouldYield = B, e.unstable_wrapCallback = function(T) {
    var I = g;
    return function() {
      var E = g;
      g = I;
      try {
        return T.apply(this, arguments);
      } finally {
        g = E;
      }
    };
  };
})(tu);
eu.exports = tu;
var Ad = eu.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ud = v, Re = Ad;
function C(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var nu = /* @__PURE__ */ new Set(), Jn = {};
function Qt(e, t) {
  xn(e, t), xn(e + "Capture", t);
}
function xn(e, t) {
  for (Jn[e] = t, e = 0; e < t.length; e++) nu.add(t[e]);
}
var it = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Nl = Object.prototype.hasOwnProperty, Bd = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, ys = {}, xs = {};
function Vd(e) {
  return Nl.call(xs, e) ? !0 : Nl.call(ys, e) ? !1 : Bd.test(e) ? xs[e] = !0 : (ys[e] = !0, !1);
}
function Hd(e, t, n, r) {
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
function qd(e, t, n, r) {
  if (t === null || typeof t > "u" || Hd(e, t, n, r)) return !0;
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
function Se(e, t, n, r, a, o, s) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = a, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = s;
}
var pe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  pe[e] = new Se(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  pe[t] = new Se(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  pe[e] = new Se(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  pe[e] = new Se(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  pe[e] = new Se(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  pe[e] = new Se(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  pe[e] = new Se(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  pe[e] = new Se(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  pe[e] = new Se(e, 5, !1, e.toLowerCase(), null, !1, !1);
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
  pe[t] = new Se(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(_o, No);
  pe[t] = new Se(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(_o, No);
  pe[t] = new Se(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  pe[e] = new Se(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
pe.xlinkHref = new Se("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  pe[e] = new Se(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ko(e, t, n, r) {
  var a = pe.hasOwnProperty(t) ? pe[t] : null;
  (a !== null ? a.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (qd(t, n, a, r) && (n = null), r || a === null ? Vd(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : a.mustUseProperty ? e[a.propertyName] = n === null ? a.type === 3 ? !1 : "" : n : (t = a.attributeName, r = a.attributeNamespace, n === null ? e.removeAttribute(t) : (a = a.type, n = a === 3 || a === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var pt = Ud.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, _r = Symbol.for("react.element"), Jt = Symbol.for("react.portal"), Zt = Symbol.for("react.fragment"), Co = Symbol.for("react.strict_mode"), kl = Symbol.for("react.profiler"), ru = Symbol.for("react.provider"), au = Symbol.for("react.context"), Eo = Symbol.for("react.forward_ref"), Cl = Symbol.for("react.suspense"), El = Symbol.for("react.suspense_list"), bo = Symbol.for("react.memo"), ht = Symbol.for("react.lazy"), lu = Symbol.for("react.offscreen"), js = Symbol.iterator;
function Tn(e) {
  return e === null || typeof e != "object" ? null : (e = js && e[js] || e["@@iterator"], typeof e == "function" ? e : null);
}
var ne = Object.assign, Ha;
function Fn(e) {
  if (Ha === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Ha = t && t[1] || "";
  }
  return `
` + Ha + e;
}
var qa = !1;
function Qa(e, t) {
  if (!e || qa) return "";
  qa = !0;
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
    qa = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Fn(e) : "";
}
function Qd(e) {
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
    case au:
      return (e.displayName || "Context") + ".Consumer";
    case ru:
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
function Wd(e) {
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
function ou(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Kd(e) {
  var t = ou(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
  e._valueTracker || (e._valueTracker = Kd(e));
}
function su(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = ou(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function ea(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Pl(e, t) {
  var n = t.checked;
  return ne({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Ss(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = bt(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function iu(e, t) {
  t = t.checked, t != null && ko(e, "checked", t, !1);
}
function Tl(e, t) {
  iu(e, t);
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
  (t !== "number" || ea(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
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
  if (t.dangerouslySetInnerHTML != null) throw Error(C(91));
  return ne({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function _s(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(C(92));
      if (Mn(n)) {
        if (1 < n.length) throw Error(C(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: bt(n) };
}
function uu(e, t) {
  var n = bt(t.value), r = bt(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Ns(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function cu(e) {
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
  return e == null || e === "http://www.w3.org/1999/xhtml" ? cu(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var kr, du = function(e) {
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
}, Gd = ["Webkit", "ms", "Moz", "O"];
Object.keys(Vn).forEach(function(e) {
  Gd.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Vn[t] = Vn[e];
  });
});
function pu(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Vn.hasOwnProperty(e) && Vn[e] ? ("" + t).trim() : t + "px";
}
function fu(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, a = pu(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, a) : e[n] = a;
  }
}
var Yd = ne({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Ll(e, t) {
  if (t) {
    if (Yd[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(C(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(C(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(C(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(C(62));
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
    if (typeof Dl != "function") throw Error(C(280));
    var t = e.stateNode;
    t && (t = Ta(t), Dl(e.stateNode, e.type, t));
  }
}
function hu(e) {
  fn ? hn ? hn.push(e) : hn = [e] : fn = e;
}
function mu() {
  if (fn) {
    var e = fn, t = hn;
    if (hn = fn = null, ks(e), t) for (e = 0; e < t.length; e++) ks(t[e]);
  }
}
function gu(e, t) {
  return e(t);
}
function vu() {
}
var Wa = !1;
function yu(e, t, n) {
  if (Wa) return e(t, n);
  Wa = !0;
  try {
    return gu(e, t, n);
  } finally {
    Wa = !1, (fn !== null || hn !== null) && (vu(), mu());
  }
}
function er(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Ta(n);
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
  if (n && typeof n != "function") throw Error(C(231, t, typeof n));
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
function Xd(e, t, n, r, a, o, s, i, u) {
  var d = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, d);
  } catch (p) {
    this.onError(p);
  }
}
var Hn = !1, ta = null, na = !1, Ml = null, Jd = { onError: function(e) {
  Hn = !0, ta = e;
} };
function Zd(e, t, n, r, a, o, s, i, u) {
  Hn = !1, ta = null, Xd.apply(Jd, arguments);
}
function ep(e, t, n, r, a, o, s, i, u) {
  if (Zd.apply(this, arguments), Hn) {
    if (Hn) {
      var d = ta;
      Hn = !1, ta = null;
    } else throw Error(C(198));
    na || (na = !0, Ml = d);
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
function xu(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function Cs(e) {
  if (Wt(e) !== e) throw Error(C(188));
}
function tp(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Wt(e), t === null) throw Error(C(188));
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
      throw Error(C(188));
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
        if (!s) throw Error(C(189));
      }
    }
    if (n.alternate !== r) throw Error(C(190));
  }
  if (n.tag !== 3) throw Error(C(188));
  return n.stateNode.current === n ? e : t;
}
function ju(e) {
  return e = tp(e), e !== null ? Su(e) : null;
}
function Su(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Su(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var wu = Re.unstable_scheduleCallback, Es = Re.unstable_cancelCallback, np = Re.unstable_shouldYield, rp = Re.unstable_requestPaint, ae = Re.unstable_now, ap = Re.unstable_getCurrentPriorityLevel, To = Re.unstable_ImmediatePriority, _u = Re.unstable_UserBlockingPriority, ra = Re.unstable_NormalPriority, lp = Re.unstable_LowPriority, Nu = Re.unstable_IdlePriority, Ca = null, Je = null;
function op(e) {
  if (Je && typeof Je.onCommitFiberRoot == "function") try {
    Je.onCommitFiberRoot(Ca, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var He = Math.clz32 ? Math.clz32 : up, sp = Math.log, ip = Math.LN2;
function up(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (sp(e) / ip | 0) | 0;
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
function aa(e, t) {
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
function cp(e, t) {
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
function dp(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, a = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var s = 31 - He(o), i = 1 << s, u = a[s];
    u === -1 ? (!(i & n) || i & r) && (a[s] = cp(i, t)) : u <= t && (e.expiredLanes |= i), o &= ~i;
  }
}
function Al(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function ku() {
  var e = Cr;
  return Cr <<= 1, !(Cr & 4194240) && (Cr = 64), e;
}
function Ka(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function gr(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - He(t), e[t] = n;
}
function pp(e, t) {
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
var q = 0;
function Cu(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Eu, zo, bu, Pu, Tu, Ul = !1, br = [], jt = null, St = null, wt = null, tr = /* @__PURE__ */ new Map(), nr = /* @__PURE__ */ new Map(), gt = [], fp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
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
function hp(e, t, n, r, a) {
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
function Ru(e) {
  var t = It(e.target);
  if (t !== null) {
    var n = Wt(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = xu(n), t !== null) {
          e.blockedOn = t, Tu(e.priority, function() {
            bu(n);
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
  Hr(e) && n.delete(t);
}
function mp() {
  Ul = !1, jt !== null && Hr(jt) && (jt = null), St !== null && Hr(St) && (St = null), wt !== null && Hr(wt) && (wt = null), tr.forEach(Ps), nr.forEach(Ps);
}
function $n(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Ul || (Ul = !0, Re.unstable_scheduleCallback(Re.unstable_NormalPriority, mp)));
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
  for (; 0 < gt.length && (n = gt[0], n.blockedOn === null); ) Ru(n), n.blockedOn === null && gt.shift();
}
var mn = pt.ReactCurrentBatchConfig, la = !0;
function gp(e, t, n, r) {
  var a = q, o = mn.transition;
  mn.transition = null;
  try {
    q = 1, $o(e, t, n, r);
  } finally {
    q = a, mn.transition = o;
  }
}
function vp(e, t, n, r) {
  var a = q, o = mn.transition;
  mn.transition = null;
  try {
    q = 4, $o(e, t, n, r);
  } finally {
    q = a, mn.transition = o;
  }
}
function $o(e, t, n, r) {
  if (la) {
    var a = Bl(e, t, n, r);
    if (a === null) al(e, t, r, oa, n), bs(e, r);
    else if (hp(a, e, t, n, r)) r.stopPropagation();
    else if (bs(e, r), t & 4 && -1 < fp.indexOf(e)) {
      for (; a !== null; ) {
        var o = yr(a);
        if (o !== null && Eu(o), o = Bl(e, t, n, r), o === null && al(e, t, r, oa, n), o === a) break;
        a = o;
      }
      a !== null && r.stopPropagation();
    } else al(e, t, r, null, n);
  }
}
var oa = null;
function Bl(e, t, n, r) {
  if (oa = null, e = Po(r), e = It(e), e !== null) if (t = Wt(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = xu(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return oa = e, null;
}
function zu(e) {
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
      switch (ap()) {
        case To:
          return 1;
        case _u:
          return 4;
        case ra:
        case lp:
          return 16;
        case Nu:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var yt = null, Lo = null, qr = null;
function $u() {
  if (qr) return qr;
  var e, t = Lo, n = t.length, r, a = "value" in yt ? yt.value : yt.textContent, o = a.length;
  for (e = 0; e < n && t[e] === a[e]; e++) ;
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === a[o - r]; r++) ;
  return qr = a.slice(e, 1 < r ? 1 - r : void 0);
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
  return ne(t.prototype, { preventDefault: function() {
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
}, defaultPrevented: 0, isTrusted: 0 }, Oo = $e(En), vr = ne({}, En, { view: 0, detail: 0 }), yp = $e(vr), Ga, Ya, Ln, Ea = ne({}, vr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Io, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Ln && (Ln && e.type === "mousemove" ? (Ga = e.screenX - Ln.screenX, Ya = e.screenY - Ln.screenY) : Ya = Ga = 0, Ln = e), Ga);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Ya;
} }), Rs = $e(Ea), xp = ne({}, Ea, { dataTransfer: 0 }), jp = $e(xp), Sp = ne({}, vr, { relatedTarget: 0 }), Xa = $e(Sp), wp = ne({}, En, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), _p = $e(wp), Np = ne({}, En, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), kp = $e(Np), Cp = ne({}, En, { data: 0 }), zs = $e(Cp), Ep = {
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
}, bp = {
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
}, Pp = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Tp(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Pp[e]) ? !!t[e] : !1;
}
function Io() {
  return Tp;
}
var Rp = ne({}, vr, { key: function(e) {
  if (e.key) {
    var t = Ep[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Qr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? bp[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Io, charCode: function(e) {
  return e.type === "keypress" ? Qr(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Qr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), zp = $e(Rp), $p = ne({}, Ea, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), $s = $e($p), Lp = ne({}, vr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Io }), Op = $e(Lp), Ip = ne({}, En, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Dp = $e(Ip), Fp = ne({}, Ea, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Mp = $e(Fp), Ap = [9, 13, 27, 32], Do = it && "CompositionEvent" in window, qn = null;
it && "documentMode" in document && (qn = document.documentMode);
var Up = it && "TextEvent" in window && !qn, Lu = it && (!Do || qn && 8 < qn && 11 >= qn), Ls = " ", Os = !1;
function Ou(e, t) {
  switch (e) {
    case "keyup":
      return Ap.indexOf(t.keyCode) !== -1;
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
function Iu(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var en = !1;
function Bp(e, t) {
  switch (e) {
    case "compositionend":
      return Iu(t);
    case "keypress":
      return t.which !== 32 ? null : (Os = !0, Ls);
    case "textInput":
      return e = t.data, e === Ls && Os ? null : e;
    default:
      return null;
  }
}
function Vp(e, t) {
  if (en) return e === "compositionend" || !Do && Ou(e, t) ? (e = $u(), qr = Lo = yt = null, en = !1, e) : null;
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
      return Lu && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Hp = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Is(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Hp[e.type] : t === "textarea";
}
function Du(e, t, n, r) {
  hu(r), t = sa(t, "onChange"), 0 < t.length && (n = new Oo("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Qn = null, ar = null;
function qp(e) {
  Ku(e, 0);
}
function ba(e) {
  var t = rn(e);
  if (su(t)) return e;
}
function Qp(e, t) {
  if (e === "change") return t;
}
var Fu = !1;
if (it) {
  var Ja;
  if (it) {
    var Za = "oninput" in document;
    if (!Za) {
      var Ds = document.createElement("div");
      Ds.setAttribute("oninput", "return;"), Za = typeof Ds.oninput == "function";
    }
    Ja = Za;
  } else Ja = !1;
  Fu = Ja && (!document.documentMode || 9 < document.documentMode);
}
function Fs() {
  Qn && (Qn.detachEvent("onpropertychange", Mu), ar = Qn = null);
}
function Mu(e) {
  if (e.propertyName === "value" && ba(ar)) {
    var t = [];
    Du(t, ar, e, Po(e)), yu(qp, t);
  }
}
function Wp(e, t, n) {
  e === "focusin" ? (Fs(), Qn = t, ar = n, Qn.attachEvent("onpropertychange", Mu)) : e === "focusout" && Fs();
}
function Kp(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return ba(ar);
}
function Gp(e, t) {
  if (e === "click") return ba(t);
}
function Yp(e, t) {
  if (e === "input" || e === "change") return ba(t);
}
function Xp(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Qe = typeof Object.is == "function" ? Object.is : Xp;
function lr(e, t) {
  if (Qe(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var a = n[r];
    if (!Nl.call(t, a) || !Qe(e[a], t[a])) return !1;
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
function Au(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Au(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Uu() {
  for (var e = window, t = ea(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = ea(e.document);
  }
  return t;
}
function Fo(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Jp(e) {
  var t = Uu(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Au(n.ownerDocument.documentElement, n)) {
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
var Zp = it && "documentMode" in document && 11 >= document.documentMode, tn = null, Vl = null, Wn = null, Hl = !1;
function Us(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Hl || tn == null || tn !== ea(r) || (r = tn, "selectionStart" in r && Fo(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Wn && lr(Wn, r) || (Wn = r, r = sa(Vl, "onSelect"), 0 < r.length && (t = new Oo("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = tn)));
}
function Tr(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var nn = { animationend: Tr("Animation", "AnimationEnd"), animationiteration: Tr("Animation", "AnimationIteration"), animationstart: Tr("Animation", "AnimationStart"), transitionend: Tr("Transition", "TransitionEnd") }, el = {}, Bu = {};
it && (Bu = document.createElement("div").style, "AnimationEvent" in window || (delete nn.animationend.animation, delete nn.animationiteration.animation, delete nn.animationstart.animation), "TransitionEvent" in window || delete nn.transitionend.transition);
function Pa(e) {
  if (el[e]) return el[e];
  if (!nn[e]) return e;
  var t = nn[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in Bu) return el[e] = t[n];
  return e;
}
var Vu = Pa("animationend"), Hu = Pa("animationiteration"), qu = Pa("animationstart"), Qu = Pa("transitionend"), Wu = /* @__PURE__ */ new Map(), Bs = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Tt(e, t) {
  Wu.set(e, t), Qt(t, [e]);
}
for (var tl = 0; tl < Bs.length; tl++) {
  var nl = Bs[tl], ef = nl.toLowerCase(), tf = nl[0].toUpperCase() + nl.slice(1);
  Tt(ef, "on" + tf);
}
Tt(Vu, "onAnimationEnd");
Tt(Hu, "onAnimationIteration");
Tt(qu, "onAnimationStart");
Tt("dblclick", "onDoubleClick");
Tt("focusin", "onFocus");
Tt("focusout", "onBlur");
Tt(Qu, "onTransitionEnd");
xn("onMouseEnter", ["mouseout", "mouseover"]);
xn("onMouseLeave", ["mouseout", "mouseover"]);
xn("onPointerEnter", ["pointerout", "pointerover"]);
xn("onPointerLeave", ["pointerout", "pointerover"]);
Qt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Qt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Qt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Qt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Qt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Qt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Un = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), nf = new Set("cancel close invalid load scroll toggle".split(" ").concat(Un));
function Vs(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, ep(r, t, void 0, e), e.currentTarget = null;
}
function Ku(e, t) {
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
  if (na) throw e = Ml, na = !1, Ml = null, e;
}
function Y(e, t) {
  var n = t[Gl];
  n === void 0 && (n = t[Gl] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (Gu(t, e, 2, !1), n.add(r));
}
function rl(e, t, n) {
  var r = 0;
  t && (r |= 4), Gu(n, e, r, t);
}
var Rr = "_reactListening" + Math.random().toString(36).slice(2);
function or(e) {
  if (!e[Rr]) {
    e[Rr] = !0, nu.forEach(function(n) {
      n !== "selectionchange" && (nf.has(n) || rl(n, !1, e), rl(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Rr] || (t[Rr] = !0, rl("selectionchange", !1, t));
  }
}
function Gu(e, t, n, r) {
  switch (zu(t)) {
    case 1:
      var a = gp;
      break;
    case 4:
      a = vp;
      break;
    default:
      a = $o;
  }
  n = a.bind(null, t, n, e), a = void 0, !Fl || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (a = !0), r ? a !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: a }) : e.addEventListener(t, n, !0) : a !== void 0 ? e.addEventListener(t, n, { passive: a }) : e.addEventListener(t, n, !1);
}
function al(e, t, n, r, a) {
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
  yu(function() {
    var d = o, p = Po(n), f = [];
    e: {
      var g = Wu.get(e);
      if (g !== void 0) {
        var y = Oo, S = e;
        switch (e) {
          case "keypress":
            if (Qr(n) === 0) break e;
          case "keydown":
          case "keyup":
            y = zp;
            break;
          case "focusin":
            S = "focus", y = Xa;
            break;
          case "focusout":
            S = "blur", y = Xa;
            break;
          case "beforeblur":
          case "afterblur":
            y = Xa;
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
            y = jp;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = Op;
            break;
          case Vu:
          case Hu:
          case qu:
            y = _p;
            break;
          case Qu:
            y = Dp;
            break;
          case "scroll":
            y = yp;
            break;
          case "wheel":
            y = Mp;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = kp;
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
        var j = (t & 4) !== 0, _ = !j && e === "scroll", m = j ? g !== null ? g + "Capture" : null : g;
        j = [];
        for (var c = d, h; c !== null; ) {
          h = c;
          var w = h.stateNode;
          if (h.tag === 5 && w !== null && (h = w, m !== null && (w = er(c, m), w != null && j.push(sr(c, w, h)))), _) break;
          c = c.return;
        }
        0 < j.length && (g = new y(g, S, null, n, p), f.push({ event: g, listeners: j }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (g = e === "mouseover" || e === "pointerover", y = e === "mouseout" || e === "pointerout", g && n !== Il && (S = n.relatedTarget || n.fromElement) && (It(S) || S[ut])) break e;
        if ((y || g) && (g = p.window === p ? p : (g = p.ownerDocument) ? g.defaultView || g.parentWindow : window, y ? (S = n.relatedTarget || n.toElement, y = d, S = S ? It(S) : null, S !== null && (_ = Wt(S), S !== _ || S.tag !== 5 && S.tag !== 6) && (S = null)) : (y = null, S = d), y !== S)) {
          if (j = Rs, w = "onMouseLeave", m = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (j = $s, w = "onPointerLeave", m = "onPointerEnter", c = "pointer"), _ = y == null ? g : rn(y), h = S == null ? g : rn(S), g = new j(w, c + "leave", y, n, p), g.target = _, g.relatedTarget = h, w = null, It(p) === d && (j = new j(m, c + "enter", S, n, p), j.target = h, j.relatedTarget = _, w = j), _ = w, y && S) t: {
            for (j = y, m = S, c = 0, h = j; h; h = Gt(h)) c++;
            for (h = 0, w = m; w; w = Gt(w)) h++;
            for (; 0 < c - h; ) j = Gt(j), c--;
            for (; 0 < h - c; ) m = Gt(m), h--;
            for (; c--; ) {
              if (j === m || m !== null && j === m.alternate) break t;
              j = Gt(j), m = Gt(m);
            }
            j = null;
          }
          else j = null;
          y !== null && Hs(f, g, y, j, !1), S !== null && _ !== null && Hs(f, _, S, j, !0);
        }
      }
      e: {
        if (g = d ? rn(d) : window, y = g.nodeName && g.nodeName.toLowerCase(), y === "select" || y === "input" && g.type === "file") var x = Qp;
        else if (Is(g)) if (Fu) x = Yp;
        else {
          x = Kp;
          var P = Wp;
        }
        else (y = g.nodeName) && y.toLowerCase() === "input" && (g.type === "checkbox" || g.type === "radio") && (x = Gp);
        if (x && (x = x(e, d))) {
          Du(f, x, n, p);
          break e;
        }
        P && P(e, g, d), e === "focusout" && (P = g._wrapperState) && P.controlled && g.type === "number" && Rl(g, "number", g.value);
      }
      switch (P = d ? rn(d) : window, e) {
        case "focusin":
          (Is(P) || P.contentEditable === "true") && (tn = P, Vl = d, Wn = null);
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
          Hl = !1, Us(f, n, p);
          break;
        case "selectionchange":
          if (Zp) break;
        case "keydown":
        case "keyup":
          Us(f, n, p);
      }
      var R;
      if (Do) e: {
        switch (e) {
          case "compositionstart":
            var N = "onCompositionStart";
            break e;
          case "compositionend":
            N = "onCompositionEnd";
            break e;
          case "compositionupdate":
            N = "onCompositionUpdate";
            break e;
        }
        N = void 0;
      }
      else en ? Ou(e, n) && (N = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (N = "onCompositionStart");
      N && (Lu && n.locale !== "ko" && (en || N !== "onCompositionStart" ? N === "onCompositionEnd" && en && (R = $u()) : (yt = p, Lo = "value" in yt ? yt.value : yt.textContent, en = !0)), P = sa(d, N), 0 < P.length && (N = new zs(N, e, null, n, p), f.push({ event: N, listeners: P }), R ? N.data = R : (R = Iu(n), R !== null && (N.data = R)))), (R = Up ? Bp(e, n) : Vp(e, n)) && (d = sa(d, "onBeforeInput"), 0 < d.length && (p = new zs("onBeforeInput", "beforeinput", null, n, p), f.push({ event: p, listeners: d }), p.data = R));
    }
    Ku(f, t);
  });
}
function sr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function sa(e, t) {
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
var rf = /\r\n?/g, af = /\u0000|\uFFFD/g;
function qs(e) {
  return (typeof e == "string" ? e : "" + e).replace(rf, `
`).replace(af, "");
}
function zr(e, t, n) {
  if (t = qs(t), qs(e) !== t && n) throw Error(C(425));
}
function ia() {
}
var ql = null, Ql = null;
function Wl(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Kl = typeof setTimeout == "function" ? setTimeout : void 0, lf = typeof clearTimeout == "function" ? clearTimeout : void 0, Qs = typeof Promise == "function" ? Promise : void 0, of = typeof queueMicrotask == "function" ? queueMicrotask : typeof Qs < "u" ? function(e) {
  return Qs.resolve(null).then(e).catch(sf);
} : Kl;
function sf(e) {
  setTimeout(function() {
    throw e;
  });
}
function ll(e, t) {
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
var bn = Math.random().toString(36).slice(2), Xe = "__reactFiber$" + bn, ir = "__reactProps$" + bn, ut = "__reactContainer$" + bn, Gl = "__reactEvents$" + bn, uf = "__reactListeners$" + bn, cf = "__reactHandles$" + bn;
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
  throw Error(C(33));
}
function Ta(e) {
  return e[ir] || null;
}
var Yl = [], an = -1;
function Rt(e) {
  return { current: e };
}
function X(e) {
  0 > an || (e.current = Yl[an], Yl[an] = null, an--);
}
function W(e, t) {
  an++, Yl[an] = e.current, e.current = t;
}
var Pt = {}, ve = Rt(Pt), Ne = Rt(!1), Ut = Pt;
function jn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Pt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var a = {}, o;
  for (o in n) a[o] = t[o];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = a), a;
}
function ke(e) {
  return e = e.childContextTypes, e != null;
}
function ua() {
  X(Ne), X(ve);
}
function Ks(e, t, n) {
  if (ve.current !== Pt) throw Error(C(168));
  W(ve, t), W(Ne, n);
}
function Yu(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var a in r) if (!(a in t)) throw Error(C(108, Wd(e) || "Unknown", a));
  return ne({}, n, r);
}
function ca(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Pt, Ut = ve.current, W(ve, e), W(Ne, Ne.current), !0;
}
function Gs(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(C(169));
  n ? (e = Yu(e, t, Ut), r.__reactInternalMemoizedMergedChildContext = e, X(Ne), X(ve), W(ve, e)) : X(Ne), W(Ne, n);
}
var at = null, Ra = !1, ol = !1;
function Xu(e) {
  at === null ? at = [e] : at.push(e);
}
function df(e) {
  Ra = !0, Xu(e);
}
function zt() {
  if (!ol && at !== null) {
    ol = !0;
    var e = 0, t = q;
    try {
      var n = at;
      for (q = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      at = null, Ra = !1;
    } catch (a) {
      throw at !== null && (at = at.slice(e + 1)), wu(To, zt), a;
    } finally {
      q = t, ol = !1;
    }
  }
  return null;
}
var ln = [], on = 0, da = null, pa = 0, Le = [], Oe = 0, Bt = null, lt = 1, ot = "";
function Lt(e, t) {
  ln[on++] = pa, ln[on++] = da, da = e, pa = t;
}
function Ju(e, t, n) {
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
  e.return !== null && (Lt(e, 1), Ju(e, 1, 0));
}
function Ao(e) {
  for (; e === da; ) da = ln[--on], ln[on] = null, pa = ln[--on], ln[on] = null;
  for (; e === Bt; ) Bt = Le[--Oe], Le[Oe] = null, ot = Le[--Oe], Le[Oe] = null, lt = Le[--Oe], Le[Oe] = null;
}
var Te = null, Pe = null, J = !1, Ve = null;
function Zu(e, t) {
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
  if (J) {
    var t = Pe;
    if (t) {
      var n = t;
      if (!Ys(e, t)) {
        if (Xl(e)) throw Error(C(418));
        t = _t(n.nextSibling);
        var r = Te;
        t && Ys(e, t) ? Zu(r, n) : (e.flags = e.flags & -4097 | 2, J = !1, Te = e);
      }
    } else {
      if (Xl(e)) throw Error(C(418));
      e.flags = e.flags & -4097 | 2, J = !1, Te = e;
    }
  }
}
function Xs(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Te = e;
}
function $r(e) {
  if (e !== Te) return !1;
  if (!J) return Xs(e), J = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Wl(e.type, e.memoizedProps)), t && (t = Pe)) {
    if (Xl(e)) throw ec(), Error(C(418));
    for (; t; ) Zu(e, t), t = _t(t.nextSibling);
  }
  if (Xs(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(C(317));
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
function ec() {
  for (var e = Pe; e; ) e = _t(e.nextSibling);
}
function Sn() {
  Pe = Te = null, J = !1;
}
function Uo(e) {
  Ve === null ? Ve = [e] : Ve.push(e);
}
var pf = pt.ReactCurrentBatchConfig;
function On(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(C(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(C(147, e));
      var a = r, o = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(s) {
        var i = a.refs;
        s === null ? delete i[o] : i[o] = s;
      }, t._stringRef = o, t);
    }
    if (typeof e != "string") throw Error(C(284));
    if (!n._owner) throw Error(C(290, e));
  }
  return e;
}
function Lr(e, t) {
  throw e = Object.prototype.toString.call(t), Error(C(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Js(e) {
  var t = e._init;
  return t(e._payload);
}
function tc(e) {
  function t(m, c) {
    if (e) {
      var h = m.deletions;
      h === null ? (m.deletions = [c], m.flags |= 16) : h.push(c);
    }
  }
  function n(m, c) {
    if (!e) return null;
    for (; c !== null; ) t(m, c), c = c.sibling;
    return null;
  }
  function r(m, c) {
    for (m = /* @__PURE__ */ new Map(); c !== null; ) c.key !== null ? m.set(c.key, c) : m.set(c.index, c), c = c.sibling;
    return m;
  }
  function a(m, c) {
    return m = Et(m, c), m.index = 0, m.sibling = null, m;
  }
  function o(m, c, h) {
    return m.index = h, e ? (h = m.alternate, h !== null ? (h = h.index, h < c ? (m.flags |= 2, c) : h) : (m.flags |= 2, c)) : (m.flags |= 1048576, c);
  }
  function s(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function i(m, c, h, w) {
    return c === null || c.tag !== 6 ? (c = fl(h, m.mode, w), c.return = m, c) : (c = a(c, h), c.return = m, c);
  }
  function u(m, c, h, w) {
    var x = h.type;
    return x === Zt ? p(m, c, h.props.children, w, h.key) : c !== null && (c.elementType === x || typeof x == "object" && x !== null && x.$$typeof === ht && Js(x) === c.type) ? (w = a(c, h.props), w.ref = On(m, c, h), w.return = m, w) : (w = Zr(h.type, h.key, h.props, null, m.mode, w), w.ref = On(m, c, h), w.return = m, w);
  }
  function d(m, c, h, w) {
    return c === null || c.tag !== 4 || c.stateNode.containerInfo !== h.containerInfo || c.stateNode.implementation !== h.implementation ? (c = hl(h, m.mode, w), c.return = m, c) : (c = a(c, h.children || []), c.return = m, c);
  }
  function p(m, c, h, w, x) {
    return c === null || c.tag !== 7 ? (c = At(h, m.mode, w, x), c.return = m, c) : (c = a(c, h), c.return = m, c);
  }
  function f(m, c, h) {
    if (typeof c == "string" && c !== "" || typeof c == "number") return c = fl("" + c, m.mode, h), c.return = m, c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case _r:
          return h = Zr(c.type, c.key, c.props, null, m.mode, h), h.ref = On(m, null, c), h.return = m, h;
        case Jt:
          return c = hl(c, m.mode, h), c.return = m, c;
        case ht:
          var w = c._init;
          return f(m, w(c._payload), h);
      }
      if (Mn(c) || Tn(c)) return c = At(c, m.mode, h, null), c.return = m, c;
      Lr(m, c);
    }
    return null;
  }
  function g(m, c, h, w) {
    var x = c !== null ? c.key : null;
    if (typeof h == "string" && h !== "" || typeof h == "number") return x !== null ? null : i(m, c, "" + h, w);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case _r:
          return h.key === x ? u(m, c, h, w) : null;
        case Jt:
          return h.key === x ? d(m, c, h, w) : null;
        case ht:
          return x = h._init, g(
            m,
            c,
            x(h._payload),
            w
          );
      }
      if (Mn(h) || Tn(h)) return x !== null ? null : p(m, c, h, w, null);
      Lr(m, h);
    }
    return null;
  }
  function y(m, c, h, w, x) {
    if (typeof w == "string" && w !== "" || typeof w == "number") return m = m.get(h) || null, i(c, m, "" + w, x);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case _r:
          return m = m.get(w.key === null ? h : w.key) || null, u(c, m, w, x);
        case Jt:
          return m = m.get(w.key === null ? h : w.key) || null, d(c, m, w, x);
        case ht:
          var P = w._init;
          return y(m, c, h, P(w._payload), x);
      }
      if (Mn(w) || Tn(w)) return m = m.get(h) || null, p(c, m, w, x, null);
      Lr(c, w);
    }
    return null;
  }
  function S(m, c, h, w) {
    for (var x = null, P = null, R = c, N = c = 0, z = null; R !== null && N < h.length; N++) {
      R.index > N ? (z = R, R = null) : z = R.sibling;
      var b = g(m, R, h[N], w);
      if (b === null) {
        R === null && (R = z);
        break;
      }
      e && R && b.alternate === null && t(m, R), c = o(b, c, N), P === null ? x = b : P.sibling = b, P = b, R = z;
    }
    if (N === h.length) return n(m, R), J && Lt(m, N), x;
    if (R === null) {
      for (; N < h.length; N++) R = f(m, h[N], w), R !== null && (c = o(R, c, N), P === null ? x = R : P.sibling = R, P = R);
      return J && Lt(m, N), x;
    }
    for (R = r(m, R); N < h.length; N++) z = y(R, m, N, h[N], w), z !== null && (e && z.alternate !== null && R.delete(z.key === null ? N : z.key), c = o(z, c, N), P === null ? x = z : P.sibling = z, P = z);
    return e && R.forEach(function(B) {
      return t(m, B);
    }), J && Lt(m, N), x;
  }
  function j(m, c, h, w) {
    var x = Tn(h);
    if (typeof x != "function") throw Error(C(150));
    if (h = x.call(h), h == null) throw Error(C(151));
    for (var P = x = null, R = c, N = c = 0, z = null, b = h.next(); R !== null && !b.done; N++, b = h.next()) {
      R.index > N ? (z = R, R = null) : z = R.sibling;
      var B = g(m, R, b.value, w);
      if (B === null) {
        R === null && (R = z);
        break;
      }
      e && R && B.alternate === null && t(m, R), c = o(B, c, N), P === null ? x = B : P.sibling = B, P = B, R = z;
    }
    if (b.done) return n(
      m,
      R
    ), J && Lt(m, N), x;
    if (R === null) {
      for (; !b.done; N++, b = h.next()) b = f(m, b.value, w), b !== null && (c = o(b, c, N), P === null ? x = b : P.sibling = b, P = b);
      return J && Lt(m, N), x;
    }
    for (R = r(m, R); !b.done; N++, b = h.next()) b = y(R, m, N, b.value, w), b !== null && (e && b.alternate !== null && R.delete(b.key === null ? N : b.key), c = o(b, c, N), P === null ? x = b : P.sibling = b, P = b);
    return e && R.forEach(function(K) {
      return t(m, K);
    }), J && Lt(m, N), x;
  }
  function _(m, c, h, w) {
    if (typeof h == "object" && h !== null && h.type === Zt && h.key === null && (h = h.props.children), typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case _r:
          e: {
            for (var x = h.key, P = c; P !== null; ) {
              if (P.key === x) {
                if (x = h.type, x === Zt) {
                  if (P.tag === 7) {
                    n(m, P.sibling), c = a(P, h.props.children), c.return = m, m = c;
                    break e;
                  }
                } else if (P.elementType === x || typeof x == "object" && x !== null && x.$$typeof === ht && Js(x) === P.type) {
                  n(m, P.sibling), c = a(P, h.props), c.ref = On(m, P, h), c.return = m, m = c;
                  break e;
                }
                n(m, P);
                break;
              } else t(m, P);
              P = P.sibling;
            }
            h.type === Zt ? (c = At(h.props.children, m.mode, w, h.key), c.return = m, m = c) : (w = Zr(h.type, h.key, h.props, null, m.mode, w), w.ref = On(m, c, h), w.return = m, m = w);
          }
          return s(m);
        case Jt:
          e: {
            for (P = h.key; c !== null; ) {
              if (c.key === P) if (c.tag === 4 && c.stateNode.containerInfo === h.containerInfo && c.stateNode.implementation === h.implementation) {
                n(m, c.sibling), c = a(c, h.children || []), c.return = m, m = c;
                break e;
              } else {
                n(m, c);
                break;
              }
              else t(m, c);
              c = c.sibling;
            }
            c = hl(h, m.mode, w), c.return = m, m = c;
          }
          return s(m);
        case ht:
          return P = h._init, _(m, c, P(h._payload), w);
      }
      if (Mn(h)) return S(m, c, h, w);
      if (Tn(h)) return j(m, c, h, w);
      Lr(m, h);
    }
    return typeof h == "string" && h !== "" || typeof h == "number" ? (h = "" + h, c !== null && c.tag === 6 ? (n(m, c.sibling), c = a(c, h), c.return = m, m = c) : (n(m, c), c = fl(h, m.mode, w), c.return = m, m = c), s(m)) : n(m, c);
  }
  return _;
}
var wn = tc(!0), nc = tc(!1), fa = Rt(null), ha = null, sn = null, Bo = null;
function Vo() {
  Bo = sn = ha = null;
}
function Ho(e) {
  var t = fa.current;
  X(fa), e._currentValue = t;
}
function Zl(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function gn(e, t) {
  ha = e, Bo = sn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (_e = !0), e.firstContext = null);
}
function Fe(e) {
  var t = e._currentValue;
  if (Bo !== e) if (e = { context: e, memoizedValue: t, next: null }, sn === null) {
    if (ha === null) throw Error(C(308));
    sn = e, ha.dependencies = { lanes: 0, firstContext: e };
  } else sn = sn.next = e;
  return t;
}
var Dt = null;
function qo(e) {
  Dt === null ? Dt = [e] : Dt.push(e);
}
function rc(e, t, n, r) {
  var a = t.interleaved;
  return a === null ? (n.next = n, qo(t)) : (n.next = a.next, a.next = n), t.interleaved = n, ct(e, r);
}
function ct(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var mt = !1;
function Qo(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function ac(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function st(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Nt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, H & 2) {
    var a = r.pending;
    return a === null ? t.next = t : (t.next = a.next, a.next = t), r.pending = t, ct(e, n);
  }
  return a = r.interleaved, a === null ? (t.next = t, qo(r)) : (t.next = a.next, a.next = t), r.interleaved = t, ct(e, n);
}
function Wr(e, t, n) {
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
function ma(e, t, n, r) {
  var a = e.updateQueue;
  mt = !1;
  var o = a.firstBaseUpdate, s = a.lastBaseUpdate, i = a.shared.pending;
  if (i !== null) {
    a.shared.pending = null;
    var u = i, d = u.next;
    u.next = null, s === null ? o = d : s.next = d, s = u;
    var p = e.alternate;
    p !== null && (p = p.updateQueue, i = p.lastBaseUpdate, i !== s && (i === null ? p.firstBaseUpdate = d : i.next = d, p.lastBaseUpdate = u));
  }
  if (o !== null) {
    var f = a.baseState;
    s = 0, p = d = u = null, i = o;
    do {
      var g = i.lane, y = i.eventTime;
      if ((r & g) === g) {
        p !== null && (p = p.next = {
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
                f = S.call(y, f, g);
                break e;
              }
              f = S;
              break e;
            case 3:
              S.flags = S.flags & -65537 | 128;
            case 0:
              if (S = j.payload, g = typeof S == "function" ? S.call(y, f, g) : S, g == null) break e;
              f = ne({}, f, g);
              break e;
            case 2:
              mt = !0;
          }
        }
        i.callback !== null && i.lane !== 0 && (e.flags |= 64, g = a.effects, g === null ? a.effects = [i] : g.push(i));
      } else y = { eventTime: y, lane: g, tag: i.tag, payload: i.payload, callback: i.callback, next: null }, p === null ? (d = p = y, u = f) : p = p.next = y, s |= g;
      if (i = i.next, i === null) {
        if (i = a.shared.pending, i === null) break;
        g = i, i = g.next, g.next = null, a.lastBaseUpdate = g, a.shared.pending = null;
      }
    } while (!0);
    if (p === null && (u = f), a.baseState = u, a.firstBaseUpdate = d, a.lastBaseUpdate = p, t = a.shared.interleaved, t !== null) {
      a = t;
      do
        s |= a.lane, a = a.next;
      while (a !== t);
    } else o === null && (a.shared.lanes = 0);
    Ht |= s, e.lanes = s, e.memoizedState = f;
  }
}
function ei(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], a = r.callback;
    if (a !== null) {
      if (r.callback = null, r = n, typeof a != "function") throw Error(C(191, a));
      a.call(r);
    }
  }
}
var xr = {}, Ze = Rt(xr), ur = Rt(xr), cr = Rt(xr);
function Ft(e) {
  if (e === xr) throw Error(C(174));
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
  X(Ze), W(Ze, t);
}
function _n() {
  X(Ze), X(ur), X(cr);
}
function lc(e) {
  Ft(cr.current);
  var t = Ft(Ze.current), n = $l(t, e.type);
  t !== n && (W(ur, e), W(Ze, n));
}
function Ko(e) {
  ur.current === e && (X(Ze), X(ur));
}
var ee = Rt(0);
function ga(e) {
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
var sl = [];
function Go() {
  for (var e = 0; e < sl.length; e++) sl[e]._workInProgressVersionPrimary = null;
  sl.length = 0;
}
var Kr = pt.ReactCurrentDispatcher, il = pt.ReactCurrentBatchConfig, Vt = 0, te = null, oe = null, ie = null, va = !1, Kn = !1, dr = 0, ff = 0;
function he() {
  throw Error(C(321));
}
function Yo(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Qe(e[n], t[n])) return !1;
  return !0;
}
function Xo(e, t, n, r, a, o) {
  if (Vt = o, te = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Kr.current = e === null || e.memoizedState === null ? vf : yf, e = n(r, a), Kn) {
    o = 0;
    do {
      if (Kn = !1, dr = 0, 25 <= o) throw Error(C(301));
      o += 1, ie = oe = null, t.updateQueue = null, Kr.current = xf, e = n(r, a);
    } while (Kn);
  }
  if (Kr.current = ya, t = oe !== null && oe.next !== null, Vt = 0, ie = oe = te = null, va = !1, t) throw Error(C(300));
  return e;
}
function Jo() {
  var e = dr !== 0;
  return dr = 0, e;
}
function Ye() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return ie === null ? te.memoizedState = ie = e : ie = ie.next = e, ie;
}
function Me() {
  if (oe === null) {
    var e = te.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = oe.next;
  var t = ie === null ? te.memoizedState : ie.next;
  if (t !== null) ie = t, oe = e;
  else {
    if (e === null) throw Error(C(310));
    oe = e, e = { memoizedState: oe.memoizedState, baseState: oe.baseState, baseQueue: oe.baseQueue, queue: oe.queue, next: null }, ie === null ? te.memoizedState = ie = e : ie = ie.next = e;
  }
  return ie;
}
function pr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ul(e) {
  var t = Me(), n = t.queue;
  if (n === null) throw Error(C(311));
  n.lastRenderedReducer = e;
  var r = oe, a = r.baseQueue, o = n.pending;
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
      var p = d.lane;
      if ((Vt & p) === p) u !== null && (u = u.next = { lane: 0, action: d.action, hasEagerState: d.hasEagerState, eagerState: d.eagerState, next: null }), r = d.hasEagerState ? d.eagerState : e(r, d.action);
      else {
        var f = {
          lane: p,
          action: d.action,
          hasEagerState: d.hasEagerState,
          eagerState: d.eagerState,
          next: null
        };
        u === null ? (i = u = f, s = r) : u = u.next = f, te.lanes |= p, Ht |= p;
      }
      d = d.next;
    } while (d !== null && d !== o);
    u === null ? s = r : u.next = i, Qe(r, t.memoizedState) || (_e = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = u, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    a = e;
    do
      o = a.lane, te.lanes |= o, Ht |= o, a = a.next;
    while (a !== e);
  } else a === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function cl(e) {
  var t = Me(), n = t.queue;
  if (n === null) throw Error(C(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, a = n.pending, o = t.memoizedState;
  if (a !== null) {
    n.pending = null;
    var s = a = a.next;
    do
      o = e(o, s.action), s = s.next;
    while (s !== a);
    Qe(o, t.memoizedState) || (_e = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
  }
  return [o, r];
}
function oc() {
}
function sc(e, t) {
  var n = te, r = Me(), a = t(), o = !Qe(r.memoizedState, a);
  if (o && (r.memoizedState = a, _e = !0), r = r.queue, Zo(cc.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || ie !== null && ie.memoizedState.tag & 1) {
    if (n.flags |= 2048, fr(9, uc.bind(null, n, r, a, t), void 0, null), ue === null) throw Error(C(349));
    Vt & 30 || ic(n, t, a);
  }
  return a;
}
function ic(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = te.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, te.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function uc(e, t, n, r) {
  t.value = n, t.getSnapshot = r, dc(t) && pc(e);
}
function cc(e, t, n) {
  return n(function() {
    dc(t) && pc(e);
  });
}
function dc(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Qe(e, n);
  } catch {
    return !0;
  }
}
function pc(e) {
  var t = ct(e, 1);
  t !== null && qe(t, e, 1, -1);
}
function ti(e) {
  var t = Ye();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: pr, lastRenderedState: e }, t.queue = e, e = e.dispatch = gf.bind(null, te, e), [t.memoizedState, e];
}
function fr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = te.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, te.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function fc() {
  return Me().memoizedState;
}
function Gr(e, t, n, r) {
  var a = Ye();
  te.flags |= e, a.memoizedState = fr(1 | t, n, void 0, r === void 0 ? null : r);
}
function za(e, t, n, r) {
  var a = Me();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (oe !== null) {
    var s = oe.memoizedState;
    if (o = s.destroy, r !== null && Yo(r, s.deps)) {
      a.memoizedState = fr(t, n, o, r);
      return;
    }
  }
  te.flags |= e, a.memoizedState = fr(1 | t, n, o, r);
}
function ni(e, t) {
  return Gr(8390656, 8, e, t);
}
function Zo(e, t) {
  return za(2048, 8, e, t);
}
function hc(e, t) {
  return za(4, 2, e, t);
}
function mc(e, t) {
  return za(4, 4, e, t);
}
function gc(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function vc(e, t, n) {
  return n = n != null ? n.concat([e]) : null, za(4, 4, gc.bind(null, t, e), n);
}
function es() {
}
function yc(e, t) {
  var n = Me();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Yo(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function xc(e, t) {
  var n = Me();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Yo(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function jc(e, t, n) {
  return Vt & 21 ? (Qe(n, t) || (n = ku(), te.lanes |= n, Ht |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, _e = !0), e.memoizedState = n);
}
function hf(e, t) {
  var n = q;
  q = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = il.transition;
  il.transition = {};
  try {
    e(!1), t();
  } finally {
    q = n, il.transition = r;
  }
}
function Sc() {
  return Me().memoizedState;
}
function mf(e, t, n) {
  var r = Ct(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, wc(e)) _c(t, n);
  else if (n = rc(e, t, n, r), n !== null) {
    var a = xe();
    qe(n, e, r, a), Nc(n, t, r);
  }
}
function gf(e, t, n) {
  var r = Ct(e), a = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (wc(e)) _c(t, a);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
      var s = t.lastRenderedState, i = o(s, n);
      if (a.hasEagerState = !0, a.eagerState = i, Qe(i, s)) {
        var u = t.interleaved;
        u === null ? (a.next = a, qo(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
        return;
      }
    } catch {
    } finally {
    }
    n = rc(e, t, a, r), n !== null && (a = xe(), qe(n, e, r, a), Nc(n, t, r));
  }
}
function wc(e) {
  var t = e.alternate;
  return e === te || t !== null && t === te;
}
function _c(e, t) {
  Kn = va = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Nc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Ro(e, n);
  }
}
var ya = { readContext: Fe, useCallback: he, useContext: he, useEffect: he, useImperativeHandle: he, useInsertionEffect: he, useLayoutEffect: he, useMemo: he, useReducer: he, useRef: he, useState: he, useDebugValue: he, useDeferredValue: he, useTransition: he, useMutableSource: he, useSyncExternalStore: he, useId: he, unstable_isNewReconciler: !1 }, vf = { readContext: Fe, useCallback: function(e, t) {
  return Ye().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Fe, useEffect: ni, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Gr(
    4194308,
    4,
    gc.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Gr(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Gr(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Ye();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Ye();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = mf.bind(null, te, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Ye();
  return e = { current: e }, t.memoizedState = e;
}, useState: ti, useDebugValue: es, useDeferredValue: function(e) {
  return Ye().memoizedState = e;
}, useTransition: function() {
  var e = ti(!1), t = e[0];
  return e = hf.bind(null, e[1]), Ye().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = te, a = Ye();
  if (J) {
    if (n === void 0) throw Error(C(407));
    n = n();
  } else {
    if (n = t(), ue === null) throw Error(C(349));
    Vt & 30 || ic(r, t, n);
  }
  a.memoizedState = n;
  var o = { value: n, getSnapshot: t };
  return a.queue = o, ni(cc.bind(
    null,
    r,
    o,
    e
  ), [e]), r.flags |= 2048, fr(9, uc.bind(null, r, o, n, t), void 0, null), n;
}, useId: function() {
  var e = Ye(), t = ue.identifierPrefix;
  if (J) {
    var n = ot, r = lt;
    n = (r & ~(1 << 32 - He(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = dr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = ff++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, yf = {
  readContext: Fe,
  useCallback: yc,
  useContext: Fe,
  useEffect: Zo,
  useImperativeHandle: vc,
  useInsertionEffect: hc,
  useLayoutEffect: mc,
  useMemo: xc,
  useReducer: ul,
  useRef: fc,
  useState: function() {
    return ul(pr);
  },
  useDebugValue: es,
  useDeferredValue: function(e) {
    var t = Me();
    return jc(t, oe.memoizedState, e);
  },
  useTransition: function() {
    var e = ul(pr)[0], t = Me().memoizedState;
    return [e, t];
  },
  useMutableSource: oc,
  useSyncExternalStore: sc,
  useId: Sc,
  unstable_isNewReconciler: !1
}, xf = { readContext: Fe, useCallback: yc, useContext: Fe, useEffect: Zo, useImperativeHandle: vc, useInsertionEffect: hc, useLayoutEffect: mc, useMemo: xc, useReducer: cl, useRef: fc, useState: function() {
  return cl(pr);
}, useDebugValue: es, useDeferredValue: function(e) {
  var t = Me();
  return oe === null ? t.memoizedState = e : jc(t, oe.memoizedState, e);
}, useTransition: function() {
  var e = cl(pr)[0], t = Me().memoizedState;
  return [e, t];
}, useMutableSource: oc, useSyncExternalStore: sc, useId: Sc, unstable_isNewReconciler: !1 };
function Ue(e, t) {
  if (e && e.defaultProps) {
    t = ne({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function eo(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : ne({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var $a = { isMounted: function(e) {
  return (e = e._reactInternals) ? Wt(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = xe(), a = Ct(e), o = st(r, a);
  o.payload = t, n != null && (o.callback = n), t = Nt(e, o, a), t !== null && (qe(t, e, a, r), Wr(t, e, a));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = xe(), a = Ct(e), o = st(r, a);
  o.tag = 1, o.payload = t, n != null && (o.callback = n), t = Nt(e, o, a), t !== null && (qe(t, e, a, r), Wr(t, e, a));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = xe(), r = Ct(e), a = st(n, r);
  a.tag = 2, t != null && (a.callback = t), t = Nt(e, a, r), t !== null && (qe(t, e, r, n), Wr(t, e, r));
} };
function ri(e, t, n, r, a, o, s) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, s) : t.prototype && t.prototype.isPureReactComponent ? !lr(n, r) || !lr(a, o) : !0;
}
function kc(e, t, n) {
  var r = !1, a = Pt, o = t.contextType;
  return typeof o == "object" && o !== null ? o = Fe(o) : (a = ke(t) ? Ut : ve.current, r = t.contextTypes, o = (r = r != null) ? jn(e, a) : Pt), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = $a, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = a, e.__reactInternalMemoizedMaskedChildContext = o), t;
}
function ai(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && $a.enqueueReplaceState(t, t.state, null);
}
function to(e, t, n, r) {
  var a = e.stateNode;
  a.props = n, a.state = e.memoizedState, a.refs = {}, Qo(e);
  var o = t.contextType;
  typeof o == "object" && o !== null ? a.context = Fe(o) : (o = ke(t) ? Ut : ve.current, a.context = jn(e, o)), a.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (eo(e, t, o, n), a.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof a.getSnapshotBeforeUpdate == "function" || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (t = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), t !== a.state && $a.enqueueReplaceState(a, a.state, null), ma(e, n, a, r), a.state = e.memoizedState), typeof a.componentDidMount == "function" && (e.flags |= 4194308);
}
function Nn(e, t) {
  try {
    var n = "", r = t;
    do
      n += Qd(r), r = r.return;
    while (r);
    var a = n;
  } catch (o) {
    a = `
Error generating stack: ` + o.message + `
` + o.stack;
  }
  return { value: e, source: t, stack: a, digest: null };
}
function dl(e, t, n) {
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
var jf = typeof WeakMap == "function" ? WeakMap : Map;
function Cc(e, t, n) {
  n = st(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    ja || (ja = !0, fo = r), no(e, t);
  }, n;
}
function Ec(e, t, n) {
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
    r = e.pingCache = new jf();
    var a = /* @__PURE__ */ new Set();
    r.set(t, a);
  } else a = r.get(t), a === void 0 && (a = /* @__PURE__ */ new Set(), r.set(t, a));
  a.has(n) || (a.add(n), e = Lf.bind(null, e, t, n), t.then(e, e));
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
var Sf = pt.ReactCurrentOwner, _e = !1;
function ye(e, t, n, r) {
  t.child = e === null ? nc(t, null, n, r) : wn(t, e.child, n, r);
}
function ii(e, t, n, r, a) {
  n = n.render;
  var o = t.ref;
  return gn(t, a), r = Xo(e, t, n, r, o, a), n = Jo(), e !== null && !_e ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, dt(e, t, a)) : (J && n && Mo(t), t.flags |= 1, ye(e, t, r, a), t.child);
}
function ui(e, t, n, r, a) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" && !is(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, bc(e, t, o, r, a)) : (e = Zr(n.type, null, r, t, t.mode, a), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (o = e.child, !(e.lanes & a)) {
    var s = o.memoizedProps;
    if (n = n.compare, n = n !== null ? n : lr, n(s, r) && e.ref === t.ref) return dt(e, t, a);
  }
  return t.flags |= 1, e = Et(o, r), e.ref = t.ref, e.return = t, t.child = e;
}
function bc(e, t, n, r, a) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (lr(o, r) && e.ref === t.ref) if (_e = !1, t.pendingProps = r = o, (e.lanes & a) !== 0) e.flags & 131072 && (_e = !0);
    else return t.lanes = e.lanes, dt(e, t, a);
  }
  return ro(e, t, n, r, a);
}
function Pc(e, t, n) {
  var r = t.pendingProps, a = r.children, o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, W(cn, be), be |= n;
  else {
    if (!(n & 1073741824)) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, W(cn, be), be |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, W(cn, be), be |= r;
  }
  else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, W(cn, be), be |= r;
  return ye(e, t, a, n), t.child;
}
function Tc(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function ro(e, t, n, r, a) {
  var o = ke(n) ? Ut : ve.current;
  return o = jn(t, o), gn(t, a), n = Xo(e, t, n, r, o, a), r = Jo(), e !== null && !_e ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, dt(e, t, a)) : (J && r && Mo(t), t.flags |= 1, ye(e, t, n, a), t.child);
}
function ci(e, t, n, r, a) {
  if (ke(n)) {
    var o = !0;
    ca(t);
  } else o = !1;
  if (gn(t, a), t.stateNode === null) Yr(e, t), kc(t, n, r), to(t, n, r, a), r = !0;
  else if (e === null) {
    var s = t.stateNode, i = t.memoizedProps;
    s.props = i;
    var u = s.context, d = n.contextType;
    typeof d == "object" && d !== null ? d = Fe(d) : (d = ke(n) ? Ut : ve.current, d = jn(t, d));
    var p = n.getDerivedStateFromProps, f = typeof p == "function" || typeof s.getSnapshotBeforeUpdate == "function";
    f || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (i !== r || u !== d) && ai(t, s, r, d), mt = !1;
    var g = t.memoizedState;
    s.state = g, ma(t, r, s, a), u = t.memoizedState, i !== r || g !== u || Ne.current || mt ? (typeof p == "function" && (eo(t, n, p, r), u = t.memoizedState), (i = mt || ri(t, n, i, r, g, u, d)) ? (f || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = u), s.props = r, s.state = u, s.context = d, r = i) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    s = t.stateNode, ac(e, t), i = t.memoizedProps, d = t.type === t.elementType ? i : Ue(t.type, i), s.props = d, f = t.pendingProps, g = s.context, u = n.contextType, typeof u == "object" && u !== null ? u = Fe(u) : (u = ke(n) ? Ut : ve.current, u = jn(t, u));
    var y = n.getDerivedStateFromProps;
    (p = typeof y == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (i !== f || g !== u) && ai(t, s, r, u), mt = !1, g = t.memoizedState, s.state = g, ma(t, r, s, a);
    var S = t.memoizedState;
    i !== f || g !== S || Ne.current || mt ? (typeof y == "function" && (eo(t, n, y, r), S = t.memoizedState), (d = mt || ri(t, n, d, r, g, S, u) || !1) ? (p || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, S, u), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, S, u)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || i === e.memoizedProps && g === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && g === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = S), s.props = r, s.state = S, s.context = u, r = d) : (typeof s.componentDidUpdate != "function" || i === e.memoizedProps && g === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && g === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return ao(e, t, n, r, o, a);
}
function ao(e, t, n, r, a, o) {
  Tc(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return a && Gs(t, n, !1), dt(e, t, o);
  r = t.stateNode, Sf.current = t;
  var i = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && s ? (t.child = wn(t, e.child, null, o), t.child = wn(t, null, i, o)) : ye(e, t, i, o), t.memoizedState = r.state, a && Gs(t, n, !0), t.child;
}
function Rc(e) {
  var t = e.stateNode;
  t.pendingContext ? Ks(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Ks(e, t.context, !1), Wo(e, t.containerInfo);
}
function di(e, t, n, r, a) {
  return Sn(), Uo(a), t.flags |= 256, ye(e, t, n, r), t.child;
}
var lo = { dehydrated: null, treeContext: null, retryLane: 0 };
function oo(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function zc(e, t, n) {
  var r = t.pendingProps, a = ee.current, o = !1, s = (t.flags & 128) !== 0, i;
  if ((i = s) || (i = e !== null && e.memoizedState === null ? !1 : (a & 2) !== 0), i ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (a |= 1), W(ee, a & 1), e === null)
    return Jl(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, s = { mode: "hidden", children: s }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = s) : o = Ia(s, r, 0, null), e = At(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = oo(n), t.memoizedState = lo, e) : ts(t, s));
  if (a = e.memoizedState, a !== null && (i = a.dehydrated, i !== null)) return wf(e, t, s, r, i, a, n);
  if (o) {
    o = r.fallback, s = t.mode, a = e.child, i = a.sibling;
    var u = { mode: "hidden", children: r.children };
    return !(s & 1) && t.child !== a ? (r = t.child, r.childLanes = 0, r.pendingProps = u, t.deletions = null) : (r = Et(a, u), r.subtreeFlags = a.subtreeFlags & 14680064), i !== null ? o = Et(i, o) : (o = At(o, s, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, s = e.child.memoizedState, s = s === null ? oo(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }, o.memoizedState = s, o.childLanes = e.childLanes & ~n, t.memoizedState = lo, r;
  }
  return o = e.child, e = o.sibling, r = Et(o, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function ts(e, t) {
  return t = Ia({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Or(e, t, n, r) {
  return r !== null && Uo(r), wn(t, e.child, null, n), e = ts(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function wf(e, t, n, r, a, o, s) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = dl(Error(C(422))), Or(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, a = t.mode, r = Ia({ mode: "visible", children: r.children }, a, 0, null), o = At(o, a, s, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && wn(t, e.child, null, s), t.child.memoizedState = oo(s), t.memoizedState = lo, o);
  if (!(t.mode & 1)) return Or(e, t, s, null);
  if (a.data === "$!") {
    if (r = a.nextSibling && a.nextSibling.dataset, r) var i = r.dgst;
    return r = i, o = Error(C(419)), r = dl(o, r, void 0), Or(e, t, s, r);
  }
  if (i = (s & e.childLanes) !== 0, _e || i) {
    if (r = ue, r !== null) {
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
      a = a & (r.suspendedLanes | s) ? 0 : a, a !== 0 && a !== o.retryLane && (o.retryLane = a, ct(e, a), qe(r, e, a, -1));
    }
    return ss(), r = dl(Error(C(421))), Or(e, t, s, r);
  }
  return a.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Of.bind(null, e), a._reactRetry = t, null) : (e = o.treeContext, Pe = _t(a.nextSibling), Te = t, J = !0, Ve = null, e !== null && (Le[Oe++] = lt, Le[Oe++] = ot, Le[Oe++] = Bt, lt = e.id, ot = e.overflow, Bt = t), t = ts(t, r.children), t.flags |= 4096, t);
}
function pi(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Zl(e.return, t, n);
}
function pl(e, t, n, r, a) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: a } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = a);
}
function $c(e, t, n) {
  var r = t.pendingProps, a = r.revealOrder, o = r.tail;
  if (ye(e, t, r.children, n), r = ee.current, r & 2) r = r & 1 | 2, t.flags |= 128;
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
  if (W(ee, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (a) {
    case "forwards":
      for (n = t.child, a = null; n !== null; ) e = n.alternate, e !== null && ga(e) === null && (a = n), n = n.sibling;
      n = a, n === null ? (a = t.child, t.child = null) : (a = n.sibling, n.sibling = null), pl(t, !1, a, n, o);
      break;
    case "backwards":
      for (n = null, a = t.child, t.child = null; a !== null; ) {
        if (e = a.alternate, e !== null && ga(e) === null) {
          t.child = a;
          break;
        }
        e = a.sibling, a.sibling = n, n = a, a = e;
      }
      pl(t, !0, n, null, o);
      break;
    case "together":
      pl(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Yr(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function dt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Ht |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(C(153));
  if (t.child !== null) {
    for (e = t.child, n = Et(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Et(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function _f(e, t, n) {
  switch (t.tag) {
    case 3:
      Rc(t), Sn();
      break;
    case 5:
      lc(t);
      break;
    case 1:
      ke(t.type) && ca(t);
      break;
    case 4:
      Wo(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, a = t.memoizedProps.value;
      W(fa, r._currentValue), r._currentValue = a;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (W(ee, ee.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? zc(e, t, n) : (W(ee, ee.current & 1), e = dt(e, t, n), e !== null ? e.sibling : null);
      W(ee, ee.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return $c(e, t, n);
        t.flags |= 128;
      }
      if (a = t.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), W(ee, ee.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Pc(e, t, n);
  }
  return dt(e, t, n);
}
var Lc, so, Oc, Ic;
Lc = function(e, t) {
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
Oc = function(e, t, n, r) {
  var a = e.memoizedProps;
  if (a !== r) {
    e = t.stateNode, Ft(Ze.current);
    var o = null;
    switch (n) {
      case "input":
        a = Pl(e, a), r = Pl(e, r), o = [];
        break;
      case "select":
        a = ne({}, a, { value: void 0 }), r = ne({}, r, { value: void 0 }), o = [];
        break;
      case "textarea":
        a = zl(e, a), r = zl(e, r), o = [];
        break;
      default:
        typeof a.onClick != "function" && typeof r.onClick == "function" && (e.onclick = ia);
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
      else d === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, i = i ? i.__html : void 0, u != null && i !== u && (o = o || []).push(d, u)) : d === "children" ? typeof u != "string" && typeof u != "number" || (o = o || []).push(d, "" + u) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && (Jn.hasOwnProperty(d) ? (u != null && d === "onScroll" && Y("scroll", e), o || i === u || (o = [])) : (o = o || []).push(d, u));
    }
    n && (o = o || []).push("style", n);
    var d = o;
    (t.updateQueue = d) && (t.flags |= 4);
  }
};
Ic = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function In(e, t) {
  if (!J) switch (e.tailMode) {
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
function me(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var a = e.child; a !== null; ) n |= a.lanes | a.childLanes, r |= a.subtreeFlags & 14680064, r |= a.flags & 14680064, a.return = e, a = a.sibling;
  else for (a = e.child; a !== null; ) n |= a.lanes | a.childLanes, r |= a.subtreeFlags, r |= a.flags, a.return = e, a = a.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function Nf(e, t, n) {
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
      return me(t), null;
    case 1:
      return ke(t.type) && ua(), me(t), null;
    case 3:
      return r = t.stateNode, _n(), X(Ne), X(ve), Go(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && ($r(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Ve !== null && (go(Ve), Ve = null))), so(e, t), me(t), null;
    case 5:
      Ko(t);
      var a = Ft(cr.current);
      if (n = t.type, e !== null && t.stateNode != null) Oc(e, t, n, r, a), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(C(166));
          return me(t), null;
        }
        if (e = Ft(Ze.current), $r(t)) {
          r = t.stateNode, n = t.type;
          var o = t.memoizedProps;
          switch (r[Xe] = t, r[ir] = o, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              Y("cancel", r), Y("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              Y("load", r);
              break;
            case "video":
            case "audio":
              for (a = 0; a < Un.length; a++) Y(Un[a], r);
              break;
            case "source":
              Y("error", r);
              break;
            case "img":
            case "image":
            case "link":
              Y(
                "error",
                r
              ), Y("load", r);
              break;
            case "details":
              Y("toggle", r);
              break;
            case "input":
              Ss(r, o), Y("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!o.multiple }, Y("invalid", r);
              break;
            case "textarea":
              _s(r, o), Y("invalid", r);
          }
          Ll(n, o), a = null;
          for (var s in o) if (o.hasOwnProperty(s)) {
            var i = o[s];
            s === "children" ? typeof i == "string" ? r.textContent !== i && (o.suppressHydrationWarning !== !0 && zr(r.textContent, i, e), a = ["children", i]) : typeof i == "number" && r.textContent !== "" + i && (o.suppressHydrationWarning !== !0 && zr(
              r.textContent,
              i,
              e
            ), a = ["children", "" + i]) : Jn.hasOwnProperty(s) && i != null && s === "onScroll" && Y("scroll", r);
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
              typeof o.onClick == "function" && (r.onclick = ia);
          }
          r = a, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          s = a.nodeType === 9 ? a : a.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = cu(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, { is: r.is }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[Xe] = t, e[ir] = r, Lc(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (s = Ol(n, r), n) {
              case "dialog":
                Y("cancel", e), Y("close", e), a = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                Y("load", e), a = r;
                break;
              case "video":
              case "audio":
                for (a = 0; a < Un.length; a++) Y(Un[a], e);
                a = r;
                break;
              case "source":
                Y("error", e), a = r;
                break;
              case "img":
              case "image":
              case "link":
                Y(
                  "error",
                  e
                ), Y("load", e), a = r;
                break;
              case "details":
                Y("toggle", e), a = r;
                break;
              case "input":
                Ss(e, r), a = Pl(e, r), Y("invalid", e);
                break;
              case "option":
                a = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, a = ne({}, r, { value: void 0 }), Y("invalid", e);
                break;
              case "textarea":
                _s(e, r), a = zl(e, r), Y("invalid", e);
                break;
              default:
                a = r;
            }
            Ll(n, a), i = a;
            for (o in i) if (i.hasOwnProperty(o)) {
              var u = i[o];
              o === "style" ? fu(e, u) : o === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, u != null && du(e, u)) : o === "children" ? typeof u == "string" ? (n !== "textarea" || u !== "") && Zn(e, u) : typeof u == "number" && Zn(e, "" + u) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Jn.hasOwnProperty(o) ? u != null && o === "onScroll" && Y("scroll", e) : u != null && ko(e, o, u, s));
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
                typeof a.onClick == "function" && (e.onclick = ia);
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
      return me(t), null;
    case 6:
      if (e && t.stateNode != null) Ic(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(C(166));
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
      return me(t), null;
    case 13:
      if (X(ee), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (J && Pe !== null && t.mode & 1 && !(t.flags & 128)) ec(), Sn(), t.flags |= 98560, o = !1;
        else if (o = $r(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!o) throw Error(C(318));
            if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(C(317));
            o[Xe] = t;
          } else Sn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          me(t), o = !1;
        } else Ve !== null && (go(Ve), Ve = null), o = !0;
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || ee.current & 1 ? se === 0 && (se = 3) : ss())), t.updateQueue !== null && (t.flags |= 4), me(t), null);
    case 4:
      return _n(), so(e, t), e === null && or(t.stateNode.containerInfo), me(t), null;
    case 10:
      return Ho(t.type._context), me(t), null;
    case 17:
      return ke(t.type) && ua(), me(t), null;
    case 19:
      if (X(ee), o = t.memoizedState, o === null) return me(t), null;
      if (r = (t.flags & 128) !== 0, s = o.rendering, s === null) if (r) In(o, !1);
      else {
        if (se !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (s = ga(e), s !== null) {
            for (t.flags |= 128, In(o, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) o = n, e = r, o.flags &= 14680066, s = o.alternate, s === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = s.childLanes, o.lanes = s.lanes, o.child = s.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = s.memoizedProps, o.memoizedState = s.memoizedState, o.updateQueue = s.updateQueue, o.type = s.type, e = s.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return W(ee, ee.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        o.tail !== null && ae() > kn && (t.flags |= 128, r = !0, In(o, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = ga(s), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), In(o, !0), o.tail === null && o.tailMode === "hidden" && !s.alternate && !J) return me(t), null;
        } else 2 * ae() - o.renderingStartTime > kn && n !== 1073741824 && (t.flags |= 128, r = !0, In(o, !1), t.lanes = 4194304);
        o.isBackwards ? (s.sibling = t.child, t.child = s) : (n = o.last, n !== null ? n.sibling = s : t.child = s, o.last = s);
      }
      return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = ae(), t.sibling = null, n = ee.current, W(ee, r ? n & 1 | 2 : n & 1), t) : (me(t), null);
    case 22:
    case 23:
      return os(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? be & 1073741824 && (me(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : me(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(C(156, t.tag));
}
function kf(e, t) {
  switch (Ao(t), t.tag) {
    case 1:
      return ke(t.type) && ua(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return _n(), X(Ne), X(ve), Go(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Ko(t), null;
    case 13:
      if (X(ee), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(C(340));
        Sn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return X(ee), null;
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
var Ir = !1, ge = !1, Cf = typeof WeakSet == "function" ? WeakSet : Set, $ = null;
function un(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    re(e, t, r);
  }
  else n.current = null;
}
function io(e, t, n) {
  try {
    n();
  } catch (r) {
    re(e, t, r);
  }
}
var fi = !1;
function Ef(e, t) {
  if (ql = la, e = Uu(), Fo(e)) {
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
        var s = 0, i = -1, u = -1, d = 0, p = 0, f = e, g = null;
        t: for (; ; ) {
          for (var y; f !== n || a !== 0 && f.nodeType !== 3 || (i = s + a), f !== o || r !== 0 && f.nodeType !== 3 || (u = s + r), f.nodeType === 3 && (s += f.nodeValue.length), (y = f.firstChild) !== null; )
            g = f, f = y;
          for (; ; ) {
            if (f === e) break t;
            if (g === n && ++d === a && (i = s), g === o && ++p === r && (u = s), (y = f.nextSibling) !== null) break;
            f = g, g = f.parentNode;
          }
          f = y;
        }
        n = i === -1 || u === -1 ? null : { start: i, end: u };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ql = { focusedElem: e, selectionRange: n }, la = !1, $ = t; $ !== null; ) if (t = $, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, $ = e;
  else for (; $ !== null; ) {
    t = $;
    try {
      var S = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (S !== null) {
            var j = S.memoizedProps, _ = S.memoizedState, m = t.stateNode, c = m.getSnapshotBeforeUpdate(t.elementType === t.type ? j : Ue(t.type, j), _);
            m.__reactInternalSnapshotBeforeUpdate = c;
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
          throw Error(C(163));
      }
    } catch (w) {
      re(t, t.return, w);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, $ = e;
      break;
    }
    $ = t.return;
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
function La(e, t) {
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
function Dc(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Dc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Xe], delete t[ir], delete t[Gl], delete t[uf], delete t[cf])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Fc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function hi(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || Fc(e.return)) return null;
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
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = ia));
  else if (r !== 4 && (e = e.child, e !== null)) for (co(e, t, n), e = e.sibling; e !== null; ) co(e, t, n), e = e.sibling;
}
function po(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (po(e, t, n), e = e.sibling; e !== null; ) po(e, t, n), e = e.sibling;
}
var ce = null, Be = !1;
function ft(e, t, n) {
  for (n = n.child; n !== null; ) Mc(e, t, n), n = n.sibling;
}
function Mc(e, t, n) {
  if (Je && typeof Je.onCommitFiberUnmount == "function") try {
    Je.onCommitFiberUnmount(Ca, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      ge || un(n, t);
    case 6:
      var r = ce, a = Be;
      ce = null, ft(e, t, n), ce = r, Be = a, ce !== null && (Be ? (e = ce, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ce.removeChild(n.stateNode));
      break;
    case 18:
      ce !== null && (Be ? (e = ce, n = n.stateNode, e.nodeType === 8 ? ll(e.parentNode, n) : e.nodeType === 1 && ll(e, n), rr(e)) : ll(ce, n.stateNode));
      break;
    case 4:
      r = ce, a = Be, ce = n.stateNode.containerInfo, Be = !0, ft(e, t, n), ce = r, Be = a;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!ge && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        a = r = r.next;
        do {
          var o = a, s = o.destroy;
          o = o.tag, s !== void 0 && (o & 2 || o & 4) && io(n, t, s), a = a.next;
        } while (a !== r);
      }
      ft(e, t, n);
      break;
    case 1:
      if (!ge && (un(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (i) {
        re(n, t, i);
      }
      ft(e, t, n);
      break;
    case 21:
      ft(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (ge = (r = ge) || n.memoizedState !== null, ft(e, t, n), ge = r) : ft(e, t, n);
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
    n === null && (n = e.stateNode = new Cf()), t.forEach(function(r) {
      var a = If.bind(null, e, r);
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
            ce = i.stateNode, Be = !1;
            break e;
          case 3:
            ce = i.stateNode.containerInfo, Be = !0;
            break e;
          case 4:
            ce = i.stateNode.containerInfo, Be = !0;
            break e;
        }
        i = i.return;
      }
      if (ce === null) throw Error(C(160));
      Mc(o, s, a), ce = null, Be = !1;
      var u = a.alternate;
      u !== null && (u.return = null), a.return = null;
    } catch (d) {
      re(a, t, d);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Ac(t, e), t = t.sibling;
}
function Ac(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Ae(t, e), Ke(e), r & 4) {
        try {
          Gn(3, e, e.return), La(3, e);
        } catch (j) {
          re(e, e.return, j);
        }
        try {
          Gn(5, e, e.return);
        } catch (j) {
          re(e, e.return, j);
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
          re(e, e.return, j);
        }
      }
      if (r & 4 && (a = e.stateNode, a != null)) {
        var o = e.memoizedProps, s = n !== null ? n.memoizedProps : o, i = e.type, u = e.updateQueue;
        if (e.updateQueue = null, u !== null) try {
          i === "input" && o.type === "radio" && o.name != null && iu(a, o), Ol(i, s);
          var d = Ol(i, o);
          for (s = 0; s < u.length; s += 2) {
            var p = u[s], f = u[s + 1];
            p === "style" ? fu(a, f) : p === "dangerouslySetInnerHTML" ? du(a, f) : p === "children" ? Zn(a, f) : ko(a, p, f, d);
          }
          switch (i) {
            case "input":
              Tl(a, o);
              break;
            case "textarea":
              uu(a, o);
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
          re(e, e.return, j);
        }
      }
      break;
    case 6:
      if (Ae(t, e), Ke(e), r & 4) {
        if (e.stateNode === null) throw Error(C(162));
        a = e.stateNode, o = e.memoizedProps;
        try {
          a.nodeValue = o;
        } catch (j) {
          re(e, e.return, j);
        }
      }
      break;
    case 3:
      if (Ae(t, e), Ke(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        rr(t.containerInfo);
      } catch (j) {
        re(e, e.return, j);
      }
      break;
    case 4:
      Ae(t, e), Ke(e);
      break;
    case 13:
      Ae(t, e), Ke(e), a = e.child, a.flags & 8192 && (o = a.memoizedState !== null, a.stateNode.isHidden = o, !o || a.alternate !== null && a.alternate.memoizedState !== null || (as = ae())), r & 4 && mi(e);
      break;
    case 22:
      if (p = n !== null && n.memoizedState !== null, e.mode & 1 ? (ge = (d = ge) || p, Ae(t, e), ge = d) : Ae(t, e), Ke(e), r & 8192) {
        if (d = e.memoizedState !== null, (e.stateNode.isHidden = d) && !p && e.mode & 1) for ($ = e, p = e.child; p !== null; ) {
          for (f = $ = p; $ !== null; ) {
            switch (g = $, y = g.child, g.tag) {
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
                    re(r, n, j);
                  }
                }
                break;
              case 5:
                un(g, g.return);
                break;
              case 22:
                if (g.memoizedState !== null) {
                  vi(f);
                  continue;
                }
            }
            y !== null ? (y.return = g, $ = y) : vi(f);
          }
          p = p.sibling;
        }
        e: for (p = null, f = e; ; ) {
          if (f.tag === 5) {
            if (p === null) {
              p = f;
              try {
                a = f.stateNode, d ? (o = a.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (i = f.stateNode, u = f.memoizedProps.style, s = u != null && u.hasOwnProperty("display") ? u.display : null, i.style.display = pu("display", s));
              } catch (j) {
                re(e, e.return, j);
              }
            }
          } else if (f.tag === 6) {
            if (p === null) try {
              f.stateNode.nodeValue = d ? "" : f.memoizedProps;
            } catch (j) {
              re(e, e.return, j);
            }
          } else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === e) && f.child !== null) {
            f.child.return = f, f = f.child;
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            p === f && (p = null), f = f.return;
          }
          p === f && (p = null), f.sibling.return = f.return, f = f.sibling;
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
          if (Fc(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(C(160));
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
          throw Error(C(161));
      }
    } catch (u) {
      re(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function bf(e, t, n) {
  $ = e, Uc(e);
}
function Uc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; $ !== null; ) {
    var a = $, o = a.child;
    if (a.tag === 22 && r) {
      var s = a.memoizedState !== null || Ir;
      if (!s) {
        var i = a.alternate, u = i !== null && i.memoizedState !== null || ge;
        i = Ir;
        var d = ge;
        if (Ir = s, (ge = u) && !d) for ($ = a; $ !== null; ) s = $, u = s.child, s.tag === 22 && s.memoizedState !== null ? yi(a) : u !== null ? (u.return = s, $ = u) : yi(a);
        for (; o !== null; ) $ = o, Uc(o), o = o.sibling;
        $ = a, Ir = i, ge = d;
      }
      gi(e);
    } else a.subtreeFlags & 8772 && o !== null ? (o.return = a, $ = o) : gi(e);
  }
}
function gi(e) {
  for (; $ !== null; ) {
    var t = $;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            ge || La(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !ge) if (n === null) r.componentDidMount();
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
                var p = d.memoizedState;
                if (p !== null) {
                  var f = p.dehydrated;
                  f !== null && rr(f);
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
            throw Error(C(163));
        }
        ge || t.flags & 512 && uo(t);
      } catch (g) {
        re(t, t.return, g);
      }
    }
    if (t === e) {
      $ = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, $ = n;
      break;
    }
    $ = t.return;
  }
}
function vi(e) {
  for (; $ !== null; ) {
    var t = $;
    if (t === e) {
      $ = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, $ = n;
      break;
    }
    $ = t.return;
  }
}
function yi(e) {
  for (; $ !== null; ) {
    var t = $;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            La(4, t);
          } catch (u) {
            re(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var a = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              re(t, a, u);
            }
          }
          var o = t.return;
          try {
            uo(t);
          } catch (u) {
            re(t, o, u);
          }
          break;
        case 5:
          var s = t.return;
          try {
            uo(t);
          } catch (u) {
            re(t, s, u);
          }
      }
    } catch (u) {
      re(t, t.return, u);
    }
    if (t === e) {
      $ = null;
      break;
    }
    var i = t.sibling;
    if (i !== null) {
      i.return = t.return, $ = i;
      break;
    }
    $ = t.return;
  }
}
var Pf = Math.ceil, xa = pt.ReactCurrentDispatcher, ns = pt.ReactCurrentOwner, De = pt.ReactCurrentBatchConfig, H = 0, ue = null, le = null, de = 0, be = 0, cn = Rt(0), se = 0, hr = null, Ht = 0, Oa = 0, rs = 0, Yn = null, we = null, as = 0, kn = 1 / 0, rt = null, ja = !1, fo = null, kt = null, Dr = !1, xt = null, Sa = 0, Xn = 0, ho = null, Xr = -1, Jr = 0;
function xe() {
  return H & 6 ? ae() : Xr !== -1 ? Xr : Xr = ae();
}
function Ct(e) {
  return e.mode & 1 ? H & 2 && de !== 0 ? de & -de : pf.transition !== null ? (Jr === 0 && (Jr = ku()), Jr) : (e = q, e !== 0 || (e = window.event, e = e === void 0 ? 16 : zu(e.type)), e) : 1;
}
function qe(e, t, n, r) {
  if (50 < Xn) throw Xn = 0, ho = null, Error(C(185));
  gr(e, n, r), (!(H & 2) || e !== ue) && (e === ue && (!(H & 2) && (Oa |= n), se === 4 && vt(e, de)), Ce(e, r), n === 1 && H === 0 && !(t.mode & 1) && (kn = ae() + 500, Ra && zt()));
}
function Ce(e, t) {
  var n = e.callbackNode;
  dp(e, t);
  var r = aa(e, e === ue ? de : 0);
  if (r === 0) n !== null && Es(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Es(n), t === 1) e.tag === 0 ? df(xi.bind(null, e)) : Xu(xi.bind(null, e)), of(function() {
      !(H & 6) && zt();
    }), n = null;
    else {
      switch (Cu(r)) {
        case 1:
          n = To;
          break;
        case 4:
          n = _u;
          break;
        case 16:
          n = ra;
          break;
        case 536870912:
          n = Nu;
          break;
        default:
          n = ra;
      }
      n = Gc(n, Bc.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Bc(e, t) {
  if (Xr = -1, Jr = 0, H & 6) throw Error(C(327));
  var n = e.callbackNode;
  if (vn() && e.callbackNode !== n) return null;
  var r = aa(e, e === ue ? de : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = wa(e, r);
  else {
    t = r;
    var a = H;
    H |= 2;
    var o = Hc();
    (ue !== e || de !== t) && (rt = null, kn = ae() + 500, Mt(e, t));
    do
      try {
        zf();
        break;
      } catch (i) {
        Vc(e, i);
      }
    while (!0);
    Vo(), xa.current = o, H = a, le !== null ? t = 0 : (ue = null, de = 0, t = se);
  }
  if (t !== 0) {
    if (t === 2 && (a = Al(e), a !== 0 && (r = a, t = mo(e, a))), t === 1) throw n = hr, Mt(e, 0), vt(e, r), Ce(e, ae()), n;
    if (t === 6) vt(e, r);
    else {
      if (a = e.current.alternate, !(r & 30) && !Tf(a) && (t = wa(e, r), t === 2 && (o = Al(e), o !== 0 && (r = o, t = mo(e, o))), t === 1)) throw n = hr, Mt(e, 0), vt(e, r), Ce(e, ae()), n;
      switch (e.finishedWork = a, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(C(345));
        case 2:
          Ot(e, we, rt);
          break;
        case 3:
          if (vt(e, r), (r & 130023424) === r && (t = as + 500 - ae(), 10 < t)) {
            if (aa(e, 0) !== 0) break;
            if (a = e.suspendedLanes, (a & r) !== r) {
              xe(), e.pingedLanes |= e.suspendedLanes & a;
              break;
            }
            e.timeoutHandle = Kl(Ot.bind(null, e, we, rt), t);
            break;
          }
          Ot(e, we, rt);
          break;
        case 4:
          if (vt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, a = -1; 0 < r; ) {
            var s = 31 - He(r);
            o = 1 << s, s = t[s], s > a && (a = s), r &= ~o;
          }
          if (r = a, r = ae() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Pf(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Kl(Ot.bind(null, e, we, rt), r);
            break;
          }
          Ot(e, we, rt);
          break;
        case 5:
          Ot(e, we, rt);
          break;
        default:
          throw Error(C(329));
      }
    }
  }
  return Ce(e, ae()), e.callbackNode === n ? Bc.bind(null, e) : null;
}
function mo(e, t) {
  var n = Yn;
  return e.current.memoizedState.isDehydrated && (Mt(e, t).flags |= 256), e = wa(e, t), e !== 2 && (t = we, we = n, t !== null && go(t)), e;
}
function go(e) {
  we === null ? we = e : we.push.apply(we, e);
}
function Tf(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var a = n[r], o = a.getSnapshot;
        a = a.value;
        try {
          if (!Qe(o(), a)) return !1;
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
  for (t &= ~rs, t &= ~Oa, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - He(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function xi(e) {
  if (H & 6) throw Error(C(327));
  vn();
  var t = aa(e, 0);
  if (!(t & 1)) return Ce(e, ae()), null;
  var n = wa(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Al(e);
    r !== 0 && (t = r, n = mo(e, r));
  }
  if (n === 1) throw n = hr, Mt(e, 0), vt(e, t), Ce(e, ae()), n;
  if (n === 6) throw Error(C(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Ot(e, we, rt), Ce(e, ae()), null;
}
function ls(e, t) {
  var n = H;
  H |= 1;
  try {
    return e(t);
  } finally {
    H = n, H === 0 && (kn = ae() + 500, Ra && zt());
  }
}
function qt(e) {
  xt !== null && xt.tag === 0 && !(H & 6) && vn();
  var t = H;
  H |= 1;
  var n = De.transition, r = q;
  try {
    if (De.transition = null, q = 1, e) return e();
  } finally {
    q = r, De.transition = n, H = t, !(H & 6) && zt();
  }
}
function os() {
  be = cn.current, X(cn);
}
function Mt(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, lf(n)), le !== null) for (n = le.return; n !== null; ) {
    var r = n;
    switch (Ao(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && ua();
        break;
      case 3:
        _n(), X(Ne), X(ve), Go();
        break;
      case 5:
        Ko(r);
        break;
      case 4:
        _n();
        break;
      case 13:
        X(ee);
        break;
      case 19:
        X(ee);
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
  if (ue = e, le = e = Et(e.current, null), de = be = t, se = 0, hr = null, rs = Oa = Ht = 0, we = Yn = null, Dt !== null) {
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
function Vc(e, t) {
  do {
    var n = le;
    try {
      if (Vo(), Kr.current = ya, va) {
        for (var r = te.memoizedState; r !== null; ) {
          var a = r.queue;
          a !== null && (a.pending = null), r = r.next;
        }
        va = !1;
      }
      if (Vt = 0, ie = oe = te = null, Kn = !1, dr = 0, ns.current = null, n === null || n.return === null) {
        se = 1, hr = t, le = null;
        break;
      }
      e: {
        var o = e, s = n.return, i = n, u = t;
        if (t = de, i.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
          var d = u, p = i, f = p.tag;
          if (!(p.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var g = p.alternate;
            g ? (p.updateQueue = g.updateQueue, p.memoizedState = g.memoizedState, p.lanes = g.lanes) : (p.updateQueue = null, p.memoizedState = null);
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
            u = Error(C(426));
          }
        } else if (J && i.mode & 1) {
          var _ = oi(s);
          if (_ !== null) {
            !(_.flags & 65536) && (_.flags |= 256), si(_, s, i, o, t), Uo(Nn(u, i));
            break e;
          }
        }
        o = u = Nn(u, i), se !== 4 && (se = 2), Yn === null ? Yn = [o] : Yn.push(o), o = s;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, t &= -t, o.lanes |= t;
              var m = Cc(o, u, t);
              Zs(o, m);
              break e;
            case 1:
              i = u;
              var c = o.type, h = o.stateNode;
              if (!(o.flags & 128) && (typeof c.getDerivedStateFromError == "function" || h !== null && typeof h.componentDidCatch == "function" && (kt === null || !kt.has(h)))) {
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var w = Ec(o, i, t);
                Zs(o, w);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Qc(n);
    } catch (x) {
      t = x, le === n && n !== null && (le = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Hc() {
  var e = xa.current;
  return xa.current = ya, e === null ? ya : e;
}
function ss() {
  (se === 0 || se === 3 || se === 2) && (se = 4), ue === null || !(Ht & 268435455) && !(Oa & 268435455) || vt(ue, de);
}
function wa(e, t) {
  var n = H;
  H |= 2;
  var r = Hc();
  (ue !== e || de !== t) && (rt = null, Mt(e, t));
  do
    try {
      Rf();
      break;
    } catch (a) {
      Vc(e, a);
    }
  while (!0);
  if (Vo(), H = n, xa.current = r, le !== null) throw Error(C(261));
  return ue = null, de = 0, se;
}
function Rf() {
  for (; le !== null; ) qc(le);
}
function zf() {
  for (; le !== null && !np(); ) qc(le);
}
function qc(e) {
  var t = Kc(e.alternate, e, be);
  e.memoizedProps = e.pendingProps, t === null ? Qc(e) : le = t, ns.current = null;
}
function Qc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = kf(n, t), n !== null) {
        n.flags &= 32767, le = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        se = 6, le = null;
        return;
      }
    } else if (n = Nf(n, t, be), n !== null) {
      le = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      le = t;
      return;
    }
    le = t = e;
  } while (t !== null);
  se === 0 && (se = 5);
}
function Ot(e, t, n) {
  var r = q, a = De.transition;
  try {
    De.transition = null, q = 1, $f(e, t, n, r);
  } finally {
    De.transition = a, q = r;
  }
  return null;
}
function $f(e, t, n, r) {
  do
    vn();
  while (xt !== null);
  if (H & 6) throw Error(C(327));
  n = e.finishedWork;
  var a = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(C(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var o = n.lanes | n.childLanes;
  if (pp(e, o), e === ue && (le = ue = null, de = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Dr || (Dr = !0, Gc(ra, function() {
    return vn(), null;
  })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
    o = De.transition, De.transition = null;
    var s = q;
    q = 1;
    var i = H;
    H |= 4, ns.current = null, Ef(e, n), Ac(n, e), Jp(Ql), la = !!ql, Ql = ql = null, e.current = n, bf(n), rp(), H = i, q = s, De.transition = o;
  } else e.current = n;
  if (Dr && (Dr = !1, xt = e, Sa = a), o = e.pendingLanes, o === 0 && (kt = null), op(n.stateNode), Ce(e, ae()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) a = t[n], r(a.value, { componentStack: a.stack, digest: a.digest });
  if (ja) throw ja = !1, e = fo, fo = null, e;
  return Sa & 1 && e.tag !== 0 && vn(), o = e.pendingLanes, o & 1 ? e === ho ? Xn++ : (Xn = 0, ho = e) : Xn = 0, zt(), null;
}
function vn() {
  if (xt !== null) {
    var e = Cu(Sa), t = De.transition, n = q;
    try {
      if (De.transition = null, q = 16 > e ? 16 : e, xt === null) var r = !1;
      else {
        if (e = xt, xt = null, Sa = 0, H & 6) throw Error(C(331));
        var a = H;
        for (H |= 4, $ = e.current; $ !== null; ) {
          var o = $, s = o.child;
          if ($.flags & 16) {
            var i = o.deletions;
            if (i !== null) {
              for (var u = 0; u < i.length; u++) {
                var d = i[u];
                for ($ = d; $ !== null; ) {
                  var p = $;
                  switch (p.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Gn(8, p, o);
                  }
                  var f = p.child;
                  if (f !== null) f.return = p, $ = f;
                  else for (; $ !== null; ) {
                    p = $;
                    var g = p.sibling, y = p.return;
                    if (Dc(p), p === d) {
                      $ = null;
                      break;
                    }
                    if (g !== null) {
                      g.return = y, $ = g;
                      break;
                    }
                    $ = y;
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
              $ = o;
            }
          }
          if (o.subtreeFlags & 2064 && s !== null) s.return = o, $ = s;
          else e: for (; $ !== null; ) {
            if (o = $, o.flags & 2048) switch (o.tag) {
              case 0:
              case 11:
              case 15:
                Gn(9, o, o.return);
            }
            var m = o.sibling;
            if (m !== null) {
              m.return = o.return, $ = m;
              break e;
            }
            $ = o.return;
          }
        }
        var c = e.current;
        for ($ = c; $ !== null; ) {
          s = $;
          var h = s.child;
          if (s.subtreeFlags & 2064 && h !== null) h.return = s, $ = h;
          else e: for (s = c; $ !== null; ) {
            if (i = $, i.flags & 2048) try {
              switch (i.tag) {
                case 0:
                case 11:
                case 15:
                  La(9, i);
              }
            } catch (x) {
              re(i, i.return, x);
            }
            if (i === s) {
              $ = null;
              break e;
            }
            var w = i.sibling;
            if (w !== null) {
              w.return = i.return, $ = w;
              break e;
            }
            $ = i.return;
          }
        }
        if (H = a, zt(), Je && typeof Je.onPostCommitFiberRoot == "function") try {
          Je.onPostCommitFiberRoot(Ca, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      q = n, De.transition = t;
    }
  }
  return !1;
}
function ji(e, t, n) {
  t = Nn(n, t), t = Cc(e, t, 1), e = Nt(e, t, 1), t = xe(), e !== null && (gr(e, 1, t), Ce(e, t));
}
function re(e, t, n) {
  if (e.tag === 3) ji(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      ji(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (kt === null || !kt.has(r))) {
        e = Nn(n, e), e = Ec(t, e, 1), t = Nt(t, e, 1), e = xe(), t !== null && (gr(t, 1, e), Ce(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function Lf(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = xe(), e.pingedLanes |= e.suspendedLanes & n, ue === e && (de & n) === n && (se === 4 || se === 3 && (de & 130023424) === de && 500 > ae() - as ? Mt(e, 0) : rs |= n), Ce(e, t);
}
function Wc(e, t) {
  t === 0 && (e.mode & 1 ? (t = Er, Er <<= 1, !(Er & 130023424) && (Er = 4194304)) : t = 1);
  var n = xe();
  e = ct(e, t), e !== null && (gr(e, t, n), Ce(e, n));
}
function Of(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Wc(e, n);
}
function If(e, t) {
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
      throw Error(C(314));
  }
  r !== null && r.delete(t), Wc(e, n);
}
var Kc;
Kc = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Ne.current) _e = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return _e = !1, _f(e, t, n);
    _e = !!(e.flags & 131072);
  }
  else _e = !1, J && t.flags & 1048576 && Ju(t, pa, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Yr(e, t), e = t.pendingProps;
      var a = jn(t, ve.current);
      gn(t, n), a = Xo(null, t, r, e, a, n);
      var o = Jo();
      return t.flags |= 1, typeof a == "object" && a !== null && typeof a.render == "function" && a.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, ke(r) ? (o = !0, ca(t)) : o = !1, t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null, Qo(t), a.updater = $a, t.stateNode = a, a._reactInternals = t, to(t, r, e, n), t = ao(null, t, r, !0, o, n)) : (t.tag = 0, J && o && Mo(t), ye(null, t, a, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Yr(e, t), e = t.pendingProps, a = r._init, r = a(r._payload), t.type = r, a = t.tag = Ff(r), e = Ue(r, e), a) {
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
        throw Error(C(
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
        if (Rc(t), e === null) throw Error(C(387));
        r = t.pendingProps, o = t.memoizedState, a = o.element, ac(e, t), ma(t, r, null, n);
        var s = t.memoizedState;
        if (r = s.element, o.isDehydrated) if (o = { element: r, isDehydrated: !1, cache: s.cache, pendingSuspenseBoundaries: s.pendingSuspenseBoundaries, transitions: s.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
          a = Nn(Error(C(423)), t), t = di(e, t, r, n, a);
          break e;
        } else if (r !== a) {
          a = Nn(Error(C(424)), t), t = di(e, t, r, n, a);
          break e;
        } else for (Pe = _t(t.stateNode.containerInfo.firstChild), Te = t, J = !0, Ve = null, n = nc(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (Sn(), r === a) {
            t = dt(e, t, n);
            break e;
          }
          ye(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return lc(t), e === null && Jl(t), r = t.type, a = t.pendingProps, o = e !== null ? e.memoizedProps : null, s = a.children, Wl(r, a) ? s = null : o !== null && Wl(r, o) && (t.flags |= 32), Tc(e, t), ye(e, t, s, n), t.child;
    case 6:
      return e === null && Jl(t), null;
    case 13:
      return zc(e, t, n);
    case 4:
      return Wo(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = wn(t, null, r, n) : ye(e, t, r, n), t.child;
    case 11:
      return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : Ue(r, a), ii(e, t, r, a, n);
    case 7:
      return ye(e, t, t.pendingProps, n), t.child;
    case 8:
      return ye(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ye(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, a = t.pendingProps, o = t.memoizedProps, s = a.value, W(fa, r._currentValue), r._currentValue = s, o !== null) if (Qe(o.value, s)) {
          if (o.children === a.children && !Ne.current) {
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
                    var p = d.pending;
                    p === null ? u.next = u : (u.next = p.next, p.next = u), d.pending = u;
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
            if (s = o.return, s === null) throw Error(C(341));
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
        ye(e, t, a.children, n), t = t.child;
      }
      return t;
    case 9:
      return a = t.type, r = t.pendingProps.children, gn(t, n), a = Fe(a), r = r(a), t.flags |= 1, ye(e, t, r, n), t.child;
    case 14:
      return r = t.type, a = Ue(r, t.pendingProps), a = Ue(r.type, a), ui(e, t, r, a, n);
    case 15:
      return bc(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : Ue(r, a), Yr(e, t), t.tag = 1, ke(r) ? (e = !0, ca(t)) : e = !1, gn(t, n), kc(t, r, a), to(t, r, a, n), ao(null, t, r, !0, e, n);
    case 19:
      return $c(e, t, n);
    case 22:
      return Pc(e, t, n);
  }
  throw Error(C(156, t.tag));
};
function Gc(e, t) {
  return wu(e, t);
}
function Df(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Ie(e, t, n, r) {
  return new Df(e, t, n, r);
}
function is(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Ff(e) {
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
function Zr(e, t, n, r, a, o) {
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
    case lu:
      return Ia(n, a, o, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case ru:
          s = 10;
          break e;
        case au:
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
      throw Error(C(130, e == null ? e : typeof e, ""));
  }
  return t = Ie(s, n, t, a), t.elementType = e, t.type = r, t.lanes = o, t;
}
function At(e, t, n, r) {
  return e = Ie(7, e, r, t), e.lanes = n, e;
}
function Ia(e, t, n, r) {
  return e = Ie(22, e, r, t), e.elementType = lu, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function fl(e, t, n) {
  return e = Ie(6, e, null, t), e.lanes = n, e;
}
function hl(e, t, n) {
  return t = Ie(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Mf(e, t, n, r, a) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ka(0), this.expirationTimes = Ka(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ka(0), this.identifierPrefix = r, this.onRecoverableError = a, this.mutableSourceEagerHydrationData = null;
}
function us(e, t, n, r, a, o, s, i, u) {
  return e = new Mf(e, t, n, i, u), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = Ie(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Qo(o), e;
}
function Af(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Jt, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Yc(e) {
  if (!e) return Pt;
  e = e._reactInternals;
  e: {
    if (Wt(e) !== e || e.tag !== 1) throw Error(C(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (ke(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(C(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (ke(n)) return Yu(e, n, t);
  }
  return t;
}
function Xc(e, t, n, r, a, o, s, i, u) {
  return e = us(n, r, !0, e, a, o, s, i, u), e.context = Yc(null), n = e.current, r = xe(), a = Ct(n), o = st(r, a), o.callback = t ?? null, Nt(n, o, a), e.current.lanes = a, gr(e, a, r), Ce(e, r), e;
}
function Da(e, t, n, r) {
  var a = t.current, o = xe(), s = Ct(a);
  return n = Yc(n), t.context === null ? t.context = n : t.pendingContext = n, t = st(o, s), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Nt(a, t, s), e !== null && (qe(e, a, s, o), Wr(e, a, s)), s;
}
function _a(e) {
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
function Uf() {
  return null;
}
var Jc = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function ds(e) {
  this._internalRoot = e;
}
Fa.prototype.render = ds.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(C(409));
  Da(e, t, null, null);
};
Fa.prototype.unmount = ds.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    qt(function() {
      Da(null, e, null, null);
    }), t[ut] = null;
  }
};
function Fa(e) {
  this._internalRoot = e;
}
Fa.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Pu();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < gt.length && t !== 0 && t < gt[n].priority; n++) ;
    gt.splice(n, 0, e), n === 0 && Ru(e);
  }
};
function ps(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Ma(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function wi() {
}
function Bf(e, t, n, r, a) {
  if (a) {
    if (typeof r == "function") {
      var o = r;
      r = function() {
        var d = _a(s);
        o.call(d);
      };
    }
    var s = Xc(t, r, e, 0, null, !1, !1, "", wi);
    return e._reactRootContainer = s, e[ut] = s.current, or(e.nodeType === 8 ? e.parentNode : e), qt(), s;
  }
  for (; a = e.lastChild; ) e.removeChild(a);
  if (typeof r == "function") {
    var i = r;
    r = function() {
      var d = _a(u);
      i.call(d);
    };
  }
  var u = us(e, 0, !1, null, null, !1, !1, "", wi);
  return e._reactRootContainer = u, e[ut] = u.current, or(e.nodeType === 8 ? e.parentNode : e), qt(function() {
    Da(t, u, n, r);
  }), u;
}
function Aa(e, t, n, r, a) {
  var o = n._reactRootContainer;
  if (o) {
    var s = o;
    if (typeof a == "function") {
      var i = a;
      a = function() {
        var u = _a(s);
        i.call(u);
      };
    }
    Da(t, s, e, a);
  } else s = Bf(n, t, e, a, r);
  return _a(s);
}
Eu = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = An(t.pendingLanes);
        n !== 0 && (Ro(t, n | 1), Ce(t, ae()), !(H & 6) && (kn = ae() + 500, zt()));
      }
      break;
    case 13:
      qt(function() {
        var r = ct(e, 1);
        if (r !== null) {
          var a = xe();
          qe(r, e, 1, a);
        }
      }), cs(e, 1);
  }
};
zo = function(e) {
  if (e.tag === 13) {
    var t = ct(e, 134217728);
    if (t !== null) {
      var n = xe();
      qe(t, e, 134217728, n);
    }
    cs(e, 134217728);
  }
};
bu = function(e) {
  if (e.tag === 13) {
    var t = Ct(e), n = ct(e, t);
    if (n !== null) {
      var r = xe();
      qe(n, e, t, r);
    }
    cs(e, t);
  }
};
Pu = function() {
  return q;
};
Tu = function(e, t) {
  var n = q;
  try {
    return q = e, t();
  } finally {
    q = n;
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
            var a = Ta(r);
            if (!a) throw Error(C(90));
            su(r), Tl(r, a);
          }
        }
      }
      break;
    case "textarea":
      uu(e, n);
      break;
    case "select":
      t = n.value, t != null && pn(e, !!n.multiple, t, !1);
  }
};
gu = ls;
vu = qt;
var Vf = { usingClientEntryPoint: !1, Events: [yr, rn, Ta, hu, mu, ls] }, Dn = { findFiberByHostInstance: It, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Hf = { bundleType: Dn.bundleType, version: Dn.version, rendererPackageName: Dn.rendererPackageName, rendererConfig: Dn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: pt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = ju(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Dn.findFiberByHostInstance || Uf, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Fr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Fr.isDisabled && Fr.supportsFiber) try {
    Ca = Fr.inject(Hf), Je = Fr;
  } catch {
  }
}
ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Vf;
ze.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ps(t)) throw Error(C(200));
  return Af(e, t, null, n);
};
ze.createRoot = function(e, t) {
  if (!ps(e)) throw Error(C(299));
  var n = !1, r = "", a = Jc;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (a = t.onRecoverableError)), t = us(e, 1, !1, null, null, n, !1, r, a), e[ut] = t.current, or(e.nodeType === 8 ? e.parentNode : e), new ds(t);
};
ze.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(C(188)) : (e = Object.keys(e).join(","), Error(C(268, e)));
  return e = ju(t), e = e === null ? null : e.stateNode, e;
};
ze.flushSync = function(e) {
  return qt(e);
};
ze.hydrate = function(e, t, n) {
  if (!Ma(t)) throw Error(C(200));
  return Aa(null, e, t, !0, n);
};
ze.hydrateRoot = function(e, t, n) {
  if (!ps(e)) throw Error(C(405));
  var r = n != null && n.hydratedSources || null, a = !1, o = "", s = Jc;
  if (n != null && (n.unstable_strictMode === !0 && (a = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = Xc(t, null, e, 1, n ?? null, a, !1, o, s), e[ut] = t.current, or(e), r) for (e = 0; e < r.length; e++) n = r[e], a = n._getVersion, a = a(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, a] : t.mutableSourceEagerHydrationData.push(
    n,
    a
  );
  return new Fa(t);
};
ze.render = function(e, t, n) {
  if (!Ma(t)) throw Error(C(200));
  return Aa(null, e, t, !1, n);
};
ze.unmountComponentAtNode = function(e) {
  if (!Ma(e)) throw Error(C(40));
  return e._reactRootContainer ? (qt(function() {
    Aa(null, null, e, !1, function() {
      e._reactRootContainer = null, e[ut] = null;
    });
  }), !0) : !1;
};
ze.unstable_batchedUpdates = ls;
ze.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Ma(n)) throw Error(C(200));
  if (e == null || e._reactInternals === void 0) throw Error(C(38));
  return Aa(e, t, n, !1, r);
};
ze.version = "18.3.1-next-f1338f8080-20240426";
function Zc() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Zc);
    } catch (e) {
      console.error(e);
    }
}
Zc(), Zi.exports = ze;
var qf = Zi.exports, ed, _i = qf;
ed = _i.createRoot, _i.hydrateRoot;
function Qf(e) {
  return !e.product && !e.service ? {
    enabled: !1,
    reason: "Esta oportunidade ainda não está ligada a um produto ou serviço do portfólio; sem isso não é possível montar o business case."
  } : e.evidence.length === 0 ? {
    enabled: !1,
    reason: "Esta oportunidade ainda não tem evidências registradas; sem elas não é possível montar o business case."
  } : { enabled: !0, reason: null };
}
function Wf(e, t) {
  const n = e.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 40).replace(/-+$/, "") || "oportunidade", r = (a) => String(a).padStart(2, "0");
  return `business-case-${n}-${t.getFullYear()}-${r(t.getMonth() + 1)}-${r(t.getDate())}.pdf`;
}
function Kf(e) {
  return e === "ia" || e === "mista" || e === "deterministica" ? e : "desconhecida";
}
const Yt = "Rascunho para revisão do vendedor.";
function Gf(e, t) {
  return e === "ia" ? `Texto melhorado por IA. ${Yt}` : e === "mista" ? `Texto parcialmente melhorado por IA; o restante usa o texto padrão. ${Yt}` : e === "desconhecida" ? t ? `Business case baixado. Não foi possível confirmar se a IA foi usada. ${Yt}` : `Business case baixado. ${Yt}` : t ? `Texto padrão usado (IA indisponível). ${Yt}` : `Business case baixado. ${Yt}`;
}
const F = "/api/v1/modules/lead_tracker";
function td(e) {
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
async function M(e) {
  try {
    return (await e.json()).detail ?? "Falha ao processar a solicitação.";
  } catch {
    return "Falha ao processar a solicitação.";
  }
}
async function Yf(e, t) {
  const n = await fetch(`${F}/exports/pdf`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ rows: e.map(td), filters_summary: t })
  });
  if (!n.ok) throw new Error(await M(n));
  jr(await n.blob(), "oportunidades.pdf");
}
async function Xf(e) {
  const t = await fetch(`${F}/exports/excel`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ rows: e.map(td) })
  });
  if (!t.ok) throw new Error(await M(t));
  jr(await t.blob(), "oportunidades.xlsx");
}
async function Jf(e, t, n) {
  let r;
  try {
    r = await fetch(`${F}/exports/business-case`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ opportunity_id: e, usar_ia: t })
    });
  } catch (a) {
    throw a instanceof TypeError ? new Error("Não foi possível conectar ao módulo. Tente novamente.") : a;
  }
  if (!r.ok) throw new Error(await M(r));
  return jr(await r.blob(), Wf(n, /* @__PURE__ */ new Date())), { fonte: Kf(r.headers.get("X-Prosa-Fonte")) };
}
async function nd(e, t = null) {
  const n = await fetch(`${F}/email-draft`, {
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
  if (!n.ok) throw new Error(await M(n));
  return n.json();
}
async function Zf(e, t) {
  const n = await fetch(
    `${F}/opportunities/${e}/next-suggested-touch?rep_id=${encodeURIComponent(t)}`
  );
  if (!n.ok) throw new Error(await M(n));
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
async function eh(e, t, n, r, a, o = !1) {
  const s = await fetch(`${F}/opportunities/${e}/outreach-touches`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ rep_id: t, contact_id: a, channel: n, reason_label: r, acknowledge_block: o })
  });
  if (!s.ok) throw new Error(await M(s));
}
async function th(e) {
  const t = await fetch(`${F}/companies/${e}/do-not-contact`);
  if (!t.ok) throw new Error(await M(t));
  return t.json();
}
async function nh(e, t) {
  const n = await fetch(`${F}/companies/${e}/do-not-contact`, {
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
  if (!n.ok) throw new Error(await M(n));
  return n.json();
}
async function rh(e, t, n) {
  const r = await fetch(`${F}/do-not-contact/${e}/lift`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ rep_id: t, lift_reason: n.trim() || null })
  });
  if (!r.ok) throw new Error(await M(r));
  return r.json();
}
async function rd(e) {
  const t = await fetch(`${F}/companies/${e}/contacts`);
  if (!t.ok) throw new Error(await M(t));
  return t.json();
}
async function ah() {
  const e = await fetch(`${F}/settings`);
  if (!e.ok) throw new Error(await M(e));
  return e.json();
}
async function Ni(e, t, n) {
  const r = await fetch(`${F}/settings/${e}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ enabled: t, fields: n })
  });
  if (!r.ok) throw new Error(await M(r));
  return r.json();
}
async function ad() {
  const e = await fetch(`${F}/settings/ai`);
  if (!e.ok) throw new Error(await M(e));
  return e.json();
}
async function lh(e, t, n) {
  const r = await fetch(`${F}/settings/ai`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ provider: e, api_key: t, model: n })
  });
  if (!r.ok) throw new Error(await M(r));
  return r.json();
}
async function oh() {
  const e = await fetch(`${F}/settings/config/aging-sla-days`);
  if (!e.ok) throw new Error(await M(e));
  return e.json();
}
async function sh(e) {
  const t = await fetch(`${F}/settings/config/aging-sla-days`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ days: e })
  });
  if (!t.ok) throw new Error(await M(t));
  return t.json();
}
async function ih() {
  const e = await fetch(`${F}/settings/config/rep-category-min-sample`);
  if (!e.ok) throw new Error(await M(e));
  return e.json();
}
async function uh(e) {
  const t = await fetch(`${F}/settings/config/rep-category-min-sample`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ min_sample: e })
  });
  if (!t.ok) throw new Error(await M(t));
  return t.json();
}
async function ch() {
  const e = await fetch(`${F}/settings/config/geo-promotion`);
  if (!e.ok) throw new Error(await M(e));
  return e.json();
}
async function dh(e, t) {
  const n = await fetch(`${F}/settings/config/geo-promotion`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ min_score: e, daily_cap: t })
  });
  if (!n.ok) throw new Error(await M(n));
  return n.json();
}
async function ph(e) {
  const t = await fetch(`${F}/settings/${e}/test`, { method: "POST" });
  if (!t.ok) throw new Error(await M(t));
  return t.json();
}
function fh(e) {
  return e === null ? "baixa" : e >= 0.7 ? "alta" : e >= 0.4 ? "média" : "baixa";
}
function Ua(e) {
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
    priority: fh(e.opportunity_score),
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
    companyWebsite: e.company_website ?? null
  };
}
async function ld() {
  const e = await fetch(`${F}/opportunities`);
  if (!e.ok) throw new Error(await M(e));
  return (await e.json()).map(Ua);
}
async function hh(e, t, n = null) {
  const r = await fetch(`${F}/opportunities/${e}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      scope_note: t.scopeNote,
      criticality: t.criticality,
      severity_note: t.severityNote,
      rep_id: n || null
    })
  });
  if (!r.ok) throw new Error(await M(r));
  const a = await r.json();
  return Ua(a);
}
async function mh(e, t, n, r = null, a = null) {
  const o = await fetch(`${F}/opportunities/${e}/status`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ new_status: t, note: n, dismissal_reason: r, skip_discovery_reason: a })
  });
  if (!o.ok) throw new Error(await M(o));
  const s = await o.json();
  return Ua(s);
}
async function gh(e, t, n = null) {
  const r = await fetch(`${F}/opportunities/${e}/discovery`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      root_cause_stated: t.rootCauseStated,
      trigger_event: t.triggerEvent,
      champion_stake: t.championStake,
      rep_id: n || null
    })
  });
  if (!r.ok) throw new Error(await M(r));
  const a = await r.json();
  return Ua(a);
}
async function vh() {
  const e = await fetch(`${F}/field-conflicts`);
  if (!e.ok) throw new Error(await M(e));
  return e.json();
}
async function yh(e, t, n) {
  const r = await fetch(`${F}/field-conflicts/${e}/resolve`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chosen_source: t, rep_id: n || null })
  });
  if (!r.ok) throw new Error(await M(r));
}
async function xh(e) {
  const t = await fetch(`${F}/opportunities/${e}/audit`);
  if (!t.ok) throw new Error(await M(t));
  return t.json();
}
async function jh(e, t, n = null) {
  const r = await fetch(`${F}/companies/${e}/renewal-date`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ renewal_date: t, rep_id: n || null })
  });
  if (!r.ok) throw new Error(await M(r));
}
async function Sh() {
  const e = await fetch(`${F}/sync`, { method: "POST" });
  if (!e.ok) throw new Error(await M(e));
  return (await e.json()).map((n) => ({
    sourceId: n.source_id,
    companiesSynced: n.companies_synced,
    contactsSynced: n.contacts_synced,
    errors: n.errors
  }));
}
async function wh(e = "monthly") {
  const t = await fetch(`${F}/dashboard-metrics?period_type=${e}`);
  if (!t.ok) throw new Error(await M(t));
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
async function _h() {
  const e = await fetch(`${F}/dashboard-metrics/rep-category-reach`);
  if (!e.ok) throw new Error(await M(e));
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
function od(e) {
  return {
    referenceProductId: e.reference_product_id,
    placeCategory: e.place_category,
    companySizeHint: e.company_size_hint,
    radiusKm: e.radius_km,
    searchOriginAddress: e.search_origin_address
  };
}
async function Nh() {
  const e = await fetch(`${F}/icp-profile`);
  if (!e.ok) throw new Error(await M(e));
  return od(await e.json());
}
async function kh(e) {
  const t = await fetch(`${F}/icp-profile`, {
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
  if (!t.ok) throw new Error(await M(t));
  return od(await t.json());
}
async function Ch() {
  const e = await fetch(`${F}/icp-suggestion`);
  if (!e.ok) throw new Error(await M(e));
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
function Mr(e) {
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
async function Eh(e) {
  const t = await fetch(`${F}/geo-discovery/run`, {
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
  if (!t.ok) throw new Error(await M(t));
  const n = await t.json();
  return {
    promoted: n.promoted.map(Mr),
    deferred: n.deferred.map(Mr),
    rejected: n.rejected.map(Mr),
    alreadyKnown: (n.already_known ?? []).map(Mr)
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
function sd(e) {
  return [
    ...e.promoted.map((t) => ml(t, "Pronto para contato")),
    ...e.deferred.map((t) => ml(t, "Fila para amanhã")),
    ...e.rejected.map((t) => ml(t, "Fora do critério"))
  ];
}
async function bh(e, t) {
  const n = await fetch(`${F}/exports/pdf`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ rows: sd(e), filters_summary: t })
  });
  if (!n.ok) throw new Error(await M(n));
  jr(await n.blob(), "prospeccao-geografica.pdf");
}
async function Ph(e) {
  const t = await fetch(`${F}/exports/excel`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ rows: sd(e) })
  });
  if (!t.ok) throw new Error(await M(t));
  jr(await t.blob(), "prospeccao-geografica.xlsx");
}
async function Th() {
  const e = await fetch(`${F}/vendors`);
  if (!e.ok) throw new Error(await M(e));
  return e.json();
}
async function Rh(e) {
  const t = await fetch(`${F}/vendors`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e })
  });
  if (!t.ok) throw new Error(await M(t));
  return t.json();
}
async function id() {
  const e = await fetch(`${F}/products`);
  if (!e.ok) throw new Error(await M(e));
  return e.json();
}
async function zh(e, t, n) {
  const r = await fetch(`${F}/products`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ vendor_id: e, name: t, category: n || null })
  });
  if (!r.ok) throw new Error(await M(r));
  return r.json();
}
async function $h(e) {
  const t = await fetch(`${F}/products/${e}`, { method: "DELETE" });
  if (!t.ok) throw new Error(await M(t));
}
async function Lh() {
  const e = await fetch(`${F}/services`);
  if (!e.ok) throw new Error(await M(e));
  return e.json();
}
async function Oh(e, t) {
  const n = await fetch(`${F}/services`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e, category: t || null })
  });
  if (!n.ok) throw new Error(await M(n));
  return n.json();
}
async function Ih(e) {
  const t = await fetch(`${F}/services/${e}`, { method: "DELETE" });
  if (!t.ok) throw new Error(await M(t));
}
async function Dh() {
  const e = await fetch(`${F}/rules`);
  if (!e.ok) throw new Error(await M(e));
  return e.json();
}
async function Fh(e) {
  const t = await fetch(`${F}/rules`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  if (!t.ok) throw new Error(await M(t));
  return t.json();
}
async function Mh(e) {
  const t = await fetch(`${F}/rules/${e}`, { method: "DELETE" });
  if (!t.ok) throw new Error(await M(t));
}
async function Ah(e, t) {
  const n = new FormData();
  n.append("file", e), n.append("mode", t);
  const r = await fetch(`${F}/csv-import`, { method: "POST", body: n });
  if (!r.ok) throw new Error(await M(r));
  return r.json();
}
async function Uh(e, t) {
  const n = await fetch(`${F}/rep-targets?period_type=${e}&period_key=${encodeURIComponent(t)}`);
  if (!n.ok) throw new Error(await M(n));
  return n.json();
}
async function Bh(e) {
  const t = await fetch(`${F}/rep-targets`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  if (!t.ok) throw new Error(await M(t));
  return t.json();
}
async function Vh(e = !1) {
  const t = await fetch(`${F}/settings/salesforce/field-catalog?force_refresh=${e}`);
  if (!t.ok) throw new Error(await M(t));
  return (await t.json()).map((r) => ({
    sourceFieldApiName: r.source_field_api_name,
    sourceFieldLabel: r.source_field_label,
    fieldType: r.field_type,
    role: r.role,
    broken: r.broken,
    brokenMessage: r.broken_message
  }));
}
async function Hh(e, t, n) {
  const r = await fetch(`${F}/settings/salesforce/field-mapping`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ source_field_api_name: e, source_field_label: t, role: n })
  });
  if (!r.ok) throw new Error(await M(r));
  const a = await r.json();
  return { reassignedFromApiName: a.reassigned_from_api_name, reassignedFromLabel: a.reassigned_from_label };
}
async function qh(e) {
  const t = await fetch(`${F}/settings/salesforce/field-mapping/${encodeURIComponent(e)}`, {
    method: "DELETE"
  });
  if (!t.ok) throw new Error(await M(t));
}
const Qh = [
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
], Wh = [
  "#3987e5",
  "#d95926",
  "#199e70",
  "#c98500",
  "#d55181",
  "#008300",
  "#9085e9",
  "#e66767"
], Kh = "#2a78d6", Gh = "#3987e5", Yh = 8;
function Xh(e, t, n = Yh) {
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
function Ba() {
  const [e, t] = v.useState(ki);
  return v.useEffect(() => {
    const n = new MutationObserver(() => t(ki()));
    return n.observe(document.documentElement, { attributes: !0, attributeFilter: ["class"] }), n.observe(document.body, { attributes: !0, attributeFilter: ["class"] }), () => n.disconnect();
  }, []), e;
}
function Xt({ data: e, formatValue: t, emptyMessage: n }) {
  const { tooltip: r, setTooltip: a } = fs(), o = Ba() ? Gh : Kh;
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
const vo = 140, Na = 60, Jh = 22, Ci = vo / 2;
function Ei(e) {
  const t = (e - 90) * Math.PI / 180;
  return [Ci + Na * Math.cos(t), Ci + Na * Math.sin(t)];
}
function Zh(e, t) {
  const [n, r] = Ei(e), [a, o] = Ei(t), s = t - e > 180 ? 1 : 0;
  return `M ${n} ${r} A ${Na} ${Na} 0 ${s} 1 ${a} ${o}`;
}
function em({ data: e, emptyMessage: t }) {
  const { tooltip: n, setTooltip: r } = fs(), a = Ba() ? Wh : Qh;
  if (e.length === 0)
    return /* @__PURE__ */ l.jsx("p", { className: "lt-empty", role: "status", children: t });
  const o = Xh(e, (d) => d.label), s = o.reduce((d, p) => d + p.value, 0) || 1;
  let i = 0;
  const u = o.map((d, p) => {
    const f = i, g = d.value / s * 360;
    return i += g, { ...d, startAngle: f, endAngle: i, color: a[p % a.length] };
  });
  return /* @__PURE__ */ l.jsxs("div", { style: { display: "flex", gap: 16, alignItems: "center", position: "relative" }, children: [
    /* @__PURE__ */ l.jsx("svg", { width: vo, height: vo, role: "img", "aria-label": o.map((d) => `${d.label}: ${d.value}`).join("; "), children: u.map((d) => /* @__PURE__ */ l.jsx(
      "path",
      {
        d: Zh(d.startAngle, d.endAngle),
        fill: "none",
        stroke: d.color,
        strokeWidth: Jh,
        onMouseEnter: (p) => r({ x: p.clientX, y: p.clientY, label: d.label, value: `${d.value} (${Math.round(d.value / s * 100)}%)` }),
        onMouseMove: (p) => r({ x: p.clientX, y: p.clientY, label: d.label, value: `${d.value} (${Math.round(d.value / s * 100)}%)` }),
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
const tm = ["#5598e7", "#2a78d6", "#1c5cab", "#104281"], nm = ["#7db8f0", "#5598e7", "#2a78d6", "#1c5cab"];
function bi({ stages: e, counts: t }) {
  const { tooltip: n, setTooltip: r } = fs(), a = Ba() ? nm : tm, o = Math.max(...e.map((s) => t[s] ?? 0), 1);
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
            onMouseEnter: (p) => r({ x: p.clientX, y: p.clientY, label: s, value: String(u) }),
            onMouseMove: (p) => r({ x: p.clientX, y: p.clientY, label: s, value: String(u) }),
            onMouseLeave: () => r(null)
          }
        )
      ] }, s);
    }),
    /* @__PURE__ */ l.jsx(hs, { tooltip: n })
  ] });
}
function D({ text: e }) {
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
const rm = ["Detectadas", "Qualificadas", "Abordadas", "Em negociação"], yn = {
  detected: "Detectadas",
  qualified: "Qualificadas",
  reviewed: "Revisadas",
  contacted: "Abordadas",
  opportunity: "Em negociação"
}, ud = ["detected", "qualified", "reviewed", "contacted", "opportunity"], am = "contacted", vl = (e) => yn[e] ?? e, yl = (e, t, n) => e === 1 ? t : n;
function lm(e, t, n, r, a, o) {
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
  const i = ud.map((g) => `${vl(g)}: ${e.reachCounts[g] ?? 0}`).join(" · "), u = e.reachRatios[r];
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
  const d = e.reachCounts[r] ?? 0, p = e.n < a * 2, f = o === null ? "" : `Mediana do time nesta categoria: ${dn(o)}.`;
  return {
    kind: "value",
    text: dn(u),
    intensity: u,
    fragile: p,
    // Nome acessível começa pelo texto visível (SC 2.5.3 "label in name") e carrega o que o
    // tooltip diria — `title` sozinho não chega a teclado/toque.
    ariaLabel: `${dn(u)}: ${s}, ${d} de ${e.n} chegaram a ${vl(r)}${o === null ? "" : `, mediana do time ${dn(o)}`}${p ? ", amostra pequena" : ""}`,
    tooltip: [
      `${d} de ${e.n} chegaram a ${vl(r)} ou além.`,
      i,
      f,
      p ? "Amostra pequena: percentuais com n baixo oscilam muito." : ""
    ].filter(Boolean).join(`
`),
    opportunityIds: e.opportunityIds
  };
}
const cd = (e, t) => e.localeCompare(t, "pt-BR"), dd = (e) => [...new Set(e.cells.map((t) => t.repId))].sort(cd), pd = (e) => [...new Set(e.cells.map((t) => t.category))].sort(cd);
function om(e, t, n, r) {
  const a = dd(e).filter((f) => !n.has(f)), o = pd(e).filter((f) => !r.has(f)), s = new Map(e.cells.map((f) => [`${f.repId}\0${f.category}`, f])), i = o.map((f) => {
    var g;
    return ((g = e.teamMedian[f]) == null ? void 0 : g[t]) ?? null;
  }), u = a.map((f) => o.map((g, y) => lm(s.get(`${f}\0${g}`), f, g, t, e.minSample, i[y]))), d = u.flat().filter((f) => f.kind === "insufficient").length, p = `${a.length} ${yl(a.length, "representante", "representantes")}, ${o.length} ${yl(o.length, "categoria", "categorias")}, ${d} ${yl(d, "par sem dado suficiente", "pares sem dado suficiente")}`;
  return { reps: a, categories: o, rows: u, reference: i, summary: p };
}
const sm = [[236, 242, 251], [11, 61, 130]], im = [[38, 50, 66], [122, 182, 255]], um = (e, t, n) => [0, 1, 2].map((r) => Math.round(e[r] + (t[r] - e[r]) * n));
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
function cm(e, t) {
  const [n, r] = t ? im : sm, a = um(n, r, Math.min(1, Math.max(0, e))), o = Ti(a, [0, 0, 0]) >= Ti(a, [255, 255, 255]) ? [0, 0, 0] : [255, 255, 255];
  return { background: `rgb(${a.join(",")})`, color: `rgb(${o.join(",")})`, rgb: a };
}
const dm = "Retrato do momento, não taxa de conversão: mostra quantas oportunidades já chegaram a cada estágio, sem histórico de transição. Use para decidir o que perguntar ao rep, não para avaliá-lo.";
function Ri(e, t) {
  const n = new Set(e);
  return n.has(t) ? n.delete(t) : n.add(t), n;
}
function pm() {
  const e = Ba(), [t, n] = v.useState(null), [r, a] = v.useState(null), [o, s] = v.useState(am), [i, u] = v.useState(/* @__PURE__ */ new Set()), [d, p] = v.useState(/* @__PURE__ */ new Set()), [f, g] = v.useState(null), [y, S] = v.useState(null), [j, _] = v.useState(null), m = v.useRef(null), c = v.useRef(null), h = v.useRef(null), w = v.useCallback(() => {
    a(null), _h().then(n).catch((L) => a(L instanceof Error ? L.message : "Não consegui carregar o alcance por representante e categoria."));
  }, []);
  v.useEffect(w, [w]), v.useEffect(() => {
    var L;
    f && ((L = c.current) == null || L.focus());
  }, [f]);
  const x = v.useMemo(() => t ? om(t, o, i, d) : null, [t, o, i, d]), P = v.useCallback(() => {
    _(null), m.current || (m.current = ld()), m.current.then(S).catch((L) => {
      m.current = null, _(L instanceof Error ? L.message : "Não consegui carregar as oportunidades.");
    });
  }, []), R = (L, Z) => {
    h.current = Z, g(L), y || P();
  }, N = () => {
    var L;
    g(null), (L = h.current) == null || L.focus();
  };
  if (r)
    return /* @__PURE__ */ l.jsxs("div", { children: [
      /* @__PURE__ */ l.jsx("p", { className: "lt-alert", role: "alert", children: r }),
      /* @__PURE__ */ l.jsx("button", { type: "button", className: "lt-btn", onClick: w, children: "Tentar de novo" })
    ] });
  if (!t || !x) return /* @__PURE__ */ l.jsx("p", { className: "lt-empty", role: "status", children: "Carregando…" });
  if (t.cells.length === 0)
    return /* @__PURE__ */ l.jsx("p", { className: "lt-empty", role: "status", children: "Nenhuma oportunidade com representante atribuído ainda." });
  const z = yn[o] ?? o, b = f && !i.has(f.rep) && !d.has(f.category) ? f : null, B = b ? new Set(b.ids) : null, K = B && y ? y.filter((L) => B.has(L.id)) : [];
  return /* @__PURE__ */ l.jsxs("div", { className: "lt-matrix", children: [
    /* @__PURE__ */ l.jsx("p", { className: "lt-hint lt-matrix__warning", children: dm }),
    /* @__PURE__ */ l.jsxs("div", { className: "lt-toolbar lt-matrix__toolbar", children: [
      /* @__PURE__ */ l.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ l.jsx("span", { children: "Chegou a" }),
        /* @__PURE__ */ l.jsx("select", { value: o, onChange: (L) => s(L.target.value), children: ud.map((L) => /* @__PURE__ */ l.jsxs("option", { value: L, children: [
          yn[L] ?? L,
          " ou além"
        ] }, L)) })
      ] }),
      /* @__PURE__ */ l.jsx(zi, { label: "Representantes", options: dd(t), hidden: i, onToggle: (L) => u((Z) => Ri(Z, L)) }),
      /* @__PURE__ */ l.jsx(zi, { label: "Categorias", options: pd(t), hidden: d, onToggle: (L) => p((Z) => Ri(Z, L)) })
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
        z,
        " ou além"
      ] }),
      /* @__PURE__ */ l.jsx("thead", { children: /* @__PURE__ */ l.jsxs("tr", { children: [
        /* @__PURE__ */ l.jsx("th", { scope: "col", children: "Representante" }),
        x.categories.map((L) => /* @__PURE__ */ l.jsx("th", { scope: "col", children: L }, L))
      ] }) }),
      /* @__PURE__ */ l.jsx("tbody", { children: x.reps.map((L, Z) => /* @__PURE__ */ l.jsxs("tr", { children: [
        /* @__PURE__ */ l.jsx("th", { scope: "row", children: L }),
        x.rows[Z].map((Q, A) => {
          const G = x.categories[A];
          if (Q.kind === "none")
            return /* @__PURE__ */ l.jsxs("td", { className: "lt-matrix__cell lt-matrix__cell--none", children: [
              "—",
              /* @__PURE__ */ l.jsx("span", { className: "lt-sr-only", children: " sem oportunidades neste par" })
            ] }, G);
          const T = Q.intensity === null ? void 0 : cm(Q.intensity, e);
          return /* @__PURE__ */ l.jsx("td", { className: "lt-matrix__cell", children: /* @__PURE__ */ l.jsxs(
            "button",
            {
              type: "button",
              className: `lt-matrix__btn${Q.kind === "insufficient" ? " lt-matrix__btn--insufficient" : ""}${Q.kind === "value" && Q.intensity === 0 ? " lt-matrix__btn--zero" : ""}`,
              style: T ? { background: T.background, color: T.color } : void 0,
              title: Q.tooltip,
              "aria-label": Q.ariaLabel,
              onClick: (I) => R({ rep: L, category: G, ids: Q.opportunityIds, detail: Q.tooltip }, I.currentTarget),
              children: [
                Q.text,
                Q.fragile && /* @__PURE__ */ l.jsx("span", { "aria-hidden": "true", className: "lt-matrix__mark", children: "*" })
              ]
            }
          ) }, G);
        })
      ] }, L)) }),
      /* @__PURE__ */ l.jsx("tfoot", { children: /* @__PURE__ */ l.jsxs("tr", { children: [
        /* @__PURE__ */ l.jsx("th", { scope: "row", children: "Mediana do time" }),
        x.reference.map((L, Z) => /* @__PURE__ */ l.jsx("td", { className: "lt-matrix__ref", children: L === null ? "sem referência" : dn(L) }, x.categories[Z]))
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
    b && /* @__PURE__ */ l.jsxs("div", { className: "lt-matrix__deals", children: [
      /* @__PURE__ */ l.jsxs("div", { className: "lt-header-row", children: [
        /* @__PURE__ */ l.jsxs("h5", { ref: c, tabIndex: -1, children: [
          "Oportunidades de ",
          b.rep,
          " em ",
          b.category
        ] }),
        /* @__PURE__ */ l.jsx(D, { text: "Os deals por trás da célula: vale olhá-los um a um antes de tirar qualquer conclusão." }),
        /* @__PURE__ */ l.jsx("button", { type: "button", className: "lt-btn", onClick: N, children: "Fechar" })
      ] }),
      b.detail.split(`
`).map((L) => /* @__PURE__ */ l.jsx("p", { className: "lt-hint", children: L }, L)),
      j ? /* @__PURE__ */ l.jsxs("div", { children: [
        /* @__PURE__ */ l.jsx("p", { className: "lt-alert", role: "alert", children: j }),
        /* @__PURE__ */ l.jsx("button", { type: "button", className: "lt-btn", onClick: P, children: "Tentar de novo" })
      ] }) : y ? /* @__PURE__ */ l.jsxs("table", { className: "lt-table", "aria-label": `Oportunidades de ${b.rep} em ${b.category}`, children: [
        /* @__PURE__ */ l.jsx("thead", { children: /* @__PURE__ */ l.jsxs("tr", { children: [
          /* @__PURE__ */ l.jsx("th", { scope: "col", children: "Empresa" }),
          /* @__PURE__ */ l.jsx("th", { scope: "col", children: "Estágio" })
        ] }) }),
        /* @__PURE__ */ l.jsxs("tbody", { children: [
          K.map((L) => /* @__PURE__ */ l.jsxs("tr", { children: [
            /* @__PURE__ */ l.jsx("td", { children: L.companyName }),
            /* @__PURE__ */ l.jsx("td", { children: yn[L.status] ?? L.status })
          ] }, L.id)),
          K.length === 0 && /* @__PURE__ */ l.jsx("tr", { children: /* @__PURE__ */ l.jsx("td", { colSpan: 2, children: "Nenhuma oportunidade viva neste par agora." }) })
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
      n && /* @__PURE__ */ l.jsx(D, { text: n })
    ] }),
    /* @__PURE__ */ l.jsx("div", { className: "lt-stat-tile__label", children: e }),
    r === "attention" && a && /* @__PURE__ */ l.jsx("div", { className: "lt-stat-tile__action", children: a })
  ] });
}
function fm() {
  const [e, t] = v.useState("monthly"), [n, r] = v.useState(null), [a, o] = v.useState(null), [s, i] = v.useState(!0), [u, d] = v.useState(0);
  if (v.useEffect(() => {
    let y = !1;
    return o(null), i(!0), wh(e).then((S) => {
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
  const { kpis: p } = n, f = {};
  n.funnelReach.forEach((y) => {
    f[yn[y.stage] ?? y.stage] = y.reachCount;
  });
  const g = n.funnelReach.map((y) => yn[y.stage] ?? y.stage);
  return /* @__PURE__ */ l.jsxs("section", { className: "lt-dashboard", "aria-labelledby": "lt-dash-title", "aria-busy": s, children: [
    /* @__PURE__ */ l.jsxs("div", { className: "lt-header lt-header-row", children: [
      /* @__PURE__ */ l.jsx("h2", { id: "lt-dash-title", children: "Dashboard Executivo" }),
      /* @__PURE__ */ l.jsx(D, { text: "Visão consolidada — dado real da sua instalação." })
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
          value: nt(p.opportunitiesIdentified),
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
            value: tt(p.financialPotentialTotal),
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
            value: nt(p.customersAnalyzed),
            hint: "Empresas marcadas como cliente atual em pelo menos uma fonte."
          }
        ),
        /* @__PURE__ */ l.jsx(
          Ge,
          {
            label: "Prospects analisados",
            value: nt(p.prospectsAnalyzed),
            hint: "Empresas sem relação de cliente ainda, mas já mapeadas."
          }
        ),
        /* @__PURE__ */ l.jsx(
          Ge,
          {
            label: "Oportunidades de produto",
            value: nt(p.productOpportunities),
            hint: "Oportunidades associadas a um produto específico do portfólio."
          }
        ),
        /* @__PURE__ */ l.jsx(
          Ge,
          {
            label: "Oportunidades de serviço",
            value: nt(p.serviceOpportunities),
            hint: "Oportunidades associadas a um serviço específico do portfólio."
          }
        )
      ] }),
      /* @__PURE__ */ l.jsxs("div", { className: "lt-chart-grid", children: [
        /* @__PURE__ */ l.jsxs("div", { role: "group", className: "lt-chart-card lt-chart-card--wide", "aria-labelledby": "lt-chart-funnel", children: [
          /* @__PURE__ */ l.jsx("h4", { id: "lt-chart-funnel", children: "Funil de oportunidades" }),
          /* @__PURE__ */ l.jsx(bi, { stages: rm, counts: n.funnelCounts })
        ] }),
        /* @__PURE__ */ l.jsxs("div", { role: "group", className: "lt-chart-card lt-chart-card--wide", "aria-labelledby": "lt-chart-reach", children: [
          /* @__PURE__ */ l.jsxs("div", { className: "lt-header-row", children: [
            /* @__PURE__ */ l.jsx("h4", { id: "lt-chart-reach", children: "Alcance do funil" }),
            /* @__PURE__ */ l.jsx(D, { text: 'Quantas oportunidades já chegaram em cada etapa ou passaram dela, hoje — nunca "taxa de conversão" (o histórico completo de quando cada uma mudou de estágio ainda não é guardado, então não dá pra calcular uma taxa de coorte de verdade).' })
          ] }),
          /* @__PURE__ */ l.jsx(bi, { stages: g, counts: f })
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
                /* @__PURE__ */ l.jsx(D, { text: `Pipeline atual dividido pela meta cadastrada em Configurações pra ${n.coveragePeriodKey}. Sem meta definida pro representante, nunca mostra 0% — mostra "sem meta definida".` })
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
                /* @__PURE__ */ l.jsx(D, { text: "Quantas oportunidades de cada representante, em cada categoria do portfólio, já chegaram a cada estágio. É uma foto de hoje, sem histórico de transição." })
              ] }),
              /* @__PURE__ */ l.jsx(pm, {})
            ] })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ l.jsxs("details", { className: "lt-dash-more", children: [
      /* @__PURE__ */ l.jsx("summary", { children: "Mais detalhes e limitações" }),
      /* @__PURE__ */ l.jsx("div", { className: "lt-chart-grid", children: /* @__PURE__ */ l.jsxs("div", { role: "group", className: "lt-chart-card", "aria-labelledby": "lt-chart-vendor-donut", children: [
        /* @__PURE__ */ l.jsx("h4", { id: "lt-chart-vendor-donut", children: "Distribuição por fabricante" }),
        /* @__PURE__ */ l.jsx(em, { data: n.vendorDistribution, emptyMessage: "Sem oportunidades com fabricante identificado." })
      ] }) }),
      /* @__PURE__ */ l.jsxs("p", { className: "lt-hint", children: [
        "Fabricante principal: ",
        p.topVendor ?? "—",
        ". Serviço principal: ",
        p.topService ?? "—",
        "."
      ] }),
      /* @__PURE__ */ l.jsx("p", { className: "lt-hint", children: "Segmentação por região ainda fica de fora: exige dado de região vindo de uma fonte configurada (ex.: Google Maps). Tendência ao longo do tempo também não aparece: a tela mostra o estado de hoje, porque a evolução dia a dia ainda não é guardada." })
    ] })
  ] });
}
const hm = {
  client: "todos",
  product: "todos",
  service: "todos",
  source: "todos",
  minScore: 0
};
function xl(e) {
  return Array.from(new Set(e.filter((t) => !!t))).sort();
}
function mm({
  rows: e,
  value: t,
  onChange: n
}) {
  const r = xl(e.map((s) => s.product)), a = xl(e.map((s) => s.service)), o = xl(e.flatMap((s) => s.sources.map((i) => i.type)));
  return /* @__PURE__ */ l.jsxs("div", { className: "lt-filters", role: "group", "aria-label": "Filtros de oportunidades", children: [
    /* @__PURE__ */ l.jsxs("label", { htmlFor: "lt-filter-client", className: "lt-field", children: [
      /* @__PURE__ */ l.jsxs("span", { children: [
        "Cliente ",
        /* @__PURE__ */ l.jsx(D, { text: "Filtra pela relação da empresa: cliente atual ou prospect ainda sem venda." })
      ] }),
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
      )
    ] }),
    /* @__PURE__ */ l.jsxs("label", { htmlFor: "lt-filter-product", className: "lt-field", children: [
      /* @__PURE__ */ l.jsxs("span", { children: [
        "Produto ",
        /* @__PURE__ */ l.jsx(D, { text: "Mostra só oportunidades associadas a esse produto do portfólio." })
      ] }),
      /* @__PURE__ */ l.jsxs("select", { id: "lt-filter-product", value: t.product, onChange: (s) => n({ ...t, product: s.target.value }), children: [
        /* @__PURE__ */ l.jsx("option", { value: "todos", children: "Todos" }),
        r.map((s) => /* @__PURE__ */ l.jsx("option", { value: s, children: s }, s))
      ] })
    ] }),
    /* @__PURE__ */ l.jsxs("label", { htmlFor: "lt-filter-service", className: "lt-field", children: [
      /* @__PURE__ */ l.jsxs("span", { children: [
        "Serviço ",
        /* @__PURE__ */ l.jsx(D, { text: "Mostra só oportunidades associadas a esse serviço do portfólio." })
      ] }),
      /* @__PURE__ */ l.jsxs("select", { id: "lt-filter-service", value: t.service, onChange: (s) => n({ ...t, service: s.target.value }), children: [
        /* @__PURE__ */ l.jsx("option", { value: "todos", children: "Todos" }),
        a.map((s) => /* @__PURE__ */ l.jsx("option", { value: s, children: s }, s))
      ] })
    ] }),
    /* @__PURE__ */ l.jsxs("label", { htmlFor: "lt-filter-source", className: "lt-field", children: [
      /* @__PURE__ */ l.jsxs("span", { children: [
        "Fonte ",
        /* @__PURE__ */ l.jsx(D, { text: "Mostra só oportunidades com evidência vinda dessa fonte de dados." })
      ] }),
      /* @__PURE__ */ l.jsxs("select", { id: "lt-filter-source", value: t.source, onChange: (s) => n({ ...t, source: s.target.value }), children: [
        /* @__PURE__ */ l.jsx("option", { value: "todos", children: "Todas" }),
        o.map((s) => /* @__PURE__ */ l.jsx("option", { value: s, children: s }, s))
      ] })
    ] }),
    /* @__PURE__ */ l.jsxs("label", { htmlFor: "lt-filter-score", className: "lt-field", children: [
      /* @__PURE__ */ l.jsxs("span", { children: [
        "Score mínimo ",
        /* @__PURE__ */ l.jsx(D, { text: "De 0.0 a 1.0 — esconde oportunidades com aderência abaixo desse valor." })
      ] }),
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
      )
    ] })
  ] });
}
function gm(e) {
  const t = [];
  return e.client !== "todos" && t.push(e.client === "clientes" ? "clientes atuais" : "prospects"), e.product !== "todos" && t.push(`produto: ${e.product}`), e.service !== "todos" && t.push(`serviço: ${e.service}`), e.source !== "todos" && t.push(`fonte: ${e.source}`), e.minScore > 0 && t.push(`score mínimo: ${e.minScore}`), t.length > 0 ? t.join(", ") : "sem filtro";
}
function vm(e, t) {
  return e.filter((n) => !(t.client === "clientes" && !n.isCustomer || t.client === "prospects" && n.isCustomer || t.product !== "todos" && n.product !== t.product || t.service !== "todos" && n.service !== t.service || t.source !== "todos" && !n.sources.some((r) => r.type === t.source) || (n.opportunityScore ?? 0) < t.minScore));
}
const ym = {
  promoted: "Pronto para contato",
  deferred: "Fila para amanhã",
  rejected: "Fora do critério"
};
function jl({ item: e, group: t }) {
  return /* @__PURE__ */ l.jsxs("div", { className: "lt-source-card", children: [
    /* @__PURE__ */ l.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "baseline" }, children: [
      /* @__PURE__ */ l.jsx("strong", { children: e.name }),
      /* @__PURE__ */ l.jsx("span", { className: `lt-badge lt-badge--discovery-${t}`, children: ym[t] })
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
function xm() {
  const [e, t] = v.useState(1), [n, r] = v.useState([]), [a, o] = v.useState(void 0), [s, i] = v.useState(null), [u, d] = v.useState(""), [p, f] = v.useState(""), [g, y] = v.useState(""), [S, j] = v.useState(15), [_, m] = v.useState(""), [c, h] = v.useState(""), [w, x] = v.useState(!1), [P, R] = v.useState(null), [N, z] = v.useState(null), [b, B] = v.useState(!1), [K, L] = v.useState(null), [Z, Q] = v.useState(null);
  v.useEffect(() => {
    Promise.all([id(), Nh()]).then(([E, U]) => {
      r(E), U.searchOriginAddress && y(U.searchOriginAddress), U.radiusKm && j(U.radiusKm), U.referenceProductId && f(U.referenceProductId);
    }).catch((E) => i(E instanceof Error ? E.message : "Não consegui carregar os dados iniciais."));
  }, []);
  const A = () => {
    t(3), a === void 0 && Ch().then((E) => {
      o(E), E && (m((U) => U || E.industryHint || ""), h((U) => U || E.companySizeHint || ""));
    }).catch(() => o(null));
  }, G = async () => {
    x(!0), R(null);
    try {
      await kh({
        referenceProductId: p || null,
        placeCategory: _ || null,
        companySizeHint: c || null,
        radiusKm: S,
        searchOriginAddress: g
      });
      const E = await Eh({
        repId: u,
        referenceProductId: p || null,
        searchOriginAddress: g,
        radiusKm: S,
        placeCategory: _ || null,
        companySizeHint: c || null
      });
      z(E);
    } catch (E) {
      R(E instanceof Error ? E.message : "Não conseguimos completar a busca agora.");
    } finally {
      x(!1);
    }
  }, T = () => {
    z(null), R(null), B(!1), Q(null), t(1);
  }, I = async (E) => {
    if (!N) return;
    L(E), Q(null);
    const U = `Prospecção geográfica — raio ${S}km, ${_ || "sem categoria"}`;
    try {
      E === "pdf" ? await bh(N, U) : await Ph(N);
    } catch (k) {
      Q(k instanceof Error ? k.message : "Falha ao exportar.");
    } finally {
      L(null);
    }
  };
  return s ? /* @__PURE__ */ l.jsx("p", { className: "lt-alert", role: "alert", children: s }) : N ? /* @__PURE__ */ l.jsxs("div", { className: "lt-dashboard", children: [
    /* @__PURE__ */ l.jsx("div", { className: "lt-header", children: /* @__PURE__ */ l.jsx("h2", { children: "Resultado da busca" }) }),
    /* @__PURE__ */ l.jsxs("div", { className: "lt-toolbar", children: [
      /* @__PURE__ */ l.jsx("button", { type: "button", className: "lt-btn", onClick: () => I("pdf"), disabled: K !== null, "aria-busy": K === "pdf", children: K === "pdf" ? "Gerando PDF…" : "PDF" }),
      /* @__PURE__ */ l.jsx("button", { type: "button", className: "lt-btn", onClick: () => I("excel"), disabled: K !== null, "aria-busy": K === "excel", children: K === "excel" ? "Gerando Excel…" : "Excel" })
    ] }),
    Z && /* @__PURE__ */ l.jsx("p", { className: "lt-alert", role: "alert", children: Z }),
    /* @__PURE__ */ l.jsxs("div", { className: "lt-stat-grid", children: [
      /* @__PURE__ */ l.jsxs("div", { className: "lt-stat-tile", children: [
        /* @__PURE__ */ l.jsx("div", { className: "lt-stat-tile__value", children: N.promoted.length }),
        /* @__PURE__ */ l.jsx("div", { className: "lt-stat-tile__label", children: "Prontos para contato" }),
        /* @__PURE__ */ l.jsx("div", { className: "lt-stat-tile__hint", children: "Passaram no critério e já estão na sua lista de oportunidades." })
      ] }),
      N.deferred.length > 0 && /* @__PURE__ */ l.jsxs("div", { className: "lt-stat-tile", children: [
        /* @__PURE__ */ l.jsx("div", { className: "lt-stat-tile__value", children: N.deferred.length }),
        /* @__PURE__ */ l.jsx("div", { className: "lt-stat-tile__label", children: "Na fila para amanhã" }),
        /* @__PURE__ */ l.jsx("div", { className: "lt-stat-tile__hint", children: "Encontramos mais oportunidades boas do que a cota diária de hoje. Elas entram automaticamente na lista amanhã, sem precisar buscar de novo." })
      ] })
    ] }),
    N.alreadyKnown.length > 0 && /* @__PURE__ */ l.jsxs("p", { className: "lt-hint", children: [
      N.alreadyKnown.length,
      " ",
      N.alreadyKnown.length === 1 ? "lugar já estava" : "lugares já estavam",
      " na sua base e não ",
      N.alreadyKnown.length === 1 ? "foi" : "foram",
      " duplicado",
      N.alreadyKnown.length === 1 ? "" : "s",
      "."
    ] }),
    N.promoted.length > 0 && /* @__PURE__ */ l.jsx("div", { className: "lt-source-grid", children: N.promoted.map((E) => /* @__PURE__ */ l.jsx(jl, { item: E, group: "promoted" }, E.placeId)) }),
    N.deferred.length > 0 && /* @__PURE__ */ l.jsx("div", { className: "lt-source-grid", children: N.deferred.map((E) => /* @__PURE__ */ l.jsx(jl, { item: E, group: "deferred" }, E.placeId)) }),
    N.rejected.length > 0 && /* @__PURE__ */ l.jsx("div", { className: "lt-detail-actions", children: /* @__PURE__ */ l.jsxs("button", { type: "button", className: "lt-btn", onClick: () => B((E) => !E), children: [
      b ? "Ocultar" : "Ver",
      " todos os resultados da busca (",
      N.rejected.length,
      " fora do critério)"
    ] }) }),
    b && N.rejected.length > 0 && /* @__PURE__ */ l.jsx("div", { className: "lt-source-grid", children: N.rejected.map((E) => /* @__PURE__ */ l.jsx(jl, { item: E, group: "rejected" }, E.placeId)) }),
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
        /* @__PURE__ */ l.jsxs("span", { children: [
          "Buscar prospecção para (representante) ",
          /* @__PURE__ */ l.jsx(D, { text: "Quem vai receber as oportunidades descobertas nessa busca." })
        ] }),
        /* @__PURE__ */ l.jsx("input", { value: u, onChange: (E) => d(E.target.value), placeholder: "Id ou nome do representante" })
      ] }),
      /* @__PURE__ */ l.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ l.jsxs("span", { children: [
          "A partir de qual produto ou serviço? ",
          /* @__PURE__ */ l.jsx(D, { text: "Usa clientes satisfeitos com esse item pra sugerir categoria e porte no passo 3." })
        ] }),
        /* @__PURE__ */ l.jsxs("select", { value: p, onChange: (E) => f(E.target.value), children: [
          /* @__PURE__ */ l.jsx("option", { value: "", children: "Nenhum em particular" }),
          n.map((E) => /* @__PURE__ */ l.jsx("option", { value: E.id, children: E.name }, E.id))
        ] })
      ] }),
      /* @__PURE__ */ l.jsx("div", { className: "lt-detail-actions", children: /* @__PURE__ */ l.jsx("button", { type: "button", className: "lt-btn", onClick: () => t(2), disabled: !u.trim(), children: "Avançar" }) })
    ] }),
    e === 2 && /* @__PURE__ */ l.jsxs("div", { className: "lt-source-card__form", children: [
      /* @__PURE__ */ l.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ l.jsxs("span", { children: [
          "Endereço de origem da busca ",
          /* @__PURE__ */ l.jsx(D, { text: "Ponto central da busca geográfica." })
        ] }),
        /* @__PURE__ */ l.jsx(
          "input",
          {
            value: g,
            onChange: (E) => y(E.target.value),
            placeholder: "Rua, número, cidade"
          }
        )
      ] }),
      /* @__PURE__ */ l.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ l.jsxs("span", { children: [
          "Raio de busca: ",
          S,
          " km ",
          /* @__PURE__ */ l.jsx(D, { text: "Distância máxima do endereço de origem pra considerar uma empresa candidata." })
        ] }),
        /* @__PURE__ */ l.jsx("input", { type: "range", min: 1, max: 50, value: S, onChange: (E) => j(Number(E.target.value)) })
      ] }),
      /* @__PURE__ */ l.jsxs("div", { className: "lt-detail-actions", children: [
        /* @__PURE__ */ l.jsx("button", { type: "button", className: "lt-btn", onClick: () => t(1), children: "Voltar" }),
        /* @__PURE__ */ l.jsx("button", { type: "button", className: "lt-btn", onClick: A, disabled: !g.trim(), children: "Avançar" })
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
        /* @__PURE__ */ l.jsxs("span", { children: [
          "Categoria (Google Places) ",
          /* @__PURE__ */ l.jsx(D, { text: "Tipo de estabelecimento no Google Places usado como filtro da busca — precisa ser exatamente um dos valores da tabela oficial de tipos da Places API (em inglês, ex.: accounting, lawyer, real_estate_agency)." })
        ] }),
        /* @__PURE__ */ l.jsx("input", { value: _, onChange: (E) => m(E.target.value), placeholder: "ex.: car_dealer" }),
        /* @__PURE__ */ l.jsx(
          "a",
          {
            href: "https://developers.google.com/maps/documentation/places/web-service/place-types",
            target: "_blank",
            rel: "noopener noreferrer",
            children: "Ver tabela oficial de tipos"
          }
        )
      ] }),
      /* @__PURE__ */ l.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ l.jsxs("span", { children: [
          "Porte-alvo ",
          /* @__PURE__ */ l.jsx(D, { text: "Descrição livre do porte de empresa procurado — só orienta a triagem, não filtra sozinho." })
        ] }),
        /* @__PURE__ */ l.jsx("input", { value: c, onChange: (E) => h(E.target.value), placeholder: "ex.: média" })
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
      P && /* @__PURE__ */ l.jsxs("p", { className: "lt-alert", role: "alert", children: [
        "Não conseguimos completar a busca agora. Isso não é um problema com os seus critérios — pode ser uma instabilidade temporária. ",
        P
      ] }),
      /* @__PURE__ */ l.jsxs("div", { className: "lt-detail-actions", children: [
        /* @__PURE__ */ l.jsx("button", { type: "button", className: "lt-btn", onClick: () => t(3), disabled: w, children: "Voltar" }),
        /* @__PURE__ */ l.jsx("button", { type: "button", className: "lt-btn", onClick: G, disabled: w, "aria-busy": w, children: w ? "Buscando…" : "Buscar agora" })
      ] })
    ] })
  ] });
}
const fd = [
  { value: "isolado", label: "Isolado (poucas licenças/sistemas)" },
  { value: "parcial", label: "Parcial (parte relevante do parque)" },
  { value: "generalizado", label: "Generalizado (maior parte do parque)" }
], hd = [
  { value: "nao_critico", label: "Não crítico (impacto operacional baixo)" },
  { value: "critico_interno", label: "Crítico interno (grave, não visível ao cliente)" },
  { value: "critico_exposto", label: "Crítico e exposto (produção/cliente-facing)" }
], jm = {
  baixo: "Baixo",
  medio: "Médio",
  alto: "Alto",
  critico: "Crítico",
  nao_avaliado: "Não avaliado"
}, Sm = {
  verde: "Saudável",
  amarela: "Atenção",
  vermelha: "Crítica",
  dados_insuficientes: "Dados insuficientes"
}, wm = {
  imediata: "revisão imediata — saúde da conta em estado crítico",
  revisao_de_risco: "saúde comprometida, sem renovação próxima o bastante pra justificar revisão imediata",
  revisao_antes_da_renovacao: "renovação próxima e a saúde não está em verde — vale revisar antes de decidir",
  revisao_de_acompanhamento: "acompanhamento de rotina, saúde em atenção",
  revisao_de_rotina: "nenhum sinal de urgência — cadência de rotina",
  alinhada_a_renovacao: "conta saudável — revisão alinhada à data de renovação"
};
function $i(e) {
  return e && /^https?:\/\//i.test(e) ? e : null;
}
function _m(e) {
  return e.replace(/^https?:\/\//i, "").replace(/^www\./i, "").replace(/\/$/, "");
}
function Nm(e) {
  return e ? e.slice(0, 10) : "";
}
const Li = [
  { value: "no_evidence", label: "Sem evidência suficiente" },
  { value: "not_fit", label: "Sem fit técnico/comercial" },
  { value: "not_qualified", label: "Cliente não qualificado" },
  { value: "false_positive", label: "Falso positivo da regra" },
  { value: "other", label: "Outro (detalhar na observação)" }
], km = [
  { value: "detected", label: "Detectada" },
  { value: "qualified", label: "Qualificada" },
  { value: "reviewed", label: "Revisada" },
  { value: "contacted", label: "Contatada" },
  { value: "opportunity", label: "Oportunidade" },
  { value: "dismissed", label: "Descartada" }
], Oi = ["detected", "qualified", "reviewed", "contacted", "opportunity"];
function Ii(e, t) {
  if (e === t) return !1;
  if (e === "dismissed") return t !== "dismissed";
  const n = Oi.indexOf(e), r = Oi.indexOf(t);
  return n === -1 || r === -1 ? !1 : r - n >= 2;
}
function Cm({ row: e, onUpdated: t }) {
  var w;
  const [n, r] = v.useState(null), [a, o] = v.useState(""), [s, i] = v.useState(""), [u, d] = v.useState(""), [p, f] = v.useState(!1), [g, y] = v.useState(null), S = e.status === "detected" && n !== null && n !== "dismissed", j = n !== null && Ii(e.status, n), _ = n === "dismissed", m = j || _ || S, c = async (x, P, R) => {
    f(!0), y(null);
    try {
      const N = await mh(e.id, x, P, R, u.trim() || null);
      t(N), r(null), o(""), i(""), d("");
    } catch (N) {
      y(N instanceof Error ? N.message : "Falha ao mudar o status.");
    } finally {
      f(!1);
    }
  }, h = (x) => {
    if (y(null), x === e.status) {
      r(null);
      return;
    }
    r(x), x !== "dismissed" && e.status !== "detected" && !Ii(e.status, x) && c(x, null, null);
  };
  return /* @__PURE__ */ l.jsxs("div", { className: "lt-severity", children: [
    /* @__PURE__ */ l.jsxs("label", { className: "lt-field", children: [
      /* @__PURE__ */ l.jsxs("span", { children: [
        "Status ",
        /* @__PURE__ */ l.jsx(D, { text: "Etapa atual no funil — detectada → qualificada → revisada → contatada → oportunidade." })
      ] }),
      /* @__PURE__ */ l.jsx("select", { value: n ?? e.status, onChange: (x) => h(x.target.value), disabled: p, children: km.map((x) => /* @__PURE__ */ l.jsx("option", { value: x.value, children: x.label }, x.value)) })
    ] }),
    e.status === "dismissed" && n === null && e.dismissalReason && /* @__PURE__ */ l.jsxs("p", { className: "lt-hint", children: [
      "Motivo do descarte: ",
      ((w = Li.find((x) => x.value === e.dismissalReason)) == null ? void 0 : w.label) ?? e.dismissalReason
    ] }),
    _ && /* @__PURE__ */ l.jsxs("label", { className: "lt-field", children: [
      /* @__PURE__ */ l.jsxs("span", { children: [
        "Motivo do descarte ",
        /* @__PURE__ */ l.jsx(D, { text: "Obrigatório pra descartar — fica registrado no histórico da oportunidade." })
      ] }),
      /* @__PURE__ */ l.jsxs("select", { value: s, onChange: (x) => i(x.target.value), children: [
        /* @__PURE__ */ l.jsx("option", { value: "", children: "Selecione um motivo" }),
        Li.map((x) => /* @__PURE__ */ l.jsx("option", { value: x.value, children: x.label }, x.value))
      ] })
    ] }),
    j && /* @__PURE__ */ l.jsxs("label", { className: "lt-field", children: [
      /* @__PURE__ */ l.jsxs("span", { children: [
        "Justificativa (pulou etapas ou reabriu uma oportunidade descartada) ",
        /* @__PURE__ */ l.jsx(D, { text: "Explica por que a mudança fugiu do fluxo normal — fica registrada no histórico." })
      ] }),
      /* @__PURE__ */ l.jsx("textarea", { value: a, onChange: (x) => o(x.target.value) })
    ] }),
    S && /* @__PURE__ */ l.jsxs("label", { className: "lt-field", children: [
      /* @__PURE__ */ l.jsxs("span", { children: [
        "Qualificar sem discovery (opcional) ",
        /* @__PURE__ */ l.jsx(D, { text: 'Só se não der pra preencher a discovery acima — a justificativa fica registrada e a oportunidade aparece como "sem discovery".' })
      ] }),
      /* @__PURE__ */ l.jsx("textarea", { value: u, onChange: (x) => d(x.target.value) })
    ] }),
    m && /* @__PURE__ */ l.jsx(
      "button",
      {
        type: "button",
        className: "lt-btn",
        onClick: () => c(n, a || null, s || null),
        disabled: p || j && !a.trim() || _ && !s,
        children: "Confirmar mudança"
      }
    ),
    g && /* @__PURE__ */ l.jsx("p", { className: "lt-alert", role: "alert", children: g })
  ] });
}
const Em = { alta: 3, média: 2, baixa: 1 };
function bm(e, t, n) {
  const r = n === "asc" ? 1 : -1, a = (o) => {
    switch (t) {
      case "score":
        return o.opportunityScore ?? -1;
      case "potencial":
        return o.financialPotential ?? -1;
      case "prioridade":
        return Em[o.priority];
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
const Pm = [
  { key: "rootCauseStated", label: "Por que isso acontece hoje?", help: "Com as palavras do cliente. Não o sintoma ('é lento'), mas a causa ('a plataforma não escala')." },
  { key: "triggerEvent", label: "Por que agora?", help: "O que mudou que torna isto prioridade neste trimestre? Auditoria, contrato vencendo, incidente, crescimento." },
  { key: "championStake", label: "O que o seu contato ganha ou perde com isso?", help: "O que está em jogo para essa pessoa: uma meta, uma apresentação, a reputação dela?" }
];
function Tm({ row: e, repId: t, onUpdated: n }) {
  const [r, a] = v.useState({
    rootCauseStated: e.rootCauseStated ?? "",
    triggerEvent: e.triggerEvent ?? "",
    championStake: e.championStake ?? ""
  }), [o, s] = v.useState(null), i = async () => {
    s(null);
    try {
      n(await gh(e.id, r, t.trim() || null));
    } catch (u) {
      s(u instanceof Error ? u.message : "Falha ao salvar a discovery.");
    }
  };
  return /* @__PURE__ */ l.jsxs("div", { className: "lt-severity", children: [
    e.discoveryPending && /* @__PURE__ */ l.jsx("p", { className: "lt-hint", children: "Discovery pendente — esta oportunidade avançou sem os 3 campos abaixo." }),
    e.discoverySkipped && /* @__PURE__ */ l.jsxs("p", { className: "lt-hint", children: [
      "Qualificada sem discovery: ",
      e.discoverySkipReason
    ] }),
    Pm.map((u) => /* @__PURE__ */ l.jsxs("label", { className: "lt-field", children: [
      /* @__PURE__ */ l.jsxs("span", { children: [
        u.label,
        " ",
        /* @__PURE__ */ l.jsx(D, { text: u.help })
      ] }),
      /* @__PURE__ */ l.jsx(
        "textarea",
        {
          value: r[u.key],
          onChange: (d) => a((p) => ({ ...p, [u.key]: d.target.value })),
          onBlur: i
        }
      )
    ] }, u.key)),
    o && /* @__PURE__ */ l.jsx("p", { className: "lt-alert", role: "alert", children: o })
  ] });
}
function Rm({ row: e, repId: t, onUpdated: n }) {
  const [r, a] = v.useState(e.scopeNote), [o, s] = v.useState(e.criticality), [i, u] = v.useState(e.severityNote ?? ""), [d, p] = v.useState(null), f = v.useRef(0), g = async (y) => {
    p(null);
    const S = ++f.current;
    try {
      const j = await hh(e.id, {
        scopeNote: y.scopeNote,
        criticality: y.criticality,
        severityNote: y.severityNote || null
      }, t.trim() || null);
      if (S !== f.current) return;
      n(j);
    } catch (j) {
      if (S !== f.current) return;
      p(j instanceof Error ? j.message : "Falha ao salvar a qualificação.");
    }
  };
  return /* @__PURE__ */ l.jsxs("div", { className: "lt-severity", children: [
    /* @__PURE__ */ l.jsxs("label", { className: "lt-field", children: [
      /* @__PURE__ */ l.jsxs("span", { children: [
        "Alcance do gap ",
        /* @__PURE__ */ l.jsx(D, { text: "Quão abrangente é o gap identificado — usado no cálculo de severidade." })
      ] }),
      /* @__PURE__ */ l.jsxs(
        "select",
        {
          value: r ?? "",
          onChange: (y) => {
            const S = y.target.value || null;
            a(S), g({ scopeNote: S, criticality: o, severityNote: i });
          },
          children: [
            /* @__PURE__ */ l.jsx("option", { value: "", children: "Não avaliado" }),
            fd.map((y) => /* @__PURE__ */ l.jsx("option", { value: y.value, children: y.label }, y.value))
          ]
        }
      )
    ] }),
    /* @__PURE__ */ l.jsxs("label", { className: "lt-field", children: [
      /* @__PURE__ */ l.jsxs("span", { children: [
        "Criticidade ",
        /* @__PURE__ */ l.jsx(D, { text: "Quão urgente é o risco pro cliente — usado no cálculo de severidade." })
      ] }),
      /* @__PURE__ */ l.jsxs(
        "select",
        {
          value: o ?? "",
          onChange: (y) => {
            const S = y.target.value || null;
            s(S), g({ scopeNote: r, criticality: S, severityNote: i });
          },
          children: [
            /* @__PURE__ */ l.jsx("option", { value: "", children: "Não avaliado" }),
            hd.map((y) => /* @__PURE__ */ l.jsx("option", { value: y.value, children: y.label }, y.value))
          ]
        }
      )
    ] }),
    /* @__PURE__ */ l.jsxs("label", { className: "lt-field", children: [
      /* @__PURE__ */ l.jsxs("span", { children: [
        "Observação (opcional) ",
        /* @__PURE__ */ l.jsx(D, { text: "Contexto livre sobre o gap — não entra no cálculo de severidade." })
      ] }),
      /* @__PURE__ */ l.jsx(
        "textarea",
        {
          value: i,
          onChange: (y) => u(y.target.value),
          onBlur: () => g({ scopeNote: r, criticality: o, severityNote: i })
        }
      )
    ] }),
    /* @__PURE__ */ l.jsxs("span", { className: `lt-badge lt-badge--severity-${e.severityBand}`, children: [
      "Severidade: ",
      jm[e.severityBand]
    ] }),
    d && /* @__PURE__ */ l.jsx("p", { className: "lt-alert", role: "alert", children: d })
  ] });
}
function zm({ row: e, repId: t, onRenewalDateUpdated: n }) {
  const [r, a] = v.useState(Nm(e.renewalDate)), [o, s] = v.useState(null), i = v.useRef(0), u = async (d) => {
    s(null);
    const p = ++i.current;
    try {
      if (await jh(e.companyId, d || null, t.trim() || null), p !== i.current) return;
      n();
    } catch (f) {
      if (p !== i.current) return;
      s(f instanceof Error ? f.message : "Falha ao salvar a data de renovação.");
    }
  };
  return /* @__PURE__ */ l.jsxs("div", { className: "lt-panel", children: [
    /* @__PURE__ */ l.jsxs("div", { className: "lt-panel-row", children: [
      /* @__PURE__ */ l.jsxs("span", { className: `lt-badge lt-badge--health-${e.accountHealth}`, children: [
        "Saúde da conta: ",
        Sm[e.accountHealth]
      ] }),
      /* @__PURE__ */ l.jsxs("span", { className: "lt-hint", children: [
        "Próxima revisão sugerida: ",
        e.qbrSuggestedDays === 0 ? "imediata" : `em ${e.qbrSuggestedDays} dias`,
        " ",
        "(",
        wm[e.qbrReason] ?? e.qbrReason,
        ")"
      ] })
    ] }),
    /* @__PURE__ */ l.jsxs("label", { className: "lt-field", children: [
      /* @__PURE__ */ l.jsxs("span", { children: [
        "Data de renovação do contrato ",
        /* @__PURE__ */ l.jsx(D, { text: "Alimenta a cadência de revisão de conta (QBR) sugerida acima." })
      ] }),
      /* @__PURE__ */ l.jsx(
        "input",
        {
          type: "date",
          value: r,
          onChange: (d) => a(d.target.value),
          onBlur: () => u(r)
        }
      )
    ] }),
    o && /* @__PURE__ */ l.jsx("p", { className: "lt-alert", role: "alert", children: o })
  ] });
}
const wl = {
  continuidade_uso_atual: (e) => `Enviar e-mail perguntando como está o uso de ${e.product ?? e.service ?? "seus produtos atuais"} — é hora de reforçar o relacionamento.`,
  gap_portfolio: (e) => `Ligar apresentando ${e.product ?? e.service ?? "a solução recomendada"} — cliente já usa produtos relacionados mas não tem isso.`,
  prova_social_urgencia: () => "Mandar mensagem no LinkedIn com um caso parecido — bom momento pra criar urgência.",
  abertura_sinal: () => "Primeiro contato por e-mail — sinal identificado aponta interesse.",
  reforco_angulo_novo: () => "Ligar com um ângulo diferente — a primeira abordagem não avançou, vale tentar outro gancho."
};
function $m(e) {
  const t = e.includes("single_threaded_risk"), n = e.includes("no_economic_buyer_contact");
  return t && n ? "Os toques recentes chegaram a uma pessoa só, e não a um decisor. Bom momento pra ampliar quem participa da conversa." : t ? "Só um contato ativo tem recebido seus toques recentes. Vale envolver mais uma pessoa da conta." : "Nenhum decisor apareceu nos toques recentes. Vale trazer quem decide pra conversa.";
}
function Lm({ row: e, repId: t, suggestionCache: n, contactsCache: r }) {
  var Q;
  const [a, o] = v.useState(null), [s, i] = v.useState(null), [u, d] = v.useState("idle"), [p, f] = v.useState(!1), [g, y] = v.useState(!1), [S, j] = v.useState([]), [_, m] = v.useState(null), [c, h] = v.useState(!1), [w, x] = v.useState(null), P = `${e.id}:${t}`, R = (A) => {
    o(A), d("idle"), m(A.lastContactId);
  }, N = (A = !1) => {
    var G;
    return !A && ((G = n.current) != null && G.has(P)) ? (R(n.current.get(P)), Promise.resolve()) : Zf(e.id, t).then((T) => {
      var I;
      (I = n.current) == null || I.set(P, T), R(T);
    });
  };
  if (v.useEffect(() => {
    i(null), N().catch((A) => i(A instanceof Error ? A.message : "Falha ao calcular a próxima ação."));
  }, [e.id, t]), v.useEffect(() => {
    var G;
    const A = (G = r.current) == null ? void 0 : G.get(e.companyId);
    if (A) {
      j(A);
      return;
    }
    rd(e.companyId).then((T) => {
      var I;
      (I = r.current) == null || I.set(e.companyId, T), j(T);
    }).catch(() => j([]));
  }, [e.companyId]), !t.trim())
    return /* @__PURE__ */ l.jsx("p", { className: "lt-hint", children: "Informe seu id de representante acima para ver a próxima ação sugerida." });
  if (s) return /* @__PURE__ */ l.jsx("p", { className: "lt-alert", role: "alert", children: s });
  if (!a) return /* @__PURE__ */ l.jsx("p", { className: "lt-hint", children: "Calculando próxima ação…" });
  const z = a.silenceReason && /* @__PURE__ */ l.jsx("p", { className: "lt-advisory", role: "alert", children: a.silenceReason === "nunca_contatado" ? `Esta oportunidade está em qualificação há ${a.silenceDays} dias sem nenhum contato registrado. Ainda faz sentido priorizá-la agora?` : `A cadência sugerida terminou há ${a.silenceDays} dias sem retorno do lead. Bom momento pra decidir: tentar outro ângulo, escalar, ou dispensar.` }), b = a.threadingRiskReasons.length > 0 && /* @__PURE__ */ l.jsxs("div", { className: "lt-panel", children: [
    /* @__PURE__ */ l.jsx("strong", { children: "Vale ampliar os contatos aqui" }),
    /* @__PURE__ */ l.jsx("p", { className: "lt-advisory", children: $m(a.threadingRiskReasons) })
  ] });
  if (a.state === "bloqueado")
    return /* @__PURE__ */ l.jsxs("p", { className: "lt-advisory", role: "alert", children: [
      'Esta empresa está marcada como "não contatar" (',
      a.blockReason ?? "sem motivo informado",
      '), então não há próxima ação sugerida. Se a situação mudou, reative na seção "Não contatar" abaixo.'
    ] });
  if (a.state === "aguardando_intervalo")
    return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      z,
      b,
      /* @__PURE__ */ l.jsx("p", { className: "lt-hint", children: "Sem ação sugerida agora — dentro do intervalo da cadência." })
    ] });
  if (a.state === "cadencia_esgotada")
    return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      z,
      b,
      /* @__PURE__ */ l.jsx("p", { className: "lt-hint", children: "Sem retorno até agora — decida o próximo passo no status acima (encerrar ou continuar manualmente)." })
    ] });
  if (a.state === "cap_diario_atingido")
    return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      z,
      b,
      /* @__PURE__ */ l.jsx("p", { className: "lt-hint", children: "Você atingiu o limite de contatos de hoje. Essa sugestão volta amanhã." })
    ] });
  const B = ((Q = wl[a.reasonCategory ?? ""]) == null ? void 0 : Q.call(wl, e)) ?? "Próxima ação sugerida.", K = a.channel ?? "email", L = async () => {
    i(null), f(!0);
    try {
      if (K === "email") {
        const A = await nd(e, _);
        await navigator.clipboard.writeText(`${A.subject}

${A.greeting}

${A.body}

${A.cta}`);
      } else
        await navigator.clipboard.writeText(B);
    } catch (A) {
      i(A instanceof Error ? A.message : "Falha ao copiar o conteúdo do contato."), f(!1);
      return;
    }
    f(!1), d("copied"), setTimeout(() => d("ready"), 1200);
  }, Z = async () => {
    y(!0);
    try {
      await eh(e.id, t, K, B, _, c);
    } catch (A) {
      const G = A instanceof Error ? A.message : "Falha ao registrar o contato.";
      G.includes("não contatar") ? (x(G), h(!0)) : i(G), y(!1);
      return;
    }
    x(null), h(!1);
    try {
      await N(!0);
    } catch {
      i("Contato registrado, mas não consegui atualizar a sugestão — recarregue a página.");
    } finally {
      y(!1);
    }
  };
  return /* @__PURE__ */ l.jsxs("div", { className: "lt-panel", children: [
    z,
    b,
    a.lastContactBlocked && /* @__PURE__ */ l.jsx("p", { className: "lt-advisory", role: "alert", children: 'O último contato registrado está marcado como "não contatar". Escolha outro contato antes de seguir.' }),
    w && /* @__PURE__ */ l.jsxs("p", { className: "lt-alert", role: "alert", children: [
      w,
      ' Clique em "Registrar mesmo assim" só se o contato realmente aconteceu.'
    ] }),
    /* @__PURE__ */ l.jsx("p", { className: "lt-panel-text", children: B }),
    /* @__PURE__ */ l.jsxs("div", { className: "lt-panel-row", children: [
      /* @__PURE__ */ l.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ l.jsxs("span", { children: [
          "Contato (opcional) ",
          /* @__PURE__ */ l.jsx(D, { text: "Pra quem o rascunho de e-mail abaixo é endereçado." })
        ] }),
        /* @__PURE__ */ l.jsxs("select", { value: _ ?? "", onChange: (A) => m(A.target.value || null), children: [
          /* @__PURE__ */ l.jsx("option", { value: "", children: "Não atribuído" }),
          S.map((A) => /* @__PURE__ */ l.jsxs("option", { value: A.id, children: [
            A.name,
            A.do_not_contact ? " (não contatar)" : ""
          ] }, A.id))
        ] })
      ] }),
      u === "idle" && /* @__PURE__ */ l.jsx("button", { type: "button", className: "lt-btn", onClick: L, disabled: p, children: p ? "Copiando…" : K === "email" ? "Copiar rascunho" : "Copiar sugestão" }),
      u === "copied" && /* @__PURE__ */ l.jsx("span", { className: "lt-hint", children: "Copiado ✓" }),
      u === "ready" && /* @__PURE__ */ l.jsx("button", { type: "button", className: "lt-btn", onClick: Z, disabled: g, children: g ? "Registrando…" : c ? "Registrar mesmo assim" : "Marcar como enviado" })
    ] })
  ] });
}
const Om = {
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
function Di(e, t) {
  var n, r;
  return t === null ? "vazio" : e === "renewal_date" ? new Date(t).toLocaleDateString("pt-BR", { timeZone: "UTC" }) : e === "scope_note" ? ((n = fd.find((a) => a.value === t)) == null ? void 0 : n.label.split(" (")[0]) ?? t : e === "criticality" ? ((r = hd.find((a) => a.value === t)) == null ? void 0 : r.label.split(" (")[0]) ?? t : e === "discovery_skipped" ? t === "True" ? "sim" : "não" : t;
}
function Im({ row: e }) {
  const [t, n] = v.useState(null), [r, a] = v.useState(null), [o, s] = v.useState(!1);
  return v.useEffect(() => {
    o && xh(e.id).then(n).catch((i) => a(i instanceof Error ? i.message : "Falha ao carregar o histórico."));
  }, [o, e.id]), /* @__PURE__ */ l.jsxs("div", { className: "lt-panel", children: [
    /* @__PURE__ */ l.jsxs("button", { type: "button", className: "lt-btn", onClick: () => s((i) => !i), "aria-expanded": o, children: [
      o ? "Ocultar" : "Ver",
      " histórico de alterações"
    ] }),
    o && r && /* @__PURE__ */ l.jsx("p", { className: "lt-alert", role: "alert", children: r }),
    o && t !== null && t.length === 0 && /* @__PURE__ */ l.jsx("p", { className: "lt-hint", children: "Nenhuma alteração registrada ainda." }),
    o && t !== null && t.length > 0 && /* @__PURE__ */ l.jsx("ul", { className: "lt-hint", children: t.map((i) => /* @__PURE__ */ l.jsxs("li", { children: [
      new Date(i.changed_at).toLocaleString("pt-BR"),
      " — ",
      Om[i.field] ?? i.field,
      ": ",
      Di(i.field, i.old_value),
      " → ",
      Di(i.field, i.new_value),
      " ",
      "(",
      i.actor === "sync" ? "sincronização automática" : i.actor ?? "não identificado",
      ")"
    ] }, i.id)) })
  ] });
}
const Fi = [
  { value: "requested_by_contact", label: "O contato pediu para não ser contatado" },
  { value: "invalid_contact_data", label: "Dados de contato inválidos" },
  { value: "rep_decision", label: "Decisão do representante" },
  { value: "other", label: "Outro motivo" }
];
function Dm({ row: e, repId: t }) {
  const [n, r] = v.useState([]), [a, o] = v.useState([]), [s, i] = v.useState(""), [u, d] = v.useState(""), [p, f] = v.useState("requested_by_contact"), [g, y] = v.useState(""), [S, j] = v.useState(null), [_, m] = v.useState(""), [c, h] = v.useState(null), w = () => th(e.companyId).then(r);
  v.useEffect(() => {
    w().catch((z) => h(z instanceof Error ? z.message : "Falha ao carregar a lista de não contatar.")), rd(e.companyId).then(o).catch(() => o([]));
  }, [e.companyId]);
  const x = async () => {
    h(null);
    try {
      await nh(e.companyId, {
        repId: t,
        contactId: s || null,
        channel: u || null,
        reason: p,
        comment: g
      }), y(""), await w();
    } catch (z) {
      h(z instanceof Error ? z.message : "Falha ao marcar como não contatar.");
    }
  }, P = async (z) => {
    h(null);
    try {
      await rh(z, t, _), j(null), m(""), await w();
    } catch (b) {
      h(b instanceof Error ? b.message : "Falha ao reativar.");
    }
  }, R = (z) => {
    var b;
    return z ? ((b = a.find((B) => B.id === z)) == null ? void 0 : b.name) ?? "Contato" : "Empresa inteira";
  }, N = n.filter((z) => !z.lifted_at);
  return /* @__PURE__ */ l.jsxs("div", { className: "lt-panel", children: [
    /* @__PURE__ */ l.jsx("strong", { children: "Não contatar" }),
    !t.trim() && /* @__PURE__ */ l.jsx("p", { className: "lt-hint", children: "Informe seu id de representante acima para marcar ou reativar." }),
    N.length === 0 && /* @__PURE__ */ l.jsx("p", { className: "lt-hint", children: "Nenhum bloqueio ativo nesta empresa." }),
    N.map((z) => {
      var b;
      return /* @__PURE__ */ l.jsxs("div", { className: "lt-panel-row", children: [
        /* @__PURE__ */ l.jsxs("span", { className: "lt-panel-text", children: [
          R(z.contact_id),
          " · ",
          z.channel ?? "todos os canais",
          " · ",
          (b = Fi.find((B) => B.value === z.reason)) == null ? void 0 : b.label,
          z.comment ? ` — ${z.comment}` : ""
        ] }),
        S === z.id ? /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
          /* @__PURE__ */ l.jsxs("label", { className: "lt-field", children: [
            /* @__PURE__ */ l.jsx("span", { children: "Por que reativar? (opcional)" }),
            /* @__PURE__ */ l.jsx("input", { value: _, onChange: (B) => m(B.target.value), maxLength: 500 })
          ] }),
          /* @__PURE__ */ l.jsx("button", { type: "button", className: "lt-btn", onClick: () => P(z.id), disabled: !t.trim(), children: "Confirmar reativação" })
        ] }) : /* @__PURE__ */ l.jsx("button", { type: "button", className: "lt-btn", onClick: () => j(z.id), children: "Reativar" })
      ] }, z.id);
    }),
    /* @__PURE__ */ l.jsxs("div", { className: "lt-panel-row", children: [
      /* @__PURE__ */ l.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ l.jsx("span", { children: "Quem" }),
        /* @__PURE__ */ l.jsxs("select", { value: s, onChange: (z) => i(z.target.value), children: [
          /* @__PURE__ */ l.jsx("option", { value: "", children: "Empresa inteira" }),
          a.map((z) => /* @__PURE__ */ l.jsx("option", { value: z.id, children: z.name }, z.id))
        ] })
      ] }),
      /* @__PURE__ */ l.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ l.jsx("span", { children: "Canal" }),
        /* @__PURE__ */ l.jsxs("select", { value: u, onChange: (z) => d(z.target.value), children: [
          /* @__PURE__ */ l.jsx("option", { value: "", children: "Todos os canais" }),
          /* @__PURE__ */ l.jsx("option", { value: "email", children: "E-mail" }),
          /* @__PURE__ */ l.jsx("option", { value: "ligação", children: "Ligação" }),
          /* @__PURE__ */ l.jsx("option", { value: "linkedin", children: "LinkedIn" })
        ] })
      ] }),
      /* @__PURE__ */ l.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ l.jsx("span", { children: "Motivo" }),
        /* @__PURE__ */ l.jsx("select", { value: p, onChange: (z) => f(z.target.value), children: Fi.map((z) => /* @__PURE__ */ l.jsx("option", { value: z.value, children: z.label }, z.value)) })
      ] }),
      /* @__PURE__ */ l.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ l.jsxs("span", { children: [
          "Observação (opcional) ",
          /* @__PURE__ */ l.jsx(D, { text: "Fica só aqui: não vai para exportações nem para a IA." })
        ] }),
        /* @__PURE__ */ l.jsx("input", { value: g, onChange: (z) => y(z.target.value), maxLength: 500 })
      ] }),
      /* @__PURE__ */ l.jsx("button", { type: "button", className: "lt-btn", onClick: x, disabled: !t.trim(), children: "Marcar como não contatar" })
    ] }),
    c && /* @__PURE__ */ l.jsx("p", { className: "lt-alert", role: "alert", children: c })
  ] });
}
function Fm({ row: e, repId: t, onRowUpdated: n, onRenewalDateUpdated: r, suggestionCache: a, contactsCache: o, aiHasKey: s }) {
  const [i, u] = v.useState("idle"), [d, p] = v.useState(null), [f, g] = v.useState(null), [y, S] = v.useState(!1), j = Qf(e), [_, m] = v.useState("idle"), [c, h] = v.useState(null), [w, x] = v.useState(null), P = async () => {
    m("loading"), h(null);
    try {
      const b = await nd(e);
      x(b), m("idle");
    } catch (b) {
      h(b instanceof Error ? b.message : "Falha ao gerar rascunho."), m("error");
    }
  }, R = async () => {
    if (!j.enabled || i === "loading") return;
    const b = s && y;
    u("loading"), p(null), g(null);
    try {
      const { fonte: B } = await Jf(e.id, b, e.companyName);
      g(Gf(B, b)), u("idle");
    } catch (B) {
      p(B instanceof Error ? B.message : "Falha ao gerar o business case."), u("error");
    }
  }, N = async () => {
    w && await navigator.clipboard.writeText(`${w.subject}

${w.greeting}

${w.body}

${w.cta}`);
  }, z = async () => {
    const b = [
      e.companyName,
      e.isCustomer ? "Cliente" : "Prospect",
      `Score: ${Bn(e.opportunityScore)}`,
      `Potencial: ${yo(e.financialPotential)}`,
      e.justification ?? ""
    ].filter(Boolean).join(" — ");
    await navigator.clipboard.writeText(b);
  };
  return /* @__PURE__ */ l.jsx("tr", { children: /* @__PURE__ */ l.jsxs("td", { colSpan: 8, className: "lt-detail", children: [
    /* @__PURE__ */ l.jsxs("dl", { children: [
      /* @__PURE__ */ l.jsx("dt", { children: "Status de cliente" }),
      /* @__PURE__ */ l.jsx("dd", { children: e.isCustomer ? "Cliente" : "Prospect" }),
      /* @__PURE__ */ l.jsx("dt", { children: "Fontes" }),
      /* @__PURE__ */ l.jsx("dd", { children: e.sources.map((b) => `${b.type} (${Math.round(b.confidence * 100)}%)`).join(", ") || "—" }),
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
      $i(e.companyWebsite) && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
        /* @__PURE__ */ l.jsx("dt", { children: "Site" }),
        /* @__PURE__ */ l.jsx("dd", { children: /* @__PURE__ */ l.jsx("a", { href: $i(e.companyWebsite), target: "_blank", rel: "noopener noreferrer", children: _m(e.companyWebsite) }) })
      ] }),
      e.discoveryPrompt && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
        /* @__PURE__ */ l.jsx("dt", { children: "Pergunta para o cliente" }),
        /* @__PURE__ */ l.jsx("dd", { children: e.discoveryPrompt })
      ] })
    ] }),
    /* @__PURE__ */ l.jsx(Tm, { row: e, repId: t, onUpdated: n }),
    /* @__PURE__ */ l.jsx(Dm, { row: e, repId: t }),
    /* @__PURE__ */ l.jsx(Cm, { row: e, onUpdated: n }),
    /* @__PURE__ */ l.jsx(zm, { row: e, repId: t, onRenewalDateUpdated: r }),
    /* @__PURE__ */ l.jsx(Rm, { row: e, repId: t, onUpdated: n }),
    /* @__PURE__ */ l.jsx(Im, { row: e }),
    /* @__PURE__ */ l.jsxs("div", { className: "lt-panel", children: [
      /* @__PURE__ */ l.jsx("strong", { children: "Próxima ação sugerida" }),
      /* @__PURE__ */ l.jsx(Lm, { row: e, repId: t, suggestionCache: a, contactsCache: o })
    ] }),
    /* @__PURE__ */ l.jsxs("div", { className: "lt-detail-actions", children: [
      /* @__PURE__ */ l.jsx("button", { type: "button", className: "lt-btn", onClick: z, children: "Copiar resumo" }),
      /* @__PURE__ */ l.jsx("button", { type: "button", className: "lt-btn", onClick: P, disabled: _ === "loading", children: _ === "loading" ? "Gerando…" : "Gerar rascunho" }),
      /* @__PURE__ */ l.jsx(
        "button",
        {
          type: "button",
          className: "lt-btn",
          onClick: R,
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
            onChange: (b) => {
              S(b.target.checked), g(null), p(null), u("idle");
            }
          }
        ),
        " ",
        "Melhorar o texto com IA"
      ] }),
      /* @__PURE__ */ l.jsx(D, { text: "Envia os dados desta oportunidade (empresa, evidências, produto) ao provedor de IA configurado para reescrever o texto. Sem isso, usamos o texto padrão. Os números nunca são alterados." })
    ] }),
    !j.enabled && /* @__PURE__ */ l.jsx("p", { className: "lt-hint", id: `bc-reason-${e.id}`, children: j.reason }),
    !s && /* @__PURE__ */ l.jsx("p", { className: "lt-hint", children: "Configure a IA em Configurações" }),
    i === "error" && /* @__PURE__ */ l.jsx("p", { className: "lt-alert", role: "alert", children: d }),
    _ === "error" && /* @__PURE__ */ l.jsx("p", { className: "lt-alert", role: "alert", children: c }),
    /* @__PURE__ */ l.jsxs("div", { role: "status", children: [
      f && /* @__PURE__ */ l.jsx("p", { className: "lt-hint", children: f }),
      w && /* @__PURE__ */ l.jsxs("div", { className: "lt-draft", children: [
        /* @__PURE__ */ l.jsxs("p", { children: [
          /* @__PURE__ */ l.jsx("strong", { children: "Assunto:" }),
          " ",
          w.subject
        ] }),
        /* @__PURE__ */ l.jsx("p", { children: w.greeting }),
        /* @__PURE__ */ l.jsx("p", { children: w.body }),
        /* @__PURE__ */ l.jsx("p", { children: w.cta }),
        /* @__PURE__ */ l.jsx("button", { type: "button", className: "lt-btn", onClick: N, children: "Copiar rascunho" }),
        /* @__PURE__ */ l.jsx("p", { className: "lt-hint", children: "Revise antes de enviar — o rascunho nunca é enviado automaticamente." })
      ] })
    ] })
  ] }) });
}
function Mm({ rows: e, repId: t, onRowUpdated: n, onRenewalDateUpdated: r }) {
  const [a, o] = v.useState("score"), [s, i] = v.useState("desc"), [u, d] = v.useState(null), p = v.useRef(/* @__PURE__ */ new Map()), f = v.useRef(/* @__PURE__ */ new Map()), [g, y] = v.useState(!1);
  v.useEffect(() => {
    ad().then((_) => y(_.has_key)).catch(() => y(!1));
  }, []);
  const S = (_) => {
    _ === a ? i((m) => m === "asc" ? "desc" : "asc") : (o(_), i("desc"));
  }, j = v.useMemo(() => bm(e, a, s), [e, a, s]);
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
        /* @__PURE__ */ l.jsx("td", { children: _.sources.map((m) => m.type).join(", ") })
      ] }),
      u === _.id && /* @__PURE__ */ l.jsx(
        Fm,
        {
          row: _,
          repId: t,
          onRowUpdated: n,
          onRenewalDateUpdated: r,
          suggestionCache: p,
          contactsCache: f,
          aiHasKey: g
        }
      )
    ] }, _.id)) })
  ] });
}
const _l = "__custom__", Am = {
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
function Um() {
  const [e, t] = v.useState(null), [n, r] = v.useState(""), [a, o] = v.useState(""), [s, i] = v.useState(""), [u, d] = v.useState(null), [p, f] = v.useState(null), [g, y] = v.useState(!1);
  v.useEffect(() => {
    ad().then((c) => {
      t(c), r(c.provider), i(c.model);
    }).catch((c) => d(c instanceof Error ? c.message : "Não consegui carregar a configuração de IA."));
  }, []);
  const S = async () => {
    y(!0), d(null), f(null);
    try {
      const c = await lh(n, a, s);
      t(c), i(c.model), o(""), f("Configuração de IA salva.");
    } catch (c) {
      d(c instanceof Error ? c.message : "Falha ao salvar a configuração de IA.");
    } finally {
      y(!1);
    }
  };
  if (u && !e) return /* @__PURE__ */ l.jsx("p", { className: "lt-alert", role: "alert", children: u });
  if (!e) return /* @__PURE__ */ l.jsx("p", { className: "lt-hint", children: "Carregando…" });
  const j = n === e.provider ? e.model_options : Am[n] ?? [], _ = j.length === 0, m = _ || s !== "" && !j.some((c) => c.value === s);
  return /* @__PURE__ */ l.jsxs("div", { className: "lt-source-card", children: [
    /* @__PURE__ */ l.jsx("div", { className: "lt-source-card__header", children: /* @__PURE__ */ l.jsxs("div", { className: "lt-header-row", children: [
      /* @__PURE__ */ l.jsx("p", { className: "lt-source-card__title", children: "Inteligência Artificial" }),
      /* @__PURE__ */ l.jsx(D, { text: "Opcional — usada só pra gerar rascunho de e-mail. O Lead.Tracker funciona normalmente sem isso." })
    ] }) }),
    /* @__PURE__ */ l.jsxs("div", { className: "lt-source-card__form", children: [
      /* @__PURE__ */ l.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ l.jsxs("span", { children: [
          "Provedor de IA ",
          /* @__PURE__ */ l.jsx(D, { text: "Escolha o provedor de IA que vai gerar os rascunhos de e-mail." })
        ] }),
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
        )
      ] }),
      n && (_ ? /* @__PURE__ */ l.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ l.jsxs("span", { children: [
          "Modelo ",
          /* @__PURE__ */ l.jsx(D, { text: "OpenRouter dá acesso a qualquer modelo pelo nome exato — deixe em branco pra usar o padrão do OpenRouter." })
        ] }),
        /* @__PURE__ */ l.jsx(
          "input",
          {
            value: s,
            onChange: (c) => i(c.target.value),
            placeholder: "ex.: openai/gpt-4o-mini"
          }
        )
      ] }) : /* @__PURE__ */ l.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ l.jsxs("span", { children: [
          "Modelo ",
          /* @__PURE__ */ l.jsx(D, { text: "Barato/equilibrado/caro reflete custo e capacidade do modelo — padrão do provedor usa a opção equilibrada." })
        ] }),
        /* @__PURE__ */ l.jsxs(
          "select",
          {
            value: m ? _l : s,
            onChange: (c) => i(c.target.value === _l ? "" : c.target.value),
            children: [
              /* @__PURE__ */ l.jsx("option", { value: _l, children: "Padrão do provedor" }),
              j.map((c) => /* @__PURE__ */ l.jsx("option", { value: c.value, children: c.label }, c.value))
            ]
          }
        )
      ] })),
      /* @__PURE__ */ l.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ l.jsxs("span", { children: [
          "Chave de acesso do provedor ",
          /* @__PURE__ */ l.jsx(D, { text: "Cole aqui a chave fornecida pelo provedor escolhido. Deixe em branco pra manter a chave já salva." })
        ] }),
        /* @__PURE__ */ l.jsx(
          "input",
          {
            type: "password",
            value: a,
            onChange: (c) => o(c.target.value),
            placeholder: e.has_key ? "••••••••" : ""
          }
        )
      ] }),
      /* @__PURE__ */ l.jsx("div", { className: "lt-detail-actions", children: /* @__PURE__ */ l.jsx("button", { type: "button", className: "lt-btn", onClick: S, disabled: g, children: g ? "Salvando…" : "Salvar" }) }),
      u && /* @__PURE__ */ l.jsx("p", { className: "lt-alert", role: "alert", children: u }),
      p && /* @__PURE__ */ l.jsx("p", { className: "lt-hint", role: "status", children: p })
    ] })
  ] });
}
const Bm = {
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
}, Vm = {
  salesforce: "Salesforce",
  google_maps: "Google Maps",
  csv: "Planilha (CSV)",
  manual: "Edição manual",
  mapping: "Mapeamento de campo",
  legacy: "Dado anterior"
};
function Hm(e) {
  return e == null || e === "" ? "vazio" : typeof e == "object" ? Object.values(e).filter((t) => t).join(", ") || "vazio" : String(e);
}
function qm() {
  const [e, t] = v.useState(null), [n, r] = v.useState(null), [a, o] = v.useState(""), [s, i] = v.useState(null), u = () => vh().then(t);
  v.useEffect(() => {
    u().catch((p) => r(p instanceof Error ? p.message : "Não consegui carregar os conflitos de dados."));
  }, []);
  const d = async (p, f) => {
    i(p), r(null);
    try {
      await yh(p, f, a.trim() || null), await u();
    } catch (g) {
      r(g instanceof Error ? g.message : "Falha ao resolver o conflito.");
    } finally {
      i(null);
    }
  };
  return e === null && !n ? /* @__PURE__ */ l.jsx("p", { className: "lt-hint", children: "Carregando conflitos…" }) : /* @__PURE__ */ l.jsxs("section", { className: "lt-panel", "aria-labelledby": "lt-conflicts-title", children: [
    /* @__PURE__ */ l.jsxs("div", { className: "lt-header lt-header-row", children: [
      /* @__PURE__ */ l.jsx("h3", { id: "lt-conflicts-title", children: "Conflitos de dados" }),
      /* @__PURE__ */ l.jsx(D, { text: "Quando duas fontes trazem valores diferentes para o mesmo campo de uma empresa, o valor atual continua valendo até você escolher qual manter. A escolha fica registrada no histórico de alterações e não é perguntada de novo." })
    ] }),
    n && /* @__PURE__ */ l.jsx("p", { className: "lt-alert", role: "alert", children: n }),
    e && e.length === 0 && /* @__PURE__ */ l.jsx("p", { className: "lt-hint", children: "Nenhum conflito: as fontes concordam." }),
    e && e.length > 0 && /* @__PURE__ */ l.jsxs("label", { className: "lt-field", children: [
      /* @__PURE__ */ l.jsxs("span", { children: [
        "Seu id de representante (opcional) ",
        /* @__PURE__ */ l.jsx(D, { text: "Aparece no histórico de alterações como quem escolheu." })
      ] }),
      /* @__PURE__ */ l.jsx("input", { value: a, onChange: (p) => o(p.target.value), maxLength: 64 })
    ] }),
    e == null ? void 0 : e.map((p) => /* @__PURE__ */ l.jsxs("div", { className: "lt-panel", children: [
      /* @__PURE__ */ l.jsxs("strong", { children: [
        p.company_name,
        " — ",
        Bm[p.field] ?? p.field
      ] }),
      /* @__PURE__ */ l.jsx("div", { className: "lt-panel-row", children: p.candidates.map((f) => /* @__PURE__ */ l.jsxs(
        "button",
        {
          type: "button",
          className: "lt-btn",
          disabled: s === p.id,
          onClick: () => d(p.id, f.source),
          children: [
            'Manter "',
            Hm(f.value),
            '" (',
            Vm[f.source] ?? f.source,
            ")"
          ]
        },
        f.source
      )) })
    ] }, p.id))
  ] });
}
function Qm() {
  const [e, t] = v.useState(null), [n, r] = v.useState("merge"), [a, o] = v.useState(!1), [s, i] = v.useState(null), [u, d] = v.useState(null), p = async () => {
    if (e) {
      o(!0), d(null), i(null);
      try {
        const f = await Ah(e, n);
        i(f);
      } catch (f) {
        d(f instanceof Error ? f.message : "Falha ao importar o CSV.");
      } finally {
        o(!1);
      }
    }
  };
  return /* @__PURE__ */ l.jsxs("div", { className: "lt-source-card", children: [
    /* @__PURE__ */ l.jsx("div", { className: "lt-source-card__header", children: /* @__PURE__ */ l.jsxs("div", { className: "lt-header-row", children: [
      /* @__PURE__ */ l.jsx("p", { className: "lt-source-card__title", children: "Importar CSV" }),
      /* @__PURE__ */ l.jsx(D, { text: "Cadastra empresa + portfólio (o que ela já tem do seu catálogo) em lote, sem precisar de Salesforce ou Google Maps configurados. Fabricante/produto/serviço citados no arquivo precisam já existir em Portfólio — o import nunca inventa item novo no catálogo." })
    ] }) }),
    /* @__PURE__ */ l.jsxs("div", { className: "lt-source-card__form", children: [
      /* @__PURE__ */ l.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ l.jsxs("span", { children: [
          "Arquivo CSV ",
          /* @__PURE__ */ l.jsx(D, { text: "Colunas: company_name (obrigatória), is_customer, segment, region, rep_id, vendor, product, service. Uma linha por empresa + item de portfólio — repita a empresa numa linha por produto/serviço." })
        ] }),
        /* @__PURE__ */ l.jsx(
          "input",
          {
            type: "file",
            accept: ".csv,text/csv",
            onChange: (f) => {
              var g;
              return t(((g = f.target.files) == null ? void 0 : g[0]) ?? null);
            }
          }
        )
      ] }),
      /* @__PURE__ */ l.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ l.jsxs("span", { children: [
          "Empresa já cadastrada: o que fazer com o portfólio ",
          /* @__PURE__ */ l.jsx(D, { text: "Adicionar preserva o que já foi cadastrado antes; Substituir descarta o portfólio anterior da empresa e usa só o que está neste arquivo." })
        ] }),
        /* @__PURE__ */ l.jsxs("select", { value: n, onChange: (f) => r(f.target.value), children: [
          /* @__PURE__ */ l.jsx("option", { value: "merge", children: "Adicionar aos itens já cadastrados" }),
          /* @__PURE__ */ l.jsx("option", { value: "replace", children: "Substituir pelos itens deste arquivo" })
        ] })
      ] }),
      /* @__PURE__ */ l.jsx("div", { className: "lt-detail-actions", children: /* @__PURE__ */ l.jsx("button", { type: "button", className: "lt-btn", onClick: p, disabled: a || !e, children: a ? "Importando…" : "Importar" }) }),
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
        (s.conflicts_opened ?? 0) > 0 && /* @__PURE__ */ l.jsxs("p", { className: "lt-advisory", role: "status", children: [
          s.conflicts_opened,
          ' valor(es) da planilha diferem do que já estava na base e não foram alterados. Escolha qual manter na seção "Conflitos de dados", mais abaixo.'
        ] }),
        s.errors.length > 0 && /* @__PURE__ */ l.jsx("ul", { children: s.errors.map((f, g) => /* @__PURE__ */ l.jsx("li", { className: "lt-alert", children: f }, g)) })
      ] })
    ] })
  ] });
}
const Ar = {
  industry_hint: "Setor / segmento do cliente",
  deal_size_hint: "Porte estimado do negócio",
  renewal_date: "Data de renovação do contrato"
};
function Wm() {
  const [e, t] = v.useState(null), [n, r] = v.useState(null), [a, o] = v.useState(null), [s, i] = v.useState(null);
  v.useEffect(() => {
    Vh().then(t).catch((p) => r(p instanceof Error ? p.message : "Não consegui carregar os campos do Salesforce."));
  }, []);
  const u = async (p, f) => {
    i(p.sourceFieldApiName), o(null);
    try {
      if (f === "")
        await qh(p.sourceFieldApiName), t((g) => p.broken ? g.filter((y) => y.sourceFieldApiName !== p.sourceFieldApiName) : g.map((y) => y.sourceFieldApiName === p.sourceFieldApiName ? { ...y, role: null } : y));
      else {
        const { reassignedFromApiName: g, reassignedFromLabel: y } = await Hh(
          p.sourceFieldApiName,
          p.sourceFieldLabel,
          f
        );
        t((S) => S.map((j) => j.sourceFieldApiName === p.sourceFieldApiName ? { ...j, role: f } : g && j.sourceFieldApiName === g ? { ...j, role: null } : j)), o(
          y ? `${Ar[f]} agora é preenchido por ${p.sourceFieldLabel} em vez de ${y}.` : `A partir de agora, o valor de ${p.sourceFieldLabel} será a fonte de verdade para ${Ar[f]} — ele substitui qualquer valor que o sistema já tenha.`
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
  const d = [...e].sort((p, f) => p.role === f.role ? 0 : p.role ? -1 : 1);
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
      /* @__PURE__ */ l.jsx("tbody", { children: d.map((p) => /* @__PURE__ */ l.jsxs(v.Fragment, { children: [
        /* @__PURE__ */ l.jsxs("tr", { children: [
          /* @__PURE__ */ l.jsxs("td", { children: [
            p.broken && /* @__PURE__ */ l.jsx("span", { className: "lt-badge lt-badge--severity-critico", children: "Campo removido" }),
            " ",
            p.sourceFieldLabel
          ] }),
          /* @__PURE__ */ l.jsx("td", { children: /* @__PURE__ */ l.jsxs(
            "select",
            {
              value: p.role ?? "",
              disabled: s === p.sourceFieldApiName,
              onChange: (f) => u(p, f.target.value),
              children: [
                /* @__PURE__ */ l.jsx("option", { value: "", children: "—" }),
                !p.broken && Object.keys(Ar).map((f) => /* @__PURE__ */ l.jsx("option", { value: f, children: Ar[f] }, f))
              ]
            }
          ) })
        ] }),
        p.broken && /* @__PURE__ */ l.jsx("tr", { children: /* @__PURE__ */ l.jsx("td", { colSpan: 2, children: /* @__PURE__ */ l.jsx("p", { className: "lt-alert", role: "alert", children: p.brokenMessage }) }) })
      ] }, p.sourceFieldApiName)) })
    ] })
  ] });
}
const Ur = "__new__";
function Km({
  products: e,
  services: t,
  loadError: n,
  onProductCreated: r,
  onServiceCreated: a,
  onProductDeleted: o,
  onServiceDeleted: s
}) {
  const [i, u] = v.useState([]), [d, p] = v.useState(!1), [f, g] = v.useState(""), [y, S] = v.useState(""), [j, _] = v.useState(""), [m, c] = v.useState(""), [h, w] = v.useState(!1), [x, P] = v.useState(null), [R, N] = v.useState(!1), [z, b] = v.useState(""), [B, K] = v.useState(""), [L, Z] = v.useState(!1), [Q, A] = v.useState(null), [G, T] = v.useState(null), [I, E] = v.useState(null), [U, k] = v.useState(null);
  v.useEffect(() => {
    Th().then(u).catch((O) => T(O instanceof Error ? O.message : "Não consegui carregar os fabricantes."));
  }, []);
  const fe = (O) => {
    var We;
    return ((We = i.find((Sr) => Sr.id === O)) == null ? void 0 : We.name) ?? O;
  }, Ee = () => {
    g(""), S(""), _(""), c("");
  }, Pn = async () => {
    w(!0), P(null);
    try {
      let O = f;
      if (f === Ur) {
        const Sr = await Rh(y);
        u((yd) => [...yd, Sr]), O = Sr.id;
      }
      const We = await zh(O, j, m);
      r(We), p(!1), Ee();
    } catch (O) {
      P(O instanceof Error ? O.message : "Falha ao salvar produto.");
    } finally {
      w(!1);
    }
  }, et = async () => {
    Z(!0), A(null);
    try {
      const O = await Oh(z, B);
      a(O), N(!1), b(""), K("");
    } catch (O) {
      A(O instanceof Error ? O.message : "Falha ao salvar serviço.");
    } finally {
      Z(!1);
    }
  }, Kt = async (O) => {
    if (window.confirm(`Remover o produto "${O.name}"? Essa ação não pode ser desfeita.`)) {
      E(O.id), k(null);
      try {
        await $h(O.id), o(O.id);
      } catch (We) {
        k(We instanceof Error ? We.message : "Falha ao remover produto.");
      } finally {
        E(null);
      }
    }
  }, md = async (O) => {
    if (window.confirm(`Remover o serviço "${O.name}"? Essa ação não pode ser desfeita.`)) {
      E(O.id), k(null);
      try {
        await Ih(O.id), s(O.id);
      } catch (We) {
        k(We instanceof Error ? We.message : "Falha ao remover serviço.");
      } finally {
        E(null);
      }
    }
  };
  if (n || G) return /* @__PURE__ */ l.jsx("p", { className: "lt-alert", role: "alert", children: n ?? G });
  if (!e || !t) return /* @__PURE__ */ l.jsx("p", { className: "lt-hint", children: "Carregando portfólio…" });
  const gd = j.trim() !== "" && (f === Ur ? y.trim() !== "" : f !== ""), vd = z.trim() !== "";
  return /* @__PURE__ */ l.jsxs("div", { children: [
    /* @__PURE__ */ l.jsxs("div", { className: "lt-header lt-header-row", children: [
      /* @__PURE__ */ l.jsx("h2", { children: "Portfólio" }),
      /* @__PURE__ */ l.jsx(D, { text: "Produtos e serviços que sua empresa vende — é o catálogo que as Regras usam pra detectar oportunidade." })
    ] }),
    /* @__PURE__ */ l.jsxs("div", { className: "lt-toolbar", children: [
      /* @__PURE__ */ l.jsx("button", { type: "button", className: "lt-btn", onClick: () => p((O) => !O), children: d ? "Cancelar" : "Novo produto" }),
      /* @__PURE__ */ l.jsx("button", { type: "button", className: "lt-btn", onClick: () => N((O) => !O), children: R ? "Cancelar" : "Novo serviço" })
    ] }),
    d && /* @__PURE__ */ l.jsxs("div", { className: "lt-source-card__form", children: [
      /* @__PURE__ */ l.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ l.jsxs("span", { children: [
          "Fabricante ",
          /* @__PURE__ */ l.jsx(D, { text: "Quem fabrica esse produto — escolha um já cadastrado ou crie um novo." })
        ] }),
        /* @__PURE__ */ l.jsxs("select", { value: f, onChange: (O) => g(O.target.value), children: [
          /* @__PURE__ */ l.jsx("option", { value: "", children: "Selecione…" }),
          i.map((O) => /* @__PURE__ */ l.jsx("option", { value: O.id, children: O.name }, O.id)),
          /* @__PURE__ */ l.jsx("option", { value: Ur, children: "+ Cadastrar novo fabricante" })
        ] })
      ] }),
      f === Ur && /* @__PURE__ */ l.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ l.jsxs("span", { children: [
          "Nome do novo fabricante ",
          /* @__PURE__ */ l.jsx(D, { text: "Nome do fabricante como deve aparecer nas telas do sistema." })
        ] }),
        /* @__PURE__ */ l.jsx("input", { value: y, onChange: (O) => S(O.target.value) })
      ] }),
      /* @__PURE__ */ l.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ l.jsxs("span", { children: [
          "Nome do produto ",
          /* @__PURE__ */ l.jsx(D, { text: "Nome comercial do produto, como aparece pro cliente." })
        ] }),
        /* @__PURE__ */ l.jsx("input", { value: j, onChange: (O) => _(O.target.value) })
      ] }),
      /* @__PURE__ */ l.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ l.jsx("span", { children: "Categoria (ex.: backup, monitoramento — usada pelas Regras)" }),
        /* @__PURE__ */ l.jsx("input", { value: m, onChange: (O) => c(O.target.value) })
      ] }),
      x && /* @__PURE__ */ l.jsx("p", { className: "lt-alert", role: "alert", children: x }),
      /* @__PURE__ */ l.jsx("div", { className: "lt-detail-actions", children: /* @__PURE__ */ l.jsx("button", { type: "button", className: "lt-btn", onClick: Pn, disabled: h || !gd, children: h ? "Salvando…" : "Criar produto" }) })
    ] }),
    R && /* @__PURE__ */ l.jsxs("div", { className: "lt-source-card__form", children: [
      /* @__PURE__ */ l.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ l.jsxs("span", { children: [
          "Nome do serviço ",
          /* @__PURE__ */ l.jsx(D, { text: "Nome comercial do serviço, como aparece pro cliente." })
        ] }),
        /* @__PURE__ */ l.jsx("input", { value: z, onChange: (O) => b(O.target.value) })
      ] }),
      /* @__PURE__ */ l.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ l.jsx("span", { children: "Categoria (ex.: backup, monitoramento — usada pelas Regras)" }),
        /* @__PURE__ */ l.jsx("input", { value: B, onChange: (O) => K(O.target.value) })
      ] }),
      Q && /* @__PURE__ */ l.jsx("p", { className: "lt-alert", role: "alert", children: Q }),
      /* @__PURE__ */ l.jsx("div", { className: "lt-detail-actions", children: /* @__PURE__ */ l.jsx("button", { type: "button", className: "lt-btn", onClick: et, disabled: L || !vd, children: L ? "Salvando…" : "Criar serviço" }) })
    ] }),
    U && /* @__PURE__ */ l.jsx("p", { className: "lt-alert", role: "alert", children: U }),
    e.length === 0 ? /* @__PURE__ */ l.jsx("p", { className: "lt-empty", role: "status", children: "Nenhum produto cadastrado ainda." }) : /* @__PURE__ */ l.jsxs("table", { className: "lt-table", children: [
      /* @__PURE__ */ l.jsx("thead", { children: /* @__PURE__ */ l.jsxs("tr", { children: [
        /* @__PURE__ */ l.jsx("th", { children: "Fabricante" }),
        /* @__PURE__ */ l.jsx("th", { children: "Produto" }),
        /* @__PURE__ */ l.jsx("th", { children: "Categoria" }),
        /* @__PURE__ */ l.jsx("th", {})
      ] }) }),
      /* @__PURE__ */ l.jsx("tbody", { children: e.map((O) => /* @__PURE__ */ l.jsxs("tr", { children: [
        /* @__PURE__ */ l.jsx("td", { children: fe(O.vendor_id) }),
        /* @__PURE__ */ l.jsx("td", { children: O.name }),
        /* @__PURE__ */ l.jsx("td", { children: O.category ?? "—" }),
        /* @__PURE__ */ l.jsx("td", { children: /* @__PURE__ */ l.jsx("button", { type: "button", className: "lt-btn", onClick: () => Kt(O), disabled: I === O.id, children: I === O.id ? "Removendo…" : "Remover" }) })
      ] }, O.id)) })
    ] }),
    t.length === 0 ? /* @__PURE__ */ l.jsx("p", { className: "lt-empty", role: "status", children: "Nenhum serviço cadastrado ainda." }) : /* @__PURE__ */ l.jsxs("table", { className: "lt-table", children: [
      /* @__PURE__ */ l.jsx("thead", { children: /* @__PURE__ */ l.jsxs("tr", { children: [
        /* @__PURE__ */ l.jsx("th", { children: "Serviço" }),
        /* @__PURE__ */ l.jsx("th", { children: "Categoria" }),
        /* @__PURE__ */ l.jsx("th", {})
      ] }) }),
      /* @__PURE__ */ l.jsx("tbody", { children: t.map((O) => /* @__PURE__ */ l.jsxs("tr", { children: [
        /* @__PURE__ */ l.jsx("td", { children: O.name }),
        /* @__PURE__ */ l.jsx("td", { children: O.category ?? "—" }),
        /* @__PURE__ */ l.jsx("td", { children: /* @__PURE__ */ l.jsx("button", { type: "button", className: "lt-btn", onClick: () => md(O), disabled: I === O.id, children: I === O.id ? "Removendo…" : "Remover" }) })
      ] }, O.id)) })
    ] })
  ] });
}
function Mi(e, t) {
  const n = t.getFullYear();
  if (e === "quarterly") {
    const a = Math.floor(t.getMonth() / 3) + 1;
    return `${n}-Q${a}`;
  }
  const r = String(t.getMonth() + 1).padStart(2, "0");
  return `${n}-${r}`;
}
function Gm(e) {
  const t = e.getFullYear();
  return [t, t + 1].flatMap((n) => [1, 2, 3, 4].map((r) => `${n}-Q${r}`));
}
function Ym() {
  const [e, t] = v.useState("monthly"), [n, r] = v.useState(Mi("monthly", /* @__PURE__ */ new Date())), [a, o] = v.useState(null), [s, i] = v.useState(null), [u, d] = v.useState(!1), [p, f] = v.useState(""), [g, y] = v.useState(""), [S, j] = v.useState(!1), [_, m] = v.useState(null);
  v.useEffect(() => {
    o(null), Uh(e, n).then(o).catch((x) => i(x instanceof Error ? x.message : "Não consegui carregar as metas."));
  }, [e, n]);
  const c = (x) => {
    t(x), r(Mi(x, /* @__PURE__ */ new Date()));
  }, h = async () => {
    j(!0), m(null);
    try {
      const x = await Bh({ rep_id: p, period_type: e, period_key: n, target_amount: Number(g) });
      o((P) => [...(P ?? []).filter((R) => R.rep_id !== x.rep_id), x]), d(!1), f(""), y("");
    } catch (x) {
      m(x instanceof Error ? x.message : "Falha ao salvar meta.");
    } finally {
      j(!1);
    }
  }, w = p.trim() !== "" && Number(g) > 0;
  return /* @__PURE__ */ l.jsxs("div", { children: [
    /* @__PURE__ */ l.jsxs("div", { className: "lt-header lt-header-row", children: [
      /* @__PURE__ */ l.jsx("h2", { children: "Metas por representante" }),
      /* @__PURE__ */ l.jsx(D, { text: "Cadastro manual — sem meta definida, potencial financeiro é um número sem contexto pro dashboard." })
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
        /* @__PURE__ */ l.jsx("select", { value: n, onChange: (x) => r(x.target.value), children: Gm(/* @__PURE__ */ new Date()).map((x) => /* @__PURE__ */ l.jsx("option", { value: x, children: x }, x)) })
      ] }),
      /* @__PURE__ */ l.jsx("button", { type: "button", className: "lt-btn", onClick: () => d((x) => !x), children: u ? "Cancelar" : "Nova meta" })
    ] }),
    u && /* @__PURE__ */ l.jsxs("div", { className: "lt-source-card__form", children: [
      /* @__PURE__ */ l.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ l.jsxs("span", { children: [
          "Id do representante ",
          /* @__PURE__ */ l.jsx(D, { text: "Identificador usado nas oportunidades pra atribuir o pipeline a esse representante." })
        ] }),
        /* @__PURE__ */ l.jsx("input", { value: p, onChange: (x) => f(x.target.value) })
      ] }),
      /* @__PURE__ */ l.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ l.jsx("span", { children: "Meta financeira (R$) pro período selecionado acima" }),
        /* @__PURE__ */ l.jsx("input", { type: "number", min: "0", value: g, onChange: (x) => y(x.target.value) })
      ] }),
      _ && /* @__PURE__ */ l.jsx("p", { className: "lt-alert", role: "alert", children: _ }),
      /* @__PURE__ */ l.jsx("div", { className: "lt-detail-actions", children: /* @__PURE__ */ l.jsx("button", { type: "button", className: "lt-btn", onClick: h, disabled: S || !w, children: S ? "Salvando…" : "Salvar meta" }) })
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
function Xm(e) {
  if (e.relation_type) return `Relação: ${e.relation_type}`;
  if (e.requires_category.length) {
    const n = e.absent_category.length ? ` sem categoria ${e.absent_category.join(", ")}` : "";
    return `Categoria ${e.requires_category.join(", ")}${n}`;
  }
  const t = e.absent.length ? ` sem ${e.absent.join(", ")}` : "";
  return `Item ${e.requires.join(", ")}${t}`;
}
function Jm({ products: e, services: t }) {
  const [n, r] = v.useState(null), [a, o] = v.useState(null), [s, i] = v.useState(!1), [u, d] = v.useState("category"), [p, f] = v.useState("cross-sell"), [g, y] = v.useState(""), [S, j] = v.useState(""), [_, m] = v.useState(""), [c, h] = v.useState(""), [w, x] = v.useState(""), [P, R] = v.useState("prerequisite"), [N, z] = v.useState(!1), [b, B] = v.useState(null), [K, L] = v.useState(null), [Z, Q] = v.useState(null);
  v.useEffect(() => {
    Dh().then(r).catch((k) => o(k instanceof Error ? k.message : "Não consegui carregar as regras."));
  }, []);
  const A = Array.from(new Set([...e, ...t].map((k) => k.category).filter((k) => !!k))), G = [...e.map((k) => ({ id: k.id, label: k.name })), ...t.map((k) => ({ id: k.id, label: k.name }))], T = () => {
    y(""), j(""), m(""), h(""), x("");
  }, I = async () => {
    z(!0), B(null);
    const k = { opportunity_type: p, justification: g };
    u === "presence" ? (k.requires = S ? [S] : [], k.absent = _ ? [_] : []) : u === "category" ? (k.requires_category = c ? [c] : [], k.absent_category = w ? [w] : []) : k.relation_type = P;
    try {
      const fe = await Fh(k);
      r((Ee) => [...Ee ?? [], fe]), i(!1), T();
    } catch (fe) {
      B(fe instanceof Error ? fe.message : "Falha ao salvar regra.");
    } finally {
      z(!1);
    }
  }, E = async (k) => {
    if (window.confirm(`Remover a regra "${k.opportunity_type}"? Essa ação não pode ser desfeita.`)) {
      L(k.id), Q(null);
      try {
        await Mh(k.id), r((fe) => (fe ?? []).filter((Ee) => Ee.id !== k.id));
      } catch (fe) {
        Q(fe instanceof Error ? fe.message : "Falha ao remover regra.");
      } finally {
        L(null);
      }
    }
  };
  if (a) return /* @__PURE__ */ l.jsx("p", { className: "lt-alert", role: "alert", children: a });
  if (!n) return /* @__PURE__ */ l.jsx("p", { className: "lt-hint", children: "Carregando regras…" });
  const U = g.trim() !== "" && (u === "relation" || (u === "presence" ? S !== "" : c !== ""));
  return /* @__PURE__ */ l.jsxs("div", { children: [
    /* @__PURE__ */ l.jsxs("div", { className: "lt-header lt-header-row", children: [
      /* @__PURE__ */ l.jsx("h2", { children: "Regras" }),
      /* @__PURE__ */ l.jsx(D, { text: "Regras determinísticas que detectam oportunidade — sempre por categoria/item real do catálogo, nunca texto livre." })
    ] }),
    /* @__PURE__ */ l.jsx("div", { className: "lt-toolbar", children: /* @__PURE__ */ l.jsx("button", { type: "button", className: "lt-btn", onClick: () => i((k) => !k), children: s ? "Cancelar" : "Nova regra" }) }),
    s && /* @__PURE__ */ l.jsxs("div", { className: "lt-source-card__form", children: [
      /* @__PURE__ */ l.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ l.jsxs("span", { children: [
          "Tipo de regra ",
          /* @__PURE__ */ l.jsx(D, { text: "Categoria compara grupos de itens; item específico compara um produto/serviço só; relação reaproveita um vínculo já existente no catálogo." })
        ] }),
        /* @__PURE__ */ l.jsxs("select", { value: u, onChange: (k) => d(k.target.value), children: [
          /* @__PURE__ */ l.jsx("option", { value: "category", children: "Categoria (tenho X, não tenho Y)" }),
          /* @__PURE__ */ l.jsx("option", { value: "presence", children: "Item específico" }),
          /* @__PURE__ */ l.jsx("option", { value: "relation", children: "Relação já cadastrada no catálogo" })
        ] })
      ] }),
      u === "category" && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
        /* @__PURE__ */ l.jsxs("label", { className: "lt-field", children: [
          /* @__PURE__ */ l.jsx("span", { children: "Categoria que a empresa precisa ter" }),
          /* @__PURE__ */ l.jsxs("select", { value: c, onChange: (k) => h(k.target.value), children: [
            /* @__PURE__ */ l.jsx("option", { value: "", children: "Selecione…" }),
            A.map((k) => /* @__PURE__ */ l.jsx("option", { value: k, children: k }, k))
          ] })
        ] }),
        /* @__PURE__ */ l.jsxs("label", { className: "lt-field", children: [
          /* @__PURE__ */ l.jsx("span", { children: "Categoria que NÃO deve ter (opcional)" }),
          /* @__PURE__ */ l.jsxs("select", { value: w, onChange: (k) => x(k.target.value), children: [
            /* @__PURE__ */ l.jsx("option", { value: "", children: "Nenhuma" }),
            A.map((k) => /* @__PURE__ */ l.jsx("option", { value: k, children: k }, k))
          ] })
        ] })
      ] }),
      u === "presence" && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
        /* @__PURE__ */ l.jsxs("label", { className: "lt-field", children: [
          /* @__PURE__ */ l.jsx("span", { children: "Item que a empresa precisa ter" }),
          /* @__PURE__ */ l.jsxs("select", { value: S, onChange: (k) => j(k.target.value), children: [
            /* @__PURE__ */ l.jsx("option", { value: "", children: "Selecione…" }),
            G.map((k) => /* @__PURE__ */ l.jsx("option", { value: k.id, children: k.label }, k.id))
          ] })
        ] }),
        /* @__PURE__ */ l.jsxs("label", { className: "lt-field", children: [
          /* @__PURE__ */ l.jsx("span", { children: "Item que NÃO deve ter (opcional)" }),
          /* @__PURE__ */ l.jsxs("select", { value: _, onChange: (k) => m(k.target.value), children: [
            /* @__PURE__ */ l.jsx("option", { value: "", children: "Nenhum" }),
            G.map((k) => /* @__PURE__ */ l.jsx("option", { value: k.id, children: k.label }, k.id))
          ] })
        ] })
      ] }),
      u === "relation" && /* @__PURE__ */ l.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ l.jsxs("span", { children: [
          "Tipo de relação ",
          /* @__PURE__ */ l.jsx(D, { text: "Reaproveita a relação entre itens já definida no catálogo de portfólio." })
        ] }),
        /* @__PURE__ */ l.jsxs("select", { value: P, onChange: (k) => R(k.target.value), children: [
          /* @__PURE__ */ l.jsx("option", { value: "prerequisite", children: "Pré-requisito — gera alerta de risco técnico" }),
          /* @__PURE__ */ l.jsx("option", { value: "substitute", children: "Substituto — gera oportunidade de consolidação" })
        ] })
      ] }),
      /* @__PURE__ */ l.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ l.jsx("span", { children: "Rótulo da oportunidade (ex.: cross-sell, consolidation, risk)" }),
        /* @__PURE__ */ l.jsx("input", { value: p, onChange: (k) => f(k.target.value) })
      ] }),
      /* @__PURE__ */ l.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ l.jsx("span", { children: "Justificativa (aparece na oportunidade gerada)" }),
        /* @__PURE__ */ l.jsx("input", { value: g, onChange: (k) => y(k.target.value) })
      ] }),
      b && /* @__PURE__ */ l.jsx("p", { className: "lt-alert", role: "alert", children: b }),
      /* @__PURE__ */ l.jsx("div", { className: "lt-detail-actions", children: /* @__PURE__ */ l.jsx("button", { type: "button", className: "lt-btn", onClick: I, disabled: N || !U, children: N ? "Salvando…" : "Criar regra" }) })
    ] }),
    Z && /* @__PURE__ */ l.jsx("p", { className: "lt-alert", role: "alert", children: Z }),
    n.length === 0 ? /* @__PURE__ */ l.jsx("p", { className: "lt-empty", role: "status", children: "Nenhuma regra cadastrada ainda." }) : /* @__PURE__ */ l.jsxs("table", { className: "lt-table", children: [
      /* @__PURE__ */ l.jsx("thead", { children: /* @__PURE__ */ l.jsxs("tr", { children: [
        /* @__PURE__ */ l.jsx("th", { children: "Rótulo" }),
        /* @__PURE__ */ l.jsx("th", { children: "Condição" }),
        /* @__PURE__ */ l.jsx("th", { children: "Justificativa" }),
        /* @__PURE__ */ l.jsx("th", { children: "Ativa" }),
        /* @__PURE__ */ l.jsx("th", {})
      ] }) }),
      /* @__PURE__ */ l.jsx("tbody", { children: n.map((k) => /* @__PURE__ */ l.jsxs("tr", { children: [
        /* @__PURE__ */ l.jsx("td", { children: k.opportunity_type }),
        /* @__PURE__ */ l.jsx("td", { children: Xm(k) }),
        /* @__PURE__ */ l.jsx("td", { children: k.justification }),
        /* @__PURE__ */ l.jsx("td", { children: k.active ? "Sim" : "Não" }),
        /* @__PURE__ */ l.jsx("td", { children: /* @__PURE__ */ l.jsx("button", { type: "button", className: "lt-btn", onClick: () => E(k), disabled: K === k.id, children: K === k.id ? "Removendo…" : "Remover" }) })
      ] }, k.id)) })
    ] })
  ] });
}
const Zm = { connected: "🟢", failed: "🔴", unknown: "🔴" }, Ai = {
  connected: "Conectado",
  failed: "Desconectado",
  unknown: "Desconectado"
};
function eg({ source: e, onChange: t }) {
  const [n, r] = v.useState(e.enabled === !0), [a, o] = v.useState({}), [s, i] = v.useState(e.last_check), [u, d] = v.useState(!1), [p, f] = v.useState(null), g = async (j) => {
    d(!0);
    try {
      const _ = await ph(j);
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
      d(!0), f(null);
      try {
        const _ = await Ni(e.id, !1, {});
        t(_), i({ status: "unknown", message: "" });
      } catch (_) {
        f(_ instanceof Error ? _.message : "Falha ao salvar.");
      } finally {
        d(!1);
      }
    }
  }, S = async () => {
    d(!0), f(null);
    try {
      const j = await Ni(e.id, !0, a);
      t(j), o({}), await g(e.id);
    } catch (j) {
      f(j instanceof Error ? j.message : "Falha ao salvar.");
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
        e.enabled !== null && e.implemented && /* @__PURE__ */ l.jsxs("span", { className: "lt-conn-indicator", "aria-label": Ai[s.status], children: [
          Zm[s.status],
          " ",
          Ai[s.status]
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
    p && /* @__PURE__ */ l.jsx("p", { className: "lt-alert", role: "alert", children: p }),
    e.enabled !== null && /* @__PURE__ */ l.jsxs("div", { className: "lt-source-card__form", children: [
      e.fields.map((j) => /* @__PURE__ */ l.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ l.jsxs("span", { children: [
          j.label,
          " ",
          /* @__PURE__ */ l.jsx(D, { text: j.help_text })
        ] }),
        /* @__PURE__ */ l.jsx(
          "input",
          {
            type: j.secret ? "password" : "text",
            placeholder: j.has_value ? "••••••••" : "",
            disabled: !n,
            onChange: (_) => o((m) => ({ ...m, [j.key]: _.target.value }))
          }
        )
      ] }, j.key)),
      /* @__PURE__ */ l.jsx("div", { className: "lt-detail-actions", children: /* @__PURE__ */ l.jsx("button", { type: "button", className: "lt-btn", onClick: S, disabled: u || !n, children: "Salvar e conectar" }) })
    ] })
  ] });
}
function tg() {
  const [e, t] = v.useState(""), [n, r] = v.useState(""), [a, o] = v.useState(""), [s, i] = v.useState(""), [u, d] = v.useState(!1), [p, f] = v.useState(null), [g, y] = v.useState(null), [S, j] = v.useState(null);
  v.useEffect(() => {
    Promise.all([oh(), ih(), ch()]).then(([h, w, x]) => {
      t(String(h.days)), r(String(w.min_sample)), o(String(x.min_score)), i(String(x.daily_cap)), d(!0);
    }).catch((h) => f(h instanceof Error ? h.message : "Não consegui carregar os limites configurados."));
  }, []);
  const _ = async () => {
    j("sla"), f(null), y(null);
    try {
      const h = await sh(Number(e));
      t(String(h.days)), y("Prazo de triagem salvo.");
    } catch (h) {
      f(h instanceof Error ? h.message : "Falha ao salvar o prazo de triagem.");
    } finally {
      j(null);
    }
  }, m = async () => {
    j("sample"), f(null), y(null);
    try {
      const h = await uh(Number(n));
      r(String(h.min_sample)), y("Mínimo de oportunidades por par salvo.");
    } catch (h) {
      f(h instanceof Error ? h.message : "Falha ao salvar o mínimo de oportunidades por par.");
    } finally {
      j(null);
    }
  }, c = async () => {
    j("geo"), f(null), y(null);
    try {
      const h = await dh(Number(a), Number(s));
      o(String(h.min_score)), i(String(h.daily_cap)), y("Limites de promoção geográfica salvos.");
    } catch (h) {
      f(h instanceof Error ? h.message : "Falha ao salvar os limites de promoção geográfica.");
    } finally {
      j(null);
    }
  };
  return p && !u ? /* @__PURE__ */ l.jsx("p", { className: "lt-alert", role: "alert", children: p }) : u ? /* @__PURE__ */ l.jsxs("div", { className: "lt-source-card", children: [
    /* @__PURE__ */ l.jsx("div", { className: "lt-source-card__header", children: /* @__PURE__ */ l.jsxs("div", { className: "lt-header-row", children: [
      /* @__PURE__ */ l.jsx("p", { className: "lt-source-card__title", children: "Limites e prazos" }),
      /* @__PURE__ */ l.jsx(D, { text: "Controla quando uma oportunidade conta como atrasada na triagem e quantas descobertas de geolocalização entram automaticamente por dia." })
    ] }) }),
    /* @__PURE__ */ l.jsxs("div", { className: "lt-source-card__form", children: [
      /* @__PURE__ */ l.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ l.jsxs("span", { children: [
          "Prazo de triagem (dias) ",
          /* @__PURE__ */ l.jsx(D, { text: 'Detectada sem virar qualificada nem descartada depois desse prazo conta como "triagem atrasada" no dashboard.' })
        ] }),
        /* @__PURE__ */ l.jsx(
          "input",
          {
            type: "number",
            min: 1,
            value: e,
            onChange: (h) => t(h.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ l.jsx("div", { className: "lt-detail-actions", children: /* @__PURE__ */ l.jsx("button", { type: "button", className: "lt-btn", onClick: _, disabled: S === "sla", children: S === "sla" ? "Salvando…" : "Salvar prazo de triagem" }) }),
      /* @__PURE__ */ l.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ l.jsxs("span", { children: [
          "Mínimo de oportunidades por representante e categoria ",
          /* @__PURE__ */ l.jsx(D, { text: 'Abaixo disso, o par aparece como "dado insuficiente" no dashboard — nunca como 0%.' })
        ] }),
        /* @__PURE__ */ l.jsx(
          "input",
          {
            type: "number",
            min: 1,
            value: n,
            onChange: (h) => r(h.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ l.jsx("div", { className: "lt-detail-actions", children: /* @__PURE__ */ l.jsx("button", { type: "button", className: "lt-btn", onClick: m, disabled: S === "sample", children: S === "sample" ? "Salvando…" : "Salvar mínimo por par" }) }),
      /* @__PURE__ */ l.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ l.jsxs("span", { children: [
          "Score mínimo pra promoção automática ",
          /* @__PURE__ */ l.jsx(D, { text: "De 0.0 a 1.0 — quanto maior, mais seletiva a promoção automática." })
        ] }),
        /* @__PURE__ */ l.jsx(
          "input",
          {
            type: "number",
            min: 0,
            max: 1,
            step: 0.01,
            value: a,
            onChange: (h) => o(h.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ l.jsxs("label", { className: "lt-field", children: [
        /* @__PURE__ */ l.jsxs("span", { children: [
          "Limite diário de promoções automáticas ",
          /* @__PURE__ */ l.jsx(D, { text: "Teto de descobertas geográficas promovidas automaticamente por dia." })
        ] }),
        /* @__PURE__ */ l.jsx(
          "input",
          {
            type: "number",
            min: 1,
            value: s,
            onChange: (h) => i(h.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ l.jsx("div", { className: "lt-detail-actions", children: /* @__PURE__ */ l.jsx("button", { type: "button", className: "lt-btn", onClick: c, disabled: S === "geo", children: S === "geo" ? "Salvando…" : "Salvar limites de promoção geográfica" }) }),
      p && /* @__PURE__ */ l.jsx("p", { className: "lt-alert", role: "alert", children: p }),
      g && /* @__PURE__ */ l.jsx("p", { className: "lt-hint", role: "status", children: g })
    ] })
  ] }) : /* @__PURE__ */ l.jsx("p", { className: "lt-hint", children: "Carregando…" });
}
function ng(e) {
  if (e.length === 0) return "Nenhuma fonte habilitada — ligue uma fonte acima antes de sincronizar.";
  const t = e.reduce((o, s) => o + s.companiesSynced, 0), n = e.reduce((o, s) => o + s.contactsSynced, 0), r = e.flatMap((o) => o.errors), a = `${t} empresa(s) e ${n} contato(s) sincronizados.`;
  return r.length > 0 ? `${a} Alguns erros: ${r.join("; ")}` : a;
}
function rg() {
  var j;
  const [e, t] = v.useState(null), [n, r] = v.useState(null), [a, o] = v.useState(!1), [s, i] = v.useState(null), [u, d] = v.useState(null), [p, f] = v.useState(null), [g, y] = v.useState(null);
  v.useEffect(() => {
    ah().then(t).catch((_) => r(_ instanceof Error ? _.message : "Não consegui carregar as configurações.")), Promise.all([id(), Lh()]).then(([_, m]) => {
      d(_), f(m);
    }).catch((_) => y(_ instanceof Error ? _.message : "Não consegui carregar o portfólio."));
  }, []);
  const S = async () => {
    o(!0), i(null);
    try {
      const _ = await Sh();
      i(ng(_));
    } catch (_) {
      i(_ instanceof Error ? _.message : "Falha ao sincronizar.");
    } finally {
      o(!1);
    }
  };
  return n ? /* @__PURE__ */ l.jsx("p", { className: "lt-alert", role: "alert", children: n }) : e ? /* @__PURE__ */ l.jsxs("div", { children: [
    /* @__PURE__ */ l.jsxs("div", { className: "lt-header lt-header-row", children: [
      /* @__PURE__ */ l.jsx("h2", { children: "Configurações de Fontes" }),
      /* @__PURE__ */ l.jsx(D, { text: "Ligue as fontes de dados que o Lead.Tracker deve usar para encontrar oportunidades." })
    ] }),
    /* @__PURE__ */ l.jsx("div", { className: "lt-toolbar", children: /* @__PURE__ */ l.jsx("button", { type: "button", className: "lt-btn", onClick: S, disabled: a, "aria-busy": a, children: a ? "Sincronizando…" : "Atualizar dados" }) }),
    s && /* @__PURE__ */ l.jsx("p", { className: "lt-hint", role: "status", children: s }),
    /* @__PURE__ */ l.jsxs("div", { className: "lt-source-grid", children: [
      /* @__PURE__ */ l.jsx(Qm, {}),
      e.map((_) => /* @__PURE__ */ l.jsx(
        eg,
        {
          source: _,
          onChange: (m) => t((c) => c.map((h) => h.id === m.id ? m : h))
        },
        _.id
      ))
    ] }),
    /* @__PURE__ */ l.jsx(qm, {}),
    ((j = e.find((_) => _.id === "salesforce")) == null ? void 0 : j.enabled) && /* @__PURE__ */ l.jsx(Wm, {}),
    /* @__PURE__ */ l.jsx(Um, {}),
    /* @__PURE__ */ l.jsx(tg, {}),
    /* @__PURE__ */ l.jsx(
      Km,
      {
        products: u,
        services: p,
        loadError: g,
        onProductCreated: (_) => d((m) => [...m ?? [], _]),
        onServiceCreated: (_) => f((m) => [...m ?? [], _]),
        onProductDeleted: (_) => d((m) => (m ?? []).filter((c) => c.id !== _)),
        onServiceDeleted: (_) => f((m) => (m ?? []).filter((c) => c.id !== _))
      }
    ),
    /* @__PURE__ */ l.jsx(Jm, { products: u ?? [], services: p ?? [] }),
    /* @__PURE__ */ l.jsx(Ym, {})
  ] }) : /* @__PURE__ */ l.jsx("p", { className: "lt-hint", children: "Carregando..." });
}
const ag = `
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
function lg() {
  const [e, t] = v.useState(null), [n, r] = v.useState(null), [a, o] = v.useState(hm), [s, i] = v.useState(null), [u, d] = v.useState(null), [p, f] = v.useState(() => localStorage.getItem("lt_rep_id") ?? ""), g = (c) => {
    f(c), localStorage.setItem("lt_rep_id", c);
  }, y = () => {
    ld().then(t).catch((c) => r(c instanceof Error ? c.message : "Não consegui carregar as oportunidades."));
  };
  v.useEffect(y, []);
  const S = e ? vm(e, a) : [], j = (c) => {
    t((h) => h && h.map((w) => w.id === c.id ? c : w));
  }, _ = () => y(), m = async (c) => {
    i(null), d(c);
    try {
      const h = gm(a);
      c === "pdf" ? await Yf(S, h) : await Xf(S);
    } catch (h) {
      i(h instanceof Error ? h.message : "Falha ao exportar.");
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
        /* @__PURE__ */ l.jsx("input", { value: p, onChange: (c) => g(c.target.value), placeholder: "Id ou nome do representante" })
      ] }),
      /* @__PURE__ */ l.jsx("button", { type: "button", className: "lt-btn", onClick: () => m("pdf"), disabled: u !== null, "aria-busy": u === "pdf", children: u === "pdf" ? "Gerando PDF…" : "PDF" }),
      /* @__PURE__ */ l.jsx("button", { type: "button", className: "lt-btn", onClick: () => m("excel"), disabled: u !== null, "aria-busy": u === "excel", children: u === "excel" ? "Gerando Excel…" : "Excel" })
    ] }),
    s && /* @__PURE__ */ l.jsx("p", { className: "lt-alert", role: "alert", children: s }),
    /* @__PURE__ */ l.jsx(mm, { rows: e, value: a, onChange: o }),
    e.length === 0 ? /* @__PURE__ */ l.jsx("p", { className: "lt-empty", role: "status", children: "Nenhuma oportunidade ainda — rode uma sincronização em Configurações." }) : /* @__PURE__ */ l.jsx(
      Mm,
      {
        rows: S,
        repId: p,
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
function og() {
  const [e, t] = v.useState("dashboard"), n = (r, a) => {
    var i;
    let o = null;
    if (r.key === "ArrowRight" ? o = (a + 1) % $t.length : r.key === "ArrowLeft" ? o = (a - 1 + $t.length) % $t.length : r.key === "Home" ? o = 0 : r.key === "End" && (o = $t.length - 1), o === null) return;
    r.preventDefault(), t($t[o].id);
    const s = (i = r.currentTarget.parentElement) == null ? void 0 : i.children[o];
    s == null || s.focus();
  };
  return /* @__PURE__ */ l.jsxs("div", { className: "lt-root", children: [
    /* @__PURE__ */ l.jsx("style", { children: ag }),
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
          r.id === "dashboard" && /* @__PURE__ */ l.jsx(fm, {}),
          r.id === "oportunidades" && /* @__PURE__ */ l.jsx(lg, {}),
          r.id === "prospeccao" && /* @__PURE__ */ l.jsx(xm, {}),
          r.id === "configuracoes" && /* @__PURE__ */ l.jsx(rg, {})
        ] })
      },
      r.id
    ))
  ] });
}
const sg = {
  moduleId: "lead_tracker",
  title: "Lead.Tracker",
  icon: "target",
  category: "Sales",
  vendor: "TechForge",
  route: "/modules/lead_tracker",
  description: "Opportunity Intelligence — tela de oportunidades."
};
let Ui = null;
function ig(e) {
  Ui = ed(e), Ui.render(/* @__PURE__ */ l.jsx(og, {}));
}
const ug = { render: ig, moduleConfig: sg };
export {
  ug as default
};
