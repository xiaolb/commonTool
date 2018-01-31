export default class ObjectUtil {

  // 判断是否为空对象
  static isEmptyObject(options) {
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
  static cloneObjExceptParam(obj, paramName) {
    let newObj = {};
    for(let key in obj) {
      if(key != paramName)
        newObj[key] = obj[key];
    }
    return newObj;
  }
}