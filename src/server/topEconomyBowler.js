function topEconomyBowlers(matchData, deliveriesData) {
  const bowlerData = [];
  let matches = matchData.filter((match) => match['season'] == 2015);
  for (let match in matches) {
    const matchId = matches[match]['id'];
    let runData = deliveriesData.filter(
      (deliveries) => deliveries['match_id'] == matchId,
    );
    for (let run in runData) {
      if (!bowlerData[runData[run]['bowler']]) {
        bowlerData[runData[run]['bowler']] = {
          total_runs: parseInt(runData[run]['total_runs']),
          total_bowls: 1,
        };
      } else if (bowlerData[runData[run]['bowler']]) {
        bowlerData[runData[run]['bowler']]['total_runs'] += parseInt(
          runData[run]['total_runs'],
        );
        bowlerData[runData[run]['bowler']]['total_bowls'] += 1;
      }
    }
  }

  let totalPlayerEconomy = Object.entries(bowlerData).map(([name, stats]) => {
    const { total_runs, total_bowls } = stats;
    const average = total_runs / total_bowls;
    return { player_Name: name, economy_rate: average };
  });

  totalPlayerEconomy.sort((a, b) => a.economy_rate - b.economy_rate);

  const topTenPlayers = {};
  totalPlayerEconomy = totalPlayerEconomy.splice(0, 10);
  for (let index = 0; index < totalPlayerEconomy.length; index++) {
    topTenPlayers[totalPlayerEconomy[index]['player_Name']] =
      totalPlayerEconomy[index]['economy_rate'];
  }
  return topTenPlayers;
}

module.exports = topEconomyBowlers;
