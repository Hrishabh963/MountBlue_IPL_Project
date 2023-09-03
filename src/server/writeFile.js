const fs = require('fs');
const path = require('path').resolve(__dirname, '..');

function writeDataToFile(dataRecieved, fileName) {
  const stringifiedData = JSON.stringify(dataRecieved);
  fs.writeFile(
    `${path}/public/output/${fileName}.json`,
    stringifiedData,
    'utf-8',
    (error) => {
      if (error) {
        console.log(error);
      }
    },
  );
}
module.exports = writeDataToFile;
