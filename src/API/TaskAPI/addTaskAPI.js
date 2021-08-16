import axios from "axios";
import {addTodo} from "../../redux/actions/actionTodo";

export const addTaskAPI = (user, text) => {
    console.log('user: ', user, ' text: ', text)
    return async dispatch => {
        try {
            const response = await axios.post('http://localhost:5000/api/addTask',
                {
                user, text
            })
            if (response.status === 200){
                const id = response.data.id
                dispatch(addTodo({id, user, text, checked: false}))
            }
        } catch (e){
            console.log(e.message)
        }
    }
}