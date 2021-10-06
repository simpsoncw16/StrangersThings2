import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

const api = 'https://strangers-things.herokuapp.com/api/2107-CSU-RM-WEB-PT/';


const App = () => {
    const[posts, setPosts] = useState([]);

    useEffect(() => {
        const getPosts = async() => {
            const response = await fetch(api+'posts');
            const postData = await response.json();
            setPosts(postData.data.posts);
        }
        getPosts();
    })

    return <>
        {posts.map((post, idx) => <div key={idx}>
            <h2>{post.title}</h2>
            <p>{post.description}</p>
            <p>{post.price}</p>
            <p>{post.author.username}</p>
        </div>
        )}
    </>
}
ReactDOM.render(<App/>, document.getElementById('posts'));