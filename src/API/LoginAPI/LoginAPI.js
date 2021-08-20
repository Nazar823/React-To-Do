import axios from "axios";
import {
    errLogin,
    invalidAuth,
    endLoading,
    startLoading,
    auth,
    noAuth
} from "../../redux/actions/actionLogin";

export const login = (username, password) => {
    return async dispatch => {
        try {
            dispatch(startLoading())
            const response = await axios.post('http://localhost:5000/api/login',
                {
                    username,
                    password
                })
            if (response.status === 200) {
                dispatch(auth())
                localStorage.setItem('authorization', response.data.token)
                // dispatch(endLoading())
                window.location.reload()
            } else {
                dispatch(endLoading())
                dispatch(invalidAuth())
                dispatch(noAuth())
            }
        } catch (e) {
            dispatch(noAuth())
            dispatch(endLoading())
            dispatch(errLogin(e))
            alert(e.message)
            console.log(e)
        } finally {
            // dispatch()
        }
    }
}