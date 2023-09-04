const countMatchesWonByTeamsPerYear = require('../src/server/matchesWonPerTeamPerYear');

const testDataSet = [
  {
    season: 2008,
    winner: 'Kings XI Punjab',
  },
  {
    season: 2008,
    winner: 'Delhi Daredevils',
  },
  {
    season: 2017,
    winner: 'Mumbai Indians',
  },
  {
    season: 2011,
    winner: 'Kolkata Knight Riders',
  },
  {
    season: 2017,
    winner: 'Mumbai Indians',
  },
];

const testDataResult = {
  2008: { 'Delhi Daredevils': 1, 'Kings XI Punjab': 1 },
  2011: { 'Kolkata Knight Riders': 1 },
  2017: { 'Mumbai Indians': 2 },
};

test('For year 2008 Delhi Darevils should win 1 ', () => {
  const resultsGenerated = countMatchesWonByTeamsPerYear(testDataSet);
  expect(resultsGenerated[2008]['Delhi Daredevils']).toBe(1);
});

test('For year 2017 Mumbai Indians should win 2 ', () => {
  const resultsGenerated = countMatchesWonByTeamsPerYear(testDataSet);
  expect(resultsGenerated[2017]['Mumbai Indians']).toBe(2);
});

test('For year 2011 Mumbai Indians should be undefined', () => {
  const resultsGenerated = countMatchesWonByTeamsPerYear(testDataSet);
  expect(resultsGenerated[2011]['Mumbai Indians']).toBe(undefined);
});

test('Result generated should match testDataResult', () => {
  const resultsGenerated = countMatchesWonByTeamsPerYear(testDataSet);
  expect(resultsGenerated).toStrictEqual(testDataResult);
});
