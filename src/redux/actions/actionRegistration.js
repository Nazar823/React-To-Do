import axios from "axios";
import {ERR_REG, REGISTRATION} from "./actionsType";

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
        } catch (err){
            console.log(err.message)
        }

    }
}
const errLogin = error => ({
    type: ERR_REG,
    payload: {
        error
    }
})
