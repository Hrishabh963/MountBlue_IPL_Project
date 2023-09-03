function countMatchesPeryear(matchData) {
  const matchesPlayedPerYear = {};
  matchData.forEach((matches) => {
    matchesPlayedPerYear[matches.season] = matchesPlayedPerYear[matches.season]
      ? matchesPlayedPerYear[matches.season] + 1
      : 1;
  });
  return matchesPlayedPerYear;
}
module.exports = countMatchesPeryear;
