function findPlayerOfMatch(matchData) {
    let playerOfMatchCount = {};

    //Run for loop to get the player_match for each season
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

    //Cycle through the object to get all players with highest count per season
    let highestPlayerOfMatchPerSeason = {};
    for (const year in playerOfMatchCount) {
        const yearData = playerOfMatchCount[year];
        let highestCount = 0;
        let highestPlayerOfMatch = [];
        for (const player in yearData) {
            const playerCount = yearData[player];
            if (playerCount > highestCount) {
                highestCount = playerCount;
                highestPlayerOfMatch = [{ player: player, player_of_match: playerCount }];
            } else if (playerCount === highestCount) {
                highestPlayerOfMatch.push({ player: player, player_of_match: playerCount });
            }
        }
        highestPlayerOfMatchPerSeason[year] = highestPlayerOfMatch;
    }
    return highestPlayerOfMatchPerSeason;
}

module.exports = findPlayerOfMatch;