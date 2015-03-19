# locale-mapper

## features

- [ ] apply fallback chains for languages from a same family, e.g. `de-CH -> de -> de-DE`
- [ ] cover both 2 and 5 chars cases
- [ ] introduce fallback exclusions, e.g. `pt-BR` should or shouldn't map to `pt-PT`, depending on config
- [ ] normalize `navigator.language` according to [RFC 4646](http://www.rfc-editor.org/rfc/rfc4646.txt)
- [ ] provide a pluggable module to smart-guess fallbacks based on `navigator.languages`
