
举个栗子：
```
// 首先，引入工具包
import { DateUtil } from '@xinguang/common-tool'

// 比如上边引用的是DateUtil；在下边就可以直接引用DateUtil了。
let timeFormat = DateUtil.formatDate(1234567899875);
console.log(DateUtil)
console.log(timeFormat)

// 输出以下东西
function DateUtil() {
    _classCallCheck(this, DateUtil);
}
2009-02-14 07:31:39
```



## 使用
这个包主要说的是一些常用的工具类，比如: 

* [时间格式的转换DateUtil](#DateUtil)    
* [数组操作工具ArrayUtil](#ArrayUtil)    
* [缓存工具CookUtil](#CookUtil)  
* [字符串工具StringUtil](#StringUtil)  
* [历史浏览工具HistoryUtil](#HistoryUtil)  
* [对象操作工具ObjectUtil](#ObjectUtil)  
* [数学操作工具MathUtil](#MathUtil)  
* [深拷贝DeepClone](#DeepClone)  
* [正则校验RegularUtil](#RegularUtil)  
* [两个值比较CompareUtil](#CompareUtil)  
* [金钱格式MoneyFormat](#MoneyFormat)  
* [节流防抖ThrottleUtil](#ThrottleUtil)  

****
## <span id = "DateUtil">时间工具</span>

====== 1. formatDate ======

将各种类型的值转变成我们需要的格式。

```
// 例一
let timeFormat =  formatDate(10000,"HH:mm:ss");// 数值会当成时间戳来计算

timeFormat // 08:00:10
// 按照1970-01-01 08:00:00 来算的

// 例二
let timeFormat =  DateUtil.formatDate(new Date());// 数值会当成时间戳来计算

timeFormat // 2017-07-27 17:48:58
// 这个随着时间的改变而改变
```

****  
## <span id = "ArrayUtil">数组工具</span>

数组操作工具类目前分为几个函数：

====== 1. isArray ======

判断我们输入的参数是不是一个数组。是的话返回true，否则为false。

```
let arr = [1,2,3];

let flag = ArrayUtil.isArray(arr);

flag // true
```

====== 2. flatten ======

将多维数组转化成一维数组。
```
let arr = [[1, 2, 3], [4, 5, 6], 7, [8]];

resultArr = ArrayUtil.flatten(arr);

resultArr // [1, 2, 3, 4, 5, 6, 7, 8]
```

====== 3. dislodge ======

给定两个数组，输出数组1里边在数组2里边不存在的元素。
```
let arr1 = [1,2,3,5,67,8];
let arr2 = [1,3,5,7,9];

ArrayUtil.dislodge(arr1,arr2); // [2,67,8]
```

====== 4. merge ======

将两个数组去重合并。

```
let arr1 = [1,2,3,5,67,8,8];
let arr2 = [1,3,5,7,9,9];

let result = ArrayUtil.merge(arr1,arr2));

result // [1,2,3,5,67,8,7,9]
```

====== 5. containAnother ======

判断数组1是否包含数组2。

```
// 
var array1 = [1,3,5,7,9];
var array2 = [1,3,5];

ArrayUtil.containAnother(array1, array2); // true
```
>注意，当两个数组为空的时候返回false.


## <span id = "DeepClone">深拷贝</span>

====== deepClone ======
对传入的参数进行深度克隆。

```
// 如果我们传入的值是null或者不是一个对象，则会返回传入的值。
let resultNull = ArrayUtil.deepClone(null);
let resultStr = ArrayUtil.deepClone("xiaolb");
let resultNum = ArrayUtil.deepClone(22);

resultNull // null
resultStr // "xiaolb"
resultNum // 22

// 如果传入的是除上述情况的其他情况，传入什么输出什么。
ArrayUtil.deepClone(function(){})  // function(){}
ArrayUtil.deepClone({0:"a",1:"b",2:"c"}) // {0:"a",1:"b",2:"c"}
ArrayUtil.deepClone([1,2]) // [1,2]
```
***
## <span id = "CookieUtil">缓存工具</span>
缓存工具类目前分为几个函数：



====== 1. setCookie =====

建立cookie,一般用来存储用户名、密码之类的数据

名字 | 含义 | 是否必须
:----: | :----: | :----:
name | cookie的名字 | require
value | cookie的值| require
expires | cookie的过期时间（格林威治时间）| option
path | 默认当前的路径（必须为绝对路径）| option
domain | 默认为当前文档位置的路径的域名部分| option
secure | cookie只会被https传输（boolern）| option
```
//setCookie(name, value, expires, path, domain, secure)
let cookie = CookieUtil.setCookie('admin','root',new Date(new Date().getTime()))
cookie // "xlb=people; expires=Fri Jul 28 2017 08:09:57 GMT+0800 (中国标准时间)"
```

====== 2. getCookie =====

获取cookie的值

```
let value = CookieUtil.getCookie('admin')
value // 'root'

```


====== 3. getCookieVal =====

获取cookie的键值对
```
let value = CookieUtil.getCookieVal()

value // 'admin=root'
```

====== 4. deleteCookie =====

删除cookie
```
let value = CookieUtil.deleteCookie('xlb')
value // ''
```

***
## <span id = "StringUtil">字符串工具</span>
字符串工具类目前分为几个函数：

====== 1. repeat ======
使用矩阵快速幂来处理字符串连接。
    
    第一个参数是字符串
    第二个参数是数字
```
 // eg:
 StringUtil.repeat('sjdh',4) // 'sjdhsjdhsjdhsjdh'
```
> 传入的第一个参数必须为字符串，否则会报错


====== 2. padZeroLeft ======

在字符串左边填充"0"。
```
// eg1:
let  resultStr = StringUtil.padZeroLeft("xiaolb",9);
resultStr // "000xiaolb"

// eg2:
let  resultStr = StringUtil.padZeroLeft(12345678,9);
resultStr // "012345678"
```
>如果传入的字符串的长度比传入的数组大的话，返回的是原字符串。

====== 3. trim ======

去掉字符串首尾的空格
```
let a = '              sjdh    '
var offset = StringUtil.trim(a);

offset // 'sjhd'
```
====== 4. OnlyInt ======

只能输入数字并且限定了长度
```
StringUtil.OnlyInt("sdf123456789",3); // 123
```



***
## <span id = "ObjectUtil">对象操作工具</span>
对象操作工具类目前分为几个函数：

====== 1. isEmptyObject ======

判断对象是不是为空值，是的话返回true,否则为false.
```
// eg1:
var obj = {};
var resultObj = ObjectUtil.isEmptyObject(obj);

resultObj; // true


// eg2:
var obj = {"1":'1'};
var resultObj = ObjectUtil.isEmptyObject(obj);

resultObj; // false
```

====== 2. cloneObjExceptParam ======

克隆一个新的对象除了指定的属性名。
```
var obj = {"name":"xiaolb","sex":"man","age":"secret"};
var paramName = "name";
var resultObj = ObjectUtil.cloneObjExceptParam(obj,paramName);

resultObj; // {"sex":"man","age":"secret"}
```

***
## <span id = "HistoryUtil">历史浏览工具</span>
历史浏览工具类目前分为几个函数：

====== 1. goBack ======

返回上一个页面，数据会全部刷新，不会保留。

```
goBack()

```


***
## <span id = "MathUtil">数学操作工具</span>
数学操作工具类目前分为几个函数：

====== 1. randomInteger ======

在[start,end]内生成随机数整数，并返回该数。
```
var number = MathUtil.randomInteger(10,12);

number; //在[10,12]随机的一个整数。
```

***
## <span id = "RegularUtil">正则校验</span>
正则校验工具类目前分为几个函数：

====== 1. regPhone ======

校验是否为手机号
```
var value1 = RegularUtil.regPhone('15990357136')
var value1 = RegularUtil.regPhone('12990357136')
value1; // true
value2; // false
```

====== 2. regIdCard ======

校验是否为身份证号
```
var value1 = RegularUtil.regIdCard('445644123456789')
var value1 = RegularUtil.regIdCard('132456789465789123')
value1; // true
value2; // true
```

====== 3. regNumber ======

校验是否为正数
```
var value1 = RegularUtil.regNumber(456789)
var value1 = RegularUtil.regNumber(-132456789465789123)
value1; // true
value2; // false
```

====== 4. regNumWord ======

校验是否为字母+数字
```
var value1 = RegularUtil.regNumWord('f45s67s89s')
var value1 = RegularUtil.regNumWord('132456789465789123z@')
value1; // true
value2; // false
```

====== 5. pattern ======

自己写正则和检验值
pattern(reg, value)
```
var value1 = RegularUtil.pattern(/\d/,1)
value1; // true
```
***
## <span id = "CompareUtil">两个值比较</span>
两个值比较工具类目前分为几个函数：

====== 1. compare2Objects ======

比较两个对象是否相等,相等返回空数组，不相等返回不相等的属性名
compare2Objects(obj1, obj2)
```
var obj1 = {
  "key": 1,
  "key1": 2,
  "key2": 4,
  "key4": function() {},
  "key3":{
    key31: 1,
    key32: {
      key321: 1
    }
  },
  key5:[1,2,3]
}

var obj2 = {
  "key": 1,
  "key1": 2,
  "key2": 4,
  "key4": function() {},
  "key3":{
    key31: 1,
    key32: {
      key321:1
    }
  },
  key5: [1,2,3],
}

compare2Objects(obj1, obj2) // []

obj2.key6 = 2;

compare2Objects(obj1, obj2) // ["key6"]

obj2.key3.key32.key321 = 2;

compare2Objects(obj1, obj2) // ["key6", "key3"]
```

## <span id = "MoneyFormat">金钱格式</span>
金钱格式工具类目前分为几个函数：

====== 1. fMoney ======  
将number类型的数字转化成X,XXX,XXX.XXX类型的金钱格式,在保留的小数位上会四舍五入。  
fMoney(money, num);
```
let money1 = 1234567.12356, num1 = 3;
fMoney(money1, num1); // 1,234,567.124

let money2 = -1234567.12356, num2 = 3;
fMoney(money2, num2); // -1,234,567.124
```

====== 2. rMoney ======  
将金钱格式的数字转化成数字形式。  
rMoney(money);
```
let moeny = 1,234,567.1234;

rMoney(moeny) // 1234567.1234
```
## <span id = "ThrottleUtil">节流防抖</span>