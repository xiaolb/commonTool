"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ObjectUtil = function () {
  function ObjectUtil() {
    _classCallCheck(this, ObjectUtil);
  }

  _createClass(ObjectUtil, null, [{
    key: "isEmptyObject",


    // 判断是否为空对象
    value: function isEmptyObject(options) {
      return options !== null && Object.keys(options).length === 0;
    }

    /** 克隆对象除了某一个属性值。
     *  是的话返回true,否则返回false.
     *  [ eg below:
     *           var obj = {"name":"xiaolb","sex":{aa:22},"age":"secret"};
     *           var paramName = "name";
     *           call: ObjectUtil.cloneObjExceptParam(obj,paramName);
     *           output: {"sex":{aa:22},"age":"secret"};
     * @param    {[type]}                     object [description]
     * @param    {[type]}                     String [description]
     * @return   {[type]}                     Object [description]
     */

  }, {
    key: "cloneObjExceptParam",
    value: function cloneObjExceptParam(obj, paramName) {
      var newObj = {};
      for (var key in obj) {
        if (key != paramName) newObj[key] = obj[key];
      }
      return newObj;
    }
  }]);

  return ObjectUtil;
}();

exports.default = ObjectUtil;
module.exports = exports["default"];