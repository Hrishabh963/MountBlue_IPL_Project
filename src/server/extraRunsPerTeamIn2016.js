function extraRunsConcededPerTeam(matchData, deliveriesData) {
    let extraRunsPerTeam = {};
    let matches = matchData.filter((match) => match['season'] == 2016);

    //Iterate over each key for the year 2016
    for (const key in matches) {
        let matchId = matches[key]['id'];
        let runData = deliveriesData.filter(
            (delivery) => delivery['match_id'] == matchId,
        );

        //For each match in 2016 run for loop for corresponding match ID
        for (let runs in runData) {

            //Store the extra run count in a data structure
            if (!extraRunsPerTeam[runData[runs]['batting_team']]) {
                extraRunsPerTeam[runData[runs]['batting_team']] = parseInt(
                    runData[runs]['extra_runs'],
                );
            } else if (extraRunsPerTeam[runData[runs]['batting_team']]) {
                extraRunsPerTeam[runData[runs]['batting_team']] += parseInt(
                    runData[runs]['extra_runs'],
                );
            }
        }
    }

    return extraRunsPerTeam;
}

module.exports = extraRunsConcededPerTeam;