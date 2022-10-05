import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";

import {postsService} from "../services";
import {ADD_POSTS, CHOOSE_POST} from "../actions";

const Posts = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        postsService.getAll().then((res) => dispatch({
            type: ADD_POSTS,
            payload: res.data
        })).then(res => setPosts(res.payload))
    }, [])
    const dispatch = useDispatch()
    console.log(posts);
    return (
        <div className={'parent'}>
            {posts.map(post => (
                <div className={'child'}>
                    <h2>Post:{post.id}</h2>
                    <p>{post.title}</p>
                </div>
            ))}

        </div>
    );
};

export {Posts};