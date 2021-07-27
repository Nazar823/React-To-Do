import {
    ADD_TODO,
    CHECK_TODO,
    DELETE_CHECKED_TODO,
    DELETE_TODO
} from "../actions/actionsType";

const initialState = [
    {id: 0, text: "text sample", checked: false},
    {id: 1, text: "second", checked: true},
    {id: 2, text: "hello world", checked: false}
]

function todosReducer(state = initialState, action) {
    switch (action.type) {
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
            let Arr = state
            for (let i = 0; i < Arr.length; i++) {
                if (Arr[i].id === action.id) {
                    Arr[i].checked = !Arr[i].checked
                }
            }
            return Arr
        default:
            return state;
    }
}

export default todosReducer;
