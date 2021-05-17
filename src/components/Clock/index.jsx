import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
Clock.propTypes = {

};
function formatDate(date) {
    if (!date) return 'Đồng hồ đã bị tắt';
    const hours = `0${date.getHours()}`.slice(-2);
    const minutes = `0${date.getMinutes()}`.slice(-2);
    const seconds = `0${date.getSeconds()}`.slice(-2);

    return `${hours}:${minutes}:${seconds}`;
}
function useClock() {
    const [timeString, setTimeString] = useState('');

    useEffect(() => {
        const clockInterval = setInterval(() => {
            const now = new Date();
            const newTimeString = formatDate(now);
            setTimeString(newTimeString);
        }, 2000);

        return () => {
            clearInterval(clockInterval);
        };

    }, []);

    return { timeString };
}

function Clock() {
    const { timeString } = useClock();
    return (
        <div>
            <p>Đây là Clock sửa dụng useEffect</p>
            <p style={style.container}>{timeString}</p>
        </div>
    );
}

const style = {
    container: {
        color: 'red',
        fontSize: 20,
    }
}
export default Clock;