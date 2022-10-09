import {useDispatch} from "react-redux";

import {userActions} from "../../redux";


const User = ({user}) => {
    const dispatch = useDispatch();

    const {id, name, username, email} = user;

    return (
        <div>
            <div>id:{id}</div>
            <div>name: {name}</div>
            <div>username:{username}</div>
            <div>email:{email}</div>
            <button onClick={()=>dispatch(userActions.setCurrentUser(user))}>select</button>
            <button onClick={()=>dispatch(userActions.getById({id}))}>getFromApi</button>
            <button onClick={()=>dispatch(userActions.deleteById(id))}>Delete</button>
        </div>
    );
}
export {User};