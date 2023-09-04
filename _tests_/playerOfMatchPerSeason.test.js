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
];

const testResult = {
  2008: { 'SR Tendulkar': 2 },
  2017: { 'V Kohli': 2 },
};

test('Test result should match the generated result ', () => {
  const resultGenerated = findPlayerOfMatch(testDataSet);
  expect(resultGenerated).toStrictEqual(testResult);
});

test('For 2008 SR Tendulkar should be player of match ', () => {
  const resultGenerated = findPlayerOfMatch(testDataSet);
  expect(resultGenerated).toStrictEqual(testResult);
});
