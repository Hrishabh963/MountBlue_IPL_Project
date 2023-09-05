function topEconomyBowlers(matchData, deliveriesData) {
    const bowlerData = [];
    let matches = matchData.filter((match) => match['season'] == 2015);

    //Run for in loop for matches of year 2015
    for (let match in matches) {
        const matchId = matches[match]['id'];
        let runData = deliveriesData.filter(
            (deliveries) => deliveries['match_id'] == matchId,
        );

        //Run for in loop for data filtered by match id
        for (let run in runData) {

            //For each bowler store its stats in a data structure
            if (!bowlerData[runData[run]['bowler']]) {
                bowlerData[runData[run]['bowler']] = {
                    total_runs: parseInt(runData[run]['wide_runs']) +
                        parseInt(runData[run]['noball_runs']) +
                        parseInt(runData[run]['batsman_runs']),
                    total_bowls: 1,
                };
            } else if (bowlerData[runData[run]['bowler']]) {
                bowlerData[runData[run]['bowler']]['total_runs'] +=
                    parseInt(runData[run]['wide_runs']) +
                    parseInt(runData[run]['noball_runs']) +
                    parseInt(runData[run]['batsman_runs']);
                bowlerData[runData[run]['bowler']]['total_bowls'] += 1;
            }
        }
    }

    //Using map,make a new array of object to economy rate of each bowler

    let totalPlayerEconomy = Object.entries(bowlerData).map(([name, stats]) => {
        const { total_runs, total_bowls } = stats;
        const average = (total_runs / (total_bowls / 6)).toFixed(3);
        return { player_Name: name, economy_rate: average };
    });

    //Sort them in increasing order
    totalPlayerEconomy.sort((a, b) => a.economy_rate - b.economy_rate);

    const topTenPlayers = {};
    totalPlayerEconomy = totalPlayerEconomy.splice(0, 10);

    //Drop the data into  an object and return it
    for (let index = 0; index < totalPlayerEconomy.length; index++) {
        topTenPlayers[totalPlayerEconomy[index]['player_Name']] =
            totalPlayerEconomy[index]['economy_rate'];
    }

    return topTenPlayers;
}

module.exports = topEconomyBowlers;