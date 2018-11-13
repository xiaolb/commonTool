"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ThrottleUtil = function () {
	function ThrottleUtil() {
		_classCallCheck(this, ThrottleUtil);
	}

	_createClass(ThrottleUtil, null, [{
		key: "debounce",

		/**
      * [实现防抖函数]
      * @Author   mapleLeaf
      * @DateTime 2016-10-30T23:20:01+0800
      * @param    {[type]}                     func      [description]
      * @param    {[type]}                     wait      [description]
      * @param    {[type]}                     immediate [description]
      */
		value: function debounce(func, wait, immediate) {
			var timeout = void 0;

			return function () {
				var context = this;
				var args = arguments;
				if (timeout) {
					// 清除的只是定时器，本身timeout的值没有清除掉
					clearTimeout(timeout);
				}
				if (immediate) {
					var callNow = !timeout;

					timeout = setTimeout(function () {
						timeout = null;
					}, wait);

					if (callNow) {
						func.apply(context, args);
					}
				} else {
					timeout = setTimeout(function () {
						func.apply(context, args);
					}, wait);
				}
			};
		}

		/**
      * [实现节流函数]
      * @Author   mapleLeaf
      * @DateTime 2016-10-30T23:20:01+0800
      * @param    {[type]}                     func      [description]
      * @param    {[type]}                     wait      [description]
      */

	}, {
		key: "throttle",
		value: function throttle(func, wait) {
			var context = void 0,
			    args = void 0;
			var timeout = void 0;
			var previous = 0;

			var later = function later() {
				previous = +new Date();
				timeout = null;
				func.apply(context, args);
			};

			return function () {
				var now = +new Date();
				var remaining = wait - (now - previous);
				context = this;
				args = arguments;
				if (remaining <= 0) {
					if (timeout) {
						clearTimeout(timeout);
						timeout = null;
					}
					previous = now;
					func.apply(context, args);
				} else if (!timeout) {
					timeout = setTimeout(later, remaining);
				}
			};
		}
	}]);

	return ThrottleUtil;
}();

exports.default = ThrottleUtil;
module.exports = exports["default"];