import React from 'react'
import PropTypes from 'prop-types';
import { CounterSection } from './styledSection';

export const Section = ({ title, children }) => {
    return (
        <CounterSection>
            <h2 className="title">{title}</h2>
            {children}
        </CounterSection>
    )
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}

export default Section