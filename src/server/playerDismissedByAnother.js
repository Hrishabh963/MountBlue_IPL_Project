function countPlayerDismissed(deliveriesData) {
    const playerBowledCount = deliveriesData.filter((deliveres) => deliveres['player_dismissed'] != '')
    const playerDismissCount = {}
    playerBowledCount.forEach(deliveries => {
        const { bowler, player_dismissed, dismissal_kind } = deliveries;
        if (dismissal_kind == 'bowled' || dismissal_kind == 'caught' || dismissal_kind == 'caught and bowled' || dismissal_kind == 'lbw') {
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
    let highestNumberedPlayerDismissals = {};
    for (const batsman in playerDismissCount) {
        for (const bowler in playerDismissCount[batsman]) {
            const count = playerDismissCount[batsman][bowler];
            if (count > highestCount) {
                highestCount = count;
                highestNumberedPlayerDismissals['name'] = batsman;
                highestNumberedPlayerDismissals['bowler'] = bowler;
                highestNumberedPlayerDismissals['count'] = count;
            }
        }
    }
    return highestNumberedPlayerDismissals
}
module.exports = countPlayerDismissed;