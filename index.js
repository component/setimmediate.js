
if (typeof setImmediate === 'function') return;

// node is stupid and does some weird stuff with `this.`.
setImmediate = typeof process !== 'undefined'
  ? process.nextTick
  : function setImmediate(fn) { setTimeout(fn, 0) };
