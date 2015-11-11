# locale-mapper

a library must work in both node and browser envs, all the `navigator`-based things should be optional/injectable


## features/todo

- [ ] standard normalization according to [RFC 4646](http://www.rfc-editor.org/rfc/rfc4646.txt)
- [ ] apply fallback chains for languages from a same family, e.g. `de-CH -> de -> de-DE` ([ISO_639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes))
- [ ] support both one- and two-way fallbacks, e.g. `en-US -> en`, `en-GB <-> en`
- [ ] tolerate both underscore- and hyphen-separated locales, e.g. `ru-MD`, `ru_MD`
- [ ] introduce fallback exclusions, e.g. `pt-BR` should or shouldn't map to `pt-PT`, depending on config
