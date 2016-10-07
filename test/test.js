const Shlyce = require('..');
const expect = require('expect');

describe('Shlyce', function() {
  let shlyce;
  let arr = [1,2,3,4,5];
  beforeEach(function() {
    shlyce = new Shlyce(arr, 1, 3);
  });

  it('has a length', function() {
    expect(shlyce.length).toEqual(2);
  });

  it('supports [i] syntax for index lookups and assignments', function() {
    expect(shlyce[0]).toEqual(2);
    shlyce[0] = 99;
    expect(shlyce[0]).toEqual(99);
    expect(arr[1]).toEqual(99);
  });

  it('can be further sliced', function() {
    let subShlyce = shlyce.slice(1,2);
    expect(subShlyce[0]).toEqual(3);
  });
});
