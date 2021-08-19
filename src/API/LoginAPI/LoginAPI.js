import axios from "axios";
import {
    errLogin,
    invalidAuth,
    endLogin,
    startedLogin,
    auth,
    noAuth
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
                dispatch(auth())
                dispatch(endLogin(response.data))
                localStorage.setItem('authorization', response.data.token)
                window.location.reload()
            } else {
                dispatch(invalidAuth())
                dispatch(noAuth())
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