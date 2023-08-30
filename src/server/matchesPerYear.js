const fs = require('fs');
const path = require('path').resolve(__dirname, '..');
const csvParser = require('csv-parser');

function countMatchesPeryear(callback) {
  const result = [];
  const matchCount = {};

  fs.createReadStream(path + '/data/matches.csv')
    .pipe(csvParser())
    .on('data', (data) => {
      result.push(data);
    })
    .on('end', () => {
      result.forEach((element) => {
        matchCount[element.season] = matchCount[element.season]
          ? matchCount[element.season] + 1
          : 1;
      });
      let matchData = JSON.stringify(matchCount);
      fs.writeFileSync(
        `${path}/public/output/matchesPerYear.json`,
        matchData,
        'utf-8',
      );
      callback(null, matchCount);
    })
    .on('error', (error) => {
      callback(error);
    });
}
module.exports.numberOfMatchesPerYear = countMatchesPeryear;
