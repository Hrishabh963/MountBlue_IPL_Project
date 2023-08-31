const countTeamWins = require('../src/server/matchesWonPerTeamPerYear');

test('In year 2008 KKR should have won 6 matches ', () => {
    countTeamWins((err, data) => {
        expect(data[2008]['Kolkata Knight Riders']).toBe(6);
    })
})

test('Year 2010 data set should match the generated data set ', () => {
    const matchesWonIn2010 = {
        "Kolkata Knight Riders": 7,
        "Mumbai Indians": 11,
        "Delhi Daredevils": 7,
        "Deccan Chargers": 8,
        "Royal Challengers Bangalore": 8,
        "Chennai Super Kings": 9,
        "Rajasthan Royals": 6,
        "Kings XI Punjab": 4

    }
    countTeamWins((err, data) => {
        expect(data[2010]).toStrictEqual(matchesWonIn2010);
    })
})


test('Matches won by RCB in 2009 and 2017 should be 9 and 3 ', () => {
    countTeamWins((err, data) => {
        expect(data[2009]['Royal Challengers Bangalore']).toBe(9);
        expect(data[2017]['Royal Challengers Bangalore']).toBe(3);
    })
})