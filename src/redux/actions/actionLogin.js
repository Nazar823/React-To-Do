import {
    LOGIN_END,
    LOGIN_STARTED,
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
export const startedLogin = () => ({
    type: LOGIN_STARTED
})
export const endLogin = () => ({
    type: LOGIN_END
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
