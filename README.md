
# rn-bridge-inspector
[![package version](https://img.shields.io/npm/v/rn-bridge-inspector.svg?style=flat-square)](https://npmjs.org/package/rn-bridge-inspector)
[![package downloads](https://img.shields.io/npm/dm/rn-bridge-inspector.svg?style=flat-square)](https://npmjs.org/package/rn-bridge-inspector)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![package license](https://img.shields.io/npm/l/rn-bridge-inspector.svg?style=flat-square)](https://npmjs.org/package/rn-bridge-inspector)
[![make a pull request](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

> Inspect React Native's bridge

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Contribute](#contribute)
- [License](#License)

## Install

This project uses [node](https://nodejs.org) and [npm](https://www.npmjs.com). 

```sh
$ npm install rn-bridge-inspector
$ # OR
$ yarn add rn-bridge-inspector
```

## Usage

```js
import inspect from 'rn-bridge-inspector'

inspect()

// OR

inspect((msg) => {
    // do things
})
```

## Contribute

1. Fork it and create your feature branch: git checkout -b my-new-feature
2. Commit your changes: git commit -am 'Add some feature'
3. Push to the branch: git push origin my-new-feature 
4. Submit a pull request

## License

MIT
    