function findStrikeRate(matchData, deliveriesData) {
  const strikeDataPerBatsman = {};
  matchData.forEach((match) => {
    const { id, season } = match;
    const runData = deliveriesData.filter(
      (deliveries) => deliveries['match_id'] == id,
    );
    runData.forEach((run) => {
      if (!strikeDataPerBatsman[season]) {
        strikeDataPerBatsman[season] = {};
      }
      if (!strikeDataPerBatsman[season][run['batsman']]) {
        strikeDataPerBatsman[season][run['batsman']] = {
          total_runs: parseInt(run['batsman_runs']),
          total_balls: 1,
        };
      } else {
        strikeDataPerBatsman[season][run['batsman']]['total_runs'] += parseInt(
          run['batsman_runs'],
        );
        strikeDataPerBatsman[season][run['batsman']]['total_balls'] += 1;
      }
    });
  });
  const strikeRates = {};
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
