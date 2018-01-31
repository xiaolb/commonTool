"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MathUtil = function () {
  function MathUtil() {
    _classCallCheck(this, MathUtil);
  }

  _createClass(MathUtil, null, [{
    key: "randomInteger",


    // 生成随机数组，整数在 start 和 end 之间
    value: function randomInteger(start, end) {
      var num = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

      var returnArr = [];
      for (var i = 0; i < num; i += 1) {
        var number = Math.round(Math.random() * (end - start) + start);
        returnArr.push(number);
      }

      return returnArr;
    }
  }]);

  return MathUtil;
}();

exports.default = MathUtil;
module.exports = exports["default"];