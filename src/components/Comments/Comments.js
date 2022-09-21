import {useEffect, useState} from "react";
import {userService} from "../../services";
import {CommentForm} from "../CommentForm/CommentForm";
import {Comment} from "../Comment/Comment";

const Comments = () => {
    const [comments, setComments] = useState([]);

    useEffect(()=>{
        userService.getAll().then(({data})=>setComments(data))
    },[])

    return (
        <div>
            <CommentForm setComments = {setComments}/>
            <hr/>
            {comments.map(comment=><Comment key={comment.id} comment={comment} setComments={setComments}/>)}
        </div>
    );
};

export {Comments};