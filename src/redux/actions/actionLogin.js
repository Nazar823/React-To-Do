import {
    LOGIN_SEND,
    LOGIN_STARTED,
    ERR_LOGIN
} from "./actionsType";
import axios from "axios";

export const login = (username, password) => {
    return async dispatch => {
        try {
            const response = await axios.post('http://localhost:5000/api/login',
                {
                    username,
                    password
                })

        } catch (e) {
            console.log(e)
        }
    }
}
export const startedLogin = () => ({
    type: LOGIN_STARTED,
})
export const sendLogin = (login_data) => ({
    type: LOGIN_SEND,
    payload: {
        ...login_data
    }
})
export const errLogin = (err) => ({
    type: ERR_LOGIN,
    payload: {
        err
    }
})
