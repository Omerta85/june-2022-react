import User from "../user/User";
import {useState} from "react";

export default function Users() {
    let [users,setUsers] = useState([]);

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json())
        .then(value =>{
            setUsers(value);
        });

    return (
        <div>
            {users.map((user, index) =>(<User user = {user} key={index}/>))}

        </div>
    );
}