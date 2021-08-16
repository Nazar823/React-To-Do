import axios from "axios";
import {deleteChecked} from "../../redux/actions/actionTodo";

export const deleteCheckedAPI = () => {
    const user = JSON.parse(localStorage.getItem('user')).id
    return async dispatch => {
        try {
            const response = await axios.post('http://localhost:5000/api/deleteChecked',{
                user
            })
            if (response.status === 200) {
                deleteChecked()
            }
        } catch (e){
            console.log(e.message)
        }
    }
}