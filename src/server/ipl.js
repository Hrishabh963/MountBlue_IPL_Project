const http = require('http');
//const cors = require('cors');
const fs = require('fs').promises;
const path = require('path').resolve(__dirname, '..');

const server = http.createServer(async (req, res) => {
  if (req.url === '/matches_per_year') {
    const data = await fs.readFile(
      `${path}/public/output/matchesPerYear.json`,
      'utf-8',
    );
    res.writeHead(200, {
      'Catche-Control': 'no-store',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
      'Content-Type': 'application/json',
    });
    res.end(data);
  } else if (req.url === '/matches_per_team') {
    const data = await fs.readFile(
      `${path}/public/output/matchesWonPerTeamPerYear.json`,
      'utf-8',
    );
    res.writeHead(200, {
      'Catche-Control': 'no-store',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
      'Content-Type': 'application/json',
    });
    res.end(data);
  } else if (req.url === '/extra_runs_per_team') {
    const data = await fs.readFile(
      `${path}/public/output/extraRunsPerTeamIn2016.json`,
      'utf-8',
    );
    res.writeHead(200, {
      'Catche-Control': 'no-store',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
      'Content-Type': 'application/json',
    });
    res.end(data);
  } else if (req.url === '/player_of_match') {
    const data = await fs.readFile(
      `${path}/public/output/playerOfMatchPerSeason.json`,
      'utf-8',
    );
    res.writeHead(200, {
      'Catche-Control': 'no-store',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
      'Content-Type': 'application/json',
    });
    res.end(data);
  } else if (req.url === '/player_dismissed') {
    const data = await fs.readFile(
      `${path}/public/output/playerDismissedByAnother.json`,
      'utf-8',
    );
    res.writeHead(200, {
      'Catche-Control': 'no-store',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
      'Content-Type': 'application/json',
    });
    res.end(data);
  } else if (req.url === '/toss_win') {
    const data = await fs.readFile(
      `${path}/public/output/tossWinMatchWin.json`,
      'utf-8',
    );
    res.writeHead(200, {
      'Catche-Control': 'no-store',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
      'Content-Type': 'application/json',
    });
    res.end(data);
  } else if (req.url === '/strike_rates') {
    const data = await fs.readFile(
      `${path}/public/output/strikeRatesForEachSeason.json`,
      'utf-8',
    );
    res.writeHead(200, {
      'Catche-Control': 'no-store',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
      'Content-Type': 'application/json',
    });
    res.end(data);
  } else if (req.url === '/economy_bowlers') {
    const data = await fs.readFile(
      `${path}/public/output/topTenEconomyBowlers.json`,
      'utf-8',
    );
    res.writeHead(200, {
      'Catche-Control': 'no-store',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
      'Content-Type': 'application/json',
    });
    res.end(data);
  } else if (req.url === '/super_over') {
    const data = await fs.readFile(
      `${path}/public/output/bestSuperOverEconomy.json`,
      'utf-8',
    );
    res.writeHead(200, {
      'Catche-Control': 'no-store',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
      'Content-Type': 'application/json',
    });
    res.end(data);
  } else {
    res.end(`Invalid endpoint`);
  }
});

server.listen(3000, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`Listening on port 3000`);
  }
});
