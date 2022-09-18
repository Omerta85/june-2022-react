import './App.css';
import Users from "./Components/users/Users";

function App() {
    let classNameItem = 'card';
    return(
        <div className={classNameItem}>
            <div>
                <Users />
            </div>
        </div>
    )
}

export default App;
