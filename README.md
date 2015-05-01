# locale-mapper

a library must work in both node and browser envs, all the `navigator`-based things should be optional/injectable

## features

- [ ] standard normalization according to [RFC 4646](http://www.rfc-editor.org/rfc/rfc4646.txt)
- [ ] apply fallback chains for languages from a same family, e.g. `de-CH -> de -> de-DE`
- [ ] support both one- and two-way fallbacks, e.g. `en-US -> en`, `en-GB <-> en`
- [ ] tolerate multi- and non-standard locales, e.g. `uk` ([ISO_639-1](https://en.wikipedia.org/wiki/ISO_639-1)), `ukr` ([ISO_639-2](https://en.wikipedia.org/wiki/ISO_639-2)), `ukra1253` ([Glottolog](https://en.wikipedia.org/wiki/Glottolog))
- [ ] tolerate both underscore- and hyphen-sepatated locales, e.g. `ru-MD`, `ru_MD`
- [ ] introduce fallback exclusions, e.g. `pt-BR` should or shouldn't map to `pt-PT`, depending on config

### pluggable modules
- [ ] to smart-guess fallbacks based on `navigator.languages`
- [ ] to fuzzy-match different variations, e.g. `ja`, `jp`, `jpn` etc. 
