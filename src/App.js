import './App.css';
import TaskList from "./Components/TaskList/TaskList";
import Header from "./Components/Header";
import Login from "./Components/Login/Login"
function App() {
    return (
        <div className="App">
            <Header/>
            {/*<Login/>*/}
            <TaskList/>
        </div>
    );
};


export default App;