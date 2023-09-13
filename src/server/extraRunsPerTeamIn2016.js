function extraRunsConcededPerTeam(matchData, deliveriesData) {
  let extraRunsPerTeam = {};
  let matches = matchData.filter((match) => match['season'] === '2016');

  //Iterate over each key for the year 2016
  for (const match of matches) {
    let matchId = match['id'];
    let filteredDeliveryData = deliveriesData.filter(
      (delivery) => delivery['match_id'] === matchId,
    );

    //For each match in 2016 run for loop for corresponding match ID
    for (let delivery of filteredDeliveryData) {
      //Store the extra run count in a data structure
      if (!extraRunsPerTeam[delivery['bowling_team']]) {
        extraRunsPerTeam[delivery['bowling_team']] = parseInt(
          delivery['extra_runs'],
        );
      } else if (extraRunsPerTeam[delivery['bowling_team']]) {
        extraRunsPerTeam[delivery['bowling_team']] += parseInt(
          delivery['extra_runs'],
        );
      }
    }
  }

  return extraRunsPerTeam;
}

module.exports = extraRunsConcededPerTeam;
