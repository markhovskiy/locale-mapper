# locale-mapper

[![Build Status](https://travis-ci.org/oleksmarkh/locale-mapper.svg)](https://travis-ci.org/oleksmarkh/locale-mapper)
[![Dependency Status](https://david-dm.org/oleksmarkh/locale-mapper.svg)](https://david-dm.org/oleksmarkh/locale-mapper)
[![Coverage Status](https://coveralls.io/repos/oleksmarkh/locale-mapper/badge.svg)](https://coveralls.io/github/oleksmarkh/locale-mapper)


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
