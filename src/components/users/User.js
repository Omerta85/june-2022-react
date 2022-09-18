import React from "react";
import './User.css';
let User = (props) => {
    let {item:user,lift} = props;

    return (
        <div className={'userContainer'}>

            <div><h2 className='title'>{user.id}.{user.name}</h2>

                <button onClick={()=>{
                    lift(user)
                }}>Show more</button>

            </div>

        </div>
    );
};

export default User;