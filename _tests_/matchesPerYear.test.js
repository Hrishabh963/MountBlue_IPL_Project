const matchesPerYear = require('../src/server/matchesPerYear');

const testDataSet = [{
        "season": 2008,
        "team1": "Sunrisers Hyderabad",
        "team2": "Royal Challengers Bangalore",
    },
    {
        "season": 2017,
        "team1": "Mumbai Indians",
        "team2": "Rising Pune Supergiant",
    },
    {
        "season": 2017,
        "team1": "Gujarat Lions",
        "team2": "Kolkata Knight Riders",
    },
    {
        "season": 2009,
        "team1": "Rising Pune Supergiant",
        "team2": "Kings XI Punjab",
    }
]

const testDataResult = {
    '2008': 1,
    '2009': 1,
    '2017': 2
};

test('Result generated should match the testDataResult ', () => {
    expect(matchesPerYear(testDataSet)).toStrictEqual(testDataResult);
})

test('Year 2017 should be 2 matches', () => {
    const generatedResult = matchesPerYear(testDataSet);
    expect(generatedResult[2017]).toBe(2)
})

test('Year 2010 should be undefined', () => {
    const generatedResult = matchesPerYear(testDataSet);
    expect(generatedResult[2010]).toBe(undefined)
})