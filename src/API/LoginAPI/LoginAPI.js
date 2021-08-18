import axios from "axios";
import {
    errLogin,
    invalidAuth,
    endLogin,
    startedLogin
} from "../../redux/actions/actionLogin";
import {getTasksAPI} from "../TaskAPI/getTasksAPI";

export const login = (username, password) => {
    return async dispatch => {
        try {
            dispatch(startedLogin())
            const response = await axios.post('http://localhost:5000/api/login',
                {
                    username,
                    password
                })
            if (response.status === 200) {
                dispatch(endLogin(response.data))
                localStorage.setItem('authorization', response.data.token)
                dispatch(getTasksAPI())
            } else {
                invalidAuth()
            }
        } catch (e) {
            errLogin(e)
            alert(e.message)
            console.log(e)
        } finally {
            // dispatch()
        }
    }
}