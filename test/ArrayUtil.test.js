let ArrayUtil = require('../src/ArrayUtil');
let expect = require('chai').expect;
// console.log(DateUtil)

describe('isArray函数:判断输入的是不是一个数组', function() {

    it('[1,2,3]是一个数组', function() {
        expect(ArrayUtil.isArray([1,2,3])).to.be.true;
    });

    it('[1,[2],3]是一个数组', function() {
        expect(ArrayUtil.isArray([1,[2],3])).to.be.true;
    });

});

describe('flatten函数:将多维的数组转化成二维数组', function() {

    it('[[1, 2, 3], [4, 5, 6], 7, [8]]执行之后变为[1, 2, 3, 4, 5, 6, 7, 8]', function() {
        expect(ArrayUtil.flatten([[1, 2, 3], [4, 5, 6], 7, [8]])).to.be.deep.equal([1, 2, 3, 4, 5, 6, 7, 8]);
    });

});

describe('dislodge函数:输出数组1里边在数组2里边不存在的元素', function() {

    it('数组1：[1,2,3,5,67,8]，数组2：[1,3,5,7,9]，输出的值为[2,67,8]', function() {
        expect(ArrayUtil.dislodge([1,2,3,5,67,8],[1,3,5,7,9])).to.be.deep.equal([2,67,8]);
    });

});

describe('merge函数:将两个数组去重合并。', function() {

    it('数组1：[1,2,3,5,67,8]，数组2：[1,3,5,7,9]，输出的值为[1,2,3,5,67,8,7,9]', function() {
        expect(ArrayUtil.merge([1,2,3,5,67,8],[1,3,5,7,9])).to.be.deep.equal([1,2,3,5,67,8,7,9]);
    });

    it('数组1：[1,1,2,3,5,67,8]，数组2：[1,3,5,7,9]，输出的值为[1,1,2,3,5,67,8,7,9]', function() {
        expect(ArrayUtil.merge([1,1,2,3,5,67,8],[1,3,5,7,9])).to.be.deep.equal([1,2,3,5,67,8,7,9]);
    });

    it('数组1：[1,1,2,3,5,67,8]，数组2：[1,3,5,7,9,9]，输出的值为[1,1,2,3,5,67,8,7,9,9]', function() {
        expect(ArrayUtil.merge([1,2,3,5,67,8],[1,3,5,7,9,9])).to.be.deep.equal([1,2,3,5,67,8,7,9]);
    });


});

describe('containAnother:判断第一个数组的元素是不是包含第二个数组里边。', function() {

    it('数组1：[1, 3, 5, 7, 9]，数组2：[1, 3, 5]，输出的值为true', function() {
        expect(ArrayUtil.containAnother([1, 3, 5, 7, 9],[1, 3, 5])).to.be.true;
    });

    it('数组1：[]，数组2：[1,3,5,7,9]，输出的值为false', function() {
        expect(ArrayUtil.containAnother([],[1,3,5,7,9])).to.be.false;
    });
    it('数组1：[]，数组2：[1,3,5,7,9]，输出的值为false', function() {
        expect(ArrayUtil.containAnother([],[1,3,5,7,9])).to.not.be.true;
    });

    it('数组1：[1,2,3]，数组2：[1,3,5,7,9]，输出的值为false', function() {
        expect(ArrayUtil.containAnother([1,2,3],[1,3,5,7,9])).to.be.false;
    });

});

