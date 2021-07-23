import './App.css';
import TaskList from "./Components/TaskList/TaskList";
import Header from "./Components/Header";
import test from "./test/test"
function App() {
    return (
        <div className="App">
            <Header/>
            <TaskList/>
            <test/>
        </div>
    );
};


export default App;