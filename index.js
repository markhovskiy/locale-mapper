(function () {
    "use strict";

    var LocaleMapper = function (navigator) {
        this.navigator = navigator;
    };

    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/API/NavigatorLanguage/language
     */
    LocaleMapper.prototype.normalize = function (onlyLanguage) {
        var locale = this.navigator.language || this.navigator.browserLanguage; // for IE<11
        var parts = locale.split('-');
        var language = parts[0].toLowerCase();

        if (onlyLanguage || !parts[1]) {
            return language;
        }

        return language + '-' + parts[1].toUpperCase();
    };

    LocaleMapper.prototype.fallback = function (mappingConfig) {
        var currentLocale = this.normalize();

        for (var locale in mappingConfig) {
            var mapping = mappingConfig[locale];

            if (mapping.indexOf('*') !== -1) {
                if (mapping.indexOf('!' + currentLocale) !== -1) {
                    continue;
                }

                if (locale.indexOf(this.normalize(true)) === 0) {
                    return locale;
                }

                continue;
            }

            if (mapping.indexOf(currentLocale) === -1) {
                continue;
            }

            return locale;
        }

        return currentLocale;
    };

    if (typeof module !== 'undefined' && module.exports) {
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
