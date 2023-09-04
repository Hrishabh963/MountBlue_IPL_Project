const tossWinMatchWinCount = require('../src/server/tossWinMatchWin');

const testData = [
  {
    id: 1,
    season: 2017,
    toss_winner: 'Royal Challengers Bangalore',
    winner: 'Sunrisers Hyderabad',
  },
  {
    id: 2,
    season: 2017,
    toss_winner: 'Rising Pune Supergiant',
    winner: 'Rising Pune Supergiant',
  },
  {
    id: 3,
    season: 2011,
    toss_winner: 'Kolkata Knight Riders',
    winner: 'Kolkata Knight Riders',
  },
  {
    id: 4,
    season: 2011,
    toss_winner: 'Kings XI Punjab',
    winner: 'Kings XI Punjab',
  },
  {
    id: 5,
    season: 2010,
    toss_winner: 'Royal Challengers Bangalore',
    winner: 'Royal Challengers Bangalore',
  },
  {
    id: 6,
    season: 2009,
    toss_winner: 'Sunrisers Hyderabad',
    winner: 'Sunrisers Hyderabad',
  },
];

const testDataResult = { 2009: 1, 2010: 1, 2011: 2, 2017: 1 };

test('Result should match testDataResult', () => {
  expect(tossWinMatchWinCount(testData)).toStrictEqual(testDataResult);
});

test('2009 should be 1', () => {
  const resultGenerated = tossWinMatchWinCount(testData);
  expect(resultGenerated['2009']).toBe(1);
});

test('2011 should be 2', () => {
  const resultGenerated = tossWinMatchWinCount(testData);
  expect(resultGenerated['2011']).toBe(2);
});
