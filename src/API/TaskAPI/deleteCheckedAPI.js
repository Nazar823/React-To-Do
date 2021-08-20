import axios from "axios";
import {deleteChecked} from "../../redux/actions/actionTodo";
import {endLoading, startLoading} from "../../redux/actions/actionLogin";

export const deleteCheckedAPI = () => {
    return async dispatch => {
        dispatch(startLoading())
        try {
            const response = await axios.post('http://localhost:5000/api/deleteChecked',
                {},
                {
                    headers: {"authorization": localStorage.getItem('authorization')}
                })
            if (response.status === 200) {
                dispatch(deleteChecked())
                dispatch(endLoading())
            }
        } catch (e){
            console.log(e.message)
        }
    }
}