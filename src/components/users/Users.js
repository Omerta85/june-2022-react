import User from "../user/User";
import {useEffect, useState} from "react";
import {getUsers, getUser} from "../../services/user.api.service"
import {getUsersAxios} from "../../services/user.api.axios.service";
import {logDOM} from "@testing-library/react";
export default function Users() {
    let [users,setUsers] = useState([]);
    let [user, setUser] = useState(null);

    const lift = (obj) => {
        setUser(obj)
    }

    // useEffect(() =>{
    //         fetch('https://jsonplaceholder.typicode.com/users')
    //             .then(value => value.json())
    //             .then(value =>{
    //                 setUsers(value);
    //                 console.log(value);
    //             });
    //     },
    //     [])

    useEffect(() =>{
            // getUsers().then(value => setUsers(value));
        getUsersAxios().then(value => setUsers(value.data))
        },
        [])




    return (<div>
        <hr/>
            {/*{user && <div>{JSON.stringify(user)}</div>}*/}
            {/*{user? <div>sdfksjndfhgk</div> : <div>132154545</div>}*/}
            {/*{JSON.stringify(user)}*/}
            <h3>{user?.username}</h3>
        <hr/>

            {users
                .map((user, index) =>(<User
                    user = {user}
                    key={index}
                    lift = {lift}/>))}
        </div>
    );
}