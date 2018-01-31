let CompareUtil = require('../src/CompareUtil');
let expect = require('chai').expect;
// const assert = require('assert');
// console.log(DateUtil)

describe('compare2Objects函数:比较两个对象是否相等，相等则返回[]', function() {

    it('{a:1, B:2}和{a:1, B:2}是相等的,返回[]', function() {
      let obj1 = {a:1, B:2};
      let obj2 = {a:1, B:2};
      expect(CompareUtil.compare2Objects(obj1, obj2)).to.be.deep.equal([]);
    });

    it('{a:1, B:2}和{a:1}是不相等的,返回[B]', function() {
      let obj1 = {a:1};
      let obj2 = {a:1, B:2};
      expect(CompareUtil.compare2Objects(obj1, obj2)).to.be.deep.equal(['B']);
    });

    it('{a:1, B:2}和{a:1}是不相等的,添加去重数组,返回[]', function() {
      let obj1 = {a:1};
      let obj2 = {a:1, B:2};
      let disArr = ["B"];
      expect(CompareUtil.compare2Objects(obj1, obj2, disArr)).to.be.deep.equal([]);
    });

    it('obj1和obj2是不相等的,返回不同的最外层的属性名,去掉disArr中重名的值,返回["key4"]', function() {
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
      const obj2 = {
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
      const disArr = ["key3"];
      expect(CompareUtil.compare2Objects(obj1, obj2, disArr)).to.be.deep.equal(["key4"]);
    });

});
