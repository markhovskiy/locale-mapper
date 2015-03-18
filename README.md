# locale-mapper

## features

* normalize `navigator.language` according to [RFC 4646](http://www.rfc-editor.org/rfc/rfc4646.txt)
* provide fallback chains for languages from a same family, e.g `de-CH -> de -> de-DE`
* provige a pluggable module to smart-guess fallbacks based on `navigator.languages`
