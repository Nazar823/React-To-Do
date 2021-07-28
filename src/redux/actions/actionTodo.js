import {
    ADD_TODO,
    CHECK_TODO,
    DELETE_CHECKED_TODO,
    DELETE_TODO,
    UPDATE_TODO
} from "./actionsType";
export const updateTodo = () => {
    return {
        type: UPDATE_TODO
    }
}
export const addTodo = (newTodo) => {
    return {
        type: ADD_TODO,
        newTodo
    }
}
export const deleteTodo = (id) => {
    return{
        type: DELETE_TODO,
        id
    }
}
export const deleteChecked = () => {
    return {
        type: DELETE_CHECKED_TODO
    }
}
export const checkTodo = (id) => {
    return {
        type: CHECK_TODO,
        id
    }
}