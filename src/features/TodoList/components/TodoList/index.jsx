import React from 'react';
import PropTypes from 'prop-types';

List.propTypes = {
    todos: PropTypes.array,
    onTodoClickOne: PropTypes.func,
};

List.defaultProps = {
    todos: [],
    onTodoClickOne: null,
}

function List(props) {
    const { todos, onTodoClickOne } = props;
    function handleTodoClick(todo) {
        if (onTodoClickOne) {
            onTodoClickOne(todo);
        }
    }
    return (
        <ul>
            {todos.map((todo, index) => (
                <li
                    key={todo.id}
                    onClick={() => handleTodoClick(todo)}
                >
                    {todo.title}
                </li>
            ))}
        </ul>
    );
}

export default List;