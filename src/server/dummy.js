const topEconomyBowlers = require('./topEconomyBowler');

const testData = [
  { match_id: '1', inning: '1', bowler: 'R Ashwin', total_runs: '3' },
  { match_id: '1', inning: '1', bowler: 'V Kohli', total_runs: '2' },
  { match_id: '1', inning: '1', bowler: 'J Yadav', total_runs: '1' },
  { match_id: '1', inning: '1', bowler: 'S Nadeem', total_runs: '3' },
  { match_id: '1', inning: '2', bowler: 'NA Starc', total_runs: '1' },
  { match_id: '1', inning: '2', bowler: 'M de Lange', total_runs: '4' },
  { match_id: '1', inning: '2', bowler: 'Z Khan', total_runs: '5' },
  { match_id: '1', inning: '2', bowler: 'RN ten', total_runs: '4' },
  { match_id: '1', inning: '2', bowler: 'MC Henriques', total_runs: '1' },
  { match_id: '1', inning: '2', bowler: 'MC Henriques', total_runs: '1' },
];

const testMatchData = [
  {
    id: 1,
    season: 2015,
    team1: 'Sunrisers Hyderabad',
    team2: 'Royal Challengers Bangalore',
    winner: 'Sunrisers Hyderabad',
    win_by_runs: 35,
    win_by_wickets: 0,
  },
];

console.log(topEconomyBowlers(testMatchData, testData));
