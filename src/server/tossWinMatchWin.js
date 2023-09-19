function tossWinMatchWinCount(matchData) {
  const tossWinMatchWin = {};

  //For each match,see if the toss winner and match winner is same
  for (const match of matchData) {
    const { toss_winner, winner } = match;
    if (toss_winner === winner) {
      if (!tossWinMatchWin[toss_winner]) {
        tossWinMatchWin[toss_winner] = 1;
      } else {
        tossWinMatchWin[toss_winner] += 1;
      }
    }
  }
  return tossWinMatchWin;
}

module.exports = tossWinMatchWinCount;
