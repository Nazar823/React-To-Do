import {
    ADD_TODO,
    CHECK_TODO,
    CHECK_ALL,
    DELETE_CHECKED_TODO,
    DELETE_TODO, UPDATE_TODO
} from "../actions/actionsType";
import {getTasksAPI} from "../../API/TaskAPI/getTasksAPI";

let initialState = []
function todosReducer(state = initialState, action) {
    state = JSON.parse(localStorage.getItem('tasks'))
    console.log('LOCAL: ', initialState)
    console.log('SERVER: ', getTasksAPI())
    switch (action.type) {
        case UPDATE_TODO:
            return state.filter(task => true)
        case ADD_TODO:
            return [
                ...state,
                action.newTodo
            ]
        case DELETE_TODO:
            return state.filter(task =>  task.id !== action.id)
        case DELETE_CHECKED_TODO:
            return state.filter(task => !task.checked)
        case CHECK_TODO:
            return state.map(task => {
                if (task.id === action.id){
                    task.checked = !task.checked
                }
                return task
            })
        case CHECK_ALL:
            return state.map(task => {
                task.checked = true
                return task
            })
        default:
            return state;
    }
}
export default todosReducer;