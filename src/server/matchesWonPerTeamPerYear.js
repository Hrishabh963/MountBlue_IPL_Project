const fs = require('fs');
const path = require('path').resolve(__dirname, '..');
const csvParser = require('csv-parser');

function countMatchesWonPerTeamPerYear(data) {
  const teamWins = {};

  data.forEach((match) => {
    const year = match.season;
    const winner = match.winner;

    if (!teamWins[year]) {
      teamWins[year] = {};
    }

    if (!teamWins[year][winner]) {
      teamWins[year][winner] = 1;
    } else {
      teamWins[year][winner]++;
    }
  });

  return teamWins;
}

function matchesWonByPerTeamPerYear(callback) {
  const result = [];
  let matchesWonPerTeam = {};
  fs.createReadStream(path + '/data/matches.csv')
    .pipe(csvParser())
    .on('data', (data) => {
      result.push(data);
    })
    .on('end', () => {
      matchesWonPerTeam = countMatchesWonPerTeamPerYear(result);
      let teamWinData = JSON.stringify(matchesWonPerTeam);
      fs.writeFileSync(
        `${path}/public/output/matchesWonPerTeamPerYear.json`,
        teamWinData,
        'utf-8',
      );
      callback(null, matchesWonPerTeam);
    })
    .on('error', (error) => {
      callback(error);
    });
}
module.exports = matchesWonByPerTeamPerYear;
