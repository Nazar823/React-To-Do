import {
    LOGIN,
    LOGIN_STARTED,
    ERR_LOGIN
} from "../actions/actionsType";

const initialState = null

export default function loginReducer(state = initialState, action){
    alert('редьюсер выполняется')
    alert(action.type)
    switch (action.type){
        case LOGIN:
            console.log(state, action.payload)
            alert(state, action.payload)

            return state

    }
}