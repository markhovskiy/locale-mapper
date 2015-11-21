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
    it('returns "null" if mapping is not matched and "defaultLocale" is not passed', function () {
        var localeMapper = new LocaleMapper({language: 'de-AT'});
        expect(localeMapper.fallback({'en-US': ['en']})).to.equal(null);
    });

    it('returns "defaultLocale" if passed and mapping is not matched', function () {
        var localeMapper = new LocaleMapper({language: 'de-AT'});
        expect(localeMapper.fallback({'es-ES': ['es']},
                                     'en-US')).to.equal('en-US');
    });

    it('supports explicit mapping', function () {
        var localeMapper = new LocaleMapper({language: 'de-CH'});
        expect(localeMapper.fallback({'de-DE': ['de',
                                                'de-DE',
                                                'de-AT'],
                                      'de-CH': ['de-CH']})).to.equal('de-CH');
    });

    it('supports a language family wildcard', function () {
        var localeMapper = new LocaleMapper({language: 'de-AT'});
        expect(localeMapper.fallback({'de-DE': ['*']})).to.equal('de-DE');
        expect(localeMapper.fallback({'en': ['*'],
                                      'es': ['*'],
                                      'de': ['*']})).to.equal('de');
    });

    it('supports wildcard exclusions', function () {
        var localeMapper = new LocaleMapper({language: 'pt-BR'});
        expect(localeMapper.fallback({'pt-PT': ['*',
                                                '!pt-BR']})).to.equal(null);
    });
});
