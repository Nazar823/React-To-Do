import axios from "axios";
import {deleteChecked} from "../../redux/actions/actionTodo";

export const deleteCheckedAPI = () => {
    return async dispatch => {
        try {
            const response = await axios.post('http://localhost:5000/api/deleteChecked',
                {},
                {
                    headers: {"authorization": localStorage.getItem('authorization')}
                })
            if (response.status === 200) {
                dispatch(deleteChecked())
            }
        } catch (e){
            console.log(e.message)
        }
    }
}