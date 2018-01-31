'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DateUtil = function () {
  function DateUtil() {
    _classCallCheck(this, DateUtil);
  }

  _createClass(DateUtil, null, [{
    key: 'formatDate',

    /**
    * [formatDate 通过剩余秒数返回你想要的格式化的时间]
    * @value  {[type]} 时间戳 [description]
    * @format  {[type]} 你想要的时间格式，不写默认 yyyy-MM-dd HH:mm:ss [description]
    * @return {[type]}               [description]
    */
    value: function formatDate(value, format) {
      var maps = {
        'yyyy': function yyyy(d) {
          return d.getFullYear();
        },
        'MM': function MM(d) {
          return fix(d.getMonth() + 1);
        },
        'dd': function dd(d) {
          return fix(d.getDate());
        },
        'HH': function HH(d) {
          return fix(d.getHours());
        },
        'mm': function mm(d) {
          return fix(d.getMinutes());
        },
        'ss': function ss(d) {
          return fix(d.getSeconds());
        }
      };

      var chunk = new RegExp(Object.keys(maps).join('|'), 'g');

      function fix(d) {
        d = "" + d;
        if (d.length <= 1) {
          d = '0' + d;
        }
        return d;
      }

      function formatDateInside(value, format) {
        format = format || 'yyyy-MM-dd HH:mm:ss';
        value = new Date(value);
        return format.replace(chunk, function (capture) {
          return maps[capture] ? maps[capture](value) : '';
        });
      }

      return formatDateInside(value, format);
    }
  }]);

  return DateUtil;
}();

exports.default = DateUtil;
module.exports = exports['default'];