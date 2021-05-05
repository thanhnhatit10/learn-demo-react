import React, { useEffect, useState } from 'react';

ColorBox.propTypes = {

};

function randomColor() {
    const colorRed = ['deeppink', 'green', 'yellow', 'black', 'blue'];
    const indexcolor = Math.trunc(Math.random() * 5);

    return colorRed[indexcolor];
};

function useMagicColor() {
    const [colorBox, setColorBox] = useState('green');

    useEffect(() => {
        const setColorInterval = setInterval(() => {
            const newColor = randomColor();
            setColorBox(newColor);
        }, 1000);

        return () => {
            clearInterval(setColorInterval);
        }
    }, []);


    return { colorBox };
}



function ColorBox(props) {
    const [color, setColor] = useState('while');
    const { colorBox } = useMagicColor();
    return (
        <div>
            <p>State trong ReactJS</p>
            <p style={{ color }}>{color}</p>
            <button onClick={() => setColor('black')}>Change color black</button>
            <button onClick={() => setColor('red')}>Change color while</button>

            <p style={{ backgroundColor: colorBox, width: '100px', height: '100px' }}>Màu: {colorBox}</p>
        </div>
    );
}

export default ColorBox;