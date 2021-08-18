import todosReducer from "./todosReducer";
import filterReducer from "./filterReducer";
import loginReducer from "./loginReducer"
import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";


const rootStore = combineReducers({
    todosReducer,
    filterReducer,
    loginReducer
})

export default createStore(rootStore, composeWithDevTools(applyMiddleware(thunk)))