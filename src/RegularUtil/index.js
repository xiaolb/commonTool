
export default class RegularUtil {
  /*
  * 手机号验证
  */
  static regPhone (phone) {
    let exp = /^1[3-8][0-9]{9}$/
    return exp.test(phone)
  }

  /*
  * 身份证号验证
  */
  static regIdCard (idCard) {
    let exp = /^[1-9]{1}[0-9]{14}$|^[1-9]{1}[0-9]{16}([0-9]|[xX])$/
    return exp.test(idCard)
  }

  /*
  * 正数验证
  */
  static regNumber (number) {
    let exp = /^\d+$/
    return exp.test(number)
  }

  /*
  * 字母+数字（数字加字母）
  */
  static regNumWord (number) {
    let exp = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]*$/
    return exp.test(number)
  }

  /*
  * 自己输入正则表达式和需要验证的值
  */
  static pattern (pattern, value) {
    return pattern.test(value)
  }
}
