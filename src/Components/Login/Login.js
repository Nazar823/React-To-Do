import "./style.css"

function Login() {
    return(
        <div className="block">
            <h2>Login</h2>
            <form>
                <input id="mail" className="input" type="text" placeholder="Enter your E-mail"/>
                <input id="password" className="input" type="password" placeholder="Enter your password"/>
                <button id="regBT">Registration</button>
                <button id="loginBT">Login</button>
            </form>
        </div>
    )
}

export default Login;