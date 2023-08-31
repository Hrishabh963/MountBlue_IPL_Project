const matchesPerYear =
    require('../src/server/matchesPerYear').numberOfMatchesPerYear;

test('2008 should have 58 matches', () => {
    matchesPerYear((err, data) => {
        expect(data[2008]).toBe(58);
    });
});

test('2009 should have 57 matches and 2011 should have 73 matches', () => {
    matchesPerYear((err, data) => {
        expect(data[2009]).toBe(57);
        expect(data[2011]).toBe(73);
    });
});

test('data generated should match the test data', () => {
    const testData = {
        2008: 58,
        2009: 57,
        2010: 60,
        2011: 73,
        2012: 74,
        2013: 76,
        2014: 60,
        2015: 59,
        2016: 60,
        2017: 59,
    };
    matchesPerYear((err, data) => {
        expect(data).toStrictEqual(testData);
    });
});