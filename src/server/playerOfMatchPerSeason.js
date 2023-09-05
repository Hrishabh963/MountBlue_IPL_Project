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

    //For each year,reduce the player_of_match count to keep the highest count
    for (let year in playerOfMatchCount) {
        const maxPlayer = Object.keys(playerOfMatchCount[year]).reduce(
            (max, player) => {
                if (playerOfMatchCount[year][player] > playerOfMatchCount[year][max]) {
                    return player;
                } else return max;
            },
        );

        //Dump the data into an object and store it for its respective season
        const newPlayerData = {};
        newPlayerData[maxPlayer] = playerOfMatchCount[year][maxPlayer];
        playerOfMatchCount[year] = newPlayerData;
    }
    return playerOfMatchCount;
}

module.exports = findPlayerOfMatch;