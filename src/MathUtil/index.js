export default class MathUtil {

  // 生成随机数组，整数在 start 和 end 之间
  static randomInteger(start, end, num = 1) {
    let returnArr = [];
    for (let i = 0; i < num; i += 1) {
      let number = Math.round(Math.random() * (end - start) + start);
      returnArr.push(number);
    }
    
    return returnArr;
  }
}