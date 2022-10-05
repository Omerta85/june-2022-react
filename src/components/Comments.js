import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";

import {commentService} from "../services";
import {ADD_COMMENTS} from "../actions";

const Comments = () => {
    const [comments, setComments] = useState([])

    const dispatch = useDispatch()

    useEffect(() => {
        commentService.getAll().then(res => dispatch({type: ADD_COMMENTS, payload: res.data})).then(res=>setComments(res.payload))
    }, [])
    return (
        <div className={'parent'}>
            {comments.map(comment=>(
                <div className={'child'}>
                    <h2>{comment.id}</h2>
                    <h3>{comment.name}</h3>
                    <p>{comment.body}</p>
                </div>
            ))}
        </div>
    );
};

export {Comments};