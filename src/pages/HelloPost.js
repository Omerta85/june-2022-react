import React from 'react';

import css from './CSSPages/HelloPost.module.css'

const HelloPost = () => {
    return (
        <div className={css.hello}>
            <h1>Hello   Post</h1>
        </div>
    );
};

export {HelloPost};