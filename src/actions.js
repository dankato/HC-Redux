
export const NEWGAME = 'NEWGAME';
export const newGame = ({
    type: NEWGAME,
    correctAnswer: Math.floor(Math.random() * 100) + 1
});

export const TOGGLE_INFO = 'TOGGLE_INFO';
export const toggleInfo = ({
    type: TOGGLE_INFO,
});

export const GUESS = "GUESS";
export const guess = guess => ({
    type: GUESS,
    guess
});