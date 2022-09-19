import './App.css';
import Launches from "./Components/SpaceX/Launches";

function App() {
    let classNameItem = 'card';
    return(
        <div className={classNameItem}>
            <div className={'title'}>
                <h1>SpaceX from Ukraine</h1>
            </div>
            <div className='info'>
                <Launches/>
            </div>
        </div>
    )
}

export default App;
