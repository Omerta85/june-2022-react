import  css from './Post.module.css';

const Post = ({post:{body,title}}) => {
    return (
        <div className={css.Post}>
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
    );
};

export default Post;