const Benchmark = require('benchmark');
const Shlyce = require('.');

function binarySearch(a, n) {
  if(!a.length) return NaN;
  let mid = Math.floor(a.length / 2);
  if(a[mid] === n) return mid;
  if(a[mid] > n) return binarySearch(a.slice(0, mid), n);
  return (mid+1) + binarySearch(a.slice(mid+1), n);
}

const length = 250000;
const a = new Array(length);
for(let i=0; i<length; i++) {
  a[i] = i;
}
const shlyce = new Shlyce(a);

function genN() {
  return Math.floor(Math.random() * length);
}

new Benchmark.Suite()
.add('Shylce', () => {
  binarySearch(shlyce, genN());
})
.add('[].slice', () => {
  binarySearch(a, genN());
})
.on('cycle', (event) => {
  console.log(event.target.toString());
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})
.run({async: true});
