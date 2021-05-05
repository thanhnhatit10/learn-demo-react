import React, { useEffect, useRef, useState } from 'react';


function ranDomColor(currentColor) {
    const Color_list = ['red', 'green', 'yellow', 'deeppink', 'gray'];
    // tránh trùng lặp màu khi random

    const currentIndex = Color_list.indexOf(currentColor);
    let newIndex = currentIndex;

    while (currentIndex === newIndex) {
        newIndex = Math.trunc(Math.random() * 5);
    }
    return Color_list[newIndex];
}
function useMagicColor() {
    const [color, setColor] = useState('transparent');
    const colorRef = useRef('transparent');
    // Thay đổi color sau một giây
    useEffect(() => {
        const colorInterval = setInterval(() => {
            const newColor = ranDomColor();
            // console.log(colorRef.current);
            setColor(newColor);
            colorRef.current = newColor;

        }, 1000);

        return () => {
            clearInterval(colorInterval);
        };
    }, [])
    return { color };
}

export default useMagicColor;