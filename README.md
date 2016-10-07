Shlyce
==============

Fast view into a subarray with an Array-like interface

[![NPM version](http://img.shields.io/npm/v/shlyce.svg?style=flat-square)](https://www.npmjs.org/package/shlyce)
[![Build Status](http://img.shields.io/travis/hurrymaplelad/shlyce/master.svg?style=flat-square)](https://travis-ci.org/hurrymaplelad/shlyce)

Examples
-------
```js
const Shlyce = require('shlyce');
const arr = [1,2,3,4,5];
const shlyce = new Shlyce(arr, 1); // Takes O(1) time, no data is copied
shlyce.length === 4;
shlyce[0] === 2;
shlyce[0] = 99; // Mutates the underlying array
arr[1] === 99;
```
