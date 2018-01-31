export default class MoneyFormat {
  /**
   * [fMoney   eg below:
   *           input: var money = 1234567.1235546, num = 3
   *           call: MoneyFormat.fMoney(money, num);
   *           output: 1,234,567.124
   *           
   * @param    {[type]}                     number [description]
   * @param    {[type]}                     number [description]
   * @return   {[type]}                           [description]
   */
  static fMoney(money, num) { 
    num = num > 0 && num <= 20 ? num : 2; 
    money = parseFloat((money + "").replace(/[^\d\.-]/g, "")).toFixed(num) + ""; 
    const left = money.split(".")[0].split("").reverse();
    const right = money.split(".")[1]; 
    let temp = ""; 
    for (let i = 0; i < left.length; i++) { 
      temp += left[i] + ((i + 1) % 3 == 0 && (i + 1) != left.length ? "," : ""); 
    } 
    return temp.split("").reverse().join("") + "." + right; 
  } 

  /**
   * [fMoney   eg below:
   *           input: var money = 1,234,567.124;
   *           call: MoneyFormat.rMoney(money);
   *           output: 1234567.124
   *           
   * @param    {[type]}                     number [description]
   * @return   {[type]}                           [description]
   */
  static rMoney(money) {
    return parseFloat((money + "").replace(/[^\d\.-]/g, ""));
  }
}