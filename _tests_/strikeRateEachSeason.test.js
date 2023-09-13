const findStrikeRate = require('../src/server/strikeRateEachSeason');

const testData = [
  { match_id: '1', inning: '1', batsman: 'V Kohli', batsman_runs: '3' },
  { match_id: '1', inning: '1', batsman: 'V Kohli', batsman_runs: '2' },
  { match_id: '1', inning: '1', batsman: 'J Yadav', batsman_runs: '1' },
  { match_id: '1', inning: '1', batsman: 'J Yadav', batsman_runs: '3' },
  { match_id: '1', inning: '2', batsman: 'NA Starc', batsman_runs: '1' },
  { match_id: '1', inning: '2', batsman: 'M de Lange', batsman_runs: '4' },
  { match_id: '2', inning: '2', batsman: 'Z Khan', batsman_runs: '5' },
  { match_id: '2', inning: '2', batsman: 'RN ten', batsman_runs: '4' },
  { match_id: '2', inning: '2', batsman: 'MC Henriques', batsman_runs: '1' },
  { match_id: '2', inning: '2', batsman: 'MC Henriques', batsman_runs: '1' },
];

const testMatchData = [
  {
    id: '1',
    season: '2015',
    team1: 'Sunrisers Hyderabad',
    team2: 'Royal Challengers Bangalore',
    winner: 'Sunrisers Hyderabad',
    win_by_runs: 35,
    win_by_wickets: 0,
  },
  {
    id: '2',
    season: '2008',
    team1: 'Delhi Daredevils',
    team2: 'Mumbai Indians',
    winner: 'Delhi Daredevils',
    win_by_runs: 35,
    win_by_wickets: 0,
  },
];

const testResult = {
  2008: {
    'Z Khan': '500.000',
    'RN ten': '400.000',
    'MC Henriques': '100.000',
  },
  2015: {
    'V Kohli': '250.000',
    'J Yadav': '200.000',
    'NA Starc': '100.000',
    'M de Lange': '400.000',
  },
};

test('Test data should match results generated ', () => {
  expect(findStrikeRate(testMatchData, testData)).toStrictEqual(testResult);
});

test('Virat Kohli should have 250 strike rate ', () => {
  const resultGenerated = findStrikeRate(testMatchData, testData);
  expect(parseInt(resultGenerated['2015']['V Kohli'])).toEqual(250);
});
