import './App.css';
import {Route, Switch, Redirect, withRouter} from "react-router";
import TaskList from "./Components/TaskList/TaskList";
import Header from "./Components/Header";
import Login from "./Components/Login/Login"
import Registration from "./Components/Login/Registration/Registration";
import PrivateRoute from "./redux/Routers/privateRouter"
import {Loader} from "./Components/Loader/Loader";
import {useSelector} from "react-redux";
import AboutUs from "./Components/AboutUs/aboutUs";

function App() {
    const {loading} = useSelector(state => state.loginReducer)
    return (
        <div className="App">
            <Header/>
            {loading && (<Loader/>)}
            <Switch>
                <PrivateRoute exact path='/registration' auth={false} component={Registration}/>
                <PrivateRoute exact to='/tasks' auth={false} path='/login' component={Login}/>
                <PrivateRoute exact to='/login' auth={true} exact path='/tasks' component={TaskList}/>
                <Route path='/aboutUs' component={AboutUs}/>
                <Redirect from='/' to='/login'/>
            </Switch>
        </div>
    );
};


export default withRouter(App);