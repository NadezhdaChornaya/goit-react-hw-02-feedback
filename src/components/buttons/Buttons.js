import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './styledButton';


const Buttons = ({ options, handleCounter }) => {
    return (
        <>
            {Object.keys(options).map((key) => (
                <Button type="button"
                    className='buttonFeadback'
                    data-name={key}
                    onClick={handleCounter}>
                    {key.charAt(0).toUpperCase() + key.substr(1).toLowerCase()}
                </Button>
            ))}

        </>
    )

}

Buttons.propTypes = {
    options: PropTypes.array.isRequired,
    handleCounter: PropTypes.func.isRequired,
}

export default Buttons