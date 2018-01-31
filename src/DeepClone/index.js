import ArrayUtil from "../ArrayUtil"
export default class DeepClone {
  // 深度克隆
  static deepClone(obj) {
    if (obj === null || typeof obj !== 'object') return obj;
    
    let ret = new obj.constructor();

    if (ArrayUtil.isArray(obj)) {
      ret = [];
      for (let i = 0, l = obj.length; i < l; i++) {
        ret[i] = DeepClone.deepClone(obj[i]);
      }
    } else {

      if (obj instanceof Date) {
        return new Date(obj.valueOf());
      }

      if (obj instanceof RegExp) {
        var pattern = obj.valueOf();
        var flags = '';
        flags += pattern.global ? 'g' : ''; // 全局匹配
        flags += pattern.ignoreCase ? 'i' : ''; // 忽略大小写
        flags += pattern.multiline ? 'm' : ''; // 允许多行匹配

        return new RegExp(pattern.source, flags);
      }

      if (obj instanceof Function) {
        // 函数的话直接指向相对的内存地址
        return obj;
      }

      for (let attr in obj) {
        if (Object.hasOwnProperty.call(obj, attr)) {
          ret[attr] = DeepClone.deepClone(obj[attr]);
        }
      }
    }
    return ret;
  }
}