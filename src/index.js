import './reset.css';
import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import './reset.css';
import './index.css';
import {toggleInfo, newGame} from './actions';
import Game from './components/game';

store.dispatch(newGame);
// store.dispatch(toggleInfo);

console.log(store.getState());

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
