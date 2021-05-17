import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './style.scss';
TodoList.propTypes = {
    TodoList: PropTypes.array,
    onTodoClick: PropTypes.func,
};

TodoList.defaultProps = {
    TodoList: [],
    onTodoClick: null,
};

function TodoList(props) {
    const { TodoList } = props;
    const { onTodoClick } = props;
    const handleTodoClick = (todo, index) => {
        if (!onTodoClick) return;

        onTodoClick(todo, index);
    }
    return (
        <ul className="todo-list">
            {TodoList.map((todo, index) => (
                <li key={todo.id}
                    className={classnames({ 'todo-item': true, completed: todo.status === 'completed' })}
                    onClick={() => handleTodoClick(todo, index)}
                >
                    {todo.title}
                </li>
            ))}
        </ul>
    );
}

export default TodoList;