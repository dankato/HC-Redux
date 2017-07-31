import * as actions from './actions';

const initialState = {
    guesses: [],
    feedback: 'Make your guess!',
    correctAnswer: Math.floor(Math.random() * 100) + 1
};

export const newGameReducer = (state = initialState, action) => {
    console.log('It was a new game');
    console.log(action.type, 'test action');
    if (action.type === actions.NEWGAME) {
       console.log('going inside?')
        return Object.assign({}, state, {
          guesses: [],
          feedback: 'Make your guess!'  
        });
    } 
    return state;
};

export const toggleInfoReducer = (state = initialState, action) => {
    console.log('toggleInfoReducer clicked');
    if(action.type === actions.TOGGLE_INFO) {
        console.log(state);
        return Object.assign({}, state, {
            showInfoModal: !this.state.showInfoModal
        });
    }
    return state;
};

// export const guessReducer = (state, initialState, action) => {
//     if(action.type === action.guess) {
//         return Object.assign({}, state, {
        

            
//         })
//     }
// }