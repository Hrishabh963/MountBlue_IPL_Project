function bestSuperOverEconomyBowler(deliveresData) {
  const superOverBowlerData = {};
  const superOverDeliveries = deliveresData.filter(
    (deliveries) => deliveries['is_super_over'] === '1',
  );

  //Iterate over deliveries filtered by super overs
  superOverDeliveries.forEach((deliveries) => {
    //For each entry store the stats of the bowler in a data structure
    if (!superOverBowlerData[deliveries['bowler']]) {
      superOverBowlerData[deliveries['bowler']] = {
        total_runs:
          parseInt(deliveries['wide_runs']) +
          parseInt(deliveries['noball_runs']) +
          parseInt(deliveries['batsman_runs']),
        total_balls: 1,
      };
    } else {
      superOverBowlerData[deliveries['bowler']]['total_runs'] +=
        parseInt(deliveries['wide_runs']) +
        parseInt(deliveries['noball_runs']) +
        parseInt(deliveries['batsman_runs']);
      superOverBowlerData[deliveries['bowler']]['total_balls'] += 1;
    }
  });

  //Get super over economy rate for each bowler
  let superOverEconomy = Object.entries(superOverBowlerData).map(
    ([name, stats]) => {
      const { total_runs, total_balls } = stats;
      const economyRate = (total_runs / (total_balls / 6)).toFixed(3);
      return { bowler: name, economy_rate: economyRate };
    },
  );

  //Sort the data by increasing order of economy rate and store the best economy rate bowler/bowlers in a data structure
  superOverEconomy = superOverEconomy.sort(
    (a, b) => a.economy_rate - b.economy_rate,
  );
  const highestEconomyRate = superOverEconomy[0].economy_rate;
  const filteredSuperOverEconomy = superOverEconomy.filter(
    (bowlerData) => bowlerData.economy_rate === highestEconomyRate,
  );
  const bestSuperOverEconomy = {};
  for (const bowlerData of filteredSuperOverEconomy) {
    bestSuperOverEconomy[bowlerData.bowler] = bowlerData.economy_rate;
  }
  return bestSuperOverEconomy;
}

module.exports = bestSuperOverEconomyBowler;
