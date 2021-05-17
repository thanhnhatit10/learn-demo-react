import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import TodoList from '../../components/TodoList';
import { useHistory, useLocation, useRouteMatch } from 'react-router';
import queryString from 'query-string';
import TodoForm from '../../components/TodoForm';
ListPage.propTypes = {};

function ListPage(props) {
  const initTodoList = [
    {
      id: 1,
      title: 'Eat',
      status: 'new',
    },
    {
      id: 2,
      title: 'Sleep',
      status: 'completed',
    },
    {
      id: 3,
      title: 'Meet',
      status: 'new',
    },
    {
      id: 4,
      title: 'Rau',
      status: 'new',
    },
  ];
  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();
  const [todoList, setTodoList] = useState(initTodoList);
  const [filteredStatus, setFilteredStatus] = useState(() => {
    const param = queryString.parse(window.location.search);
    return param.status || 'all';
  });

  useEffect(() => {
    const param = queryString.parse(window.location.search);
    setFilteredStatus(param.status || 'all');
  }, [window.location.search]);

  const handleTodoClick = (todo, index) => {
    // clone ra một mảng mới
    const newTodoList = [...todoList];
    // console.log(todo, index);
    // toggle status
    newTodoList[index] = {
      ...newTodoList[index],
      status: newTodoList[index].status === 'new' ? 'completed' : 'new',
    };
    // update status
    setTodoList(newTodoList);
  };

  const handleShowALLClick = () => {
    // setFilteredStatus('all');
    const queryParams = { status: 'all' };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  };
  const handleShowCompletedClick = () => {
    // setFilteredStatus('completed');
    const queryParams = { status: 'completed' };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  };
  const handleShowNewClick = () => {
    // setFilteredStatus('new');
    const queryParams = { status: 'new' };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  };

  const renderTodoList = useMemo(() => {
    return todoList.filter((changeTodoList) => filteredStatus === 'all' || filteredStatus === changeTodoList.status);
  }, [todoList, filteredStatus]);

  const margin = {
    margin: '10px',
    cursor: 'pointer',
  };
  const handleTodoFormSubmit = (values) => {
    console.log('Todo Form',values);

    const newTodo = {
      id: todoList.length + 1,
      title: values.title,
      status: 'new',
    }
    const newTodoList = [...todoList, newTodo];
    setTodoList(newTodoList);
  };
  return (
    <div>
      <h3>What the todo form</h3>
      <TodoForm onSubmit={handleTodoFormSubmit} />
      <h3>Todo List</h3>
      <TodoList TodoList={renderTodoList} onTodoClick={handleTodoClick} />

      <div>
        <button style={margin} onClick={handleShowALLClick}>
          Show all
        </button>
        <button style={margin} onClick={handleShowCompletedClick}>
          Show completed
        </button>
        <button style={margin} onClick={handleShowNewClick}>
          Show new
        </button>
      </div>
    </div>
  );
}

export default ListPage;
