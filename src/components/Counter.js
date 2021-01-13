import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Counter extends Component {
    static propTypes = {};

    static defaultProps = { total: 0, }

    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    }

    handleCounter = e => {
        e.preventDefault();
        const name = e.target.name;
        this.setState((state) => {
            return {
                [name]: state[name] + 1
            }
        })
    }

    handleTotal = (state) => {
        const { good, neutral, bad } = this.state;
        const total = good + neutral + bad;
        return total
    }

    render() {
        const { good, neutral, bad, total } = this.state;
        return (
            <section>
                <div>
                    <h2>Please leave feedback</h2>
                    <button type="button" className='buttonFeadback' onClick={this.handleCounter}>Good</button>
                    <button type="button" className='buttonFeadback' onClick={this.handleCounter}>Neutral</button>
                    <button type="button" className='buttonFeadback' onClick={this.handleCounter}>Bad</button>
                </div>
                <div>
                    <h2>Statistics</h2>
                    <ul>
                        <li>Good:{good}</li>
                        <li>Neutral:{neutral}</li>
                        <li>Bad:{bad}</li>
                        <li>Total</li>
                        <li>Positive feedback</li>
                    </ul>
                </div>
            </section>
        )
    }
}