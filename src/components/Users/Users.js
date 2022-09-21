import {useEffect, useState} from 'react';

import {userService} from "../../services";

import User from "../User/User";

const Users = ({setPostsById}) => {

    let [users,setUsers]=useState([]);

    useEffect(()=>{
        userService.getAllUsers().then(({data}) => setUsers(data))
    },[])


    return (
        <div>
            {users.length?users.map((user,index)=><User key={index} user={user} setPostsById={setPostsById}/>):<h1>Loading....</h1>}
        </div>
    );
};

export {Users};