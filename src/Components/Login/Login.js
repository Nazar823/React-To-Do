import "./style.css"
import {Link} from "react-router-dom"
import {useDispatch} from "react-redux";
import {login} from "../../API/LoginAPI/LoginAPI";
import {getTasksAPI} from "../../API/TaskAPI/getTasksAPI";



function Login() {
    const dispatch = useDispatch()
    const thunkLog = (e) => {
        e.preventDefault()
        const fromData = new FormData(e.target)
        dispatch(login(fromData.get('username'), fromData.get('password')))
    }
    return(
        <div className="block">
            <h2>Login</h2>
            <form onSubmit={thunkLog}>
                <input id="mail" name='username' required={true}
                       className="input" type="text" placeholder="Enter your E-mail"/>
                <input id="password" name='password'   required={true}
                       className="input" type="password" placeholder="Enter your password"/>
                <Link to="/registration">
                    <button id="regBT">Registration</button>
                </Link>
                <button id="loginBT">Login</button>
            </form>
        </div>
    )
}

export default Login;