// Tech.Forge Module Host contract: this bundle's `export default` is the render() entry point.
var CE = { exports: {} }, Zp = {}, Xm = { exports: {} }, St = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cR;
function yk() {
  if (cR) return St;
  cR = 1;
  var T = Symbol.for("react.element"), O = Symbol.for("react.portal"), k = Symbol.for("react.fragment"), ge = Symbol.for("react.strict_mode"), Re = Symbol.for("react.profiler"), ee = Symbol.for("react.provider"), g = Symbol.for("react.context"), Ne = Symbol.for("react.forward_ref"), G = Symbol.for("react.suspense"), Y = Symbol.for("react.memo"), be = Symbol.for("react.lazy"), re = Symbol.iterator;
  function we(D) {
    return D === null || typeof D != "object" ? null : (D = re && D[re] || D["@@iterator"], typeof D == "function" ? D : null);
  }
  var fe = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, Xe = Object.assign, Et = {};
  function mt(D, $, Ie) {
    this.props = D, this.context = $, this.refs = Et, this.updater = Ie || fe;
  }
  mt.prototype.isReactComponent = {}, mt.prototype.setState = function(D, $) {
    if (typeof D != "object" && typeof D != "function" && D != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, D, $, "setState");
  }, mt.prototype.forceUpdate = function(D) {
    this.updater.enqueueForceUpdate(this, D, "forceUpdate");
  };
  function fn() {
  }
  fn.prototype = mt.prototype;
  function ht(D, $, Ie) {
    this.props = D, this.context = $, this.refs = Et, this.updater = Ie || fe;
  }
  var Ke = ht.prototype = new fn();
  Ke.constructor = ht, Xe(Ke, mt.prototype), Ke.isPureReactComponent = !0;
  var yt = Array.isArray, Le = Object.prototype.hasOwnProperty, dt = { current: null }, $e = { key: !0, ref: !0, __self: !0, __source: !0 };
  function an(D, $, Ie) {
    var Ve, ot = {}, at = null, nt = null;
    if ($ != null) for (Ve in $.ref !== void 0 && (nt = $.ref), $.key !== void 0 && (at = "" + $.key), $) Le.call($, Ve) && !$e.hasOwnProperty(Ve) && (ot[Ve] = $[Ve]);
    var it = arguments.length - 2;
    if (it === 1) ot.children = Ie;
    else if (1 < it) {
      for (var st = Array(it), Bt = 0; Bt < it; Bt++) st[Bt] = arguments[Bt + 2];
      ot.children = st;
    }
    if (D && D.defaultProps) for (Ve in it = D.defaultProps, it) ot[Ve] === void 0 && (ot[Ve] = it[Ve]);
    return { $$typeof: T, type: D, key: at, ref: nt, props: ot, _owner: dt.current };
  }
  function Ht(D, $) {
    return { $$typeof: T, type: D.type, key: $, ref: D.ref, props: D.props, _owner: D._owner };
  }
  function Jt(D) {
    return typeof D == "object" && D !== null && D.$$typeof === T;
  }
  function ln(D) {
    var $ = { "=": "=0", ":": "=2" };
    return "$" + D.replace(/[=:]/g, function(Ie) {
      return $[Ie];
    });
  }
  var _t = /\/+/g;
  function Ue(D, $) {
    return typeof D == "object" && D !== null && D.key != null ? ln("" + D.key) : $.toString(36);
  }
  function At(D, $, Ie, Ve, ot) {
    var at = typeof D;
    (at === "undefined" || at === "boolean") && (D = null);
    var nt = !1;
    if (D === null) nt = !0;
    else switch (at) {
      case "string":
      case "number":
        nt = !0;
        break;
      case "object":
        switch (D.$$typeof) {
          case T:
          case O:
            nt = !0;
        }
    }
    if (nt) return nt = D, ot = ot(nt), D = Ve === "" ? "." + Ue(nt, 0) : Ve, yt(ot) ? (Ie = "", D != null && (Ie = D.replace(_t, "$&/") + "/"), At(ot, $, Ie, "", function(Bt) {
      return Bt;
    })) : ot != null && (Jt(ot) && (ot = Ht(ot, Ie + (!ot.key || nt && nt.key === ot.key ? "" : ("" + ot.key).replace(_t, "$&/") + "/") + D)), $.push(ot)), 1;
    if (nt = 0, Ve = Ve === "" ? "." : Ve + ":", yt(D)) for (var it = 0; it < D.length; it++) {
      at = D[it];
      var st = Ve + Ue(at, it);
      nt += At(at, $, Ie, st, ot);
    }
    else if (st = we(D), typeof st == "function") for (D = st.call(D), it = 0; !(at = D.next()).done; ) at = at.value, st = Ve + Ue(at, it++), nt += At(at, $, Ie, st, ot);
    else if (at === "object") throw $ = String(D), Error("Objects are not valid as a React child (found: " + ($ === "[object Object]" ? "object with keys {" + Object.keys(D).join(", ") + "}" : $) + "). If you meant to render a collection of children, use an array instead.");
    return nt;
  }
  function kt(D, $, Ie) {
    if (D == null) return D;
    var Ve = [], ot = 0;
    return At(D, Ve, "", "", function(at) {
      return $.call(Ie, at, ot++);
    }), Ve;
  }
  function Ot(D) {
    if (D._status === -1) {
      var $ = D._result;
      $ = $(), $.then(function(Ie) {
        (D._status === 0 || D._status === -1) && (D._status = 1, D._result = Ie);
      }, function(Ie) {
        (D._status === 0 || D._status === -1) && (D._status = 2, D._result = Ie);
      }), D._status === -1 && (D._status = 0, D._result = $);
    }
    if (D._status === 1) return D._result.default;
    throw D._result;
  }
  var Te = { current: null }, ne = { transition: null }, _e = { ReactCurrentDispatcher: Te, ReactCurrentBatchConfig: ne, ReactCurrentOwner: dt };
  function le() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return St.Children = { map: kt, forEach: function(D, $, Ie) {
    kt(D, function() {
      $.apply(this, arguments);
    }, Ie);
  }, count: function(D) {
    var $ = 0;
    return kt(D, function() {
      $++;
    }), $;
  }, toArray: function(D) {
    return kt(D, function($) {
      return $;
    }) || [];
  }, only: function(D) {
    if (!Jt(D)) throw Error("React.Children.only expected to receive a single React element child.");
    return D;
  } }, St.Component = mt, St.Fragment = k, St.Profiler = Re, St.PureComponent = ht, St.StrictMode = ge, St.Suspense = G, St.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = _e, St.act = le, St.cloneElement = function(D, $, Ie) {
    if (D == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + D + ".");
    var Ve = Xe({}, D.props), ot = D.key, at = D.ref, nt = D._owner;
    if ($ != null) {
      if ($.ref !== void 0 && (at = $.ref, nt = dt.current), $.key !== void 0 && (ot = "" + $.key), D.type && D.type.defaultProps) var it = D.type.defaultProps;
      for (st in $) Le.call($, st) && !$e.hasOwnProperty(st) && (Ve[st] = $[st] === void 0 && it !== void 0 ? it[st] : $[st]);
    }
    var st = arguments.length - 2;
    if (st === 1) Ve.children = Ie;
    else if (1 < st) {
      it = Array(st);
      for (var Bt = 0; Bt < st; Bt++) it[Bt] = arguments[Bt + 2];
      Ve.children = it;
    }
    return { $$typeof: T, type: D.type, key: ot, ref: at, props: Ve, _owner: nt };
  }, St.createContext = function(D) {
    return D = { $$typeof: g, _currentValue: D, _currentValue2: D, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, D.Provider = { $$typeof: ee, _context: D }, D.Consumer = D;
  }, St.createElement = an, St.createFactory = function(D) {
    var $ = an.bind(null, D);
    return $.type = D, $;
  }, St.createRef = function() {
    return { current: null };
  }, St.forwardRef = function(D) {
    return { $$typeof: Ne, render: D };
  }, St.isValidElement = Jt, St.lazy = function(D) {
    return { $$typeof: be, _payload: { _status: -1, _result: D }, _init: Ot };
  }, St.memo = function(D, $) {
    return { $$typeof: Y, type: D, compare: $ === void 0 ? null : $ };
  }, St.startTransition = function(D) {
    var $ = ne.transition;
    ne.transition = {};
    try {
      D();
    } finally {
      ne.transition = $;
    }
  }, St.unstable_act = le, St.useCallback = function(D, $) {
    return Te.current.useCallback(D, $);
  }, St.useContext = function(D) {
    return Te.current.useContext(D);
  }, St.useDebugValue = function() {
  }, St.useDeferredValue = function(D) {
    return Te.current.useDeferredValue(D);
  }, St.useEffect = function(D, $) {
    return Te.current.useEffect(D, $);
  }, St.useId = function() {
    return Te.current.useId();
  }, St.useImperativeHandle = function(D, $, Ie) {
    return Te.current.useImperativeHandle(D, $, Ie);
  }, St.useInsertionEffect = function(D, $) {
    return Te.current.useInsertionEffect(D, $);
  }, St.useLayoutEffect = function(D, $) {
    return Te.current.useLayoutEffect(D, $);
  }, St.useMemo = function(D, $) {
    return Te.current.useMemo(D, $);
  }, St.useReducer = function(D, $, Ie) {
    return Te.current.useReducer(D, $, Ie);
  }, St.useRef = function(D) {
    return Te.current.useRef(D);
  }, St.useState = function(D) {
    return Te.current.useState(D);
  }, St.useSyncExternalStore = function(D, $, Ie) {
    return Te.current.useSyncExternalStore(D, $, Ie);
  }, St.useTransition = function() {
    return Te.current.useTransition();
  }, St.version = "18.3.1", St;
}
var tv = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
tv.exports;
var fR;
function gk() {
  return fR || (fR = 1, function(T, O) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var k = "18.3.1", ge = Symbol.for("react.element"), Re = Symbol.for("react.portal"), ee = Symbol.for("react.fragment"), g = Symbol.for("react.strict_mode"), Ne = Symbol.for("react.profiler"), G = Symbol.for("react.provider"), Y = Symbol.for("react.context"), be = Symbol.for("react.forward_ref"), re = Symbol.for("react.suspense"), we = Symbol.for("react.suspense_list"), fe = Symbol.for("react.memo"), Xe = Symbol.for("react.lazy"), Et = Symbol.for("react.offscreen"), mt = Symbol.iterator, fn = "@@iterator";
      function ht(h) {
        if (h === null || typeof h != "object")
          return null;
        var C = mt && h[mt] || h[fn];
        return typeof C == "function" ? C : null;
      }
      var Ke = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, yt = {
        transition: null
      }, Le = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, dt = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, $e = {}, an = null;
      function Ht(h) {
        an = h;
      }
      $e.setExtraStackFrame = function(h) {
        an = h;
      }, $e.getCurrentStack = null, $e.getStackAddendum = function() {
        var h = "";
        an && (h += an);
        var C = $e.getCurrentStack;
        return C && (h += C() || ""), h;
      };
      var Jt = !1, ln = !1, _t = !1, Ue = !1, At = !1, kt = {
        ReactCurrentDispatcher: Ke,
        ReactCurrentBatchConfig: yt,
        ReactCurrentOwner: dt
      };
      kt.ReactDebugCurrentFrame = $e, kt.ReactCurrentActQueue = Le;
      function Ot(h) {
        {
          for (var C = arguments.length, A = new Array(C > 1 ? C - 1 : 0), P = 1; P < C; P++)
            A[P - 1] = arguments[P];
          ne("warn", h, A);
        }
      }
      function Te(h) {
        {
          for (var C = arguments.length, A = new Array(C > 1 ? C - 1 : 0), P = 1; P < C; P++)
            A[P - 1] = arguments[P];
          ne("error", h, A);
        }
      }
      function ne(h, C, A) {
        {
          var P = kt.ReactDebugCurrentFrame, te = P.getStackAddendum();
          te !== "" && (C += "%s", A = A.concat([te]));
          var je = A.map(function(ue) {
            return String(ue);
          });
          je.unshift("Warning: " + C), Function.prototype.apply.call(console[h], console, je);
        }
      }
      var _e = {};
      function le(h, C) {
        {
          var A = h.constructor, P = A && (A.displayName || A.name) || "ReactClass", te = P + "." + C;
          if (_e[te])
            return;
          Te("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", C, P), _e[te] = !0;
        }
      }
      var D = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(h) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(h, C, A) {
          le(h, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(h, C, A, P) {
          le(h, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(h, C, A, P) {
          le(h, "setState");
        }
      }, $ = Object.assign, Ie = {};
      Object.freeze(Ie);
      function Ve(h, C, A) {
        this.props = h, this.context = C, this.refs = Ie, this.updater = A || D;
      }
      Ve.prototype.isReactComponent = {}, Ve.prototype.setState = function(h, C) {
        if (typeof h != "object" && typeof h != "function" && h != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, h, C, "setState");
      }, Ve.prototype.forceUpdate = function(h) {
        this.updater.enqueueForceUpdate(this, h, "forceUpdate");
      };
      {
        var ot = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, at = function(h, C) {
          Object.defineProperty(Ve.prototype, h, {
            get: function() {
              Ot("%s(...) is deprecated in plain JavaScript React classes. %s", C[0], C[1]);
            }
          });
        };
        for (var nt in ot)
          ot.hasOwnProperty(nt) && at(nt, ot[nt]);
      }
      function it() {
      }
      it.prototype = Ve.prototype;
      function st(h, C, A) {
        this.props = h, this.context = C, this.refs = Ie, this.updater = A || D;
      }
      var Bt = st.prototype = new it();
      Bt.constructor = st, $(Bt, Ve.prototype), Bt.isPureReactComponent = !0;
      function On() {
        var h = {
          current: null
        };
        return Object.seal(h), h;
      }
      var br = Array.isArray;
      function Cn(h) {
        return br(h);
      }
      function nr(h) {
        {
          var C = typeof Symbol == "function" && Symbol.toStringTag, A = C && h[Symbol.toStringTag] || h.constructor.name || "Object";
          return A;
        }
      }
      function Vn(h) {
        try {
          return Bn(h), !1;
        } catch {
          return !0;
        }
      }
      function Bn(h) {
        return "" + h;
      }
      function Ir(h) {
        if (Vn(h))
          return Te("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", nr(h)), Bn(h);
      }
      function si(h, C, A) {
        var P = h.displayName;
        if (P)
          return P;
        var te = C.displayName || C.name || "";
        return te !== "" ? A + "(" + te + ")" : A;
      }
      function oa(h) {
        return h.displayName || "Context";
      }
      function qn(h) {
        if (h == null)
          return null;
        if (typeof h.tag == "number" && Te("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof h == "function")
          return h.displayName || h.name || null;
        if (typeof h == "string")
          return h;
        switch (h) {
          case ee:
            return "Fragment";
          case Re:
            return "Portal";
          case Ne:
            return "Profiler";
          case g:
            return "StrictMode";
          case re:
            return "Suspense";
          case we:
            return "SuspenseList";
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case Y:
              var C = h;
              return oa(C) + ".Consumer";
            case G:
              var A = h;
              return oa(A._context) + ".Provider";
            case be:
              return si(h, h.render, "ForwardRef");
            case fe:
              var P = h.displayName || null;
              return P !== null ? P : qn(h.type) || "Memo";
            case Xe: {
              var te = h, je = te._payload, ue = te._init;
              try {
                return qn(ue(je));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var xn = Object.prototype.hasOwnProperty, $n = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, gr, Ia, Nn;
      Nn = {};
      function Sr(h) {
        if (xn.call(h, "ref")) {
          var C = Object.getOwnPropertyDescriptor(h, "ref").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return h.ref !== void 0;
      }
      function sa(h) {
        if (xn.call(h, "key")) {
          var C = Object.getOwnPropertyDescriptor(h, "key").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return h.key !== void 0;
      }
      function Ya(h, C) {
        var A = function() {
          gr || (gr = !0, Te("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        A.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: A,
          configurable: !0
        });
      }
      function ci(h, C) {
        var A = function() {
          Ia || (Ia = !0, Te("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        A.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: A,
          configurable: !0
        });
      }
      function ae(h) {
        if (typeof h.ref == "string" && dt.current && h.__self && dt.current.stateNode !== h.__self) {
          var C = qn(dt.current.type);
          Nn[C] || (Te('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C, h.ref), Nn[C] = !0);
        }
      }
      var ke = function(h, C, A, P, te, je, ue) {
        var He = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: ge,
          // Built-in properties that belong on the element
          type: h,
          key: C,
          ref: A,
          props: ue,
          // Record the component responsible for creating this element.
          _owner: je
        };
        return He._store = {}, Object.defineProperty(He._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(He, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: P
        }), Object.defineProperty(He, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: te
        }), Object.freeze && (Object.freeze(He.props), Object.freeze(He)), He;
      };
      function lt(h, C, A) {
        var P, te = {}, je = null, ue = null, He = null, vt = null;
        if (C != null) {
          Sr(C) && (ue = C.ref, ae(C)), sa(C) && (Ir(C.key), je = "" + C.key), He = C.__self === void 0 ? null : C.__self, vt = C.__source === void 0 ? null : C.__source;
          for (P in C)
            xn.call(C, P) && !$n.hasOwnProperty(P) && (te[P] = C[P]);
        }
        var wt = arguments.length - 2;
        if (wt === 1)
          te.children = A;
        else if (wt > 1) {
          for (var nn = Array(wt), Qt = 0; Qt < wt; Qt++)
            nn[Qt] = arguments[Qt + 2];
          Object.freeze && Object.freeze(nn), te.children = nn;
        }
        if (h && h.defaultProps) {
          var ut = h.defaultProps;
          for (P in ut)
            te[P] === void 0 && (te[P] = ut[P]);
        }
        if (je || ue) {
          var Wt = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          je && Ya(te, Wt), ue && ci(te, Wt);
        }
        return ke(h, je, ue, He, vt, dt.current, te);
      }
      function Ft(h, C) {
        var A = ke(h.type, C, h.ref, h._self, h._source, h._owner, h.props);
        return A;
      }
      function Zt(h, C, A) {
        if (h == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + h + ".");
        var P, te = $({}, h.props), je = h.key, ue = h.ref, He = h._self, vt = h._source, wt = h._owner;
        if (C != null) {
          Sr(C) && (ue = C.ref, wt = dt.current), sa(C) && (Ir(C.key), je = "" + C.key);
          var nn;
          h.type && h.type.defaultProps && (nn = h.type.defaultProps);
          for (P in C)
            xn.call(C, P) && !$n.hasOwnProperty(P) && (C[P] === void 0 && nn !== void 0 ? te[P] = nn[P] : te[P] = C[P]);
        }
        var Qt = arguments.length - 2;
        if (Qt === 1)
          te.children = A;
        else if (Qt > 1) {
          for (var ut = Array(Qt), Wt = 0; Wt < Qt; Wt++)
            ut[Wt] = arguments[Wt + 2];
          te.children = ut;
        }
        return ke(h.type, je, ue, He, vt, wt, te);
      }
      function vn(h) {
        return typeof h == "object" && h !== null && h.$$typeof === ge;
      }
      var un = ".", Xn = ":";
      function en(h) {
        var C = /[=:]/g, A = {
          "=": "=0",
          ":": "=2"
        }, P = h.replace(C, function(te) {
          return A[te];
        });
        return "$" + P;
      }
      var $t = !1, It = /\/+/g;
      function ca(h) {
        return h.replace(It, "$&/");
      }
      function Er(h, C) {
        return typeof h == "object" && h !== null && h.key != null ? (Ir(h.key), en("" + h.key)) : C.toString(36);
      }
      function Ra(h, C, A, P, te) {
        var je = typeof h;
        (je === "undefined" || je === "boolean") && (h = null);
        var ue = !1;
        if (h === null)
          ue = !0;
        else
          switch (je) {
            case "string":
            case "number":
              ue = !0;
              break;
            case "object":
              switch (h.$$typeof) {
                case ge:
                case Re:
                  ue = !0;
              }
          }
        if (ue) {
          var He = h, vt = te(He), wt = P === "" ? un + Er(He, 0) : P;
          if (Cn(vt)) {
            var nn = "";
            wt != null && (nn = ca(wt) + "/"), Ra(vt, C, nn, "", function(Kf) {
              return Kf;
            });
          } else vt != null && (vn(vt) && (vt.key && (!He || He.key !== vt.key) && Ir(vt.key), vt = Ft(
            vt,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            A + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (vt.key && (!He || He.key !== vt.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              ca("" + vt.key) + "/"
            ) : "") + wt
          )), C.push(vt));
          return 1;
        }
        var Qt, ut, Wt = 0, hn = P === "" ? un : P + Xn;
        if (Cn(h))
          for (var xl = 0; xl < h.length; xl++)
            Qt = h[xl], ut = hn + Er(Qt, xl), Wt += Ra(Qt, C, A, ut, te);
        else {
          var Xo = ht(h);
          if (typeof Xo == "function") {
            var Bi = h;
            Xo === Bi.entries && ($t || Ot("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), $t = !0);
            for (var Ko = Xo.call(Bi), ou, Xf = 0; !(ou = Ko.next()).done; )
              Qt = ou.value, ut = hn + Er(Qt, Xf++), Wt += Ra(Qt, C, A, ut, te);
          } else if (je === "object") {
            var cc = String(h);
            throw new Error("Objects are not valid as a React child (found: " + (cc === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : cc) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return Wt;
      }
      function Hi(h, C, A) {
        if (h == null)
          return h;
        var P = [], te = 0;
        return Ra(h, P, "", "", function(je) {
          return C.call(A, je, te++);
        }), P;
      }
      function Zl(h) {
        var C = 0;
        return Hi(h, function() {
          C++;
        }), C;
      }
      function eu(h, C, A) {
        Hi(h, function() {
          C.apply(this, arguments);
        }, A);
      }
      function pl(h) {
        return Hi(h, function(C) {
          return C;
        }) || [];
      }
      function vl(h) {
        if (!vn(h))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return h;
      }
      function tu(h) {
        var C = {
          $$typeof: Y,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: h,
          _currentValue2: h,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        C.Provider = {
          $$typeof: G,
          _context: C
        };
        var A = !1, P = !1, te = !1;
        {
          var je = {
            $$typeof: Y,
            _context: C
          };
          Object.defineProperties(je, {
            Provider: {
              get: function() {
                return P || (P = !0, Te("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), C.Provider;
              },
              set: function(ue) {
                C.Provider = ue;
              }
            },
            _currentValue: {
              get: function() {
                return C._currentValue;
              },
              set: function(ue) {
                C._currentValue = ue;
              }
            },
            _currentValue2: {
              get: function() {
                return C._currentValue2;
              },
              set: function(ue) {
                C._currentValue2 = ue;
              }
            },
            _threadCount: {
              get: function() {
                return C._threadCount;
              },
              set: function(ue) {
                C._threadCount = ue;
              }
            },
            Consumer: {
              get: function() {
                return A || (A = !0, Te("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), C.Consumer;
              }
            },
            displayName: {
              get: function() {
                return C.displayName;
              },
              set: function(ue) {
                te || (Ot("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", ue), te = !0);
              }
            }
          }), C.Consumer = je;
        }
        return C._currentRenderer = null, C._currentRenderer2 = null, C;
      }
      var wr = -1, _r = 0, rr = 1, fi = 2;
      function Qa(h) {
        if (h._status === wr) {
          var C = h._result, A = C();
          if (A.then(function(je) {
            if (h._status === _r || h._status === wr) {
              var ue = h;
              ue._status = rr, ue._result = je;
            }
          }, function(je) {
            if (h._status === _r || h._status === wr) {
              var ue = h;
              ue._status = fi, ue._result = je;
            }
          }), h._status === wr) {
            var P = h;
            P._status = _r, P._result = A;
          }
        }
        if (h._status === rr) {
          var te = h._result;
          return te === void 0 && Te(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, te), "default" in te || Te(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, te), te.default;
        } else
          throw h._result;
      }
      function di(h) {
        var C = {
          // We use these fields to store the result.
          _status: wr,
          _result: h
        }, A = {
          $$typeof: Xe,
          _payload: C,
          _init: Qa
        };
        {
          var P, te;
          Object.defineProperties(A, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return P;
              },
              set: function(je) {
                Te("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), P = je, Object.defineProperty(A, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return te;
              },
              set: function(je) {
                Te("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), te = je, Object.defineProperty(A, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return A;
      }
      function pi(h) {
        h != null && h.$$typeof === fe ? Te("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof h != "function" ? Te("forwardRef requires a render function but was given %s.", h === null ? "null" : typeof h) : h.length !== 0 && h.length !== 2 && Te("forwardRef render functions accept exactly two parameters: props and ref. %s", h.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), h != null && (h.defaultProps != null || h.propTypes != null) && Te("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var C = {
          $$typeof: be,
          render: h
        };
        {
          var A;
          Object.defineProperty(C, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return A;
            },
            set: function(P) {
              A = P, !h.name && !h.displayName && (h.displayName = P);
            }
          });
        }
        return C;
      }
      var x;
      x = Symbol.for("react.module.reference");
      function Q(h) {
        return !!(typeof h == "string" || typeof h == "function" || h === ee || h === Ne || At || h === g || h === re || h === we || Ue || h === Et || Jt || ln || _t || typeof h == "object" && h !== null && (h.$$typeof === Xe || h.$$typeof === fe || h.$$typeof === G || h.$$typeof === Y || h.$$typeof === be || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        h.$$typeof === x || h.getModuleId !== void 0));
      }
      function oe(h, C) {
        Q(h) || Te("memo: The first argument must be a component. Instead received: %s", h === null ? "null" : typeof h);
        var A = {
          $$typeof: fe,
          type: h,
          compare: C === void 0 ? null : C
        };
        {
          var P;
          Object.defineProperty(A, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return P;
            },
            set: function(te) {
              P = te, !h.name && !h.displayName && (h.displayName = te);
            }
          });
        }
        return A;
      }
      function ye() {
        var h = Ke.current;
        return h === null && Te(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), h;
      }
      function Ze(h) {
        var C = ye();
        if (h._context !== void 0) {
          var A = h._context;
          A.Consumer === h ? Te("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : A.Provider === h && Te("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return C.useContext(h);
      }
      function Ge(h) {
        var C = ye();
        return C.useState(h);
      }
      function pt(h, C, A) {
        var P = ye();
        return P.useReducer(h, C, A);
      }
      function ct(h) {
        var C = ye();
        return C.useRef(h);
      }
      function Rn(h, C) {
        var A = ye();
        return A.useEffect(h, C);
      }
      function tn(h, C) {
        var A = ye();
        return A.useInsertionEffect(h, C);
      }
      function on(h, C) {
        var A = ye();
        return A.useLayoutEffect(h, C);
      }
      function ar(h, C) {
        var A = ye();
        return A.useCallback(h, C);
      }
      function Wa(h, C) {
        var A = ye();
        return A.useMemo(h, C);
      }
      function Ga(h, C, A) {
        var P = ye();
        return P.useImperativeHandle(h, C, A);
      }
      function et(h, C) {
        {
          var A = ye();
          return A.useDebugValue(h, C);
        }
      }
      function rt() {
        var h = ye();
        return h.useTransition();
      }
      function qa(h) {
        var C = ye();
        return C.useDeferredValue(h);
      }
      function nu() {
        var h = ye();
        return h.useId();
      }
      function ru(h, C, A) {
        var P = ye();
        return P.useSyncExternalStore(h, C, A);
      }
      var hl = 0, Wu, ml, Yr, Qo, kr, oc, sc;
      function Gu() {
      }
      Gu.__reactDisabledLog = !0;
      function yl() {
        {
          if (hl === 0) {
            Wu = console.log, ml = console.info, Yr = console.warn, Qo = console.error, kr = console.group, oc = console.groupCollapsed, sc = console.groupEnd;
            var h = {
              configurable: !0,
              enumerable: !0,
              value: Gu,
              writable: !0
            };
            Object.defineProperties(console, {
              info: h,
              log: h,
              warn: h,
              error: h,
              group: h,
              groupCollapsed: h,
              groupEnd: h
            });
          }
          hl++;
        }
      }
      function fa() {
        {
          if (hl--, hl === 0) {
            var h = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: $({}, h, {
                value: Wu
              }),
              info: $({}, h, {
                value: ml
              }),
              warn: $({}, h, {
                value: Yr
              }),
              error: $({}, h, {
                value: Qo
              }),
              group: $({}, h, {
                value: kr
              }),
              groupCollapsed: $({}, h, {
                value: oc
              }),
              groupEnd: $({}, h, {
                value: sc
              })
            });
          }
          hl < 0 && Te("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var Xa = kt.ReactCurrentDispatcher, Ka;
      function qu(h, C, A) {
        {
          if (Ka === void 0)
            try {
              throw Error();
            } catch (te) {
              var P = te.stack.trim().match(/\n( *(at )?)/);
              Ka = P && P[1] || "";
            }
          return `
` + Ka + h;
        }
      }
      var au = !1, gl;
      {
        var Xu = typeof WeakMap == "function" ? WeakMap : Map;
        gl = new Xu();
      }
      function Ku(h, C) {
        if (!h || au)
          return "";
        {
          var A = gl.get(h);
          if (A !== void 0)
            return A;
        }
        var P;
        au = !0;
        var te = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var je;
        je = Xa.current, Xa.current = null, yl();
        try {
          if (C) {
            var ue = function() {
              throw Error();
            };
            if (Object.defineProperty(ue.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(ue, []);
              } catch (hn) {
                P = hn;
              }
              Reflect.construct(h, [], ue);
            } else {
              try {
                ue.call();
              } catch (hn) {
                P = hn;
              }
              h.call(ue.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (hn) {
              P = hn;
            }
            h();
          }
        } catch (hn) {
          if (hn && P && typeof hn.stack == "string") {
            for (var He = hn.stack.split(`
`), vt = P.stack.split(`
`), wt = He.length - 1, nn = vt.length - 1; wt >= 1 && nn >= 0 && He[wt] !== vt[nn]; )
              nn--;
            for (; wt >= 1 && nn >= 0; wt--, nn--)
              if (He[wt] !== vt[nn]) {
                if (wt !== 1 || nn !== 1)
                  do
                    if (wt--, nn--, nn < 0 || He[wt] !== vt[nn]) {
                      var Qt = `
` + He[wt].replace(" at new ", " at ");
                      return h.displayName && Qt.includes("<anonymous>") && (Qt = Qt.replace("<anonymous>", h.displayName)), typeof h == "function" && gl.set(h, Qt), Qt;
                    }
                  while (wt >= 1 && nn >= 0);
                break;
              }
          }
        } finally {
          au = !1, Xa.current = je, fa(), Error.prepareStackTrace = te;
        }
        var ut = h ? h.displayName || h.name : "", Wt = ut ? qu(ut) : "";
        return typeof h == "function" && gl.set(h, Wt), Wt;
      }
      function Pi(h, C, A) {
        return Ku(h, !1);
      }
      function Gf(h) {
        var C = h.prototype;
        return !!(C && C.isReactComponent);
      }
      function Vi(h, C, A) {
        if (h == null)
          return "";
        if (typeof h == "function")
          return Ku(h, Gf(h));
        if (typeof h == "string")
          return qu(h);
        switch (h) {
          case re:
            return qu("Suspense");
          case we:
            return qu("SuspenseList");
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case be:
              return Pi(h.render);
            case fe:
              return Vi(h.type, C, A);
            case Xe: {
              var P = h, te = P._payload, je = P._init;
              try {
                return Vi(je(te), C, A);
              } catch {
              }
            }
          }
        return "";
      }
      var Nt = {}, Ju = kt.ReactDebugCurrentFrame;
      function bt(h) {
        if (h) {
          var C = h._owner, A = Vi(h.type, h._source, C ? C.type : null);
          Ju.setExtraStackFrame(A);
        } else
          Ju.setExtraStackFrame(null);
      }
      function Wo(h, C, A, P, te) {
        {
          var je = Function.call.bind(xn);
          for (var ue in h)
            if (je(h, ue)) {
              var He = void 0;
              try {
                if (typeof h[ue] != "function") {
                  var vt = Error((P || "React class") + ": " + A + " type `" + ue + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[ue] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw vt.name = "Invariant Violation", vt;
                }
                He = h[ue](C, ue, P, A, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (wt) {
                He = wt;
              }
              He && !(He instanceof Error) && (bt(te), Te("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", P || "React class", A, ue, typeof He), bt(null)), He instanceof Error && !(He.message in Nt) && (Nt[He.message] = !0, bt(te), Te("Failed %s type: %s", A, He.message), bt(null));
            }
        }
      }
      function vi(h) {
        if (h) {
          var C = h._owner, A = Vi(h.type, h._source, C ? C.type : null);
          Ht(A);
        } else
          Ht(null);
      }
      var We;
      We = !1;
      function Zu() {
        if (dt.current) {
          var h = qn(dt.current.type);
          if (h)
            return `

Check the render method of \`` + h + "`.";
        }
        return "";
      }
      function ir(h) {
        if (h !== void 0) {
          var C = h.fileName.replace(/^.*[\\\/]/, ""), A = h.lineNumber;
          return `

Check your code at ` + C + ":" + A + ".";
        }
        return "";
      }
      function hi(h) {
        return h != null ? ir(h.__source) : "";
      }
      var Dr = {};
      function mi(h) {
        var C = Zu();
        if (!C) {
          var A = typeof h == "string" ? h : h.displayName || h.name;
          A && (C = `

Check the top-level render call using <` + A + ">.");
        }
        return C;
      }
      function sn(h, C) {
        if (!(!h._store || h._store.validated || h.key != null)) {
          h._store.validated = !0;
          var A = mi(C);
          if (!Dr[A]) {
            Dr[A] = !0;
            var P = "";
            h && h._owner && h._owner !== dt.current && (P = " It was passed a child from " + qn(h._owner.type) + "."), vi(h), Te('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', A, P), vi(null);
          }
        }
      }
      function Yt(h, C) {
        if (typeof h == "object") {
          if (Cn(h))
            for (var A = 0; A < h.length; A++) {
              var P = h[A];
              vn(P) && sn(P, C);
            }
          else if (vn(h))
            h._store && (h._store.validated = !0);
          else if (h) {
            var te = ht(h);
            if (typeof te == "function" && te !== h.entries)
              for (var je = te.call(h), ue; !(ue = je.next()).done; )
                vn(ue.value) && sn(ue.value, C);
          }
        }
      }
      function Sl(h) {
        {
          var C = h.type;
          if (C == null || typeof C == "string")
            return;
          var A;
          if (typeof C == "function")
            A = C.propTypes;
          else if (typeof C == "object" && (C.$$typeof === be || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          C.$$typeof === fe))
            A = C.propTypes;
          else
            return;
          if (A) {
            var P = qn(C);
            Wo(A, h.props, "prop", P, h);
          } else if (C.PropTypes !== void 0 && !We) {
            We = !0;
            var te = qn(C);
            Te("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", te || "Unknown");
          }
          typeof C.getDefaultProps == "function" && !C.getDefaultProps.isReactClassApproved && Te("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function In(h) {
        {
          for (var C = Object.keys(h.props), A = 0; A < C.length; A++) {
            var P = C[A];
            if (P !== "children" && P !== "key") {
              vi(h), Te("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", P), vi(null);
              break;
            }
          }
          h.ref !== null && (vi(h), Te("Invalid attribute `ref` supplied to `React.Fragment`."), vi(null));
        }
      }
      function Or(h, C, A) {
        var P = Q(h);
        if (!P) {
          var te = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (te += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var je = hi(C);
          je ? te += je : te += Zu();
          var ue;
          h === null ? ue = "null" : Cn(h) ? ue = "array" : h !== void 0 && h.$$typeof === ge ? (ue = "<" + (qn(h.type) || "Unknown") + " />", te = " Did you accidentally export a JSX literal instead of a component?") : ue = typeof h, Te("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ue, te);
        }
        var He = lt.apply(this, arguments);
        if (He == null)
          return He;
        if (P)
          for (var vt = 2; vt < arguments.length; vt++)
            Yt(arguments[vt], h);
        return h === ee ? In(He) : Sl(He), He;
      }
      var Ta = !1;
      function iu(h) {
        var C = Or.bind(null, h);
        return C.type = h, Ta || (Ta = !0, Ot("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(C, "type", {
          enumerable: !1,
          get: function() {
            return Ot("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: h
            }), h;
          }
        }), C;
      }
      function Go(h, C, A) {
        for (var P = Zt.apply(this, arguments), te = 2; te < arguments.length; te++)
          Yt(arguments[te], P.type);
        return Sl(P), P;
      }
      function qo(h, C) {
        var A = yt.transition;
        yt.transition = {};
        var P = yt.transition;
        yt.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          h();
        } finally {
          if (yt.transition = A, A === null && P._updatedFibers) {
            var te = P._updatedFibers.size;
            te > 10 && Ot("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), P._updatedFibers.clear();
          }
        }
      }
      var El = !1, lu = null;
      function qf(h) {
        if (lu === null)
          try {
            var C = ("require" + Math.random()).slice(0, 7), A = T && T[C];
            lu = A.call(T, "timers").setImmediate;
          } catch {
            lu = function(te) {
              El === !1 && (El = !0, typeof MessageChannel > "u" && Te("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var je = new MessageChannel();
              je.port1.onmessage = te, je.port2.postMessage(void 0);
            };
          }
        return lu(h);
      }
      var ba = 0, Ja = !1;
      function yi(h) {
        {
          var C = ba;
          ba++, Le.current === null && (Le.current = []);
          var A = Le.isBatchingLegacy, P;
          try {
            if (Le.isBatchingLegacy = !0, P = h(), !A && Le.didScheduleLegacyUpdate) {
              var te = Le.current;
              te !== null && (Le.didScheduleLegacyUpdate = !1, Cl(te));
            }
          } catch (ut) {
            throw wa(C), ut;
          } finally {
            Le.isBatchingLegacy = A;
          }
          if (P !== null && typeof P == "object" && typeof P.then == "function") {
            var je = P, ue = !1, He = {
              then: function(ut, Wt) {
                ue = !0, je.then(function(hn) {
                  wa(C), ba === 0 ? eo(hn, ut, Wt) : ut(hn);
                }, function(hn) {
                  wa(C), Wt(hn);
                });
              }
            };
            return !Ja && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              ue || (Ja = !0, Te("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), He;
          } else {
            var vt = P;
            if (wa(C), ba === 0) {
              var wt = Le.current;
              wt !== null && (Cl(wt), Le.current = null);
              var nn = {
                then: function(ut, Wt) {
                  Le.current === null ? (Le.current = [], eo(vt, ut, Wt)) : ut(vt);
                }
              };
              return nn;
            } else {
              var Qt = {
                then: function(ut, Wt) {
                  ut(vt);
                }
              };
              return Qt;
            }
          }
        }
      }
      function wa(h) {
        h !== ba - 1 && Te("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), ba = h;
      }
      function eo(h, C, A) {
        {
          var P = Le.current;
          if (P !== null)
            try {
              Cl(P), qf(function() {
                P.length === 0 ? (Le.current = null, C(h)) : eo(h, C, A);
              });
            } catch (te) {
              A(te);
            }
          else
            C(h);
        }
      }
      var to = !1;
      function Cl(h) {
        if (!to) {
          to = !0;
          var C = 0;
          try {
            for (; C < h.length; C++) {
              var A = h[C];
              do
                A = A(!0);
              while (A !== null);
            }
            h.length = 0;
          } catch (P) {
            throw h = h.slice(C + 1), P;
          } finally {
            to = !1;
          }
        }
      }
      var uu = Or, no = Go, ro = iu, Za = {
        map: Hi,
        forEach: eu,
        count: Zl,
        toArray: pl,
        only: vl
      };
      O.Children = Za, O.Component = Ve, O.Fragment = ee, O.Profiler = Ne, O.PureComponent = st, O.StrictMode = g, O.Suspense = re, O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = kt, O.act = yi, O.cloneElement = no, O.createContext = tu, O.createElement = uu, O.createFactory = ro, O.createRef = On, O.forwardRef = pi, O.isValidElement = vn, O.lazy = di, O.memo = oe, O.startTransition = qo, O.unstable_act = yi, O.useCallback = ar, O.useContext = Ze, O.useDebugValue = et, O.useDeferredValue = qa, O.useEffect = Rn, O.useId = nu, O.useImperativeHandle = Ga, O.useInsertionEffect = tn, O.useLayoutEffect = on, O.useMemo = Wa, O.useReducer = pt, O.useRef = ct, O.useState = Ge, O.useSyncExternalStore = ru, O.useTransition = rt, O.version = k, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(tv, tv.exports)), tv.exports;
}
var dR;
function av() {
  return dR || (dR = 1, process.env.NODE_ENV === "production" ? Xm.exports = yk() : Xm.exports = gk()), Xm.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pR;
function Sk() {
  if (pR) return Zp;
  pR = 1;
  var T = av(), O = Symbol.for("react.element"), k = Symbol.for("react.fragment"), ge = Object.prototype.hasOwnProperty, Re = T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, ee = { key: !0, ref: !0, __self: !0, __source: !0 };
  function g(Ne, G, Y) {
    var be, re = {}, we = null, fe = null;
    Y !== void 0 && (we = "" + Y), G.key !== void 0 && (we = "" + G.key), G.ref !== void 0 && (fe = G.ref);
    for (be in G) ge.call(G, be) && !ee.hasOwnProperty(be) && (re[be] = G[be]);
    if (Ne && Ne.defaultProps) for (be in G = Ne.defaultProps, G) re[be] === void 0 && (re[be] = G[be]);
    return { $$typeof: O, type: Ne, key: we, ref: fe, props: re, _owner: Re.current };
  }
  return Zp.Fragment = k, Zp.jsx = g, Zp.jsxs = g, Zp;
}
var ev = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vR;
function Ek() {
  return vR || (vR = 1, process.env.NODE_ENV !== "production" && function() {
    var T = av(), O = Symbol.for("react.element"), k = Symbol.for("react.portal"), ge = Symbol.for("react.fragment"), Re = Symbol.for("react.strict_mode"), ee = Symbol.for("react.profiler"), g = Symbol.for("react.provider"), Ne = Symbol.for("react.context"), G = Symbol.for("react.forward_ref"), Y = Symbol.for("react.suspense"), be = Symbol.for("react.suspense_list"), re = Symbol.for("react.memo"), we = Symbol.for("react.lazy"), fe = Symbol.for("react.offscreen"), Xe = Symbol.iterator, Et = "@@iterator";
    function mt(x) {
      if (x === null || typeof x != "object")
        return null;
      var Q = Xe && x[Xe] || x[Et];
      return typeof Q == "function" ? Q : null;
    }
    var fn = T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function ht(x) {
      {
        for (var Q = arguments.length, oe = new Array(Q > 1 ? Q - 1 : 0), ye = 1; ye < Q; ye++)
          oe[ye - 1] = arguments[ye];
        Ke("error", x, oe);
      }
    }
    function Ke(x, Q, oe) {
      {
        var ye = fn.ReactDebugCurrentFrame, Ze = ye.getStackAddendum();
        Ze !== "" && (Q += "%s", oe = oe.concat([Ze]));
        var Ge = oe.map(function(pt) {
          return String(pt);
        });
        Ge.unshift("Warning: " + Q), Function.prototype.apply.call(console[x], console, Ge);
      }
    }
    var yt = !1, Le = !1, dt = !1, $e = !1, an = !1, Ht;
    Ht = Symbol.for("react.module.reference");
    function Jt(x) {
      return !!(typeof x == "string" || typeof x == "function" || x === ge || x === ee || an || x === Re || x === Y || x === be || $e || x === fe || yt || Le || dt || typeof x == "object" && x !== null && (x.$$typeof === we || x.$$typeof === re || x.$$typeof === g || x.$$typeof === Ne || x.$$typeof === G || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      x.$$typeof === Ht || x.getModuleId !== void 0));
    }
    function ln(x, Q, oe) {
      var ye = x.displayName;
      if (ye)
        return ye;
      var Ze = Q.displayName || Q.name || "";
      return Ze !== "" ? oe + "(" + Ze + ")" : oe;
    }
    function _t(x) {
      return x.displayName || "Context";
    }
    function Ue(x) {
      if (x == null)
        return null;
      if (typeof x.tag == "number" && ht("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof x == "function")
        return x.displayName || x.name || null;
      if (typeof x == "string")
        return x;
      switch (x) {
        case ge:
          return "Fragment";
        case k:
          return "Portal";
        case ee:
          return "Profiler";
        case Re:
          return "StrictMode";
        case Y:
          return "Suspense";
        case be:
          return "SuspenseList";
      }
      if (typeof x == "object")
        switch (x.$$typeof) {
          case Ne:
            var Q = x;
            return _t(Q) + ".Consumer";
          case g:
            var oe = x;
            return _t(oe._context) + ".Provider";
          case G:
            return ln(x, x.render, "ForwardRef");
          case re:
            var ye = x.displayName || null;
            return ye !== null ? ye : Ue(x.type) || "Memo";
          case we: {
            var Ze = x, Ge = Ze._payload, pt = Ze._init;
            try {
              return Ue(pt(Ge));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var At = Object.assign, kt = 0, Ot, Te, ne, _e, le, D, $;
    function Ie() {
    }
    Ie.__reactDisabledLog = !0;
    function Ve() {
      {
        if (kt === 0) {
          Ot = console.log, Te = console.info, ne = console.warn, _e = console.error, le = console.group, D = console.groupCollapsed, $ = console.groupEnd;
          var x = {
            configurable: !0,
            enumerable: !0,
            value: Ie,
            writable: !0
          };
          Object.defineProperties(console, {
            info: x,
            log: x,
            warn: x,
            error: x,
            group: x,
            groupCollapsed: x,
            groupEnd: x
          });
        }
        kt++;
      }
    }
    function ot() {
      {
        if (kt--, kt === 0) {
          var x = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: At({}, x, {
              value: Ot
            }),
            info: At({}, x, {
              value: Te
            }),
            warn: At({}, x, {
              value: ne
            }),
            error: At({}, x, {
              value: _e
            }),
            group: At({}, x, {
              value: le
            }),
            groupCollapsed: At({}, x, {
              value: D
            }),
            groupEnd: At({}, x, {
              value: $
            })
          });
        }
        kt < 0 && ht("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var at = fn.ReactCurrentDispatcher, nt;
    function it(x, Q, oe) {
      {
        if (nt === void 0)
          try {
            throw Error();
          } catch (Ze) {
            var ye = Ze.stack.trim().match(/\n( *(at )?)/);
            nt = ye && ye[1] || "";
          }
        return `
` + nt + x;
      }
    }
    var st = !1, Bt;
    {
      var On = typeof WeakMap == "function" ? WeakMap : Map;
      Bt = new On();
    }
    function br(x, Q) {
      if (!x || st)
        return "";
      {
        var oe = Bt.get(x);
        if (oe !== void 0)
          return oe;
      }
      var ye;
      st = !0;
      var Ze = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Ge;
      Ge = at.current, at.current = null, Ve();
      try {
        if (Q) {
          var pt = function() {
            throw Error();
          };
          if (Object.defineProperty(pt.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(pt, []);
            } catch (et) {
              ye = et;
            }
            Reflect.construct(x, [], pt);
          } else {
            try {
              pt.call();
            } catch (et) {
              ye = et;
            }
            x.call(pt.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (et) {
            ye = et;
          }
          x();
        }
      } catch (et) {
        if (et && ye && typeof et.stack == "string") {
          for (var ct = et.stack.split(`
`), Rn = ye.stack.split(`
`), tn = ct.length - 1, on = Rn.length - 1; tn >= 1 && on >= 0 && ct[tn] !== Rn[on]; )
            on--;
          for (; tn >= 1 && on >= 0; tn--, on--)
            if (ct[tn] !== Rn[on]) {
              if (tn !== 1 || on !== 1)
                do
                  if (tn--, on--, on < 0 || ct[tn] !== Rn[on]) {
                    var ar = `
` + ct[tn].replace(" at new ", " at ");
                    return x.displayName && ar.includes("<anonymous>") && (ar = ar.replace("<anonymous>", x.displayName)), typeof x == "function" && Bt.set(x, ar), ar;
                  }
                while (tn >= 1 && on >= 0);
              break;
            }
        }
      } finally {
        st = !1, at.current = Ge, ot(), Error.prepareStackTrace = Ze;
      }
      var Wa = x ? x.displayName || x.name : "", Ga = Wa ? it(Wa) : "";
      return typeof x == "function" && Bt.set(x, Ga), Ga;
    }
    function Cn(x, Q, oe) {
      return br(x, !1);
    }
    function nr(x) {
      var Q = x.prototype;
      return !!(Q && Q.isReactComponent);
    }
    function Vn(x, Q, oe) {
      if (x == null)
        return "";
      if (typeof x == "function")
        return br(x, nr(x));
      if (typeof x == "string")
        return it(x);
      switch (x) {
        case Y:
          return it("Suspense");
        case be:
          return it("SuspenseList");
      }
      if (typeof x == "object")
        switch (x.$$typeof) {
          case G:
            return Cn(x.render);
          case re:
            return Vn(x.type, Q, oe);
          case we: {
            var ye = x, Ze = ye._payload, Ge = ye._init;
            try {
              return Vn(Ge(Ze), Q, oe);
            } catch {
            }
          }
        }
      return "";
    }
    var Bn = Object.prototype.hasOwnProperty, Ir = {}, si = fn.ReactDebugCurrentFrame;
    function oa(x) {
      if (x) {
        var Q = x._owner, oe = Vn(x.type, x._source, Q ? Q.type : null);
        si.setExtraStackFrame(oe);
      } else
        si.setExtraStackFrame(null);
    }
    function qn(x, Q, oe, ye, Ze) {
      {
        var Ge = Function.call.bind(Bn);
        for (var pt in x)
          if (Ge(x, pt)) {
            var ct = void 0;
            try {
              if (typeof x[pt] != "function") {
                var Rn = Error((ye || "React class") + ": " + oe + " type `" + pt + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof x[pt] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Rn.name = "Invariant Violation", Rn;
              }
              ct = x[pt](Q, pt, ye, oe, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (tn) {
              ct = tn;
            }
            ct && !(ct instanceof Error) && (oa(Ze), ht("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ye || "React class", oe, pt, typeof ct), oa(null)), ct instanceof Error && !(ct.message in Ir) && (Ir[ct.message] = !0, oa(Ze), ht("Failed %s type: %s", oe, ct.message), oa(null));
          }
      }
    }
    var xn = Array.isArray;
    function $n(x) {
      return xn(x);
    }
    function gr(x) {
      {
        var Q = typeof Symbol == "function" && Symbol.toStringTag, oe = Q && x[Symbol.toStringTag] || x.constructor.name || "Object";
        return oe;
      }
    }
    function Ia(x) {
      try {
        return Nn(x), !1;
      } catch {
        return !0;
      }
    }
    function Nn(x) {
      return "" + x;
    }
    function Sr(x) {
      if (Ia(x))
        return ht("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", gr(x)), Nn(x);
    }
    var sa = fn.ReactCurrentOwner, Ya = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ci, ae;
    function ke(x) {
      if (Bn.call(x, "ref")) {
        var Q = Object.getOwnPropertyDescriptor(x, "ref").get;
        if (Q && Q.isReactWarning)
          return !1;
      }
      return x.ref !== void 0;
    }
    function lt(x) {
      if (Bn.call(x, "key")) {
        var Q = Object.getOwnPropertyDescriptor(x, "key").get;
        if (Q && Q.isReactWarning)
          return !1;
      }
      return x.key !== void 0;
    }
    function Ft(x, Q) {
      typeof x.ref == "string" && sa.current;
    }
    function Zt(x, Q) {
      {
        var oe = function() {
          ci || (ci = !0, ht("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Q));
        };
        oe.isReactWarning = !0, Object.defineProperty(x, "key", {
          get: oe,
          configurable: !0
        });
      }
    }
    function vn(x, Q) {
      {
        var oe = function() {
          ae || (ae = !0, ht("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Q));
        };
        oe.isReactWarning = !0, Object.defineProperty(x, "ref", {
          get: oe,
          configurable: !0
        });
      }
    }
    var un = function(x, Q, oe, ye, Ze, Ge, pt) {
      var ct = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: O,
        // Built-in properties that belong on the element
        type: x,
        key: Q,
        ref: oe,
        props: pt,
        // Record the component responsible for creating this element.
        _owner: Ge
      };
      return ct._store = {}, Object.defineProperty(ct._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(ct, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ye
      }), Object.defineProperty(ct, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ze
      }), Object.freeze && (Object.freeze(ct.props), Object.freeze(ct)), ct;
    };
    function Xn(x, Q, oe, ye, Ze) {
      {
        var Ge, pt = {}, ct = null, Rn = null;
        oe !== void 0 && (Sr(oe), ct = "" + oe), lt(Q) && (Sr(Q.key), ct = "" + Q.key), ke(Q) && (Rn = Q.ref, Ft(Q, Ze));
        for (Ge in Q)
          Bn.call(Q, Ge) && !Ya.hasOwnProperty(Ge) && (pt[Ge] = Q[Ge]);
        if (x && x.defaultProps) {
          var tn = x.defaultProps;
          for (Ge in tn)
            pt[Ge] === void 0 && (pt[Ge] = tn[Ge]);
        }
        if (ct || Rn) {
          var on = typeof x == "function" ? x.displayName || x.name || "Unknown" : x;
          ct && Zt(pt, on), Rn && vn(pt, on);
        }
        return un(x, ct, Rn, Ze, ye, sa.current, pt);
      }
    }
    var en = fn.ReactCurrentOwner, $t = fn.ReactDebugCurrentFrame;
    function It(x) {
      if (x) {
        var Q = x._owner, oe = Vn(x.type, x._source, Q ? Q.type : null);
        $t.setExtraStackFrame(oe);
      } else
        $t.setExtraStackFrame(null);
    }
    var ca;
    ca = !1;
    function Er(x) {
      return typeof x == "object" && x !== null && x.$$typeof === O;
    }
    function Ra() {
      {
        if (en.current) {
          var x = Ue(en.current.type);
          if (x)
            return `

Check the render method of \`` + x + "`.";
        }
        return "";
      }
    }
    function Hi(x) {
      return "";
    }
    var Zl = {};
    function eu(x) {
      {
        var Q = Ra();
        if (!Q) {
          var oe = typeof x == "string" ? x : x.displayName || x.name;
          oe && (Q = `

Check the top-level render call using <` + oe + ">.");
        }
        return Q;
      }
    }
    function pl(x, Q) {
      {
        if (!x._store || x._store.validated || x.key != null)
          return;
        x._store.validated = !0;
        var oe = eu(Q);
        if (Zl[oe])
          return;
        Zl[oe] = !0;
        var ye = "";
        x && x._owner && x._owner !== en.current && (ye = " It was passed a child from " + Ue(x._owner.type) + "."), It(x), ht('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', oe, ye), It(null);
      }
    }
    function vl(x, Q) {
      {
        if (typeof x != "object")
          return;
        if ($n(x))
          for (var oe = 0; oe < x.length; oe++) {
            var ye = x[oe];
            Er(ye) && pl(ye, Q);
          }
        else if (Er(x))
          x._store && (x._store.validated = !0);
        else if (x) {
          var Ze = mt(x);
          if (typeof Ze == "function" && Ze !== x.entries)
            for (var Ge = Ze.call(x), pt; !(pt = Ge.next()).done; )
              Er(pt.value) && pl(pt.value, Q);
        }
      }
    }
    function tu(x) {
      {
        var Q = x.type;
        if (Q == null || typeof Q == "string")
          return;
        var oe;
        if (typeof Q == "function")
          oe = Q.propTypes;
        else if (typeof Q == "object" && (Q.$$typeof === G || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        Q.$$typeof === re))
          oe = Q.propTypes;
        else
          return;
        if (oe) {
          var ye = Ue(Q);
          qn(oe, x.props, "prop", ye, x);
        } else if (Q.PropTypes !== void 0 && !ca) {
          ca = !0;
          var Ze = Ue(Q);
          ht("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Ze || "Unknown");
        }
        typeof Q.getDefaultProps == "function" && !Q.getDefaultProps.isReactClassApproved && ht("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function wr(x) {
      {
        for (var Q = Object.keys(x.props), oe = 0; oe < Q.length; oe++) {
          var ye = Q[oe];
          if (ye !== "children" && ye !== "key") {
            It(x), ht("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ye), It(null);
            break;
          }
        }
        x.ref !== null && (It(x), ht("Invalid attribute `ref` supplied to `React.Fragment`."), It(null));
      }
    }
    var _r = {};
    function rr(x, Q, oe, ye, Ze, Ge) {
      {
        var pt = Jt(x);
        if (!pt) {
          var ct = "";
          (x === void 0 || typeof x == "object" && x !== null && Object.keys(x).length === 0) && (ct += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Rn = Hi();
          Rn ? ct += Rn : ct += Ra();
          var tn;
          x === null ? tn = "null" : $n(x) ? tn = "array" : x !== void 0 && x.$$typeof === O ? (tn = "<" + (Ue(x.type) || "Unknown") + " />", ct = " Did you accidentally export a JSX literal instead of a component?") : tn = typeof x, ht("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", tn, ct);
        }
        var on = Xn(x, Q, oe, Ze, Ge);
        if (on == null)
          return on;
        if (pt) {
          var ar = Q.children;
          if (ar !== void 0)
            if (ye)
              if ($n(ar)) {
                for (var Wa = 0; Wa < ar.length; Wa++)
                  vl(ar[Wa], x);
                Object.freeze && Object.freeze(ar);
              } else
                ht("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              vl(ar, x);
        }
        if (Bn.call(Q, "key")) {
          var Ga = Ue(x), et = Object.keys(Q).filter(function(nu) {
            return nu !== "key";
          }), rt = et.length > 0 ? "{key: someKey, " + et.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!_r[Ga + rt]) {
            var qa = et.length > 0 ? "{" + et.join(": ..., ") + ": ...}" : "{}";
            ht(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, rt, Ga, qa, Ga), _r[Ga + rt] = !0;
          }
        }
        return x === ge ? wr(on) : tu(on), on;
      }
    }
    function fi(x, Q, oe) {
      return rr(x, Q, oe, !0);
    }
    function Qa(x, Q, oe) {
      return rr(x, Q, oe, !1);
    }
    var di = Qa, pi = fi;
    ev.Fragment = ge, ev.jsx = di, ev.jsxs = pi;
  }()), ev;
}
process.env.NODE_ENV === "production" ? CE.exports = Sk() : CE.exports = Ek();
var z = CE.exports, xE = { exports: {} }, Ba = {}, Km = { exports: {} }, mE = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hR;
function Ck() {
  return hR || (hR = 1, function(T) {
    function O(ne, _e) {
      var le = ne.length;
      ne.push(_e);
      e: for (; 0 < le; ) {
        var D = le - 1 >>> 1, $ = ne[D];
        if (0 < Re($, _e)) ne[D] = _e, ne[le] = $, le = D;
        else break e;
      }
    }
    function k(ne) {
      return ne.length === 0 ? null : ne[0];
    }
    function ge(ne) {
      if (ne.length === 0) return null;
      var _e = ne[0], le = ne.pop();
      if (le !== _e) {
        ne[0] = le;
        e: for (var D = 0, $ = ne.length, Ie = $ >>> 1; D < Ie; ) {
          var Ve = 2 * (D + 1) - 1, ot = ne[Ve], at = Ve + 1, nt = ne[at];
          if (0 > Re(ot, le)) at < $ && 0 > Re(nt, ot) ? (ne[D] = nt, ne[at] = le, D = at) : (ne[D] = ot, ne[Ve] = le, D = Ve);
          else if (at < $ && 0 > Re(nt, le)) ne[D] = nt, ne[at] = le, D = at;
          else break e;
        }
      }
      return _e;
    }
    function Re(ne, _e) {
      var le = ne.sortIndex - _e.sortIndex;
      return le !== 0 ? le : ne.id - _e.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var ee = performance;
      T.unstable_now = function() {
        return ee.now();
      };
    } else {
      var g = Date, Ne = g.now();
      T.unstable_now = function() {
        return g.now() - Ne;
      };
    }
    var G = [], Y = [], be = 1, re = null, we = 3, fe = !1, Xe = !1, Et = !1, mt = typeof setTimeout == "function" ? setTimeout : null, fn = typeof clearTimeout == "function" ? clearTimeout : null, ht = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function Ke(ne) {
      for (var _e = k(Y); _e !== null; ) {
        if (_e.callback === null) ge(Y);
        else if (_e.startTime <= ne) ge(Y), _e.sortIndex = _e.expirationTime, O(G, _e);
        else break;
        _e = k(Y);
      }
    }
    function yt(ne) {
      if (Et = !1, Ke(ne), !Xe) if (k(G) !== null) Xe = !0, Ot(Le);
      else {
        var _e = k(Y);
        _e !== null && Te(yt, _e.startTime - ne);
      }
    }
    function Le(ne, _e) {
      Xe = !1, Et && (Et = !1, fn(an), an = -1), fe = !0;
      var le = we;
      try {
        for (Ke(_e), re = k(G); re !== null && (!(re.expirationTime > _e) || ne && !ln()); ) {
          var D = re.callback;
          if (typeof D == "function") {
            re.callback = null, we = re.priorityLevel;
            var $ = D(re.expirationTime <= _e);
            _e = T.unstable_now(), typeof $ == "function" ? re.callback = $ : re === k(G) && ge(G), Ke(_e);
          } else ge(G);
          re = k(G);
        }
        if (re !== null) var Ie = !0;
        else {
          var Ve = k(Y);
          Ve !== null && Te(yt, Ve.startTime - _e), Ie = !1;
        }
        return Ie;
      } finally {
        re = null, we = le, fe = !1;
      }
    }
    var dt = !1, $e = null, an = -1, Ht = 5, Jt = -1;
    function ln() {
      return !(T.unstable_now() - Jt < Ht);
    }
    function _t() {
      if ($e !== null) {
        var ne = T.unstable_now();
        Jt = ne;
        var _e = !0;
        try {
          _e = $e(!0, ne);
        } finally {
          _e ? Ue() : (dt = !1, $e = null);
        }
      } else dt = !1;
    }
    var Ue;
    if (typeof ht == "function") Ue = function() {
      ht(_t);
    };
    else if (typeof MessageChannel < "u") {
      var At = new MessageChannel(), kt = At.port2;
      At.port1.onmessage = _t, Ue = function() {
        kt.postMessage(null);
      };
    } else Ue = function() {
      mt(_t, 0);
    };
    function Ot(ne) {
      $e = ne, dt || (dt = !0, Ue());
    }
    function Te(ne, _e) {
      an = mt(function() {
        ne(T.unstable_now());
      }, _e);
    }
    T.unstable_IdlePriority = 5, T.unstable_ImmediatePriority = 1, T.unstable_LowPriority = 4, T.unstable_NormalPriority = 3, T.unstable_Profiling = null, T.unstable_UserBlockingPriority = 2, T.unstable_cancelCallback = function(ne) {
      ne.callback = null;
    }, T.unstable_continueExecution = function() {
      Xe || fe || (Xe = !0, Ot(Le));
    }, T.unstable_forceFrameRate = function(ne) {
      0 > ne || 125 < ne ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Ht = 0 < ne ? Math.floor(1e3 / ne) : 5;
    }, T.unstable_getCurrentPriorityLevel = function() {
      return we;
    }, T.unstable_getFirstCallbackNode = function() {
      return k(G);
    }, T.unstable_next = function(ne) {
      switch (we) {
        case 1:
        case 2:
        case 3:
          var _e = 3;
          break;
        default:
          _e = we;
      }
      var le = we;
      we = _e;
      try {
        return ne();
      } finally {
        we = le;
      }
    }, T.unstable_pauseExecution = function() {
    }, T.unstable_requestPaint = function() {
    }, T.unstable_runWithPriority = function(ne, _e) {
      switch (ne) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          ne = 3;
      }
      var le = we;
      we = ne;
      try {
        return _e();
      } finally {
        we = le;
      }
    }, T.unstable_scheduleCallback = function(ne, _e, le) {
      var D = T.unstable_now();
      switch (typeof le == "object" && le !== null ? (le = le.delay, le = typeof le == "number" && 0 < le ? D + le : D) : le = D, ne) {
        case 1:
          var $ = -1;
          break;
        case 2:
          $ = 250;
          break;
        case 5:
          $ = 1073741823;
          break;
        case 4:
          $ = 1e4;
          break;
        default:
          $ = 5e3;
      }
      return $ = le + $, ne = { id: be++, callback: _e, priorityLevel: ne, startTime: le, expirationTime: $, sortIndex: -1 }, le > D ? (ne.sortIndex = le, O(Y, ne), k(G) === null && ne === k(Y) && (Et ? (fn(an), an = -1) : Et = !0, Te(yt, le - D))) : (ne.sortIndex = $, O(G, ne), Xe || fe || (Xe = !0, Ot(Le))), ne;
    }, T.unstable_shouldYield = ln, T.unstable_wrapCallback = function(ne) {
      var _e = we;
      return function() {
        var le = we;
        we = _e;
        try {
          return ne.apply(this, arguments);
        } finally {
          we = le;
        }
      };
    };
  }(mE)), mE;
}
var yE = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mR;
function xk() {
  return mR || (mR = 1, function(T) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var O = !1, k = 5;
      function ge(ae, ke) {
        var lt = ae.length;
        ae.push(ke), g(ae, ke, lt);
      }
      function Re(ae) {
        return ae.length === 0 ? null : ae[0];
      }
      function ee(ae) {
        if (ae.length === 0)
          return null;
        var ke = ae[0], lt = ae.pop();
        return lt !== ke && (ae[0] = lt, Ne(ae, lt, 0)), ke;
      }
      function g(ae, ke, lt) {
        for (var Ft = lt; Ft > 0; ) {
          var Zt = Ft - 1 >>> 1, vn = ae[Zt];
          if (G(vn, ke) > 0)
            ae[Zt] = ke, ae[Ft] = vn, Ft = Zt;
          else
            return;
        }
      }
      function Ne(ae, ke, lt) {
        for (var Ft = lt, Zt = ae.length, vn = Zt >>> 1; Ft < vn; ) {
          var un = (Ft + 1) * 2 - 1, Xn = ae[un], en = un + 1, $t = ae[en];
          if (G(Xn, ke) < 0)
            en < Zt && G($t, Xn) < 0 ? (ae[Ft] = $t, ae[en] = ke, Ft = en) : (ae[Ft] = Xn, ae[un] = ke, Ft = un);
          else if (en < Zt && G($t, ke) < 0)
            ae[Ft] = $t, ae[en] = ke, Ft = en;
          else
            return;
        }
      }
      function G(ae, ke) {
        var lt = ae.sortIndex - ke.sortIndex;
        return lt !== 0 ? lt : ae.id - ke.id;
      }
      var Y = 1, be = 2, re = 3, we = 4, fe = 5;
      function Xe(ae, ke) {
      }
      var Et = typeof performance == "object" && typeof performance.now == "function";
      if (Et) {
        var mt = performance;
        T.unstable_now = function() {
          return mt.now();
        };
      } else {
        var fn = Date, ht = fn.now();
        T.unstable_now = function() {
          return fn.now() - ht;
        };
      }
      var Ke = 1073741823, yt = -1, Le = 250, dt = 5e3, $e = 1e4, an = Ke, Ht = [], Jt = [], ln = 1, _t = null, Ue = re, At = !1, kt = !1, Ot = !1, Te = typeof setTimeout == "function" ? setTimeout : null, ne = typeof clearTimeout == "function" ? clearTimeout : null, _e = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function le(ae) {
        for (var ke = Re(Jt); ke !== null; ) {
          if (ke.callback === null)
            ee(Jt);
          else if (ke.startTime <= ae)
            ee(Jt), ke.sortIndex = ke.expirationTime, ge(Ht, ke);
          else
            return;
          ke = Re(Jt);
        }
      }
      function D(ae) {
        if (Ot = !1, le(ae), !kt)
          if (Re(Ht) !== null)
            kt = !0, Nn($);
          else {
            var ke = Re(Jt);
            ke !== null && Sr(D, ke.startTime - ae);
          }
      }
      function $(ae, ke) {
        kt = !1, Ot && (Ot = !1, sa()), At = !0;
        var lt = Ue;
        try {
          var Ft;
          if (!O) return Ie(ae, ke);
        } finally {
          _t = null, Ue = lt, At = !1;
        }
      }
      function Ie(ae, ke) {
        var lt = ke;
        for (le(lt), _t = Re(Ht); _t !== null && !(_t.expirationTime > lt && (!ae || si())); ) {
          var Ft = _t.callback;
          if (typeof Ft == "function") {
            _t.callback = null, Ue = _t.priorityLevel;
            var Zt = _t.expirationTime <= lt, vn = Ft(Zt);
            lt = T.unstable_now(), typeof vn == "function" ? _t.callback = vn : _t === Re(Ht) && ee(Ht), le(lt);
          } else
            ee(Ht);
          _t = Re(Ht);
        }
        if (_t !== null)
          return !0;
        var un = Re(Jt);
        return un !== null && Sr(D, un.startTime - lt), !1;
      }
      function Ve(ae, ke) {
        switch (ae) {
          case Y:
          case be:
          case re:
          case we:
          case fe:
            break;
          default:
            ae = re;
        }
        var lt = Ue;
        Ue = ae;
        try {
          return ke();
        } finally {
          Ue = lt;
        }
      }
      function ot(ae) {
        var ke;
        switch (Ue) {
          case Y:
          case be:
          case re:
            ke = re;
            break;
          default:
            ke = Ue;
            break;
        }
        var lt = Ue;
        Ue = ke;
        try {
          return ae();
        } finally {
          Ue = lt;
        }
      }
      function at(ae) {
        var ke = Ue;
        return function() {
          var lt = Ue;
          Ue = ke;
          try {
            return ae.apply(this, arguments);
          } finally {
            Ue = lt;
          }
        };
      }
      function nt(ae, ke, lt) {
        var Ft = T.unstable_now(), Zt;
        if (typeof lt == "object" && lt !== null) {
          var vn = lt.delay;
          typeof vn == "number" && vn > 0 ? Zt = Ft + vn : Zt = Ft;
        } else
          Zt = Ft;
        var un;
        switch (ae) {
          case Y:
            un = yt;
            break;
          case be:
            un = Le;
            break;
          case fe:
            un = an;
            break;
          case we:
            un = $e;
            break;
          case re:
          default:
            un = dt;
            break;
        }
        var Xn = Zt + un, en = {
          id: ln++,
          callback: ke,
          priorityLevel: ae,
          startTime: Zt,
          expirationTime: Xn,
          sortIndex: -1
        };
        return Zt > Ft ? (en.sortIndex = Zt, ge(Jt, en), Re(Ht) === null && en === Re(Jt) && (Ot ? sa() : Ot = !0, Sr(D, Zt - Ft))) : (en.sortIndex = Xn, ge(Ht, en), !kt && !At && (kt = !0, Nn($))), en;
      }
      function it() {
      }
      function st() {
        !kt && !At && (kt = !0, Nn($));
      }
      function Bt() {
        return Re(Ht);
      }
      function On(ae) {
        ae.callback = null;
      }
      function br() {
        return Ue;
      }
      var Cn = !1, nr = null, Vn = -1, Bn = k, Ir = -1;
      function si() {
        var ae = T.unstable_now() - Ir;
        return !(ae < Bn);
      }
      function oa() {
      }
      function qn(ae) {
        if (ae < 0 || ae > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        ae > 0 ? Bn = Math.floor(1e3 / ae) : Bn = k;
      }
      var xn = function() {
        if (nr !== null) {
          var ae = T.unstable_now();
          Ir = ae;
          var ke = !0, lt = !0;
          try {
            lt = nr(ke, ae);
          } finally {
            lt ? $n() : (Cn = !1, nr = null);
          }
        } else
          Cn = !1;
      }, $n;
      if (typeof _e == "function")
        $n = function() {
          _e(xn);
        };
      else if (typeof MessageChannel < "u") {
        var gr = new MessageChannel(), Ia = gr.port2;
        gr.port1.onmessage = xn, $n = function() {
          Ia.postMessage(null);
        };
      } else
        $n = function() {
          Te(xn, 0);
        };
      function Nn(ae) {
        nr = ae, Cn || (Cn = !0, $n());
      }
      function Sr(ae, ke) {
        Vn = Te(function() {
          ae(T.unstable_now());
        }, ke);
      }
      function sa() {
        ne(Vn), Vn = -1;
      }
      var Ya = oa, ci = null;
      T.unstable_IdlePriority = fe, T.unstable_ImmediatePriority = Y, T.unstable_LowPriority = we, T.unstable_NormalPriority = re, T.unstable_Profiling = ci, T.unstable_UserBlockingPriority = be, T.unstable_cancelCallback = On, T.unstable_continueExecution = st, T.unstable_forceFrameRate = qn, T.unstable_getCurrentPriorityLevel = br, T.unstable_getFirstCallbackNode = Bt, T.unstable_next = ot, T.unstable_pauseExecution = it, T.unstable_requestPaint = Ya, T.unstable_runWithPriority = Ve, T.unstable_scheduleCallback = nt, T.unstable_shouldYield = si, T.unstable_wrapCallback = at, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(yE)), yE;
}
var yR;
function _R() {
  return yR || (yR = 1, process.env.NODE_ENV === "production" ? Km.exports = Ck() : Km.exports = xk()), Km.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gR;
function Rk() {
  if (gR) return Ba;
  gR = 1;
  var T = av(), O = _R();
  function k(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++) r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var ge = /* @__PURE__ */ new Set(), Re = {};
  function ee(n, r) {
    g(n, r), g(n + "Capture", r);
  }
  function g(n, r) {
    for (Re[n] = r, n = 0; n < r.length; n++) ge.add(r[n]);
  }
  var Ne = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), G = Object.prototype.hasOwnProperty, Y = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, be = {}, re = {};
  function we(n) {
    return G.call(re, n) ? !0 : G.call(be, n) ? !1 : Y.test(n) ? re[n] = !0 : (be[n] = !0, !1);
  }
  function fe(n, r, l, o) {
    if (l !== null && l.type === 0) return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return o ? !1 : l !== null ? !l.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function Xe(n, r, l, o) {
    if (r === null || typeof r > "u" || fe(n, r, l, o)) return !0;
    if (o) return !1;
    if (l !== null) switch (l.type) {
      case 3:
        return !r;
      case 4:
        return r === !1;
      case 5:
        return isNaN(r);
      case 6:
        return isNaN(r) || 1 > r;
    }
    return !1;
  }
  function Et(n, r, l, o, c, d, m) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = o, this.attributeNamespace = c, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = m;
  }
  var mt = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    mt[n] = new Et(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    mt[r] = new Et(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    mt[n] = new Et(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    mt[n] = new Et(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    mt[n] = new Et(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    mt[n] = new Et(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    mt[n] = new Et(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    mt[n] = new Et(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    mt[n] = new Et(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var fn = /[\-:]([a-z])/g;
  function ht(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      fn,
      ht
    );
    mt[r] = new Et(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(fn, ht);
    mt[r] = new Et(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(fn, ht);
    mt[r] = new Et(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    mt[n] = new Et(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), mt.xlinkHref = new Et("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    mt[n] = new Et(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function Ke(n, r, l, o) {
    var c = mt.hasOwnProperty(r) ? mt[r] : null;
    (c !== null ? c.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (Xe(r, l, c, o) && (l = null), o || c === null ? we(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, o = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))));
  }
  var yt = T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Le = Symbol.for("react.element"), dt = Symbol.for("react.portal"), $e = Symbol.for("react.fragment"), an = Symbol.for("react.strict_mode"), Ht = Symbol.for("react.profiler"), Jt = Symbol.for("react.provider"), ln = Symbol.for("react.context"), _t = Symbol.for("react.forward_ref"), Ue = Symbol.for("react.suspense"), At = Symbol.for("react.suspense_list"), kt = Symbol.for("react.memo"), Ot = Symbol.for("react.lazy"), Te = Symbol.for("react.offscreen"), ne = Symbol.iterator;
  function _e(n) {
    return n === null || typeof n != "object" ? null : (n = ne && n[ne] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var le = Object.assign, D;
  function $(n) {
    if (D === void 0) try {
      throw Error();
    } catch (l) {
      var r = l.stack.trim().match(/\n( *(at )?)/);
      D = r && r[1] || "";
    }
    return `
` + D + n;
  }
  var Ie = !1;
  function Ve(n, r) {
    if (!n || Ie) return "";
    Ie = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r) if (r = function() {
        throw Error();
      }, Object.defineProperty(r.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(r, []);
        } catch (F) {
          var o = F;
        }
        Reflect.construct(n, [], r);
      } else {
        try {
          r.call();
        } catch (F) {
          o = F;
        }
        n.call(r.prototype);
      }
      else {
        try {
          throw Error();
        } catch (F) {
          o = F;
        }
        n();
      }
    } catch (F) {
      if (F && o && typeof F.stack == "string") {
        for (var c = F.stack.split(`
`), d = o.stack.split(`
`), m = c.length - 1, E = d.length - 1; 1 <= m && 0 <= E && c[m] !== d[E]; ) E--;
        for (; 1 <= m && 0 <= E; m--, E--) if (c[m] !== d[E]) {
          if (m !== 1 || E !== 1)
            do
              if (m--, E--, 0 > E || c[m] !== d[E]) {
                var R = `
` + c[m].replace(" at new ", " at ");
                return n.displayName && R.includes("<anonymous>") && (R = R.replace("<anonymous>", n.displayName)), R;
              }
            while (1 <= m && 0 <= E);
          break;
        }
      }
    } finally {
      Ie = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? $(n) : "";
  }
  function ot(n) {
    switch (n.tag) {
      case 5:
        return $(n.type);
      case 16:
        return $("Lazy");
      case 13:
        return $("Suspense");
      case 19:
        return $("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = Ve(n.type, !1), n;
      case 11:
        return n = Ve(n.type.render, !1), n;
      case 1:
        return n = Ve(n.type, !0), n;
      default:
        return "";
    }
  }
  function at(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case $e:
        return "Fragment";
      case dt:
        return "Portal";
      case Ht:
        return "Profiler";
      case an:
        return "StrictMode";
      case Ue:
        return "Suspense";
      case At:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case ln:
        return (n.displayName || "Context") + ".Consumer";
      case Jt:
        return (n._context.displayName || "Context") + ".Provider";
      case _t:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case kt:
        return r = n.displayName || null, r !== null ? r : at(n.type) || "Memo";
      case Ot:
        r = n._payload, n = n._init;
        try {
          return at(n(r));
        } catch {
        }
    }
    return null;
  }
  function nt(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = r.render, n = n.displayName || n.name || "", r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return at(r);
      case 8:
        return r === an ? "StrictMode" : "Mode";
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
        if (typeof r == "function") return r.displayName || r.name || null;
        if (typeof r == "string") return r;
    }
    return null;
  }
  function it(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function st(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function Bt(n) {
    var r = st(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), o = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var c = l.get, d = l.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return c.call(this);
      }, set: function(m) {
        o = "" + m, d.call(this, m);
      } }), Object.defineProperty(n, r, { enumerable: l.enumerable }), { getValue: function() {
        return o;
      }, setValue: function(m) {
        o = "" + m;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function On(n) {
    n._valueTracker || (n._valueTracker = Bt(n));
  }
  function br(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var l = r.getValue(), o = "";
    return n && (o = st(n) ? n.checked ? "true" : "false" : n.value), n = o, n !== l ? (r.setValue(n), !0) : !1;
  }
  function Cn(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u") return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function nr(n, r) {
    var l = r.checked;
    return le({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function Vn(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, o = r.checked != null ? r.checked : r.defaultChecked;
    l = it(r.value != null ? r.value : l), n._wrapperState = { initialChecked: o, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Bn(n, r) {
    r = r.checked, r != null && Ke(n, "checked", r, !1);
  }
  function Ir(n, r) {
    Bn(n, r);
    var l = it(r.value), o = r.type;
    if (l != null) o === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (o === "submit" || o === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? oa(n, r.type, l) : r.hasOwnProperty("defaultValue") && oa(n, r.type, it(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function si(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var o = r.type;
      if (!(o !== "submit" && o !== "reset" || r.value !== void 0 && r.value !== null)) return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function oa(n, r, l) {
    (r !== "number" || Cn(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var qn = Array.isArray;
  function xn(n, r, l, o) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < l.length; c++) r["$" + l[c]] = !0;
      for (l = 0; l < n.length; l++) c = r.hasOwnProperty("$" + n[l].value), n[l].selected !== c && (n[l].selected = c), c && o && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + it(l), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === l) {
          n[c].selected = !0, o && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function $n(n, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(k(91));
    return le({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function gr(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null) throw Error(k(92));
        if (qn(l)) {
          if (1 < l.length) throw Error(k(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: it(l) };
  }
  function Ia(n, r) {
    var l = it(r.value), o = it(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), o != null && (n.defaultValue = "" + o);
  }
  function Nn(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function Sr(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function sa(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? Sr(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var Ya, ci = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, l, o, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, o, c);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n) n.innerHTML = r;
    else {
      for (Ya = Ya || document.createElement("div"), Ya.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = Ya.firstChild; n.firstChild; ) n.removeChild(n.firstChild);
      for (; r.firstChild; ) n.appendChild(r.firstChild);
    }
  });
  function ae(n, r) {
    if (r) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var ke = {
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
  }, lt = ["Webkit", "ms", "Moz", "O"];
  Object.keys(ke).forEach(function(n) {
    lt.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), ke[r] = ke[n];
    });
  });
  function Ft(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || ke.hasOwnProperty(n) && ke[n] ? ("" + r).trim() : r + "px";
  }
  function Zt(n, r) {
    n = n.style;
    for (var l in r) if (r.hasOwnProperty(l)) {
      var o = l.indexOf("--") === 0, c = Ft(l, r[l], o);
      l === "float" && (l = "cssFloat"), o ? n.setProperty(l, c) : n[l] = c;
    }
  }
  var vn = le({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function un(n, r) {
    if (r) {
      if (vn[n] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(k(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(k(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(k(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(k(62));
    }
  }
  function Xn(n, r) {
    if (n.indexOf("-") === -1) return typeof r.is == "string";
    switch (n) {
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
  var en = null;
  function $t(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var It = null, ca = null, Er = null;
  function Ra(n) {
    if (n = Me(n)) {
      if (typeof It != "function") throw Error(k(280));
      var r = n.stateNode;
      r && (r = mn(r), It(n.stateNode, n.type, r));
    }
  }
  function Hi(n) {
    ca ? Er ? Er.push(n) : Er = [n] : ca = n;
  }
  function Zl() {
    if (ca) {
      var n = ca, r = Er;
      if (Er = ca = null, Ra(n), r) for (n = 0; n < r.length; n++) Ra(r[n]);
    }
  }
  function eu(n, r) {
    return n(r);
  }
  function pl() {
  }
  var vl = !1;
  function tu(n, r, l) {
    if (vl) return n(r, l);
    vl = !0;
    try {
      return eu(n, r, l);
    } finally {
      vl = !1, (ca !== null || Er !== null) && (pl(), Zl());
    }
  }
  function wr(n, r) {
    var l = n.stateNode;
    if (l === null) return null;
    var o = mn(l);
    if (o === null) return null;
    l = o[r];
    e: switch (r) {
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
        (o = !o.disabled) || (n = n.type, o = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !o;
        break e;
      default:
        n = !1;
    }
    if (n) return null;
    if (l && typeof l != "function") throw Error(k(231, r, typeof l));
    return l;
  }
  var _r = !1;
  if (Ne) try {
    var rr = {};
    Object.defineProperty(rr, "passive", { get: function() {
      _r = !0;
    } }), window.addEventListener("test", rr, rr), window.removeEventListener("test", rr, rr);
  } catch {
    _r = !1;
  }
  function fi(n, r, l, o, c, d, m, E, R) {
    var F = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, F);
    } catch (X) {
      this.onError(X);
    }
  }
  var Qa = !1, di = null, pi = !1, x = null, Q = { onError: function(n) {
    Qa = !0, di = n;
  } };
  function oe(n, r, l, o, c, d, m, E, R) {
    Qa = !1, di = null, fi.apply(Q, arguments);
  }
  function ye(n, r, l, o, c, d, m, E, R) {
    if (oe.apply(this, arguments), Qa) {
      if (Qa) {
        var F = di;
        Qa = !1, di = null;
      } else throw Error(k(198));
      pi || (pi = !0, x = F);
    }
  }
  function Ze(n) {
    var r = n, l = n;
    if (n.alternate) for (; r.return; ) r = r.return;
    else {
      n = r;
      do
        r = n, r.flags & 4098 && (l = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? l : null;
  }
  function Ge(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  function pt(n) {
    if (Ze(n) !== n) throw Error(k(188));
  }
  function ct(n) {
    var r = n.alternate;
    if (!r) {
      if (r = Ze(n), r === null) throw Error(k(188));
      return r !== n ? null : n;
    }
    for (var l = n, o = r; ; ) {
      var c = l.return;
      if (c === null) break;
      var d = c.alternate;
      if (d === null) {
        if (o = c.return, o !== null) {
          l = o;
          continue;
        }
        break;
      }
      if (c.child === d.child) {
        for (d = c.child; d; ) {
          if (d === l) return pt(c), n;
          if (d === o) return pt(c), r;
          d = d.sibling;
        }
        throw Error(k(188));
      }
      if (l.return !== o.return) l = c, o = d;
      else {
        for (var m = !1, E = c.child; E; ) {
          if (E === l) {
            m = !0, l = c, o = d;
            break;
          }
          if (E === o) {
            m = !0, o = c, l = d;
            break;
          }
          E = E.sibling;
        }
        if (!m) {
          for (E = d.child; E; ) {
            if (E === l) {
              m = !0, l = d, o = c;
              break;
            }
            if (E === o) {
              m = !0, o = d, l = c;
              break;
            }
            E = E.sibling;
          }
          if (!m) throw Error(k(189));
        }
      }
      if (l.alternate !== o) throw Error(k(190));
    }
    if (l.tag !== 3) throw Error(k(188));
    return l.stateNode.current === l ? n : r;
  }
  function Rn(n) {
    return n = ct(n), n !== null ? tn(n) : null;
  }
  function tn(n) {
    if (n.tag === 5 || n.tag === 6) return n;
    for (n = n.child; n !== null; ) {
      var r = tn(n);
      if (r !== null) return r;
      n = n.sibling;
    }
    return null;
  }
  var on = O.unstable_scheduleCallback, ar = O.unstable_cancelCallback, Wa = O.unstable_shouldYield, Ga = O.unstable_requestPaint, et = O.unstable_now, rt = O.unstable_getCurrentPriorityLevel, qa = O.unstable_ImmediatePriority, nu = O.unstable_UserBlockingPriority, ru = O.unstable_NormalPriority, hl = O.unstable_LowPriority, Wu = O.unstable_IdlePriority, ml = null, Yr = null;
  function Qo(n) {
    if (Yr && typeof Yr.onCommitFiberRoot == "function") try {
      Yr.onCommitFiberRoot(ml, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var kr = Math.clz32 ? Math.clz32 : Gu, oc = Math.log, sc = Math.LN2;
  function Gu(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (oc(n) / sc | 0) | 0;
  }
  var yl = 64, fa = 4194304;
  function Xa(n) {
    switch (n & -n) {
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
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function Ka(n, r) {
    var l = n.pendingLanes;
    if (l === 0) return 0;
    var o = 0, c = n.suspendedLanes, d = n.pingedLanes, m = l & 268435455;
    if (m !== 0) {
      var E = m & ~c;
      E !== 0 ? o = Xa(E) : (d &= m, d !== 0 && (o = Xa(d)));
    } else m = l & ~c, m !== 0 ? o = Xa(m) : d !== 0 && (o = Xa(d));
    if (o === 0) return 0;
    if (r !== 0 && r !== o && !(r & c) && (c = o & -o, d = r & -r, c >= d || c === 16 && (d & 4194240) !== 0)) return r;
    if (o & 4 && (o |= l & 16), r = n.entangledLanes, r !== 0) for (n = n.entanglements, r &= o; 0 < r; ) l = 31 - kr(r), c = 1 << l, o |= n[l], r &= ~c;
    return o;
  }
  function qu(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return r + 250;
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
        return r + 5e3;
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
  function au(n, r) {
    for (var l = n.suspendedLanes, o = n.pingedLanes, c = n.expirationTimes, d = n.pendingLanes; 0 < d; ) {
      var m = 31 - kr(d), E = 1 << m, R = c[m];
      R === -1 ? (!(E & l) || E & o) && (c[m] = qu(E, r)) : R <= r && (n.expiredLanes |= E), d &= ~E;
    }
  }
  function gl(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function Xu() {
    var n = yl;
    return yl <<= 1, !(yl & 4194240) && (yl = 64), n;
  }
  function Ku(n) {
    for (var r = [], l = 0; 31 > l; l++) r.push(n);
    return r;
  }
  function Pi(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - kr(r), n[r] = l;
  }
  function Gf(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var o = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var c = 31 - kr(l), d = 1 << c;
      r[c] = 0, o[c] = -1, n[c] = -1, l &= ~d;
    }
  }
  function Vi(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var o = 31 - kr(l), c = 1 << o;
      c & r | n[o] & r && (n[o] |= r), l &= ~c;
    }
  }
  var Nt = 0;
  function Ju(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var bt, Wo, vi, We, Zu, ir = !1, hi = [], Dr = null, mi = null, sn = null, Yt = /* @__PURE__ */ new Map(), Sl = /* @__PURE__ */ new Map(), In = [], Or = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Ta(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        Dr = null;
        break;
      case "dragenter":
      case "dragleave":
        mi = null;
        break;
      case "mouseover":
      case "mouseout":
        sn = null;
        break;
      case "pointerover":
      case "pointerout":
        Yt.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Sl.delete(r.pointerId);
    }
  }
  function iu(n, r, l, o, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: o, nativeEvent: d, targetContainers: [c] }, r !== null && (r = Me(r), r !== null && Wo(r)), n) : (n.eventSystemFlags |= o, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function Go(n, r, l, o, c) {
    switch (r) {
      case "focusin":
        return Dr = iu(Dr, n, r, l, o, c), !0;
      case "dragenter":
        return mi = iu(mi, n, r, l, o, c), !0;
      case "mouseover":
        return sn = iu(sn, n, r, l, o, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return Yt.set(d, iu(Yt.get(d) || null, n, r, l, o, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, Sl.set(d, iu(Sl.get(d) || null, n, r, l, o, c)), !0;
    }
    return !1;
  }
  function qo(n) {
    var r = vu(n.target);
    if (r !== null) {
      var l = Ze(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = Ge(l), r !== null) {
            n.blockedOn = r, Zu(n.priority, function() {
              vi(l);
            });
            return;
          }
        } else if (r === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function El(n) {
    if (n.blockedOn !== null) return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = no(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var o = new l.constructor(l.type, l);
        en = o, l.target.dispatchEvent(o), en = null;
      } else return r = Me(l), r !== null && Wo(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function lu(n, r, l) {
    El(n) && l.delete(r);
  }
  function qf() {
    ir = !1, Dr !== null && El(Dr) && (Dr = null), mi !== null && El(mi) && (mi = null), sn !== null && El(sn) && (sn = null), Yt.forEach(lu), Sl.forEach(lu);
  }
  function ba(n, r) {
    n.blockedOn === r && (n.blockedOn = null, ir || (ir = !0, O.unstable_scheduleCallback(O.unstable_NormalPriority, qf)));
  }
  function Ja(n) {
    function r(c) {
      return ba(c, n);
    }
    if (0 < hi.length) {
      ba(hi[0], n);
      for (var l = 1; l < hi.length; l++) {
        var o = hi[l];
        o.blockedOn === n && (o.blockedOn = null);
      }
    }
    for (Dr !== null && ba(Dr, n), mi !== null && ba(mi, n), sn !== null && ba(sn, n), Yt.forEach(r), Sl.forEach(r), l = 0; l < In.length; l++) o = In[l], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < In.length && (l = In[0], l.blockedOn === null); ) qo(l), l.blockedOn === null && In.shift();
  }
  var yi = yt.ReactCurrentBatchConfig, wa = !0;
  function eo(n, r, l, o) {
    var c = Nt, d = yi.transition;
    yi.transition = null;
    try {
      Nt = 1, Cl(n, r, l, o);
    } finally {
      Nt = c, yi.transition = d;
    }
  }
  function to(n, r, l, o) {
    var c = Nt, d = yi.transition;
    yi.transition = null;
    try {
      Nt = 4, Cl(n, r, l, o);
    } finally {
      Nt = c, yi.transition = d;
    }
  }
  function Cl(n, r, l, o) {
    if (wa) {
      var c = no(n, r, l, o);
      if (c === null) Cc(n, r, o, uu, l), Ta(n, o);
      else if (Go(c, n, r, l, o)) o.stopPropagation();
      else if (Ta(n, o), r & 4 && -1 < Or.indexOf(n)) {
        for (; c !== null; ) {
          var d = Me(c);
          if (d !== null && bt(d), d = no(n, r, l, o), d === null && Cc(n, r, o, uu, l), d === c) break;
          c = d;
        }
        c !== null && o.stopPropagation();
      } else Cc(n, r, o, null, l);
    }
  }
  var uu = null;
  function no(n, r, l, o) {
    if (uu = null, n = $t(o), n = vu(n), n !== null) if (r = Ze(n), r === null) n = null;
    else if (l = r.tag, l === 13) {
      if (n = Ge(r), n !== null) return n;
      n = null;
    } else if (l === 3) {
      if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
      n = null;
    } else r !== n && (n = null);
    return uu = n, null;
  }
  function ro(n) {
    switch (n) {
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
        switch (rt()) {
          case qa:
            return 1;
          case nu:
            return 4;
          case ru:
          case hl:
            return 16;
          case Wu:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Za = null, h = null, C = null;
  function A() {
    if (C) return C;
    var n, r = h, l = r.length, o, c = "value" in Za ? Za.value : Za.textContent, d = c.length;
    for (n = 0; n < l && r[n] === c[n]; n++) ;
    var m = l - n;
    for (o = 1; o <= m && r[l - o] === c[d - o]; o++) ;
    return C = c.slice(n, 1 < o ? 1 - o : void 0);
  }
  function P(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function te() {
    return !0;
  }
  function je() {
    return !1;
  }
  function ue(n) {
    function r(l, o, c, d, m) {
      this._reactName = l, this._targetInst = c, this.type = o, this.nativeEvent = d, this.target = m, this.currentTarget = null;
      for (var E in n) n.hasOwnProperty(E) && (l = n[E], this[E] = l ? l(d) : d[E]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? te : je, this.isPropagationStopped = je, this;
    }
    return le(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = te);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = te);
    }, persist: function() {
    }, isPersistent: te }), r;
  }
  var He = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, vt = ue(He), wt = le({}, He, { view: 0, detail: 0 }), nn = ue(wt), Qt, ut, Wt, hn = le({}, wt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ed, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== Wt && (Wt && n.type === "mousemove" ? (Qt = n.screenX - Wt.screenX, ut = n.screenY - Wt.screenY) : ut = Qt = 0, Wt = n), Qt);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : ut;
  } }), xl = ue(hn), Xo = le({}, hn, { dataTransfer: 0 }), Bi = ue(Xo), Ko = le({}, wt, { relatedTarget: 0 }), ou = ue(Ko), Xf = le({}, He, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), cc = ue(Xf), Kf = le({}, He, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), iv = ue(Kf), Jf = le({}, He, { data: 0 }), Zf = ue(Jf), lv = {
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
  }, uv = {
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
  }, ey = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function $i(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = ey[n]) ? !!r[n] : !1;
  }
  function ed() {
    return $i;
  }
  var td = le({}, wt, { key: function(n) {
    if (n.key) {
      var r = lv[n.key] || n.key;
      if (r !== "Unidentified") return r;
    }
    return n.type === "keypress" ? (n = P(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? uv[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: ed, charCode: function(n) {
    return n.type === "keypress" ? P(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? P(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), nd = ue(td), rd = le({}, hn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), ov = ue(rd), fc = le({}, wt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ed }), sv = ue(fc), Qr = le({}, He, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Ii = ue(Qr), Ln = le({}, hn, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Yi = ue(Ln), ad = [9, 13, 27, 32], ao = Ne && "CompositionEvent" in window, Jo = null;
  Ne && "documentMode" in document && (Jo = document.documentMode);
  var Zo = Ne && "TextEvent" in window && !Jo, cv = Ne && (!ao || Jo && 8 < Jo && 11 >= Jo), fv = " ", dc = !1;
  function dv(n, r) {
    switch (n) {
      case "keyup":
        return ad.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function pv(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var io = !1;
  function vv(n, r) {
    switch (n) {
      case "compositionend":
        return pv(r);
      case "keypress":
        return r.which !== 32 ? null : (dc = !0, fv);
      case "textInput":
        return n = r.data, n === fv && dc ? null : n;
      default:
        return null;
    }
  }
  function ty(n, r) {
    if (io) return n === "compositionend" || !ao && dv(n, r) ? (n = A(), C = h = Za = null, io = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length) return r.char;
          if (r.which) return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return cv && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var ny = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function hv(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!ny[n.type] : r === "textarea";
  }
  function id(n, r, l, o) {
    Hi(o), r = is(r, "onChange"), 0 < r.length && (l = new vt("onChange", "change", null, l, o), n.push({ event: l, listeners: r }));
  }
  var gi = null, su = null;
  function mv(n) {
    du(n, 0);
  }
  function es(n) {
    var r = ti(n);
    if (br(r)) return n;
  }
  function ry(n, r) {
    if (n === "change") return r;
  }
  var yv = !1;
  if (Ne) {
    var ld;
    if (Ne) {
      var ud = "oninput" in document;
      if (!ud) {
        var gv = document.createElement("div");
        gv.setAttribute("oninput", "return;"), ud = typeof gv.oninput == "function";
      }
      ld = ud;
    } else ld = !1;
    yv = ld && (!document.documentMode || 9 < document.documentMode);
  }
  function Sv() {
    gi && (gi.detachEvent("onpropertychange", Ev), su = gi = null);
  }
  function Ev(n) {
    if (n.propertyName === "value" && es(su)) {
      var r = [];
      id(r, su, n, $t(n)), tu(mv, r);
    }
  }
  function ay(n, r, l) {
    n === "focusin" ? (Sv(), gi = r, su = l, gi.attachEvent("onpropertychange", Ev)) : n === "focusout" && Sv();
  }
  function Cv(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return es(su);
  }
  function iy(n, r) {
    if (n === "click") return es(r);
  }
  function xv(n, r) {
    if (n === "input" || n === "change") return es(r);
  }
  function ly(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var ei = typeof Object.is == "function" ? Object.is : ly;
  function ts(n, r) {
    if (ei(n, r)) return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null) return !1;
    var l = Object.keys(n), o = Object.keys(r);
    if (l.length !== o.length) return !1;
    for (o = 0; o < l.length; o++) {
      var c = l[o];
      if (!G.call(r, c) || !ei(n[c], r[c])) return !1;
    }
    return !0;
  }
  function Rv(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function pc(n, r) {
    var l = Rv(n);
    n = 0;
    for (var o; l; ) {
      if (l.nodeType === 3) {
        if (o = n + l.textContent.length, n <= r && o >= r) return { node: l, offset: r - n };
        n = o;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = Rv(l);
    }
  }
  function Rl(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? Rl(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function ns() {
    for (var n = window, r = Cn(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) n = r.contentWindow;
      else break;
      r = Cn(n.document);
    }
    return r;
  }
  function vc(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function lo(n) {
    var r = ns(), l = n.focusedElem, o = n.selectionRange;
    if (r !== l && l && l.ownerDocument && Rl(l.ownerDocument.documentElement, l)) {
      if (o !== null && vc(l)) {
        if (r = o.start, n = o.end, n === void 0 && (n = r), "selectionStart" in l) l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = l.textContent.length, d = Math.min(o.start, c);
          o = o.end === void 0 ? d : Math.min(o.end, c), !n.extend && d > o && (c = o, o = d, d = c), c = pc(l, d);
          var m = pc(
            l,
            o
          );
          c && m && (n.rangeCount !== 1 || n.anchorNode !== c.node || n.anchorOffset !== c.offset || n.focusNode !== m.node || n.focusOffset !== m.offset) && (r = r.createRange(), r.setStart(c.node, c.offset), n.removeAllRanges(), d > o ? (n.addRange(r), n.extend(m.node, m.offset)) : (r.setEnd(m.node, m.offset), n.addRange(r)));
        }
      }
      for (r = [], n = l; n = n.parentNode; ) n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof l.focus == "function" && l.focus(), l = 0; l < r.length; l++) n = r[l], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var uy = Ne && "documentMode" in document && 11 >= document.documentMode, uo = null, od = null, rs = null, sd = !1;
  function cd(n, r, l) {
    var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    sd || uo == null || uo !== Cn(o) || (o = uo, "selectionStart" in o && vc(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), rs && ts(rs, o) || (rs = o, o = is(od, "onSelect"), 0 < o.length && (r = new vt("onSelect", "select", null, r, l), n.push({ event: r, listeners: o }), r.target = uo)));
  }
  function hc(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var cu = { animationend: hc("Animation", "AnimationEnd"), animationiteration: hc("Animation", "AnimationIteration"), animationstart: hc("Animation", "AnimationStart"), transitionend: hc("Transition", "TransitionEnd") }, lr = {}, fd = {};
  Ne && (fd = document.createElement("div").style, "AnimationEvent" in window || (delete cu.animationend.animation, delete cu.animationiteration.animation, delete cu.animationstart.animation), "TransitionEvent" in window || delete cu.transitionend.transition);
  function mc(n) {
    if (lr[n]) return lr[n];
    if (!cu[n]) return n;
    var r = cu[n], l;
    for (l in r) if (r.hasOwnProperty(l) && l in fd) return lr[n] = r[l];
    return n;
  }
  var Tv = mc("animationend"), bv = mc("animationiteration"), wv = mc("animationstart"), _v = mc("transitionend"), dd = /* @__PURE__ */ new Map(), yc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function _a(n, r) {
    dd.set(n, r), ee(r, [n]);
  }
  for (var pd = 0; pd < yc.length; pd++) {
    var fu = yc[pd], oy = fu.toLowerCase(), sy = fu[0].toUpperCase() + fu.slice(1);
    _a(oy, "on" + sy);
  }
  _a(Tv, "onAnimationEnd"), _a(bv, "onAnimationIteration"), _a(wv, "onAnimationStart"), _a("dblclick", "onDoubleClick"), _a("focusin", "onFocus"), _a("focusout", "onBlur"), _a(_v, "onTransitionEnd"), g("onMouseEnter", ["mouseout", "mouseover"]), g("onMouseLeave", ["mouseout", "mouseover"]), g("onPointerEnter", ["pointerout", "pointerover"]), g("onPointerLeave", ["pointerout", "pointerover"]), ee("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), ee("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), ee("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), ee("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), ee("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), ee("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var as = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), vd = new Set("cancel close invalid load scroll toggle".split(" ").concat(as));
  function gc(n, r, l) {
    var o = n.type || "unknown-event";
    n.currentTarget = l, ye(o, r, void 0, n), n.currentTarget = null;
  }
  function du(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var o = n[l], c = o.event;
      o = o.listeners;
      e: {
        var d = void 0;
        if (r) for (var m = o.length - 1; 0 <= m; m--) {
          var E = o[m], R = E.instance, F = E.currentTarget;
          if (E = E.listener, R !== d && c.isPropagationStopped()) break e;
          gc(c, E, F), d = R;
        }
        else for (m = 0; m < o.length; m++) {
          if (E = o[m], R = E.instance, F = E.currentTarget, E = E.listener, R !== d && c.isPropagationStopped()) break e;
          gc(c, E, F), d = R;
        }
      }
    }
    if (pi) throw n = x, pi = !1, x = null, n;
  }
  function Pt(n, r) {
    var l = r[os];
    l === void 0 && (l = r[os] = /* @__PURE__ */ new Set());
    var o = n + "__bubble";
    l.has(o) || (kv(r, n, 2, !1), l.add(o));
  }
  function Sc(n, r, l) {
    var o = 0;
    r && (o |= 4), kv(l, n, o, r);
  }
  var Ec = "_reactListening" + Math.random().toString(36).slice(2);
  function oo(n) {
    if (!n[Ec]) {
      n[Ec] = !0, ge.forEach(function(l) {
        l !== "selectionchange" && (vd.has(l) || Sc(l, !1, n), Sc(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Ec] || (r[Ec] = !0, Sc("selectionchange", !1, r));
    }
  }
  function kv(n, r, l, o) {
    switch (ro(r)) {
      case 1:
        var c = eo;
        break;
      case 4:
        c = to;
        break;
      default:
        c = Cl;
    }
    l = c.bind(null, r, l, n), c = void 0, !_r || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), o ? c !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: c }) : n.addEventListener(r, l, !0) : c !== void 0 ? n.addEventListener(r, l, { passive: c }) : n.addEventListener(r, l, !1);
  }
  function Cc(n, r, l, o, c) {
    var d = o;
    if (!(r & 1) && !(r & 2) && o !== null) e: for (; ; ) {
      if (o === null) return;
      var m = o.tag;
      if (m === 3 || m === 4) {
        var E = o.stateNode.containerInfo;
        if (E === c || E.nodeType === 8 && E.parentNode === c) break;
        if (m === 4) for (m = o.return; m !== null; ) {
          var R = m.tag;
          if ((R === 3 || R === 4) && (R = m.stateNode.containerInfo, R === c || R.nodeType === 8 && R.parentNode === c)) return;
          m = m.return;
        }
        for (; E !== null; ) {
          if (m = vu(E), m === null) return;
          if (R = m.tag, R === 5 || R === 6) {
            o = d = m;
            continue e;
          }
          E = E.parentNode;
        }
      }
      o = o.return;
    }
    tu(function() {
      var F = d, X = $t(l), J = [];
      e: {
        var q = dd.get(n);
        if (q !== void 0) {
          var pe = vt, Se = n;
          switch (n) {
            case "keypress":
              if (P(l) === 0) break e;
            case "keydown":
            case "keyup":
              pe = nd;
              break;
            case "focusin":
              Se = "focus", pe = ou;
              break;
            case "focusout":
              Se = "blur", pe = ou;
              break;
            case "beforeblur":
            case "afterblur":
              pe = ou;
              break;
            case "click":
              if (l.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              pe = xl;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              pe = Bi;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              pe = sv;
              break;
            case Tv:
            case bv:
            case wv:
              pe = cc;
              break;
            case _v:
              pe = Ii;
              break;
            case "scroll":
              pe = nn;
              break;
            case "wheel":
              pe = Yi;
              break;
            case "copy":
            case "cut":
            case "paste":
              pe = iv;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              pe = ov;
          }
          var xe = (r & 4) !== 0, kn = !xe && n === "scroll", N = xe ? q !== null ? q + "Capture" : null : q;
          xe = [];
          for (var w = F, U; w !== null; ) {
            U = w;
            var K = U.stateNode;
            if (U.tag === 5 && K !== null && (U = K, N !== null && (K = wr(w, N), K != null && xe.push(so(w, K, U)))), kn) break;
            w = w.return;
          }
          0 < xe.length && (q = new pe(q, Se, null, l, X), J.push({ event: q, listeners: xe }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (q = n === "mouseover" || n === "pointerover", pe = n === "mouseout" || n === "pointerout", q && l !== en && (Se = l.relatedTarget || l.fromElement) && (vu(Se) || Se[Qi])) break e;
          if ((pe || q) && (q = X.window === X ? X : (q = X.ownerDocument) ? q.defaultView || q.parentWindow : window, pe ? (Se = l.relatedTarget || l.toElement, pe = F, Se = Se ? vu(Se) : null, Se !== null && (kn = Ze(Se), Se !== kn || Se.tag !== 5 && Se.tag !== 6) && (Se = null)) : (pe = null, Se = F), pe !== Se)) {
            if (xe = xl, K = "onMouseLeave", N = "onMouseEnter", w = "mouse", (n === "pointerout" || n === "pointerover") && (xe = ov, K = "onPointerLeave", N = "onPointerEnter", w = "pointer"), kn = pe == null ? q : ti(pe), U = Se == null ? q : ti(Se), q = new xe(K, w + "leave", pe, l, X), q.target = kn, q.relatedTarget = U, K = null, vu(X) === F && (xe = new xe(N, w + "enter", Se, l, X), xe.target = U, xe.relatedTarget = kn, K = xe), kn = K, pe && Se) t: {
              for (xe = pe, N = Se, w = 0, U = xe; U; U = Tl(U)) w++;
              for (U = 0, K = N; K; K = Tl(K)) U++;
              for (; 0 < w - U; ) xe = Tl(xe), w--;
              for (; 0 < U - w; ) N = Tl(N), U--;
              for (; w--; ) {
                if (xe === N || N !== null && xe === N.alternate) break t;
                xe = Tl(xe), N = Tl(N);
              }
              xe = null;
            }
            else xe = null;
            pe !== null && Dv(J, q, pe, xe, !1), Se !== null && kn !== null && Dv(J, kn, Se, xe, !0);
          }
        }
        e: {
          if (q = F ? ti(F) : window, pe = q.nodeName && q.nodeName.toLowerCase(), pe === "select" || pe === "input" && q.type === "file") var Ee = ry;
          else if (hv(q)) if (yv) Ee = xv;
          else {
            Ee = Cv;
            var Fe = ay;
          }
          else (pe = q.nodeName) && pe.toLowerCase() === "input" && (q.type === "checkbox" || q.type === "radio") && (Ee = iy);
          if (Ee && (Ee = Ee(n, F))) {
            id(J, Ee, l, X);
            break e;
          }
          Fe && Fe(n, q, F), n === "focusout" && (Fe = q._wrapperState) && Fe.controlled && q.type === "number" && oa(q, "number", q.value);
        }
        switch (Fe = F ? ti(F) : window, n) {
          case "focusin":
            (hv(Fe) || Fe.contentEditable === "true") && (uo = Fe, od = F, rs = null);
            break;
          case "focusout":
            rs = od = uo = null;
            break;
          case "mousedown":
            sd = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            sd = !1, cd(J, l, X);
            break;
          case "selectionchange":
            if (uy) break;
          case "keydown":
          case "keyup":
            cd(J, l, X);
        }
        var Pe;
        if (ao) e: {
          switch (n) {
            case "compositionstart":
              var Qe = "onCompositionStart";
              break e;
            case "compositionend":
              Qe = "onCompositionEnd";
              break e;
            case "compositionupdate":
              Qe = "onCompositionUpdate";
              break e;
          }
          Qe = void 0;
        }
        else io ? dv(n, l) && (Qe = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (Qe = "onCompositionStart");
        Qe && (cv && l.locale !== "ko" && (io || Qe !== "onCompositionStart" ? Qe === "onCompositionEnd" && io && (Pe = A()) : (Za = X, h = "value" in Za ? Za.value : Za.textContent, io = !0)), Fe = is(F, Qe), 0 < Fe.length && (Qe = new Zf(Qe, n, null, l, X), J.push({ event: Qe, listeners: Fe }), Pe ? Qe.data = Pe : (Pe = pv(l), Pe !== null && (Qe.data = Pe)))), (Pe = Zo ? vv(n, l) : ty(n, l)) && (F = is(F, "onBeforeInput"), 0 < F.length && (X = new Zf("onBeforeInput", "beforeinput", null, l, X), J.push({ event: X, listeners: F }), X.data = Pe));
      }
      du(J, r);
    });
  }
  function so(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function is(n, r) {
    for (var l = r + "Capture", o = []; n !== null; ) {
      var c = n, d = c.stateNode;
      c.tag === 5 && d !== null && (c = d, d = wr(n, l), d != null && o.unshift(so(n, d, c)), d = wr(n, r), d != null && o.push(so(n, d, c))), n = n.return;
    }
    return o;
  }
  function Tl(n) {
    if (n === null) return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function Dv(n, r, l, o, c) {
    for (var d = r._reactName, m = []; l !== null && l !== o; ) {
      var E = l, R = E.alternate, F = E.stateNode;
      if (R !== null && R === o) break;
      E.tag === 5 && F !== null && (E = F, c ? (R = wr(l, d), R != null && m.unshift(so(l, R, E))) : c || (R = wr(l, d), R != null && m.push(so(l, R, E)))), l = l.return;
    }
    m.length !== 0 && n.push({ event: r, listeners: m });
  }
  var Ov = /\r\n?/g, cy = /\u0000|\uFFFD/g;
  function Nv(n) {
    return (typeof n == "string" ? n : "" + n).replace(Ov, `
`).replace(cy, "");
  }
  function xc(n, r, l) {
    if (r = Nv(r), Nv(n) !== r && l) throw Error(k(425));
  }
  function bl() {
  }
  var ls = null, pu = null;
  function Rc(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var Tc = typeof setTimeout == "function" ? setTimeout : void 0, hd = typeof clearTimeout == "function" ? clearTimeout : void 0, Lv = typeof Promise == "function" ? Promise : void 0, co = typeof queueMicrotask == "function" ? queueMicrotask : typeof Lv < "u" ? function(n) {
    return Lv.resolve(null).then(n).catch(bc);
  } : Tc;
  function bc(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function fo(n, r) {
    var l = r, o = 0;
    do {
      var c = l.nextSibling;
      if (n.removeChild(l), c && c.nodeType === 8) if (l = c.data, l === "/$") {
        if (o === 0) {
          n.removeChild(c), Ja(r);
          return;
        }
        o--;
      } else l !== "$" && l !== "$?" && l !== "$!" || o++;
      l = c;
    } while (l);
    Ja(r);
  }
  function Si(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3) break;
      if (r === 8) {
        if (r = n.data, r === "$" || r === "$!" || r === "$?") break;
        if (r === "/$") return null;
      }
    }
    return n;
  }
  function Mv(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var l = n.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (r === 0) return n;
          r--;
        } else l === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var wl = Math.random().toString(36).slice(2), Ei = "__reactFiber$" + wl, us = "__reactProps$" + wl, Qi = "__reactContainer$" + wl, os = "__reactEvents$" + wl, po = "__reactListeners$" + wl, fy = "__reactHandles$" + wl;
  function vu(n) {
    var r = n[Ei];
    if (r) return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[Qi] || l[Ei]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null) for (n = Mv(n); n !== null; ) {
          if (l = n[Ei]) return l;
          n = Mv(n);
        }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function Me(n) {
    return n = n[Ei] || n[Qi], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function ti(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(k(33));
  }
  function mn(n) {
    return n[us] || null;
  }
  var Ct = [], ka = -1;
  function Da(n) {
    return { current: n };
  }
  function rn(n) {
    0 > ka || (n.current = Ct[ka], Ct[ka] = null, ka--);
  }
  function Oe(n, r) {
    ka++, Ct[ka] = n.current, n.current = r;
  }
  var Cr = {}, En = Da(Cr), Yn = Da(!1), Wr = Cr;
  function Gr(n, r) {
    var l = n.type.contextTypes;
    if (!l) return Cr;
    var o = n.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === r) return o.__reactInternalMemoizedMaskedChildContext;
    var c = {}, d;
    for (d in l) c[d] = r[d];
    return o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function Mn(n) {
    return n = n.childContextTypes, n != null;
  }
  function vo() {
    rn(Yn), rn(En);
  }
  function zv(n, r, l) {
    if (En.current !== Cr) throw Error(k(168));
    Oe(En, r), Oe(Yn, l);
  }
  function ss(n, r, l) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function") return l;
    o = o.getChildContext();
    for (var c in o) if (!(c in r)) throw Error(k(108, nt(n) || "Unknown", c));
    return le({}, l, o);
  }
  function Kn(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || Cr, Wr = En.current, Oe(En, n), Oe(Yn, Yn.current), !0;
  }
  function wc(n, r, l) {
    var o = n.stateNode;
    if (!o) throw Error(k(169));
    l ? (n = ss(n, r, Wr), o.__reactInternalMemoizedMergedChildContext = n, rn(Yn), rn(En), Oe(En, n)) : rn(Yn), Oe(Yn, l);
  }
  var Ci = null, ho = !1, Wi = !1;
  function _c(n) {
    Ci === null ? Ci = [n] : Ci.push(n);
  }
  function _l(n) {
    ho = !0, _c(n);
  }
  function xi() {
    if (!Wi && Ci !== null) {
      Wi = !0;
      var n = 0, r = Nt;
      try {
        var l = Ci;
        for (Nt = 1; n < l.length; n++) {
          var o = l[n];
          do
            o = o(!0);
          while (o !== null);
        }
        Ci = null, ho = !1;
      } catch (c) {
        throw Ci !== null && (Ci = Ci.slice(n + 1)), on(qa, xi), c;
      } finally {
        Nt = r, Wi = !1;
      }
    }
    return null;
  }
  var kl = [], Dl = 0, Ol = null, Gi = 0, zn = [], Oa = 0, da = null, Ri = 1, Ti = "";
  function hu(n, r) {
    kl[Dl++] = Gi, kl[Dl++] = Ol, Ol = n, Gi = r;
  }
  function Uv(n, r, l) {
    zn[Oa++] = Ri, zn[Oa++] = Ti, zn[Oa++] = da, da = n;
    var o = Ri;
    n = Ti;
    var c = 32 - kr(o) - 1;
    o &= ~(1 << c), l += 1;
    var d = 32 - kr(r) + c;
    if (30 < d) {
      var m = c - c % 5;
      d = (o & (1 << m) - 1).toString(32), o >>= m, c -= m, Ri = 1 << 32 - kr(r) + c | l << c | o, Ti = d + n;
    } else Ri = 1 << d | l << c | o, Ti = n;
  }
  function kc(n) {
    n.return !== null && (hu(n, 1), Uv(n, 1, 0));
  }
  function Dc(n) {
    for (; n === Ol; ) Ol = kl[--Dl], kl[Dl] = null, Gi = kl[--Dl], kl[Dl] = null;
    for (; n === da; ) da = zn[--Oa], zn[Oa] = null, Ti = zn[--Oa], zn[Oa] = null, Ri = zn[--Oa], zn[Oa] = null;
  }
  var qr = null, Xr = null, dn = !1, Na = null;
  function md(n, r) {
    var l = ja(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function jv(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, qr = n, Xr = Si(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, qr = n, Xr = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = da !== null ? { id: Ri, overflow: Ti } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = ja(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, qr = n, Xr = null, !0) : !1;
      default:
        return !1;
    }
  }
  function yd(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function gd(n) {
    if (dn) {
      var r = Xr;
      if (r) {
        var l = r;
        if (!jv(n, r)) {
          if (yd(n)) throw Error(k(418));
          r = Si(l.nextSibling);
          var o = qr;
          r && jv(n, r) ? md(o, l) : (n.flags = n.flags & -4097 | 2, dn = !1, qr = n);
        }
      } else {
        if (yd(n)) throw Error(k(418));
        n.flags = n.flags & -4097 | 2, dn = !1, qr = n;
      }
    }
  }
  function Qn(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    qr = n;
  }
  function Oc(n) {
    if (n !== qr) return !1;
    if (!dn) return Qn(n), dn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !Rc(n.type, n.memoizedProps)), r && (r = Xr)) {
      if (yd(n)) throw cs(), Error(k(418));
      for (; r; ) md(n, r), r = Si(r.nextSibling);
    }
    if (Qn(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(k(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                Xr = Si(n.nextSibling);
                break e;
              }
              r--;
            } else l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        Xr = null;
      }
    } else Xr = qr ? Si(n.stateNode.nextSibling) : null;
    return !0;
  }
  function cs() {
    for (var n = Xr; n; ) n = Si(n.nextSibling);
  }
  function Nl() {
    Xr = qr = null, dn = !1;
  }
  function qi(n) {
    Na === null ? Na = [n] : Na.push(n);
  }
  var dy = yt.ReactCurrentBatchConfig;
  function mu(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1) throw Error(k(309));
          var o = l.stateNode;
        }
        if (!o) throw Error(k(147, n));
        var c = o, d = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === d ? r.ref : (r = function(m) {
          var E = c.refs;
          m === null ? delete E[d] : E[d] = m;
        }, r._stringRef = d, r);
      }
      if (typeof n != "string") throw Error(k(284));
      if (!l._owner) throw Error(k(290, n));
    }
    return n;
  }
  function Nc(n, r) {
    throw n = Object.prototype.toString.call(r), Error(k(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function Av(n) {
    var r = n._init;
    return r(n._payload);
  }
  function yu(n) {
    function r(N, w) {
      if (n) {
        var U = N.deletions;
        U === null ? (N.deletions = [w], N.flags |= 16) : U.push(w);
      }
    }
    function l(N, w) {
      if (!n) return null;
      for (; w !== null; ) r(N, w), w = w.sibling;
      return null;
    }
    function o(N, w) {
      for (N = /* @__PURE__ */ new Map(); w !== null; ) w.key !== null ? N.set(w.key, w) : N.set(w.index, w), w = w.sibling;
      return N;
    }
    function c(N, w) {
      return N = Hl(N, w), N.index = 0, N.sibling = null, N;
    }
    function d(N, w, U) {
      return N.index = U, n ? (U = N.alternate, U !== null ? (U = U.index, U < w ? (N.flags |= 2, w) : U) : (N.flags |= 2, w)) : (N.flags |= 1048576, w);
    }
    function m(N) {
      return n && N.alternate === null && (N.flags |= 2), N;
    }
    function E(N, w, U, K) {
      return w === null || w.tag !== 6 ? (w = qd(U, N.mode, K), w.return = N, w) : (w = c(w, U), w.return = N, w);
    }
    function R(N, w, U, K) {
      var Ee = U.type;
      return Ee === $e ? X(N, w, U.props.children, K, U.key) : w !== null && (w.elementType === Ee || typeof Ee == "object" && Ee !== null && Ee.$$typeof === Ot && Av(Ee) === w.type) ? (K = c(w, U.props), K.ref = mu(N, w, U), K.return = N, K) : (K = Ps(U.type, U.key, U.props, null, N.mode, K), K.ref = mu(N, w, U), K.return = N, K);
    }
    function F(N, w, U, K) {
      return w === null || w.tag !== 4 || w.stateNode.containerInfo !== U.containerInfo || w.stateNode.implementation !== U.implementation ? (w = ff(U, N.mode, K), w.return = N, w) : (w = c(w, U.children || []), w.return = N, w);
    }
    function X(N, w, U, K, Ee) {
      return w === null || w.tag !== 7 ? (w = tl(U, N.mode, K, Ee), w.return = N, w) : (w = c(w, U), w.return = N, w);
    }
    function J(N, w, U) {
      if (typeof w == "string" && w !== "" || typeof w == "number") return w = qd("" + w, N.mode, U), w.return = N, w;
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case Le:
            return U = Ps(w.type, w.key, w.props, null, N.mode, U), U.ref = mu(N, null, w), U.return = N, U;
          case dt:
            return w = ff(w, N.mode, U), w.return = N, w;
          case Ot:
            var K = w._init;
            return J(N, K(w._payload), U);
        }
        if (qn(w) || _e(w)) return w = tl(w, N.mode, U, null), w.return = N, w;
        Nc(N, w);
      }
      return null;
    }
    function q(N, w, U, K) {
      var Ee = w !== null ? w.key : null;
      if (typeof U == "string" && U !== "" || typeof U == "number") return Ee !== null ? null : E(N, w, "" + U, K);
      if (typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case Le:
            return U.key === Ee ? R(N, w, U, K) : null;
          case dt:
            return U.key === Ee ? F(N, w, U, K) : null;
          case Ot:
            return Ee = U._init, q(
              N,
              w,
              Ee(U._payload),
              K
            );
        }
        if (qn(U) || _e(U)) return Ee !== null ? null : X(N, w, U, K, null);
        Nc(N, U);
      }
      return null;
    }
    function pe(N, w, U, K, Ee) {
      if (typeof K == "string" && K !== "" || typeof K == "number") return N = N.get(U) || null, E(w, N, "" + K, Ee);
      if (typeof K == "object" && K !== null) {
        switch (K.$$typeof) {
          case Le:
            return N = N.get(K.key === null ? U : K.key) || null, R(w, N, K, Ee);
          case dt:
            return N = N.get(K.key === null ? U : K.key) || null, F(w, N, K, Ee);
          case Ot:
            var Fe = K._init;
            return pe(N, w, U, Fe(K._payload), Ee);
        }
        if (qn(K) || _e(K)) return N = N.get(U) || null, X(w, N, K, Ee, null);
        Nc(w, K);
      }
      return null;
    }
    function Se(N, w, U, K) {
      for (var Ee = null, Fe = null, Pe = w, Qe = w = 0, er = null; Pe !== null && Qe < U.length; Qe++) {
        Pe.index > Qe ? (er = Pe, Pe = null) : er = Pe.sibling;
        var zt = q(N, Pe, U[Qe], K);
        if (zt === null) {
          Pe === null && (Pe = er);
          break;
        }
        n && Pe && zt.alternate === null && r(N, Pe), w = d(zt, w, Qe), Fe === null ? Ee = zt : Fe.sibling = zt, Fe = zt, Pe = er;
      }
      if (Qe === U.length) return l(N, Pe), dn && hu(N, Qe), Ee;
      if (Pe === null) {
        for (; Qe < U.length; Qe++) Pe = J(N, U[Qe], K), Pe !== null && (w = d(Pe, w, Qe), Fe === null ? Ee = Pe : Fe.sibling = Pe, Fe = Pe);
        return dn && hu(N, Qe), Ee;
      }
      for (Pe = o(N, Pe); Qe < U.length; Qe++) er = pe(Pe, N, Qe, U[Qe], K), er !== null && (n && er.alternate !== null && Pe.delete(er.key === null ? Qe : er.key), w = d(er, w, Qe), Fe === null ? Ee = er : Fe.sibling = er, Fe = er);
      return n && Pe.forEach(function(Bl) {
        return r(N, Bl);
      }), dn && hu(N, Qe), Ee;
    }
    function xe(N, w, U, K) {
      var Ee = _e(U);
      if (typeof Ee != "function") throw Error(k(150));
      if (U = Ee.call(U), U == null) throw Error(k(151));
      for (var Fe = Ee = null, Pe = w, Qe = w = 0, er = null, zt = U.next(); Pe !== null && !zt.done; Qe++, zt = U.next()) {
        Pe.index > Qe ? (er = Pe, Pe = null) : er = Pe.sibling;
        var Bl = q(N, Pe, zt.value, K);
        if (Bl === null) {
          Pe === null && (Pe = er);
          break;
        }
        n && Pe && Bl.alternate === null && r(N, Pe), w = d(Bl, w, Qe), Fe === null ? Ee = Bl : Fe.sibling = Bl, Fe = Bl, Pe = er;
      }
      if (zt.done) return l(
        N,
        Pe
      ), dn && hu(N, Qe), Ee;
      if (Pe === null) {
        for (; !zt.done; Qe++, zt = U.next()) zt = J(N, zt.value, K), zt !== null && (w = d(zt, w, Qe), Fe === null ? Ee = zt : Fe.sibling = zt, Fe = zt);
        return dn && hu(N, Qe), Ee;
      }
      for (Pe = o(N, Pe); !zt.done; Qe++, zt = U.next()) zt = pe(Pe, N, Qe, zt.value, K), zt !== null && (n && zt.alternate !== null && Pe.delete(zt.key === null ? Qe : zt.key), w = d(zt, w, Qe), Fe === null ? Ee = zt : Fe.sibling = zt, Fe = zt);
      return n && Pe.forEach(function(Sh) {
        return r(N, Sh);
      }), dn && hu(N, Qe), Ee;
    }
    function kn(N, w, U, K) {
      if (typeof U == "object" && U !== null && U.type === $e && U.key === null && (U = U.props.children), typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case Le:
            e: {
              for (var Ee = U.key, Fe = w; Fe !== null; ) {
                if (Fe.key === Ee) {
                  if (Ee = U.type, Ee === $e) {
                    if (Fe.tag === 7) {
                      l(N, Fe.sibling), w = c(Fe, U.props.children), w.return = N, N = w;
                      break e;
                    }
                  } else if (Fe.elementType === Ee || typeof Ee == "object" && Ee !== null && Ee.$$typeof === Ot && Av(Ee) === Fe.type) {
                    l(N, Fe.sibling), w = c(Fe, U.props), w.ref = mu(N, Fe, U), w.return = N, N = w;
                    break e;
                  }
                  l(N, Fe);
                  break;
                } else r(N, Fe);
                Fe = Fe.sibling;
              }
              U.type === $e ? (w = tl(U.props.children, N.mode, K, U.key), w.return = N, N = w) : (K = Ps(U.type, U.key, U.props, null, N.mode, K), K.ref = mu(N, w, U), K.return = N, N = K);
            }
            return m(N);
          case dt:
            e: {
              for (Fe = U.key; w !== null; ) {
                if (w.key === Fe) if (w.tag === 4 && w.stateNode.containerInfo === U.containerInfo && w.stateNode.implementation === U.implementation) {
                  l(N, w.sibling), w = c(w, U.children || []), w.return = N, N = w;
                  break e;
                } else {
                  l(N, w);
                  break;
                }
                else r(N, w);
                w = w.sibling;
              }
              w = ff(U, N.mode, K), w.return = N, N = w;
            }
            return m(N);
          case Ot:
            return Fe = U._init, kn(N, w, Fe(U._payload), K);
        }
        if (qn(U)) return Se(N, w, U, K);
        if (_e(U)) return xe(N, w, U, K);
        Nc(N, U);
      }
      return typeof U == "string" && U !== "" || typeof U == "number" ? (U = "" + U, w !== null && w.tag === 6 ? (l(N, w.sibling), w = c(w, U), w.return = N, N = w) : (l(N, w), w = qd(U, N.mode, K), w.return = N, N = w), m(N)) : l(N, w);
    }
    return kn;
  }
  var Tn = yu(!0), se = yu(!1), pa = Da(null), Kr = null, mo = null, Sd = null;
  function Ed() {
    Sd = mo = Kr = null;
  }
  function Cd(n) {
    var r = pa.current;
    rn(pa), n._currentValue = r;
  }
  function xd(n, r, l) {
    for (; n !== null; ) {
      var o = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, o !== null && (o.childLanes |= r)) : o !== null && (o.childLanes & r) !== r && (o.childLanes |= r), n === l) break;
      n = n.return;
    }
  }
  function yn(n, r) {
    Kr = n, Sd = mo = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (jn = !0), n.firstContext = null);
  }
  function La(n) {
    var r = n._currentValue;
    if (Sd !== n) if (n = { context: n, memoizedValue: r, next: null }, mo === null) {
      if (Kr === null) throw Error(k(308));
      mo = n, Kr.dependencies = { lanes: 0, firstContext: n };
    } else mo = mo.next = n;
    return r;
  }
  var gu = null;
  function Rd(n) {
    gu === null ? gu = [n] : gu.push(n);
  }
  function Td(n, r, l, o) {
    var c = r.interleaved;
    return c === null ? (l.next = l, Rd(r)) : (l.next = c.next, c.next = l), r.interleaved = l, va(n, o);
  }
  function va(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; ) n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var ha = !1;
  function bd(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Fv(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function Xi(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function Ll(n, r, l) {
    var o = n.updateQueue;
    if (o === null) return null;
    if (o = o.shared, xt & 2) {
      var c = o.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), o.pending = r, va(n, l);
    }
    return c = o.interleaved, c === null ? (r.next = r, Rd(o)) : (r.next = c.next, c.next = r), o.interleaved = r, va(n, l);
  }
  function Lc(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Vi(n, l);
    }
  }
  function Hv(n, r) {
    var l = n.updateQueue, o = n.alternate;
    if (o !== null && (o = o.updateQueue, l === o)) {
      var c = null, d = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var m = { eventTime: l.eventTime, lane: l.lane, tag: l.tag, payload: l.payload, callback: l.callback, next: null };
          d === null ? c = d = m : d = d.next = m, l = l.next;
        } while (l !== null);
        d === null ? c = d = r : d = d.next = r;
      } else c = d = r;
      l = { baseState: o.baseState, firstBaseUpdate: c, lastBaseUpdate: d, shared: o.shared, effects: o.effects }, n.updateQueue = l;
      return;
    }
    n = l.lastBaseUpdate, n === null ? l.firstBaseUpdate = r : n.next = r, l.lastBaseUpdate = r;
  }
  function fs(n, r, l, o) {
    var c = n.updateQueue;
    ha = !1;
    var d = c.firstBaseUpdate, m = c.lastBaseUpdate, E = c.shared.pending;
    if (E !== null) {
      c.shared.pending = null;
      var R = E, F = R.next;
      R.next = null, m === null ? d = F : m.next = F, m = R;
      var X = n.alternate;
      X !== null && (X = X.updateQueue, E = X.lastBaseUpdate, E !== m && (E === null ? X.firstBaseUpdate = F : E.next = F, X.lastBaseUpdate = R));
    }
    if (d !== null) {
      var J = c.baseState;
      m = 0, X = F = R = null, E = d;
      do {
        var q = E.lane, pe = E.eventTime;
        if ((o & q) === q) {
          X !== null && (X = X.next = {
            eventTime: pe,
            lane: 0,
            tag: E.tag,
            payload: E.payload,
            callback: E.callback,
            next: null
          });
          e: {
            var Se = n, xe = E;
            switch (q = r, pe = l, xe.tag) {
              case 1:
                if (Se = xe.payload, typeof Se == "function") {
                  J = Se.call(pe, J, q);
                  break e;
                }
                J = Se;
                break e;
              case 3:
                Se.flags = Se.flags & -65537 | 128;
              case 0:
                if (Se = xe.payload, q = typeof Se == "function" ? Se.call(pe, J, q) : Se, q == null) break e;
                J = le({}, J, q);
                break e;
              case 2:
                ha = !0;
            }
          }
          E.callback !== null && E.lane !== 0 && (n.flags |= 64, q = c.effects, q === null ? c.effects = [E] : q.push(E));
        } else pe = { eventTime: pe, lane: q, tag: E.tag, payload: E.payload, callback: E.callback, next: null }, X === null ? (F = X = pe, R = J) : X = X.next = pe, m |= q;
        if (E = E.next, E === null) {
          if (E = c.shared.pending, E === null) break;
          q = E, E = q.next, q.next = null, c.lastBaseUpdate = q, c.shared.pending = null;
        }
      } while (!0);
      if (X === null && (R = J), c.baseState = R, c.firstBaseUpdate = F, c.lastBaseUpdate = X, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          m |= c.lane, c = c.next;
        while (c !== r);
      } else d === null && (c.shared.lanes = 0);
      Di |= m, n.lanes = m, n.memoizedState = J;
    }
  }
  function wd(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null) for (r = 0; r < n.length; r++) {
      var o = n[r], c = o.callback;
      if (c !== null) {
        if (o.callback = null, o = l, typeof c != "function") throw Error(k(191, c));
        c.call(o);
      }
    }
  }
  var ds = {}, bi = Da(ds), ps = Da(ds), vs = Da(ds);
  function Su(n) {
    if (n === ds) throw Error(k(174));
    return n;
  }
  function _d(n, r) {
    switch (Oe(vs, r), Oe(ps, n), Oe(bi, ds), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : sa(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = sa(r, n);
    }
    rn(bi), Oe(bi, r);
  }
  function Eu() {
    rn(bi), rn(ps), rn(vs);
  }
  function Pv(n) {
    Su(vs.current);
    var r = Su(bi.current), l = sa(r, n.type);
    r !== l && (Oe(ps, n), Oe(bi, l));
  }
  function Mc(n) {
    ps.current === n && (rn(bi), rn(ps));
  }
  var gn = Da(0);
  function zc(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var l = r.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || l.data === "$?" || l.data === "$!")) return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if (r.flags & 128) return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n) return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var hs = [];
  function ze() {
    for (var n = 0; n < hs.length; n++) hs[n]._workInProgressVersionPrimary = null;
    hs.length = 0;
  }
  var ft = yt.ReactCurrentDispatcher, Lt = yt.ReactCurrentBatchConfig, Gt = 0, Mt = null, Un = null, Jn = null, Uc = !1, ms = !1, Cu = 0, W = 0;
  function Dt() {
    throw Error(k(321));
  }
  function Be(n, r) {
    if (r === null) return !1;
    for (var l = 0; l < r.length && l < n.length; l++) if (!ei(n[l], r[l])) return !1;
    return !0;
  }
  function Ml(n, r, l, o, c, d) {
    if (Gt = d, Mt = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, ft.current = n === null || n.memoizedState === null ? Xc : xs, n = l(o, c), ms) {
      d = 0;
      do {
        if (ms = !1, Cu = 0, 25 <= d) throw Error(k(301));
        d += 1, Jn = Un = null, r.updateQueue = null, ft.current = Kc, n = l(o, c);
      } while (ms);
    }
    if (ft.current = wu, r = Un !== null && Un.next !== null, Gt = 0, Jn = Un = Mt = null, Uc = !1, r) throw Error(k(300));
    return n;
  }
  function ni() {
    var n = Cu !== 0;
    return Cu = 0, n;
  }
  function xr() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Jn === null ? Mt.memoizedState = Jn = n : Jn = Jn.next = n, Jn;
  }
  function bn() {
    if (Un === null) {
      var n = Mt.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = Un.next;
    var r = Jn === null ? Mt.memoizedState : Jn.next;
    if (r !== null) Jn = r, Un = n;
    else {
      if (n === null) throw Error(k(310));
      Un = n, n = { memoizedState: Un.memoizedState, baseState: Un.baseState, baseQueue: Un.baseQueue, queue: Un.queue, next: null }, Jn === null ? Mt.memoizedState = Jn = n : Jn = Jn.next = n;
    }
    return Jn;
  }
  function Ki(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function zl(n) {
    var r = bn(), l = r.queue;
    if (l === null) throw Error(k(311));
    l.lastRenderedReducer = n;
    var o = Un, c = o.baseQueue, d = l.pending;
    if (d !== null) {
      if (c !== null) {
        var m = c.next;
        c.next = d.next, d.next = m;
      }
      o.baseQueue = c = d, l.pending = null;
    }
    if (c !== null) {
      d = c.next, o = o.baseState;
      var E = m = null, R = null, F = d;
      do {
        var X = F.lane;
        if ((Gt & X) === X) R !== null && (R = R.next = { lane: 0, action: F.action, hasEagerState: F.hasEagerState, eagerState: F.eagerState, next: null }), o = F.hasEagerState ? F.eagerState : n(o, F.action);
        else {
          var J = {
            lane: X,
            action: F.action,
            hasEagerState: F.hasEagerState,
            eagerState: F.eagerState,
            next: null
          };
          R === null ? (E = R = J, m = o) : R = R.next = J, Mt.lanes |= X, Di |= X;
        }
        F = F.next;
      } while (F !== null && F !== d);
      R === null ? m = o : R.next = E, ei(o, r.memoizedState) || (jn = !0), r.memoizedState = o, r.baseState = m, r.baseQueue = R, l.lastRenderedState = o;
    }
    if (n = l.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, Mt.lanes |= d, Di |= d, c = c.next;
      while (c !== n);
    } else c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function xu(n) {
    var r = bn(), l = r.queue;
    if (l === null) throw Error(k(311));
    l.lastRenderedReducer = n;
    var o = l.dispatch, c = l.pending, d = r.memoizedState;
    if (c !== null) {
      l.pending = null;
      var m = c = c.next;
      do
        d = n(d, m.action), m = m.next;
      while (m !== c);
      ei(d, r.memoizedState) || (jn = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), l.lastRenderedState = d;
    }
    return [d, o];
  }
  function jc() {
  }
  function Ac(n, r) {
    var l = Mt, o = bn(), c = r(), d = !ei(o.memoizedState, c);
    if (d && (o.memoizedState = c, jn = !0), o = o.queue, ys(Pc.bind(null, l, o, n), [n]), o.getSnapshot !== r || d || Jn !== null && Jn.memoizedState.tag & 1) {
      if (l.flags |= 2048, Ru(9, Hc.bind(null, l, o, c, r), void 0, null), Wn === null) throw Error(k(349));
      Gt & 30 || Fc(l, r, c);
    }
    return c;
  }
  function Fc(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = Mt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Mt.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function Hc(n, r, l, o) {
    r.value = l, r.getSnapshot = o, Vc(r) && Bc(n);
  }
  function Pc(n, r, l) {
    return l(function() {
      Vc(r) && Bc(n);
    });
  }
  function Vc(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !ei(n, l);
    } catch {
      return !0;
    }
  }
  function Bc(n) {
    var r = va(n, 1);
    r !== null && zr(r, n, 1, -1);
  }
  function $c(n) {
    var r = xr();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ki, lastRenderedState: n }, r.queue = n, n = n.dispatch = bu.bind(null, Mt, n), [r.memoizedState, n];
  }
  function Ru(n, r, l, o) {
    return n = { tag: n, create: r, destroy: l, deps: o, next: null }, r = Mt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Mt.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (o = l.next, l.next = n, n.next = o, r.lastEffect = n)), n;
  }
  function Ic() {
    return bn().memoizedState;
  }
  function yo(n, r, l, o) {
    var c = xr();
    Mt.flags |= n, c.memoizedState = Ru(1 | r, l, void 0, o === void 0 ? null : o);
  }
  function go(n, r, l, o) {
    var c = bn();
    o = o === void 0 ? null : o;
    var d = void 0;
    if (Un !== null) {
      var m = Un.memoizedState;
      if (d = m.destroy, o !== null && Be(o, m.deps)) {
        c.memoizedState = Ru(r, l, d, o);
        return;
      }
    }
    Mt.flags |= n, c.memoizedState = Ru(1 | r, l, d, o);
  }
  function Yc(n, r) {
    return yo(8390656, 8, n, r);
  }
  function ys(n, r) {
    return go(2048, 8, n, r);
  }
  function Qc(n, r) {
    return go(4, 2, n, r);
  }
  function gs(n, r) {
    return go(4, 4, n, r);
  }
  function Tu(n, r) {
    if (typeof r == "function") return n = n(), r(n), function() {
      r(null);
    };
    if (r != null) return n = n(), r.current = n, function() {
      r.current = null;
    };
  }
  function Wc(n, r, l) {
    return l = l != null ? l.concat([n]) : null, go(4, 4, Tu.bind(null, r, n), l);
  }
  function Ss() {
  }
  function Gc(n, r) {
    var l = bn();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && Be(r, o[1]) ? o[0] : (l.memoizedState = [n, r], n);
  }
  function qc(n, r) {
    var l = bn();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && Be(r, o[1]) ? o[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function kd(n, r, l) {
    return Gt & 21 ? (ei(l, r) || (l = Xu(), Mt.lanes |= l, Di |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, jn = !0), n.memoizedState = l);
  }
  function Es(n, r) {
    var l = Nt;
    Nt = l !== 0 && 4 > l ? l : 4, n(!0);
    var o = Lt.transition;
    Lt.transition = {};
    try {
      n(!1), r();
    } finally {
      Nt = l, Lt.transition = o;
    }
  }
  function Dd() {
    return bn().memoizedState;
  }
  function Cs(n, r, l) {
    var o = Oi(n);
    if (l = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null }, Jr(n)) Vv(r, l);
    else if (l = Td(n, r, l, o), l !== null) {
      var c = Hn();
      zr(l, n, o, c), Kt(l, r, o);
    }
  }
  function bu(n, r, l) {
    var o = Oi(n), c = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (Jr(n)) Vv(r, c);
    else {
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null)) try {
        var m = r.lastRenderedState, E = d(m, l);
        if (c.hasEagerState = !0, c.eagerState = E, ei(E, m)) {
          var R = r.interleaved;
          R === null ? (c.next = c, Rd(r)) : (c.next = R.next, R.next = c), r.interleaved = c;
          return;
        }
      } catch {
      } finally {
      }
      l = Td(n, r, c, o), l !== null && (c = Hn(), zr(l, n, o, c), Kt(l, r, o));
    }
  }
  function Jr(n) {
    var r = n.alternate;
    return n === Mt || r !== null && r === Mt;
  }
  function Vv(n, r) {
    ms = Uc = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function Kt(n, r, l) {
    if (l & 4194240) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Vi(n, l);
    }
  }
  var wu = { readContext: La, useCallback: Dt, useContext: Dt, useEffect: Dt, useImperativeHandle: Dt, useInsertionEffect: Dt, useLayoutEffect: Dt, useMemo: Dt, useReducer: Dt, useRef: Dt, useState: Dt, useDebugValue: Dt, useDeferredValue: Dt, useTransition: Dt, useMutableSource: Dt, useSyncExternalStore: Dt, useId: Dt, unstable_isNewReconciler: !1 }, Xc = { readContext: La, useCallback: function(n, r) {
    return xr().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: La, useEffect: Yc, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, yo(
      4194308,
      4,
      Tu.bind(null, r, n),
      l
    );
  }, useLayoutEffect: function(n, r) {
    return yo(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return yo(4, 2, n, r);
  }, useMemo: function(n, r) {
    var l = xr();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var o = xr();
    return r = l !== void 0 ? l(r) : r, o.memoizedState = o.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, o.queue = n, n = n.dispatch = Cs.bind(null, Mt, n), [o.memoizedState, n];
  }, useRef: function(n) {
    var r = xr();
    return n = { current: n }, r.memoizedState = n;
  }, useState: $c, useDebugValue: Ss, useDeferredValue: function(n) {
    return xr().memoizedState = n;
  }, useTransition: function() {
    var n = $c(!1), r = n[0];
    return n = Es.bind(null, n[1]), xr().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var o = Mt, c = xr();
    if (dn) {
      if (l === void 0) throw Error(k(407));
      l = l();
    } else {
      if (l = r(), Wn === null) throw Error(k(349));
      Gt & 30 || Fc(o, r, l);
    }
    c.memoizedState = l;
    var d = { value: l, getSnapshot: r };
    return c.queue = d, Yc(Pc.bind(
      null,
      o,
      d,
      n
    ), [n]), o.flags |= 2048, Ru(9, Hc.bind(null, o, d, l, r), void 0, null), l;
  }, useId: function() {
    var n = xr(), r = Wn.identifierPrefix;
    if (dn) {
      var l = Ti, o = Ri;
      l = (o & ~(1 << 32 - kr(o) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = Cu++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else l = W++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, xs = {
    readContext: La,
    useCallback: Gc,
    useContext: La,
    useEffect: ys,
    useImperativeHandle: Wc,
    useInsertionEffect: Qc,
    useLayoutEffect: gs,
    useMemo: qc,
    useReducer: zl,
    useRef: Ic,
    useState: function() {
      return zl(Ki);
    },
    useDebugValue: Ss,
    useDeferredValue: function(n) {
      var r = bn();
      return kd(r, Un.memoizedState, n);
    },
    useTransition: function() {
      var n = zl(Ki)[0], r = bn().memoizedState;
      return [n, r];
    },
    useMutableSource: jc,
    useSyncExternalStore: Ac,
    useId: Dd,
    unstable_isNewReconciler: !1
  }, Kc = { readContext: La, useCallback: Gc, useContext: La, useEffect: ys, useImperativeHandle: Wc, useInsertionEffect: Qc, useLayoutEffect: gs, useMemo: qc, useReducer: xu, useRef: Ic, useState: function() {
    return xu(Ki);
  }, useDebugValue: Ss, useDeferredValue: function(n) {
    var r = bn();
    return Un === null ? r.memoizedState = n : kd(r, Un.memoizedState, n);
  }, useTransition: function() {
    var n = xu(Ki)[0], r = bn().memoizedState;
    return [n, r];
  }, useMutableSource: jc, useSyncExternalStore: Ac, useId: Dd, unstable_isNewReconciler: !1 };
  function ri(n, r) {
    if (n && n.defaultProps) {
      r = le({}, r), n = n.defaultProps;
      for (var l in n) r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  function Od(n, r, l, o) {
    r = n.memoizedState, l = l(o, r), l = l == null ? r : le({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var Jc = { isMounted: function(n) {
    return (n = n._reactInternals) ? Ze(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var o = Hn(), c = Oi(n), d = Xi(o, c);
    d.payload = r, l != null && (d.callback = l), r = Ll(n, d, c), r !== null && (zr(r, n, c, o), Lc(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var o = Hn(), c = Oi(n), d = Xi(o, c);
    d.tag = 1, d.payload = r, l != null && (d.callback = l), r = Ll(n, d, c), r !== null && (zr(r, n, c, o), Lc(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = Hn(), o = Oi(n), c = Xi(l, o);
    c.tag = 2, r != null && (c.callback = r), r = Ll(n, c, o), r !== null && (zr(r, n, o, l), Lc(r, n, o));
  } };
  function Bv(n, r, l, o, c, d, m) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, d, m) : r.prototype && r.prototype.isPureReactComponent ? !ts(l, o) || !ts(c, d) : !0;
  }
  function Zc(n, r, l) {
    var o = !1, c = Cr, d = r.contextType;
    return typeof d == "object" && d !== null ? d = La(d) : (c = Mn(r) ? Wr : En.current, o = r.contextTypes, d = (o = o != null) ? Gr(n, c) : Cr), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Jc, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function $v(n, r, l, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, o), r.state !== n && Jc.enqueueReplaceState(r, r.state, null);
  }
  function Rs(n, r, l, o) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = {}, bd(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = La(d) : (d = Mn(r) ? Wr : En.current, c.context = Gr(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (Od(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && Jc.enqueueReplaceState(c, c.state, null), fs(n, l, c, o), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function _u(n, r) {
    try {
      var l = "", o = r;
      do
        l += ot(o), o = o.return;
      while (o);
      var c = l;
    } catch (d) {
      c = `
Error generating stack: ` + d.message + `
` + d.stack;
    }
    return { value: n, source: r, stack: c, digest: null };
  }
  function Nd(n, r, l) {
    return { value: n, source: null, stack: l ?? null, digest: r ?? null };
  }
  function Ld(n, r) {
    try {
      console.error(r.value);
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  var ef = typeof WeakMap == "function" ? WeakMap : Map;
  function Iv(n, r, l) {
    l = Xi(-1, l), l.tag = 3, l.payload = { element: null };
    var o = r.value;
    return l.callback = function() {
      To || (To = !0, Ou = o), Ld(n, r);
    }, l;
  }
  function Md(n, r, l) {
    l = Xi(-1, l), l.tag = 3;
    var o = n.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var c = r.value;
      l.payload = function() {
        return o(c);
      }, l.callback = function() {
        Ld(n, r);
      };
    }
    var d = n.stateNode;
    return d !== null && typeof d.componentDidCatch == "function" && (l.callback = function() {
      Ld(n, r), typeof o != "function" && (Al === null ? Al = /* @__PURE__ */ new Set([this]) : Al.add(this));
      var m = r.stack;
      this.componentDidCatch(r.value, { componentStack: m !== null ? m : "" });
    }), l;
  }
  function zd(n, r, l) {
    var o = n.pingCache;
    if (o === null) {
      o = n.pingCache = new ef();
      var c = /* @__PURE__ */ new Set();
      o.set(r, c);
    } else c = o.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), o.set(r, c));
    c.has(l) || (c.add(l), n = Sy.bind(null, n, r, l), r.then(n, n));
  }
  function Yv(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r) return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function Ul(n, r, l, o, c) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = c, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = Xi(-1, 1), r.tag = 2, Ll(l, r, 1))), l.lanes |= 1), n);
  }
  var Ts = yt.ReactCurrentOwner, jn = !1;
  function ur(n, r, l, o) {
    r.child = n === null ? se(r, null, l, o) : Tn(r, n.child, l, o);
  }
  function Zr(n, r, l, o, c) {
    l = l.render;
    var d = r.ref;
    return yn(r, c), o = Ml(n, r, l, o, d, c), l = ni(), n !== null && !jn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, za(n, r, c)) : (dn && l && kc(r), r.flags |= 1, ur(n, r, o, c), r.child);
  }
  function ku(n, r, l, o, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" && !Gd(d) && d.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = d, tt(n, r, d, o, c)) : (n = Ps(l.type, null, o, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, !(n.lanes & c)) {
      var m = d.memoizedProps;
      if (l = l.compare, l = l !== null ? l : ts, l(m, o) && n.ref === r.ref) return za(n, r, c);
    }
    return r.flags |= 1, n = Hl(d, o), n.ref = r.ref, n.return = r, r.child = n;
  }
  function tt(n, r, l, o, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (ts(d, o) && n.ref === r.ref) if (jn = !1, r.pendingProps = o = d, (n.lanes & c) !== 0) n.flags & 131072 && (jn = !0);
      else return r.lanes = n.lanes, za(n, r, c);
    }
    return Qv(n, r, l, o, c);
  }
  function bs(n, r, l) {
    var o = r.pendingProps, c = o.children, d = n !== null ? n.memoizedState : null;
    if (o.mode === "hidden") if (!(r.mode & 1)) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Oe(Co, ma), ma |= l;
    else {
      if (!(l & 1073741824)) return n = d !== null ? d.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, Oe(Co, ma), ma |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = d !== null ? d.baseLanes : l, Oe(Co, ma), ma |= o;
    }
    else d !== null ? (o = d.baseLanes | l, r.memoizedState = null) : o = l, Oe(Co, ma), ma |= o;
    return ur(n, r, c, l), r.child;
  }
  function Ud(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function Qv(n, r, l, o, c) {
    var d = Mn(l) ? Wr : En.current;
    return d = Gr(r, d), yn(r, c), l = Ml(n, r, l, o, d, c), o = ni(), n !== null && !jn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, za(n, r, c)) : (dn && o && kc(r), r.flags |= 1, ur(n, r, l, c), r.child);
  }
  function Wv(n, r, l, o, c) {
    if (Mn(l)) {
      var d = !0;
      Kn(r);
    } else d = !1;
    if (yn(r, c), r.stateNode === null) Ma(n, r), Zc(r, l, o), Rs(r, l, o, c), o = !0;
    else if (n === null) {
      var m = r.stateNode, E = r.memoizedProps;
      m.props = E;
      var R = m.context, F = l.contextType;
      typeof F == "object" && F !== null ? F = La(F) : (F = Mn(l) ? Wr : En.current, F = Gr(r, F));
      var X = l.getDerivedStateFromProps, J = typeof X == "function" || typeof m.getSnapshotBeforeUpdate == "function";
      J || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== o || R !== F) && $v(r, m, o, F), ha = !1;
      var q = r.memoizedState;
      m.state = q, fs(r, o, m, c), R = r.memoizedState, E !== o || q !== R || Yn.current || ha ? (typeof X == "function" && (Od(r, l, X, o), R = r.memoizedState), (E = ha || Bv(r, l, E, o, q, R, F)) ? (J || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = R), m.props = o, m.state = R, m.context = F, o = E) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      m = r.stateNode, Fv(n, r), E = r.memoizedProps, F = r.type === r.elementType ? E : ri(r.type, E), m.props = F, J = r.pendingProps, q = m.context, R = l.contextType, typeof R == "object" && R !== null ? R = La(R) : (R = Mn(l) ? Wr : En.current, R = Gr(r, R));
      var pe = l.getDerivedStateFromProps;
      (X = typeof pe == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== J || q !== R) && $v(r, m, o, R), ha = !1, q = r.memoizedState, m.state = q, fs(r, o, m, c);
      var Se = r.memoizedState;
      E !== J || q !== Se || Yn.current || ha ? (typeof pe == "function" && (Od(r, l, pe, o), Se = r.memoizedState), (F = ha || Bv(r, l, F, o, q, Se, R) || !1) ? (X || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(o, Se, R), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(o, Se, R)), typeof m.componentDidUpdate == "function" && (r.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && q === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && q === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = Se), m.props = o, m.state = Se, m.context = R, o = F) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && q === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && q === n.memoizedState || (r.flags |= 1024), o = !1);
    }
    return ws(n, r, l, o, d, c);
  }
  function ws(n, r, l, o, c, d) {
    Ud(n, r);
    var m = (r.flags & 128) !== 0;
    if (!o && !m) return c && wc(r, l, !1), za(n, r, d);
    o = r.stateNode, Ts.current = r;
    var E = m && typeof l.getDerivedStateFromError != "function" ? null : o.render();
    return r.flags |= 1, n !== null && m ? (r.child = Tn(r, n.child, null, d), r.child = Tn(r, null, E, d)) : ur(n, r, E, d), r.memoizedState = o.state, c && wc(r, l, !0), r.child;
  }
  function So(n) {
    var r = n.stateNode;
    r.pendingContext ? zv(n, r.pendingContext, r.pendingContext !== r.context) : r.context && zv(n, r.context, !1), _d(n, r.containerInfo);
  }
  function Gv(n, r, l, o, c) {
    return Nl(), qi(c), r.flags |= 256, ur(n, r, l, o), r.child;
  }
  var tf = { dehydrated: null, treeContext: null, retryLane: 0 };
  function jd(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function nf(n, r, l) {
    var o = r.pendingProps, c = gn.current, d = !1, m = (r.flags & 128) !== 0, E;
    if ((E = m) || (E = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), E ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), Oe(gn, c & 1), n === null)
      return gd(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (m = o.children, n = o.fallback, d ? (o = r.mode, d = r.child, m = { mode: "hidden", children: m }, !(o & 1) && d !== null ? (d.childLanes = 0, d.pendingProps = m) : d = Pl(m, o, 0, null), n = tl(n, o, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = jd(l), r.memoizedState = tf, n) : Ad(r, m));
    if (c = n.memoizedState, c !== null && (E = c.dehydrated, E !== null)) return qv(n, r, m, o, E, c, l);
    if (d) {
      d = o.fallback, m = r.mode, c = n.child, E = c.sibling;
      var R = { mode: "hidden", children: o.children };
      return !(m & 1) && r.child !== c ? (o = r.child, o.childLanes = 0, o.pendingProps = R, r.deletions = null) : (o = Hl(c, R), o.subtreeFlags = c.subtreeFlags & 14680064), E !== null ? d = Hl(E, d) : (d = tl(d, m, l, null), d.flags |= 2), d.return = r, o.return = r, o.sibling = d, r.child = o, o = d, d = r.child, m = n.child.memoizedState, m = m === null ? jd(l) : { baseLanes: m.baseLanes | l, cachePool: null, transitions: m.transitions }, d.memoizedState = m, d.childLanes = n.childLanes & ~l, r.memoizedState = tf, o;
    }
    return d = n.child, n = d.sibling, o = Hl(d, { mode: "visible", children: o.children }), !(r.mode & 1) && (o.lanes = l), o.return = r, o.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = o, r.memoizedState = null, o;
  }
  function Ad(n, r) {
    return r = Pl({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function _s(n, r, l, o) {
    return o !== null && qi(o), Tn(r, n.child, null, l), n = Ad(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function qv(n, r, l, o, c, d, m) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, o = Nd(Error(k(422))), _s(n, r, m, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = o.fallback, c = r.mode, o = Pl({ mode: "visible", children: o.children }, c, 0, null), d = tl(d, c, m, null), d.flags |= 2, o.return = r, d.return = r, o.sibling = d, r.child = o, r.mode & 1 && Tn(r, n.child, null, m), r.child.memoizedState = jd(m), r.memoizedState = tf, d);
    if (!(r.mode & 1)) return _s(n, r, m, null);
    if (c.data === "$!") {
      if (o = c.nextSibling && c.nextSibling.dataset, o) var E = o.dgst;
      return o = E, d = Error(k(419)), o = Nd(d, o, void 0), _s(n, r, m, o);
    }
    if (E = (m & n.childLanes) !== 0, jn || E) {
      if (o = Wn, o !== null) {
        switch (m & -m) {
          case 4:
            c = 2;
            break;
          case 16:
            c = 8;
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
            c = 32;
            break;
          case 536870912:
            c = 268435456;
            break;
          default:
            c = 0;
        }
        c = c & (o.suspendedLanes | m) ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, va(n, c), zr(o, n, c, -1));
      }
      return Wd(), o = Nd(Error(k(421))), _s(n, r, m, o);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = Ey.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, Xr = Si(c.nextSibling), qr = r, dn = !0, Na = null, n !== null && (zn[Oa++] = Ri, zn[Oa++] = Ti, zn[Oa++] = da, Ri = n.id, Ti = n.overflow, da = r), r = Ad(r, o.children), r.flags |= 4096, r);
  }
  function Fd(n, r, l) {
    n.lanes |= r;
    var o = n.alternate;
    o !== null && (o.lanes |= r), xd(n.return, r, l);
  }
  function Nr(n, r, l, o, c) {
    var d = n.memoizedState;
    d === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: o, tail: l, tailMode: c } : (d.isBackwards = r, d.rendering = null, d.renderingStartTime = 0, d.last = o, d.tail = l, d.tailMode = c);
  }
  function wi(n, r, l) {
    var o = r.pendingProps, c = o.revealOrder, d = o.tail;
    if (ur(n, r, o.children, l), o = gn.current, o & 2) o = o & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128) e: for (n = r.child; n !== null; ) {
        if (n.tag === 13) n.memoizedState !== null && Fd(n, l, r);
        else if (n.tag === 19) Fd(n, l, r);
        else if (n.child !== null) {
          n.child.return = n, n = n.child;
          continue;
        }
        if (n === r) break e;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === r) break e;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
      o &= 1;
    }
    if (Oe(gn, o), !(r.mode & 1)) r.memoizedState = null;
    else switch (c) {
      case "forwards":
        for (l = r.child, c = null; l !== null; ) n = l.alternate, n !== null && zc(n) === null && (c = l), l = l.sibling;
        l = c, l === null ? (c = r.child, r.child = null) : (c = l.sibling, l.sibling = null), Nr(r, !1, c, l, d);
        break;
      case "backwards":
        for (l = null, c = r.child, r.child = null; c !== null; ) {
          if (n = c.alternate, n !== null && zc(n) === null) {
            r.child = c;
            break;
          }
          n = c.sibling, c.sibling = l, l = c, c = n;
        }
        Nr(r, !0, l, null, d);
        break;
      case "together":
        Nr(r, !1, null, null, void 0);
        break;
      default:
        r.memoizedState = null;
    }
    return r.child;
  }
  function Ma(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function za(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), Di |= r.lanes, !(l & r.childLanes)) return null;
    if (n !== null && r.child !== n.child) throw Error(k(153));
    if (r.child !== null) {
      for (n = r.child, l = Hl(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; ) n = n.sibling, l = l.sibling = Hl(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function ks(n, r, l) {
    switch (r.tag) {
      case 3:
        So(r), Nl();
        break;
      case 5:
        Pv(r);
        break;
      case 1:
        Mn(r.type) && Kn(r);
        break;
      case 4:
        _d(r, r.stateNode.containerInfo);
        break;
      case 10:
        var o = r.type._context, c = r.memoizedProps.value;
        Oe(pa, o._currentValue), o._currentValue = c;
        break;
      case 13:
        if (o = r.memoizedState, o !== null)
          return o.dehydrated !== null ? (Oe(gn, gn.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? nf(n, r, l) : (Oe(gn, gn.current & 1), n = za(n, r, l), n !== null ? n.sibling : null);
        Oe(gn, gn.current & 1);
        break;
      case 19:
        if (o = (l & r.childLanes) !== 0, n.flags & 128) {
          if (o) return wi(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), Oe(gn, gn.current), o) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, bs(n, r, l);
    }
    return za(n, r, l);
  }
  var Ua, An, Xv, Kv;
  Ua = function(n, r) {
    for (var l = r.child; l !== null; ) {
      if (l.tag === 5 || l.tag === 6) n.appendChild(l.stateNode);
      else if (l.tag !== 4 && l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === r) break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === r) return;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
  }, An = function() {
  }, Xv = function(n, r, l, o) {
    var c = n.memoizedProps;
    if (c !== o) {
      n = r.stateNode, Su(bi.current);
      var d = null;
      switch (l) {
        case "input":
          c = nr(n, c), o = nr(n, o), d = [];
          break;
        case "select":
          c = le({}, c, { value: void 0 }), o = le({}, o, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = $n(n, c), o = $n(n, o), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof o.onClick == "function" && (n.onclick = bl);
      }
      un(l, o);
      var m;
      l = null;
      for (F in c) if (!o.hasOwnProperty(F) && c.hasOwnProperty(F) && c[F] != null) if (F === "style") {
        var E = c[F];
        for (m in E) E.hasOwnProperty(m) && (l || (l = {}), l[m] = "");
      } else F !== "dangerouslySetInnerHTML" && F !== "children" && F !== "suppressContentEditableWarning" && F !== "suppressHydrationWarning" && F !== "autoFocus" && (Re.hasOwnProperty(F) ? d || (d = []) : (d = d || []).push(F, null));
      for (F in o) {
        var R = o[F];
        if (E = c != null ? c[F] : void 0, o.hasOwnProperty(F) && R !== E && (R != null || E != null)) if (F === "style") if (E) {
          for (m in E) !E.hasOwnProperty(m) || R && R.hasOwnProperty(m) || (l || (l = {}), l[m] = "");
          for (m in R) R.hasOwnProperty(m) && E[m] !== R[m] && (l || (l = {}), l[m] = R[m]);
        } else l || (d || (d = []), d.push(
          F,
          l
        )), l = R;
        else F === "dangerouslySetInnerHTML" ? (R = R ? R.__html : void 0, E = E ? E.__html : void 0, R != null && E !== R && (d = d || []).push(F, R)) : F === "children" ? typeof R != "string" && typeof R != "number" || (d = d || []).push(F, "" + R) : F !== "suppressContentEditableWarning" && F !== "suppressHydrationWarning" && (Re.hasOwnProperty(F) ? (R != null && F === "onScroll" && Pt("scroll", n), d || E === R || (d = [])) : (d = d || []).push(F, R));
      }
      l && (d = d || []).push("style", l);
      var F = d;
      (r.updateQueue = F) && (r.flags |= 4);
    }
  }, Kv = function(n, r, l, o) {
    l !== o && (r.flags |= 4);
  };
  function Ds(n, r) {
    if (!dn) switch (n.tailMode) {
      case "hidden":
        r = n.tail;
        for (var l = null; r !== null; ) r.alternate !== null && (l = r), r = r.sibling;
        l === null ? n.tail = null : l.sibling = null;
        break;
      case "collapsed":
        l = n.tail;
        for (var o = null; l !== null; ) l.alternate !== null && (o = l), l = l.sibling;
        o === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : o.sibling = null;
    }
  }
  function Zn(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, l = 0, o = 0;
    if (r) for (var c = n.child; c !== null; ) l |= c.lanes | c.childLanes, o |= c.subtreeFlags & 14680064, o |= c.flags & 14680064, c.return = n, c = c.sibling;
    else for (c = n.child; c !== null; ) l |= c.lanes | c.childLanes, o |= c.subtreeFlags, o |= c.flags, c.return = n, c = c.sibling;
    return n.subtreeFlags |= o, n.childLanes = l, r;
  }
  function Jv(n, r, l) {
    var o = r.pendingProps;
    switch (Dc(r), r.tag) {
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
        return Zn(r), null;
      case 1:
        return Mn(r.type) && vo(), Zn(r), null;
      case 3:
        return o = r.stateNode, Eu(), rn(Yn), rn(En), ze(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (Oc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, Na !== null && (Nu(Na), Na = null))), An(n, r), Zn(r), null;
      case 5:
        Mc(r);
        var c = Su(vs.current);
        if (l = r.type, n !== null && r.stateNode != null) Xv(n, r, l, o, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null) throw Error(k(166));
            return Zn(r), null;
          }
          if (n = Su(bi.current), Oc(r)) {
            o = r.stateNode, l = r.type;
            var d = r.memoizedProps;
            switch (o[Ei] = r, o[us] = d, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                Pt("cancel", o), Pt("close", o);
                break;
              case "iframe":
              case "object":
              case "embed":
                Pt("load", o);
                break;
              case "video":
              case "audio":
                for (c = 0; c < as.length; c++) Pt(as[c], o);
                break;
              case "source":
                Pt("error", o);
                break;
              case "img":
              case "image":
              case "link":
                Pt(
                  "error",
                  o
                ), Pt("load", o);
                break;
              case "details":
                Pt("toggle", o);
                break;
              case "input":
                Vn(o, d), Pt("invalid", o);
                break;
              case "select":
                o._wrapperState = { wasMultiple: !!d.multiple }, Pt("invalid", o);
                break;
              case "textarea":
                gr(o, d), Pt("invalid", o);
            }
            un(l, d), c = null;
            for (var m in d) if (d.hasOwnProperty(m)) {
              var E = d[m];
              m === "children" ? typeof E == "string" ? o.textContent !== E && (d.suppressHydrationWarning !== !0 && xc(o.textContent, E, n), c = ["children", E]) : typeof E == "number" && o.textContent !== "" + E && (d.suppressHydrationWarning !== !0 && xc(
                o.textContent,
                E,
                n
              ), c = ["children", "" + E]) : Re.hasOwnProperty(m) && E != null && m === "onScroll" && Pt("scroll", o);
            }
            switch (l) {
              case "input":
                On(o), si(o, d, !0);
                break;
              case "textarea":
                On(o), Nn(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (o.onclick = bl);
            }
            o = c, r.updateQueue = o, o !== null && (r.flags |= 4);
          } else {
            m = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Sr(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = m.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof o.is == "string" ? n = m.createElement(l, { is: o.is }) : (n = m.createElement(l), l === "select" && (m = n, o.multiple ? m.multiple = !0 : o.size && (m.size = o.size))) : n = m.createElementNS(n, l), n[Ei] = r, n[us] = o, Ua(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (m = Xn(l, o), l) {
                case "dialog":
                  Pt("cancel", n), Pt("close", n), c = o;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Pt("load", n), c = o;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < as.length; c++) Pt(as[c], n);
                  c = o;
                  break;
                case "source":
                  Pt("error", n), c = o;
                  break;
                case "img":
                case "image":
                case "link":
                  Pt(
                    "error",
                    n
                  ), Pt("load", n), c = o;
                  break;
                case "details":
                  Pt("toggle", n), c = o;
                  break;
                case "input":
                  Vn(n, o), c = nr(n, o), Pt("invalid", n);
                  break;
                case "option":
                  c = o;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!o.multiple }, c = le({}, o, { value: void 0 }), Pt("invalid", n);
                  break;
                case "textarea":
                  gr(n, o), c = $n(n, o), Pt("invalid", n);
                  break;
                default:
                  c = o;
              }
              un(l, c), E = c;
              for (d in E) if (E.hasOwnProperty(d)) {
                var R = E[d];
                d === "style" ? Zt(n, R) : d === "dangerouslySetInnerHTML" ? (R = R ? R.__html : void 0, R != null && ci(n, R)) : d === "children" ? typeof R == "string" ? (l !== "textarea" || R !== "") && ae(n, R) : typeof R == "number" && ae(n, "" + R) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (Re.hasOwnProperty(d) ? R != null && d === "onScroll" && Pt("scroll", n) : R != null && Ke(n, d, R, m));
              }
              switch (l) {
                case "input":
                  On(n), si(n, o, !1);
                  break;
                case "textarea":
                  On(n), Nn(n);
                  break;
                case "option":
                  o.value != null && n.setAttribute("value", "" + it(o.value));
                  break;
                case "select":
                  n.multiple = !!o.multiple, d = o.value, d != null ? xn(n, !!o.multiple, d, !1) : o.defaultValue != null && xn(
                    n,
                    !!o.multiple,
                    o.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof c.onClick == "function" && (n.onclick = bl);
              }
              switch (l) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  o = !!o.autoFocus;
                  break e;
                case "img":
                  o = !0;
                  break e;
                default:
                  o = !1;
              }
            }
            o && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return Zn(r), null;
      case 6:
        if (n && r.stateNode != null) Kv(n, r, n.memoizedProps, o);
        else {
          if (typeof o != "string" && r.stateNode === null) throw Error(k(166));
          if (l = Su(vs.current), Su(bi.current), Oc(r)) {
            if (o = r.stateNode, l = r.memoizedProps, o[Ei] = r, (d = o.nodeValue !== l) && (n = qr, n !== null)) switch (n.tag) {
              case 3:
                xc(o.nodeValue, l, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && xc(o.nodeValue, l, (n.mode & 1) !== 0);
            }
            d && (r.flags |= 4);
          } else o = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(o), o[Ei] = r, r.stateNode = o;
        }
        return Zn(r), null;
      case 13:
        if (rn(gn), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (dn && Xr !== null && r.mode & 1 && !(r.flags & 128)) cs(), Nl(), r.flags |= 98560, d = !1;
          else if (d = Oc(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!d) throw Error(k(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d) throw Error(k(317));
              d[Ei] = r;
            } else Nl(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            Zn(r), d = !1;
          } else Na !== null && (Nu(Na), Na = null), d = !0;
          if (!d) return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (o = o !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, r.mode & 1 && (n === null || gn.current & 1 ? _n === 0 && (_n = 3) : Wd())), r.updateQueue !== null && (r.flags |= 4), Zn(r), null);
      case 4:
        return Eu(), An(n, r), n === null && oo(r.stateNode.containerInfo), Zn(r), null;
      case 10:
        return Cd(r.type._context), Zn(r), null;
      case 17:
        return Mn(r.type) && vo(), Zn(r), null;
      case 19:
        if (rn(gn), d = r.memoizedState, d === null) return Zn(r), null;
        if (o = (r.flags & 128) !== 0, m = d.rendering, m === null) if (o) Ds(d, !1);
        else {
          if (_n !== 0 || n !== null && n.flags & 128) for (n = r.child; n !== null; ) {
            if (m = zc(n), m !== null) {
              for (r.flags |= 128, Ds(d, !1), o = m.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), r.subtreeFlags = 0, o = l, l = r.child; l !== null; ) d = l, n = o, d.flags &= 14680066, m = d.alternate, m === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = m.childLanes, d.lanes = m.lanes, d.child = m.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = m.memoizedProps, d.memoizedState = m.memoizedState, d.updateQueue = m.updateQueue, d.type = m.type, n = m.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
              return Oe(gn, gn.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          d.tail !== null && et() > Ro && (r.flags |= 128, o = !0, Ds(d, !1), r.lanes = 4194304);
        }
        else {
          if (!o) if (n = zc(m), n !== null) {
            if (r.flags |= 128, o = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), Ds(d, !0), d.tail === null && d.tailMode === "hidden" && !m.alternate && !dn) return Zn(r), null;
          } else 2 * et() - d.renderingStartTime > Ro && l !== 1073741824 && (r.flags |= 128, o = !0, Ds(d, !1), r.lanes = 4194304);
          d.isBackwards ? (m.sibling = r.child, r.child = m) : (l = d.last, l !== null ? l.sibling = m : r.child = m, d.last = m);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = et(), r.sibling = null, l = gn.current, Oe(gn, o ? l & 1 | 2 : l & 1), r) : (Zn(r), null);
      case 22:
      case 23:
        return Qd(), o = r.memoizedState !== null, n !== null && n.memoizedState !== null !== o && (r.flags |= 8192), o && r.mode & 1 ? ma & 1073741824 && (Zn(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : Zn(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(k(156, r.tag));
  }
  function rf(n, r) {
    switch (Dc(r), r.tag) {
      case 1:
        return Mn(r.type) && vo(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return Eu(), rn(Yn), rn(En), ze(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return Mc(r), null;
      case 13:
        if (rn(gn), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(k(340));
          Nl();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return rn(gn), null;
      case 4:
        return Eu(), null;
      case 10:
        return Cd(r.type._context), null;
      case 22:
      case 23:
        return Qd(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Os = !1, Rr = !1, py = typeof WeakSet == "function" ? WeakSet : Set, me = null;
  function Eo(n, r) {
    var l = n.ref;
    if (l !== null) if (typeof l == "function") try {
      l(null);
    } catch (o) {
      pn(n, r, o);
    }
    else l.current = null;
  }
  function af(n, r, l) {
    try {
      l();
    } catch (o) {
      pn(n, r, o);
    }
  }
  var Zv = !1;
  function eh(n, r) {
    if (ls = wa, n = ns(), vc(n)) {
      if ("selectionStart" in n) var l = { start: n.selectionStart, end: n.selectionEnd };
      else e: {
        l = (l = n.ownerDocument) && l.defaultView || window;
        var o = l.getSelection && l.getSelection();
        if (o && o.rangeCount !== 0) {
          l = o.anchorNode;
          var c = o.anchorOffset, d = o.focusNode;
          o = o.focusOffset;
          try {
            l.nodeType, d.nodeType;
          } catch {
            l = null;
            break e;
          }
          var m = 0, E = -1, R = -1, F = 0, X = 0, J = n, q = null;
          t: for (; ; ) {
            for (var pe; J !== l || c !== 0 && J.nodeType !== 3 || (E = m + c), J !== d || o !== 0 && J.nodeType !== 3 || (R = m + o), J.nodeType === 3 && (m += J.nodeValue.length), (pe = J.firstChild) !== null; )
              q = J, J = pe;
            for (; ; ) {
              if (J === n) break t;
              if (q === l && ++F === c && (E = m), q === d && ++X === o && (R = m), (pe = J.nextSibling) !== null) break;
              J = q, q = J.parentNode;
            }
            J = pe;
          }
          l = E === -1 || R === -1 ? null : { start: E, end: R };
        } else l = null;
      }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (pu = { focusedElem: n, selectionRange: l }, wa = !1, me = r; me !== null; ) if (r = me, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, me = n;
    else for (; me !== null; ) {
      r = me;
      try {
        var Se = r.alternate;
        if (r.flags & 1024) switch (r.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (Se !== null) {
              var xe = Se.memoizedProps, kn = Se.memoizedState, N = r.stateNode, w = N.getSnapshotBeforeUpdate(r.elementType === r.type ? xe : ri(r.type, xe), kn);
              N.__reactInternalSnapshotBeforeUpdate = w;
            }
            break;
          case 3:
            var U = r.stateNode.containerInfo;
            U.nodeType === 1 ? U.textContent = "" : U.nodeType === 9 && U.documentElement && U.removeChild(U.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(k(163));
        }
      } catch (K) {
        pn(r, r.return, K);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, me = n;
        break;
      }
      me = r.return;
    }
    return Se = Zv, Zv = !1, Se;
  }
  function Ns(n, r, l) {
    var o = r.updateQueue;
    if (o = o !== null ? o.lastEffect : null, o !== null) {
      var c = o = o.next;
      do {
        if ((c.tag & n) === n) {
          var d = c.destroy;
          c.destroy = void 0, d !== void 0 && af(r, l, d);
        }
        c = c.next;
      } while (c !== o);
    }
  }
  function Ls(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & n) === n) {
          var o = l.create;
          l.destroy = o();
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function Hd(n) {
    var r = n.ref;
    if (r !== null) {
      var l = n.stateNode;
      switch (n.tag) {
        case 5:
          n = l;
          break;
        default:
          n = l;
      }
      typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function lf(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, lf(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Ei], delete r[us], delete r[os], delete r[po], delete r[fy])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function Ms(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function Ji(n) {
    e: for (; ; ) {
      for (; n.sibling === null; ) {
        if (n.return === null || Ms(n.return)) return null;
        n = n.return;
      }
      for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
        if (n.flags & 2 || n.child === null || n.tag === 4) continue e;
        n.child.return = n, n = n.child;
      }
      if (!(n.flags & 2)) return n.stateNode;
    }
  }
  function _i(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = bl));
    else if (o !== 4 && (n = n.child, n !== null)) for (_i(n, r, l), n = n.sibling; n !== null; ) _i(n, r, l), n = n.sibling;
  }
  function ki(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (o !== 4 && (n = n.child, n !== null)) for (ki(n, r, l), n = n.sibling; n !== null; ) ki(n, r, l), n = n.sibling;
  }
  var wn = null, Lr = !1;
  function Mr(n, r, l) {
    for (l = l.child; l !== null; ) th(n, r, l), l = l.sibling;
  }
  function th(n, r, l) {
    if (Yr && typeof Yr.onCommitFiberUnmount == "function") try {
      Yr.onCommitFiberUnmount(ml, l);
    } catch {
    }
    switch (l.tag) {
      case 5:
        Rr || Eo(l, r);
      case 6:
        var o = wn, c = Lr;
        wn = null, Mr(n, r, l), wn = o, Lr = c, wn !== null && (Lr ? (n = wn, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : wn.removeChild(l.stateNode));
        break;
      case 18:
        wn !== null && (Lr ? (n = wn, l = l.stateNode, n.nodeType === 8 ? fo(n.parentNode, l) : n.nodeType === 1 && fo(n, l), Ja(n)) : fo(wn, l.stateNode));
        break;
      case 4:
        o = wn, c = Lr, wn = l.stateNode.containerInfo, Lr = !0, Mr(n, r, l), wn = o, Lr = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Rr && (o = l.updateQueue, o !== null && (o = o.lastEffect, o !== null))) {
          c = o = o.next;
          do {
            var d = c, m = d.destroy;
            d = d.tag, m !== void 0 && (d & 2 || d & 4) && af(l, r, m), c = c.next;
          } while (c !== o);
        }
        Mr(n, r, l);
        break;
      case 1:
        if (!Rr && (Eo(l, r), o = l.stateNode, typeof o.componentWillUnmount == "function")) try {
          o.props = l.memoizedProps, o.state = l.memoizedState, o.componentWillUnmount();
        } catch (E) {
          pn(l, r, E);
        }
        Mr(n, r, l);
        break;
      case 21:
        Mr(n, r, l);
        break;
      case 22:
        l.mode & 1 ? (Rr = (o = Rr) || l.memoizedState !== null, Mr(n, r, l), Rr = o) : Mr(n, r, l);
        break;
      default:
        Mr(n, r, l);
    }
  }
  function nh(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new py()), r.forEach(function(o) {
        var c = fh.bind(null, n, o);
        l.has(o) || (l.add(o), o.then(c, c));
      });
    }
  }
  function ai(n, r) {
    var l = r.deletions;
    if (l !== null) for (var o = 0; o < l.length; o++) {
      var c = l[o];
      try {
        var d = n, m = r, E = m;
        e: for (; E !== null; ) {
          switch (E.tag) {
            case 5:
              wn = E.stateNode, Lr = !1;
              break e;
            case 3:
              wn = E.stateNode.containerInfo, Lr = !0;
              break e;
            case 4:
              wn = E.stateNode.containerInfo, Lr = !0;
              break e;
          }
          E = E.return;
        }
        if (wn === null) throw Error(k(160));
        th(d, m, c), wn = null, Lr = !1;
        var R = c.alternate;
        R !== null && (R.return = null), c.return = null;
      } catch (F) {
        pn(c, r, F);
      }
    }
    if (r.subtreeFlags & 12854) for (r = r.child; r !== null; ) Pd(r, n), r = r.sibling;
  }
  function Pd(n, r) {
    var l = n.alternate, o = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (ai(r, n), ea(n), o & 4) {
          try {
            Ns(3, n, n.return), Ls(3, n);
          } catch (xe) {
            pn(n, n.return, xe);
          }
          try {
            Ns(5, n, n.return);
          } catch (xe) {
            pn(n, n.return, xe);
          }
        }
        break;
      case 1:
        ai(r, n), ea(n), o & 512 && l !== null && Eo(l, l.return);
        break;
      case 5:
        if (ai(r, n), ea(n), o & 512 && l !== null && Eo(l, l.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            ae(c, "");
          } catch (xe) {
            pn(n, n.return, xe);
          }
        }
        if (o & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, m = l !== null ? l.memoizedProps : d, E = n.type, R = n.updateQueue;
          if (n.updateQueue = null, R !== null) try {
            E === "input" && d.type === "radio" && d.name != null && Bn(c, d), Xn(E, m);
            var F = Xn(E, d);
            for (m = 0; m < R.length; m += 2) {
              var X = R[m], J = R[m + 1];
              X === "style" ? Zt(c, J) : X === "dangerouslySetInnerHTML" ? ci(c, J) : X === "children" ? ae(c, J) : Ke(c, X, J, F);
            }
            switch (E) {
              case "input":
                Ir(c, d);
                break;
              case "textarea":
                Ia(c, d);
                break;
              case "select":
                var q = c._wrapperState.wasMultiple;
                c._wrapperState.wasMultiple = !!d.multiple;
                var pe = d.value;
                pe != null ? xn(c, !!d.multiple, pe, !1) : q !== !!d.multiple && (d.defaultValue != null ? xn(
                  c,
                  !!d.multiple,
                  d.defaultValue,
                  !0
                ) : xn(c, !!d.multiple, d.multiple ? [] : "", !1));
            }
            c[us] = d;
          } catch (xe) {
            pn(n, n.return, xe);
          }
        }
        break;
      case 6:
        if (ai(r, n), ea(n), o & 4) {
          if (n.stateNode === null) throw Error(k(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (xe) {
            pn(n, n.return, xe);
          }
        }
        break;
      case 3:
        if (ai(r, n), ea(n), o & 4 && l !== null && l.memoizedState.isDehydrated) try {
          Ja(r.containerInfo);
        } catch (xe) {
          pn(n, n.return, xe);
        }
        break;
      case 4:
        ai(r, n), ea(n);
        break;
      case 13:
        ai(r, n), ea(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || ($d = et())), o & 4 && nh(n);
        break;
      case 22:
        if (X = l !== null && l.memoizedState !== null, n.mode & 1 ? (Rr = (F = Rr) || X, ai(r, n), Rr = F) : ai(r, n), ea(n), o & 8192) {
          if (F = n.memoizedState !== null, (n.stateNode.isHidden = F) && !X && n.mode & 1) for (me = n, X = n.child; X !== null; ) {
            for (J = me = X; me !== null; ) {
              switch (q = me, pe = q.child, q.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ns(4, q, q.return);
                  break;
                case 1:
                  Eo(q, q.return);
                  var Se = q.stateNode;
                  if (typeof Se.componentWillUnmount == "function") {
                    o = q, l = q.return;
                    try {
                      r = o, Se.props = r.memoizedProps, Se.state = r.memoizedState, Se.componentWillUnmount();
                    } catch (xe) {
                      pn(o, l, xe);
                    }
                  }
                  break;
                case 5:
                  Eo(q, q.return);
                  break;
                case 22:
                  if (q.memoizedState !== null) {
                    zs(J);
                    continue;
                  }
              }
              pe !== null ? (pe.return = q, me = pe) : zs(J);
            }
            X = X.sibling;
          }
          e: for (X = null, J = n; ; ) {
            if (J.tag === 5) {
              if (X === null) {
                X = J;
                try {
                  c = J.stateNode, F ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (E = J.stateNode, R = J.memoizedProps.style, m = R != null && R.hasOwnProperty("display") ? R.display : null, E.style.display = Ft("display", m));
                } catch (xe) {
                  pn(n, n.return, xe);
                }
              }
            } else if (J.tag === 6) {
              if (X === null) try {
                J.stateNode.nodeValue = F ? "" : J.memoizedProps;
              } catch (xe) {
                pn(n, n.return, xe);
              }
            } else if ((J.tag !== 22 && J.tag !== 23 || J.memoizedState === null || J === n) && J.child !== null) {
              J.child.return = J, J = J.child;
              continue;
            }
            if (J === n) break e;
            for (; J.sibling === null; ) {
              if (J.return === null || J.return === n) break e;
              X === J && (X = null), J = J.return;
            }
            X === J && (X = null), J.sibling.return = J.return, J = J.sibling;
          }
        }
        break;
      case 19:
        ai(r, n), ea(n), o & 4 && nh(n);
        break;
      case 21:
        break;
      default:
        ai(
          r,
          n
        ), ea(n);
    }
  }
  function ea(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var l = n.return; l !== null; ) {
            if (Ms(l)) {
              var o = l;
              break e;
            }
            l = l.return;
          }
          throw Error(k(160));
        }
        switch (o.tag) {
          case 5:
            var c = o.stateNode;
            o.flags & 32 && (ae(c, ""), o.flags &= -33);
            var d = Ji(n);
            ki(n, d, c);
            break;
          case 3:
          case 4:
            var m = o.stateNode.containerInfo, E = Ji(n);
            _i(n, E, m);
            break;
          default:
            throw Error(k(161));
        }
      } catch (R) {
        pn(n, n.return, R);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function vy(n, r, l) {
    me = n, Vd(n);
  }
  function Vd(n, r, l) {
    for (var o = (n.mode & 1) !== 0; me !== null; ) {
      var c = me, d = c.child;
      if (c.tag === 22 && o) {
        var m = c.memoizedState !== null || Os;
        if (!m) {
          var E = c.alternate, R = E !== null && E.memoizedState !== null || Rr;
          E = Os;
          var F = Rr;
          if (Os = m, (Rr = R) && !F) for (me = c; me !== null; ) m = me, R = m.child, m.tag === 22 && m.memoizedState !== null ? Bd(c) : R !== null ? (R.return = m, me = R) : Bd(c);
          for (; d !== null; ) me = d, Vd(d), d = d.sibling;
          me = c, Os = E, Rr = F;
        }
        rh(n);
      } else c.subtreeFlags & 8772 && d !== null ? (d.return = c, me = d) : rh(n);
    }
  }
  function rh(n) {
    for (; me !== null; ) {
      var r = me;
      if (r.flags & 8772) {
        var l = r.alternate;
        try {
          if (r.flags & 8772) switch (r.tag) {
            case 0:
            case 11:
            case 15:
              Rr || Ls(5, r);
              break;
            case 1:
              var o = r.stateNode;
              if (r.flags & 4 && !Rr) if (l === null) o.componentDidMount();
              else {
                var c = r.elementType === r.type ? l.memoizedProps : ri(r.type, l.memoizedProps);
                o.componentDidUpdate(c, l.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
              }
              var d = r.updateQueue;
              d !== null && wd(r, d, o);
              break;
            case 3:
              var m = r.updateQueue;
              if (m !== null) {
                if (l = null, r.child !== null) switch (r.child.tag) {
                  case 5:
                    l = r.child.stateNode;
                    break;
                  case 1:
                    l = r.child.stateNode;
                }
                wd(r, m, l);
              }
              break;
            case 5:
              var E = r.stateNode;
              if (l === null && r.flags & 4) {
                l = E;
                var R = r.memoizedProps;
                switch (r.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    R.autoFocus && l.focus();
                    break;
                  case "img":
                    R.src && (l.src = R.src);
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
              if (r.memoizedState === null) {
                var F = r.alternate;
                if (F !== null) {
                  var X = F.memoizedState;
                  if (X !== null) {
                    var J = X.dehydrated;
                    J !== null && Ja(J);
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
          Rr || r.flags & 512 && Hd(r);
        } catch (q) {
          pn(r, r.return, q);
        }
      }
      if (r === n) {
        me = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, me = l;
        break;
      }
      me = r.return;
    }
  }
  function zs(n) {
    for (; me !== null; ) {
      var r = me;
      if (r === n) {
        me = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, me = l;
        break;
      }
      me = r.return;
    }
  }
  function Bd(n) {
    for (; me !== null; ) {
      var r = me;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              Ls(4, r);
            } catch (R) {
              pn(r, l, R);
            }
            break;
          case 1:
            var o = r.stateNode;
            if (typeof o.componentDidMount == "function") {
              var c = r.return;
              try {
                o.componentDidMount();
              } catch (R) {
                pn(r, c, R);
              }
            }
            var d = r.return;
            try {
              Hd(r);
            } catch (R) {
              pn(r, d, R);
            }
            break;
          case 5:
            var m = r.return;
            try {
              Hd(r);
            } catch (R) {
              pn(r, m, R);
            }
        }
      } catch (R) {
        pn(r, r.return, R);
      }
      if (r === n) {
        me = null;
        break;
      }
      var E = r.sibling;
      if (E !== null) {
        E.return = r.return, me = E;
        break;
      }
      me = r.return;
    }
  }
  var hy = Math.ceil, jl = yt.ReactCurrentDispatcher, Du = yt.ReactCurrentOwner, or = yt.ReactCurrentBatchConfig, xt = 0, Wn = null, Fn = null, sr = 0, ma = 0, Co = Da(0), _n = 0, Us = null, Di = 0, xo = 0, uf = 0, js = null, ta = null, $d = 0, Ro = 1 / 0, ya = null, To = !1, Ou = null, Al = null, of = !1, Zi = null, As = 0, Fl = 0, bo = null, Fs = -1, Tr = 0;
  function Hn() {
    return xt & 6 ? et() : Fs !== -1 ? Fs : Fs = et();
  }
  function Oi(n) {
    return n.mode & 1 ? xt & 2 && sr !== 0 ? sr & -sr : dy.transition !== null ? (Tr === 0 && (Tr = Xu()), Tr) : (n = Nt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : ro(n.type)), n) : 1;
  }
  function zr(n, r, l, o) {
    if (50 < Fl) throw Fl = 0, bo = null, Error(k(185));
    Pi(n, l, o), (!(xt & 2) || n !== Wn) && (n === Wn && (!(xt & 2) && (xo |= l), _n === 4 && ii(n, sr)), na(n, o), l === 1 && xt === 0 && !(r.mode & 1) && (Ro = et() + 500, ho && xi()));
  }
  function na(n, r) {
    var l = n.callbackNode;
    au(n, r);
    var o = Ka(n, n === Wn ? sr : 0);
    if (o === 0) l !== null && ar(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (l != null && ar(l), r === 1) n.tag === 0 ? _l(Id.bind(null, n)) : _c(Id.bind(null, n)), co(function() {
        !(xt & 6) && xi();
      }), l = null;
      else {
        switch (Ju(o)) {
          case 1:
            l = qa;
            break;
          case 4:
            l = nu;
            break;
          case 16:
            l = ru;
            break;
          case 536870912:
            l = Wu;
            break;
          default:
            l = ru;
        }
        l = ph(l, sf.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function sf(n, r) {
    if (Fs = -1, Tr = 0, xt & 6) throw Error(k(327));
    var l = n.callbackNode;
    if (wo() && n.callbackNode !== l) return null;
    var o = Ka(n, n === Wn ? sr : 0);
    if (o === 0) return null;
    if (o & 30 || o & n.expiredLanes || r) r = cf(n, o);
    else {
      r = o;
      var c = xt;
      xt |= 2;
      var d = ih();
      (Wn !== n || sr !== r) && (ya = null, Ro = et() + 500, el(n, r));
      do
        try {
          lh();
          break;
        } catch (E) {
          ah(n, E);
        }
      while (!0);
      Ed(), jl.current = d, xt = c, Fn !== null ? r = 0 : (Wn = null, sr = 0, r = _n);
    }
    if (r !== 0) {
      if (r === 2 && (c = gl(n), c !== 0 && (o = c, r = Hs(n, c))), r === 1) throw l = Us, el(n, 0), ii(n, o), na(n, et()), l;
      if (r === 6) ii(n, o);
      else {
        if (c = n.current.alternate, !(o & 30) && !my(c) && (r = cf(n, o), r === 2 && (d = gl(n), d !== 0 && (o = d, r = Hs(n, d))), r === 1)) throw l = Us, el(n, 0), ii(n, o), na(n, et()), l;
        switch (n.finishedWork = c, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(k(345));
          case 2:
            Mu(n, ta, ya);
            break;
          case 3:
            if (ii(n, o), (o & 130023424) === o && (r = $d + 500 - et(), 10 < r)) {
              if (Ka(n, 0) !== 0) break;
              if (c = n.suspendedLanes, (c & o) !== o) {
                Hn(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = Tc(Mu.bind(null, n, ta, ya), r);
              break;
            }
            Mu(n, ta, ya);
            break;
          case 4:
            if (ii(n, o), (o & 4194240) === o) break;
            for (r = n.eventTimes, c = -1; 0 < o; ) {
              var m = 31 - kr(o);
              d = 1 << m, m = r[m], m > c && (c = m), o &= ~d;
            }
            if (o = c, o = et() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * hy(o / 1960)) - o, 10 < o) {
              n.timeoutHandle = Tc(Mu.bind(null, n, ta, ya), o);
              break;
            }
            Mu(n, ta, ya);
            break;
          case 5:
            Mu(n, ta, ya);
            break;
          default:
            throw Error(k(329));
        }
      }
    }
    return na(n, et()), n.callbackNode === l ? sf.bind(null, n) : null;
  }
  function Hs(n, r) {
    var l = js;
    return n.current.memoizedState.isDehydrated && (el(n, r).flags |= 256), n = cf(n, r), n !== 2 && (r = ta, ta = l, r !== null && Nu(r)), n;
  }
  function Nu(n) {
    ta === null ? ta = n : ta.push.apply(ta, n);
  }
  function my(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var l = r.updateQueue;
        if (l !== null && (l = l.stores, l !== null)) for (var o = 0; o < l.length; o++) {
          var c = l[o], d = c.getSnapshot;
          c = c.value;
          try {
            if (!ei(d(), c)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (l = r.child, r.subtreeFlags & 16384 && l !== null) l.return = r, r = l;
      else {
        if (r === n) break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n) return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function ii(n, r) {
    for (r &= ~uf, r &= ~xo, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - kr(r), o = 1 << l;
      n[l] = -1, r &= ~o;
    }
  }
  function Id(n) {
    if (xt & 6) throw Error(k(327));
    wo();
    var r = Ka(n, 0);
    if (!(r & 1)) return na(n, et()), null;
    var l = cf(n, r);
    if (n.tag !== 0 && l === 2) {
      var o = gl(n);
      o !== 0 && (r = o, l = Hs(n, o));
    }
    if (l === 1) throw l = Us, el(n, 0), ii(n, r), na(n, et()), l;
    if (l === 6) throw Error(k(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Mu(n, ta, ya), na(n, et()), null;
  }
  function Yd(n, r) {
    var l = xt;
    xt |= 1;
    try {
      return n(r);
    } finally {
      xt = l, xt === 0 && (Ro = et() + 500, ho && xi());
    }
  }
  function Lu(n) {
    Zi !== null && Zi.tag === 0 && !(xt & 6) && wo();
    var r = xt;
    xt |= 1;
    var l = or.transition, o = Nt;
    try {
      if (or.transition = null, Nt = 1, n) return n();
    } finally {
      Nt = o, or.transition = l, xt = r, !(xt & 6) && xi();
    }
  }
  function Qd() {
    ma = Co.current, rn(Co);
  }
  function el(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, hd(l)), Fn !== null) for (l = Fn.return; l !== null; ) {
      var o = l;
      switch (Dc(o), o.tag) {
        case 1:
          o = o.type.childContextTypes, o != null && vo();
          break;
        case 3:
          Eu(), rn(Yn), rn(En), ze();
          break;
        case 5:
          Mc(o);
          break;
        case 4:
          Eu();
          break;
        case 13:
          rn(gn);
          break;
        case 19:
          rn(gn);
          break;
        case 10:
          Cd(o.type._context);
          break;
        case 22:
        case 23:
          Qd();
      }
      l = l.return;
    }
    if (Wn = n, Fn = n = Hl(n.current, null), sr = ma = r, _n = 0, Us = null, uf = xo = Di = 0, ta = js = null, gu !== null) {
      for (r = 0; r < gu.length; r++) if (l = gu[r], o = l.interleaved, o !== null) {
        l.interleaved = null;
        var c = o.next, d = l.pending;
        if (d !== null) {
          var m = d.next;
          d.next = c, o.next = m;
        }
        l.pending = o;
      }
      gu = null;
    }
    return n;
  }
  function ah(n, r) {
    do {
      var l = Fn;
      try {
        if (Ed(), ft.current = wu, Uc) {
          for (var o = Mt.memoizedState; o !== null; ) {
            var c = o.queue;
            c !== null && (c.pending = null), o = o.next;
          }
          Uc = !1;
        }
        if (Gt = 0, Jn = Un = Mt = null, ms = !1, Cu = 0, Du.current = null, l === null || l.return === null) {
          _n = 1, Us = r, Fn = null;
          break;
        }
        e: {
          var d = n, m = l.return, E = l, R = r;
          if (r = sr, E.flags |= 32768, R !== null && typeof R == "object" && typeof R.then == "function") {
            var F = R, X = E, J = X.tag;
            if (!(X.mode & 1) && (J === 0 || J === 11 || J === 15)) {
              var q = X.alternate;
              q ? (X.updateQueue = q.updateQueue, X.memoizedState = q.memoizedState, X.lanes = q.lanes) : (X.updateQueue = null, X.memoizedState = null);
            }
            var pe = Yv(m);
            if (pe !== null) {
              pe.flags &= -257, Ul(pe, m, E, d, r), pe.mode & 1 && zd(d, F, r), r = pe, R = F;
              var Se = r.updateQueue;
              if (Se === null) {
                var xe = /* @__PURE__ */ new Set();
                xe.add(R), r.updateQueue = xe;
              } else Se.add(R);
              break e;
            } else {
              if (!(r & 1)) {
                zd(d, F, r), Wd();
                break e;
              }
              R = Error(k(426));
            }
          } else if (dn && E.mode & 1) {
            var kn = Yv(m);
            if (kn !== null) {
              !(kn.flags & 65536) && (kn.flags |= 256), Ul(kn, m, E, d, r), qi(_u(R, E));
              break e;
            }
          }
          d = R = _u(R, E), _n !== 4 && (_n = 2), js === null ? js = [d] : js.push(d), d = m;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var N = Iv(d, R, r);
                Hv(d, N);
                break e;
              case 1:
                E = R;
                var w = d.type, U = d.stateNode;
                if (!(d.flags & 128) && (typeof w.getDerivedStateFromError == "function" || U !== null && typeof U.componentDidCatch == "function" && (Al === null || !Al.has(U)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var K = Md(d, E, r);
                  Hv(d, K);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        oh(l);
      } catch (Ee) {
        r = Ee, Fn === l && l !== null && (Fn = l = l.return);
        continue;
      }
      break;
    } while (!0);
  }
  function ih() {
    var n = jl.current;
    return jl.current = wu, n === null ? wu : n;
  }
  function Wd() {
    (_n === 0 || _n === 3 || _n === 2) && (_n = 4), Wn === null || !(Di & 268435455) && !(xo & 268435455) || ii(Wn, sr);
  }
  function cf(n, r) {
    var l = xt;
    xt |= 2;
    var o = ih();
    (Wn !== n || sr !== r) && (ya = null, el(n, r));
    do
      try {
        yy();
        break;
      } catch (c) {
        ah(n, c);
      }
    while (!0);
    if (Ed(), xt = l, jl.current = o, Fn !== null) throw Error(k(261));
    return Wn = null, sr = 0, _n;
  }
  function yy() {
    for (; Fn !== null; ) uh(Fn);
  }
  function lh() {
    for (; Fn !== null && !Wa(); ) uh(Fn);
  }
  function uh(n) {
    var r = dh(n.alternate, n, ma);
    n.memoizedProps = n.pendingProps, r === null ? oh(n) : Fn = r, Du.current = null;
  }
  function oh(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (l = rf(l, r), l !== null) {
          l.flags &= 32767, Fn = l;
          return;
        }
        if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          _n = 6, Fn = null;
          return;
        }
      } else if (l = Jv(l, r, ma), l !== null) {
        Fn = l;
        return;
      }
      if (r = r.sibling, r !== null) {
        Fn = r;
        return;
      }
      Fn = r = n;
    } while (r !== null);
    _n === 0 && (_n = 5);
  }
  function Mu(n, r, l) {
    var o = Nt, c = or.transition;
    try {
      or.transition = null, Nt = 1, gy(n, r, l, o);
    } finally {
      or.transition = c, Nt = o;
    }
    return null;
  }
  function gy(n, r, l, o) {
    do
      wo();
    while (Zi !== null);
    if (xt & 6) throw Error(k(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current) throw Error(k(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = l.lanes | l.childLanes;
    if (Gf(n, d), n === Wn && (Fn = Wn = null, sr = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || of || (of = !0, ph(ru, function() {
      return wo(), null;
    })), d = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || d) {
      d = or.transition, or.transition = null;
      var m = Nt;
      Nt = 1;
      var E = xt;
      xt |= 4, Du.current = null, eh(n, l), Pd(l, n), lo(pu), wa = !!ls, pu = ls = null, n.current = l, vy(l), Ga(), xt = E, Nt = m, or.transition = d;
    } else n.current = l;
    if (of && (of = !1, Zi = n, As = c), d = n.pendingLanes, d === 0 && (Al = null), Qo(l.stateNode), na(n, et()), r !== null) for (o = n.onRecoverableError, l = 0; l < r.length; l++) c = r[l], o(c.value, { componentStack: c.stack, digest: c.digest });
    if (To) throw To = !1, n = Ou, Ou = null, n;
    return As & 1 && n.tag !== 0 && wo(), d = n.pendingLanes, d & 1 ? n === bo ? Fl++ : (Fl = 0, bo = n) : Fl = 0, xi(), null;
  }
  function wo() {
    if (Zi !== null) {
      var n = Ju(As), r = or.transition, l = Nt;
      try {
        if (or.transition = null, Nt = 16 > n ? 16 : n, Zi === null) var o = !1;
        else {
          if (n = Zi, Zi = null, As = 0, xt & 6) throw Error(k(331));
          var c = xt;
          for (xt |= 4, me = n.current; me !== null; ) {
            var d = me, m = d.child;
            if (me.flags & 16) {
              var E = d.deletions;
              if (E !== null) {
                for (var R = 0; R < E.length; R++) {
                  var F = E[R];
                  for (me = F; me !== null; ) {
                    var X = me;
                    switch (X.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ns(8, X, d);
                    }
                    var J = X.child;
                    if (J !== null) J.return = X, me = J;
                    else for (; me !== null; ) {
                      X = me;
                      var q = X.sibling, pe = X.return;
                      if (lf(X), X === F) {
                        me = null;
                        break;
                      }
                      if (q !== null) {
                        q.return = pe, me = q;
                        break;
                      }
                      me = pe;
                    }
                  }
                }
                var Se = d.alternate;
                if (Se !== null) {
                  var xe = Se.child;
                  if (xe !== null) {
                    Se.child = null;
                    do {
                      var kn = xe.sibling;
                      xe.sibling = null, xe = kn;
                    } while (xe !== null);
                  }
                }
                me = d;
              }
            }
            if (d.subtreeFlags & 2064 && m !== null) m.return = d, me = m;
            else e: for (; me !== null; ) {
              if (d = me, d.flags & 2048) switch (d.tag) {
                case 0:
                case 11:
                case 15:
                  Ns(9, d, d.return);
              }
              var N = d.sibling;
              if (N !== null) {
                N.return = d.return, me = N;
                break e;
              }
              me = d.return;
            }
          }
          var w = n.current;
          for (me = w; me !== null; ) {
            m = me;
            var U = m.child;
            if (m.subtreeFlags & 2064 && U !== null) U.return = m, me = U;
            else e: for (m = w; me !== null; ) {
              if (E = me, E.flags & 2048) try {
                switch (E.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ls(9, E);
                }
              } catch (Ee) {
                pn(E, E.return, Ee);
              }
              if (E === m) {
                me = null;
                break e;
              }
              var K = E.sibling;
              if (K !== null) {
                K.return = E.return, me = K;
                break e;
              }
              me = E.return;
            }
          }
          if (xt = c, xi(), Yr && typeof Yr.onPostCommitFiberRoot == "function") try {
            Yr.onPostCommitFiberRoot(ml, n);
          } catch {
          }
          o = !0;
        }
        return o;
      } finally {
        Nt = l, or.transition = r;
      }
    }
    return !1;
  }
  function sh(n, r, l) {
    r = _u(l, r), r = Iv(n, r, 1), n = Ll(n, r, 1), r = Hn(), n !== null && (Pi(n, 1, r), na(n, r));
  }
  function pn(n, r, l) {
    if (n.tag === 3) sh(n, n, l);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        sh(r, n, l);
        break;
      } else if (r.tag === 1) {
        var o = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (Al === null || !Al.has(o))) {
          n = _u(l, n), n = Md(r, n, 1), r = Ll(r, n, 1), n = Hn(), r !== null && (Pi(r, 1, n), na(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function Sy(n, r, l) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = Hn(), n.pingedLanes |= n.suspendedLanes & l, Wn === n && (sr & l) === l && (_n === 4 || _n === 3 && (sr & 130023424) === sr && 500 > et() - $d ? el(n, 0) : uf |= l), na(n, r);
  }
  function ch(n, r) {
    r === 0 && (n.mode & 1 ? (r = fa, fa <<= 1, !(fa & 130023424) && (fa = 4194304)) : r = 1);
    var l = Hn();
    n = va(n, r), n !== null && (Pi(n, r, l), na(n, l));
  }
  function Ey(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), ch(n, l);
  }
  function fh(n, r) {
    var l = 0;
    switch (n.tag) {
      case 13:
        var o = n.stateNode, c = n.memoizedState;
        c !== null && (l = c.retryLane);
        break;
      case 19:
        o = n.stateNode;
        break;
      default:
        throw Error(k(314));
    }
    o !== null && o.delete(r), ch(n, l);
  }
  var dh;
  dh = function(n, r, l) {
    if (n !== null) if (n.memoizedProps !== r.pendingProps || Yn.current) jn = !0;
    else {
      if (!(n.lanes & l) && !(r.flags & 128)) return jn = !1, ks(n, r, l);
      jn = !!(n.flags & 131072);
    }
    else jn = !1, dn && r.flags & 1048576 && Uv(r, Gi, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var o = r.type;
        Ma(n, r), n = r.pendingProps;
        var c = Gr(r, En.current);
        yn(r, l), c = Ml(null, r, o, n, c, l);
        var d = ni();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Mn(o) ? (d = !0, Kn(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, bd(r), c.updater = Jc, r.stateNode = c, c._reactInternals = r, Rs(r, o, n, l), r = ws(null, r, o, !0, d, l)) : (r.tag = 0, dn && d && kc(r), ur(null, r, c, l), r = r.child), r;
      case 16:
        o = r.elementType;
        e: {
          switch (Ma(n, r), n = r.pendingProps, c = o._init, o = c(o._payload), r.type = o, c = r.tag = xy(o), n = ri(o, n), c) {
            case 0:
              r = Qv(null, r, o, n, l);
              break e;
            case 1:
              r = Wv(null, r, o, n, l);
              break e;
            case 11:
              r = Zr(null, r, o, n, l);
              break e;
            case 14:
              r = ku(null, r, o, ri(o.type, n), l);
              break e;
          }
          throw Error(k(
            306,
            o,
            ""
          ));
        }
        return r;
      case 0:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ri(o, c), Qv(n, r, o, c, l);
      case 1:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ri(o, c), Wv(n, r, o, c, l);
      case 3:
        e: {
          if (So(r), n === null) throw Error(k(387));
          o = r.pendingProps, d = r.memoizedState, c = d.element, Fv(n, r), fs(r, o, null, l);
          var m = r.memoizedState;
          if (o = m.element, d.isDehydrated) if (d = { element: o, isDehydrated: !1, cache: m.cache, pendingSuspenseBoundaries: m.pendingSuspenseBoundaries, transitions: m.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
            c = _u(Error(k(423)), r), r = Gv(n, r, o, l, c);
            break e;
          } else if (o !== c) {
            c = _u(Error(k(424)), r), r = Gv(n, r, o, l, c);
            break e;
          } else for (Xr = Si(r.stateNode.containerInfo.firstChild), qr = r, dn = !0, Na = null, l = se(r, null, o, l), r.child = l; l; ) l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (Nl(), o === c) {
              r = za(n, r, l);
              break e;
            }
            ur(n, r, o, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return Pv(r), n === null && gd(r), o = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, m = c.children, Rc(o, c) ? m = null : d !== null && Rc(o, d) && (r.flags |= 32), Ud(n, r), ur(n, r, m, l), r.child;
      case 6:
        return n === null && gd(r), null;
      case 13:
        return nf(n, r, l);
      case 4:
        return _d(r, r.stateNode.containerInfo), o = r.pendingProps, n === null ? r.child = Tn(r, null, o, l) : ur(n, r, o, l), r.child;
      case 11:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ri(o, c), Zr(n, r, o, c, l);
      case 7:
        return ur(n, r, r.pendingProps, l), r.child;
      case 8:
        return ur(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return ur(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (o = r.type._context, c = r.pendingProps, d = r.memoizedProps, m = c.value, Oe(pa, o._currentValue), o._currentValue = m, d !== null) if (ei(d.value, m)) {
            if (d.children === c.children && !Yn.current) {
              r = za(n, r, l);
              break e;
            }
          } else for (d = r.child, d !== null && (d.return = r); d !== null; ) {
            var E = d.dependencies;
            if (E !== null) {
              m = d.child;
              for (var R = E.firstContext; R !== null; ) {
                if (R.context === o) {
                  if (d.tag === 1) {
                    R = Xi(-1, l & -l), R.tag = 2;
                    var F = d.updateQueue;
                    if (F !== null) {
                      F = F.shared;
                      var X = F.pending;
                      X === null ? R.next = R : (R.next = X.next, X.next = R), F.pending = R;
                    }
                  }
                  d.lanes |= l, R = d.alternate, R !== null && (R.lanes |= l), xd(
                    d.return,
                    l,
                    r
                  ), E.lanes |= l;
                  break;
                }
                R = R.next;
              }
            } else if (d.tag === 10) m = d.type === r.type ? null : d.child;
            else if (d.tag === 18) {
              if (m = d.return, m === null) throw Error(k(341));
              m.lanes |= l, E = m.alternate, E !== null && (E.lanes |= l), xd(m, l, r), m = d.sibling;
            } else m = d.child;
            if (m !== null) m.return = d;
            else for (m = d; m !== null; ) {
              if (m === r) {
                m = null;
                break;
              }
              if (d = m.sibling, d !== null) {
                d.return = m.return, m = d;
                break;
              }
              m = m.return;
            }
            d = m;
          }
          ur(n, r, c.children, l), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, o = r.pendingProps.children, yn(r, l), c = La(c), o = o(c), r.flags |= 1, ur(n, r, o, l), r.child;
      case 14:
        return o = r.type, c = ri(o, r.pendingProps), c = ri(o.type, c), ku(n, r, o, c, l);
      case 15:
        return tt(n, r, r.type, r.pendingProps, l);
      case 17:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ri(o, c), Ma(n, r), r.tag = 1, Mn(o) ? (n = !0, Kn(r)) : n = !1, yn(r, l), Zc(r, o, c), Rs(r, o, c, l), ws(null, r, o, !0, n, l);
      case 19:
        return wi(n, r, l);
      case 22:
        return bs(n, r, l);
    }
    throw Error(k(156, r.tag));
  };
  function ph(n, r) {
    return on(n, r);
  }
  function Cy(n, r, l, o) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ja(n, r, l, o) {
    return new Cy(n, r, l, o);
  }
  function Gd(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function xy(n) {
    if (typeof n == "function") return Gd(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === _t) return 11;
      if (n === kt) return 14;
    }
    return 2;
  }
  function Hl(n, r) {
    var l = n.alternate;
    return l === null ? (l = ja(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function Ps(n, r, l, o, c, d) {
    var m = 2;
    if (o = n, typeof n == "function") Gd(n) && (m = 1);
    else if (typeof n == "string") m = 5;
    else e: switch (n) {
      case $e:
        return tl(l.children, c, d, r);
      case an:
        m = 8, c |= 8;
        break;
      case Ht:
        return n = ja(12, l, r, c | 2), n.elementType = Ht, n.lanes = d, n;
      case Ue:
        return n = ja(13, l, r, c), n.elementType = Ue, n.lanes = d, n;
      case At:
        return n = ja(19, l, r, c), n.elementType = At, n.lanes = d, n;
      case Te:
        return Pl(l, c, d, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case Jt:
            m = 10;
            break e;
          case ln:
            m = 9;
            break e;
          case _t:
            m = 11;
            break e;
          case kt:
            m = 14;
            break e;
          case Ot:
            m = 16, o = null;
            break e;
        }
        throw Error(k(130, n == null ? n : typeof n, ""));
    }
    return r = ja(m, l, r, c), r.elementType = n, r.type = o, r.lanes = d, r;
  }
  function tl(n, r, l, o) {
    return n = ja(7, n, o, r), n.lanes = l, n;
  }
  function Pl(n, r, l, o) {
    return n = ja(22, n, o, r), n.elementType = Te, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function qd(n, r, l) {
    return n = ja(6, n, null, r), n.lanes = l, n;
  }
  function ff(n, r, l) {
    return r = ja(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function vh(n, r, l, o, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ku(0), this.expirationTimes = Ku(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ku(0), this.identifierPrefix = o, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function df(n, r, l, o, c, d, m, E, R) {
    return n = new vh(n, r, l, E, R), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = ja(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: o, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, bd(d), n;
  }
  function Ry(n, r, l) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: dt, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: l };
  }
  function Xd(n) {
    if (!n) return Cr;
    n = n._reactInternals;
    e: {
      if (Ze(n) !== n || n.tag !== 1) throw Error(k(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (Mn(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(k(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (Mn(l)) return ss(n, l, r);
    }
    return r;
  }
  function hh(n, r, l, o, c, d, m, E, R) {
    return n = df(l, o, !0, n, c, d, m, E, R), n.context = Xd(null), l = n.current, o = Hn(), c = Oi(l), d = Xi(o, c), d.callback = r ?? null, Ll(l, d, c), n.current.lanes = c, Pi(n, c, o), na(n, o), n;
  }
  function pf(n, r, l, o) {
    var c = r.current, d = Hn(), m = Oi(c);
    return l = Xd(l), r.context === null ? r.context = l : r.pendingContext = l, r = Xi(d, m), r.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (r.callback = o), n = Ll(c, r, m), n !== null && (zr(n, c, m, d), Lc(n, c, m)), m;
  }
  function vf(n) {
    if (n = n.current, !n.child) return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function Kd(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function hf(n, r) {
    Kd(n, r), (n = n.alternate) && Kd(n, r);
  }
  function mh() {
    return null;
  }
  var zu = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function Jd(n) {
    this._internalRoot = n;
  }
  mf.prototype.render = Jd.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null) throw Error(k(409));
    pf(n, r, null, null);
  }, mf.prototype.unmount = Jd.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Lu(function() {
        pf(null, n, null, null);
      }), r[Qi] = null;
    }
  };
  function mf(n) {
    this._internalRoot = n;
  }
  mf.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = We();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < In.length && r !== 0 && r < In[l].priority; l++) ;
      In.splice(l, 0, n), l === 0 && qo(n);
    }
  };
  function Zd(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function yf(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function yh() {
  }
  function Ty(n, r, l, o, c) {
    if (c) {
      if (typeof o == "function") {
        var d = o;
        o = function() {
          var F = vf(m);
          d.call(F);
        };
      }
      var m = hh(r, o, n, 0, null, !1, !1, "", yh);
      return n._reactRootContainer = m, n[Qi] = m.current, oo(n.nodeType === 8 ? n.parentNode : n), Lu(), m;
    }
    for (; c = n.lastChild; ) n.removeChild(c);
    if (typeof o == "function") {
      var E = o;
      o = function() {
        var F = vf(R);
        E.call(F);
      };
    }
    var R = df(n, 0, !1, null, null, !1, !1, "", yh);
    return n._reactRootContainer = R, n[Qi] = R.current, oo(n.nodeType === 8 ? n.parentNode : n), Lu(function() {
      pf(r, R, l, o);
    }), R;
  }
  function Vs(n, r, l, o, c) {
    var d = l._reactRootContainer;
    if (d) {
      var m = d;
      if (typeof c == "function") {
        var E = c;
        c = function() {
          var R = vf(m);
          E.call(R);
        };
      }
      pf(r, m, n, c);
    } else m = Ty(l, r, n, c, o);
    return vf(m);
  }
  bt = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = Xa(r.pendingLanes);
          l !== 0 && (Vi(r, l | 1), na(r, et()), !(xt & 6) && (Ro = et() + 500, xi()));
        }
        break;
      case 13:
        Lu(function() {
          var o = va(n, 1);
          if (o !== null) {
            var c = Hn();
            zr(o, n, 1, c);
          }
        }), hf(n, 1);
    }
  }, Wo = function(n) {
    if (n.tag === 13) {
      var r = va(n, 134217728);
      if (r !== null) {
        var l = Hn();
        zr(r, n, 134217728, l);
      }
      hf(n, 134217728);
    }
  }, vi = function(n) {
    if (n.tag === 13) {
      var r = Oi(n), l = va(n, r);
      if (l !== null) {
        var o = Hn();
        zr(l, n, r, o);
      }
      hf(n, r);
    }
  }, We = function() {
    return Nt;
  }, Zu = function(n, r) {
    var l = Nt;
    try {
      return Nt = n, r();
    } finally {
      Nt = l;
    }
  }, It = function(n, r, l) {
    switch (r) {
      case "input":
        if (Ir(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; ) l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var o = l[r];
            if (o !== n && o.form === n.form) {
              var c = mn(o);
              if (!c) throw Error(k(90));
              br(o), Ir(o, c);
            }
          }
        }
        break;
      case "textarea":
        Ia(n, l);
        break;
      case "select":
        r = l.value, r != null && xn(n, !!l.multiple, r, !1);
    }
  }, eu = Yd, pl = Lu;
  var by = { usingClientEntryPoint: !1, Events: [Me, ti, mn, Hi, Zl, Yd] }, Bs = { findFiberByHostInstance: vu, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, gh = { bundleType: Bs.bundleType, version: Bs.version, rendererPackageName: Bs.rendererPackageName, rendererConfig: Bs.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: yt.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = Rn(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Bs.findFiberByHostInstance || mh, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Vl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Vl.isDisabled && Vl.supportsFiber) try {
      ml = Vl.inject(gh), Yr = Vl;
    } catch {
    }
  }
  return Ba.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = by, Ba.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Zd(r)) throw Error(k(200));
    return Ry(n, r, null, l);
  }, Ba.createRoot = function(n, r) {
    if (!Zd(n)) throw Error(k(299));
    var l = !1, o = "", c = zu;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = df(n, 1, !1, null, null, l, !1, o, c), n[Qi] = r.current, oo(n.nodeType === 8 ? n.parentNode : n), new Jd(r);
  }, Ba.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(k(188)) : (n = Object.keys(n).join(","), Error(k(268, n)));
    return n = Rn(r), n = n === null ? null : n.stateNode, n;
  }, Ba.flushSync = function(n) {
    return Lu(n);
  }, Ba.hydrate = function(n, r, l) {
    if (!yf(r)) throw Error(k(200));
    return Vs(null, n, r, !0, l);
  }, Ba.hydrateRoot = function(n, r, l) {
    if (!Zd(n)) throw Error(k(405));
    var o = l != null && l.hydratedSources || null, c = !1, d = "", m = zu;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (m = l.onRecoverableError)), r = hh(r, null, n, 1, l ?? null, c, !1, d, m), n[Qi] = r.current, oo(n), o) for (n = 0; n < o.length; n++) l = o[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
      l,
      c
    );
    return new mf(r);
  }, Ba.render = function(n, r, l) {
    if (!yf(r)) throw Error(k(200));
    return Vs(null, n, r, !1, l);
  }, Ba.unmountComponentAtNode = function(n) {
    if (!yf(n)) throw Error(k(40));
    return n._reactRootContainer ? (Lu(function() {
      Vs(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Qi] = null;
      });
    }), !0) : !1;
  }, Ba.unstable_batchedUpdates = Yd, Ba.unstable_renderSubtreeIntoContainer = function(n, r, l, o) {
    if (!yf(l)) throw Error(k(200));
    if (n == null || n._reactInternals === void 0) throw Error(k(38));
    return Vs(n, r, l, !1, o);
  }, Ba.version = "18.3.1-next-f1338f8080-20240426", Ba;
}
var $a = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var SR;
function Tk() {
  return SR || (SR = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var T = av(), O = _R(), k = T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ge = !1;
    function Re(e) {
      ge = e;
    }
    function ee(e) {
      if (!ge) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        Ne("warn", e, a);
      }
    }
    function g(e) {
      if (!ge) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        Ne("error", e, a);
      }
    }
    function Ne(e, t, a) {
      {
        var i = k.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var G = 0, Y = 1, be = 2, re = 3, we = 4, fe = 5, Xe = 6, Et = 7, mt = 8, fn = 9, ht = 10, Ke = 11, yt = 12, Le = 13, dt = 14, $e = 15, an = 16, Ht = 17, Jt = 18, ln = 19, _t = 21, Ue = 22, At = 23, kt = 24, Ot = 25, Te = !0, ne = !1, _e = !1, le = !1, D = !1, $ = !0, Ie = !0, Ve = !0, ot = !0, at = /* @__PURE__ */ new Set(), nt = {}, it = {};
    function st(e, t) {
      Bt(e, t), Bt(e + "Capture", t);
    }
    function Bt(e, t) {
      nt[e] && g("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), nt[e] = t;
      {
        var a = e.toLowerCase();
        it[a] = e, e === "onDoubleClick" && (it.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        at.add(t[i]);
    }
    var On = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", br = Object.prototype.hasOwnProperty;
    function Cn(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function nr(e) {
      try {
        return Vn(e), !1;
      } catch {
        return !0;
      }
    }
    function Vn(e) {
      return "" + e;
    }
    function Bn(e, t) {
      if (nr(e))
        return g("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Cn(e)), Vn(e);
    }
    function Ir(e) {
      if (nr(e))
        return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Cn(e)), Vn(e);
    }
    function si(e, t) {
      if (nr(e))
        return g("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Cn(e)), Vn(e);
    }
    function oa(e, t) {
      if (nr(e))
        return g("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Cn(e)), Vn(e);
    }
    function qn(e) {
      if (nr(e))
        return g("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Cn(e)), Vn(e);
    }
    function xn(e) {
      if (nr(e))
        return g("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Cn(e)), Vn(e);
    }
    var $n = 0, gr = 1, Ia = 2, Nn = 3, Sr = 4, sa = 5, Ya = 6, ci = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", ae = ci + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", ke = new RegExp("^[" + ci + "][" + ae + "]*$"), lt = {}, Ft = {};
    function Zt(e) {
      return br.call(Ft, e) ? !0 : br.call(lt, e) ? !1 : ke.test(e) ? (Ft[e] = !0, !0) : (lt[e] = !0, g("Invalid attribute name: `%s`", e), !1);
    }
    function vn(e, t, a) {
      return t !== null ? t.type === $n : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function un(e, t, a, i) {
      if (a !== null && a.type === $n)
        return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (i)
            return !1;
          if (a !== null)
            return !a.acceptsBooleans;
          var u = e.toLowerCase().slice(0, 5);
          return u !== "data-" && u !== "aria-";
        }
        default:
          return !1;
      }
    }
    function Xn(e, t, a, i) {
      if (t === null || typeof t > "u" || un(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case Nn:
            return !t;
          case Sr:
            return t === !1;
          case sa:
            return isNaN(t);
          case Ya:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function en(e) {
      return It.hasOwnProperty(e) ? It[e] : null;
    }
    function $t(e, t, a, i, u, s, f) {
      this.acceptsBooleans = t === Ia || t === Nn || t === Sr, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var It = {}, ca = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    ca.forEach(function(e) {
      It[e] = new $t(
        e,
        $n,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], a = e[1];
      It[t] = new $t(
        t,
        gr,
        !1,
        // mustUseProperty
        a,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      It[e] = new $t(
        e,
        Ia,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      It[e] = new $t(
        e,
        Ia,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      It[e] = new $t(
        e,
        Nn,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      It[e] = new $t(
        e,
        Nn,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      It[e] = new $t(
        e,
        Sr,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      It[e] = new $t(
        e,
        Ya,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      It[e] = new $t(
        e,
        sa,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Er = /[\-\:]([a-z])/g, Ra = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Er, Ra);
      It[t] = new $t(
        t,
        gr,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Er, Ra);
      It[t] = new $t(
        t,
        gr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Er, Ra);
      It[t] = new $t(
        t,
        gr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      It[e] = new $t(
        e,
        gr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Hi = "xlinkHref";
    It[Hi] = new $t(
      "xlinkHref",
      gr,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      It[e] = new $t(
        e,
        gr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var Zl = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, eu = !1;
    function pl(e) {
      !eu && Zl.test(e) && (eu = !0, g("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function vl(e, t, a, i) {
      if (i.mustUseProperty) {
        var u = i.propertyName;
        return e[u];
      } else {
        Bn(a, t), i.sanitizeURL && pl("" + a);
        var s = i.attributeName, f = null;
        if (i.type === Sr) {
          if (e.hasAttribute(s)) {
            var p = e.getAttribute(s);
            return p === "" ? !0 : Xn(t, a, i, !1) ? p : p === "" + a ? a : p;
          }
        } else if (e.hasAttribute(s)) {
          if (Xn(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === Nn)
            return a;
          f = e.getAttribute(s);
        }
        return Xn(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function tu(e, t, a, i) {
      {
        if (!Zt(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var u = e.getAttribute(t);
        return Bn(a, t), u === "" + a ? a : u;
      }
    }
    function wr(e, t, a, i) {
      var u = en(t);
      if (!vn(t, u, i)) {
        if (Xn(t, a, u, i) && (a = null), i || u === null) {
          if (Zt(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (Bn(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var f = u.mustUseProperty;
        if (f) {
          var p = u.propertyName;
          if (a === null) {
            var v = u.type;
            e[p] = v === Nn ? !1 : "";
          } else
            e[p] = a;
          return;
        }
        var y = u.attributeName, S = u.attributeNamespace;
        if (a === null)
          e.removeAttribute(y);
        else {
          var _ = u.type, b;
          _ === Nn || _ === Sr && a === !0 ? b = "" : (Bn(a, y), b = "" + a, u.sanitizeURL && pl(b.toString())), S ? e.setAttributeNS(S, y, b) : e.setAttribute(y, b);
        }
      }
    }
    var _r = Symbol.for("react.element"), rr = Symbol.for("react.portal"), fi = Symbol.for("react.fragment"), Qa = Symbol.for("react.strict_mode"), di = Symbol.for("react.profiler"), pi = Symbol.for("react.provider"), x = Symbol.for("react.context"), Q = Symbol.for("react.forward_ref"), oe = Symbol.for("react.suspense"), ye = Symbol.for("react.suspense_list"), Ze = Symbol.for("react.memo"), Ge = Symbol.for("react.lazy"), pt = Symbol.for("react.scope"), ct = Symbol.for("react.debug_trace_mode"), Rn = Symbol.for("react.offscreen"), tn = Symbol.for("react.legacy_hidden"), on = Symbol.for("react.cache"), ar = Symbol.for("react.tracing_marker"), Wa = Symbol.iterator, Ga = "@@iterator";
    function et(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Wa && e[Wa] || e[Ga];
      return typeof t == "function" ? t : null;
    }
    var rt = Object.assign, qa = 0, nu, ru, hl, Wu, ml, Yr, Qo;
    function kr() {
    }
    kr.__reactDisabledLog = !0;
    function oc() {
      {
        if (qa === 0) {
          nu = console.log, ru = console.info, hl = console.warn, Wu = console.error, ml = console.group, Yr = console.groupCollapsed, Qo = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: kr,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        qa++;
      }
    }
    function sc() {
      {
        if (qa--, qa === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: rt({}, e, {
              value: nu
            }),
            info: rt({}, e, {
              value: ru
            }),
            warn: rt({}, e, {
              value: hl
            }),
            error: rt({}, e, {
              value: Wu
            }),
            group: rt({}, e, {
              value: ml
            }),
            groupCollapsed: rt({}, e, {
              value: Yr
            }),
            groupEnd: rt({}, e, {
              value: Qo
            })
          });
        }
        qa < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Gu = k.ReactCurrentDispatcher, yl;
    function fa(e, t, a) {
      {
        if (yl === void 0)
          try {
            throw Error();
          } catch (u) {
            var i = u.stack.trim().match(/\n( *(at )?)/);
            yl = i && i[1] || "";
          }
        return `
` + yl + e;
      }
    }
    var Xa = !1, Ka;
    {
      var qu = typeof WeakMap == "function" ? WeakMap : Map;
      Ka = new qu();
    }
    function au(e, t) {
      if (!e || Xa)
        return "";
      {
        var a = Ka.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      Xa = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = Gu.current, Gu.current = null, oc();
      try {
        if (t) {
          var f = function() {
            throw Error();
          };
          if (Object.defineProperty(f.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(f, []);
            } catch (H) {
              i = H;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (H) {
              i = H;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (H) {
            i = H;
          }
          e();
        }
      } catch (H) {
        if (H && i && typeof H.stack == "string") {
          for (var p = H.stack.split(`
`), v = i.stack.split(`
`), y = p.length - 1, S = v.length - 1; y >= 1 && S >= 0 && p[y] !== v[S]; )
            S--;
          for (; y >= 1 && S >= 0; y--, S--)
            if (p[y] !== v[S]) {
              if (y !== 1 || S !== 1)
                do
                  if (y--, S--, S < 0 || p[y] !== v[S]) {
                    var _ = `
` + p[y].replace(" at new ", " at ");
                    return e.displayName && _.includes("<anonymous>") && (_ = _.replace("<anonymous>", e.displayName)), typeof e == "function" && Ka.set(e, _), _;
                  }
                while (y >= 1 && S >= 0);
              break;
            }
        }
      } finally {
        Xa = !1, Gu.current = s, sc(), Error.prepareStackTrace = u;
      }
      var b = e ? e.displayName || e.name : "", j = b ? fa(b) : "";
      return typeof e == "function" && Ka.set(e, j), j;
    }
    function gl(e, t, a) {
      return au(e, !0);
    }
    function Xu(e, t, a) {
      return au(e, !1);
    }
    function Ku(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Pi(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return au(e, Ku(e));
      if (typeof e == "string")
        return fa(e);
      switch (e) {
        case oe:
          return fa("Suspense");
        case ye:
          return fa("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Q:
            return Xu(e.render);
          case Ze:
            return Pi(e.type, t, a);
          case Ge: {
            var i = e, u = i._payload, s = i._init;
            try {
              return Pi(s(u), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function Gf(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case fe:
          return fa(e.type);
        case an:
          return fa("Lazy");
        case Le:
          return fa("Suspense");
        case ln:
          return fa("SuspenseList");
        case G:
        case be:
        case $e:
          return Xu(e.type);
        case Ke:
          return Xu(e.type.render);
        case Y:
          return gl(e.type);
        default:
          return "";
      }
    }
    function Vi(e) {
      try {
        var t = "", a = e;
        do
          t += Gf(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function Nt(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var u = t.displayName || t.name || "";
      return u !== "" ? a + "(" + u + ")" : a;
    }
    function Ju(e) {
      return e.displayName || "Context";
    }
    function bt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && g("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case fi:
          return "Fragment";
        case rr:
          return "Portal";
        case di:
          return "Profiler";
        case Qa:
          return "StrictMode";
        case oe:
          return "Suspense";
        case ye:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case x:
            var t = e;
            return Ju(t) + ".Consumer";
          case pi:
            var a = e;
            return Ju(a._context) + ".Provider";
          case Q:
            return Nt(e, e.render, "ForwardRef");
          case Ze:
            var i = e.displayName || null;
            return i !== null ? i : bt(e.type) || "Memo";
          case Ge: {
            var u = e, s = u._payload, f = u._init;
            try {
              return bt(f(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function Wo(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function vi(e) {
      return e.displayName || "Context";
    }
    function We(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case kt:
          return "Cache";
        case fn:
          var i = a;
          return vi(i) + ".Consumer";
        case ht:
          var u = a;
          return vi(u._context) + ".Provider";
        case Jt:
          return "DehydratedFragment";
        case Ke:
          return Wo(a, a.render, "ForwardRef");
        case Et:
          return "Fragment";
        case fe:
          return a;
        case we:
          return "Portal";
        case re:
          return "Root";
        case Xe:
          return "Text";
        case an:
          return bt(a);
        case mt:
          return a === Qa ? "StrictMode" : "Mode";
        case Ue:
          return "Offscreen";
        case yt:
          return "Profiler";
        case _t:
          return "Scope";
        case Le:
          return "Suspense";
        case ln:
          return "SuspenseList";
        case Ot:
          return "TracingMarker";
        case Y:
        case G:
        case Ht:
        case be:
        case dt:
        case $e:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var Zu = k.ReactDebugCurrentFrame, ir = null, hi = !1;
    function Dr() {
      {
        if (ir === null)
          return null;
        var e = ir._debugOwner;
        if (e !== null && typeof e < "u")
          return We(e);
      }
      return null;
    }
    function mi() {
      return ir === null ? "" : Vi(ir);
    }
    function sn() {
      Zu.getCurrentStack = null, ir = null, hi = !1;
    }
    function Yt(e) {
      Zu.getCurrentStack = e === null ? null : mi, ir = e, hi = !1;
    }
    function Sl() {
      return ir;
    }
    function In(e) {
      hi = e;
    }
    function Or(e) {
      return "" + e;
    }
    function Ta(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return xn(e), e;
        default:
          return "";
      }
    }
    var iu = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function Go(e, t) {
      iu[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || g("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || g("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function qo(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function El(e) {
      return e._valueTracker;
    }
    function lu(e) {
      e._valueTracker = null;
    }
    function qf(e) {
      var t = "";
      return e && (qo(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function ba(e) {
      var t = qo(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      xn(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var u = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return u.call(this);
          },
          set: function(p) {
            xn(p), i = "" + p, s.call(this, p);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(p) {
            xn(p), i = "" + p;
          },
          stopTracking: function() {
            lu(e), delete e[t];
          }
        };
        return f;
      }
    }
    function Ja(e) {
      El(e) || (e._valueTracker = ba(e));
    }
    function yi(e) {
      if (!e)
        return !1;
      var t = El(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = qf(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function wa(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var eo = !1, to = !1, Cl = !1, uu = !1;
    function no(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function ro(e, t) {
      var a = e, i = t.checked, u = rt({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return u;
    }
    function Za(e, t) {
      Go("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !to && (g("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Dr() || "A component", t.type), to = !0), t.value !== void 0 && t.defaultValue !== void 0 && !eo && (g("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Dr() || "A component", t.type), eo = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: Ta(t.value != null ? t.value : i),
        controlled: no(t)
      };
    }
    function h(e, t) {
      var a = e, i = t.checked;
      i != null && wr(a, "checked", i, !1);
    }
    function C(e, t) {
      var a = e;
      {
        var i = no(t);
        !a._wrapperState.controlled && i && !uu && (g("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), uu = !0), a._wrapperState.controlled && !i && !Cl && (g("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Cl = !0);
      }
      h(e, t);
      var u = Ta(t.value), s = t.type;
      if (u != null)
        s === "number" ? (u === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != u) && (a.value = Or(u)) : a.value !== Or(u) && (a.value = Or(u));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? je(a, t.type, u) : t.hasOwnProperty("defaultValue") && je(a, t.type, Ta(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function A(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var u = t.type, s = u === "submit" || u === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f = Or(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
      }
      var p = i.name;
      p !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, p !== "" && (i.name = p);
    }
    function P(e, t) {
      var a = e;
      C(a, t), te(a, t);
    }
    function te(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        Bn(a, "name");
        for (var u = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < u.length; s++) {
          var f = u[s];
          if (!(f === e || f.form !== e.form)) {
            var p = jh(f);
            if (!p)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            yi(f), C(f, p);
          }
        }
      }
    }
    function je(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || wa(e.ownerDocument) !== e) && (a == null ? e.defaultValue = Or(e._wrapperState.initialValue) : e.defaultValue !== Or(a) && (e.defaultValue = Or(a)));
    }
    var ue = !1, He = !1, vt = !1;
    function wt(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? T.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || He || (He = !0, g("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (vt || (vt = !0, g("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !ue && (g("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), ue = !0);
    }
    function nn(e, t) {
      t.value != null && e.setAttribute("value", Or(Ta(t.value)));
    }
    var Qt = Array.isArray;
    function ut(e) {
      return Qt(e);
    }
    var Wt;
    Wt = !1;
    function hn() {
      var e = Dr();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var xl = ["value", "defaultValue"];
    function Xo(e) {
      {
        Go("select", e);
        for (var t = 0; t < xl.length; t++) {
          var a = xl[t];
          if (e[a] != null) {
            var i = ut(e[a]);
            e.multiple && !i ? g("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, hn()) : !e.multiple && i && g("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, hn());
          }
        }
      }
    }
    function Bi(e, t, a, i) {
      var u = e.options;
      if (t) {
        for (var s = a, f = {}, p = 0; p < s.length; p++)
          f["$" + s[p]] = !0;
        for (var v = 0; v < u.length; v++) {
          var y = f.hasOwnProperty("$" + u[v].value);
          u[v].selected !== y && (u[v].selected = y), y && i && (u[v].defaultSelected = !0);
        }
      } else {
        for (var S = Or(Ta(a)), _ = null, b = 0; b < u.length; b++) {
          if (u[b].value === S) {
            u[b].selected = !0, i && (u[b].defaultSelected = !0);
            return;
          }
          _ === null && !u[b].disabled && (_ = u[b]);
        }
        _ !== null && (_.selected = !0);
      }
    }
    function Ko(e, t) {
      return rt({}, t, {
        value: void 0
      });
    }
    function ou(e, t) {
      var a = e;
      Xo(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !Wt && (g("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Wt = !0);
    }
    function Xf(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? Bi(a, !!t.multiple, i, !1) : t.defaultValue != null && Bi(a, !!t.multiple, t.defaultValue, !0);
    }
    function cc(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? Bi(a, !!t.multiple, u, !1) : i !== !!t.multiple && (t.defaultValue != null ? Bi(a, !!t.multiple, t.defaultValue, !0) : Bi(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function Kf(e, t) {
      var a = e, i = t.value;
      i != null && Bi(a, !!t.multiple, i, !1);
    }
    var iv = !1;
    function Jf(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = rt({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: Or(a._wrapperState.initialValue)
      });
      return i;
    }
    function Zf(e, t) {
      var a = e;
      Go("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !iv && (g("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Dr() || "A component"), iv = !0);
      var i = t.value;
      if (i == null) {
        var u = t.children, s = t.defaultValue;
        if (u != null) {
          g("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (ut(u)) {
              if (u.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              u = u[0];
            }
            s = u;
          }
        }
        s == null && (s = ""), i = s;
      }
      a._wrapperState = {
        initialValue: Ta(i)
      };
    }
    function lv(e, t) {
      var a = e, i = Ta(t.value), u = Ta(t.defaultValue);
      if (i != null) {
        var s = Or(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      u != null && (a.defaultValue = Or(u));
    }
    function uv(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function ey(e, t) {
      lv(e, t);
    }
    var $i = "http://www.w3.org/1999/xhtml", ed = "http://www.w3.org/1998/Math/MathML", td = "http://www.w3.org/2000/svg";
    function nd(e) {
      switch (e) {
        case "svg":
          return td;
        case "math":
          return ed;
        default:
          return $i;
      }
    }
    function rd(e, t) {
      return e == null || e === $i ? nd(t) : e === td && t === "foreignObject" ? $i : e;
    }
    var ov = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, u);
        });
      } : e;
    }, fc, sv = ov(function(e, t) {
      if (e.namespaceURI === td && !("innerHTML" in e)) {
        fc = fc || document.createElement("div"), fc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = fc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), Qr = 1, Ii = 3, Ln = 8, Yi = 9, ad = 11, ao = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === Ii) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, Jo = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, Zo = {
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
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function cv(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var fv = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Zo).forEach(function(e) {
      fv.forEach(function(t) {
        Zo[cv(t, e)] = Zo[e];
      });
    });
    function dc(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(Zo.hasOwnProperty(e) && Zo[e]) ? t + "px" : (oa(t, e), ("" + t).trim());
    }
    var dv = /([A-Z])/g, pv = /^ms-/;
    function io(e) {
      return e.replace(dv, "-$1").toLowerCase().replace(pv, "-ms-");
    }
    var vv = function() {
    };
    {
      var ty = /^(?:webkit|moz|o)[A-Z]/, ny = /^-ms-/, hv = /-(.)/g, id = /;\s*$/, gi = {}, su = {}, mv = !1, es = !1, ry = function(e) {
        return e.replace(hv, function(t, a) {
          return a.toUpperCase();
        });
      }, yv = function(e) {
        gi.hasOwnProperty(e) && gi[e] || (gi[e] = !0, g(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          ry(e.replace(ny, "ms-"))
        ));
      }, ld = function(e) {
        gi.hasOwnProperty(e) && gi[e] || (gi[e] = !0, g("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, ud = function(e, t) {
        su.hasOwnProperty(t) && su[t] || (su[t] = !0, g(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(id, "")));
      }, gv = function(e, t) {
        mv || (mv = !0, g("`NaN` is an invalid value for the `%s` css style property.", e));
      }, Sv = function(e, t) {
        es || (es = !0, g("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      vv = function(e, t) {
        e.indexOf("-") > -1 ? yv(e) : ty.test(e) ? ld(e) : id.test(t) && ud(e, t), typeof t == "number" && (isNaN(t) ? gv(e, t) : isFinite(t) || Sv(e, t));
      };
    }
    var Ev = vv;
    function ay(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var u = e[i];
            if (u != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : io(i)) + ":", t += dc(i, u, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function Cv(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var u = i.indexOf("--") === 0;
          u || Ev(i, t[i]);
          var s = dc(i, t[i], u);
          i === "float" && (i = "cssFloat"), u ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function iy(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function xv(e) {
      var t = {};
      for (var a in e)
        for (var i = Jo[a] || [a], u = 0; u < i.length; u++)
          t[i[u]] = a;
      return t;
    }
    function ly(e, t) {
      {
        if (!t)
          return;
        var a = xv(e), i = xv(t), u = {};
        for (var s in a) {
          var f = a[s], p = i[s];
          if (p && f !== p) {
            var v = f + "," + p;
            if (u[v])
              continue;
            u[v] = !0, g("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", iy(e[f]) ? "Removing" : "Updating", f, p);
          }
        }
      }
    }
    var ei = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
      // NOTE: menuitem's close tag should be omitted, but that causes problems.
    }, ts = rt({
      menuitem: !0
    }, ei), Rv = "__html";
    function pc(e, t) {
      if (t) {
        if (ts[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(Rv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && g("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function Rl(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
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
    var ns = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, vc = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, lo = {}, uy = new RegExp("^(aria)-[" + ae + "]*$"), uo = new RegExp("^(aria)[A-Z][" + ae + "]*$");
    function od(e, t) {
      {
        if (br.call(lo, t) && lo[t])
          return !0;
        if (uo.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = vc.hasOwnProperty(a) ? a : null;
          if (i == null)
            return g("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), lo[t] = !0, !0;
          if (t !== i)
            return g("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), lo[t] = !0, !0;
        }
        if (uy.test(t)) {
          var u = t.toLowerCase(), s = vc.hasOwnProperty(u) ? u : null;
          if (s == null)
            return lo[t] = !0, !1;
          if (t !== s)
            return g("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), lo[t] = !0, !0;
        }
      }
      return !0;
    }
    function rs(e, t) {
      {
        var a = [];
        for (var i in t) {
          var u = od(e, i);
          u || a.push(i);
        }
        var s = a.map(function(f) {
          return "`" + f + "`";
        }).join(", ");
        a.length === 1 ? g("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && g("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function sd(e, t) {
      Rl(e, t) || rs(e, t);
    }
    var cd = !1;
    function hc(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !cd && (cd = !0, e === "select" && t.multiple ? g("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : g("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var cu = function() {
    };
    {
      var lr = {}, fd = /^on./, mc = /^on[^A-Z]/, Tv = new RegExp("^(aria)-[" + ae + "]*$"), bv = new RegExp("^(aria)[A-Z][" + ae + "]*$");
      cu = function(e, t, a, i) {
        if (br.call(lr, t) && lr[t])
          return !0;
        var u = t.toLowerCase();
        if (u === "onfocusin" || u === "onfocusout")
          return g("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), lr[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, f = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var p = f.hasOwnProperty(u) ? f[u] : null;
          if (p != null)
            return g("Invalid event handler property `%s`. Did you mean `%s`?", t, p), lr[t] = !0, !0;
          if (fd.test(t))
            return g("Unknown event handler property `%s`. It will be ignored.", t), lr[t] = !0, !0;
        } else if (fd.test(t))
          return mc.test(t) && g("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), lr[t] = !0, !0;
        if (Tv.test(t) || bv.test(t))
          return !0;
        if (u === "innerhtml")
          return g("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), lr[t] = !0, !0;
        if (u === "aria")
          return g("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), lr[t] = !0, !0;
        if (u === "is" && a !== null && a !== void 0 && typeof a != "string")
          return g("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), lr[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return g("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), lr[t] = !0, !0;
        var v = en(t), y = v !== null && v.type === $n;
        if (ns.hasOwnProperty(u)) {
          var S = ns[u];
          if (S !== t)
            return g("Invalid DOM property `%s`. Did you mean `%s`?", t, S), lr[t] = !0, !0;
        } else if (!y && t !== u)
          return g("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), lr[t] = !0, !0;
        return typeof a == "boolean" && un(t, a, v, !1) ? (a ? g('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : g('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), lr[t] = !0, !0) : y ? !0 : un(t, a, v, !1) ? (lr[t] = !0, !1) : ((a === "false" || a === "true") && v !== null && v.type === Nn && (g("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), lr[t] = !0), !0);
      };
    }
    var wv = function(e, t, a) {
      {
        var i = [];
        for (var u in t) {
          var s = cu(e, u, t[u], a);
          s || i.push(u);
        }
        var f = i.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        i.length === 1 ? g("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && g("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function _v(e, t, a) {
      Rl(e, t) || wv(e, t, a);
    }
    var dd = 1, yc = 2, _a = 4, pd = dd | yc | _a, fu = null;
    function oy(e) {
      fu !== null && g("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), fu = e;
    }
    function sy() {
      fu === null && g("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), fu = null;
    }
    function as(e) {
      return e === fu;
    }
    function vd(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Ii ? t.parentNode : t;
    }
    var gc = null, du = null, Pt = null;
    function Sc(e) {
      var t = Do(e);
      if (t) {
        if (typeof gc != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = jh(a);
          gc(t.stateNode, t.type, i);
        }
      }
    }
    function Ec(e) {
      gc = e;
    }
    function oo(e) {
      du ? Pt ? Pt.push(e) : Pt = [e] : du = e;
    }
    function kv() {
      return du !== null || Pt !== null;
    }
    function Cc() {
      if (du) {
        var e = du, t = Pt;
        if (du = null, Pt = null, Sc(e), t)
          for (var a = 0; a < t.length; a++)
            Sc(t[a]);
      }
    }
    var so = function(e, t) {
      return e(t);
    }, is = function() {
    }, Tl = !1;
    function Dv() {
      var e = kv();
      e && (is(), Cc());
    }
    function Ov(e, t, a) {
      if (Tl)
        return e(t, a);
      Tl = !0;
      try {
        return so(e, t, a);
      } finally {
        Tl = !1, Dv();
      }
    }
    function cy(e, t, a) {
      so = e, is = a;
    }
    function Nv(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function xc(e, t, a) {
      switch (e) {
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
          return !!(a.disabled && Nv(t));
        default:
          return !1;
      }
    }
    function bl(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = jh(a);
      if (i === null)
        return null;
      var u = i[t];
      if (xc(t, e.type, i))
        return null;
      if (u && typeof u != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof u + "` type.");
      return u;
    }
    var ls = !1;
    if (On)
      try {
        var pu = {};
        Object.defineProperty(pu, "passive", {
          get: function() {
            ls = !0;
          }
        }), window.addEventListener("test", pu, pu), window.removeEventListener("test", pu, pu);
      } catch {
        ls = !1;
      }
    function Rc(e, t, a, i, u, s, f, p, v) {
      var y = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, y);
      } catch (S) {
        this.onError(S);
      }
    }
    var Tc = Rc;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var hd = document.createElement("react");
      Tc = function(t, a, i, u, s, f, p, v, y) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var S = document.createEvent("Event"), _ = !1, b = !0, j = window.event, H = Object.getOwnPropertyDescriptor(window, "event");
        function V() {
          hd.removeEventListener(B, Ae, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = j);
        }
        var ce = Array.prototype.slice.call(arguments, 3);
        function Ae() {
          _ = !0, V(), a.apply(i, ce), b = !1;
        }
        var De, Tt = !1, gt = !1;
        function L(M) {
          if (De = M.error, Tt = !0, De === null && M.colno === 0 && M.lineno === 0 && (gt = !0), M.defaultPrevented && De != null && typeof De == "object")
            try {
              De._suppressLogging = !0;
            } catch {
            }
        }
        var B = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", L), hd.addEventListener(B, Ae, !1), S.initEvent(B, !1, !1), hd.dispatchEvent(S), H && Object.defineProperty(window, "event", H), _ && b && (Tt ? gt && (De = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : De = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(De)), window.removeEventListener("error", L), !_)
          return V(), Rc.apply(this, arguments);
      };
    }
    var Lv = Tc, co = !1, bc = null, fo = !1, Si = null, Mv = {
      onError: function(e) {
        co = !0, bc = e;
      }
    };
    function wl(e, t, a, i, u, s, f, p, v) {
      co = !1, bc = null, Lv.apply(Mv, arguments);
    }
    function Ei(e, t, a, i, u, s, f, p, v) {
      if (wl.apply(this, arguments), co) {
        var y = os();
        fo || (fo = !0, Si = y);
      }
    }
    function us() {
      if (fo) {
        var e = Si;
        throw fo = !1, Si = null, e;
      }
    }
    function Qi() {
      return co;
    }
    function os() {
      if (co) {
        var e = bc;
        return co = !1, bc = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function po(e) {
      return e._reactInternals;
    }
    function fy(e) {
      return e._reactInternals !== void 0;
    }
    function vu(e, t) {
      e._reactInternals = t;
    }
    var Me = (
      /*                      */
      0
    ), ti = (
      /*                */
      1
    ), mn = (
      /*                    */
      2
    ), Ct = (
      /*                       */
      4
    ), ka = (
      /*                */
      16
    ), Da = (
      /*                 */
      32
    ), rn = (
      /*                     */
      64
    ), Oe = (
      /*                   */
      128
    ), Cr = (
      /*            */
      256
    ), En = (
      /*                          */
      512
    ), Yn = (
      /*                     */
      1024
    ), Wr = (
      /*                      */
      2048
    ), Gr = (
      /*                    */
      4096
    ), Mn = (
      /*                   */
      8192
    ), vo = (
      /*             */
      16384
    ), zv = (
      /*               */
      32767
    ), ss = (
      /*                   */
      32768
    ), Kn = (
      /*                */
      65536
    ), wc = (
      /* */
      131072
    ), Ci = (
      /*                       */
      1048576
    ), ho = (
      /*                    */
      2097152
    ), Wi = (
      /*                 */
      4194304
    ), _c = (
      /*                */
      8388608
    ), _l = (
      /*               */
      16777216
    ), xi = (
      /*              */
      33554432
    ), kl = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      Ct | Yn | 0
    ), Dl = mn | Ct | ka | Da | En | Gr | Mn, Ol = Ct | rn | En | Mn, Gi = Wr | ka, zn = Wi | _c | ho, Oa = k.ReactCurrentOwner;
    function da(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (mn | Gr)) !== Me && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === re ? a : null;
    }
    function Ri(e) {
      if (e.tag === Le) {
        var t = e.memoizedState;
        if (t === null) {
          var a = e.alternate;
          a !== null && (t = a.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function Ti(e) {
      return e.tag === re ? e.stateNode.containerInfo : null;
    }
    function hu(e) {
      return da(e) === e;
    }
    function Uv(e) {
      {
        var t = Oa.current;
        if (t !== null && t.tag === Y) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || g("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", We(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var u = po(e);
      return u ? da(u) === u : !1;
    }
    function kc(e) {
      if (da(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function Dc(e) {
      var t = e.alternate;
      if (!t) {
        var a = da(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, u = t; ; ) {
        var s = i.return;
        if (s === null)
          break;
        var f = s.alternate;
        if (f === null) {
          var p = s.return;
          if (p !== null) {
            i = u = p;
            continue;
          }
          break;
        }
        if (s.child === f.child) {
          for (var v = s.child; v; ) {
            if (v === i)
              return kc(s), e;
            if (v === u)
              return kc(s), t;
            v = v.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== u.return)
          i = s, u = f;
        else {
          for (var y = !1, S = s.child; S; ) {
            if (S === i) {
              y = !0, i = s, u = f;
              break;
            }
            if (S === u) {
              y = !0, u = s, i = f;
              break;
            }
            S = S.sibling;
          }
          if (!y) {
            for (S = f.child; S; ) {
              if (S === i) {
                y = !0, i = f, u = s;
                break;
              }
              if (S === u) {
                y = !0, u = f, i = s;
                break;
              }
              S = S.sibling;
            }
            if (!y)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== u)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== re)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function qr(e) {
      var t = Dc(e);
      return t !== null ? Xr(t) : null;
    }
    function Xr(e) {
      if (e.tag === fe || e.tag === Xe)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = Xr(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function dn(e) {
      var t = Dc(e);
      return t !== null ? Na(t) : null;
    }
    function Na(e) {
      if (e.tag === fe || e.tag === Xe)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== we) {
          var a = Na(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var md = O.unstable_scheduleCallback, jv = O.unstable_cancelCallback, yd = O.unstable_shouldYield, gd = O.unstable_requestPaint, Qn = O.unstable_now, Oc = O.unstable_getCurrentPriorityLevel, cs = O.unstable_ImmediatePriority, Nl = O.unstable_UserBlockingPriority, qi = O.unstable_NormalPriority, dy = O.unstable_LowPriority, mu = O.unstable_IdlePriority, Nc = O.unstable_yieldValue, Av = O.unstable_setDisableYieldValue, yu = null, Tn = null, se = null, pa = !1, Kr = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function mo(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return g("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        Ie && (e = rt({}, e, {
          getLaneLabelMap: gu,
          injectProfilingHooks: La
        })), yu = t.inject(e), Tn = t;
      } catch (a) {
        g("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function Sd(e, t) {
      if (Tn && typeof Tn.onScheduleFiberRoot == "function")
        try {
          Tn.onScheduleFiberRoot(yu, e, t);
        } catch (a) {
          pa || (pa = !0, g("React instrumentation encountered an error: %s", a));
        }
    }
    function Ed(e, t) {
      if (Tn && typeof Tn.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & Oe) === Oe;
          if (Ve) {
            var i;
            switch (t) {
              case Nr:
                i = cs;
                break;
              case wi:
                i = Nl;
                break;
              case Ma:
                i = qi;
                break;
              case za:
                i = mu;
                break;
              default:
                i = qi;
                break;
            }
            Tn.onCommitFiberRoot(yu, e, i, a);
          }
        } catch (u) {
          pa || (pa = !0, g("React instrumentation encountered an error: %s", u));
        }
    }
    function Cd(e) {
      if (Tn && typeof Tn.onPostCommitFiberRoot == "function")
        try {
          Tn.onPostCommitFiberRoot(yu, e);
        } catch (t) {
          pa || (pa = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function xd(e) {
      if (Tn && typeof Tn.onCommitFiberUnmount == "function")
        try {
          Tn.onCommitFiberUnmount(yu, e);
        } catch (t) {
          pa || (pa = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function yn(e) {
      if (typeof Nc == "function" && (Av(e), Re(e)), Tn && typeof Tn.setStrictMode == "function")
        try {
          Tn.setStrictMode(yu, e);
        } catch (t) {
          pa || (pa = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function La(e) {
      se = e;
    }
    function gu() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < Cu; a++) {
          var i = Vv(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function Rd(e) {
      se !== null && typeof se.markCommitStarted == "function" && se.markCommitStarted(e);
    }
    function Td() {
      se !== null && typeof se.markCommitStopped == "function" && se.markCommitStopped();
    }
    function va(e) {
      se !== null && typeof se.markComponentRenderStarted == "function" && se.markComponentRenderStarted(e);
    }
    function ha() {
      se !== null && typeof se.markComponentRenderStopped == "function" && se.markComponentRenderStopped();
    }
    function bd(e) {
      se !== null && typeof se.markComponentPassiveEffectMountStarted == "function" && se.markComponentPassiveEffectMountStarted(e);
    }
    function Fv() {
      se !== null && typeof se.markComponentPassiveEffectMountStopped == "function" && se.markComponentPassiveEffectMountStopped();
    }
    function Xi(e) {
      se !== null && typeof se.markComponentPassiveEffectUnmountStarted == "function" && se.markComponentPassiveEffectUnmountStarted(e);
    }
    function Ll() {
      se !== null && typeof se.markComponentPassiveEffectUnmountStopped == "function" && se.markComponentPassiveEffectUnmountStopped();
    }
    function Lc(e) {
      se !== null && typeof se.markComponentLayoutEffectMountStarted == "function" && se.markComponentLayoutEffectMountStarted(e);
    }
    function Hv() {
      se !== null && typeof se.markComponentLayoutEffectMountStopped == "function" && se.markComponentLayoutEffectMountStopped();
    }
    function fs(e) {
      se !== null && typeof se.markComponentLayoutEffectUnmountStarted == "function" && se.markComponentLayoutEffectUnmountStarted(e);
    }
    function wd() {
      se !== null && typeof se.markComponentLayoutEffectUnmountStopped == "function" && se.markComponentLayoutEffectUnmountStopped();
    }
    function ds(e, t, a) {
      se !== null && typeof se.markComponentErrored == "function" && se.markComponentErrored(e, t, a);
    }
    function bi(e, t, a) {
      se !== null && typeof se.markComponentSuspended == "function" && se.markComponentSuspended(e, t, a);
    }
    function ps(e) {
      se !== null && typeof se.markLayoutEffectsStarted == "function" && se.markLayoutEffectsStarted(e);
    }
    function vs() {
      se !== null && typeof se.markLayoutEffectsStopped == "function" && se.markLayoutEffectsStopped();
    }
    function Su(e) {
      se !== null && typeof se.markPassiveEffectsStarted == "function" && se.markPassiveEffectsStarted(e);
    }
    function _d() {
      se !== null && typeof se.markPassiveEffectsStopped == "function" && se.markPassiveEffectsStopped();
    }
    function Eu(e) {
      se !== null && typeof se.markRenderStarted == "function" && se.markRenderStarted(e);
    }
    function Pv() {
      se !== null && typeof se.markRenderYielded == "function" && se.markRenderYielded();
    }
    function Mc() {
      se !== null && typeof se.markRenderStopped == "function" && se.markRenderStopped();
    }
    function gn(e) {
      se !== null && typeof se.markRenderScheduled == "function" && se.markRenderScheduled(e);
    }
    function zc(e, t) {
      se !== null && typeof se.markForceUpdateScheduled == "function" && se.markForceUpdateScheduled(e, t);
    }
    function hs(e, t) {
      se !== null && typeof se.markStateUpdateScheduled == "function" && se.markStateUpdateScheduled(e, t);
    }
    var ze = (
      /*                         */
      0
    ), ft = (
      /*                 */
      1
    ), Lt = (
      /*                    */
      2
    ), Gt = (
      /*               */
      8
    ), Mt = (
      /*              */
      16
    ), Un = Math.clz32 ? Math.clz32 : ms, Jn = Math.log, Uc = Math.LN2;
    function ms(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (Jn(t) / Uc | 0) | 0;
    }
    var Cu = 31, W = (
      /*                        */
      0
    ), Dt = (
      /*                          */
      0
    ), Be = (
      /*                        */
      1
    ), Ml = (
      /*    */
      2
    ), ni = (
      /*             */
      4
    ), xr = (
      /*            */
      8
    ), bn = (
      /*                     */
      16
    ), Ki = (
      /*                */
      32
    ), zl = (
      /*                       */
      4194240
    ), xu = (
      /*                        */
      64
    ), jc = (
      /*                        */
      128
    ), Ac = (
      /*                        */
      256
    ), Fc = (
      /*                        */
      512
    ), Hc = (
      /*                        */
      1024
    ), Pc = (
      /*                        */
      2048
    ), Vc = (
      /*                        */
      4096
    ), Bc = (
      /*                        */
      8192
    ), $c = (
      /*                        */
      16384
    ), Ru = (
      /*                       */
      32768
    ), Ic = (
      /*                       */
      65536
    ), yo = (
      /*                       */
      131072
    ), go = (
      /*                       */
      262144
    ), Yc = (
      /*                       */
      524288
    ), ys = (
      /*                       */
      1048576
    ), Qc = (
      /*                       */
      2097152
    ), gs = (
      /*                            */
      130023424
    ), Tu = (
      /*                             */
      4194304
    ), Wc = (
      /*                             */
      8388608
    ), Ss = (
      /*                             */
      16777216
    ), Gc = (
      /*                             */
      33554432
    ), qc = (
      /*                             */
      67108864
    ), kd = Tu, Es = (
      /*          */
      134217728
    ), Dd = (
      /*                          */
      268435455
    ), Cs = (
      /*               */
      268435456
    ), bu = (
      /*                        */
      536870912
    ), Jr = (
      /*                   */
      1073741824
    );
    function Vv(e) {
      {
        if (e & Be)
          return "Sync";
        if (e & Ml)
          return "InputContinuousHydration";
        if (e & ni)
          return "InputContinuous";
        if (e & xr)
          return "DefaultHydration";
        if (e & bn)
          return "Default";
        if (e & Ki)
          return "TransitionHydration";
        if (e & zl)
          return "Transition";
        if (e & gs)
          return "Retry";
        if (e & Es)
          return "SelectiveHydration";
        if (e & Cs)
          return "IdleHydration";
        if (e & bu)
          return "Idle";
        if (e & Jr)
          return "Offscreen";
      }
    }
    var Kt = -1, wu = xu, Xc = Tu;
    function xs(e) {
      switch (Ul(e)) {
        case Be:
          return Be;
        case Ml:
          return Ml;
        case ni:
          return ni;
        case xr:
          return xr;
        case bn:
          return bn;
        case Ki:
          return Ki;
        case xu:
        case jc:
        case Ac:
        case Fc:
        case Hc:
        case Pc:
        case Vc:
        case Bc:
        case $c:
        case Ru:
        case Ic:
        case yo:
        case go:
        case Yc:
        case ys:
        case Qc:
          return e & zl;
        case Tu:
        case Wc:
        case Ss:
        case Gc:
        case qc:
          return e & gs;
        case Es:
          return Es;
        case Cs:
          return Cs;
        case bu:
          return bu;
        case Jr:
          return Jr;
        default:
          return g("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function Kc(e, t) {
      var a = e.pendingLanes;
      if (a === W)
        return W;
      var i = W, u = e.suspendedLanes, s = e.pingedLanes, f = a & Dd;
      if (f !== W) {
        var p = f & ~u;
        if (p !== W)
          i = xs(p);
        else {
          var v = f & s;
          v !== W && (i = xs(v));
        }
      } else {
        var y = a & ~u;
        y !== W ? i = xs(y) : s !== W && (i = xs(s));
      }
      if (i === W)
        return W;
      if (t !== W && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & u) === W) {
        var S = Ul(i), _ = Ul(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          S >= _ || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          S === bn && (_ & zl) !== W
        )
          return t;
      }
      (i & ni) !== W && (i |= a & bn);
      var b = e.entangledLanes;
      if (b !== W)
        for (var j = e.entanglements, H = i & b; H > 0; ) {
          var V = jn(H), ce = 1 << V;
          i |= j[V], H &= ~ce;
        }
      return i;
    }
    function ri(e, t) {
      for (var a = e.eventTimes, i = Kt; t > 0; ) {
        var u = jn(t), s = 1 << u, f = a[u];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function Od(e, t) {
      switch (e) {
        case Be:
        case Ml:
        case ni:
          return t + 250;
        case xr:
        case bn:
        case Ki:
        case xu:
        case jc:
        case Ac:
        case Fc:
        case Hc:
        case Pc:
        case Vc:
        case Bc:
        case $c:
        case Ru:
        case Ic:
        case yo:
        case go:
        case Yc:
        case ys:
        case Qc:
          return t + 5e3;
        case Tu:
        case Wc:
        case Ss:
        case Gc:
        case qc:
          return Kt;
        case Es:
        case Cs:
        case bu:
        case Jr:
          return Kt;
        default:
          return g("Should have found matching lanes. This is a bug in React."), Kt;
      }
    }
    function Jc(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = jn(f), v = 1 << p, y = s[p];
        y === Kt ? ((v & i) === W || (v & u) !== W) && (s[p] = Od(v, t)) : y <= t && (e.expiredLanes |= v), f &= ~v;
      }
    }
    function Bv(e) {
      return xs(e.pendingLanes);
    }
    function Zc(e) {
      var t = e.pendingLanes & ~Jr;
      return t !== W ? t : t & Jr ? Jr : W;
    }
    function $v(e) {
      return (e & Be) !== W;
    }
    function Rs(e) {
      return (e & Dd) !== W;
    }
    function _u(e) {
      return (e & gs) === e;
    }
    function Nd(e) {
      var t = Be | ni | bn;
      return (e & t) === W;
    }
    function Ld(e) {
      return (e & zl) === e;
    }
    function ef(e, t) {
      var a = Ml | ni | xr | bn;
      return (t & a) !== W;
    }
    function Iv(e, t) {
      return (t & e.expiredLanes) !== W;
    }
    function Md(e) {
      return (e & zl) !== W;
    }
    function zd() {
      var e = wu;
      return wu <<= 1, (wu & zl) === W && (wu = xu), e;
    }
    function Yv() {
      var e = Xc;
      return Xc <<= 1, (Xc & gs) === W && (Xc = Tu), e;
    }
    function Ul(e) {
      return e & -e;
    }
    function Ts(e) {
      return Ul(e);
    }
    function jn(e) {
      return 31 - Un(e);
    }
    function ur(e) {
      return jn(e);
    }
    function Zr(e, t) {
      return (e & t) !== W;
    }
    function ku(e, t) {
      return (e & t) === t;
    }
    function tt(e, t) {
      return e | t;
    }
    function bs(e, t) {
      return e & ~t;
    }
    function Ud(e, t) {
      return e & t;
    }
    function Qv(e) {
      return e;
    }
    function Wv(e, t) {
      return e !== Dt && e < t ? e : t;
    }
    function ws(e) {
      for (var t = [], a = 0; a < Cu; a++)
        t.push(e);
      return t;
    }
    function So(e, t, a) {
      e.pendingLanes |= t, t !== bu && (e.suspendedLanes = W, e.pingedLanes = W);
      var i = e.eventTimes, u = ur(t);
      i[u] = a;
    }
    function Gv(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var u = jn(i), s = 1 << u;
        a[u] = Kt, i &= ~s;
      }
    }
    function tf(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function jd(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = W, e.pingedLanes = W, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, u = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = jn(f), v = 1 << p;
        i[p] = W, u[p] = Kt, s[p] = Kt, f &= ~v;
      }
    }
    function nf(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, u = a; u; ) {
        var s = jn(u), f = 1 << s;
        // Is this one of the newly entangled lanes?
        f & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), u &= ~f;
      }
    }
    function Ad(e, t) {
      var a = Ul(t), i;
      switch (a) {
        case ni:
          i = Ml;
          break;
        case bn:
          i = xr;
          break;
        case xu:
        case jc:
        case Ac:
        case Fc:
        case Hc:
        case Pc:
        case Vc:
        case Bc:
        case $c:
        case Ru:
        case Ic:
        case yo:
        case go:
        case Yc:
        case ys:
        case Qc:
        case Tu:
        case Wc:
        case Ss:
        case Gc:
        case qc:
          i = Ki;
          break;
        case bu:
          i = Cs;
          break;
        default:
          i = Dt;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== Dt ? Dt : i;
    }
    function _s(e, t, a) {
      if (Kr)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var u = ur(a), s = 1 << u, f = i[u];
          f.add(t), a &= ~s;
        }
    }
    function qv(e, t) {
      if (Kr)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var u = ur(t), s = 1 << u, f = a[u];
          f.size > 0 && (f.forEach(function(p) {
            var v = p.alternate;
            (v === null || !i.has(v)) && i.add(p);
          }), f.clear()), t &= ~s;
        }
    }
    function Fd(e, t) {
      return null;
    }
    var Nr = Be, wi = ni, Ma = bn, za = bu, ks = Dt;
    function Ua() {
      return ks;
    }
    function An(e) {
      ks = e;
    }
    function Xv(e, t) {
      var a = ks;
      try {
        return ks = e, t();
      } finally {
        ks = a;
      }
    }
    function Kv(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function Ds(e, t) {
      return e > t ? e : t;
    }
    function Zn(e, t) {
      return e !== 0 && e < t;
    }
    function Jv(e) {
      var t = Ul(e);
      return Zn(Nr, t) ? Zn(wi, t) ? Rs(t) ? Ma : za : wi : Nr;
    }
    function rf(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var Os;
    function Rr(e) {
      Os = e;
    }
    function py(e) {
      Os(e);
    }
    var me;
    function Eo(e) {
      me = e;
    }
    var af;
    function Zv(e) {
      af = e;
    }
    var eh;
    function Ns(e) {
      eh = e;
    }
    var Ls;
    function Hd(e) {
      Ls = e;
    }
    var lf = !1, Ms = [], Ji = null, _i = null, ki = null, wn = /* @__PURE__ */ new Map(), Lr = /* @__PURE__ */ new Map(), Mr = [], th = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      // Intentionally camelCase
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function nh(e) {
      return th.indexOf(e) > -1;
    }
    function ai(e, t, a, i, u) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: u,
        targetContainers: [i]
      };
    }
    function Pd(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          Ji = null;
          break;
        case "dragenter":
        case "dragleave":
          _i = null;
          break;
        case "mouseover":
        case "mouseout":
          ki = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          wn.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          Lr.delete(i);
          break;
        }
      }
    }
    function ea(e, t, a, i, u, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = ai(t, a, i, u, s);
        if (t !== null) {
          var p = Do(t);
          p !== null && me(p);
        }
        return f;
      }
      e.eventSystemFlags |= i;
      var v = e.targetContainers;
      return u !== null && v.indexOf(u) === -1 && v.push(u), e;
    }
    function vy(e, t, a, i, u) {
      switch (t) {
        case "focusin": {
          var s = u;
          return Ji = ea(Ji, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = u;
          return _i = ea(_i, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var p = u;
          return ki = ea(ki, e, t, a, i, p), !0;
        }
        case "pointerover": {
          var v = u, y = v.pointerId;
          return wn.set(y, ea(wn.get(y) || null, e, t, a, i, v)), !0;
        }
        case "gotpointercapture": {
          var S = u, _ = S.pointerId;
          return Lr.set(_, ea(Lr.get(_) || null, e, t, a, i, S)), !0;
        }
      }
      return !1;
    }
    function Vd(e) {
      var t = Ys(e.target);
      if (t !== null) {
        var a = da(t);
        if (a !== null) {
          var i = a.tag;
          if (i === Le) {
            var u = Ri(a);
            if (u !== null) {
              e.blockedOn = u, Ls(e.priority, function() {
                af(a);
              });
              return;
            }
          } else if (i === re) {
            var s = a.stateNode;
            if (rf(s)) {
              e.blockedOn = Ti(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function rh(e) {
      for (var t = eh(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < Mr.length && Zn(t, Mr[i].priority); i++)
        ;
      Mr.splice(i, 0, a), i === 0 && Vd(a);
    }
    function zs(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = xo(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var u = e.nativeEvent, s = new u.constructor(u.type, u);
          oy(s), u.target.dispatchEvent(s), sy();
        } else {
          var f = Do(i);
          return f !== null && me(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function Bd(e, t, a) {
      zs(e) && a.delete(t);
    }
    function hy() {
      lf = !1, Ji !== null && zs(Ji) && (Ji = null), _i !== null && zs(_i) && (_i = null), ki !== null && zs(ki) && (ki = null), wn.forEach(Bd), Lr.forEach(Bd);
    }
    function jl(e, t) {
      e.blockedOn === t && (e.blockedOn = null, lf || (lf = !0, O.unstable_scheduleCallback(O.unstable_NormalPriority, hy)));
    }
    function Du(e) {
      if (Ms.length > 0) {
        jl(Ms[0], e);
        for (var t = 1; t < Ms.length; t++) {
          var a = Ms[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      Ji !== null && jl(Ji, e), _i !== null && jl(_i, e), ki !== null && jl(ki, e);
      var i = function(p) {
        return jl(p, e);
      };
      wn.forEach(i), Lr.forEach(i);
      for (var u = 0; u < Mr.length; u++) {
        var s = Mr[u];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; Mr.length > 0; ) {
        var f = Mr[0];
        if (f.blockedOn !== null)
          break;
        Vd(f), f.blockedOn === null && Mr.shift();
      }
    }
    var or = k.ReactCurrentBatchConfig, xt = !0;
    function Wn(e) {
      xt = !!e;
    }
    function Fn() {
      return xt;
    }
    function sr(e, t, a) {
      var i = uf(t), u;
      switch (i) {
        case Nr:
          u = ma;
          break;
        case wi:
          u = Co;
          break;
        case Ma:
        default:
          u = _n;
          break;
      }
      return u.bind(null, t, a, e);
    }
    function ma(e, t, a, i) {
      var u = Ua(), s = or.transition;
      or.transition = null;
      try {
        An(Nr), _n(e, t, a, i);
      } finally {
        An(u), or.transition = s;
      }
    }
    function Co(e, t, a, i) {
      var u = Ua(), s = or.transition;
      or.transition = null;
      try {
        An(wi), _n(e, t, a, i);
      } finally {
        An(u), or.transition = s;
      }
    }
    function _n(e, t, a, i) {
      xt && Us(e, t, a, i);
    }
    function Us(e, t, a, i) {
      var u = xo(e, t, a, i);
      if (u === null) {
        Ly(e, t, i, Di, a), Pd(e, i);
        return;
      }
      if (vy(u, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (Pd(e, i), t & _a && nh(e)) {
        for (; u !== null; ) {
          var s = Do(u);
          s !== null && py(s);
          var f = xo(e, t, a, i);
          if (f === null && Ly(e, t, i, Di, a), f === u)
            break;
          u = f;
        }
        u !== null && i.stopPropagation();
        return;
      }
      Ly(e, t, i, null, a);
    }
    var Di = null;
    function xo(e, t, a, i) {
      Di = null;
      var u = vd(i), s = Ys(u);
      if (s !== null) {
        var f = da(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === Le) {
            var v = Ri(f);
            if (v !== null)
              return v;
            s = null;
          } else if (p === re) {
            var y = f.stateNode;
            if (rf(y))
              return Ti(f);
            s = null;
          } else f !== s && (s = null);
        }
      }
      return Di = s, null;
    }
    function uf(e) {
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
          return Nr;
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
          return wi;
        case "message": {
          var t = Oc();
          switch (t) {
            case cs:
              return Nr;
            case Nl:
              return wi;
            case qi:
            case dy:
              return Ma;
            case mu:
              return za;
            default:
              return Ma;
          }
        }
        default:
          return Ma;
      }
    }
    function js(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function ta(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function $d(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function Ro(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var ya = null, To = null, Ou = null;
    function Al(e) {
      return ya = e, To = As(), !0;
    }
    function of() {
      ya = null, To = null, Ou = null;
    }
    function Zi() {
      if (Ou)
        return Ou;
      var e, t = To, a = t.length, i, u = As(), s = u.length;
      for (e = 0; e < a && t[e] === u[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === u[s - i]; i++)
        ;
      var p = i > 1 ? 1 - i : void 0;
      return Ou = u.slice(e, p), Ou;
    }
    function As() {
      return "value" in ya ? ya.value : ya.textContent;
    }
    function Fl(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function bo() {
      return !0;
    }
    function Fs() {
      return !1;
    }
    function Tr(e) {
      function t(a, i, u, s, f) {
        this._reactName = a, this._targetInst = u, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
        for (var p in e)
          if (e.hasOwnProperty(p)) {
            var v = e[p];
            v ? this[p] = v(s) : this[p] = s[p];
          }
        var y = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return y ? this.isDefaultPrevented = bo : this.isDefaultPrevented = Fs, this.isPropagationStopped = Fs, this;
      }
      return rt(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = bo);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = bo);
        },
        /**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
        persist: function() {
        },
        /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
        isPersistent: bo
      }), t;
    }
    var Hn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Oi = Tr(Hn), zr = rt({}, Hn, {
      view: 0,
      detail: 0
    }), na = Tr(zr), sf, Hs, Nu;
    function my(e) {
      e !== Nu && (Nu && e.type === "mousemove" ? (sf = e.screenX - Nu.screenX, Hs = e.screenY - Nu.screenY) : (sf = 0, Hs = 0), Nu = e);
    }
    var ii = rt({}, zr, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: pn,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (my(e), sf);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Hs;
      }
    }), Id = Tr(ii), Yd = rt({}, ii, {
      dataTransfer: 0
    }), Lu = Tr(Yd), Qd = rt({}, zr, {
      relatedTarget: 0
    }), el = Tr(Qd), ah = rt({}, Hn, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), ih = Tr(ah), Wd = rt({}, Hn, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), cf = Tr(Wd), yy = rt({}, Hn, {
      data: 0
    }), lh = Tr(yy), uh = lh, oh = {
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
    }, Mu = {
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
    };
    function gy(e) {
      if (e.key) {
        var t = oh[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = Fl(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? Mu[e.keyCode] || "Unidentified" : "";
    }
    var wo = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function sh(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = wo[e];
      return i ? !!a[i] : !1;
    }
    function pn(e) {
      return sh;
    }
    var Sy = rt({}, zr, {
      key: gy,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: pn,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? Fl(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Fl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), ch = Tr(Sy), Ey = rt({}, ii, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), fh = Tr(Ey), dh = rt({}, zr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: pn
    }), ph = Tr(dh), Cy = rt({}, Hn, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), ja = Tr(Cy), Gd = rt({}, ii, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        );
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in e ? -e.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in e ? -e.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    }), xy = Tr(Gd), Hl = [9, 13, 27, 32], Ps = 229, tl = On && "CompositionEvent" in window, Pl = null;
    On && "documentMode" in document && (Pl = document.documentMode);
    var qd = On && "TextEvent" in window && !Pl, ff = On && (!tl || Pl && Pl > 8 && Pl <= 11), vh = 32, df = String.fromCharCode(vh);
    function Ry() {
      st("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), st("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), st("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), st("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Xd = !1;
    function hh(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function pf(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function vf(e, t) {
      return e === "keydown" && t.keyCode === Ps;
    }
    function Kd(e, t) {
      switch (e) {
        case "keyup":
          return Hl.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Ps;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function hf(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function mh(e) {
      return e.locale === "ko";
    }
    var zu = !1;
    function Jd(e, t, a, i, u) {
      var s, f;
      if (tl ? s = pf(t) : zu ? Kd(t, i) && (s = "onCompositionEnd") : vf(t, i) && (s = "onCompositionStart"), !s)
        return null;
      ff && !mh(i) && (!zu && s === "onCompositionStart" ? zu = Al(u) : s === "onCompositionEnd" && zu && (f = Zi()));
      var p = Rh(a, s);
      if (p.length > 0) {
        var v = new lh(s, t, null, i, u);
        if (e.push({
          event: v,
          listeners: p
        }), f)
          v.data = f;
        else {
          var y = hf(i);
          y !== null && (v.data = y);
        }
      }
    }
    function mf(e, t) {
      switch (e) {
        case "compositionend":
          return hf(t);
        case "keypress":
          var a = t.which;
          return a !== vh ? null : (Xd = !0, df);
        case "textInput":
          var i = t.data;
          return i === df && Xd ? null : i;
        default:
          return null;
      }
    }
    function Zd(e, t) {
      if (zu) {
        if (e === "compositionend" || !tl && Kd(e, t)) {
          var a = Zi();
          return of(), zu = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!hh(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return ff && !mh(t) ? null : t.data;
        default:
          return null;
      }
    }
    function yf(e, t, a, i, u) {
      var s;
      if (qd ? s = mf(t, i) : s = Zd(t, i), !s)
        return null;
      var f = Rh(a, "onBeforeInput");
      if (f.length > 0) {
        var p = new uh("onBeforeInput", "beforeinput", null, i, u);
        e.push({
          event: p,
          listeners: f
        }), p.data = s;
      }
    }
    function yh(e, t, a, i, u, s, f) {
      Jd(e, t, a, i, u), yf(e, t, a, i, u);
    }
    var Ty = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    };
    function Vs(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!Ty[e.type] : t === "textarea";
    }
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function by(e) {
      if (!On)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function Bs() {
      st("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function gh(e, t, a, i) {
      oo(i);
      var u = Rh(t, "onChange");
      if (u.length > 0) {
        var s = new Oi("onChange", "change", null, a, i);
        e.push({
          event: s,
          listeners: u
        });
      }
    }
    var Vl = null, n = null;
    function r(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function l(e) {
      var t = [];
      gh(t, n, e, vd(e)), Ov(o, t);
    }
    function o(e) {
      VE(e, 0);
    }
    function c(e) {
      var t = Rf(e);
      if (yi(t))
        return e;
    }
    function d(e, t) {
      if (e === "change")
        return t;
    }
    var m = !1;
    On && (m = by("input") && (!document.documentMode || document.documentMode > 9));
    function E(e, t) {
      Vl = e, n = t, Vl.attachEvent("onpropertychange", F);
    }
    function R() {
      Vl && (Vl.detachEvent("onpropertychange", F), Vl = null, n = null);
    }
    function F(e) {
      e.propertyName === "value" && c(n) && l(e);
    }
    function X(e, t, a) {
      e === "focusin" ? (R(), E(t, a)) : e === "focusout" && R();
    }
    function J(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return c(n);
    }
    function q(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function pe(e, t) {
      if (e === "click")
        return c(t);
    }
    function Se(e, t) {
      if (e === "input" || e === "change")
        return c(t);
    }
    function xe(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || je(e, "number", e.value);
    }
    function kn(e, t, a, i, u, s, f) {
      var p = a ? Rf(a) : window, v, y;
      if (r(p) ? v = d : Vs(p) ? m ? v = Se : (v = J, y = X) : q(p) && (v = pe), v) {
        var S = v(t, a);
        if (S) {
          gh(e, S, i, u);
          return;
        }
      }
      y && y(t, p, a), t === "focusout" && xe(p);
    }
    function N() {
      Bt("onMouseEnter", ["mouseout", "mouseover"]), Bt("onMouseLeave", ["mouseout", "mouseover"]), Bt("onPointerEnter", ["pointerout", "pointerover"]), Bt("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function w(e, t, a, i, u, s, f) {
      var p = t === "mouseover" || t === "pointerover", v = t === "mouseout" || t === "pointerout";
      if (p && !as(i)) {
        var y = i.relatedTarget || i.fromElement;
        if (y && (Ys(y) || pp(y)))
          return;
      }
      if (!(!v && !p)) {
        var S;
        if (u.window === u)
          S = u;
        else {
          var _ = u.ownerDocument;
          _ ? S = _.defaultView || _.parentWindow : S = window;
        }
        var b, j;
        if (v) {
          var H = i.relatedTarget || i.toElement;
          if (b = a, j = H ? Ys(H) : null, j !== null) {
            var V = da(j);
            (j !== V || j.tag !== fe && j.tag !== Xe) && (j = null);
          }
        } else
          b = null, j = a;
        if (b !== j) {
          var ce = Id, Ae = "onMouseLeave", De = "onMouseEnter", Tt = "mouse";
          (t === "pointerout" || t === "pointerover") && (ce = fh, Ae = "onPointerLeave", De = "onPointerEnter", Tt = "pointer");
          var gt = b == null ? S : Rf(b), L = j == null ? S : Rf(j), B = new ce(Ae, Tt + "leave", b, i, u);
          B.target = gt, B.relatedTarget = L;
          var M = null, Z = Ys(u);
          if (Z === a) {
            var he = new ce(De, Tt + "enter", j, i, u);
            he.target = L, he.relatedTarget = gt, M = he;
          }
          qR(e, B, M, b, j);
        }
      }
    }
    function U(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var K = typeof Object.is == "function" ? Object.is : U;
    function Ee(e, t) {
      if (K(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++) {
        var s = a[u];
        if (!br.call(t, s) || !K(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function Fe(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function Pe(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function Qe(e, t) {
      for (var a = Fe(e), i = 0, u = 0; a; ) {
        if (a.nodeType === Ii) {
          if (u = i + a.textContent.length, i <= t && u >= t)
            return {
              node: a,
              offset: t - i
            };
          i = u;
        }
        a = Fe(Pe(a));
      }
    }
    function er(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var u = i.anchorNode, s = i.anchorOffset, f = i.focusNode, p = i.focusOffset;
      try {
        u.nodeType, f.nodeType;
      } catch {
        return null;
      }
      return zt(e, u, s, f, p);
    }
    function zt(e, t, a, i, u) {
      var s = 0, f = -1, p = -1, v = 0, y = 0, S = e, _ = null;
      e: for (; ; ) {
        for (var b = null; S === t && (a === 0 || S.nodeType === Ii) && (f = s + a), S === i && (u === 0 || S.nodeType === Ii) && (p = s + u), S.nodeType === Ii && (s += S.nodeValue.length), (b = S.firstChild) !== null; )
          _ = S, S = b;
        for (; ; ) {
          if (S === e)
            break e;
          if (_ === t && ++v === a && (f = s), _ === i && ++y === u && (p = s), (b = S.nextSibling) !== null)
            break;
          S = _, _ = S.parentNode;
        }
        S = b;
      }
      return f === -1 || p === -1 ? null : {
        start: f,
        end: p
      };
    }
    function Bl(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var u = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), p = t.end === void 0 ? f : Math.min(t.end, s);
        if (!u.extend && f > p) {
          var v = p;
          p = f, f = v;
        }
        var y = Qe(e, f), S = Qe(e, p);
        if (y && S) {
          if (u.rangeCount === 1 && u.anchorNode === y.node && u.anchorOffset === y.offset && u.focusNode === S.node && u.focusOffset === S.offset)
            return;
          var _ = a.createRange();
          _.setStart(y.node, y.offset), u.removeAllRanges(), f > p ? (u.addRange(_), u.extend(S.node, S.offset)) : (_.setEnd(S.node, S.offset), u.addRange(_));
        }
      }
    }
    function Sh(e) {
      return e && e.nodeType === Ii;
    }
    function OE(e, t) {
      return !e || !t ? !1 : e === t ? !0 : Sh(e) ? !1 : Sh(t) ? OE(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function NR(e) {
      return e && e.ownerDocument && OE(e.ownerDocument.documentElement, e);
    }
    function LR(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function NE() {
      for (var e = window, t = wa(); t instanceof e.HTMLIFrameElement; ) {
        if (LR(t))
          e = t.contentWindow;
        else
          return t;
        t = wa(e.document);
      }
      return t;
    }
    function wy(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function MR() {
      var e = NE();
      return {
        focusedElem: e,
        selectionRange: wy(e) ? UR(e) : null
      };
    }
    function zR(e) {
      var t = NE(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && NR(a)) {
        i !== null && wy(a) && jR(a, i);
        for (var u = [], s = a; s = s.parentNode; )
          s.nodeType === Qr && u.push({
            element: s,
            left: s.scrollLeft,
            top: s.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var f = 0; f < u.length; f++) {
          var p = u[f];
          p.element.scrollLeft = p.left, p.element.scrollTop = p.top;
        }
      }
    }
    function UR(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = er(e), t || {
        start: 0,
        end: 0
      };
    }
    function jR(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : Bl(e, t);
    }
    var AR = On && "documentMode" in document && document.documentMode <= 11;
    function FR() {
      st("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var gf = null, _y = null, ep = null, ky = !1;
    function HR(e) {
      if ("selectionStart" in e && wy(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, a = t.getSelection();
      return {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      };
    }
    function PR(e) {
      return e.window === e ? e.document : e.nodeType === Yi ? e : e.ownerDocument;
    }
    function LE(e, t, a) {
      var i = PR(a);
      if (!(ky || gf == null || gf !== wa(i))) {
        var u = HR(gf);
        if (!ep || !Ee(ep, u)) {
          ep = u;
          var s = Rh(_y, "onSelect");
          if (s.length > 0) {
            var f = new Oi("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = gf;
          }
        }
      }
    }
    function VR(e, t, a, i, u, s, f) {
      var p = a ? Rf(a) : window;
      switch (t) {
        case "focusin":
          (Vs(p) || p.contentEditable === "true") && (gf = p, _y = a, ep = null);
          break;
        case "focusout":
          gf = null, _y = null, ep = null;
          break;
        case "mousedown":
          ky = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ky = !1, LE(e, i, u);
          break;
        case "selectionchange":
          if (AR)
            break;
        case "keydown":
        case "keyup":
          LE(e, i, u);
      }
    }
    function Eh(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var Sf = {
      animationend: Eh("Animation", "AnimationEnd"),
      animationiteration: Eh("Animation", "AnimationIteration"),
      animationstart: Eh("Animation", "AnimationStart"),
      transitionend: Eh("Transition", "TransitionEnd")
    }, Dy = {}, ME = {};
    On && (ME = document.createElement("div").style, "AnimationEvent" in window || (delete Sf.animationend.animation, delete Sf.animationiteration.animation, delete Sf.animationstart.animation), "TransitionEvent" in window || delete Sf.transitionend.transition);
    function Ch(e) {
      if (Dy[e])
        return Dy[e];
      if (!Sf[e])
        return e;
      var t = Sf[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in ME)
          return Dy[e] = t[a];
      return e;
    }
    var zE = Ch("animationend"), UE = Ch("animationiteration"), jE = Ch("animationstart"), AE = Ch("transitionend"), FE = /* @__PURE__ */ new Map(), HE = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function _o(e, t) {
      FE.set(e, t), st(t, [e]);
    }
    function BR() {
      for (var e = 0; e < HE.length; e++) {
        var t = HE[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        _o(a, "on" + i);
      }
      _o(zE, "onAnimationEnd"), _o(UE, "onAnimationIteration"), _o(jE, "onAnimationStart"), _o("dblclick", "onDoubleClick"), _o("focusin", "onFocus"), _o("focusout", "onBlur"), _o(AE, "onTransitionEnd");
    }
    function $R(e, t, a, i, u, s, f) {
      var p = FE.get(t);
      if (p !== void 0) {
        var v = Oi, y = t;
        switch (t) {
          case "keypress":
            if (Fl(i) === 0)
              return;
          case "keydown":
          case "keyup":
            v = ch;
            break;
          case "focusin":
            y = "focus", v = el;
            break;
          case "focusout":
            y = "blur", v = el;
            break;
          case "beforeblur":
          case "afterblur":
            v = el;
            break;
          case "click":
            if (i.button === 2)
              return;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = Id;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = Lu;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = ph;
            break;
          case zE:
          case UE:
          case jE:
            v = ih;
            break;
          case AE:
            v = ja;
            break;
          case "scroll":
            v = na;
            break;
          case "wheel":
            v = xy;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = cf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = fh;
            break;
        }
        var S = (s & _a) !== 0;
        {
          var _ = !S && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", b = WR(a, p, i.type, S, _);
          if (b.length > 0) {
            var j = new v(p, y, null, i, u);
            e.push({
              event: j,
              listeners: b
            });
          }
        }
      }
    }
    BR(), N(), Bs(), FR(), Ry();
    function IR(e, t, a, i, u, s, f) {
      $R(e, t, a, i, u, s);
      var p = (s & pd) === 0;
      p && (w(e, t, a, i, u), kn(e, t, a, i, u), VR(e, t, a, i, u), yh(e, t, a, i, u));
    }
    var tp = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], Oy = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(tp));
    function PE(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, Ei(i, t, void 0, e), e.currentTarget = null;
    }
    function YR(e, t, a) {
      var i;
      if (a)
        for (var u = t.length - 1; u >= 0; u--) {
          var s = t[u], f = s.instance, p = s.currentTarget, v = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          PE(e, v, p), i = f;
        }
      else
        for (var y = 0; y < t.length; y++) {
          var S = t[y], _ = S.instance, b = S.currentTarget, j = S.listener;
          if (_ !== i && e.isPropagationStopped())
            return;
          PE(e, j, b), i = _;
        }
    }
    function VE(e, t) {
      for (var a = (t & _a) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], s = u.event, f = u.listeners;
        YR(s, f, a);
      }
      us();
    }
    function QR(e, t, a, i, u) {
      var s = vd(a), f = [];
      IR(f, e, i, a, s, t), VE(f, t);
    }
    function Sn(e, t) {
      Oy.has(e) || g('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = xb(t), u = XR(e);
      i.has(u) || (BE(t, e, yc, a), i.add(u));
    }
    function Ny(e, t, a) {
      Oy.has(e) && !t && g('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= _a), BE(a, e, i, t);
    }
    var xh = "_reactListening" + Math.random().toString(36).slice(2);
    function np(e) {
      if (!e[xh]) {
        e[xh] = !0, at.forEach(function(a) {
          a !== "selectionchange" && (Oy.has(a) || Ny(a, !1, e), Ny(a, !0, e));
        });
        var t = e.nodeType === Yi ? e : e.ownerDocument;
        t !== null && (t[xh] || (t[xh] = !0, Ny("selectionchange", !1, t)));
      }
    }
    function BE(e, t, a, i, u) {
      var s = sr(e, t, a), f = void 0;
      ls && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? $d(e, t, s, f) : ta(e, t, s) : f !== void 0 ? Ro(e, t, s, f) : js(e, t, s);
    }
    function $E(e, t) {
      return e === t || e.nodeType === Ln && e.parentNode === t;
    }
    function Ly(e, t, a, i, u) {
      var s = i;
      if (!(t & dd) && !(t & yc)) {
        var f = u;
        if (i !== null) {
          var p = i;
          e: for (; ; ) {
            if (p === null)
              return;
            var v = p.tag;
            if (v === re || v === we) {
              var y = p.stateNode.containerInfo;
              if ($E(y, f))
                break;
              if (v === we)
                for (var S = p.return; S !== null; ) {
                  var _ = S.tag;
                  if (_ === re || _ === we) {
                    var b = S.stateNode.containerInfo;
                    if ($E(b, f))
                      return;
                  }
                  S = S.return;
                }
              for (; y !== null; ) {
                var j = Ys(y);
                if (j === null)
                  return;
                var H = j.tag;
                if (H === fe || H === Xe) {
                  p = s = j;
                  continue e;
                }
                y = y.parentNode;
              }
            }
            p = p.return;
          }
        }
      }
      Ov(function() {
        return QR(e, t, a, s);
      });
    }
    function rp(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function WR(e, t, a, i, u, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, v = [], y = e, S = null; y !== null; ) {
        var _ = y, b = _.stateNode, j = _.tag;
        if (j === fe && b !== null && (S = b, p !== null)) {
          var H = bl(y, p);
          H != null && v.push(rp(y, H, S));
        }
        if (u)
          break;
        y = y.return;
      }
      return v;
    }
    function Rh(e, t) {
      for (var a = t + "Capture", i = [], u = e; u !== null; ) {
        var s = u, f = s.stateNode, p = s.tag;
        if (p === fe && f !== null) {
          var v = f, y = bl(u, a);
          y != null && i.unshift(rp(u, y, v));
          var S = bl(u, t);
          S != null && i.push(rp(u, S, v));
        }
        u = u.return;
      }
      return i;
    }
    function Ef(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== fe);
      return e || null;
    }
    function GR(e, t) {
      for (var a = e, i = t, u = 0, s = a; s; s = Ef(s))
        u++;
      for (var f = 0, p = i; p; p = Ef(p))
        f++;
      for (; u - f > 0; )
        a = Ef(a), u--;
      for (; f - u > 0; )
        i = Ef(i), f--;
      for (var v = u; v--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = Ef(a), i = Ef(i);
      }
      return null;
    }
    function IE(e, t, a, i, u) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var v = p, y = v.alternate, S = v.stateNode, _ = v.tag;
        if (y !== null && y === i)
          break;
        if (_ === fe && S !== null) {
          var b = S;
          if (u) {
            var j = bl(p, s);
            j != null && f.unshift(rp(p, j, b));
          } else if (!u) {
            var H = bl(p, s);
            H != null && f.push(rp(p, H, b));
          }
        }
        p = p.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function qR(e, t, a, i, u) {
      var s = i && u ? GR(i, u) : null;
      i !== null && IE(e, t, i, s, !1), u !== null && a !== null && IE(e, a, u, s, !0);
    }
    function XR(e, t) {
      return e + "__bubble";
    }
    var Aa = !1, ap = "dangerouslySetInnerHTML", Th = "suppressContentEditableWarning", ko = "suppressHydrationWarning", YE = "autoFocus", $s = "children", Is = "style", bh = "__html", My, wh, ip, QE, _h, WE, GE;
    My = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, wh = function(e, t) {
      sd(e, t), hc(e, t), _v(e, t, {
        registrationNameDependencies: nt,
        possibleRegistrationNames: it
      });
    }, WE = On && !document.documentMode, ip = function(e, t, a) {
      if (!Aa) {
        var i = kh(a), u = kh(t);
        u !== i && (Aa = !0, g("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
      }
    }, QE = function(e) {
      if (!Aa) {
        Aa = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), g("Extra attributes from the server: %s", t);
      }
    }, _h = function(e, t) {
      t === !1 ? g("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : g("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, GE = function(e, t) {
      var a = e.namespaceURI === $i ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var KR = /\r\n?/g, JR = /\u0000|\uFFFD/g;
    function kh(e) {
      qn(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(KR, `
`).replace(JR, "");
    }
    function Dh(e, t, a, i) {
      var u = kh(t), s = kh(e);
      if (s !== u && (i && (Aa || (Aa = !0, g('Text content did not match. Server: "%s" Client: "%s"', s, u))), a && Te))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function qE(e) {
      return e.nodeType === Yi ? e : e.ownerDocument;
    }
    function ZR() {
    }
    function Oh(e) {
      e.onclick = ZR;
    }
    function eT(e, t, a, i, u) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === Is)
            f && Object.freeze(f), Cv(t, f);
          else if (s === ap) {
            var p = f ? f[bh] : void 0;
            p != null && sv(t, p);
          } else if (s === $s)
            if (typeof f == "string") {
              var v = e !== "textarea" || f !== "";
              v && ao(t, f);
            } else typeof f == "number" && ao(t, "" + f);
          else s === Th || s === ko || s === YE || (nt.hasOwnProperty(s) ? f != null && (typeof f != "function" && _h(s, f), s === "onScroll" && Sn("scroll", t)) : f != null && wr(t, s, f, u));
        }
    }
    function tT(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var s = t[u], f = t[u + 1];
        s === Is ? Cv(e, f) : s === ap ? sv(e, f) : s === $s ? ao(e, f) : wr(e, s, f, i);
      }
    }
    function nT(e, t, a, i) {
      var u, s = qE(a), f, p = i;
      if (p === $i && (p = nd(e)), p === $i) {
        if (u = Rl(e, t), !u && e !== e.toLowerCase() && g("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var v = s.createElement("div");
          v.innerHTML = "<script><\/script>";
          var y = v.firstChild;
          f = v.removeChild(y);
        } else if (typeof t.is == "string")
          f = s.createElement(e, {
            is: t.is
          });
        else if (f = s.createElement(e), e === "select") {
          var S = f;
          t.multiple ? S.multiple = !0 : t.size && (S.size = t.size);
        }
      } else
        f = s.createElementNS(p, e);
      return p === $i && !u && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !br.call(My, e) && (My[e] = !0, g("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function rT(e, t) {
      return qE(t).createTextNode(e);
    }
    function aT(e, t, a, i) {
      var u = Rl(t, a);
      wh(t, a);
      var s;
      switch (t) {
        case "dialog":
          Sn("cancel", e), Sn("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          Sn("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < tp.length; f++)
            Sn(tp[f], e);
          s = a;
          break;
        case "source":
          Sn("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          Sn("error", e), Sn("load", e), s = a;
          break;
        case "details":
          Sn("toggle", e), s = a;
          break;
        case "input":
          Za(e, a), s = ro(e, a), Sn("invalid", e);
          break;
        case "option":
          wt(e, a), s = a;
          break;
        case "select":
          ou(e, a), s = Ko(e, a), Sn("invalid", e);
          break;
        case "textarea":
          Zf(e, a), s = Jf(e, a), Sn("invalid", e);
          break;
        default:
          s = a;
      }
      switch (pc(t, s), eT(t, e, i, s, u), t) {
        case "input":
          Ja(e), A(e, a, !1);
          break;
        case "textarea":
          Ja(e), uv(e);
          break;
        case "option":
          nn(e, a);
          break;
        case "select":
          Xf(e, a);
          break;
        default:
          typeof s.onClick == "function" && Oh(e);
          break;
      }
    }
    function iT(e, t, a, i, u) {
      wh(t, i);
      var s = null, f, p;
      switch (t) {
        case "input":
          f = ro(e, a), p = ro(e, i), s = [];
          break;
        case "select":
          f = Ko(e, a), p = Ko(e, i), s = [];
          break;
        case "textarea":
          f = Jf(e, a), p = Jf(e, i), s = [];
          break;
        default:
          f = a, p = i, typeof f.onClick != "function" && typeof p.onClick == "function" && Oh(e);
          break;
      }
      pc(t, p);
      var v, y, S = null;
      for (v in f)
        if (!(p.hasOwnProperty(v) || !f.hasOwnProperty(v) || f[v] == null))
          if (v === Is) {
            var _ = f[v];
            for (y in _)
              _.hasOwnProperty(y) && (S || (S = {}), S[y] = "");
          } else v === ap || v === $s || v === Th || v === ko || v === YE || (nt.hasOwnProperty(v) ? s || (s = []) : (s = s || []).push(v, null));
      for (v in p) {
        var b = p[v], j = f != null ? f[v] : void 0;
        if (!(!p.hasOwnProperty(v) || b === j || b == null && j == null))
          if (v === Is)
            if (b && Object.freeze(b), j) {
              for (y in j)
                j.hasOwnProperty(y) && (!b || !b.hasOwnProperty(y)) && (S || (S = {}), S[y] = "");
              for (y in b)
                b.hasOwnProperty(y) && j[y] !== b[y] && (S || (S = {}), S[y] = b[y]);
            } else
              S || (s || (s = []), s.push(v, S)), S = b;
          else if (v === ap) {
            var H = b ? b[bh] : void 0, V = j ? j[bh] : void 0;
            H != null && V !== H && (s = s || []).push(v, H);
          } else v === $s ? (typeof b == "string" || typeof b == "number") && (s = s || []).push(v, "" + b) : v === Th || v === ko || (nt.hasOwnProperty(v) ? (b != null && (typeof b != "function" && _h(v, b), v === "onScroll" && Sn("scroll", e)), !s && j !== b && (s = [])) : (s = s || []).push(v, b));
      }
      return S && (ly(S, p[Is]), (s = s || []).push(Is, S)), s;
    }
    function lT(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && h(e, u);
      var s = Rl(a, i), f = Rl(a, u);
      switch (tT(e, t, s, f), a) {
        case "input":
          C(e, u);
          break;
        case "textarea":
          lv(e, u);
          break;
        case "select":
          cc(e, u);
          break;
      }
    }
    function uT(e) {
      {
        var t = e.toLowerCase();
        return ns.hasOwnProperty(t) && ns[t] || null;
      }
    }
    function oT(e, t, a, i, u, s, f) {
      var p, v;
      switch (p = Rl(t, a), wh(t, a), t) {
        case "dialog":
          Sn("cancel", e), Sn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          Sn("load", e);
          break;
        case "video":
        case "audio":
          for (var y = 0; y < tp.length; y++)
            Sn(tp[y], e);
          break;
        case "source":
          Sn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          Sn("error", e), Sn("load", e);
          break;
        case "details":
          Sn("toggle", e);
          break;
        case "input":
          Za(e, a), Sn("invalid", e);
          break;
        case "option":
          wt(e, a);
          break;
        case "select":
          ou(e, a), Sn("invalid", e);
          break;
        case "textarea":
          Zf(e, a), Sn("invalid", e);
          break;
      }
      pc(t, a);
      {
        v = /* @__PURE__ */ new Set();
        for (var S = e.attributes, _ = 0; _ < S.length; _++) {
          var b = S[_].name.toLowerCase();
          switch (b) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              v.add(S[_].name);
          }
        }
      }
      var j = null;
      for (var H in a)
        if (a.hasOwnProperty(H)) {
          var V = a[H];
          if (H === $s)
            typeof V == "string" ? e.textContent !== V && (a[ko] !== !0 && Dh(e.textContent, V, s, f), j = [$s, V]) : typeof V == "number" && e.textContent !== "" + V && (a[ko] !== !0 && Dh(e.textContent, V, s, f), j = [$s, "" + V]);
          else if (nt.hasOwnProperty(H))
            V != null && (typeof V != "function" && _h(H, V), H === "onScroll" && Sn("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var ce = void 0, Ae = en(H);
            if (a[ko] !== !0) {
              if (!(H === Th || H === ko || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              H === "value" || H === "checked" || H === "selected")) {
                if (H === ap) {
                  var De = e.innerHTML, Tt = V ? V[bh] : void 0;
                  if (Tt != null) {
                    var gt = GE(e, Tt);
                    gt !== De && ip(H, De, gt);
                  }
                } else if (H === Is) {
                  if (v.delete(H), WE) {
                    var L = ay(V);
                    ce = e.getAttribute("style"), L !== ce && ip(H, ce, L);
                  }
                } else if (p && !D)
                  v.delete(H.toLowerCase()), ce = tu(e, H, V), V !== ce && ip(H, ce, V);
                else if (!vn(H, Ae, p) && !Xn(H, V, Ae, p)) {
                  var B = !1;
                  if (Ae !== null)
                    v.delete(Ae.attributeName), ce = vl(e, H, V, Ae);
                  else {
                    var M = i;
                    if (M === $i && (M = nd(t)), M === $i)
                      v.delete(H.toLowerCase());
                    else {
                      var Z = uT(H);
                      Z !== null && Z !== H && (B = !0, v.delete(Z)), v.delete(H);
                    }
                    ce = tu(e, H, V);
                  }
                  var he = D;
                  !he && V !== ce && !B && ip(H, ce, V);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      v.size > 0 && a[ko] !== !0 && QE(v), t) {
        case "input":
          Ja(e), A(e, a, !0);
          break;
        case "textarea":
          Ja(e), uv(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && Oh(e);
          break;
      }
      return j;
    }
    function sT(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function zy(e, t) {
      {
        if (Aa)
          return;
        Aa = !0, g("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function Uy(e, t) {
      {
        if (Aa)
          return;
        Aa = !0, g('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function jy(e, t, a) {
      {
        if (Aa)
          return;
        Aa = !0, g("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function Ay(e, t) {
      {
        if (t === "" || Aa)
          return;
        Aa = !0, g('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function cT(e, t, a) {
      switch (t) {
        case "input":
          P(e, a);
          return;
        case "textarea":
          ey(e, a);
          return;
        case "select":
          Kf(e, a);
          return;
      }
    }
    var lp = function() {
    }, up = function() {
    };
    {
      var fT = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], XE = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
        // TODO: Distinguish by namespace here -- for <title>, including it here
        // errs on the side of fewer warnings
        "foreignObject",
        "desc",
        "title"
      ], dT = XE.concat(["button"]), pT = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], KE = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      up = function(e, t) {
        var a = rt({}, e || KE), i = {
          tag: t
        };
        return XE.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), dT.indexOf(t) !== -1 && (a.pTagInButtonScope = null), fT.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var vT = function(e, t) {
        switch (t) {
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          case "option":
            return e === "#text";
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          case "colgroup":
            return e === "col" || e === "template";
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return pT.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, hT = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, JE = {};
      lp = function(e, t, a) {
        a = a || KE;
        var i = a.current, u = i && i.tag;
        t != null && (e != null && g("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = vT(e, u) ? null : i, f = s ? null : hT(e, a), p = s || f;
        if (p) {
          var v = p.tag, y = !!s + "|" + e + "|" + v;
          if (!JE[y]) {
            JE[y] = !0;
            var S = e, _ = "";
            if (e === "#text" ? /\S/.test(t) ? S = "Text nodes" : (S = "Whitespace text nodes", _ = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : S = "<" + e + ">", s) {
              var b = "";
              v === "table" && e === "tr" && (b += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), g("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", S, v, _, b);
            } else
              g("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", S, v);
          }
        }
      };
    }
    var Nh = "suppressHydrationWarning", Lh = "$", Mh = "/$", op = "$?", sp = "$!", mT = "style", Fy = null, Hy = null;
    function yT(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case Yi:
        case ad: {
          t = i === Yi ? "#document" : "#fragment";
          var u = e.documentElement;
          a = u ? u.namespaceURI : rd(null, "");
          break;
        }
        default: {
          var s = i === Ln ? e.parentNode : e, f = s.namespaceURI || null;
          t = s.tagName, a = rd(f, t);
          break;
        }
      }
      {
        var p = t.toLowerCase(), v = up(null, p);
        return {
          namespace: a,
          ancestorInfo: v
        };
      }
    }
    function gT(e, t, a) {
      {
        var i = e, u = rd(i.namespace, t), s = up(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: s
        };
      }
    }
    function rD(e) {
      return e;
    }
    function ST(e) {
      Fy = Fn(), Hy = MR();
      var t = null;
      return Wn(!1), t;
    }
    function ET(e) {
      zR(Hy), Wn(Fy), Fy = null, Hy = null;
    }
    function CT(e, t, a, i, u) {
      var s;
      {
        var f = i;
        if (lp(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, v = up(f.ancestorInfo, e);
          lp(null, p, v);
        }
        s = f.namespace;
      }
      var y = nT(e, t, a, s);
      return dp(u, y), Wy(y, t), y;
    }
    function xT(e, t) {
      e.appendChild(t);
    }
    function RT(e, t, a, i, u) {
      switch (aT(e, t, a, i), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!a.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function TT(e, t, a, i, u, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, v = up(f.ancestorInfo, t);
          lp(null, p, v);
        }
      }
      return iT(e, t, a, i);
    }
    function Py(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function bT(e, t, a, i) {
      {
        var u = a;
        lp(null, e, u.ancestorInfo);
      }
      var s = rT(e, t);
      return dp(i, s), s;
    }
    function wT() {
      var e = window.event;
      return e === void 0 ? Ma : uf(e.type);
    }
    var Vy = typeof setTimeout == "function" ? setTimeout : void 0, _T = typeof clearTimeout == "function" ? clearTimeout : void 0, By = -1, ZE = typeof Promise == "function" ? Promise : void 0, kT = typeof queueMicrotask == "function" ? queueMicrotask : typeof ZE < "u" ? function(e) {
      return ZE.resolve(null).then(e).catch(DT);
    } : Vy;
    function DT(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function OT(e, t, a, i) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          return;
        case "img": {
          a.src && (e.src = a.src);
          return;
        }
      }
    }
    function NT(e, t, a, i, u, s) {
      lT(e, t, a, i, u), Wy(e, u);
    }
    function eC(e) {
      ao(e, "");
    }
    function LT(e, t, a) {
      e.nodeValue = a;
    }
    function MT(e, t) {
      e.appendChild(t);
    }
    function zT(e, t) {
      var a;
      e.nodeType === Ln ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && Oh(a);
    }
    function UT(e, t, a) {
      e.insertBefore(t, a);
    }
    function jT(e, t, a) {
      e.nodeType === Ln ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function AT(e, t) {
      e.removeChild(t);
    }
    function FT(e, t) {
      e.nodeType === Ln ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function $y(e, t) {
      var a = t, i = 0;
      do {
        var u = a.nextSibling;
        if (e.removeChild(a), u && u.nodeType === Ln) {
          var s = u.data;
          if (s === Mh)
            if (i === 0) {
              e.removeChild(u), Du(t);
              return;
            } else
              i--;
          else (s === Lh || s === op || s === sp) && i++;
        }
        a = u;
      } while (a);
      Du(t);
    }
    function HT(e, t) {
      e.nodeType === Ln ? $y(e.parentNode, t) : e.nodeType === Qr && $y(e, t), Du(e);
    }
    function PT(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function VT(e) {
      e.nodeValue = "";
    }
    function BT(e, t) {
      e = e;
      var a = t[mT], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = dc("display", i);
    }
    function $T(e, t) {
      e.nodeValue = t;
    }
    function IT(e) {
      e.nodeType === Qr ? e.textContent = "" : e.nodeType === Yi && e.documentElement && e.removeChild(e.documentElement);
    }
    function YT(e, t, a) {
      return e.nodeType !== Qr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function QT(e, t) {
      return t === "" || e.nodeType !== Ii ? null : e;
    }
    function WT(e) {
      return e.nodeType !== Ln ? null : e;
    }
    function tC(e) {
      return e.data === op;
    }
    function Iy(e) {
      return e.data === sp;
    }
    function GT(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, u;
      return t && (a = t.dgst, i = t.msg, u = t.stck), {
        message: i,
        digest: a,
        stack: u
      };
    }
    function qT(e, t) {
      e._reactRetry = t;
    }
    function zh(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Qr || t === Ii)
          break;
        if (t === Ln) {
          var a = e.data;
          if (a === Lh || a === sp || a === op)
            break;
          if (a === Mh)
            return null;
        }
      }
      return e;
    }
    function cp(e) {
      return zh(e.nextSibling);
    }
    function XT(e) {
      return zh(e.firstChild);
    }
    function KT(e) {
      return zh(e.firstChild);
    }
    function JT(e) {
      return zh(e.nextSibling);
    }
    function ZT(e, t, a, i, u, s, f) {
      dp(s, e), Wy(e, a);
      var p;
      {
        var v = u;
        p = v.namespace;
      }
      var y = (s.mode & ft) !== ze;
      return oT(e, t, a, p, i, y, f);
    }
    function eb(e, t, a, i) {
      return dp(a, e), a.mode & ft, sT(e, t);
    }
    function tb(e, t) {
      dp(t, e);
    }
    function nb(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === Ln) {
          var i = t.data;
          if (i === Mh) {
            if (a === 0)
              return cp(t);
            a--;
          } else (i === Lh || i === sp || i === op) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function nC(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === Ln) {
          var i = t.data;
          if (i === Lh || i === sp || i === op) {
            if (a === 0)
              return t;
            a--;
          } else i === Mh && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function rb(e) {
      Du(e);
    }
    function ab(e) {
      Du(e);
    }
    function ib(e) {
      return e !== "head" && e !== "body";
    }
    function lb(e, t, a, i) {
      var u = !0;
      Dh(t.nodeValue, a, i, u);
    }
    function ub(e, t, a, i, u, s) {
      if (t[Nh] !== !0) {
        var f = !0;
        Dh(i.nodeValue, u, s, f);
      }
    }
    function ob(e, t) {
      t.nodeType === Qr ? zy(e, t) : t.nodeType === Ln || Uy(e, t);
    }
    function sb(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Qr ? zy(a, t) : t.nodeType === Ln || Uy(a, t));
      }
    }
    function cb(e, t, a, i, u) {
      (u || t[Nh] !== !0) && (i.nodeType === Qr ? zy(a, i) : i.nodeType === Ln || Uy(a, i));
    }
    function fb(e, t, a) {
      jy(e, t);
    }
    function db(e, t) {
      Ay(e, t);
    }
    function pb(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && jy(i, t);
      }
    }
    function vb(e, t) {
      {
        var a = e.parentNode;
        a !== null && Ay(a, t);
      }
    }
    function hb(e, t, a, i, u, s) {
      (s || t[Nh] !== !0) && jy(a, i);
    }
    function mb(e, t, a, i, u) {
      (u || t[Nh] !== !0) && Ay(a, i);
    }
    function yb(e) {
      g("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function gb(e) {
      np(e);
    }
    var Cf = Math.random().toString(36).slice(2), xf = "__reactFiber$" + Cf, Yy = "__reactProps$" + Cf, fp = "__reactContainer$" + Cf, Qy = "__reactEvents$" + Cf, Sb = "__reactListeners$" + Cf, Eb = "__reactHandles$" + Cf;
    function Cb(e) {
      delete e[xf], delete e[Yy], delete e[Qy], delete e[Sb], delete e[Eb];
    }
    function dp(e, t) {
      t[xf] = e;
    }
    function Uh(e, t) {
      t[fp] = e;
    }
    function rC(e) {
      e[fp] = null;
    }
    function pp(e) {
      return !!e[fp];
    }
    function Ys(e) {
      var t = e[xf];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[fp] || a[xf], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var u = nC(e); u !== null; ) {
              var s = u[xf];
              if (s)
                return s;
              u = nC(u);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Do(e) {
      var t = e[xf] || e[fp];
      return t && (t.tag === fe || t.tag === Xe || t.tag === Le || t.tag === re) ? t : null;
    }
    function Rf(e) {
      if (e.tag === fe || e.tag === Xe)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function jh(e) {
      return e[Yy] || null;
    }
    function Wy(e, t) {
      e[Yy] = t;
    }
    function xb(e) {
      var t = e[Qy];
      return t === void 0 && (t = e[Qy] = /* @__PURE__ */ new Set()), t;
    }
    var aC = {}, iC = k.ReactDebugCurrentFrame;
    function Ah(e) {
      if (e) {
        var t = e._owner, a = Pi(e.type, e._source, t ? t.type : null);
        iC.setExtraStackFrame(a);
      } else
        iC.setExtraStackFrame(null);
    }
    function nl(e, t, a, i, u) {
      {
        var s = Function.call.bind(br);
        for (var f in e)
          if (s(e, f)) {
            var p = void 0;
            try {
              if (typeof e[f] != "function") {
                var v = Error((i || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw v.name = "Invariant Violation", v;
              }
              p = e[f](t, f, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (y) {
              p = y;
            }
            p && !(p instanceof Error) && (Ah(u), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), Ah(null)), p instanceof Error && !(p.message in aC) && (aC[p.message] = !0, Ah(u), g("Failed %s type: %s", a, p.message), Ah(null));
          }
      }
    }
    var Gy = [], Fh;
    Fh = [];
    var Uu = -1;
    function Oo(e) {
      return {
        current: e
      };
    }
    function ra(e, t) {
      if (Uu < 0) {
        g("Unexpected pop.");
        return;
      }
      t !== Fh[Uu] && g("Unexpected Fiber popped."), e.current = Gy[Uu], Gy[Uu] = null, Fh[Uu] = null, Uu--;
    }
    function aa(e, t, a) {
      Uu++, Gy[Uu] = e.current, Fh[Uu] = a, e.current = t;
    }
    var qy;
    qy = {};
    var li = {};
    Object.freeze(li);
    var ju = Oo(li), $l = Oo(!1), Xy = li;
    function Tf(e, t, a) {
      return a && Il(t) ? Xy : ju.current;
    }
    function lC(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function bf(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return li;
        var u = e.stateNode;
        if (u && u.__reactInternalMemoizedUnmaskedChildContext === t)
          return u.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var f in i)
          s[f] = t[f];
        {
          var p = We(e) || "Unknown";
          nl(i, s, "context", p);
        }
        return u && lC(e, t, s), s;
      }
    }
    function Hh() {
      return $l.current;
    }
    function Il(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function Ph(e) {
      ra($l, e), ra(ju, e);
    }
    function Ky(e) {
      ra($l, e), ra(ju, e);
    }
    function uC(e, t, a) {
      {
        if (ju.current !== li)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        aa(ju, t, e), aa($l, a, e);
      }
    }
    function oC(e, t, a) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = We(e) || "Unknown";
            qy[s] || (qy[s] = !0, g("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var p in f)
          if (!(p in u))
            throw new Error((We(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var v = We(e) || "Unknown";
          nl(u, f, "child context", v);
        }
        return rt({}, a, f);
      }
    }
    function Vh(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || li;
        return Xy = ju.current, aa(ju, a, e), aa($l, $l.current, e), !0;
      }
    }
    function sC(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = oC(e, t, Xy);
          i.__reactInternalMemoizedMergedChildContext = u, ra($l, e), ra(ju, e), aa(ju, u, e), aa($l, a, e);
        } else
          ra($l, e), aa($l, a, e);
      }
    }
    function Rb(e) {
      {
        if (!hu(e) || e.tag !== Y)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case re:
              return t.stateNode.context;
            case Y: {
              var a = t.type;
              if (Il(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var No = 0, Bh = 1, Au = null, Jy = !1, Zy = !1;
    function cC(e) {
      Au === null ? Au = [e] : Au.push(e);
    }
    function Tb(e) {
      Jy = !0, cC(e);
    }
    function fC() {
      Jy && Lo();
    }
    function Lo() {
      if (!Zy && Au !== null) {
        Zy = !0;
        var e = 0, t = Ua();
        try {
          var a = !0, i = Au;
          for (An(Nr); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          Au = null, Jy = !1;
        } catch (s) {
          throw Au !== null && (Au = Au.slice(e + 1)), md(cs, Lo), s;
        } finally {
          An(t), Zy = !1;
        }
      }
      return null;
    }
    var wf = [], _f = 0, $h = null, Ih = 0, Ni = [], Li = 0, Qs = null, Fu = 1, Hu = "";
    function bb(e) {
      return Gs(), (e.flags & Ci) !== Me;
    }
    function wb(e) {
      return Gs(), Ih;
    }
    function _b() {
      var e = Hu, t = Fu, a = t & ~kb(t);
      return a.toString(32) + e;
    }
    function Ws(e, t) {
      Gs(), wf[_f++] = Ih, wf[_f++] = $h, $h = e, Ih = t;
    }
    function dC(e, t, a) {
      Gs(), Ni[Li++] = Fu, Ni[Li++] = Hu, Ni[Li++] = Qs, Qs = e;
      var i = Fu, u = Hu, s = Yh(i) - 1, f = i & ~(1 << s), p = a + 1, v = Yh(t) + s;
      if (v > 30) {
        var y = s - s % 5, S = (1 << y) - 1, _ = (f & S).toString(32), b = f >> y, j = s - y, H = Yh(t) + j, V = p << j, ce = V | b, Ae = _ + u;
        Fu = 1 << H | ce, Hu = Ae;
      } else {
        var De = p << s, Tt = De | f, gt = u;
        Fu = 1 << v | Tt, Hu = gt;
      }
    }
    function eg(e) {
      Gs();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        Ws(e, a), dC(e, a, i);
      }
    }
    function Yh(e) {
      return 32 - Un(e);
    }
    function kb(e) {
      return 1 << Yh(e) - 1;
    }
    function tg(e) {
      for (; e === $h; )
        $h = wf[--_f], wf[_f] = null, Ih = wf[--_f], wf[_f] = null;
      for (; e === Qs; )
        Qs = Ni[--Li], Ni[Li] = null, Hu = Ni[--Li], Ni[Li] = null, Fu = Ni[--Li], Ni[Li] = null;
    }
    function Db() {
      return Gs(), Qs !== null ? {
        id: Fu,
        overflow: Hu
      } : null;
    }
    function Ob(e, t) {
      Gs(), Ni[Li++] = Fu, Ni[Li++] = Hu, Ni[Li++] = Qs, Fu = t.id, Hu = t.overflow, Qs = e;
    }
    function Gs() {
      jr() || g("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Ur = null, Mi = null, rl = !1, qs = !1, Mo = null;
    function Nb() {
      rl && g("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function pC() {
      qs = !0;
    }
    function Lb() {
      return qs;
    }
    function Mb(e) {
      var t = e.stateNode.containerInfo;
      return Mi = KT(t), Ur = e, rl = !0, Mo = null, qs = !1, !0;
    }
    function zb(e, t, a) {
      return Mi = JT(t), Ur = e, rl = !0, Mo = null, qs = !1, a !== null && Ob(e, a), !0;
    }
    function vC(e, t) {
      switch (e.tag) {
        case re: {
          ob(e.stateNode.containerInfo, t);
          break;
        }
        case fe: {
          var a = (e.mode & ft) !== ze;
          cb(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case Le: {
          var i = e.memoizedState;
          i.dehydrated !== null && sb(i.dehydrated, t);
          break;
        }
      }
    }
    function hC(e, t) {
      vC(e, t);
      var a = F_();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= ka) : i.push(a);
    }
    function ng(e, t) {
      {
        if (qs)
          return;
        switch (e.tag) {
          case re: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case fe:
                var i = t.type;
                t.pendingProps, fb(a, i);
                break;
              case Xe:
                var u = t.pendingProps;
                db(a, u);
                break;
            }
            break;
          }
          case fe: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case fe: {
                var v = t.type, y = t.pendingProps, S = (e.mode & ft) !== ze;
                hb(
                  s,
                  f,
                  p,
                  v,
                  y,
                  // TODO: Delete this argument when we remove the legacy root API.
                  S
                );
                break;
              }
              case Xe: {
                var _ = t.pendingProps, b = (e.mode & ft) !== ze;
                mb(
                  s,
                  f,
                  p,
                  _,
                  // TODO: Delete this argument when we remove the legacy root API.
                  b
                );
                break;
              }
            }
            break;
          }
          case Le: {
            var j = e.memoizedState, H = j.dehydrated;
            if (H !== null) switch (t.tag) {
              case fe:
                var V = t.type;
                t.pendingProps, pb(H, V);
                break;
              case Xe:
                var ce = t.pendingProps;
                vb(H, ce);
                break;
            }
            break;
          }
          default:
            return;
        }
      }
    }
    function mC(e, t) {
      t.flags = t.flags & ~Gr | mn, ng(e, t);
    }
    function yC(e, t) {
      switch (e.tag) {
        case fe: {
          var a = e.type;
          e.pendingProps;
          var i = YT(t, a);
          return i !== null ? (e.stateNode = i, Ur = e, Mi = XT(i), !0) : !1;
        }
        case Xe: {
          var u = e.pendingProps, s = QT(t, u);
          return s !== null ? (e.stateNode = s, Ur = e, Mi = null, !0) : !1;
        }
        case Le: {
          var f = WT(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: Db(),
              retryLane: Jr
            };
            e.memoizedState = p;
            var v = H_(f);
            return v.return = e, e.child = v, Ur = e, Mi = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function rg(e) {
      return (e.mode & ft) !== ze && (e.flags & Oe) === Me;
    }
    function ag(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function ig(e) {
      if (rl) {
        var t = Mi;
        if (!t) {
          rg(e) && (ng(Ur, e), ag()), mC(Ur, e), rl = !1, Ur = e;
          return;
        }
        var a = t;
        if (!yC(e, t)) {
          rg(e) && (ng(Ur, e), ag()), t = cp(a);
          var i = Ur;
          if (!t || !yC(e, t)) {
            mC(Ur, e), rl = !1, Ur = e;
            return;
          }
          hC(i, a);
        }
      }
    }
    function Ub(e, t, a) {
      var i = e.stateNode, u = !qs, s = ZT(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = s, s !== null;
    }
    function jb(e) {
      var t = e.stateNode, a = e.memoizedProps, i = eb(t, a, e);
      if (i) {
        var u = Ur;
        if (u !== null)
          switch (u.tag) {
            case re: {
              var s = u.stateNode.containerInfo, f = (u.mode & ft) !== ze;
              lb(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case fe: {
              var p = u.type, v = u.memoizedProps, y = u.stateNode, S = (u.mode & ft) !== ze;
              ub(
                p,
                v,
                y,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                S
              );
              break;
            }
          }
      }
      return i;
    }
    function Ab(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      tb(a, e);
    }
    function Fb(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return nb(a);
    }
    function gC(e) {
      for (var t = e.return; t !== null && t.tag !== fe && t.tag !== re && t.tag !== Le; )
        t = t.return;
      Ur = t;
    }
    function Qh(e) {
      if (e !== Ur)
        return !1;
      if (!rl)
        return gC(e), rl = !0, !1;
      if (e.tag !== re && (e.tag !== fe || ib(e.type) && !Py(e.type, e.memoizedProps))) {
        var t = Mi;
        if (t)
          if (rg(e))
            SC(e), ag();
          else
            for (; t; )
              hC(e, t), t = cp(t);
      }
      return gC(e), e.tag === Le ? Mi = Fb(e) : Mi = Ur ? cp(e.stateNode) : null, !0;
    }
    function Hb() {
      return rl && Mi !== null;
    }
    function SC(e) {
      for (var t = Mi; t; )
        vC(e, t), t = cp(t);
    }
    function kf() {
      Ur = null, Mi = null, rl = !1, qs = !1;
    }
    function EC() {
      Mo !== null && (px(Mo), Mo = null);
    }
    function jr() {
      return rl;
    }
    function lg(e) {
      Mo === null ? Mo = [e] : Mo.push(e);
    }
    var Pb = k.ReactCurrentBatchConfig, Vb = null;
    function Bb() {
      return Pb.transition;
    }
    var al = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var $b = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & Gt && (t = a), a = a.return;
        return t;
      }, Xs = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, vp = [], hp = [], mp = [], yp = [], gp = [], Sp = [], Ks = /* @__PURE__ */ new Set();
      al.recordUnsafeLifecycleWarnings = function(e, t) {
        Ks.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && vp.push(e), e.mode & Gt && typeof t.UNSAFE_componentWillMount == "function" && hp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && mp.push(e), e.mode & Gt && typeof t.UNSAFE_componentWillReceiveProps == "function" && yp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && gp.push(e), e.mode & Gt && typeof t.UNSAFE_componentWillUpdate == "function" && Sp.push(e));
      }, al.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        vp.length > 0 && (vp.forEach(function(b) {
          e.add(We(b) || "Component"), Ks.add(b.type);
        }), vp = []);
        var t = /* @__PURE__ */ new Set();
        hp.length > 0 && (hp.forEach(function(b) {
          t.add(We(b) || "Component"), Ks.add(b.type);
        }), hp = []);
        var a = /* @__PURE__ */ new Set();
        mp.length > 0 && (mp.forEach(function(b) {
          a.add(We(b) || "Component"), Ks.add(b.type);
        }), mp = []);
        var i = /* @__PURE__ */ new Set();
        yp.length > 0 && (yp.forEach(function(b) {
          i.add(We(b) || "Component"), Ks.add(b.type);
        }), yp = []);
        var u = /* @__PURE__ */ new Set();
        gp.length > 0 && (gp.forEach(function(b) {
          u.add(We(b) || "Component"), Ks.add(b.type);
        }), gp = []);
        var s = /* @__PURE__ */ new Set();
        if (Sp.length > 0 && (Sp.forEach(function(b) {
          s.add(We(b) || "Component"), Ks.add(b.type);
        }), Sp = []), t.size > 0) {
          var f = Xs(t);
          g(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var p = Xs(i);
          g(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, p);
        }
        if (s.size > 0) {
          var v = Xs(s);
          g(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, v);
        }
        if (e.size > 0) {
          var y = Xs(e);
          ee(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, y);
        }
        if (a.size > 0) {
          var S = Xs(a);
          ee(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, S);
        }
        if (u.size > 0) {
          var _ = Xs(u);
          ee(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, _);
        }
      };
      var Wh = /* @__PURE__ */ new Map(), CC = /* @__PURE__ */ new Set();
      al.recordLegacyContextWarning = function(e, t) {
        var a = $b(e);
        if (a === null) {
          g("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!CC.has(e.type)) {
          var i = Wh.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], Wh.set(a, i)), i.push(e));
        }
      }, al.flushLegacyContextWarning = function() {
        Wh.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(We(s) || "Component"), CC.add(s.type);
            });
            var u = Xs(i);
            try {
              Yt(a), g(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              sn();
            }
          }
        });
      }, al.discardPendingWarnings = function() {
        vp = [], hp = [], mp = [], yp = [], gp = [], Sp = [], Wh = /* @__PURE__ */ new Map();
      };
    }
    var ug, og, sg, cg, fg, xC = function(e, t) {
    };
    ug = !1, og = !1, sg = {}, cg = {}, fg = {}, xC = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = We(t) || "Component";
        cg[a] || (cg[a] = !0, g('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function Ib(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function Ep(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & Gt || $) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self) && // Will already throw with "Function components cannot have string refs"
        !(a._owner && a._owner.tag !== Y) && // Will already warn with "Function components cannot be given refs"
        !(typeof a.type == "function" && !Ib(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        a._owner) {
          var u = We(e) || "Component";
          sg[u] || (g('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', u, i), sg[u] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var p = s;
            if (p.tag !== Y)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            f = p.stateNode;
          }
          if (!f)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var v = f;
          si(i, "ref");
          var y = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === y)
            return t.ref;
          var S = function(_) {
            var b = v.refs;
            _ === null ? delete b[y] : b[y] = _;
          };
          return S._stringRef = y, S;
        } else {
          if (typeof i != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!a._owner)
            throw new Error("Element ref was specified as a string (" + i + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return i;
    }
    function Gh(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function qh(e) {
      {
        var t = We(e) || "Component";
        if (fg[t])
          return;
        fg[t] = !0, g("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function RC(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function TC(e) {
      function t(L, B) {
        if (e) {
          var M = L.deletions;
          M === null ? (L.deletions = [B], L.flags |= ka) : M.push(B);
        }
      }
      function a(L, B) {
        if (!e)
          return null;
        for (var M = B; M !== null; )
          t(L, M), M = M.sibling;
        return null;
      }
      function i(L, B) {
        for (var M = /* @__PURE__ */ new Map(), Z = B; Z !== null; )
          Z.key !== null ? M.set(Z.key, Z) : M.set(Z.index, Z), Z = Z.sibling;
        return M;
      }
      function u(L, B) {
        var M = lc(L, B);
        return M.index = 0, M.sibling = null, M;
      }
      function s(L, B, M) {
        if (L.index = M, !e)
          return L.flags |= Ci, B;
        var Z = L.alternate;
        if (Z !== null) {
          var he = Z.index;
          return he < B ? (L.flags |= mn, B) : he;
        } else
          return L.flags |= mn, B;
      }
      function f(L) {
        return e && L.alternate === null && (L.flags |= mn), L;
      }
      function p(L, B, M, Z) {
        if (B === null || B.tag !== Xe) {
          var he = lE(M, L.mode, Z);
          return he.return = L, he;
        } else {
          var de = u(B, M);
          return de.return = L, de;
        }
      }
      function v(L, B, M, Z) {
        var he = M.type;
        if (he === fi)
          return S(L, B, M.props.children, Z, M.key);
        if (B !== null && (B.elementType === he || // Keep this check inline so it only runs on the false path:
        Dx(B, M) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof he == "object" && he !== null && he.$$typeof === Ge && RC(he) === B.type)) {
          var de = u(B, M.props);
          return de.ref = Ep(L, B, M), de.return = L, de._debugSource = M._source, de._debugOwner = M._owner, de;
        }
        var Ye = iE(M, L.mode, Z);
        return Ye.ref = Ep(L, B, M), Ye.return = L, Ye;
      }
      function y(L, B, M, Z) {
        if (B === null || B.tag !== we || B.stateNode.containerInfo !== M.containerInfo || B.stateNode.implementation !== M.implementation) {
          var he = uE(M, L.mode, Z);
          return he.return = L, he;
        } else {
          var de = u(B, M.children || []);
          return de.return = L, de;
        }
      }
      function S(L, B, M, Z, he) {
        if (B === null || B.tag !== Et) {
          var de = Io(M, L.mode, Z, he);
          return de.return = L, de;
        } else {
          var Ye = u(B, M);
          return Ye.return = L, Ye;
        }
      }
      function _(L, B, M) {
        if (typeof B == "string" && B !== "" || typeof B == "number") {
          var Z = lE("" + B, L.mode, M);
          return Z.return = L, Z;
        }
        if (typeof B == "object" && B !== null) {
          switch (B.$$typeof) {
            case _r: {
              var he = iE(B, L.mode, M);
              return he.ref = Ep(L, null, B), he.return = L, he;
            }
            case rr: {
              var de = uE(B, L.mode, M);
              return de.return = L, de;
            }
            case Ge: {
              var Ye = B._payload, Je = B._init;
              return _(L, Je(Ye), M);
            }
          }
          if (ut(B) || et(B)) {
            var Xt = Io(B, L.mode, M, null);
            return Xt.return = L, Xt;
          }
          Gh(L, B);
        }
        return typeof B == "function" && qh(L), null;
      }
      function b(L, B, M, Z) {
        var he = B !== null ? B.key : null;
        if (typeof M == "string" && M !== "" || typeof M == "number")
          return he !== null ? null : p(L, B, "" + M, Z);
        if (typeof M == "object" && M !== null) {
          switch (M.$$typeof) {
            case _r:
              return M.key === he ? v(L, B, M, Z) : null;
            case rr:
              return M.key === he ? y(L, B, M, Z) : null;
            case Ge: {
              var de = M._payload, Ye = M._init;
              return b(L, B, Ye(de), Z);
            }
          }
          if (ut(M) || et(M))
            return he !== null ? null : S(L, B, M, Z, null);
          Gh(L, M);
        }
        return typeof M == "function" && qh(L), null;
      }
      function j(L, B, M, Z, he) {
        if (typeof Z == "string" && Z !== "" || typeof Z == "number") {
          var de = L.get(M) || null;
          return p(B, de, "" + Z, he);
        }
        if (typeof Z == "object" && Z !== null) {
          switch (Z.$$typeof) {
            case _r: {
              var Ye = L.get(Z.key === null ? M : Z.key) || null;
              return v(B, Ye, Z, he);
            }
            case rr: {
              var Je = L.get(Z.key === null ? M : Z.key) || null;
              return y(B, Je, Z, he);
            }
            case Ge:
              var Xt = Z._payload, Ut = Z._init;
              return j(L, B, M, Ut(Xt), he);
          }
          if (ut(Z) || et(Z)) {
            var Gn = L.get(M) || null;
            return S(B, Gn, Z, he, null);
          }
          Gh(B, Z);
        }
        return typeof Z == "function" && qh(B), null;
      }
      function H(L, B, M) {
        {
          if (typeof L != "object" || L === null)
            return B;
          switch (L.$$typeof) {
            case _r:
            case rr:
              xC(L, M);
              var Z = L.key;
              if (typeof Z != "string")
                break;
              if (B === null) {
                B = /* @__PURE__ */ new Set(), B.add(Z);
                break;
              }
              if (!B.has(Z)) {
                B.add(Z);
                break;
              }
              g("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", Z);
              break;
            case Ge:
              var he = L._payload, de = L._init;
              H(de(he), B, M);
              break;
          }
        }
        return B;
      }
      function V(L, B, M, Z) {
        for (var he = null, de = 0; de < M.length; de++) {
          var Ye = M[de];
          he = H(Ye, he, L);
        }
        for (var Je = null, Xt = null, Ut = B, Gn = 0, jt = 0, Pn = null; Ut !== null && jt < M.length; jt++) {
          Ut.index > jt ? (Pn = Ut, Ut = null) : Pn = Ut.sibling;
          var la = b(L, Ut, M[jt], Z);
          if (la === null) {
            Ut === null && (Ut = Pn);
            break;
          }
          e && Ut && la.alternate === null && t(L, Ut), Gn = s(la, Gn, jt), Xt === null ? Je = la : Xt.sibling = la, Xt = la, Ut = Pn;
        }
        if (jt === M.length) {
          if (a(L, Ut), jr()) {
            var $r = jt;
            Ws(L, $r);
          }
          return Je;
        }
        if (Ut === null) {
          for (; jt < M.length; jt++) {
            var oi = _(L, M[jt], Z);
            oi !== null && (Gn = s(oi, Gn, jt), Xt === null ? Je = oi : Xt.sibling = oi, Xt = oi);
          }
          if (jr()) {
            var Ca = jt;
            Ws(L, Ca);
          }
          return Je;
        }
        for (var xa = i(L, Ut); jt < M.length; jt++) {
          var ua = j(xa, L, jt, M[jt], Z);
          ua !== null && (e && ua.alternate !== null && xa.delete(ua.key === null ? jt : ua.key), Gn = s(ua, Gn, jt), Xt === null ? Je = ua : Xt.sibling = ua, Xt = ua);
        }
        if (e && xa.forEach(function(Wf) {
          return t(L, Wf);
        }), jr()) {
          var Qu = jt;
          Ws(L, Qu);
        }
        return Je;
      }
      function ce(L, B, M, Z) {
        var he = et(M);
        if (typeof he != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          M[Symbol.toStringTag] === "Generator" && (og || g("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), og = !0), M.entries === he && (ug || g("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), ug = !0);
          var de = he.call(M);
          if (de)
            for (var Ye = null, Je = de.next(); !Je.done; Je = de.next()) {
              var Xt = Je.value;
              Ye = H(Xt, Ye, L);
            }
        }
        var Ut = he.call(M);
        if (Ut == null)
          throw new Error("An iterable object provided no iterator.");
        for (var Gn = null, jt = null, Pn = B, la = 0, $r = 0, oi = null, Ca = Ut.next(); Pn !== null && !Ca.done; $r++, Ca = Ut.next()) {
          Pn.index > $r ? (oi = Pn, Pn = null) : oi = Pn.sibling;
          var xa = b(L, Pn, Ca.value, Z);
          if (xa === null) {
            Pn === null && (Pn = oi);
            break;
          }
          e && Pn && xa.alternate === null && t(L, Pn), la = s(xa, la, $r), jt === null ? Gn = xa : jt.sibling = xa, jt = xa, Pn = oi;
        }
        if (Ca.done) {
          if (a(L, Pn), jr()) {
            var ua = $r;
            Ws(L, ua);
          }
          return Gn;
        }
        if (Pn === null) {
          for (; !Ca.done; $r++, Ca = Ut.next()) {
            var Qu = _(L, Ca.value, Z);
            Qu !== null && (la = s(Qu, la, $r), jt === null ? Gn = Qu : jt.sibling = Qu, jt = Qu);
          }
          if (jr()) {
            var Wf = $r;
            Ws(L, Wf);
          }
          return Gn;
        }
        for (var Jp = i(L, Pn); !Ca.done; $r++, Ca = Ut.next()) {
          var Jl = j(Jp, L, $r, Ca.value, Z);
          Jl !== null && (e && Jl.alternate !== null && Jp.delete(Jl.key === null ? $r : Jl.key), la = s(Jl, la, $r), jt === null ? Gn = Jl : jt.sibling = Jl, jt = Jl);
        }
        if (e && Jp.forEach(function(mk) {
          return t(L, mk);
        }), jr()) {
          var hk = $r;
          Ws(L, hk);
        }
        return Gn;
      }
      function Ae(L, B, M, Z) {
        if (B !== null && B.tag === Xe) {
          a(L, B.sibling);
          var he = u(B, M);
          return he.return = L, he;
        }
        a(L, B);
        var de = lE(M, L.mode, Z);
        return de.return = L, de;
      }
      function De(L, B, M, Z) {
        for (var he = M.key, de = B; de !== null; ) {
          if (de.key === he) {
            var Ye = M.type;
            if (Ye === fi) {
              if (de.tag === Et) {
                a(L, de.sibling);
                var Je = u(de, M.props.children);
                return Je.return = L, Je._debugSource = M._source, Je._debugOwner = M._owner, Je;
              }
            } else if (de.elementType === Ye || // Keep this check inline so it only runs on the false path:
            Dx(de, M) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof Ye == "object" && Ye !== null && Ye.$$typeof === Ge && RC(Ye) === de.type) {
              a(L, de.sibling);
              var Xt = u(de, M.props);
              return Xt.ref = Ep(L, de, M), Xt.return = L, Xt._debugSource = M._source, Xt._debugOwner = M._owner, Xt;
            }
            a(L, de);
            break;
          } else
            t(L, de);
          de = de.sibling;
        }
        if (M.type === fi) {
          var Ut = Io(M.props.children, L.mode, Z, M.key);
          return Ut.return = L, Ut;
        } else {
          var Gn = iE(M, L.mode, Z);
          return Gn.ref = Ep(L, B, M), Gn.return = L, Gn;
        }
      }
      function Tt(L, B, M, Z) {
        for (var he = M.key, de = B; de !== null; ) {
          if (de.key === he)
            if (de.tag === we && de.stateNode.containerInfo === M.containerInfo && de.stateNode.implementation === M.implementation) {
              a(L, de.sibling);
              var Ye = u(de, M.children || []);
              return Ye.return = L, Ye;
            } else {
              a(L, de);
              break;
            }
          else
            t(L, de);
          de = de.sibling;
        }
        var Je = uE(M, L.mode, Z);
        return Je.return = L, Je;
      }
      function gt(L, B, M, Z) {
        var he = typeof M == "object" && M !== null && M.type === fi && M.key === null;
        if (he && (M = M.props.children), typeof M == "object" && M !== null) {
          switch (M.$$typeof) {
            case _r:
              return f(De(L, B, M, Z));
            case rr:
              return f(Tt(L, B, M, Z));
            case Ge:
              var de = M._payload, Ye = M._init;
              return gt(L, B, Ye(de), Z);
          }
          if (ut(M))
            return V(L, B, M, Z);
          if (et(M))
            return ce(L, B, M, Z);
          Gh(L, M);
        }
        return typeof M == "string" && M !== "" || typeof M == "number" ? f(Ae(L, B, "" + M, Z)) : (typeof M == "function" && qh(L), a(L, B));
      }
      return gt;
    }
    var Df = TC(!0), bC = TC(!1);
    function Yb(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = lc(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = lc(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function Qb(e, t) {
      for (var a = e.child; a !== null; )
        M_(a, t), a = a.sibling;
    }
    var dg = Oo(null), pg;
    pg = {};
    var Xh = null, Of = null, vg = null, Kh = !1;
    function Jh() {
      Xh = null, Of = null, vg = null, Kh = !1;
    }
    function wC() {
      Kh = !0;
    }
    function _C() {
      Kh = !1;
    }
    function kC(e, t, a) {
      aa(dg, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== pg && g("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = pg;
    }
    function hg(e, t) {
      var a = dg.current;
      ra(dg, t), e._currentValue = a;
    }
    function mg(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (ku(i.childLanes, t) ? u !== null && !ku(u.childLanes, t) && (u.childLanes = tt(u.childLanes, t)) : (i.childLanes = tt(i.childLanes, t), u !== null && (u.childLanes = tt(u.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && g("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Wb(e, t, a) {
      Gb(e, t, a);
    }
    function Gb(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var u = void 0, s = i.dependencies;
        if (s !== null) {
          u = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === Y) {
                var p = Ts(a), v = Pu(Kt, p);
                v.tag = em;
                var y = i.updateQueue;
                if (y !== null) {
                  var S = y.shared, _ = S.pending;
                  _ === null ? v.next = v : (v.next = _.next, _.next = v), S.pending = v;
                }
              }
              i.lanes = tt(i.lanes, a);
              var b = i.alternate;
              b !== null && (b.lanes = tt(b.lanes, a)), mg(i.return, a, e), s.lanes = tt(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === ht)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === Jt) {
          var j = i.return;
          if (j === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          j.lanes = tt(j.lanes, a);
          var H = j.alternate;
          H !== null && (H.lanes = tt(H.lanes, a)), mg(j, a, e), u = i.sibling;
        } else
          u = i.child;
        if (u !== null)
          u.return = i;
        else
          for (u = i; u !== null; ) {
            if (u === e) {
              u = null;
              break;
            }
            var V = u.sibling;
            if (V !== null) {
              V.return = u.return, u = V;
              break;
            }
            u = u.return;
          }
        i = u;
      }
    }
    function Nf(e, t) {
      Xh = e, Of = null, vg = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (Zr(a.lanes, t) && Up(), a.firstContext = null);
      }
    }
    function tr(e) {
      Kh && g("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (vg !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (Of === null) {
          if (Xh === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Of = a, Xh.dependencies = {
            lanes: W,
            firstContext: a
          };
        } else
          Of = Of.next = a;
      }
      return t;
    }
    var Js = null;
    function yg(e) {
      Js === null ? Js = [e] : Js.push(e);
    }
    function qb() {
      if (Js !== null) {
        for (var e = 0; e < Js.length; e++) {
          var t = Js[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var i = a.next, u = t.pending;
            if (u !== null) {
              var s = u.next;
              u.next = i, a.next = s;
            }
            t.pending = a;
          }
        }
        Js = null;
      }
    }
    function DC(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, yg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Zh(e, i);
    }
    function Xb(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, yg(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function Kb(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, yg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Zh(e, i);
    }
    function Fa(e, t) {
      return Zh(e, t);
    }
    var Jb = Zh;
    function Zh(e, t) {
      e.lanes = tt(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = tt(a.lanes, t)), a === null && (e.flags & (mn | Gr)) !== Me && bx(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = tt(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = tt(a.childLanes, t) : (u.flags & (mn | Gr)) !== Me && bx(e), i = u, u = u.return;
      if (i.tag === re) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var OC = 0, NC = 1, em = 2, gg = 3, tm = !1, Sg, nm;
    Sg = !1, nm = null;
    function Eg(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: W
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function LC(e, t) {
      var a = t.updateQueue, i = e.updateQueue;
      if (a === i) {
        var u = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects
        };
        t.updateQueue = u;
      }
    }
    function Pu(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: OC,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function zo(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var u = i.shared;
      if (nm === u && !Sg && (g("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), Sg = !0), Xw()) {
        var s = u.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), u.pending = t, Jb(e, a);
      } else
        return Kb(e, u, t, a);
    }
    function rm(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var u = i.shared;
        if (Md(a)) {
          var s = u.lanes;
          s = Ud(s, e.pendingLanes);
          var f = tt(s, a);
          u.lanes = f, nf(e, f);
        }
      }
    }
    function Cg(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var u = i.updateQueue;
        if (a === u) {
          var s = null, f = null, p = a.firstBaseUpdate;
          if (p !== null) {
            var v = p;
            do {
              var y = {
                eventTime: v.eventTime,
                lane: v.lane,
                tag: v.tag,
                payload: v.payload,
                callback: v.callback,
                next: null
              };
              f === null ? s = f = y : (f.next = y, f = y), v = v.next;
            } while (v !== null);
            f === null ? s = f = t : (f.next = t, f = t);
          } else
            s = f = t;
          a = {
            baseState: u.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: f,
            shared: u.shared,
            effects: u.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var S = a.lastBaseUpdate;
      S === null ? a.firstBaseUpdate = t : S.next = t, a.lastBaseUpdate = t;
    }
    function Zb(e, t, a, i, u, s) {
      switch (a.tag) {
        case NC: {
          var f = a.payload;
          if (typeof f == "function") {
            wC();
            var p = f.call(s, i, u);
            {
              if (e.mode & Gt) {
                yn(!0);
                try {
                  f.call(s, i, u);
                } finally {
                  yn(!1);
                }
              }
              _C();
            }
            return p;
          }
          return f;
        }
        case gg:
          e.flags = e.flags & ~Kn | Oe;
        case OC: {
          var v = a.payload, y;
          if (typeof v == "function") {
            wC(), y = v.call(s, i, u);
            {
              if (e.mode & Gt) {
                yn(!0);
                try {
                  v.call(s, i, u);
                } finally {
                  yn(!1);
                }
              }
              _C();
            }
          } else
            y = v;
          return y == null ? i : rt({}, i, y);
        }
        case em:
          return tm = !0, i;
      }
      return i;
    }
    function am(e, t, a, i) {
      var u = e.updateQueue;
      tm = !1, nm = u.shared;
      var s = u.firstBaseUpdate, f = u.lastBaseUpdate, p = u.shared.pending;
      if (p !== null) {
        u.shared.pending = null;
        var v = p, y = v.next;
        v.next = null, f === null ? s = y : f.next = y, f = v;
        var S = e.alternate;
        if (S !== null) {
          var _ = S.updateQueue, b = _.lastBaseUpdate;
          b !== f && (b === null ? _.firstBaseUpdate = y : b.next = y, _.lastBaseUpdate = v);
        }
      }
      if (s !== null) {
        var j = u.baseState, H = W, V = null, ce = null, Ae = null, De = s;
        do {
          var Tt = De.lane, gt = De.eventTime;
          if (ku(i, Tt)) {
            if (Ae !== null) {
              var B = {
                eventTime: gt,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Dt,
                tag: De.tag,
                payload: De.payload,
                callback: De.callback,
                next: null
              };
              Ae = Ae.next = B;
            }
            j = Zb(e, u, De, j, t, a);
            var M = De.callback;
            if (M !== null && // If the update was already committed, we should not queue its
            // callback again.
            De.lane !== Dt) {
              e.flags |= rn;
              var Z = u.effects;
              Z === null ? u.effects = [De] : Z.push(De);
            }
          } else {
            var L = {
              eventTime: gt,
              lane: Tt,
              tag: De.tag,
              payload: De.payload,
              callback: De.callback,
              next: null
            };
            Ae === null ? (ce = Ae = L, V = j) : Ae = Ae.next = L, H = tt(H, Tt);
          }
          if (De = De.next, De === null) {
            if (p = u.shared.pending, p === null)
              break;
            var he = p, de = he.next;
            he.next = null, De = de, u.lastBaseUpdate = he, u.shared.pending = null;
          }
        } while (!0);
        Ae === null && (V = j), u.baseState = V, u.firstBaseUpdate = ce, u.lastBaseUpdate = Ae;
        var Ye = u.shared.interleaved;
        if (Ye !== null) {
          var Je = Ye;
          do
            H = tt(H, Je.lane), Je = Je.next;
          while (Je !== Ye);
        } else s === null && (u.shared.lanes = W);
        Wp(H), e.lanes = H, e.memoizedState = j;
      }
      nm = null;
    }
    function e1(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function MC() {
      tm = !1;
    }
    function im() {
      return tm;
    }
    function zC(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u], f = s.callback;
          f !== null && (s.callback = null, e1(f, a));
        }
    }
    var Cp = {}, Uo = Oo(Cp), xp = Oo(Cp), lm = Oo(Cp);
    function um(e) {
      if (e === Cp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function UC() {
      var e = um(lm.current);
      return e;
    }
    function xg(e, t) {
      aa(lm, t, e), aa(xp, e, e), aa(Uo, Cp, e);
      var a = yT(t);
      ra(Uo, e), aa(Uo, a, e);
    }
    function Lf(e) {
      ra(Uo, e), ra(xp, e), ra(lm, e);
    }
    function Rg() {
      var e = um(Uo.current);
      return e;
    }
    function jC(e) {
      um(lm.current);
      var t = um(Uo.current), a = gT(t, e.type);
      t !== a && (aa(xp, e, e), aa(Uo, a, e));
    }
    function Tg(e) {
      xp.current === e && (ra(Uo, e), ra(xp, e));
    }
    var t1 = 0, AC = 1, FC = 1, Rp = 2, il = Oo(t1);
    function bg(e, t) {
      return (e & t) !== 0;
    }
    function Mf(e) {
      return e & AC;
    }
    function wg(e, t) {
      return e & AC | t;
    }
    function n1(e, t) {
      return e | t;
    }
    function jo(e, t) {
      aa(il, t, e);
    }
    function zf(e) {
      ra(il, e);
    }
    function r1(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function om(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === Le) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || tC(i) || Iy(i))
              return t;
          }
        } else if (t.tag === ln && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & Oe) !== Me;
          if (u)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var Ha = (
      /*   */
      0
    ), cr = (
      /* */
      1
    ), Yl = (
      /*  */
      2
    ), fr = (
      /*    */
      4
    ), Ar = (
      /*   */
      8
    ), _g = [];
    function kg() {
      for (var e = 0; e < _g.length; e++) {
        var t = _g[e];
        t._workInProgressVersionPrimary = null;
      }
      _g.length = 0;
    }
    function a1(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var ve = k.ReactCurrentDispatcher, Tp = k.ReactCurrentBatchConfig, Dg, Uf;
    Dg = /* @__PURE__ */ new Set();
    var Zs = W, qt = null, dr = null, pr = null, sm = !1, bp = !1, wp = 0, i1 = 0, l1 = 25, I = null, zi = null, Ao = -1, Og = !1;
    function Vt() {
      {
        var e = I;
        zi === null ? zi = [e] : zi.push(e);
      }
    }
    function ie() {
      {
        var e = I;
        zi !== null && (Ao++, zi[Ao] !== e && u1(e));
      }
    }
    function jf(e) {
      e != null && !ut(e) && g("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", I, typeof e);
    }
    function u1(e) {
      {
        var t = We(qt);
        if (!Dg.has(t) && (Dg.add(t), zi !== null)) {
          for (var a = "", i = 30, u = 0; u <= Ao; u++) {
            for (var s = zi[u], f = u === Ao ? e : s, p = u + 1 + ". " + s; p.length < i; )
              p += " ";
            p += f + `
`, a += p;
          }
          g(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function ia() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function Ng(e, t) {
      if (Og)
        return !1;
      if (t === null)
        return g("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", I), !1;
      e.length !== t.length && g(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, I, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!K(e[a], t[a]))
          return !1;
      return !0;
    }
    function Af(e, t, a, i, u, s) {
      Zs = s, qt = t, zi = e !== null ? e._debugHookTypes : null, Ao = -1, Og = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = W, e !== null && e.memoizedState !== null ? ve.current = l0 : zi !== null ? ve.current = i0 : ve.current = a0;
      var f = a(i, u);
      if (bp) {
        var p = 0;
        do {
          if (bp = !1, wp = 0, p >= l1)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, Og = !1, dr = null, pr = null, t.updateQueue = null, Ao = -1, ve.current = u0, f = a(i, u);
        } while (bp);
      }
      ve.current = xm, t._debugHookTypes = zi;
      var v = dr !== null && dr.next !== null;
      if (Zs = W, qt = null, dr = null, pr = null, I = null, zi = null, Ao = -1, e !== null && (e.flags & zn) !== (t.flags & zn) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & ft) !== ze && g("Internal React error: Expected static flag was missing. Please notify the React team."), sm = !1, v)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function Ff() {
      var e = wp !== 0;
      return wp = 0, e;
    }
    function HC(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & Mt) !== ze ? t.flags &= -50333701 : t.flags &= -2053, e.lanes = bs(e.lanes, a);
    }
    function PC() {
      if (ve.current = xm, sm) {
        for (var e = qt.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        sm = !1;
      }
      Zs = W, qt = null, dr = null, pr = null, zi = null, Ao = -1, I = null, ZC = !1, bp = !1, wp = 0;
    }
    function Ql() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return pr === null ? qt.memoizedState = pr = e : pr = pr.next = e, pr;
    }
    function Ui() {
      var e;
      if (dr === null) {
        var t = qt.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = dr.next;
      var a;
      if (pr === null ? a = qt.memoizedState : a = pr.next, a !== null)
        pr = a, a = pr.next, dr = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        dr = e;
        var i = {
          memoizedState: dr.memoizedState,
          baseState: dr.baseState,
          baseQueue: dr.baseQueue,
          queue: dr.queue,
          next: null
        };
        pr === null ? qt.memoizedState = pr = i : pr = pr.next = i;
      }
      return pr;
    }
    function VC() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function Lg(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function Mg(e, t, a) {
      var i = Ql(), u;
      a !== void 0 ? u = a(t) : u = t, i.memoizedState = i.baseState = u;
      var s = {
        pending: null,
        interleaved: null,
        lanes: W,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      };
      i.queue = s;
      var f = s.dispatch = f1.bind(null, qt, s);
      return [i.memoizedState, f];
    }
    function zg(e, t, a) {
      var i = Ui(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = dr, f = s.baseQueue, p = u.pending;
      if (p !== null) {
        if (f !== null) {
          var v = f.next, y = p.next;
          f.next = y, p.next = v;
        }
        s.baseQueue !== f && g("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = p, u.pending = null;
      }
      if (f !== null) {
        var S = f.next, _ = s.baseState, b = null, j = null, H = null, V = S;
        do {
          var ce = V.lane;
          if (ku(Zs, ce)) {
            if (H !== null) {
              var De = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Dt,
                action: V.action,
                hasEagerState: V.hasEagerState,
                eagerState: V.eagerState,
                next: null
              };
              H = H.next = De;
            }
            if (V.hasEagerState)
              _ = V.eagerState;
            else {
              var Tt = V.action;
              _ = e(_, Tt);
            }
          } else {
            var Ae = {
              lane: ce,
              action: V.action,
              hasEagerState: V.hasEagerState,
              eagerState: V.eagerState,
              next: null
            };
            H === null ? (j = H = Ae, b = _) : H = H.next = Ae, qt.lanes = tt(qt.lanes, ce), Wp(ce);
          }
          V = V.next;
        } while (V !== null && V !== S);
        H === null ? b = _ : H.next = j, K(_, i.memoizedState) || Up(), i.memoizedState = _, i.baseState = b, i.baseQueue = H, u.lastRenderedState = _;
      }
      var gt = u.interleaved;
      if (gt !== null) {
        var L = gt;
        do {
          var B = L.lane;
          qt.lanes = tt(qt.lanes, B), Wp(B), L = L.next;
        } while (L !== gt);
      } else f === null && (u.lanes = W);
      var M = u.dispatch;
      return [i.memoizedState, M];
    }
    function Ug(e, t, a) {
      var i = Ui(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = u.dispatch, f = u.pending, p = i.memoizedState;
      if (f !== null) {
        u.pending = null;
        var v = f.next, y = v;
        do {
          var S = y.action;
          p = e(p, S), y = y.next;
        } while (y !== v);
        K(p, i.memoizedState) || Up(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), u.lastRenderedState = p;
      }
      return [p, s];
    }
    function aD(e, t, a) {
    }
    function iD(e, t, a) {
    }
    function jg(e, t, a) {
      var i = qt, u = Ql(), s, f = jr();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), Uf || s !== a() && (g("The result of getServerSnapshot should be cached to avoid an infinite loop"), Uf = !0);
      } else {
        if (s = t(), !Uf) {
          var p = t();
          K(s, p) || (g("The result of getSnapshot should be cached to avoid an infinite loop"), Uf = !0);
        }
        var v = Vm();
        if (v === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        ef(v, Zs) || BC(i, t, s);
      }
      u.memoizedState = s;
      var y = {
        value: s,
        getSnapshot: t
      };
      return u.queue = y, vm(IC.bind(null, i, y, e), [e]), i.flags |= Wr, _p(cr | Ar, $C.bind(null, i, y, s, t), void 0, null), s;
    }
    function cm(e, t, a) {
      var i = qt, u = Ui(), s = t();
      if (!Uf) {
        var f = t();
        K(s, f) || (g("The result of getSnapshot should be cached to avoid an infinite loop"), Uf = !0);
      }
      var p = u.memoizedState, v = !K(p, s);
      v && (u.memoizedState = s, Up());
      var y = u.queue;
      if (Dp(IC.bind(null, i, y, e), [e]), y.getSnapshot !== t || v || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      pr !== null && pr.memoizedState.tag & cr) {
        i.flags |= Wr, _p(cr | Ar, $C.bind(null, i, y, s, t), void 0, null);
        var S = Vm();
        if (S === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        ef(S, Zs) || BC(i, t, s);
      }
      return s;
    }
    function BC(e, t, a) {
      e.flags |= vo;
      var i = {
        getSnapshot: t,
        value: a
      }, u = qt.updateQueue;
      if (u === null)
        u = VC(), qt.updateQueue = u, u.stores = [i];
      else {
        var s = u.stores;
        s === null ? u.stores = [i] : s.push(i);
      }
    }
    function $C(e, t, a, i) {
      t.value = a, t.getSnapshot = i, YC(t) && QC(e);
    }
    function IC(e, t, a) {
      var i = function() {
        YC(t) && QC(e);
      };
      return a(i);
    }
    function YC(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !K(a, i);
      } catch {
        return !0;
      }
    }
    function QC(e) {
      var t = Fa(e, Be);
      t !== null && yr(t, e, Be, Kt);
    }
    function fm(e) {
      var t = Ql();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: W,
        dispatch: null,
        lastRenderedReducer: Lg,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = d1.bind(null, qt, a);
      return [t.memoizedState, i];
    }
    function Ag(e) {
      return zg(Lg);
    }
    function Fg(e) {
      return Ug(Lg);
    }
    function _p(e, t, a, i) {
      var u = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = qt.updateQueue;
      if (s === null)
        s = VC(), qt.updateQueue = s, s.lastEffect = u.next = u;
      else {
        var f = s.lastEffect;
        if (f === null)
          s.lastEffect = u.next = u;
        else {
          var p = f.next;
          f.next = u, u.next = p, s.lastEffect = u;
        }
      }
      return u;
    }
    function Hg(e) {
      var t = Ql();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function dm(e) {
      var t = Ui();
      return t.memoizedState;
    }
    function kp(e, t, a, i) {
      var u = Ql(), s = i === void 0 ? null : i;
      qt.flags |= e, u.memoizedState = _p(cr | t, a, void 0, s);
    }
    function pm(e, t, a, i) {
      var u = Ui(), s = i === void 0 ? null : i, f = void 0;
      if (dr !== null) {
        var p = dr.memoizedState;
        if (f = p.destroy, s !== null) {
          var v = p.deps;
          if (Ng(s, v)) {
            u.memoizedState = _p(t, a, f, s);
            return;
          }
        }
      }
      qt.flags |= e, u.memoizedState = _p(cr | t, a, f, s);
    }
    function vm(e, t) {
      return (qt.mode & Mt) !== ze ? kp(xi | Wr | _c, Ar, e, t) : kp(Wr | _c, Ar, e, t);
    }
    function Dp(e, t) {
      return pm(Wr, Ar, e, t);
    }
    function Pg(e, t) {
      return kp(Ct, Yl, e, t);
    }
    function hm(e, t) {
      return pm(Ct, Yl, e, t);
    }
    function Vg(e, t) {
      var a = Ct;
      return a |= Wi, (qt.mode & Mt) !== ze && (a |= _l), kp(a, fr, e, t);
    }
    function mm(e, t) {
      return pm(Ct, fr, e, t);
    }
    function WC(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var u = t;
        u.hasOwnProperty("current") || g("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(u).join(", ") + "}");
        var s = e();
        return u.current = s, function() {
          u.current = null;
        };
      }
    }
    function Bg(e, t, a) {
      typeof t != "function" && g("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, u = Ct;
      return u |= Wi, (qt.mode & Mt) !== ze && (u |= _l), kp(u, fr, WC.bind(null, t, e), i);
    }
    function ym(e, t, a) {
      typeof t != "function" && g("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return pm(Ct, fr, WC.bind(null, t, e), i);
    }
    function o1(e, t) {
    }
    var gm = o1;
    function $g(e, t) {
      var a = Ql(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function Sm(e, t) {
      var a = Ui(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (Ng(i, s))
          return u[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function Ig(e, t) {
      var a = Ql(), i = t === void 0 ? null : t, u = e();
      return a.memoizedState = [u, i], u;
    }
    function Em(e, t) {
      var a = Ui(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (Ng(i, s))
          return u[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function Yg(e) {
      var t = Ql();
      return t.memoizedState = e, e;
    }
    function GC(e) {
      var t = Ui(), a = dr, i = a.memoizedState;
      return XC(t, i, e);
    }
    function qC(e) {
      var t = Ui();
      if (dr === null)
        return t.memoizedState = e, e;
      var a = dr.memoizedState;
      return XC(t, a, e);
    }
    function XC(e, t, a) {
      var i = !Nd(Zs);
      if (i) {
        if (!K(a, t)) {
          var u = zd();
          qt.lanes = tt(qt.lanes, u), Wp(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, Up()), e.memoizedState = a, a;
    }
    function s1(e, t, a) {
      var i = Ua();
      An(Kv(i, wi)), e(!0);
      var u = Tp.transition;
      Tp.transition = {};
      var s = Tp.transition;
      Tp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (An(i), Tp.transition = u, u === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && ee("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function Qg() {
      var e = fm(!1), t = e[0], a = e[1], i = s1.bind(null, a), u = Ql();
      return u.memoizedState = i, [t, i];
    }
    function KC() {
      var e = Ag(), t = e[0], a = Ui(), i = a.memoizedState;
      return [t, i];
    }
    function JC() {
      var e = Fg(), t = e[0], a = Ui(), i = a.memoizedState;
      return [t, i];
    }
    var ZC = !1;
    function c1() {
      return ZC;
    }
    function Wg() {
      var e = Ql(), t = Vm(), a = t.identifierPrefix, i;
      if (jr()) {
        var u = _b();
        i = ":" + a + "R" + u;
        var s = wp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = i1++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function Cm() {
      var e = Ui(), t = e.memoizedState;
      return t;
    }
    function f1(e, t, a) {
      typeof arguments[3] == "function" && g("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Bo(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (e0(e))
        t0(t, u);
      else {
        var s = DC(e, t, u, i);
        if (s !== null) {
          var f = Ea();
          yr(s, e, i, f), n0(s, t, i);
        }
      }
      r0(e, i);
    }
    function d1(e, t, a) {
      typeof arguments[3] == "function" && g("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Bo(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (e0(e))
        t0(t, u);
      else {
        var s = e.alternate;
        if (e.lanes === W && (s === null || s.lanes === W)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = ve.current, ve.current = ll;
            try {
              var v = t.lastRenderedState, y = f(v, a);
              if (u.hasEagerState = !0, u.eagerState = y, K(y, v)) {
                Xb(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              ve.current = p;
            }
          }
        }
        var S = DC(e, t, u, i);
        if (S !== null) {
          var _ = Ea();
          yr(S, e, i, _), n0(S, t, i);
        }
      }
      r0(e, i);
    }
    function e0(e) {
      var t = e.alternate;
      return e === qt || t !== null && t === qt;
    }
    function t0(e, t) {
      bp = sm = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function n0(e, t, a) {
      if (Md(a)) {
        var i = t.lanes;
        i = Ud(i, e.pendingLanes);
        var u = tt(i, a);
        t.lanes = u, nf(e, u);
      }
    }
    function r0(e, t, a) {
      hs(e, t);
    }
    var xm = {
      readContext: tr,
      useCallback: ia,
      useContext: ia,
      useEffect: ia,
      useImperativeHandle: ia,
      useInsertionEffect: ia,
      useLayoutEffect: ia,
      useMemo: ia,
      useReducer: ia,
      useRef: ia,
      useState: ia,
      useDebugValue: ia,
      useDeferredValue: ia,
      useTransition: ia,
      useMutableSource: ia,
      useSyncExternalStore: ia,
      useId: ia,
      unstable_isNewReconciler: ne
    }, a0 = null, i0 = null, l0 = null, u0 = null, Wl = null, ll = null, Rm = null;
    {
      var Gg = function() {
        g("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, qe = function() {
        g("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      a0 = {
        readContext: function(e) {
          return tr(e);
        },
        useCallback: function(e, t) {
          return I = "useCallback", Vt(), jf(t), $g(e, t);
        },
        useContext: function(e) {
          return I = "useContext", Vt(), tr(e);
        },
        useEffect: function(e, t) {
          return I = "useEffect", Vt(), jf(t), vm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return I = "useImperativeHandle", Vt(), jf(a), Bg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return I = "useInsertionEffect", Vt(), jf(t), Pg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return I = "useLayoutEffect", Vt(), jf(t), Vg(e, t);
        },
        useMemo: function(e, t) {
          I = "useMemo", Vt(), jf(t);
          var a = ve.current;
          ve.current = Wl;
          try {
            return Ig(e, t);
          } finally {
            ve.current = a;
          }
        },
        useReducer: function(e, t, a) {
          I = "useReducer", Vt();
          var i = ve.current;
          ve.current = Wl;
          try {
            return Mg(e, t, a);
          } finally {
            ve.current = i;
          }
        },
        useRef: function(e) {
          return I = "useRef", Vt(), Hg(e);
        },
        useState: function(e) {
          I = "useState", Vt();
          var t = ve.current;
          ve.current = Wl;
          try {
            return fm(e);
          } finally {
            ve.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return I = "useDebugValue", Vt(), void 0;
        },
        useDeferredValue: function(e) {
          return I = "useDeferredValue", Vt(), Yg(e);
        },
        useTransition: function() {
          return I = "useTransition", Vt(), Qg();
        },
        useMutableSource: function(e, t, a) {
          return I = "useMutableSource", Vt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return I = "useSyncExternalStore", Vt(), jg(e, t, a);
        },
        useId: function() {
          return I = "useId", Vt(), Wg();
        },
        unstable_isNewReconciler: ne
      }, i0 = {
        readContext: function(e) {
          return tr(e);
        },
        useCallback: function(e, t) {
          return I = "useCallback", ie(), $g(e, t);
        },
        useContext: function(e) {
          return I = "useContext", ie(), tr(e);
        },
        useEffect: function(e, t) {
          return I = "useEffect", ie(), vm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return I = "useImperativeHandle", ie(), Bg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return I = "useInsertionEffect", ie(), Pg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return I = "useLayoutEffect", ie(), Vg(e, t);
        },
        useMemo: function(e, t) {
          I = "useMemo", ie();
          var a = ve.current;
          ve.current = Wl;
          try {
            return Ig(e, t);
          } finally {
            ve.current = a;
          }
        },
        useReducer: function(e, t, a) {
          I = "useReducer", ie();
          var i = ve.current;
          ve.current = Wl;
          try {
            return Mg(e, t, a);
          } finally {
            ve.current = i;
          }
        },
        useRef: function(e) {
          return I = "useRef", ie(), Hg(e);
        },
        useState: function(e) {
          I = "useState", ie();
          var t = ve.current;
          ve.current = Wl;
          try {
            return fm(e);
          } finally {
            ve.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return I = "useDebugValue", ie(), void 0;
        },
        useDeferredValue: function(e) {
          return I = "useDeferredValue", ie(), Yg(e);
        },
        useTransition: function() {
          return I = "useTransition", ie(), Qg();
        },
        useMutableSource: function(e, t, a) {
          return I = "useMutableSource", ie(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return I = "useSyncExternalStore", ie(), jg(e, t, a);
        },
        useId: function() {
          return I = "useId", ie(), Wg();
        },
        unstable_isNewReconciler: ne
      }, l0 = {
        readContext: function(e) {
          return tr(e);
        },
        useCallback: function(e, t) {
          return I = "useCallback", ie(), Sm(e, t);
        },
        useContext: function(e) {
          return I = "useContext", ie(), tr(e);
        },
        useEffect: function(e, t) {
          return I = "useEffect", ie(), Dp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return I = "useImperativeHandle", ie(), ym(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return I = "useInsertionEffect", ie(), hm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return I = "useLayoutEffect", ie(), mm(e, t);
        },
        useMemo: function(e, t) {
          I = "useMemo", ie();
          var a = ve.current;
          ve.current = ll;
          try {
            return Em(e, t);
          } finally {
            ve.current = a;
          }
        },
        useReducer: function(e, t, a) {
          I = "useReducer", ie();
          var i = ve.current;
          ve.current = ll;
          try {
            return zg(e, t, a);
          } finally {
            ve.current = i;
          }
        },
        useRef: function(e) {
          return I = "useRef", ie(), dm();
        },
        useState: function(e) {
          I = "useState", ie();
          var t = ve.current;
          ve.current = ll;
          try {
            return Ag(e);
          } finally {
            ve.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return I = "useDebugValue", ie(), gm();
        },
        useDeferredValue: function(e) {
          return I = "useDeferredValue", ie(), GC(e);
        },
        useTransition: function() {
          return I = "useTransition", ie(), KC();
        },
        useMutableSource: function(e, t, a) {
          return I = "useMutableSource", ie(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return I = "useSyncExternalStore", ie(), cm(e, t);
        },
        useId: function() {
          return I = "useId", ie(), Cm();
        },
        unstable_isNewReconciler: ne
      }, u0 = {
        readContext: function(e) {
          return tr(e);
        },
        useCallback: function(e, t) {
          return I = "useCallback", ie(), Sm(e, t);
        },
        useContext: function(e) {
          return I = "useContext", ie(), tr(e);
        },
        useEffect: function(e, t) {
          return I = "useEffect", ie(), Dp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return I = "useImperativeHandle", ie(), ym(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return I = "useInsertionEffect", ie(), hm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return I = "useLayoutEffect", ie(), mm(e, t);
        },
        useMemo: function(e, t) {
          I = "useMemo", ie();
          var a = ve.current;
          ve.current = Rm;
          try {
            return Em(e, t);
          } finally {
            ve.current = a;
          }
        },
        useReducer: function(e, t, a) {
          I = "useReducer", ie();
          var i = ve.current;
          ve.current = Rm;
          try {
            return Ug(e, t, a);
          } finally {
            ve.current = i;
          }
        },
        useRef: function(e) {
          return I = "useRef", ie(), dm();
        },
        useState: function(e) {
          I = "useState", ie();
          var t = ve.current;
          ve.current = Rm;
          try {
            return Fg(e);
          } finally {
            ve.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return I = "useDebugValue", ie(), gm();
        },
        useDeferredValue: function(e) {
          return I = "useDeferredValue", ie(), qC(e);
        },
        useTransition: function() {
          return I = "useTransition", ie(), JC();
        },
        useMutableSource: function(e, t, a) {
          return I = "useMutableSource", ie(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return I = "useSyncExternalStore", ie(), cm(e, t);
        },
        useId: function() {
          return I = "useId", ie(), Cm();
        },
        unstable_isNewReconciler: ne
      }, Wl = {
        readContext: function(e) {
          return Gg(), tr(e);
        },
        useCallback: function(e, t) {
          return I = "useCallback", qe(), Vt(), $g(e, t);
        },
        useContext: function(e) {
          return I = "useContext", qe(), Vt(), tr(e);
        },
        useEffect: function(e, t) {
          return I = "useEffect", qe(), Vt(), vm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return I = "useImperativeHandle", qe(), Vt(), Bg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return I = "useInsertionEffect", qe(), Vt(), Pg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return I = "useLayoutEffect", qe(), Vt(), Vg(e, t);
        },
        useMemo: function(e, t) {
          I = "useMemo", qe(), Vt();
          var a = ve.current;
          ve.current = Wl;
          try {
            return Ig(e, t);
          } finally {
            ve.current = a;
          }
        },
        useReducer: function(e, t, a) {
          I = "useReducer", qe(), Vt();
          var i = ve.current;
          ve.current = Wl;
          try {
            return Mg(e, t, a);
          } finally {
            ve.current = i;
          }
        },
        useRef: function(e) {
          return I = "useRef", qe(), Vt(), Hg(e);
        },
        useState: function(e) {
          I = "useState", qe(), Vt();
          var t = ve.current;
          ve.current = Wl;
          try {
            return fm(e);
          } finally {
            ve.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return I = "useDebugValue", qe(), Vt(), void 0;
        },
        useDeferredValue: function(e) {
          return I = "useDeferredValue", qe(), Vt(), Yg(e);
        },
        useTransition: function() {
          return I = "useTransition", qe(), Vt(), Qg();
        },
        useMutableSource: function(e, t, a) {
          return I = "useMutableSource", qe(), Vt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return I = "useSyncExternalStore", qe(), Vt(), jg(e, t, a);
        },
        useId: function() {
          return I = "useId", qe(), Vt(), Wg();
        },
        unstable_isNewReconciler: ne
      }, ll = {
        readContext: function(e) {
          return Gg(), tr(e);
        },
        useCallback: function(e, t) {
          return I = "useCallback", qe(), ie(), Sm(e, t);
        },
        useContext: function(e) {
          return I = "useContext", qe(), ie(), tr(e);
        },
        useEffect: function(e, t) {
          return I = "useEffect", qe(), ie(), Dp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return I = "useImperativeHandle", qe(), ie(), ym(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return I = "useInsertionEffect", qe(), ie(), hm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return I = "useLayoutEffect", qe(), ie(), mm(e, t);
        },
        useMemo: function(e, t) {
          I = "useMemo", qe(), ie();
          var a = ve.current;
          ve.current = ll;
          try {
            return Em(e, t);
          } finally {
            ve.current = a;
          }
        },
        useReducer: function(e, t, a) {
          I = "useReducer", qe(), ie();
          var i = ve.current;
          ve.current = ll;
          try {
            return zg(e, t, a);
          } finally {
            ve.current = i;
          }
        },
        useRef: function(e) {
          return I = "useRef", qe(), ie(), dm();
        },
        useState: function(e) {
          I = "useState", qe(), ie();
          var t = ve.current;
          ve.current = ll;
          try {
            return Ag(e);
          } finally {
            ve.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return I = "useDebugValue", qe(), ie(), gm();
        },
        useDeferredValue: function(e) {
          return I = "useDeferredValue", qe(), ie(), GC(e);
        },
        useTransition: function() {
          return I = "useTransition", qe(), ie(), KC();
        },
        useMutableSource: function(e, t, a) {
          return I = "useMutableSource", qe(), ie(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return I = "useSyncExternalStore", qe(), ie(), cm(e, t);
        },
        useId: function() {
          return I = "useId", qe(), ie(), Cm();
        },
        unstable_isNewReconciler: ne
      }, Rm = {
        readContext: function(e) {
          return Gg(), tr(e);
        },
        useCallback: function(e, t) {
          return I = "useCallback", qe(), ie(), Sm(e, t);
        },
        useContext: function(e) {
          return I = "useContext", qe(), ie(), tr(e);
        },
        useEffect: function(e, t) {
          return I = "useEffect", qe(), ie(), Dp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return I = "useImperativeHandle", qe(), ie(), ym(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return I = "useInsertionEffect", qe(), ie(), hm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return I = "useLayoutEffect", qe(), ie(), mm(e, t);
        },
        useMemo: function(e, t) {
          I = "useMemo", qe(), ie();
          var a = ve.current;
          ve.current = ll;
          try {
            return Em(e, t);
          } finally {
            ve.current = a;
          }
        },
        useReducer: function(e, t, a) {
          I = "useReducer", qe(), ie();
          var i = ve.current;
          ve.current = ll;
          try {
            return Ug(e, t, a);
          } finally {
            ve.current = i;
          }
        },
        useRef: function(e) {
          return I = "useRef", qe(), ie(), dm();
        },
        useState: function(e) {
          I = "useState", qe(), ie();
          var t = ve.current;
          ve.current = ll;
          try {
            return Fg(e);
          } finally {
            ve.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return I = "useDebugValue", qe(), ie(), gm();
        },
        useDeferredValue: function(e) {
          return I = "useDeferredValue", qe(), ie(), qC(e);
        },
        useTransition: function() {
          return I = "useTransition", qe(), ie(), JC();
        },
        useMutableSource: function(e, t, a) {
          return I = "useMutableSource", qe(), ie(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return I = "useSyncExternalStore", qe(), ie(), cm(e, t);
        },
        useId: function() {
          return I = "useId", qe(), ie(), Cm();
        },
        unstable_isNewReconciler: ne
      };
    }
    var Fo = O.unstable_now, o0 = 0, Tm = -1, Op = -1, bm = -1, qg = !1, wm = !1;
    function s0() {
      return qg;
    }
    function p1() {
      wm = !0;
    }
    function v1() {
      qg = !1, wm = !1;
    }
    function h1() {
      qg = wm, wm = !1;
    }
    function c0() {
      return o0;
    }
    function f0() {
      o0 = Fo();
    }
    function Xg(e) {
      Op = Fo(), e.actualStartTime < 0 && (e.actualStartTime = Fo());
    }
    function d0(e) {
      Op = -1;
    }
    function _m(e, t) {
      if (Op >= 0) {
        var a = Fo() - Op;
        e.actualDuration += a, t && (e.selfBaseDuration = a), Op = -1;
      }
    }
    function Gl(e) {
      if (Tm >= 0) {
        var t = Fo() - Tm;
        Tm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case re:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case yt:
              var u = a.stateNode;
              u.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function Kg(e) {
      if (bm >= 0) {
        var t = Fo() - bm;
        bm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case re:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case yt:
              var u = a.stateNode;
              u !== null && (u.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function ql() {
      Tm = Fo();
    }
    function Jg() {
      bm = Fo();
    }
    function Zg(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function ul(e, t) {
      if (e && e.defaultProps) {
        var a = rt({}, t), i = e.defaultProps;
        for (var u in i)
          a[u] === void 0 && (a[u] = i[u]);
        return a;
      }
      return t;
    }
    var eS = {}, tS, nS, rS, aS, iS, p0, km, lS, uS, oS, Np;
    {
      tS = /* @__PURE__ */ new Set(), nS = /* @__PURE__ */ new Set(), rS = /* @__PURE__ */ new Set(), aS = /* @__PURE__ */ new Set(), lS = /* @__PURE__ */ new Set(), iS = /* @__PURE__ */ new Set(), uS = /* @__PURE__ */ new Set(), oS = /* @__PURE__ */ new Set(), Np = /* @__PURE__ */ new Set();
      var v0 = /* @__PURE__ */ new Set();
      km = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          v0.has(a) || (v0.add(a), g("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, p0 = function(e, t) {
        if (t === void 0) {
          var a = bt(e) || "Component";
          iS.has(a) || (iS.add(a), g("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(eS, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(eS);
    }
    function sS(e, t, a, i) {
      var u = e.memoizedState, s = a(i, u);
      {
        if (e.mode & Gt) {
          yn(!0);
          try {
            s = a(i, u);
          } finally {
            yn(!1);
          }
        }
        p0(t, s);
      }
      var f = s == null ? u : rt({}, u, s);
      if (e.memoizedState = f, e.lanes === W) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var cS = {
      isMounted: Uv,
      enqueueSetState: function(e, t, a) {
        var i = po(e), u = Ea(), s = Bo(i), f = Pu(u, s);
        f.payload = t, a != null && (km(a, "setState"), f.callback = a);
        var p = zo(i, f, s);
        p !== null && (yr(p, i, s, u), rm(p, i, s)), hs(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = po(e), u = Ea(), s = Bo(i), f = Pu(u, s);
        f.tag = NC, f.payload = t, a != null && (km(a, "replaceState"), f.callback = a);
        var p = zo(i, f, s);
        p !== null && (yr(p, i, s, u), rm(p, i, s)), hs(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = po(e), i = Ea(), u = Bo(a), s = Pu(i, u);
        s.tag = em, t != null && (km(t, "forceUpdate"), s.callback = t);
        var f = zo(a, s, u);
        f !== null && (yr(f, a, u, i), rm(f, a, u)), zc(a, u);
      }
    };
    function h0(e, t, a, i, u, s, f) {
      var p = e.stateNode;
      if (typeof p.shouldComponentUpdate == "function") {
        var v = p.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & Gt) {
            yn(!0);
            try {
              v = p.shouldComponentUpdate(i, s, f);
            } finally {
              yn(!1);
            }
          }
          v === void 0 && g("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", bt(t) || "Component");
        }
        return v;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Ee(a, i) || !Ee(u, s) : !0;
    }
    function m1(e, t, a) {
      var i = e.stateNode;
      {
        var u = bt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? g("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : g("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && g("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && g("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && g("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && g("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), t.childContextTypes && !Np.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & Gt) === ze && (Np.add(t), g(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), t.contextTypes && !Np.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & Gt) === ze && (Np.add(t), g(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), i.contextTypes && g("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !uS.has(t) && (uS.add(t), g("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && g("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && g("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", bt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && g("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && g("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && g("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && g("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var f = i.props !== a;
        i.props !== void 0 && f && g("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && g("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !rS.has(t) && (rS.add(t), g("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", bt(t))), typeof i.getDerivedStateFromProps == "function" && g("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && g("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && g("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var p = i.state;
        p && (typeof p != "object" || ut(p)) && g("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && g("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function m0(e, t) {
      t.updater = cS, e.stateNode = t, vu(t, e), t._reactInternalInstance = eS;
    }
    function y0(e, t, a) {
      var i = !1, u = li, s = li, f = t.contextType;
      if ("contextType" in t) {
        var p = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === x && f._context === void 0
        );
        if (!p && !oS.has(t)) {
          oS.add(t);
          var v = "";
          f === void 0 ? v = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? v = " However, it is set to a " + typeof f + "." : f.$$typeof === pi ? v = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? v = " Did you accidentally pass the Context.Consumer instead?" : v = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", g("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", bt(t) || "Component", v);
        }
      }
      if (typeof f == "object" && f !== null)
        s = tr(f);
      else {
        u = Tf(e, t, !0);
        var y = t.contextTypes;
        i = y != null, s = i ? bf(e, u) : li;
      }
      var S = new t(a, s);
      if (e.mode & Gt) {
        yn(!0);
        try {
          S = new t(a, s);
        } finally {
          yn(!1);
        }
      }
      var _ = e.memoizedState = S.state !== null && S.state !== void 0 ? S.state : null;
      m0(e, S);
      {
        if (typeof t.getDerivedStateFromProps == "function" && _ === null) {
          var b = bt(t) || "Component";
          nS.has(b) || (nS.add(b), g("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", b, S.state === null ? "null" : "undefined", b));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof S.getSnapshotBeforeUpdate == "function") {
          var j = null, H = null, V = null;
          if (typeof S.componentWillMount == "function" && S.componentWillMount.__suppressDeprecationWarning !== !0 ? j = "componentWillMount" : typeof S.UNSAFE_componentWillMount == "function" && (j = "UNSAFE_componentWillMount"), typeof S.componentWillReceiveProps == "function" && S.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? H = "componentWillReceiveProps" : typeof S.UNSAFE_componentWillReceiveProps == "function" && (H = "UNSAFE_componentWillReceiveProps"), typeof S.componentWillUpdate == "function" && S.componentWillUpdate.__suppressDeprecationWarning !== !0 ? V = "componentWillUpdate" : typeof S.UNSAFE_componentWillUpdate == "function" && (V = "UNSAFE_componentWillUpdate"), j !== null || H !== null || V !== null) {
            var ce = bt(t) || "Component", Ae = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            aS.has(ce) || (aS.add(ce), g(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, ce, Ae, j !== null ? `
  ` + j : "", H !== null ? `
  ` + H : "", V !== null ? `
  ` + V : ""));
          }
        }
      }
      return i && lC(e, u, s), S;
    }
    function y1(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (g("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", We(e) || "Component"), cS.enqueueReplaceState(t, t.state, null));
    }
    function g0(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var s = We(e) || "Component";
          tS.has(s) || (tS.add(s), g("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        cS.enqueueReplaceState(t, t.state, null);
      }
    }
    function fS(e, t, a, i) {
      m1(e, t, a);
      var u = e.stateNode;
      u.props = a, u.state = e.memoizedState, u.refs = {}, Eg(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        u.context = tr(s);
      else {
        var f = Tf(e, t, !0);
        u.context = bf(e, f);
      }
      {
        if (u.state === a) {
          var p = bt(t) || "Component";
          lS.has(p) || (lS.add(p), g("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & Gt && al.recordLegacyContextWarning(e, u), al.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var v = t.getDerivedStateFromProps;
      if (typeof v == "function" && (sS(e, t, v, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (y1(e, u), am(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var y = Ct;
        y |= Wi, (e.mode & Mt) !== ze && (y |= _l), e.flags |= y;
      }
    }
    function g1(e, t, a, i) {
      var u = e.stateNode, s = e.memoizedProps;
      u.props = s;
      var f = u.context, p = t.contextType, v = li;
      if (typeof p == "object" && p !== null)
        v = tr(p);
      else {
        var y = Tf(e, t, !0);
        v = bf(e, y);
      }
      var S = t.getDerivedStateFromProps, _ = typeof S == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !_ && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (s !== a || f !== v) && g0(e, u, a, v), MC();
      var b = e.memoizedState, j = u.state = b;
      if (am(e, a, u, i), j = e.memoizedState, s === a && b === j && !Hh() && !im()) {
        if (typeof u.componentDidMount == "function") {
          var H = Ct;
          H |= Wi, (e.mode & Mt) !== ze && (H |= _l), e.flags |= H;
        }
        return !1;
      }
      typeof S == "function" && (sS(e, t, S, a), j = e.memoizedState);
      var V = im() || h0(e, t, s, a, b, j, v);
      if (V) {
        if (!_ && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var ce = Ct;
          ce |= Wi, (e.mode & Mt) !== ze && (ce |= _l), e.flags |= ce;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var Ae = Ct;
          Ae |= Wi, (e.mode & Mt) !== ze && (Ae |= _l), e.flags |= Ae;
        }
        e.memoizedProps = a, e.memoizedState = j;
      }
      return u.props = a, u.state = j, u.context = v, V;
    }
    function S1(e, t, a, i, u) {
      var s = t.stateNode;
      LC(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : ul(t.type, f);
      s.props = p;
      var v = t.pendingProps, y = s.context, S = a.contextType, _ = li;
      if (typeof S == "object" && S !== null)
        _ = tr(S);
      else {
        var b = Tf(t, a, !0);
        _ = bf(t, b);
      }
      var j = a.getDerivedStateFromProps, H = typeof j == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !H && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== v || y !== _) && g0(t, s, i, _), MC();
      var V = t.memoizedState, ce = s.state = V;
      if (am(t, i, s, u), ce = t.memoizedState, f === v && V === ce && !Hh() && !im() && !_e)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || V !== e.memoizedState) && (t.flags |= Ct), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || V !== e.memoizedState) && (t.flags |= Yn), !1;
      typeof j == "function" && (sS(t, a, j, i), ce = t.memoizedState);
      var Ae = im() || h0(t, a, p, i, V, ce, _) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      _e;
      return Ae ? (!H && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, ce, _), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, ce, _)), typeof s.componentDidUpdate == "function" && (t.flags |= Ct), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= Yn)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || V !== e.memoizedState) && (t.flags |= Ct), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || V !== e.memoizedState) && (t.flags |= Yn), t.memoizedProps = i, t.memoizedState = ce), s.props = i, s.state = ce, s.context = _, Ae;
    }
    function ec(e, t) {
      return {
        value: e,
        source: t,
        stack: Vi(t),
        digest: null
      };
    }
    function dS(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function E1(e, t) {
      return !0;
    }
    function pS(e, t) {
      try {
        var a = E1(e, t);
        if (a === !1)
          return;
        var i = t.value, u = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === Y)
            return;
          console.error(i);
        }
        var p = u ? We(u) : null, v = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", y;
        if (e.tag === re)
          y = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var S = We(e) || "Anonymous";
          y = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + S + ".");
        }
        var _ = v + `
` + f + `

` + ("" + y);
        console.error(_);
      } catch (b) {
        setTimeout(function() {
          throw b;
        });
      }
    }
    var C1 = typeof WeakMap == "function" ? WeakMap : Map;
    function S0(e, t, a) {
      var i = Pu(Kt, a);
      i.tag = gg, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        p_(u), pS(e, t);
      }, i;
    }
    function vS(e, t, a) {
      var i = Pu(Kt, a);
      i.tag = gg;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var s = t.value;
        i.payload = function() {
          return u(s);
        }, i.callback = function() {
          Ox(e), pS(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        Ox(e), pS(e, t), typeof u != "function" && f_(this);
        var v = t.value, y = t.stack;
        this.componentDidCatch(v, {
          componentStack: y !== null ? y : ""
        }), typeof u != "function" && (Zr(e.lanes, Be) || g("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", We(e) || "Unknown"));
      }), i;
    }
    function E0(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new C1(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var s = v_.bind(null, e, t, a);
        Kr && Gp(e, a), t.then(s, s);
      }
    }
    function x1(e, t, a, i) {
      var u = e.updateQueue;
      if (u === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        u.add(a);
    }
    function R1(e, t) {
      var a = e.tag;
      if ((e.mode & ft) === ze && (a === G || a === Ke || a === $e)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function C0(e) {
      var t = e;
      do {
        if (t.tag === Le && r1(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function x0(e, t, a, i, u) {
      if ((e.mode & ft) === ze) {
        if (e === t)
          e.flags |= Kn;
        else {
          if (e.flags |= Oe, a.flags |= wc, a.flags &= -52805, a.tag === Y) {
            var s = a.alternate;
            if (s === null)
              a.tag = Ht;
            else {
              var f = Pu(Kt, Be);
              f.tag = em, zo(a, f, Be);
            }
          }
          a.lanes = tt(a.lanes, Be);
        }
        return e;
      }
      return e.flags |= Kn, e.lanes = u, e;
    }
    function T1(e, t, a, i, u) {
      if (a.flags |= ss, Kr && Gp(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        R1(a), jr() && a.mode & ft && pC();
        var f = C0(t);
        if (f !== null) {
          f.flags &= ~Cr, x0(f, t, a, e, u), f.mode & ft && E0(e, s, u), x1(f, e, s);
          return;
        } else {
          if (!$v(u)) {
            E0(e, s, u), WS();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (jr() && a.mode & ft) {
        pC();
        var v = C0(t);
        if (v !== null) {
          (v.flags & Kn) === Me && (v.flags |= Cr), x0(v, t, a, e, u), lg(ec(i, a));
          return;
        }
      }
      i = ec(i, a), r_(i);
      var y = t;
      do {
        switch (y.tag) {
          case re: {
            var S = i;
            y.flags |= Kn;
            var _ = Ts(u);
            y.lanes = tt(y.lanes, _);
            var b = S0(y, S, _);
            Cg(y, b);
            return;
          }
          case Y:
            var j = i, H = y.type, V = y.stateNode;
            if ((y.flags & Oe) === Me && (typeof H.getDerivedStateFromError == "function" || V !== null && typeof V.componentDidCatch == "function" && !Cx(V))) {
              y.flags |= Kn;
              var ce = Ts(u);
              y.lanes = tt(y.lanes, ce);
              var Ae = vS(y, j, ce);
              Cg(y, Ae);
              return;
            }
            break;
        }
        y = y.return;
      } while (y !== null);
    }
    function b1() {
      return null;
    }
    var Lp = k.ReactCurrentOwner, ol = !1, hS, Mp, mS, yS, gS, tc, SS, Dm, zp;
    hS = {}, Mp = {}, mS = {}, yS = {}, gS = {}, tc = !1, SS = {}, Dm = {}, zp = {};
    function ga(e, t, a, i) {
      e === null ? t.child = bC(t, null, a, i) : t.child = Df(t, e.child, a, i);
    }
    function w1(e, t, a, i) {
      t.child = Df(t, e.child, null, i), t.child = Df(t, null, a, i);
    }
    function R0(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && nl(
          s,
          i,
          // Resolved props
          "prop",
          bt(a)
        );
      }
      var f = a.render, p = t.ref, v, y;
      Nf(t, u), va(t);
      {
        if (Lp.current = t, In(!0), v = Af(e, t, f, i, p, u), y = Ff(), t.mode & Gt) {
          yn(!0);
          try {
            v = Af(e, t, f, i, p, u), y = Ff();
          } finally {
            yn(!1);
          }
        }
        In(!1);
      }
      return ha(), e !== null && !ol ? (HC(e, t, u), Vu(e, t, u)) : (jr() && y && eg(t), t.flags |= ti, ga(e, t, v, u), t.child);
    }
    function T0(e, t, a, i, u) {
      if (e === null) {
        var s = a.type;
        if (N_(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = Qf(s), t.tag = $e, t.type = f, xS(t, s), b0(e, t, f, i, u);
        }
        {
          var p = s.propTypes;
          if (p && nl(
            p,
            i,
            // Resolved props
            "prop",
            bt(s)
          ), a.defaultProps !== void 0) {
            var v = bt(s) || "Unknown";
            zp[v] || (g("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", v), zp[v] = !0);
          }
        }
        var y = aE(a.type, null, i, t, t.mode, u);
        return y.ref = t.ref, y.return = t, t.child = y, y;
      }
      {
        var S = a.type, _ = S.propTypes;
        _ && nl(
          _,
          i,
          // Resolved props
          "prop",
          bt(S)
        );
      }
      var b = e.child, j = kS(e, u);
      if (!j) {
        var H = b.memoizedProps, V = a.compare;
        if (V = V !== null ? V : Ee, V(H, i) && e.ref === t.ref)
          return Vu(e, t, u);
      }
      t.flags |= ti;
      var ce = lc(b, i);
      return ce.ref = t.ref, ce.return = t, t.child = ce, ce;
    }
    function b0(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === Ge) {
          var f = s, p = f._payload, v = f._init;
          try {
            s = v(p);
          } catch {
            s = null;
          }
          var y = s && s.propTypes;
          y && nl(
            y,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            bt(s)
          );
        }
      }
      if (e !== null) {
        var S = e.memoizedProps;
        if (Ee(S, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (ol = !1, t.pendingProps = i = S, kS(e, u))
            (e.flags & wc) !== Me && (ol = !0);
          else return t.lanes = e.lanes, Vu(e, t, u);
      }
      return ES(e, t, a, i, u);
    }
    function w0(e, t, a) {
      var i = t.pendingProps, u = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || le)
        if ((t.mode & ft) === ze) {
          var f = {
            baseLanes: W,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, Bm(t, a);
        } else if (Zr(a, Jr)) {
          var _ = {
            baseLanes: W,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = _;
          var b = s !== null ? s.baseLanes : a;
          Bm(t, b);
        } else {
          var p = null, v;
          if (s !== null) {
            var y = s.baseLanes;
            v = tt(y, a);
          } else
            v = a;
          t.lanes = t.childLanes = Jr;
          var S = {
            baseLanes: v,
            cachePool: p,
            transitions: null
          };
          return t.memoizedState = S, t.updateQueue = null, Bm(t, v), null;
        }
      else {
        var j;
        s !== null ? (j = tt(s.baseLanes, a), t.memoizedState = null) : j = a, Bm(t, j);
      }
      return ga(e, t, u, a), t.child;
    }
    function _1(e, t, a) {
      var i = t.pendingProps;
      return ga(e, t, i, a), t.child;
    }
    function k1(e, t, a) {
      var i = t.pendingProps.children;
      return ga(e, t, i, a), t.child;
    }
    function D1(e, t, a) {
      {
        t.flags |= Ct;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, s = u.children;
      return ga(e, t, s, a), t.child;
    }
    function _0(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= En, t.flags |= ho);
    }
    function ES(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && nl(
          s,
          i,
          // Resolved props
          "prop",
          bt(a)
        );
      }
      var f;
      {
        var p = Tf(t, a, !0);
        f = bf(t, p);
      }
      var v, y;
      Nf(t, u), va(t);
      {
        if (Lp.current = t, In(!0), v = Af(e, t, a, i, f, u), y = Ff(), t.mode & Gt) {
          yn(!0);
          try {
            v = Af(e, t, a, i, f, u), y = Ff();
          } finally {
            yn(!1);
          }
        }
        In(!1);
      }
      return ha(), e !== null && !ol ? (HC(e, t, u), Vu(e, t, u)) : (jr() && y && eg(t), t.flags |= ti, ga(e, t, v, u), t.child);
    }
    function k0(e, t, a, i, u) {
      {
        switch (Q_(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), v = p.state;
            s.updater.enqueueSetState(s, v, null);
            break;
          }
          case !0: {
            t.flags |= Oe, t.flags |= Kn;
            var y = new Error("Simulated error coming from DevTools"), S = Ts(u);
            t.lanes = tt(t.lanes, S);
            var _ = vS(t, ec(y, t), S);
            Cg(t, _);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var b = a.propTypes;
          b && nl(
            b,
            i,
            // Resolved props
            "prop",
            bt(a)
          );
        }
      }
      var j;
      Il(a) ? (j = !0, Vh(t)) : j = !1, Nf(t, u);
      var H = t.stateNode, V;
      H === null ? (Nm(e, t), y0(t, a, i), fS(t, a, i, u), V = !0) : e === null ? V = g1(t, a, i, u) : V = S1(e, t, a, i, u);
      var ce = CS(e, t, a, V, j, u);
      {
        var Ae = t.stateNode;
        V && Ae.props !== i && (tc || g("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", We(t) || "a component"), tc = !0);
      }
      return ce;
    }
    function CS(e, t, a, i, u, s) {
      _0(e, t);
      var f = (t.flags & Oe) !== Me;
      if (!i && !f)
        return u && sC(t, a, !1), Vu(e, t, s);
      var p = t.stateNode;
      Lp.current = t;
      var v;
      if (f && typeof a.getDerivedStateFromError != "function")
        v = null, d0();
      else {
        va(t);
        {
          if (In(!0), v = p.render(), t.mode & Gt) {
            yn(!0);
            try {
              p.render();
            } finally {
              yn(!1);
            }
          }
          In(!1);
        }
        ha();
      }
      return t.flags |= ti, e !== null && f ? w1(e, t, v, s) : ga(e, t, v, s), t.memoizedState = p.state, u && sC(t, a, !0), t.child;
    }
    function D0(e) {
      var t = e.stateNode;
      t.pendingContext ? uC(e, t.pendingContext, t.pendingContext !== t.context) : t.context && uC(e, t.context, !1), xg(e, t.containerInfo);
    }
    function O1(e, t, a) {
      if (D0(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, u = t.memoizedState, s = u.element;
      LC(e, t), am(t, i, null, a);
      var f = t.memoizedState;
      t.stateNode;
      var p = f.element;
      if (u.isDehydrated) {
        var v = {
          element: p,
          isDehydrated: !1,
          cache: f.cache,
          pendingSuspenseBoundaries: f.pendingSuspenseBoundaries,
          transitions: f.transitions
        }, y = t.updateQueue;
        if (y.baseState = v, t.memoizedState = v, t.flags & Cr) {
          var S = ec(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return O0(e, t, p, a, S);
        } else if (p !== s) {
          var _ = ec(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return O0(e, t, p, a, _);
        } else {
          Mb(t);
          var b = bC(t, null, p, a);
          t.child = b;
          for (var j = b; j; )
            j.flags = j.flags & ~mn | Gr, j = j.sibling;
        }
      } else {
        if (kf(), p === s)
          return Vu(e, t, a);
        ga(e, t, p, a);
      }
      return t.child;
    }
    function O0(e, t, a, i, u) {
      return kf(), lg(u), t.flags |= Cr, ga(e, t, a, i), t.child;
    }
    function N1(e, t, a) {
      jC(t), e === null && ig(t);
      var i = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = u.children, p = Py(i, u);
      return p ? f = null : s !== null && Py(i, s) && (t.flags |= Da), _0(e, t), ga(e, t, f, a), t.child;
    }
    function L1(e, t) {
      return e === null && ig(t), null;
    }
    function M1(e, t, a, i) {
      Nm(e, t);
      var u = t.pendingProps, s = a, f = s._payload, p = s._init, v = p(f);
      t.type = v;
      var y = t.tag = L_(v), S = ul(v, u), _;
      switch (y) {
        case G:
          return xS(t, v), t.type = v = Qf(v), _ = ES(null, t, v, S, i), _;
        case Y:
          return t.type = v = JS(v), _ = k0(null, t, v, S, i), _;
        case Ke:
          return t.type = v = ZS(v), _ = R0(null, t, v, S, i), _;
        case dt: {
          if (t.type !== t.elementType) {
            var b = v.propTypes;
            b && nl(
              b,
              S,
              // Resolved for outer only
              "prop",
              bt(v)
            );
          }
          return _ = T0(
            null,
            t,
            v,
            ul(v.type, S),
            // The inner type can have defaults too
            i
          ), _;
        }
      }
      var j = "";
      throw v !== null && typeof v == "object" && v.$$typeof === Ge && (j = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + v + ". " + ("Lazy element type must resolve to a class or function." + j));
    }
    function z1(e, t, a, i, u) {
      Nm(e, t), t.tag = Y;
      var s;
      return Il(a) ? (s = !0, Vh(t)) : s = !1, Nf(t, u), y0(t, a, i), fS(t, a, i, u), CS(null, t, a, !0, s, u);
    }
    function U1(e, t, a, i) {
      Nm(e, t);
      var u = t.pendingProps, s;
      {
        var f = Tf(t, a, !1);
        s = bf(t, f);
      }
      Nf(t, i);
      var p, v;
      va(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var y = bt(a) || "Unknown";
          hS[y] || (g("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", y, y), hS[y] = !0);
        }
        t.mode & Gt && al.recordLegacyContextWarning(t, null), In(!0), Lp.current = t, p = Af(null, t, a, u, s, i), v = Ff(), In(!1);
      }
      if (ha(), t.flags |= ti, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var S = bt(a) || "Unknown";
        Mp[S] || (g("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", S, S, S), Mp[S] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var _ = bt(a) || "Unknown";
          Mp[_] || (g("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", _, _, _), Mp[_] = !0);
        }
        t.tag = Y, t.memoizedState = null, t.updateQueue = null;
        var b = !1;
        return Il(a) ? (b = !0, Vh(t)) : b = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, Eg(t), m0(t, p), fS(t, a, u, i), CS(null, t, a, !0, b, i);
      } else {
        if (t.tag = G, t.mode & Gt) {
          yn(!0);
          try {
            p = Af(null, t, a, u, s, i), v = Ff();
          } finally {
            yn(!1);
          }
        }
        return jr() && v && eg(t), ga(null, t, p, i), xS(t, a), t.child;
      }
    }
    function xS(e, t) {
      {
        if (t && t.childContextTypes && g("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = Dr();
          i && (a += `

Check the render method of \`` + i + "`.");
          var u = i || "", s = e._debugSource;
          s && (u = s.fileName + ":" + s.lineNumber), gS[u] || (gS[u] = !0, g("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (t.defaultProps !== void 0) {
          var f = bt(t) || "Unknown";
          zp[f] || (g("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", f), zp[f] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var p = bt(t) || "Unknown";
          yS[p] || (g("%s: Function components do not support getDerivedStateFromProps.", p), yS[p] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var v = bt(t) || "Unknown";
          mS[v] || (g("%s: Function components do not support contextType.", v), mS[v] = !0);
        }
      }
    }
    var RS = {
      dehydrated: null,
      treeContext: null,
      retryLane: Dt
    };
    function TS(e) {
      return {
        baseLanes: e,
        cachePool: b1(),
        transitions: null
      };
    }
    function j1(e, t) {
      var a = null;
      return {
        baseLanes: tt(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function A1(e, t, a, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return bg(e, Rp);
    }
    function F1(e, t) {
      return bs(e.childLanes, t);
    }
    function N0(e, t, a) {
      var i = t.pendingProps;
      W_(t) && (t.flags |= Oe);
      var u = il.current, s = !1, f = (t.flags & Oe) !== Me;
      if (f || A1(u, e) ? (s = !0, t.flags &= ~Oe) : (e === null || e.memoizedState !== null) && (u = n1(u, FC)), u = Mf(u), jo(t, u), e === null) {
        ig(t);
        var p = t.memoizedState;
        if (p !== null) {
          var v = p.dehydrated;
          if (v !== null)
            return $1(t, v);
        }
        var y = i.children, S = i.fallback;
        if (s) {
          var _ = H1(t, y, S, a), b = t.child;
          return b.memoizedState = TS(a), t.memoizedState = RS, _;
        } else
          return bS(t, y);
      } else {
        var j = e.memoizedState;
        if (j !== null) {
          var H = j.dehydrated;
          if (H !== null)
            return I1(e, t, f, i, H, j, a);
        }
        if (s) {
          var V = i.fallback, ce = i.children, Ae = V1(e, t, ce, V, a), De = t.child, Tt = e.child.memoizedState;
          return De.memoizedState = Tt === null ? TS(a) : j1(Tt, a), De.childLanes = F1(e, a), t.memoizedState = RS, Ae;
        } else {
          var gt = i.children, L = P1(e, t, gt, a);
          return t.memoizedState = null, L;
        }
      }
    }
    function bS(e, t, a) {
      var i = e.mode, u = {
        mode: "visible",
        children: t
      }, s = wS(u, i);
      return s.return = e, e.child = s, s;
    }
    function H1(e, t, a, i) {
      var u = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, v;
      return (u & ft) === ze && s !== null ? (p = s, p.childLanes = W, p.pendingProps = f, e.mode & Lt && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), v = Io(a, u, i, null)) : (p = wS(f, u), v = Io(a, u, i, null)), p.return = e, v.return = e, p.sibling = v, e.child = p, v;
    }
    function wS(e, t, a) {
      return Lx(e, t, W, null);
    }
    function L0(e, t) {
      return lc(e, t);
    }
    function P1(e, t, a, i) {
      var u = e.child, s = u.sibling, f = L0(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & ft) === ze && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= ka) : p.push(s);
      }
      return t.child = f, f;
    }
    function V1(e, t, a, i, u) {
      var s = t.mode, f = e.child, p = f.sibling, v = {
        mode: "hidden",
        children: a
      }, y;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & ft) === ze && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var S = t.child;
        y = S, y.childLanes = W, y.pendingProps = v, t.mode & Lt && (y.actualDuration = 0, y.actualStartTime = -1, y.selfBaseDuration = f.selfBaseDuration, y.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        y = L0(f, v), y.subtreeFlags = f.subtreeFlags & zn;
      var _;
      return p !== null ? _ = lc(p, i) : (_ = Io(i, s, u, null), _.flags |= mn), _.return = t, y.return = t, y.sibling = _, t.child = y, _;
    }
    function Om(e, t, a, i) {
      i !== null && lg(i), Df(t, e.child, null, a);
      var u = t.pendingProps, s = u.children, f = bS(t, s);
      return f.flags |= mn, t.memoizedState = null, f;
    }
    function B1(e, t, a, i, u) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = wS(f, s), v = Io(i, s, u, null);
      return v.flags |= mn, p.return = t, v.return = t, p.sibling = v, t.child = p, (t.mode & ft) !== ze && Df(t, e.child, null, u), v;
    }
    function $1(e, t, a) {
      return (e.mode & ft) === ze ? (g("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = Be) : Iy(t) ? e.lanes = xr : e.lanes = Jr, null;
    }
    function I1(e, t, a, i, u, s, f) {
      if (a)
        if (t.flags & Cr) {
          t.flags &= ~Cr;
          var L = dS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return Om(e, t, f, L);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= Oe, null;
          var B = i.children, M = i.fallback, Z = B1(e, t, B, M, f), he = t.child;
          return he.memoizedState = TS(f), t.memoizedState = RS, Z;
        }
      else {
        if (Nb(), (t.mode & ft) === ze)
          return Om(
            e,
            t,
            f,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (Iy(u)) {
          var p, v, y;
          {
            var S = GT(u);
            p = S.digest, v = S.message, y = S.stack;
          }
          var _;
          v ? _ = new Error(v) : _ = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var b = dS(_, p, y);
          return Om(e, t, f, b);
        }
        var j = Zr(f, e.childLanes);
        if (ol || j) {
          var H = Vm();
          if (H !== null) {
            var V = Ad(H, f);
            if (V !== Dt && V !== s.retryLane) {
              s.retryLane = V;
              var ce = Kt;
              Fa(e, V), yr(H, e, V, ce);
            }
          }
          WS();
          var Ae = dS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return Om(e, t, f, Ae);
        } else if (tC(u)) {
          t.flags |= Oe, t.child = e.child;
          var De = h_.bind(null, e);
          return qT(u, De), null;
        } else {
          zb(t, u, s.treeContext);
          var Tt = i.children, gt = bS(t, Tt);
          return gt.flags |= Gr, gt;
        }
      }
    }
    function M0(e, t, a) {
      e.lanes = tt(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = tt(i.lanes, t)), mg(e.return, t, a);
    }
    function Y1(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === Le) {
          var u = i.memoizedState;
          u !== null && M0(i, a, e);
        } else if (i.tag === ln)
          M0(i, a, e);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function Q1(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && om(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function W1(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !SS[e])
        if (SS[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              g('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              g('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              g('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          g('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function G1(e, t) {
      e !== void 0 && !Dm[e] && (e !== "collapsed" && e !== "hidden" ? (Dm[e] = !0, g('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (Dm[e] = !0, g('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function z0(e, t) {
      {
        var a = ut(e), i = !a && typeof et(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return g("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function q1(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (ut(e)) {
          for (var a = 0; a < e.length; a++)
            if (!z0(e[a], a))
              return;
        } else {
          var i = et(e);
          if (typeof i == "function") {
            var u = i.call(e);
            if (u)
              for (var s = u.next(), f = 0; !s.done; s = u.next()) {
                if (!z0(s.value, f))
                  return;
                f++;
              }
          } else
            g('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function _S(e, t, a, i, u) {
      var s = e.memoizedState;
      s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: u
      } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = i, s.tail = a, s.tailMode = u);
    }
    function U0(e, t, a) {
      var i = t.pendingProps, u = i.revealOrder, s = i.tail, f = i.children;
      W1(u), G1(s, u), q1(f, u), ga(e, t, f, a);
      var p = il.current, v = bg(p, Rp);
      if (v)
        p = wg(p, Rp), t.flags |= Oe;
      else {
        var y = e !== null && (e.flags & Oe) !== Me;
        y && Y1(t, t.child, a), p = Mf(p);
      }
      if (jo(t, p), (t.mode & ft) === ze)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var S = Q1(t.child), _;
            S === null ? (_ = t.child, t.child = null) : (_ = S.sibling, S.sibling = null), _S(
              t,
              !1,
              // isBackwards
              _,
              S,
              s
            );
            break;
          }
          case "backwards": {
            var b = null, j = t.child;
            for (t.child = null; j !== null; ) {
              var H = j.alternate;
              if (H !== null && om(H) === null) {
                t.child = j;
                break;
              }
              var V = j.sibling;
              j.sibling = b, b = j, j = V;
            }
            _S(
              t,
              !0,
              // isBackwards
              b,
              null,
              // last
              s
            );
            break;
          }
          case "together": {
            _S(
              t,
              !1,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function X1(e, t, a) {
      xg(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = Df(t, null, i, a) : ga(e, t, i, a), t.child;
    }
    var j0 = !1;
    function K1(e, t, a) {
      var i = t.type, u = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || j0 || (j0 = !0, g("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var v = t.type.propTypes;
        v && nl(v, s, "prop", "Context.Provider");
      }
      if (kC(t, u, p), f !== null) {
        var y = f.value;
        if (K(y, p)) {
          if (f.children === s.children && !Hh())
            return Vu(e, t, a);
        } else
          Wb(t, u, a);
      }
      var S = s.children;
      return ga(e, t, S, a), t.child;
    }
    var A0 = !1;
    function J1(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (A0 || (A0 = !0, g("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, s = u.children;
      typeof s != "function" && g("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Nf(t, a);
      var f = tr(i);
      va(t);
      var p;
      return Lp.current = t, In(!0), p = s(f), In(!1), ha(), t.flags |= ti, ga(e, t, p, a), t.child;
    }
    function Up() {
      ol = !0;
    }
    function Nm(e, t) {
      (t.mode & ft) === ze && e !== null && (e.alternate = null, t.alternate = null, t.flags |= mn);
    }
    function Vu(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), d0(), Wp(t.lanes), Zr(a, t.childLanes) ? (Yb(e, t), t.child) : null;
    }
    function Z1(e, t, a) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === i.child)
          i.child = a;
        else {
          var u = i.child;
          if (u === null)
            throw new Error("Expected parent to have a child.");
          for (; u.sibling !== t; )
            if (u = u.sibling, u === null)
              throw new Error("Expected to find the previous sibling.");
          u.sibling = a;
        }
        var s = i.deletions;
        return s === null ? (i.deletions = [e], i.flags |= ka) : s.push(e), a.flags |= mn, a;
      }
    }
    function kS(e, t) {
      var a = e.lanes;
      return !!Zr(a, t);
    }
    function ew(e, t, a) {
      switch (t.tag) {
        case re:
          D0(t), t.stateNode, kf();
          break;
        case fe:
          jC(t);
          break;
        case Y: {
          var i = t.type;
          Il(i) && Vh(t);
          break;
        }
        case we:
          xg(t, t.stateNode.containerInfo);
          break;
        case ht: {
          var u = t.memoizedProps.value, s = t.type._context;
          kC(t, s, u);
          break;
        }
        case yt:
          {
            var f = Zr(a, t.childLanes);
            f && (t.flags |= Ct);
            {
              var p = t.stateNode;
              p.effectDuration = 0, p.passiveEffectDuration = 0;
            }
          }
          break;
        case Le: {
          var v = t.memoizedState;
          if (v !== null) {
            if (v.dehydrated !== null)
              return jo(t, Mf(il.current)), t.flags |= Oe, null;
            var y = t.child, S = y.childLanes;
            if (Zr(a, S))
              return N0(e, t, a);
            jo(t, Mf(il.current));
            var _ = Vu(e, t, a);
            return _ !== null ? _.sibling : null;
          } else
            jo(t, Mf(il.current));
          break;
        }
        case ln: {
          var b = (e.flags & Oe) !== Me, j = Zr(a, t.childLanes);
          if (b) {
            if (j)
              return U0(e, t, a);
            t.flags |= Oe;
          }
          var H = t.memoizedState;
          if (H !== null && (H.rendering = null, H.tail = null, H.lastEffect = null), jo(t, il.current), j)
            break;
          return null;
        }
        case Ue:
        case At:
          return t.lanes = W, w0(e, t, a);
      }
      return Vu(e, t, a);
    }
    function F0(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return Z1(e, t, aE(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || Hh() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          ol = !0;
        else {
          var s = kS(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & Oe) === Me)
            return ol = !1, ew(e, t, a);
          (e.flags & wc) !== Me ? ol = !0 : ol = !1;
        }
      } else if (ol = !1, jr() && bb(t)) {
        var f = t.index, p = wb();
        dC(t, p, f);
      }
      switch (t.lanes = W, t.tag) {
        case be:
          return U1(e, t, t.type, a);
        case an: {
          var v = t.elementType;
          return M1(e, t, v, a);
        }
        case G: {
          var y = t.type, S = t.pendingProps, _ = t.elementType === y ? S : ul(y, S);
          return ES(e, t, y, _, a);
        }
        case Y: {
          var b = t.type, j = t.pendingProps, H = t.elementType === b ? j : ul(b, j);
          return k0(e, t, b, H, a);
        }
        case re:
          return O1(e, t, a);
        case fe:
          return N1(e, t, a);
        case Xe:
          return L1(e, t);
        case Le:
          return N0(e, t, a);
        case we:
          return X1(e, t, a);
        case Ke: {
          var V = t.type, ce = t.pendingProps, Ae = t.elementType === V ? ce : ul(V, ce);
          return R0(e, t, V, Ae, a);
        }
        case Et:
          return _1(e, t, a);
        case mt:
          return k1(e, t, a);
        case yt:
          return D1(e, t, a);
        case ht:
          return K1(e, t, a);
        case fn:
          return J1(e, t, a);
        case dt: {
          var De = t.type, Tt = t.pendingProps, gt = ul(De, Tt);
          if (t.type !== t.elementType) {
            var L = De.propTypes;
            L && nl(
              L,
              gt,
              // Resolved for outer only
              "prop",
              bt(De)
            );
          }
          return gt = ul(De.type, gt), T0(e, t, De, gt, a);
        }
        case $e:
          return b0(e, t, t.type, t.pendingProps, a);
        case Ht: {
          var B = t.type, M = t.pendingProps, Z = t.elementType === B ? M : ul(B, M);
          return z1(e, t, B, Z, a);
        }
        case ln:
          return U0(e, t, a);
        case _t:
          break;
        case Ue:
          return w0(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Hf(e) {
      e.flags |= Ct;
    }
    function H0(e) {
      e.flags |= En, e.flags |= ho;
    }
    var P0, DS, V0, B0;
    P0 = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === fe || u.tag === Xe)
          xT(e, u.stateNode);
        else if (u.tag !== we) {
          if (u.child !== null) {
            u.child.return = u, u = u.child;
            continue;
          }
        }
        if (u === t)
          return;
        for (; u.sibling === null; ) {
          if (u.return === null || u.return === t)
            return;
          u = u.return;
        }
        u.sibling.return = u.return, u = u.sibling;
      }
    }, DS = function(e, t) {
    }, V0 = function(e, t, a, i, u) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = Rg(), v = TT(f, a, s, i, u, p);
        t.updateQueue = v, v && Hf(t);
      }
    }, B0 = function(e, t, a, i) {
      a !== i && Hf(t);
    };
    function jp(e, t) {
      if (!jr())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
          }
          case "collapsed": {
            for (var u = e.tail, s = null; u !== null; )
              u.alternate !== null && (s = u), u = u.sibling;
            s === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : s.sibling = null;
            break;
          }
        }
    }
    function Fr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = W, i = Me;
      if (t) {
        if ((e.mode & Lt) !== ze) {
          for (var v = e.selfBaseDuration, y = e.child; y !== null; )
            a = tt(a, tt(y.lanes, y.childLanes)), i |= y.subtreeFlags & zn, i |= y.flags & zn, v += y.treeBaseDuration, y = y.sibling;
          e.treeBaseDuration = v;
        } else
          for (var S = e.child; S !== null; )
            a = tt(a, tt(S.lanes, S.childLanes)), i |= S.subtreeFlags & zn, i |= S.flags & zn, S.return = e, S = S.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & Lt) !== ze) {
          for (var u = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = tt(a, tt(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, u += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = u, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = tt(a, tt(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function tw(e, t, a) {
      if (Hb() && (t.mode & ft) !== ze && (t.flags & Oe) === Me)
        return SC(t), kf(), t.flags |= Cr | ss | Kn, !1;
      var i = Qh(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (Ab(t), Fr(t), (t.mode & Lt) !== ze) {
            var u = a !== null;
            if (u) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (kf(), (t.flags & Oe) === Me && (t.memoizedState = null), t.flags |= Ct, Fr(t), (t.mode & Lt) !== ze) {
            var f = a !== null;
            if (f) {
              var p = t.child;
              p !== null && (t.treeBaseDuration -= p.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return EC(), !0;
    }
    function $0(e, t, a) {
      var i = t.pendingProps;
      switch (tg(t), t.tag) {
        case be:
        case an:
        case $e:
        case G:
        case Ke:
        case Et:
        case mt:
        case yt:
        case fn:
        case dt:
          return Fr(t), null;
        case Y: {
          var u = t.type;
          return Il(u) && Ph(t), Fr(t), null;
        }
        case re: {
          var s = t.stateNode;
          if (Lf(t), Ky(t), kg(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = Qh(t);
            if (f)
              Hf(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & Cr) !== Me) && (t.flags |= Yn, EC());
            }
          }
          return DS(e, t), Fr(t), null;
        }
        case fe: {
          Tg(t);
          var v = UC(), y = t.type;
          if (e !== null && t.stateNode != null)
            V0(e, t, y, i, v), e.ref !== t.ref && H0(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Fr(t), null;
            }
            var S = Rg(), _ = Qh(t);
            if (_)
              Ub(t, v, S) && Hf(t);
            else {
              var b = CT(y, i, v, S, t);
              P0(b, t, !1, !1), t.stateNode = b, RT(b, y, i, v) && Hf(t);
            }
            t.ref !== null && H0(t);
          }
          return Fr(t), null;
        }
        case Xe: {
          var j = i;
          if (e && t.stateNode != null) {
            var H = e.memoizedProps;
            B0(e, t, H, j);
          } else {
            if (typeof j != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var V = UC(), ce = Rg(), Ae = Qh(t);
            Ae ? jb(t) && Hf(t) : t.stateNode = bT(j, V, ce, t);
          }
          return Fr(t), null;
        }
        case Le: {
          zf(t);
          var De = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var Tt = tw(e, t, De);
            if (!Tt)
              return t.flags & Kn ? t : null;
          }
          if ((t.flags & Oe) !== Me)
            return t.lanes = a, (t.mode & Lt) !== ze && Zg(t), t;
          var gt = De !== null, L = e !== null && e.memoizedState !== null;
          if (gt !== L && gt) {
            var B = t.child;
            if (B.flags |= Mn, (t.mode & ft) !== ze) {
              var M = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !0);
              M || bg(il.current, FC) ? n_() : WS();
            }
          }
          var Z = t.updateQueue;
          if (Z !== null && (t.flags |= Ct), Fr(t), (t.mode & Lt) !== ze && gt) {
            var he = t.child;
            he !== null && (t.treeBaseDuration -= he.treeBaseDuration);
          }
          return null;
        }
        case we:
          return Lf(t), DS(e, t), e === null && gb(t.stateNode.containerInfo), Fr(t), null;
        case ht:
          var de = t.type._context;
          return hg(de, t), Fr(t), null;
        case Ht: {
          var Ye = t.type;
          return Il(Ye) && Ph(t), Fr(t), null;
        }
        case ln: {
          zf(t);
          var Je = t.memoizedState;
          if (Je === null)
            return Fr(t), null;
          var Xt = (t.flags & Oe) !== Me, Ut = Je.rendering;
          if (Ut === null)
            if (Xt)
              jp(Je, !1);
            else {
              var Gn = a_() && (e === null || (e.flags & Oe) === Me);
              if (!Gn)
                for (var jt = t.child; jt !== null; ) {
                  var Pn = om(jt);
                  if (Pn !== null) {
                    Xt = !0, t.flags |= Oe, jp(Je, !1);
                    var la = Pn.updateQueue;
                    return la !== null && (t.updateQueue = la, t.flags |= Ct), t.subtreeFlags = Me, Qb(t, a), jo(t, wg(il.current, Rp)), t.child;
                  }
                  jt = jt.sibling;
                }
              Je.tail !== null && Qn() > cx() && (t.flags |= Oe, Xt = !0, jp(Je, !1), t.lanes = kd);
            }
          else {
            if (!Xt) {
              var $r = om(Ut);
              if ($r !== null) {
                t.flags |= Oe, Xt = !0;
                var oi = $r.updateQueue;
                if (oi !== null && (t.updateQueue = oi, t.flags |= Ct), jp(Je, !0), Je.tail === null && Je.tailMode === "hidden" && !Ut.alternate && !jr())
                  return Fr(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              Qn() * 2 - Je.renderingStartTime > cx() && a !== Jr && (t.flags |= Oe, Xt = !0, jp(Je, !1), t.lanes = kd);
            }
            if (Je.isBackwards)
              Ut.sibling = t.child, t.child = Ut;
            else {
              var Ca = Je.last;
              Ca !== null ? Ca.sibling = Ut : t.child = Ut, Je.last = Ut;
            }
          }
          if (Je.tail !== null) {
            var xa = Je.tail;
            Je.rendering = xa, Je.tail = xa.sibling, Je.renderingStartTime = Qn(), xa.sibling = null;
            var ua = il.current;
            return Xt ? ua = wg(ua, Rp) : ua = Mf(ua), jo(t, ua), xa;
          }
          return Fr(t), null;
        }
        case _t:
          break;
        case Ue:
        case At: {
          QS(t);
          var Qu = t.memoizedState, Wf = Qu !== null;
          if (e !== null) {
            var Jp = e.memoizedState, Jl = Jp !== null;
            Jl !== Wf && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !le && (t.flags |= Mn);
          }
          return !Wf || (t.mode & ft) === ze ? Fr(t) : Zr(Kl, Jr) && (Fr(t), t.subtreeFlags & (mn | Ct) && (t.flags |= Mn)), null;
        }
        case kt:
          return null;
        case Ot:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function nw(e, t, a) {
      switch (tg(t), t.tag) {
        case Y: {
          var i = t.type;
          Il(i) && Ph(t);
          var u = t.flags;
          return u & Kn ? (t.flags = u & ~Kn | Oe, (t.mode & Lt) !== ze && Zg(t), t) : null;
        }
        case re: {
          t.stateNode, Lf(t), Ky(t), kg();
          var s = t.flags;
          return (s & Kn) !== Me && (s & Oe) === Me ? (t.flags = s & ~Kn | Oe, t) : null;
        }
        case fe:
          return Tg(t), null;
        case Le: {
          zf(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            kf();
          }
          var p = t.flags;
          return p & Kn ? (t.flags = p & ~Kn | Oe, (t.mode & Lt) !== ze && Zg(t), t) : null;
        }
        case ln:
          return zf(t), null;
        case we:
          return Lf(t), null;
        case ht:
          var v = t.type._context;
          return hg(v, t), null;
        case Ue:
        case At:
          return QS(t), null;
        case kt:
          return null;
        default:
          return null;
      }
    }
    function I0(e, t, a) {
      switch (tg(t), t.tag) {
        case Y: {
          var i = t.type.childContextTypes;
          i != null && Ph(t);
          break;
        }
        case re: {
          t.stateNode, Lf(t), Ky(t), kg();
          break;
        }
        case fe: {
          Tg(t);
          break;
        }
        case we:
          Lf(t);
          break;
        case Le:
          zf(t);
          break;
        case ln:
          zf(t);
          break;
        case ht:
          var u = t.type._context;
          hg(u, t);
          break;
        case Ue:
        case At:
          QS(t);
          break;
      }
    }
    var Y0 = null;
    Y0 = /* @__PURE__ */ new Set();
    var Lm = !1, Hr = !1, rw = typeof WeakSet == "function" ? WeakSet : Set, Ce = null, Pf = null, Vf = null;
    function aw(e) {
      wl(null, function() {
        throw e;
      }), os();
    }
    var iw = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & Lt)
        try {
          ql(), t.componentWillUnmount();
        } finally {
          Gl(e);
        }
      else
        t.componentWillUnmount();
    };
    function Q0(e, t) {
      try {
        Ho(fr, e);
      } catch (a) {
        cn(e, t, a);
      }
    }
    function OS(e, t, a) {
      try {
        iw(e, a);
      } catch (i) {
        cn(e, t, i);
      }
    }
    function lw(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        cn(e, t, i);
      }
    }
    function W0(e, t) {
      try {
        q0(e);
      } catch (a) {
        cn(e, t, a);
      }
    }
    function Bf(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (Ve && ot && e.mode & Lt)
              try {
                ql(), i = a(null);
              } finally {
                Gl(e);
              }
            else
              i = a(null);
          } catch (u) {
            cn(e, t, u);
          }
          typeof i == "function" && g("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", We(e));
        } else
          a.current = null;
    }
    function Mm(e, t, a) {
      try {
        a();
      } catch (i) {
        cn(e, t, i);
      }
    }
    var G0 = !1;
    function uw(e, t) {
      ST(e.containerInfo), Ce = t, ow();
      var a = G0;
      return G0 = !1, a;
    }
    function ow() {
      for (; Ce !== null; ) {
        var e = Ce, t = e.child;
        (e.subtreeFlags & kl) !== Me && t !== null ? (t.return = e, Ce = t) : sw();
      }
    }
    function sw() {
      for (; Ce !== null; ) {
        var e = Ce;
        Yt(e);
        try {
          cw(e);
        } catch (a) {
          cn(e, e.return, a);
        }
        sn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Ce = t;
          return;
        }
        Ce = e.return;
      }
    }
    function cw(e) {
      var t = e.alternate, a = e.flags;
      if ((a & Yn) !== Me) {
        switch (Yt(e), e.tag) {
          case G:
          case Ke:
          case $e:
            break;
          case Y: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !tc && (s.props !== e.memoizedProps && g("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", We(e) || "instance"), s.state !== e.memoizedState && g("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", We(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : ul(e.type, i), u);
              {
                var p = Y0;
                f === void 0 && !p.has(e.type) && (p.add(e.type), g("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", We(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case re: {
            {
              var v = e.stateNode;
              IT(v.containerInfo);
            }
            break;
          }
          case fe:
          case Xe:
          case we:
          case Ht:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        sn();
      }
    }
    function sl(e, t, a) {
      var i = t.updateQueue, u = i !== null ? i.lastEffect : null;
      if (u !== null) {
        var s = u.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var p = f.destroy;
            f.destroy = void 0, p !== void 0 && ((e & Ar) !== Ha ? Xi(t) : (e & fr) !== Ha && fs(t), (e & Yl) !== Ha && qp(!0), Mm(t, a, p), (e & Yl) !== Ha && qp(!1), (e & Ar) !== Ha ? Ll() : (e & fr) !== Ha && wd());
          }
          f = f.next;
        } while (f !== s);
      }
    }
    function Ho(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var u = i.next, s = u;
        do {
          if ((s.tag & e) === e) {
            (e & Ar) !== Ha ? bd(t) : (e & fr) !== Ha && Lc(t);
            var f = s.create;
            (e & Yl) !== Ha && qp(!0), s.destroy = f(), (e & Yl) !== Ha && qp(!1), (e & Ar) !== Ha ? Fv() : (e & fr) !== Ha && Hv();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var v = void 0;
                (s.tag & fr) !== Me ? v = "useLayoutEffect" : (s.tag & Yl) !== Me ? v = "useInsertionEffect" : v = "useEffect";
                var y = void 0;
                p === null ? y = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof p.then == "function" ? y = `

It looks like you wrote ` + v + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + v + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : y = " You returned: " + p, g("%s must not return anything besides a function, which is used for clean-up.%s", v, y);
              }
            }
          }
          s = s.next;
        } while (s !== u);
      }
    }
    function fw(e, t) {
      if ((t.flags & Ct) !== Me)
        switch (t.tag) {
          case yt: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, s = i.onPostCommit, f = c0(), p = t.alternate === null ? "mount" : "update";
            s0() && (p = "nested-update"), typeof s == "function" && s(u, p, a, f);
            var v = t.return;
            e: for (; v !== null; ) {
              switch (v.tag) {
                case re:
                  var y = v.stateNode;
                  y.passiveEffectDuration += a;
                  break e;
                case yt:
                  var S = v.stateNode;
                  S.passiveEffectDuration += a;
                  break e;
              }
              v = v.return;
            }
            break;
          }
        }
    }
    function dw(e, t, a, i) {
      if ((a.flags & Ol) !== Me)
        switch (a.tag) {
          case G:
          case Ke:
          case $e: {
            if (!Hr)
              if (a.mode & Lt)
                try {
                  ql(), Ho(fr | cr, a);
                } finally {
                  Gl(a);
                }
              else
                Ho(fr | cr, a);
            break;
          }
          case Y: {
            var u = a.stateNode;
            if (a.flags & Ct && !Hr)
              if (t === null)
                if (a.type === a.elementType && !tc && (u.props !== a.memoizedProps && g("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", We(a) || "instance"), u.state !== a.memoizedState && g("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", We(a) || "instance")), a.mode & Lt)
                  try {
                    ql(), u.componentDidMount();
                  } finally {
                    Gl(a);
                  }
                else
                  u.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : ul(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !tc && (u.props !== a.memoizedProps && g("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", We(a) || "instance"), u.state !== a.memoizedState && g("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", We(a) || "instance")), a.mode & Lt)
                  try {
                    ql(), u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    Gl(a);
                  }
                else
                  u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !tc && (u.props !== a.memoizedProps && g("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", We(a) || "instance"), u.state !== a.memoizedState && g("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", We(a) || "instance")), zC(a, p, u));
            break;
          }
          case re: {
            var v = a.updateQueue;
            if (v !== null) {
              var y = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case fe:
                    y = a.child.stateNode;
                    break;
                  case Y:
                    y = a.child.stateNode;
                    break;
                }
              zC(a, v, y);
            }
            break;
          }
          case fe: {
            var S = a.stateNode;
            if (t === null && a.flags & Ct) {
              var _ = a.type, b = a.memoizedProps;
              OT(S, _, b);
            }
            break;
          }
          case Xe:
            break;
          case we:
            break;
          case yt: {
            {
              var j = a.memoizedProps, H = j.onCommit, V = j.onRender, ce = a.stateNode.effectDuration, Ae = c0(), De = t === null ? "mount" : "update";
              s0() && (De = "nested-update"), typeof V == "function" && V(a.memoizedProps.id, De, a.actualDuration, a.treeBaseDuration, a.actualStartTime, Ae);
              {
                typeof H == "function" && H(a.memoizedProps.id, De, ce, Ae), s_(a);
                var Tt = a.return;
                e: for (; Tt !== null; ) {
                  switch (Tt.tag) {
                    case re:
                      var gt = Tt.stateNode;
                      gt.effectDuration += ce;
                      break e;
                    case yt:
                      var L = Tt.stateNode;
                      L.effectDuration += ce;
                      break e;
                  }
                  Tt = Tt.return;
                }
              }
            }
            break;
          }
          case Le: {
            Ew(e, a);
            break;
          }
          case ln:
          case Ht:
          case _t:
          case Ue:
          case At:
          case Ot:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Hr || a.flags & En && q0(a);
    }
    function pw(e) {
      switch (e.tag) {
        case G:
        case Ke:
        case $e: {
          if (e.mode & Lt)
            try {
              ql(), Q0(e, e.return);
            } finally {
              Gl(e);
            }
          else
            Q0(e, e.return);
          break;
        }
        case Y: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && lw(e, e.return, t), W0(e, e.return);
          break;
        }
        case fe: {
          W0(e, e.return);
          break;
        }
      }
    }
    function vw(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === fe) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? PT(u) : BT(i.stateNode, i.memoizedProps);
            } catch (f) {
              cn(e, e.return, f);
            }
          }
        } else if (i.tag === Xe) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? VT(s) : $T(s, i.memoizedProps);
            } catch (f) {
              cn(e, e.return, f);
            }
        } else if (!((i.tag === Ue || i.tag === At) && i.memoizedState !== null && i !== e)) {
          if (i.child !== null) {
            i.child.return = i, i = i.child;
            continue;
          }
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          a === i && (a = null), i = i.return;
        }
        a === i && (a = null), i.sibling.return = i.return, i = i.sibling;
      }
    }
    function q0(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case fe:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var u;
          if (e.mode & Lt)
            try {
              ql(), u = t(i);
            } finally {
              Gl(e);
            }
          else
            u = t(i);
          typeof u == "function" && g("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", We(e));
        } else
          t.hasOwnProperty("current") || g("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", We(e)), t.current = i;
      }
    }
    function hw(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function X0(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, X0(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === fe) {
          var a = e.stateNode;
          a !== null && Cb(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function mw(e) {
      for (var t = e.return; t !== null; ) {
        if (K0(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function K0(e) {
      return e.tag === fe || e.tag === re || e.tag === we;
    }
    function J0(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || K0(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== fe && t.tag !== Xe && t.tag !== Jt; ) {
          if (t.flags & mn || t.child === null || t.tag === we)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & mn))
          return t.stateNode;
      }
    }
    function yw(e) {
      var t = mw(e);
      switch (t.tag) {
        case fe: {
          var a = t.stateNode;
          t.flags & Da && (eC(a), t.flags &= ~Da);
          var i = J0(e);
          LS(e, i, a);
          break;
        }
        case re:
        case we: {
          var u = t.stateNode.containerInfo, s = J0(e);
          NS(e, s, u);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function NS(e, t, a) {
      var i = e.tag, u = i === fe || i === Xe;
      if (u) {
        var s = e.stateNode;
        t ? jT(a, s, t) : zT(a, s);
      } else if (i !== we) {
        var f = e.child;
        if (f !== null) {
          NS(f, t, a);
          for (var p = f.sibling; p !== null; )
            NS(p, t, a), p = p.sibling;
        }
      }
    }
    function LS(e, t, a) {
      var i = e.tag, u = i === fe || i === Xe;
      if (u) {
        var s = e.stateNode;
        t ? UT(a, s, t) : MT(a, s);
      } else if (i !== we) {
        var f = e.child;
        if (f !== null) {
          LS(f, t, a);
          for (var p = f.sibling; p !== null; )
            LS(p, t, a), p = p.sibling;
        }
      }
    }
    var Pr = null, cl = !1;
    function gw(e, t, a) {
      {
        var i = t;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case fe: {
              Pr = i.stateNode, cl = !1;
              break e;
            }
            case re: {
              Pr = i.stateNode.containerInfo, cl = !0;
              break e;
            }
            case we: {
              Pr = i.stateNode.containerInfo, cl = !0;
              break e;
            }
          }
          i = i.return;
        }
        if (Pr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        Z0(e, t, a), Pr = null, cl = !1;
      }
      hw(a);
    }
    function Po(e, t, a) {
      for (var i = a.child; i !== null; )
        Z0(e, t, i), i = i.sibling;
    }
    function Z0(e, t, a) {
      switch (xd(a), a.tag) {
        case fe:
          Hr || Bf(a, t);
        case Xe: {
          {
            var i = Pr, u = cl;
            Pr = null, Po(e, t, a), Pr = i, cl = u, Pr !== null && (cl ? FT(Pr, a.stateNode) : AT(Pr, a.stateNode));
          }
          return;
        }
        case Jt: {
          Pr !== null && (cl ? HT(Pr, a.stateNode) : $y(Pr, a.stateNode));
          return;
        }
        case we: {
          {
            var s = Pr, f = cl;
            Pr = a.stateNode.containerInfo, cl = !0, Po(e, t, a), Pr = s, cl = f;
          }
          return;
        }
        case G:
        case Ke:
        case dt:
        case $e: {
          if (!Hr) {
            var p = a.updateQueue;
            if (p !== null) {
              var v = p.lastEffect;
              if (v !== null) {
                var y = v.next, S = y;
                do {
                  var _ = S, b = _.destroy, j = _.tag;
                  b !== void 0 && ((j & Yl) !== Ha ? Mm(a, t, b) : (j & fr) !== Ha && (fs(a), a.mode & Lt ? (ql(), Mm(a, t, b), Gl(a)) : Mm(a, t, b), wd())), S = S.next;
                } while (S !== y);
              }
            }
          }
          Po(e, t, a);
          return;
        }
        case Y: {
          if (!Hr) {
            Bf(a, t);
            var H = a.stateNode;
            typeof H.componentWillUnmount == "function" && OS(a, t, H);
          }
          Po(e, t, a);
          return;
        }
        case _t: {
          Po(e, t, a);
          return;
        }
        case Ue: {
          if (
            // TODO: Remove this dead flag
            a.mode & ft
          ) {
            var V = Hr;
            Hr = V || a.memoizedState !== null, Po(e, t, a), Hr = V;
          } else
            Po(e, t, a);
          break;
        }
        default: {
          Po(e, t, a);
          return;
        }
      }
    }
    function Sw(e) {
      e.memoizedState;
    }
    function Ew(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var u = i.memoizedState;
          if (u !== null) {
            var s = u.dehydrated;
            s !== null && ab(s);
          }
        }
      }
    }
    function ex(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new rw()), t.forEach(function(i) {
          var u = m_.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), Kr)
              if (Pf !== null && Vf !== null)
                Gp(Vf, Pf);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(u, u);
          }
        });
      }
    }
    function Cw(e, t, a) {
      Pf = a, Vf = e, Yt(t), tx(t, e), Yt(t), Pf = null, Vf = null;
    }
    function fl(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u];
          try {
            gw(e, t, s);
          } catch (v) {
            cn(s, t, v);
          }
        }
      var f = Sl();
      if (t.subtreeFlags & Dl)
        for (var p = t.child; p !== null; )
          Yt(p), tx(p, e), p = p.sibling;
      Yt(f);
    }
    function tx(e, t, a) {
      var i = e.alternate, u = e.flags;
      switch (e.tag) {
        case G:
        case Ke:
        case dt:
        case $e: {
          if (fl(t, e), Xl(e), u & Ct) {
            try {
              sl(Yl | cr, e, e.return), Ho(Yl | cr, e);
            } catch (Ye) {
              cn(e, e.return, Ye);
            }
            if (e.mode & Lt) {
              try {
                ql(), sl(fr | cr, e, e.return);
              } catch (Ye) {
                cn(e, e.return, Ye);
              }
              Gl(e);
            } else
              try {
                sl(fr | cr, e, e.return);
              } catch (Ye) {
                cn(e, e.return, Ye);
              }
          }
          return;
        }
        case Y: {
          fl(t, e), Xl(e), u & En && i !== null && Bf(i, i.return);
          return;
        }
        case fe: {
          fl(t, e), Xl(e), u & En && i !== null && Bf(i, i.return);
          {
            if (e.flags & Da) {
              var s = e.stateNode;
              try {
                eC(s);
              } catch (Ye) {
                cn(e, e.return, Ye);
              }
            }
            if (u & Ct) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, v = i !== null ? i.memoizedProps : p, y = e.type, S = e.updateQueue;
                if (e.updateQueue = null, S !== null)
                  try {
                    NT(f, S, y, v, p, e);
                  } catch (Ye) {
                    cn(e, e.return, Ye);
                  }
              }
            }
          }
          return;
        }
        case Xe: {
          if (fl(t, e), Xl(e), u & Ct) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var _ = e.stateNode, b = e.memoizedProps, j = i !== null ? i.memoizedProps : b;
            try {
              LT(_, j, b);
            } catch (Ye) {
              cn(e, e.return, Ye);
            }
          }
          return;
        }
        case re: {
          if (fl(t, e), Xl(e), u & Ct && i !== null) {
            var H = i.memoizedState;
            if (H.isDehydrated)
              try {
                rb(t.containerInfo);
              } catch (Ye) {
                cn(e, e.return, Ye);
              }
          }
          return;
        }
        case we: {
          fl(t, e), Xl(e);
          return;
        }
        case Le: {
          fl(t, e), Xl(e);
          var V = e.child;
          if (V.flags & Mn) {
            var ce = V.stateNode, Ae = V.memoizedState, De = Ae !== null;
            if (ce.isHidden = De, De) {
              var Tt = V.alternate !== null && V.alternate.memoizedState !== null;
              Tt || t_();
            }
          }
          if (u & Ct) {
            try {
              Sw(e);
            } catch (Ye) {
              cn(e, e.return, Ye);
            }
            ex(e);
          }
          return;
        }
        case Ue: {
          var gt = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & ft
          ) {
            var L = Hr;
            Hr = L || gt, fl(t, e), Hr = L;
          } else
            fl(t, e);
          if (Xl(e), u & Mn) {
            var B = e.stateNode, M = e.memoizedState, Z = M !== null, he = e;
            if (B.isHidden = Z, Z && !gt && (he.mode & ft) !== ze) {
              Ce = he;
              for (var de = he.child; de !== null; )
                Ce = de, Rw(de), de = de.sibling;
            }
            vw(he, Z);
          }
          return;
        }
        case ln: {
          fl(t, e), Xl(e), u & Ct && ex(e);
          return;
        }
        case _t:
          return;
        default: {
          fl(t, e), Xl(e);
          return;
        }
      }
    }
    function Xl(e) {
      var t = e.flags;
      if (t & mn) {
        try {
          yw(e);
        } catch (a) {
          cn(e, e.return, a);
        }
        e.flags &= ~mn;
      }
      t & Gr && (e.flags &= ~Gr);
    }
    function xw(e, t, a) {
      Pf = a, Vf = t, Ce = e, nx(e, t, a), Pf = null, Vf = null;
    }
    function nx(e, t, a) {
      for (var i = (e.mode & ft) !== ze; Ce !== null; ) {
        var u = Ce, s = u.child;
        if (u.tag === Ue && i) {
          var f = u.memoizedState !== null, p = f || Lm;
          if (p) {
            MS(e, t, a);
            continue;
          } else {
            var v = u.alternate, y = v !== null && v.memoizedState !== null, S = y || Hr, _ = Lm, b = Hr;
            Lm = p, Hr = S, Hr && !b && (Ce = u, Tw(u));
            for (var j = s; j !== null; )
              Ce = j, nx(
                j,
                // New root; bubble back up to here and stop.
                t,
                a
              ), j = j.sibling;
            Ce = u, Lm = _, Hr = b, MS(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & Ol) !== Me && s !== null ? (s.return = u, Ce = s) : MS(e, t, a);
      }
    }
    function MS(e, t, a) {
      for (; Ce !== null; ) {
        var i = Ce;
        if ((i.flags & Ol) !== Me) {
          var u = i.alternate;
          Yt(i);
          try {
            dw(t, u, i, a);
          } catch (f) {
            cn(i, i.return, f);
          }
          sn();
        }
        if (i === e) {
          Ce = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, Ce = s;
          return;
        }
        Ce = i.return;
      }
    }
    function Rw(e) {
      for (; Ce !== null; ) {
        var t = Ce, a = t.child;
        switch (t.tag) {
          case G:
          case Ke:
          case dt:
          case $e: {
            if (t.mode & Lt)
              try {
                ql(), sl(fr, t, t.return);
              } finally {
                Gl(t);
              }
            else
              sl(fr, t, t.return);
            break;
          }
          case Y: {
            Bf(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && OS(t, t.return, i);
            break;
          }
          case fe: {
            Bf(t, t.return);
            break;
          }
          case Ue: {
            var u = t.memoizedState !== null;
            if (u) {
              rx(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, Ce = a) : rx(e);
      }
    }
    function rx(e) {
      for (; Ce !== null; ) {
        var t = Ce;
        if (t === e) {
          Ce = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Ce = a;
          return;
        }
        Ce = t.return;
      }
    }
    function Tw(e) {
      for (; Ce !== null; ) {
        var t = Ce, a = t.child;
        if (t.tag === Ue) {
          var i = t.memoizedState !== null;
          if (i) {
            ax(e);
            continue;
          }
        }
        a !== null ? (a.return = t, Ce = a) : ax(e);
      }
    }
    function ax(e) {
      for (; Ce !== null; ) {
        var t = Ce;
        Yt(t);
        try {
          pw(t);
        } catch (i) {
          cn(t, t.return, i);
        }
        if (sn(), t === e) {
          Ce = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Ce = a;
          return;
        }
        Ce = t.return;
      }
    }
    function bw(e, t, a, i) {
      Ce = t, ww(t, e, a, i);
    }
    function ww(e, t, a, i) {
      for (; Ce !== null; ) {
        var u = Ce, s = u.child;
        (u.subtreeFlags & Gi) !== Me && s !== null ? (s.return = u, Ce = s) : _w(e, t, a, i);
      }
    }
    function _w(e, t, a, i) {
      for (; Ce !== null; ) {
        var u = Ce;
        if ((u.flags & Wr) !== Me) {
          Yt(u);
          try {
            kw(t, u, a, i);
          } catch (f) {
            cn(u, u.return, f);
          }
          sn();
        }
        if (u === e) {
          Ce = null;
          return;
        }
        var s = u.sibling;
        if (s !== null) {
          s.return = u.return, Ce = s;
          return;
        }
        Ce = u.return;
      }
    }
    function kw(e, t, a, i) {
      switch (t.tag) {
        case G:
        case Ke:
        case $e: {
          if (t.mode & Lt) {
            Jg();
            try {
              Ho(Ar | cr, t);
            } finally {
              Kg(t);
            }
          } else
            Ho(Ar | cr, t);
          break;
        }
      }
    }
    function Dw(e) {
      Ce = e, Ow();
    }
    function Ow() {
      for (; Ce !== null; ) {
        var e = Ce, t = e.child;
        if ((Ce.flags & ka) !== Me) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              Ce = u, Mw(u, e);
            }
            {
              var s = e.alternate;
              if (s !== null) {
                var f = s.child;
                if (f !== null) {
                  s.child = null;
                  do {
                    var p = f.sibling;
                    f.sibling = null, f = p;
                  } while (f !== null);
                }
              }
            }
            Ce = e;
          }
        }
        (e.subtreeFlags & Gi) !== Me && t !== null ? (t.return = e, Ce = t) : Nw();
      }
    }
    function Nw() {
      for (; Ce !== null; ) {
        var e = Ce;
        (e.flags & Wr) !== Me && (Yt(e), Lw(e), sn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Ce = t;
          return;
        }
        Ce = e.return;
      }
    }
    function Lw(e) {
      switch (e.tag) {
        case G:
        case Ke:
        case $e: {
          e.mode & Lt ? (Jg(), sl(Ar | cr, e, e.return), Kg(e)) : sl(Ar | cr, e, e.return);
          break;
        }
      }
    }
    function Mw(e, t) {
      for (; Ce !== null; ) {
        var a = Ce;
        Yt(a), Uw(a, t), sn();
        var i = a.child;
        i !== null ? (i.return = a, Ce = i) : zw(e);
      }
    }
    function zw(e) {
      for (; Ce !== null; ) {
        var t = Ce, a = t.sibling, i = t.return;
        if (X0(t), t === e) {
          Ce = null;
          return;
        }
        if (a !== null) {
          a.return = i, Ce = a;
          return;
        }
        Ce = i;
      }
    }
    function Uw(e, t) {
      switch (e.tag) {
        case G:
        case Ke:
        case $e: {
          e.mode & Lt ? (Jg(), sl(Ar, e, t), Kg(e)) : sl(Ar, e, t);
          break;
        }
      }
    }
    function jw(e) {
      switch (e.tag) {
        case G:
        case Ke:
        case $e: {
          try {
            Ho(fr | cr, e);
          } catch (a) {
            cn(e, e.return, a);
          }
          break;
        }
        case Y: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            cn(e, e.return, a);
          }
          break;
        }
      }
    }
    function Aw(e) {
      switch (e.tag) {
        case G:
        case Ke:
        case $e: {
          try {
            Ho(Ar | cr, e);
          } catch (t) {
            cn(e, e.return, t);
          }
          break;
        }
      }
    }
    function Fw(e) {
      switch (e.tag) {
        case G:
        case Ke:
        case $e: {
          try {
            sl(fr | cr, e, e.return);
          } catch (a) {
            cn(e, e.return, a);
          }
          break;
        }
        case Y: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && OS(e, e.return, t);
          break;
        }
      }
    }
    function Hw(e) {
      switch (e.tag) {
        case G:
        case Ke:
        case $e:
          try {
            sl(Ar | cr, e, e.return);
          } catch (t) {
            cn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var Ap = Symbol.for;
      Ap("selector.component"), Ap("selector.has_pseudo_class"), Ap("selector.role"), Ap("selector.test_id"), Ap("selector.text");
    }
    var Pw = [];
    function Vw() {
      Pw.forEach(function(e) {
        return e();
      });
    }
    var Bw = k.ReactCurrentActQueue;
    function $w(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function ix() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && Bw.current !== null && g("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var Iw = Math.ceil, zS = k.ReactCurrentDispatcher, US = k.ReactCurrentOwner, Vr = k.ReactCurrentBatchConfig, dl = k.ReactCurrentActQueue, vr = (
      /*             */
      0
    ), lx = (
      /*               */
      1
    ), Br = (
      /*                */
      2
    ), ji = (
      /*                */
      4
    ), Bu = 0, Fp = 1, nc = 2, zm = 3, Hp = 4, ux = 5, jS = 6, Rt = vr, Sa = null, Dn = null, hr = W, Kl = W, AS = Oo(W), mr = Bu, Pp = null, Um = W, Vp = W, jm = W, Bp = null, Pa = null, FS = 0, ox = 500, sx = 1 / 0, Yw = 500, $u = null;
    function $p() {
      sx = Qn() + Yw;
    }
    function cx() {
      return sx;
    }
    var Am = !1, HS = null, $f = null, rc = !1, Vo = null, Ip = W, PS = [], VS = null, Qw = 50, Yp = 0, BS = null, $S = !1, Fm = !1, Ww = 50, If = 0, Hm = null, Qp = Kt, Pm = W, fx = !1;
    function Vm() {
      return Sa;
    }
    function Ea() {
      return (Rt & (Br | ji)) !== vr ? Qn() : (Qp !== Kt || (Qp = Qn()), Qp);
    }
    function Bo(e) {
      var t = e.mode;
      if ((t & ft) === ze)
        return Be;
      if ((Rt & Br) !== vr && hr !== W)
        return Ts(hr);
      var a = Bb() !== Vb;
      if (a) {
        if (Vr.transition !== null) {
          var i = Vr.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return Pm === Dt && (Pm = zd()), Pm;
      }
      var u = Ua();
      if (u !== Dt)
        return u;
      var s = wT();
      return s;
    }
    function Gw(e) {
      var t = e.mode;
      return (t & ft) === ze ? Be : Yv();
    }
    function yr(e, t, a, i) {
      g_(), fx && g("useInsertionEffect must not schedule updates."), $S && (Fm = !0), So(e, a, i), (Rt & Br) !== W && e === Sa ? C_(t) : (Kr && _s(e, t, a), x_(t), e === Sa && ((Rt & Br) === vr && (Vp = tt(Vp, a)), mr === Hp && $o(e, hr)), Va(e, i), a === Be && Rt === vr && (t.mode & ft) === ze && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !dl.isBatchingLegacy && ($p(), fC()));
    }
    function qw(e, t, a) {
      var i = e.current;
      i.lanes = t, So(e, t, a), Va(e, a);
    }
    function Xw(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (Rt & Br) !== vr
      );
    }
    function Va(e, t) {
      var a = e.callbackNode;
      Jc(e, t);
      var i = Kc(e, e === Sa ? hr : W);
      if (i === W) {
        a !== null && _x(a), e.callbackNode = null, e.callbackPriority = Dt;
        return;
      }
      var u = Ul(i), s = e.callbackPriority;
      if (s === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(dl.current !== null && a !== XS)) {
        a == null && s !== Be && g("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && _x(a);
      var f;
      if (u === Be)
        e.tag === No ? (dl.isBatchingLegacy !== null && (dl.didScheduleLegacyUpdate = !0), Tb(vx.bind(null, e))) : cC(vx.bind(null, e)), dl.current !== null ? dl.current.push(Lo) : kT(function() {
          (Rt & (Br | ji)) === vr && Lo();
        }), f = null;
      else {
        var p;
        switch (Jv(i)) {
          case Nr:
            p = cs;
            break;
          case wi:
            p = Nl;
            break;
          case Ma:
            p = qi;
            break;
          case za:
            p = mu;
            break;
          default:
            p = qi;
            break;
        }
        f = KS(p, dx.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = f;
    }
    function dx(e, t) {
      if (v1(), Qp = Kt, Pm = W, (Rt & (Br | ji)) !== vr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Yu();
      if (i && e.callbackNode !== a)
        return null;
      var u = Kc(e, e === Sa ? hr : W);
      if (u === W)
        return null;
      var s = !ef(e, u) && !Iv(e, u) && !t, f = s ? l_(e, u) : $m(e, u);
      if (f !== Bu) {
        if (f === nc) {
          var p = Zc(e);
          p !== W && (u = p, f = IS(e, p));
        }
        if (f === Fp) {
          var v = Pp;
          throw ac(e, W), $o(e, u), Va(e, Qn()), v;
        }
        if (f === jS)
          $o(e, u);
        else {
          var y = !ef(e, u), S = e.current.alternate;
          if (y && !Jw(S)) {
            if (f = $m(e, u), f === nc) {
              var _ = Zc(e);
              _ !== W && (u = _, f = IS(e, _));
            }
            if (f === Fp) {
              var b = Pp;
              throw ac(e, W), $o(e, u), Va(e, Qn()), b;
            }
          }
          e.finishedWork = S, e.finishedLanes = u, Kw(e, f, u);
        }
      }
      return Va(e, Qn()), e.callbackNode === a ? dx.bind(null, e) : null;
    }
    function IS(e, t) {
      var a = Bp;
      if (rf(e)) {
        var i = ac(e, t);
        i.flags |= Cr, yb(e.containerInfo);
      }
      var u = $m(e, t);
      if (u !== nc) {
        var s = Pa;
        Pa = a, s !== null && px(s);
      }
      return u;
    }
    function px(e) {
      Pa === null ? Pa = e : Pa.push.apply(Pa, e);
    }
    function Kw(e, t, a) {
      switch (t) {
        case Bu:
        case Fp:
          throw new Error("Root did not complete. This is a bug in React.");
        case nc: {
          ic(e, Pa, $u);
          break;
        }
        case zm: {
          if ($o(e, a), _u(a) && // do not delay if we're inside an act() scope
          !kx()) {
            var i = FS + ox - Qn();
            if (i > 10) {
              var u = Kc(e, W);
              if (u !== W)
                break;
              var s = e.suspendedLanes;
              if (!ku(s, a)) {
                Ea(), tf(e, s);
                break;
              }
              e.timeoutHandle = Vy(ic.bind(null, e, Pa, $u), i);
              break;
            }
          }
          ic(e, Pa, $u);
          break;
        }
        case Hp: {
          if ($o(e, a), Ld(a))
            break;
          if (!kx()) {
            var f = ri(e, a), p = f, v = Qn() - p, y = y_(v) - v;
            if (y > 10) {
              e.timeoutHandle = Vy(ic.bind(null, e, Pa, $u), y);
              break;
            }
          }
          ic(e, Pa, $u);
          break;
        }
        case ux: {
          ic(e, Pa, $u);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function Jw(e) {
      for (var t = e; ; ) {
        if (t.flags & vo) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var u = 0; u < i.length; u++) {
                var s = i[u], f = s.getSnapshot, p = s.value;
                try {
                  if (!K(f(), p))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var v = t.child;
        if (t.subtreeFlags & vo && v !== null) {
          v.return = t, t = v;
          continue;
        }
        if (t === e)
          return !0;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return !0;
    }
    function $o(e, t) {
      t = bs(t, jm), t = bs(t, Vp), Gv(e, t);
    }
    function vx(e) {
      if (h1(), (Rt & (Br | ji)) !== vr)
        throw new Error("Should not already be working.");
      Yu();
      var t = Kc(e, W);
      if (!Zr(t, Be))
        return Va(e, Qn()), null;
      var a = $m(e, t);
      if (e.tag !== No && a === nc) {
        var i = Zc(e);
        i !== W && (t = i, a = IS(e, i));
      }
      if (a === Fp) {
        var u = Pp;
        throw ac(e, W), $o(e, t), Va(e, Qn()), u;
      }
      if (a === jS)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, ic(e, Pa, $u), Va(e, Qn()), null;
    }
    function Zw(e, t) {
      t !== W && (nf(e, tt(t, Be)), Va(e, Qn()), (Rt & (Br | ji)) === vr && ($p(), Lo()));
    }
    function YS(e, t) {
      var a = Rt;
      Rt |= lx;
      try {
        return e(t);
      } finally {
        Rt = a, Rt === vr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !dl.isBatchingLegacy && ($p(), fC());
      }
    }
    function e_(e, t, a, i, u) {
      var s = Ua(), f = Vr.transition;
      try {
        return Vr.transition = null, An(Nr), e(t, a, i, u);
      } finally {
        An(s), Vr.transition = f, Rt === vr && $p();
      }
    }
    function Iu(e) {
      Vo !== null && Vo.tag === No && (Rt & (Br | ji)) === vr && Yu();
      var t = Rt;
      Rt |= lx;
      var a = Vr.transition, i = Ua();
      try {
        return Vr.transition = null, An(Nr), e ? e() : void 0;
      } finally {
        An(i), Vr.transition = a, Rt = t, (Rt & (Br | ji)) === vr && Lo();
      }
    }
    function hx() {
      return (Rt & (Br | ji)) !== vr;
    }
    function Bm(e, t) {
      aa(AS, Kl, e), Kl = tt(Kl, t);
    }
    function QS(e) {
      Kl = AS.current, ra(AS, e);
    }
    function ac(e, t) {
      e.finishedWork = null, e.finishedLanes = W;
      var a = e.timeoutHandle;
      if (a !== By && (e.timeoutHandle = By, _T(a)), Dn !== null)
        for (var i = Dn.return; i !== null; ) {
          var u = i.alternate;
          I0(u, i), i = i.return;
        }
      Sa = e;
      var s = lc(e.current, null);
      return Dn = s, hr = Kl = t, mr = Bu, Pp = null, Um = W, Vp = W, jm = W, Bp = null, Pa = null, qb(), al.discardPendingWarnings(), s;
    }
    function mx(e, t) {
      do {
        var a = Dn;
        try {
          if (Jh(), PC(), sn(), US.current = null, a === null || a.return === null) {
            mr = Fp, Pp = t, Dn = null;
            return;
          }
          if (Ve && a.mode & Lt && _m(a, !0), Ie)
            if (ha(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              bi(a, i, hr);
            } else
              ds(a, t, hr);
          T1(e, a.return, a, t, hr), Ex(a);
        } catch (u) {
          t = u, Dn === a && a !== null ? (a = a.return, Dn = a) : a = Dn;
          continue;
        }
        return;
      } while (!0);
    }
    function yx() {
      var e = zS.current;
      return zS.current = xm, e === null ? xm : e;
    }
    function gx(e) {
      zS.current = e;
    }
    function t_() {
      FS = Qn();
    }
    function Wp(e) {
      Um = tt(e, Um);
    }
    function n_() {
      mr === Bu && (mr = zm);
    }
    function WS() {
      (mr === Bu || mr === zm || mr === nc) && (mr = Hp), Sa !== null && (Rs(Um) || Rs(Vp)) && $o(Sa, hr);
    }
    function r_(e) {
      mr !== Hp && (mr = nc), Bp === null ? Bp = [e] : Bp.push(e);
    }
    function a_() {
      return mr === Bu;
    }
    function $m(e, t) {
      var a = Rt;
      Rt |= Br;
      var i = yx();
      if (Sa !== e || hr !== t) {
        if (Kr) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Gp(e, hr), u.clear()), qv(e, t);
        }
        $u = Fd(), ac(e, t);
      }
      Eu(t);
      do
        try {
          i_();
          break;
        } catch (s) {
          mx(e, s);
        }
      while (!0);
      if (Jh(), Rt = a, gx(i), Dn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return Mc(), Sa = null, hr = W, mr;
    }
    function i_() {
      for (; Dn !== null; )
        Sx(Dn);
    }
    function l_(e, t) {
      var a = Rt;
      Rt |= Br;
      var i = yx();
      if (Sa !== e || hr !== t) {
        if (Kr) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Gp(e, hr), u.clear()), qv(e, t);
        }
        $u = Fd(), $p(), ac(e, t);
      }
      Eu(t);
      do
        try {
          u_();
          break;
        } catch (s) {
          mx(e, s);
        }
      while (!0);
      return Jh(), gx(i), Rt = a, Dn !== null ? (Pv(), Bu) : (Mc(), Sa = null, hr = W, mr);
    }
    function u_() {
      for (; Dn !== null && !yd(); )
        Sx(Dn);
    }
    function Sx(e) {
      var t = e.alternate;
      Yt(e);
      var a;
      (e.mode & Lt) !== ze ? (Xg(e), a = GS(t, e, Kl), _m(e, !0)) : a = GS(t, e, Kl), sn(), e.memoizedProps = e.pendingProps, a === null ? Ex(e) : Dn = a, US.current = null;
    }
    function Ex(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & ss) === Me) {
          Yt(t);
          var u = void 0;
          if ((t.mode & Lt) === ze ? u = $0(a, t, Kl) : (Xg(t), u = $0(a, t, Kl), _m(t, !1)), sn(), u !== null) {
            Dn = u;
            return;
          }
        } else {
          var s = nw(a, t);
          if (s !== null) {
            s.flags &= zv, Dn = s;
            return;
          }
          if ((t.mode & Lt) !== ze) {
            _m(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= ss, i.subtreeFlags = Me, i.deletions = null;
          else {
            mr = jS, Dn = null;
            return;
          }
        }
        var v = t.sibling;
        if (v !== null) {
          Dn = v;
          return;
        }
        t = i, Dn = t;
      } while (t !== null);
      mr === Bu && (mr = ux);
    }
    function ic(e, t, a) {
      var i = Ua(), u = Vr.transition;
      try {
        Vr.transition = null, An(Nr), o_(e, t, a, i);
      } finally {
        Vr.transition = u, An(i);
      }
      return null;
    }
    function o_(e, t, a, i) {
      do
        Yu();
      while (Vo !== null);
      if (S_(), (Rt & (Br | ji)) !== vr)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, s = e.finishedLanes;
      if (Rd(s), u === null)
        return Td(), null;
      if (s === W && g("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = W, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Dt;
      var f = tt(u.lanes, u.childLanes);
      jd(e, f), e === Sa && (Sa = null, Dn = null, hr = W), ((u.subtreeFlags & Gi) !== Me || (u.flags & Gi) !== Me) && (rc || (rc = !0, VS = a, KS(qi, function() {
        return Yu(), null;
      })));
      var p = (u.subtreeFlags & (kl | Dl | Ol | Gi)) !== Me, v = (u.flags & (kl | Dl | Ol | Gi)) !== Me;
      if (p || v) {
        var y = Vr.transition;
        Vr.transition = null;
        var S = Ua();
        An(Nr);
        var _ = Rt;
        Rt |= ji, US.current = null, uw(e, u), f0(), Cw(e, u, s), ET(e.containerInfo), e.current = u, ps(s), xw(u, e, s), vs(), gd(), Rt = _, An(S), Vr.transition = y;
      } else
        e.current = u, f0();
      var b = rc;
      if (rc ? (rc = !1, Vo = e, Ip = s) : (If = 0, Hm = null), f = e.pendingLanes, f === W && ($f = null), b || Tx(e.current, !1), Ed(u.stateNode, i), Kr && e.memoizedUpdaters.clear(), Vw(), Va(e, Qn()), t !== null)
        for (var j = e.onRecoverableError, H = 0; H < t.length; H++) {
          var V = t[H], ce = V.stack, Ae = V.digest;
          j(V.value, {
            componentStack: ce,
            digest: Ae
          });
        }
      if (Am) {
        Am = !1;
        var De = HS;
        throw HS = null, De;
      }
      return Zr(Ip, Be) && e.tag !== No && Yu(), f = e.pendingLanes, Zr(f, Be) ? (p1(), e === BS ? Yp++ : (Yp = 0, BS = e)) : Yp = 0, Lo(), Td(), null;
    }
    function Yu() {
      if (Vo !== null) {
        var e = Jv(Ip), t = Ds(Ma, e), a = Vr.transition, i = Ua();
        try {
          return Vr.transition = null, An(t), c_();
        } finally {
          An(i), Vr.transition = a;
        }
      }
      return !1;
    }
    function s_(e) {
      PS.push(e), rc || (rc = !0, KS(qi, function() {
        return Yu(), null;
      }));
    }
    function c_() {
      if (Vo === null)
        return !1;
      var e = VS;
      VS = null;
      var t = Vo, a = Ip;
      if (Vo = null, Ip = W, (Rt & (Br | ji)) !== vr)
        throw new Error("Cannot flush passive effects while already rendering.");
      $S = !0, Fm = !1, Su(a);
      var i = Rt;
      Rt |= ji, Dw(t.current), bw(t, t.current, a, e);
      {
        var u = PS;
        PS = [];
        for (var s = 0; s < u.length; s++) {
          var f = u[s];
          fw(t, f);
        }
      }
      _d(), Tx(t.current, !0), Rt = i, Lo(), Fm ? t === Hm ? If++ : (If = 0, Hm = t) : If = 0, $S = !1, Fm = !1, Cd(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function Cx(e) {
      return $f !== null && $f.has(e);
    }
    function f_(e) {
      $f === null ? $f = /* @__PURE__ */ new Set([e]) : $f.add(e);
    }
    function d_(e) {
      Am || (Am = !0, HS = e);
    }
    var p_ = d_;
    function xx(e, t, a) {
      var i = ec(a, t), u = S0(e, i, Be), s = zo(e, u, Be), f = Ea();
      s !== null && (So(s, Be, f), Va(s, f));
    }
    function cn(e, t, a) {
      if (aw(a), qp(!1), e.tag === re) {
        xx(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === re) {
          xx(i, e, a);
          return;
        } else if (i.tag === Y) {
          var u = i.type, s = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !Cx(s)) {
            var f = ec(a, e), p = vS(i, f, Be), v = zo(i, p, Be), y = Ea();
            v !== null && (So(v, Be, y), Va(v, y));
            return;
          }
        }
        i = i.return;
      }
      g(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function v_(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var u = Ea();
      tf(e, a), R_(e), Sa === e && ku(hr, a) && (mr === Hp || mr === zm && _u(hr) && Qn() - FS < ox ? ac(e, W) : jm = tt(jm, a)), Va(e, u);
    }
    function Rx(e, t) {
      t === Dt && (t = Gw(e));
      var a = Ea(), i = Fa(e, t);
      i !== null && (So(i, t, a), Va(i, a));
    }
    function h_(e) {
      var t = e.memoizedState, a = Dt;
      t !== null && (a = t.retryLane), Rx(e, a);
    }
    function m_(e, t) {
      var a = Dt, i;
      switch (e.tag) {
        case Le:
          i = e.stateNode;
          var u = e.memoizedState;
          u !== null && (a = u.retryLane);
          break;
        case ln:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), Rx(e, a);
    }
    function y_(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : Iw(e / 1960) * 1960;
    }
    function g_() {
      if (Yp > Qw)
        throw Yp = 0, BS = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      If > Ww && (If = 0, Hm = null, g("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function S_() {
      al.flushLegacyContextWarning(), al.flushPendingUnsafeLifecycleWarnings();
    }
    function Tx(e, t) {
      Yt(e), Im(e, _l, Fw), t && Im(e, xi, Hw), Im(e, _l, jw), t && Im(e, xi, Aw), sn();
    }
    function Im(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== u && i.child !== null && s !== Me ? i = i.child : ((i.flags & t) !== Me && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var Ym = null;
    function bx(e) {
      {
        if ((Rt & Br) !== vr || !(e.mode & ft))
          return;
        var t = e.tag;
        if (t !== be && t !== re && t !== Y && t !== G && t !== Ke && t !== dt && t !== $e)
          return;
        var a = We(e) || "ReactComponent";
        if (Ym !== null) {
          if (Ym.has(a))
            return;
          Ym.add(a);
        } else
          Ym = /* @__PURE__ */ new Set([a]);
        var i = ir;
        try {
          Yt(e), g("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? Yt(e) : sn();
        }
      }
    }
    var GS;
    {
      var E_ = null;
      GS = function(e, t, a) {
        var i = Mx(E_, t);
        try {
          return F0(e, t, a);
        } catch (s) {
          if (Lb() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (Jh(), PC(), I0(e, t), Mx(t, i), t.mode & Lt && Xg(t), wl(null, F0, null, e, t, a), Qi()) {
            var u = os();
            typeof u == "object" && u !== null && u._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var wx = !1, qS;
    qS = /* @__PURE__ */ new Set();
    function C_(e) {
      if (hi && !c1())
        switch (e.tag) {
          case G:
          case Ke:
          case $e: {
            var t = Dn && We(Dn) || "Unknown", a = t;
            if (!qS.has(a)) {
              qS.add(a);
              var i = We(e) || "Unknown";
              g("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case Y: {
            wx || (g("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), wx = !0);
            break;
          }
        }
    }
    function Gp(e, t) {
      if (Kr) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          _s(e, i, t);
        });
      }
    }
    var XS = {};
    function KS(e, t) {
      {
        var a = dl.current;
        return a !== null ? (a.push(t), XS) : md(e, t);
      }
    }
    function _x(e) {
      if (e !== XS)
        return jv(e);
    }
    function kx() {
      return dl.current !== null;
    }
    function x_(e) {
      {
        if (e.mode & ft) {
          if (!ix())
            return;
        } else if (!$w() || Rt !== vr || e.tag !== G && e.tag !== Ke && e.tag !== $e)
          return;
        if (dl.current === null) {
          var t = ir;
          try {
            Yt(e), g(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, We(e));
          } finally {
            t ? Yt(e) : sn();
          }
        }
      }
    }
    function R_(e) {
      e.tag !== No && ix() && dl.current === null && g(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function qp(e) {
      fx = e;
    }
    var Ai = null, Yf = null, T_ = function(e) {
      Ai = e;
    };
    function Qf(e) {
      {
        if (Ai === null)
          return e;
        var t = Ai(e);
        return t === void 0 ? e : t.current;
      }
    }
    function JS(e) {
      return Qf(e);
    }
    function ZS(e) {
      {
        if (Ai === null)
          return e;
        var t = Ai(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = Qf(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: Q,
                render: a
              };
              return e.displayName !== void 0 && (i.displayName = e.displayName), i;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function Dx(e, t) {
      {
        if (Ai === null)
          return !1;
        var a = e.elementType, i = t.type, u = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case Y: {
            typeof i == "function" && (u = !0);
            break;
          }
          case G: {
            (typeof i == "function" || s === Ge) && (u = !0);
            break;
          }
          case Ke: {
            (s === Q || s === Ge) && (u = !0);
            break;
          }
          case dt:
          case $e: {
            (s === Ze || s === Ge) && (u = !0);
            break;
          }
          default:
            return !1;
        }
        if (u) {
          var f = Ai(a);
          if (f !== void 0 && f === Ai(i))
            return !0;
        }
        return !1;
      }
    }
    function Ox(e) {
      {
        if (Ai === null || typeof WeakSet != "function")
          return;
        Yf === null && (Yf = /* @__PURE__ */ new WeakSet()), Yf.add(e);
      }
    }
    var b_ = function(e, t) {
      {
        if (Ai === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Yu(), Iu(function() {
          eE(e.current, i, a);
        });
      }
    }, w_ = function(e, t) {
      {
        if (e.context !== li)
          return;
        Yu(), Iu(function() {
          Xp(t, e, null, null);
        });
      }
    };
    function eE(e, t, a) {
      {
        var i = e.alternate, u = e.child, s = e.sibling, f = e.tag, p = e.type, v = null;
        switch (f) {
          case G:
          case $e:
          case Y:
            v = p;
            break;
          case Ke:
            v = p.render;
            break;
        }
        if (Ai === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var y = !1, S = !1;
        if (v !== null) {
          var _ = Ai(v);
          _ !== void 0 && (a.has(_) ? S = !0 : t.has(_) && (f === Y ? S = !0 : y = !0));
        }
        if (Yf !== null && (Yf.has(e) || i !== null && Yf.has(i)) && (S = !0), S && (e._debugNeedsRemount = !0), S || y) {
          var b = Fa(e, Be);
          b !== null && yr(b, e, Be, Kt);
        }
        u !== null && !S && eE(u, t, a), s !== null && eE(s, t, a);
      }
    }
    var __ = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(u) {
          return u.current;
        }));
        return tE(e.current, i, a), a;
      }
    };
    function tE(e, t, a) {
      {
        var i = e.child, u = e.sibling, s = e.tag, f = e.type, p = null;
        switch (s) {
          case G:
          case $e:
          case Y:
            p = f;
            break;
          case Ke:
            p = f.render;
            break;
        }
        var v = !1;
        p !== null && t.has(p) && (v = !0), v ? k_(e, a) : i !== null && tE(i, t, a), u !== null && tE(u, t, a);
      }
    }
    function k_(e, t) {
      {
        var a = D_(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case fe:
              t.add(i.stateNode);
              return;
            case we:
              t.add(i.stateNode.containerInfo);
              return;
            case re:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function D_(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === fe)
          i = !0, t.add(a.stateNode);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return i;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return i;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return !1;
    }
    var nE;
    {
      nE = !1;
      try {
        var Nx = Object.preventExtensions({});
      } catch {
        nE = !0;
      }
    }
    function O_(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = Me, this.subtreeFlags = Me, this.deletions = null, this.lanes = W, this.childLanes = W, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !nE && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var ui = function(e, t, a, i) {
      return new O_(e, t, a, i);
    };
    function rE(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function N_(e) {
      return typeof e == "function" && !rE(e) && e.defaultProps === void 0;
    }
    function L_(e) {
      if (typeof e == "function")
        return rE(e) ? Y : G;
      if (e != null) {
        var t = e.$$typeof;
        if (t === Q)
          return Ke;
        if (t === Ze)
          return dt;
      }
      return be;
    }
    function lc(e, t) {
      var a = e.alternate;
      a === null ? (a = ui(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = Me, a.subtreeFlags = Me, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & zn, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case be:
        case G:
        case $e:
          a.type = Qf(e.type);
          break;
        case Y:
          a.type = JS(e.type);
          break;
        case Ke:
          a.type = ZS(e.type);
          break;
      }
      return a;
    }
    function M_(e, t) {
      e.flags &= zn | mn;
      var a = e.alternate;
      if (a === null)
        e.childLanes = W, e.lanes = t, e.child = null, e.subtreeFlags = Me, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = Me, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function z_(e, t, a) {
      var i;
      return e === Bh ? (i = ft, t === !0 && (i |= Gt, i |= Mt)) : i = ze, Kr && (i |= Lt), ui(re, null, null, i);
    }
    function aE(e, t, a, i, u, s) {
      var f = be, p = e;
      if (typeof e == "function")
        rE(e) ? (f = Y, p = JS(p)) : p = Qf(p);
      else if (typeof e == "string")
        f = fe;
      else
        e: switch (e) {
          case fi:
            return Io(a.children, u, s, t);
          case Qa:
            f = mt, u |= Gt, (u & ft) !== ze && (u |= Mt);
            break;
          case di:
            return U_(a, u, s, t);
          case oe:
            return j_(a, u, s, t);
          case ye:
            return A_(a, u, s, t);
          case Rn:
            return Lx(a, u, s, t);
          case tn:
          case pt:
          case on:
          case ar:
          case ct:
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case pi:
                  f = ht;
                  break e;
                case x:
                  f = fn;
                  break e;
                case Q:
                  f = Ke, p = ZS(p);
                  break e;
                case Ze:
                  f = dt;
                  break e;
                case Ge:
                  f = an, p = null;
                  break e;
              }
            var v = "";
            {
              (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var y = i ? We(i) : null;
              y && (v += `

Check the render method of \`` + y + "`.");
            }
            throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + v));
          }
        }
      var S = ui(f, a, t, u);
      return S.elementType = e, S.type = p, S.lanes = s, S._debugOwner = i, S;
    }
    function iE(e, t, a) {
      var i = null;
      i = e._owner;
      var u = e.type, s = e.key, f = e.props, p = aE(u, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function Io(e, t, a, i) {
      var u = ui(Et, e, i, t);
      return u.lanes = a, u;
    }
    function U_(e, t, a, i) {
      typeof e.id != "string" && g('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = ui(yt, e, i, t | Lt);
      return u.elementType = di, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function j_(e, t, a, i) {
      var u = ui(Le, e, i, t);
      return u.elementType = oe, u.lanes = a, u;
    }
    function A_(e, t, a, i) {
      var u = ui(ln, e, i, t);
      return u.elementType = ye, u.lanes = a, u;
    }
    function Lx(e, t, a, i) {
      var u = ui(Ue, e, i, t);
      u.elementType = Rn, u.lanes = a;
      var s = {
        isHidden: !1
      };
      return u.stateNode = s, u;
    }
    function lE(e, t, a) {
      var i = ui(Xe, e, null, t);
      return i.lanes = a, i;
    }
    function F_() {
      var e = ui(fe, null, null, ze);
      return e.elementType = "DELETED", e;
    }
    function H_(e) {
      var t = ui(Jt, null, null, ze);
      return t.stateNode = e, t;
    }
    function uE(e, t, a) {
      var i = e.children !== null ? e.children : [], u = ui(we, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function Mx(e, t) {
      return e === null && (e = ui(be, null, null, ze)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function P_(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = By, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Dt, this.eventTimes = ws(W), this.expirationTimes = ws(Kt), this.pendingLanes = W, this.suspendedLanes = W, this.pingedLanes = W, this.expiredLanes = W, this.mutableReadLanes = W, this.finishedLanes = W, this.entangledLanes = W, this.entanglements = ws(W), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < Cu; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case Bh:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case No:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function zx(e, t, a, i, u, s, f, p, v, y) {
      var S = new P_(e, t, a, p, v), _ = z_(t, s);
      S.current = _, _.stateNode = S;
      {
        var b = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        _.memoizedState = b;
      }
      return Eg(_), S;
    }
    var oE = "18.3.1";
    function V_(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return Ir(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: rr,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var sE, cE;
    sE = !1, cE = {};
    function Ux(e) {
      if (!e)
        return li;
      var t = po(e), a = Rb(t);
      if (t.tag === Y) {
        var i = t.type;
        if (Il(i))
          return oC(t, i, a);
      }
      return a;
    }
    function B_(e, t) {
      {
        var a = po(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var u = qr(a);
        if (u === null)
          return null;
        if (u.mode & Gt) {
          var s = We(a) || "Component";
          if (!cE[s]) {
            cE[s] = !0;
            var f = ir;
            try {
              Yt(u), a.mode & Gt ? g("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : g("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? Yt(f) : sn();
            }
          }
        }
        return u.stateNode;
      }
    }
    function jx(e, t, a, i, u, s, f, p) {
      var v = !1, y = null;
      return zx(e, t, v, y, a, i, u, s, f);
    }
    function Ax(e, t, a, i, u, s, f, p, v, y) {
      var S = !0, _ = zx(a, i, S, e, u, s, f, p, v);
      _.context = Ux(null);
      var b = _.current, j = Ea(), H = Bo(b), V = Pu(j, H);
      return V.callback = t ?? null, zo(b, V, H), qw(_, H, j), _;
    }
    function Xp(e, t, a, i) {
      Sd(t, e);
      var u = t.current, s = Ea(), f = Bo(u);
      gn(f);
      var p = Ux(a);
      t.context === null ? t.context = p : t.pendingContext = p, hi && ir !== null && !sE && (sE = !0, g(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, We(ir) || "Unknown"));
      var v = Pu(s, f);
      v.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && g("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), v.callback = i);
      var y = zo(u, v, f);
      return y !== null && (yr(y, u, f, s), rm(y, u, f)), f;
    }
    function Qm(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case fe:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function $_(e) {
      switch (e.tag) {
        case re: {
          var t = e.stateNode;
          if (rf(t)) {
            var a = Bv(t);
            Zw(t, a);
          }
          break;
        }
        case Le: {
          Iu(function() {
            var u = Fa(e, Be);
            if (u !== null) {
              var s = Ea();
              yr(u, e, Be, s);
            }
          });
          var i = Be;
          fE(e, i);
          break;
        }
      }
    }
    function Fx(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = Wv(a.retryLane, t));
    }
    function fE(e, t) {
      Fx(e, t);
      var a = e.alternate;
      a && Fx(a, t);
    }
    function I_(e) {
      if (e.tag === Le) {
        var t = Es, a = Fa(e, t);
        if (a !== null) {
          var i = Ea();
          yr(a, e, t, i);
        }
        fE(e, t);
      }
    }
    function Y_(e) {
      if (e.tag === Le) {
        var t = Bo(e), a = Fa(e, t);
        if (a !== null) {
          var i = Ea();
          yr(a, e, t, i);
        }
        fE(e, t);
      }
    }
    function Hx(e) {
      var t = dn(e);
      return t === null ? null : t.stateNode;
    }
    var Px = function(e) {
      return null;
    };
    function Q_(e) {
      return Px(e);
    }
    var Vx = function(e) {
      return !1;
    };
    function W_(e) {
      return Vx(e);
    }
    var Bx = null, $x = null, Ix = null, Yx = null, Qx = null, Wx = null, Gx = null, qx = null, Xx = null;
    {
      var Kx = function(e, t, a) {
        var i = t[a], u = ut(e) ? e.slice() : rt({}, e);
        return a + 1 === t.length ? (ut(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = Kx(e[i], t, a + 1), u);
      }, Jx = function(e, t) {
        return Kx(e, t, 0);
      }, Zx = function(e, t, a, i) {
        var u = t[i], s = ut(e) ? e.slice() : rt({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[u], ut(s) ? s.splice(u, 1) : delete s[u];
        } else
          s[u] = Zx(
            // $FlowFixMe number or string is fine here
            e[u],
            t,
            a,
            i + 1
          );
        return s;
      }, eR = function(e, t, a) {
        if (t.length !== a.length) {
          ee("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              ee("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return Zx(e, t, a, 0);
      }, tR = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], s = ut(e) ? e.slice() : rt({}, e);
        return s[u] = tR(e[u], t, a + 1, i), s;
      }, nR = function(e, t, a) {
        return tR(e, t, 0, a);
      }, dE = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      Bx = function(e, t, a, i) {
        var u = dE(e, t);
        if (u !== null) {
          var s = nR(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = rt({}, e.memoizedProps);
          var f = Fa(e, Be);
          f !== null && yr(f, e, Be, Kt);
        }
      }, $x = function(e, t, a) {
        var i = dE(e, t);
        if (i !== null) {
          var u = Jx(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = rt({}, e.memoizedProps);
          var s = Fa(e, Be);
          s !== null && yr(s, e, Be, Kt);
        }
      }, Ix = function(e, t, a, i) {
        var u = dE(e, t);
        if (u !== null) {
          var s = eR(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = rt({}, e.memoizedProps);
          var f = Fa(e, Be);
          f !== null && yr(f, e, Be, Kt);
        }
      }, Yx = function(e, t, a) {
        e.pendingProps = nR(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Fa(e, Be);
        i !== null && yr(i, e, Be, Kt);
      }, Qx = function(e, t) {
        e.pendingProps = Jx(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Fa(e, Be);
        a !== null && yr(a, e, Be, Kt);
      }, Wx = function(e, t, a) {
        e.pendingProps = eR(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Fa(e, Be);
        i !== null && yr(i, e, Be, Kt);
      }, Gx = function(e) {
        var t = Fa(e, Be);
        t !== null && yr(t, e, Be, Kt);
      }, qx = function(e) {
        Px = e;
      }, Xx = function(e) {
        Vx = e;
      };
    }
    function G_(e) {
      var t = qr(e);
      return t === null ? null : t.stateNode;
    }
    function q_(e) {
      return null;
    }
    function X_() {
      return ir;
    }
    function K_(e) {
      var t = e.findFiberByHostInstance, a = k.ReactCurrentDispatcher;
      return mo({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: Bx,
        overrideHookStateDeletePath: $x,
        overrideHookStateRenamePath: Ix,
        overrideProps: Yx,
        overridePropsDeletePath: Qx,
        overridePropsRenamePath: Wx,
        setErrorHandler: qx,
        setSuspenseHandler: Xx,
        scheduleUpdate: Gx,
        currentDispatcherRef: a,
        findHostInstanceByFiber: G_,
        findFiberByHostInstance: t || q_,
        // React Refresh
        findHostInstancesForRefresh: __,
        scheduleRefresh: b_,
        scheduleRoot: w_,
        setRefreshHandler: T_,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: X_,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: oE
      });
    }
    var rR = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function pE(e) {
      this._internalRoot = e;
    }
    Wm.prototype.render = pE.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? g("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Gm(arguments[1]) ? g("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && g("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== Ln) {
          var i = Hx(t.current);
          i && i.parentNode !== a && g("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      Xp(e, t, null, null);
    }, Wm.prototype.unmount = pE.prototype.unmount = function() {
      typeof arguments[0] == "function" && g("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        hx() && g("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Iu(function() {
          Xp(null, e, null, null);
        }), rC(t);
      }
    };
    function J_(e, t) {
      if (!Gm(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      aR(e);
      var a = !1, i = !1, u = "", s = rR;
      t != null && (t.hydrate ? ee("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === _r && g(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = jx(e, Bh, null, a, i, u, s);
      Uh(f.current, e);
      var p = e.nodeType === Ln ? e.parentNode : e;
      return np(p), new pE(f);
    }
    function Wm(e) {
      this._internalRoot = e;
    }
    function Z_(e) {
      e && rh(e);
    }
    Wm.prototype.unstable_scheduleHydration = Z_;
    function ek(e, t, a) {
      if (!Gm(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      aR(e), t === void 0 && g("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, u = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", v = rR;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (v = a.onRecoverableError));
      var y = Ax(t, null, e, Bh, i, s, f, p, v);
      if (Uh(y.current, e), np(e), u)
        for (var S = 0; S < u.length; S++) {
          var _ = u[S];
          a1(y, _);
        }
      return new Wm(y);
    }
    function Gm(e) {
      return !!(e && (e.nodeType === Qr || e.nodeType === Yi || e.nodeType === ad));
    }
    function Kp(e) {
      return !!(e && (e.nodeType === Qr || e.nodeType === Yi || e.nodeType === ad || e.nodeType === Ln && e.nodeValue === " react-mount-point-unstable "));
    }
    function aR(e) {
      e.nodeType === Qr && e.tagName && e.tagName.toUpperCase() === "BODY" && g("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), pp(e) && (e._reactRootContainer ? g("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : g("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var tk = k.ReactCurrentOwner, iR;
    iR = function(e) {
      if (e._reactRootContainer && e.nodeType !== Ln) {
        var t = Hx(e._reactRootContainer.current);
        t && t.parentNode !== e && g("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = vE(e), u = !!(i && Do(i));
      u && !a && g("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Qr && e.tagName && e.tagName.toUpperCase() === "BODY" && g("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function vE(e) {
      return e ? e.nodeType === Yi ? e.documentElement : e.firstChild : null;
    }
    function lR() {
    }
    function nk(e, t, a, i, u) {
      if (u) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var b = Qm(f);
            s.call(b);
          };
        }
        var f = Ax(
          t,
          i,
          e,
          No,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          lR
        );
        e._reactRootContainer = f, Uh(f.current, e);
        var p = e.nodeType === Ln ? e.parentNode : e;
        return np(p), Iu(), f;
      } else {
        for (var v; v = e.lastChild; )
          e.removeChild(v);
        if (typeof i == "function") {
          var y = i;
          i = function() {
            var b = Qm(S);
            y.call(b);
          };
        }
        var S = jx(
          e,
          No,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          lR
        );
        e._reactRootContainer = S, Uh(S.current, e);
        var _ = e.nodeType === Ln ? e.parentNode : e;
        return np(_), Iu(function() {
          Xp(t, S, a, i);
        }), S;
      }
    }
    function rk(e, t) {
      e !== null && typeof e != "function" && g("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function qm(e, t, a, i, u) {
      iR(a), rk(u === void 0 ? null : u, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = nk(a, t, e, u, i);
      else {
        if (f = s, typeof u == "function") {
          var p = u;
          u = function() {
            var v = Qm(f);
            p.call(v);
          };
        }
        Xp(t, f, e, u);
      }
      return Qm(f);
    }
    var uR = !1;
    function ak(e) {
      {
        uR || (uR = !0, g("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = tk.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || g("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", bt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Qr ? e : B_(e, "findDOMNode");
    }
    function ik(e, t, a) {
      if (g("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Kp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = pp(t) && t._reactRootContainer === void 0;
        i && g("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return qm(null, e, t, !0, a);
    }
    function lk(e, t, a) {
      if (g("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Kp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = pp(t) && t._reactRootContainer === void 0;
        i && g("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return qm(null, e, t, !1, a);
    }
    function uk(e, t, a, i) {
      if (g("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Kp(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !fy(e))
        throw new Error("parentComponent must be a valid React Component");
      return qm(e, t, a, !1, i);
    }
    var oR = !1;
    function ok(e) {
      if (oR || (oR = !0, g("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !Kp(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = pp(e) && e._reactRootContainer === void 0;
        t && g("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = vE(e), i = a && !Do(a);
          i && g("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Iu(function() {
          qm(null, null, e, !1, function() {
            e._reactRootContainer = null, rC(e);
          });
        }), !0;
      } else {
        {
          var u = vE(e), s = !!(u && Do(u)), f = e.nodeType === Qr && Kp(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && g("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    Rr($_), Eo(I_), Zv(Y_), Ns(Ua), Hd(Xv), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && g("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), Ec(cT), cy(YS, e_, Iu);
    function sk(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Gm(t))
        throw new Error("Target container is not a DOM element.");
      return V_(e, t, null, a);
    }
    function ck(e, t, a, i) {
      return uk(e, t, a, i);
    }
    var hE = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Do, Rf, jh, oo, Cc, YS]
    };
    function fk(e, t) {
      return hE.usingClientEntryPoint || g('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), J_(e, t);
    }
    function dk(e, t, a) {
      return hE.usingClientEntryPoint || g('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), ek(e, t, a);
    }
    function pk(e) {
      return hx() && g("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Iu(e);
    }
    var vk = K_({
      findFiberByHostInstance: Ys,
      bundleType: 1,
      version: oE,
      rendererPackageName: "react-dom"
    });
    if (!vk && On && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var sR = window.location.protocol;
      /^(https?|file):$/.test(sR) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (sR === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    $a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = hE, $a.createPortal = sk, $a.createRoot = fk, $a.findDOMNode = ak, $a.flushSync = pk, $a.hydrate = ik, $a.hydrateRoot = dk, $a.render = lk, $a.unmountComponentAtNode = ok, $a.unstable_batchedUpdates = YS, $a.unstable_renderSubtreeIntoContainer = ck, $a.version = oE, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), $a;
}
function kR() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(kR);
    } catch (T) {
      console.error(T);
    }
  }
}
process.env.NODE_ENV === "production" ? (kR(), xE.exports = Rk()) : xE.exports = Tk();
var bk = xE.exports, RE, Jm = bk;
if (process.env.NODE_ENV === "production")
  RE = Jm.createRoot, Jm.hydrateRoot;
else {
  var ER = Jm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  RE = function(T, O) {
    ER.usingClientEntryPoint = !0;
    try {
      return Jm.createRoot(T, O);
    } finally {
      ER.usingClientEntryPoint = !1;
    }
  };
}
var Fi = av();
const wE = "/api/v1/modules/lead_tracker";
function DR(T) {
  return {
    company_name: T.companyName,
    is_customer: T.isCustomer,
    opportunity_score: T.opportunityScore,
    financial_potential: T.financialPotential,
    product: T.product,
    service: T.service,
    priority: T.priority,
    sources: T.sources.map((O) => O.type)
  };
}
function OR(T, O) {
  const k = URL.createObjectURL(T), ge = document.createElement("a");
  ge.href = k, ge.download = O, ge.click(), URL.revokeObjectURL(k);
}
async function _E(T) {
  try {
    return (await T.json()).detail ?? "Falha ao processar a solicitação.";
  } catch {
    return "Falha ao processar a solicitação.";
  }
}
async function wk(T, O) {
  const k = await fetch(`${wE}/exports/pdf`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ rows: T.map(DR), filters_summary: O })
  });
  if (!k.ok) throw new Error(await _E(k));
  OR(await k.blob(), "oportunidades.pdf");
}
async function _k(T) {
  const O = await fetch(`${wE}/exports/excel`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ rows: T.map(DR) })
  });
  if (!O.ok) throw new Error(await _E(O));
  OR(await O.blob(), "oportunidades.xlsx");
}
async function kk(T) {
  const O = await fetch(`${wE}/email-draft`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      company_name: T.companyName,
      opportunity_type: T.type,
      evidence: T.evidence,
      justification: T.justification,
      portfolio: { produtos_atuais: T.currentProducts, produtos_recomendados: T.recommendedProducts }
    })
  });
  if (!O.ok) throw new Error(await _E(O));
  return O.json();
}
const CR = [
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
], Dk = "#2a78d6", Ok = 8;
function Nk(T, O, k = Ok) {
  if (T.length <= k) return T.map((g) => ({ label: O(g), value: g.value }));
  const ge = T.slice(0, k - 1), ee = T.slice(k - 1).reduce((g, Ne) => g + Ne.value, 0);
  return [...ge.map((g) => ({ label: O(g), value: g.value })), { label: "Outros", value: ee }];
}
function kE() {
  const [T, O] = Fi.useState(null);
  return { tooltip: T, setTooltip: O };
}
function DE({ tooltip: T }) {
  return T ? /* @__PURE__ */ z.jsxs(
    "div",
    {
      role: "tooltip",
      style: {
        position: "absolute",
        left: T.x + 8,
        top: T.y + 8,
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
        /* @__PURE__ */ z.jsx("strong", { children: T.label }),
        " ",
        T.value
      ]
    }
  ) : null;
}
function gE({ data: T, formatValue: O, emptyMessage: k }) {
  const { tooltip: ge, setTooltip: Re } = kE();
  if (T.length === 0)
    return /* @__PURE__ */ z.jsx("p", { className: "lt-empty", role: "status", children: k });
  const ee = Math.max(...T.map((g) => g.value), 1);
  return /* @__PURE__ */ z.jsxs(
    "div",
    {
      style: { position: "relative", display: "flex", flexDirection: "column", gap: 10 },
      role: "img",
      "aria-label": T.map((g) => `${g.label}: ${O(g.value)}`).join("; "),
      children: [
        T.map((g) => /* @__PURE__ */ z.jsxs("div", { children: [
          /* @__PURE__ */ z.jsxs("div", { style: { display: "flex", justifyContent: "space-between", fontSize: 11, color: "hsl(var(--text-muted))", marginBottom: 3 }, children: [
            /* @__PURE__ */ z.jsx("span", { children: g.label }),
            /* @__PURE__ */ z.jsx("span", { style: { fontVariantNumeric: "tabular-nums" }, children: O(g.value) })
          ] }),
          /* @__PURE__ */ z.jsx("div", { style: { height: 8, background: "hsl(var(--bg-subtle))", borderRadius: 4 }, children: /* @__PURE__ */ z.jsx(
            "div",
            {
              style: {
                height: 8,
                borderRadius: 4,
                background: Dk,
                width: `${g.value / ee * 100}%`
              },
              onMouseEnter: (Ne) => Re({ x: Ne.clientX, y: Ne.clientY, label: g.label, value: O(g.value) }),
              onMouseMove: (Ne) => Re({ x: Ne.clientX, y: Ne.clientY, label: g.label, value: O(g.value) }),
              onMouseLeave: () => Re(null)
            }
          ) })
        ] }, g.label)),
        /* @__PURE__ */ z.jsx(DE, { tooltip: ge })
      ]
    }
  );
}
const TE = 140, Zm = 60, Lk = 22, xR = TE / 2;
function RR(T) {
  const O = (T - 90) * Math.PI / 180;
  return [xR + Zm * Math.cos(O), xR + Zm * Math.sin(O)];
}
function Mk(T, O) {
  const [k, ge] = RR(T), [Re, ee] = RR(O), g = O - T > 180 ? 1 : 0;
  return `M ${k} ${ge} A ${Zm} ${Zm} 0 ${g} 1 ${Re} ${ee}`;
}
function zk({ data: T, emptyMessage: O }) {
  const { tooltip: k, setTooltip: ge } = kE();
  if (T.length === 0)
    return /* @__PURE__ */ z.jsx("p", { className: "lt-empty", role: "status", children: O });
  const Re = Nk(T, (G) => G.label), ee = Re.reduce((G, Y) => G + Y.value, 0) || 1;
  let g = 0;
  const Ne = Re.map((G, Y) => {
    const be = g, re = G.value / ee * 360;
    return g += re, { ...G, startAngle: be, endAngle: g, color: CR[Y % CR.length] };
  });
  return /* @__PURE__ */ z.jsxs("div", { style: { display: "flex", gap: 16, alignItems: "center", position: "relative" }, children: [
    /* @__PURE__ */ z.jsx("svg", { width: TE, height: TE, role: "img", "aria-label": Re.map((G) => `${G.label}: ${G.value}`).join("; "), children: Ne.map((G) => /* @__PURE__ */ z.jsx(
      "path",
      {
        d: Mk(G.startAngle, G.endAngle),
        fill: "none",
        stroke: G.color,
        strokeWidth: Lk,
        onMouseEnter: (Y) => ge({ x: Y.clientX, y: Y.clientY, label: G.label, value: `${G.value} (${Math.round(G.value / ee * 100)}%)` }),
        onMouseMove: (Y) => ge({ x: Y.clientX, y: Y.clientY, label: G.label, value: `${G.value} (${Math.round(G.value / ee * 100)}%)` }),
        onMouseLeave: () => ge(null)
      },
      G.label
    )) }),
    /* @__PURE__ */ z.jsx("ul", { style: { listStyle: "none", margin: 0, padding: 0, fontSize: 11, display: "flex", flexDirection: "column", gap: 6 }, children: Ne.map((G) => /* @__PURE__ */ z.jsxs("li", { style: { display: "flex", alignItems: "center", gap: 6 }, children: [
      /* @__PURE__ */ z.jsx("span", { style: { width: 8, height: 8, borderRadius: 2, background: G.color, display: "inline-block" }, "aria-hidden": "true" }),
      /* @__PURE__ */ z.jsx("span", { style: { color: "hsl(var(--text))" }, children: G.label }),
      /* @__PURE__ */ z.jsxs("span", { style: { color: "hsl(var(--text-muted))", fontVariantNumeric: "tabular-nums" }, children: [
        Math.round(G.value / ee * 100),
        "%"
      ] })
    ] }, G.label)) }),
    /* @__PURE__ */ z.jsx(DE, { tooltip: k })
  ] });
}
const TR = ["#5598e7", "#2a78d6", "#1c5cab", "#104281"];
function Uk({ stages: T, counts: O }) {
  const { tooltip: k, setTooltip: ge } = kE(), Re = Math.max(...T.map((ee) => O[ee] ?? 0), 1);
  return /* @__PURE__ */ z.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 8, position: "relative" }, role: "img", "aria-label": T.map((ee) => `${ee}: ${O[ee] ?? 0}`).join("; "), children: [
    T.map((ee, g) => {
      const Ne = O[ee] ?? 0, G = Ne / Re * 100;
      return /* @__PURE__ */ z.jsxs("div", { children: [
        /* @__PURE__ */ z.jsxs("div", { style: { display: "flex", justifyContent: "space-between", fontSize: 11, color: "hsl(var(--text-muted))", marginBottom: 3 }, children: [
          /* @__PURE__ */ z.jsx("span", { children: ee }),
          /* @__PURE__ */ z.jsx("span", { style: { fontVariantNumeric: "tabular-nums" }, children: Ne })
        ] }),
        /* @__PURE__ */ z.jsx(
          "div",
          {
            style: { height: 16, borderRadius: 4, background: TR[g % TR.length], width: `${G}%`, minWidth: 4 },
            onMouseEnter: (Y) => ge({ x: Y.clientX, y: Y.clientY, label: ee, value: String(Ne) }),
            onMouseMove: (Y) => ge({ x: Y.clientX, y: Y.clientY, label: ee, value: String(Ne) }),
            onMouseLeave: () => ge(null)
          }
        )
      ] }, ee);
    }),
    /* @__PURE__ */ z.jsx(DE, { tooltip: k })
  ] });
}
const nv = ["Detectadas", "Qualificadas", "Abordadas", "Em negociação"], jk = {
  opportunitiesIdentified: 3,
  customersAnalyzed: 2,
  prospectsAnalyzed: 1,
  financialPotentialTotal: 48e3,
  productOpportunities: 1,
  serviceOpportunities: 2,
  topVendor: "Veeam",
  topService: "FinOps"
}, Ak = [
  { label: "Veeam", value: 5 },
  { label: "VMware", value: 3 },
  { label: "AWS", value: 2 }
], Fk = [
  { label: "Veeam", value: 48e3 },
  { label: "VMware", value: 22e3 },
  { label: "AWS", value: 9e3 }
], Hk = [
  { label: "FinOps", value: 4 },
  { label: "Assessment de DR", value: 2 }
], Pk = [
  { label: "Clientes", value: 2 },
  { label: "Prospects", value: 1 }
], Vk = {
  [nv[0]]: 6,
  [nv[1]]: 4,
  [nv[2]]: 2,
  [nv[3]]: 1
};
function Yo({ label: T, value: O, hint: k }) {
  return /* @__PURE__ */ z.jsxs("div", { className: "lt-stat-tile", children: [
    /* @__PURE__ */ z.jsx("div", { className: "lt-stat-tile__value", style: { fontVariantNumeric: "tabular-nums" }, children: O }),
    /* @__PURE__ */ z.jsx("div", { className: "lt-stat-tile__label", children: T }),
    k && /* @__PURE__ */ z.jsx("div", { className: "lt-stat-tile__hint", children: k })
  ] });
}
function bR(T) {
  return T.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });
}
function uc(T) {
  return T.toLocaleString("pt-BR");
}
function Bk() {
  const T = jk;
  return /* @__PURE__ */ z.jsxs("div", { className: "lt-dashboard", children: [
    /* @__PURE__ */ z.jsxs("div", { className: "lt-header", children: [
      /* @__PURE__ */ z.jsx("h2", { children: "Dashboard Executivo" }),
      /* @__PURE__ */ z.jsx("p", { children: "Visão consolidada — dados fictícios até a persistência real existir." })
    ] }),
    /* @__PURE__ */ z.jsxs("div", { className: "lt-stat-grid", children: [
      /* @__PURE__ */ z.jsx(Yo, { label: "Oportunidades identificadas", value: uc(T.opportunitiesIdentified) }),
      /* @__PURE__ */ z.jsx(Yo, { label: "Clientes analisados", value: uc(T.customersAnalyzed) }),
      /* @__PURE__ */ z.jsx(Yo, { label: "Prospects analisados", value: uc(T.prospectsAnalyzed) }),
      /* @__PURE__ */ z.jsx(Yo, { label: "Potencial financeiro", value: bR(T.financialPotentialTotal) }),
      /* @__PURE__ */ z.jsx(Yo, { label: "Oportunidades de produto", value: uc(T.productOpportunities) }),
      /* @__PURE__ */ z.jsx(Yo, { label: "Oportunidades de serviço", value: uc(T.serviceOpportunities) }),
      /* @__PURE__ */ z.jsx(Yo, { label: "Fabricante principal", value: T.topVendor }),
      /* @__PURE__ */ z.jsx(Yo, { label: "Serviço principal", value: T.topService })
    ] }),
    /* @__PURE__ */ z.jsxs("div", { className: "lt-chart-grid", children: [
      /* @__PURE__ */ z.jsxs("section", { className: "lt-chart-card", children: [
        /* @__PURE__ */ z.jsx("h3", { children: "Distribuição por fabricante" }),
        /* @__PURE__ */ z.jsx(zk, { data: Ak, emptyMessage: "Sem oportunidades com fabricante identificado." })
      ] }),
      /* @__PURE__ */ z.jsxs("section", { className: "lt-chart-card", children: [
        /* @__PURE__ */ z.jsx("h3", { children: "Potencial financeiro por fabricante" }),
        /* @__PURE__ */ z.jsx(gE, { data: Fk, formatValue: bR, emptyMessage: "Sem potencial financeiro registrado." })
      ] }),
      /* @__PURE__ */ z.jsxs("section", { className: "lt-chart-card", children: [
        /* @__PURE__ */ z.jsx("h3", { children: "Oportunidades por serviço" }),
        /* @__PURE__ */ z.jsx(gE, { data: Hk, formatValue: uc, emptyMessage: "Sem oportunidades de serviço." })
      ] }),
      /* @__PURE__ */ z.jsxs("section", { className: "lt-chart-card", children: [
        /* @__PURE__ */ z.jsx("h3", { children: "Clientes × Prospects" }),
        /* @__PURE__ */ z.jsx(gE, { data: Pk, formatValue: uc, emptyMessage: "Sem empresas analisadas." })
      ] }),
      /* @__PURE__ */ z.jsxs("section", { className: "lt-chart-card lt-chart-card--wide", children: [
        /* @__PURE__ */ z.jsx("h3", { children: "Funil de oportunidades" }),
        /* @__PURE__ */ z.jsx(Uk, { stages: nv, counts: Vk })
      ] })
    ] }),
    /* @__PURE__ */ z.jsx("p", { className: "lt-hint", children: "Tendência temporal e segmentação por região/segmento ficam de fora por enquanto — exigem persistência histórica e um campo de segmento/região que ainda não existem no modelo." })
  ] });
}
const $k = {
  client: "todos",
  product: "todos",
  service: "todos",
  source: "todos",
  minScore: 0
};
function SE(T) {
  return Array.from(new Set(T.filter((O) => !!O))).sort();
}
function Ik({
  rows: T,
  value: O,
  onChange: k
}) {
  const ge = SE(T.map((g) => g.product)), Re = SE(T.map((g) => g.service)), ee = SE(T.flatMap((g) => g.sources.map((Ne) => Ne.type)));
  return /* @__PURE__ */ z.jsxs("div", { className: "lt-filters", role: "group", "aria-label": "Filtros de oportunidades", children: [
    /* @__PURE__ */ z.jsxs("label", { htmlFor: "lt-filter-client", children: [
      "Cliente",
      /* @__PURE__ */ z.jsxs(
        "select",
        {
          id: "lt-filter-client",
          value: O.client,
          onChange: (g) => k({ ...O, client: g.target.value }),
          children: [
            /* @__PURE__ */ z.jsx("option", { value: "todos", children: "Todos" }),
            /* @__PURE__ */ z.jsx("option", { value: "clientes", children: "Clientes atuais" }),
            /* @__PURE__ */ z.jsx("option", { value: "prospects", children: "Prospects" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ z.jsxs("label", { htmlFor: "lt-filter-product", children: [
      "Produto",
      /* @__PURE__ */ z.jsxs("select", { id: "lt-filter-product", value: O.product, onChange: (g) => k({ ...O, product: g.target.value }), children: [
        /* @__PURE__ */ z.jsx("option", { value: "todos", children: "Todos" }),
        ge.map((g) => /* @__PURE__ */ z.jsx("option", { value: g, children: g }, g))
      ] })
    ] }),
    /* @__PURE__ */ z.jsxs("label", { htmlFor: "lt-filter-service", children: [
      "Serviço",
      /* @__PURE__ */ z.jsxs("select", { id: "lt-filter-service", value: O.service, onChange: (g) => k({ ...O, service: g.target.value }), children: [
        /* @__PURE__ */ z.jsx("option", { value: "todos", children: "Todos" }),
        Re.map((g) => /* @__PURE__ */ z.jsx("option", { value: g, children: g }, g))
      ] })
    ] }),
    /* @__PURE__ */ z.jsxs("label", { htmlFor: "lt-filter-source", children: [
      "Fonte",
      /* @__PURE__ */ z.jsxs("select", { id: "lt-filter-source", value: O.source, onChange: (g) => k({ ...O, source: g.target.value }), children: [
        /* @__PURE__ */ z.jsx("option", { value: "todos", children: "Todas" }),
        ee.map((g) => /* @__PURE__ */ z.jsx("option", { value: g, children: g }, g))
      ] })
    ] }),
    /* @__PURE__ */ z.jsxs("label", { htmlFor: "lt-filter-score", children: [
      "Score mínimo",
      /* @__PURE__ */ z.jsx(
        "input",
        {
          id: "lt-filter-score",
          type: "number",
          min: 0,
          max: 1,
          step: 0.1,
          value: O.minScore,
          onChange: (g) => k({ ...O, minScore: Number(g.target.value) })
        }
      )
    ] })
  ] });
}
function Yk(T) {
  const O = [];
  return T.client !== "todos" && O.push(T.client === "clientes" ? "clientes atuais" : "prospects"), T.product !== "todos" && O.push(`produto: ${T.product}`), T.service !== "todos" && O.push(`serviço: ${T.service}`), T.source !== "todos" && O.push(`fonte: ${T.source}`), T.minScore > 0 && O.push(`score mínimo: ${T.minScore}`), O.length > 0 ? O.join(", ") : "sem filtro";
}
function Qk(T, O) {
  return T.filter((k) => !(O.client === "clientes" && !k.isCustomer || O.client === "prospects" && k.isCustomer || O.product !== "todos" && k.product !== O.product || O.service !== "todos" && k.service !== O.service || O.source !== "todos" && !k.sources.some((ge) => ge.type === O.source) || (k.opportunityScore ?? 0) < O.minScore));
}
const Wk = { alta: 3, média: 2, baixa: 1 };
function Gk(T, O, k) {
  const ge = k === "asc" ? 1 : -1, Re = (ee) => {
    switch (O) {
      case "score":
        return ee.opportunityScore ?? -1;
      case "potencial":
        return ee.financialPotential ?? -1;
      case "prioridade":
        return Wk[ee.priority];
      case "confianca":
        return ee.confidenceScore ?? -1;
    }
  };
  return [...T].sort((ee, g) => (Re(ee) - Re(g)) * ge);
}
function bE(T) {
  return T === null ? "—" : T.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });
}
function rv(T) {
  return T === null ? "—" : T.toFixed(2);
}
function EE({ label: T, sortKey: O, current: k, direction: ge, onSort: Re }) {
  const ee = k === O;
  return /* @__PURE__ */ z.jsx("th", { "aria-sort": ee ? ge === "asc" ? "ascending" : "descending" : "none", children: /* @__PURE__ */ z.jsxs("button", { type: "button", onClick: () => Re(O), children: [
    T,
    ee ? ge === "asc" ? " ▲" : " ▼" : ""
  ] }) });
}
function qk({ row: T }) {
  const [O, k] = Fi.useState("idle"), [ge, Re] = Fi.useState(null), [ee, g] = Fi.useState(null), Ne = async () => {
    k("loading"), Re(null);
    try {
      const be = await kk(T);
      g(be), k("idle");
    } catch (be) {
      Re(be instanceof Error ? be.message : "Falha ao gerar rascunho."), k("error");
    }
  }, G = async () => {
    ee && await navigator.clipboard.writeText(`${ee.subject}

${ee.greeting}

${ee.body}

${ee.cta}`);
  }, Y = async () => {
    const be = [
      T.companyName,
      T.isCustomer ? "Cliente" : "Prospect",
      `Score: ${rv(T.opportunityScore)}`,
      `Potencial: ${bE(T.financialPotential)}`,
      T.justification ?? ""
    ].filter(Boolean).join(" — ");
    await navigator.clipboard.writeText(be);
  };
  return /* @__PURE__ */ z.jsx("tr", { children: /* @__PURE__ */ z.jsxs("td", { colSpan: 8, className: "lt-detail", children: [
    /* @__PURE__ */ z.jsxs("dl", { children: [
      /* @__PURE__ */ z.jsx("dt", { children: "Status de cliente" }),
      /* @__PURE__ */ z.jsx("dd", { children: T.isCustomer ? "Cliente" : "Prospect" }),
      /* @__PURE__ */ z.jsx("dt", { children: "Fontes" }),
      /* @__PURE__ */ z.jsx("dd", { children: T.sources.map((be) => `${be.type} (${Math.round(be.confidence * 100)}%)`).join(", ") || "—" }),
      /* @__PURE__ */ z.jsx("dt", { children: "Produtos atuais" }),
      /* @__PURE__ */ z.jsx("dd", { children: T.currentProducts.join(", ") || "—" }),
      /* @__PURE__ */ z.jsx("dt", { children: "Produtos recomendados" }),
      /* @__PURE__ */ z.jsx("dd", { children: T.recommendedProducts.join(", ") || "—" }),
      /* @__PURE__ */ z.jsx("dt", { children: "Serviços recomendados" }),
      /* @__PURE__ */ z.jsx("dd", { children: T.recommendedServices.join(", ") || "—" }),
      /* @__PURE__ */ z.jsx("dt", { children: "Potencial financeiro" }),
      /* @__PURE__ */ z.jsx("dd", { children: bE(T.financialPotential) }),
      /* @__PURE__ */ z.jsx("dt", { children: "Scores" }),
      /* @__PURE__ */ z.jsxs("dd", { children: [
        "oportunidade ",
        rv(T.opportunityScore),
        " · estratégico ",
        rv(null),
        " · confiança ",
        rv(T.confidenceScore)
      ] }),
      /* @__PURE__ */ z.jsx("dt", { children: "Evidências" }),
      /* @__PURE__ */ z.jsx("dd", { children: T.evidence.join(", ") || "—" }),
      /* @__PURE__ */ z.jsx("dt", { children: "Insight" }),
      /* @__PURE__ */ z.jsx("dd", { children: T.justification ?? "Sem justificativa registrada." })
    ] }),
    /* @__PURE__ */ z.jsxs("div", { className: "lt-detail-actions", children: [
      /* @__PURE__ */ z.jsx("button", { type: "button", className: "lt-btn", onClick: Y, children: "Copiar" }),
      /* @__PURE__ */ z.jsx("button", { type: "button", className: "lt-btn", onClick: Ne, disabled: O === "loading", children: O === "loading" ? "Gerando…" : "Gerar rascunho" })
    ] }),
    O === "error" && /* @__PURE__ */ z.jsx("p", { className: "lt-hint", role: "alert", children: ge }),
    ee && /* @__PURE__ */ z.jsxs("div", { className: "lt-draft", role: "status", children: [
      /* @__PURE__ */ z.jsxs("p", { children: [
        /* @__PURE__ */ z.jsx("strong", { children: "Assunto:" }),
        " ",
        ee.subject
      ] }),
      /* @__PURE__ */ z.jsx("p", { children: ee.greeting }),
      /* @__PURE__ */ z.jsx("p", { children: ee.body }),
      /* @__PURE__ */ z.jsx("p", { children: ee.cta }),
      /* @__PURE__ */ z.jsx("button", { type: "button", className: "lt-btn", onClick: G, children: "Copiar rascunho" }),
      /* @__PURE__ */ z.jsx("p", { className: "lt-hint", children: "Revise antes de enviar — o rascunho nunca é enviado automaticamente." })
    ] })
  ] }) });
}
function Xk({ rows: T }) {
  const [O, k] = Fi.useState("score"), [ge, Re] = Fi.useState("desc"), [ee, g] = Fi.useState(null), Ne = (Y) => {
    Y === O ? Re((be) => be === "asc" ? "desc" : "asc") : (k(Y), Re("desc"));
  };
  if (T.length === 0)
    return /* @__PURE__ */ z.jsx("p", { className: "lt-empty", role: "status", children: "Nenhuma oportunidade encontrada com os filtros atuais." });
  const G = Gk(T, O, ge);
  return /* @__PURE__ */ z.jsxs("table", { className: "lt-table", children: [
    /* @__PURE__ */ z.jsx("thead", { children: /* @__PURE__ */ z.jsxs("tr", { children: [
      /* @__PURE__ */ z.jsx("th", { children: "Empresa" }),
      /* @__PURE__ */ z.jsx("th", { children: "Cliente" }),
      /* @__PURE__ */ z.jsx(EE, { label: "Score", sortKey: "score", current: O, direction: ge, onSort: Ne }),
      /* @__PURE__ */ z.jsx(EE, { label: "Potencial $", sortKey: "potencial", current: O, direction: ge, onSort: Ne }),
      /* @__PURE__ */ z.jsx("th", { children: "Produto" }),
      /* @__PURE__ */ z.jsx("th", { children: "Serviço" }),
      /* @__PURE__ */ z.jsx(EE, { label: "Prioridade", sortKey: "prioridade", current: O, direction: ge, onSort: Ne }),
      /* @__PURE__ */ z.jsx("th", { children: "Fontes" })
    ] }) }),
    /* @__PURE__ */ z.jsx("tbody", { children: G.map((Y) => /* @__PURE__ */ z.jsxs(Fi.Fragment, { children: [
      /* @__PURE__ */ z.jsxs("tr", { children: [
        /* @__PURE__ */ z.jsx("td", { children: /* @__PURE__ */ z.jsxs(
          "button",
          {
            type: "button",
            className: "lt-expand-btn",
            "aria-expanded": ee === Y.id,
            "aria-label": `${ee === Y.id ? "Recolher" : "Expandir"} detalhes de ${Y.companyName}`,
            onClick: () => g(ee === Y.id ? null : Y.id),
            children: [
              ee === Y.id ? "▾" : "▸",
              " ",
              Y.companyName
            ]
          }
        ) }),
        /* @__PURE__ */ z.jsx("td", { children: /* @__PURE__ */ z.jsx("span", { className: `lt-badge ${Y.isCustomer ? "lt-badge--customer" : "lt-badge--prospect"}`, children: Y.isCustomer ? "Cliente" : "Prospect" }) }),
        /* @__PURE__ */ z.jsx("td", { children: rv(Y.opportunityScore) }),
        /* @__PURE__ */ z.jsx("td", { children: bE(Y.financialPotential) }),
        /* @__PURE__ */ z.jsx("td", { children: Y.product ?? "—" }),
        /* @__PURE__ */ z.jsx("td", { children: Y.service ?? "—" }),
        /* @__PURE__ */ z.jsx("td", { children: Y.priority }),
        /* @__PURE__ */ z.jsx("td", { children: Y.sources.map((be) => be.type).join(", ") })
      ] }),
      ee === Y.id && /* @__PURE__ */ z.jsx(qk, { row: Y })
    ] }, Y.id)) })
  ] });
}
const Kk = [
  {
    id: "opp-1",
    companyName: "Aurora Sistemas Ltda",
    isCustomer: !0,
    opportunityScore: 0.92,
    financialPotential: 48e3,
    type: "cross-sell",
    product: "VDC365",
    service: null,
    priority: "alta",
    sources: [{ type: "salesforce", confidence: 1 }, { type: "website", confidence: 0.8 }],
    status: "qualified",
    evidence: ["veeam_vbr", "m365"],
    justification: "Cliente tem Veeam VBR e M365, mas não tem VDC365.",
    confidenceScore: 0.9,
    currentProducts: ["Veeam VBR", "Microsoft 365"],
    recommendedProducts: ["VDC365"],
    recommendedServices: []
  },
  {
    id: "opp-2",
    companyName: "Bytemark Tecnologia",
    isCustomer: !1,
    opportunityScore: 0.67,
    financialPotential: 15e3,
    type: "service",
    product: null,
    service: "Assessment de DR",
    priority: "média",
    sources: [{ type: "manual", confidence: 0.6 }],
    status: "detected",
    evidence: ["sem plano de DR documentado"],
    justification: "Prospect sem estratégia de disaster recovery formalizada.",
    confidenceScore: 0.6,
    currentProducts: ["VMware VVF"],
    recommendedProducts: [],
    recommendedServices: ["Assessment de DR"]
  },
  {
    id: "opp-3",
    companyName: "Cedro Corp",
    isCustomer: !0,
    opportunityScore: 0.41,
    financialPotential: null,
    type: "optimization",
    product: null,
    service: "FinOps",
    priority: "baixa",
    sources: [{ type: "website", confidence: 0.5 }],
    status: "reviewed",
    evidence: ["gasto cloud acima da média do segmento"],
    justification: "Sinal de possível excesso de gasto em cloud, sem dado financeiro confirmado.",
    confidenceScore: 0.4,
    currentProducts: ["AWS"],
    recommendedProducts: [],
    recommendedServices: ["FinOps"]
  }
], Jk = `
.lt-root { padding: 24px; font-family: inherit; color: hsl(var(--text)); }
.lt-header { margin-bottom: 16px; }
.lt-header h2 { font-size: 15px; font-weight: 600; margin: 0 0 4px; }
.lt-header p { font-size: 11px; color: hsl(var(--text-muted)); margin: 0; }

.lt-filters { display: flex; flex-wrap: wrap; gap: 12px; margin-bottom: 16px; }
.lt-filters label { display: flex; flex-direction: column; gap: 4px; font-size: 11px; color: hsl(var(--text-muted)); }
.lt-filters select, .lt-filters input {
  font-size: 12px; padding: 6px 8px; border-radius: 6px;
  border: 1px solid hsl(var(--border)); background: hsl(var(--bg)); color: hsl(var(--text));
}

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
.lt-hint { font-size: 10px; color: hsl(var(--text-muted)); margin-top: 6px; }

.lt-draft { margin-top: 12px; padding: 12px; border-radius: 6px; background: hsl(var(--bg)); border: 1px solid hsl(var(--border)); font-size: 11px; }
.lt-draft p { margin: 0 0 8px; }

.lt-toolbar { display: flex; justify-content: flex-end; gap: 8px; margin-bottom: 12px; }

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
.lt-stat-tile__value { font-size: 18px; font-weight: 600; color: hsl(var(--text)); }
.lt-stat-tile__label { font-size: 10px; color: hsl(var(--text-muted)); margin-top: 2px; }

.lt-chart-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; }
.lt-chart-card { border: 1px solid hsl(var(--border-subtle)); border-radius: 8px; padding: 16px; background: hsl(var(--bg-elevated)); }
.lt-chart-card h3 { font-size: 12px; font-weight: 600; margin: 0 0 12px; color: hsl(var(--text)); }
.lt-chart-card--wide { grid-column: 1 / -1; }
`;
function Zk({ rows: T }) {
  const [O, k] = Fi.useState($k), [ge, Re] = Fi.useState(null), [ee, g] = Fi.useState(null), Ne = Qk(T, O), G = async (Y) => {
    Re(null), g(Y);
    try {
      const be = Yk(O);
      Y === "pdf" ? await wk(Ne, be) : await _k(Ne);
    } catch (be) {
      Re(be instanceof Error ? be.message : "Falha ao exportar.");
    } finally {
      g(null);
    }
  };
  return /* @__PURE__ */ z.jsxs("div", { children: [
    /* @__PURE__ */ z.jsxs("div", { className: "lt-header", children: [
      /* @__PURE__ */ z.jsx("h2", { children: "Oportunidades" }),
      /* @__PURE__ */ z.jsxs("p", { children: [
        "Lead.Tracker · ",
        Ne.length,
        " de ",
        T.length,
        " oportunidades"
      ] })
    ] }),
    /* @__PURE__ */ z.jsxs("div", { className: "lt-toolbar", children: [
      /* @__PURE__ */ z.jsx("button", { type: "button", className: "lt-btn", onClick: () => G("pdf"), disabled: ee !== null, "aria-busy": ee === "pdf", children: ee === "pdf" ? "Gerando PDF…" : "PDF" }),
      /* @__PURE__ */ z.jsx("button", { type: "button", className: "lt-btn", onClick: () => G("excel"), disabled: ee !== null, "aria-busy": ee === "excel", children: ee === "excel" ? "Gerando Excel…" : "Excel" })
    ] }),
    ge && /* @__PURE__ */ z.jsx("p", { className: "lt-hint", role: "alert", children: ge }),
    /* @__PURE__ */ z.jsx(Ik, { rows: T, value: O, onChange: k }),
    /* @__PURE__ */ z.jsx(Xk, { rows: Ne })
  ] });
}
function eD({ rows: T = Kk }) {
  const [O, k] = Fi.useState("dashboard");
  return /* @__PURE__ */ z.jsxs("div", { className: "lt-root", children: [
    /* @__PURE__ */ z.jsx("style", { children: Jk }),
    /* @__PURE__ */ z.jsxs("div", { className: "lt-tabs", role: "tablist", "aria-label": "Navegação Lead.Tracker", children: [
      /* @__PURE__ */ z.jsx("button", { type: "button", role: "tab", "aria-selected": O === "dashboard", className: "lt-tab", onClick: () => k("dashboard"), children: "Dashboard" }),
      /* @__PURE__ */ z.jsx("button", { type: "button", role: "tab", "aria-selected": O === "oportunidades", className: "lt-tab", onClick: () => k("oportunidades"), children: "Oportunidades" })
    ] }),
    O === "dashboard" ? /* @__PURE__ */ z.jsx(Bk, {}) : /* @__PURE__ */ z.jsx(Zk, { rows: T })
  ] });
}
const tD = {
  moduleId: "lead_tracker",
  title: "Lead.Tracker",
  icon: "target",
  category: "Sales",
  vendor: "TechForge",
  route: "/modules/lead_tracker",
  description: "Opportunity Intelligence — tela de oportunidades."
};
let wR = null;
function nD(T) {
  wR = RE(T), wR.render(/* @__PURE__ */ z.jsx(eD, {}));
}
const lD = { render: nD, moduleConfig: tD };
export {
  lD as default
};
