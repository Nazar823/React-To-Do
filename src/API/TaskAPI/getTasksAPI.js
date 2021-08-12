import axios from "axios";

export const getTasks = (user_id, token) => {
    return async dispatch => {
        try {
            user_id = '6113d6e91c05aa5a764fa1d6' //заглушка
            const response = await axios.post('http://localhost:5000/api/tasks',{
                user: user_id
            })
            console.log('FROM REQUEST: ', response.data)
        } catch (e){
            console.log(e.message)
        }
    }
}