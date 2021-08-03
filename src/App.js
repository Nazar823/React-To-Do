import './App.css';
import {Route, Switch, Redirect, withRouter} from "react-router";
import TaskList from "./Components/TaskList/TaskList";
import Header from "./Components/Header";
import Login from "./Components/Login/Login"
import Registration from "./Components/Login/Registration/Registration";
function App() {
    return (
        <div className="App">
            <Header/>
            <switch>
                <Route path='/registration' component={Registration}/>
                <Route path='/login' component={Login}/>
                <Route path='/TaskList' component={TaskList}/>
                <Redirect from='/' to='/login'/>
            </switch>
        </div>
    );
};


export default withRouter(App);