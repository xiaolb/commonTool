'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ArrayUtil = function () {
  function ArrayUtil() {
    _classCallCheck(this, ArrayUtil);
  }

  _createClass(ArrayUtil, null, [{
    key: 'flatten',

    /**
     * [flatten Flatten an array, eg below:
     *           input: var array = [[1, 2, 3], [4, 5, 6], 7, [8]]
     *           call: Util.flatten(array);
     *           output: [1, 2, 3, 4, 5, 6, 7, 8]
     *           
     * @Author   JohnNong
     * @Email    overkazaf@gmail.com
     * @Github   https://github.com/overkazaf
     * @DateTime 2016-11-02T16:47:20+0800
     * @param    {[type]}                     array [description]
     * @return   {[type]}                           [description]
     */
    value: function flatten(array) {
      var ret = [];

      array.forEach(function (item) {
        if (ArrayUtil.isArray(item)) {
          ret = ret.concat(ArrayUtil.flatten(item));
        } else {
          ret.push(item);
        }
      });

      return ret;
    }

    // 判断一个对象是不是数组，是的话返回true,否则返回false

  }, {
    key: 'isArray',
    value: function isArray(obj) {
      if (typeof Array.isArray == 'function') {
        return Array.isArray(obj);
      } else {
        return Object.prototype.toString.call(obj) === '[object Array]';
      }
    }

    /**
     * [dislodge eg below:
     *           input: var array1 = [1,2,3,5,67,8];
     *           var array2 = [1,3,5,7,9];
     *           call: ArrayUtil.dislodge(array);
     *           output: [2,67,8]
     *           
     * @Author   JohnNong
     * @Email    overkazaf@gmail.com
     * @Github   https://github.com/overkazaf
     * @DateTime 2016-11-02T16:47:20+0800
     * @param    {[type]}                     array [description]
     * @return   {[type]}                     array [description]
     */

  }, {
    key: 'dislodge',
    value: function dislodge(arr1, arr2) {
      // 首先将数组先去重
      var newSet = new Set(arr1);
      var arrtemp = [].concat(_toConsumableArray(newSet));
      // 将于arr2中的值去掉
      for (var i = 0, len = arr2.length; i < len; i++) {
        var index = arrtemp.indexOf(arr2[i]);
        if (index >= 0) {
          arrtemp.splice(index, 1);
        }
      }
      return arrtemp;
    }

    // 将两个数组合并，如第二个数组和第一个数组有重复的值，则去重之后合并

  }, {
    key: 'merge',
    value: function merge(arr1, arr2) {
      var newSet = new Set(arr1);
      for (var j = 0, len2 = arr2.length; j < len2; j++) {
        newSet.add(arr2[j]);
      }
      return [].concat(_toConsumableArray(newSet));
    }

    /** 判断第一个数组的元素是不是包含第二个数组里边。
     *  是的话返回true,否则返回false.
     *  [ eg below:
     *           input: var array2 = [1,3,5];
     *           var array1 = [1,3,5,7,9];
     *           call: ArrayUtil.containAnother(array1,array2);
     *           output: true;
     *    eg below:
     *           input: var array1 = [1,2,3,5];
     *           var array2 = [1,3,5,7,9];
     *           call: ArrayUtil.containAnother(array1,array2);
     *           output: false;
     *  ]
     */

  }, {
    key: 'containAnother',
    value: function containAnother(arr1, arr2) {
      if (!arr1.length || !arr2.length) {
        return false;
      }
      var ret = true;
      for (var i = 0, len = arr2.length; i < len; i++) {
        if (arr1.indexOf(arr2[i]) === -1) {
          ret = false;
          break;
        }
      }
      return ret;
    }
  }]);

  return ArrayUtil;
}();

exports.default = ArrayUtil;
module.exports = exports['default'];