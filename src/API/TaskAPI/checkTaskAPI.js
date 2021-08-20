import axios from "axios";
import {checkTodo} from "../../redux/actions/actionTodo";
import {endLoading, startLoading} from "../../redux/actions/actionLogin";

export const checkTaskAPI = (id) => {
    return async dispatch => {
        dispatch(startLoading())
        try {
            const response = await axios.post('http://localhost:5000/api/check',{
                id
            },
                {
                    headers: {"authorization": localStorage.getItem('authorization')}
                })
            if (response.status === 200){
                dispatch(checkTodo(id))
                dispatch(endLoading())
            }
        } catch (e){
            console.log(e.message)
        }
    }
}