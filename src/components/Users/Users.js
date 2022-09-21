import React from "react";
import {useEffect, useState} from "react";

import {UserForm} from "../UserForm/UserForm";
import {User} from "../User/User";
import {userService} from "../../services";

const Users = () =>{
    const [users,setUsers] = useState([]);
    useEffect(() => {
        userService.getAll().then(({data})=>setUsers(data))
    }, [])
    return(
        <div>
            <UserForm/>
            <hr/>
            {users.map(user=><User key={user.id} user={user}/>)}
        </div>
    )
}
export {Users};