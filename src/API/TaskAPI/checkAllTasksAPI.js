import axios from "axios";
import {checkAll} from "../../redux/actions/actionTodo";

export const checkAllTasksAPI = () => {
    return async dispatch => {
        try {
            const response = await axios.post('http://localhost:5000/api/checkAll',
                {},
                {
                    headers: {"authorization": localStorage.getItem('authorization')}
                })
            if (response.status === 200) {
                dispatch(checkAll())
            }
        } catch (e){
            console.log(e.message)
        }
    }
}