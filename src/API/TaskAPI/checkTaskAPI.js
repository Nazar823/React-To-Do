import axios from "axios";
import {checkTodo} from "../../redux/actions/actionTodo";

export const checkTaskAPI = (id) => {
    return async dispatch => {
        try {
            const response = await axios.post('http://localhost:5000/api/check',{
                id
            },
                {
                    headers: {"authorization": localStorage.getItem('authorization')}
                })
            if (response.status === 200){
                dispatch(checkTodo(id))
            }
        } catch (e){
            console.log(e.message)
        }
    }
}