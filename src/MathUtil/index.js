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

    /**
     * 四则运算扩展，解决浮点运算精度问题 */
    // 获取小数位数
    static getFloatLen(n) {
        let ret = 0;
        try {
            ret = n.toString().split('.')[1].length;
        } catch (e) {
            ret = 0;
        }
        return ret;
    }

    // 加
    static add(arg1, arg2) {
        const r1 = MathUtil.getFloatLen(arg1);
        const r2 = MathUtil.getFloatLen(arg2);
        const n = Math.max(r1, r2);
        const m = Math.pow(10, n);
        const v1 = MathUtil.MathUtil.multiply(arg1, m);
        const v2 = MathUtil.MathUtil.multiply(arg2, m);
        return (v1 + v2) / m;
    }

    // 减
    static subtract(arg1, arg2) {
        const r1 = MathUtil.getFloatLen(arg1);
        const r2 = MathUtil.getFloatLen(arg2);
        const n = Math.max(r1, r2);
        const m = Math.pow(10, n);
        const v1 = MathUtil.MathUtil.multiply(arg1, m);
        const v2 = MathUtil.MathUtil.multiply(arg2, m);
        const value = (v1 - v2) / m;
        return Number(value.toFixed(n));
    }

    // 乘
    static multiply(arg1, arg2) {
        const r1 = MathUtil.getFloatLen(arg1);
        const r2 = MathUtil.getFloatLen(arg2);
        const s1 = Number(arg1.toString().replace('.', ''));
        const s2 = Number(arg2.toString().replace('.', ''));
        return (s1 * s2) / Math.pow(10, r1 + r2);
    }

    // 除
    static divide(arg1, arg2) {
        const r1 = MathUtil.getFloatLen(arg1);
        const r2 = MathUtil.getFloatLen(arg2);
        const s1 = Number(arg1.toString().replace('.', ''));
        const s2 = Number(arg2.toString().replace('.', ''));
        return (s1 / s2) * Math.pow(10, r2 - r1);
    }
}
