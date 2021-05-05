import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

FilterForm.propTypes = {
    onSubmit: PropTypes.func,
};

FilterForm.defaultProps = {
    onSubmit: null,
}
function FilterForm(props) {
    const { onSubmit } = props;
    const [searchTerm, setSearchTerm] = useState('');
    // sửa dụng debounce 
    const typingTimeoutRef = useRef(null);
    function handleSearchChangeTerm(e) {
        // e.preventDefault();
        const value = e.target.value;
        setSearchTerm(value);
        if (!onSubmit) return;
        // xoas timeout cũ rồi mới settimeOut mới
        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current);
        };

        typingTimeoutRef.current = setTimeout(() => {
            const formValues = {
                searchTerm: value,
            }
            onSubmit(formValues);
        }, 300)
    }
    return (
        <form style={style.styleForm}>
            <input style={style.styleInput} type="text" value={searchTerm} onChange={handleSearchChangeTerm} />
        </form>
    );

}

const style = {
    styleForm: {
        paddingTop: 20,
        paddingLeft: 20,
    },
    styleInput: {
        border: '1px solid #e5e5e5',
        outline: 'none',
        padding: '8px',
        height: '20px',
    }
}
export default FilterForm;