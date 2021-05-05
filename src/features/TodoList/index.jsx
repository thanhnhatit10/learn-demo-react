import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import List from './components/TodoList';
import TodoForm from './components/TodoForm';
import PostList from './components/PostList';
import Pagination from './components/Pagination';
import queryString from 'query-string';
import FilterForm from './components/PostFilterForm';

TodoList.propTypes = {

};
function TodoList(props) {

    const [todoList, setTodoList] = useState(
        [
            {
                id: 1,
                title: 'I love Easy Frontend! 😍 ',
            },
            {
                id: 2,
                title: 'We love Easy Frontend! 😍 '
            },
            {
                id: 3,
                title: 'They love Easy Frontend! 😍 '
            }
        ]
    );

    // post list 

    const [postList, setPostList] = useState([]);
    const [pagination, setPagination] = useState({
        _page: 1,
        _limit: 10,
        _totalRows: 50,
    });
    const [filters, setFilters] = useState({
        _limit: 10,
        _page: 1,
        title_like: '',
    });

    useEffect(() => {
        async function fetchPostList() {
            try {
                // Biến đổi object to string
                const paramString = queryString.stringify(filters);
                // lấy dữ liệu 
                const requesUrl = `http://js-post-api.herokuapp.com/api/posts?${paramString}`;
                //  chờ quá trình lấy dữ liêu
                const reponse = await fetch(requesUrl);
                const reponseJSON = await reponse.json();
                // console.log({ reponseJSON });
                const { data, pagination } = reponseJSON;
                setPostList(data);
                setPagination(pagination);
            } catch (error) {
                console.log('Lỗi không tìm thấy dữ liệu', error.message);
            }


        }

        fetchPostList();
    }, [filters]);
    // console.log(postList);



    function handlePageChange(newPage) {
        console.log('Trang:', newPage);
        setFilters({
            ...filters,
            _page: newPage,
        });

    }
    // console.log(setFilters);
    function handleTodoClick(todo) {
        // tìm vị trí 
        const index = todoList.findIndex(x => x.id === todo.id)
        if (index < 0) return;

        const newTodoList = [...todoList];
        newTodoList.splice(index, 1);

        setTodoList(newTodoList);
    }

    function handleSubmitForm(NewForm) {
        console.log(NewForm);
        const newTodo = {
            id: todoList.length + 1,
            ...NewForm,
        }
        const newTodoList = [...todoList];
        newTodoList.push(newTodo);
        setTodoList(newTodoList);
    }

    function handleSearchChangeTerm(newFilter) {
        console.log(newFilter);
        setFilters({
            ...filters,
            _page: 1,
            title_like: newFilter.searchTerm,
        })
    }
    return (
        <div>
            <TodoForm onSubmit={handleSubmitForm} />
            <List todos={todoList} onTodoClickOne={handleTodoClick} />
            <h3>Form tìm kiếm</h3>
            <FilterForm onSubmit={handleSearchChangeTerm} />
            <PostList posts={postList} />
            <Pagination
                pagination={pagination}
                onPageChange={handlePageChange} />

        </div>
    );
}

export default TodoList;