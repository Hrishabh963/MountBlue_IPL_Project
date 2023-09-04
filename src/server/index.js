const countMatchesPerYear = require('./matchesPerYear');
const readFileData = require('./readFile');
const writeFileData = require('./writeFile');
const countMatchesWonByTeamsPerYear = require('./matchesWonPerTeamPerYear');
const countExtraRunsPerTeam = require('./extraRunsPerTeamIn2016');
const topEconomyBowlers = require('./topEconomyBowler');
const tossWinMatchWinCount = require('./tossWinMatchWin');
const findPlayerOfMatch = require('./playerOfMatchPerSeason');
const findStrikeRate = require('./strikeRateEachSeason');

function main() {
  readFileData('matches.csv', (error, matches) => {
    if (error) {
      console.log(`Error reading the data file => ${error}`);
    } else {
      const matchesPerYear = countMatchesPerYear(matches);
      writeFileData(matchesPerYear, 'matchesPerYear');

      const matchesWonPerTeamPerYear = countMatchesWonByTeamsPerYear(matches);
      writeFileData(matchesWonPerTeamPerYear, 'matchesWonPerTeamPerYear');

      const tossWinMatchWin = tossWinMatchWinCount(matches);
      writeFileData(tossWinMatchWin, 'tossWinMatchWin');

      const playerOfMatchPerSeason = findPlayerOfMatch(matches);
      writeFileData(playerOfMatchPerSeason, 'playerOfMatchPerSeason');

      readFileData('deliveries.csv', (error, deliveries) => {
        if (error) {
          console.log(`Error reading the data file => ${error}`);
        } else {
          const extraRunsPerTeam = countExtraRunsPerTeam(matches, deliveries);
          writeFileData(extraRunsPerTeam, 'extraRunsPerTeamIn2016');

          const topTenEconomyBowlers = topEconomyBowlers(matches, deliveries);
          writeFileData(topTenEconomyBowlers, 'topTenEconomyBowlers');

          const strikeRates = findStrikeRate(matches, deliveries);
          writeFileData(strikeRates, 'strikeRatesForEachSeason');
        }
      });
    }
  });
}
main();
