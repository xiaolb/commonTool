"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MoneyFormat = function () {
  function MoneyFormat() {
    _classCallCheck(this, MoneyFormat);
  }

  _createClass(MoneyFormat, null, [{
    key: "fMoney",

    /**
     * [fMoney   eg below:
     *           input: var money = 1234567.1235546, num = 3
     *           call: MoneyFormat.fMoney(money, num);
     *           output: 1,234,567.124
     *           
     * @param    {[type]}                     number [description]
     * @param    {[type]}                     number [description]
     * @return   {[type]}                           [description]
     */
    value: function fMoney(money, num) {
      num = num > 0 && num <= 20 ? num : 2;
      money = parseFloat((money + "").replace(/[^\d\.-]/g, "")).toFixed(num) + "";
      var left = money.split(".")[0].split("").reverse();
      var right = money.split(".")[1];
      var temp = "";
      for (var i = 0; i < left.length; i++) {
        temp += left[i] + ((i + 1) % 3 == 0 && i + 1 != left.length ? "," : "");
      }
      return temp.split("").reverse().join("") + "." + right;
    }

    /**
     * [fMoney   eg below:
     *           input: var money = 1,234,567.124;
     *           call: MoneyFormat.rMoney(money);
     *           output: 1234567.124
     *           
     * @param    {[type]}                     number [description]
     * @return   {[type]}                           [description]
     */

  }, {
    key: "rMoney",
    value: function rMoney(money) {
      return parseFloat((money + "").replace(/[^\d\.-]/g, ""));
    }
  }]);

  return MoneyFormat;
}();

exports.default = MoneyFormat;
module.exports = exports["default"];