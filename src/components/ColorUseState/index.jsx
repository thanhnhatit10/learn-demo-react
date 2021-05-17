import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style.scss';
ColorUseState.propTypes = {

};

function getRandomColor() {
    const new_color = ['deeppink', 'green', 'yellow', 'black', 'blue'];
    const indexColor = Math.trunc(Math.random() * 5);
    return new_color[indexColor];
}

function ColorUseState() {

    const [color, setColor] = useState(() => {
        const initColor = localStorage.getItem('Color__box') || 'deeppink';
        return initColor;
    });

    function handleColor() {
        //    random color -> set color
        const newColor = getRandomColor();
        setColor(newColor);
        localStorage.setItem('Color__box', newColor);
    }
    return (
        <div className="Color__box" style={{ backgroundColor: color }} onClick={handleColor}>

        </div>
    );
}

export default ColorUseState;