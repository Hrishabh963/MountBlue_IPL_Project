const countPlayerDismissed = require("../src/server/playerDismissedByAnother");

const testData = [{
        batsman: 'V Kohli',
        bowler: 'TS Nills',
        dismissal_kind: 'caught',
        player_dismissed: 'V Kohli'
    },
    {
        batsman: 'V Kohli',
        bowler: 'TS Nills',
        dismissal_kind: 'bowled',
        player_dismissed: 'V Kohli'
    },
    {
        batsman: 'J Yadav',
        bowler: 'TM Head',
        dismissal_kind: '',
        player_dismissed: ''
    },
    {
        batsman: 'S Nadeem',
        bowler: 'DL Chahar',
        dismissal_kind: 'caught',
        player_dismissed: 'S Nadeem'
    },
    {
        batsman: 'S Nadeem',
        bowler: 'DL Chahar',
        dismissal_kind: 'bowled',
        player_dismissed: 'S Nadeem'
    },
    {
        batsman: 'S Nadeem',
        bowler: 'DL Chahar',
        dismissal_kind: 'lbw',
        player_dismissed: 'S Nadeem'

    },
    {
        batsman: 'Z Khan',
        bowler: 'JJ Bumrah',
        dismissal_kind: 'caught and bowled',
        player_dismissed: 'Z Khan'
    },
];

const testDataResult = { name: 'S Nadeem', bowler: 'DL Chahar', count: 3 };

test('S Nadeem should be the most dismissed batsman', () => {
    const resultGenerated = countPlayerDismissed(testData);
    expect(resultGenerated['name']).toBe(testDataResult['name'])
})

test('S Nadeem should be the most dismissed by DL Chahar', () => {
    const resultGenerated = countPlayerDismissed(testData);
    expect(resultGenerated['bowler']).toBe(testDataResult['bowler'])
})

test('S Nadeem should be dismissed 3 times', () => {
    const resultGenerated = countPlayerDismissed(testData);
    expect(resultGenerated['count']).toBe(testDataResult['count'])
})