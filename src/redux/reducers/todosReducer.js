import {
    ADD_TODO,
    CHECK_TODO,
    DELETE_CHECKED_TODO,
    DELETE_TODO, UPDATE_TODO
} from "../actions/actionsType";

const initialState = [
    {id: 0, text: "Text sample", checked: false},
    {id: 1, text: "Second", checked: false},
    {id: 2, text: "Hello world", checked: false},
    {id: 3, text: "Test", checked: false}
]

function todosReducer(state = initialState, action) {
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
        default:
            return state;
    }
}

export default todosReducer;
