function countMatchesWonPerTeamPerYear(matches) {
  const teamWins = {};

  matches.forEach((match) => {
    const year = match.season;
    const winner = match.winner;

    if (!teamWins[year]) {
      teamWins[year] = {};
    }

    if (!teamWins[year][winner]) {
      teamWins[year][winner] = 1;
    } else {
      teamWins[year][winner]++;
    }
  });

  return teamWins;
}

module.exports = countMatchesWonPerTeamPerYear;
