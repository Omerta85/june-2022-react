import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {usersServices} from "../services";
import {ADD_USERS, CHOOSE_USER} from "../actions";

const Users = () => {

    const [users,setUsers] = useState([])
    let state = useSelector(state => state)
    let dispatch = useDispatch()

    useEffect(() => {
        usersServices.getAll().then(res => dispatch({type: ADD_USERS, payload: res.data})).then(res=>setUsers(res.payload))
    }, [])

    return (
        <div className={'parent'}>
            {users.map(user => (
                <div className={'child'}>
                    <h2>Id: {user.id}</h2>
                    <p>Name: {user.name}</p>
                    <p>UserName: {user.username}</p>
                </div>
            ))}
        </div>
    );
};

export  {Users};