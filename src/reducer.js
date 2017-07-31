import * as actions from './actions';

const initialState = {
    guesses, 
    feedback,
    correctAnswer: Math.floor(Math.random() * 100) + 1
};

export const newGameReducer = (state = initialState, action) => {
    if (action.type === actions.newGame) {
        console.log('It was a new game');
        return Object.assign({}, state, {
          guesses: [],
          feedback: 'Make your guess!'  
        });
    } 
    return state;
};
