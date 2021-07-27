import {
    CHECKED_ANY,
    CHECKED_FALSE,
    CHECKED_TRUE
} from "../actions/actionsType";

const initialState = CHECKED_ANY
function filterReducer(state = initialState, action) {
    switch (action.type) {
        case CHECKED_TRUE:
            return "TRUE"
        case CHECKED_FALSE:
            return "FALSE"
        case CHECKED_ANY:
            return "ANY"
        default:
            return state
    }
}
export default filterReducer;