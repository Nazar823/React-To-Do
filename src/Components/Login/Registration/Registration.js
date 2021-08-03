import "../style.css"
import axios from "axios";
import {Link} from "react-router-dom";

function Registration() {
    const reg = async (e) => {
        e.preventDefault()
        const fromData = new FormData(e.target)
        await axios.post('/registration', {
            username: fromData.get('username'),
            password: fromData.get('password'),
            nickname: fromData.get('nickname')
        },
            {
                'Access-Control-Allow-Origin':"*"
            }
        ).then(res => console.log(res))
    }
    return(
        <div className="block">
            <h2>Registration</h2>
            <form onSubmit={reg}>
                <input id="nickName"  name="nickname" className="input" type="text" placeholder="Enter your name"/>
                <input id="mail" name="username" className="input" type="mail" placeholder="Enter your E-mail"/>
                <input id="password" name="password" className="input" type="password" placeholder="Enter your password"/>
                <input id="confirmPassword" className="input" type="password" placeholder="Confirm your password"/>
                <Link to="/login">
                    <button id="regBT">A have account? Login</button>
                </Link>
                <button id="loginBT">Create account</button>
            </form>
        </div>
    )
}

export default Registration;