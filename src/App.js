import './App.css';
import {Route, Switch, Redirect, withRouter} from "react-router";
import TaskList from "./Components/TaskList/TaskList";
import Header from "./Components/Header";
import Login from "./Components/Login/Login"
import Registration from "./Components/Login/Registration/Registration";
import PrivateRoute from "./redux/Routers/privateRouter"
import {Loader} from "./Components/TaskList/Loader/Loader";
import {useSelector} from "react-redux";

function App() {
    const {loading} = useSelector(state => state.loginReducer)
    return (
        <div className="App">
            <Header/>
            <Switch>
                <PrivateRoute exact path='/registration' auth={false} component={Registration}/>
                <PrivateRoute exact to='/tasks' auth={false} path='/login' component={Login}/>
                <PrivateRoute exact to='/login' auth={true} exact path='/tasks' component={TaskList}/>
                <Redirect from='/' to='/login'/>
            </Switch>
            {loading && (<Loader/>)}
        </div>
    );
};


export default withRouter(App);