# TSLint Config TGR

[![NPM version](https://img.shields.io/npm/v/tslint-config-tgr.svg?style=flat)](https://www.npmjs.com/package/tslint-config-tgr)
[![Downloads](http://img.shields.io/npm/dm/tslint-config-tgr.svg?style=flat)](https://npmjs.org/package/tslint-config-tgr)

> A [TSLint config](https://palantir.github.io/tslint/usage/configuration/) for [TGR stack](https://github.com/tgrstack/)

## Installation

```sh
npm i -D @tgrx/tslint-config-tgr
```

## Usage

In `tslint.json`:

```json
{
  "extends": "@tgrx/tslint-config-tgr"
}
```

### Rules

* [tslint](https://www.npmjs.com/package/tslint)
* [tslint-consistent-codestyle](https://www.npmjs.com/package/tslint-consistent-codestyle)
* [tslint-eslint-rules](https://www.npmjs.com/package/tslint-eslint-rules)
* [tslint-microsoft-contrib](https://www.npmjs.com/package/tslint-microsoft-contrib)

## Versioning

```
+----- Major version is synchronize with tslint's major version.
| +--- Minor version has BREAKING CHANGE and feat.
| | +- Patch version has patch.
| | |
x.x.x
```

## License

MIT
