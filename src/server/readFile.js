const fs = require('fs');
const csvParser = require('csv-parser');
const path = require('path').resolve(__dirname, '..');

function readFileData(filePath, callback) {
  const dataCollected = [];
  fs.createReadStream(`${path}/data/${filePath}`)
    .pipe(csvParser())
    .on('data', (dataRecieved) => {
      dataCollected.push(dataRecieved);
    })
    .on('end', () => {
      callback(null, dataCollected);
    })
    .on('error', (error) => {
      callback(error);
    });
}
module.exports = readFileData;
