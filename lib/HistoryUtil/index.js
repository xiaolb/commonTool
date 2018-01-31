"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HistoryUtil = function () {
    function HistoryUtil() {
        _classCallCheck(this, HistoryUtil);
    }

    _createClass(HistoryUtil, null, [{
        key: "goBack",
        value: function goBack() {
            history.go(-1);
        }
    }, {
        key: "goForward",
        value: function goForward() {}
    }, {
        key: "pushHistory",
        value: function pushHistory() {}
    }, {
        key: "popHistory",
        value: function popHistory() {}
    }, {
        key: "listHistory",
        value: function listHistory() {}
    }, {
        key: "addHistoryBackListener",
        value: function addHistoryBackListener(backFn) {
            var pushHistory = function pushHistory() {
                var state = {
                    title: document.title,
                    url: location.href
                };
                window.history.pushState(state, state.title, state.href);
            };

            pushHistory();
            window.addEventListener("popstate", function (e) {
                backFn && backFn();
            }, false);
        }
    }]);

    return HistoryUtil;
}();

exports.default = HistoryUtil;
module.exports = exports["default"];