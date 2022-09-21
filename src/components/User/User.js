import css from './User.module.css';
const User = ({user}) => {
   const {id, name, username, email} = user;
  return (
      <div className={css.User}>
         <div>
          <div>id: {id}</div>
          <div>name: {name}</div>
          <div>username: {username}</div>
          <div>email: {email}</div>
         </div>
          <div className={css.tools}>
              <button>Update</button>
              <button>Delete</button>
          </div>
      </div>
  );
};
export {User};