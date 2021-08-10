import {LOGIN, LOGIN_STARTED, ERR_LOGIN} from "./actionsType";
const axios = require('axios').default;

export const login = (username, password) => {
    return dispatch => {

        // try {
            console.log('Запрос отправлен')
            const response = axios.get(`http://localhost:5000/api/login?username=${username}&password=${password}`,
        //         , {
        //             username:username,
        //             password:password,
        //         },
        {
                headers: {
                    // 'Access-Control-Allow-Origin': 'http://localhost:5000',
                    "Content-Type": "application/json;charset=utf-8",
                    // "Access-Control-Max-Age": "10000",
                    // "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
                },
            }).then(e => {
                console.log(e)
                debugger
            })
            console.log('Ответ: ',response)
            debugger
        // } catch (err) {
        //     console.log(err.message)
        //     dispatch(errLogin(err))
        // }
        dispatch(response)
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
