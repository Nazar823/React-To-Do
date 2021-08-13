import axios from "axios";
import {checkTodo} from "../../redux/actions/actionTodo";

export const checkTaskAPI = (id, token) => {
    if (id === undefined){
        let user = localStorage.getItem('user')
        id = user.id
    }
    return async dispatch => {
        try {
            const response = await axios.post('http://localhost:5000/api/check',{
                id
            })
            checkTodo(id)
            // localStorage.setItem('tasks', JSON.stringify(response.data))
        } catch (e){
            console.log(e.message)
        }
    }
}