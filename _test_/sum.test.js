const sum = require('../src/server/sum');
test('add 1 + 2 equals 3 ', () => {
    expect(sum(1, 2)).toBe(3);
});