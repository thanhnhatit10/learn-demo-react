import React from 'react';
import PropTypes from 'prop-types';

Hero.propTypes = {
    name: PropTypes.string,
};

Hero.defaultProps = {
    name: '',
}
function Hero({ name }) {
    console.log(name);
    return (
        <div>
            <p>{name}</p>
        </div>
    );
}

export default React.memo(Hero);