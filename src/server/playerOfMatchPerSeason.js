function findPlayerOfMatch(matchData) {
  let playerOfMatchCount = {};
  matchData.forEach((match) => {
    const { season, player_of_match } = match;
    if (!playerOfMatchCount[season]) {
      playerOfMatchCount[season] = {};
    }
    if (!playerOfMatchCount[season][player_of_match]) {
      playerOfMatchCount[season][player_of_match] = 1;
    } else {
      playerOfMatchCount[season][player_of_match] += 1;
    }
  });
  for (let year in playerOfMatchCount) {
    const maxPlayer = Object.keys(playerOfMatchCount[year]).reduce(
      (max, player) => {
        if (playerOfMatchCount[year][player] > playerOfMatchCount[year][max]) {
          return player;
        } else return max;
      },
    );
    const newPlayerData = {};
    newPlayerData[maxPlayer] = playerOfMatchCount[year][maxPlayer];
    playerOfMatchCount[year] = newPlayerData;
  }
  return playerOfMatchCount;
}

module.exports = findPlayerOfMatch;
