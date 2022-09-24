import React from 'react';

import css from './Post.module.css';
const Post = ({post}) => {
    return (
        <div className={css.post}>
            {JSON.stringify(post)}
        </div>
    );
};

export {Post};