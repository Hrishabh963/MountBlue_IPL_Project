function bestSuperOverEconomyBowler(deliveresData) {
    const superOverBowlerData = {};
    const superOverDeliveries = deliveresData.filter(deliveries => deliveries['is_super_over'] == '1');

    superOverDeliveries.forEach(deliveries => {
        if (!superOverBowlerData[deliveries['bowler']]) {
            superOverBowlerData[deliveries['bowler']] = {
                total_runs: parseInt(deliveries['wide_runs']) + parseInt(deliveries['noball_runs']) + parseInt(deliveries['batsman_runs']),
                total_balls: 1
            };
        } else {
            superOverBowlerData[deliveries['bowler']]['total_runs'] += parseInt(deliveries['wide_runs']) + parseInt(deliveries['noball_runs']) + parseInt(deliveries['batsman_runs'])
            superOverBowlerData[deliveries['bowler']]['total_balls'] += 1;
        }
    });

    let superOverEconomy = Object.entries(superOverBowlerData).map(([name, stats]) => {
        const { total_runs, total_balls } = stats;
        const economyRate = (total_runs / (total_balls / 6)).toFixed(3);
        return { bowler: name, economy_rate: economyRate }
    })
    superOverEconomy = superOverEconomy.sort((a, b) => a.economy_rate - b.economy_rate).splice(0, 1);
    return superOverEconomy[0];
}
module.exports = bestSuperOverEconomyBowler;