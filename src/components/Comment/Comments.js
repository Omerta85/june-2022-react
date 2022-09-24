import React from 'react';
import {Link} from "react-router-dom";

import css from "./Comment.module.css"
const Comments = ({comment}) => {
    return (
        <div>
            <div className={css.comment}>
                {JSON.stringify(comment)}
            </div>
            <button className={css.button}><Link to={comment.postId.toString()}>Post info</Link></button>
        </div>
    );
};

export {Comments};