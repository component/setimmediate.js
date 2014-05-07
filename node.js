
if (typeof setImmediate !== 'function') {
  // node is stupid and does some weird stuff with `this.`.
  setImmediate = process.nextTick
}
