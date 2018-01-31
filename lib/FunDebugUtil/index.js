'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fundebugJavascript = require('fundebug-javascript');

var _fundebugJavascript2 = _interopRequireDefault(_fundebugJavascript);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// multi error listeners
var onerrorFunDenug = window.onerror;
window.addEventListener('error', function (e) {
    onerrorFunDenug(e.message, e.filename, e.lineno, e.colno, e.error);
}, false);
window.onerror = null;

var FunDebugUtil = function () {
    function FunDebugUtil() {
        _classCallCheck(this, FunDebugUtil);
    }

    _createClass(FunDebugUtil, null, [{
        key: 'init',
        value: function init(key) {
            var env = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'development';
            var version = arguments[2];
            var username = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
            var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};


            _fundebugJavascript2.default.apikey = key;
            _fundebugJavascript2.default.appversion = version;
            _fundebugJavascript2.default.user = {
                name: username
            };
            _fundebugJavascript2.default.metaData = options;

            var envMap = {
                development: 'development',
                dev: 'development',
                qafc: 'test',
                pre: 'test',
                online: 'production',
                local: 'development'
            };

            _fundebugJavascript2.default.releasestage = envMap[env];
        }
    }]);

    return FunDebugUtil;
}();

exports.default = FunDebugUtil;
module.exports = exports['default'];