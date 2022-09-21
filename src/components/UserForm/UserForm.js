import {useForm} from "react-hook-form";


const UserForm = () => {
    const {register, handleSubmit, reset, formState:{errors,isValid}, setValue} = useForm({mode:'all'});
    const submit = (data) => {
        console.log(data);
    };
    return(
        <form onSubmit={handleSubmit(submit)} onChange={()=>console.log(errors)}>
            <input type="text" placeholder={'Name'} {...register('Name', {required:true, minLength:{value:3, message:'min 3 ch'}})}/>
            {errors.name&&<span>{errors.name.message}</span>}
            <input type="text" placeholder={'Username'} {...register('Username', {required:true, minLength:{value:3, message:'min 3 ch'}})}/>
            <input type="text" placeholder={'Email'} {...register('Email',{required:true, minLength:{value:3, message:'min 3 ch'}})}/>
            <button  disabled={!isValid}>Save</button>
        </form>
    );
};
export {UserForm}