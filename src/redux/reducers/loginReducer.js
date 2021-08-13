import {
    LOGIN_SEND,
    LOGIN_STARTED,
    ERR_LOGIN
} from "../actions/actionsType";
import ApiService from "../../API/LoginAPI/LoginAPI";
import {errLogin, sendLogin, startedLogin} from "../actions/actionLogin";

const initialState = null

export const loginRed = (username, password) =>
    async (dispatch) => {

    //     const response = await fetch(
    //         'http://localhost:5000/tasks', {
    //             method: 'GET',
    //             headers: {
    //                 "Content-type": "application/json",
    //                 "Access-Control-Allow-Origin": "*",
    //                 'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, HEAD, OPTIONS',
    //                 'Access-Control-Expose-Headers': '*://localhost:*/*'
    //             }
    // });


    dispatch(startedLogin(true))
        try {
            const response = await ApiService.login(username, password)
            // console.log(response)
            // alert(response.response.body)

        } catch (e) {
            // console.log(e)
        }
    }




const loginReducer = (state = initialState, action) => {
    alert('редьюсер выполняется')
    alert(action.type)
    switch (action.type){
        case LOGIN_SEND:
            console.log(state, action.payload)
            alert(state, action.payload)

            return state

    }
}