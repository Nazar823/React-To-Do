import todosReducer from "./todosReducer";
import filterReducer from "./filterReducer";
import {combineReducers, createStore} from "redux";


const rootStore = combineReducers({
    todosReducer,
    filterReducer
})

export default createStore(rootStore)