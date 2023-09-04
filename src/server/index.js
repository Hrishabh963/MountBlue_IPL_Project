const countMatchesPerYear = require('./matchesPerYear');
const readFileData = require('./readFile');
const writeFileData = require('./writeFile');
const countMatchesWonByTeamsPerYear = require('./matchesWonPerTeamPerYear');
const countExtraRunsPerTeam = require('./extraRunsPerTeamIn2016');

function main() {
  readFileData('matches.csv', (error, matches) => {
    if (error) {
      console.log(`Error reading the data file => ${error}`);
    } else {
      const matchesPerYear = countMatchesPerYear(matches);
      writeFileData(matchesPerYear, 'matchesPerYear');

      const matchesWonPerTeamPerYear = countMatchesWonByTeamsPerYear(matches);
      writeFileData(matchesWonPerTeamPerYear, 'matchesWonPerTeamPerYear');

      readFileData('deliveries.csv', (error, deliveries) => {
        if (error) {
          console.log(`Error reading the data file => ${error}`);
        } else {
          const extraRunsPerTeam = countExtraRunsPerTeam(matches, deliveries);
          writeFileData(extraRunsPerTeam, 'extraRunsPerTeamIn2016');
        }
      });
    }
  });
}
main();
