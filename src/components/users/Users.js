import React from "react";
import {useState, useEffect} from "react";
import User from "./User";
import axios from "axios";
import "./Users.css";

function Users (){
    let [users, setUsers] = useState([]);
    let [user, setUser] = useState()



    const lift = (id) => {
        setUser(id);
    }

    // useEffect(()=>{
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then(response => response.json())
    //         .then(data => (
    //             setUsers(data)
    //         ));
    // })

    const baseUrl = 'https://jsonplaceholder.typicode.com/users';

    React.useEffect(() => {
        axios.get(baseUrl).then((response) => {
            setUsers(response.data);
        });
    }, []);

    return (<div className={'styles'}>

            <hr/>
            <h3 className='popup'>{user?.username + ' --- ' + user?.email}</h3>
            <hr/>


            {users.map((value => (<User
                item={value}
                key={value.id}
                lift ={lift}
            />)))}
        </div>
    );
}

export default Users;