import axios from "axios";
import {addTodo, getTodo} from "../../redux/actions/actionTodo";

export const getTasksAPI = (user, token) => {
    return async dispatch => {
        try {
            const response = await axios.post('http://localhost:5000/api/tasks',
                {
                user: JSON.parse(localStorage.getItem('user')).id
            },
                {
                    headers: {"authorization": localStorage.getItem('token')}
                })

            dispatch(getTodo(response.data))
        } catch (e){
            console.log(e.message)
        }
    }
}