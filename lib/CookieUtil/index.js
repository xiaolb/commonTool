"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CookieUtil = function () {
    function CookieUtil() {
        _classCallCheck(this, CookieUtil);
    }

    _createClass(CookieUtil, null, [{
        key: "getCookieVal",

        // cookie relative 
        // utility function called by getCookie()
        value: function getCookieVal(offset) {
            var endstr = document.cookie.indexOf(";", offset);
            if (endstr == -1) {
                endstr = document.cookie.length;
            }
            return unescape(document.cookie.substring(offset, endstr));
        }

        // primary function to retrieve cookie by name

    }, {
        key: "getCookie",
        value: function getCookie(name) {
            var arg = name + "=";
            var alen = arg.length;
            var clen = document.cookie.length;
            var i = 0;
            while (i < clen) {
                var j = i + alen;
                if (document.cookie.substring(i, j) == arg) {
                    return CookieUtil.getCookieVal(j);
                }
                i = document.cookie.indexOf(" ", i) + 1;
                if (i == 0) break;
            }
            return null;
        }

        // store cookie value with optional details as needed

    }, {
        key: "setCookie",
        value: function setCookie(name, value, expiresTemp, path, domain, secure) {
            var expires = new Date(expiresTemp).toUTCString().valueOf();
            document.cookie = name + "=" + escape(value) + (expires ? "; expires=" + expires : "") + (path ? "; path=" + path : "") + (domain ? "; domain=" + domain : "") + (secure ? "; secure" : "");
        }

        // remove the cookie by setting ancient expiration date

    }, {
        key: "deleteCookie",
        value: function deleteCookie(name, path, domain) {
            if (CookieUtil.getCookie(name)) {
                document.cookie = name + "=" + (path ? "; path=" + path : "") + (domain ? "; domain=" + domain : "") + "; expires=Thu, 01-Jan-1970 00:00:01 GMT";
            }
        }

        // 设置cookie 的过期时间

    }, {
        key: "getExpiresString",
        value: function getExpiresString(vEnd) {
            var sExpires = '';

            if (vEnd) {
                switch (vEnd.constructor) {
                    case Number:
                        sExpires = vEnd === Infinity ? '; expires=Fri, 31 Dec 9999 23:59:59 GMT' : '; max-age=' + vEnd;
                        break;
                    case String:
                        sExpires = '; expires=' + vEnd;
                        break;
                    case Date:
                        sExpires = '; expires=' + vEnd.toUTCString();
                        break;
                }
            }

            return sExpires;
        }
    }]);

    return CookieUtil;
}();

exports.default = CookieUtil;
module.exports = exports["default"];