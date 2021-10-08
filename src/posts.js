import React, { useEffect, useState } from 'react';

const api = 'https://strangers-things.herokuapp.com/api/2107-CSU-RM-WEB-PT/';


const Posts = () => {
    const[posts, setPosts] = useState([]);
    useEffect(() => {
        // Does this have to be inside an async function?
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
export default Posts;