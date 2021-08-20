import "./style.css"
import AboutUs from "../AboutUs/aboutUs";
import {Link} from "react-router-dom";

function Header() {
    function logOut() {
        localStorage.clear()
        window.location.reload()
    }
    const auth = Boolean(localStorage.getItem('authorization'))
    const aboutUsBt = (<Link to='aboutUs'>
            <button id='about' onClick={() => AboutUs()}>About us</button>
        </Link>
    )
    let logOutBt = ""
    if (auth){
        logOutBt = <button id='out' onClick={() => logOut()}>Logout</button>
    }
    return (
        <header className="A pp-header">
            <div>
                {logOutBt}{aboutUsBt}
            </div>
            <div>
                <h1>Your todo list</h1>
            </div>
    </header>
    )
}
export default Header;