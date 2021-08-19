import "./style.css"

function Header() {
    function logOut() {
        localStorage.clear()
        window.location.reload()
    }
    const auth = Boolean(localStorage.getItem('authorization'))
    console.log(auth)
    let logOutBt = ""
    if (auth){
        logOutBt = <button id='out' onClick={() => logOut()}>Logout</button>
    }
    return (
        <header className="A pp-header">
            <div>
                {logOutBt}
            </div>
            <div>
                <h1>Your todo list</h1>
            </div>
    </header>
    )
}
export default Header;