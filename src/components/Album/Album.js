import React from 'react';

import css from './Album.module.css'
const Album = ({album}) => {
    return (
        <div className={css.album}>
            {JSON.stringify(album)}
        </div>
    );
};

export {Album};