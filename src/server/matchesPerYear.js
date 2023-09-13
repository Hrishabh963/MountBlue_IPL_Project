function countMatchesPeryear(matchData) {
  const matchesPlayedPerYear = {};

  //iterate over each match and store its count to corresponding season
  matchData.forEach((matches) => {
    matchesPlayedPerYear[matches.season] = matchesPlayedPerYear[matches.season]
      ? matchesPlayedPerYear[matches.season] + 1
      : 1;
  });
  return matchesPlayedPerYear;
}
module.exports = countMatchesPeryear;
