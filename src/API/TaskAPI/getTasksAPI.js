import axios from "axios";
import {getTodo} from "../../redux/actions/actionTodo";

export const getTasksAPI = () => {
    return async dispatch => {
        try {
            const response = await axios.post('http://localhost:5000/api/tasks',
                {},
                {
                    headers: {"authorization": localStorage.getItem('authorization')}
                })

            dispatch(getTodo(response.data))
        } catch (e){
            console.log(e.message)
        }
    }
}