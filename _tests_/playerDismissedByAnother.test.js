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
        batsman: 'V Kohli',
        bowler: 'TS Nills',
        dismissal_kind: 'bowled',
        player_dismissed: 'V Kohli'
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

const testDataResult = [
    { batsman: 'V Kohli', bowler: 'TS Nills', count: 3 },
    { batsman: 'S Nadeem', bowler: 'DL Chahar', count: 3 }
];
test('Test data should match result', () => {
    const resultGenerated = countPlayerDismissed(testData);
    expect(resultGenerated).toEqual(testDataResult)
})