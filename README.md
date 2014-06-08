# cortex-playground [![NPM version](https://badge.fury.io/js/cortex-playground.svg)](http://badge.fury.io/js/cortex-playground) [![Build Status](https://travis-ci.org/cortexjs/cortex-playground.svg?branch=master)](https://travis-ci.org/cortexjs/cortex-playground) [![Dependency Status](https://gemnasium.com/cortexjs/cortex-playground.svg)](https://gemnasium.com/cortexjs/cortex-playground)

Collections of test fixtures for cortex.

## Install

```bash
$ npm install cortex-playground --save
```

## Usage

For details, see [test-fixture](https://github.com/kaelzhang/node-test-fixture).

```js
var playground = require('cortex-playground');
var packages = playground.packages;
var resources = playground.resources;
```
- `packages`: contains raw files of the user repos
- `resources`: contains built files, and each of the resource folder is built from the package which has the same name.

The usage of `resources` is the same as `packages`.

```js
var normal = packages('normal');
// copy test fixtures into a temp directory.
normal.copy(function(err, dir){
  dir; // the temp directory
  normal.resolve(); // `dir` itself. 
  normal.resolve('cortex.json'); // returns the absolute path of `cortex.json`.
});
```

## packages([name])

Use a package.

```
/path/to/playground/
  |-- packages/
             |-- a/                     // package a
                 |-- lib/
                       |-- index.js
             |-- b/                     // package b
  |-- resources/
              |-- a/
              |-- b/
```

```js
packages(); // -> use all packages
packages('a'); // -> use package `'a'`
packages('a', 'lib'); // -> use the `lib` folder of package `'a'`
```

### .copy(callback)

- callback `function(err, dir)`
- dir `path` a temporarily directory that contains all resources and nice toys which you will enjoy!

Copy the test fixtures to a temp dir.

### .resolve([path...])

```
.resolve(); // -> the base
```

Returns `path` 


### Available Packages

> As well as available resources.



## License

MIT
<!-- do not want to make nodeinit to complicated, you can edit this whenever you want. -->