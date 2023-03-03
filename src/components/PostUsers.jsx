import axios from 'axios';
import React, { useEffect, useState } from 'react';

const PostUsers = ({id}) => {

    const [posts, setPosts] = useState([])


    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        .then((res) => setPosts(res.data))
        .catch((error) => console.log(error.response))
    }, [])

    const deletePost = (id) => {
        const filteredPost = posts.filter(post => post.id !== id)
        setPosts(filteredPost)
    }

    return (
        <div>
            <section>
                {
                    posts.map(post => (
                        <div key={post.id} className="PostCard">
                            <p>{post.title}</p>
                            <button onClick={() => deletePost(post.id)}>Delete</button>
                        </div>
                    ))
                }
            </section>
        </div>
    );
};

export default PostUsers;