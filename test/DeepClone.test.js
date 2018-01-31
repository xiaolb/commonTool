let DeepClone = require('../src/DeepClone');
let expect = require('chai').expect;
describe('deepClone����:����һ��������������ȿ�¡��', function() {

  it('���룺null,���:null', function() {
    expect(DeepClone.deepClone(null)).to.be.equal(null);
  });

  it('���룺22,���:22', function() {
    expect(DeepClone.deepClone(22)).to.be.equal(22);
  });

  it('���룺"xiaolb",���:"xiaolb"', function() {
    expect(DeepClone.deepClone("xiaolb")).to.be.equal("xiaolb");
  });

  it('���룺[1,2],���:[1,2]', function() {
    expect(DeepClone.deepClone([1,2])).to.be.deep.equal([1,2]);
  });

  it('���룺{0:"a",1:"b",2:"c"},���:{0:"a",1:"b",2:"c"}', function() {
    expect(DeepClone.deepClone({0:"a",1:"b",2:"c"})).to.be.deep.equal({0:"a",1:"b",2:"c"});
  });

  it('���룺obj1,���:obj2', function() {
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
  
  it('���룺function(){},���:function(){}', function() {
    expect(DeepClone.deepClone(function(){})).to.be.an('Function');
  });

});