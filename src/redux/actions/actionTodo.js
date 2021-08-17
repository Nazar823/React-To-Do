import {
    ADD_TODO,
    CHECK_TODO,
    CHECK_ALL,
    DELETE_CHECKED_TODO,
    DELETE_TODO,
    GET_TODO
} from "./actionsType";

export const checkAll = () => {
    return {
        type: CHECK_ALL
    }
}
export const getTodo = (todos) => {
    return {
        type: GET_TODO,
        todos
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