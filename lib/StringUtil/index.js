'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// import Util from 'extend/common/util';

var StringUtil = function () {
    function StringUtil() {
        _classCallCheck(this, StringUtil);
    }

    _createClass(StringUtil, null, [{
        key: 'padZeroLeft',


        /**
         * [padZeroLeft Use '0' to pad with given string]
         * @Author   JohnNong
         * @Email    overkazaf@gmail.com
         * @Github   https://github.com/overkazaf
         * @DateTime 2016-10-30T23:20:01+0800
         * @param    {[type]}                     str [description]
         * @param    {[type]}                     len [description]
         * @return   {[type]}                         [description]
         */
        value: function padZeroLeft(str, len) {
            if (str === null) return str;
            if (typeof str !== 'string') {
                try {
                    str = String(str);
                } catch (e) {
                    throw e;
                }
            }

            if (str.length < len) {
                str = StringUtil.repeat('0', len - str.length) + str;
            }

            return str;
        }

        /**
         * [repeat 使用矩阵快速幂来处理字符串连接]
         * @Author   JohnNong
         * @Email    overkazaf@gmail.com
         * @Github   https://github.com/overkazaf
         * @DateTime 2016-10-30T23:18:45+0800
         * @param    {[type]}                     ch    [description]
         * @param    {[type]}                     times [description]
         * @return   {[type]}                           [description]
         */

    }, {
        key: 'repeat',
        value: function repeat(ch, times) {
            if (typeof ch !== 'string') throw new Error('Input must be a legal string');

            if (times <= 0) return '';

            if (times % 2 === 0) {
                return StringUtil.repeat(ch + ch, parseInt(times / 2, 10));
            } else {
                return ch + StringUtil.repeat(ch, times - 1);
            }
        }

        // 去除首尾的空格

    }, {
        key: 'trim',
        value: function trim(str) {
            return str.replace(/(^\s*)|(\s*$)/g, '');
        }

        /**
         * [OnlyInt 仅能输入数字]
         * @param {[type]} text [判断的字符串]
         * @param {[type]} text [数字要求长度]
         */

    }, {
        key: 'OnlyInt',
        value: function OnlyInt(text, len) {
            var rtn = text.replace(/[^0-9]/g, "");
            if (rtn.length > len) {
                rtn = rtn.substring(0, len);
            }
            return rtn;
        }

        // 获取浏览器路径？后边的name和value

    }, {
        key: 'parseQueryString',
        value: function parseQueryString(url) {
            var reg_url = /^[^\?]+\?([\w\W]+)$/,
                reg_para = /([^&=]+)=([\w\W]*?)(&|$)/g,
                //g is very important
            arr_url = reg_url.exec(url),
                ret = {};
            if (arr_url && arr_url[1]) {
                var str_para = arr_url[1],
                    result = void 0;
                while ((result = reg_para.exec(str_para)) != null) {
                    ret[result[1]] = result[2];
                }
            }

            var newRet = {};
            if (ret.state) {
                newRet = StringUtil.tempRedirectParam2Obj(ret.state);
            }

            for (var k in ret) {
                if (k != 'state') newRet[k] = ret[k];
            }

            return newRet;
        }
    }]);

    return StringUtil;
}();

exports.default = StringUtil;
module.exports = exports['default'];