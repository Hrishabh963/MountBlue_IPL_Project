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
      //Function to count number of matches per season
      const matchesPerYear = countMatchesPerYear(matches);
      writeFileData(matchesPerYear, 'matchesPerYear');

      //Function to count wins of each individual team sorted by year
      const matchesWonPerTeamPerYear = countMatchesWonByTeamsPerYear(matches);
      writeFileData(matchesWonPerTeamPerYear, 'matchesWonPerTeamPerYear');

      //Function to count the number of times a team won the toss and the match
      const tossWinMatchWin = tossWinMatchWinCount(matches);
      writeFileData(tossWinMatchWin, 'tossWinMatchWin');

      //Function to count the player of match each season
      const playerOfMatchPerSeason = findPlayerOfMatch(matches);
      writeFileData(playerOfMatchPerSeason, 'playerOfMatchPerSeason');

      readFileData('deliveries.csv', (error, deliveries) => {
        if (error) {
          console.log(`Error reading the data file => ${error}`);
        } else {
          //Function to count extra runs secured by each team
          const extraRunsPerTeam = countExtraRunsPerTeam(matches, deliveries);
          writeFileData(extraRunsPerTeam, 'extraRunsPerTeamIn2016');

          //Function to calculate economy rates and return top 10 best bowlers
          const topTenEconomyBowlers = topEconomyBowlers(matches, deliveries);
          writeFileData(topTenEconomyBowlers, 'topTenEconomyBowlers');

          //Function to count strike rates of each batsman per season
          const strikeRates = findStrikeRate(matches, deliveries);
          writeFileData(strikeRates, 'strikeRatesForEachSeason');
        }
      });
    }
  });
}
main();
