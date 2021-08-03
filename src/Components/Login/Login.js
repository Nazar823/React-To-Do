import "./style.css"
import axios from "axios";
import {Link} from "react-router-dom"

function Login() {
    const log = async (e) => {
        e.preventDefault()
        const fromData = new FormData(e.target)
        await axios.post('/login', {
            username: fromData.get('mailN'),
            password: fromData.get('pass')
        },
            {
                'Access-Control-Allow-Origin':"*"
            }
        ).then(res => console.log(res))
    }


    return(
        <div className="block">
            <h2>Login</h2>
            <form onSubmit={log}>
                <input id="mail" name='mailN' className="input" type="text" placeholder="Enter your E-mail"/>
                <input id="password" name='pass' className="input" type="password" placeholder="Enter your password"/>
                <Link to="/registration">
                    <button id="regBT">Registration</button>
                </Link>
                <button id="loginBT">Login</button>
            </form>
        </div>
    )
}

export default Login;