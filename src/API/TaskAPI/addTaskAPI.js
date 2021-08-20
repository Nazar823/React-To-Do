import axios from "axios";
import {addTodo} from "../../redux/actions/actionTodo";
import {endLoading, startLoading} from "../../redux/actions/actionLogin";

export const addTaskAPI = (text) => {
    return async dispatch => {
        dispatch(startLoading())
        try {
            const response = await axios.post('http://localhost:5000/api/addTask',
                {text},
                {
                    headers: {"authorization": localStorage.getItem('authorization')}
                })
            if (response.status === 200){
                const id = response.data.id
                dispatch(addTodo({id, text, checked: false}))
                dispatch(endLoading())
            }
        } catch (e){
            console.log(e.message)
        }
    }
}