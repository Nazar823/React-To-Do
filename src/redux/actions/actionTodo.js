import {
    ADD_TODO,
    CHECK_TODO,
    CHECK_ALL,
    DELETE_CHECKED_TODO,
    DELETE_TODO,
    UPDATE_TODO,
    GET_TODO
} from "./actionsType";
export const updateTodo = () => {
    return {
        type: UPDATE_TODO
    }
}
export const checkAll = () => {
    return {
        type: CHECK_ALL
    }
}
export const getTodo = (todos) => {
    return {
        type: GET_TODO,
        payload: {
            ...todos
        }
    }
}
export const addTodo = (newTodo) => {
    console.log('ADDED TODO: ', newTodo)
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