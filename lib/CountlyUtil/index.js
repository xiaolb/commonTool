"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CountlyUtil = function () {
  function CountlyUtil() {
    _classCallCheck(this, CountlyUtil);
  }

  _createClass(CountlyUtil, null, [{
    key: "init",
    value: function init(key) {
      var env = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'development';

      var countlyConfig = {
        "sdk": {
          "online": "http://countly.toobob.com/sdk/web/countly.min.js",
          "pre": "http://countly.ops.com/sdk/web/countly.min.js",
          "qaif": "http://countly.ops.com/sdk/web/countly.min.js",
          "qafc": "http://countly.ops.com/sdk/web/countly.min.js",
          "dev": "http://countly.ops.com/sdk/web/countly.min.js",
          "development": "http://countly.ops.com/sdk/web/countly.min.js"
        },
        "url": {
          "online": "http://countly.toobob.com",
          "pre": "http://countly.ops.com",
          "qaif": "http://countly.ops.com",
          "qafc": "http://countly.ops.com",
          "dev": "http://countly.ops.com",
          "development": "http://countly.ops.com"
        }
      };

      var countlySdkUrl = countlyConfig.sdk[env];
      var countlyUrl = countlyConfig.url[env];
      var countlyAppKey = key;

      global.Countly = global.Countly || {};
      global.Countly.q = global.Countly.q || [];

      // load countly script asynchronously
      // provide countly initialization parameters
      global.Countly.q.push(['track_sessions']);
      global.Countly.q.push(['track_pageview']);
      global.Countly.q.push(['track_clicks']);
      global.Countly.q.push(['track_errors']);
      global.Countly.q.push(['track_links']);
      global.Countly.q.push(['track_forms']);
      global.Countly.q.push(['collect_from_forms']);

      global.Countly.app_key = countlyAppKey;
      global.Countly.url = countlyUrl;
      var cly = document.createElement('script');
      cly.type = 'text/javascript';
      cly.async = true;
      // enter url of script here
      cly.src = "" + countlySdkUrl;

      var retry = 0;
      cly.onload = function () {
        var _initCountly = function initCountly() {
          if (typeof global.Countly.init !== 'function') {
            setTimeout(_initCountly, 250);

            // everytime we try to init countly, dont forget to increase the retry counter
            retry += 1;

            if (retry > 40) {
              // clear this interval function after 40 retries, that is, 10s
              _initCountly = null;
              throw new Error('Countly cannot be initialized, it seems that you are in terrible a network.');
            }
          } else {
            global.Countly.init();
            // multi error listeners
            var onerrorCountly = window.onerror;
            window.addEventListener('error', function (e) {
              onerrorCountly(e.message, e.filename, e.lineno, e.colno, e.error);
            }, false);
            window.onerror = null;
          }
        };

        _initCountly();
      };
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(cly, s);
    }
  }]);

  return CountlyUtil;
}();

exports.default = CountlyUtil;
module.exports = exports["default"];