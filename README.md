# locale-mapper

  [![license][license-image]][license-url]
  [![travis][travis-image]][travis-url]
  [![deps][deps-image]][deps-url]
  [![test coverage][test-coverage-image]][test-coverage-url]
  ![code size][code-size-image]

## Motivation/goals

It was built for streamlining the process of getting a default locale based on `window.navigator.language`.

## Status

*Abandoned* - not utilized anywhere anymore, but code remains valid and could be used for reference.

## How does it look like?

```js
const localeMapper = new LocaleMapper(navigator);

localeMapper.normalize();     // 'en-US'
localeMapper.normalize(true); // 'en', passing the "onlyLanguage" flag

localeMapper.fallback({
  // explicit mapping
  'de-DE': [
    'de',
    'de-DE',
    'de-AT',
  ],

  // another explicit mapping for the same family
  'de-CH': [
    'de-CH',
  ],

  // language family wildcard
  'es': [
    '*',
  ],

  // a wildcard with exclusion
  'pt-PT': [
    '*',
    '!pt-BR',
  ],
});
```

[license-image]: https://img.shields.io/github/license/oleksmarkh/locale-mapper.svg?style=flat-square
[license-url]: https://github.com/oleksmarkh/locale-mapper/blob/master/LICENSE
[travis-image]: https://img.shields.io/travis/oleksmarkh/locale-mapper/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/oleksmarkh/locale-mapper
[deps-image]: https://img.shields.io/david/oleksmarkh/locale-mapper.svg?style=flat-square
[deps-url]: https://david-dm.org/oleksmarkh/locale-mapper
[test-coverage-image]: https://img.shields.io/coveralls/github/oleksmarkh/locale-mapper.svg?style=flat-square
[test-coverage-url]: https://coveralls.io/github/oleksmarkh/locale-mapper
[code-size-image]: https://img.shields.io/github/languages/code-size/oleksmarkh/locale-mapper.svg?style=flat-square
