import {createStore, combineReducers} from 'redux';
import {newGameReducer, toggleInfoReducer} from './reducers';


export default createStore(
    combineReducers({
        newGame: newGameReducer,
        toggleInfo: toggleInfoReducer
    })
)