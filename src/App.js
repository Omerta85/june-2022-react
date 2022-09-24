import {Link, Route, Routes} from "react-router-dom";

import './App.css';
import {AlbumsPage, CommentsPage, HelloPost, PostPage, TodosPage} from "./pages";

function App() {
    return (
        <div className="App">
            <header>
                <div>
                   <button><Link to={'/'}>Home</Link></button>
                </div>
                <div>
                    <button><Link to={'/todos'}>Todos</Link></button>
                </div>
                <div>
                    <button><Link to={'/albums'}>Albums</Link></button>
                </div>
                <div>
                    <button><Link to={'/comments'}>Comments</Link></button>
                </div>

            </header>
            <Routes>
                <Route path={'/'} element={<HelloPost/>}/>
                <Route path={'/todos'} element={<TodosPage/>}/>
                <Route path={'/albums'} element={<AlbumsPage/>}/>
                <Route path={'/comments'} element={<CommentsPage/>}/>
                <Route path={'/comments/:id'} element={<PostPage/>}/>


            </Routes>
        </div>
    );
}

export default App;
