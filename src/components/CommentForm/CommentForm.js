import {useForm} from "react-hook-form";
import {userService} from "../../services";

const CommentForm = ({setComments}) => {

    const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm({mode:'all'});
    const submit = async (comment) => {
        const {data} = await userService.create(comment);
        setComments(comments =>[...comments,data])
        reset()
    };


    return (
        <form onSubmit={handleSubmit(submit)} >
            <input type = 'text' placeholder={'name'} {...register("name", {required:true, minLength:{value:2,message:'min 2 ch'}})}/>
            {errors.name&&<span>{errors.name.message}</span>}
            <input type = 'text' placeholder={'body'} {...register("body")}/>
            <input type = 'text' placeholder={'email'} {...register("email")}/>
            <button disabled={!isValid}>Save</button>
        </form>
    );
};

export {CommentForm};