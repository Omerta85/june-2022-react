import './App.css';
import {Navigate, Route, Routes} from "react-router";
import {Users, Comments, Posts} from "./components";
import Mainlayout from "./layouts/Mainlayout";

function App() {
    return (
        <Routes>
            <Route path={'/'} element={<Mainlayout/>}>
                <Route index element={<Navigate to={'users'}/>}/>
                <Route path={'posts'} element={<Posts/>}/>
                <Route path={'users'} element={<Users/>}/>
                <Route path={'comments'} element={<Comments/>}/>
            </Route>
        </Routes>
    );
}

export default App;