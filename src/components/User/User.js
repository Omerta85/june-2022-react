import css from './User.module.css';
const User = ({user:{name,id},setPostsById}) => {
    return (
        <div>
            <div className={css.User}><h2>{name}</h2></div>
            <div className={css.tools}><button onClick={()=>setPostsById(id)}>Click me</button></div>
        </div>
    );
};

export default User;