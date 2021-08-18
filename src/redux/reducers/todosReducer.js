import {
    ADD_TODO,
    CHECK_TODO,
    CHECK_ALL, GET_TODO,
    DELETE_CHECKED_TODO,
    DELETE_TODO
} from "../actions/actionsType";

let initialState = {
    todos: []
}
function todosReducer(state = initialState, action) {
    switch (action.type) {
        case GET_TODO:return{
            ...state,
            todos: action.todos
        }
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.newTodo]
            }
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(task => task.id !== action.id)
            }
        case DELETE_CHECKED_TODO:
            return {
                ...state,
                todos: state.todos.filter(task => !task.checked
                )
            }
        case CHECK_TODO:
            return {
                ...state,
                todos: state.todos.map(task => {
                    if (task.id === action.id){
                        task.checked = !task.checked
                    }
                    return task
                })
            }
        case CHECK_ALL:
            return {
                ...state,
                todos: state.todos.map(task => {
                        task.checked = true
                    return task
                })
            }
        default:
            return state;
    }
}
export default todosReducer;