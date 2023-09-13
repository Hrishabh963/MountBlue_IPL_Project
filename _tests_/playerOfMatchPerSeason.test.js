const findPlayerOfMatch = require('../src/server/playerOfMatchPerSeason');

const testDataSet = [
  {
    season: 2008,
    player_of_match: 'CH Gayle',
  },
  {
    season: 2008,
    player_of_match: 'SR Tendulkar',
  },
  {
    season: 2008,
    player_of_match: 'SR Tendulkar',
  },
  {
    season: 2017,
    player_of_match: 'V Kohli',
  },
  {
    season: 2017,
    player_of_match: 'V Kohli',
  },
  {
    season: 2017,
    player_of_match: 'Yuvraj',
  },
  {
    season: 2017,
    player_of_match: 'Yuvraj',
  },
];

const testResult = {
  2008: [{ player: 'SR Tendulkar', player_of_match: 2 }],
  2017: [
    { player: 'V Kohli', player_of_match: 2 },
    { player: 'Yuvraj', player_of_match: 2 },
  ],
};
test('Test result should match the generated result ', () => {
  const resultGenerated = findPlayerOfMatch(testDataSet);
  expect(resultGenerated).toStrictEqual(testResult);
});
