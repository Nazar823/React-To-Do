import axios from "axios";
import {deleteTodo} from "../../redux/actions/actionTodo";

export const deleteTaskAPI = (id) => {
    return async dispatch => {
        try {
            const response = await axios.post('http://localhost:5000/api/delete',
                {
                    id
                },
                {
                    headers: {"authorization": localStorage.getItem('authorization')}
                })
            if (response.status === 200) {
                dispatch(deleteTodo(id))
            }
        } catch (e){
            console.log(e.message)
        }
    }
}