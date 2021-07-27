import {
    CHECKED_ANY,
    CHECKED_FALSE,
    CHECKED_TRUE
} from "./actionsType";

export const checkedTrue = () => {
    return {
        type: CHECKED_TRUE
    }
}
export const checkedFalse = () => {
    return {
        type: CHECKED_FALSE
    }
}
export const checkedAny = () => {
    return {
        type: CHECKED_ANY
    }
}