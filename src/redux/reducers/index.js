import todosReducer from "./todosReducer";
import filterReducer from "./filterReducer";
import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";


const rootStore = combineReducers({
    todosReducer,
    filterReducer
})

export default createStore(rootStore, composeWithDevTools(applyMiddleware()))