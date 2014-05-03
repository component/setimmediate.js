# setimmediate.js

A really stupid, lightweight `setImmediate` polyfill for browsers and node 0.8.
Supports the browser as well as node.

For a most robust polyfill,
you should probably use [setImmediate](https://github.com/YuzuJS/setImmediate).
For most cases,
the underlying "next tick" mechanism is irrelevant.

## Usage

```js
require('setimmediate.js');

setImmediate(function () {
  console.log('something');
});
```

Nothing is exported! A global `setImmediate` function is added!
