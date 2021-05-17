import React, { useState } from 'react';
import PropTypes from 'prop-types';

CountBox.propTypes = {

};

function CountBox(props) {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(x => x + 1)}>Đếm</button>
        </div>
    );
}

export default CountBox;