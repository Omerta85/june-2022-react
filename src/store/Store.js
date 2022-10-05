import {combineReducers, createStore} from "redux";

import {userReducer, postReducer, commentReducer} from "../reducers";

const reducer = combineReducers({userReducer, postReducer, commentReducer})
const store = createStore(reducer)

export {store};