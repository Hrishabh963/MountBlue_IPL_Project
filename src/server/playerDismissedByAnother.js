function countPlayerDismissed(deliveriesData) {
    const playerBowledCount = deliveriesData.filter((deliveres) => deliveres['player_dismissed'] != '')
    const playerDismissCount = {}

    //Iterate over each deliveries with dismissals
    playerBowledCount.forEach(deliveries => {
        const { bowler, player_dismissed, dismissal_kind } = deliveries;

        //Keep track of dismissal counts with same batsman and bowler
        if (dismissal_kind === 'bowled' || dismissal_kind === 'caught' || dismissal_kind === 'caught and bowled' || dismissal_kind == 'lbw') {
            if (!playerDismissCount[player_dismissed]) {
                playerDismissCount[player_dismissed] = {};
            }
            if (!playerDismissCount[player_dismissed][bowler]) {
                playerDismissCount[player_dismissed][bowler] = 1;
            } else {
                playerDismissCount[player_dismissed][bowler] += 1;
            }
        }
    });

    //Get the player with highest dismissals;
    let highestCount = 0;
    let highestNumberedPlayerDismissals = [];
    for (const batsman in playerDismissCount) {
        for (const bowler in playerDismissCount[batsman]) {
            const dissmissCount = playerDismissCount[batsman][bowler];
            if (dissmissCount > highestCount) {
                highestCount = dissmissCount;
                const playerDissmissal = {
                    batsman: batsman,
                    bowler: bowler,
                    count: dissmissCount
                };
                highestNumberedPlayerDismissals.push(playerDissmissal);
            } else if (dissmissCount === highestCount) {
                const playerDissmissal = {
                    batsman: batsman,
                    bowler: bowler,
                    count: dissmissCount
                };
                highestNumberedPlayerDismissals.push(playerDissmissal)
            }
        }
    }

    //Sort and filtret to get the highest dismissal counts only
    let sortedHighestNumberedDismissals = highestNumberedPlayerDismissals.sort((a, b) => b.count - a.count)
    const highestDismissal = sortedHighestNumberedDismissals[0].count
    sortedHighestNumberedDismissals = sortedHighestNumberedDismissals.filter((playerData) => playerData.count === highestDismissal);
    return sortedHighestNumberedDismissals
}

module.exports = countPlayerDismissed;