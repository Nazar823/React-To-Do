import './App.css';
import TaskList from "./Components/TaskList/TaskList";
import Header from "./Components/Header";
import Login from "./Components/Login/Login"
import Registration from "./Components/Login/Registration/Registration";
function App() {
    return (
        <div className="App">
            <Header/>
            <Login/>
            {/*<Registration/>*/}
            {/*<TaskList/>*/}
        </div>
    );
};


export default App;