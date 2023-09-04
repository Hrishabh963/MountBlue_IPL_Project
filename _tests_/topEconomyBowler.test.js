const topEconomyBowlers = require("../src/server/topEconomyBowler");

const testRunData1 = [
    { "match_id": "1", "inning": "1", "bowler": "R Ashwin", "total_runs": "3" },
    { "match_id": "1", "inning": "1", "bowler": "V Kohli", "total_runs": "2" },
    { "match_id": "1", "inning": "1", "bowler": "J Yadav", "total_runs": "1" },
    { "match_id": "1", "inning": "1", "bowler": "S Nadeem", "total_runs": "3" },
    { "match_id": "1", "inning": "2", "bowler": "NA Starc", "total_runs": "1" },
    { "match_id": "1", "inning": "2", "bowler": "M de Lange", "total_runs": "4" },
    { "match_id": "1", "inning": "2", "bowler": "Z Khan", "total_runs": "5" },
    { "match_id": "1", "inning": "2", "bowler": "RN ten", "total_runs": "4" },
    { "match_id": "1", "inning": "2", "bowler": "MC Henriques", "total_runs": "1" },
    { "match_id": "1", "inning": "2", "bowler": "MC Henriques", "total_runs": "1" }
]

const testMatchData = [{
    "id": 1,
    "season": 2015,
    "team1": "Sunrisers Hyderabad",
    "team2": "Royal Challengers Bangalore",
    "winner": "Sunrisers Hyderabad",
    "win_by_runs": 35,
    "win_by_wickets": 0,
}]

const testResult = {
    'J Yadav': 1,
    'NA Starc': 1,
    'MC Henriques': 1,
    'V Kohli': 2,
    'R Ashwin': 3,
    'S Nadeem': 3,
    'M de Lange': 4,
    'RN ten': 4,
    'Z Khan': 5
}

test('Virat Kohli should have economy rate of 2 ', () => {
    const resultGenerated = topEconomyBowlers(testMatchData, testRunData1);
    expect(resultGenerated['V Kohli']).toBe(2)
})

test('J Yadav should be top 1 ', () => {
    const resultGenerated = topEconomyBowlers(testMatchData, testRunData1);
    expect(Object.keys(resultGenerated)[0]).toBe('J Yadav')
})

test('Result Generated should match the test result', () => {
    const resultGenerated = topEconomyBowlers(testMatchData, testRunData1);
    expect(resultGenerated).toStrictEqual(testResult)
})