(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/index.js"],{

/***/ "./node_modules/next/dist/build/polyfills/fetch/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/build/polyfills/fetch/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* globals self */var fetch=self.fetch.bind(self);module.exports=fetch;module.exports.default=module.exports;

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Fswoleengineer%2Fprojects%2Flearn-next%2Fpages%2Findex.js!./":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Fswoleengineer%2Fprojects%2Flearn-next%2Fpages%2Findex.js ***!
  \********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/", function() {
      var mod = __webpack_require__(/*! ./pages/index.js */ "./pages/index.js")
      if(true) {
        module.hot.accept(/*! ./pages/index.js */ "./pages/index.js", function() {
          if(!next.router.components["/"]) return
          var updatedPage = __webpack_require__(/*! ./pages/index.js */ "./pages/index.js")
          next.router.update("/", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_c2e10d183b950a67d9e7 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_c2e10d183b950a67d9e7 */ "dll-reference dll_c2e10d183b950a67d9e7"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/string-hash/index.js":
/*!*******************************************!*\
  !*** ./node_modules/string-hash/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
/*!********************************************************!*\
  !*** ./node_modules/styled-jsx/dist/lib/stylesheet.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;
exports["default"] = void 0;

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/
var isProd = typeof process !== 'undefined' && process.env && "development" === 'production';

var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = "#" + name + "-deleted-rule____{}";
    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;
    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
    var node = this._isBrowser && document.querySelector('meta[property="csp-nonce"]');
    this._nonce = node ? node.getAttribute('content') : null;
  }

  var _proto = StyleSheet.prototype;

  _proto.setOptimizeForSpeed = function setOptimizeForSpeed(bool) {
    invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');
    invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
    this.flush();
    this._optimizeForSpeed = bool;
    this.inject();
  };

  _proto.isOptimizeForSpeed = function isOptimizeForSpeed() {
    return this._optimizeForSpeed;
  };

  _proto.inject = function inject() {
    var _this = this;

    invariant(!this._injected, 'sheet already injected');
    this._injected = true;

    if (this._isBrowser && this._optimizeForSpeed) {
      this._tags[0] = this.makeStyleTag(this._name);
      this._optimizeForSpeed = 'insertRule' in this.getSheet();

      if (!this._optimizeForSpeed) {
        if (!isProd) {
          console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.');
        }

        this.flush();
        this._injected = true;
      }

      return;
    }

    this._serverSheet = {
      cssRules: [],
      insertRule: function insertRule(rule, index) {
        if (typeof index === 'number') {
          _this._serverSheet.cssRules[index] = {
            cssText: rule
          };
        } else {
          _this._serverSheet.cssRules.push({
            cssText: rule
          });
        }

        return index;
      },
      deleteRule: function deleteRule(index) {
        _this._serverSheet.cssRules[index] = null;
      }
    };
  };

  _proto.getSheetForTag = function getSheetForTag(tag) {
    if (tag.sheet) {
      return tag.sheet;
    } // this weirdness brought to you by firefox


    for (var i = 0; i < document.styleSheets.length; i++) {
      if (document.styleSheets[i].ownerNode === tag) {
        return document.styleSheets[i];
      }
    }
  };

  _proto.getSheet = function getSheet() {
    return this.getSheetForTag(this._tags[this._tags.length - 1]);
  };

  _proto.insertRule = function insertRule(rule, index) {
    invariant(isString(rule), '`insertRule` accepts only strings');

    if (!this._isBrowser) {
      if (typeof index !== 'number') {
        index = this._serverSheet.cssRules.length;
      }

      this._serverSheet.insertRule(rule, index);

      return this._rulesCount++;
    }

    if (this._optimizeForSpeed) {
      var sheet = this.getSheet();

      if (typeof index !== 'number') {
        index = sheet.cssRules.length;
      } // this weirdness for perf, and chrome's weird bug
      // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule


      try {
        sheet.insertRule(rule, index);
      } catch (error) {
        if (!isProd) {
          console.warn("StyleSheet: illegal rule: \n\n" + rule + "\n\nSee https://stackoverflow.com/q/20007992 for more info");
        }

        return -1;
      }
    } else {
      var insertionPoint = this._tags[index];

      this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
    }

    return this._rulesCount++;
  };

  _proto.replaceRule = function replaceRule(index, rule) {
    if (this._optimizeForSpeed || !this._isBrowser) {
      var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;

      if (!rule.trim()) {
        rule = this._deletedRulePlaceholder;
      }

      if (!sheet.cssRules[index]) {
        // @TBD Should we throw an error?
        return index;
      }

      sheet.deleteRule(index);

      try {
        sheet.insertRule(rule, index);
      } catch (error) {
        if (!isProd) {
          console.warn("StyleSheet: illegal rule: \n\n" + rule + "\n\nSee https://stackoverflow.com/q/20007992 for more info");
        } // In order to preserve the indices we insert a deleteRulePlaceholder


        sheet.insertRule(this._deletedRulePlaceholder, index);
      }
    } else {
      var tag = this._tags[index];
      invariant(tag, "old rule at index `" + index + "` not found");
      tag.textContent = rule;
    }

    return index;
  };

  _proto.deleteRule = function deleteRule(index) {
    if (!this._isBrowser) {
      this._serverSheet.deleteRule(index);

      return;
    }

    if (this._optimizeForSpeed) {
      this.replaceRule(index, '');
    } else {
      var tag = this._tags[index];
      invariant(tag, "rule at index `" + index + "` not found");
      tag.parentNode.removeChild(tag);
      this._tags[index] = null;
    }
  };

  _proto.flush = function flush() {
    this._injected = false;
    this._rulesCount = 0;

    if (this._isBrowser) {
      this._tags.forEach(function (tag) {
        return tag && tag.parentNode.removeChild(tag);
      });

      this._tags = [];
    } else {
      // simpler on server
      this._serverSheet.cssRules = [];
    }
  };

  _proto.cssRules = function cssRules() {
    var _this2 = this;

    if (!this._isBrowser) {
      return this._serverSheet.cssRules;
    }

    return this._tags.reduce(function (rules, tag) {
      if (tag) {
        rules = rules.concat(Array.prototype.map.call(_this2.getSheetForTag(tag).cssRules, function (rule) {
          return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
        }));
      } else {
        rules.push(null);
      }

      return rules;
    }, []);
  };

  _proto.makeStyleTag = function makeStyleTag(name, cssString, relativeToTag) {
    if (cssString) {
      invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
    }

    var tag = document.createElement('style');
    if (this._nonce) tag.setAttribute('nonce', this._nonce);
    tag.type = 'text/css';
    tag.setAttribute("data-" + name, '');

    if (cssString) {
      tag.appendChild(document.createTextNode(cssString));
    }

    var head = document.head || document.getElementsByTagName('head')[0];

    if (relativeToTag) {
      head.insertBefore(tag, relativeToTag);
    } else {
      head.appendChild(tag);
    }

    return tag;
  };

  _createClass(StyleSheet, [{
    key: "length",
    get: function get() {
      return this._rulesCount;
    }
  }]);

  return StyleSheet;
}();

exports["default"] = StyleSheet;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheet: " + message + ".");
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/styled-jsx/dist/style.js":
/*!***********************************************!*\
  !*** ./node_modules/styled-jsx/dist/style.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.flush = flush;
exports["default"] = void 0;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _stylesheetRegistry = _interopRequireDefault(__webpack_require__(/*! ./stylesheet-registry */ "./node_modules/styled-jsx/dist/stylesheet-registry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var styleSheetRegistry = new _stylesheetRegistry["default"]();

var JSXStyle =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(JSXStyle, _Component);

  function JSXStyle(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.prevProps = {};
    return _this;
  }

  JSXStyle.dynamic = function dynamic(info) {
    return info.map(function (tagInfo) {
      var baseId = tagInfo[0];
      var props = tagInfo[1];
      return styleSheetRegistry.computeId(baseId, props);
    }).join(' ');
  } // probably faster than PureComponent (shallowEqual)
  ;

  var _proto = JSXStyle.prototype;

  _proto.shouldComponentUpdate = function shouldComponentUpdate(otherProps) {
    return this.props.id !== otherProps.id || // We do this check because `dynamic` is an array of strings or undefined.
    // These are the computed values for dynamic styles.
    String(this.props.dynamic) !== String(otherProps.dynamic);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    styleSheetRegistry.remove(this.props);
  };

  _proto.render = function render() {
    // This is a workaround to make the side effect async safe in the "render" phase.
    // See https://github.com/zeit/styled-jsx/pull/484
    if (this.shouldComponentUpdate(this.prevProps)) {
      // Updates
      if (this.prevProps.id) {
        styleSheetRegistry.remove(this.prevProps);
      }

      styleSheetRegistry.add(this.props);
      this.prevProps = this.props;
    }

    return null;
  };

  return JSXStyle;
}(_react.Component);

exports["default"] = JSXStyle;

function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return cssRules;
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
/*!*************************************************************!*\
  !*** ./node_modules/styled-jsx/dist/stylesheet-registry.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _stringHash = _interopRequireDefault(__webpack_require__(/*! string-hash */ "./node_modules/string-hash/index.js"));

var _stylesheet = _interopRequireDefault(__webpack_require__(/*! ./lib/stylesheet */ "./node_modules/styled-jsx/dist/lib/stylesheet.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/gi, '\\/style');
};

var StyleSheetRegistry =
/*#__PURE__*/
function () {
  function StyleSheetRegistry(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === void 0 ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    this._sheet = styleSheet || new _stylesheet["default"]({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();

    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;
    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  var _proto = StyleSheetRegistry.prototype;

  _proto.add = function add(props) {
    var _this = this;

    if (undefined === this._optimizeForSpeed) {
      this._optimizeForSpeed = Array.isArray(props.children);

      this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    if (this._isBrowser && !this._fromServer) {
      this._fromServer = this.selectFromServer();
      this._instancesCounts = Object.keys(this._fromServer).reduce(function (acc, tagName) {
        acc[tagName] = 0;
        return acc;
      }, {});
    }

    var _this$getIdAndRules = this.getIdAndRules(props),
        styleId = _this$getIdAndRules.styleId,
        rules = _this$getIdAndRules.rules; // Deduping: just increase the instances count.


    if (styleId in this._instancesCounts) {
      this._instancesCounts[styleId] += 1;
      return;
    }

    var indices = rules.map(function (rule) {
      return _this._sheet.insertRule(rule);
    }) // Filter out invalid rules
    .filter(function (index) {
      return index !== -1;
    });
    this._indices[styleId] = indices;
    this._instancesCounts[styleId] = 1;
  };

  _proto.remove = function remove(props) {
    var _this2 = this;

    var _this$getIdAndRules2 = this.getIdAndRules(props),
        styleId = _this$getIdAndRules2.styleId;

    invariant(styleId in this._instancesCounts, "styleId: `" + styleId + "` not found");
    this._instancesCounts[styleId] -= 1;

    if (this._instancesCounts[styleId] < 1) {
      var tagFromServer = this._fromServer && this._fromServer[styleId];

      if (tagFromServer) {
        tagFromServer.parentNode.removeChild(tagFromServer);
        delete this._fromServer[styleId];
      } else {
        this._indices[styleId].forEach(function (index) {
          return _this2._sheet.deleteRule(index);
        });

        delete this._indices[styleId];
      }

      delete this._instancesCounts[styleId];
    }
  };

  _proto.update = function update(props, nextProps) {
    this.add(nextProps);
    this.remove(props);
  };

  _proto.flush = function flush() {
    this._sheet.flush();

    this._sheet.inject();

    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  };

  _proto.cssRules = function cssRules() {
    var _this3 = this;

    var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function (styleId) {
      return [styleId, _this3._fromServer[styleId]];
    }) : [];

    var cssRules = this._sheet.cssRules();

    return fromServer.concat(Object.keys(this._indices).map(function (styleId) {
      return [styleId, _this3._indices[styleId].map(function (index) {
        return cssRules[index].cssText;
      }).join(_this3._optimizeForSpeed ? '' : '\n')];
    }) // filter out empty rules
    .filter(function (rule) {
      return Boolean(rule[1]);
    }));
  }
  /**
   * createComputeId
   *
   * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
   */
  ;

  _proto.createComputeId = function createComputeId() {
    var cache = {};
    return function (baseId, props) {
      if (!props) {
        return "jsx-" + baseId;
      }

      var propsToString = String(props);
      var key = baseId + propsToString; // return `jsx-${hashString(`${baseId}-${propsToString}`)}`

      if (!cache[key]) {
        cache[key] = "jsx-" + (0, _stringHash["default"])(baseId + "-" + propsToString);
      }

      return cache[key];
    };
  }
  /**
   * createComputeSelector
   *
   * Creates a function to compute and memoize dynamic selectors.
   */
  ;

  _proto.createComputeSelector = function createComputeSelector(selectoPlaceholderRegexp) {
    if (selectoPlaceholderRegexp === void 0) {
      selectoPlaceholderRegexp = /__jsx-style-dynamic-selector/g;
    }

    var cache = {};
    return function (id, css) {
      // Sanitize SSR-ed CSS.
      // Client side code doesn't need to be sanitized since we use
      // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
      if (!this._isBrowser) {
        css = sanitize(css);
      }

      var idcss = id + css;

      if (!cache[idcss]) {
        cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
      }

      return cache[idcss];
    };
  };

  _proto.getIdAndRules = function getIdAndRules(props) {
    var _this4 = this;

    var css = props.children,
        dynamic = props.dynamic,
        id = props.id;

    if (dynamic) {
      var styleId = this.computeId(id, dynamic);
      return {
        styleId: styleId,
        rules: Array.isArray(css) ? css.map(function (rule) {
          return _this4.computeSelector(styleId, rule);
        }) : [this.computeSelector(styleId, css)]
      };
    }

    return {
      styleId: this.computeId(id),
      rules: Array.isArray(css) ? css : [css]
    };
  }
  /**
   * selectFromServer
   *
   * Collects style tags from the document with id __jsx-XXX
   */
  ;

  _proto.selectFromServer = function selectFromServer() {
    var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
    return elements.reduce(function (acc, element) {
      var id = element.id.slice(2);
      acc[id] = element;
      return acc;
    }, {});
  };

  return StyleSheetRegistry;
}();

exports["default"] = StyleSheetRegistry;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheetRegistry: " + message + ".");
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/style.js":
/*!******************************************!*\
  !*** ./node_modules/styled-jsx/style.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/style */ "./node_modules/styled-jsx/dist/style.js")


/***/ }),

/***/ "./node_modules/swr/esm/cache.js":
/*!***************************************!*\
  !*** ./node_modules/swr/esm/cache.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Cache; });
/* harmony import */ var _use_swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./use-swr */ "./node_modules/swr/esm/use-swr.js");
/* harmony import */ var _libs_hash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./libs/hash */ "./node_modules/swr/esm/libs/hash.js");


class Cache {
    constructor(initialData = {}) {
        this.__cache = new Map(Object.entries(initialData));
        this.__listeners = [];
    }
    get(key) {
        const [_key] = this.serializeKey(key);
        return this.__cache.get(_key);
    }
    set(key, value, shouldNotify = true) {
        const [_key] = this.serializeKey(key);
        this.__cache.set(_key, value);
        if (shouldNotify)
            Object(_use_swr__WEBPACK_IMPORTED_MODULE_0__["mutate"])(key, value, false);
        this.notify();
    }
    keys() {
        return Array.from(this.__cache.keys());
    }
    has(key) {
        const [_key] = this.serializeKey(key);
        return this.__cache.has(_key);
    }
    clear(shouldNotify = true) {
        if (shouldNotify)
            this.__cache.forEach(key => Object(_use_swr__WEBPACK_IMPORTED_MODULE_0__["mutate"])(key, null, false));
        this.__cache.clear();
        this.notify();
    }
    delete(key, shouldNotify = true) {
        const [_key] = this.serializeKey(key);
        if (shouldNotify)
            Object(_use_swr__WEBPACK_IMPORTED_MODULE_0__["mutate"])(key, null, false);
        this.__cache.delete(_key);
        this.notify();
    }
    // TODO: introduce namespace for the cache
    serializeKey(key) {
        let args = null;
        if (typeof key === 'function') {
            try {
                key = key();
            }
            catch (err) {
                // dependencies not ready
                key = '';
            }
        }
        if (Array.isArray(key)) {
            // args array
            args = key;
            key = Object(_libs_hash__WEBPACK_IMPORTED_MODULE_1__["default"])(key);
        }
        else {
            // convert null to ''
            key = String(key || '');
        }
        const errorKey = key ? 'err@' + key : '';
        return [key, args, errorKey];
    }
    subscribe(listener) {
        if (typeof listener !== 'function') {
            throw new Error('Expected the listener to be a function.');
        }
        let isSubscribed = true;
        this.__listeners.push(listener);
        return () => {
            if (!isSubscribed)
                return;
            isSubscribed = false;
            const index = this.__listeners.indexOf(listener);
            if (index > -1) {
                this.__listeners[index] = this.__listeners[this.__listeners.length - 1];
                this.__listeners.length--;
            }
        };
    }
    // Notify Cache subscribers about a change in the cache
    notify() {
        for (let listener of this.__listeners) {
            listener();
        }
    }
}


/***/ }),

/***/ "./node_modules/swr/esm/config.js":
/*!****************************************!*\
  !*** ./node_modules/swr/esm/config.js ***!
  \****************************************/
/*! exports provided: CONCURRENT_PROMISES, CONCURRENT_PROMISES_TS, FOCUS_REVALIDATORS, CACHE_REVALIDATORS, MUTATION_TS, cache, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONCURRENT_PROMISES", function() { return CONCURRENT_PROMISES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONCURRENT_PROMISES_TS", function() { return CONCURRENT_PROMISES_TS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOCUS_REVALIDATORS", function() { return FOCUS_REVALIDATORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CACHE_REVALIDATORS", function() { return CACHE_REVALIDATORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MUTATION_TS", function() { return MUTATION_TS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cache", function() { return cache; });
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fast-deep-equal */ "./node_modules/swr/node_modules/fast-deep-equal/index.js");
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fast_deep_equal__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _libs_is_document_visible__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./libs/is-document-visible */ "./node_modules/swr/esm/libs/is-document-visible.js");
/* harmony import */ var _libs_is_online__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./libs/is-online */ "./node_modules/swr/esm/libs/is-online.js");
/* harmony import */ var _cache__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cache */ "./node_modules/swr/esm/cache.js");




// cache
const cache = new _cache__WEBPACK_IMPORTED_MODULE_3__["default"]();
// state managers
const CONCURRENT_PROMISES = {};
const CONCURRENT_PROMISES_TS = {};
const FOCUS_REVALIDATORS = {};
const CACHE_REVALIDATORS = {};
const MUTATION_TS = {};
// error retry
function onErrorRetry(_, __, config, revalidate, opts) {
    if (!Object(_libs_is_document_visible__WEBPACK_IMPORTED_MODULE_1__["default"])()) {
        // if it's hidden, stop
        // it will auto revalidate when focus
        return;
    }
    if (config.errorRetryCount && opts.retryCount > config.errorRetryCount) {
        return;
    }
    // exponential backoff
    const count = Math.min(opts.retryCount || 0, 8);
    const timeout = ~~((Math.random() + 0.5) * (1 << count)) * config.errorRetryInterval;
    setTimeout(revalidate, timeout, opts);
}
// client side: need to adjust the config
// based on the browser status
// slow connection (<= 70Kbps)
const slowConnection = typeof window !== 'undefined' &&
    navigator['connection'] &&
    ['slow-2g', '2g'].indexOf(navigator['connection'].effectiveType) !== -1;
// config
const defaultConfig = {
    // events
    onLoadingSlow: () => { },
    onSuccess: () => { },
    onError: () => { },
    onErrorRetry,
    errorRetryInterval: (slowConnection ? 10 : 5) * 1000,
    focusThrottleInterval: 5 * 1000,
    dedupingInterval: 2 * 1000,
    loadingTimeout: (slowConnection ? 5 : 3) * 1000,
    refreshInterval: 0,
    revalidateOnFocus: true,
    revalidateOnReconnect: true,
    refreshWhenHidden: false,
    refreshWhenOffline: false,
    shouldRetryOnError: true,
    suspense: false,
    compare: fast_deep_equal__WEBPACK_IMPORTED_MODULE_0___default.a
};
// Focus revalidate
let eventsBinded = false;
if (typeof window !== 'undefined' && window.addEventListener && !eventsBinded) {
    const revalidate = () => {
        if (!Object(_libs_is_document_visible__WEBPACK_IMPORTED_MODULE_1__["default"])() || !Object(_libs_is_online__WEBPACK_IMPORTED_MODULE_2__["default"])())
            return;
        for (let key in FOCUS_REVALIDATORS) {
            if (FOCUS_REVALIDATORS[key][0])
                FOCUS_REVALIDATORS[key][0]();
        }
    };
    window.addEventListener('visibilitychange', revalidate, false);
    window.addEventListener('focus', revalidate, false);
    // only bind the events once
    eventsBinded = true;
}

/* harmony default export */ __webpack_exports__["default"] = (defaultConfig);


/***/ }),

/***/ "./node_modules/swr/esm/index.js":
/*!***************************************!*\
  !*** ./node_modules/swr/esm/index.js ***!
  \***************************************/
/*! exports provided: trigger, mutate, SWRConfig, useSWRPages, cache, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _use_swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./use-swr */ "./node_modules/swr/esm/use-swr.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "trigger", function() { return _use_swr__WEBPACK_IMPORTED_MODULE_0__["trigger"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mutate", function() { return _use_swr__WEBPACK_IMPORTED_MODULE_0__["mutate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SWRConfig", function() { return _use_swr__WEBPACK_IMPORTED_MODULE_0__["SWRConfig"]; });

/* harmony import */ var _use_swr_pages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-swr-pages */ "./node_modules/swr/esm/use-swr-pages.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSWRPages", function() { return _use_swr_pages__WEBPACK_IMPORTED_MODULE_1__["useSWRPages"]; });

/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ "./node_modules/swr/esm/config.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cache", function() { return _config__WEBPACK_IMPORTED_MODULE_2__["cache"]; });





/* harmony default export */ __webpack_exports__["default"] = (_use_swr__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./node_modules/swr/esm/libs/hash.js":
/*!*******************************************!*\
  !*** ./node_modules/swr/esm/libs/hash.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return hash; });
// use WeakMap to store the object->key mapping
// so the objects can be garbage collected.
// WeakMap uses a hashtable under the hood, so the lookup
// complexity is almost O(1).
const table = new WeakMap();
// counter of the key
let counter = 0;
// hashes an array of objects and returns a string
function hash(args) {
    if (!args.length)
        return '';
    let key = 'arg';
    for (let i = 0; i < args.length; ++i) {
        let _hash;
        if (args[i] === null || typeof args[i] !== 'object') {
            // need to consider the case that args[i] is a string:
            // args[i]        _hash
            // "undefined" -> '"undefined"'
            // undefined   -> 'undefined'
            // 123         -> '123'
            // null        -> 'null'
            // "null"      -> '"null"'
            if (typeof args[i] === 'string') {
                _hash = '"' + args[i] + '"';
            }
            else {
                _hash = String(args[i]);
            }
        }
        else {
            if (!table.has(args[i])) {
                _hash = counter;
                table.set(args[i], counter++);
            }
            else {
                _hash = table.get(args[i]);
            }
        }
        key += '@' + _hash;
    }
    return key;
}


/***/ }),

/***/ "./node_modules/swr/esm/libs/is-document-visible.js":
/*!**********************************************************!*\
  !*** ./node_modules/swr/esm/libs/is-document-visible.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isDocumentVisible; });
function isDocumentVisible() {
    if (typeof document !== 'undefined' &&
        typeof document.visibilityState !== 'undefined') {
        return document.visibilityState !== 'hidden';
    }
    // always assume it's visible
    return true;
}


/***/ }),

/***/ "./node_modules/swr/esm/libs/is-online.js":
/*!************************************************!*\
  !*** ./node_modules/swr/esm/libs/is-online.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isOnline; });
function isOnline() {
    if (typeof navigator.onLine !== 'undefined') {
        return navigator.onLine;
    }
    // always assume it's online
    return true;
}


/***/ }),

/***/ "./node_modules/swr/esm/libs/throttle.js":
/*!***********************************************!*\
  !*** ./node_modules/swr/esm/libs/throttle.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return throttle; });
function throttle(fn, interval) {
    let pending = false;
    return (...args) => {
        if (pending)
            return;
        pending = true;
        fn(...args);
        setTimeout(() => (pending = false), interval);
    };
}


/***/ }),

/***/ "./node_modules/swr/esm/swr-config-context.js":
/*!****************************************************!*\
  !*** ./node_modules/swr/esm/swr-config-context.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const SWRConfigContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({});
SWRConfigContext.displayName = 'SWRConfigContext';
/* harmony default export */ __webpack_exports__["default"] = (SWRConfigContext);


/***/ }),

/***/ "./node_modules/swr/esm/use-swr-pages.js":
/*!***********************************************!*\
  !*** ./node_modules/swr/esm/use-swr-pages.js ***!
  \***********************************************/
/*! exports provided: useSWRPages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSWRPages", function() { return useSWRPages; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./node_modules/swr/esm/config.js");


/*
The idea

A "Page" component renders the content of 1 API request, it accepts an offset (in this example it's from),
uses a SWR hook (useSWR(API + '?limit=' + limit + '&from=' + from)) and returns items (Projects).

The UI:
      +------------------------------------------+
      |   Projects                               |
+------------------------------------------------------+
|     |   +----------------+                     |     |
|     |                                          |     |
|     |   +------------+                         |     |
|     |                                          |     +--> 1 Page
|     |   +-----------------+                    |     |
|     |                                          |     |  /projects/list?limit=4
|     |   +---------+                            |     |
+------------------------------------------------------+
      |                                          |
      |   +------------+                         |     +  /projects/list?limit=4&from=123
      |                                          |     |
      |   +----------------+                     |     |
      |                                          |     |
      |   +---------+                            |     |
      |                                          |     |
      |   +--------------+                       |     +
      |                                          |
      |   +-------------------+                  |     +  /projects/list?limit=4&from=456
      |                                          |     |
      |   +------------+                         |     |
      |                                          |     |
      |   +----------------+                     |     |
      |                                          |     |
      |                                          |     +

The API
// (inside `render`)

function App () {
  const {
    pages,    // an array of each page component
    pageSWRs, // an array of SWRs of each page
    isLoadingMore,
    isReachingEnd,
    isEmpty,
    loadMore
  } = useSWRPages(
    'project-page', // key of this page

    // ======== the actual Page component!
    ({ offset, withSWR }) => {
      // required: use `withSWR` to wrap your main SWR (source of your pagination API)
      const { data } = withSWR(
        useSWR(API + '?limit=10&from=' + offset) // request projects with offset
      )
      if (!data) return <Placeholder>
      return data.projects.map(project => <Card project={project} team={team}>)
    },
    // ========

    // a function accepts a SWR's `data`, and returns the offset of the next page (or null)
    data => data && data.length >= 10 ? data[data.length - 1].createdAt : null,

    // (optional) outside deps of your Page component. in this case it's empty
    []
  )

  // ...

  if (isEmpty) return <EmptyProjectsPage/>

  return <div>
    {pages}
    {isReachingEnd
      ? null
      : <button loading={isLoadingMore} onClick={loadMore}>Load More</button>}
  </div>
}
*/
const pageCacheMap = new Map();
function useSWRPages(pageKey, pageFn, SWRToOffset, deps = []) {
    const pageCountKey = `_swr_page_count_` + pageKey;
    const pageOffsetKey = `_swr_page_offset_` + pageKey;
    const [pageCount, setPageCount] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(pageCountKey) || 1);
    const [pageOffsets, setPageOffsets] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(pageOffsetKey) || [null]);
    const [pageSWRs, setPageSWRs] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
    const pageFnRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(pageFn);
    const emptyPageRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
    // Page component (wraps `pageFn`)
    // for performance reason we need to memorize it
    const Page = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(props => {
        // render the page component
        const dataList = pageFnRef.current(props);
        // if dataList is [], we can assume this page is empty
        // TODO: this API is not stable
        if (dataList && !dataList.length) {
            emptyPageRef.current = true;
        }
        else {
            emptyPageRef.current = false;
        }
        return dataList;
    }, []);
    // Doesn't have a next page
    const isReachingEnd = pageOffsets[pageCount] === null;
    const isLoadingMore = pageCount === pageOffsets.length;
    const isEmpty = isReachingEnd && pageCount === 1 && emptyPageRef.current;
    const loadMore = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
        if (isLoadingMore || isReachingEnd)
            return;
        setPageCount(c => {
            _config__WEBPACK_IMPORTED_MODULE_1__["cache"].set(pageCountKey, c + 1);
            return c + 1;
        });
    }, [isLoadingMore || isReachingEnd]);
    const _pageFn = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(pageFn, deps);
    pageFnRef.current = _pageFn;
    const pages = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => {
        const getWithSWR = id => swr => {
            if (!pageSWRs[id] ||
                pageSWRs[id].data !== swr.data ||
                pageSWRs[id].error !== swr.error ||
                pageSWRs[id].revalidate !== swr.revalidate) {
                // hoist side effects: setPageSWRs and setPageOffsets -- https://reactjs.org/blog/2020/02/26/react-v16.13.0.html#warnings-for-some-updates-during-render
                setTimeout(() => {
                    setPageSWRs(swrs => {
                        const _swrs = [...swrs];
                        _swrs[id] = {
                            data: swr.data,
                            error: swr.error,
                            revalidate: swr.revalidate,
                            isValidating: swr.isValidating,
                            mutate: swr.mutate
                        };
                        return _swrs;
                    });
                    if (typeof swr.data !== 'undefined') {
                        // set next page's offset
                        const newPageOffset = SWRToOffset(swr, id);
                        if (pageOffsets[id + 1] !== newPageOffset) {
                            setPageOffsets(arr => {
                                const _arr = [...arr];
                                _arr[id + 1] = newPageOffset;
                                _config__WEBPACK_IMPORTED_MODULE_1__["cache"].set(pageOffsetKey, _arr);
                                return _arr;
                            });
                        }
                    }
                });
            }
            return swr;
        };
        // render each page
        const p = [];
        if (!pageCacheMap.has(pageKey)) {
            pageCacheMap.set(pageKey, []);
        }
        const pageCache = pageCacheMap.get(pageKey);
        for (let i = 0; i < pageCount; ++i) {
            if (!pageCache[i] ||
                pageCache[i].offset !== pageOffsets[i] ||
                pageCache[i].pageFn !== _pageFn) {
                // when props change or at init
                // render the page and cache it
                pageCache[i] = {
                    component: (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Page, { key: `page-${pageOffsets[i]}-${i}`, offset: pageOffsets[i], withSWR: getWithSWR(i) })),
                    pageFn: _pageFn,
                    offset: pageOffsets[i]
                };
            }
            p.push(pageCache[i].component);
        }
        return p;
    }, [_pageFn, pageCount, pageSWRs, pageOffsets, pageKey]);
    return {
        pages,
        pageCount,
        pageSWRs,
        isLoadingMore,
        isReachingEnd,
        isEmpty,
        loadMore
    };
}


/***/ }),

/***/ "./node_modules/swr/esm/use-swr.js":
/*!*****************************************!*\
  !*** ./node_modules/swr/esm/use-swr.js ***!
  \*****************************************/
/*! exports provided: trigger, mutate, SWRConfig, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trigger", function() { return trigger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutate", function() { return mutate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SWRConfig", function() { return SWRConfig; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./node_modules/swr/esm/config.js");
/* harmony import */ var _libs_is_document_visible__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./libs/is-document-visible */ "./node_modules/swr/esm/libs/is-document-visible.js");
/* harmony import */ var _libs_is_online__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./libs/is-online */ "./node_modules/swr/esm/libs/is-online.js");
/* harmony import */ var _libs_throttle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./libs/throttle */ "./node_modules/swr/esm/libs/throttle.js");
/* harmony import */ var _swr_config_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./swr-config-context */ "./node_modules/swr/esm/swr-config-context.js");






const IS_SERVER = typeof window === 'undefined';
// React currently throws a warning when using useLayoutEffect on the server.
// To get around it, we can conditionally useEffect on the server (no-op) and
// useLayoutEffect in the browser.
const useIsomorphicLayoutEffect = IS_SERVER ? react__WEBPACK_IMPORTED_MODULE_0__["useEffect"] : react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"];
const trigger = (_key, shouldRevalidate = true) => {
    // we are ignoring the second argument which correspond to the arguments
    // the fetcher will receive when key is an array
    const [key, , keyErr] = _config__WEBPACK_IMPORTED_MODULE_1__["cache"].serializeKey(_key);
    if (!key)
        return;
    const updaters = _config__WEBPACK_IMPORTED_MODULE_1__["CACHE_REVALIDATORS"][key];
    if (key && updaters) {
        const currentData = _config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(key);
        const currentError = _config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(keyErr);
        for (let i = 0; i < updaters.length; ++i) {
            updaters[i](shouldRevalidate, currentData, currentError, i > 0);
        }
    }
};
const broadcastState = (key, data, error) => {
    const updaters = _config__WEBPACK_IMPORTED_MODULE_1__["CACHE_REVALIDATORS"][key];
    if (key && updaters) {
        for (let i = 0; i < updaters.length; ++i) {
            updaters[i](false, data, error);
        }
    }
};
const mutate = async (_key, _data, shouldRevalidate = true) => {
    const [key] = _config__WEBPACK_IMPORTED_MODULE_1__["cache"].serializeKey(_key);
    if (!key)
        return;
    // if there is no new data, call revalidate against the key
    if (typeof _data === 'undefined')
        return trigger(_key, shouldRevalidate);
    // update timestamp
    _config__WEBPACK_IMPORTED_MODULE_1__["MUTATION_TS"][key] = Date.now() - 1;
    let data, error;
    if (_data && typeof _data === 'function') {
        // `_data` is a function, call it passing current cache value
        try {
            data = await _data(_config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(key));
        }
        catch (err) {
            error = err;
        }
    }
    else if (_data && typeof _data.then === 'function') {
        // `_data` is a promise
        try {
            data = await _data;
        }
        catch (err) {
            error = err;
        }
    }
    else {
        data = _data;
    }
    if (typeof data !== 'undefined') {
        // update cached data, avoid notifying from the cache
        _config__WEBPACK_IMPORTED_MODULE_1__["cache"].set(key, data, false);
    }
    // update existing SWR Hooks' state
    const updaters = _config__WEBPACK_IMPORTED_MODULE_1__["CACHE_REVALIDATORS"][key];
    if (updaters) {
        for (let i = 0; i < updaters.length; ++i) {
            updaters[i](!!shouldRevalidate, data, error, i > 0);
        }
    }
    // throw error or return data to be used by caller of mutate
    if (error)
        throw error;
    return data;
};
function useSWR(...args) {
    let _key, fn, config = {};
    if (args.length >= 1) {
        _key = args[0];
    }
    if (args.length > 2) {
        fn = args[1];
        config = args[2];
    }
    else {
        if (typeof args[1] === 'function') {
            fn = args[1];
        }
        else if (typeof args[1] === 'object') {
            config = args[1];
        }
    }
    // we assume `key` as the identifier of the request
    // `key` can change but `fn` shouldn't
    // (because `revalidate` only depends on `key`)
    // `keyErr` is the cache key for error objects
    const [key, fnArgs, keyErr] = _config__WEBPACK_IMPORTED_MODULE_1__["cache"].serializeKey(_key);
    config = Object.assign({}, _config__WEBPACK_IMPORTED_MODULE_1__["default"], Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_swr_config_context__WEBPACK_IMPORTED_MODULE_5__["default"]), config);
    if (typeof fn === 'undefined') {
        // use a global fetcher
        fn = config.fetcher;
    }
    const initialData = _config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(key) || config.initialData;
    const initialError = _config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(keyErr);
    // if a state is accessed (data, error or isValidating),
    // we add the state to dependencies so if the state is
    // updated in the future, we can trigger a rerender
    const stateDependencies = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({
        data: false,
        error: false,
        isValidating: false
    });
    const stateRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({
        data: initialData,
        error: initialError,
        isValidating: false
    });
    const rerender = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null)[1];
    let dispatch = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(payload => {
        let shouldUpdateState = false;
        for (let k in payload) {
            stateRef.current[k] = payload[k];
            if (stateDependencies.current[k]) {
                shouldUpdateState = true;
            }
        }
        if (shouldUpdateState || config.suspense) {
            rerender({});
        }
    }, []);
    // error ref inside revalidate (is last request errored?)
    const unmountedRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
    const keyRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(key);
    const boundMutate = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((data, shouldRevalidate) => {
        return mutate(key, data, shouldRevalidate);
    }, [key]);
    // start a revalidation
    const revalidate = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(async (revalidateOpts = {}) => {
        if (!key || !fn)
            return false;
        if (unmountedRef.current)
            return false;
        revalidateOpts = Object.assign({ dedupe: false }, revalidateOpts);
        let loading = true;
        let shouldDeduping = typeof _config__WEBPACK_IMPORTED_MODULE_1__["CONCURRENT_PROMISES"][key] !== 'undefined' && revalidateOpts.dedupe;
        // start fetching
        try {
            dispatch({
                isValidating: true
            });
            let newData;
            let startAt;
            if (shouldDeduping) {
                // there's already an ongoing request,
                // this one needs to be deduplicated.
                startAt = _config__WEBPACK_IMPORTED_MODULE_1__["CONCURRENT_PROMISES_TS"][key];
                newData = await _config__WEBPACK_IMPORTED_MODULE_1__["CONCURRENT_PROMISES"][key];
            }
            else {
                // if not deduping the request (hard revalidate) but
                // there're other ongoing request(s) at the same time,
                // we need to ignore the other result(s) to avoid
                // possible race conditions:
                // req1------------------>res1
                //      req2-------->res2
                // in that case, the second response should not be overridden
                // by the first one.
                if (_config__WEBPACK_IMPORTED_MODULE_1__["CONCURRENT_PROMISES"][key]) {
                    // we can mark it as a mutation to ignore
                    // all requests which are fired before this one
                    _config__WEBPACK_IMPORTED_MODULE_1__["MUTATION_TS"][key] = Date.now() - 1;
                }
                // if no cache being rendered currently (it shows a blank page),
                // we trigger the loading slow event.
                if (config.loadingTimeout && !_config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(key)) {
                    setTimeout(() => {
                        if (loading)
                            config.onLoadingSlow(key, config);
                    }, config.loadingTimeout);
                }
                if (fnArgs !== null) {
                    _config__WEBPACK_IMPORTED_MODULE_1__["CONCURRENT_PROMISES"][key] = fn(...fnArgs);
                }
                else {
                    _config__WEBPACK_IMPORTED_MODULE_1__["CONCURRENT_PROMISES"][key] = fn(key);
                }
                _config__WEBPACK_IMPORTED_MODULE_1__["CONCURRENT_PROMISES_TS"][key] = startAt = Date.now();
                newData = await _config__WEBPACK_IMPORTED_MODULE_1__["CONCURRENT_PROMISES"][key];
                setTimeout(() => {
                    delete _config__WEBPACK_IMPORTED_MODULE_1__["CONCURRENT_PROMISES"][key];
                    delete _config__WEBPACK_IMPORTED_MODULE_1__["CONCURRENT_PROMISES_TS"][key];
                }, config.dedupingInterval);
                // trigger the success event,
                // only do this for the original request.
                config.onSuccess(newData, key, config);
            }
            // if the revalidation happened earlier than the local mutation,
            // we have to ignore the result because it could override.
            // meanwhile, a new revalidation should be triggered by the mutation.
            if (_config__WEBPACK_IMPORTED_MODULE_1__["MUTATION_TS"][key] && startAt <= _config__WEBPACK_IMPORTED_MODULE_1__["MUTATION_TS"][key]) {
                dispatch({ isValidating: false });
                return false;
            }
            _config__WEBPACK_IMPORTED_MODULE_1__["cache"].set(key, newData, false);
            _config__WEBPACK_IMPORTED_MODULE_1__["cache"].set(keyErr, undefined, false);
            // new state for the reducer
            const newState = {
                isValidating: false
            };
            if (typeof stateRef.current.error !== 'undefined') {
                // we don't have an error
                newState.error = undefined;
            }
            if (config.compare(stateRef.current.data, newData)) {
                // deep compare to avoid extra re-render
                // do nothing
            }
            else {
                // data changed
                newState.data = newData;
            }
            // merge the new state
            dispatch(newState);
            if (!shouldDeduping) {
                // also update other hooks
                broadcastState(key, newData, undefined);
            }
        }
        catch (err) {
            delete _config__WEBPACK_IMPORTED_MODULE_1__["CONCURRENT_PROMISES"][key];
            delete _config__WEBPACK_IMPORTED_MODULE_1__["CONCURRENT_PROMISES_TS"][key];
            _config__WEBPACK_IMPORTED_MODULE_1__["cache"].set(keyErr, err, false);
            // get a new error
            // don't use deep equal for errors
            if (stateRef.current.error !== err) {
                // we keep the stale data
                dispatch({
                    isValidating: false,
                    error: err
                });
                if (!shouldDeduping) {
                    // also broadcast to update other hooks
                    broadcastState(key, undefined, err);
                }
            }
            // events and retry
            config.onError(err, key, config);
            if (config.shouldRetryOnError) {
                // when retrying, we always enable deduping
                const retryCount = (revalidateOpts.retryCount || 0) + 1;
                config.onErrorRetry(err, key, config, revalidate, Object.assign({ dedupe: true }, revalidateOpts, { retryCount }));
            }
        }
        loading = false;
        return true;
    }, [key]);
    // mounted (client side rendering)
    useIsomorphicLayoutEffect(() => {
        if (!key)
            return undefined;
        // after `key` updates, we need to mark it as mounted
        unmountedRef.current = false;
        // after the component is mounted (hydrated),
        // we need to update the data from the cache
        // and trigger a revalidation
        const currentHookData = stateRef.current.data;
        const latestKeyedData = _config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(key) || config.initialData;
        // update the state if the key changed (not the inital render) or cache updated
        if (keyRef.current !== key ||
            !config.compare(currentHookData, latestKeyedData)) {
            dispatch({ data: latestKeyedData });
            keyRef.current = key;
        }
        // revalidate with deduping
        const softRevalidate = () => revalidate({ dedupe: true });
        // trigger a revalidation
        if (!config.initialData) {
            if (typeof latestKeyedData !== 'undefined' &&
                !IS_SERVER &&
                window['requestIdleCallback']) {
                // delay revalidate if there's cache
                // to not block the rendering
                window['requestIdleCallback'](softRevalidate);
            }
            else {
                softRevalidate();
            }
        }
        // whenever the window gets focused, revalidate
        let onFocus;
        if (config.revalidateOnFocus) {
            // throttle: avoid being called twice from both listeners
            // and tabs being switched quickly
            onFocus = Object(_libs_throttle__WEBPACK_IMPORTED_MODULE_4__["default"])(softRevalidate, config.focusThrottleInterval);
            if (!_config__WEBPACK_IMPORTED_MODULE_1__["FOCUS_REVALIDATORS"][key]) {
                _config__WEBPACK_IMPORTED_MODULE_1__["FOCUS_REVALIDATORS"][key] = [onFocus];
            }
            else {
                _config__WEBPACK_IMPORTED_MODULE_1__["FOCUS_REVALIDATORS"][key].push(onFocus);
            }
        }
        // register global cache update listener
        const onUpdate = (shouldRevalidate = true, updatedData, updatedError, dedupe = true) => {
            // update hook state
            const newState = {};
            let needUpdate = false;
            if (typeof updatedData !== 'undefined' &&
                !config.compare(stateRef.current.data, updatedData)) {
                newState.data = updatedData;
                needUpdate = true;
            }
            // always update error
            // because it can be `undefined`
            if (stateRef.current.error !== updatedError) {
                newState.error = updatedError;
                needUpdate = true;
            }
            if (needUpdate) {
                dispatch(newState);
            }
            if (shouldRevalidate) {
                if (dedupe) {
                    return softRevalidate();
                }
                else {
                    return revalidate();
                }
            }
            return false;
        };
        // add updater to listeners
        if (!_config__WEBPACK_IMPORTED_MODULE_1__["CACHE_REVALIDATORS"][key]) {
            _config__WEBPACK_IMPORTED_MODULE_1__["CACHE_REVALIDATORS"][key] = [onUpdate];
        }
        else {
            _config__WEBPACK_IMPORTED_MODULE_1__["CACHE_REVALIDATORS"][key].push(onUpdate);
        }
        // set up reconnecting when the browser regains network connection
        let reconnect = null;
        if (!IS_SERVER && window.addEventListener && config.revalidateOnReconnect) {
            window.addEventListener('online', (reconnect = softRevalidate));
        }
        return () => {
            // cleanup
            dispatch = () => null;
            // mark it as unmounted
            unmountedRef.current = true;
            if (onFocus && _config__WEBPACK_IMPORTED_MODULE_1__["FOCUS_REVALIDATORS"][key]) {
                const revalidators = _config__WEBPACK_IMPORTED_MODULE_1__["FOCUS_REVALIDATORS"][key];
                const index = revalidators.indexOf(onFocus);
                if (index >= 0) {
                    // 10x faster than splice
                    // https://jsperf.com/array-remove-by-index
                    revalidators[index] = revalidators[revalidators.length - 1];
                    revalidators.pop();
                }
            }
            if (_config__WEBPACK_IMPORTED_MODULE_1__["CACHE_REVALIDATORS"][key]) {
                const revalidators = _config__WEBPACK_IMPORTED_MODULE_1__["CACHE_REVALIDATORS"][key];
                const index = revalidators.indexOf(onUpdate);
                if (index >= 0) {
                    revalidators[index] = revalidators[revalidators.length - 1];
                    revalidators.pop();
                }
            }
            if (!IS_SERVER && window.removeEventListener && reconnect !== null) {
                window.removeEventListener('online', reconnect);
            }
        };
    }, [key, revalidate]);
    // set up polling
    useIsomorphicLayoutEffect(() => {
        let timer = null;
        const tick = async () => {
            if (!stateRef.current.error &&
                (config.refreshWhenHidden || Object(_libs_is_document_visible__WEBPACK_IMPORTED_MODULE_2__["default"])()) &&
                (config.refreshWhenOffline || Object(_libs_is_online__WEBPACK_IMPORTED_MODULE_3__["default"])())) {
                // only revalidate when the page is visible
                // if API request errored, we stop polling in this round
                // and let the error retry function handle it
                await revalidate({ dedupe: true });
            }
            if (config.refreshInterval) {
                timer = setTimeout(tick, config.refreshInterval);
            }
        };
        if (config.refreshInterval) {
            timer = setTimeout(tick, config.refreshInterval);
        }
        return () => {
            if (timer)
                clearTimeout(timer);
        };
    }, [
        config.refreshInterval,
        config.refreshWhenHidden,
        config.refreshWhenOffline,
        revalidate
    ]);
    // suspense
    if (config.suspense) {
        if (IS_SERVER)
            throw new Error('Suspense on server side is not yet supported!');
        // in suspense mode, we can't return empty state
        // (it should be suspended)
        // try to get data and error from cache
        let latestData = _config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(key);
        let latestError = _config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(keyErr);
        if (typeof latestData === 'undefined' &&
            typeof latestError === 'undefined') {
            // need to start the request if it hasn't
            if (!_config__WEBPACK_IMPORTED_MODULE_1__["CONCURRENT_PROMISES"][key]) {
                // trigger revalidate immediately
                // to get the promise
                revalidate();
            }
            if (_config__WEBPACK_IMPORTED_MODULE_1__["CONCURRENT_PROMISES"][key] &&
                typeof _config__WEBPACK_IMPORTED_MODULE_1__["CONCURRENT_PROMISES"][key].then === 'function') {
                // if it is a promise
                throw _config__WEBPACK_IMPORTED_MODULE_1__["CONCURRENT_PROMISES"][key];
            }
            // it's a value, return it directly (override)
            latestData = _config__WEBPACK_IMPORTED_MODULE_1__["CONCURRENT_PROMISES"][key];
        }
        if (typeof latestData === 'undefined' && latestError) {
            // in suspense mode, throw error if there's no content
            throw latestError;
        }
        // return the latest data / error from cache
        // in case `key` has changed
        return {
            error: latestError,
            data: latestData,
            revalidate,
            mutate: boundMutate,
            isValidating: stateRef.current.isValidating
        };
    }
    // define returned state
    // can be memorized since the state is a ref
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => {
        const state = { revalidate, mutate: boundMutate };
        Object.defineProperties(state, {
            error: {
                // `key` might be changed in the upcoming hook re-render,
                // but the previous state will stay
                // so we need to match the latest key and data (fallback to `initialData`)
                get: function () {
                    stateDependencies.current.error = true;
                    return stateRef.current.error;
                }
            },
            data: {
                get: function () {
                    stateDependencies.current.data = true;
                    return stateRef.current.data;
                }
            },
            isValidating: {
                get: function () {
                    stateDependencies.current.isValidating = true;
                    return stateRef.current.isValidating;
                }
            }
        });
        return state;
    }, [revalidate]);
}
const SWRConfig = _swr_config_context__WEBPACK_IMPORTED_MODULE_5__["default"].Provider;

/* harmony default export */ __webpack_exports__["default"] = (useSWR);


/***/ }),

/***/ "./node_modules/swr/node_modules/fast-deep-equal/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/swr/node_modules/fast-deep-equal/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isArray = Array.isArray;
var keyList = Object.keys;
var hasProp = Object.prototype.hasOwnProperty;

module.exports = function equal(a, b) {
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    var arrA = isArray(a)
      , arrB = isArray(b)
      , i
      , length
      , key;

    if (arrA && arrB) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }

    if (arrA != arrB) return false;

    var dateA = a instanceof Date
      , dateB = b instanceof Date;
    if (dateA != dateB) return false;
    if (dateA && dateB) return a.getTime() == b.getTime();

    var regexpA = a instanceof RegExp
      , regexpB = b instanceof RegExp;
    if (regexpA != regexpB) return false;
    if (regexpA && regexpB) return a.toString() == b.toString();

    var keys = keyList(a);
    length = keys.length;

    if (length !== keyList(b).length)
      return false;

    for (i = length; i-- !== 0;)
      if (!hasProp.call(b, keys[i])) return false;

    for (i = length; i-- !== 0;) {
      key = keys[i];
      if (!equal(a[key], b[key])) return false;
    }

    return true;
  }

  return a!==a && b!==b;
};


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/swoleengineer/projects/learn-next/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function fetcher(url) {
  return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()(url).then(function (r) {
    return r.json();
  });
}

function Index() {
  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_2__["default"])('/api/randomQuote', fetcher),
      data = _useSWR.data,
      error = _useSWR.error; // The following line has optional chaining, added in Next.js v9.1.5,
  // is the same as `data && data.author`


  var author = data === null || data === void 0 ? void 0 : data.author;
  var quote = data === null || data === void 0 ? void 0 : data.quote;
  if (!data) quote = 'Loading...';
  if (error) quote = 'Failed to fetch the quote.';
  return __jsx("main", {
    className: "jsx-1236022937" + " " + "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-1236022937" + " " + "quote",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, quote), author && __jsx("span", {
    className: "jsx-1236022937" + " " + "author",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 18
    }
  }, "- ", author), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1236022937",
    __self: this
  }, "main.jsx-1236022937{width:90%;max-width:900px;margin:300px auto;text-align:center;}.quote.jsx-1236022937{font-family:cursive;color:#e243de;font-size:24px;padding-bottom:10px;}.author.jsx-1236022937{font-family:sans-serif;color:#559834;font-size:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zd29sZWVuZ2luZWVyL3Byb2plY3RzL2xlYXJuLW5leHQvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUJrQixBQUdxQixBQU1VLEFBTUcsVUFYUCxVQU1GLEdBTUEsR0FYSSxRQU1ILEdBTUEsT0FYRyxLQU1FLEdBTXRCLFVBWEEsT0FNQSIsImZpbGUiOiIvVXNlcnMvc3dvbGVlbmdpbmVlci9wcm9qZWN0cy9sZWFybi1uZXh0L3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InO1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5mdW5jdGlvbiBmZXRjaGVyKHVybCkge1xuICByZXR1cm4gZmV0Y2godXJsKS50aGVuKHIgPT4gci5qc29uKCkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKCcvYXBpL3JhbmRvbVF1b3RlJywgZmV0Y2hlcik7XG4gIC8vIFRoZSBmb2xsb3dpbmcgbGluZSBoYXMgb3B0aW9uYWwgY2hhaW5pbmcsIGFkZGVkIGluIE5leHQuanMgdjkuMS41LFxuICAvLyBpcyB0aGUgc2FtZSBhcyBgZGF0YSAmJiBkYXRhLmF1dGhvcmBcbiAgY29uc3QgYXV0aG9yID0gZGF0YT8uYXV0aG9yO1xuICBsZXQgcXVvdGUgPSBkYXRhPy5xdW90ZTtcblxuICBpZiAoIWRhdGEpIHF1b3RlID0gJ0xvYWRpbmcuLi4nO1xuICBpZiAoZXJyb3IpIHF1b3RlID0gJ0ZhaWxlZCB0byBmZXRjaCB0aGUgcXVvdGUuJztcblxuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT1cImNlbnRlclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJxdW90ZVwiPntxdW90ZX08L2Rpdj5cbiAgICAgIHthdXRob3IgJiYgPHNwYW4gY2xhc3NOYW1lPVwiYXV0aG9yXCI+LSB7YXV0aG9yfTwvc3Bhbj59XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgbWFpbiB7XG4gICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICBtYXgtd2lkdGg6IDkwMHB4O1xuICAgICAgICAgIG1hcmdpbjogMzAwcHggYXV0bztcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLnF1b3RlIHtcbiAgICAgICAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcbiAgICAgICAgICBjb2xvcjogI2UyNDNkZTtcbiAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmF1dGhvciB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgICAgICAgY29sb3I6ICM1NTk4MzQ7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9tYWluPlxuICApO1xufVxuIl19 */\n/*@ sourceURL=/Users/swoleengineer/projects/learn-next/pages/index.js */"));
}

/***/ }),

/***/ 1:
/*!************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F&absolutePagePath=%2FUsers%2Fswoleengineer%2Fprojects%2Flearn-next%2Fpages%2Findex.js ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F&absolutePagePath=%2FUsers%2Fswoleengineer%2Fprojects%2Flearn-next%2Fpages%2Findex.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Fswoleengineer%2Fprojects%2Flearn-next%2Fpages%2Findex.js!./");


/***/ }),

/***/ "dll-reference dll_c2e10d183b950a67d9e7":
/*!*******************************************!*\
  !*** external "dll_c2e10d183b950a67d9e7" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_c2e10d183b950a67d9e7;

/***/ })

},[[1,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=index.js.map