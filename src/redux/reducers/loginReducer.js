import {
    LOGIN,
    LOGIN_STARTED,
    ERR_LOGIN
} from "../actions/actionsType";

const initialState = null

export default function loginReducer(state = initialState, action){
    switch (action.type){
        case LOGIN:
            console.log(state, action.payload)
            return state

    }
}