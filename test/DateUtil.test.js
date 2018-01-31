// var DateUtil = require('./DateUtil.js');
// var expect = require('chai').expect;
// // console.log(DateUtil)

// describe('calcCountDownByLeftTime函数，通过剩余秒数返回时间格式', function() {
//     it('36000秒等于十小时零分零秒', function() {
//         expect(DateUtil.calcCountDownByLeftTime(36000)).to.be.deep.equal({
//             "hours": 10,
//             "minutes": 0,
//             "seconds": 0,
//         });
//     });
//     it('1000秒等于零小时十六分四十秒', function() {
//         expect(DateUtil.calcCountDownByLeftTime(1000)).to.be.deep.equal({
//             "hours": 0,
//             "minutes": 16,
//             "seconds": 40,
//         });
//     });
// });

// describe('timestramptoDate函数，将十三位时间戳转化成时间格式', function() {
//     it('1234567899875十三位时间戳转化之后是2009年2月14号7点31分39秒', function() {
//         expect(DateUtil.timestramptoDate(1234567899875)).to.be.deep.equal({
//             "YEAR":'2009',
//             "MONTH":'02',
//             "DAY":'14',
//             "HOURS":'07',
//             "MINUTES":'31',
//             "SECONDS":'39',
//         });
//     });
// });