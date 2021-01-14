import React, { Component } from 'react';
import Buttons from '../buttons/Buttons';
import Statistics from '../statistics/Statistics';
import Section from '../section/Section';
import Notification from '../notification/Notification';
import { CounterWrapper } from './styledCounter';


export default class Counter extends Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    }

    handleCounter = (e) => {
        const key = e.target.dataset.name;
        this.setState((prevState) => ({ [key]: prevState[key] + 1 }))

    }

    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        const total = good + neutral + bad;
        return total
    }

    countPositiveFeedbackPercentage = () => {
        const total = this.countTotalFeedback();
        const { good } = this.state;
        const percentage = Math.round((good / total) * 100);
        return `${percentage}%`;
    }

    render() {
        const { good, neutral, bad } = this.state;
        return (

            <CounterWrapper>
                <Section title="Please leave feedback" className="section">
                    <div className="buttonWrapper">
                        <Buttons options={this.state} handleCounter={this.handleCounter} className="button" />
                    </div>
                </Section>
                <Section title="Statistics">
                    {(this.countTotalFeedback()) === 0 ?
                        (<Notification message="No feedback given" />) :
                        (
                            <Statistics good={good}
                                neutral={neutral}
                                bad={bad}
                                countTotalFeedback={this.countTotalFeedback}
                                countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage} />
                        )}

                </Section>
            </CounterWrapper>

        )
    }
}