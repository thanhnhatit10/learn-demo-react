import React, { useState } from 'react';
import PropTypes from 'prop-types';

TodoForm.propTypes = {
    onSubmit: PropTypes.func,
};

TodoForm.defaultProps = {
    onSubmit: null,
}
function TodoForm(props) {
    const { onSubmit } = props;
    const [value, setValue] = useState('');

    function handleOnchange(e) {
        // console.log(e.target.value);
        setValue(e.target.value);
    }
    function handleSubmit(e) {
        // Tránh loading trình duyệt khi submit form 
        e.preventDefault();

        if (!onSubmit) return;

        const NewForm = {
            title: value,
        }
        onSubmit(NewForm);

        setValue('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={value} onChange={handleOnchange} />
        </form>
    );
}

export default TodoForm;