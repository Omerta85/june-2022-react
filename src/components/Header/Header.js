import css from './Headar.module.css'
import{useNavigate} from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    return (
        <div className={css.Header}>
            <h1>CARS</h1>
            <img src="https://thumbsnap.com/i/chJcffCe.png" alt="logo"/>
            <div className={css.btns}>
                <button onClick={()=>navigate('/login')}>Login</button>
                <button onClick={()=>navigate('/register')}>Register</button>
            </div>
        </div>

    );
}
export {Header};