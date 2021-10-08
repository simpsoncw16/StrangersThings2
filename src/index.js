import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Posts from './posts';
import Register from './register';

const api = 'https://strangers-things.herokuapp.com/api/2107-CSU-RM-WEB-PT/';


const App = () => {
    return (
        <BrowserRouter>
            <div id='container'>
                <div id='navbar'>
                    <Link to="/posts">Posts</Link>
                    <Link to="/register">Registration</Link>
                </div>
                <div id='main-section'>
                    <Route path="/posts" render = {() => <Posts/>}/>
                    <Route path="/register" render = {() => <Register/>}/>
                </div>
            </div>
        </BrowserRouter>
    )
}
ReactDOM.render(<App/>, document.getElementById('posts'));