import axios from "axios";

export const registration = (username, password, nickname) => {
    return async dispatch => {
        try {
            const response = await axios.post('http://localhost:5000/api/registration', {
                username:username,
                password:password,
                nickname:nickname
            }, {
                'Access-Control-Allow-Origin': '*',
                "Content-Type": "application/json",
            })
            console.log(response.data.payload)
        } catch (err){
            console.log(err.message)
        }
    }
}
