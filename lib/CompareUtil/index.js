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

var CompareUtil = function () {
  function CompareUtil() {
    _classCallCheck(this, CompareUtil);
  }

  _createClass(CompareUtil, null, [{
    key: 'compare2Objects',

    /**
     * [compare2Objects eg below:
     *           input: 
                  const obj1 = {
                    'key1': 1,
                    'key2': function(){ console.log(1) },
                    'key3':{
                      'key31': 1,
                      'key32': {
                        'key321': 'sss',
                      }
                    },
                    'key4': [1,2,3,3],
                  };
     *            const obj2 = {
                    'key1': 1,
                    'key2': function(){ console.log(4) },
                    'key3':{
                      'key31': 1,
                      'key32': {
                        'key321': 'ssss',
                      }
                    },
                    'key4': [1,2,3,4],
                  }
     *           call: CompareUtil.compare2Objects(obj1, obj2, ['key4']);
     *           output: ['key3']
     *           
     * @param    {[type]}                     Object [description]
                 {[type]}                     Object [description]
                 {[type]}                     array [description]
     * @return   {[type]}                     array [description]
     */
    // 判断两个对象是否相等,不相等则返回数组(不相等的键值名)
    value: function compare2Objects(x, y) {
      var arr1 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

      // 定义变量，将对象中不同的值进行返回
      var diffArr = [];

      // 判断两个值是不是对象
      if (!(x instanceof Object && y instanceof Object)) {
        return '这两个值至少有一个不是对象';
      }

      // 判断两个对象的键值名是否相等
      var xkeys = Object.keys(x);
      var ykeys = Object.keys(y);
      for (var i = 0; i < xkeys.length; i += 1) {
        var value = xkeys[i];
        if (y.hasOwnProperty(value) !== x.hasOwnProperty(value)) {
          diffArr.push(value);
        } else if (_typeof(y[value]) !== _typeof(x[value])) {
          diffArr.push(value);
        }
      }

      for (var _i = 0; _i < ykeys.length; _i += 1) {
        var _value = ykeys[_i];
        if (y.hasOwnProperty(_value) !== x.hasOwnProperty(_value)) {
          diffArr.push(_value);
        } else if (_typeof(y[_value]) !== _typeof(x[_value])) {
          diffArr.push(_value);
        } else {
          // 进行深度遍历对比
          switch (_typeof(x[_value])) {
            case 'object':
            case 'function':
              var deepArr = CompareUtil.compare2Objects(x[_value], y[_value], arr1);

              if (deepArr instanceof Array && deepArr.length !== 0) {
                diffArr.push(_value);
                break;
              }
              break;
            default:
              if (x[_value] !== y[_value]) {
                diffArr.push(_value);
              }
              break;
          }
        }
      }
      return _ArrayUtil2.default.dislodge(diffArr, arr1);
    }
  }]);

  return CompareUtil;
}();

exports.default = CompareUtil;
module.exports = exports['default'];