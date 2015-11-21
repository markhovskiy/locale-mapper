/* jshint strict: false */

var expect = require('chai').expect;

var LocaleMapper = require('./index');

describe('normalize', function () {
    it('accepts the standard "navigator.language" property', function () {
        var localeMapper = new LocaleMapper({language: 'en-US'});
        expect(localeMapper.normalize()).to.equal('en-US');
    });

    it('accepts the non-standard "navigator.browserLanguage" property', function () {
        var localeMapper = new LocaleMapper({browserLanguage: 'en-US'});
        expect(localeMapper.normalize()).to.equal('en-US');
    });

    it('returns a language part when region is not specified', function () {
        var localeMapper = new LocaleMapper({language: 'en'});
        expect(localeMapper.normalize()).to.equal('en');
    });

    it('returns a language part when  the "onlyLanguage" flag is set', function () {
        var localeMapper = new LocaleMapper({language: 'en-US'});
        expect(localeMapper.normalize(true)).to.equal('en');
    });

    it('transforms a non-standard locales', function () {
        var localeMapper = new LocaleMapper({language: 'en-us'});
        expect(localeMapper.normalize()).to.equal('en-US');
    });
});

describe('fallback', function () {
    it('returns current locale if mapping is not matched', function () {
        var localeMapper = new LocaleMapper({language: 'de-AT'});
        expect(localeMapper.fallback({'en-US': ['en']})).to.equal('de-AT');
    });

    it('supports explicit mapping', function () {
        var localeMapper = new LocaleMapper({language: 'de-AT'});
        expect(localeMapper.fallback({'de-DE': ['de', 'de-DE', 'de-AT']})).to.equal('de-DE');
    });

    it('supports a language family wildcard', function () {
        var localeMapper = new LocaleMapper({language: 'de-AT'});
        expect(localeMapper.fallback({'de': ['*']})).to.equal('de');
        expect(localeMapper.fallback({'de-DE': ['*']})).to.equal('de-DE');
    });

    it('supports wildcard exclusions', function () {
        var localeMapper = new LocaleMapper({language: 'pt-BR'});
        expect(localeMapper.fallback({'pt-PT': ['*', '!pt-BR']})).to.equal('pt-BR');
    });
});
