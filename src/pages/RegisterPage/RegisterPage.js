import {useForm} from "react-hook-form";
import {authService} from "../../services";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import css from "../LoginPage/loginPage.module.css";

const RegisterPage = () => {
    const {handleSubmit,register} = useForm()
    const [error,setError] = useState(null);
    const navigate = useNavigate();

    const submit = async(user) => {
       try{
           await authService.register(user)
           navigate('/login')
       } catch (e) {
           setError(e.response.data?.username)
       }
    }

    return (
        <div className={css.container}>
        <form onSubmit={handleSubmit(submit)}>
            {error&&<h2>{error}</h2>}
            <div className={css.card}>
            <input type="text" placeholder={'username'} {...register('username')}/>
            <input type="text" placeholder={'password'} {...register('password')}/>
            <button>Register</button>
            </div>
        </form>
        </div>
    );
}
export {RegisterPage};