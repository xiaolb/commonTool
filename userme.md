babel转换：npm run build

运行lib下的index: npm run libStart

对test下的测试用例进行测试：
mocha --compilers js:babel-core/register

发布：
npm publish

对写的函数进行进行验证，也就是打开浏览器窗口：
gulp

webpack对ES6文件进行编译