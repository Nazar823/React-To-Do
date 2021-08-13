import "../style.css"
import axios from "axios";
import {Link} from "react-router-dom";
import {registration} from "../../../API/RegistrationAPI/RegistrationAPI";
import {useDispatch} from "react-redux";

function Registration() {
    const dispatch = useDispatch()
    const reg = async (e) => {
        e.preventDefault()
        const fromData = new FormData(e.target)
        if (fromData.get('password') === fromData.get('confPass')){
            dispatch(registration(fromData.get('username'), fromData.get('password'), fromData.get('nickname')))
        } else {
            alert('Подтвердите пароль!')
        }
    }
    return(
        <div className="block">
            <h2>Registration</h2>
            <form onSubmit={reg}>
                <input id="nickName"  name="nickname" className="input" type="text" placeholder="Enter your name"/>
                <input id="mail" name="username" className="input" type="mail" placeholder="Enter your E-mail"/>
                <input id="password" name="password" className="input" type="password" placeholder="Enter your password"/>
                <input id="confirmPassword" name="confPass" className="input" type="password" placeholder="Confirm your password"/>
                <Link to="/login">
                    <button id="regBT">A have account? Login</button>
                </Link>
                <button id="loginBT">Create account</button>
            </form>
        </div>
    )
}

export default Registration;