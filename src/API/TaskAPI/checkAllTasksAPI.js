import axios from "axios";
import {checkAll} from "../../redux/actions/actionTodo";

export const checkAllTasksAPI = () => {
    const user = JSON.parse(localStorage.getItem('user')).id
    return async dispatch => {
        try {
            const response = await axios.post('http://localhost:5000/api/checkAll',{
                user
            })
            if (response.status === 200) {
                checkAll()
            }
        } catch (e){
            console.log(e.message)
        }
    }
}