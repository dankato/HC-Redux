import * as actions from './actions';

const initialState = {
    guesses: [],
    feedback: 'Make your guess!',
    correctAnswer: Math.floor(Math.random() * 100) + 1,
    showInfoModal: false,
};

// export const newGameReducer = (state = initialState, action) => {
//     if (action.type === actions.NEWGAME) {
//         return Object.assign({}, state, {
//           guesses: [],
//           feedback: 'Make your guess!'  
//         });
//     } 
//     return state;
// };

export const reducer = (state = initialState, action) => {
    if(action.type === actions.TOGGLE_INFO) {
        return Object.assign({}, state, {
            showInfoModal: !state.showInfoModal
        });
    }

    if (action.type === actions.NEWGAME) {
        return Object.assign({}, state, {
          guesses: [],
          feedback: 'Make your guess!'  
        });
    } 

    if(action.type === action.guess) {
        return Object.assign({}, state, {
        // saving for tuesday

        })
    }



    return state;
};

