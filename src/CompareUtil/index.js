import ArrayUtil from "../ArrayUtil";

export default class CompareUtil {
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
  static compare2Objects (x, y, arr1 = []) {
    // 定义变量，将对象中不同的值进行返回
    let diffArr = [];

    // 判断两个值是不是对象
    if (!(x instanceof Object && y instanceof Object)) {
      return '这两个值至少有一个不是对象';
    }

    // 判断两个对象的键值名是否相等
    let xkeys = Object.keys(x);
    let ykeys = Object.keys(y);
    for (let i = 0; i < xkeys.length; i += 1) {
      let value = xkeys[i];
      if (y.hasOwnProperty(value) !== x.hasOwnProperty(value)) {
          diffArr.push(value);
      } else if (typeof y[value] !== typeof x[value]) {
          diffArr.push(value);
      }
    }

    for (let i = 0; i < ykeys.length; i += 1) {
      let value = ykeys[i];
        if (y.hasOwnProperty(value) !== x.hasOwnProperty(value)) {
            diffArr.push(value);
        }
        else if (typeof y[value] !== typeof x[value]) {
            diffArr.push(value);
        } else{
          // 进行深度遍历对比
          switch (typeof (x[value])) {
            case 'object':
            case 'function':
              let deepArr = (CompareUtil.compare2Objects (x[value], y[value], arr1));

              if (deepArr instanceof Array && deepArr.length !== 0) {
                diffArr.push(value);
                break;
              }
              break;
            default:
              if (x[value] !== y[value]) {
                diffArr.push(value);
              }
              break;
          }
        }
    }
    return ArrayUtil.dislodge(diffArr, arr1);
  }

}
