'use strict';

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
        key: 'randomInteger',

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

        /**
         * 四则运算扩展，解决浮点运算精度问题
         */
        // 获取小数位数

    }, {
        key: 'getFloatLen',
        value: function getFloatLen(n) {
            var ret = 0;
            try {
                ret = n.toString().split('.')[1].length;
            } catch (e) {
                ret = 0;
            }
            return ret;
        }

        // 加

    }, {
        key: 'add',
        value: function add(arg1, arg2) {
            var r1 = MathUtil.getFloatLen(arg1);
            var r2 = MathUtil.getFloatLen(arg2);
            var n = Math.max(r1, r2);
            var m = Math.pow(10, n);
            var v1 = MathUtil.MathUtil.multiply(arg1, m);
            var v2 = MathUtil.MathUtil.multiply(arg2, m);
            return (v1 + v2) / m;
        }

        // 减

    }, {
        key: 'subtract',
        value: function subtract(arg1, arg2) {
            var r1 = MathUtil.getFloatLen(arg1);
            var r2 = MathUtil.getFloatLen(arg2);
            var n = Math.max(r1, r2);
            var m = Math.pow(10, n);
            var v1 = MathUtil.MathUtil.multiply(arg1, m);
            var v2 = MathUtil.MathUtil.multiply(arg2, m);
            var value = (v1 - v2) / m;
            return Number(value.toFixed(n));
        }

        // 乘

    }, {
        key: 'multiply',
        value: function multiply(arg1, arg2) {
            var r1 = MathUtil.getFloatLen(arg1);
            var r2 = MathUtil.getFloatLen(arg2);
            var s1 = Number(arg1.toString().replace('.', ''));
            var s2 = Number(arg2.toString().replace('.', ''));
            return s1 * s2 / Math.pow(10, r1 + r2);
        }

        // 除

    }, {
        key: 'divide',
        value: function divide(arg1, arg2) {
            var r1 = MathUtil.getFloatLen(arg1);
            var r2 = MathUtil.getFloatLen(arg2);
            var s1 = Number(arg1.toString().replace('.', ''));
            var s2 = Number(arg2.toString().replace('.', ''));
            return s1 / s2 * Math.pow(10, r2 - r1);
        }
    }]);

    return MathUtil;
}();

exports.default = MathUtil;
module.exports = exports['default'];