const topEconomyBowlers = require('../src/server/topEconomyBowler');

const testData = [
    { match_id: '1', inning: '1', bowler: 'R Ashwin', batsman_runs: '3', wide_runs: '0', noball_runs: '0' },
    { match_id: '1', inning: '1', bowler: 'V Kohli', batsman_runs: '2', wide_runs: '0', noball_runs: '0' },
    { match_id: '1', inning: '1', bowler: 'J Yadav', batsman_runs: '1', wide_runs: '0', noball_runs: '0' },
    { match_id: '1', inning: '1', bowler: 'S Nadeem', batsman_runs: '3', wide_runs: '0', noball_runs: '0' },
    { match_id: '1', inning: '2', bowler: 'NA Starc', batsman_runs: '1', wide_runs: '1', noball_runs: '0' },
    { match_id: '1', inning: '2', bowler: 'M de Lange', batsman_runs: '4', wide_runs: '2', noball_runs: '0' },
    { match_id: '1', inning: '2', bowler: 'Z Khan', batsman_runs: '5', wide_runs: '0', noball_runs: '0' },
    { match_id: '1', inning: '2', bowler: 'RN ten', batsman_runs: '4', wide_runs: '1', noball_runs: '0' },
    { match_id: '1', inning: '2', bowler: 'MC Henriques', batsman_runs: '1', wide_runs: '0', noball_runs: '0' },
    { match_id: '1', inning: '2', bowler: 'MC Henriques', batsman_runs: '1', wide_runs: '0', noball_runs: '4' },
];


const testMatchData = [{
    id: 1,
    season: 2015,
    team1: 'Sunrisers Hyderabad',
    team2: 'Royal Challengers Bangalore',
    winner: 'Sunrisers Hyderabad',
    win_by_runs: 35,
    win_by_wickets: 0,
}, ];

const testResult = {
    'J Yadav': '6.000',
    'V Kohli': '12.000',
    'NA Starc': '12.000',
    'R Ashwin': '18.000',
    'S Nadeem': '18.000',
    'MC Henriques': '18.000',
    'Z Khan': '30.000',
    'RN ten': '30.000',
    'M de Lange': '36.000'
}

test('Virat Kohli should have economy rate of 12 ', () => {
    const resultGenerated = topEconomyBowlers(testMatchData, testData);
    expect(parseInt(resultGenerated['V Kohli'])).toEqual(12);
});

test('J Yadav should be top 1 ', () => {
    const resultGenerated = topEconomyBowlers(testMatchData, testData);
    expect(Object.keys(resultGenerated)[0]).toBe('J Yadav');
});

test('Result Generated should match the test result', () => {
    const resultGenerated = topEconomyBowlers(testMatchData, testData);
    expect(resultGenerated).toEqual(testResult);
});