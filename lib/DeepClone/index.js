'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ArrayUtil = require('../ArrayUtil');

var _ArrayUtil2 = _interopRequireDefault(_ArrayUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DeepClone = function () {
  function DeepClone() {
    _classCallCheck(this, DeepClone);
  }

  _createClass(DeepClone, null, [{
    key: 'deepClone',

    // 深度克隆
    value: function deepClone(obj) {
      if (obj === null || (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object') return obj;

      var ret = new obj.constructor();

      if (_ArrayUtil2.default.isArray(obj)) {
        ret = [];
        for (var i = 0, l = obj.length; i < l; i++) {
          ret[i] = DeepClone.deepClone(obj[i]);
        }
      } else {

        if (obj instanceof Date) {
          return new Date(obj.valueOf());
        }

        if (obj instanceof RegExp) {
          var pattern = obj.valueOf();
          var flags = '';
          flags += pattern.global ? 'g' : ''; // 全局匹配
          flags += pattern.ignoreCase ? 'i' : ''; // 忽略大小写
          flags += pattern.multiline ? 'm' : ''; // 允许多行匹配

          return new RegExp(pattern.source, flags);
        }

        if (obj instanceof Function) {
          // 函数的话直接指向相对的内存地址
          return obj;
        }

        for (var attr in obj) {
          if (Object.hasOwnProperty.call(obj, attr)) {
            ret[attr] = DeepClone.deepClone(obj[attr]);
          }
        }
      }
      return ret;
    }
  }]);

  return DeepClone;
}();

exports.default = DeepClone;
module.exports = exports['default'];