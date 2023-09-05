const bestSuperOverEconomyBowler = require("../src/server/bestSuperOverEconomy");

const testData = [{
        'is_super_over': '1',
        bowler: 'R Ashwin',
        batsman_runs: '3',
        wide_runs: '0',
        noball_runs: '0',
    },
    {
        'is_super_over': '1',
        bowler: 'V Kohli',
        batsman_runs: '2',
        wide_runs: '0',
        noball_runs: '0',
    },
    {
        'is_super_over': '1',
        bowler: 'S Nadeem',
        batsman_runs: '3',
        wide_runs: '0',
        noball_runs: '0',
    },
    {
        'is_super_over': '1',
        bowler: 'S Nadeem',
        batsman_runs: '1',
        wide_runs: '1',
        noball_runs: '0',
    },
    {
        'is_super_over': '0',
        bowler: 'M de Lange',
        batsman_runs: '4',
        wide_runs: '2',
        noball_runs: '0',
    },
    {
        'is_super_over': '1',
        bowler: 'Z Khan',
        batsman_runs: '5',
        wide_runs: '0',
        noball_runs: '0',
    },
    {
        'is_super_over': '1',
        bowler: 'RN ten',
        batsman_runs: '4',
        wide_runs: '1',
        noball_runs: '0',
    },
];

const testDataResult = { bowler: 'V Kohli', economy_rate: '12.000' };

test('Virat Kohli should be the best bowler ', () => {
    const resultGenerated = bestSuperOverEconomyBowler(testData);
    expect(resultGenerated['bowler']).toEqual(testDataResult['bowler']);
})

test('Virat Kohli should have economy rate of 12  ', () => {
    const resultGenerated = bestSuperOverEconomyBowler(testData);
    expect(resultGenerated['economy_rate']).toEqual(testDataResult['economy_rate']);
})