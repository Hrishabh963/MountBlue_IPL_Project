/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
document.addEventListener('DOMContentLoaded', async function () {
  try {
    await getMatchesPerYear();
    await getMatchesWonPerTeam();
    await getTopTenEconomyBowlers();
    await getSuperOver();
    await getTossWin();
    await getExtraRunsPerTeam();
    await getPlayerOfMatchPerSeason();
    await getPlayerDismissed();
    await getStrikeRates();
  } catch (error) {
    console.log(error);
  }
});
async function getMatchesPerYear() {
  try {
    const result = await fetch('http://localhost:3000/matches_per_year');
    const matchesPerYear = await result.json();
    const array = [];
    for (const year in matchesPerYear) {
      array.push({ year: year, matches: matchesPerYear[year] });
    }
    const years = array.map((matches) => matches.year);
    const matchCount = array.map((matches) => matches.matches);
    await Highcharts.chart('matches_per_year', {
      chart: {
        type: 'bar',
      },
      title: {
        text: 'Matches per year',
      },
      xAxis: {
        categories: years,
        title: {
          text: 'Year',
        },
      },
      yAxis: {
        title: {
          text: 'number of matches',
        },
      },
      series: [{ name: 'Matches', data: matchCount }],
    });
  } catch (error) {
    console.log(error);
  }
}

async function getMatchesWonPerTeam() {
  try {
    const result = await fetch('http://localhost:3000/matches_per_team');
    const matchesWonPerTeam = await result.json();
    const years = Object.keys(matchesWonPerTeam);
    const teams = Array.from(
      new Set(Object.values(matchesWonPerTeam).flatMap(Object.keys)),
    );

    // Prepare series data for Highcharts
    const seriesData = teams.map((team) => ({
      name: team,
      data: years.map((year) => matchesWonPerTeam[year][team] || 0),
    }));

    // Create the Highcharts chart
    await Highcharts.chart('matches_won_per_team', {
      chart: {
        type: 'bar',
        height: 400,
      },
      title: {
        text: 'Matches per Year by Team',
      },
      xAxis: {
        categories: years,
        title: {
          text: 'Year',
        },
      },
      yAxis: {
        title: {
          text: 'Number of Matches',
        },
      },
      legend: {
        reversed: true, // To display legends in reverse order
      },
      plotOptions: {
        series: {
          stacking: 'normal',
        },
      },
      series: seriesData,
    });
  } catch (error) {
    console.log(error);
  }
}

async function getTopTenEconomyBowlers() {
  try {
    const result = await fetch('http://localhost:3000/economy_bowlers');
    const bowlers = await result.json();
    const playerNames = Object.keys(bowlers);
    const economyRates = Object.values(bowlers).map((rate) => parseFloat(rate)); // Convert rates to numbers

    // Create the Highcharts chart
    await Highcharts.chart('economy_rate', {
      chart: {
        type: 'bar',
        height: 400,
      },
      title: {
        text: 'Economy Rates of Players',
      },
      xAxis: {
        categories: playerNames,
        title: {
          text: 'Player',
        },
      },
      yAxis: {
        title: {
          text: 'Economy Rate',
        },
      },
      series: [
        {
          name: 'Economy Rate',
          data: economyRates,
        },
      ],
    });
  } catch (error) {
    console.log(error);
  }
}

async function getSuperOver() {
  try {
    const result = await fetch('http://localhost:3000/super_over', {
      method: 'GET',
    });
    const superOverData = await result.json();
    const playerNames = Object.keys(superOverData);
    const economyRates = Object.values(superOverData).map((rate) =>
      parseFloat(rate),
    ); // Convert rates to numbers

    // Create the Highcharts chart
    await Highcharts.chart('super_over', {
      chart: {
        type: 'bar',
        height: 400,
      },
      title: {
        text: 'Best Economy Rates of Players in super overs',
      },
      xAxis: {
        categories: playerNames,
        title: {
          text: 'Player',
        },
      },
      yAxis: {
        title: {
          text: 'Economy Rate',
        },
      },
      series: [
        {
          name: 'Economy Rate',
          data: economyRates,
        },
      ],
    });
  } catch (error) {
    console.log(error);
  }
}

async function getTossWin() {
  try {
    const result = await fetch('http://localhost:3000/toss_win', {
      method: 'GET',
    });
    const tossWin = await result.json();
    const years = Object.keys(tossWin);
    const matchCounts = Object.values(tossWin);
    // Create the Highcharts chart
    await Highcharts.chart('toss_win', {
      chart: {
        type: 'line',
        height: 400,
      },
      title: {
        text: 'Number of times a team won the toss and the match',
      },
      xAxis: {
        categories: years,
        title: {
          text: 'Team',
        },
      },
      yAxis: {
        title: {
          text: 'Number of Matches',
        },
      },
      series: [
        {
          name: 'Matches',
          data: matchCounts,
        },
      ],
    });
  } catch (error) {
    console.log(error);
  }
}

async function getExtraRunsPerTeam() {
  const result = await fetch('http://localhost:3000/extra_runs_per_team');
  const extraRuns = await result.json();
  const teams = Object.keys(extraRuns);
  const extras = Object.values(extraRuns);
  await Highcharts.chart('extra_runs_per_team', {
    chart: {
      type: 'column',
    },
    title: {
      text: 'Extra runs conceded per team',
    },
    xAxis: {
      categories: teams,
    },
    yAxis: {
      title: {
        text: 'Extra runs',
      },
    },
    series: [
      {
        name: 'Extra runs conceded',
        data: extras,
      },
    ],
  });
}

async function getPlayerOfMatchPerSeason() {
  const result = await fetch('http://localhost:3000/player_of_match');
  const data = await result.json();

  // Create an array of player names for each year
  var years = Object.keys(data);
  var playersData = {};

  // Process the data to count player of the match awards for each player in each year
  years.forEach(function (year) {
    data[year].forEach(function (entry) {
      var player = entry.player;
      var playerOfTheMatchCount = entry.player_of_match;

      if (!playersData[player]) {
        playersData[player] = {};
      }

      playersData[player][year] = playerOfTheMatchCount;
    });
  });

  // Prepare data for Highcharts
  var categories = Object.keys(playersData);
  var seriesData = years.map(function (year) {
    return {
      name: year,
      data: categories.map(function (player) {
        return playersData[player][year] || 0;
      }),
    };
  });

  // Create the chart
  Highcharts.chart('player_of_match', {
    chart: {
      type: 'bar',
    },
    title: {
      text: 'Player of the Match Awards by Year',
    },
    xAxis: {
      categories: categories,
      title: {
        text: 'Players',
      },
    },
    yAxis: {
      title: {
        text: 'Number of Player of the Match Awards',
      },
    },
    series: seriesData,
  });
}

async function getPlayerDismissed() {
  const result = await fetch('http://localhost:3000/player_dismissed');
  const playerData = await result.json();
  // Extract unique batsman and bowler names
  const batsmanNames = [...new Set(playerData.map((item) => item.batsman))];
  const bowlerNames = [...new Set(playerData.map((item) => item.bowler))];

  // Create an array of series data for each unique batsman
  const seriesData = batsmanNames.map((batsmanName) => {
    const data = playerData
      .filter((item) => item.batsman === batsmanName)
      .map((item) => ({
        name: item.bowler,
        y: item.count,
      }));
    return {
      name: batsmanName,
      data: data,
    };
  });

  await Highcharts.chart('player_dismissed', {
    chart: {
      type: 'column',
      height: 400,
    },
    title: {
      text: 'Maximum times Player Dismissed by same bowler',
    },
    xAxis: {
      categories: bowlerNames,
      title: {
        text: 'Bowler',
      },
    },
    yAxis: {
      title: {
        text: 'Count',
      },
    },
    series: seriesData,
  });
}

async function getStrikeRates() {
  const result = await fetch('http://localhost:3000/strike_rates');
  const data = await result.json();
  const years = Object.keys(data);
  const players = Array.from(
    new Set(
      Object.values(data).flatMap((playerData) => Object.keys(playerData)),
    ),
  );

  // Prepare series data for each year
  const seriesData = years.map((year) => ({
    name: year,
    data: players.map((player) => parseFloat(data[year][player]) || 0),
  }));

  Highcharts.chart('strike_rate', {
    chart: {
      type: 'column',
      height: 400,
      zoomType: 'xy',
    },
    title: {
      text: 'Strike Rates by Year',
    },
    xAxis: {
      categories: players,
      title: {
        text: 'Player',
      },
    },
    yAxis: {
      title: {
        text: 'Batting Average',
      },
    },
    series: seriesData,
  });
}
