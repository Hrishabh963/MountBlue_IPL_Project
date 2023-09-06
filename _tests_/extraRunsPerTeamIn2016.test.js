const countExtraRunsPerTeam = require('../src/server/extraRunsPerTeamIn2016');
const testRunData = [{
        match_id: '1',
        inning: '1',
        bowling_team: 'Sunrisers Hyderabad',
        extra_runs: '0',
    },
    {
        match_id: '1',
        inning: '1',
        bowling_team: 'Sunrisers Hyderabad',
        extra_runs: '2',
    },
    {
        match_id: '1',
        inning: '1',
        bowling_team: 'Sunrisers Hyderabad',
        extra_runs: '1',
    },
    {
        match_id: '1',
        inning: '1',
        bowling_team: 'Sunrisers Hyderabad',
        extra_runs: '3',
    },
    {
        match_id: '1',
        inning: '2',
        bowling_team: 'Royal Challengers Bangalore',
        extra_runs: '0',
    },
    {
        match_id: '1',
        inning: '2',
        bowling_team: 'Royal Challengers Bangalore',
        extra_runs: '1',
    },
    {
        match_id: '1',
        inning: '2',
        bowling_team: 'Royal Challengers Bangalore',
        extra_runs: '2',
    },
];

const testMatchData = [{
    id: '1',
    season: '2016',
    team1: 'Sunrisers Hyderabad',
    team2: 'Royal Challengers Bangalore',
    winner: 'Sunrisers Hyderabad',
    win_by_runs: 35,
    win_by_wickets: 0,
}, ];

const testDataResult = {
    'Sunrisers Hyderabad': 6,
    'Royal Challengers Bangalore': 3,
};

test('Sunrisers Hyderabad should have 6 extra runs ', () => {
    const resultGenerated = countExtraRunsPerTeam(testMatchData, testRunData);
    expect(resultGenerated['Sunrisers Hyderabad']).toBe(6);
});

test('Royal Challengers Bangalore should have 3 extra runs ', () => {
    const resultGenerated = countExtraRunsPerTeam(testMatchData, testRunData);
    expect(resultGenerated['Royal Challengers Bangalore']).toBe(3);
});

test('Testdata should match expected data ', () => {
    const resultGenerated = countExtraRunsPerTeam(testMatchData, testRunData);
    expect(resultGenerated).toStrictEqual(testDataResult);
});