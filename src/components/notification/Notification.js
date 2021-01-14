import React from 'react'
import PropTypes from 'prop-types';
import { Pmessage } from './styledNotification';

export const Notification = ({ message }) => {
    return (
        <>
            <Pmessage>{message}</Pmessage>
        </>
    )
}

Notification.propTypes = {
    message: PropTypes.string.isRequired,
}

export default Notification