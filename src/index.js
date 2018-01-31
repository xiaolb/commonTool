import DateUtil from "./DateUtil"
import CookieUtil from "./CookieUtil"
import StringUtil from "./StringUtil"
import ArrayUtil from "./ArrayUtil"
import MathUtil from "./MathUtil"
import HistoryUtil from "./HistoryUtil"
import ObjectUtil from "./ObjectUtil"
import DeepClone from "./DeepClone"
import RegularUtil from "./RegularUtil"
import CompareUtil from "./CompareUtil"
import MoneyFormat from "./MoneyFormat"
import CountlyUtil from "./CountlyUtil"
import FunDebugUtil from "./FunDebugUtil"

/*
* 数组操作，
* 对比操作,
* 数学操作，
* 字符串操作，
* 日期工具，
* History 工具，
* 存储(缓存,cookie,H5 localStorage)
*/  

// 数组操作
// console.log('---------数组操作-------------------')
// const Array1 = [[1, 2, 3], [4, [9], 5, 6], 7, [8]];
// const Array2 = [1, 1, 2, 5, 8, 9];
// const Array3 = [1, 4, 8, 10];
// const Object1 = {};

// console.log('flatten:', ArrayUtil.flatten(Array1));
    
// console.log('isArray:', ArrayUtil.isArray(Array1));
// console.log('isArray:', ArrayUtil.isArray(Object1));

// console.log('dislodge:', ArrayUtil.dislodge(Array2, Array3));

// console.log('merge:', ArrayUtil.merge(Array2, Array3));

// // 对比操作
// console.log('-------------对象对比------------')
// const obj1 = {
//   'key1': 1,
//   'key2': function(){ console.log(1) },
//   'key3':{
//     'key31': 1,
//     'key32': {
//       'key321': 'sss',
//     }
//   },
//   'key4': [1,2,3,3],
// }

// const obj2 = {
//   'key1': 1,
//   'key2': function(){ console.log(4) },
//   'key3':{
//     'key31': 1,
//     'key32': {
//       'key321': 'ssss',
//     }
//   },
//   'key4': [1,2,3,4],
// }

// console.log('compare2Objects:', CompareUtil.compare2Objects(obj1, obj2, ['key4']))

// console.log('-------------时间组件------------')

// console.log(DateUtil.formatDate(new Date()));

// console.log(DateUtil.formatDate(new Date(), 'yyyy-MM-dd HH:mm'));

// console.log(DateUtil.formatDate(new Date(), 'yyyy-MM-dd HH'));

// console.log(DateUtil.formatDate(new Date(), 'yyyy-MM-dd'));

// console.log(DateUtil.formatDate(new Date(), 'yyyy-MM'));

// console.log('-------------深度克隆------------')
// var objectArr = {a:"a", b:"b",c:{c1:1, c2:'as',c3:[2,35,5], c4:function(){console.log(2222)}}};

// console.log('deepClone', DeepClone.deepClone(objectArr));

// console.log('-------------数学操作------------');

// console.log('randomInteger', MathUtil.randomInteger(1.1, 5, 10));

// console.log('-------------对象对比------------');

// console.log('isEmptyObject', ObjectUtil.isEmptyObject(1));

// var obj = {"name":"xiaolb","sex":{aa:22},"age":"secret"};

// var paramName = "name";

// console.log('cloneObjExceptParam', ObjectUtil.cloneObjExceptParam(obj,paramName));

// console.log('-------------金钱格式------------');
// console.log('fMoney', MoneyFormat.fMoney('2222213.3748973f', 3));
// console.log('fMoney', MoneyFormat.rMoney('2222213.3748973'));
// let money = -1234567.12356, num = 3;
// console.log('fMoney', MoneyFormat.fMoney(money, num));

// console.log('-------------countly测试------------');
// console.log(CountlyUtil.init('1'));

// console.log('-------------正则校验------------');

// console.log('regPhone', RegularUtil.regPhone('15990357176')) // true
// console.log('regPhone', RegularUtil.regPhone('159903571769')) // false
// console.log('regPhone', RegularUtil.regPhone('12990357176')) // false

// console.log('regIdCard', RegularUtil.regIdCard('432506199408025135'));

// console.log('regNumber', RegularUtil.regNumber(159903571769));

// console.log('regNumWord', RegularUtil.regNumWord('d159903571769'))

// console.log('pattern', RegularUtil.pattern(/^Kf$/, 'Kf'));

// console.log(" DateUtil is ok !");

// console.log('BaiduUtil is ok !');

// console.log('StringUtil 正在测试');

// console.log('CookieUtil 还未开始测试');


// var time = new Date();

// console.log('time',time);

// var newTime = 1234567899875;

// var a = DateUtil.timestrampToDate(newTime);

// console.log("a",a);

// var remain = DateUtil.calcCountDownByLeftTime(36000);

// console.log(remain);

// var b = DateUtil.formatDate(time, 'MM-dd HH:mm:ss');

// console.log(b);


// // arrayUtil 测试
// var arr1 = [[1, 2, 3], [4, 5, 6], 7, [8]];
// var newArr = ArrayUtil.flatten(arr1);

// console.log(newArr);

// var objectArr = {0:"a",1:"b",2:"c"};

// var deepClone = ArrayUtil.deepClone(objectArr);

// console.log(deepClone);

// var arr3 = [1,2,3,5,67,8,8];
// var arr2 =[1,3,5,3];
// var result = ArrayUtil.merge(arr2,arr3);
// console.log(result);

// var array2 = [1,3,5];
// var array1 = [1,3,5,7,9];
// console.log(ArrayUtil.containAnother(array1,array2))
// var date = new Date(1424561231234);

// var timeDeep = ArrayUtil.deepClone(date);

// console.log("timeDeep",timeDeep);

// var obj = {"name":"xiaolb","sex":"man","age":"secret"};
// var paramName = "name";
// var resultObj = ObjectUtil.cloneObjExceptParam(obj,paramName);

// console.log(resultObj);

// var number = MathUtil.randomInteger(10,12);

// console.log(number);
// console.log(CookieUtil.deleteCookie('xlb'))
// console.log(document.cookie)
// console.log('----------')
// console.log(document.cookie)
// console.log('----------+')
// console.log(CookieUtil.getCookieVal())
// console.log(document.cookie)
// console.log('----------++')
// console.log(CookieUtil.getCookie('xlb'))
// console.log(document.cookie)
// console.log('----------+++')
// console.log(CookieUtil.deleteCookie('xlb'))
// console.log(document.cookie)

// console.log(DateUtil.formatDate(1234567909875))

// console.log(RegularUtil.pattern(/\d/,1))
// console.log(DeepClone.deepClone(new Date()))
// console.log(StringUtil.padZeroLeft('sd',1))
// console.log(StringUtil.repeat('sd',2))
// console.log(StringUtil.parseQueryString('http://localhost:63850/?utm_campaign=startup&utm_content=&utm_medium=lantern&utm_source=windows#/'))

export { 
  DateUtil, 
  RegularUtil, 
  CookieUtil, 
  StringUtil, 
  HistoryUtil, 
  ArrayUtil, 
  MathUtil, 
  ObjectUtil, 
  DeepClone, 
  CompareUtil,
  MoneyFormat,
  CountlyUtil,
  FunDebugUtil,
};

let CommonUtil = {
    DateUtil,
    CookieUtil,
    StringUtil,
    HistoryUtil,
    ArrayUtil,
    MathUtil,
    ObjectUtil,
    DeepClone,
    RegularUtil,
    CompareUtil,
    MoneyFormat,
    CountlyUtil,
    FunDebugUtil,
};


export default CommonUtil;
