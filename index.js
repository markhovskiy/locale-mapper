(function () {
    "use strict";

    var LocaleMapper = function (navigator) {
        this.navigator = navigator;
    };

    if (typeof module !== 'undefined' &&
        typeof module.exports !== 'undefined') {
        // node (to run mocha tests)
        module.exports = LocaleMapper;
    } else if (typeof define === 'function' && define.amd) {
        // requirejs
        define([], function () { return LocaleMapper; });
    } else {
        // browser
        window.LocaleMapper = LocaleMapper;
    }
})();
