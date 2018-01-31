"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RegularUtil = function () {
  function RegularUtil() {
    _classCallCheck(this, RegularUtil);
  }

  _createClass(RegularUtil, null, [{
    key: "regPhone",

    /*
    * 手机号验证
    */
    value: function regPhone(phone) {
      var exp = /^1[3-8][0-9]{9}$/;
      return exp.test(phone);
    }

    /*
    * 身份证号验证
    */

  }, {
    key: "regIdCard",
    value: function regIdCard(idCard) {
      var exp = /^[1-9]{1}[0-9]{14}$|^[1-9]{1}[0-9]{16}([0-9]|[xX])$/;
      return exp.test(idCard);
    }

    /*
    * 正数验证
    */

  }, {
    key: "regNumber",
    value: function regNumber(number) {
      var exp = /^\d+$/;
      return exp.test(number);
    }

    /*
    * 字母+数字（数字加字母）
    */

  }, {
    key: "regNumWord",
    value: function regNumWord(number) {
      var exp = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]*$/;
      return exp.test(number);
    }

    /*
    * 自己输入正则表达式和需要验证的值
    */

  }, {
    key: "pattern",
    value: function pattern(_pattern, value) {
      return _pattern.test(value);
    }
  }]);

  return RegularUtil;
}();

exports.default = RegularUtil;
module.exports = exports["default"];