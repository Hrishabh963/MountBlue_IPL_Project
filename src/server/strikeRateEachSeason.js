function findStrikeRate(matchData, deliveriesData) {
  const strikeDataPerBatsman = {};

  //For each match get its match ID
  matchData.forEach((match) => {
    const { id, season } = match;
    const filteredDeliveryData = deliveriesData.filter(
      (deliveries) => deliveries['match_id'] == id,
    );

    //Run for each for the filtered delivery data
    filteredDeliveryData.forEach((delivery) => {
      //Store the stats of the batsman in a data structure, grouped by season
      if (!strikeDataPerBatsman[season]) {
        strikeDataPerBatsman[season] = {};
      }
      if (!strikeDataPerBatsman[season][delivery['batsman']]) {
        strikeDataPerBatsman[season][delivery['batsman']] = {
          total_runs: parseInt(delivery['batsman_runs']),
          total_balls: 1,
        };
      } else {
        strikeDataPerBatsman[season][delivery['batsman']]['total_runs'] +=
          parseInt(delivery['batsman_runs']);
        strikeDataPerBatsman[season][delivery['batsman']]['total_balls'] += 1;
      }
    });
  });

  const strikeRates = {};

  //For each year ,make a key value pair of batsman and its strike rate
  for (const year in strikeDataPerBatsman) {
    const yearlyData = strikeDataPerBatsman[year];
    strikeRates[year] = Object.fromEntries(
      Object.entries(yearlyData).map(([playerName, stats]) => {
        const strikeRate = (
          (stats['total_runs'] / stats['total_balls']) *
          100
        ).toFixed(3);
        return [playerName, strikeRate];
      }),
    );
  }
  return strikeRates;
}

module.exports = findStrikeRate;
