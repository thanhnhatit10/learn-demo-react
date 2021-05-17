import React, { Fragment, useEffect, useState } from 'react';
import CountBox from './components/CountBox';
import ColorBox from './components/ColorBox';
import AlbumFeature from './features/Album';
import TodoFeatures from './features/Todo';
import Clock from './components/Clock';
import ColorUseState from './components/ColorUseState';
import TodoList from './features/TodoList';
import TodoForm from './features/TodoList/components/TodoForm';
import MagicBoxColor from './components/MagicBoxColor';
import Hero from './components/Hero';
import { Redirect, Route, Switch } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import './App.scss';
import NotFound from './components/NotFound';
import productApi from './api/productApi';
import CounterFeature from './features/Counter';
import styled from 'styled-components';
import Header from './components/Header';
import ProductsFeature from './features/Product';

const Title = styled.h1`
    text-align: center;
    color: ${(props) => props.color || 'green'};
`;
function App() {
    const name = 'Nhat';
    const age = 18;
    const isMale = true;
    const student = {
        name: 'Nhat Nguyen',
    };
    const colorList = ['red', 'green', 'blue', 'yellow'];
    const [showClock, setShowClock] = useState(true);
    const [count, setCount] = useState(0);

    useEffect(() => {
        const fectProduct = async () => {
            const params = {
                _limit: 10,
            };
            const productList = await productApi.getAll(params);
            // console.log(productList);
        };
        fectProduct();
    }, []);
    return (
        <React.Fragment>
            {/* <header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
				Xin chào {student.name}
				</p>
				<p>Xin chào {name} - {age} - {isMale ? 'Male' : 'Female'}</p>
				{isMale ? <p>Giới tính nam</p> : <p>Giới tính nữ</p>}

				{isMale && <p>Male</p>}
				{!isMale && <p>Female</p>}

				{isMale && (
				<div>
				<p>Male 1 </p>
				<p>Male 2</p>
				<p>Male 3</p>
				</div>
				)}

				{isMale && (
				<React.Fragment>
				<p>Male 4</p>
				<p>Male 5</p>
				<p>Male 6</p>
				</React.Fragment>
				)}

				{isMale && (
				<>
				<p>Male 8</p>
				<p>Male 9</p>
				<p>Male 10</p>
				</>
				)}

				<ul>
				{colorList.map(color => (
				<li key={color} style={{color}}>{color}</li>
				))}
				</ul>
			</header> */}
			<Header />
           	{/* <Title color="red">Home Page</Title> */}
            <Switch>
                <Redirect from="/home" to="/" exact></Redirect>
                <Route exact path="/" component={CounterFeature} />
                <Route path="/todos-list" component={TodoFeatures} />
                <Route path="/albums" component={AlbumFeature} />
                <Route path="/color" component={ColorBox} />
				<Route path="/product" component={ProductsFeature}/>
                <Route path="/count" component={CountBox} />
                <Route component={NotFound} />
            </Switch>
            {/*       
			<div>
				<p>React Hook - useSate - useEffect - custom hook</p>
				<ColorUseState />
				<TodoList />
				{showClock ? <Clock /> : <p>Đồng hồ đã bị tắt</p>}
				<button onClick={() => setShowClock(false)}>Ẩn đồng hồ</button>
				<button onClick={() => setShowClock(true)}>Hiện đồng hồ</button>
				<MagicBoxColor />
			</div>
			<div>

				<p>React Memo</p>
				<p>Điểm: {count}</p>
				<button onClick={() => setCount(count + 1)}>Tính toán</button>
				<Hero name='Nguyen Thanh Nhat' />
			</div> */}
        </React.Fragment>
    );
}

export default App;
