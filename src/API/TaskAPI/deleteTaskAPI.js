import axios from "axios";
import {deleteTodo} from "../../redux/actions/actionTodo";
import {endLoading, startLoading} from "../../redux/actions/actionLogin";

export const deleteTaskAPI = (id) => {
    return async dispatch => {
        dispatch(startLoading())
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
                dispatch(endLoading())
            }
        } catch (e){
            console.log(e.message)
        }
    }
}