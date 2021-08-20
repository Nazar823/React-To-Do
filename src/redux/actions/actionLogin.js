import {
    LOADING_END,
    LOADING_STARTED,
    ERR_LOGIN,
    INVALID_AUTH,
    NO_AUTH, AUTH
} from "./actionsType";


export const auth = () => ({
    type: AUTH
})
export const noAuth = () => ({
    type: NO_AUTH
})
export const startLoading = () => ({
    type: LOADING_STARTED
})
export const endLoading = () => ({
    type: LOADING_END
})
export const invalidAuth = () => (-{
  type: INVALID_AUTH
})
export const errLogin = (err) => ({
    type: ERR_LOGIN,
    payload: {
        err
    }
})
