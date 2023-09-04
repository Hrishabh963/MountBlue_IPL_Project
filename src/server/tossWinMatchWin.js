function tossWinMatchWinCount(matchData) {
  const tossWinMatchWin = {};
  matchData.forEach((match) => {
    const { season, toss_winner, winner } = match;
    if (toss_winner === winner) {
      tossWinMatchWin[season] = tossWinMatchWin[season]
        ? tossWinMatchWin[season] + 1
        : 1;
    }
  });
  return tossWinMatchWin;
}

module.exports = tossWinMatchWinCount;
