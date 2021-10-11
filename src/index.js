import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Posts from './posts';
import Register from './register';
import Login from './login';

const api = 'https://strangers-things.herokuapp.com/api/2107-CSU-RM-WEB-PT/';


const App = () => {
    return (
        <BrowserRouter>
            <div id='container'>
                <div id='navbar'>
                    <Link to="/posts">Posts</Link>
                    <Link to="/register">Registration</Link>
                    <Link to="/login">Login</Link>
                </div>
                <div id='main-section'>
                    <Route path="/posts" render = {() => <Posts/>}/>
                    <Route path="/register" render = {() => <Register/>}/>
                    <Route path="/register" render = {() => <Login/>}/>
                </div>
            </div>
        </BrowserRouter>
    )
}
ReactDOM.render(<App/>, document.getElementById('posts'));