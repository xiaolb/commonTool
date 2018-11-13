export default class ThrottleUtil {
	/**
     * [实现防抖函数]
     * @Author   mapleLeaf
     * @DateTime 2016-10-30T23:20:01+0800
     * @param    {[type]}                     func      [description]
     * @param    {[type]}                     wait      [description]
     * @param    {[type]}                     immediate [description]
     */
    static debounce(func, wait, immediate) {
		let timeout;

		return function () {
			const context = this;
			const args = arguments;
			if(timeout) {
				// 清除的只是定时器，本身timeout的值没有清除掉
				clearTimeout(timeout);
			}
			if(immediate) {
				let callNow = !timeout;

				timeout = setTimeout(function() {
					timeout=null;
				}, wait)

				if(callNow) {
					func.apply(context, args);
				}
			} else {
				timeout = setTimeout(function() {
					func.apply(context, args);
				}, wait)
			}
		}
	}

	/**
     * [实现节流函数]
     * @Author   mapleLeaf
     * @DateTime 2016-10-30T23:20:01+0800
     * @param    {[type]}                     func      [description]
     * @param    {[type]}                     wait      [description]
     */
    static throttle(func, wait) {
		let context, args;
		let timeout;
		let previous = 0;

		let later = function() {
			previous = +new Date();
			timeout = null;
			func.apply(context, args);
		}

		return function() {
			let now = +new Date();
			let remaining = wait - (now - previous);
			context = this;
			args = arguments;
			if(remaining <= 0) {
				if(timeout) {
					clearTimeout(timeout);
					timeout = null;
				}
				previous = now;
				func.apply(context, args);
			} else if(!timeout) {
				timeout = setTimeout(later, remaining)
			}
		}
	}

}


