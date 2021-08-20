import axios from "axios";
import {getTodo} from "../../redux/actions/actionTodo";
import {endLoading, startLoading} from "../../redux/actions/actionLogin";

export const getTasksAPI = () => {
    return async dispatch => {
        dispatch(startLoading())
        try {
            const response = await axios.post('http://localhost:5000/api/tasks',
                {},
                {
                    headers: {"authorization": localStorage.getItem('authorization')}
                })

            dispatch(getTodo(response.data))
            dispatch(endLoading())
        } catch (e){
            console.log(e.message)
        }
    }
}