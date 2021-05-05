import React from 'react';
import PropTypes from 'prop-types';
import useMagicColor from '../../hook/useMagicColor';
import './style.scss';

MagicBoxColor.propTypes = {

};

function MagicBoxColor(props) {
    const { color } = useMagicColor();
    return (
        <div>
            <p className='color-box' style={{ backgroundColor: color }}>Hi</p>
        </div>
    );
}

const style = {
    colorBox: {
        display: 'inline-block',
        width: '100px',
        height: '100px',
    }
}
export default MagicBoxColor;