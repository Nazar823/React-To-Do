import axios from "axios";
import {checkAll} from "../../redux/actions/actionTodo";
import {endLoading, startLoading} from "../../redux/actions/actionLogin";

export const checkAllTasksAPI = () => {
    return async dispatch => {
        dispatch(startLoading())
        try {
            const response = await axios.post('http://localhost:5000/api/checkAll',
                {},
                {
                    headers: {"authorization": localStorage.getItem('authorization')}
                })
            if (response.status === 200) {
                dispatch(checkAll())
                dispatch(endLoading())
            }
        } catch (e){
            console.log(e.message)
        }
    }
}