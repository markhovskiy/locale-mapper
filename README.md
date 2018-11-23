# locale-mapper

  [![travis][travis-image]][travis-url]
  [![deps][deps-image]][deps-url]
  [![license][license-image]][license-url]
  [![test coverage][test-coverage-image]][test-coverage-url]
  ![code size][code-size-image]

## usage

```js
var localeMapper = new LocaleMapper(navigator);

localeMapper.normalize();     // 'en-US'
localeMapper.normalize(true); // 'en', passing the "onlyLanguage" flag

localeMapper.fallback({'de-DE': ['de',        // explicit mapping
                                 'de-DE',
                                 'de-AT'],
                       'de-CH': ['de-CH'],    // another explicit mapping for the same family
                       'es': ['*'],           // language family wildcard
                       'pt-PT': ['*',
                                 '!pt-BR']}); // wildcard exclusions
```

[travis-image]: https://img.shields.io/travis/oleksmarkh/locale-mapper/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/oleksmarkh/locale-mapper
[deps-image]: https://img.shields.io/david/oleksmarkh/locale-mapper.svg?style=flat-square
[deps-url]: https://david-dm.org/oleksmarkh/locale-mapper
[license-image]: https://img.shields.io/github/license/oleksmarkh/locale-mapper.svg?style=flat-square
[license-url]: https://github.com/oleksmarkh/locale-mapper/blob/master/LICENSE
[test-coverage-image]: https://img.shields.io/coveralls/github/oleksmarkh/locale-mapper.svg?style=flat-square
[test-coverage-url]: https://coveralls.io/github/oleksmarkh/locale-mapper
[code-size-image]: https://img.shields.io/github/languages/code-size/oleksmarkh/locale-mapper.svg?style=flat-square
