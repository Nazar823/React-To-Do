import axios from "axios";
import {getTodo} from "../../redux/actions/actionTodo";

export const getTasksAPI = (user, token) => {
    return async dispatch => {
        try {
            const response = await axios.post('http://localhost:5000/api/tasks',
                {
                user
            })
            getTodo(response.data)
            localStorage.setItem('tasks', JSON.stringify(response.data))
        } catch (e){
            console.log(e.message)
        }
    }
}