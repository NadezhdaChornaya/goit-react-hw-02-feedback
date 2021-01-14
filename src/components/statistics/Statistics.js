import React from 'react';
import PropTypes from 'prop-types';
import { CounterList } from './styledStatistic';


export const Statistics = ({ good, neutral, bad, countTotalFeedback, countPositiveFeedbackPercentage }) => {
    return (
        <>
            <CounterList>
                <li className="counterItems good">Good:{good}</li>
                <li className="counterItems neutral">Neutral:{neutral}</li>
                <li className="counterItems bad">Bad:{bad}</li>
                <li className="counterItems total">Total: {countTotalFeedback()}</li>
                <li className="counterItems positive">Positive feedback: {countPositiveFeedbackPercentage()}</li>
            </CounterList>
        </>
    )
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    countTotalFeedback: PropTypes.func.isRequired,
    countPositiveFeedbackPercentage: PropTypes.func.isRequired,
};

export default Statistics