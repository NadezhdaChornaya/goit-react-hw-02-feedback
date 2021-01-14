import React from 'react';
import PropTypes from 'prop-types';


const Buttons = ({ options, handleCounter }) => {
    return (
        <>
            {Object.keys(options).map((key) => (
                <button type="button"
                    className='buttonFeadback'
                    data-name={key}
                    onClick={handleCounter}>
                    {key.charAt(0).toUpperCase() + key.substr(1).toLowerCase()}
                </button>
            ))}

        </>
    )

}

Buttons.propTypes = {
    options: PropTypes.array.isRequired,
    handleCounter: PropTypes.func.isRequired,
}

export default Buttons