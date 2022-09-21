import {userService} from "../../services";
import css from './User.module.css'


const Comment = ({comment, setComments}) => {
    const {id,postId, name, body, email} = comment;
    const deleteComment = () => {
        userService.deleteById(id).then(() =>{
            setComments(comments => {
                const index = comments.findIndex(value => value.id === id);
                comments.splice(index, 1)
                return [...comments]
            });
        })
    };

    return (
        <div className={css.User}>
            <div>
                <div>id:{id}</div>
                <div>name:{name}</div>
                <div>body:{body}</div>
                <div>email:{email}</div>
            </div>
            <div className={css.tools}>
                <button>Update</button>
                <button onClick={() => deleteComment()}>Delete</button>
            </div>
        </div>

    );
};
export {Comment};