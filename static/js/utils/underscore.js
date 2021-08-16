// Underscore.js 1.1.6
// (c) 2011 Jeremy Ashkenas, DocumentCloud Inc.
// Underscore is freely distributable under the MIT license.
// Portions of Underscore are inspired or borrowed from Prototype,
// Oliver Steele's Functional, and John Resig's Micro-Templating.
// For all details and documentation:
// http://documentcloud.github.com/underscore
(function() {
	if (!(typeof console == 'undefined')) {
		return;
	}
	window.console = {};
	console.info = console.debug = console.log = function() {
	};
})();
(function() {

	// Baseline setup
	// --------------

	// Establish the root object, `window` in the browser, or `global` on the server.
	var root = this;

	// Save the previous value of the `_` variable.
	var previousUnderscore = root._;

	// Establish the object that gets returned to break out of a loop iteration.
	var breaker = {};

	// Save bytes in the minified (but not gzipped) version:
	var ArrayProto = Array.prototype;

	// Create quick reference variables for speed access to core prototypes.
	var slice = ArrayProto.slice, unshift = ArrayProto.unshift;
	var nativeIndexOf = ArrayProto.indexOf;
	// Create a safe reference to the Underscore object for use below.
	var _ = function(obj) {
		return new wrapper(obj);
	};

	// Export the Underscore object for **CommonJS**, with backwards-compatibility
	// for the old `require()` API. If we're not in CommonJS, add `_` to the
	// global object.
	if (typeof module !== 'undefined' && module.exports) {
		module.exports = _;
		_._ = _;
	} else {
		// Exported as a string, for Closure Compiler "advanced" mode.
		root['_'] = _;
	}

	// Current version.
	_.VERSION = '1.1.6';
	_.sortedIndex = function(array, obj, iterator) {
		iterator || (iterator = _.identity);
		var low = 0, high = array.length;
		while (low < high) {
			var mid = (low + high) >> 1;
			iterator(array[mid]) < iterator(obj) ? low = mid + 1 : high = mid;
		}
		return low;
	};
	_.indexOf = function(array, item, isSorted) {
		if (array == null)
			return -1;
		var i, l;
		if (isSorted) {
			i = _.sortedIndex(array, item);
			return array[i] === item ? i : -1;
		}
		if (nativeIndexOf && array.indexOf === nativeIndexOf)
			return array.indexOf(item);
		for (i = 0, l = array.length; i < l; i++)
			if (array[i] === item)
				return i;
		return -1;
	};
	// Internal function used to implement `_.throttle` and `_.debounce`.
	var limit = function(func, wait, debounce) {
		var timeout;
		return function() {
			var context = this, args = arguments;
			var throttler = function() {
				timeout = null;
				func.apply(context, args);
			};
			if (debounce)
				clearTimeout(timeout);
			if (debounce || !timeout)
				timeout = setTimeout(throttler, wait);
		};
	};

	// Returns a function, that, when invoked, will only be triggered at most once
	// during a given window of time.
	_.throttle = function(func, wait) {
		return limit(func, wait, false);
	};

	// Returns a function, that, as long as it continues to be invoked, will not
	// be triggered. The function will be called after it stops being called for
	// N milliseconds.
	_.debounce = function(func, wait) {
		return limit(func, wait, true);
	};

	// Returns the first function passed as an argument to the second,
	// allowing you to adjust arguments, run code before and after, and
	// conditionally execute the original function.
	_.wrap = function(func, wrapper) {
		return function() {
			var args = [func].concat(slice.call(arguments));
			return wrapper.apply(this, args);
		};
	};

	// By default, Underscore uses ERB-style template delimiters, change the
	// following template settings to use alternative delimiters.
	_.templateSettings = {
		evaluate : /<%([\s\S]+?)%>/g,
		interpolate : /<%=([\s\S]+?)%>/g
	};

	// JavaScript micro-templating, similar to John Resig's implementation.
	// Underscore templating handles arbitrary delimiters, preserves whitespace,
	// and correctly escapes quotes within interpolated code.
	_.template = function(str, data) {
		var c = _.templateSettings;
		var tmpl = 'var __p=[],print=function(){__p.push.apply(__p,arguments);};' + 'with(obj||{}){__p.push(\''
				+ str.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(c.interpolate, function(match, code) {
					return "'," + code.replace(/\\'/g, "'") + ",'";
				}).replace(c.evaluate || null, function(match, code) {
					return "');" + code.replace(/\\'/g, "'").replace(/[\r\n\t]/g, ' ') + "__p.push('";
				}).replace(/\r/g, '\\r').replace(/\n/g, '\\n').replace(/\t/g, '\\t') + "');}return __p.join('');";
		var func = new Function('obj', tmpl);
		return data ? func(data) : func;
	};

	// If Underscore is called as a function, it returns a wrapped object that
	// can be used OO-style. This wrapper holds altered versions of all the
	// underscore functions. Wrapped objects may be chained.
	var wrapper = function(obj) {
		this._wrapped = obj;
	};

	// Expose `wrapper.prototype` as `_.prototype`
	_.prototype = wrapper.prototype;

	// Start chaining a wrapped Underscore object.
	wrapper.prototype.chain = function() {
		this._chain = true;
		return this;
	};

	// Extracts the result from a wrapped and chained object.
	wrapper.prototype.value = function() {
		return this._wrapped;
	};
})();
