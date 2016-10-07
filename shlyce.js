/**
Constructor

Args:
arr {Array} - the backing Array
lo {uint} - inclusive lower bound
hi {unit} - exclusive upper bound
*/
class Shlyce {
  constructor (arr, lo, hi) {
    this.arr = arr;
    this.lo = lo || 0; // inclusive
    this.hi = hi || arr.length;
    this.length = hi - lo;
    const shlyce = new Proxy(this, {
      get: function(target, name) {
        if(/[0-9]+/.test(name)) {
          return target.get(Number(name));
        }
        return target[name];
      },

      set: function(target, name, value) {
        if(/[0-9]+/.test(name)) {
          return target.set(Number(name), value);
        }
        target[name] = value;
      }
    });
    return shlyce;
  }

  get(n) {
    return this.arr[this.lo + n];
  }

  set(n, x) {
    this.arr[this.lo + n] = x;
  }

  slice(lo, hi) {
    if(hi == null) {
      hi = this.hi;
    } else {
      hi += this.lo;
    }
    lo += this.lo;
    return new Shlyce(this.arr, lo, hi);
  }
}

module.exports = Shlyce;
