const countMatchesPerYear = require('./matchesPerYear');
const readFileData = require('./readFile');
const writeFileData = require('./writeFile');
const countMatchesWonByTeamsPerYear = require('./matchesWonPerTeamPerYear');

function main() {
  readFileData('matches.csv', (error, matches) => {
    if (error) {
      console.log(`Error reading the data file => ${error}`);
    } else {
      const matchesPerYear = countMatchesPerYear(matches);
      writeFileData(matchesPerYear, 'matchesPerYear');

      const matchesWonPerTeamPerYear = countMatchesWonByTeamsPerYear(matches);
      writeFileData(matchesWonPerTeamPerYear, 'matchesWonPerTeamPerYear');
    }
  });
}
main();
