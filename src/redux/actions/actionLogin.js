import {LOGIN, LOGIN_STARTED, ERR_LOGIN} from "./actionsType";
import axios from "axios";

export const login = ({username, password}) => {
    return dispatch => {
        axios.post('/login', {
            username,
            password
        })
            .then(res => {
                dispatch(sendLogin(res.data))
            })
            .catch(err => {
               dispatch(errLogin(err.message()))
        })
    }
}
const startedLogin = () => ({
    type: LOGIN_STARTED,
})
const sendLogin = (token, {id, username, nickname}) => ({
    type: LOGIN,
    payload: {
        token,
        id,
        username,
        nickname
    }
})
const errLogin = error => ({
    type: ERR_LOGIN,
    payload: {
        error
    }
})
