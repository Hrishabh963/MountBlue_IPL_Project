const subtract = require('../src/server/subtract')
test('3 - 1 = 2', () => {
    expect(subtract(3, 1)).toBe(2);
});