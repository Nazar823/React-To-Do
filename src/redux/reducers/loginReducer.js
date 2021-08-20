import {
    LOADING_STARTED,
    LOADING_END,
    AUTH,
    NO_AUTH
} from "../actions/actionsType";

let initialState = {
    loading: false,
    auth: false
}
function loginReducer(state = initialState, action) {
switch (action.type) {
    case LOADING_STARTED:
        return {
            ...state,
            loading: true
        }
    case LOADING_END:
        return {
            ...state,
            loading: false
        }
    case AUTH:
        return {
            ...state,
            auth: true
        }
    case NO_AUTH:
        return {
            ...state,
            auth: false
        }
    default:
        return state;
    }
}
export default loginReducer;