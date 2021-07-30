import "../style.css"

function Registration() {
    return(
        <div className="block">
            <h2>Registration</h2>
            <form>
                <input id="nickName" className="input" type="text" placeholder="Enter your name"/>
                <input id="mail" className="input" type="text" placeholder="Enter your E-mail"/>
                <input id="password" className="input" type="password" placeholder="Enter your password"/>
                <input id="confirmPassword" className="input" type="password" placeholder="Confirm your password"/>
                <button id="loginBT">Create account</button>
            </form>
        </div>
    )
}

export default Registration;