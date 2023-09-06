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

const testDataResult = { 'V Kohli': '12.000' };

test('Test data should match result ', () => {
    const resultGenerated = bestSuperOverEconomyBowler(testData);
    expect(resultGenerated).toEqual(testDataResult);
    expect(resultGenerated['V Kohli']).toEqual(testDataResult['V Kohli']);
})