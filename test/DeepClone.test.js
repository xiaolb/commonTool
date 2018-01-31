let DeepClone = require('../src/DeepClone');
let expect = require('chai').expect;
describe('deepClone函数:输入一个变量，进行深度克隆。', function() {

  it('输入：null,输出:null', function() {
    expect(DeepClone.deepClone(null)).to.be.equal(null);
  });

  it('输入：22,输出:22', function() {
    expect(DeepClone.deepClone(22)).to.be.equal(22);
  });

  it('输入："xiaolb",输出:"xiaolb"', function() {
    expect(DeepClone.deepClone("xiaolb")).to.be.equal("xiaolb");
  });

  it('输入：[1,2],输出:[1,2]', function() {
    expect(DeepClone.deepClone([1,2])).to.be.deep.equal([1,2]);
  });

  it('输入：{0:"a",1:"b",2:"c"},输出:{0:"a",1:"b",2:"c"}', function() {
    expect(DeepClone.deepClone({0:"a",1:"b",2:"c"})).to.be.deep.equal({0:"a",1:"b",2:"c"});
  });

  it('输入：obj1,输出:obj2', function() {
    const obj1 = {
      'key1': 1,
      'key3':{
        'key31': 1,
        'key32': {
          'key321': 'sss',
        }
      },
    };
    const obj2 = {
      'key1': 1,
      'key3':{
        'key31': 1,
        'key32': {
          'key321': 'sss',
        }
      },
    };
    expect(DeepClone.deepClone(obj1)).to.be.deep.equal(obj2);
  });
  
  it('输入：function(){},输出:function(){}', function() {
    expect(DeepClone.deepClone(function(){})).to.be.an('Function');
  });

});