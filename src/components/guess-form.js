import React from 'react';

import './guess-form.css';
import {TOGGLE_INFO} from '../actions'

export default class GuessForm extends React.Component {
    onGuess(event) {
        event.preventDefault();
        console.log('button clicked');

        if (this.props.onGuess) {
            const value = this.input.value;
            this.props.onGuess(value);
        }
        this.input.value = '';
       // this.props.dispatch(TOGGLE_INFO)
    }

    render() {
        return (
            <form onSubmit={e => this.onGuess(e)}>
                <label htmlFor="userGuess">Enter your Guess</label>
                <input type="text" name="userGuess" id="userGuess"
                    className="text" maxLength="3" autoComplete="off"
                    placeholder={Math.round(Math.random() * 100)} required
                    ref={input => this.input = input} />
                <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
            </form>
        );
    }
};

