import axios from "axios";
import {
    errLogin,
    invalidAuth,
    sendLogin,
    startedLogin
} from "../../redux/actions/actionLogin";
import {getTasksAPI} from "../TaskAPI/getTasksAPI";

export const login = (username, password) => {
    return async dispatch => {
        try {
            startedLogin()
            const response = await axios.post('http://localhost:5000/api/login',
                {
                    username,
                    password
                })
            if (response.status === 200) {
                console.log('Loginning')
                sendLogin(response.data)
                localStorage.setItem('token', response.data.token)
                localStorage.setItem('user', JSON.stringify(response.data.user))
                dispatch(getTasksAPI(response.data.user.id, response.data.token))
            } else {
                invalidAuth()
            }
        } catch (e) {
            errLogin(e)
            alert(e.message)
            console.log(e)
        }
    }
}