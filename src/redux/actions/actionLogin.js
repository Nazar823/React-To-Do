import {
    LOGIN_SEND,
    LOGIN_STARTED,
    ERR_LOGIN,
    INVALID_AUTH
} from "./actionsType";

export const startedLogin = () => ({
    type: LOGIN_STARTED,
})
export const sendLogin = (login_data) => ({
    type: LOGIN_SEND,
    payload: {
        ...login_data
    }
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
