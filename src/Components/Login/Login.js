import "./style.css"
import {Link} from "react-router-dom"
import {login} from "../../redux/actions/actionLogin";
import {useDispatch} from "react-redux";


function Login() {
    const dispatch = useDispatch()
    const thunkLog = (e) => {
        // const fromData = new FormData(e.target)
        dispatch(login("dmitr.ry%40yandex.ru", "CORS"))
    }

    return(
        <div className="block">
            <h2>Login</h2>
            {/*<form onSubmit={thunkLog}>*/}
            <form>
                <input id="mail" name='username' className="input" type="text" placeholder="Enter your E-mail"/>
                <input id="password" name='password' className="input" type="password" placeholder="Enter your password"/>
                {/*<Link to="/registration">*/}
                {/*    <button id="regBT">Registration</button>*/}
                {/*</Link>*/}
                <button id="loginBT" onClick={thunkLog}>Login</button>
            </form>
        </div>
    )
}

export default Login;